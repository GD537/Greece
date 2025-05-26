
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itineraryData } from '../data/itineraryData';
import { 
  ChevronDownIcon, ChevronRightIcon, MapIcon, SunIcon, 
  InformationCircleIcon, CalendarIcon, XIcon, ChatAlt2Icon, 
  SparklesIcon, GreekFlagIcon, HomeIcon // Added HomeIcon
} from './icons';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeSection: string;
  currentDayId: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, activeSection, currentDayId }) => {
  const [isItineraryExpanded, setIsItineraryExpanded] = useState(true);
  const location = useLocation();

  const NavLinkContent: React.FC<{ to: string; children: React.ReactNode; icon?: React.ReactNode; sectionId: string; isDayLink?: boolean; 'aria-current'?: 'page', exact?: boolean }> = 
    ({ to, children, icon, sectionId, isDayLink, exact, ...rest }) => {
    
    let isActive: boolean;
    if (isDayLink) {
      isActive = currentDayId === sectionId && location.pathname.startsWith('/day/');
    } else if (exact) {
      isActive = location.pathname === to;
    } else {
      // For sections like /tips, /beaches etc. make sure to match exactly or with trailing slash for index route
      isActive = location.pathname === to || location.pathname.startsWith(to + (to === '/' ? '' : '/'));
    }
    
    // Specific handling for root active state when on a day page
    if (sectionId === 'itinerary' && location.pathname.startsWith('/day/')) {
        isActive = true;
    }


    return (
      <Link
        to={to}
        onClick={() => { if (isOpen && window.innerWidth < 1024) toggleSidebar(); }}
        className={`flex items-center px-3 py-2.5 text-sm rounded-md transition-all duration-150 ease-in-out group ${
          isActive 
            ? 'bg-sky-500 text-white font-medium shadow-sm' 
            : 'text-sky-100 hover:bg-sky-600 hover:text-white'
        }`}
        aria-current={isActive ? 'page' : undefined}
        {...rest}
      >
        {icon && <span className={`mr-2.5 h-5 w-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-sky-300 group-hover:text-white'}`}>{icon}</span>}
        <span className="truncate">{children}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && window.innerWidth < 1024 && <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-60 z-10" aria-hidden="true"></div>}
      
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-20 w-60 bg-sky-700 text-white flex flex-col transform ${
          isOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between p-3.5 border-b border-sky-600">
          <div className="flex items-center space-x-2">
            <GreekFlagIcon className="h-7 w-7 text-white"/>
            <h2 className="text-lg font-semibold">Trip Menu</h2>
          </div>
          <button 
            onClick={toggleSidebar} 
            className="lg:hidden text-sky-200 hover:text-white p-1 rounded-md hover:bg-sky-600"
            aria-label="Close sidebar"
            aria-expanded={isOpen}
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-2.5 space-y-1.5">
          <div>
            <button
              onClick={() => setIsItineraryExpanded(!isItineraryExpanded)}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-md transition-all duration-150 ease-in-out group ${
                activeSection === 'itinerary' ? 'bg-sky-500 text-white font-medium' : 'text-sky-100 hover:bg-sky-600 hover:text-white'
              }`}
              aria-expanded={isItineraryExpanded}
              aria-controls="itinerary-submenu"
            >
              <div className="flex items-center">
                <CalendarIcon className={`mr-2.5 h-5 w-5 flex-shrink-0 ${activeSection === 'itinerary' ? 'text-white' : 'text-sky-300 group-hover:text-white'}`} />
                Itinerary
              </div>
              {isItineraryExpanded ? <ChevronDownIcon className="h-4 w-4 flex-shrink-0" /> : <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />}
            </button>
            {isItineraryExpanded && (
              <div id="itinerary-submenu" className="mt-1.5 pl-3 space-y-1 border-l border-sky-600 ml-2">
                {itineraryData.detailedDays.map((day) => (
                  <NavLinkContent 
                    key={day.id} 
                    to={`/day/${day.id}`} 
                    sectionId={day.id} 
                    isDayLink
                  >
                    Day {day.day}: <span className="ml-1 font-light text-xs truncate opacity-80">{day.quickSummary || day.location}</span>
                  </NavLinkContent>
                ))}
              </div>
            )}
          </div>

          <NavLinkContent to="/map-overview" icon={<MapIcon />} sectionId="map-overview" exact>
            Map Overview
          </NavLinkContent>
          <NavLinkContent to="/accommodation" icon={<HomeIcon />} sectionId="accommodation" exact> {/* Added */}
            Accommodation
          </NavLinkContent>
          <NavLinkContent to="/beaches" icon={<SunIcon />} sectionId="beaches" exact>
            Beaches
          </NavLinkContent>
          <NavLinkContent to="/restaurants" icon={<ChatAlt2Icon />} sectionId="restaurants" exact>
            Restaurants
          </NavLinkContent>
          <NavLinkContent to="/day-trips" icon={<SparklesIcon />} sectionId="day-trips" exact>
            Day Trips
          </NavLinkContent>
          <NavLinkContent to="/tips" icon={<InformationCircleIcon />} sectionId="tips" exact>
            Travel Tips
          </NavLinkContent>
        </nav>
        <div className="p-3.5 border-t border-sky-600 text-xs text-sky-300">
          Grecian Odyssey Planner
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
