import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";

const FloridaKeys = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Charter-Standorte", value: "Key West, Key Largo" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Tropisches Inselparadies" }
  ];

  const charterBases = [
    {
      name: "Key West",
      description: "Südlichster Punkt der USA mit entspannter Atmosphäre und lebendiger Kultur",
      highlights: ["Sunset Celebration", "Duval Street", "Hemingway House", "Fort Zachary Taylor"]
    },
    {
      name: "Key Largo",
      description: "Tor zu den Florida Keys mit erstklassigen Tauchgebieten",
      highlights: ["John Pennekamp Park", "Christ of the Abyss", "Glass Bottom Boats", "Molasses Reef"]
    }
  ];

  const sailingHighlights = [
    "Einzigartige Inselkette im tropischen Stil",
    "Kristallklares, warmes Wasser",
    "Spektakuläre Korallenriffe",
    "Entspannte Key West Atmosphäre",
    "Ausgezeichnete Tauch- und Schnorchelgebiete",
    "Kurze Distanzen zwischen den Inseln",
    "Ganzjährig mildes Klima"
  ];

  const popularRoutes = [
    "Key West - Key Largo - Islamorada",
    "Key West - Dry Tortugas National Park",
    "Key Largo - Pennekamp State Park",
    "Marathon - Bahia Honda - Big Pine Key"
  ];

  const keyHighlights = [
    {
      name: "Key West",
      description: "Berühmt für Sonnenuntergänge, Ernest Hemingway und entspannte Atmosphäre"
    },
    {
      name: "Dry Tortugas",
      description: "Abgelegener Nationalpark mit historischem Fort Jefferson"
    },
    {
      name: "Islamorada",
      description: "Sportfischer-Hauptstadt der Welt mit erstklassigen Restaurants"
    },
    {
      name: "John Pennekamp Park",
      description: "Erster Unterwasser-Nationalpark der USA mit spektakulären Riffen"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Florida Keys Yacht Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇺🇸 Florida Keys</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Florida Keys</h1>
            <p className="text-xl max-w-2xl">
              Tropisches Inselparadies mit amerikanischem Flair
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in den Florida Keys</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die Florida Keys sind eine einzigartige Inselkette, die sich über 200 Kilometer 
              südwestlich von Miami erstreckt. Diese tropische Oase bietet perfekte Bedingungen 
              für entspanntes Segeln mit kurzen Distanzen zwischen den Inseln, kristallklarem 
              Wasser und einer entspannten, karibisch angehauchten Atmosphäre.
            </p>
            <p className="text-lg text-gray-600">
              Von der lebendigen Partyatmosphäre in Key West bis zu den weltklasse Tauchgebieten 
              von Key Largo bieten die Florida Keys eine perfekte Mischung aus amerikanischer 
              Infrastruktur und tropischem Inselfeeling.
            </p>
          </div>
        </div>

        {/* Charter Bases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {charterBases.map((base, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {base.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{base.description}</p>
                  <div className="space-y-1">
                    {base.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <p className="text-sm text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Insel-Highlights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {keyHighlights.map((highlight, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {highlight.name}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sailing Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sailingHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Beliebte Routen</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Anchor className="w-5 h-5 text-blue-600" />
                  <p className="font-medium text-gray-800">{route}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Florida Keys?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie tropisches Inselfeeling mit amerikanischem Komfort, 
              spektakuläre Sonnenuntergänge und entspanntes Segeln zwischen den Keys.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Florida Keys Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloridaKeys;