
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import destinationGreece from "@/assets/destination-greece.jpg";

const Sporades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Nordägäis" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-September" },
    { icon: Users, label: "Geeignet für", value: "Naturliebhaber" },
    { icon: Anchor, label: "Besonderheit", value: "Grüne Inseln" }
  ];

  const cities = [
    "Skiathos", "Skopelos", "Alonissos", "Skyros"
  ];

  const highlights = [
    "Mamma Mia Filmkulisse (Skopelos)",
    "Unberührte Natur und Strände",
    "Meeresschutzgebiet Alonissos",
    "Weniger frequentiert",
    "Grüne, bewaldete Inseln",
    "Authentisches Griechenland",
    "Kurze Distanzen zwischen Inseln"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationGreece}
          alt="Sporaden Griechenland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Sporaden</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sporaden</h1>
            <p className="text-xl max-w-2xl">
              Grüne Juwelen der Nordägäis
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer/griechenland" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Griechenland
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in den Sporaden</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die Sporaden sind Griechenlands grüne Inselgruppe und bieten ein 
              völlig anderes Segelerlebnis. Diese bewaldeten Inseln mit ihren 
              unberührten Stränden und dem Meeresschutzgebiet sind perfekt für 
              Naturliebhaber und alle, die das authentische Griechenland suchen.
            </p>
            <p className="text-lg text-gray-600">
              Berühmt geworden durch den Film "Mamma Mia" auf Skopelos, bieten 
              die Sporaden traumhafte Ankerplätze, kristallklares Wasser und 
              eine entspannte Atmosphäre abseits der Touristenmassen.
            </p>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Inseln & Häfen</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{city}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
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

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Sporaden?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die grünen Juwelen Griechenlands mit unberührter 
              Natur und authentischer Atmosphäre.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Sporaden Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sporades;
