// Cover Pages API Service
import { API_CONFIG, buildApiUrl, getAuthHeaders } from './config';
import type { CoverPage } from './types';

/**
 * Cover Pages API Service
 * Handles cover page-related API calls
 */
export class CoverPagesAPI {
  constructor() {
    // Constructor body
  }

  /**
   * Get cover page
   * 
   * Since only one CoverPage instance is allowed in the system, this endpoint
   * returns the first (and only) CoverPage object without requiring an ID
   * parameter in the URL.
   */
  async getCoverPage(token?: string, anonymousToken?: string): Promise<CoverPage> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.COVER_PAGES.DETAIL);
    
    let headers: Record<string, string> = {};
    if (token) {
      headers = getAuthHeaders(token);
    } else if (anonymousToken) {
      headers = {
        'AnonymToken': anonymousToken,
        'Content-Type': 'application/json',
      };
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch cover page: ${response.statusText}`);
    }

    return response.json();
  }
}

// Export singleton instance
export const coverPagesAPI = new CoverPagesAPI();
