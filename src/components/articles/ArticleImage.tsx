import React from 'react';
import type { Article } from '../../api/types';

interface ArticleImageProps {
  article: Article;
}

const ArticleImage: React.FC<ArticleImageProps> = ({ article }) => {
  return (
    <div className="relative h-[400px] bg-gradient-to-br from-blue-500 to-purple-600 rounded overflow-hidden mb-6">
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={article.image || '/placeholder-article.jpg'} 
          alt={article.name} 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

export default ArticleImage;
