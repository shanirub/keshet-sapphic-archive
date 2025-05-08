import React, { useEffect, useState } from 'react';
import { ContentItem } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { getMoviePoster } from '@/lib/tmdb';

interface ContentCardProps {
  item: ContentItem;
  size?: 'small' | 'medium' | 'large';
}

const ContentCard: React.FC<ContentCardProps> = ({ item, size = 'medium' }) => {
  const { language } = useLanguage();
  const [posterUrl, setPosterUrl] = useState<string>('/placeholder.svg');
  
  useEffect(() => {
    const fetchPoster = async () => {
      console.log('ContentCard: Fetching poster for', item.title.en, 'type:', item.type);
      if (item.type === 'movie' || item.type === 'tv') {
        const url = await getMoviePoster(item.title.en, (item as any).tmdb_id);
        console.log('ContentCard: Got poster URL:', url);
        setPosterUrl(url);
      } else {
        console.log('ContentCard: Using original image:', item.image);
        setPosterUrl(item.image);
      }
    };
    
    fetchPoster();
  }, [item.title.en, item.type, item.image, (item as any).tmdb_id]);
  
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
      <div className="content-card-image rounded-none overflow-hidden border border-brat-lime">
        <img 
          src={posterUrl} 
          alt={item.title[language]} 
          className="w-full h-full object-cover aspect-square transition-transform hover:scale-105"
        />
        {item.isNew && (
          <div className="absolute top-0 left-0 bg-brat-pink text-dark-gray text-xs px-2 py-0.5 uppercase font-bold tracking-wider">
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
