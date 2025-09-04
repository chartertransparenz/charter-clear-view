import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Mountain, AlertTriangle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import expedition from "@/assets/expedition.jpg";

const Expeditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const expeditions = [
    { 
      name: "Nordwestpassage", 
      description: "Durch die arktischen Gewässer Kanadas",
      difficulty: "Extrem"
    },
    { 
      name: "Antarktis", 
      description: "Das ultimative Abenteuer am Ende der Welt",
      difficulty: "Extrem"
    },
    { 
      name: "Spitzbergen", 
      description: "Eisbären und Mitternachtssonne",
      difficulty: "Hoch"
    },
    { 
      name: "Grönland", 
      description: "Eisberge und ursprüngliche Natur",
      difficulty: "Hoch"
    }
  ];

  const features = [
    "Erfahrene Expedition-Crews",
    "Speziell ausgerüstete Yachten", 
    "Extreme Wetterbedingungen",
    "Einmalige Naturerlebnisse"
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Extrem": return "bg-red-500";
      case "Hoch": return "bg-orange-500";
      default: return "bg-yellow-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={expedition}
          alt="Expeditionen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🗻 Extreme Expeditionen</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Expeditionen</h1>
            <p className="text-xl max-w-2xl">
              Für erfahrene Segler mit Abenteuergeist
            </p>
          </div>
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
                <BreadcrumbPage>Expeditionen</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Warning */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h2 className="text-xl font-bold text-red-800">Nur für erfahrene Segler</h2>
            </div>
            <p className="text-red-700">
              Expeditions-Charter erfordert umfangreiche Segelerfahrung und entsprechende Qualifikationen. 
              Extreme Wetterbedingungen und abgelegene Gebiete stellen höchste Anforderungen an Crew und Material.
            </p>
          </div>
        </div>

        {/* Expeditions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Expedition-Destinationen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {expeditions.map((expedition, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <h3 className="text-xl font-semibold text-gray-800">{expedition.name}</h3>
                  </div>
                  <span className={`${getDifficultyColor(expedition.difficulty)} text-white px-2 py-1 rounded text-xs font-bold`}>
                    {expedition.difficulty}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{expedition.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Was Sie erwartet</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Mountain className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für das ultimative Abenteuer?
            </h3>
            <p className="mb-6 text-gray-200">
              Kontaktieren Sie uns für eine persönliche Beratung zu Expeditions-Charter. 
              Wir prüfen Ihre Qualifikationen und planen Ihr Abenteuer.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-gray-700 hover:bg-gray-50" size="lg">
                Expedition-Beratung anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default Expeditions;