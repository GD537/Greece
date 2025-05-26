
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { itineraryData } from '../data/itineraryData';
import { DayPlan, Activity, MealSuggestion, TransportOption } from '../types';
import MiniMap from './MiniMap';
import { 
  ClockIcon, CurrencyEuroIcon, InformationCircleIcon, LocationMarkerIcon, TicketIcon, 
  TrainIcon, UsersIcon, CalendarIcon, BuildingLibraryIcon, BookOpenIcon, TempleIcon,
  MapPinIcon, MoonIcon
} from './icons'; // Added new icons

const IconWrapper: React.FC<{ icon: React.ReactNode, className?: string }> = ({ icon, className }) => (
  <span className={`mr-2 flex-shrink-0 ${className || 'text-sky-600'}`}>{icon}</span>
);

const InfoPill: React.FC<{ icon: React.ReactNode, text: string, className?: string }> = ({ icon, text, className }) => (
  <div className={`flex items-center text-xs px-2.5 py-1 rounded-full shadow-sm ${className}`}>
    {icon}
    {text}
  </div>
);

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => (
  <div className="p-3.5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
    <div className="flex justify-between items-start mb-1">
      <h4 className="text-md font-semibold text-slate-800">{activity.title}</h4>
      {activity.time && <span className="text-xs text-sky-600 font-medium flex items-center"><ClockIcon className="h-3.5 w-3.5 mr-1"/>{activity.time}</span>}
    </div>
    {activity.description && <p className="text-slate-600 text-sm mb-1.5">{activity.description}</p>}
    <div className="flex flex-wrap gap-1.5 mt-1.5 text-xs">
      {activity.notes && <InfoPill icon={<InformationCircleIcon className="h-3.5 w-3.5 mr-1"/>} text={activity.notes} className="bg-slate-100 text-slate-600" />}
      {activity.cost && <InfoPill icon={<CurrencyEuroIcon className="h-3.5 w-3.5 mr-1"/>} text={activity.cost} className="bg-green-100 text-green-700" />}
      {activity.transport && <InfoPill icon={<TrainIcon className="h-3.5 w-3.5 mr-1"/>} text={activity.transport} className="bg-purple-100 text-purple-700" />}
    </div>
  </div>
);

const MealCard: React.FC<{ meal: MealSuggestion }> = ({ meal }) => (
  <div className="p-3 bg-amber-50 rounded-lg shadow hover:shadow-md transition-shadow duration-200 ease-in-out">
    <p className="font-semibold text-sm text-amber-700">{meal.type}: {meal.name}</p>
    {meal.description && <p className="text-xs text-amber-600 mt-0.5">{meal.description}</p>}
    {meal.cost && <p className="text-xs text-green-700 mt-0.5">{meal.cost}</p>}
  </div>
);

