import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';
import type { NewsList } from '../../api/types';

interface FeaturedNewsCardProps {
  news: NewsList;
}

const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({ news }) => {
  return (
    <Link 
      to={`/news/${news.id}`} 
      className="group block bg-white max-h-[630px] dark:bg-gray-800 rounded shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-full overflow-hidden">
        {news.first_image ? (
          <img 
            src={news.first_image} 
            alt={news.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Newspaper className="h-20 w-20 text-white opacity-80" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Content overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-extrabold mb-3 line-clamp-2">
            {news.title}
          </h3>
          <p className="text-gray-200 mb-4 line-clamp-4 text-sm">
            {news.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedNewsCard;
