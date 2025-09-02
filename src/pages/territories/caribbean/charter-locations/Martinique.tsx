import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Wine, Mountain, Plane } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import caribbean from "@/assets/caribbean.jpg";

const Martinique = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marinas = [
    {
      name: "Marina du Marin",
      description: "Größte Marina der französischen Antillen",
      amenities: ["750+ Liegeplätze", "Technik-Zentrum", "Proviantierung", "Restaurants", "Geschäfte", "WiFi"]
    },
    {
      name: "Port de Plaisance Fort-de-France",
      description: "Zentrale Marina in der Hauptstadt",
      amenities: ["200 Liegeplätze", "City-Lage", "Zoll/Immigration", "Banken", "Shopping", "Kultur"]
    },
    {
      name: "Marina de l'Anse Mitan",
      description: "Boutique-Marina mit Strand-Zugang",
      amenities: ["40 Liegeplätze", "Strandnähe", "Restaurants", "Wassertaxi", "Tauchbasis", "Ruhige Lage"]
    }
  ];

  const highlights = [
    "Französische Kultur und Küche",
    "Exzellente Weine und Rums",
    "Aktiver Vulkan Mont Pelée",
    "Traumhafte Buchten und Strände",
    "EU-Standards und Euro-Währung",
    "Zentrale Lage in den Windward Islands",
    "Reiche Geschichte und Museen"
  ];

  const distances = [
    { destination: "St. Lucia", distance: "20 sm", time: "3-4 Std." },
    { destination: "Dominica", distance: "18 sm", time: "3 Std." },
    { destination: "St. Vincent", distance: "60 sm", time: "9-10 Std." },
    { destination: "Guadeloupe", distance: "90 sm", time: "13-15 Std." },
    { destination: "Grenada", distance: "120 sm", time: "18-20 Std." }
  ];

  const attractions = [
    {
      name: "Mont Pelée",
      description: "Aktiver Vulkan mit spektakulären Wanderwegen"
    },
    {
      name: "Les Jardins de Balata",
      description: "Tropischer botanischer Garten mit Baumwipfelpfad"
    },
    {
      name: "Rhum-Destillerien",
      description: "Besichtigung traditioneller Rum-Brennereien"
    },
    {
      name: "Fort-de-France",
      description: "Lebendige Hauptstadt mit kreolischer Kultur"
    },
    {
      name: "Les Salines",
      description: "Kilometerlanger weißer Sandstrand"
    },
    {
      name: "La Route de la Trace",
      description: "Panoramastraße durch den Regenwald"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Martinique"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-700 text-white">🇫🇷 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Martinique</h1>
            <p className="text-xl max-w-2xl">
              Die Blumeninsel mit französischem Flair
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
                <BreadcrumbLink href="/reviere/karibik/windward-inseln">Windward-Inseln</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Martinique</BreadcrumbPage>
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
              <Wine className="w-5 h-5 text-blue-700" />
              <h2 className="text-2xl font-bold text-gray-800">Charter-Standort Martinique</h2>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Martinique verbindet französische Eleganz mit karibischem Charme. Als größter 
              Charter-Standort der Windward Islands bietet die Insel exzellente Marinas, 
              großartige Küche und ist der perfekte Ausgangspunkt für Törns in die 
              südlichen Kleinen Antillen.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-700 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">14°40'N 61°00'W</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Plane className="w-6 h-6 text-blue-700 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">FDF Airport</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Anchor className="w-6 h-6 text-blue-700 mx-auto mb-2" />
                <div className="font-semibold">Marinas</div>
                <div className="text-sm text-gray-600">3 Hauptmarinas</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Mountain className="w-6 h-6 text-blue-700 mx-auto mb-2" />
                <div className="font-semibold">Vulkan</div>
                <div className="text-sm text-gray-600">Mont Pelée</div>
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
                        <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
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
                    <div className="text-blue-700 font-bold">{item.distance}</div>
                    <div className="text-sm text-gray-600">{item.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sehenswürdigkeiten */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sehenswürdigkeiten & Aktivitäten</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vorteile von Martinique</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Starten Sie Ihren Segeltörn ab Martinique</h2>
            <p className="text-xl mb-6">
              Entdecken Sie die Windward Islands mit französischem Savoir-vivre
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-700 hover:bg-gray-100"
              onClick={() => {
                window.location.href = 'tel:+497543499080';
              }}
            >
              Charter anfragen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Martinique;