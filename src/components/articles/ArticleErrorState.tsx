import React from 'react';

interface ArticleErrorStateProps {
  error: Error;
  onRetry: () => void;
}

const ArticleErrorState: React.FC<ArticleErrorStateProps> = ({ error}) => {
  return (
    <div className="text-center py-16  dark:bg-gray-800 dark:border-gray-700">
      <div className="w-20 h-20 mx-auto mb-4 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
        <span className="text-2xl">⚠️</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Xatolik yuz berdi
      </h3>
      <p className="text-red-600 dark:text-red-400 mb-6">{error.message}</p>
    </div>
  );
};

export default ArticleErrorState;
