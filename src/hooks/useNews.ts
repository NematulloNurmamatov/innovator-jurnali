import { useEffect, useState } from 'react';
import { useNewsStore } from '../stores/newsStore';
import { newsAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import type { NewsList } from '../api/types';

export const useNews = (id: string) => {
  const { userToken, anonymousToken } = useAuth();
  const {
    getNews,
    setNews,
    setLoading,
    setError,
    shouldRefetch,
    isLoading,
    error,
  } = useNewsStore();

  // State for latest and recommended news
  const [latest, setLatest] = useState<NewsList[]>([]);
  const [recommended, setRecommended] = useState<NewsList[]>([]);

  // Get news from cache
  const cachedNews = getNews(id);

  const fetchNews = async () => {
    if (!id) return;

    // Need at least one token
    if (!userToken && !anonymousToken) {
      setError('Token mavjud emas');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Fetch main news item
      const newsData = await newsAPI.getNewsItem(
        id,
        userToken || undefined,
        anonymousToken || undefined
      );

      setNews(id, newsData);

      // Fetch latest news for sidebar
      const latestData = await newsAPI.getLatestNews(
        { per_page: 6 },
        userToken || undefined,
        anonymousToken || undefined
      );
      setLatest(latestData.results || []);

      // Fetch recommended/most viewed news
      const recommendedData = await newsAPI.getMostViewedNews(
        { per_page: 6 },
        userToken || undefined,
        anonymousToken || undefined
      );
      setRecommended(recommendedData.results || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch news';
      setError(errorMessage);
      console.error('News fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch news and sidebar data
  useEffect(() => {
    if (userToken || anonymousToken) {
      if (shouldRefetch(id)) {
        fetchNews();
      } else if (latest.length === 0 || recommended.length === 0) {
        // Even if cached, fetch sidebar data if not present
        fetchNews();
      }
    }
  }, [id, userToken, anonymousToken]);

  const refetch = () => {
    fetchNews();
  };

  return {
    news: cachedNews,
    isLoading,
    error,
    refetch,
    latest,
    recommended,
  };
};
