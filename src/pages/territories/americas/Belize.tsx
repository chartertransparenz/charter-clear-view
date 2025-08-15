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

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Zentralamerika, Karibik" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Abenteuerlustige Segler" },
    { icon: Anchor, label: "Highlight", value: "Zweitgrößtes Barrier Reef" }
  ];

  const regions = [
    {
      name: "Belize",
      link: "/reviere/amerika-bahamas/belize/belize",
      description: "Barrier Reef und authentische Maya-Kultur",
      cities: ["Placencia"]
    }
  ];

  const highlights = [
    "Zweitgrößtes Barrier Reef der Welt",
    "Unberührte Cays und Atolls",
    "Authentische Maya-Kultur",
    "Exzellente Tauch- und Schnorchelgebiete",
    "Englischsprachiges Land",
    "Wenig befahrene Gewässer",
    "Tropischer Regenwald"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Belize"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇧🇿 Belize</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Belize</h1>
            <p className="text-xl max-w-2xl">
              Barrier Reef und Maya-Kultur
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in Belize</h2>
            <p className="text-lg text-gray-600 mb-4">
              Belize bietet ein einzigartiges Segelerlebnis am zweitgrößten 
              Barrier Reef der Welt. Diese englischsprachige Nation in 
              Zentralamerika kombiniert spektakuläre Unterwasserwelten mit 
              authentischer Maya-Kultur und unberührten Cays.
            </p>
            <p className="text-lg text-gray-600">
              Von Placencia aus erkunden abenteuerlustige Segler wenig 
              befahrene Gewässer, exzellente Tauchgebiete und die faszinierende 
              Mischung aus karibischem Flair und tropischem Regenwald.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Belize?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das zweitgrößte Barrier Reef der Welt und die 
              authentische Maya-Kultur in diesem einzigartigen Segelrevier.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Belize Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belize;