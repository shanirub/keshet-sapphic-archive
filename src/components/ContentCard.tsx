
import React from 'react';
import { ContentItem } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface ContentCardProps {
  item: ContentItem;
  size?: 'small' | 'medium' | 'large';
}

const ContentCard: React.FC<ContentCardProps> = ({ item, size = 'medium' }) => {
  const { language } = useLanguage();
  
  const sizeClasses = {
    small: 'w-full',
    medium: 'w-full',
    large: 'w-full',
  };
  
  return (
    <Link 
      to={`/${item.type}s/${item.id}`} 
      className={`content-card ${sizeClasses[size]} hover-scale`}
    >
      <div className="content-card-image rounded-md overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title[language]} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {item.isNew && (
          <div className="absolute top-2 left-2 bg-magenta text-white text-xs px-2 py-0.5 rounded">
            {language === 'en' ? 'New' : 'חדש'}
          </div>
        )}
      </div>
      <div className="content-card-title mt-2 font-bold">
        {item.title[language]}
      </div>
    </Link>
  );
};

export default ContentCard;
