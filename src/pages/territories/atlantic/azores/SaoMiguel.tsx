import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const SaoMiguel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Hauptinsel der Azoren"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "Mai - Oktober"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "NE Passatwind 15-20 kn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Monohull bevorzugt"
    }
  ];

  const marinas = [
    {
      name: "Marina de Ponta Delgada",
      description: "Haupthafen mit vollständiger Ausstattung",
      facilities: ["Strom & Wasser", "WiFi", "Fuel", "Provisioning"]
    },
    {
      name: "Vila Franca do Campo",
      description: "Kleinerer Hafen im Süden der Insel",
      facilities: ["Grundausstattung", "Reparaturen", "Lokale Services"]
    }
  ];

  const highlights = [
    "Lagoa das Sete Cidades",
    "Thermalbäder Furnas",
    "Wal- und Delfinbeobachtung", 
    "Ponta Delgada Altstadt",
    "Vulkanische Kraterseen",
    "Ananas-Plantagen",
    "Atlantik-Stopover Paradise",
    "Authentische azorianische Küche"
  ];

  const attractions = [
    {
      name: "Sete Cidades",
      description: "Zwillingsseen in einem vulkanischen Krater",
      type: "Naturwunder"
    },
    {
      name: "Furnas",
      description: "Geothermalgebiet mit heißen Quellen",
      type: "Wellness"
    },
    {
      name: "Ponta Delgada",
      description: "Historische Hauptstadt mit Azulejos",
      type: "Kultur"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-green-500 text-white">🌋 São Miguel</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">São Miguel</h1>
            <p className="text-xl max-w-2xl">
              Die grüne Insel der Azoren
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/atlantik/azoren" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Azoren
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
                <BreadcrumbLink asChild><Link to="/#reviere">Reviere</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/atlantik">Atlantik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/atlantik/azoren">Azoren</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>São Miguel</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="flex justify-center text-green-600 mb-2">
                  {fact.icon}
                </div>
                <div className="font-semibold text-sm text-gray-600 mb-1">
                  {fact.label}
                </div>
                <div className="text-sm font-medium">
                  {fact.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-green-600" />
              Charter-Standort São Miguel
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              São Miguel ist die größte und bevölkerungsreichste Insel der Azoren und 
              bietet den besten Charter-Standort des Archipels. Mit der modernen Marina 
              in Ponta Delgada und spektakulären vulkanischen Landschaften ist die Insel 
              ein beliebter Zwischenstopp für Atlantiküberquerungen.
            </p>
            <p className="text-lg text-gray-600">
              Die "grüne Insel" besticht durch ihre Kraterseen, Thermalquellen und 
              die authentische azorianische Kultur. Von hier aus können Sie weitere 
              Inseln des Archipels erkunden oder Ihre Atlantikreise fortsetzen.
            </p>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marinas & Häfen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {marinas.map((marina, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{marina.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Ausstattung:</div>
                    <div className="flex flex-wrap gap-2">
                      {marina.facilities.map((facility, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sehenswürdigkeiten</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge className="mb-2">{attraction.type}</Badge>
                    <h3 className="text-lg font-semibold text-gray-800">{attraction.name}</h3>
                  </div>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <Mountain className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter ab São Miguel
            </h3>
            <p className="mb-6 text-green-100">
              Starten Sie Ihre Azoren-Erkundung von der grünen Hauptinsel mit 
              modernen Marinas und spektakulären Naturwundern.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-green-600 hover:bg-green-50" size="lg">
                São Miguel Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaoMiguel;