import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, Sailboat } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
const azoresSailing = "/azores-sailing.jpg";

const Faial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Westliche Azoren"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "Mai - Oktober"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "W Wind 18-25 kn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Atlantik-tauglich"
    }
  ];

  const marinas = [
    {
      name: "Marina da Horta",
      description: "Berühmter Atlantik-Kreuzungspunkt",
      facilities: ["Peter Café Sport", "Internationale Crews", "Vollausstattung"]
    },
    {
      name: "Castelo Branco",
      description: "Kleinerer Hafen im Süden",
      facilities: ["Ruhiger Ankerplatz", "Lokale Atmosphäre", "Grundausstattung"]
    }
  ];

  const highlights = [
    "Peter Café Sport - Segler-Legende",
    "Caldeira - riesiger Vulkankrater",
    "Internationale Segler-Community",
    "Blaue Insel wegen der Hortensien",
    "Perfekter Atlantik-Stopover",
    "Berühmte Hafenmauer-Kunstwerke",
    "Capelinhos Vulkan",
    "Weltbekannter Gin des Peter Café"
  ];

  const attractions = [
    {
      name: "Peter Café Sport",
      description: "Weltberühmte Segler-Bar seit 1918",
      type: "Kultur"
    },
    {
      name: "Caldeira",
      description: "2 km breiter Vulkankrater",
      type: "Natur"
    },
    {
      name: "Capelinhos",
      description: "Vulkan der 1957 die Insel vergrößerte",
      type: "Geologie"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={azoresSailing}
          alt="Faial Azoren"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">⚓ Faial</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Faial</h1>
            <p className="text-xl max-w-2xl">
              Die blaue Insel und Segler-Mekka
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
                <BreadcrumbPage>Faial</BreadcrumbPage>
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
                <div className="flex justify-center text-blue-600 mb-2">
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
              <Sailboat className="w-6 h-6 text-blue-600" />
              Charter-Standort Faial
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Faial ist das legendäre Segler-Mekka der Azoren und beherbergt das 
              weltberühmte Peter Café Sport in Horta. Die "blaue Insel" verdankt 
              ihren Namen den blauen Hortensien, die jeden Sommer die Insel 
              in ein Blütenmeer verwandeln.
            </p>
            <p className="text-lg text-gray-600">
              Als wichtigster Kreuzungspunkt für Atlantiküberquerungen ist Horta 
              ein Pflichtbesuch für jeden Weltumsegler. Die berühmte Hafenmauer 
              mit tausenden Segler-Kunstwerken und das Peter Café Sport machen 
              Faial zu einem unvergesslichen Erlebnis.
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
                    <div className="text-sm font-medium text-gray-700">Besonderheiten:</div>
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
                <Sailboat className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter ab Faial
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie das legendäre Segler-Mekka der Azoren mit dem 
              weltberühmten Peter Café Sport und der blauen Hortensien-Pracht.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Faial Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default Faial;