import React from 'react';
import { journals } from '../data/journals';
import JournalsHeader from './journals/JournalsHeader';
import JournalsGrid from './journals/JournalsGrid';
import JournalsFeatures from './journals/JournalsFeatures';

const JournalsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 sm:px-6 lg:px-8">
        <JournalsHeader />
        <JournalsGrid journals={journals} />
        <JournalsFeatures />
      </div>
    </section>
  );
};

export default JournalsSection;