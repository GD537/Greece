
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import { itineraryData } from './data/itineraryData';
import Sidebar from './components/Sidebar';
import DayView from './components/DayView';
import MapOverviewPage from './components/MapOverviewPage';
import BeachesSection from './components/BeachesSection';
import TipsPage from './components/TipsPage';
import RestaurantsPage from './components/RestaurantsPage';
import DayTripsPage from './components/DayTripsPage';
import AccommodationPage from './components/AccommodationPage'; // Added
import { MenuIcon, XIcon, GreekFlagIcon } from './components/icons';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const getActiveSection = () => {
    const path = location.pathname;
    if (path.startsWith('/day/')) return 'itinerary';
    if (path === '/map-overview') return 'map-overview';
    if (path === '/beaches') return 'beaches';
    if (path === '/restaurants') return 'restaurants';
    if (path === '/day-trips') return 'day-trips';
    if (path === '/accommodation') return 'accommodation'; // Added
    if (path === '/tips') return 'tips';
    return 'itinerary'; 
  };
  
  const activeSection = getActiveSection();
  const currentDayId = location.pathname.startsWith('/day/') ? location.pathname.split('/')[2] : itineraryData.detailedDays[0].id;

  return (
    <div className="flex h-screen antialiased text-slate-800 bg-slate-100">
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-3 left-3 z-30 p-2 bg-sky-600 text-white rounded-md shadow-lg hover:bg-sky-700 transition-colors"
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={isSidebarOpen}
      >
        {isSidebarOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        activeSection={activeSection}
        currentDayId={currentDayId}
      />

      <main className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen && window.innerWidth >=1024 ? 'lg:ml-60' : 'ml-0'}`}>
        <div className="p-4 md:p-6 max-w-5xl mx-auto">
          <header className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-center space-x-3">
              <GreekFlagIcon className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0" />
              <Link to={`/day/${itineraryData.detailedDays[0].id}`}>
                <h1 className="text-3xl md:text-4xl font-bold text-sky-700 hover:text-sky-800 transition-colors text-center">
                  {itineraryData.tripTitle}
                </h1>
              </Link>
            </div>
            <p className="text-sm md:text-base text-slate-600 mt-1 text-center">{itineraryData.tripSubtitle}</p>
          </header>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Navigate to={`/day/${itineraryData.detailedDays[0].id}`} replace />} />
              <Route path="/day/:dayId" element={<DayView />} />
              <Route path="/map-overview" element={<MapOverviewPage />} />
              <Route path="/beaches" element={<BeachesSection />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              <Route path="/day-trips" element={<DayTripsPage />} />
              <Route path="/accommodation" element={<AccommodationPage />} /> {/* Added */}
              <Route path="/tips" element={<TipsPage />} />
              <Route path="*" element={<Navigate to={`/day/${itineraryData.detailedDays[0].id}`} replace />} />
            </Routes>
          </ErrorBoundary>
        </div>
        <footer className="text-center mt-10 mb-6 py-4 text-xs text-slate-500">
          Καλή διασκέδαση! Have an amazing Greek adventure!
        </footer>
      </main>
    </div>
  );
};

export default App;
