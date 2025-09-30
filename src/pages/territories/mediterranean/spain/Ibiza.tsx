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

const Ibiza = () => {
  const m = META.ibiza;
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Hauptstadt", value: "Ibiza-Stadt (Eivissa)" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Party & Entspannung" },
    { icon: Anchor, label: "Besonderheit", value: "UNESCO-Weltkulturerbe" }
  ];

  const ports = [
    "Marina Ibiza", "Sant Antoni de Portmany", "Santa Eulària des Riu", "Formentera (La Savina)"
  ];

  const highlights = [
    "Dalt Vila - UNESCO-Weltkulturerbe",
    "Weltberühmtes Nachtleben",
    "Cala Conta - Traumhafte Sonnenuntergänge",
    "Formentera - Die Karibik Europas",
    "Beach Clubs & Chiringuitos",
    "Kristallklares Türkiswasser",
    "Hippie-Märkte"
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
          {"@type": "ListItem", "position": 5, "name": "Ibiza", "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/ibiza"}
        ]
      }} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
        
        {/* Header */}
        <div className="relative h-64 md:h-96 overflow-hidden mt-20">
          <img
            src="/lovable-uploads/c0896df7-5ba2-4d93-9c3a-ffd817d565c5.png"
            alt="Ibiza Yachtcharter - Die weiße Insel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Badge className="mb-4 bg-blue-500 text-white">🇪🇸 Ibiza & Formentera</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Ibiza</h1>
              <p className="text-xl max-w-2xl">
                Die Weiße Insel - Nachtleben, Traumstrände & Formentera
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
                  <BreadcrumbPage>Ibiza</BreadcrumbPage>
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
              region="Ibiza"
              center={{ lat: 38.9067, lng: 1.4206 }}
              zoom={10}
              maptype="satellite"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Yachtcharter Ibiza & Formentera: Die Weiße Insel entdecken</h2>
              <p className="text-xl text-muted-foreground">
                Wo Nachtleben auf Naturparadies trifft
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Ibiza ist weltberühmt für sein pulsierendes Nachtleben, aber die Insel hat auch eine überraschend ruhige und natürliche Seite. Neben den berühmten Beach Clubs und Diskotheken bietet Ibiza unzählige wunderschöne Buchten mit türkisfarbenem Wasser, Pinienwäldern und charmanten Dörfern.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Dalt Vila - UNESCO-Weltkulturerbe</h3>
              <p className="mb-6">
                Die Altstadt von Ibiza-Stadt (Dalt Vila) ist UNESCO-Weltkulturerbe und ein Muss für jeden Besucher. Von der Marina Ibiza aus können Sie die historischen Stadtmauern, engen Gassen und die Kathedrale erkunden. Die Marina selbst bietet erstklassige Infrastruktur und liegt zentral für Ihr Nachtleben-Abenteuer.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Traumhafte Buchten & Beach Clubs</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Cala Conta (Comte)</h4>
                    <p className="text-sm text-gray-600">Spektakuläre Sonnenuntergänge und kristallklares Wasser. Ideal zum Ankern tagsüber.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Cala Salada</h4>
                    <p className="text-sm text-gray-600">Geschützte Bucht mit Pinienwald und türkisblauem Wasser. Beliebt bei Seglern.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Cala Jondal</h4>
                    <p className="text-sm text-gray-600">Berühmte Beach Clubs, exklusives Ambiente und ruhigeres Wasser.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Cala d'Hort</h4>
                    <p className="text-sm text-gray-600">Blick auf den mystischen Felsen Es Vedrà - magische Atmosphäre.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Formentera - Die Karibik des Mittelmeers</h3>
              <p className="mb-6">
                Formentera ist die kleinste bewohnte Baleareninsel und nur einen kurzen Schlag von Ibiza entfernt. Die Insel ist ein wahres Naturparadies, bekannt für ihre puderzuckerweißen Strände und das unglaublich klare, türkisfarbene Wasser, das an die Karibik erinnert. Die Playa de Ses Illetes ist ein ikonischer Ankerplatz mit kristallklarem Wasser.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Segeln zwischen Ibiza & Formentera</h3>
              <p className="mb-4">
                Die Distanz zwischen Ibiza und Formentera beträgt nur etwa 5-6 Seemeilen - perfekt für einen Tagesausflug oder als Teil Ihres Törns. Das Wasser zwischen den Inseln ist teils flach und erfordert Aufmerksamkeit bei der Navigation, besonders bei Es Freus (der Meerenge zwischen den Inseln).
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Nachtleben & Beach Clubs</h3>
              <p className="mb-4">
                Ibiza ist die Welthauptstadt des elektronischen Tanzes. Von Pacha über Ushuaïa bis Amnesia - die Insel bietet legendäre Clubs und DJs. Tagsüber locken Beach Clubs wie Café del Mar, Blue Marlin oder Nikki Beach mit entspannten Beats und Meerblick. Der perfekte Mix aus Party und Entspannung.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wind & Wetter</h3>
              <p className="mb-4">
                Ibiza genießt ein mediterranes Klima mit heißen Sommern und milden Wintern. Die Segelsaison läuft von Mai bis Oktober. Im Sommer dominieren thermische Winde mit 3-4 Bft - ideal für entspanntes Cruisen. Die beste Zeit für Ihren Charter: Juni und September - weniger Trubel, perfekte Temperaturen.
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
                Bereit für Ibiza & Formentera?
              </h3>
              <p className="mb-6 text-blue-100">
                Erleben Sie den perfekten Mix aus Party, Strand und kristallklarem Wasser auf der weißen Insel.
              </p>
              <CharterRequestForm>
                <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                  Ibiza Charter anfragen
                </Button>
              </CharterRequestForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ibiza;
