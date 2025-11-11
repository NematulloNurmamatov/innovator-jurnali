import React, { useMemo } from 'react';
import { useApiCall } from '../api/hooks';
import { newsAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import SectionHeader from './shared/SectionHeader';
import NewsLoadingSkeleton from './news/NewsLoadingSkeleton';
import NewsErrorState from './news/NewsErrorState';
import NewsGrid from './news/NewsGrid';

const LatestNews: React.FC = () => {
  const { anonymousToken } = useAuth();

  const newsApiCall = useMemo(() =>
    () => newsAPI.getLatestNews({ per_page: 10 }, undefined, anonymousToken || undefined),
    [anonymousToken]
  );

  const { data: newsData, loading, error } = useApiCall(newsApiCall);

  const handleRetry = () => {
    window.location.reload();
  };

  const news = newsData?.results || [];

  if (loading) {
    return <NewsLoadingSkeleton />;
  }

  if (error) {
    return <NewsErrorState error={error} onRetry={handleRetry} />;
  }

  return (
    <section id='latestnew' className="py-10 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <SectionHeader 
          title="So'nggi Yangiliklar" 
          linkTo="/news" 
          linkText="Ko'proq ko'rish" 
        />
        <NewsGrid news={news} />
      </div>
    </section>
  );
};

export default LatestNews;