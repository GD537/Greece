
import React from 'react';
import { itineraryData } from '../data/itineraryData';
import { DayTripIdea } from '../types';
import { SparklesIcon, MapPinIcon, CurrencyEuroIcon, UsersIcon } from './icons';

const DayTripCard: React.FC<{ trip: DayTripIdea }> = ({ trip }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out flex flex-col h-full border border-slate-200">
    <div className="flex items-center mb-2">
      <SparklesIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" />
      <h3 className="text-lg font-semibold text-purple-700">{trip.excursion}</h3>
    </div>
    <div className="text-xs text-slate-600 space-y-1 mb-2.5">
      <p className="flex items-center"><MapPinIcon className="h-3.5 w-3.5 mr-1.5 text-red-500 flex-shrink-0" /> Base: {trip.base}</p>
      <p className="flex items-center"><UsersIcon className="h-3.5 w-3.5 mr-1.5 text-green-500 flex-shrink-0" /> Travel: {trip.travel}</p>
      <p className="flex items-center"><CurrencyEuroIcon className="h-3.5 w-3.5 mr-1.5 text-amber-500 flex-shrink-0" /> Cost: {trip.approxCost}</p>
    </div>
    <p className="text-sm text-slate-700"><span className="font-medium">Why it fits:</span> {trip.whyItFits}</p>
  </div>
);

const DayTripsPage: React.FC = () => {
  const { familyFriendlyDayTrips } = itineraryData;

  return (
    <div className="space-y-6">
       <header className="bg-white p-4 md:p-6 rounded-xl shadow-xl">
        <div className="flex items-center space-x-3">
          <SparklesIcon className="h-7 w-7 text-sky-600 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700">Family-Friendly Day Trips</h2>
        </div>
        <p className="text-slate-600 mt-1 text-sm md:text-base">Low-cost excursion ideas suitable for the whole family.</p>
      </header>

      {familyFriendlyDayTrips.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {familyFriendlyDayTrips.map((trip, index) => (
            <DayTripCard key={index} trip={trip} />
          ))}
        </div>
      ) : (
        <p className="text-slate-500 p-4 bg-slate-50 rounded-md">No day trip suggestions available at the moment.</p>
      )}
    </div>
  );
};

export default DayTripsPage;