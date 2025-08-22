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
  // Create Google Maps Embed URL with markers
  const createMapUrl = () => {
    const baseUrl = "https://www.google.com/maps/embed/v1/view";
    const apiKey = "AIzaSyBFw0Qbyq9zTFTd-tUY6dKVnXnHiYXzPZU"; // You'll need to replace this with your actual API key
    
    let url = `${baseUrl}?key=${apiKey}&center=${center.lat},${center.lng}&zoom=${zoom}&maptype=satellite`;
    
    return url;
  };

  return (
    <Card className={`shadow-lg ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          Segelrevier {region}
        </CardTitle>
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
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <p className="text-sm font-medium text-gray-800">📍 {region}</p>
            <p className="text-xs text-gray-600">Wichtige Segelgebiete & Marinas</p>
          </div>
        </div>
        
        {markers.length > 0 && (
          <div className="p-4 bg-gray-50">
            <h4 className="font-semibold text-gray-800 mb-2">Wichtige Standorte:</h4>
            <div className="grid grid-cols-2 gap-2">
              {markers.map((marker, index) => (
                <div key={index} className="text-sm text-gray-600">
                  • {marker.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TerritoryMap;