import React from 'react';
import { Pagination } from 'antd';

interface NewsPaginationProps {
  current: number;
  total: number;
  pageSize: number;
  onNext: () => void;
  onPrevious: () => void;
}

const NewsPagination: React.FC<NewsPaginationProps> = ({
  current,
  total,
  pageSize,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="flex justify-center pb-12">
      <Pagination
        current={current}
        total={total || 0}
        pageSize={pageSize}
        showSizeChanger={false}
        onChange={(p) => {
          if (p > current) onNext();
          else onPrevious();
        }}
      />
    </div>
  );
};

export default NewsPagination;

