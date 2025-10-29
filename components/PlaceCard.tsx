
import React from 'react';
import type { Place } from '../types';
import StarIcon from './icons/StarIcon';

interface PlaceCardProps {
  place: Place;
  onFavoriteClick: () => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, onFavoriteClick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={place.imageUrl} alt={place.name} />
        <button 
          onClick={onFavoriteClick}
          className="absolute top-3 right-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
          aria-label={`Marcar ${place.name} como favorito`}
        >
          <StarIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wide">{place.category}</h3>
        <h2 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{place.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">{place.description}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
