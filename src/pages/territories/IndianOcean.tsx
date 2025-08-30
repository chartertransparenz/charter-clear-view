import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Palmtree, Sun } from "lucide-react";
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
import indianOcean from "@/assets/indian-ocean.jpg";

const IndianOcean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const regions = [
    { 
      name: "Asien", 
      link: "/reviere/indischer-ozean/asien",
      description: "Thailand, Malaysia mit exotischen Kulturen",
      areas: ["Thailand", "Malaysia"]
    },
    { 
      name: "Seychellen", 
      link: "/reviere/indischer-ozean/seychellen",
      description: "115 Granitinseln im Paradies",
      areas: [
        { name: "Mahé", link: "/reviere/indischer-ozean/seychellen/mahe" },
        { name: "Praslin", link: "/reviere/indischer-ozean/seychellen/praslin" }
      ]
    },
    { 
      name: "Malediven", 
      link: "/reviere/indischer-ozean/malediven",
      description: "1200 Koralleninseln für Luxus-Charter",
      areas: [
        { name: "Malé", link: "/reviere/indischer-ozean/malediven/male" }
      ]
    }
  ];

  const advantages = [
    "Exotisch",
    "Türkisfarbene Lagunen", 
    "Tropisches Klima",
    "Unberührte Natur"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/d596d2c8-b553-4506-8bc2-950556c81b06.png"
          alt="Indischer Ozean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🐧 Indischer Ozean</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Indischer Ozean</h1>
            <p className="text-xl max-w-2xl">
              Exotische Lagunen und tropisches Paradies
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
                <BreadcrumbPage>Indischer Ozean</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-800">Tropisches Paradies</h2>
            </div>
            <p className="text-lg text-gray-600">
              Exotische Segelreviere mit türkisfarbenen Lagunen und tropischem Klima. 
              Die perfekte Destination für entspanntes Charter-Segeln in unberührter Natur.
            </p>
          </div>
        </div>

        {/* Top Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top-Regionen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="block hover:no-underline group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full group-hover:scale-105 cursor-pointer border border-transparent hover:border-orange-200">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-orange-500 group-hover:text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600">{region.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{region.description}</p>
                  {region.areas && (
                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Charter-Standorte:</div>
                      {region.areas.map((area, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          {typeof area === 'object' && area.link ? (
                            <Link 
                              to={area.link} 
                              className="text-gray-600 group-hover:text-orange-600 hover:text-orange-700 transition-colors duration-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {area.name}
                            </Link>
                          ) : (
                            <span className="text-gray-600 group-hover:text-gray-700">{typeof area === 'string' ? area : area.name}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="text-sm text-orange-600 font-medium group-hover:text-orange-700 flex items-center gap-1">
                    → Charter-Informationen & Marinas
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vorteile</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Palmtree className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Exotik pur erleben?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die exotischsten Segelreviere der Welt mit kristallklaren 
              Lagunen und unberührter tropischer Natur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Indischer Ozean Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianOcean;