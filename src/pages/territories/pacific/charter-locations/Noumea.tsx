import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Plane, Sun, Crown } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CharterRequestForm from "@/components/CharterRequestForm";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import pacific from "@/assets/pacific.jpg";

const Noumea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marinas = [
    {
      name: "Port Moselle Marina",
      description: "Hauptmarina im Zentrum von Nouméa",
      amenities: ["150+ Liegeplätze", "Restaurants", "Shopping", "Stadtanbindung", "WiFi", "Sicherheit"]
    },
    {
      name: "Marina Port du Sud",
      description: "Moderne Vollservice-Marina",
      amenities: ["200 Liegeplätze", "Fuel Station", "Reparaturen", "Provisioning", "Charter-Basen", "Zoll"]
    },
    {
      name: "Nouville Marina",
      description: "Ruhige Marina auf der Halbinsel",
      amenities: ["80 Liegeplätze", "Restaurant", "Strand-Zugang", "Ruhe", "Parkplätze", "Wassersport"]
    }
  ];

  const highlights = [
    "Größte Lagune der Welt",
    "UNESCO Welterbe Barriere-Riff",
    "Französisches Überseegebiet",
    "Exzellente französische Küche",
    "Neukaledonische Kultur",
    "Traumhafte Buchten und Ankerplätze",
    "Weltklasse Tauchen und Schnorcheln"
  ];

  const distances = [
    { destination: "Ile des Pins", distance: "35 sm", time: "5-6 Std." },
    { destination: "Loyalty Islands", distance: "60 sm", time: "8-10 Std." },
    { destination: "Vanuatu", distance: "240 sm", time: "30-36 Std." },
    { destination: "Brisbane", distance: "750 sm", time: "4-5 Tage" },
    { destination: "Fidschi", distance: "600 sm", time: "3-4 Tage" }
  ];

  const attractions = [
    {
      name: "Ile des Pins",
      description: "Die Insel der Kiefern - Paradies mit weißen Stränden"
    },
    {
      name: "Lagune Sud",
      description: "Südliche Lagune mit spektakulären Korallengärten"
    },
    {
      name: "Amedee Lighthouse",
      description: "Historischer Leuchtturm auf tropischer Insel"
    },
    {
      name: "Aquarium de Nouméa",
      description: "Einblick in die marine Vielfalt Neukaledoniens"
    },
    {
      name: "Cultural Center",
      description: "Melanesische und Kanak-Kultur erleben"
    },
    {
      name: "Baie des Citrons",
      description: "Schöne Bucht mit Restaurants und Stränden"
    }
  ];

  const practical = [
    {
      title: "Anreise",
      info: "Nouméa La Tontouta Airport (NOU)"
    },
    {
      title: "Währung",
      info: "CFP Franc (XPF), Euro akzeptiert"
    },
    {
      title: "Sprache",
      info: "Französisch, Melanesische Sprachen"
    },
    {
      title: "Beste Zeit",
      info: "April-November (Trockenzeit)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/a8975703-6204-452f-9c7f-8b727b7d953c.png"
          alt="Nouméa, Neukaledonien"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-green-600 text-white">🇳🇨 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Nouméa</h1>
            <p className="text-xl max-w-2xl">
              Tor zur größten Lagune der Welt
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/suedpazifik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Südpazifik
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation - Fixed at top */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Start</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/suedpazifik">Südpazifik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/suedpazifik/neukaledonien">Neukaledonien</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Nouméa</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Übersicht */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-5 h-5 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Charter-Standort Nouméa</h2>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Nouméa ist die Hauptstadt Neukaledoniens und Ihr Tor zur größten Lagune der Welt. 
              Das französische Überseegebiet bietet eine einzigartige Mischung aus französischer 
              Eleganz und melanesischer Kultur inmitten eines UNESCO-Welterbe-Riffs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-green-50 rounded-lg">
                <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">22°16'S 166°27'E</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Plane className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">NOU Airport</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Anchor className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="font-semibold">Marinas</div>
                <div className="text-sm text-gray-600">3 Hauptmarinas</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Crown className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="font-semibold">UNESCO</div>
                <div className="text-sm text-gray-600">Welterbe Riff</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marinas & Charter-Basen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marinas.map((marina, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{marina.name}</h3>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="space-y-2">
                    {marina.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Praktische Informationen */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Praktische Informationen</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {practical.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.info}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Distanzen */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Distanzen & Fahrtzeiten</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {distances.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{item.destination}</span>
                  <div className="text-right">
                    <div className="text-green-600 font-bold">{item.distance}</div>
                    <div className="text-sm text-gray-600">{item.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sehenswürdigkeiten */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sehenswürdigkeiten & Aktivitäten</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Nouméa?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Entdecken Sie Neukaledonien ab Nouméa</h2>
            <p className="text-xl mb-6">
              Die größte Lagune der Welt wartet auf Sie
            </p>
            <CharterRequestForm>
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Neukaledonien Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noumea;