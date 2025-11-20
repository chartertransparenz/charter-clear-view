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

const Newport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Standort", value: "Newport, Rhode Island" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Erfahrene Segler" },
    { icon: Anchor, label: "Besonderheit", value: "Segelhauptstadt Amerikas" }
  ];

  const highlights = [
    "Newport Mansions - vergoldete Ära",
    "America's Cup Hall of Fame",
    "Cliff Walk - spektakulärer Küstenwanderweg",
    "International Tennis Hall of Fame",
    "Fort Adams State Park",
    "Legendäre Segelregatten",
    "Historische Villen der Millionäre"
  ];

  const nearbyDestinations = [
    "Block Island (20 nm)",
    "Martha's Vineyard (25 nm)",
    "Nantucket (35 nm)",
    "Cape Cod (30 nm)",
    "Mystic (45 nm)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Newport Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇺🇸 Rhode Island</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Newport</h1>
            <p className="text-xl max-w-2xl">
              Die Segelhauptstadt Amerikas mit legendärer Regatta-Tradition
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/amerika-bahamas/usa-ostkueste" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu USA Ostküste
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter-Standort Newport</h2>
            <p className="text-lg text-gray-600 mb-4">
              Newport, Rhode Island, ist unbestritten die Segelhauptstadt der USA. Hier wurde 
              die America's Cup Geschichte geschrieben, hier liegen einige der spektakulärsten 
              Yachten der Welt vor Anker, und hier finden die prestigeträchtigsten Regatten 
              Amerikas statt.
            </p>
            <p className="text-lg text-gray-600">
              Die Stadt verbindet maritime Exzellenz mit historischem Charme. Die berühmten 
              Newport Mansions aus der vergoldeten Ära, der spektakuläre Cliff Walk und die 
              erstklassigen Marinas machen Newport zu einem der exklusivsten Charter-Standorte 
              der amerikanischen Ostküste.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Newport Highlights</h2>
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
              Charter ab Newport
            </h3>
            <p className="mb-6 text-gray-700">
              Erleben Sie die legendäre Segeltradition Amerikas von der 
              prestigeträchtigsten Marina der Ostküste.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Newport Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default Newport;