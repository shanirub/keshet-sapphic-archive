
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { getRandomMovie } from '@/data/movies';
import { Sparkles } from 'lucide-react';

const SurpriseMe: React.FC = () => {
  const { language } = useLanguage();
  const [randomMovie, setRandomMovie] = useState(getRandomMovie());

  useEffect(() => {
    // Initialize with a random movie
    setRandomMovie(getRandomMovie());
  }, []);

  const handleSurpriseClick = () => {
    setRandomMovie(getRandomMovie());
  };

  if (!randomMovie) return null;

  return (
    <section className="py-16 bg-dark-gray">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {language === 'en' ? 'Surprise Me' : 'הפתע אותי'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Discover something unexpected' 
              : 'גלה משהו לא צפוי'}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[2/3] overflow-hidden bg-secondary rounded-lg">
              <img 
                src={randomMovie.poster_path || '/placeholder.svg'} 
                alt={randomMovie.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            
            <div className="text-left space-y-4">
              <h3 className="text-2xl font-bold">{randomMovie.title}</h3>
              <div className="text-sm text-magenta font-medium">
                {randomMovie.year}
              </div>
              
              <div className="flex flex-wrap gap-2 my-4">
                {randomMovie.genre.map((genre, idx) => (
                  <span 
                    key={idx} 
                    className="bg-magenta/20 text-magenta text-xs px-3 py-1 rounded"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 line-clamp-4">
                {randomMovie.overview}
              </p>
              
              <Button 
                onClick={handleSurpriseClick}
                className="bg-magenta hover:bg-magenta/80 mt-4"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Show me another' : 'הראה לי אחר'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurpriseMe;
