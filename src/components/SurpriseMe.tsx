import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { getRandomMovie } from '@/data/movies';
import { Sparkles } from 'lucide-react';
import { getMoviePoster } from '@/lib/tmdb';

const SurpriseMe: React.FC = () => {
  const { language } = useLanguage();
  const [randomMovie, setRandomMovie] = useState(getRandomMovie());
  const [posterUrl, setPosterUrl] = useState<string>('/placeholder.svg');

  useEffect(() => {
    // Initialize with a random movie
    setRandomMovie(getRandomMovie());
  }, []);

  useEffect(() => {
    const fetchPoster = async () => {
      if (randomMovie) {
        const url = await getMoviePoster(randomMovie.title);
        setPosterUrl(url);
      }
    };
    fetchPoster();
  }, [randomMovie]);

  const handleSurpriseClick = () => {
    setRandomMovie(getRandomMovie());
  };

  if (!randomMovie) return null;

  // Get genres from either the new or old structure
  const genres = randomMovie.genres || randomMovie.genre || [];

  return (
    <section className="py-16 bg-brat-lime border-y-2 border-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl brat-title mb-2 bg-black text-white inline-block px-4 py-2">
            {language === 'en' ? 'Surprise Me' : 'הפתע אותי'}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square overflow-hidden bg-secondary border-2 border-black">
              <img 
                src={posterUrl} 
                alt={randomMovie.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-left space-y-4">
              <h3 className="text-2xl brat-title">{randomMovie.title}</h3>
              <div className="text-sm font-courier uppercase font-bold">
                {randomMovie.year}
              </div>
              
              <div className="flex flex-wrap gap-2 my-4">
                {genres.map((genre, idx) => (
                  <span 
                    key={idx} 
                    className="bg-black text-white text-xs px-3 py-1 font-courier uppercase tracking-wider"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <p className="text-black line-clamp-4 font-grotesk">
                {randomMovie.overview}
              </p>
              
              <Button 
                onClick={handleSurpriseClick}
                className="bg-black text-white hover:bg-brat-pink mt-4 border-2 border-black font-courier uppercase tracking-wider"
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
