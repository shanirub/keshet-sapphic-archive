
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageContext';
import { uniqueGenres } from '@/data/movies';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';

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
    <div className={`border border-brat-pink bg-dark-gray text-white p-4 rounded-none ${isOpen ? 'w-64' : 'w-auto'} transition-all duration-300`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl brat-title bg-brat-lime text-dark-gray px-2 py-1">
          {t('filter.title')}
        </h2>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-brat-pink hover:text-brat-lime focus:outline-none font-bold"
        >
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="space-y-6">
          {/* Quick Filters */}
          <div className="space-y-3 bg-dark-gray p-3 border border-brat-pink">
            <div className="font-courier uppercase font-bold tracking-wider text-brat-lime mb-2">
              {language === 'en' ? 'QUICK FILTERS' : 'מסננים מהירים'}
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="newest" 
                className="border-brat-lime data-[state=checked]:bg-brat-lime data-[state=checked]:text-dark-gray"
                checked={activeFilters['special']?.includes('newest')}
                onCheckedChange={(checked) => 
                  onFilterChange('special', 'newest', checked === true)
                }
              />
              <label htmlFor="newest" className="text-sm font-courier">
                {t('filter.newest')}
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="top-rated" 
                className="border-brat-lime data-[state=checked]:bg-brat-lime data-[state=checked]:text-dark-gray"
                checked={activeFilters['special']?.includes('top-rated')}
                onCheckedChange={(checked) => 
                  onFilterChange('special', 'top-rated', checked === true)
                }
              />
              <label htmlFor="top-rated" className="text-sm font-courier">
                {t('filter.topRated')}
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="israeli" 
                className="border-brat-lime data-[state=checked]:bg-brat-lime data-[state=checked]:text-dark-gray"
                checked={activeFilters['special']?.includes('israeli')}
                onCheckedChange={(checked) => 
                  onFilterChange('special', 'israeli', checked === true)
                }
              />
              <label htmlFor="israeli" className="text-sm font-courier">
                {t('filter.israeli')}
              </label>
            </div>
          </div>
          
          <div className="h-px bg-brat-pink opacity-50"></div>
          
          {/* Genres Dropdown */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="genres" className="border-b-brat-pink border-opacity-50">
              <AccordionTrigger className="py-2 text-sm hover:no-underline font-courier uppercase font-bold tracking-wider text-brat-yellow">
                {t('filter.genre')}
              </AccordionTrigger>
              <AccordionContent className="border-l border-brat-pink border-opacity-50 pl-2">
                <ScrollArea className="h-48 w-full">
                  <div className="space-y-2 pr-4">
                    {uniqueGenres.map((genre) => (
                      <div key={genre} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`genre-${genre}`} 
                          className="border-brat-lime data-[state=checked]:bg-brat-lime data-[state=checked]:text-dark-gray"
                          checked={activeFilters['genre']?.includes(genre)}
                          onCheckedChange={(checked) => 
                            onFilterChange('genre', genre, checked === true)
                          }
                        />
                        <label htmlFor={`genre-${genre}`} className="text-sm font-courier">
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
            <AccordionItem value="decades" className="border-b-brat-pink border-opacity-50">
              <AccordionTrigger className="py-2 text-sm hover:no-underline font-courier uppercase font-bold tracking-wider text-brat-yellow">
                {language === 'en' ? 'DECADES' : 'עשורים'}
              </AccordionTrigger>
              <AccordionContent className="border-l border-brat-pink border-opacity-50 pl-2">
                <ScrollArea className="h-48 w-full">
                  <div className="space-y-2 pr-4">
                    {decades.map((decade) => (
                      <div key={decade} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`decade-${decade}`}
                          className="border-brat-lime data-[state=checked]:bg-brat-lime data-[state=checked]:text-dark-gray"
                          checked={activeFilters['decade']?.includes(decade)}
                          onCheckedChange={(checked) => 
                            onFilterChange('decade', decade, checked === true)
                          }
                        />
                        <label htmlFor={`decade-${decade}`} className="text-sm font-courier">
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
            <AccordionItem value="moods" className="border-b-brat-pink border-opacity-50">
              <AccordionTrigger className="py-2 text-sm hover:no-underline font-courier uppercase font-bold tracking-wider text-brat-yellow">
                {language === 'en' ? 'MOODS' : 'מצבי רוח'}
              </AccordionTrigger>
              <AccordionContent className="border-l border-brat-pink border-opacity-50 pl-2">
                <ScrollArea className="h-48 w-full">
                  <div className="space-y-2 pr-4">
                    {moods.map((mood) => (
                      <div key={mood} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`mood-${mood}`}
                          className="border-brat-lime data-[state=checked]:bg-brat-lime data-[state=checked]:text-dark-gray"
                          checked={activeFilters['mood']?.includes(mood)}
                          onCheckedChange={(checked) => 
                            onFilterChange('mood', mood, checked === true)
                          }
                        />
                        <label htmlFor={`mood-${mood}`} className="text-sm font-courier">
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
