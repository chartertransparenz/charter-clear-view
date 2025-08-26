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
  // Create proper Google Maps Embed URL
  const createMapUrl = () => {
    const maptypeParam = maptype === 'satellite' ? '&maptype=satellite' : '';
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d${center.lng}!3d${center.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f${zoom}!3m3!1m2!1s0x0%3A0x0!2zM!5e${maptype === 'satellite' ? '1' : '0'}!3m2!1sde!2sde!4v1625097600000!5m2!1sde!2sde`;
  };
  return <Card className={`shadow-lg ${className}`}>
      
      <CardContent className="p-0">
        <div className="relative w-full h-96 rounded-b-lg overflow-hidden bg-gray-200">
          <iframe src={createMapUrl()} width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" title={`Karte von ${region}`} />
        </div>
      </CardContent>
    </Card>;
};
export default TerritoryMap;