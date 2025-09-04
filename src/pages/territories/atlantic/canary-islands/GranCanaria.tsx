import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import canaryIslandsSailing from "@/assets/canary-islands-sailing.jpg";

const GranCanaria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Zentrale Kanareninsel"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "Ganzjährig"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "NE Passat 15-25 kn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Katamaran & Monohull"
    }
  ];

  const marinas = [
    {
      name: "Las Palmas Marina",
      description: "Moderne Marina im Herzen der Hauptstadt",
      facilities: ["350 Liegeplätze", "Vollservice", "Einkaufszentrum", "Restaurants"]
    },
    {
      name: "Puerto Rico Marina", 
      description: "Geschützter Hafen im Süden der Insel",
      facilities: ["Familienfreundlich", "Strände", "Wassersport", "Aparthotels"]
    },
    {
      name: "Pasito Blanco Marina",
      description: "Exklusive Marina mit Luxus-Ausstattung",
      facilities: ["Premium Service", "Spa", "Golf", "Fine Dining"]
    }
  ];

  const highlights = [
    "Miniaturkontinent mit vielen Klimazonen",
    "Las Palmas - lebendige Hauptstadt",
    "Maspalomas Dünen",
    "Roque Nublo Wahrzeichen",
    "Ganzjährig 20-25°C",
    "Perfekte Passatwinde",
    "Duty-Free Shopping",
    "Kanarische Gastfreundschaft"
  ];

  const attractions = [
    {
      name: "Las Palmas Altstadt",
      description: "Historisches Vegueta Viertel",
      type: "Kultur"
    },
    {
      name: "Maspalomas Dünen",
      description: "Sahara-ähnliche Sandlandschaft",
      type: "Natur"
    },
    {
      name: "Roque Nublo",
      description: "Vulkanisches Wahrzeichen",
      type: "Abenteuer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={canaryIslandsSailing}
          alt="Gran Canaria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🏖️ Gran Canaria</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Gran Canaria</h1>
            <p className="text-xl max-w-2xl">
              Der Miniaturkontinent im Atlantik
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/atlantik/kanaren" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Kanaren
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
                <BreadcrumbLink asChild><Link to="/#reviere">Reviere</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/atlantik">Atlantik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/atlantik/kanaren">Kanarische Inseln</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Gran Canaria</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="flex justify-center text-orange-600 mb-2">
                  {fact.icon}
                </div>
                <div className="font-semibold text-sm text-gray-600 mb-1">
                  {fact.label}
                </div>
                <div className="text-sm font-medium">
                  {fact.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-orange-600" />
              Charter-Standort Gran Canaria
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Gran Canaria wird nicht umsonst als "Miniaturkontinent" bezeichnet. 
              Auf kleinstem Raum finden Sie verschiedene Klimazonen, von grünen Bergen 
              bis zu Sahara-ähnlichen Dünen. Las Palmas bietet eine der besten Marinas 
              des Atlantiks und ist idealer Ausgangspunkt für Kanarenerkundungen.
            </p>
            <p className="text-lg text-gray-600">
              Mit konstanten Passatwinden, ganzjährig milden Temperaturen und 
              erstklassiger Infrastruktur ist Gran Canaria perfekt für entspannte 
              Familientörns oder als Sprungbrett für Atlantikabenteuer.
            </p>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marinas & Häfen</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {marinas.map((marina, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-semibold text-gray-800">{marina.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Ausstattung:</div>
                    <div className="flex flex-wrap gap-2">
                      {marina.facilities.map((facility, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sehenswürdigkeiten</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge className="mb-2">{attraction.type}</Badge>
                    <h3 className="text-lg font-semibold text-gray-800">{attraction.name}</h3>
                  </div>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <Sun className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter ab Gran Canaria
            </h3>
            <p className="mb-6 text-orange-100">
              Starten Sie von der vielfältigsten Kanareninsel zu unvergesslichen 
              Segeltörns im ewigen Frühling des Atlantiks.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-orange-600 hover:bg-orange-50" size="lg">
                Gran Canaria Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default GranCanaria;