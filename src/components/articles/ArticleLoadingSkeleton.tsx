import React from 'react';

const ArticleLoadingSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-pulse">
          <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleLoadingSkeleton;
