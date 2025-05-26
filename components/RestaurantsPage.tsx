
import React from 'react';
import { itineraryData } from '../data/itineraryData';
import { RestaurantTip, RestaurantInfo } from '../types';
import { ChatAlt2Icon, MapPinIcon, ExternalLinkIcon, MenuAlt2Icon } from './icons';

const RestaurantItemCard: React.FC<{ restaurant: RestaurantInfo }> = ({ restaurant }) => (
  <div className="bg-amber-50 p-3 rounded-md border border-amber-200 flex flex-col md:flex-row gap-3">
    {restaurant.imageUrl && (
      <img 
        src={restaurant.imageUrl} 
        alt={`Image of ${restaurant.name}`}
        className="w-full md:w-32 h-32 md:h-auto object-cover rounded-md flex-shrink-0"
        loading="lazy"
      />
    )}
    <div className="flex-grow">
      {restaurant.websiteUrl ? (
        <a 
          href={restaurant.websiteUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-semibold text-md text-amber-800 hover:text-amber-900 hover:underline inline-flex items-center group"
        >
          {restaurant.name}
          <ExternalLinkIcon className="ml-1.5 h-3.5 w-3.5 text-amber-600 group-hover:text-amber-700 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      ) : (
        <p className="font-semibold text-md text-amber-800">{restaurant.name}</p>
      )}

      {restaurant.note && <p className="text-xs text-slate-600 italic mt-0.5">{restaurant.note}</p>}
      
      {restaurant.menuHighlights && restaurant.menuHighlights.length > 0 && (
        <div className="mt-1.5">
          <p className="text-xs font-medium text-slate-700">Highlights:</p>
          <ul className="list-disc list-inside pl-1 text-xs text-slate-600">
            {restaurant.menuHighlights.slice(0, 2).map((highlight, i) => <li key={i}>{highlight}</li>)}
            {restaurant.menuHighlights.length > 2 && <li>...and more</li>}
          </ul>
        </div>
      )}

      {restaurant.menuUrl && (
        <a
          href={restaurant.menuUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-2 text-xs px-2 py-1 rounded-md bg-amber-200 text-amber-800 hover:bg-amber-300 transition-colors"
        >
          <MenuAlt2Icon className="h-3.5 w-3.5 mr-1" />
          View Menu
        </a>
      )}
    </div>
  </div>
);


const RestaurantLocationCard: React.FC<{ locRestaurants: RestaurantTip }> = ({ locRestaurants }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out border border-slate-200">
    <div className="flex items-center mb-3">
      <MapPinIcon className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />
      <h3 className="text-xl font-semibold text-sky-700">{locRestaurants.location}</h3>
    </div>
    <div className="space-y-3">
      {locRestaurants.restaurants.map((restaurant, index) => (
        <RestaurantItemCard key={index} restaurant={restaurant} />
      ))}
    </div>
  </div>
);

const RestaurantsPage: React.FC = () => {
  const { restaurantShortList } = itineraryData;

  return (
    <div className="space-y-6">
      <header className="bg-white p-4 md:p-6 rounded-xl shadow-xl">
        <div className="flex items-center space-x-3">
          <ChatAlt2Icon className="h-7 w-7 text-sky-600 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700">Restaurant Suggestions</h2>
        </div>
        <p className="text-slate-600 mt-1 text-sm md:text-base">A short list of recommended places to eat, typically €10-20 per person. Click on names or 'View Menu' for more details.</p>
      </header>

      {restaurantShortList.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {restaurantShortList.map((locRestaurants, index) => (
            <RestaurantLocationCard key={index} locRestaurants={locRestaurants} />
          ))}
        </div>
      ) : (
        <p className="text-slate-500 p-4 bg-slate-50 rounded-md">No restaurant suggestions available at the moment.</p>
      )}
    </div>
  );
};

export default RestaurantsPage;
