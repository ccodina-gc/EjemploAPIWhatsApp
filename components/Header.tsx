
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 tracking-tight">
          Guía del Barrio
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-1">
          Descubre las joyas ocultas de tu vecindario
        </p>
      </div>
    </header>
  );
};

export default Header;
