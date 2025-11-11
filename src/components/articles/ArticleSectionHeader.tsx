import React from 'react';
import { Link } from 'react-router-dom';
import arrowRightDuotone from '../assets/arrow-left-up-line.svg';

interface SectionHeaderProps {
  title: string;
  linkTo: string;
  linkText?: string;
}

const ArticleSectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  linkTo, 
  linkText = "Ko'proq ko'rish" 
}) => {
  return (
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <Link 
        to={linkTo} 
        className="text-[#0C57A6] hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-[14px] font-semibold flex items-center gap-1"
      >
        {linkText}
        <img src={arrowRightDuotone} alt="" />
      </Link>
    </div>
  );
};

export default ArticleSectionHeader;
