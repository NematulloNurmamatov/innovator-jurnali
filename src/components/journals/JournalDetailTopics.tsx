import React from 'react';

interface JournalDetailTopicsProps {
  topics?: string[];
}

const JournalDetailTopics: React.FC<JournalDetailTopicsProps> = ({ topics }) => {
  if (!topics || topics.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Asosiy tadqiqot yo'nalishlari
      </h2>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span
            key={topic}
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded font-medium"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JournalDetailTopics;

