import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ContentItem } from '@/data/content';
import { getMoviePoster } from '@/lib/tmdb';

interface HeroSectionProps {
  featuredItem: ContentItem;
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredItem }) => {
  const { language, t } = useLanguage();
  const [posterUrl, setPosterUrl] = useState<string>('/placeholder.svg');
  
  useEffect(() => {
    const fetchPoster = async () => {
      console.log('HeroSection: Fetching poster for', featuredItem.title.en, 'type:', featuredItem.type);
      if (featuredItem.type === 'movie' || featuredItem.type === 'tv') {
        const url = await getMoviePoster(featuredItem.title.en, (featuredItem as any).tmdb_id);
        console.log('HeroSection: Got poster URL:', url);
        setPosterUrl(url);
      } else {
        console.log('HeroSection: Using original image:', featuredItem.image);
        setPosterUrl(featuredItem.image);
      }
    };
    
    fetchPoster();
  }, [featuredItem.title.en, featuredItem.type, featuredItem.image, (featuredItem as any).tmdb_id]);
  
  return (
    <section className="relative bg-background text-foreground overflow-hidden border-b-2 border-black">
      <div className="absolute inset-0 opacity-20 brat-gradient"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 py-12 md:py-20 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl brat-title mb-4">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl mb-8 font-grotesk">
              {t('home.hero.subtitle')}
            </p>
            <div className="mb-8 bg-brat-lime p-6 border-2 border-black">
              <div className="text-black font-courier uppercase font-bold tracking-wider mb-2">{t('home.featured')}</div>
              <div className="text-3xl font-bold mb-1 font-courier uppercase">{featuredItem.title[language]}</div>
              <div className="text-black font-grotesk">{featuredItem.year}</div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-square w-full overflow-hidden animate-fade-in border-2 border-black">
              <img 
                src={posterUrl} 
                alt={featuredItem.title[language]} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-brat-pink border-2 border-black"></div>
            <div className="absolute -top-5 -right-5 w-10 h-10 bg-brat-yellow border-2 border-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
