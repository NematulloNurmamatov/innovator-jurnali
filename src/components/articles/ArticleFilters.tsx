import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Select, Button, Input } from 'antd';
import type { StudyFieldList } from '../../api/types';

const { Option } = Select;

interface ArticleFiltersProps {
  query: string;
  selectedLanguage: string;
  selectedStudyField: string;
  accessType: number | undefined;
  studyFields: StudyFieldList[];
  onSearchChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  onStudyFieldChange: (value: string) => void;
  onAccessTypeChange: (value: number | undefined) => void;
  onClearFilters: () => void;
}

const ArticleFilters: React.FC<ArticleFiltersProps> = ({
  query,
  selectedLanguage,
  selectedStudyField,
  accessType,
  studyFields,
  onSearchChange,
  onLanguageChange,
  onStudyFieldChange,
  onAccessTypeChange,
  onClearFilters,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            size="large"
            placeholder="🔍 Maqola nomi, muallif yoki annotatsiya bo'yicha qidirish..."
            prefix={<Search className="h-4 w-4 text-gray-400" />}
            value={query}
            onChange={(e) => onSearchChange(e.target.value)}
            className="rounded-lg shadow-sm focus:ring focus:ring-blue-100"
          />

          <Select
            placeholder="Tilni tanlang"
            value={selectedLanguage || undefined}
            onChange={onLanguageChange}
            className="w-full"
            allowClear
          >
            <Option value="uz">O'zbek</Option>
            <Option value="ru">Rus</Option>
            <Option value="en">Ingliz</Option>
          </Select>

          <Select
            placeholder="Tadqiqot sohasi"
            value={selectedStudyField || undefined}
            onChange={onStudyFieldChange}
            className="w-full"
            allowClear
          >
            {studyFields.map((field) => (
              <Option key={field.id} value={field.id}>
                {field.name}
              </Option>
            ))}
          </Select>

          <Select
            placeholder="Kirish turi"
            value={accessType}
            onChange={onAccessTypeChange}
            className="w-full"
            allowClear
          >
            <Option value={10}>Ommaviy</Option>
            <Option value={-10}>Shaxsiy</Option>
          </Select>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={onClearFilters}
            className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg shadow-sm"
          >
            <Filter className="h-4 w-4" />
            Filtrlarni tozalash
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleFilters;

