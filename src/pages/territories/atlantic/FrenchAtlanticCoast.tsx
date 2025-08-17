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
import atlantic from "@/assets/atlantic.jpg";

const FrenchAtlanticCoast = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Französische Westküste" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-September" },
    { icon: Users, label: "Geeignet für", value: "Erfahrene Segler" },
    { icon: Anchor, label: "Besonderheit", value: "Tidenreviere" }
  ];

  const regions = [
    {
      name: "Biskaya",
      link: "/reviere/atlantik/franzoesische-atlantikkueste/biskaya",
      description: "Von Bordeaux bis zur spanischen Grenze",
      cities: ["Bordeaux", "Arcachon", "Biarritz"]
    },
    {
      name: "Bretagne & Normandie",
      link: "/reviere/atlantik/franzoesische-atlantikkueste/bretagne-normandie",
      description: "Raue Küsten und maritime Tradition",
      cities: ["Saint-Malo", "Brest", "La Rochelle"]
    }
  ];

  const highlights = [
    "Anspruchsvolle Tidenreviere",
    "Raue, dramatische Küstenlandschaft",
    "Traditionelle französische Seehäfen",
    "Exzellente französische Küche",
    "Starke Winde und Strömungen",
    "Authentische Seefahrertradition",
    "Spektakuläre Gezeitenunterschiede"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={atlantic}
          alt="Französische Atlantikküste"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇫🇷 Französische Atlantikküste</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Französische Atlantikküste</h1>
            <p className="text-xl max-w-2xl">
              Anspruchsvolle Tidenreviere
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/atlantik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Atlantik
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
                <BreadcrumbLink href="/reviere/atlantik">Atlantik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Französische Atlantikküste</BreadcrumbPage>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln an der französischen Atlantikküste</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die französische Atlantikküste bietet anspruchsvolles Segeln für 
              erfahrene Segler, die Herausforderungen lieben. Von der rauen Biskaya 
              bis zur zerklüfteten Bretagne und Normandie - hier herrschen starke 
              Winde, große Gezeiten und spektakuläre Küstenlandschaften.
            </p>
            <p className="text-lg text-gray-600">
              Diese Region ist perfekt für Segler, die die authentische Seefahrertradition 
              Frankreichs erleben möchten, kombiniert mit exzellenter Küche und 
              traditionellen Häfen voller maritimer Geschichte.
            </p>
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full max-w-2xl mx-auto">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    {region.cities && (
                      <div className="grid grid-cols-2 gap-2">
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
              Bereit für die französische Atlantikküste?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie anspruchsvolles Segeln in den traditionellen 
              Tidenrevieren mit authentischer französischer Seefahrertradition.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Französische Atlantikküste Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrenchAtlanticCoast;