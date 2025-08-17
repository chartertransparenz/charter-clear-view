import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";

const Mexico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Charter-Standorte", value: "Cancún, Cozumel" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Maya-Kultur & Cenoten" }
  ];

  const charterBases = [
    {
      name: "Cancún",
      description: "Moderne Touristenmetropole mit erstklassiger Charter-Infrastruktur",
      highlights: ["Marina V&V", "Isla Mujeres", "Mesoamerikanisches Riff", "Maya-Ruinen"]
    },
    {
      name: "Cozumel",
      description: "Taucherparadies mit spektakulären Korallenriffen",
      highlights: ["Palancar Riff", "Santa Rosa Wall", "Chankanaab Park", "San Gervasio Ruinen"]
    }
  ];

  const sailingHighlights = [
    "Zweitgrößtes Korallenriff der Welt",
    "Kristallklare Cenoten zum Schwimmen",
    "Maya-Kulturstätten und Pyramiden",
    "Tropisches Klima ganzjährig",
    "Bunte Unterwasserwelt",
    "Entspannte karibische Atmosphäre",
    "Exzellente mexikanische Küche"
  ];

  const popularRoutes = [
    "Cancún - Isla Mujeres - Isla Contoy",
    "Cozumel - Playa del Carmen - Tulum",
    "Cancún - Holbox - Rio Lagartos",
    "Cozumel - Banco Chinchorro - Xcalak"
  ];

  const culturalHighlights = [
    {
      name: "Chichen Itzá",
      description: "Eine der bekanntesten Maya-Stätten mit der berühmten Kukulcán-Pyramide"
    },
    {
      name: "Tulum",
      description: "Spektakuläre Maya-Ruinen direkt am karibischen Meer"
    },
    {
      name: "Cenoten",
      description: "Kristallklare Süßwasserhöhlen, heilige Stätten der Maya"
    },
    {
      name: "Isla Mujeres",
      description: "Charmante Insel mit entspannter Atmosphäre und bunten Häusern"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Mexiko Yacht Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇲🇽 Mexiko</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mexiko (Karibik)</h1>
            <p className="text-xl max-w-2xl">
              Tropisches Paradies mit Maya-Kultur und spektakulären Korallenriffen
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in der mexikanischen Karibik</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die mexikanische Karibikküste vereint traumhaftes Segeln mit faszinierender 
              Maya-Kultur. Das zweitgrößte Korallenriff der Welt, kristallklare Cenoten 
              und spektakuläre Unterwasserhöhlen machen diese Region zu einem einzigartigen 
              Segelrevier mit unvergleichlichen Tauchmöglichkeiten.
            </p>
            <p className="text-lg text-gray-600">
              Von den modernen Marinas in Cancún bis zu den authentischen Fischerorten 
              an der Costa Maya bietet Mexiko eine perfekte Mischung aus Komfort, 
              Abenteuer und kulturellen Erlebnissen inmitten tropischer Schönheit.
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

        {/* Cultural Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Kulturelle Highlights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {culturalHighlights.map((highlight, index) => (
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
              Bereit für Mexiko?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die Geheimnisse der Maya-Kultur, tauchen Sie in kristallklaren 
              Cenoten und segeln Sie entlang des zweitgrößten Korallenriffs der Welt.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Mexiko Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mexico;