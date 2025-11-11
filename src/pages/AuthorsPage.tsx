import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Calendar, ArrowRight, GraduationCap } from 'lucide-react';
import { usePaginatedApiCall, useSearch } from '../api/hooks';
import { authorsAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import type { AuthorList } from '../api/types';

const AuthorsPage: React.FC = () => {
  const { anonymousToken } = useAuth();
  const [sortBy, setSortBy] = useState<string>('-created_at');

  // Authors ni olish
  const authorsApiCall = useMemo(() => 
    (page: number, perPage: number) => authorsAPI.getAuthors({ 
      page, 
      per_page: perPage,
      ordering: sortBy
    }, undefined, anonymousToken || undefined),
    [anonymousToken, sortBy]
  );
  
  const { 
    data: authorsData, 
    loading, 
    error, 
    page, 
    hasNext, 
    hasPrevious, 
    nextPage, 
    previousPage,
    totalCount 
  } = usePaginatedApiCall(
    authorsApiCall,
    1,
    12
  );

  // Search functionality
  const searchApiCall = useMemo(() => 
    (searchQuery: string) => authorsAPI.searchAuthors(searchQuery, { per_page: 12 }, undefined, anonymousToken || undefined),
    [anonymousToken]
  );
  
  const { query, data: searchData, loading: searchLoading, handleSearch } = useSearch(
    searchApiCall,
    300
  );

  const displayData = query ? searchData : authorsData;
  const isLoading = loading || searchLoading;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Mualliflar
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ilmiy tadqiqotchilar va mualliflar ro'yxati
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Mualliflarni qidirish..."
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            {/* Sort Filter */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="-created_at">Eng yangi</option>
                <option value="created_at">Eng eski</option>
                <option value="fullname">Ism bo'yicha A-Z</option>
                <option value="-fullname">Ism bo'yicha Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            {totalCount} ta muallif topildi
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Mualliflar yuklanmoqda...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600 dark:text-red-400">Xatolik: {error.message}</p>
          </div>
        )}

        {/* Authors Grid */}
        {!isLoading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayData?.results.map((author: AuthorList) => (
                <div key={author.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                        {author.image ? (
                          <img
                            src={author.image}
                            alt={author.fullname}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-8 w-8 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {author.fullname}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Science ID: {author.science_id}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(author.created_at).toLocaleDateString('uz-UZ')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="h-4 w-4" />
                        <span>Muallif</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/authors/${author.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Batafsil ma'lumot
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {!query && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={previousPage}
                    disabled={!hasPrevious}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Oldingi
                  </button>
                  <span className="px-4 py-2 text-gray-600 dark:text-gray-300">
                    Sahifa {page}
                  </span>
                  <button
                    onClick={nextPage}
                    disabled={!hasNext}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Keyingi
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* No Results */}
        {!isLoading && !error && displayData?.results.length === 0 && (
          <div className="text-center py-12">
            <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Mualliflar topilmadi
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Qidiruv shartlarini o'zgartiring yoki boshqa kalit so'zlar bilan qidiring.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorsPage;
