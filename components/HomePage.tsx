
import React from 'react';
import type { Place } from '../types';
import PlaceCard from './PlaceCard';
import Header from './Header';

const placesData: Place[] = [
  {
    id: 1,
    name: 'Café del Sol',
    category: 'Cafetería',
    description: 'El mejor café de especialidad y pastelería artesanal en un ambiente acogedor.',
    imageUrl: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: 2,
    name: 'La Trattoria de Enzo',
    category: 'Restaurante Italiano',
    description: 'Auténtica comida italiana, con pastas frescas hechas a mano todos los días.',
    imageUrl: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: 3,
    name: 'Librería El Saber',
    category: 'Librería',
    description: 'Un rincón para los amantes de la lectura con una cuidada selección de libros.',
    imageUrl: 'https://picsum.photos/400/300?random=3',
  },
  {
    id: 4,
    name: 'Verdulería "Lo de Pepe"',
    category: 'Tienda de comestibles',
    description: 'Frutas y verduras frescas directamente del productor a tu mesa.',
    imageUrl: 'https://picsum.photos/400/300?random=4',
  },
  {
    id: 5,
    name: 'Barbería "El Bigote"',
    category: 'Barbería',
    description: 'Cortes de pelo y afeitados clásicos con un toque moderno. Solo para caballeros.',
    imageUrl: 'https://picsum.photos/400/300?random=5',
  },
  {
    id: 6,
    name: 'El Rincón Cervecero',
    category: 'Bar',
    description: 'Una amplia variedad de cervezas artesanales locales e internacionales.',
    imageUrl: 'https://picsum.photos/400/300?random=6',
  },
];

interface HomePageProps {
  onNavigateToLogin: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToLogin }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placesData.map((place) => (
            <PlaceCard key={place.id} place={place} onFavoriteClick={onNavigateToLogin} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
