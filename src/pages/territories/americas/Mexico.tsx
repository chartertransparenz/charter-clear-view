import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";

const Mexico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Golf von Mexiko, Karibik" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Highlight", value: "Baja California und Karibikküste" }
  ];

  const regions = [
    {
      name: "Mexiko",
      link: "/reviere/amerika-bahamas/mexiko/mexiko",
      description: "Vielfältige Küsten von Baja California bis zur Karibik",
      cities: ["Baja California"]
    }
  ];

  const highlights = [
    "Vielfältige Küstenregionen",
    "Baja California - Pazifikküste",
    "Karibikküste mit Maya-Ruinen",
    "Exzellente mexikanische Küche",
    "Günstige Charterpreise",
    "Warmes, tropisches Klima",
    "Reiche Kultur und Geschichte"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Mexiko"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇲🇽 Mexiko</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mexiko</h1>
            <p className="text-xl max-w-2xl">
              Pazifik bis Karibik - Vielfalt pur
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/amerika-bahamas" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Amerika & Bahamas
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in Mexiko</h2>
            <p className="text-lg text-gray-600 mb-4">
              Mexiko bietet eine unglaubliche Vielfalt an Segelrevieren - von 
              der rauen Pazifikküste Baja Californias bis zur tropischen 
              Karibikküste mit ihren Maya-Ruinen und türkisfarbenem Wasser.
            </p>
            <p className="text-lg text-gray-600">
              Mit günstigen Charterpreisen, exzellenter mexikanischer Küche und 
              einer reichen Kultur bietet Mexiko authentische Segelerlebnisse 
              für alle Geschmäcker und Erfahrungsstufen.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Mexiko?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die Vielfalt mexikanischer Gewässer von 
              Baja California bis zur Maya-Küste der Karibik.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Mexiko Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mexico;