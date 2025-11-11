import React from 'react';
import { Pagination } from 'antd';

interface ArticlesPaginationProps {
  current: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
}

const ArticlesPagination: React.FC<ArticlesPaginationProps> = ({
  current,
  total,
  pageSize,
  onChange,
}) => {
  return (
    <div className="flex mt-10 justify-center">
      <Pagination
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger={false}
        className="mt-6"
      />
    </div>
  );
};

export default ArticlesPagination;

