import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";

const Annapolis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Standort", value: "Annapolis, Maryland" },
    { icon: Calendar, label: "Beste Zeit", value: "April-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Sailing Capital of America" }
  ];

  const highlights = [
    "US Naval Academy - Marineakademie",
    "Chesapeake Bay - größte Mündungsbucht",
    "Historic Innenstadt von Annapolis",
    "Annapolis Boat Shows",
    "State House - ältestes im Gebrauch",
    "Ego Alley - berühmte Promenade",
    "Maritime Museen und Galerien"
  ];

  const nearbyDestinations = [
    "Baltimore Harbor (25 nm)",
    "St. Michaels (20 nm)",
    "Oxford (25 nm)",
    "Washington D.C. (30 nm landweg)",
    "Chesapeake Bay Islands"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Annapolis Charter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇺🇸 Maryland</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Annapolis</h1>
            <p className="text-xl max-w-2xl">
              Sailing Capital of America an der Chesapeake Bay
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Charter-Standort Annapolis</h2>
            <p className="text-lg text-gray-600 mb-4">
              Annapolis wird nicht umsonst als "Sailing Capital of America" bezeichnet. 
              Diese charmante Kolonialstadt ist die Heimat der US Naval Academy und liegt 
              am Ufer der berühmten Chesapeake Bay, einem der besten Segelreviere der 
              amerikanischen Ostküste.
            </p>
            <p className="text-lg text-gray-600">
              Die Chesapeake Bay bietet über 11.000 Meilen Küstenlinie, geschützte Gewässer 
              und eine unglaubliche Vielfalt an Ankerplätzen. Von Annapolis aus segeln Sie 
              durch ruhige Buchten, besuchen historische Hafenstädte wie St. Michaels und 
              Oxford, oder erkunden die zahlreichen Inseln der Bay. Die Stadt selbst bezaubert 
              mit kopfsteingepflasterten Straßen und Kolonialarchitektur.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Annapolis Highlights</h2>
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter ab Annapolis
            </h3>
            <p className="mb-6 text-blue-100">
              Segeln Sie von der Sailing Capital of America durch die 
              traumhafte Chesapeake Bay.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Annapolis Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annapolis;