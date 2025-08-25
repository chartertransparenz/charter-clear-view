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
  console.log('TerritoryMap rendering with:', { region, center, zoom, maptype, className });
  // Create simple Google Maps Embed URL
  const createMapUrl = () => {
    const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8!2d${center.lng}!3d${center.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDMwJzAwLjAiTiAxMsKwMzAnMDAuMCJF!5e1!3m2!1sde!2sde!4v1625097600000!5m2!1sde!2sde&z=${zoom}`;
    console.log('Generated map URL:', url);
    return url;
  };
  console.log('About to render TerritoryMap component');
  
  return (
    <Card className={`shadow-lg ${className}`}>
      <CardHeader>
        <CardTitle className="text-center">Karte von {region}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full h-96 rounded-b-lg overflow-hidden bg-gray-200">
          <div className="absolute top-4 left-4 bg-yellow-400 px-2 py-1 text-black text-sm z-10">
            MAP DEBUG: Component is rendering
          </div>
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
            onLoad={() => console.log('Iframe loaded successfully')}
            onError={() => console.log('Iframe failed to load')}
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default TerritoryMap;