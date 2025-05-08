
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ContentItem } from '@/data/content';

interface HeroSectionProps {
  featuredItem: ContentItem;
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredItem }) => {
  const { language, t } = useLanguage();
  
  return (
    <section className="relative bg-dark-gray text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-magenta to-black"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 py-20 md:py-28 min-h-[70vh] items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-magenta">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-md">
              {t('home.hero.subtitle')}
            </p>
            <div className="mb-8 bg-dark-gray/50 backdrop-blur-sm p-6 rounded-lg border border-magenta/20">
              <div className="text-magenta font-bold mb-2 uppercase tracking-wider">{t('home.featured')}</div>
              <div className="text-3xl font-bold mb-1">{featuredItem.title[language]}</div>
              <div className="text-gray-300">{featuredItem.year}</div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] w-full overflow-hidden animate-fade-in rounded-lg border-2 border-magenta">
              <img 
                src={featuredItem.image} 
                alt={featuredItem.title[language]} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray to-transparent opacity-40"></div>
            </div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-magenta rounded-full"></div>
            <div className="absolute -top-5 -right-5 w-10 h-10 bg-magenta rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
