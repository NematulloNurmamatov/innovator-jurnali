import React from 'react';
import FeaturedNewsCard from './FeaturedNewsCard';
import NewsListCard from './NewsListCard';
import type { NewsList } from '../../api/types';

interface NewsGridProps {
  news: NewsList[];
}

const NewsGrid: React.FC<NewsGridProps> = ({ news }) => {
  if (news.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
      {/* Left: Big featured news (first item) */}
      <FeaturedNewsCard news={news[0]} />

      {/* Right: three stacked compact items - boshqa yangiliklar */}
      <div className="space-y-6">
        {news.slice(4, 7).map((item) => (
          <NewsListCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;
