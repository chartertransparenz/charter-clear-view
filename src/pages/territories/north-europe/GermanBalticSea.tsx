import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
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
import balticSea from "@/assets/baltic-sea.jpg";

const GermanBalticSea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Deutsche Ostseeküste" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-September" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Tidenfrei segeln" }
  ];

  const regions = [
    {
      name: "Deutsche Ostsee",
      link: "/reviere/nord-europa/deutsche-ostsee/charter-standorte",
      description: "Tidenfrei segeln vor Deutschlands Ostseeküste",
      cities: ["Breege (Rügen)", "Flensburg", "Großenbrode", "Heiligenhafen", "Rostock/Warnemünde"]
    }
  ];

  const highlights = [
    "Tidenfreies Segeln",
    "Familienfreundliche Reviere",
    "Historische Hansestädte",
    "Weiße Sandstrände und Kreidefelsen",
    "Kurze Distanzen zu Dänemark/Schweden",
    "Exzellente Marina-Infrastruktur",
    "Deutsche Gründlichkeit und Service"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={balticSea}
          alt="Deutsche Ostsee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇩🇪 Deutsche Ostsee</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Deutsche Ostsee</h1>
            <p className="text-xl max-w-2xl">
              Tidenfrei segeln vor der deutschen Küste
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/nord-europa" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Nord- & Ostsee
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
                <BreadcrumbLink href="/reviere/nord-europa">Nord- & Ostsee</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Deutsche Ostsee</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in der deutschen Ostsee</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die deutsche Ostsee bietet perfekte Bedingungen für entspanntes, 
              tidenfreies Segeln vor der deutschen Küste. Von den weißen Kreidefelsen 
              Rügens über die historischen Hansestädte bis zu den malerischen 
              Seebädern - hier finden Segler jeden Alters ideale Bedingungen.
            </p>
            <p className="text-lg text-gray-600">
              Mit exzellenter Infrastruktur, kurzen Distanzen zu den skandinavischen 
              Nachbarn und der berühmten deutschen Gründlichkeit im Service ist 
              die deutsche Ostsee perfekt für Familiensegeln und entspannte Törns.
            </p>
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full max-w-4xl mx-auto">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    {region.cities && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {region.cities.map((city, idx) => (
                          <div key={idx} className="text-sm text-blue-600 font-medium">
                            • {city}
                          </div>
                        ))}
                      </div>
                    )}
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
              Bereit für die deutsche Ostsee?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie tidenfreies Segeln vor der deutschen Küste mit 
              historischen Hansestädten und familienfreundlichen Revieren.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Deutsche Ostsee Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanBalticSea;