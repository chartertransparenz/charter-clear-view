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
import destinationItaly from "@/assets/destination-italy.jpg";

const Italy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Zentrales Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Küstenlänge", value: "Über 7.600 km" }
  ];

  const regions = [
    {
      name: "Campania / Mittelitalien",
      link: "/reviere/mittelmeer/italien/campania",
      description: "Amalfiküste, Neapel und die bezaubernden Inseln Capri und Ischia",
      cities: ["Agropoli", "Amalfi Küste", "Castellamare", "Neapel", "Procida", "Salerno"]
    },
    {
      name: "Kalabrien / Süditalien",
      link: "/reviere/mittelmeer/italien/kalabrien",
      description: "Die Stiefelspitze Italiens mit kristallklarem Wasser",
      cities: ["Tropea"]
    },
    {
      name: "Livorno",
      link: "/reviere/mittelmeer/italien/livorno",
      description: "Toskanische Küste mit historischen Häfen"
    },
    {
      name: "Sardinien",
      link: "/reviere/mittelmeer/italien/sardinien",
      description: "Traumhafte Insel mit smaragdgrünem Wasser und exklusiven Häfen",
      cities: ["Alghero", "Cagliari", "Cannigione", "Carloforte", "Costa Smeralda", "Olbia", "Portisco", "Porto Rotondo"]
    },
    {
      name: "Sizilien",
      link: "/reviere/mittelmeer/italien/sizilien",
      description: "Größte Mittelmeerinsel mit vielfältigen Segelrevieren",
      cities: ["Capo d'Orlando", "Marsala", "Palermo", "Portorosa", "Sant'Agata di Militello", "Trapani"]
    },
    {
      name: "Toskana",
      link: "/reviere/mittelmeer/italien/toskana",
      description: "Kulturdreiecke an der Küste mit Insel Elba",
      cities: ["Castiglioncello", "Elba"]
    }
  ];

  const highlights = [
    "Vielfältige Segelreviere für jeden Geschmack",
    "Weltklasse italienische Küche",
    "Reiche Kultur und Geschichte",
    "Exzellente Marina-Infrastruktur",
    "Traumhafte Inseln und Buchten",
    "Kurze Distanzen für Wochenendtörns",
    "Warmes, kristallklares Wasser"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationItaly}
          alt="Italien Mittelmeer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇮🇹 Italien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Italien</h1>
            <p className="text-xl max-w-2xl">
              Dolce Vita auf dem Wasser
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Mittelmeer
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
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
                <BreadcrumbPage>Italien</BreadcrumbPage>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in Italien</h2>
            <p className="text-lg text-gray-600 mb-4">
              Italien bietet eine unvergleichliche Vielfalt an Segelrevieren - von der 
              glamourösen Amalfiküste über die wilde Schönheit Sardiniens bis zur 
              kulturreichen Toskana mit der bezaubernden Insel Elba.
            </p>
            <p className="text-lg text-gray-600">
              Die italienische Gastfreundschaft, exzellente Küche und perfekte 
              Segelbedingungen machen jeden Törn zu einem unvergesslichen Erlebnis 
              voller "Dolce Vita".
            </p>
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full">
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
                        {region.cities.slice(0, 6).map((city, idx) => (
                          <div key={idx} className="text-sm text-blue-600 font-medium">
                            • {city}
                          </div>
                        ))}
                        {region.cities.length > 6 && (
                          <div className="text-sm text-gray-500 italic">
                            +{region.cities.length - 6} weitere
                          </div>
                        )}
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
              Bereit für italienisches Dolce Vita?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die vielfältigen Segelreviere Italiens mit ihrer 
              einzigartigen Mischung aus Kultur, Küche und traumhaften Küsten.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Italien Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Italy;