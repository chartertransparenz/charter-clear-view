import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import destinationSeychelles from "@/assets/destination-seychelles.jpg";

const LaDigue = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Viertgrößte Insel der Seychellen" },
    { icon: Calendar, label: "Beste Zeit", value: "April-Mai, Oktober-November" },
    { icon: Users, label: "Geeignet für", value: "Romantiker & Fotografen" },
    { icon: Anchor, label: "Besonderheit", value: "Spektakuläre Granitfelsen" }
  ];

  const highlights = [
    "Anse Source d'Argent - ikonischer Strand",
    "Spektakuläre Granitfelsen-Formationen",
    "Riesenschildkröten im L'Union Estate",
    "Authentisches Inselleben",
    "Fahrrad-freundliche Atmosphäre",
    "Vanilla-Plantagen",
    "Traumhafte Fotomotive"
  ];

  const marinas = [
    {
      name: "La Passe",
      description: "Haupthafen mit Fährverbindungen",
      facilities: ["Anleger", "Provisions", "Fahrradverleih"]
    },
    {
      name: "Anse Source d'Argent",
      description: "Berühmter Ankerplatz mit Granitfelsen",
      facilities: ["Strand", "Restaurant", "Schnorcheln"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationSeychelles}
          alt="La Digue, Seychellen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🏝️ La Digue</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">La Digue</h1>
            <p className="text-xl max-w-2xl">
              Spektakuläre Granitfelsen-Strände
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/indischer-ozean/seychellen" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Seychellen
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter in La Digue</h2>
            <p className="text-lg text-gray-600 mb-4">
              La Digue ist berühmt für ihre spektakulären Granitfelsen-Strände, 
              insbesondere Anse Source d'Argent, der als einer der 
              meistfotografierten Strände der Welt gilt.
            </p>
            <p className="text-lg text-gray-600">
              Die Insel hat ihren authentischen Charme bewahrt mit Ochsenkarren 
              als Haupttransportmittel und einer entspannten, zeitlosen Atmosphäre. 
              Perfekt für romantische Charter und Fotografen.
            </p>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Häfen & Ankerplätze</h2>
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
              La Digue Charter anfragen
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie die spektakulären Granitfelsen-Strände und die authentische Atmosphäre von La Digue.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                La Digue Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaDigue;