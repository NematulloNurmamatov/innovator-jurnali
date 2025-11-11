import React from 'react';
import type { News } from '../../api/types';
import calendar from '../../assets/icon/Date_range_light.svg';
import eye from '../../assets/icon/View_light.svg';

interface NewsMetadataProps {
  news: News;
}

const NewsMetadata: React.FC<NewsMetadataProps> = ({ news }) => {
  return (
    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
      <span className="flex items-center">
        <img src={calendar} alt="calendar" className="mr-1" />
        <span className="text-sm">
          {new Date(news.created_at).toLocaleDateString('uz-UZ')}
        </span>
      </span>
      
      <span className="flex items-center">
        <img src={eye} alt="eye" className="mr-1" />
        <span className="text-sm">
          {news.view_count}
        </span>
      </span>
    </div>
  );
};

export default NewsMetadata;

