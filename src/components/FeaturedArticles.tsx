import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const FeaturedArticles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Sun\'iy intellekt va tibbiyot: yangi imkoniyatlar',
      author: 'Dr. Alisher Karimov',
      date: '2024-01-15',
      category: 'Tibbiyot',
      excerpt: 'Sun\'iy intellekt texnologiyalarining tibbiyot sohasida qo\'llanilishi va kelajakdagi imkoniyatlari haqida...',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Qayta tiklanadigan energiya manbalari',
      author: 'Prof. Malika Toshmatova',
      date: '2024-01-10',
      category: 'Energetika',
      excerpt: 'O\'zbekistonda quyosh va shamol energiyasidan foydalanish imkoniyatlari va rivojlanish yo\'nalishlari...',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Kiberxavfsizlik va ma\'lumotlar himoyasi',
      author: 'Dr. Bobur Rahimov',
      date: '2024-01-05',
      category: 'IT',
      excerpt: 'Zamonaviy kiberxavfsizlik tahdidlari va ularga qarshi kurash usullari...',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Mashhur maqolalar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Eng ko'p o'qilgan va baholangan ilmiy maqolalar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white opacity-50" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString('uz-UZ')}</span>
                  </div>
                </div>
                
                <Link
                  to={`/articles/${article.id}`}
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
            to="/articles"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            Barcha maqolalarni ko'rish
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
