import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, Palmtree } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";

const LangkawiTioman = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Andamanensee & Südchinesisches Meer"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "November - April"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "NE Monsun 10-20 kn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Katamaran & Monohull"
    }
  ];

  const locations = [
    {
      name: "Langkawi",
      description: "99 Inseln in der Andamanensee",
      highlights: ["Duty-Free Status", "Royal Langkawi Yacht Club", "Mangroven-Touren", "Cable Car"]
    },
    {
      name: "Tioman Island",
      description: "Tropisches Paradies vor der Ostküste",
      highlights: ["Marine Park Status", "Korallenriffe", "Dschungel-Trekking", "Wasserfälle"]
    }
  ];

  const highlights = [
    "99 Inseln von Langkawi erkunden",
    "Duty-Free Shopping",
    "Mangroven-Labyrinthe",
    "Tioman Marine Park",
    "Spektakuläre Korallenriffe",
    "Unberührte Tropeninseln",
    "Wasserfälle und Dschungel",
    "Entspannte Segelatmosphäre"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-teal-500 text-white">🏝️ Langkawi & Tioman</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Langkawi & Tioman</h1>
            <p className="text-xl max-w-2xl">
              Malaysias Tropenparadiese
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/indischer-ozean/asien/thailand" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Thailand
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="flex justify-center text-teal-600 mb-2">
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
              <Palmtree className="w-6 h-6 text-teal-600" />
              Charter-Standort Langkawi & Tioman
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Langkawi und Tioman repräsentieren zwei der schönsten Segelreviere 
              Malaysias. Langkawi mit seinen 99 Inseln in der Andamanensee bietet 
              Duty-Free-Shopping und spektakuläre Mangrovenlandschaften, während 
              Tioman als Marine Park unberührte Korallenriffe schützt.
            </p>
            <p className="text-lg text-gray-600">
              Beide Destinationen eignen sich perfekt für entspanntes Inselhüpfen 
              in tropischen Gewässern mit einer reichen Unterwasserwelt und 
              authentischer malaysischer Kultur.
            </p>
          </div>
        </div>

        {/* Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Destinationen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-teal-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{location.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Highlights:</div>
                    <div className="space-y-1">
                      {location.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                          <span className="text-gray-600">{highlight}</span>
                        </div>
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
                <Palmtree className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter Langkawi & Tioman
            </h3>
            <p className="mb-6 text-teal-100">
              Entdecken Sie Malaysias schönste Inseln mit 99 Inseln von Langkawi 
              und den unberührten Korallenriffen von Tioman.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-teal-600 hover:bg-teal-50" size="lg">
                Langkawi & Tioman Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangkawiTioman;