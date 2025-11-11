import React from 'react';
import type { ArticleList } from '../../api/types';
import calendar from '../../assets/icon/Date_range_light.svg'
import eye from '../../assets/icon/View_light.svg'

interface ArticleMetadataProps {
  article: ArticleList;
  created_at?: string;
}

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({ article, created_at }) => {
  return (
    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">

      {
        created_at && (
          <span className="flex items-center">
            <img src={calendar} alt="calendar" className=" mr-1" />
            <span className='text-sm'>
              {article.created_at}
            </span>
          </span>
        )
      }
      {article.publication_date && (
        <span className="flex items-center">
          <img src={calendar} alt="calendar" className=" mr-1" />
          <span className='text-sm'>

            {article.publication_date
              ? new Date(article.publication_date).toLocaleDateString('uz-UZ')
              : "Noma'lum"}
          </span>
        </span>
      )
      }
      <span className="flex items-center">
        <img src={eye} alt="eye" className=" mr-1" />
        <span className='text-sm'>
          {article.view_count}
        </span>
      </span>
    </div>
  );
};

export default ArticleMetadata;
