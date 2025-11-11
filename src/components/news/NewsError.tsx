import React from 'react';
import { Button } from 'antd';

interface NewsErrorProps {
  error: Error;
  onRetry: () => void;
}

const NewsError: React.FC<NewsErrorProps> = ({ error, onRetry }) => {
  return (
    <div className="text-center py-20">
      <p className="text-red-500 mb-4">Xatolik yuz berdi: {error.message}</p>
      <Button onClick={onRetry} type="primary">
        Qayta yuklash
      </Button>
    </div>
  );
};

export default NewsError;

