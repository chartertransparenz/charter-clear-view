import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Navigation from "@/components/Navigation";
import destinationFrance from "@/assets/destination-france.jpg";

const CoteAzur = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Südfrankreich" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-September" },
    { icon: Users, label: "Geeignet für", value: "Luxus- und Komfortcharter" },
    { icon: Anchor, label: "Marinas", value: "Weltklasse Superyacht-Häfen" }
  ];

  const cities = [
    {
      name: "Antibes",
      link: "/reviere/mittelmeer/frankreich/cote-azur/antibes",
      description: "Berühmter Superyacht-Hafen und historische Altstadt"
    },
    {
      name: "Bormes-les-Mimosas",
      link: "/reviere/mittelmeer/frankreich/cote-azur/bormes-les-mimosas",
      description: "Blumendorf mit charmanten Häfen und Weinbergen"
    },
    {
      name: "Cogolin",
      link: "/reviere/mittelmeer/frankreich/cote-azur/cogolin",
      description: "Traditioneller Fischerort mit authentischem Charme"
    },
    {
      name: "Golfe Juan",
      link: "/reviere/mittelmeer/frankreich/cote-azur/golfe-juan",
      description: "Eleganter Yachthafen zwischen Cannes und Antibes"
    },
    {
      name: "Hyères",
      link: "/reviere/mittelmeer/frankreich/cote-azur/hyeres",
      description: "Tor zu den goldenen Inseln von Hyères"
    },
    {
      name: "Marseille",
      link: "/reviere/mittelmeer/frankreich/cote-azur/marseille",
      description: "Kosmopolitische Hafenstadt mit reicher Geschichte"
    },
    {
      name: "Port Grimaud",
      link: "/reviere/mittelmeer/frankreich/cote-azur/port-grimaud",
      description: "Das 'Venedig der Provence' mit Kanälen und Villen"
    },
    {
      name: "Port Pin-Rolland",
      link: "/reviere/mittelmeer/frankreich/cote-azur/port-pin-rolland",
      description: "Moderner Yachthafen mit excellenter Ausstattung"
    },
    {
      name: "Port de St. Mandrier sur Mer",
      link: "/reviere/mittelmeer/frankreich/cote-azur/port-st-mandrier",
      description: "Geschützter Hafen auf der Halbinsel von Toulon"
    },
    {
      name: "St. Raphael",
      link: "/reviere/mittelmeer/frankreich/cote-azur/st-raphael",
      description: "Beliebter Badeort mit modernem Yachthafen"
    },
    {
      name: "Toulon",
      link: "/reviere/mittelmeer/frankreich/cote-azur/toulon",
      description: "Historischer Marinestützpunkt und wichtiger Hafen"
    }
  ];

  const highlights = [
    "Weltberühmte Häfen wie Cannes und Monaco",
    "Kristallklares, türkisfarbenes Wasser",
    "Exzellente Restaurants und Beachclubs",
    "Superyacht-Charter und Luxusmarinas",
    "Glamouröse Atmosphäre und Jetset-Feeling",
    "Perfekte Winde für entspanntes Segeln",
    "Kulturelle Highlights und Festivals"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationFrance}
          alt="Côte d'Azur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇫🇷 Côte d'Azur</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Côte d'Azur</h1>
            <p className="text-xl max-w-2xl">
              Die glamouröse Riviera Frankreichs
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer/frankreich" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Frankreich
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Die Côte d'Azur</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die Côte d'Azur, auch als Französische Riviera bekannt, ist das Synonym für 
              Luxus, Glamour und exklusives Yachting. Von Cannes bis Monaco reihen sich 
              weltberühmte Häfen und elegante Badeorte aneinander.
            </p>
            <p className="text-lg text-gray-600">
              Kristallklares Wasser, perfekte Winde und eine unvergleichliche Atmosphäre 
              machen die Côte d'Azur zu einem der begehrtesten Segelreviere weltweit.
            </p>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, index) => (
              <Link key={index} to={city.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Anchor className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {city.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">{city.description}</p>
                  </CardContent>
                </Card>
              </Link>
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
              Bereit für die Côte d'Azur?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie den Luxus und Glamour der französischen Riviera bei 
              einem unvergesslichen Yachting-Erlebnis.
            </p>
            <Button 
              className="bg-white text-blue-600 hover:bg-blue-50" 
              size="lg"
              onClick={() => {
                window.location.href = 'tel:+497543499080';
              }}
            >
              Côte d'Azur Charter anfragen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoteAzur;