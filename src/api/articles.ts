// Articles API Service
import { API_CONFIG, buildApiUrl, buildQueryString } from './config';
import type { Article, ArticleList, ArticlesQueryParams, ApiResponse, Language } from './types';

/**
 * Articles API Service
 * Handles all article-related API calls
 */
export class ArticlesAPI {
  constructor() {
    // Constructor body
  }

  /**
   * Get list of articles with filtering, searching and ordering
   * 
   * Supports:
   * - Filtering by publication date, access type, language
   * - Searching in name, annotation, doi
   * - Ordering by creation date, publication date, view count
   * - Pagination
   */
  async getArticles(
    params?: ArticlesQueryParams,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<ArticleList>> {
    const queryString = params ? buildQueryString(params) : '';
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.ARTICLES.LIST + queryString);
    
    let headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    // Add both headers if available
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    if (anonymousToken) {
      headers['AnonymToken'] = anonymousToken;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: response.statusText }));
      throw new Error(errorData.detail || `Failed to fetch articles: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get single article by ID
   * 
   * Returns:
   * - Full article details including name, annotation, content
   * - Related authors, study fields, and tags
   * - Creation and update timestamps
   * - Creator and updater information
   */
  async getArticle(id: string, token?: string, anonymousToken?: string): Promise<Article> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.ARTICLES.DETAIL(id));
    
    let headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    // Add both headers if available
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    if (anonymousToken) {
      headers['AnonymToken'] = anonymousToken;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: response.statusText }));
      throw new Error(errorData.detail || `Failed to fetch article: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get public articles (access_type = 10)
   */
  async getPublicArticles(
    params?: Omit<ArticlesQueryParams, 'access_type'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<ArticleList>> {
    return this.getArticles({ ...params, access_type: 10 }, token, anonymousToken);
  }

  /**
   * Get private articles (access_type = -10)
   */
  async getPrivateArticles(
    params?: Omit<ArticlesQueryParams, 'access_type'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<ArticleList>> {
    return this.getArticles({ ...params, access_type: -10 }, token, anonymousToken);
  }

  /**
   * Search articles by query
   */
  async searchArticles(
    searchQuery: string,
    params?: Omit<ArticlesQueryParams, 'search'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<ArticleList>> {
    return this.getArticles({ ...params, search: searchQuery }, token, anonymousToken);
  }

  /**
   * Get articles by language
   */
  async getArticlesByLanguage(
    language: Language,
    params?: Omit<ArticlesQueryParams, 'language'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<ArticleList>> {
    return this.getArticles({ ...params, language }, token, anonymousToken);
  }

  /**
   * Get articles by study field
   */
  async getArticlesByStudyField(
    studyFieldId: string,
    params?: Omit<ArticlesQueryParams, 'study_fields'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<ArticleList>> {
    return this.getArticles({ ...params, study_fields: [studyFieldId] }, token, anonymousToken);
  }

  /**
   * Get articles by tag
   */
  async getArticlesByTag(
    tagId: string,
    params?: Omit<ArticlesQueryParams, 'tags'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<ArticleList>> {
    return this.getArticles({ ...params, tags: [tagId] }, token, anonymousToken);
  }

  /**
   * Get articles by co-author
   */
  async getArticlesByCoAuthor(
    authorId: string,
    params?: Omit<ArticlesQueryParams, 'co_authors'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<ArticleList>> {
    return this.getArticles({ ...params, co_authors: [authorId] }, token, anonymousToken);
  }

  /**
   * Get most viewed articles
   */
  async getMostViewedArticles(
    params?: Omit<ArticlesQueryParams, 'ordering'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<ArticleList>> {
    return this.getArticles({ ...params, ordering: '-view_count' }, token, anonymousToken);
  }

  /**
   * Get latest articles
   */
  async getLatestArticles(
    params?: Omit<ArticlesQueryParams, 'ordering'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<ArticleList>> {
    return this.getArticles({ ...params, ordering: '-created_at' }, token, anonymousToken);
  }
}

// Export singleton instance
export const articlesAPI = new ArticlesAPI();
