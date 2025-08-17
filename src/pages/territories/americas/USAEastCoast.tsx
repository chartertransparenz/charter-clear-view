import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import atlantic from "@/assets/atlantic.jpg";

const USAEastCoast = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Charter-Standorte", value: "Newport, Boston, Annapolis" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Erfahrene Segler" },
    { icon: Anchor, label: "Besonderheit", value: "Maritime Tradition" }
  ];

  const charterBases = [
    {
      name: "Newport",
      description: "Segelhauptstadt Amerikas mit legendären Regatten und historischen Villen",
      highlights: ["Newport Mansions", "America's Cup", "International Tennis Hall of Fame", "Cliff Walk"]
    },
    {
      name: "Boston",
      description: "Historische Stadt mit maritimer Tradition und exzellenten Häfen",
      highlights: ["Boston Harbor", "Freedom Trail", "USS Constitution", "Cape Cod Bay"]
    },
    {
      name: "Annapolis",
      description: "Segelzentrum mit der renommierten Naval Academy",
      highlights: ["US Naval Academy", "Chesapeake Bay", "Historic District", "Sailing Capital"]
    }
  ];

  const sailingHighlights = [
    "Legendäre amerikanische Segeltradition",
    "Anspruchsvolle Gewässer mit Gezeiten",
    "Historische Häfen und Städte",
    "Erstklassige Segelschulen und Clubs",
    "Spektakuläre Herbstfarben (Fall Foliage)",
    "Martha's Vineyard und Nantucket",
    "America's Cup Heritage"
  ];

  const popularRoutes = [
    "Newport - Martha's Vineyard - Nantucket",
    "Boston - Cape Cod - Provincetown",
    "Annapolis - St. Michaels - Oxford",
    "Newport - Block Island - Mystic"
  ];

  const historicalHighlights = [
    {
      name: "America's Cup",
      description: "Newport war über 50 Jahre Austragungsort der prestigeträchtigsten Segelregatta"
    },
    {
      name: "Martha's Vineyard",
      description: "Exklusive Insel mit reicher Seefahrtsgeschichte und Sommerferienhäusern"
    },
    {
      name: "Chesapeake Bay",
      description: "Größte Mündungsbucht der USA mit unzähligen Segelrevieren"
    },
    {
      name: "Nantucket",
      description: "Historische Walfängerinsel mit authentischem Neuengland-Charme"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={atlantic}
          alt="USA Ostküste Yacht Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇺🇸 USA Ostküste</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">USA Ostküste</h1>
            <p className="text-xl max-w-2xl">
              Klassisches amerikanisches Segeln mit maritimer Tradition
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln an der US-Ostküste</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die amerikanische Ostküste ist die Wiege des modernen Regattasegelns und bietet 
              einige der anspruchsvollsten und traditionellsten Segelgewässer der Welt. Von 
              den legendären Regattafeldern vor Newport bis zu den historischen Häfen von 
              Boston und der Chesapeake Bay - hier erleben Sie authentisches amerikanisches Segeln.
            </p>
            <p className="text-lg text-gray-600">
              Die Gewässer sind geprägt von Gezeitenströmen, wechselnden Winden und 
              spektakulären Landschaften. Besonders im Herbst, wenn sich die berühmten 
              Neuengland-Farben zeigen, ist das Segeln an der Ostküste ein unvergessliches Erlebnis.
            </p>
          </div>
        </div>

        {/* Charter Bases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-3">
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

        {/* Historical Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Maritime Geschichte</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {historicalHighlights.map((highlight, index) => (
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
              Bereit für die US-Ostküste?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie legendäres amerikanisches Segeln mit maritimer Tradition, 
              anspruchsvollen Gewässern und historischen Häfen von Weltrang.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                USA Ostküste Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USAEastCoast;