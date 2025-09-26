import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Wifi, Car, Plane } from "lucide-react";
import { useEffect } from "react";
import { useMetaTags, generateStructuredData } from "@/hooks/useMetaTags";
import Navigation from "@/components/Navigation";
import CharterRequestForm from "@/components/CharterRequestForm";
import TopDestinations from "@/components/TopDestinations";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import caribbean from "@/assets/caribbean.jpg";

const Tortola = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useMetaTags({
    title: "Yachtcharter Tortola | Charterbasis British Virgin Islands (BVI)",
    description: "Yachtcharter Tortola ⭐ Charter-Standort BVI ✓ Road Town Marina ✓ Nanny Cay ✓ Tor zu Virgin Gorda & Jost Van Dyke ✓ Seit 25+ Jahren",
    keywords: "Yachtcharter Tortola, Charter BVI, Road Town Marina, Nanny Cay, British Virgin Islands Charter, Tortola Charter",
    canonical: "https://premium-yachtcharter.com/reviere/karibik/charter-standorte/tortola",
    ogImage: "/lovable-uploads/63f7b57f-ee43-43f7-b1e6-c4720b7ad0ba.png",
    structuredData: {
      ...generateStructuredData.breadcrumb([
        { name: "Start", url: "https://premium-yachtcharter.com" },
        { name: "Reviere", url: "https://premium-yachtcharter.com/#reviere" },
        { name: "Karibik", url: "https://premium-yachtcharter.com/reviere/karibik" },
        { name: "Charter-Standorte", url: "https://premium-yachtcharter.com/reviere/karibik" },
        { name: "Tortola", url: "https://premium-yachtcharter.com/reviere/karibik/charter-standorte/tortola" }
      ]),
      ...generateStructuredData.service("Tortola", "Premium Yachtcharter ab Tortola - Der Haupt-Charter-Standort der British Virgin Islands mit erstklassigen Marinas und perfektem Zugang zu allen BVI-Inseln.")
    }
  });

  const marinas = [
    {
      name: "Village Cay Marina",
      description: "Zentral gelegene Marina im Herzen von Road Town",
      amenities: ["50 Liegeplätze", "Strom & Wasser", "WiFi", "Restaurant", "Supermarkt"]
    },
    {
      name: "Wickhams Cay Marina",
      description: "Moderne Marina mit exzellenter Ausstattung",
      amenities: ["100+ Liegeplätze", "Fuel Station", "Concierge", "Zoll & Immigration", "Reparaturdienst"]
    },
    {
      name: "Nanny Cay Marina",
      description: "Vollservice-Marina mit Hotel und Resort",
      amenities: ["180 Liegeplätze", "Hotel", "Restaurants", "Geschäfte", "Wassersport"]
    }
  ];

  const highlights = [
    "Hauptstadt der Britischen Jungferninseln",
    "Internationale Charterflotte verfügbar",
    "Idealer Ausgangspunkt für BVI-Hopping",
    "Ausgezeichnete Marina-Infrastruktur",
    "Duty-free Shopping in Road Town",
    "Einfache Anreise über Flughafen",
    "Kurze Distanzen zu allen BVI-Inseln"
  ];

  const distances = [
    { destination: "Virgin Gorda", distance: "12 sm", time: "2-3 Std." },
    { destination: "Jost Van Dyke", distance: "8 sm", time: "1.5-2 Std." },
    { destination: "Norman Island", distance: "6 sm", time: "1-1.5 Std." },
    { destination: "Anegada", distance: "15 sm", time: "2.5-3 Std." },
    { destination: "St. Thomas (USVI)", distance: "12 sm", time: "2-2.5 Std." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Tortola, BVI"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-600 text-white">🏝️ Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Yachtcharter Tortola</h1>
            <p className="text-xl max-w-2xl">
              Das Tor zu den Britischen Jungferninseln
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
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/karibik">Karibik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/karibik/britische-jungferninseln">Britische Jungferninseln</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Tortola</BreadcrumbPage>
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
              <Anchor className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Charter-Standort Tortola</h2>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Tortola ist der wichtigste Charter-Standort der Britischen Jungferninseln und 
              bietet optimalen Zugang zu den traumhaften Segelrevieren der BVI. Road Town 
              verfügt über moderne Marinas und ist perfekt für den Start Ihres Segeltörns.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">18°25'N 64°37'W</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Plane className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">EIS Airport</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Anchor className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">Marinas</div>
                <div className="text-sm text-gray-600">3 Hauptmarinas</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Car className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">Transfer</div>
                <div className="text-sm text-gray-600">15 Min. vom Airport</div>
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
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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
                    <div className="text-blue-600 font-bold">{item.distance}</div>
                    <div className="text-sm text-gray-600">{item.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vorteile von Tortola</h2>
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
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Starten Sie Ihren Segeltörn ab Tortola</h2>
            <p className="text-xl mb-6">
              Entdecken Sie die traumhaften Britischen Jungferninseln
            </p>
            <CharterRequestForm>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default Tortola;