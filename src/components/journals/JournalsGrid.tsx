import React from 'react';
import JournalCard from './JournalCard';

interface JournalsGridProps {
  journals: any[];
}

const JournalsGrid: React.FC<JournalsGridProps> = ({ journals }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {journals.map((journal) => (
        <JournalCard key={journal.id} journal={journal} />
      ))}
    </div>
  );
};

export default JournalsGrid;

