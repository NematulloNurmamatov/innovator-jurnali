import { useEffect, useState } from 'react';
import { useArticlesStore } from '../stores/articlesStore';
import { articlesAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import type { ArticleList } from '../api/types';

export const useArticle = (id: string) => {
  const { userToken, anonymousToken, isLoading: authLoading } = useAuth();
  const {
    getArticle,
    setArticle,
    setLoading,
    setError,
    shouldRefetch,
    isLoading,
    error,
  } = useArticlesStore();

  // State for latest articles
  const [latest, setLatest] = useState<ArticleList[]>([]);

  // Get article from cache
  const cachedArticle = getArticle(id);

  const fetchArticle = async () => {
    if (!id) return;

    // Need at least one token
    if (!userToken && !anonymousToken) {
      setError('Token mavjud emas');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Fetch main article
      const articleData = await articlesAPI.getArticle(
        id,
        userToken || undefined,
        anonymousToken || undefined
      );

      setArticle(id, articleData);

      // Fetch latest articles for sidebar
      const latestData = await articlesAPI.getArticles(
        { per_page: 10 },
        userToken || undefined,
        anonymousToken || undefined
      );
      setLatest(latestData.results || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch article';
      setError(errorMessage);
      console.error('Article fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch article and sidebar data
  useEffect(() => {
    // Wait for auth to finish loading
    if (authLoading) {
      return;
    }

    // Check if we have at least one token
    if (userToken || anonymousToken) {
      if (shouldRefetch(id)) {
        fetchArticle();
      } else if (latest.length === 0) {
        // Even if cached, fetch sidebar data if not present
        fetchArticle();
      }
    } else {
      setError('Token mavjud emas. Iltimos sahifani qayta yuklang.');
    }
  }, [id, userToken, anonymousToken, authLoading]);

  const refetch = () => {
    fetchArticle();
  };

  return {
    article: cachedArticle,
    isLoading: authLoading || isLoading,
    error,
    refetch,
    latest,
  };
};
