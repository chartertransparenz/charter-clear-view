
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
  // Create clean Google Maps embed URL without controls
  const createMapUrl = () => {
    const lat = center.lat;
    const lng = center.lng;
    const z = zoom;
    const satellite = maptype === 'satellite' ? '1' : '0';
    
    // Use Google Maps embed format that minimizes UI controls
    return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e${satellite}!3m2!1sde!2sde!4v1625097600000!5m2!1sde!2sde&z=${z}`;
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
