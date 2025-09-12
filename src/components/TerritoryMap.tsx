
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
  // Create Google Maps embed URL without API key
  const createMapUrl = () => {
    const lat = center.lat;
    const lng = center.lng;
    const z = zoom;
    
    // Use working Google Maps embed format - this format works reliably without API key
    if (maptype === 'satellite') {
      return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${Math.round(40075016.686 * Math.cos(lat * Math.PI / 180) / Math.pow(2, z))}!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sde!2sde!4v1609459200000!5m2!1sde!2sde`;
    } else {
      return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${Math.round(40075016.686 * Math.cos(lat * Math.PI / 180) / Math.pow(2, z))}!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1609459200000!5m2!1sde!2sde`;
    }
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
