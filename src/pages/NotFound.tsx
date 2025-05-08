
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const { language } = useLanguage();
  
  return (
    <MainLayout>
      <div className="container px-4 mx-auto py-20">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-5xl font-bold text-magenta mb-4">404</h1>
          <h2 className="text-2xl font-medium mb-4">
            {language === 'en' ? 'Page Not Found' : 'העמוד לא נמצא'}
          </h2>
          <p className="text-muted-foreground mb-8">
            {language === 'en' 
              ? "The page you're looking for doesn't exist or has been moved."
              : "העמוד שאתה מחפש אינו קיים או הועבר."
            }
          </p>
          <Button asChild>
            <Link to="/">
              {language === 'en' ? 'Return Home' : 'חזרה לדף הבית'}
            </Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
