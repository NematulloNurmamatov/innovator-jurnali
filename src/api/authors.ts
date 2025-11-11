// Authors API Service
import { API_CONFIG, buildApiUrl, buildQueryString } from './config';
import type { Author, AuthorList, AuthorsQueryParams, ApiResponse } from './types';

/**
 * Authors API Service
 * Handles all author-related API calls
 */
export class AuthorsAPI {
  constructor() {
    // Constructor body
  }

  /**
   * Get list of authors with filtering, searching and ordering
   * 
   * Supports:
   * - Filtering by creation date
   * - Searching in fullname and science_id
   * - Ordering by creation date, fullname
   * - Pagination
   */
  async getAuthors(
    params?: AuthorsQueryParams,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<AuthorList>> {
    const queryString = params ? buildQueryString(params) : '';
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.AUTHORS.LIST + queryString);
    
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
      throw new Error(`Failed to fetch authors: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get single author by ID
   * 
   * Returns:
   * - Full author details including fullname, image, science_id
   * - Creation and update timestamps
   * - Creator and updater information
   */
  async getAuthor(id: string, token?: string, anonymousToken?: string): Promise<Author> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.AUTHORS.DETAIL(id));
    
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
      throw new Error(`Failed to fetch author: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Search authors by query
   */
  async searchAuthors(
    searchQuery: string,
    params?: Omit<AuthorsQueryParams, 'search'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<AuthorList>> {
    return this.getAuthors({ ...params, search: searchQuery }, token, anonymousToken);
  }

  /**
   * Get authors ordered by name (A-Z)
   */
  async getAuthorsByName(
    params?: Omit<AuthorsQueryParams, 'ordering'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<AuthorList>> {
    return this.getAuthors({ ...params, ordering: 'fullname' }, token, anonymousToken);
  }

  /**
   * Get authors ordered by name (Z-A)
   */
  async getAuthorsByNameDesc(
    params?: Omit<AuthorsQueryParams, 'ordering'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<AuthorList>> {
    return this.getAuthors({ ...params, ordering: '-fullname' }, token, anonymousToken);
  }

  /**
   * Get latest authors
   */
  async getLatestAuthors(
    params?: Omit<AuthorsQueryParams, 'ordering'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<AuthorList>> {
    return this.getAuthors({ ...params, ordering: '-created_at' }, token, anonymousToken);
  }

  /**
   * Get authors by science ID
   */
  async getAuthorByScienceId(
    scienceId: string,
    params?: Omit<AuthorsQueryParams, 'search'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<AuthorList>> {
    return this.searchAuthors(scienceId, params, token, anonymousToken);
  }

  /**
   * Get authors with pagination
   */
  async getAuthorsPaginated(
    page: number = 1,
    perPage: number = 10,
    params?: Omit<AuthorsQueryParams, 'page' | 'per_page'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<AuthorList>> {
    return this.getAuthors({ ...params, page, per_page: perPage }, token, anonymousToken);
  }
}

// Export singleton instance
export const authorsAPI = new AuthorsAPI();
