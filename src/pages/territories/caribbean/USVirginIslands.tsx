
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
import { ChevronRight } from "lucide-react";
import caribbean from "@/assets/caribbean.jpg";

const USVirginIslands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Kleine Antillen" },
    { icon: Calendar, label: "Beste Zeit", value: "Dezember-April" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "US-amerikanisches Territorium" }
  ];

  const regions = [
    {
      name: "US Virgin Islands",
      link: "/reviere/karibik/charter-standorte/st-thomas",
      description: "Amerikanisches Territorium mit duty-free Shopping",
      cities: ["St. Thomas", "St. John", "St. Croix"]
    }
  ];

  const highlights = [
    "Keine Einreiseformalitäten für US-Bürger",
    "Duty-free Shopping",
    "Exzellente Marina-Infrastruktur",
    "Konstante Passatwinde",
    "Traumhafte Ankerplätze",
    "Nähe zu den BVI",
    "US-amerikanischer Standard"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="US Virgin Islands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇺🇸 US Virgin Islands</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">US Virgin Islands</h1>
            <p className="text-xl max-w-2xl">
              Amerikanischer Komfort in der Karibik
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/karibik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Karibik
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Start</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#reviere">Reviere</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/karibik">Karibik</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>US Virgin Islands</BreadcrumbPage>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in den US Virgin Islands</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die US Virgin Islands kombinieren karibisches Flair mit amerikanischem 
              Komfort und Standard. Als US-Territorium bieten sie einfache Einreise 
              für US-Bürger und eine exzellente Infrastruktur für Yachting.
            </p>
            <p className="text-lg text-gray-600">
              St. Thomas ist besonders bekannt für seine spektakulären Ankerplätze 
              und die Nähe zu den British Virgin Islands, was perfekte Kombinationen 
              für längere Segeltörns ermöglicht.
            </p>
          </div>
        </div>

        {/* Charter Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="block hover:no-underline group max-w-2xl mx-auto">
                <Card className="shadow-lg h-full group-hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-red-200 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-red-600 group-hover:text-red-700" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700">{region.description}</p>
                    {region.cities && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Verfügbare Charter-Standorte:</div>
                        <div className="grid grid-cols-2 gap-2">
                          {region.cities.map((city, idx) => (
                            <div key={idx} className="text-sm text-red-600 font-medium group-hover:text-red-700">
                              • {city}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="text-sm text-red-600 font-medium group-hover:text-red-700 flex items-center gap-1">
                      → Charter-Informationen & Marinas
                    </div>
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
              Bereit für die USVI?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie amerikanischen Komfort in der Karibik mit 
              exzellenter Infrastruktur und spektakulären Segelrevieren.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                USVI Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USVirginIslands;
