import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
const caribbean = "/caribbean.jpg";

const Cozumel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Insel vor Playa del Carmen" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Taucher & Segler" },
    { icon: Anchor, label: "Besonderheit", value: "Weltklasse Tauchen" }
  ];

  const highlights = [
    "Weltberühmte Tauchgebiete",
    "Palancar Riff - UNESCO Welterbe",
    "Santa Rosa Wall - Steilwandtauchen",
    "Maya-Ruinen von San Gervasio",
    "Chankanaab National Park",
    "Punta Sur Eco Beach Park",
    "Authentische mexikanische Kultur"
  ];

  const nearbyDestinations = [
    {
      name: "Playa del Carmen",
      distance: "45 Min",
      description: "Lebendige Küstenstadt mit der berühmten 5th Avenue"
    },
    {
      name: "Tulum",
      distance: "2 Std",
      description: "Spektakuläre Maya-Ruinen direkt am karibischen Meer"
    },
    {
      name: "Xcaret",
      distance: "1 Std",
      description: "Öko-archäologischer Park mit Maya-Shows und Natur"
    },
    {
      name: "Banco Chinchorro",
      distance: "4 Std",
      description: "Abgelegenes Atoll mit unberührten Korallenriffen"
    }
  ];

  const diveSpots = [
    {
      name: "Palancar Riff",
      depth: "15-40m",
      description: "Spektakuläres Korallenriff mit tunnels und Überhängen"
    },
    {
      name: "Santa Rosa Wall",
      depth: "22-40m+",
      description: "Dramatische Steilwand mit großen Meerestieren"
    },
    {
      name: "Columbia Deep",
      depth: "30-40m+",
      description: "Tieftauchgang mit Haien und Rochen"
    },
    {
      name: "Paradise Riff",
      depth: "10-25m",
      description: "Entspannter Tauchgang für alle Erfahrungsstufen"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Cozumel Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇲🇽 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Cozumel</h1>
            <p className="text-xl max-w-2xl">
              Taucherparadies mit weltberühmten Korallenriffen
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter-Standort Cozumel</h2>
            <p className="text-lg text-gray-600 mb-4">
              Cozumel ist eine der weltweit besten Destinationen für Taucher und bietet 
              gleichzeitig hervorragende Segelbedingungen. Die Insel liegt im Herzen des 
              Mesoamerikanischen Riffs und ist umgeben von spektakulären Korallenformationen, 
              die von Jacques Cousteau als eines der schönsten Tauchgebiete der Welt bezeichnet wurden.
            </p>
            <p className="text-lg text-gray-600">
              Die geschützte Lage sorgt für ruhige Gewässer und konstante Passatwinde, 
              während die reiche Maya-Geschichte und die authentische mexikanische Kultur 
              der Insel einen besonderen Charme verleihen.
            </p>
          </div>
        </div>

        {/* Dive Spots */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Weltklasse Tauchplätze</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {diveSpots.map((spot, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Anchor className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800">
                        {spot.name}
                      </h3>
                    </div>
                    <Badge variant="outline" className="text-blue-600">
                      {spot.depth}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{spot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nearby Destinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelziele ab Cozumel</h2>
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

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2">
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
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Bereit für Cozumel?
            </h3>
            <p className="mb-6 text-gray-700">
              Entdecken Sie die Unterwasserwunder von Cozumel und segeln Sie zu 
              den spektakulärsten Korallenriffen der Welt.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Cozumel Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default Cozumel;