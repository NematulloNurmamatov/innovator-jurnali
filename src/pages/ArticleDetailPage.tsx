import React from 'react';
import { useParams } from 'react-router-dom';
import { useArticle } from '../hooks/useArticle';
import ArticleDetailLoading from '../components/articles/ArticleDetailLoading';
import ArticleDetailError from '../components/articles/ArticleDetailError';
import ArticleNavigation from '../components/articles/ArticleNavigation';
import ArticleHeader from '../components/articles/ArticleHeader';
import ArticleImage from '../components/articles/ArticleImage';
import ArticleAuthors from '../components/articles/ArticleAuthors';
import ArticleDownload from '../components/articles/ArticleDownload';
import ArticleTags from '../components/articles/ArticleTags';
import ArticleSidebar from '../components/articles/ArticleSidebar';
import ArticleMetadata from '../components/articles/ArticleMetadata';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { article, isLoading, error, latest } = useArticle(id!);

  if (isLoading) {
    return <ArticleDetailLoading />;
  }

  if (error || !article) {
    return <ArticleDetailError />;
  }

  const handleDownload = () => {
    if (article.access_type === -10) return;
    window.open(article.content_file, '_blank');
  };

  const handleView = () => {
    window.open(article.content_file, '_blank');
  };


  return (
    <div className="min-h-screen dark:bg-gray-900 dark:!text-white bg-white py-8">
      <div className="container mx-auto px-4">
        <ArticleNavigation />

        <div className="grid dark:bg-gray-900 bg-white grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="dark:bg-gray-900 bg-white lg:col-span-2">
            <div className="mb-4">
              <ArticleHeader article={article} />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-6 gap-4'>

              <div className='col-span-1 lg:col-span-2'>
                <ArticleImage article={article} />
              </div>

              <div className='col-span-1 lg:col-span-4'>
                <div className="mb-6 h-[400px] flex flex-col !justify-between">
                  <p className="dark:text-gray-300 text-gray-700 text-lg line-clamp-10 leading-relaxed">
                    {article.annotation || 'Annotatsiya mavjud emas.'}
                  </p>
                  <div className=''>
                    <ArticleMetadata article={article} />
                  </div>

                </div>
              </div>

            </div>

            <ArticleAuthors article={article} />
            <ArticleDownload
              article={article}
              onDownload={handleDownload}
              onView={handleView}
            />
            <ArticleTags article={article} />
          </div>

          {/* Sidebar - 1/3 width */}
          <ArticleSidebar latest={latest || []} />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;