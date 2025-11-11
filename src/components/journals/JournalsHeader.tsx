import React from 'react';

const JournalsHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        Ilmiy Jurnallar
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Xalqaro darajadagi ilmiy jurnallar va ularning so'nggi sonlari
      </p>
    </div>
  );
};

export default JournalsHeader;

