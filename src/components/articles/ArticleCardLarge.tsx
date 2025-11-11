import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { Button } from 'antd';
import type { ArticleList } from '../../api/types';

interface ArticleCardLargeProps {
  article: ArticleList;
}

const ArticleCardLarge: React.FC<ArticleCardLargeProps> = ({ article }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-12">
        <div className="col-span-1 !h-full sm:col-span-1 md:col-span-4 relative bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <img src={article.image} alt={article.name} className="w-full h-80 object-cover" />
        </div>

        <div className="col-span-1 sm:col-span-2 md:col-span-8 p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg !line-clamp-1 font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {article.name}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
              {article.annotation}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-gray-500 dark:text-gray-400">
              {/* Placeholder for future metadata */}
            </div>

            {article.study_fields.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.study_fields.slice(0, 3).map((field) => (
                  <span
                    key={field.id}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {field.name}
                  </span>
                ))}
                {article.study_fields.length > 3 && (
                  <span className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                    +{article.study_fields.length - 3}
                  </span>
                )}
              </div>
            )}

            <div className="flex justify-between items-center pt-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <Eye className="h-4 w-4" />
                  <span>{article.view_count}</span>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    article.access_type === 10
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                  }`}
                >
                  {article.access_type === 10 ? 'Ommaviy' : 'Shaxsiy'}
                </span>
              </div>
              <Link to={`/articles/${article.id}`}>
                <Button type="primary" className="flex !rounded items-center gap-2">
                  Batafsil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardLarge;

