import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Plane, Heart, Fish } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CharterRequestForm from "@/components/CharterRequestForm";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import pacific from "@/assets/pacific.jpg";
const WhitsundayIslands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const marinas = [{
    name: "Abell Point Marina",
    description: "Australiens größte Superyacht-Marina",
    amenities: ["500+ Liegeplätze", "Superyacht-Service", "Restaurants", "Shopping", "Resort", "Concierge"]
  }, {
    name: "Port of Airlie",
    description: "Charter-Zentrum von Airlie Beach",
    amenities: ["Charter-Basen", "Fuel Station", "Provisioning", "Restaurants", "Nachtleben", "Transport"]
  }, {
    name: "Shute Harbour",
    description: "Gateway zu den Whitsunday Islands",
    amenities: ["Fährverbindungen", "Charter-Pickup", "Parkplätze", "Café", "Toiletten", "Gepäckaufbewahrung"]
  }];
  const highlights = ["Heart Reef - Weltberühmtes Herzriff", "Whitehaven Beach - Weißester Sand der Welt", "Great Barrier Reef - UNESCO Welterbe", "74 tropische Inseln", "Konstante Südost-Passatwinde", "Luxury Island Resorts", "Weltklasse Schnorcheln & Tauchen"];
  const distances = [{
    destination: "Hamilton Island",
    distance: "8 sm",
    time: "1-1.5 Std."
  }, {
    destination: "Whitehaven Beach",
    distance: "12 sm",
    time: "1.5-2 Std."
  }, {
    destination: "Hook Island",
    distance: "15 sm",
    time: "2-2.5 Std."
  }, {
    destination: "Daydream Island",
    distance: "6 sm",
    time: "45 Min."
  }, {
    destination: "Cairns",
    distance: "140 sm",
    time: "18-22 Std."
  }];
  const islands = [{
    name: "Hamilton Island",
    description: "Resort-Insel mit Flughafen und Marina"
  }, {
    name: "Whitehaven Beach",
    description: "7km weißester Silica-Sand der Welt"
  }, {
    name: "Hayman Island",
    description: "Luxus-Resort-Insel der Extraklasse"
  }, {
    name: "Daydream Island",
    description: "All-Inclusive Resort mit Wassersport"
  }, {
    name: "Hook Island",
    description: "Nationalpark mit spektakulären Buchten"
  }, {
    name: "Long Island",
    description: "Unberührte Natur und einsame Strände"
  }];
  const activities = [{
    name: "Great Barrier Reef",
    description: "Schnorcheln und Tauchen am größten Korallenriff"
  }, {
    name: "Heart Reef Flug",
    description: "Rundflug über das berühmte herzförmige Riff"
  }, {
    name: "Whitehaven Beach",
    description: "Besuch des schönsten Strandes Australiens"
  }, {
    name: "Hill Inlet",
    description: "Spektakulärer Aussichtspunkt über swirling sands"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={pacific} alt="Whitsunday Islands, Australien" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-600 text-white">🇦🇺 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Whitsunday Islands</h1>
            <p className="text-xl max-w-2xl">
              74 tropische Inseln im Great Barrier Reef
            </p>
          </div>
        </div>
        <Link to="/reviere/suedpazifik" className="absolute top-6 left-6">
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
                <BreadcrumbLink href="/reviere/suedpazifik/australien">Australien</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Whitsunday Islands</BreadcrumbPage>
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
              <Heart className="w-5 h-5 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-800">Charter-Standort Whitsunday Islands</h2>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Die Whitsunday Islands sind Australiens Premier-Segelrevier und Heimat von 
              Whitehaven Beach, dem weißesten Strand der Welt. Inmitten des Great Barrier 
              Reef gelegen, bieten die 74 tropischen Inseln perfekte Segelbedingungen 
              und Weltklasse-Schnorcheln.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-orange-50 rounded-lg">
                <MapPin className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">20°16'S 148°57'E</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Plane className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">HTI/PPP Airport</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Anchor className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Marinas</div>
                <div className="text-sm text-gray-600">3 Hauptmarinas</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Fish className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Great Barrier Reef</div>
                <div className="text-sm text-gray-600">UNESCO Welterbe</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marinas */}
        

        {/* Inseln */}
        

        {/* Aktivitäten */}
        

        {/* Distanzen */}
        

        {/* Highlights */}
        

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Entdecken Sie die Whitsunday Islands</h2>
            <p className="text-xl mb-6">
              74 tropische Inseln im Great Barrier Reef warten auf Sie
            </p>
            <CharterRequestForm>
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Whitsundays Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default WhitsundayIslands;