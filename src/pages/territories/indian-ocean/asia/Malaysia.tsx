import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import malaysiaSailing from "@/assets/malaysia-sailing.jpg";

const Malaysia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Malaysische Halbinsel & Borneo"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "März - Oktober"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "Monsunabhängig"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Katamaran bevorzugt"
    }
  ];

  const marinas = [
    {
      name: "Langkawi",
      description: "Duty-Free Insel mit Royal Langkawi Yacht Club",
      facilities: ["99 Inseln", "Duty-Free", "Moderne Marina", "Mangroven"]
    },
    {
      name: "Penang",
      description: "UNESCO-Weltkulturerbe Georgetown",
      facilities: ["Kulturerbe", "Street Food", "Chinesische Tempel", "Marina"]
    },
    {
      name: "Tioman Island",
      description: "Tropisches Paradies vor der Ostküste",
      facilities: ["Korallenriffe", "Dschungel", "Marine Park", "Tauchen"]
    }
  ];

  const highlights = [
    "Vielfältige Kulturen erleben",
    "Unberührte Tropeninseln",
    "Duty-Free Einkaufen in Langkawi",
    "UNESCO-Weltkulturerbe Penang",
    "Spektakuläre Korallenriffe",
    "Tropischer Regenwald",
    "Authentische Straßenküche",
    "Entspannte Segelatmosphäre"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={malaysiaSailing}
          alt="Malaysia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-green-500 text-white">🏝️ Malaysia</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Malaysia</h1>
            <p className="text-xl max-w-2xl">
              Vielfältige Kulturen und unberührte Inselwelten
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/indischer-ozean/asien" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Asien
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="flex justify-center text-green-600 mb-2">
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
              <Ship className="w-6 h-6 text-green-600" />
              Segeln in Malaysia
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Malaysia bietet eine einzigartige Mischung aus malaiischer, chinesischer 
              und indischer Kultur, kombiniert mit spektakulären Segelrevieren. 
              Von der Duty-Free-Insel Langkawi bis zur historischen Stadt Penang 
              erleben Sie kulturelle Vielfalt und tropische Schönheit.
            </p>
            <p className="text-lg text-gray-600">
              Die monsunabhängigen Segelgebiete erfordern sorgfältige Planung, 
              belohnen aber mit unberührten Tropeninseln, kristallklaren Gewässern 
              und einer der vielfältigsten Kulturen Asiens.
            </p>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {marinas.map((marina, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-green-600" />
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
                <Ship className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Entdecken Sie Malaysia
            </h3>
            <p className="mb-6 text-green-100">
              Erleben Sie kulturelle Vielfalt, unberührte Tropeninseln und 
              entspanntes Segeln in einem der authentischsten Länder Asiens.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-green-600 hover:bg-green-50" size="lg">
                Malaysia Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Malaysia;