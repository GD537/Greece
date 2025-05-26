
import React from 'react';
import { itineraryData } from '../data/itineraryData';
import { AccommodationInfo } from '../types';
import { HomeIcon, MapPinIcon, CalendarIcon, ExternalLinkIcon } from './icons';

const AccommodationCard: React.FC<{ accommodation: AccommodationInfo }> = ({ accommodation }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out flex flex-col md:flex-row gap-4 border border-slate-200">
    {accommodation.imageUrl && (
      <img 
        src={accommodation.imageUrl} 
        alt={`Image of ${accommodation.name}`} 
        className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-md flex-shrink-0"
        loading="lazy"
      />
    )}
    <div className="flex-grow">
      <h3 className="text-xl font-semibold text-sky-700 mb-1">{accommodation.name}</h3>
      <p className="text-sm text-slate-500 mb-1 flex items-center">
        <MapPinIcon className="h-4 w-4 mr-1.5 text-red-500 flex-shrink-0" /> {accommodation.locationAssociated} - <span className="italic">{accommodation.type}</span>
      </p>
      <p className="text-sm text-slate-500 mb-2.5 flex items-center">
        <CalendarIcon className="h-4 w-4 mr-1.5 text-sky-500 flex-shrink-0" /> Dates: {accommodation.datesOfStay}
      </p>
      {accommodation.description && <p className="text-sm text-slate-600 mb-3">{accommodation.description}</p>}
      
      {accommodation.websiteUrl && (
        <a
          href={accommodation.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
        >
          Visit Website / Book
          <ExternalLinkIcon className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
  </div>
);

const AccommodationPage: React.FC = () => {
  const { accommodations } = itineraryData;

  return (
    <div className="space-y-6">
      <header className="bg-white p-4 md:p-6 rounded-xl shadow-xl">
        <div className="flex items-center space-x-3">
          <HomeIcon className="h-7 w-7 text-sky-600 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700">Accommodation</h2>
        </div>
        <p className="text-slate-600 mt-1 text-sm md:text-base">Details about where you'll be staying during your trip.</p>
      </header>

      {accommodations.length > 0 ? (
        <div className="space-y-5">
          {accommodations.map((acc) => (
            <AccommodationCard key={acc.id} accommodation={acc} />
          ))}
        </div>
      ) : (
        <p className="text-slate-500 p-4 bg-slate-50 rounded-md">No accommodation information available at the moment.</p>
      )}
    </div>
  );
};

export default AccommodationPage;
