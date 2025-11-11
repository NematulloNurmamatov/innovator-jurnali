import React from 'react';
import { TrendingUp, Globe, Eye, Download, Share2 } from 'lucide-react';

interface JournalDetailSidebarProps {
  indexing?: string[];
  website?: string;
}

const JournalDetailSidebar: React.FC<JournalDetailSidebarProps> = ({ indexing, website }) => {
  return (
    <div className="space-y-6">
      {/* Indexing */}
      {indexing && indexing.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            Indekslash
          </h3>
          <div className="space-y-2">
            {indexing.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Website */}
      {website && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            Rasmiy veb-sayt
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            Jurnalning barcha sonlari va maqolalari rasmiy platformada jamlangan.
          </p>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            <Globe className="h-4 w-4" />
            Saytga o'tish
          </a>
        </div>
      )}

      {/* Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Tezkor amallar
        </h3>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Eye className="h-4 w-4" />
            So'nggi sonni ko'rish
          </button>
          <button className="w-full flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Download className="h-4 w-4" />
            Ma'lumotnomani yuklab olish
          </button>
          <button className="w-full flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Share2 className="h-4 w-4" />
            Ulashish
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalDetailSidebar;

