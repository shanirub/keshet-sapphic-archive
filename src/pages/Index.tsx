
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import HeroSection from '@/components/HeroSection';
import ContentSlider from '@/components/ContentSlider';
import { content } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import ContentChatbot from '@/components/ContentChatbot';
import SurpriseMe from '@/components/SurpriseMe';

const Index = () => {
  const { t } = useLanguage();
  
  const featuredItem = content.find(item => item.isFeatured) || content[0];
  const newestItems = content.filter(item => item.isNew).slice(0, 6);
  const popularItems = [...content].sort((a, b) => b.rating - a.rating).slice(0, 6);
  const movieItems = content.filter(item => item.type === 'movie').slice(0, 6);
  const tvItems = content.filter(item => item.type === 'tv').slice(0, 6);
  
  return (
    <MainLayout>
      <HeroSection featuredItem={featuredItem} />
      
      <ContentSlider 
        title={t('ui.recentlyAdded')} 
        items={newestItems} 
        seeAllLink="/newest"
      />
      
      <SurpriseMe />
      
      <ContentSlider 
        title={t('ui.popularNow')} 
        items={popularItems} 
        seeAllLink="/popular"
      />
      
      <ContentChatbot />
      
      <ContentSlider 
        title={t('nav.movies')} 
        items={movieItems} 
        seeAllLink="/movies"
      />
      
      {tvItems.length > 0 && (
        <ContentSlider 
          title={t('nav.tv')} 
          items={tvItems} 
          seeAllLink="/tv"
        />
      )}
    </MainLayout>
  );
};

export default Index;
