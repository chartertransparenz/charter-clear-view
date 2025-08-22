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
  // Create Google Maps Embed URL (no API key required for basic embed)
  const createMapUrl = () => {
    const query = encodeURIComponent(`${region} sailing marinas harbors`);
    const coordinates = `${center.lat},${center.lng}`;
    
    // Using Google Maps embed without API key
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200000!2d${center.lng}!3d${center.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDA1MCcxOC4wIk4gOTMwJzM5LjAiRQ!5e1!3m2!1sde!2sde!4v1625097600000!5m2!1sde!2sde`;
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