import React, { useMemo } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedArticles from '../components/FeaturedArticles';
import LatestNews from '../components/LatestNews';
import { useApiCall } from '../api/hooks';
import { coverPagesAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import FaqSection from '../components/about/FaqSection';
import TeamSection from '../components/about/TeamSection';
import ValuesSection from '../components/about/ValuesSection';
import AboutStatsSection from '../components/about/AboutStatsSection';
import MissionSection from '../components/about/MissionSection';

const HomePage: React.FC = () => {
  const { anonymousToken } = useAuth();
  
  const coverPageApiCall = useMemo(() => 
    () => coverPagesAPI.getCoverPage(undefined, anonymousToken || undefined),
    [anonymousToken]
  );
  
  const { data: coverPage } = useApiCall(coverPageApiCall);

  return (
    <div className="min-h-screen">
      <HeroSection coverPage={coverPage} />
      <FeaturedArticles />
      <LatestNews />
      <AboutStatsSection />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
