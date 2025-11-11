// API Types and Interfaces for Innovator-App
// Generated from OpenAPI 3.0.3 specification

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Enums
export const AccessType = {
  PUBLIC: 10,
  PRIVATE: -10
} as const;

export const Language = {
  EN: 'en',
  RU: 'ru',
  UZ: 'uz'
} as const;

export type AccessType = typeof AccessType[keyof typeof AccessType];
export type Language = typeof Language[keyof typeof Language];

// Base interfaces
export interface BaseEntity {
  id: string;
  created_at: string;
  updated_at: string;
}

// Author interfaces
export interface Author extends BaseEntity {
  fullname: string;
  image?: string;
  science_id: string;
}

export interface AuthorList extends Omit<Author, 'updated_at'> {}

// Study Field interfaces
export interface StudyField extends BaseEntity {
  name: string;
}

export interface StudyFieldList extends StudyField {}

// Tag interfaces
export interface TagList extends Omit<BaseEntity, 'updated_at'> {
  name: string;
}

// Article interfaces
export interface Article extends BaseEntity {
  name: string;
  publication_date?: string;
  co_authors: AuthorList[];
  access_type: AccessType;
  study_fields: StudyFieldList[];
  language: Language;
  annotation: string;
  content_file?: string;
  tags: TagList[];
  doi?: string;
  view_count: number;
  image?: string;
}

export interface ArticleList extends Omit<Article, 'content_file' | 'updated_at'> {}

// News interfaces
export interface NewsImage extends BaseEntity {
  image?: string;
  ordering: number;
}

export interface News extends BaseEntity {
  title: string;
  content: string;
  images: NewsImage[];
  view_count: number;
}

export interface NewsList extends Omit<News, 'images'> {
  images_count: string;
  first_image: string;
}

// Cover Page interfaces
export interface CoverPage extends BaseEntity {
  title: string;
  subtitle?: string;
  background_image: string;
}

// User Profile interfaces
export interface UserProfile extends BaseEntity {
  fullname: string;
  phone_number: string;
  science_id: string;
  science_image?: string;
  email: string;
  is_active: boolean;
}

// Authentication interfaces
export interface CheckAccessRequest {
  access_token: string;
}

export interface CheckAccess {
  access_token: string;
  access: boolean;
}

export interface CustomTokenRefreshRequest {
  refresh: string;
}

export interface CustomTokenRefresh {
  refresh: string;
  access: string;
}

export interface ScienceIDOauthGetUrlRequest {
  redirect_url: string;
}

// API Query Parameters
export interface ArticlesQueryParams {
  access_type?: AccessType;
  co_authors?: string[];
  language?: Language;
  ordering?: string;
  page?: number;
  per_page?: number;
  publication_date?: string;
  search?: string;
  study_fields?: string[];
  tags?: string[];
}

export interface AuthorsQueryParams {
  ordering?: string;
  page?: number;
  per_page?: number;
  search?: string;
}

export interface NewsQueryParams {
  created_after?: string;
  created_before?: string;
  created_this_month?: boolean;
  created_this_week?: boolean;
  created_today?: boolean;
  ordering?: string;
  page?: number;
  per_page?: number;
  search?: string;
}

export interface StudyFieldsQueryParams {
  ordering?: string;
  page?: number;
  per_page?: number;
  search?: string;
}
