import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import mediterranean from "@/assets/mediterranean.jpg";
const Malta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Zentrales Mittelmeer"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "April-November"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Kompakte Inselgruppe"
  }];
  const regions = [{
    name: "Malta Xlokk",
    link: "/reviere/mittelmeer/malta/malta-xlokk",
    description: "Haupthafen und maritime Basis der maltesischen Inseln"
  }];
  const highlights = ["Kristallklares, türkisfarbenes Wasser", "Reiche Geschichte und Kultur", "Kompakte Segelreviere", "Ganzjährig mildes Klima", "UNESCO-Weltkulturerbe Valletta", "Authentische mediterrane Atmosphäre", "Exzellente Sicherheitsstandards"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={mediterranean} alt="Malta Mittelmeer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇲🇹 Malta</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Malta</h1>
            <p className="text-xl max-w-2xl">
              Das Herz des Mittelmeers
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Mittelmeer
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in Malta</h2>
            <p className="text-lg text-gray-600 mb-4">
              Malta liegt strategisch perfekt im Herzen des Mittelmeers und bietet 
              ein einzigartiges Segelerlebnis. Die kompakte Inselgruppe mit 
              kristallklarem Wasser und reicher Geschichte ist ideal für entspannte 
              Segeltörns in überschaubaren Revieren.
            </p>
            <p className="text-lg text-gray-600">
              Mit der UNESCO-Weltkulturerbe Stadt Valletta als Highlight und 
              ganzjährig mildem Klima ist Malta ein perfektes Ziel für kulturinteressierte 
              Segler und alle, die authentische mediterrane Atmosphäre suchen.
            </p>
          </div>
        </div>

        {/* Regions */}
        

        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Malta?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das Herz des Mittelmeers mit seiner reichen Geschichte, 
              kristallklarem Wasser und authentischer mediterraner Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Malta Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Malta;