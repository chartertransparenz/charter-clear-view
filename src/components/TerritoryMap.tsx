import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
interface TerritoryMapProps {
  region: string;
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
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
  markers = [],
  className = ""
}) => {
  // Create Google Maps Embed URL using simple search without API key
  const createMapUrl = () => {
    const query = encodeURIComponent(`${region} ${center.lat},${center.lng}`);
    return `https://www.google.com/maps?q=${query}&hl=de&z=${zoom}&output=embed`;
  };
  return <Card className={`shadow-lg ${className}`}>
      <CardHeader>
        <CardTitle className="text-center">Karte von {region}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full h-96 rounded-b-lg overflow-hidden">
          <iframe src={createMapUrl()} width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" title={`Karte von ${region}`} />
        </div>
      </CardContent>
    </Card>;
};
export default TerritoryMap;