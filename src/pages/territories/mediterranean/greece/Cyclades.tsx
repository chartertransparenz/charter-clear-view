
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import destinationGreece from "@/assets/destination-greece.jpg";

const Cyclades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Zentralägäis" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Meltemi-Winde" }
  ];

  const cities = [
    "Mykonos", "Santorini", "Paros", "Naxos", "Ios", "Syros", "Tinos", "Andros"
  ];

  const highlights = [
    "Weltberühmte Inseln Mykonos & Santorini",
    "Konstante Meltemi-Winde im Sommer",
    "Authentische griechische Tavernen",
    "Kristallklares, türkises Wasser",
    "Klassisches Inselhopping",
    "Reiche antike Geschichte",
    "Perfekte Segelbedingungen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationGreece}
          alt="Kykladen Griechenland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Kykladen</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kykladen</h1>
            <p className="text-xl max-w-2xl">
              Das Herz der Ägäis
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer/griechenland" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Griechenland
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in den Kykladen</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die Kykladen sind das Herzstück des griechischen Inselsegelns. Diese 
              berühmte Inselgruppe mit ihren weißen Häusern, blauen Kuppeln und 
              kristallklarem Wasser bietet das authentische griechische Segelerlebnis.
            </p>
            <p className="text-lg text-gray-600">
              Von Mykonos über Santorini bis hin zu versteckten Perlen wie Folegandros - 
              die Kykladen vereinen perfekte Segelbedingungen mit unvergesslicher 
              Kultur und Gastfreundschaft.
            </p>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Inseln & Häfen</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{city}</p>
              </div>
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
              Bereit für die Kykladen?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die berühmtesten Inseln Griechenlands mit perfekten 
              Segelbedingungen und authentischer griechischer Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Kykladen Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cyclades;
