import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";

const Placencia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Placencia Peninsula" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Entspannte Segler" },
    { icon: Anchor, label: "Besonderheit", value: "Authentisches Fischerdorf" }
  ];

  const highlights = [
    "Entspanntes Fischerdorf-Ambiente",
    "Längster Sandstrand in Belize",
    "Authentische karibische Kultur",
    "Ausgezeichnete Restaurants",
    "Günstigere Alternative zu Belize City",
    "Direkter Zugang zu Silk Cayes",
    "Walhai-Beobachtung möglich"
  ];

  const nearbyDestinations = [
    {
      name: "Silk Cayes",
      distance: "45 Min",
      description: "Spektakuläre kleine Inseln mit perfekten Stränden"
    },
    {
      name: "Ranguana Caye",
      distance: "1 Std",
      description: "Postkartenreife Privatinsel mit Palm trees"
    },
    {
      name: "Laughing Bird Caye",
      distance: "30 Min",
      description: "Nationalpark und UNESCO Welterbe Stätte"
    },
    {
      name: "Gladden Spit",
      distance: "2 Std",
      description: "Berühmtes Walhai-Beobachtungsgebiet"
    }
  ];

  const activities = [
    "Walhai-Schwimmen (April-Juni)",
    "Schnorcheln an den Silk Cayes",
    "Manatee-Watching in Monkey River",
    "Sportfischen auf Bonefish",
    "Cockscomb Jaguar Reserve besuchen",
    "Garifuna-Kultur in Seine Bight",
    "Placencia Sidewalk erkunden"
  ];

  const localFeatures = [
    {
      name: "Placencia Sidewalk",
      description: "Schmaler Betonweg durch das Dorf - im Guinness Buch der Rekorde"
    },
    {
      name: "Seine Bight",
      description: "Garifuna-Dorf mit authentischer Kultur und Trommeln"
    },
    {
      name: "Monkey River",
      description: "Flussfahrt mit Brüllaffen und Manatee-Sichtungen"
    },
    {
      name: "Cockscomb Basin",
      description: "Weltweit erstes Jaguar-Reservat mit Hiking Trails"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Placencia Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇧🇿 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Placencia</h1>
            <p className="text-xl max-w-2xl">
              Entspanntes Fischerdorf mit authentischem Karibik-Flair
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/amerika-bahamas/belize" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Belize
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter-Standort Placencia</h2>
            <p className="text-lg text-gray-600 mb-4">
              Placencia ist ein charmantes Fischerdorf an der Südküste von Belize und bietet 
              eine entspanntere Alternative zu Belize City. Mit seinem 16 Meilen langen 
              Sandstrand, der berühmten "Sidewalk" (dem schmälsten Gehweg der Welt) und 
              der authentischen karibischen Atmosphäre ist Placencia perfekt für Segler, 
              die das echte Belize erleben möchten.
            </p>
            <p className="text-lg text-gray-600">
              Der Ort ist berühmt für seine Walhai-Saison von April bis Juni und bietet 
              Zugang zu spektakulären Cays wie den Silk Cayes. Die Garifuna-Kultur 
              in Seine Bight und das nahegelegene Jaguar-Reservat machen Placencia 
              zu einem einzigartigen Charter-Standort.
            </p>
          </div>
        </div>

        {/* Local Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Lokale Besonderheiten</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {localFeatures.map((feature, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nearby Destinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelziele ab Placencia</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {nearbyDestinations.map((destination, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800">
                        {destination.name}
                      </h3>
                    </div>
                    <Badge variant="outline" className="text-blue-600">
                      {destination.distance}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{destination.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Aktivitäten & Erlebnisse</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Anchor className="w-5 h-5 text-blue-600" />
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
              Bereit für Placencia?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie authentisches Belize-Feeling in Placencia mit Walhaien, 
              traumhaften Cays und echter karibischer Gastfreundschaft.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Placencia Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placencia;