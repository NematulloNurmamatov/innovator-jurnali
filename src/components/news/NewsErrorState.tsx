import React from 'react';

interface NewsErrorStateProps {
  error: Error;
  onRetry: () => void;
}

const NewsErrorState: React.FC<NewsErrorStateProps> = ({ error}) => {
  return (
    <section className="py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 dark:bg-gray-800 ">
          <div className="w-20 h-20 mx-auto mb-4 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">⚠️</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Yangiliklarni yuklashda xatolik
          </h3>
          <p className="text-red-600 dark:text-red-400 mb-6">{error.message}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsErrorState;
