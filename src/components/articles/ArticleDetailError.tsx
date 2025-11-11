import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const ArticleDetailError: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="py-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Maqola topilmadi</h1>
          <p className="text-gray-600 mb-8">So'ralgan maqola mavjud emas yoki yuklashda xatolik yuz berdi.</p>
          <Link to="/articles">
            <Button type="primary" size="large">
              Maqolalar ro'yxatiga qaytish
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailError;
