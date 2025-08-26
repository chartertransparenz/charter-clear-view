
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
  // Create clean Google Maps embed URL with correct zoom
  const createMapUrl = () => {
    const lat = center.lat;
    const lng = center.lng;
    const z = zoom;
    const mapTypeParam = maptype === 'satellite' ? '&maptype=satellite' : '';
    
    // Use simpler Google Maps embed format that properly respects zoom
    return `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dQWTcRzdHgT0HUt&center=${lat},${lng}&zoom=${z}${mapTypeParam}`;
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
