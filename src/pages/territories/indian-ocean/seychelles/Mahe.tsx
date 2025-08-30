import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
const Mahe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: <MapPin className="w-5 h-5" />,
    label: "Lage",
    value: "Hauptinsel der Seychellen"
  }, {
    icon: <Calendar className="w-5 h-5" />,
    label: "Beste Reisezeit",
    value: "April - Mai, Oktober - November"
  }, {
    icon: <Waves className="w-5 h-5" />,
    label: "Segelwetter",
    value: "SE Passat 15-25 kn"
  }, {
    icon: <Users className="w-5 h-5" />,
    label: "Chartertyp",
    value: "Katamaran bevorzugt"
  }];
  const marinas = [{
    name: "Eden Bleu Marina",
    description: "Moderne Marina nahe dem Flughafen",
    facilities: ["Premium Service", "Flughafen nahe", "Shopping", "Restaurants"]
  }, {
    name: "Port Victoria",
    description: "Haupthafen von Victoria",
    facilities: ["Stadtzentrum", "Provisioning", "Lokale Kultur", "Märkte"]
  }];
  const highlights = ["115 Granitinseln erkunden", "Unique Coco de Mer Palmen", "Weltklasse Strände", "Riesenschildkröten auf Aldabra", "Kreolische Kultur", "Vallée de Mai UNESCO Park", "Pristine Korallenriffe", "Luxuriöse Entspannung"];
  const attractions = [{
    name: "Praslin & Vallée de Mai",
    description: "UNESCO Weltnaturerbe mit Coco de Mer",
    type: "Natur"
  }, {
    name: "La Digue",
    description: "Traumstrände und Granitfelsen",
    type: "Strand"
  }, {
    name: "Aldabra Atoll",
    description: "Riesenschildkröten Heiligtum",
    type: "Wildlife"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/ea72cf43-32c6-428b-aada-6f6b326b8052.png" alt="Mahé Seychellen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">💎 Mahé</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mahé</h1>
            <p className="text-xl max-w-2xl">
              Hauptinsel der Seychellen
            </p>
          </div>
        </div>
        <Link to="/reviere/indischer-ozean/seychellen" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Seychellen
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="flex justify-center text-blue-600 mb-2">
                  {fact.icon}
                </div>
                <div className="font-semibold text-sm text-gray-600 mb-1">
                  {fact.label}
                </div>
                <div className="text-sm font-medium">
                  {fact.value}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-blue-600" />
              Charter-Standort Mahé
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Mahé ist die Hauptinsel der Seychellen und Ausgangspunkt für Charter 
              zwischen den 115 Granitinseln des Archipels. Mit dem internationalen 
              Flughafen, der Hauptstadt Victoria und modernen Marinas bietet Mahé 
              die beste Infrastruktur für Seychellen-Charter.
            </p>
            <p className="text-lg text-gray-600">
              Von hier erreichen Sie legendäre Inseln wie Praslin mit dem UNESCO 
              Vallée de Mai, La Digue mit den berühmtesten Stränden der Welt 
              und das entlegene Aldabra Atoll mit seinen Riesenschildkröten.
            </p>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marinas & Häfen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {marinas.map((marina, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{marina.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Services:</div>
                    <div className="flex flex-wrap gap-2">
                      {marina.facilities.map((facility, idx) => <Badge key={idx} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Attractions */}
        

        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter ab Mahé
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie 115 Granitinseln mit den schönsten Stränden der Welt, 
              UNESCO Naturparks und einer einzigartigen kreolischen Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Mahé Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Mahe;