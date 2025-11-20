import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
const caribbean = "/caribbean.jpg";

const KeyLargo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Standort", value: "Key Largo, Florida Keys" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Tor zu den Florida Keys" }
  ];

  const highlights = [
    "John Pennekamp Coral Reef State Park",
    "Christ of the Abyss Statue",
    "Molasses Reef - Weltklasse Tauchen",
    "Glass Bottom Boat Tours",
    "Key Largo Undersea Park",
    "Ausgezeichnete Marina-Infrastruktur",
    "Nähe zu Miami und Fort Lauderdale"
  ];

  const nearbyDestinations = [
    "Islamorada (20 nm)",
    "Key West (150 nm)",
    "Marathon (80 nm)",
    "John Pennekamp State Park",
    "Molasses Reef"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Key Largo Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇺🇸 Florida Keys</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Key Largo</h1>
            <p className="text-xl max-w-2xl">
              Das Tor zu den Florida Keys mit Weltklasse-Tauchgebieten
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/amerika-bahamas/florida-keys" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Florida Keys
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter-Standort Key Largo</h2>
            <p className="text-lg text-gray-600 mb-4">
              Key Largo ist das Tor zu den Florida Keys und beherbergt den ersten Unterwasser-Nationalpark 
              der USA. Als nördlichster Punkt der Keys-Kette bietet Key Largo den idealen Ausgangspunkt 
              für Ihre Segelerkundung durch dieses tropische Paradies.
            </p>
            <p className="text-lg text-gray-600">
              Die Gewässer um Key Largo sind weltberühmt für ihre spektakulären Korallenriffe, 
              die kristallklares Wasser und eine unglaubliche Vielfalt an Meereslebewesen bieten. 
              Von hier aus können Sie sowohl südwärts zu den anderen Keys als auch zu den 
              nahegelegenen Everglades segeln.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Largo Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Destinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nahegelegene Ziele</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyDestinations.map((destination, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Anchor className="w-5 h-5 text-blue-600" />
                  <p className="font-medium text-gray-800">{destination}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Charter ab Key Largo
            </h3>
            <p className="mb-6 text-gray-700">
              Beginnen Sie Ihre Entdeckungsreise durch die Florida Keys vom 
              Tor zu diesem tropischen Paradies.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Key Largo Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default KeyLargo;