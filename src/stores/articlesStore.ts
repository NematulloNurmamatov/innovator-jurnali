import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Article } from '../api/types';

interface ArticleCache {
  [id: string]: {
    data: Article;
    timestamp: number;
  };
}

interface ArticlesState {
  articles: ArticleCache;
  isLoading: boolean;
  error: string | null;
  setArticle: (id: string, article: Article) => void;
  getArticle: (id: string) => Article | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearArticles: () => void;
  shouldRefetch: (id: string) => boolean;
}

// Cache duration: 10 minutes (600000 ms)
const CACHE_DURATION = 10 * 60 * 1000;

export const useArticlesStore = create<ArticlesState>()(
  persist(
    (set, get) => ({
      articles: {},
      isLoading: false,
      error: null,

      setArticle: (id, article) =>
        set((state) => ({
          articles: {
            ...state.articles,
            [id]: {
              data: article,
              timestamp: Date.now(),
            },
          },
          error: null,
        })),

      getArticle: (id) => {
        const cached = get().articles[id];
        if (!cached) return null;
        
        // Check if cache is still valid
        if (Date.now() - cached.timestamp > CACHE_DURATION) {
          return null;
        }
        
        return cached.data;
      },

      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error, isLoading: false }),

      clearArticles: () => set({ articles: {}, error: null }),

      shouldRefetch: (id) => {
        const cached = get().articles[id];
        if (!cached) return true;
        return Date.now() - cached.timestamp > CACHE_DURATION;
      },
    }),
    {
      name: 'articles-storage',
      partialize: (state) => ({
        articles: state.articles,
      }),
    }
  )
);
