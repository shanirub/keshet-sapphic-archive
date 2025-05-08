
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
  
  // Only show 6 items in grid (3x2)
  const displayItems = items.slice(0, 6);
  
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl brat-title bg-brat-lime px-2 py-1 inline-block">
            {title}
          </h2>
          
          {seeAllLink && (
            <Link 
              to={seeAllLink}
              className="text-sm font-courier uppercase font-bold tracking-wider hover:underline"
            >
              {t('ui.seeAll')}
            </Link>
          )}
        </div>
        
        <div className="grid-layout">
          {displayItems.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSlider;
