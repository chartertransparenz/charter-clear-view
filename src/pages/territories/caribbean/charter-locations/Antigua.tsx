import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Wifi, Car, Plane, Crown } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CharterRequestForm from "@/components/CharterRequestForm";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import caribbean from "@/assets/caribbean.jpg";

const Antigua = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marinas = [
    {
      name: "Nelson's Dockyard",
      description: "Historische Marina im UNESCO-Weltkulturerbe",
      amenities: ["Geschützte Bucht", "Restaurants", "Museen", "Provisioning", "Reparaturen", "WiFi"]
    },
    {
      name: "Falmouth Harbour Marina",
      description: "Moderne Vollservice-Marina",
      amenities: ["120 Liegeplätze", "Superyacht-Service", "Restaurants", "Bars", "Geschäfte", "Transport"]
    },
    {
      name: "Jolly Harbour Marina",
      description: "Geschützte Marina mit Resort-Charakter",
      amenities: ["156 Liegeplätze", "Golf Course", "Strand", "Restaurants", "Supermarkt", "Autovermietung"]
    }
  ];

  const highlights = [
    "365 Strände - einer für jeden Tag",
    "Antigua Sailing Week (April/Mai)",
    "Nelson's Dockyard - UNESCO Weltkulturerbe",
    "Konstante Passatwinde",
    "Englischsprachig",
    "Keine Hurrikane in der Hauptsaison",
    "Ausgezeichnete Infrastruktur"
  ];

  const distances = [
    { destination: "Barbuda", distance: "25 sm", time: "4-5 Std." },
    { destination: "Guadeloupe", distance: "45 sm", time: "7-8 Std." },
    { destination: "St. Martin", distance: "80 sm", time: "12-14 Std." },
    { destination: "Montserrat", distance: "25 sm", time: "4-5 Std." },
    { destination: "St. Kitts", distance: "35 sm", time: "5-6 Std." }
  ];

  const events = [
    {
      name: "Antigua Sailing Week",
      period: "April/Mai",
      description: "Weltbekannte Regatta mit Partystimmung"
    },
    {
      name: "Antigua Charter Yacht Show",
      period: "Dezember",
      description: "Luxusyacht-Präsentation in Nelson's Dockyard"
    },
    {
      name: "Antigua Classic Yacht Regatta",
      period: "April",
      description: "Traditionelle Yachten und maritime Geschichte"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Antigua"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-purple-600 text-white">⛵ Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Antigua</h1>
            <p className="text-xl max-w-2xl">
              Die Segelhauptstadt der Leeward Islands
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/karibik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Karibik
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
                <BreadcrumbLink href="/reviere/karibik">Karibik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/karibik/lee-inseln">Lee-Inseln</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Antigua</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Übersicht */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-5 h-5 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">Charter-Standort Antigua</h2>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Antigua ist das Segelzentrum der Leeward Islands und Heimat der berühmten Antigua 
              Sailing Week. Mit 365 Stränden, Nelson's Dockyard und exzellenten Marinas ist 
              es der perfekte Ausgangspunkt für Ihren Leeward Islands-Törn.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-purple-50 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">17°03'N 61°48'W</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <Plane className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">ANU Airport</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <Anchor className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold">Marinas</div>
                <div className="text-sm text-gray-600">3 Hauptmarinas</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <Crown className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold">UNESCO</div>
                <div className="text-sm text-gray-600">Weltkulturerbe</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marinas & Charter-Basen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marinas.map((marina, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{marina.name}</h3>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="space-y-2">
                    {marina.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Distanzen */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Distanzen & Fahrtzeiten</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {distances.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{item.destination}</span>
                  <div className="text-right">
                    <div className="text-purple-600 font-bold">{item.distance}</div>
                    <div className="text-sm text-gray-600">{item.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelevents & Regatten</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-purple-600 font-semibold text-sm mb-2">{event.period}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.name}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vorteile von Antigua</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Starten Sie Ihren Segeltörn ab Antigua</h2>
            <p className="text-xl mb-6">
              Entdecken Sie die Leeward Islands vom Segelzentrum der Karibik
            </p>
            <CharterRequestForm>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Antigua;