import React from 'react';
import { Search } from 'lucide-react';
import { Button } from 'antd';

interface ArticlesEmptyProps {
  hasQuery: boolean;
  onClearSearch: () => void;
}

const ArticlesEmpty: React.FC<ArticlesEmptyProps> = ({ hasQuery, onClearSearch }) => {
  return (
    <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
      <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Maqolalar topilmadi
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {hasQuery ? 'Qidiruv bo\'yicha hech narsa topilmadi.' : 'Hozircha maqolalar mavjud emas.'}
      </p>
      {hasQuery && (
        <Button type="primary" onClick={onClearSearch}>
          Barcha maqolalarni ko'rsatish
        </Button>
      )}
    </div>
  );
};

export default ArticlesEmpty;

