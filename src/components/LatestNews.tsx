import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';

const LatestNews: React.FC = () => {
  const news = [
    {
      id: 1,
      title: 'O\'zbekistonda yangi ilmiy markaz ochildi',
      author: 'Admin',
      date: '2024-01-20',
      category: 'Yangiliklar',
      excerpt: 'Toshkentda yangi ilmiy tadqiqotlar markazi ochildi. Markazda zamonaviy laboratoriyalar va tadqiqotchilar uchun barcha sharoitlar yaratilgan.',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Xalqaro ilmiy konferensiya o\'tkazildi',
      author: 'Admin',
      date: '2024-01-18',
      category: 'Tadbir',
      excerpt: 'O\'zbekiston Respublikasi Fanlar akademiyasida xalqaro ilmiy konferensiya bo\'lib o\'tdi. Konferensiyada 15 mamlakatdan 200 dan ortiq olim ishtirok etdi.',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Yangi ilmiy grant dasturi e\'lon qilindi',
      author: 'Admin',
      date: '2024-01-15',
      category: 'Grant',
      excerpt: 'Yosh tadqiqotchilar uchun yangi grant dasturi e\'lon qilindi. Dastur doirasida 50 ta loyiha uchun moliyaviy yordam ko\'rsatiladi.',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            So'nggi yangiliklar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ilmiy dunyodagi eng so'nggi yangiliklar va tadbirlar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                <Newspaper className="h-16 w-16 text-white opacity-50" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(item.date).toLocaleDateString('uz-UZ')}</span>
                  </div>
                </div>
                
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Batafsil o'qish
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/news"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            Barcha yangiliklarni ko'rish
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
