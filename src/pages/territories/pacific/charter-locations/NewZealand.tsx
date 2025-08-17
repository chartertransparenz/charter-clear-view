import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Mountain, Anchor, Wind } from "lucide-react";
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
import newzealandSailing from "@/assets/newzealand-sailing.jpg";

const NewZealand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Nordinsel Neuseelands"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "Oktober - April"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "Westwind 15-25 kn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Monohull & Katamaran"
    }
  ];

  const regions = [
    {
      name: "Bay of Islands",
      description: "144 Inseln im subtropischen Norden",
      cities: ["Paihia", "Russell", "Kerikeri"]
    },
    {
      name: "Hauraki Gulf",
      description: "Segelparadies vor Auckland",
      cities: ["Auckland", "Waiheke Island", "Great Barrier Island"]
    },
    {
      name: "Coromandel Peninsula",
      description: "Wilde Küste mit versteckten Buchten",
      cities: ["Whitianga", "Tairua", "Hot Water Beach"]
    },
    {
      name: "Marlborough Sounds",
      description: "Fjorde der Südinsel",
      cities: ["Picton", "Havelock", "Queen Charlotte Sound"]
    }
  ];

  const highlights = [
    "Spektakuläre Fjordlandschaften",
    "Begegnungen mit Delfinen und Walen",
    "Weltklasse-Weinregionen",
    "Maori-Kultur und Geschichte",
    "Unberührte Natur",
    "Ausgezeichnete Marinas",
    "Abenteuerliche Segelreviere",
    "America's Cup Tradition"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={newzealandSailing}
          alt="Neuseeland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-green-500 text-white">🏔️ Neuseeland</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Neuseeland</h1>
            <p className="text-xl max-w-2xl">
              Segelabenteuer am Ende der Welt
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/suedpazifik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Südpazifik
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
                <BreadcrumbLink href="/reviere/suedpazifik">Südpazifik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Neuseeland</BreadcrumbPage>
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
                <div className="flex justify-center text-green-600 mb-2">
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
              <Mountain className="w-6 h-6 text-green-600" />
              Segeln in Neuseeland
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Neuseeland gilt als eines der spektakulärsten Segelreviere der Welt. 
              Von der subtropischen Bay of Islands im Norden bis zu den dramatischen 
              Marlborough Sounds im Süden bietet das Land der langen weißen Wolke 
              unvergleichliche Segelerlebnisse.
            </p>
            <p className="text-lg text-gray-600">
              Als Heimat des America's Cup verfügt Neuseeland über eine reiche 
              Segeltradition und erstklassige maritime Infrastruktur. Erleben Sie 
              wilde Küstenlandschaften, begegnen Sie Meeressäugern und entdecken Sie 
              versteckte Buchten in einem der letzten unberührten Segelparadiese.
            </p>
          </div>
        </div>

        {/* Charter Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{region.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Wichtige Orte:</div>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
                <Wind className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Entdecken Sie Neuseelands Segelreviere
            </h3>
            <p className="mb-6 text-green-100">
              Erleben Sie spektakuläre Landschaften, wilde Natur und eine der 
              besten Segelinfrastrukturen der Welt in Aotearoa.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-green-600 hover:bg-green-50" size="lg">
                Neuseeland-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewZealand;