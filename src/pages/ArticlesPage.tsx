import React, { useState, useMemo } from 'react';
import { usePaginatedApiCall, useSearch } from '../api/hooks';
import { articlesAPI, studyFieldsAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import ArticleFilters from '../components/articles/ArticleFilters';
import ArticlesList from '../components/articles/ArticlesList';
import ArticlesLoading from '../components/articles/ArticlesLoading';
import ArticlesError from '../components/articles/ArticlesError';
import ArticlesEmpty from '../components/articles/ArticlesEmpty';
import ArticlesPagination from '../components/articles/ArticlesPagination';

const ArticlesPage: React.FC = () => {
  const { anonymousToken } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [selectedStudyField, setSelectedStudyField] = useState<string>('');
  const [accessType, setAccessType] = useState<number | undefined>(undefined);

  const studyFieldsApiCall = useMemo(() =>
    (page: number, perPage: number) => studyFieldsAPI.getStudyFields({ page, per_page: perPage }, undefined, anonymousToken || undefined),
    [anonymousToken]
  );

  const { data: studyFieldsData } = usePaginatedApiCall(
    studyFieldsApiCall,
    1,
    50
  );

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
    page,
    loadPage,
    totalCount
  } = usePaginatedApiCall(
    articlesApiCall,
    1,
    10
  );

  const searchApiCall = useMemo(() =>
    (searchQuery: string) => articlesAPI.searchArticles(searchQuery, { per_page: 9 }, undefined, anonymousToken || undefined),
    [anonymousToken]
  );

  const { query, data: searchData, loading: searchLoading, handleSearch } = useSearch(
    searchApiCall,
    300
  );

  const displayData = query ? searchData : articlesData;
  const isLoading = loading || searchLoading;

  const clearFilters = () => {
    setSelectedLanguage('');
    setSelectedStudyField('');
    setAccessType(undefined);
    loadPage(1);
  };

  const handlePageChange = (newPage: number) => {
    loadPage(newPage);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ilmiy Maqolalar
          </h1>
        </div>

        <ArticleFilters
          query={query}
          selectedLanguage={selectedLanguage}
          selectedStudyField={selectedStudyField}
          accessType={accessType}
          studyFields={studyFieldsData?.results || []}
          onSearchChange={handleSearch}
          onLanguageChange={setSelectedLanguage}
          onStudyFieldChange={setSelectedStudyField}
          onAccessTypeChange={setAccessType}
          onClearFilters={clearFilters}
        />

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {query ? 'Qidiruv natijalari' : 'Barcha maqolalar'}
            </h2>
          </div>
        </div>

        {isLoading && <ArticlesLoading count={6} />}

        {error && <ArticlesError onRetry={() => window.location.reload()} />}

        {!isLoading && !error && displayData?.results && displayData.results.length > 0 && (
          <>
            <ArticlesList articles={displayData.results} />

            {!query && (
              <ArticlesPagination
                current={page}
                total={totalCount}
                pageSize={9}
                onChange={handlePageChange}
              />
            )}
          </>
        )}

        {!isLoading && !error && displayData?.results.length === 0 && (
          <ArticlesEmpty
            hasQuery={!!query}
            onClearSearch={() => handleSearch('')}
          />
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;