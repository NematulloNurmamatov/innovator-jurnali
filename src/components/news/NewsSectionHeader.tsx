import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NewsSectionHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        So'nggi Yangiliklar
      </h2>
      <Link 
        to="/news" 
        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-semibold flex items-center gap-1"
      >
        Ko'proq ko'rish
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default NewsSectionHeader;
