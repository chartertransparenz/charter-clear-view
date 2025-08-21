import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CostaSmeralda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Nordost-Sardinien" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Luxus-Segler" },
    { icon: Anchor, label: "Besonderheit", value: "Porto Cervo" }
  ];

  const marinas = [
    "Porto Cervo",
    "Portisco", 
    "Porto Rotondo",
    "Poltu Quatu",
    "Cannigione",
    "Olbia"
  ];

  const highlights = [
    "Weltberühmte Costa Smeralda",
    "Exklusive Marinas und Yachthäfen",
    "La Maddalena Archipel",
    "Kristallklares, smaragdgrünes Wasser",
    "Luxuriöse Boutiquen und Restaurants",
    "Spektakuläre Granitformationen",
    "Internationale Jet-Set Atmosphäre",
    "Perfekte Ankerplätze",
    "Erstklassige nautische Infrastruktur"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-emerald-500 text-white">🇮🇹 Costa Smeralda</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Costa Smeralda</h1>
            <p className="text-xl max-w-2xl">
              Das Smaragdparadies Sardiniens
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer/italien/sardinien" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Sardinien
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
                  <Link to="/reviere/mittelmeer/italien">Italien</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer/italien/sardinien">Sardinien</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Costa Smeralda</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6 text-center">
                <fact.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Yachtcharter Costa Smeralda: Segeln im Smaragdparadies Sardiniens</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Willkommen in einem der exklusivsten und atemberaubendsten Segelreviere der Welt. Ein Yachtcharter an der Costa Smeralda ist nicht einfach nur ein Urlaub – es ist der Inbegriff des mediterranen Traums. Hier trifft karibisches Flair auf europäische Eleganz, unberührte Natur auf luxuriöse Marinas und sportliches Segeln auf entspanntes Dolce Vita. Der Nordosten Sardiniens mit der legendären Costa Smeralda und dem La Maddalena Archipel ist ein Magnet für Segler aus aller Welt.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Stellen Sie sich vor, Sie navigieren Ihre Yacht durch ein Meer, dessen Farben von tiefem Smaragdgrün bis zu leuchtendem Türkisblau changieren. Sie passieren bizarre, von Wind und Wetter geformte Granitfelsen, die wie Skulpturen aus dem Wasser ragen, und werfen Anker in Buchten mit Puderzuckerstränden, die Sie sonst nur aus Hochglanzmagazinen kennen.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Die Costa Smeralda: Wo Luxus auf Natur trifft</h3>
              <p className="text-lg text-gray-600 mb-6">
                Die „Smaragdküste" macht ihrem Namen alle Ehre. In den 1960er Jahren von Prinz Karim Aga Khan als exklusives Refugium entwickelt, ist sie heute ein Synonym für Luxus, Stil und unvergleichliche Naturschönheit. Ein Törn entlang dieses Küstenabschnitts ist ein Erlebnis für sich.
              </p>

              <p className="text-base text-gray-600 mb-4">
                Die bestens gelegenen Charterbasen in Olbia, Portisco oder Cannigione sind der ideale Startpunkt für Ihren Törn. Die Marinas hier gehören zu den berühmtesten der Welt:
              </p>

              <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
                <li><strong>Porto Cervo:</strong> Das unbestrittene Zentrum der Costa Smeralda. Die von Stararchitekt Luigi Vietti entworfene Marina ist ein Meisterwerk, das sich harmonisch in die Landschaft einfügt. Hier liegen die Superyachten der Welt vor Anker, und in den Gassen des Ortes finden sich die Boutiquen aller großen Designer.</li>
                <li><strong>Portisco:</strong> Eine moderne und umfassend ausgestattete Marina, die einen hervorragenden Service bietet und strategisch günstig zwischen Olbia und Porto Cervo liegt.</li>
                <li><strong>Poltu Quatu:</strong> Der „versteckte Hafen" liegt in einem fjordähnlichen Einschnitt und bietet eine intimere, aber ebenso luxuriöse Atmosphäre.</li>
              </ul>

              <p className="text-base text-gray-600 mb-6">
                Doch der wahre Luxus der Costa Smeralda ist die Natur selbst. Zwischen den mondänen Häfen finden Sie weltberühmte Buchten wie die Cala di Volpe oder den Liscia Ruja Strand, die mit ihrem kristallklaren Wasser und feinen Sand zum Ankern und Baden einladen.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Das Kronjuwel: Das La Maddalena Archipel – Ein Paradies für Segler</h3>
              <p className="text-base text-gray-600 mb-4">
                Nur wenige Seemeilen nördlich der Costa Smeralda beginnt das nautische Herzstück des Reviers: das La Maddalena Archipel. Dieser Nationalpark besteht aus über 60 Inseln und Felsen und ist ein wahres Paradies für Segler. Hier finden Sie unzählige, perfekt geschützte Ankerplätze.
              </p>

              <p className="text-base text-gray-600 mb-4">
                Die Schönheit der Natur ist hier überwältigend. Wind und Wetter haben über Jahrtausende bizarre Granitformationen geschaffen, die wie von Künstlerhand geformt aussehen. Dazwischen liegen unzählige Buchten mit feinstem weißen Sand und Wasser, das so klar ist, dass die Yachten über dem Meeresgrund zu schweben scheinen.
              </p>

              <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
                <li><strong>Spargi:</strong> Berühmt für ihre Buchten an der Ostküste wie die Cala Corsara, umgeben von beeindruckenden Granitformationen.</li>
                <li><strong>Budelli:</strong> Bekannt für den legendären „Spiaggia Rosa", den rosa Strand. Auch die umliegenden Ankerplätze sind von atemberaubender Schönheit.</li>
                <li><strong>Caprera:</strong> Die Insel von Nationalheld Giuseppe Garibaldi ist grüner und bewaldeter. Hier liegt eine der berühmtesten Buchten des Mittelmeers: die Cala Coticcio, auch bekannt als „Tahiti", wegen ihres unglaublich türkisfarbenen Wassers.</li>
                <li><strong>La Maddalena:</strong> Die gleichnamige Hauptinsel beherbergt das einzige Städtchen des Archipels mit einem charmanten Hafen und lebhaften Gassen.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Fazit: Sardinien – Ein Segelrevier der Superlative</h3>
              <p className="text-base text-gray-600 mb-6">
                Ein Yachtcharter an der Costa Smeralda bietet eine Vielfalt, die ihresgleichen sucht. Es ist die Freiheit, zwischen einem glamourösen Abend in Porto Cervo und einer stillen Nacht unter dem Sternenhimmel in einer einsamen Bucht zu wählen. Es ist die Kombination aus anspruchsvollem Segeln und entspanntem Badeurlaub. Es ist die Begegnung mit einer der spektakulärsten Küstenlandschaften Europas.
              </p>

              <p className="text-base text-gray-600 mb-6">
                Sind Sie bereit für das Segelabenteuer Ihres Lebens an den Smaragdküsten Sardiniens?
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Harbors & Ports */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Exklusive Marinas & Häfen</h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
            {marinas.map((marina, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-gray-800">{marina}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Costa Smeralda?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <p className="font-medium text-gray-800">{highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für das Smaragdparadies?
            </h3>
            <p className="mb-6 text-emerald-100">
              Erleben Sie das exklusivste Segelrevier des Mittelmeers und entdecken Sie 
              die legendäre Costa Smeralda vom Deck Ihrer Yacht aus.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50" size="lg">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CostaSmeralda;