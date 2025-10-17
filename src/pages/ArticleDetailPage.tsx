import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Eye, Heart, Tag, Clock, BookOpen } from 'lucide-react';
import { getArticleById } from '../data/sampleData';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(parseInt(id || '0'));

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Maqola topilmadi</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">So'ralgan maqola mavjud emas yoki o'chirilgan.</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Orqaga qaytish
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cover Image */}
            <div className="lg:w-1/3">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Article Info */}
            <div className="lg:w-2/3">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {article.title}
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {article.excerpt}
              </p>
              
              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <User className="h-5 w-5 mr-2" />
                  <span>{article.author}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{new Date(article.publishedDate).toLocaleDateString('uz-UZ')}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{article.readTime} daqiqa o'qish</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Eye className="h-5 w-5 mr-2" />
                  <span>{article.views.toLocaleString()} ko'rish</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Heart className="h-5 w-5 mr-2" />
                  <span>{article.likes} yoqtirish</span>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br>') }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
