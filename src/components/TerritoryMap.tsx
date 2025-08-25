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
  maptype = 'roadmap',
  markers = [],
  className = ""
}) => {
  // Create Google Maps Embed URL (no API key required for basic embed)
  const createMapUrl = () => {
    const query = encodeURIComponent(`${region} sailing marinas harbors`);
    
    // Calculate distance for zoom level (higher zoom = less distance)
    const zoomToDistance = {
      4: 500000,
      5: 250000, 
      6: 125000,
      7: 62500,
      8: 31250,
      9: 15625,
      10: 7812,
      12: 3906,
      15: 1953
    };
    
    const distance = zoomToDistance[zoom as keyof typeof zoomToDistance] || 125000;
    
    // Map type parameter for Google Maps (0=roadmap, 1=satellite, 2=hybrid, 3=terrain)
    const mapTypeValue = maptype === 'satellite' ? '1' : maptype === 'hybrid' ? '2' : maptype === 'terrain' ? '3' : '0';
    
    // Using Google Maps embed with proper coordinates, zoom and map type (no route planning)
    return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${distance}!2d${center.lng}!3d${center.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e${mapTypeValue}!3m2!1sde!2sde!4v1625097600000!5m2!1sde!2sde`;
  };
  return (
    <Card className={`shadow-lg ${className}`}>
      <CardHeader>
        <CardTitle className="text-center">Karte von {region}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full h-96 rounded-b-lg overflow-hidden">
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
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default TerritoryMap;