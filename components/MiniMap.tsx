
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Coordinates } from '../types';
// Using a generic map pin icon, could be customized further
// import { MapPinIcon } from './icons'; 

interface MiniMapProps {
  currentLocation: Coordinates;
  locationName: string;
  previousLocation?: Coordinates;
  nextLocation?: Coordinates;
}

const MiniMap: React.FC<MiniMapProps> = ({ currentLocation, locationName, previousLocation, nextLocation }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup>(new L.LayerGroup());

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, {
        scrollWheelZoom: false, // Disable scroll wheel zoom for mini maps
      }).setView([currentLocation.lat, currentLocation.lng], 10);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
      }).addTo(mapInstanceRef.current);
      
      markersRef.current.addTo(mapInstanceRef.current);
    }

    markersRef.current.clearLayers();

    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([currentLocation.lat, currentLocation.lng], 10);

      const currentIconHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7 text-red-600"><path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145l.002-.001L10 18.43l.001.001.281.145a5.741 5.741 0 00.28.145l.018.008.006.003zM10 18C6.134 18 3 14.866 3 11s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-2c1.381 0 2.5-1.119 2.5-2.5S11.381 8.5 10 8.5 7.5 9.619 7.5 11 8.619 13.5 10 13.5z" clip-rule="evenodd" /></svg>`;
      const currentIcon = L.divIcon({
        html: currentIconHTML,
        className: 'map-custom-div-icon',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28]
      });
      L.marker([currentLocation.lat, currentLocation.lng], { icon: currentIcon })
        .addTo(markersRef.current)
        .bindPopup(`<b style="color:#c0392b;">Current: ${locationName}</b>`) // Basic style for popup
        .openPopup();

      const neighborIconHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-sky-600 opacity-80"><path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145l.002-.001L10 18.43l.001.001.281.145a5.741 5.741 0 00.28.145l.018.008.006.003zM10 18C6.134 18 3 14.866 3 11s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-2.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" clip-rule="evenodd" /></svg>`;
      const neighborIcon = L.divIcon({
        html: neighborIconHTML,
        className: 'map-custom-div-icon-small',
        iconSize: [20, 20],
        iconAnchor: [10, 20],
        popupAnchor: [0, -20]
      });

      if (previousLocation) {
        L.marker([previousLocation.lat, previousLocation.lng], { icon: neighborIcon })
          .addTo(markersRef.current)
          .bindPopup("Previous Day");
        L.polyline([[previousLocation.lat, previousLocation.lng], [currentLocation.lat, currentLocation.lng]], { color: 'rgba(52, 152, 219, 0.6)', dashArray: '4, 4', weight: 2 }).addTo(markersRef.current);
      }
      if (nextLocation) {
        L.marker([nextLocation.lat, nextLocation.lng], { icon: neighborIcon })
          .addTo(markersRef.current)
          .bindPopup("Next Day");
        L.polyline([[currentLocation.lat, currentLocation.lng], [nextLocation.lat, nextLocation.lng]], { color: 'rgba(46, 204, 113, 0.6)', dashArray: '4, 4', weight: 2 }).addTo(markersRef.current);
      }
      
      const bounds = L.latLngBounds([currentLocation]);
      if(previousLocation) bounds.extend(previousLocation);
      if(nextLocation) bounds.extend(nextLocation);
      if (bounds.isValid() && (previousLocation || nextLocation)) {
         mapInstanceRef.current.fitBounds(bounds, { padding: [25, 25] });
      }
    }
    
  }, [currentLocation, locationName, previousLocation, nextLocation]);

  // Added min-h-60 for consistent height
  return <div ref={mapRef} className="h-60 min-h-60 w-full rounded-lg shadow-inner border border-slate-200" />;
};

export default MiniMap;