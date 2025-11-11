import React from 'react';
import { Tag as AntTag } from 'antd';
import type { Article } from '../../api/types';

interface ArticleTagsProps {
  article: Article;
}

const ArticleTags: React.FC<ArticleTagsProps> = ({ article }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {article.tags?.map((tag: any) => (
        <AntTag key={tag.id} color="default" className="text-sm">
          #{tag.name}
        </AntTag>
      ))}
      {article.study_fields?.map((field: any) => (
        <AntTag key={field.id} color="blue" className="text-sm">
          {field.name}
        </AntTag>
      ))}
    </div>
  );
};

export default ArticleTags;
