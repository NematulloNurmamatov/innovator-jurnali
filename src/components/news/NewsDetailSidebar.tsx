import React from 'react';
import { Link } from 'react-router-dom';
import type { NewsList } from '../../api/types';

interface NewsDetailSidebarProps {
  latest: NewsList[];
}

const NewsDetailSidebar: React.FC<NewsDetailSidebarProps> = ({ latest }) => {
  return (
    <aside className="space-y-8">
      <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Tavsiya etamiz
        </h3>
        {latest && latest.length > 0 ? (
          <>
            <ul className="space-y-3">
              {latest.slice(0, 10).map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/news/${item.id}`}
                    className="text-gray-700 hover:text-blue-600 grid grid-cols-12 text-sm font-medium gap-2 leading-snug block"
                  >
                    <div className="flex h-14 col-span-3 object-cover items-center gap-2">
                      <img 
                        src={item.first_image} 
                        alt={item.title} 
                        className="w-full h-14 rounded-[2px] object-cover" 
                      />
                    </div>
                    <div className="col-span-9 flex flex-col justify-between">
                      <h3 className="text-sm font-medium hover:underline line-clamp-2">{item.title}</h3>
                      <p className="text-xs text-gray-400">
                        {item.created_at}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-right">
              <Link
                to="/news"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Barcha yangiliklar →
              </Link>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-sm">Yuklanmoqda...</p>
        )}
      </div>
    </aside>
  );
};

export default NewsDetailSidebar;
