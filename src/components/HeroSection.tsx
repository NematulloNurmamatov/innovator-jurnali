import React from 'react';
import { Link } from 'react-router-dom';
import type { CoverPage } from '../api/types';

interface HeroSectionProps {
  coverPage?: CoverPage | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ coverPage }) => {
  const token =
    localStorage.getItem('userToken');

  return (
    <section
      className="bg-white dark:bg-gray-900 text-gray-900 border-b border-gray-200"
      style={{
        backgroundImage: coverPage?.background_image
          ? `url(${coverPage.background_image})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container min-h-[500px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid pt-4 grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className='flex flex-col justify-center'>
            <h1 className="text-4xl text-white md:text-5xl font-semibold mb-6 leading-tight">
              {coverPage?.title || 'Innovator Jurnali'}
            </h1>
            <p className="text-lg text-white text-gray-700 mb-8">
              {coverPage?.subtitle || 'Ilmiy tadqiqotlar va innovatsion g‘oyalar orqali jamiyat taraqqiyotiga hissa qo‘shuvchi platforma. Bu yerda siz zamonaviy ilmiy izlanishlar, yangicha texnologik yechimlar va dolzarb innovatsion loyihalar haqida maqolalar bilan tanishishingiz mumkin.'}
            </p>

            {!token && (
              <Link
                to="/login"
                className="inline-flex max-w-48 items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                Tizimga kirish
              </Link>

            )}
          </div>

          {/* {!coverPage?.background_image && (
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-1">500+</h3>
                <p className="text-gray-600 text-sm">Ilmiy maqolalar</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-1">1000+</h3>
                <p className="text-gray-600 text-sm">Foydalanuvchilar</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-1">50+</h3>
                <p className="text-gray-600 text-sm">Jurnallar</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-1">24/7</h3>
                <p className="text-gray-600 text-sm">Yangilanadigan ma’lumotlar</p>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
