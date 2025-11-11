import React from 'react';
import type { News } from '../../api/types';

interface NewsDetailContentProps {
  news: News;
}

const NewsDetailContent: React.FC<NewsDetailContentProps> = ({ news }) => {
  return (
    <div
      className="prose max-w-none text-gray-800 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: news.content }}
    />
  );
};

export default NewsDetailContent;
