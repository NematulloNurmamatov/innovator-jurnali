import React from 'react';
import { RightSidebar } from '../right-sidebar';

interface RightSidebarWrapperProps {
  children: React.ReactNode;
}

export const RightSidebarWrapper: React.FC<RightSidebarWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">{children}</div>

        <RightSidebar />
      </div>
    </div>
  );
};
