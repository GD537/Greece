
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface MealSuggestion {
  name: string;
  type: 'Lunch' | 'Dinner' | 'Breakfast' | 'Snack' | 'Ice Cream' | 'Coffee Break' | 'Meze';
  cost?: string;
  description?: string;
}

export interface Activity {
  time?: string;
  title: string;
  description?: string;
  cost?: string;
  notes?: string;
  transport?: string;
}

export interface TransportOption {
  company?: string;
  departureTimes?: string;
  duration?: string;
  cost?: string;
  notes?: string;
  type: 'Ferry' | 'Taxi' | 'Metro' | 'Bus' | 'Rental Car' | 'Walk' | 'Funicular' | 'Water Taxi' | 'Boat';
}

export interface DayPlan {
  day: number;
  id: string; // e.g., "day-1"
  date: string; // YYYY-MM-DD for processing if needed, though displayDate is primary
  displayDateFull: string; // e.g., "Day 1 – Friday 13 June"
  displayDateShort: string; // e.g., "13 Jun (Fri)"
  location: string;
  overnight: string;
  mapCoordinates: Coordinates;
  activities: Activity[];
  mealSuggestions: MealSuggestion[];
  transportDetails?: TransportOption[];
  generalNotes?: string[];
  quickSummary?: string; // Short summary for calendar/sidebar
  historicalFact?: string;
  mythologicalStory?: string;
}

export interface BeachInfo {
  islandRegion: string;
  name: string;
  whyGo: string;
  facilities: string;
  coordinates?: Coordinates;
  imageUrl?: string; // Added for beach image
}

export interface RestaurantInfo {
  name: string;
  note?: string;
  imageUrl?: string;
  menuUrl?: string;
  menuHighlights?: string[];
  websiteUrl?: string;
}

export interface RestaurantTip {
  location: string; // e.g., "Athens"
  restaurants: RestaurantInfo[];
}

export interface AccommodationInfo {
  id: string;
  name: string;
  locationAssociated: string; // e.g., "Athens", "Aegina Town"
  type: string; // e.g., "Hotel", "Studios", "Apartment"
  datesOfStay: string; // e.g., "June 13 - June 15"
  description?: string;
  imageUrl?: string;
  websiteUrl?: string;
  mapCoordinates?: Coordinates; // Optional: if you want to show it on a map
}

export interface TransportTip {
  segment: string;
  mode: string;
  cost: string;
  notes: string;
}

export interface DayTripIdea {
  base: string;
  excursion: string;
  travel: string;
  approxCost: string;
  whyItFits: string;
}

export interface GettingAroundIslandInfo {
  island: string;
  description: string;
}

export interface ItineraryData {
  tripTitle: string;
  tripSubtitle: string;
  detailedDays: DayPlan[];
  accommodations: AccommodationInfo[]; // Added
  transportBudgetTips: TransportTip[];
  beaches: BeachInfo[];
  familyFriendlyDayTrips: DayTripIdea[];
  restaurantShortList: RestaurantTip[];
  gettingAroundIslands: GettingAroundIslandInfo[];
  finalReminders: string[];
}

// For map markers and popups
export interface LocationMarker {
  coordinates: Coordinates;
  popupContent: string; // HTML content for popup
  title: string; // For marker alt/title
}
