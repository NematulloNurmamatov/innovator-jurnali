import { useEffect } from 'react';
import { useAuthorsStore } from '../stores/authorsStore';
import { authorsAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import type { Author } from '../api/types';

export const useAuthor = (id: string) => {
  const { userToken, anonymousToken } = useAuth();
  const {
    getAuthor,
    setAuthor,
    setLoading,
    setError,
    shouldRefetch,
    isLoading,
    error,
  } = useAuthorsStore();

  // Get author from cache
  const cachedAuthor = getAuthor(id);

  const fetchAuthor = async () => {
    if (!id) return;

    // Need at least one token
    if (!userToken && !anonymousToken) {
      setError('Token mavjud emas');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Always pass anonymousToken, userToken is optional
      const authorData = await authorsAPI.getAuthor(
        id,
        userToken || undefined,
        anonymousToken || undefined
      );

      setAuthor(id, authorData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch author';
      setError(errorMessage);
      console.error('Author fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch author if needed
  useEffect(() => {
    if (shouldRefetch(id) && (userToken || anonymousToken)) {
      fetchAuthor();
    }
  }, [id, userToken, anonymousToken]);

  const refetch = () => {
    fetchAuthor();
  };

  return {
    author: cachedAuthor,
    isLoading,
    error,
    refetch,
  };
};
