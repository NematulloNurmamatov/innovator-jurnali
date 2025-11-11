// Main API Export File
// This file exports all API services and utilities

// Export all API services
export { authAPI } from './auth';
export { articlesAPI } from './articles';
export { authorsAPI } from './authors';
export { newsAPI } from './news';
export { studyFieldsAPI } from './studyFields';
export { coverPagesAPI } from './coverPages';
export { usersAPI } from './users';

// Export configuration
export { API_CONFIG, buildApiUrl, getAuthHeaders, buildQueryString } from './config';

// Export all types
export * from './types';

// Re-export individual services for convenience
export { AuthAPI } from './auth';
export { ArticlesAPI } from './articles';
export { AuthorsAPI } from './authors';
export { NewsAPI } from './news';
export { StudyFieldsAPI } from './studyFields';
export { CoverPagesAPI } from './coverPages';
export { UsersAPI } from './users';
