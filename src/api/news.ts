// News API Service
import { API_CONFIG, buildApiUrl, buildQueryString } from './config';
import type { News, NewsList, NewsQueryParams, ApiResponse } from './types';

/**
 * News API Service
 * Handles all news-related API calls
 */
export class NewsAPI {
  constructor() {
    // Constructor body
  }

  /**
   * Get list of news with filtering, searching and ordering
   * 
   * Supports:
   * - Filtering by creation date
   * - Searching in title and content
   * - Ordering by creation date
   * - Pagination
   */
  async getNews(
    params?: NewsQueryParams,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    const queryString = params ? buildQueryString(params) : '';
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.NEWS.LIST + queryString);
    
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
      throw new Error(errorData.detail || `Failed to fetch news: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get single news item by ID
   * 
   * Returns:
   * - Full news details including title, content, images
   * - Related images with ordering
   * - Creation and update timestamps
   * - Creator and updater information
   */
  async getNewsItem(id: string, token?: string, anonymousToken?: string): Promise<News> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.NEWS.DETAIL(id));
    
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
      throw new Error(errorData.detail || `Failed to fetch news item: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Search news by query
   */
  async searchNews(
    searchQuery: string,
    params?: Omit<NewsQueryParams, 'search'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    return this.getNews({ ...params, search: searchQuery }, token, anonymousToken);
  }

  /**
   * Get latest news
   */
  async getLatestNews(
    params?: Omit<NewsQueryParams, 'ordering'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    return this.getNews({ ...params }, token, anonymousToken);
  }

  /**
   * Get news created today
   */
  async getTodayNews(
    params?: Omit<NewsQueryParams, 'created_today'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    return this.getNews({ ...params, created_today: true }, token, anonymousToken);
  }

  /**
   * Get news created this week
   */
  async getThisWeekNews(
    params?: Omit<NewsQueryParams, 'created_this_week'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    return this.getNews({ ...params, created_this_week: true }, token, anonymousToken);
  }

  /**
   * Get news created this month
   */
  async getThisMonthNews(
    params?: Omit<NewsQueryParams, 'created_this_month'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    return this.getNews({ ...params, created_this_month: true }, token, anonymousToken);
  }

  /**
   * Get news created after specific date
   */
  async getNewsAfter(
    date: string,
    params?: Omit<NewsQueryParams, 'created_after'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    return this.getNews({ ...params, created_after: date }, token, anonymousToken);
  }

  /**
   * Get news created before specific date
   */
  async getNewsBefore(
    date: string,
    params?: Omit<NewsQueryParams, 'created_before'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    return this.getNews({ ...params, created_before: date }, token, anonymousToken);
  }

  /**
   * Get news with date range
   */
  async getNewsByDateRange(
    startDate: string,
    endDate: string,
    params?: Omit<NewsQueryParams, 'created_after' | 'created_before'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    return this.getNews({ 
      ...params, 
      created_after: startDate, 
      created_before: endDate 
    }, token, anonymousToken);
  }

  /**
   * Get news with pagination
   */
  async getNewsPaginated(
    page: number = 1,
    perPage: number = 10,
    params?: Omit<NewsQueryParams, 'page' | 'per_page'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    return this.getNews({ ...params, page, per_page: perPage }, token, anonymousToken);
  }

  /**
   * Get most viewed news
   */
  async getMostViewedNews(
    params?: Omit<NewsQueryParams, 'ordering'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<NewsList>> {
    return this.getNews({ ...params }, token, anonymousToken);
  }
}

// Export singleton instance
export const newsAPI = new NewsAPI();
