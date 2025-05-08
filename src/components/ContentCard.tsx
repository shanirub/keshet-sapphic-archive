
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
    small: 'w-full md:w-40',
    medium: 'w-full md:w-52',
    large: 'w-full md:w-72',
  };
  
  return (
    <Link 
      to={`/${item.type}s/${item.id}`} 
      className={`content-card ${sizeClasses[size]} hover-scale`}
    >
      <div className="content-card-image">
        <img 
          src={item.image} 
          alt={item.title[language]} 
          className="w-full h-full object-cover"
        />
        {item.isNew && (
          <div className="absolute top-2 left-2 bg-magenta text-white text-xs px-2 py-0.5 rounded">
            {language === 'en' ? 'New' : 'חדש'}
          </div>
        )}
      </div>
      <div className="content-card-title">
        {item.title[language]}
      </div>
      <div className="content-card-subtitle">
        {item.year}
      </div>
    </Link>
  );
};

export default ContentCard;
