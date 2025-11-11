import { useEffect, useMemo } from 'react';
import { useProfileStore } from '../stores/profileStore';
import { usersAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';

export const useProfile = () => {
  const { userToken, anonymousToken } = useAuth();
  const {
    profile,
    isLoading,
    error,
    setProfile,
    setLoading,
    setError,
    setLastFetched,
    shouldRefetch,
  } = useProfileStore();

  const fetchProfile = async () => {
    // Profile requires user token, not anonymous token
    if (!userToken) {
      setError('Tizimga kirish talab qilinadi');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const profileData = await usersAPI.getProfile(
        userToken,
        undefined // Don't use anonymous token for profile
      );
      
      setProfile(profileData);
      setLastFetched(Date.now());
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch profile';
      setError(errorMessage);
      console.error('Profile fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch profile if needed
  useEffect(() => {
    if (shouldRefetch() && userToken) {
      fetchProfile();
    }
  }, [userToken, shouldRefetch]);

  const refetch = () => {
    fetchProfile();
  };

  const clearProfile = () => {
    useProfileStore.getState().clearProfile();
  };

  return {
    profile,
    isLoading,
    error,
    refetch,
    clearProfile,
  };
};
