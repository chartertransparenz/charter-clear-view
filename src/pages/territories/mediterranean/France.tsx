import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
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
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
import destinationFrance from "@/assets/destination-france.jpg";

const France = () => {
  const m = META.frankreich;
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };

  const franceStructuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "name": "Yachtcharter Frankreich",
    "description": "Segeln Frankreich: glamouröse Côte d'Azur, wilde Korsika & provenzalische Küste.",
    "provider": {
      "@type": "Organization",
      "name": "Charter Transparenz"
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Westliches Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Ankerplätze", value: "Zahlreiche Marinas und Buchten" }
  ];

  const regions = [
    {
      name: "Côte d'Azur",
      link: "/reviere/mittelmeer/frankreich/cote-azur",
      description: "Glamouröse Küste mit berühmten Häfen wie Cannes, Antibes und St. Tropez",
      cities: ["Antibes", "Bormes-les-Mimosas", "Cogolin", "Golfe Juan", "Hyères", "Marseille", "Port Grimaud", "Port Pin-Rolland", "Port de St. Mandrier sur Mer", "St. Raphael", "Toulon"]
    },
    {
      name: "Korsika",
      link: "/reviere/mittelmeer/frankreich/korsika", 
      description: "Die Insel der Schönheit mit kristallklarem Wasser und dramatischen Küsten",
      cities: ["Ajaccio", "Bonifacio"]
    }
  ];

  const highlights = [
    "Exzellente Marina-Infrastruktur",
    "Weltberühmte Küstenstädte",
    "Französische Kultur und Küche",
    "Geschützte Buchten und Häfen",
    "Ganzjährig milde Temperaturen",
    "Luxuriöse Yachthäfen",
    "Vielfältige Segelreviere"
  ];

  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        keywords={m.keywords}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      />
      <JsonLd json={franceStructuredData} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/ff15c825-2f79-4d1a-accd-732ed85772b1.png"
          alt="Frankreich Mittelmeer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇫🇷 Frankreich</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Frankreich</h1>
            <p className="text-xl max-w-2xl">
              Elegantes Segeln an der Côte d'Azur und Korsika
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
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer">Mittelmeer</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Frankreich</BreadcrumbPage>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in Frankreich</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die französische Mittelmeerküste vereint Eleganz, Kultur und perfekte Segelbedingungen. 
              Von den glamourösen Häfen der Côte d'Azur bis zu den wilden Küsten Korsikas bietet 
              Frankreich einige der schönsten Segelreviere Europas.
            </p>
            <p className="text-lg text-gray-600">
              Erstklassige Marinas, exzellente Gastronomie und die berühmte französische Lebensart 
              machen jeden Segeltörn zu einem unvergesslichen Erlebnis.
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
              Bereit für französische Eleganz?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die Schönheit der französischen Mittelmeerküste mit ihrer 
              einzigartigen Mischung aus Luxus, Kultur und perfekten Segelbedingungen.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Frankreich Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
      </div>
    </>
  );
};

export default France;