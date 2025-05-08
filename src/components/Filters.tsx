
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageContext';
import { uniqueGenres } from '@/data/movies';

interface FiltersProps {
  onFilterChange: (filterType: string, value: string | string[], checked?: boolean) => void;
  activeFilters: Record<string, string[]>;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange, activeFilters }) => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(true);

  const decades = [
    '20\'s', '30\'s', '40\'s', '50\'s', '60\'s', 
    '70\'s', '80\'s', '90\'s', '00\'s', '2010\'s', '2020\'s'
  ];
  
  const moods = [
    'Romance', 'Exciting', 'Suspenseful', 'Romantic', 'Scary',
    'Inspiring', 'Funny', 'Imaginative'
  ];

  return (
    <div className={`bg-dark-gray text-white p-4 rounded-lg ${isOpen ? 'w-64' : 'w-auto'} transition-all duration-300`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{t('filter.title')}</h2>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? '←' : '→'}
        </button>
      </div>
      
      {isOpen && (
        <div className="space-y-6">
          {/* Quick Filters */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="newest" 
                checked={activeFilters['special']?.includes('newest')}
                onCheckedChange={(checked) => 
                  onFilterChange('special', 'newest', checked === true)
                }
              />
              <label htmlFor="newest" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {t('filter.newest')}
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="top-rated" 
                checked={activeFilters['special']?.includes('top-rated')}
                onCheckedChange={(checked) => 
                  onFilterChange('special', 'top-rated', checked === true)
                }
              />
              <label htmlFor="top-rated" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {t('filter.topRated')}
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="israeli" 
                checked={activeFilters['special']?.includes('israeli')}
                onCheckedChange={(checked) => 
                  onFilterChange('special', 'israeli', checked === true)
                }
              />
              <label htmlFor="israeli" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {t('filter.israeli')}
              </label>
            </div>
          </div>
          
          <div className="h-px bg-gray-700"></div>
          
          {/* Genres Dropdown */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="genres" className="border-none">
              <AccordionTrigger className="py-2 text-sm hover:no-underline">
                {t('filter.genre')}
              </AccordionTrigger>
              <AccordionContent>
                <ScrollArea className="h-48 w-full">
                  <div className="space-y-2 pr-4">
                    {uniqueGenres.map((genre) => (
                      <div key={genre} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`genre-${genre}`} 
                          checked={activeFilters['genre']?.includes(genre)}
                          onCheckedChange={(checked) => 
                            onFilterChange('genre', genre, checked === true)
                          }
                        />
                        <label htmlFor={`genre-${genre}`} className="text-sm">
                          {genre}
                        </label>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          {/* Decades Dropdown */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="decades" className="border-none">
              <AccordionTrigger className="py-2 text-sm hover:no-underline">
                {language === 'en' ? 'Decades' : 'עשורים'}
              </AccordionTrigger>
              <AccordionContent>
                <ScrollArea className="h-48 w-full">
                  <div className="space-y-2 pr-4">
                    {decades.map((decade) => (
                      <div key={decade} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`decade-${decade}`}
                          checked={activeFilters['decade']?.includes(decade)}
                          onCheckedChange={(checked) => 
                            onFilterChange('decade', decade, checked === true)
                          }
                        />
                        <label htmlFor={`decade-${decade}`} className="text-sm">
                          {decade}
                        </label>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          {/* Moods Dropdown */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="moods" className="border-none">
              <AccordionTrigger className="py-2 text-sm hover:no-underline">
                {language === 'en' ? 'Moods' : 'מצבי רוח'}
              </AccordionTrigger>
              <AccordionContent>
                <ScrollArea className="h-48 w-full">
                  <div className="space-y-2 pr-4">
                    {moods.map((mood) => (
                      <div key={mood} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`mood-${mood}`}
                          checked={activeFilters['mood']?.includes(mood)}
                          onCheckedChange={(checked) => 
                            onFilterChange('mood', mood, checked === true)
                          }
                        />
                        <label htmlFor={`mood-${mood}`} className="text-sm">
                          {mood}
                        </label>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default Filters;
