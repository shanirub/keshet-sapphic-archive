
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, toggleLanguage, language, direction } = useLanguage();

  const navItems = [
    { label: t('nav.movies'), href: '/movies' },
    { label: t('nav.tv'), href: '/tv' },
    { label: t('nav.books'), href: '/books' },
    { label: t('nav.music'), href: '/music' },
    { label: t('nav.theatre'), href: '/theatre' },
    { label: t('nav.design'), href: '/design' },
    { label: t('nav.events'), href: '/events' },
  ];

  return (
    <header className={`py-3 border-b-2 border-black sticky top-0 bg-brat-lime z-50 ${direction}`}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl brat-title flex items-center gap-1">
          {language === 'en' ? 'Yesh Lesbiyot' : 'יש לסביות'}
        </Link>
        
        <nav className={`hidden md:flex gap-6 ${direction === 'rtl' ? 'mr-8' : 'ml-8'}`}>
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.href}
              className="text-sm font-courier uppercase font-bold tracking-wider hover:bg-brat-pink hover:text-white px-2 py-1 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-black hover:bg-brat-pink hover:text-white">
            <Search className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-black hover:bg-brat-pink hover:text-white">
            <Filter className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button 
            variant="outline" 
            className="text-xs font-courier uppercase tracking-wider border-2 border-black hover:bg-brat-pink hover:text-white" 
            onClick={toggleLanguage}
          >
            {t('ui.languageToggle')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
