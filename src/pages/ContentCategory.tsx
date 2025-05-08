
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { content, ContentItem } from '@/data/content';
import ContentCard from '@/components/ContentCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface CategoryParams {
  category?: string;
}

const ContentCategory = () => {
  const { category } = useParams<CategoryParams>();
  const { t, language } = useLanguage();
  const [items, setItems] = useState<ContentItem[]>([]);
  const [filter, setFilter] = useState('all');
  
  // A simplified enum map for categories
  const categoryMap: Record<string, string> = {
    'movies': 'movie',
    'tv': 'tv',
    'books': 'book',
    'music': 'music',
    'theatre': 'theatre',
    'design': 'design',
    'events': 'event',
  };
  
  useEffect(() => {
    const filteredItems = category && categoryMap[category] 
      ? content.filter(item => item.type === categoryMap[category]) 
      : content;
      
    setItems(filteredItems);
  }, [category]);
  
  const filterItems = (filterType: string) => {
    setFilter(filterType);
    
    let filteredItems = category && categoryMap[category] 
      ? content.filter(item => item.type === categoryMap[category]) 
      : content;
      
    if (filterType === 'newest') {
      filteredItems = filteredItems.filter(item => item.isNew);
    } else if (filterType === 'israeli') {
      filteredItems = filteredItems.filter(item => item.isIsraeli);
    } else if (filterType === 'top-rated') {
      filteredItems = [...filteredItems].sort((a, b) => b.rating - a.rating);
    } else if (['action', 'crime', 'documentary', 'drama', 'comedy', 'romance'].includes(filterType)) {
      filteredItems = filteredItems.filter(item => item.genres.includes(filterType));
    }
    
    setItems(filteredItems);
  };
  
  const getCategoryTitle = () => {
    if (!category) return language === 'en' ? 'All Content' : 'כל התוכן';
    
    const key = `nav.${category}` as const;
    return t(key);
  };
  
  const filters = [
    { id: 'all', label: language === 'en' ? 'All' : 'הכל' },
    { id: 'newest', label: t('filter.newest') },
    { id: 'top-rated', label: t('filter.topRated') },
    { id: 'israeli', label: t('filter.israeli') },
    { id: 'action', label: t('filter.action') },
    { id: 'crime', label: t('filter.crime') },
    { id: 'documentary', label: t('filter.documentary') },
    { id: 'drama', label: t('filter.drama') },
    { id: 'comedy', label: t('filter.comedy') },
    { id: 'romance', label: t('filter.romance') },
  ];
  
  return (
    <MainLayout>
      <div className="container px-4 mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">{getCategoryTitle()}</h1>
        
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {filters.map((filterItem) => (
              <Button 
                key={filterItem.id}
                variant={filter === filterItem.id ? "default" : "outline"}
                onClick={() => filterItems(filterItem.id)}
                size="sm"
              >
                {filterItem.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {items.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
        
        {items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              {language === 'en' ? 'No content found' : 'לא נמצא תוכן'}
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ContentCategory;
