import React from 'react';
import { Button } from 'antd';

interface ArticlesErrorProps {
  onRetry: () => void;
}

const ArticlesError: React.FC<ArticlesErrorProps> = ({ onRetry }) => {
  return (
    <div className="text-center py-12">
      <div className="text-red-500 text-lg mb-4">Xatolik yuz berdi</div>
      <Button type="primary" onClick={onRetry}>
        Qayta yuklash
      </Button>
    </div>
  );
};

export default ArticlesError;

