
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TerritoryMapProps {
  region: string;
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  maptype?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
  markers?: Array<{
    lat: number;
    lng: number;
    name: string;
    description?: string;
  }>;
  className?: string;
}

const TerritoryMap: React.FC<TerritoryMapProps> = ({
  region,
  center,
  zoom = 10,
  maptype = 'satellite',
  markers = [],
  className = ""
}) => {
  // Create proper Google Maps Embed URL with correct format
  const createMapUrl = () => {
    const baseUrl = 'https://www.google.com/maps/embed/v1/view';
    const apiKey = 'AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgaN-dwdgbM'; // You'll need to replace with actual API key
    
    // For now, use a simpler approach without API key
    const lat = center.lat;
    const lng = center.lng;
    const z = zoom;
    
    // Use the standard Google Maps embed format
    return `https://maps.google.com/maps?width=100%25&height=400&hl=en&q=${lat},${lng}&t=${maptype === 'satellite' ? 'k' : 'm'}&z=${z}&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <Card className={`shadow-lg ${className}`}>
      <CardContent className="p-0">
        <div className="relative w-full h-96 rounded-b-lg overflow-hidden bg-gray-200">
          <iframe 
            src={createMapUrl()} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className="w-full h-full" 
            title={`Karte von ${region}`}
            onError={(e) => console.log('Map loading error:', e)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TerritoryMap;
