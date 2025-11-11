import React from 'react';
import ArticleCard from './ArticleCard';
import type { ArticleList } from '../../api/types';

interface ArticlesGridProps {
  articles: ArticleList[];
  maxItems?: number;
}

const ArticlesGrid: React.FC<ArticlesGridProps> = ({ articles, maxItems = 6 }) => {
  const displayArticles = articles.slice(0, maxItems);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      {displayArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesGrid;
