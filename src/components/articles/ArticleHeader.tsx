import React from 'react';
import type { Article } from '../../api/types';

interface ArticleHeaderProps {
  article: Article;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article }) => {
  return (
    <>
      {/* Article Title */}
      <h1 className="text-3xl font-bold dark:text-white text-gray-900 mb-3 leading-tight">
        {article.name}
      </h1>

      {/* Meta Information */}
    </>
  );
};

export default ArticleHeader;
