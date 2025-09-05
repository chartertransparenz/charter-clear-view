import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import swedenArchipelago from "@/assets/sweden-archipelago.png";

const Sweden = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Schwedische Ost- und Westküste" },
    { icon: Calendar, label: "Beste Zeit", value: "Juni-August" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Spektakuläre Schärengärten" }
  ];

  const highlights = [
    "Weltberühmte Stockholmer Schären",
    "Göteborger Schärenküste",
    "Unberührte Natur und Wildnis",
    "Mitternachtssonne im Sommer",
    "Kristallklare Gewässer",
    "Authentische schwedische Kultur",
    "Hervorragende Sicherheitsstandards"
  ];

  const marinas = [
    {
      name: "Stockholm",
      description: "Tor zu den berühmten Stockholmer Schären",
      facilities: ["Großstadtmarina", "Schären-Zugang", "Kultur", "Restaurants"]
    },
    {
      name: "Göteborg",
      description: "Westküsten-Charter mit Zugang zur Nordsee",
      facilities: ["Westküste", "Schärenküste", "Nordsee-Zugang", "Moderne Marinas"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={swedenArchipelago}
          alt="Schweden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇸🇪 Schweden</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Schweden</h1>
            <p className="text-xl max-w-2xl">
              Spektakuläre Schärengärten
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/nord-europa/skandinavien" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Skandinavien
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter in Schweden</h2>
            <p className="text-lg text-gray-600 mb-4">
              Schweden bietet einige der spektakulärsten Segelreviere der Welt. 
              Die berühmten Stockholmer Schären mit über 30.000 Inseln und Schären 
              sind ein Paradies für Segler, die unberührte Natur und kristallklare Gewässer lieben.
            </p>
            <p className="text-lg text-gray-600">
              Die schwedische Westküste um Göteborg bietet direkten Zugang zur Nordsee, 
              während die Ostküste mit ihrer einzigartigen Schärenlandschaft und der 
              Mitternachtssonne im Sommer unvergessliche Segelerlebnisse garantiert.
            </p>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {marinas.map((marina, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{marina.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {marina.facilities.map((facility, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {facility}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              Schweden Charter anfragen
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie die spektakulären Schärengärten und die unberührte nordische Wildnis Schwedens.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Schweden Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sweden;