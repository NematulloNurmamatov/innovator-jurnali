import React, { useState, useMemo } from 'react';
import { usePaginatedApiCall, useSearch } from '../api/hooks';
import { articlesAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import SectionHeader from './shared/SectionHeader';
import ArticleLoadingSkeleton from './articles/ArticleLoadingSkeleton';
import ArticleErrorState from './articles/ArticleErrorState';
import ArticlesGrid from './articles/ArticlesGrid';
import ArticleNoResults from './articles/ArticleNoResults';

const FeaturedArticles: React.FC = () => {
  const { anonymousToken } = useAuth();
  const [selectedLanguage] = useState<string>('');
  const [selectedStudyField,] = useState<string>('');
  const [accessType] = useState<number | undefined>(undefined);
  const articlesApiCall = useMemo(() =>
    (page: number, perPage: number) => articlesAPI.getArticles({
      page,
      per_page: perPage,
      language: selectedLanguage as any,
      study_fields: selectedStudyField ? [selectedStudyField] : undefined,
      access_type: accessType as any
    }, undefined, anonymousToken || undefined),
    [anonymousToken, selectedLanguage, selectedStudyField, accessType]
  );

  const {
    data: articlesData,
    loading,
    error,
  } = usePaginatedApiCall(
    articlesApiCall,
    1,
    12
  );

  const searchApiCall = useMemo(() =>
    (searchQuery: string) => articlesAPI.searchArticles(searchQuery, { per_page: 12 }, undefined, anonymousToken || undefined),
    [anonymousToken]
  );

  const { query, data: searchData, loading: searchLoading, handleSearch } = useSearch(
    searchApiCall,
    300
  );

  const displayData = query ? searchData : articlesData;
  const isLoading = loading || searchLoading;



  const handleRetry = () => {
    window.location.reload();
  };

  const handleClearSearch = () => {
    handleSearch('');
  };

  return (
    <div className="mt-10 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto py-8">
        <SectionHeader 
          title="Ilmiy Maqolalar" 
          linkTo="/articles" 
          linkText="Ko'proq ko'rish" 
        />

        {isLoading && <ArticleLoadingSkeleton />}

        {error && <ArticleErrorState error={error} onRetry={handleRetry} />}

        {!isLoading && !error && displayData?.results && displayData.results.length > 0 && (
          <ArticlesGrid articles={displayData.results} maxItems={6} />
        )}

        {!isLoading && !error && displayData?.results.length === 0 && (
          <ArticleNoResults 
            hasQuery={!!query} 
            onClearSearch={handleClearSearch} 
          />
        )}
      </div>
    </div>
  );
};

export default FeaturedArticles;