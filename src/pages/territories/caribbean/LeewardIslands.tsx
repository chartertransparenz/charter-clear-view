
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";

const LeewardIslands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Nördliche Kleine Antillen" },
    { icon: Calendar, label: "Beste Zeit", value: "Dezember-Mai" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Inseln", value: "Vielfältige Inselgruppe" }
  ];

  const regions = [
    {
      name: "Leeward Inseln",
      link: "/reviere/karibik/charter-standorte/antigua",
      description: "Vielfältige Inselgruppe mit französischem und niederländischem Flair",
      cities: ["Antigua", "St. Martin", "Guadeloupe", "St. Kitts"]
    }
  ];

  const highlights = [
    "Vielfältige Kulturen und Sprachen",
    "Französisches und niederländisches Flair",
    "Traumhafte Sandstrände",
    "Konstante Passatwinde",
    "Exzellente Gastronomie",
    "Duty-free Shopping",
    "Perfekte Segelbedingungen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Leeward Inseln"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🏝️ Leeward Inseln</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Leeward Inseln</h1>
            <p className="text-xl max-w-2xl">
              Kulturelle Vielfalt in der nördlichen Karibik
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/karibik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Karibik
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in den Leeward Inseln</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die Leeward Inseln bieten eine faszinierende kulturelle Vielfalt mit 
              französischen, niederländischen und britischen Einflüssen. Von der 
              französischen Eleganz Guadeloupes über das kosmopolitische St. Martin 
              bis zum klassischen Karibikflair Antiguas.
            </p>
            <p className="text-lg text-gray-600">
              Konstante Passatwinde, kurze Distanzen zwischen den Inseln und eine 
              exzellente Infrastruktur machen die Leeward Inseln zu einem perfekten 
              Segelrevier für alle, die Vielfalt und Komfort schätzen.
            </p>
          </div>
        </div>

        {/* Charter Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="block hover:no-underline group max-w-2xl mx-auto">
                <Card className="shadow-lg h-full group-hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-purple-200 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700">{region.description}</p>
                    {region.cities && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Verfügbare Charter-Standorte:</div>
                        <div className="grid grid-cols-2 gap-2">
                          {region.cities.map((city, idx) => (
                            <div key={idx} className="text-sm text-purple-600 font-medium group-hover:text-purple-700">
                              • {city}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="text-sm text-purple-600 font-medium group-hover:text-purple-700 flex items-center gap-1">
                      → Charter-Informationen & Marinas
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
              Bereit für die Leeward Inseln?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die kulturelle Vielfalt der nördlichen Karibik mit 
              französischem Savoir-vivre und karibischer Gelassenheit.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Leeward Inseln Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeewardIslands;
