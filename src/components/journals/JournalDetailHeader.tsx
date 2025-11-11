import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft} from 'lucide-react';

interface JournalDetailHeaderProps {
  journal: {
    category: string;
    rating: number;
    title: string;
    description: string;
    articlesCount: number;
    editorsCount?: number;
    impactFactor?: string;
    lastIssue: string;
  };
}

const JournalDetailHeader: React.FC<JournalDetailHeaderProps> = ({ journal }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-800 border-b mb-6 !py-4 border-gray-200 dark:border-gray-700">
      <div className="container py-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Ortga qaytish
        </button>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-sm font-medium">
                {journal.category}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                ⭐ {journal.rating.toFixed(1)}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {journal.title}
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {journal.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetailHeader;

