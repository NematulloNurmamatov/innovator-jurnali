import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedArticles from '../components/FeaturedArticles';
import LatestNews from '../components/LatestNews';
import JournalsSection from '../components/JournalsSection';
import StatsSection from '../components/StatsSection';
import DailyActiveUsers from '../components/DailyActiveUsers';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturedArticles />
      <DailyActiveUsers />
      <JournalsSection />
      <LatestNews />
    </div>
  );
};

export default HomePage;
