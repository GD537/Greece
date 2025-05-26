
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { itineraryData } from '../data/itineraryData';
import { Coordinates, LocationMarker } from '../types';
import { LoadingSpinner } from './LoadingSpinner';
import { MapIcon as PageMapIcon } from './icons'; // Alias for clarity

const MapOverviewPage: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      setIsLoading(true);
      try {
        mapInstanceRef.current = L.map(mapRef.current);

        const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        });

        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
            className: 'map-tile-filter' // class from index.html for subtle filter
        });
        
        osmLayer.addTo(mapInstanceRef.current); 

        const baseMaps = {
            "Street View": osmLayer,
            "Satellite View": satelliteLayer
        };
        L.control.layers(baseMaps, undefined, { position: 'topright', collapsed: false }).addTo(mapInstanceRef.current);

        const locations: LocationMarker[] = itineraryData.detailedDays.map(day => ({
          coordinates: day.mapCoordinates,
          popupContent: `<div style="font-size: 14px;"><b style="color: #0369a1;">Day ${day.day}: ${day.location}</b><br/>${day.displayDateShort}<br/><a href="#/day/${day.id}" style="color: #0ea5e9; text-decoration: underline;">View Details</a></div>`,
          title: `Day ${day.day} - ${day.location}`
        }));

        const uniqueCoordinates: Coordinates[] = [];
        const uniqueMarkers: LocationMarker[] = [];

        locations.forEach(loc => {
          if (!uniqueCoordinates.some(c => c.lat === loc.coordinates.lat && c.lng === loc.coordinates.lng)) {
            uniqueCoordinates.push(loc.coordinates);
            uniqueMarkers.push(loc);
          }
        });
        
        const routePoints: L.LatLngExpression[] = uniqueCoordinates.map(coord => [coord.lat, coord.lng]);
        
        if (routePoints.length > 0) {
          L.polyline(routePoints, { color: 'rgba(14, 165, 233, 0.8)', weight: 3, opacity: 0.9 }).addTo(mapInstanceRef.current);
        }

        const defaultIcon = L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        uniqueMarkers.forEach((loc) => {
          L.marker([loc.coordinates.lat, loc.coordinates.lng], {title: loc.title, icon: defaultIcon})
            .addTo(mapInstanceRef.current!)
            .bindPopup(loc.popupContent);
        });

        if (uniqueCoordinates.length > 0) {
          const bounds = L.latLngBounds(uniqueCoordinates.map(c => [c.lat, c.lng] as L.LatLngExpression));
          mapInstanceRef.current.fitBounds(bounds, { padding: [40, 40] });
        } else {
           mapInstanceRef.current.setView([39.0742, 21.8243], 6); 
        }

      } catch (error) {
        console.error("Failed to initialize map:", error);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);


  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-xl space-y-4">
      <header className="flex items-center space-x-3">
        <PageMapIcon className="h-7 w-7 text-sky-600 flex-shrink-0" />
        <h2 className="text-2xl md:text-3xl font-bold text-sky-700">Trip Map Overview</h2>
      </header>
      <p className="text-slate-600 text-sm md:text-base">
        This map shows the main locations visited throughout the trip. Click on markers for more details and a link to the specific day.
        Use the layer control (top-right) to switch between Street and Satellite views.
      </p>
      {isLoading && (
        <div className="h-96 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-200">
          <LoadingSpinner className="h-10 w-10 text-sky-600" />
          <p className="ml-2.5 text-slate-500">Loading map...</p>
        </div>
      )}
      <div ref={mapRef} className={`h-[30rem] lg:h-[36rem] w-full rounded-lg shadow-inner border border-slate-200 ${isLoading ? 'hidden' : ''}`} />
       {!isLoading && !mapRef.current && <p className="text-red-500 p-4 bg-red-50 rounded-md">Map container could not be initialized.</p>}
    </div>
  );
};

export default MapOverviewPage;