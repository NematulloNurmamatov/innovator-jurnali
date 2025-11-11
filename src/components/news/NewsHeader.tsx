import React from 'react';

const NewsHeader: React.FC = () => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Yangiliklar</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        Ilm-fan va ta'lim sohasidagi eng so'nggi yangiliklardan xabardor bo'ling
      </p>
    </div>
  );
};

export default NewsHeader;

