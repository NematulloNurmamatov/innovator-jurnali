import React from 'react';
import { Link } from 'react-router-dom';

const NewsDetailError: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-xl font-semibold text-gray-700 mb-3">
        Yangilik topilmadi 😕
      </p>
      <Link
        to="/news"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Barcha yangiliklar
      </Link>
    </div>
  );
};

export default NewsDetailError;
