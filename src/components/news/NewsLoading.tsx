import React from 'react';
import { Spin } from 'antd';

const NewsLoading: React.FC = () => {
  return (
    <div className="flex justify-center py-20">
      <Spin size="large" />
    </div>
  );
};

export default NewsLoading;

