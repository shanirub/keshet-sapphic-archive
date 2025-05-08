
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ContentItem } from '@/data/content';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  featuredItem: ContentItem;
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredItem }) => {
  const { language, t } = useLanguage();
  
  return (
    <section className="relative bg-dark-gray text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 py-12 md:py-24 min-h-[60vh] items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('home.hero.title')}</h1>
            <p className="text-lg mb-8 text-gray-300 max-w-md">
              {t('home.hero.subtitle')}
            </p>
            <div className="mb-8">
              <div className="text-magenta font-medium mb-2">{t('home.featured')}</div>
              <div className="text-2xl font-medium mb-1">{featuredItem.title[language]}</div>
              <div className="text-gray-300">{featuredItem.year}</div>
            </div>
            <Link 
              to={`/${featuredItem.type}s/${featuredItem.id}`}
              className="bg-magenta hover:bg-opacity-80 text-white px-6 py-3 inline-flex transition-colors"
            >
              {language === 'en' ? 'Explore' : 'לחקור'}
            </Link>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] w-full overflow-hidden animate-fade-in">
              <img 
                src={featuredItem.image} 
                alt={featuredItem.title[language]} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
