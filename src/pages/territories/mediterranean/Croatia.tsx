import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import destinationCroatia from "@/assets/destination-croatia.jpg";
const Croatia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Nordöstliches Mittelmeer"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Inseln",
    value: "Über 1.200 Inseln"
  }];
  const regions = [{
    name: "Istrien",
    link: "/reviere/mittelmeer/kroatien/istrien",
    description: "Die grüne Halbinsel mit venezianischem Flair und perfekter Marina-Infrastruktur",
    cities: ["Pula", "Rovinj", "Poreč", "Umag"]
  }, {
    name: "Kvarner Bucht",
    link: "/reviere/mittelmeer/kroatien/kvarner-bucht",
    description: "Geschützte Inselwelt mit authentischem Charme und kurzen Distanzen",
    cities: ["Rijeka", "Krk", "Rab", "Cres", "Mali Lošinj"]
  }, {
    name: "Norddalmatien",
    link: "/reviere/mittelmeer/kroatien/norddalmatien",
    description: "Kornati Nationalpark und unberührte Naturschönheiten",
    cities: ["Zadar", "Šibenik", "Biograd", "Murter"]
  }, {
    name: "Mitteldalmatien",
    link: "/reviere/mittelmeer/kroatien/mitteldalmatien",
    description: "Das Herzstück Kroatiens mit Split, Hvar und den schönsten Inseln",
    cities: ["Split", "Hvar", "Brač", "Vis", "Trogir"]
  }, {
    name: "Süddalmatien",
    link: "/reviere/mittelmeer/kroatien/sueddalmatien",
    description: "Dubrovnik und die südlichsten Perlen der kroatischen Adria",
    cities: ["Dubrovnik", "Korčula", "Mljet", "Lastovo"]
  }];
  const highlights = ["Über 1.200 Inseln und Inselchen", "Kristallklares, türkisfarbenes Wasser", "Exzellente Marina-Infrastruktur", "Kurze Distanzen zwischen Ankerplätzen", "UNESCO-Weltkulturerbe Städte", "Kornaten-Nationalpark", "Perfekte Segelbedingungen"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={destinationCroatia} alt="Kroatien Mittelmeer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇭🇷 Kroatien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kroatien</h1>
            <p className="text-xl max-w-2xl">
              Die Perle der Adria
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Mittelmeer
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
                <BreadcrumbPage>Kroatien</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>)}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    {region.cities && <div className="grid grid-cols-2 gap-2">
                        {region.cities.slice(0, 6).map((city, idx) => <div key={idx} className="text-sm text-blue-600 font-medium">
                            • {city}
                          </div>)}
                        {region.cities.length > 6 && <div className="text-sm text-gray-500 italic">
                            +{region.cities.length - 6} weitere
                          </div>}
                      </div>}
                  </CardContent>
                </Card>
              </Link>)}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>)}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für kroatisches Inselhopping?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die Schönheit der kroatischen Adria mit ihren 
              traumhaften Inseln, kristallklarem Wasser und charmanten Küstenstädten.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Kroatien Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Croatia;