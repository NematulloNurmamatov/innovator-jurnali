// Users API Service
import { API_CONFIG, buildApiUrl, getAuthHeaders, getAnonymousHeaders } from './config';

export interface UserProfile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  username?: string;
  phone?: string;
  phone_number?: string;
  avatar?: string;
  science_image?: string;
  fullname?: string;
  science_id?: string;
  is_staff: boolean;
  is_active: boolean;
  is_superuser: boolean;
  date_joined: string;
  created_at?: string;
  updated_at?: string;
  last_login?: string;
  bio?: string;
  location?: string;
  website?: string;
  social_links?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    orcid?: string;
  };
  academic_info?: {
    institution?: string;
    department?: string;
    position?: string;
    research_interests?: string[];
    education?: Array<{
      degree: string;
      field: string;
      institution: string;
      year: number;
    }>;
  };
  statistics?: {
    articles_count: number;
    citations_count: number;
    h_index: number;
    i10_index: number;
  };
}

/**
 * Users API Service
 * Handles all user-related API calls
 */
export class UsersAPI {
  constructor() {
    // Constructor body
  }

  /**
   * Get user profile
   * Retrieves current user's profile information
   */
  async getProfile(token?: string, anonymousToken?: string): Promise<UserProfile> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.USERS.PROFILE);
    
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
      throw new Error(`Failed to fetch user profile: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Update user profile
   * Updates current user's profile information
   */
  async updateProfile(
    profileData: Partial<UserProfile>,
    token?: string,
    anonymousToken?: string
  ): Promise<UserProfile> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.USERS.PROFILE);
    
    let headers: Record<string, string> = {};
    if (token) {
      headers = getAuthHeaders(token);
    } else if (anonymousToken) {
      headers = getAnonymousHeaders(anonymousToken);
    }

    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update user profile: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Upload avatar
   * Uploads user avatar image
   */
  async uploadAvatar(
    file: File,
    token?: string,
    anonymousToken?: string
  ): Promise<{ avatar_url: string }> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.USERS.AVATAR);
    
    const formData = new FormData();
    formData.append('avatar', file);
    
    let headers: Record<string, string> = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    } else if (anonymousToken) {
      headers['AnonymToken'] = anonymousToken;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to upload avatar: ${response.statusText}`);
    }

    return response.json();
  }
}

// Export singleton instance
export const usersAPI = new UsersAPI();