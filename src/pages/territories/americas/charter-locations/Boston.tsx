import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";

const Boston = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Standort", value: "Boston, Massachusetts" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Historische Hafenstadt" }
  ];

  const highlights = [
    "Boston Harbor - historischer Hafen",
    "Freedom Trail - Amerikas Geschichte",
    "USS Constitution - Old Ironsides",
    "Boston Tea Party Ships",
    "Cape Cod Bay Segeln",
    "Harvard und MIT Campus",
    "Fenway Park Stadium"
  ];

  const nearbyDestinations = [
    "Cape Cod (50 nm)",
    "Martha's Vineyard (60 nm)",
    "Nantucket (70 nm)",
    "Portsmouth (45 nm)",
    "Gloucester (25 nm)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Boston Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇺🇸 Massachusetts</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Boston</h1>
            <p className="text-xl max-w-2xl">
              Historische Hafenstadt mit maritimer Tradition
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/amerika-bahamas/usa-ostkueste" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu USA Ostküste
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter-Standort Boston</h2>
            <p className="text-lg text-gray-600 mb-4">
              Boston ist eine der historischsten Hafenstädte Amerikas und bietet eine 
              perfekte Mischung aus maritimer Tradition und modernem Segeln. Der berühmte 
              Boston Harbor war Schauplatz der Boston Tea Party und beherbergt heute eine 
              der aktivsten Segelgemeinschaften der Ostküste.
            </p>
            <p className="text-lg text-gray-600">
              Von Boston aus segeln Sie durch die geschichtsträchtigen Gewässer von 
              Massachusetts Bay, erreichen die charmanten Inseln Cape Cod, Martha's Vineyard 
              und Nantucket, oder erkunden die raue Schönheit der neuenglischen Küste. 
              Die Stadt selbst bietet unzählige historische Sehenswürdigkeiten und 
              erstklassige Restaurants.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Boston Highlights</h2>
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

        {/* Nearby Destinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nahegelegene Ziele</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyDestinations.map((destination, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Anchor className="w-5 h-5 text-blue-600" />
                  <p className="font-medium text-gray-800">{destination}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Charter ab Boston
            </h3>
            <p className="mb-6 text-gray-700">
              Entdecken Sie die historischen Gewässer Neuenglands von einer der 
              traditionsreichsten Hafenstädte Amerikas.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Boston Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boston;