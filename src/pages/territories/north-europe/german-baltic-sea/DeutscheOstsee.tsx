import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import balticSea from "@/assets/baltic-sea.jpg";
const DeutscheOstsee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Charter-Standorte",
    value: "5 Häfen"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-September"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Familien & Anfänger"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Tidenfrei segeln"
  }];
  const charterLocations = [{
    name: "Breege (Rügen)",
    description: "Tor zur Insel Rügen mit den berühmten Kreidefelsen",
    highlights: ["Kreidefelsen", "Nationalpark Jasmund", "Historische Seebrücken"]
  }, {
    name: "Flensburg",
    description: "Grenzstadt mit maritimem Flair und dänischer Kultur",
    highlights: ["Flensburger Förde", "Historische Altstadt", "Rum-Museum"]
  }, {
    name: "Großenbrode",
    description: "Familienfreundlicher Hafen an der Kieler Bucht",
    highlights: ["Fehmarn-Sund", "Familienstrände", "Naturschutzgebiete"]
  }, {
    name: "Heiligenhafen",
    description: "Traditioneller Fischerort mit moderner Marina",
    highlights: ["Fischereihafen", "Vogelschutzgebiet", "Seebäder"]
  }, {
    name: "Rostock/Warnemünde",
    description: "Größter Ostseehafen mit hanseatischer Geschichte",
    highlights: ["Hansestadt", "Warnemünder Strand", "Teepott"]
  }];
  const sailingHighlights = ["Tidenfreies Segeln ohne Gezeitenberechnung", "Kurze Distanzen zwischen den Häfen", "Geschützte Gewässer ideal für Anfänger", "Weiße Sandstrände und Kreidefelsen", "Historische Hansestädte entdecken", "Familienfreundliche Segelreviere", "Moderne Marina-Ausstattung"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={balticSea} alt="Deutsche Ostsee Charter-Standorte" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">⚓ Charter-Standorte</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Deutsche Ostsee</h1>
            <p className="text-xl max-w-2xl">
              Charter-Standorte an der deutschen Ostseeküste
            </p>
          </div>
        </div>
        <Link to="/reviere/nord-europa/deutsche-ostsee" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Deutschen Ostsee
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter-Standorte an der deutschen Ostsee</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die deutsche Ostseeküste bietet fünf erstklassige Charter-Standorte für 
              Ihren perfekten Segeltörn. Von der Insel Rügen mit ihren spektakulären 
              Kreidefelsen bis zur Hansestadt Rostock - jeder Hafen hat seinen eigenen Charme.
            </p>
            <p className="text-lg text-gray-600">
              Alle Standorte bieten moderne Marinas mit hervorragender Ausstattung und 
              sind ideal für tidenfreies Segeln in geschützten Gewässern.
            </p>
          </div>
        </div>

        {/* Charter Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Unsere Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {charterLocations.map((location, index) => <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {location.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <div className="space-y-1">
                    {location.highlights.map((highlight, idx) => <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <p className="text-sm text-gray-700">{highlight}</p>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Sailing Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Ihren Ostsee-Charter?
            </h3>
            <p className="mb-6 text-blue-100">
              Wählen Sie Ihren bevorzugten Charter-Standort und starten Sie 
              Ihr tidenfreies Segelabenteuer an der deutschen Ostseeküste.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Charter-Anfrage starten
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default DeutscheOstsee;