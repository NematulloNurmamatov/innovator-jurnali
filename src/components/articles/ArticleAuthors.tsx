import React from 'react';
import { Avatar } from 'antd';
import type { Article } from '../../api/types';

interface ArticleAuthorsProps {
  article: Article;
}

const ArticleAuthors: React.FC<ArticleAuthorsProps> = ({ article }) => {
  if (!article.co_authors?.length) return null;

  return (
    <div className="mb-8 pb-6 border-b dark:border-gray-700 border-gray-200">
      <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4">Mualliflar</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {article.co_authors.map((author: any) => (
          <div
            key={author.id}
            className="flex flex-col w-full items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded p-3 shadow-sm hover:shadow-md transition"
          >
            <Avatar
              src={author.image}
              className="border-2 !rounded !w-full !h-80 border-white dark:border-gray-900"
            >
              {author.fullname?.charAt(0)}
            </Avatar>
            <div className='!w-full'>
              <p className="font-medium text-gray-900 dark:text-white leading-tight">
                {author.fullname}
              </p>
              {/* {author.science_id && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Science ID: <span className='!text-blue-500'>{author.science_id}</span>
                </p>
              )} */}
              {author.position && (
                <p className="text-xs dark:text-gray-400">
                  {author.position}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleAuthors;
