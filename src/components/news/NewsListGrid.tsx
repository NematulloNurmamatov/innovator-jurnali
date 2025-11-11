import React from 'react';
import NewsCard from './NewsCard';
import type { NewsList } from '../../api/types';

interface NewsListGridProps {
  news: NewsList[];
}

const NewsListGrid: React.FC<NewsListGridProps> = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
};

export default NewsListGrid;

