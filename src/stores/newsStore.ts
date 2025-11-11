import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { News } from '../api/types';

interface NewsCache {
  [id: string]: {
    data: News;
    timestamp: number;
  };
}

interface NewsState {
  news: NewsCache;
  isLoading: boolean;
  error: string | null;
  setNews: (id: string, news: News) => void;
  getNews: (id: string) => News | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearNews: () => void;
  shouldRefetch: (id: string) => boolean;
}

// Cache duration: 10 minutes (600000 ms)
const CACHE_DURATION = 10 * 60 * 1000;

export const useNewsStore = create<NewsState>()(
  persist(
    (set, get) => ({
      news: {},
      isLoading: false,
      error: null,

      setNews: (id, news) =>
        set((state) => ({
          news: {
            ...state.news,
            [id]: {
              data: news,
              timestamp: Date.now(),
            },
          },
          error: null,
        })),

      getNews: (id) => {
        const cached = get().news[id];
        if (!cached) return null;
        
        // Check if cache is still valid
        if (Date.now() - cached.timestamp > CACHE_DURATION) {
          return null;
        }
        
        return cached.data;
      },

      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error, isLoading: false }),

      clearNews: () => set({ news: {}, error: null }),

      shouldRefetch: (id) => {
        const cached = get().news[id];
        if (!cached) return true;
        return Date.now() - cached.timestamp > CACHE_DURATION;
      },
    }),
    {
      name: 'news-storage',
      partialize: (state) => ({
        news: state.news,
      }),
    }
  )
);
