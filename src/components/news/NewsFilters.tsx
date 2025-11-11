import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';

const { Option } = Select;

interface NewsFiltersProps {
  query: string;
  timeFilter: string;
  onSearchChange: (value: string) => void;
  onTimeFilterChange: (value: string) => void;
}

const NewsFilters: React.FC<NewsFiltersProps> = ({
  query,
  timeFilter,
  onSearchChange,
  onTimeFilterChange,
}) => {
  return (
    <div className="justify-end mb-8 flex flex-col md:flex-row gap-4 items-center">
      <Input
        prefix={<SearchOutlined />}
        placeholder="Qidirish..."
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 md:max-w-md dark:!bg-gray-900 dark:!text-white text-gray-900 bg-white dark:!border-gray-700 border-gray-200"
        size="large"
      />

      <Select
        size="large"
        value={timeFilter || 'all'}
        onChange={(val) => onTimeFilterChange(val === 'all' ? '' : val)}
        style={{ minWidth: 200 }}
      >
        <Option value="all">Barcha yangiliklar</Option>
        <Option value="today">Bugungi</Option>
        <Option value="week">Haftalik</Option>
        <Option value="month">Oylik</Option>
      </Select>
    </div>
  );
};

export default NewsFilters;

