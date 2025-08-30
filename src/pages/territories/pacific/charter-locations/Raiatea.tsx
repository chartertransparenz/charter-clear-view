import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Plane, Sun, Waves } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CharterRequestForm from "@/components/CharterRequestForm";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import pacific from "@/assets/pacific.jpg";
const Raiatea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const marinas = [{
    name: "Marina Apooiti",
    description: "Hauptcharter-Marina auf Raiatea",
    amenities: ["60+ Liegeplätze", "Fuel Station", "Provisioning", "Restaurant", "Charterbasen", "WiFi", "Airport Transfer"]
  }, {
    name: "Marina Uturoa",
    description: "Zentrale Marina im Hauptort",
    amenities: ["40 Liegeplätze", "Stadtnähe", "Shopping", "Restaurants", "Bank", "Markt", "Kultur"]
  }, {
    name: "Port de Raiatea",
    description: "Kommerzielle Marina mit Charter-Service",
    amenities: ["Charter-Zentrum", "Reparaturen", "Proviant", "Zoll", "Fährverbindungen", "Autovermietung"]
  }];
  const highlights = ["Heilige Insel der Polynesier", "Ausgangspunkt für Leeward Islands", "Keine Überriffe zwischen Inseln", "Konstante Passatwinde", "Französisches Flair im Paradies", "Kurze Distanzen zu Tahaa", "Kristallklare Lagunen"];
  const distances = [{
    destination: "Tahaa",
    distance: "3 sm",
    time: "45 Min."
  }, {
    destination: "Bora Bora",
    distance: "15 sm",
    time: "2-3 Std."
  }, {
    destination: "Huahine",
    distance: "20 sm",
    time: "3-4 Std."
  }, {
    destination: "Tahiti",
    distance: "120 sm",
    time: "15-18 Std."
  }, {
    destination: "Rangiroa",
    distance: "200 sm",
    time: "24-30 Std."
  }];
  const attractions = [{
    name: "Taputapuatea Marae",
    description: "UNESCO-Weltkulturerbe - heilige polynesische Stätte"
  }, {
    name: "Mount Temehani",
    description: "Mystischer Berg mit der legendären Tiare Apetahi Blume"
  }, {
    name: "Faaroa Bay",
    description: "Einzige schiffbare Flussmündung in Französisch-Polynesien"
  }, {
    name: "Vanilla-Plantagen",
    description: "Besichtigung traditioneller Vanille-Anbaugebiete"
  }, {
    name: "Raiatea Safari Tours",
    description: "4WD-Touren durch das bergige Inselinnere"
  }, {
    name: "Pearl Farms",
    description: "Besuch von Tahiti-Perlen-Zuchtfarmen"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={pacific} alt="Raiatea, Französisch-Polynesien" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-600 text-white">🇵🇫 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Raiatea</h1>
            <p className="text-xl max-w-2xl">
              Die heilige Insel und Charter-Zentrum der Leeward Islands
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
                <BreadcrumbLink href="/reviere/suedpazifik/franzoesisch-polynesien">Französisch-Polynesien</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Raiatea</BreadcrumbPage>
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
              <h2 className="text-2xl font-bold text-gray-800">Charter-Standort Raiatea</h2>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Raiatea ist die heilige Insel Polynesiens und das Charter-Zentrum der Leeward Islands. 
              Von hier aus erreichen Sie problemlos Tahaa, Bora Bora und Huahine. Die Insel bietet 
              exzellente Marinas und ist der perfekte Ausgangspunkt für unvergessliche Südsee-Törns.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">16°49'S 151°25'W</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Plane className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">Via Tahiti PPT</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Anchor className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">Marinas</div>
                <div className="text-sm text-gray-600">3 Hauptmarinas</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Sun className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">Klima</div>
                <div className="text-sm text-gray-600">Tropisch, 26-30°C</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marinas */}
        

        {/* Distanzen */}
        

        {/* Sehenswürdigkeiten */}
        <div className="mb-12">
          
          
        </div>

        {/* Highlights */}
        <div className="mb-12">
          
          
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Starten Sie Ihren Segeltörn ab Raiatea</h2>
            <p className="text-xl mb-6">
              Entdecken Sie die traumhaften Leeward Islands
            </p>
            <CharterRequestForm>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Raiatea;