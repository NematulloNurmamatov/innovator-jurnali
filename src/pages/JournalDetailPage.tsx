import React from 'react';
import { useParams } from 'react-router-dom';
import { getJournalById } from '../data/journals';
import JournalDetailNotFound from '../components/journals/JournalDetailNotFound';
import JournalDetailHeader from '../components/journals/JournalDetailHeader';
import JournalDetailAbout from '../components/journals/JournalDetailAbout';
import JournalDetailInfo from '../components/journals/JournalDetailInfo';
import JournalDetailTopics from '../components/journals/JournalDetailTopics';
import JournalDetailHighlights from '../components/journals/JournalDetailHighlights';
import JournalDetailSidebar from '../components/journals/JournalDetailSidebar';

const JournalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const journalId = Number(id);
  const journal = getJournalById(journalId);

  if (!journal) {
    return <JournalDetailNotFound />;
  }

  return (
    <div className="min-h-screen container container !my-12 dark:bg-gray-900">
      <JournalDetailHeader journal={journal} />

      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <JournalDetailAbout
              title={journal.title}
              category={journal.category}
              fullDescription={journal.description}
            />

            <JournalDetailInfo
              issn={journal.issn}
              institution={journal.institution}
              established={journal.established}
              frequency="Choraklik"
            />

            <JournalDetailTopics topics={journal.topics} />

            <JournalDetailHighlights highlights={journal.highlights} />
          </div>

          <JournalDetailSidebar
            indexing={journal.indexing}
            website={journal.website}
          />
        </div>
      </div>
    </div>
  );
};

export default JournalDetailPage;