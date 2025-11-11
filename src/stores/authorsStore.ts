import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Author } from '../api/types';

interface AuthorCache {
  [id: string]: {
    data: Author;
    timestamp: number;
  };
}

interface AuthorsState {
  authors: AuthorCache;
  isLoading: boolean;
  error: string | null;
  setAuthor: (id: string, author: Author) => void;
  getAuthor: (id: string) => Author | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearAuthors: () => void;
  shouldRefetch: (id: string) => boolean;
}

// Cache duration: 15 minutes (900000 ms)
const CACHE_DURATION = 15 * 60 * 1000;

export const useAuthorsStore = create<AuthorsState>()(
  persist(
    (set, get) => ({
      authors: {},
      isLoading: false,
      error: null,

      setAuthor: (id, author) =>
        set((state) => ({
          authors: {
            ...state.authors,
            [id]: {
              data: author,
              timestamp: Date.now(),
            },
          },
          error: null,
        })),

      getAuthor: (id) => {
        const cached = get().authors[id];
        if (!cached) return null;
        
        // Check if cache is still valid
        if (Date.now() - cached.timestamp > CACHE_DURATION) {
          return null;
        }
        
        return cached.data;
      },

      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error, isLoading: false }),

      clearAuthors: () => set({ authors: {}, error: null }),

      shouldRefetch: (id) => {
        const cached = get().authors[id];
        if (!cached) return true;
        return Date.now() - cached.timestamp > CACHE_DURATION;
      },
    }),
    {
      name: 'authors-storage',
      partialize: (state) => ({
        authors: state.authors,
      }),
    }
  )
);
