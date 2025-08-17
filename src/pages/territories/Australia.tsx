import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor, ChevronRight } from "lucide-react";
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
import destinationAustralia from "@/assets/destination-australia.jpg";

const Australia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [
    { label: "Lage", value: "Whitsunday Islands, Queensland" },
    { label: "Beste Zeit", value: "April - Oktober" },
    { label: "Geeignet für", value: "Mit Skipper empfohlen" },
    { label: "Besonderheit", value: "Great Barrier Reef" }
  ];

  const regions = [
    {
      name: "Whitsunday Islands",
      bases: ["Airlie Beach", "Hamilton Island"],
      description: "74 tropische Inseln im Great Barrier Reef Marine Park"
    },
    {
      name: "Hamilton Island", 
      bases: ["Hamilton Island Marina"],
      description: "Hauptbasis mit eigenem Flughafen und Luxus-Resorts"
    },
    {
      name: "Whitehaven Beach",
      bases: ["Ankerplatz"],
      description: "Einer der schönsten Strände der Welt mit purem Silica-Sand"
    },
    {
      name: "Great Barrier Reef",
      bases: ["Verschiedene Ankerplätze"],
      description: "Weltgrößtes Korallenriff-System mit einzigartiger Unterwasserwelt"
    }
  ];

  const highlights = [
    "Unberührte Inselwelt",
    "Traumhafte Ankerbuchten", 
    "Great Barrier Reef",
    "Tropisches Klima",
    "Bestes Segelrevier Südhalbkugel",
    "Meist mit Skipper empfohlen",
    "Whitehaven Beach",
    "Einzigartige Tierwelt"
  ];

  const routes = [
    "Hamilton Island - Whitehaven Beach",
    "Airlie Beach - Hook Island", 
    "Whitsunday Island - Hayman Island",
    "Great Barrier Reef Expedition"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationAustralia}
          alt="Australien Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇦🇺</span>
            <Badge className="bg-orange-600 text-white">Top #10 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Australien</h1>
          <p className="text-lg text-white/90 max-w-md">
            Whitsunday Islands - Bestes Segelrevier der Südhalbkugel
          </p>
        </div>
        <Link 
          to="/" 
          className="absolute top-6 left-6"
          onClick={() => {
            setTimeout(() => {
              document.getElementById('reviere')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
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
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Australien</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-orange-500 mb-2">
                {index === 0 && <MapPin className="w-6 h-6 mx-auto" />}
                {index === 1 && <Sun className="w-6 h-6 mx-auto" />}
                {index === 2 && <Anchor className="w-6 h-6 mx-auto" />}
                {index === 3 && <Star className="w-6 h-6 mx-auto" />}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{fact.label}</h3>
              <p className="text-gray-600 text-sm">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Warum Australien?</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die Whitsunday Islands vor der Küste Queenslands gelten als das 
              beste Segelrevier der Südhalbkugel. 74 tropische Inseln liegen 
              geschützt im Great Barrier Reef Marine Park und bieten 
              spektakuläre Segelerlebnisse in unberührter Natur.
            </p>
            <p className="text-lg text-gray-600">
              Das warme, tropische Klima, kristallklares Wasser und Traumstrände 
              wie Whitehaven Beach machen jeden Törn zu einem unvergesslichen 
              Abenteuer. Aufgrund der besonderen Gegebenheiten wird meist ein 
              lokaler Skipper empfohlen.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{region.name}</h3>
                <p className="text-gray-600 mb-4">{region.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Stützpunkte:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.bases.map((base, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                        {base}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Beliebte Routen</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid gap-3 md:grid-cols-2">
              {routes.map((route, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{route}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Down Under?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das Great Barrier Reef und segeln Sie durch 
              die traumhaften Whitsunday Islands - Australiens Segelparadies.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Australien-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Australia;