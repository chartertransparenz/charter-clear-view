import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Palmtree, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import pacific from "@/assets/pacific.jpg";
const Pacific = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const regions = [{
    name: "Französisch-Polynesien",
    link: "/reviere/suedpazifik/franzoesisch-polynesien",
    areas: ["Raiatea", "Bora Bora", "Rangiroa"]
  }, {
    name: "Australien",
    link: "/reviere/suedpazifik/australien/whitsundays",
    areas: ["Whitsunday Islands", "Great Barrier Reef"]
  }, {
    name: "Fidschi",
    link: "/reviere/suedpazifik/charter-standorte/fidschi",
    areas: ["Viti Levu", "Vanua Levu"]
  }, {
    name: "Neukaledonien",
    link: "/reviere/suedpazifik/charter-standorte/noumea",
    areas: ["Nouméa", "Ile des Pins"]
  }, {
    name: "Neuseeland",
    link: "/reviere/suedpazifik/charter-standorte/neuseeland",
    areas: ["Bay of Islands", "Hauraki Gulf"]
  }];
  const advantages = ["Traumhafte Natur", "Türkisfarbene Lagunen", "Exotische Kulturen", "Einmalige Erlebnisse"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/2e92d7f8-6a8d-4d0f-b002-c953b144e652.png" alt="Südpazifik" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🏖️ Südpazifik</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Südpazifik</h1>
            <p className="text-xl max-w-2xl">
              Das ultimative Südsee-Paradies
            </p>
          </div>
        </div>
        <Link to="/" className="absolute top-6 left-6" onClick={() => {
        setTimeout(() => {
          document.getElementById('reviere')?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }}>
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
                <BreadcrumbPage>Südpazifik</BreadcrumbPage>
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
              <Star className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-800">Südsee-Paradies</h2>
            </div>
            <p className="text-lg text-gray-600">
              Das ultimative Segelerlebnis in traumhaften Lagunen mit kristallklarem Wasser, 
              exotischen Kulturen und unberührter Natur.
            </p>
          </div>
        </div>

        {/* Top Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top-Regionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => <Link key={index} to={region.link} className="block hover:no-underline group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full group-hover:scale-105 cursor-pointer border border-transparent hover:border-orange-200">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-orange-500 group-hover:text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600">{region.name}</h3>
                  </div>
                  {region.areas && <div className="space-y-2 mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Charter-Standorte:</div>
                      {region.areas.map((area, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-600 group-hover:text-gray-700">{area}</span>
                        </div>)}
                    </div>}
                  {region.link !== "#" && <div className="text-sm text-orange-600 font-medium group-hover:text-orange-700 flex items-center gap-1">
                      → Charter-Informationen & Marinas
                    </div>}
                  {region.link === "#" && <div className="text-sm text-gray-400 italic">
                      Demnächst verfügbar
                    </div>}
                </div>
              </Link>)}
          </div>
        </div>

        {/* Advantages */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Bereit für die Südsee?
            </h3>
            <p className="mb-6 text-gray-700">
              Erleben Sie die Südsee-Romantik in den traumhaften Gewässern 
              zwischen unberührten Korallenriffen und exotischen Kulturen.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Südpazifik-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Pacific;