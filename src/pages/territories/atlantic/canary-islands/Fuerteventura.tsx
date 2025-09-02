import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const Fuerteventura = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Östlichste Kanareninsel"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "Ganzjährig"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "NE Passat 20-35 kn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Sportliche Yachten"
    }
  ];

  const marinas = [
    {
      name: "Puerto del Rosario",
      description: "Hauptstadt-Marina mit Flughafennähe",
      facilities: ["Internationale Marina", "Flughafen", "Einkaufen", "Restaurants"]
    },
    {
      name: "Corralejo",
      description: "Lebendiger Tourismushafen im Norden",
      facilities: ["Wassersport-Zentrum", "Dünen", "Fähren nach Lanzarote", "Nightlife"]
    },
    {
      name: "Gran Tarajal",
      description: "Authentischer Fischerhafen im Süden",
      facilities: ["Lokale Atmosphäre", "Schwarzer Strand", "Windgeschützt"]
    }
  ];

  const highlights = [
    "Stärkste Winde der Kanaren",
    "150 km feinste Sandstrände",
    "Dünenlandschaft von Corralejo",
    "Cofete - wilde Westküste",
    "Betancuria historische Hauptstadt",
    "Jandia Peninsula",
    "Perfekt für Wassersport",
    "Afrikanische Sahara-Atmosphäre"
  ];

  const attractions = [
    {
      name: "Corralejo Dünen",
      description: "Naturpark mit Sahara-ähnlichen Dünen",
      type: "Natur"
    },
    {
      name: "Betancuria",
      description: "Historische erste Hauptstadt",
      type: "Kultur"
    },
    {
      name: "Cofete Strand",
      description: "12 km wilder Atlantikstrand",
      type: "Abenteuer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/1ea68c6f-87dc-44e1-9f11-6805e2ddf28f.png"
          alt="Fuerteventura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-yellow-500 text-black">🏖️ Fuerteventura</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Fuerteventura</h1>
            <p className="text-xl max-w-2xl">
              Die windige Insel der Dünen
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
                <div className="flex justify-center text-yellow-600 mb-2">
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
              <Wind className="w-6 h-6 text-yellow-600" />
              Charter-Standort Fuerteventura
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Fuerteventura ist die windigste und älteste der Kanarischen Inseln 
              und ein Paradies für alle Wassersportler. Mit über 150 Kilometern 
              feinster Sandstrände, konstanten starken Passatwinden und 
              spektakulären Dünenlandschaften bietet sie einzigartige Segelerlebnisse.
            </p>
            <p className="text-lg text-gray-600">
              Die Nähe zur afrikanischen Küste verleiht der Insel eine besondere 
              Sahara-Atmosphäre. Starke, beständige Winde machen Fuerteventura 
              ideal für sportliches Segeln und alle Arten von Wassersport.
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
                    <Anchor className="w-5 h-5 text-yellow-600" />
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
                <Wind className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter ab Fuerteventura
            </h3>
            <p className="mb-6 text-yellow-100">
              Erleben Sie sportliches Segeln mit konstanten starken Winden, 
              endlose Sandstrände und die wilde Schönheit der Sahara-Insel.
            </p>
            <Button 
              className="bg-white text-yellow-600 hover:bg-yellow-50" 
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

export default Fuerteventura;