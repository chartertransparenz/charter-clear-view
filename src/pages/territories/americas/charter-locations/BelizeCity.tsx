import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";

const BelizeCity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Hauptstadt von Belize" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Tor zum Blue Hole" }
  ];

  const highlights = [
    "Hauptstadt und wichtigster Charter-Standort",
    "Direkter Zugang zum Belize Barrier Reef",
    "Weltberühmtes Great Blue Hole erreichbar",
    "Lighthouse Reef und Turneffe Atoll",
    "Englischsprachiges Umfeld",
    "Gute Charter-Infrastruktur",
    "Authentische karibische Kultur"
  ];

  const nearbyDestinations = [
    {
      name: "St. George's Caye",
      distance: "30 Min",
      description: "Historische Insel mit kolonialer Vergangenheit"
    },
    {
      name: "Caye Caulker",
      distance: "1 Std",
      description: "Entspannte Backpacker-Insel mit 'Go Slow' Mentalität"
    },
    {
      name: "Turneffe Atoll",
      distance: "2 Std",
      description: "Größtes Atoll der westlichen Hemisphäre"
    },
    {
      name: "Great Blue Hole",
      distance: "3 Std",
      description: "Weltberühmte Unterwasserhöhle mit 124m Tiefe"
    }
  ];

  const activities = [
    "Tauchen am Great Blue Hole",
    "Schnorcheln am Belize Barrier Reef",
    "Manatee-Watching",
    "Hol Chan Marine Reserve erkunden",
    "Shark Ray Alley besuchen",
    "Conch Bar Cave Höhlenerkundung",
    "Angeln auf Bonefish und Tarpon"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Belize City Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇧🇿 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Belize City</h1>
            <p className="text-xl max-w-2xl">
              Hauptstadt und Tor zum Great Blue Hole
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter-Standort Belize City</h2>
            <p className="text-lg text-gray-600 mb-4">
              Belize City ist der wichtigste Charter-Standort in Belize und bietet direkten 
              Zugang zu einigen der spektakulärsten Meeresschutzgebiete der Welt. Als 
              ehemalige Hauptstadt verfügt die Stadt über die beste Infrastruktur des Landes 
              und ist der ideale Ausgangspunkt für Expeditionen zum Great Blue Hole.
            </p>
            <p className="text-lg text-gray-600">
              Von hier aus erreichen Sie das Belize Barrier Reef, das zweitgrößte 
              Korallenriff der Welt, sowie die spektakulären Atolle Turneffe und 
              Lighthouse Reef. Die englischsprachige Umgebung erleichtert die Navigation 
              und Kommunikation erheblich.
            </p>
          </div>
        </div>

        {/* Nearby Destinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelziele ab Belize City</h2>
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
              Bereit für Belize City?
            </h3>
            <p className="mb-6 text-blue-100">
              Starten Sie Ihr Belize-Abenteuer von der Hauptstadt aus und entdecken Sie 
              das Great Blue Hole und die spektakulären Korallenriffe.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Belize City Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelizeCity;