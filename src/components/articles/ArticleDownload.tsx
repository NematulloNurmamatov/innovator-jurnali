import React from 'react';
import FileDownloadCard from '../FileDownloadCard';
import type { Article } from '../../api/types';

interface ArticleDownloadProps {
  article: Article;
  onDownload: () => void;
  onView: () => void;
}

const ArticleDownload: React.FC<ArticleDownloadProps> = ({ article, onDownload, onView }) => {
  const getFileType = (url: string): 'PDF' | 'DOCX' | 'JPG' | 'PNG' | 'FILE' => {
    const ext = url.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'pdf': return 'PDF';
      case 'docx': return 'DOCX';
      case 'jpg': case 'jpeg': return 'JPG';
      case 'png': return 'PNG';
      default: return 'FILE';
    }
  };

  if (!article.content_file) return null;

  return (
    <div className="mb-8">
      <h3 className="text-lg dark:text-white text-gray-900 font-semibold mb-4">Maqola fayli</h3>
      <FileDownloadCard
        fileName={article.name || 'Maqola fayli'}
        fileSize="~1 MB"
        fileType={getFileType(article.content_file)}
        uploadDate={article.created_at || ''}
        onDownload={onDownload}
        onView={onView}
        accessType={article.access_type}
        className={`${article.access_type === -10
            ? "opacity-60 pointer-events-none !cursor-not-allowed pointer-events-none"
            : "cursor-pointer"
          }`} 
        />
    </div>
  );
};

export default ArticleDownload;
