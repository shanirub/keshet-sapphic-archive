
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { content, ContentItem } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContentCard from '@/components/ContentCard';

interface ContentDetailParams {
  id?: string;
  type?: string;
}

const ContentDetail = () => {
  const { id, type } = useParams<ContentDetailParams>();
  const { language, direction } = useLanguage();
  const navigate = useNavigate();
  
  const item = content.find(item => item.id === id);
  
  if (!item) {
    return (
      <MainLayout>
        <div className="container px-4 mx-auto py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Content Not Found' : 'התוכן לא נמצא'}
            </h1>
            <Button onClick={() => navigate(-1)}>
              {language === 'en' ? 'Go Back' : 'חזרה'}
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  // Find similar items (same type and at least one matching genre)
  const similarItems = content
    .filter(i => i.id !== item.id && i.type === item.type && 
      i.genres.some(g => item.genres.includes(g)))
    .slice(0, 4);
  
  return (
    <MainLayout>
      <div className="container px-4 mx-auto py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              <img 
                src={item.image} 
                alt={item.title[language]} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{item.title[language]}</h1>
            <div className="text-muted-foreground mb-6">{item.year}</div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {item.genres.map(genre => (
                <div 
                  key={genre} 
                  className="bg-secondary text-sm px-3 py-1 rounded"
                >
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </div>
              ))}
              
              {item.isIsraeli && (
                <div className="bg-magenta/10 text-magenta text-sm px-3 py-1 rounded">
                  {language === 'en' ? 'Israeli' : 'ישראלי'}
                </div>
              )}
            </div>
            
            <div className="mb-8">
              {/* Placeholder for item description */}
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? `This is a sample description for ${item.title.en}. In the actual implementation, this would contain detailed information about the content.`
                  : `זהו תיאור לדוגמה עבור ${item.title.he}. ביישום בפועל, זה יכיל מידע מפורט על התוכן.`
                }
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button>
                {language === 'en' ? 'Add to Favorites' : 'הוסף למועדפים'}
              </Button>
              <Button variant="outline">
                {language === 'en' ? 'Share' : 'שתף'}
              </Button>
            </div>
          </div>
        </div>
        
        {similarItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-medium mb-6">
              {language === 'en' ? 'Similar Content' : 'תוכן דומה'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {similarItems.map(item => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ContentDetail;
