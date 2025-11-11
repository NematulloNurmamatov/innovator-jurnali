import React from 'react';
import { Card } from 'antd';

interface ArticlesLoadingProps {
  count?: number;
}

const ArticlesLoading: React.FC<ArticlesLoadingProps> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <Card key={i} loading className="rounded-lg" />
      ))}
    </div>
  );
};

export default ArticlesLoading;

