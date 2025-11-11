import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ArticleNavigation: React.FC = () => {
  return (
    <div className="mb-6">
      <Link to="/" className="inline-flex dark:text-white text-gray-900 items-center text-blue-600 hover:text-blue-800">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default ArticleNavigation;
