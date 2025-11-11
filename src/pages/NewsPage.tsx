import React, { useMemo, useState } from 'react';
import { usePaginatedApiCall, useSearch } from '../api/hooks';
import { newsAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import NewsHeader from '../components/news/NewsHeader';
import NewsFilters from '../components/news/NewsFilters';
import NewsListGrid from '../components/news/NewsListGrid';
import NewsLoading from '../components/news/NewsLoading';
import NewsError from '../components/news/NewsError';
import NewsEmpty from '../components/news/NewsEmpty';
import NewsPagination from '../components/news/NewsPagination';

const NewsPage: React.FC = () => {
  const { anonymousToken } = useAuth();
  const [timeFilter, setTimeFilter] = useState<string>('');

  const newsApiCall = useMemo(
    () => (page: number, perPage: number) => {
      const params: any = { page, per_page: perPage };
      if (timeFilter === 'today') params.created_today = true;
      else if (timeFilter === 'week') params.created_this_week = true;
      else if (timeFilter === 'month') params.created_this_month = true;
      return newsAPI.getNews(params, undefined, anonymousToken || undefined);
    },
    [anonymousToken, timeFilter]
  );

  const {
    data: newsData,
    loading,
    error,
    page,
    // hasNext,
    // hasPrevious,
    nextPage,
    previousPage,
    totalCount,
  } = usePaginatedApiCall(newsApiCall, 1, 9);

  const searchApiCall = useMemo(
    () => (searchQuery: string) =>
      newsAPI.searchNews(searchQuery, { per_page: 9 }, undefined, anonymousToken || undefined),
    [anonymousToken]
  );

  const { query, data: searchData, loading: searchLoading, handleSearch } = useSearch(searchApiCall, 300);

  const displayData = query ? searchData : newsData;
  const isLoading = loading || searchLoading;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <NewsHeader />

        <NewsFilters
          query={query}
          timeFilter={timeFilter}
          onSearchChange={handleSearch}
          onTimeFilterChange={setTimeFilter}
        />

        {isLoading && <NewsLoading />}

        {error && <NewsError error={error} onRetry={() => window.location.reload()} />}

        {!isLoading && !error && displayData?.results && displayData.results.length > 0 && (
          <>
            <NewsListGrid news={displayData.results} />

            <NewsPagination
                current={page}
              total={totalCount}
                pageSize={9}
              onNext={nextPage}
              onPrevious={previousPage}
              />
          </>
        )}

        {!isLoading && !error && (!displayData?.results || displayData.results.length === 0) && (
          <NewsEmpty
            hasQuery={!!query}
            onClearSearch={() => handleSearch('')}
          />
        )}
      </div>
    </div>
  );
};

export default NewsPage;
