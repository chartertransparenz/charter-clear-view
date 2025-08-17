import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const TuerkischeAegaeis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Türkische Ägäis" },
    { icon: Calendar, label: "Beste Zeit", value: "April-November" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Blue Cruise Tradition" }
  ];

  const cities = [
    {
      name: "Fethiye",
      description: "Haupthafen für Blue Cruise mit traumhafter Bucht",
      marinas: "3 Marinas",
      highlights: ["Fethiye Bay", "Butterfly Valley", "Ölüdeniz"]
    },
    {
      name: "Göcek",
      description: "Premium Yachthafen mit exklusiven Marinas",
      marinas: "6 Marinas",
      highlights: ["12 Islands", "Cleopatra Island", "Blue Lagoon"]
    },
    {
      name: "Marmaris",
      description: "Großer Yachthafen und Charterzentrum",
      marinas: "5 Marinas", 
      highlights: ["Marmaris Bay", "Datça Peninsula", "Paradise Island"]
    },
    {
      name: "Orhaniye",
      description: "Ruhige Bucht ideal für entspanntes Segeln",
      marinas: "2 Marinas",
      highlights: ["Kizkumu Beach", "Selimiye", "Bozburun"]
    }
  ];

  const highlights = [
    "Weltberühmte Blue Cruise Tradition",
    "Traditionelle Gület Charter verfügbar",
    "Kristallklares, warmes Wasser",
    "Geschützte Buchten und Naturhäfen",
    "Unvergleichliche türkische Gastfreundschaft",
    "Excellente Preis-Leistungs-Verhältnis",
    "Reiche antike Geschichte",
    "Perfekte Windverhältnisse",
    "Moderne Marina-Infrastruktur"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇹🇷 Türkei</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Türkische Ägäis</h1>
            <p className="text-xl max-w-2xl">
              Wiege der Blue Cruise Tradition
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer/tuerkei" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Türkei
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
                  <Link to="/reviere/mittelmeer">Mittelmeer</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer/tuerkei">Türkei</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Türkische Ägäis</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6 text-center">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in der Türkischen Ägäis</h2>
              <p className="text-lg text-gray-600 mb-4">
                Die türkische Ägäis ist die Wiege der berühmten "Blue Cruise" und bietet eine der 
                schönsten Küsten des östlichen Mittelmeers. Mit ihren geschützten Buchten, 
                kristallklarem Wasser und der legendären türkischen Gastfreundschaft ist sie ein 
                absolutes Muss für jeden Segelbegeisterten.
              </p>
              <p className="text-lg text-gray-600">
                Besonders die traditionellen Gület-Charter, kombiniert mit modernen Yachten, 
                schaffen ein einzigartiges Segelerlebnis zwischen antiker Geschichte und 
                zeitgemäßem Komfort.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Sailing Bases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Segelbasen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {cities.map((city, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{city.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{city.description}</p>
                  <p className="text-sm text-blue-600 font-medium mb-3">{city.marinas}</p>
                  <div className="space-y-1">
                    {city.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-sm text-gray-600">
                        • {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Türkische Ägäis?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="font-medium text-gray-800">{highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für eine authentische Blue Cruise?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie die legendäre türkische Gastfreundschaft und entdecken Sie 
              die traumhaften Buchten der türkischen Ägäis.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Kostenlose Beratung
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuerkischeAegaeis;