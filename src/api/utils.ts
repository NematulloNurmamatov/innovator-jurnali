// API Utility Functions
import type { ApiResponse } from './types';

/**
 * API Error class for better error handling
 */
export class APIError extends Error {
  public status: number;
  public statusText: string;
  public response?: Response;

  constructor(message: string, status: number, statusText: string, response?: Response) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.statusText = statusText;
    this.response = response;
  }
}

/**
 * Handle API response and throw appropriate errors
 */
export async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorMessage = `API Error: ${response.status} ${response.statusText}`;
    throw new APIError(errorMessage, response.status, response.statusText, response);
  }

  try {
    return await response.json();
  } catch (error) {
    throw new APIError('Failed to parse JSON response', response.status, response.statusText, response);
  }
}

/**
 * Check if response is paginated
 */
export function isPaginatedResponse<T>(data: any): data is ApiResponse<T> {
  return data && typeof data === 'object' && 'count' in data && 'results' in data;
}

/**
 * Extract pagination info from response
 */
export function getPaginationInfo<T>(response: ApiResponse<T>) {
  return {
    count: response.count,
    hasNext: !!response.next,
    hasPrevious: !!response.previous,
    nextUrl: response.next,
    previousUrl: response.previous,
  };
}

/**
 * Build URL with query parameters
 */
export function buildUrlWithParams(baseUrl: string, params: Record<string, any>): string {
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
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

/**
 * Retry function for API calls
 */
export async function retryApiCall<T>(
  apiCall: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await apiCall();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }

  throw lastError!;
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for API calls
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Format date for API
 */
export function formatDateForAPI(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Format datetime for API
 */
export function formatDateTimeForAPI(date: Date): string {
  return date.toISOString();
}

/**
 * Parse API date string
 */
export function parseAPIDate(dateString: string): Date {
  return new Date(dateString);
}

/**
 * Validate UUID format
 */
export function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

/**
 * Safe JSON parse
 */
export function safeJsonParse<T>(jsonString: string, defaultValue: T): T {
  try {
    return JSON.parse(jsonString);
  } catch {
    return defaultValue;
  }
}

/**
 * Create request options for fetch
 */
export function createRequestOptions(
  method: string = 'GET',
  body?: any,
  token?: string,
  additionalHeaders: Record<string, string> = {}
): RequestInit {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...additionalHeaders,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (body && method !== 'GET') {
    options.body = JSON.stringify(body);
  }

  return options;
}
