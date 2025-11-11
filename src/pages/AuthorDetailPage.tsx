import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, BookOpen, GraduationCap, Mail, Phone } from 'lucide-react';
import { useApiCall } from '../api/hooks';
import { articlesAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import { useAuthor } from '../hooks/useAuthor';
import type { ArticleList } from '../api/types';

const AuthorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { anonymousToken } = useAuth();
  
  const { author, isLoading: loading, error } = useAuthor(id!);

  // Author's articles - memoize API call
  const articlesApiCall = useMemo(() => 
    () => articlesAPI.getArticlesByCoAuthor(id!, { per_page: 6 }, undefined, anonymousToken || undefined),
    [id, anonymousToken]
  );
  
  const { data: articlesData } = useApiCall(articlesApiCall, [id, anonymousToken]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Muallif ma'lumotlari yuklanmoqda...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">Xatolik: {error.message}</p>
            <Link
              to="/authors"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Mualliflar ro'yxatiga qaytish
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Muallif topilmadi
            </h1>
            <Link
              to="/authors"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Mualliflar ro'yxatiga qaytish
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/authors"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Mualliflar ro'yxatiga qaytish
        </Link>

        {/* Author Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              {author.image ? (
                <img
                  src={author.image}
                  alt={author.fullname}
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <User className="h-12 w-12 text-blue-600" />
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {author.fullname}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Science ID: {author.science_id}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Ro'yxatdan o'tgan: {new Date(author.created_at).toLocaleDateString('uz-UZ')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GraduationCap className="h-4 w-4" />
                  <span>Ilmiy muallif</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author's Articles */}
        {articlesData && articlesData.results.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Muallifning maqolalari ({articlesData.count})
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articlesData.results.map((article: ArticleList) => (
                <div key={article.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    {article.study_fields.map((field) => (
                      <span key={field.id} className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
                        {field.name}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {article.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 text-sm">
                    {article.annotation}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.publication_date ? new Date(article.publication_date).toLocaleDateString('uz-UZ') : 'Noma\'lum sana'}</span>
                    </div>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {article.language.toUpperCase()}
                    </span>
                  </div>
                  
                  <Link
                    to={`/articles/${article.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    <BookOpen className="mr-1 h-3 w-3" />
                    Maqolani o'qish
                  </Link>
                </div>
              ))}
            </div>
            
            {articlesData.count > 6 && (
              <div className="text-center mt-6">
                <Link
                  to={`/articles?author=${author.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Barcha maqolalarni ko'rish
                </Link>
              </div>
            )}
          </div>
        )}

        {/* No Articles */}
        {articlesData && articlesData.results.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Muallifning maqolalari
            </h2>
            <div className="text-center py-8">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300">
                Bu muallifning hali maqolalari mavjud emas
              </p>
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Aloqa ma'lumotlari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="text-gray-900 dark:text-white">Ma'lumot mavjud emas</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Telefon</p>
                <p className="text-gray-900 dark:text-white">Ma'lumot mavjud emas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailPage;
