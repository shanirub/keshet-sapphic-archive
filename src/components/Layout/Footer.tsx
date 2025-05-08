
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t, direction } = useLanguage();
  
  const year = new Date().getFullYear();
  
  return (
    <footer className={`py-8 border-t border-border mt-20 ${direction}`}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="text-lg font-bold tracking-tight mb-2">
              {direction === 'ltr' ? 'Yesh Lesbiyot' : 'יש לסביות'}
            </div>
            <p className="text-sm text-muted-foreground">
              © {year} {t('footer.rights')}
            </p>
          </div>
          
          <div className="flex gap-6">
            <Link to="/about" className="text-sm hover:text-magenta transition-colors">
              {t('footer.about')}
            </Link>
            <Link to="/contact" className="text-sm hover:text-magenta transition-colors">
              {t('footer.contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
