import React from 'react';
import type { News } from '../../api/types';

interface NewsDetailImageProps {
  news: News;
}

const NewsDetailImage: React.FC<NewsDetailImageProps> = ({ news }) => {
  if (!news.images?.[0]?.image) return null;

  return (
    <img
      src={news.images[0].image}
      alt={news.title}
      className="rounded-[2px] w-full max-h-[500px] object-cover mb-6"
    />
  );
};

export default NewsDetailImage;
