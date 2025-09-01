
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
  // Create Google Maps embed URL with proper formatting
  const createMapUrl = () => {
    const lat = center.lat;
    const lng = center.lng;
    const z = zoom;
    
    // Use a more reliable Google Maps embed URL format
    const mapTypeParam = maptype === 'satellite' ? '&t=k' : '&t=m';
    return `https://maps.google.com/maps?q=${lat},${lng}&hl=de&z=${z}&output=embed${mapTypeParam}`;
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
