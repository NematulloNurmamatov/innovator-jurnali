import React from 'react';
import { Empty, Button } from 'antd';

interface NewsEmptyProps {
  hasQuery: boolean;
  onClearSearch: () => void;
}

const NewsEmpty: React.FC<NewsEmptyProps> = ({ hasQuery, onClearSearch }) => {
  return (
    <div className="py-20 flex flex-col items-center">
      <Empty description="Yangiliklar topilmadi" />
      {hasQuery && (
        <Button onClick={onClearSearch} className="mt-4" type="primary">
          Barchasini ko'rsatish
        </Button>
      )}
    </div>
  );
};

export default NewsEmpty;

