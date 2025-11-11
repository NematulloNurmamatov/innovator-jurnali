import React from 'react';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';
import type { NewsList } from '../../api/types';

interface NewsCardProps {
  news: NewsList;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
      <div className="h-60 overflow-hidden rounded-t">
        {news.first_image ? (
          <img src={news.first_image} alt={news.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col justify-between min-h-[250px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {news.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
            {news.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 flex items-center gap-1">
            <EyeOutlined /> {news.view_count}
          </span>
          <Link
            to={`/news/${news.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Batafsil →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

