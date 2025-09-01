import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import balticSea from "@/assets/baltic-sea.jpg";
const Holland = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Niederländische Nordsee & IJsselmeer"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-September"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Erfahrene Segler"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Extreme Gezeiten, großes Binnengewässer"
  }];
  const highlights = ["IJsselmeer - riesiges Binnengewässer", "Extreme Nordsee-Gezeiten bis 4m", "Traditionelle Segelkultur", "Historische Hafenstädte", "Wattenmeer UNESCO-Welterbe", "Ausgezeichnete Infrastruktur", "Herausfordernde Tidenreviere"];
  const marinas = [{
    name: "IJsselmeer",
    description: "Großes Binnengewässer ohne Gezeiten",
    facilities: ["Viele Marinas", "Familienfreundlich", "Geschützte Gewässer"]
  }, {
    name: "Nordseeküste",
    description: "Anspruchsvolle Tidenreviere",
    facilities: ["Extreme Gezeiten", "Wattenmeer", "Navigation anspruchsvoll"]
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={balticSea} alt="Holland Nordsee" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇳🇱 Holland</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Holland</h1>
            <p className="text-xl max-w-2xl">
              IJsselmeer und extreme Nordsee-Gezeiten
            </p>
          </div>
        </div>
        <Link to="/reviere/nord-europa/nordsee" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Nordsee
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter in Holland</h2>
            <p className="text-lg text-gray-600 mb-4">
              Holland bietet zwei völlig unterschiedliche Segelreviere: Das riesige, 
              tidenfreie IJsselmeer für entspanntes Familiensegeln und die 
              herausfordernde Nordseeküste mit extremen Gezeiten bis zu 4 Metern.
            </p>
            <p className="text-lg text-gray-600">
              Das UNESCO-Welterbe Wattenmeer, historische Hafenstädte und die 
              traditionelle niederländische Segelkultur machen Holland zu einem 
              einzigartigen Segelrevier für alle Erfahrungsstufen.
            </p>
          </div>
        </div>

        {/* Marinas */}
        

        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Holland Charter anfragen
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie das vielseitige Holland mit dem entspannten IJsselmeer oder den herausfordernden Nordsee-Gezeiten.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Holland Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Holland;