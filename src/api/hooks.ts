// React Hooks for API calls
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import type { ApiResponse } from './types';

/**
 * Generic hook for API calls with loading, error, and data states
 */
export function useApiCall<T>(
  apiCall: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  useEffect(() => {
    execute();
  }, [execute, ...dependencies]);

  return { data, loading, error, refetch: execute };
}

/**
 * Hook for paginated API calls
 */
export function usePaginatedApiCall<T>(
  apiCall: (page: number, perPage: number) => Promise<ApiResponse<T>>,
  initialPage: number = 1,
  initialPerPage: number = 10
) {
  const [data, setData] = useState<ApiResponse<T> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(initialPerPage);

  const fetchData = useCallback(async (pageNum: number, perPageNum: number) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall(pageNum, perPageNum);
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  const loadPage = useCallback((pageNum: number) => {
    setPage(pageNum);
    fetchData(pageNum, perPage);
  }, [fetchData, perPage]);

  const changePerPage = useCallback((perPageNum: number) => {
    setPerPage(perPageNum);
    setPage(1);
    fetchData(1, perPageNum);
  }, [fetchData]);

  const nextPage = useCallback(() => {
    if (data?.next) {
      loadPage(page + 1);
    }
  }, [data, page, loadPage]);

  const previousPage = useCallback(() => {
    if (data?.previous) {
      loadPage(page - 1);
    }
  }, [data, page, loadPage]);

  useEffect(() => {
    fetchData(page, perPage);
  }, [fetchData, page, perPage]);

  return {
    data,
    loading,
    error,
    page,
    perPage,
    loadPage,
    changePerPage,
    nextPage,
    previousPage,
    hasNext: !!data?.next,
    hasPrevious: !!data?.previous,
    totalCount: data?.count || 0,
  };
}

/**
 * Hook for search functionality
 */
export function useSearch<T>(
  searchApiCall: (query: string) => Promise<T>,
  debounceMs: number = 300
) {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const debouncedSearch = useCallback(
    debounce(async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setData(null);
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        const result = await searchApiCall(searchQuery);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }, debounceMs),
    [searchApiCall]
  );

  const handleSearch = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    debouncedSearch(searchQuery);
  }, [debouncedSearch]);

  const clearSearch = useCallback(() => {
    setQuery('');
    setData(null);
    setError(null);
  }, []);

  return {
    query,
    data,
    loading,
    error,
    handleSearch,
    clearSearch,
  };
}

/**
 * Hook for infinite scroll pagination
 */
export function useInfiniteScroll<T>(
  apiCall: (page: number, perPage: number) => Promise<ApiResponse<T>>,
  perPage: number = 10
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall(page, perPage);
      
      if (page === 1) {
        setData(result.results);
      } else {
        setData(prev => [...prev, ...result.results]);
      }
      
      setHasMore(!!result.next);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [apiCall, page, perPage, loading, hasMore]);

  const reset = useCallback(() => {
    setData([]);
    setPage(1);
    setHasMore(true);
    setError(null);
  }, []);

  useEffect(() => {
    loadMore();
  }, []);

  return {
    data,
    loading,
    error,
    hasMore,
    loadMore,
    reset,
  };
}

/**
 * Hook for API calls with automatic token refresh on authentication errors
 */
export function useApiCallWithAuth<T>(
  apiCall: () => Promise<T>,
  dependencies: any[] = []
) {
  const { handleTokenError } = useAuth();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall();
      setData(result);
    } catch (err) {
      const error = err as any;
      
      // Try to handle token error
      const wasRefreshed = await handleTokenError(error);
      
      if (wasRefreshed) {
        // Token was refreshed, retry the API call
        try {
          const result = await apiCall();
          setData(result);
        } catch (retryError) {
          setError(retryError as Error);
        }
      } else {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }, [apiCall, handleTokenError]);

  useEffect(() => {
    execute();
  }, [execute, ...dependencies]);

  return {
    data,
    loading,
    error,
    refetch: execute,
  };
}

// Helper function for debounce (re-exported from utils)
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
