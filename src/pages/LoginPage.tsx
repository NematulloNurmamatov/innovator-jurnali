import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, LogIn, User, AlertCircle, CheckCircle } from 'lucide-react';
import { authAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, isAuthenticated, isLoading: authLoading } = useAuth();
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Check if user is already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Handle OAuth callback
  useEffect(() => {
    const handleOAuthCallback = async () => {
      const code = searchParams.get('code');
      
      if (code) {
        setIsLoading(true);
        setError(null);
        
          try {
            console.log('OAuth code received:', code);
            
            // Try to get tokens from the OAuth callback API
            try {
              const tokens = await authAPI.handleOAuthCallback(code);
              console.log('OAuth tokens received from API:', tokens);
              login(tokens);
              setSuccess('Muvaffaqiyatli tizimga kirdingiz!');
              setTimeout(() => navigate('/'), 2000);
            } catch (apiError) {
              console.error('OAuth callback API failed:', apiError);
              setError(apiError instanceof Error ? apiError.message : 'OAuth callback xatoligi');
            }
          } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'OAuth callback xatoligi';
            setError(errorMessage);
          } finally {
            setIsLoading(false);
          }
      }
    };

    handleOAuthCallback();
  }, [searchParams, login, navigate]);

  const handleOAuthLogin = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const redirectUrl = `${window.location.origin}/login`;
      console.log('Getting OAuth URL with redirect:', redirectUrl);
      
      const response = await authAPI.getOAuthUrl(redirectUrl);
      console.log('OAuth URL response:', response);
      
      // Redirect to OAuth provider
      console.log('Redirecting to:', response.url);
      window.location.href = response.url;
    } catch (err) {
      console.error('OAuth URL error:', err);
      const errorMessage = err instanceof Error ? err.message : 'OAuth URL olishda xatolik';
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Back button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Bosh sahifaga qaytish
          </Link>
        </div>

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Tizimga kirish
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Innovator Jurnali platformasiga Science ID orqali kirish
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                    Xatolik
                  </h3>
                  <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                    {error}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                    Muvaffaqiyat
                  </h3>
                  <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                    {success}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OAuth Login Button */}
          <div className="space-y-3">
            <button
              onClick={handleOAuthLogin}
              disabled={isLoading}
              className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <LogIn className="h-5 w-5 mr-2" />
                  Science ID orqali kirish
                </>
              )}
            </button>
            
            {/* Test Login Button */}
            {/* <button
              onClick={() => {
                const mockTokens = {
                  access: `test_access_token_${Date.now()}`,
                  refresh: `test_refresh_token_${Date.now()}`
                };
                login(mockTokens);
                setSuccess('Test rejimida kirildi!');
                setTimeout(() => navigate('/'), 1000);
              }}
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              Test rejimida kirish
            </button> */}
            
            {/* Clear Tokens Button */}
            {/* <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="w-full flex justify-center items-center px-4 py-2 border border-red-300 dark:border-red-600 rounded-lg shadow-sm text-sm font-medium text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              Tokenslarni tozalash
            </button> */}
          </div>

          {/* Info Section */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  Yoki
                </span>
              </div>
            </div>

            <div className="mt-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex">
                  <User className="h-5 w-5 text-blue-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      Science ID nima?
                    </h3>
                    <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                      <p>
                        Science ID - bu ilmiy tadqiqotchilar uchun maxsus identifikatsiya tizimi. 
                        Bu orqali siz Innovator Jurnali platformasiga xavfsiz kirishingiz mumkin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
