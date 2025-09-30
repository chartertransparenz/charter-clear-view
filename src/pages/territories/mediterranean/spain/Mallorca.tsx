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
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const Mallorca = () => {
  const m = META.mallorca;
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Hauptstadt",
    value: "Palma de Mallorca"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-September"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Buchten",
    value: "200+ Calas"
  }];
  const ports = ["Palma de Mallorca", "Port d'Andratx", "Port de Sóller", "Alcúdia", "Portocolom", "Cala d'Or"];
  const highlights = ["Palma - Lebendige Hauptstadt", "Cabrera Nationalpark", "Serra de Tramuntana UNESCO-Welterbe", "Es Trenc - Karibik-Feeling", "Cap Formentor", "200+ Traumhafte Buchten", "Weltklasse Marinas"];
  return <>
      <Meta title={m.title} description={m.description} keywords={m.keywords} ogImage={absoluteOg(m.ogImage)} canonical={m.canonical()} />
      <JsonLd json={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Reviere",
        "item": "https://chartertransparenz.de/reviere"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Mittelmeer",
        "item": "https://chartertransparenz.de/reviere/mittelmeer"
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": "Spanien",
        "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien"
      }, {
        "@type": "ListItem",
        "position": 4,
        "name": "Balearen",
        "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"
      }, {
        "@type": "ListItem",
        "position": 5,
        "name": "Mallorca",
        "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/mallorca"
      }]
    }} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
        
        {/* Header */}
        <div className="relative h-64 md:h-96 overflow-hidden mt-20">
          <img src="/lovable-uploads/cc180839-2a23-40be-b2bd-45eedcf7e909.png" alt="Mallorca Yachtcharter - Cala Llombards" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Badge className="mb-4 bg-blue-500 text-white">🇪🇸 Mallorca</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Mallorca</h1>
              <p className="text-xl max-w-2xl">
                Die Königin der Balearen - Traumhafte Buchten & Lebendige Kultur
              </p>
            </div>
          </div>
          <Link to="/reviere/mittelmeer/spanien/balearen" className="absolute top-6 left-6">
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
                  <BreadcrumbPage>Mallorca</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Quick Facts */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </div>)}
          </div>

          {/* Territory Map */}
          <div className="max-w-4xl mx-auto mb-12">
            <TerritoryMap region="Mallorca" center={{
            lat: 39.6953,
            lng: 3.0176
          }} zoom={6} maptype="satellite" />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Yachtcharter Mallorca: Segeln auf der Königin der Balearen</h2>
              <p className="text-xl text-muted-foreground">
                Entdecken Sie Mallorcas Küstenvielfalt vom Wasser aus
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Mallorca, die größte der Baleareninseln, ist das wichtigste Charterziel in Spanien und ein Segelrevier von Weltklasse. Die Insel bietet eine unglaubliche Vielfalt an Landschaften - von den majestätischen Bergen der Serra de Tramuntana im Westen bis zu den weiten Sandstränden im Osten und Süden.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Palma de Mallorca - Die Charterbasis Nr. 1</h3>
              <p className="mb-6">
                Die meisten Yachtcharter auf Mallorca beginnen in der Inselhauptstadt Palma. Die Stadt verfügt über mehrere erstklassige Marinas wie die Marina Palma, Real Club Náutico de Palma und Port de Mallorca mit breiter Auswahl an Charteryachten. Palma selbst ist eine pulsierende Metropole mit beeindruckender Kathedrale, charmanten Gassen und exquisiten Restaurants.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Weitere Ausgangshäfen</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Port d'Andratx:</strong> Malerischer Naturhafen im Südwesten, bekannt für exklusives Flair und hervorragende Fischrestaurants.</li>
                <li><strong>Portocolom:</strong> Idyllischer Naturhafen an der Ostküste mit entspannter Atmosphäre.</li>
                <li><strong>Alcúdia:</strong> Idealer Startpunkt im Norden, um die nördliche Küste und Cap Formentor zu erkunden.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Mallorcas 200+ Traumhafte Buchten</h3>
              <p className="mb-4">
                Mallorca ist berühmt für seine über 200 Buchten und Strände, die von feinen Sandstränden bis zu felsigen Calas reichen:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Südwesten</h4>
                    <p className="text-sm text-gray-600">Exklusive Buchten wie Cala Llamp oder Cala Marmassen.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Westküste (Tramuntana)</h4>
                    <p className="text-sm text-gray-600">Dramatische Felsformationen, Cala Deià, Cala Tuent.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Südküste</h4>
                    <p className="text-sm text-gray-600">Es Trenc mit karibischem Flair, Cala Pi.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Ostküste</h4>
                    <p className="text-sm text-gray-600">Cala Varques, Cala Mitjana, Cala d'Or mit türkisfarbenem Wasser.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="my-8">
                <img src="/lovable-uploads/a3c45dc2-70f0-4ef8-965b-c96e9db59319.png" alt="Leuchtturm am Cap de ses Salines - südlichster Punkt Mallorcas" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
                <p className="text-center text-sm text-gray-600 mt-2 italic">
                  Der Leuchtturm am Cap de ses Salines ist ein markanter Wegweiser beim Rund-Mallorca-Törn
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Nautische Highlights</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Cabrera Nationalpark:</strong> Geschützter Archipel südlich von Mallorca mit kristallklarem Wasser (Genehmigung erforderlich).</li>
                <li><strong>Cap Formentor:</strong> Spektakuläre Nordspitze mit dramatischen Klippen und Leuchtturm.</li>
                <li><strong>Serra de Tramuntana:</strong> UNESCO-Welterbe mit beeindruckender Bergkulisse entlang der Westküste.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wind & Wetter</h3>
              <p className="mb-4">
                Mediterran mit heißen Sommern und milden Wintern. Segelsaison von April bis Oktober. Im Sommer dominieren thermische Winde (3-4 Bft). Die idealen Monate sind Mai, Juni und September - angenehme Temperaturen ohne Hochsaison-Trubel.
              </p>
            </div>
          </div>

          {/* Ports */}
          

          {/* Highlights */}
          

          {/* CTA */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Bereit für Mallorca?
              </h3>
              <p className="mb-6 text-blue-100">
                Entdecken Sie die Königin der Balearen mit ihren über 200 Traumhafte Buchten und exzellenten Marinas.
              </p>
              <CharterRequestForm>
                <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                  Mallorca Charter anfragen
                </Button>
              </CharterRequestForm>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default Mallorca;