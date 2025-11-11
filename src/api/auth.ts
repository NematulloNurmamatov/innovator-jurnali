// Authentication API Service
import { API_CONFIG, buildApiUrl } from './config';

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface TokenCheckResponse {
  access_token: string;
  access: boolean;
}

export interface OAuthUrlRequest {
  redirect_url: string;
}

export interface OAuthUrlResponse {
  url: string;
}

/**
 * Authentication API Service
 * Handles all authentication-related API calls
 */
export class AuthAPI {
  constructor() {
    // Constructor body
  }

  /**
   * Get anonymous token
   * Generates and returns a JWT token for anonymous access
   */
  async getAnonymousToken(): Promise<{ token: string }> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.AUTH.GET_ANONYM_TOKEN);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get anonymous token: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get OAuth URL
   * Validates the request data and returns the OAuth URL
   */
  async getOAuthUrl(redirectUrl: string): Promise<OAuthUrlResponse> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.AUTH.SCIENCE_URL);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        redirect_url: redirectUrl
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get OAuth URL: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Handle OAuth callback
   * Processes the OAuth callback and returns JWT tokens
   */
  async handleOAuthCallback(code: string): Promise<AuthTokens> {
    // Build URL with code as query parameter
    const baseUrl = buildApiUrl(API_CONFIG.ENDPOINTS.AUTH.SCIENCE_CALLBACK);
    const url = `${baseUrl}?code=${encodeURIComponent(code)}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Failed to handle OAuth callback: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Check token access
   * Validates and saves the data, returning the result
   */
  async checkTokenAccess(accessToken: string): Promise<TokenCheckResponse> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.AUTH.TOKEN_CHECK_ACCESS);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: accessToken
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to check token access: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Refresh token
   * Handles JWT access token refresh requests
   */
  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.AUTH.TOKEN_REFRESH);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh: refreshToken
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${response.statusText}`);
    }

    return response.json();
  }
}

// Export singleton instance
export const authAPI = new AuthAPI();