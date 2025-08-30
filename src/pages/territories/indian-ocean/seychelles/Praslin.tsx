import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";

const Praslin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Zweitgrößte Insel der Seychellen"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "April-Mai, Oktober-November"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Naturliebhaber & Familien"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "UNESCO Vallée de Mai"
  }];
  const highlights = ["UNESCO Weltnaturerbe Vallée de Mai", "Seltene Coco de Mer Palmen", "Anse Lazio - einer der schönsten Strände der Welt", "Schwarzer Papagei (endemisch)", "Kristallklare Schnorchelgebiete", "Entspannte Atmosphäre", "Ausgezeichnete Ankerplätze"];
  const marinas = [{
    name: "Baie Sainte Anne",
    description: "Haupthafen mit Fährverbindungen",
    facilities: ["Fuel", "Wasser", "Provisions"]
  }, {
    name: "Anse Volbert",
    description: "Beliebter Ankerplatz an der Côte d'Or",
    facilities: ["Restaurants", "Beach Bars", "Wassersport"]
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/a01ef375-2c09-46c0-b2b1-f10026d0ecf2.png" alt="Praslin, Seychellen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🌴 Praslin</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Praslin</h1>
            <p className="text-xl max-w-2xl">
              UNESCO Weltnaturerbe mit Coco de Mer
            </p>
          </div>
        </div>
        <Link to="/reviere/indischer-ozean/seychellen" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Seychellen
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter in Praslin</h2>
            <p className="text-lg text-gray-600 mb-4">
              Praslin ist die zweitgrößte Insel der Seychellen und beherbergt das 
              berühmte UNESCO Weltnaturerbe Vallée de Mai, wo die seltenen Coco de Mer 
              Palmen wachsen. Die Insel bietet einige der schönsten Strände der Welt.
            </p>
            <p className="text-lg text-gray-600">
              Anse Lazio wird regelmäßig zu den Top 10 Stränden weltweit gezählt. 
              Die entspannte Atmosphäre und die hervorragenden Ankerplätze machen 
              Praslin zu einem Highlight jeder Seychellen-Charter.
            </p>
          </div>
        </div>

        {/* Marinas */}
        

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>)}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Praslin Charter anfragen
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das UNESCO Weltnaturerbe und die traumhaften Strände von Praslin.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Praslin Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Praslin;