import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { content, ContentItem } from '@/data/content';
import ContentCard from '@/components/ContentCard';
import { useLanguage } from '@/contexts/LanguageContext';
import Filters from '@/components/Filters';
import { processedMovies } from '@/data/movies';

// Define interface for parameter type with string index signature
interface CategoryParams {
  category: string;
  [key: string]: string;
}

const ContentCategory = () => {
  const params = useParams<CategoryParams>();
  const { category } = params;
  const { t, language } = useLanguage();
  const [items, setItems] = useState<ContentItem[]>([]);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    special: [],
    genre: [],
    decade: [],
    mood: []
  });
  
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
    // Get base items for this category
    let baseItems;
    if (category === 'movies') {
      baseItems = processedMovies.map(movie => ({
        id: movie.title, // Using title as ID since movies don't have IDs
        title: {
          en: movie.title,
          he: movie.title // Using English title for Hebrew as well
        },
        type: 'movie',
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        year: movie.year || 0,
        genres: movie.genre,
        isIsraeli: false, // Default value
        isNew: false, // Default value
        isFeatured: false, // Default value
        rating: 0 // Default value
      }));
    } else {
      baseItems = category && categoryMap[category] 
        ? content.filter(item => item.type === categoryMap[category]) 
        : content;
    }
    
    applyFilters(baseItems);
  }, [category, activeFilters]);
  
  const applyFilters = (baseItems: ContentItem[]) => {
    let filteredItems = [...baseItems];
    
    // Apply special filters
    if (activeFilters.special.includes('newest')) {
      filteredItems = filteredItems.filter(item => item.isNew);
    }
    
    if (activeFilters.special.includes('israeli')) {
      filteredItems = filteredItems.filter(item => item.isIsraeli);
    }
    
    if (activeFilters.special.includes('top-rated')) {
      filteredItems = [...filteredItems].sort((a, b) => b.rating - a.rating);
    }
    
    // Apply genre filters
    if (activeFilters.genre.length > 0) {
      filteredItems = filteredItems.filter(item => 
        item.genres.some(genre => activeFilters.genre.includes(genre))
      );
    }
    
    // Apply decade filters (placeholder implementation)
    if (activeFilters.decade.length > 0) {
      filteredItems = filteredItems.filter(item => {
        const decade = Math.floor(item.year / 10) * 10;
        const decadeString = `${decade.toString().slice(-2)}'s`;
        return activeFilters.decade.includes(decadeString);
      });
    }
    
    // For mood filters, we would need a more complex implementation
    // This is just a placeholder
    if (activeFilters.mood.length > 0 && activeFilters.mood.includes('Romance')) {
      filteredItems = filteredItems.filter(item => 
        item.genres.includes('romance')
      );
    }
    
    setItems(filteredItems);
  };
  
  const handleFilterChange = (filterType: string, value: string, checked?: boolean) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      
      if (checked) {
        // Add the filter
        if (!newFilters[filterType].includes(value)) {
          newFilters[filterType] = [...newFilters[filterType], value];
        }
      } else {
        // Remove the filter
        newFilters[filterType] = newFilters[filterType].filter(v => v !== value);
      }
      
      return newFilters;
    });
  };
  
  const getCategoryTitle = () => {
    if (!category) return language === 'en' ? 'All Content' : 'כל התוכן';
    const key = `nav.${category}` as const;
    return t(key);
  };
  
  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        <div className="container px-4 mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">{getCategoryTitle()}</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar with filters */}
            <aside className="md:w-64 flex-shrink-0">
              <Filters 
                onFilterChange={handleFilterChange} 
                activeFilters={activeFilters} 
              />
            </aside>
            
            {/* Main content grid - updated to 3 columns */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContentCategory;
