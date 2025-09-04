import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Anchor, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import atlantic from "@/assets/atlantic.jpg";
const Atlantic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const regions = [{
    name: "Azoren",
    link: "/reviere/atlantik/azoren",
    areas: ["São Miguel", "Terceira", "Faial"]
  }, {
    name: "Französische Atlantikküste",
    link: "/reviere/atlantik/franzoesische-atlantikkueste",
    areas: ["Biskaya", "Bretagne & Normandie"]
  }, {
    name: "Kanarische Inseln",
    link: "/reviere/atlantik/kanaren",
    areas: ["Gran Canaria", "Teneriffa", "Lanzarote"]
  }];
  const advantages = ["Ganzjähriges Segeln möglich", "Kräftigere Winde", "Sportlichere Törns", "Atlantiküberquerungen"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/ff7dc4cb-f11b-4982-bae9-e7ac8218165e.png" alt="Atlantik" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🌊 Atlantik</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Atlantik</h1>
            <p className="text-xl max-w-2xl">
              Kanaren, Kapverden & Azoren
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
                <BreadcrumbPage>Atlantik</BreadcrumbPage>
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
              <h2 className="text-2xl font-bold text-gray-800">Atlantik-Feeling</h2>
            </div>
            <p className="text-lg text-gray-600">
              Ein Yachtcharter in Atlantikrevieren wie den Kanaren, Azoren oder an der französischen Atlantikküste bietet Seglern eine einzigartige Kombination aus anspruchsvollen Bedingungen und unvergleichlicher Natur. Hier erwarten Sie faszinierende Passatwinde, die Ihre Segelkünste fordern, sowie die Möglichkeit, zwischen vulkanischen Inselparadiesen, wilden Küstenlinien und charmanten Hafenstädten zu navigieren. Erleben Sie die Freiheit des Hochseesegelns gepaart mit der Entdeckung kultureller und landschaftlicher Vielfalt, die jeden Törn zu einem unvergesslichen Abenteuer macht.
            </p>
          </div>
        </div>

        {/* Top Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top-Regionen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="text-sm text-orange-600 font-medium group-hover:text-orange-700 flex items-center gap-1">
                    → Charter-Informationen & Marinas
                  </div>
                </div>
              </Link>)}
          </div>
        </div>

        {/* Advantages */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Lust auf Atlantik?
            </h3>
            <p className="mb-6 text-gray-700">
              Erleben Sie echtes Segeln mit kräftigen Winden und endlosen 
              Horizonten in den schönsten Atlantik-Destinationen.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Atlantik-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>;
};
export default Atlantic;