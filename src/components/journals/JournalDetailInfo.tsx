import React from 'react';
import { Award, Users, Calendar, BookOpen } from 'lucide-react';

interface JournalDetailInfoProps {
  issn?: string;
  institution?: string;
  established?: number;
  frequency?: string;
}

const JournalDetailInfo: React.FC<JournalDetailInfoProps> = ({
  issn,
  institution,
  established,
  frequency,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Asosiy ma'lumotlar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {issn && (
          <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600">
            <Award className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">ISSN</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{issn}</div>
            </div>
          </div>
        )}
        {institution && (
          <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600">
            <Users className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Tashkilot</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{institution}</div>
            </div>
          </div>
        )}
        {established && (
          <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600">
            <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Tashkil etilgan</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{established} yil</div>
            </div>
          </div>
        )}
        {frequency && (
          <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600">
            <BookOpen className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Nashr chastotasi</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{frequency}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalDetailInfo;

