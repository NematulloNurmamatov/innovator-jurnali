import React from 'react';

interface JournalDetailAboutProps {
  title: string;
  category: string;
  fullDescription?: string;
}

const JournalDetailAbout: React.FC<JournalDetailAboutProps> = ({ title, category, fullDescription }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Jurnal haqida
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {fullDescription || 
          `${title} - bu xalqaro darajadagi ilmiy jurnal bo'lib, ${category} sohasidagi eng so'nggi tadqiqotlar va innovatsion kashfiyotlarni nashr etadi. Jurnal yuqori ilmiy standartlar va qat'iy ekspert baholash jarayoniga ega.`
        }
      </p>
    </div>
  );
};

export default JournalDetailAbout;

