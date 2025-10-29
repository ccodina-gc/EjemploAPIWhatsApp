
import React, { useState, useCallback } from 'react';
import type { Page } from './types';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {currentPage === 'home' && <HomePage onNavigateToLogin={() => navigate('login')} />}
      {currentPage === 'login' && <LoginPage onNavigateToHome={() => navigate('home')} />}
    </div>
  );
};

export default App;
