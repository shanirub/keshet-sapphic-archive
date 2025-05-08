
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { Card } from './ui/card';
import { processedMovies } from '@/data/movies';
import ContentCard from './ContentCard';

const ContentChatbot: React.FC = () => {
  const { language, t } = useLanguage();
  const [input, setInput] = useState('');
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const generateRecommendations = () => {
    if (!input.trim()) return;
    
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Simple keyword matching algorithm
      const keywords = input.toLowerCase().split(' ');
      
      const matches = processedMovies.filter(movie => {
        const titleMatch = movie.title.toLowerCase().split(' ').some(word => 
          keywords.some(keyword => word.includes(keyword))
        );
        
        const genreMatch = movie.genre.some(genre => 
          keywords.some(keyword => genre.toLowerCase().includes(keyword))
        );
        
        const overviewMatch = movie.overview.toLowerCase().split(' ').some(word => 
          keywords.some(keyword => word.includes(keyword))
        );
        
        return titleMatch || genreMatch || overviewMatch;
      });
      
      // If no direct matches, return random recommendations
      const results = matches.length > 0 
        ? matches.slice(0, 3)
        : processedMovies.sort(() => 0.5 - Math.random()).slice(0, 3);
        
      setRecommendations(results);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-magenta/20 to-dark-gray">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'Content Recommendation Bot' : 'בוט המלצות תוכן'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Tell us what kind of content you\'re looking for and we\'ll suggest something for you.'
              : 'ספרו לנו איזה סוג תוכן אתם מחפשים ואנחנו נציע לכם משהו.'}
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="flex gap-2 mb-6">
            <Input
              placeholder={language === 'en' ? 'e.g., romantic drama from the 90s' : 'לדוגמה, דרמה רומנטית משנות ה-90'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-dark-gray border-magenta"
              onKeyPress={(e) => e.key === 'Enter' && generateRecommendations()}
            />
            <Button 
              onClick={generateRecommendations}
              className="bg-magenta hover:bg-magenta/80"
              disabled={loading}
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
              ) : (
                <Search className="h-4 w-4 mr-2" />
              )}
              {language === 'en' ? 'Find' : 'חפש'}
            </Button>
          </div>
          
          {recommendations.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">
                {language === 'en' ? 'Recommendations for you:' : 'המלצות עבורך:'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recommendations.map((item, index) => (
                  <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <ContentCard 
                      item={{
                        id: index.toString(),
                        title: { en: item.title, he: item.title },
                        type: 'movie',
                        image: item.poster_path || '/placeholder.svg',
                        year: item.year || new Date().getFullYear(),
                        genres: item.genre,
                        isIsraeli: false,
                        isNew: false,
                        isFeatured: false,
                        rating: 4.0
                      }} 
                      size="small"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentChatbot;
