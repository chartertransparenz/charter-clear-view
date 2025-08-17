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

const Korsika = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Französisches Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Erfahrene Segler" },
    { icon: Anchor, label: "Besonderheit", value: "Insel der Schönheit" }
  ];

  const cities = [
    "Ajaccio",
    "Bonifacio"
  ];

  const highlights = [
    "Kristallklares, türkisfarbenes Wasser",
    "Dramatische Klippen und Felsformationen",
    "Unberührte Natur und einsame Buchten", 
    "Französische Kultur mit italienischem Flair",
    "Excellente lokale Küche und Weine",
    "Weniger überlaufen als die Côte d'Azur",
    "Vielfältige Landschaften auf kleinem Raum"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇫🇷 Frankreich</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Korsika</h1>
            <p className="text-xl max-w-2xl">
              Die Insel der Schönheit im Mittelmeer
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
                  <Link to="/reviere/mittelmeer">Reviere</Link>
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
                  <Link to="/reviere/mittelmeer/frankreich">Frankreich</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Korsika</BreadcrumbPage>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln um Korsika</h2>
              <p className="text-lg text-gray-600 mb-4">
                Korsika, die "Insel der Schönheit", bietet eine der spektakulärsten Küsten des Mittelmeers. 
                Mit ihren dramatischen Klippen, kristallklarem Wasser und unberührten Buchten ist sie ein 
                Traumziel für Segelbegeisterte, die das Besondere suchen.
              </p>
              <p className="text-lg text-gray-600">
                Die Insel vereint französische Eleganz mit mediterraner Ursprünglichkeit. Abseits der 
                touristischen Zentren der Côte d'Azur finden Segler hier noch unberührte Natur und 
                authentische korsische Kultur.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Harbors & Ports */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Häfen & Ankerplätze</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cities.map((city, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{city}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Korsika?</h2>
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
              Bereit für das korsische Abenteuer?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die unberührte Schönheit Korsikas und erleben Sie ein 
              authentisches Segelerlebnis fernab der Massen.
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

export default Korsika;