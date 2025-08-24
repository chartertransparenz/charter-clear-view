import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import destinationGreece from "@/assets/destination-greece.jpg";
const Greece = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Ägäis & Ionisches Meer"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "April-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Inseln",
    value: "Über 6.000 Inseln"
  }];
  const regions = [{
    name: "Kykladen",
    link: "/reviere/mittelmeer/griechenland/kykladen",
    description: "Die berühmtesten Inseln Griechenlands mit Mykonos und Santorini",
    cities: ["Mykonos", "Santorini", "Paros", "Naxos", "Ios", "Syros"]
  }, {
    name: "Ionische Inseln",
    link: "/reviere/mittelmeer/griechenland/ionische-inseln",
    description: "Grüne Inseln mit venezianischem Flair und sanfteren Winden",
    cities: ["Korfu", "Kefalonia", "Zakynthos", "Lefkada", "Ithaka", "Paxi"]
  }, {
    name: "Dodekanes",
    link: "/reviere/mittelmeer/griechenland/dodekanes",
    description: "Authentische griechische Inseln im Südosten der Ägäis",
    cities: ["Rhodos", "Kos", "Patmos", "Leros", "Kalymnos", "Symi"]
  }, {
    name: "Sporaden",
    link: "/reviere/mittelmeer/griechenland/sporaden",
    description: "Grüne Inseln der Nordägäis mit unberührter Natur",
    cities: ["Skiathos", "Skopelos", "Alonissos", "Skyros"]
  }];
  const highlights = ["Über 6.000 Inseln und Inselchen", "Konstante Meltemi-Winde im Sommer", "Authentische griechische Tavernen", "Kristallklares, türkises Wasser", "Reiche antike Geschichte", "UNESCO-Weltkulturerbe Stätten", "Perfekte Segelbedingungen"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/f5227d64-8443-47fd-be3d-af465828b4a5.png" alt="Griechenland Mittelmeer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Griechenland</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Griechenland</h1>
            <p className="text-xl max-w-2xl">
              Die Wiege des Segelns
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
                <BreadcrumbPage>Griechenland</BreadcrumbPage>
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

        {/* Description */}
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
              Bereit für griechisches Inselhopping?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die Wiege des Segelns mit ihren traumhaften Inseln, 
              konstanten Winden und der legendären griechischen Gastfreundschaft.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Griechenland Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Greece;