
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { content, ContentItem } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContentCard from '@/components/ContentCard';

// Define interface for parameter type with string index signature
interface ContentDetailParams {
  id: string;
  type: string;
  [key: string]: string;
}

const ContentDetail = () => {
  const params = useParams<ContentDetailParams>();
  const { id, type } = params;
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
      <div className="bg-dark-gray text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="aspect-[2/3] overflow-hidden rounded-lg border border-magenta/20">
                <img 
                  src={item.image} 
                  alt={item.title[language]} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{item.title[language]}</h1>
              <div className="text-magenta text-xl mb-6">{item.year}</div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {item.genres.map(genre => (
                  <div 
                    key={genre} 
                    className="bg-magenta/20 text-magenta text-sm px-3 py-1 rounded"
                  >
                    {genre.charAt(0).toUpperCase() + genre.slice(1)}
                  </div>
                ))}
                
                {item.isIsraeli && (
                  <div className="bg-magenta/30 text-magenta text-sm px-3 py-1 rounded font-bold">
                    {language === 'en' ? 'Israeli' : 'ישראלי'}
                  </div>
                )}
              </div>
              
              <div className="mb-8">
                <p className="text-gray-300 text-lg">
                  {language === 'en' 
                    ? `This is a sample description for ${item.title.en}. In the actual implementation, this would contain detailed information about the content.`
                    : `זהו תיאור לדוגמה עבור ${item.title.he}. ביישום בפועל, זה יכיל מידע מפורט על התוכן.`
                  }
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button className="bg-magenta hover:bg-magenta/80">
                  {language === 'en' ? 'Add to Favorites' : 'הוסף למועדפים'}
                </Button>
                <Button variant="outline" className="border-magenta text-magenta hover:bg-magenta/10">
                  {language === 'en' ? 'Share' : 'שתף'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {similarItems.length > 0 && (
        <div className="container px-4 mx-auto py-16">
          <h2 className="text-2xl font-bold mb-8">
            {language === 'en' ? 'Similar Content' : 'תוכן דומה'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {similarItems.map(item => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ContentDetail;
