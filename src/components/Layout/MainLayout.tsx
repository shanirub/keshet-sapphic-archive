
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { direction } = useLanguage();
  
  return (
    <div className={`min-h-screen flex flex-col ${direction} text-foreground bg-background`}>
      <Header />
      <main className="flex-grow pt-16"> {/* Added padding-top to account for sticky header */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
