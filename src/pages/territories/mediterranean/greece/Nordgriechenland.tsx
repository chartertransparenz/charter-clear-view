import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const Nordgriechenland = () => {
  useEffect(() => {
    document.title = "Yachtcharter Nordgriechenland | Chalkidiki & Thessaloniki Segeln";
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Nordägäis & Thermaischer Golf"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Heiliger Berg Athos"
  }];
  const cities = ["Thessaloniki", "Kavala", "Alexandroupoli", "Nea Moudania", "Ouranoupoli", "Ammouliani"];
  const highlights = ["Drei \"Finger\" der Chalkidiki-Halbinsel", "UNESCO-Welterbe Berg Athos", "Kristallklare Gewässer und Sandstrände", "Authentische griechische Kultur", "Moderate Winde - ideal für Familien", "Reiche Geschichte und Archäologie", "Exzellente lokale Küche"];
  const mapMarkers = [{
    lat: 40.6401,
    lng: 22.9444,
    name: "Thessaloniki",
    type: "base"
  }, {
    lat: 40.0583,
    lng: 23.8333,
    name: "Nea Moudania",
    type: "base"
  }, {
    lat: 40.3167,
    lng: 23.9833,
    name: "Ouranoupoli",
    type: "destination"
  }, {
    lat: 40.3500,
    lng: 23.8667,
    name: "Ammouliani",
    type: "destination"
  }, {
    lat: 40.9394,
    lng: 24.4069,
    name: "Kavala",
    type: "destination"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/f5227d64-8443-47fd-be3d-af465828b4a5.png" alt="Nordgriechenland Chalkidiki" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Nordgriechenland</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Nordgriechenland</h1>
            <p className="text-xl max-w-2xl">
              Chalkidiki & Thermaischer Golf
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer/griechenland" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Griechenland
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere/mittelmeer">Mittelmeer</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere/mittelmeer/griechenland">Griechenland</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Nordgriechenland</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-blue-500 mb-2">
                <fact.icon className="w-6 h-6 mx-auto" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{fact.label}</h3>
              <p className="text-gray-600 text-sm">{fact.value}</p>
            </div>)}
        </div>

        {/* Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nordgriechenland Karte</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TerritoryMap region="Nordgriechenland" center={{
            lat: 40.4,
            lng: 23.7
          }} zoom={8} markers={mapMarkers} className="h-96 w-full rounded-lg" />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter in Nordgriechenland</h2>
            <p className="text-lg text-gray-600 mb-4">
              Nordgriechenland mit der berühmten Chalkidiki-Halbinsel bietet ein einzigartiges Segelerlebnis 
              abseits der touristischen Pfade. Die drei charakteristischen "Finger" der Chalkidiki - Kassandra, 
              Sithonia und Athos - erstrecken sich in die blaue Ägäis und bieten geschützte Buchten, 
              kristallklares Wasser und authentische griechische Kultur.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Stützpunkte & Marinas</h3>
            <p className="text-gray-600 mb-4">
              <strong>Thessaloniki:</strong> Die lebendige Hauptstadt Nordgriechenlands mit modernen Marina-Anlagen 
              und excellenter Infrastruktur. Der Thermaische Golf bietet ideale Ausgangsbedingungen für Törns 
              zur Chalkidiki.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Nea Moudania:</strong> Zentral gelegener Yachthafen auf der Kassandra-Halbinsel, 
              ideal für die Erkundung der westlichen Chalkidiki-Gewässer.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Segelreviere & Highlights</h3>
            <p className="text-gray-600 mb-4">
              Die <strong>Kassandra-Halbinsel</strong> bietet lebhafte Küstenstädte und Sandstrände. 
              Die <strong>Sithonia-Halbinsel</strong> ist wilder und naturbelassener mit traumhaften Buchten 
              und traditionellen Fischerdörfern. Der <strong>Berg Athos</strong>, UNESCO-Welterbe und 
              autonome Mönchsrepublik, ist ein spiritueller Höhepunkt jeder Nordgriechenland-Reise.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Klima & Segelbedingungen</h3>
            <p className="text-gray-600">
              Nordgriechenland bietet moderate Windverhältnisse, ideal für entspanntes Segeln und Familien. 
              Die Sommermonate bringen angenehme Nordost-Winde, während Frühjahr und Herbst milde Bedingungen 
              für ausgedehnte Törns bieten. Die Wassertemperaturen sind von Mai bis Oktober optimal zum Baden.
            </p>
          </div>
        </div>

        {/* Important Islands/Harbors */}
        

        {/* Highlights */}
        

        {/* Sample Itinerary */}
        <div className="max-w-4xl mx-auto mb-12">
          
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Bereit für Nordgriechenland?
            </h3>
            <p className="mb-8 text-blue-100 text-center max-w-2xl mx-auto">
              Entdecken Sie die unberührte Schönheit der Chalkidiki mit ihren drei "Fingern", 
              dem heiligen Berg Athos und authentischer griechischer Gastfreundschaft.
            </p>
            <div className="text-center">
              <CharterRequestForm>
                <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                  Nordgriechenland-Charter anfragen
                </Button>
              </CharterRequestForm>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Nordgriechenland;