const TransportDetailCard: React.FC<{ transport: TransportOption }> = ({ transport }) => (
  <div className="p-3 bg-sky-50 rounded-lg shadow hover:shadow-md transition-shadow duration-200 ease-in-out">
    <p className="font-semibold text-sm text-sky-700">{transport.type} {transport.company ? `(${transport.company})` : ''}</p>
    {transport.departureTimes && <p className="text-xs text-sky-600 mt-0.5">Departures: {transport.departureTimes}</p>}
    {transport.duration && <p className="text-xs text-sky-600 mt-0.5">Duration: {transport.duration}</p>}
    {transport.cost && <p className="text-xs text-green-700 mt-0.5">Cost: {transport.cost}</p>}
    {transport.notes && <p className="text-xs text-slate-500 italic mt-1">{transport.notes}</p>}
    {(transport.type === "Ferry" || transport.type === "Funicular") && (
      <a 
        href={transport.notes?.includes("ferries.gr") ? "https://www.ferries.gr" : "https://www.openseas.gr"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xs text-sky-500 hover:underline mt-1 flex items-center"
      >
        <TicketIcon className="h-3.5 w-3.5 mr-1" /> Book/Check Online
      </a>
    )}
  </div>
);

const LocationInsightCard: React.FC<{ title: string, content?: string, icon: React.ReactNode, colorClass: string }> = ({ title, content, icon, colorClass }) => {
  if (!content) return null;
  return (
    <div className={`p-3.5 rounded-lg shadow bg-white border-l-4 ${colorClass}`}>
      <div className="flex items-center mb-1.5">
        {icon}
        <h4 className="text-sm font-semibold text-slate-700">{title}</h4>
      </div>
      <p className="text-xs text-slate-600">{content}</p>
    </div>
  );
};


const DayView: React.FC = () => {
  const { dayId } = useParams<{ dayId: string }>();
  const dayPlan = itineraryData.detailedDays.find(d => d.id === dayId);

  if (!dayPlan) {
    return <Navigate to={`/day/${itineraryData.detailedDays[0].id}`} replace />;
  }

  const currentIndex = itineraryData.detailedDays.findIndex(d => d.id === dayId);
  const prevDayLocation = currentIndex > 0 ? itineraryData.detailedDays[currentIndex - 1].mapCoordinates : undefined;
  const nextDayLocation = currentIndex < itineraryData.detailedDays.length - 1 ? itineraryData.detailedDays[currentIndex + 1].mapCoordinates : undefined;

  return (
    <div className="space-y-5">
      <header className="bg-white p-4 md:p-5 rounded-xl shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1.5">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700">{dayPlan.displayDateFull.split('•')[1]?.trim() || dayPlan.location}</h2>
          <div className="text-xs text-slate-500 font-medium flex items-center mt-1 sm:mt-0">
            <IconWrapper icon={<CalendarIcon className="h-4 w-4"/>} className="text-slate-500"/>
            {dayPlan.displayDateFull.split('•')[0]?.trim()} ({dayPlan.displayDateShort})
          </div>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-slate-600 text-xs md:text-sm">
          <p className="flex items-center"><IconWrapper icon={<MapPinIcon className="h-4 w-4"/>} /> Location: {dayPlan.location}</p>
          <p className="flex items-center"><IconWrapper icon={<MoonIcon className="h-4 w-4"/>} /> Overnight: {dayPlan.overnight}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          {(dayPlan.historicalFact || dayPlan.mythologicalStory) && (
            <section className="bg-white p-3.5 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-slate-700 mb-2.5 flex items-center">
                <IconWrapper icon={<BuildingLibraryIcon className="h-5 w-5"/>} /> Location Insights
              </h3>
              <div className="space-y-2.5">
                <LocationInsightCard 
                  title="Historical Snapshot" 
                  content={dayPlan.historicalFact} 
                  icon={<IconWrapper icon={<BookOpenIcon className="h-4 w-4"/>} className="text-amber-600"/>}
                  colorClass="border-amber-500"
                />
                <LocationInsightCard 
                  title="Mythological Echoes" 
                  content={dayPlan.mythologicalStory} 
                  icon={<IconWrapper icon={<TempleIcon className="h-4 w-4"/>} className="text-purple-600"/>}
                  colorClass="border-purple-500"
                />
              </div>
            </section>
          )}

          <section>
            <h3 className="text-xl font-semibold text-slate-700 mb-2.5 border-b border-slate-200 pb-1.5">Activities</h3>
            {dayPlan.activities.length > 0 ? (
              <div className="space-y-3">
                {dayPlan.activities.map((activity, index) => (
                  <ActivityCard key={index} activity={activity} />
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-sm">No specific activities planned for today.</p>
            )}
          </section>

          {dayPlan.mealSuggestions.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold text-slate-700 mb-2.5 border-b border-slate-200 pb-1.5">Meal Suggestions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dayPlan.mealSuggestions.map((meal, index) => (
                  <MealCard key={index} meal={meal} />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="lg:col-span-1 space-y-5">
          <section className="bg-white p-3.5 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Mini Map</h3>
            <MiniMap 
              currentLocation={dayPlan.mapCoordinates}
              locationName={dayPlan.location}
              previousLocation={prevDayLocation}
              nextLocation={nextDayLocation}
            />
          </section>
          
          {dayPlan.transportDetails && dayPlan.transportDetails.length > 0 && (
            <section className="bg-white p-3.5 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-slate-700 mb-2.5 border-b border-slate-200 pb-1.5">Transport Options</h3>
              <div className="space-y-2.5">
                {dayPlan.transportDetails.map((detail, index) => (
                  <TransportDetailCard key={index} transport={detail} />
                ))}
              </div>
            </section>
          )}

          {dayPlan.generalNotes && dayPlan.generalNotes.length > 0 && (
            <section className="bg-slate-50 p-3.5 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-slate-700 mb-1.5">Notes for the Day</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                {dayPlan.generalNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
};

export default DayView;