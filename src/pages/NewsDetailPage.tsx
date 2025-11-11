import React from "react";
import { useParams } from "react-router-dom";
import { useNews } from "../hooks/useNews";
import NewsDetailLoading from "../components/news/NewsDetailLoading";
import NewsDetailError from "../components/news/NewsDetailError";
import NewsNavigation from "../components/news/NewsNavigation";
import NewsDetailHeader from "../components/news/NewsDetailHeader";
import NewsDetailImage from "../components/news/NewsDetailImage";
import NewsDetailContent from "../components/news/NewsDetailContent";
import NewsDetailShare from "../components/news/NewsDetailShare";
import NewsDetailSidebar from "../components/news/NewsDetailSidebar";

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { news, isLoading, error, latest } = useNews(id!);

  if (isLoading) {
    return <NewsDetailLoading />;
  }

  if (error || !news) {
    return <NewsDetailError />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container !py-10">
        <NewsNavigation />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <NewsDetailHeader news={news} />
            <NewsDetailImage news={news} />
            <NewsDetailContent news={news} />
            <NewsDetailShare />
          </div>

          <NewsDetailSidebar latest={latest || []} />
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Yangiliklar portali
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
