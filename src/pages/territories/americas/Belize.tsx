import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";
const Belize = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Charter-Standorte",
    value: "Belize City, Placencia"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "November-April"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Belize Barrier Reef"
  }];
  const charterBases = [{
    name: "Belize City",
    description: "Hauptstadt und wichtigster Charter-Standort mit guter Infrastruktur",
    highlights: ["Belize Barrier Reef", "Lighthouse Reef", "Blue Hole", "St. George's Caye"]
  }, {
    name: "Placencia",
    description: "Entspanntes Fischerdorf mit authentischem karibischen Flair",
    highlights: ["Placencia Peninsula", "Silk Cayes", "Laughing Bird Caye", "Seine Bight"]
  }];
  const sailingHighlights = ["Größtes Korallenriff der westlichen Hemisphäre", "Weltberühmtes Great Blue Hole", "Unberührte Atolle und Cays", "Reiche Unterwasserwelt", "Englischsprachiges Land", "Authentische karibische Kultur", "Geschützte Lagunen und Buchten"];
  const popularRoutes = ["Belize City - St. George's Caye - Caye Caulker", "Placencia - Silk Cayes - Ranguana Caye", "Belize City - Turneffe Atoll - Lighthouse Reef", "Placencia - Gladden Spit - Whale Shark Area"];
  const marineHighlights = [{
    name: "Great Blue Hole",
    description: "Weltberühmte kreisrunde Unterwasserhöhle mit 124m Tiefe"
  }, {
    name: "Belize Barrier Reef",
    description: "Zweitgrößtes Korallenriff der Welt mit UNESCO-Welterbe Status"
  }, {
    name: "Turneffe Atoll",
    description: "Größtes Atoll in der westlichen Hemisphäre mit spektakulären Tauchplätzen"
  }, {
    name: "Hol Chan Marine Reserve",
    description: "Erstes Meeresschutzgebiet von Belize mit unglaublicher Artenvielfalt"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/75f7db93-d3a5-4fa5-b5f2-c8ff9287ca3c.png" alt="Belize Yacht Charter" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇧🇿 Belize</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Belize</h1>
            <p className="text-xl max-w-2xl">
              Unberührtes Segelparadies am größten Korallenriff der westlichen Hemisphäre
            </p>
          </div>
        </div>
        <Link to="/reviere/amerika-bahamas" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Amerika & Bahamas
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>)}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in Belize</h2>
            <p className="text-lg text-gray-600 mb-4">
              Belize ist ein verstecktes Juwel in der Karibik und bietet einige der 
              spektakulärsten Segel- und Taucherlebnisse der Welt. Das Belize Barrier Reef, 
              das größte Korallenriff der westlichen Hemisphäre, erstreckt sich über 300 
              Kilometer entlang der Küste und beherbergt das weltberühmte Great Blue Hole.
            </p>
            <p className="text-lg text-gray-600">
              Als englischsprachiges Land mit authentischer karibischer Kultur bietet 
              Belize eine entspannte Atmosphäre, unberührte Cays und Atolle sowie eine 
              unglaublich vielfältige Unterwasserwelt - perfekt für Segler, die das 
              Außergewöhnliche suchen.
            </p>
          </div>
        </div>

        {/* Charter Bases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {charterBases.map((base, index) => <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {base.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{base.description}</p>
                  <div className="space-y-1">
                    {base.highlights.map((highlight, idx) => <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <p className="text-sm text-gray-700">{highlight}</p>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Marine Highlights */}
        

        {/* Sailing Highlights */}
        

        {/* Popular Routes */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Belize?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das unberührte Segelparadies Belize mit dem Great Blue Hole, 
              spektakulären Korallenriffen und authentischer karibischer Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Belize Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Belize;