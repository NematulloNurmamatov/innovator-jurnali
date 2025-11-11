import React from 'react';
import ArticleCardLarge from './ArticleCardLarge';
import type { ArticleList } from '../../api/types';

interface ArticlesListProps {
  articles: ArticleList[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {articles.map((article) => (
        <ArticleCardLarge key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;

