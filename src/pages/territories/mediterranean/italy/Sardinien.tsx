import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Sardinien = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Westliches Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Costa Smeralda" }
  ];

  const cities = [
    "Alghero",
    "Cagliari", 
    "Cannigione",
    "Carloforte",
    "Costa Smeralda",
    "Olbia",
    "Portisco",
    "Porto Rotondo"
  ];

  const highlights = [
    "Smaragdgrünes, kristallklares Wasser",
    "Exklusive Costa Smeralda",
    "Unberührte Strände und Buchten",
    "Excellente Marina-Infrastruktur",
    "Vielfältige Küstenlandschaften",
    "Authentische sardische Kultur",
    "Kurze Distanzen zwischen Häfen",
    "Perfekte Windverhältnisse",
    "Ganzjährig mildes Klima"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img 
          src="/lovable-uploads/9ed7e340-fa6c-4e80-a817-0f19eda7e395.png" 
          alt="Sardinien - Türkisfarbenes Wasser und grüne Küstenlandschaft" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇮🇹 Italien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sardinien</h1>
            <p className="text-xl max-w-2xl">
              Smaragdgrünes Paradies im Mittelmeer
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer/italien" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Italien
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
                <BreadcrumbPage>Sardinien</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="hidden md:grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6 text-center">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Territory Map */}
        <div className="mb-12">
          <TerritoryMap
            region="Sardinien"
            center={{ lat: 40.8518, lng: 9.6116 }}
            zoom={8}
            markers={[
              { lat: 40.9216, lng: 9.5034, name: "Olbia" },
              { lat: 41.1325, lng: 9.5142, name: "Porto Cervo" },
              { lat: 41.1074, lng: 9.4902, name: "Portisco" },
              { lat: 41.0567, lng: 9.5019, name: "Cannigione" },
              { lat: 41.2144, lng: 9.4068, name: "La Maddalena" },
              { lat: 39.2238, lng: 9.1217, name: "Cagliari" },
              { lat: 39.1433, lng: 8.3099, name: "Carloforte" },
              { lat: 40.5645, lng: 8.3206, name: "Alghero" }
            ]}
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Yachtcharter Sardinien: Segeln an der Costa Smeralda & im La Maddalena Archipel</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Willkommen in einem der berühmtesten und atemberaubendsten Segelreviere der Welt. Ein Yachtcharter auf Sardinien ist nicht einfach nur ein Urlaub – es ist der Inbegriff des mediterranen Traums. Hier trifft karibisches Flair auf europäische Eleganz, unberührte Natur auf luxuriöse Marinas und sportliches Segeln auf entspanntes Dolce Vita. Vor allem der Norden der Insel mit der legendären Costa Smeralda und dem La Maddalena Archipel ist ein Magnet für Segler aus aller Welt.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Stellen Sie sich vor, Sie navigieren Ihre Yacht durch ein Meer, dessen Farben von tiefem Smaragdgrün bis zu leuchtendem Türkisblau changieren. Sie passieren bizarre, von Wind und Wetter geformte Granitfelsen, die wie Skulpturen aus dem Wasser ragen, und werfen Anker in Buchten mit Puderzuckerstränden, die Sie sonst nur aus Hochglanzmagazinen kennen.
              </p>
              
              {/* Stranderlebnis Bild */}
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/57b6c045-a49a-4111-9dbe-7cab4456fec9.png" 
                  alt="Paar entspannt am türkisfarbenen Strand von Sardinien mit kristallklarem Wasser und Segelbooten im Hintergrund" 
                  className="w-full h-auto object-cover max-h-96 md:max-h-[500px]"
                />
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Sardinien ist ein Revier der Kontraste: Es bietet die glamouröse Welt des internationalen Jet-Sets in Porto Cervo, die raue, seemännische Herausforderung in der Straße von Bonifacio und die unberührte, authentische Schönheit im Süden der Insel. Ob Sie mit einer eleganten Segelyacht die Küste erkunden oder auf einem geräumigen Katamaran von Bucht zu Bucht hüpfen – Sardinien wird Sie mit seiner unvergleichlichen Schönheit in den Bann ziehen.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Der glamouröse Norden: Costa Smeralda und das La Maddalena Archipel</h3>
              <p className="text-lg text-gray-600 mb-6">
                Der Nordosten Sardiniens ist das pulsierende Herz des Yachtsports im Mittelmeer. Von unseren bestens gelegenen Charterbasen in Olbia, Portisco oder Cannigione starten Sie direkt in dieses Segelparadies, das für jeden Anspruch das Richtige bietet. <Link to="/reviere/mittelmeer/italien/sardinien/costa-smeralda" className="text-blue-600 hover:text-blue-800 underline font-medium">Erfahren Sie mehr über das exklusive Segelrevier Costa Smeralda.</Link>
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Die Costa Smeralda – Wo Luxus auf Natur trifft</h4>
              <p className="text-base text-gray-600 mb-4">
                Die „Smaragdküste" macht ihrem Namen alle Ehre. In den 1960er Jahren von Prinz Karim Aga Khan als exklusives Refugium entwickelt, ist sie heute ein Synonym für Luxus, Stil und unvergleichliche Naturschönheit. Ein Törn entlang dieses Küstenabschnitts ist ein Erlebnis für sich. <Link to="/reviere/mittelmeer/italien/sardinien/costa-smeralda" className="text-blue-600 hover:text-blue-800 underline font-medium">Entdecken Sie alle Details zur Costa Smeralda.</Link>
              </p>
              
              <p className="text-base text-gray-600 mb-4">Die Marinas hier gehören zu den berühmtesten der Welt:</p>
              <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
                <li><strong>Porto Cervo:</strong> Das unbestrittene Zentrum der Costa Smeralda. Die von Stararchitekt Luigi Vietti entworfene Marina ist ein Meisterwerk, das sich harmonisch in die Landschaft einfügt. Hier liegen die Superyachten der Welt vor Anker, und in den Gassen des Ortes finden sich die Boutiquen aller großen Designer. <Link to="/reviere/mittelmeer/italien/sardinien/costa-smeralda" className="text-blue-600 hover:text-blue-800 underline text-sm">Mehr zur Costa Smeralda →</Link></li>
                <li><strong>Porto Rotondo:</strong> Nicht weniger elegant, besticht dieser Hafen durch seine kreisrunde Anlage und die lebhafte Piazzetta. Auch hier trifft sich die Welt, um das einzigartige Flair zu genießen.</li>
                <li><strong>Poltu Quatu:</strong> Der „versteckte Hafen" liegt in einem fjordähnlichen Einschnitt und bietet eine intimere, aber ebenso luxuriöse Atmosphäre.</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Das La Maddalena Archipel – Ein Nationalpark von Weltrang</h4>
              <p className="text-base text-gray-600 mb-4">
                Nur wenige Seemeilen nördlich der Costa Smeralda beginnt das nautische Herzstück des Reviers: das La Maddalena Archipel. Dieser Nationalpark besteht aus über 60 Inseln und Felsen und ist ein wahres Paradies für Segler. Hier finden Sie unzählige, perfekt geschützte Ankerplätze. <Link to="/reviere/mittelmeer/italien/sardinien/costa-smeralda" className="text-blue-600 hover:text-blue-800 underline font-medium">Lesen Sie mehr über das La Maddalena Archipel und die Costa Smeralda.</Link>
              </p>
              
              {/* Küstenlandschaft mit Turm */}
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/dec3e030-3572-47d6-8aec-cb5e616c181e.png" 
                  alt="Luftaufnahme der sardischen Küste mit historischem Wachturm auf Klippe und türkisfarbenem Meer, typisch für das La Maddalena Archipel" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
                <li><strong>Spargi:</strong> Berühmt für ihre Buchten an der Ostküste wie die Cala Corsara, umgeben von beeindruckenden Granitformationen.</li>
                <li><strong>Budelli:</strong> Bekannt für den legendären „Spiaggia Rosa", den rosa Strand, dessen Betreten heute zum Schutz streng reglementiert ist. Doch auch die umliegenden Ankerplätze sind von atemberaubender Schönheit.</li>
                <li><strong>Caprera:</strong> Die Insel von Nationalheld Giuseppe Garibaldi ist grüner und bewaldeter. Sie bietet nicht nur fantastische Buchten, sondern auch die Möglichkeit, Garibaldis ehemaliges Wohnhaus zu besichtigen.</li>
                <li><strong>La Maddalena:</strong> Die gleichnamige Hauptinsel beherbergt das einzige Städtchen des Archipels mit einem charmanten Hafen und lebhaften Gassen.</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Ein Abstecher ins Abenteuer: Die Straße von Bonifacio</h4>
              <p className="text-base text-gray-600 mb-6">
                Für erfahrene Skipper ist die Überquerung der Straße von Bonifacio ein absolutes Highlight. Diese etwa 12 Kilometer breite Meerenge zwischen Sardinien (Italien) und Korsika (Frankreich) ist für ihre anspruchsvollen Windbedingungen bekannt. Der hier durch den Düseneffekt oft verstärkte Maestrale (Mistral) sorgt für packendes Segeln. Der Lohn ist die Ankunft in Bonifacio, einem der spektakulärsten Naturhäfen des Mittelmeers.
              </p>
              
              {/* Granitfelsen bei Sonnenuntergang */}
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/f90003bc-6e22-4a6e-a0d9-02d53b9b730c.png" 
                  alt="Blick durch beeindruckende Granitfelsen auf die sardische Küstenlandschaft bei goldenem Sonnenlicht, charakteristisch für die Region" 
                  className="w-full h-auto object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Der ursprüngliche Süden: Von Cagliari nach Carloforte</h3>
              <p className="text-base text-gray-600 mb-4">
                Während der Norden für seinen Glamour bekannt ist, bietet der Süden Sardiniens ein authentischeres und oft ruhigeres Segelerlebnis. Die Küsten sind hier weitläufiger, geprägt von langen Sandstränden und einer entspannten Atmosphäre.
              </p>
              
              <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
                <li><strong>Cagliari:</strong> Die pulsierende Hauptstadt Sardiniens ist ein idealer Ausgangspunkt für Törns entlang der Südküste. Die moderne Marina liegt direkt vor der historischen Altstadt „Castello".</li>
                <li><strong>Carloforte:</strong> Diese Charterbasis hat einen ganz besonderen Reiz. Sie liegt auf der Insel San Pietro im Südwesten. Der Ort wurde von ligurischen Fischern gegründet, und bis heute wird hier ein alter genuesischer Dialekt gesprochen.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Wind, Wetter und navigatorische Hinweise</h3>
              <p className="text-base text-gray-600 mb-4">
                Sardinien ist ein Revier, das seemännisches Verständnis belohnt. Der vorherrschende Wind ist der Maestrale (Mistral) aus Nordwest. Er bringt klaren Himmel und fantastische Segelbedingungen, kann aber besonders in der Straße von Bonifacio schnell an Stärke zunehmen.
              </p>
              
              <p className="text-base text-gray-600 mb-6">
                <strong>Beste Reisezeit:</strong> Wie in vielen Mittelmeerrevieren sind Mai, Juni und September die idealen Monate. Das Wetter ist warm und stabil, die Winde sind zuverlässig, und die Hauptsaison-Massen sind noch nicht oder nicht mehr da.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Fazit: Sardinien – Ein Segelrevier der Superlative</h3>
              <p className="text-base text-gray-600 mb-6">
                Ein Yachtcharter auf Sardinien bietet eine Vielfalt, die ihresgleichen sucht. Es ist die Freiheit, zwischen einem glamourösen Abend in Porto Cervo und einer stillen Nacht unter dem Sternenhimmel in einer einsamen Bucht zu wählen. Es ist die Kombination aus anspruchsvollem Segeln und entspanntem Badeurlaub. Es ist die Begegnung mit einer der spektakulärsten Küstenlandschaften Europas.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Costa Smeralda Link */}
        <div className="mb-12">
          <Card className="shadow-lg border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Costa Smeralda</h3>
                  <p className="text-gray-600 mb-4">
                    Entdecken Sie das exklusivste Segelrevier Sardiniens mit seinen weltberühmten Marinas und dem La Maddalena Archipel.
                  </p>
                </div>
                <Link to="/reviere/mittelmeer/italien/sardinien/costa-smeralda">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Mehr erfahren
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Harbors & Ports */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Häfen & Marinas</h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {cities.map((city, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Sardinien?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="font-medium text-gray-800">{highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für das sardische Paradies?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das smaragdgrüne Wasser Sardiniens und erleben Sie italienisches 
              Dolce Vita in einer der schönsten Segelregionen des Mittelmeers.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sardinien;