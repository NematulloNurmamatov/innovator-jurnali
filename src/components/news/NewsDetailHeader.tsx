import React from 'react';
import type { News } from '../../api/types';
import NewsMetadata from './NewsMetadata';

interface NewsDetailHeaderProps {
  news: News;
}

const NewsDetailHeader: React.FC<NewsDetailHeaderProps> = ({ news }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
        {news.title}
      </h1>

      <div className="text-gray-500 text-sm flex gap-4 mb-5">
        <NewsMetadata news={news} />
      </div>
    </>
  );
};

export default NewsDetailHeader;
