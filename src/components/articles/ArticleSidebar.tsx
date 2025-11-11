import React from 'react';
import { Link } from 'react-router-dom';
import type { ArticleList } from '../../api/types';

interface ArticleSidebarProps {
  latest: ArticleList[];
}

const ArticleSidebar: React.FC<ArticleSidebarProps> = ({ latest }) => {
  return (
    <aside className="space-y-8">
      {/* Latest Articles */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          So'nggi maqolalar
        </h3>
        {latest && latest.length > 0 ? (
          <>
            <ul className="space-y-3">
              {latest.slice(0, 67).map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/articles/${item.id}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 grid grid-cols-12 text-sm font-medium gap-2 leading-snug block"
                  >
                    <div className="flex h-14 col-span-3 object-cover items-center gap-2">
                      <img 
                        src={item.image || '/placeholder-article.jpg'} 
                        alt={item.name} 
                        className="w-full h-14 rounded-[2px] object-cover" 
                      />
                    </div>
                    <div className="col-span-9">
                      <h3 className="text-sm font-medium hover:underline line-clamp-2">{item.name}</h3>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {item.created_at}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-right">
              <Link
                to="/articles"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Barcha maqolalar →
              </Link>
            </div>
          </>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-sm">Yuklanmoqda...</p>
        )}
      </div>
    </aside>
  );
};

export default ArticleSidebar;
