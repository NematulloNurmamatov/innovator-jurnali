// API Configuration for Innovator-App
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://192.168.101.153',
  API_VERSION: 'v1',
  ENDPOINTS: {
    // Authentication
    AUTH: {
      GET_ANONYM_TOKEN: '/api/v1/auth/get/anonym/token/',
      SCIENCE_CALLBACK: '/api/v1/auth/science/callback/',
      SCIENCE_URL: '/api/v1/auth/science/url/',
      TOKEN_CHECK_ACCESS: '/api/v1/auth/token/check_access/',
      TOKEN_REFRESH: '/api/v1/auth/token/refresh/',
    },
    // Articles
    ARTICLES: {
      LIST: '/api/v1/articles/',
      DETAIL: (id: string) => `/api/v1/articles/${id}/`,
    },
    // Authors
    AUTHORS: {
      LIST: '/api/v1/authors/',
      DETAIL: (id: string) => `/api/v1/authors/${id}/`,
    },
    // News
    NEWS: {
      LIST: '/api/v1/news/',
      DETAIL: (id: string) => `/api/v1/news/${id}/`,
    },
    // Study Fields
    STUDY_FIELDS: {
      LIST: '/api/v1/study-fields/',
      DETAIL: (id: string) => `/api/v1/study-fields/${id}/`,
    },
    // Cover Pages
    COVER_PAGES: {
      DETAIL: '/api/v1/cover-pages/',
    },
    // Users
    USERS: {
      PROFILE: '/api/v1/users/profile/',
      AVATAR: '/api/v1/users/avatar/',
    },
  },
  SECURITY: {
    BEARER_AUTH: 'BearerAuth',
    JWT_AUTH: 'jwtAuth',
  },
} as const;

// Helper function to build full API URL
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Helper function to get auth headers
export const getAuthHeaders = (token: string) => ({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json',
});

// Helper function to get anonymous token headers
export const getAnonymousHeaders = (token: string) => ({
  'AnonymToken': token,
  'Content-Type': 'application/json',
});

// Helper function to build query string
export const buildQueryString = (params: Record<string, any>): string => {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach(item => searchParams.append(key, item.toString()));
      } else {
        searchParams.append(key, value.toString());
      }
    }
  });
  
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
};
