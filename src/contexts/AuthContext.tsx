import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { authAPI } from '../api';
import { useProfileStore } from '../stores/profileStore';
import type { AuthTokens } from '../api/auth';

interface AuthContextType {
  anonymousToken: string | null;
  userToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (tokens: AuthTokens) => void;
  logout: () => void;
  refreshUserToken: () => Promise<void>;
  refreshAnonymousToken: () => Promise<void>;
  handleTokenError: (error: any) => Promise<boolean>;
}

// Helper function to decode JWT and check expiration
const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000; // Convert to milliseconds
    const now = Date.now();
    // Add 5 minute buffer - refresh if token expires in less than 5 minutes
    return exp < (now + 5 * 60 * 1000);
  } catch (error) {
    console.error('Error decoding token:', error);
    return true; // If we can't decode, assume it's expired
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [anonymousToken, setAnonymousToken] = useState<string | null>(null);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = !!userToken;

  const refreshAnonymousToken = async () => {
    try {
      setError(null);
      
      const data = await authAPI.getAnonymousToken();
      
      if (data.token) {
        setAnonymousToken(data.token);
        localStorage.setItem('AnonymToken', data.token);
      } else {
        throw new Error('No token received from API');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get anonymous token';
      setError(errorMessage);
      console.error('Error getting anonymous token:', err);
    }
  };

  const refreshUserToken = async () => {
    if (!refreshToken) return;
    
    try {
      setError(null);
      
      const tokens = await authAPI.refreshToken(refreshToken);
      
      setUserToken(tokens.access);
      setRefreshToken(tokens.refresh);
      localStorage.setItem('userToken', tokens.access);
      localStorage.setItem('refreshToken', tokens.refresh);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to refresh token';
      setError(errorMessage);
      console.error('Error refreshing token:', err);
      // If refresh fails, logout user
      logout();
    }
  };

  const login = (tokens: AuthTokens) => {
    setUserToken(tokens.access);
    setRefreshToken(tokens.refresh);
    localStorage.setItem('userToken', tokens.access);
    localStorage.setItem('refreshToken', tokens.refresh);
  };

  const handleTokenError = async (error: any) => {
    // Check if it's a token validation error
    if (error?.code === 'token_not_valid' || error?.message?.includes('Token is invalid or expired')) {
      console.log('Token validation error detected, attempting refresh...');
      try {
        await refreshUserToken();
        return true; // Token was refreshed successfully
      } catch (refreshError) {
        console.error('Failed to refresh token after error:', refreshError);
        return false; // Token refresh failed
      }
    }
    return false; // Not a token error
  };

  const logout = () => {
    setUserToken(null);
    setRefreshToken(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('refreshToken');
    // Also remove old format tokens
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    // Clear profile data
    useProfileStore.getState().clearProfile();
  };

  useEffect(() => {
    const initializeAuth = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Check for stored user tokens first (check both naming conventions)
        const storedUserToken = localStorage.getItem('userToken') || localStorage.getItem('access_token');
        const storedRefreshToken = localStorage.getItem('refreshToken') || localStorage.getItem('refresh_token');
        
        if (storedUserToken && storedRefreshToken) {
          setUserToken(storedUserToken);
          setRefreshToken(storedRefreshToken);
          
          // Store in consistent format
          localStorage.setItem('userToken', storedUserToken);
          localStorage.setItem('refreshToken', storedRefreshToken);
          
          // Verify token is still valid
          try {
            await authAPI.checkTokenAccess(storedUserToken);
          } catch (error) {
            console.warn('Token validation failed, attempting refresh:', error);
            // Token is invalid, try to refresh
            try {
              const tokens = await authAPI.refreshToken(storedRefreshToken);
              setUserToken(tokens.access);
              setRefreshToken(tokens.refresh);
              localStorage.setItem('userToken', tokens.access);
              localStorage.setItem('refreshToken', tokens.refresh);
              console.log('Token refreshed successfully');
            } catch (refreshError) {
              console.error('Token refresh failed:', refreshError);
              // Refresh failed, logout
              logout();
            }
          }
        }
        
        // Get anonymous token and check if it's expired
        const storedAnonymousToken = localStorage.getItem('AnonymToken');
        if (storedAnonymousToken && !isTokenExpired(storedAnonymousToken)) {
          console.log('Using existing anonymous token');
          setAnonymousToken(storedAnonymousToken);
        } else {
          if (storedAnonymousToken) {
            console.log('Anonymous token expired, getting new one...');
          } else {
            console.log('No anonymous token found, getting new one...');
          }
          await refreshAnonymousToken();
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize auth';
        setError(errorMessage);
        console.error('Error initializing auth:', err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const value: AuthContextType = {
    anonymousToken,
    userToken,
    refreshToken,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    refreshUserToken,
    refreshAnonymousToken,
    handleTokenError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

