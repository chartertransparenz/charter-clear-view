import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Menorca = () => {
  const m = META.menorca;
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Hauptstädte", value: "Mahón & Ciutadella" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Naturliebhaber & Familien" },
    { icon: Anchor, label: "Besonderheit", value: "UNESCO-Biosphärenreservat" }
  ];

  const ports = [
    "Mahón (Port de Maó)", "Ciutadella", "Fornells", "Cala en Porter"
  ];

  const highlights = [
    "UNESCO-Biosphärenreservat",
    "Unberührte Naturbuchten",
    "Mahón - Zweitgrößter Naturhafen Europas",
    "Cala Macarella & Macarelleta",
    "Ruhiger als Mallorca & Ibiza",
    "Türkisfarbenes Wasser",
    "Authentische Dörfer"
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
      <JsonLd json={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Reviere", "item": "https://chartertransparenz.de/reviere"},
          {"@type": "ListItem", "position": 2, "name": "Mittelmeer", "item": "https://chartertransparenz.de/reviere/mittelmeer"},
          {"@type": "ListItem", "position": 3, "name": "Spanien", "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien"},
          {"@type": "ListItem", "position": 4, "name": "Balearen", "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"},
          {"@type": "ListItem", "position": 5, "name": "Menorca", "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/menorca"}
        ]
      }} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
        
        {/* Header */}
        <div className="relative h-64 md:h-96 overflow-hidden mt-20">
          <img
            src="/lovable-uploads/16f1d4fc-5a9e-4edc-b6bd-cfd79999a60c.png"
            alt="Menorca Yachtcharter - Cala Macarella"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Badge className="mb-4 bg-blue-500 text-white">🇪🇸 Menorca</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Menorca</h1>
              <p className="text-xl max-w-2xl">
                Die Ruhige Schönheit - Naturbuchten & Authentizität
              </p>
            </div>
          </div>
          <Link 
            to="/reviere/mittelmeer/spanien/balearen" 
            className="absolute top-6 left-6"
          >
            <Button variant="outline" className="bg-white/90 text-black border-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Balearen
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
                  <BreadcrumbLink asChild>
                    <Link to="/reviere/mittelmeer/spanien">Spanien</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/reviere/mittelmeer/spanien/balearen">Balearen</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Menorca</BreadcrumbPage>
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

          {/* Territory Map */}
          <div className="max-w-4xl mx-auto mb-12">
            <TerritoryMap 
              region="Menorca"
              center={{ lat: 39.9625, lng: 4.0758 }}
              zoom={7}
              maptype="satellite"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Yachtcharter Menorca: Die Unberührte Perle der Balearen</h2>
              <p className="text-xl text-muted-foreground">
                Ruhiger & familiärer als Mallorca & Ibiza
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Menorca ist die östlichste und zweitgrößte Baleareninsel, bekannt für ihre unberührte Natur und ihre entspannte Atmosphäre. Menorca wurde von der UNESCO zum Biosphärenreservat erklärt und bietet eine Fülle von unberührten Stränden (Calas) und eine reiche Flora und Fauna. Die Insel ist ruhiger und weniger touristisch als Mallorca oder Ibiza.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Mahón & Ciutadella - Zwei Charakter-Hauptstädte</h3>
              <p className="mb-6">
                <strong>Mahón (Port de Maó)</strong> im Osten ist der größte Naturhafen im Mittelmeer und einer der größten in Europa. Der fjordartige Hafen erstreckt sich über 5 Kilometer ins Landesinnere und bietet exzellente Marinas sowie Schutz vor fast allen Windrichtungen. Die Stadt selbst ist charmant mit britisch geprägter Architektur aus der Kolonialzeit.
              </p>
              <p className="mb-6">
                <strong>Ciutadella</strong> im Westen ist die ehemalige Hauptstadt Menorcas und verzaubert mit ihrer mittelalterlichen Altstadt, engen Gassen und dem malerischen Hafen. Der Naturhafen ist enger als Mahón, aber ebenso charmant und ideal für einen Stadtbummel.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Die Traumhaften Südküsten-Calas</h3>
              <p className="mb-4">
                Die Südküste Menorcas ist gesäumt von atemberaubenden Calas - kleine geschützte Buchten mit weißem Sand und türkisfarbenem Wasser:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Cala Macarella & Macarelleta</h4>
                    <p className="text-sm text-gray-600">Die berühmtesten Buchten Menorcas mit puderzuckerweißem Sand und kristallklarem Wasser.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Cala Mitjana</h4>
                    <p className="text-sm text-gray-600">Geschützte Bucht mit türkisblauem Wasser, ideal zum Ankern und Schwimmen.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Cala Turqueta</h4>
                    <p className="text-sm text-gray-600">Namensgebend für ihre türkisblaue Farbe - ein Paradies für Schnorchler.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Cala Galdana</h4>
                    <p className="text-sm text-gray-600">Eine der größten und geschütztesten Buchten mit Sandstrand und Infrastruktur.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">UNESCO-Biosphärenreservat</h3>
              <p className="mb-6">
                Die gesamte Insel Menorca wurde 1993 von der UNESCO zum Biosphärenreservat erklärt. Dies bedeutet besonders strenge Umweltschutzauflagen, was Menorca seine unberührte Natur bewahrt hat. Beim Ankern ist besonders darauf zu achten, Posidonia-Seegraswiesen zu meiden und nur auf Sand zu ankern.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Familienfreundlich & Entspannt</h3>
              <p className="mb-4">
                Menorca ist das perfekte Segelrevier für Familien und alle, die Ruhe und Natur suchen. Die Distanzen zwischen den Buchten sind kurz, die Gewässer meist gut geschützt, und die Atmosphäre ist entspannt. Keine Mega-Clubs, keine Hektik - nur authentisches balearisches Leben.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wind & Wetter</h3>
              <p className="mb-4">
                Menorca genießt ein mediterranes Klima mit heißen Sommern und milden Wintern. Die Segelsaison läuft von Mai bis Oktober. Im Sommer dominieren thermische Winde mit 3-4 Bft. Die Nordküste kann bei Tramuntana (Nordwind) rauer sein - die geschützten Südküsten-Calas sind dann ideal.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Anreise</h3>
              <p className="mb-4">
                Der Flughafen Menorca (MAH) liegt zentral bei Mahón und wird von vielen europäischen Städten direkt angeflogen. Von dort erreichen Sie die Marinas in Mahón oder Ciutadella in kurzer Zeit.
              </p>
            </div>
          </div>

          {/* Ports */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Häfen & Marinas</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ports.map((port, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="font-medium text-gray-800">{port}</p>
                </div>
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
                Bereit für Menorca?
              </h3>
              <p className="mb-6 text-blue-100">
                Entdecken Sie die ruhige Schönheit Menorcas mit ihren unberührten Naturbuchten und authentischem Charme.
              </p>
              <CharterRequestForm>
                <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                  Menorca Charter anfragen
                </Button>
              </CharterRequestForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menorca;
