import React from 'react';

interface JournalDetailHighlightsProps {
  highlights?: string[];
}

const JournalDetailHighlights: React.FC<JournalDetailHighlightsProps> = ({ highlights }) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        So'nggi yutuqlar va yangiliklar
      </h2>
      <div className="space-y-3">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600"
          >
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {index + 1}
            </span>
            <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalDetailHighlights;

