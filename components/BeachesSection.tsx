
import React from 'react';
import { itineraryData } from '../data/itineraryData';
import { BeachInfo } from '../types';
import { SunIcon, MapPinIcon } from './icons';

const BeachCard: React.FC<{ beach: BeachInfo }> = ({ beach }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out flex flex-col h-full border border-slate-200 overflow-hidden">
    {beach.imageUrl && (
      <img 
        src={beach.imageUrl} 
        alt={`View of ${beach.name}`} 
        className="w-full h-40 object-cover"
        loading="lazy"
      />
    )}
    <div className="p-4 flex flex-col flex-grow">
      <div className="flex items-center mb-2">
        <SunIcon className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
        <h3 className="text-lg font-semibold text-sky-700">{beach.name}</h3>
      </div>
      <p className="text-xs text-slate-500 mb-2.5 flex items-center">
        <MapPinIcon className="h-3.5 w-3.5 mr-1 text-red-500 flex-shrink-0" /> {beach.islandRegion}
      </p>
      <div className="text-sm text-slate-600 space-y-1 mb-2 flex-grow">
        <p><span className="font-medium text-slate-700">Why Go:</span> {beach.whyGo}</p>
        <p><span className="font-medium text-slate-700">Facilities:</span> {beach.facilities}</p>
      </div>
      {beach.coordinates && (
        <a 
          href={`https://www.google.com/maps?q=${beach.coordinates.lat},${beach.coordinates.lng}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs text-sky-600 hover:text-sky-700 hover:underline mt-auto pt-1.5 self-start"
        >
          View on map &rarr;
        </a>
      )}
    </div>
  </div>
);

const BeachesSection: React.FC = () => {
  const { beaches } = itineraryData;

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-xl space-y-4">
      <header className="flex items-center space-x-3">
        <SunIcon className="h-7 w-7 text-yellow-500 flex-shrink-0" />
        <h2 className="text-2xl md:text-3xl font-bold text-sky-700">Beaches You’ll Love</h2>
      </header>
      <p className="text-slate-600 text-sm md:text-base">
        Discover beautiful beaches perfect for relaxation and family fun.
      </p>
      {beaches.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {beaches.map((beach, index) => (
            <BeachCard key={index} beach={beach} />
          ))}
        </div>
      ) : (
        <p className="text-slate-500 p-4 bg-slate-50 rounded-md">No beach information available at the moment.</p>
      )}
    </div>
  );
};

export default BeachesSection;
