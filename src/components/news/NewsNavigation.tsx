import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NewsNavigation: React.FC = () => {
  return (
    <div className="mb-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="w-4 h-4" /> Yangiliklar ro'yxatiga qaytish
      </Link>
    </div>
  );
};

export default NewsNavigation;
