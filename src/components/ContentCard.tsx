
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
      <div className="content-card-image rounded-none overflow-hidden bg-black border border-brat-lime">
        <img 
          src={item.image} 
          alt={item.title[language]} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {item.isNew && (
          <div className="absolute top-0 left-0 bg-brat-pink text-black text-xs px-2 py-0.5 uppercase font-bold tracking-wider">
            {language === 'en' ? 'New' : 'חדש'}
          </div>
        )}
      </div>
      <div className="content-card-title font-courier uppercase font-bold tracking-wider">
        {item.title[language]}
      </div>
      <div className="text-xs opacity-70">{item.year}</div>
    </Link>
  );
};

export default ContentCard;
