import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";

const Cancun = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Riviera Maya, Mexiko" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Marina", value: "Marina V&V" }
  ];

  const highlights = [
    "Moderne Marina mit erstklassiger Ausstattung",
    "Isla Mujeres - nur 30 Minuten entfernt",
    "Mesoamerikanisches Riff vor der Haustür",
    "Maya-Ruinen von Chichen Itzá",
    "Kristallklare Cenoten zum Schwimmen",
    "Lebendiges Nachtleben und Restaurants",
    "Ausgezeichnete Tauch- und Schnorchelmöglichkeiten"
  ];

  const nearbyDestinations = [
    {
      name: "Isla Mujeres",
      distance: "30 Min",
      description: "Charmante Insel mit entspannter Atmosphäre und bunten Häusern"
    },
    {
      name: "Isla Contoy",
      distance: "1,5 Std",
      description: "Unberührtes Naturschutzgebiet und Vogelparadies"
    },
    {
      name: "Holbox",
      distance: "3 Std",
      description: "Autofrei Insel mit Walhaien und Flamingos"
    },
    {
      name: "Cozumel",
      distance: "2 Std",
      description: "Weltklasse Tauchgebiete und spektakuläre Korallenriffe"
    }
  ];

  const activities = [
    "Schnorcheln am Mesoamerikanischen Riff",
    "Cenoten-Swimming und Höhlentauchen",
    "Maya-Ruinen Besichtigung",
    "Delfin- und Walhai-Touren",
    "Tiefsee-Angeln",
    "Kitesurfen und Windsurfen",
    "Unterwasser-Museum MUSA"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Cancún Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇲🇽 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Cancún</h1>
            <p className="text-xl max-w-2xl">
              Tor zur Maya-Kultur und dem Mesoamerikanischen Riff
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/amerika-bahamas/mexiko" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Mexiko
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter-Standort Cancún</h2>
            <p className="text-lg text-gray-600 mb-4">
              Cancún ist der perfekte Ausgangspunkt für Ihren Segeltörn in der mexikanischen 
              Karibik. Die moderne Marina V&V bietet erstklassige Ausstattung und Service, 
              während die nahegelegenen Inseln Isla Mujeres und Isla Contoy traumhafte 
              Segelziele vor der Haustür bieten.
            </p>
            <p className="text-lg text-gray-600">
              Von hier aus erreichen Sie das zweitgrößte Korallenriff der Welt, kristallklare 
              Cenoten und die spektakulären Maya-Ruinen von Chichen Itzá. Cancún vereint 
              perfekte Segelinfrastruktur mit unvergleichlichen kulturellen und natürlichen Erlebnissen.
            </p>
          </div>
        </div>

        {/* Nearby Destinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelziele ab Cancún</h2>
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
              Bereit für Cancún?
            </h3>
            <p className="mb-6 text-blue-100">
              Starten Sie Ihr mexikanisches Segelabenteuer von Cancún aus und entdecken Sie 
              Maya-Kultur, Korallenriffe und kristallklare Cenoten.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Cancún Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancun;