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

const BoraBora = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marinas = [
    {
      name: "Marina Bora Bora",
      description: "Exklusive Marina am Hauptort Vaitape",
      amenities: ["50 Liegeplätze", "Superyacht-Service", "Restaurants", "Shopping", "Concierge", "WiFi"]
    },
    {
      name: "Port de Vaitape",
      description: "Haupthafen mit Charter-Service",
      amenities: ["Charter-Basen", "Fuel Station", "Provisioning", "Fährverbindungen", "Zoll", "Transfers"]
    },
    {
      name: "Anemohi Marina",
      description: "Boutique-Marina mit Luxus-Service",
      amenities: ["20 Liegeplätze", "Premium Service", "Spa", "Fine Dining", "Wassersport", "Private Transfers"]
    }
  ];

  const highlights = [
    "Die schönste Insel der Welt",
    "Ikonische Bergsilhouette Mt. Otemanu",
    "Kristallklare türkise Lagune",
    "Luxuriöse Resorts auf Motus",
    "Weltklasse Schnorcheln & Tauchen",
    "Romantisches Honeymoon-Ziel",
    "Polynesische Kultur & Gastfreundschaft"
  ];

  const distances = [
    { destination: "Raiatea", distance: "15 sm", time: "2-3 Std." },
    { destination: "Tahaa", distance: "18 sm", time: "2.5-3 Std." },
    { destination: "Huahine", distance: "35 sm", time: "5-6 Std." },
    { destination: "Tahiti", distance: "140 sm", time: "18-22 Std." },
    { destination: "Maupiti", distance: "25 sm", time: "3-4 Std." }
  ];

  const attractions = [
    {
      name: "Mount Otemanu",
      description: "Vulkanischer Berg - Wahrzeichen von Bora Bora"
    },
    {
      name: "Coral Gardens",
      description: "Weltberühmte Schnorchel- und Tauchplätze"
    },
    {
      name: "Matira Beach",
      description: "Einer der schönsten Strände der Südsee"
    },
    {
      name: "Lagoonarium",
      description: "Aquarium inmitten der Lagune"
    },
    {
      name: "Helicopter Tours",
      description: "Spektakuläre Rundflüge über die Insel"
    },
    {
      name: "Ray & Shark Excursions",
      description: "Schwimmen mit Rochen und Riffhaien"
    },
    {
      name: "Motu Picnics",
      description: "Private Inselausflüge zu unbewohnten Motus"
    },
    {
      name: "Traditional Dancing",
      description: "Polynesische Tanzvorführungen und Kultur"
    }
  ];

  const practical = [
    {
      title: "Anreise",
      info: "Flug via Tahiti (PPT), dann 50 Min. Inlandsflug"
    },
    {
      title: "Währung",
      info: "CFP Franc (XPF), Euro und USD akzeptiert"
    },
    {
      title: "Sprache",
      info: "Französisch, Tahitianisch, Englisch"
    },
    {
      title: "Beste Zeit",
      info: "April-Oktober (Trockenzeit)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={pacific}
          alt="Bora Bora, Französisch-Polynesien"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-purple-600 text-white">👑 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bora Bora</h1>
            <p className="text-xl max-w-2xl">
              Die Perle des Pazifiks - das ultimative Luxus-Segelziel
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
                <BreadcrumbPage>Bora Bora</BreadcrumbPage>
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
              <Crown className="w-5 h-5 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">Charter-Standort Bora Bora</h2>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Bora Bora gilt als die schönste Insel der Welt und ist das Kronjuwel jeder 
              Französisch-Polynesien Charter. Mit seiner ikonischen Bergsilhouette, der 
              türkisfarbenen Lagune und luxuriösen Resorts bietet Bora Bora ein 
              unvergleichliches Segelerlebnis.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-purple-50 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">16°30'S 151°45'W</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <Plane className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">BOB Airport</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <Anchor className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold">Marinas</div>
                <div className="text-sm text-gray-600">3 Luxus-Marinas</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <Crown className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold">Status</div>
                <div className="text-sm text-gray-600">Luxus-Destination</div>
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
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
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
                    <div className="text-purple-600 font-bold">{item.distance}</div>
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {attractions.map((attraction, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{attraction.name}</h3>
                  <p className="text-sm text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Bora Bora?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Erleben Sie das Paradies ab Bora Bora</h2>
            <p className="text-xl mb-6">
              Die schönste Insel der Welt wartet auf Sie
            </p>
            <CharterRequestForm>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Luxus-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoraBora;