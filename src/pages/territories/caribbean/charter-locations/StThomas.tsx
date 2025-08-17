import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Wifi, Car, Plane, ShoppingBag } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CharterRequestForm from "@/components/CharterRequestForm";
import caribbean from "@/assets/caribbean.jpg";

const StThomas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marinas = [
    {
      name: "American Yacht Harbor",
      description: "Premier Marina mit Vollservice für Charter-Yachten",
      amenities: ["134 Liegeplätze", "Fuel Station", "WiFi", "Restaurants", "Provisioning", "Zoll/Immigration"]
    },
    {
      name: "Yacht Haven Grande",
      description: "Luxus-Marina im Herzen von Charlotte Amalie",
      amenities: ["48 Megayacht-Liegeplätze", "Luxus Shopping", "Fine Dining", "Concierge", "Spa Services"]
    },
    {
      name: "Sapphire Marina",
      description: "Moderne Marina an der Ostküste",
      amenities: ["50+ Liegeplätze", "Reparatur-Service", "Proviant", "Restaurant", "Strand-Zugang"]
    }
  ];

  const highlights = [
    "Duty-free Shopping Paradise",
    "Internationale Anbindung (STT Airport)",
    "Keine Einreiseformalitäten für US-Bürger",
    "Tor zu BVI und anderen Karibikinseln",
    "Exzellente Marina-Infrastruktur",
    "Traumhafte Strände (Magens Bay)",
    "Lebendige Kultur und Geschichte"
  ];

  const distances = [
    { destination: "Tortola (BVI)", distance: "12 sm", time: "2-2.5 Std." },
    { destination: "St. John (USVI)", distance: "3 sm", time: "45 Min." },
    { destination: "St. Croix (USVI)", distance: "40 sm", time: "6-7 Std." },
    { destination: "Virgin Gorda (BVI)", distance: "18 sm", time: "3-3.5 Std." },
    { destination: "Jost Van Dyke (BVI)", distance: "15 sm", time: "2.5-3 Std." }
  ];

  const attractions = [
    {
      name: "Magens Bay Beach",
      description: "Einer der schönsten Strände der Welt"
    },
    {
      name: "Paradise Point Skyride",
      description: "Seilbahn mit spektakulärer Aussicht"
    },
    {
      name: "Blackbeard's Castle",
      description: "Historisches Wahrzeichen mit Piratengeschichte"
    },
    {
      name: "Coral World Ocean Park",
      description: "Unterwasser-Observatorium und Meerespark"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="St. Thomas, USVI"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-red-600 text-white">🇺🇸 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">St. Thomas</h1>
            <p className="text-xl max-w-2xl">
              Das Shopping- und Charter-Paradies der US Virgin Islands
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

      <div className="container mx-auto px-4 py-12">
        {/* Übersicht */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-800">Charter-Standort St. Thomas</h2>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              St. Thomas ist der kosmopolitischste Standort der US Virgin Islands und bietet 
              exzellente Charter-Möglichkeiten. Als duty-free Zone ist die Insel berühmt für 
              Shopping und verfügt über erstklassige Marinas für Ihren Karibik-Törn.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-red-50 rounded-lg">
                <MapPin className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">18°20'N 64°55'W</div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <Plane className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">STT Airport</div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <Anchor className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="font-semibold">Marinas</div>
                <div className="text-sm text-gray-600">3 Hauptmarinas</div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="font-semibold">Shopping</div>
                <div className="text-sm text-gray-600">Duty-free</div>
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
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
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
                    <div className="text-red-600 font-bold">{item.distance}</div>
                    <div className="text-sm text-gray-600">{item.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sehenswürdigkeiten */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sehenswürdigkeiten</h2>
          <div className="grid gap-6 md:grid-cols-2">
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vorteile von St. Thomas</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Starten Sie Ihren Segeltörn ab St. Thomas</h2>
            <p className="text-xl mb-6">
              Entdecken Sie die US Virgin Islands und die BVI
            </p>
            <CharterRequestForm>
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StThomas;