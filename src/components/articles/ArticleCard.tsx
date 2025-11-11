import React from 'react';
import { Link } from 'react-router-dom';
import ArticleMetadata from './ArticleMetadata';
import type { ArticleList } from '../../api/types';

interface ArticleCardProps {
  article: ArticleList;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link
      key={article.id}
      to={`/articles/${article.id}`}
      className="group flex flex-row bg-white dark:bg-gray-800 rounded shadow border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-300"
    >
      {/* Image on left */}
      <div className="relative h-72 w-3/10 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden flex-shrink-0">
        <img src={article.image || '/placeholder-article.jpg'} alt={article.name} className="w-full h-full object-cover" />
      </div>

      {/* Text on right */}
      <div className="w-3/5 p-6 flex flex-col justify-between">
        <div>
          <h3 className="!text-[22px] hover:underline font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {article.name}
          </h3>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-3 line-clamp-3 leading-relaxed">
            {article.annotation}
          </p>
        </div>
        <ArticleMetadata article={article } />
      </div>
    </Link>
  );
};

export default ArticleCard;
