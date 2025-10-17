import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Innovator Jurnali
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ilmiy tadqiqotlar va innovatsion yechimlar uchun yetakchi platforma. 
              Olimlar, tadqiqotchilar va talabalar uchun eng so'nggi ilmiy maqolalar, 
              jurnallar va yangiliklar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/articles"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                Maqolalarni ko'rish
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                Ro'yxatdan o'tish
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <BookOpen className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Ilmiy maqolalar</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-blue-100">Foydalanuvchilar</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <TrendingUp className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-blue-100">Jurnallar</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <BookOpen className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-blue-100">Yangi ma'lumotlar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
