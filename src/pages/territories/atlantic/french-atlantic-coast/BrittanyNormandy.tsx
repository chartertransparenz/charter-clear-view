import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, Castle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";

const BrittanyNormandy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Nordwestfrankreich"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "Mai - September"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "W Wind 15-25 kn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Monohull & Katamaran"
    }
  ];

  const marinas = [
    {
      name: "Saint-Malo",
      description: "Korsarenstadt mit mittelalterlichen Mauern",
      facilities: ["Historischer Hafen", "Gezeitenhafen", "Altstadt"]
    },
    {
      name: "Brest",
      description: "Wichtiger Marinehafen in der Bretagne",
      facilities: ["Großer Naturhafen", "Maritime Geschichte", "Oceanopolis"]
    },
    {
      name: "La Rochelle",
      description: "Malerischer Hafen mit historischen Türmen",
      facilities: ["Vieux Port", "Aquarium", "Ile de Ré"]
    },
    {
      name: "Cherbourg",
      description: "Normannischer Hafen am Ärmelkanal", 
      facilities: ["Tiefwasserhafen", "Cité de la Mer", "D-Day Geschichte"]
    }
  ];

  const highlights = [
    "Gezeitensegeln erleben",
    "Mittelalterliche Hafenstädte",
    "Keltische Kultur Bretagne",
    "D-Day Landungsstrände",
    "Mont-Saint-Michel",
    "Frische Meeresfrüchte",
    "Raue Atlantikküste",
    "Maritime Geschichte"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/322fb30e-004f-44b0-a51b-aed662239ae7.webp"
          alt="Bretagne Normandie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🏰 Bretagne & Normandie</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bretagne & Normandie</h1>
            <p className="text-xl max-w-2xl">
              Gezeitensegeln und maritime Geschichte
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/atlantik/franzoesische-atlantikkueste" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Französischen Atlantikküste
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="flex justify-center text-blue-600 mb-2">
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
              <Castle className="w-6 h-6 text-blue-600" />
              Charter-Standort Bretagne & Normandie
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Bretagne und Normandie bieten einige der anspruchsvollsten und 
              belohnendsten Segelreviere Europas. Das Gezeitensegeln erfordert 
              Können und Planung, belohnt aber mit spektakulären Landschaften, 
              mittelalterlichen Hafenstädten und reicher maritimer Geschichte.
            </p>
            <p className="text-lg text-gray-600">
              Von den keltischen Traditionen der Bretagne bis zu den historischen 
              D-Day-Stränden der Normandie erleben Sie Frankreichs wilde Atlantikküste 
              in ihrer authentischsten Form. Gezeitenunterschiede von bis zu 12 Metern 
              schaffen ein einzigartiges Segelerlebnis.
            </p>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Häfen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {marinas.map((marina, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{marina.name}</h3>
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

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <Castle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter in Bretagne & Normandie
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie anspruchsvolles Gezeitensegeln, maritime Geschichte und 
              die wilde Schönheit der französischen Atlantikküste.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Bretagne Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default BrittanyNormandy;