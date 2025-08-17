import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";

const Bahamas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Charter-Standorte", value: "Nassau, Georgetown" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Kristallklares Wasser" }
  ];

  const charterBases = [
    {
      name: "Nassau",
      description: "Hauptstadt der Bahamas mit exzellenter Charter-Infrastruktur",
      highlights: ["Paradise Island", "Cable Beach", "Straw Market", "Atlantis Resort"]
    },
    {
      name: "Georgetown (Exumas)",
      description: "Tor zu den spektakulären Exuma Cays",
      highlights: ["Swimming Pigs", "Iguana Beach", "Thunderball Grotto", "Staniel Cay"]
    }
  ];

  const sailingHighlights = [
    "Türkisfarbenes, kristallklares Wasser",
    "Unberührte Sandbänke und Cays",
    "Line-of-sight Navigation",
    "Schwimmende Schweine auf Big Major Cay",
    "Perfekte Ankerplätze und Buchten",
    "Warmes, tropisches Klima",
    "Exzellente Schnorchel- und Tauchgebiete"
  ];

  const popularRoutes = [
    "Nassau - Rose Island - Green Cay",
    "Exumas: Georgetown - Staniel Cay - Compass Cay",
    "Nassau - Highbourne Cay - Normans Cay",
    "Eleuthera: Governor's Harbor - Spanish Wells"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Bahamas Yacht Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇧🇸 Bahamas</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bahamas</h1>
            <p className="text-xl max-w-2xl">
              Paradiesisches Segeln im kristallklaren Wasser der Karibik
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in den Bahamas</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die Bahamas gelten als eines der schönsten Segelreviere der Welt. Mit über 700 
              Inseln und Cays bieten sie unendliche Möglichkeiten für unvergessliche Segeltörns. 
              Das kristallklare, türkisfarbene Wasser, die weißen Sandstrände und die entspannte 
              Atmosphäre machen jeden Charter zu einem Traumurlaub.
            </p>
            <p className="text-lg text-gray-600">
              Besonders die Exuma Cays sind weltberühmt für ihre schwimmenden Schweine, 
              Meerechsen und spektakulären Unterwasserhöhlen. Das warme, tropische Klima 
              und die moderaten Winde schaffen perfekte Bedingungen für Segler aller Erfahrungsstufen.
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
                    <Link 
                      to={`/reviere/amerika-bahamas/bahamas/${base.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                      className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {base.name}
                    </Link>
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
                  <Link 
                    to={`/reviere/amerika-bahamas/bahamas/${base.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Mehr erfahren →
                  </Link>
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
              Bereit für die Bahamas?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie paradiesisches Segeln im kristallklaren Wasser der Bahamas 
              mit schwimmenden Schweinen und unberührten Traumstränden.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Bahamas Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bahamas;