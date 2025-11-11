import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';
import type { NewsList } from '../api/types';

interface NewsListCardProps {
  news: NewsList;
}

const NewsListCard: React.FC<NewsListCardProps> = ({ news }) => {
  return (
    <Link
      key={news.id}
      to={`/news/${news.id}`}
      className="group grid grid-cols-12 gap-4 bg-white dark:bg-gray-800 rounded shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all"
    >
      <div className="col-span-4 relative h-48  overflow-hidden">
        {news.first_image ? (
          <img src={news.first_image} alt={news.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Newspaper className="h-8 w-8 text-white opacity-80" />
          </div>
        )}
      </div>
      <div className="col-span-8 py-3 pr-4 flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-[20px] hover:underline text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {news.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {news.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsListCard;
