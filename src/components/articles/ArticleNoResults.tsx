import React from 'react';
import { Search } from 'lucide-react';

interface ArticleNoResultsProps {
  hasQuery: boolean;
  onClearSearch: () => void;
}

const ArticleNoResults: React.FC<ArticleNoResultsProps> = ({ hasQuery, onClearSearch }) => {
  return (
    <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
        <Search className="h-10 w-10 text-gray-400" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        Maqolalar topilmadi
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-md mx-auto">
        {hasQuery 
          ? 'Qidiruv bo\'yicha hech narsa topilmadi. Boshqa kalit so\'zlar bilan qaytadan urinib ko\'ring.' 
          : 'Hozircha maqolalar mavjud emas.'
        }
      </p>
      {hasQuery && (
        <button
          onClick={onClearSearch}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Barcha maqolalarni ko'rsatish
        </button>
      )}
    </div>
  );
};

export default ArticleNoResults;
