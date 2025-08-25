
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import destinationSpain from "@/assets/destination-spain.jpg";

const Spain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Westliches Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "Ganzjährig" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Vielfältige Reviere" }
  ];

  const regions = [
    {
      name: "Balearen",
      link: "/reviere/mittelmeer/spanien/balearen",
      description: "Mallorca, Menorca, Ibiza und Formentera - Spaniens Segelparadies",
      cities: ["Palma de Mallorca", "Ibiza", "Mahón", "Sant Antoni"]
    }
  ];

  const highlights = [
    "Ganzjähriges Segelklima",
    "Weltklasse Marina-Infrastruktur",
    "Kurze Distanzen zwischen Inseln",
    "Lebendige Kultur und Nachtleben",
    "Exzellente spanische Küche",
    "Familienfreundliche Reviere",
    "Perfekte Segelbedingungen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/51017cc9-4751-4d75-a64a-388f2babb4dc.png"
          alt="Spanien Mittelmeer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇪🇸 Spanien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Spanien</h1>
            <p className="text-xl max-w-2xl">
              Mediterrane Leidenschaft und perfekte Segelbedingungen
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Mittelmeer
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
                <BreadcrumbPage>Spanien</BreadcrumbPage>
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

        {/* Google Maps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Spanische Mittelmeerküste</h2>
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1574403.4089999856!2d5.896745!3d40.9103314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sde!4v1703123456789!5m2!1sen!2sde&z=5"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
              title="Spanische Mittelmeerküste"
            ></iframe>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Yachtcharter Spanien: Ihr Traumtörn zwischen Balearen-Glamour, Atlantik-Abenteuer und Costa Brava-Charme</h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Spanien – ein Land, das mit seiner unvergleichlichen Lebensfreude, seiner reichen Kultur und seiner atemberaubenden Vielfalt begeistert. Doch Spanien ist auch ein Seglerparadies par excellence, das mit Tausenden von Kilometern Küstenlinie und einem beeindruckenden Spektrum an Revieren lockt. Ein Yachtcharter in Spanien ist eine Einladung, dieses facettenreiche Land von seiner schönsten Seite zu entdecken: vom Wasser aus.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              Von den sonnenverwöhnten Buchten der Balearen über die wilden Küsten der Costa Brava bis hin zu den passatwindverwöhnten Inseln der Kanaren im Atlantik – Spanien bietet für jeden Geschmack und jede Erfahrungsstufe das passende Segelabenteuer. Kristallklares Wasser, berühmte Strände, exzellente Marinas, charmante Altstädte und eine einzigartige Mischung aus Glamour und entspanntem Lebensgefühl erwarten Sie. Tauchen Sie ein in die spanische Lebensart und lassen Sie sich von der Freiheit des Meeres verzaubern.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Unser Hauptfokus liegt auf den Balearen, die mit ihrer mediterranen Schönheit und ihrer hervorragenden Infrastruktur das Herzstück des spanischen Yachtcharters bilden. Insbesondere Mallorca, die größte der Inseln, ist ein zentraler Dreh- und Angelpunkt für unvergessliche Segeltörns.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Die Balearen: Das Herzstück des mediterranen Segelns</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Die Balearen – Mallorca, Ibiza, Menorca und Formentera – sind der Inbegriff des mediterranen Segeltraums. Sie bieten eine perfekte Kombination aus beständigen Sommerwinden, einer hervorragenden Infrastruktur und unzähligen Möglichkeiten für unvergessliche Landgänge. Jede Insel hat ihren eigenen, unverwechselbaren Charakter und lädt dazu ein, entdeckt zu werden.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mallorca: Die Königin der Balearen – Ihr zentraler Dreh- und Angelpunkt</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Mallorca, die größte der Baleareninseln, ist das wichtigste Charterziel in Spanien und das aus gutem Grund. Die Insel bietet eine schier unglaubliche Vielfalt an Landschaften, von den majestätischen Bergen der Serra de Tramuntana im Westen bis zu den weiten Sandstränden im Osten und Süden.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">Ihre Ausgangsbasen auf Mallorca:</h4>
            <p className="text-lg text-gray-600 mb-4">
              Die meisten Yachtcharter auf Mallorca beginnen in der Inselhauptstadt Palma. Die Stadt verfügt über mehrere erstklassige Marinas, darunter die Marina Palma, Real Club Náutico de Palma und Port de Mallorca, die eine ausgezeichnete Infrastruktur und eine breite Auswahl an Charteryachten bieten. Palma selbst ist eine pulsierende Metropole mit einer beeindruckenden Kathedrale, charmanten Gassen, exquisiten Restaurants und einem lebhaften Nachtleben.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h5 className="font-semibold text-gray-800 mb-3">Weitere beliebte Ausgangshäfen sind:</h5>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Port d'Andratx:</strong> Ein malerischer Naturhafen im Südwesten, bekannt für sein exklusives Flair und seine hervorragenden Fischrestaurants.</li>
                <li><strong>Portocolom:</strong> Ein idyllischer Naturhafen an der Ostküste, der eine entspannte Atmosphäre bietet und ein guter Ausgangspunkt für die Erkundung der südöstlichen Buchten ist.</li>
                <li><strong>Alcúdia:</strong> Im Norden der Insel gelegen, ist Alcúdia ein idealer Startpunkt, um die nördliche Küste und das Cap Formentor zu erkunden.</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">Chartermöglichkeiten auf Mallorca:</h4>
            <p className="text-lg text-gray-600 mb-4">Die Auswahl an Charteryachten auf Mallorca ist riesig und deckt jeden Bedarf ab:</p>
            
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Segelyachten (Monohulls):</strong> Von sportlichen Performance-Yachten bis zu komfortablen Fahrtenyachten, ideal für klassisches Segelvergnügen.</li>
              <li><strong>Katamarane:</strong> Perfekt für Familien und Gruppen, die Wert auf viel Platz, Stabilität und Komfort legen. Katamarane eignen sich hervorragend für das Ankern in flachen Buchten.</li>
              <li><strong>Motoryachten:</strong> Für alle, die schnell von Bucht zu Bucht wechseln und in kurzer Zeit viele Highlights sehen möchten.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">Die Vielfalt der Buchten und Strände:</h4>
            <p className="text-lg text-gray-600 mb-4">
              Mallorca ist berühmt für seine über 200 Buchten und Strände, die von feinen Sandstränden bis zu felsigen Calas reichen.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Südwesten</h5>
                <p className="text-sm text-gray-600">Exklusive Buchten wie die Cala Llamp oder die Cala Marmassen.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Westküste (Serra de Tramuntana)</h5>
                <p className="text-sm text-gray-600">Dramatische Felsformationen und kleine, oft nur vom Meer aus zugängliche Buchten wie die Cala Deià oder die Cala Tuent.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Südküste</h5>
                <p className="text-sm text-gray-600">Weite Sandstrände wie Es Trenc mit karibischem Flair und geschützte Buchten wie die Cala Pi.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Osten</h5>
                <p className="text-sm text-gray-600">Zahlreiche Calas mit türkisfarbenem Wasser, ideal zum Ankern und Schwimmen, z.B. Cala Varques, Cala Mitjana oder die Cala d'Or.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Die anderen Balearen: Ibiza, Menorca und Formentera</h3>
            
            <p className="text-lg text-gray-600 mb-6">
              Jede der anderen Baleareninseln hat ihren eigenen Reiz und ist ein lohnendes Ziel für einen Yachtcharter.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Ibiza: Die weiße Insel mit vielen Facetten</h4>
                <p className="text-gray-600 mb-3">
                  Ibiza ist weltberühmt für sein pulsierendes Nachtleben, aber die Insel hat auch eine überraschend ruhige und natürliche Seite.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li><strong>Besonderheiten:</strong> Neben den berühmten Beach Clubs und Diskotheken bietet Ibiza unzählige wunderschöne Buchten mit türkisblauem Wasser, Pinienwäldern und charmanten Dörfern. Die Altstadt von Ibiza-Stadt (Dalt Vila) ist UNESCO-Weltkulturerbe.</li>
                  <li><strong>Ankerplätze:</strong> Beliebte Ankerplätze sind die Cala Salada, Cala Conta für spektakuläre Sonnenuntergänge, oder die ruhigere Cala Jondal.</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Formentera: Die Karibik des Mittelmeers</h4>
                <p className="text-gray-600 mb-3">
                  Formentera ist die kleinste bewohnte Baleareninsel und ein wahres Naturparadies.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li><strong>Besonderheiten:</strong> Bekannt für ihre puderzuckerweißen Strände und das unglaublich klare, türkisfarbene Wasser, das an die Karibik erinnert. Die Insel ist flach und ideal zum Radfahren.</li>
                  <li><strong>Ankerplätze:</strong> Die Playa de Ses Illetes ist ein ikonischer Ankerplatz, aber auch die Cala Saona oder die Bucht von Es Pujols sind sehr beliebt.</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Menorca: Die ruhige Schönheit</h4>
                <p className="text-gray-600 mb-3">
                  Menorca ist die östlichste und zweitgrößte Baleareninsel, bekannt für ihre unberührte Natur und ihre entspannte Atmosphäre.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li><strong>Besonderheiten:</strong> Menorca wurde von der UNESCO zum Biosphärenreservat erklärt und bietet eine Fülle von unberührten Stränden (Calas) und eine reiche Flora und Fauna.</li>
                  <li><strong>Ankerplätze:</strong> Die Südküste Menorcas ist gesäumt von atemberaubenden Calas wie Cala Macarella, Cala Mitjana oder Cala Turqueta.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Wind- und Wetterbedingungen auf den Balearen</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Das Klima auf den Balearen ist typisch mediterran mit heißen, trockenen Sommern und milden Wintern. Die Segelsaison erstreckt sich von April bis in den späten Oktober.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Wind- und Wetterbedingungen:</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Sommerwinde:</strong> Im Sommer dominieren thermische Winde (Land- und Seebrisen), die tagsüber für moderate und zuverlässige Segelbedingungen (3-4 Bft) sorgen und nachts oft einschlafen.</li>
                <li><strong>Tramontana:</strong> Ein Nordwind, der vor allem in den Übergangszeiten (Frühling, Herbst) kräftiger auftreten kann, besonders an der Nordküste Mallorcas und Menorcas.</li>
                <li><strong>Beste Reisezeit:</strong> Die idealen Monate für einen Yachtcharter auf den Balearen sind Mai, Juni und September. Im Juli und August ist Hochsaison mit sehr hohen Temperaturen und maximalem Andrang.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Costa Brava: Wilde Küste im Nordosten Spaniens</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Die Costa Brava, die „wilde Küste", erstreckt sich im Nordosten Spaniens von Blanes bis zur französischen Grenze. Sie ist ein abwechslungsreiches, wenn auch kleineres Charterrevier, das sich durch seine felsige Küste, tief eingeschnittene Buchten und die Nähe zu Barcelona auszeichnet.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Die Kanaren: Segelabenteuer im ewigen Frühling</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Die Kanarischen Inseln, im Atlantik vor der Küste Afrikas gelegen, bieten ein ganzjährig mildes Klima und sind ein Paradies für Segler, die das sportliche Segeln lieben und das Spiel mit den Elementen suchen.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-800 mb-3">Besonderheiten des Segelns auf den Kanaren:</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Passatwinde:</strong> Die Kanaren sind berühmt für ihre beständigen Nordost-Passatwinde, die für hervorragende Segelbedingungen sorgen.</li>
                <li><strong>Tidenhub:</strong> Im Gegensatz zum Mittelmeer gibt es hier einen spürbaren Tidenhub, der bei der Törnplanung berücksichtigt werden muss.</li>
                <li><strong>Anspruchsvollere See:</strong> Der Atlantik kann rauer sein als das Mittelmeer, was das Revier für erfahrene Skipper besonders reizvoll macht.</li>
                <li><strong>Vulkanische Landschaften:</strong> Die Inseln sind vulkanischen Ursprungs und bieten spektakuläre, oft mondähnliche Landschaften.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fazit: Spanien – Ein Segeltraum für jeden Anspruch</h3>
            
            <p className="text-lg text-gray-600 mb-6">
              Ein Yachtcharter in Spanien ist ein Versprechen für einen unvergesslichen Urlaub. Ob Sie das glamouröse Flair der Balearen suchen, die unberührte Natur der Costa Brava erleben möchten oder das Abenteuer der Kanarischen Inseln bevorzugen – Spanien bietet eine unvergleichliche Vielfalt an Segelrevieren. Die Kombination aus vielseitigen Segelbedingungen, traumhaften Landschaften, spanischer Gastfreundschaft und einer modernen maritimen Infrastruktur macht jeden Törn zu einem Fest für die Sinne.
            </p>

            <p className="text-lg text-gray-600 font-semibold">
              Sind Sie bereit, die Segel zu setzen und Spanien vom Wasser aus zu entdecken?
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Karte der Region</h2>
          <div className="max-w-4xl mx-auto">
            <TerritoryMap
              region="Spain"
              center={{ lat: 39.5, lng: 1.5 }}
              zoom={6}
              maptype="satellite"
              className="h-96 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full max-w-2xl mx-auto">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    {region.cities && (
                      <div className="grid grid-cols-2 gap-2">
                        {region.cities.map((city, idx) => (
                          <div key={idx} className="text-sm text-blue-600 font-medium">
                            • {city}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
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

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Häufig gestellte Fragen (FAQ) zum Yachtcharter in Spanien</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="windverhaeltnisse-costa-brava-balearen">
                <AccordionTrigger>Wie sind die Windbedingungen an der Costa Brava und auf den Balearen?</AccordionTrigger>
                <AccordionContent>
                  Im Sommer herrschen meist ruhige, thermische Winde, optimal für entspannte Törns. Im Frühjahr und Herbst können die Winde kräftiger und anspruchsvoller werden.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="liegeplaetze-sicherheit">
                <AccordionTrigger>Wie finde ich sichere Liegeplätze an der Costa Brava und auf den Balearen?</AccordionTrigger>
                <AccordionContent>
                  Die Marinas und Häfen entlang der Küste und auf den Inseln bieten moderne Infrastruktur, sichere Liegeplätze und umfassenden Service für Chartercrews. Eine frühzeitige Reservierung in der Hochsaison ist ratsam.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="nautische-besonderheiten-kanaren">
                <AccordionTrigger>Welche nautischen Besonderheiten gibt es auf den Kanaren?</AccordionTrigger>
                <AccordionContent>
                  Die Kanaren zeichnen sich durch stärkere Atlantikwinde (Passatwinde), Tidenhub und herausfordernde Seegangsverhältnisse aus. Die vulkanische Küste bietet außergewöhnliche Ankerplätze und Naturlandschaften.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="segelscheine-spanien">
                <AccordionTrigger>Welche Segelscheine werden für eine Bareboat-Charter in Spanien benötigt?</AccordionTrigger>
                <AccordionContent>
                  Für Spanien gilt in der Regel der Sportbootführerschein See (SBF See). Für größere Yachten oder komplexere Reviere kann der Sportküstenschifferschein (SKS) oder ein international anerkanntes Zertifikat wie der ICC erforderlich sein. Ein Funkzeugnis (SRC/LRC) ist ebenfalls Pflicht.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="segelerfahrung-kanaren">
                <AccordionTrigger>Wie viel Segelerfahrung brauche ich für die Kanaren?</AccordionTrigger>
                <AccordionContent>
                  Auf den Kanaren empfiehlt sich Erfahrung mit Atlantikbedingungen, Tiden und längeren Überfahrten; das Revier ist ideal für fortgeschrittene Skipper.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="beste-reisezeit">
                <AccordionTrigger>Wann ist die beste Reisezeit für Yachtcharter Spanien?</AccordionTrigger>
                <AccordionContent>
                  Für die Costa Brava und Balearen ist die beste Reisezeit von April bis Oktober. Für die Kanaren ist die Saison ganzjährig, mit den besten Bedingungen von November bis April.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="haefen-marinas-ausbau">
                <AccordionTrigger>Wie gut sind die Häfen und Marinas auf den Inseln ausgebaut?</AccordionTrigger>
                <AccordionContent>
                  Die Häfen und Marinas auf den Balearen und Kanaren sind sehr gut ausgebaut und bieten umfassenden Service. Auch an der Costa Brava finden sich moderne Einrichtungen.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="proviantierung">
                <AccordionTrigger>Wie sieht es mit den Proviantierungsmöglichkeiten unterwegs aus?</AccordionTrigger>
                <AccordionContent>
                  In Spanien sind Proviantierungsmöglichkeiten hervorragend. In allen Hafenorten finden Sie Supermärkte und lokale Märkte mit frischen Produkten. Viele Charterfirmen bieten auch einen Proviantierungsservice an.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Spanien?
            </h3>
            <p className="mb-6 text-blue-100">
              Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Spanien an! 
              Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Spanien Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spain;