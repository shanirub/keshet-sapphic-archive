
import React from 'react';
import { ContentItem } from '@/data/content';
import ContentCard from './ContentCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface ContentSliderProps {
  title: string;
  items: ContentItem[];
  seeAllLink?: string;
}

const ContentSlider: React.FC<ContentSliderProps> = ({ title, items, seeAllLink }) => {
  const { t, direction } = useLanguage();
  
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">{title}</h2>
          
          {seeAllLink && (
            <Link 
              to={seeAllLink}
              className="text-sm text-magenta hover:underline"
            >
              {t('ui.seeAll')}
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {items.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSlider;
