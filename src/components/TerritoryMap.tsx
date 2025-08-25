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
  // Create Google Maps Embed URL with proper parameters
  const createMapUrl = () => {
    // Convert maptype to Google Maps format
    const mapTypeParam = maptype === 'satellite' ? '1' : '0';
    
    const url = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&center=${center.lat},${center.lng}&zoom=${zoom}&maptype=${maptype}`;
    console.log('Generated map URL:', url);
    console.log('Using coordinates:', center, 'zoom:', zoom, 'maptype:', maptype);
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