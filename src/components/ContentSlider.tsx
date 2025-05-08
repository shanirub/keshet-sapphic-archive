
import React from 'react';
import { ContentItem } from '@/data/content';
import ContentCard from './ContentCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ScrollArea } from './ui/scroll-area';

interface ContentSliderProps {
  title: string;
  items: ContentItem[];
  seeAllLink?: string;
}

const ContentSlider: React.FC<ContentSliderProps> = ({ title, items, seeAllLink }) => {
  const { t, direction } = useLanguage();
  
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-magenta to-purple-600">
            {title}
          </h2>
          
          {seeAllLink && (
            <Link 
              to={seeAllLink}
              className="text-sm text-magenta hover:text-magenta/70 font-medium hover:underline"
            >
              {t('ui.seeAll')}
            </Link>
          )}
        </div>
        
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex space-x-4 md:space-x-6">
            {items.map((item) => (
              <div key={item.id} className="min-w-[160px] md:min-w-[200px]">
                <ContentCard key={item.id} item={item} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default ContentSlider;
