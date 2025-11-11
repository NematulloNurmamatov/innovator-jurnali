import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProfile } from '../api/users';

interface ProfileState {
  profile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  lastFetched: number | null;
  setProfile: (profile: UserProfile | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setLastFetched: (timestamp: number) => void;
  clearProfile: () => void;
  shouldRefetch: () => boolean;
}

// Cache duration: 5 minutes (300000 ms)
const CACHE_DURATION = 5 * 60 * 1000;

export const useProfileStore = create<ProfileState>()(
  persist(
    (set, get) => ({
      profile: null,
      isLoading: false,
      error: null,
      lastFetched: null,

      setProfile: (profile) => set({ profile, error: null }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error, isLoading: false }),
      setLastFetched: (timestamp) => set({ lastFetched: timestamp }),
      
      clearProfile: () => set({ 
        profile: null, 
        error: null, 
        lastFetched: null 
      }),

      shouldRefetch: () => {
        const { lastFetched } = get();
        if (!lastFetched) return true;
        return Date.now() - lastFetched > CACHE_DURATION;
      },
    }),
    {
      name: 'profile-storage',
      partialize: (state) => ({
        profile: state.profile,
        lastFetched: state.lastFetched,
      }),
    }
  )
);
