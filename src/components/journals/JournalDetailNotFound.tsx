import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowLeft } from 'lucide-react';

const JournalDetailNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center space-y-6 p-8">
        <div className="w-24 h-24 mx-auto bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
          <BookOpen className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Jurnal topilmadi
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
          Siz qidirgan jurnal mavjud emas yoki o'chirilgan bo'lishi mumkin.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors font-medium"
        >
          <ArrowLeft className="h-5 w-5" />
          Ortga qaytish
        </button>
      </div>
    </div>
  );
};

export default JournalDetailNotFound;

