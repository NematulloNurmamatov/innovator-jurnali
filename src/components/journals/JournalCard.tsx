import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, FileText, Users } from 'lucide-react';

interface JournalCardProps {
  journal: {
    id: number;
    title: string;
    description: string;
    category: string;
    rating: number;
    articlesCount: number;
    editorialTeam?: any[];
    lastIssue: string;
  };
}

const JournalCard: React.FC<JournalCardProps> = ({ journal }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {journal.category}
            </span>
          </div>
          <div className="text-sm font-semibold text-gray-900 dark:text-white">
            ⭐ {journal.rating.toFixed(1)}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {journal.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
          {journal.description}
        </p>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-gray-400" />
            <div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {journal.articlesCount}
              </div>
              <div className="text-xs text-gray-500">Maqola</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-400" />
            <div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {journal.editorialTeam?.length || 12}+
              </div>
              <div className="text-xs text-gray-500">Muharrir</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{new Date(journal.lastIssue).toLocaleDateString('uz-UZ')}</span>
          </div>
          
          <Link
            to={`/journals/${journal.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Batafsil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;

