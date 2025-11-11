// Study Fields API Service
import { API_CONFIG, buildApiUrl, getAuthHeaders, getAnonymousHeaders, buildQueryString } from './config';
import type { StudyField, StudyFieldList, StudyFieldsQueryParams, ApiResponse } from './types';

/**
 * Study Fields API Service
 * Handles all study field-related API calls
 */
export class StudyFieldsAPI {
  constructor() {
    // Constructor body
  }

  /**
   * Get list of study fields with filtering, searching and ordering
   * 
   * Supports:
   * - Filtering by creation date
   * - Searching in name field
   * - Ordering by creation date, name
   * - Pagination
   */
  async getStudyFields(
    params?: StudyFieldsQueryParams,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<StudyFieldList>> {
    const queryString = params ? buildQueryString(params) : '';
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.STUDY_FIELDS.LIST + queryString);
    
    let headers: Record<string, string> = {};
    if (token) {
      headers = getAuthHeaders(token);
    } else if (anonymousToken) {
      headers = getAnonymousHeaders(anonymousToken);
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch study fields: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get single study field by ID
   * 
   * Returns:
   * - Full study field details including name
   * - Creation and update timestamps
   * - Creator and updater information
   */
  async getStudyField(id: string, token?: string, anonymousToken?: string): Promise<StudyField> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.STUDY_FIELDS.DETAIL(id));
    
    let headers: Record<string, string> = {};
    if (token) {
      headers = getAuthHeaders(token);
    } else if (anonymousToken) {
      headers = getAnonymousHeaders(anonymousToken);
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch study field: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Search study fields by query
   */
  async searchStudyFields(
    searchQuery: string,
    params?: Omit<StudyFieldsQueryParams, 'search'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<StudyFieldList>> {
    return this.getStudyFields({ ...params, search: searchQuery }, token, anonymousToken);
  }

  /**
   * Get study fields ordered by name (A-Z)
   */
  async getStudyFieldsByName(
    params?: Omit<StudyFieldsQueryParams, 'ordering'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<StudyFieldList>> {
    return this.getStudyFields({ ...params, ordering: 'name' }, token, anonymousToken);
  }

  /**
   * Get study fields ordered by name (Z-A)
   */
  async getStudyFieldsByNameDesc(
    params?: Omit<StudyFieldsQueryParams, 'ordering'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<StudyFieldList>> {
    return this.getStudyFields({ ...params, ordering: '-name' }, token, anonymousToken);
  }

  /**
   * Get latest study fields
   */
  async getLatestStudyFields(
    params?: Omit<StudyFieldsQueryParams, 'ordering'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<StudyFieldList>> {
    return this.getStudyFields({ ...params, ordering: '-created_at' }, token, anonymousToken);
  }

  /**
   * Get study fields with pagination
   */
  async getStudyFieldsPaginated(
    page: number = 1,
    perPage: number = 10,
    params?: Omit<StudyFieldsQueryParams, 'page' | 'per_page'>,
    token?: string,
    anonymousToken?: string
  ): Promise<ApiResponse<StudyFieldList>> {
    return this.getStudyFields({ ...params, page, per_page: perPage }, token, anonymousToken);
  }
}

// Export singleton instance
export const studyFieldsAPI = new StudyFieldsAPI();
