import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Palmtree, Fish, Anchor } from "lucide-react";
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


const Fiji = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Südpazifik, 330 Inseln"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "Mai - Oktober"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "Passatwinde 10-20 kn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Katamaran & Monohull"
    }
  ];

  const regions = [
    {
      name: "Viti Levu",
      description: "Hauptinsel mit Suva und Nadi",
      cities: ["Suva", "Nadi", "Lautoka"]
    },
    {
      name: "Vanua Levu",
      description: "Zweitgrößte Insel",
      cities: ["Labasa", "Savusavu"]
    },
    {
      name: "Mamanuca-Inseln",
      description: "Beliebte Inselgruppe westlich von Viti Levu",
      cities: ["Malolo", "Mana Island"]
    },
    {
      name: "Yasawa-Inseln",
      description: "Traumhafte Inselkette im Nordwesten",
      cities: ["Yasawa", "Naviti"]
    }
  ];

  const highlights = [
    "Kristallklare Lagunen",
    "Traditionelle Fidschi-Kultur",
    "Weltklasse-Schnorcheln und Tauchen",
    "Unberührte weiße Sandstrände",
    "Tropisches Klima ganzjährig",
    "Freundliche Einheimische",
    "Exotische Unterwasserwelt",
    "Traumhafte Sonnenuntergänge"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/src/assets/fiji-sailing.jpg"
          alt="Fiji"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🏝️ Fidschi</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Fidschi</h1>
            <p className="text-xl max-w-2xl">
              330 Inseln im türkisblauen Südpazifik
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
                <BreadcrumbPage>Fidschi</BreadcrumbPage>
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
              <Palmtree className="w-6 h-6 text-green-600" />
              Segeln in Fidschi
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Fidschi besteht aus über 330 Inseln im Herzen des Südpazifiks und bietet 
              einige der schönsten Segelreviere der Welt. Von den lebhaften Mamanuca-Inseln 
              bis zu den abgelegenen Yasawa-Inseln erleben Sie unberührte Natur, 
              traditionelle Fidschi-Kultur und kristallklare Gewässer.
            </p>
            <p className="text-lg text-gray-600">
              Die konstanten Passatwinde und das tropische Klima schaffen ideale 
              Segelbedingungen das ganze Jahr über. Entdecken Sie versteckte Buchten, 
              schnorcheln Sie in bunten Korallenriffen und erleben Sie die herzliche 
              Gastfreundschaft der Fidschianer.
            </p>
          </div>
        </div>

        {/* Charter Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{region.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Wichtige Orte:</div>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
                <Fish className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-turquoise-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Entdecken Sie das Paradies Fidschi
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie unvergessliche Momente in einem der schönsten Segelreviere 
              der Welt mit kristallklaren Gewässern und herzlicher Gastfreundschaft.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Fidschi-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiji;