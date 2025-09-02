import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const Lanzarote = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Nordöstlichste Kanareninsel"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "Ganzjährig"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "NE Passat 20-30 kn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Sportliche Yachten"
    }
  ];

  const marinas = [
    {
      name: "Marina Arrecife",
      description: "Haupthafen der Insel in der Hauptstadt",
      facilities: ["Stadtzentrum", "Einkaufen", "Kultur", "Restaurants"]
    },
    {
      name: "Puerto Calero",
      description: "Exklusive Marina mit Luxus-Ausstattung",
      facilities: ["5-Sterne Marina", "Whale Museum", "Designer Shops", "Fine Dining"]
    },
    {
      name: "Marina Rubicón",
      description: "Moderne Marina im Süden der Insel",
      facilities: ["Wassersport", "Strände", "Familienfreundlich", "Playa Blanca"]
    }
  ];

  const highlights = [
    "Einzigartige Vulkanlandschaft",
    "César Manrique Kunstwerke",
    "Timanfaya Nationalpark", 
    "Jameos del Agua",
    "Konstante starke Winde",
    "Duty-Free Preise",
    "Authentische Kanaren",
    "Perfekt für Sportsegler"
  ];

  const attractions = [
    {
      name: "Timanfaya Nationalpark",
      description: "Aktive Vulkanlandschaft mit Geothermie",
      type: "Natur"
    },
    {
      name: "Jameos del Agua",
      description: "César Manrique's Meisterwerk in Lavaröhren",
      type: "Kunst"
    },
    {
      name: "Cueva de los Verdes",
      description: "Spektakuläre Lavaröhren-Höhle",
      type: "Abenteuer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/58d61b25-e0c3-44d0-9e60-202f1de6c843.png"
          alt="Lanzarote"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-red-500 text-white">🌋 Lanzarote</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Lanzarote</h1>
            <p className="text-xl max-w-2xl">
              Die Feuerinsel mit Kunstcharakter
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/atlantik/kanaren" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Kanaren
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="flex justify-center text-gray-800 mb-2">
                  {fact.icon}
                </div>
                <div className="font-semibold text-sm text-gray-600 mb-1">
                  {fact.label}
                </div>
                <div className="text-sm font-medium">
                  {fact.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Flame className="w-6 h-6 text-red-600" />
              Charter-Standort Lanzarote
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Lanzarote ist die geologisch jüngste und außergewöhnlichste der 
              Kanarischen Inseln. Die mondähnliche Vulkanlandschaft wurde durch 
              César Manrique zu einem einzigartigen Kunstwerk geformt. Für Segler 
              bietet die Insel konstante starke Winde und authentische kanarische Kultur.
            </p>
            <p className="text-lg text-gray-600">
              Als UNESCO Biosphärenreservat vereint Lanzarote Natur und Kunst auf 
              einzigartige Weise. Die starken Passatwinde machen die Insel ideal 
              für sportliches Segeln, während die drei modernen Marinas excellenten 
              Service bieten.
            </p>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marinas & Häfen</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {marinas.map((marina, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-gray-800" />
                    <h3 className="text-lg font-semibold text-gray-800">{marina.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Besonderheiten:</div>
                    <div className="flex flex-wrap gap-2">
                      {marina.facilities.map((facility, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sehenswürdigkeiten</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge className="mb-2">{attraction.type}</Badge>
                    <h3 className="text-lg font-semibold text-gray-800">{attraction.name}</h3>
                  </div>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <Flame className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-red-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter ab Lanzarote
            </h3>
            <p className="mb-6 text-gray-100">
              Erleben Sie sportliches Segeln vor einzigartiger Vulkankulisse - 
              wo Natur und Kunst zu einem Gesamtkunstwerk verschmelzen.
            </p>
            <Button 
              className="bg-white text-gray-800 hover:bg-gray-50" 
              size="lg"
              onClick={() => {
                window.location.href = 'tel:+497543499080';
              }}
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lanzarote;