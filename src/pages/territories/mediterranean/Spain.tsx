
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import TopDestinations from "@/components/TopDestinations";
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
    { icon: MapPin, label: "Lage", value: "Westliches Mittelmeer", link: "#marinas-ausgangshaefen" },
    { icon: Calendar, label: "Beste Zeit", value: "Ganzjährig", link: "#beste-reisezeit" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen", link: "#warum-spanien-klassiker" },
    { icon: Anchor, label: "Besonderheit", value: "Vielfältige Reviere", link: "#wetter-windbedingungen" }
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
    <div className="min-h-screen bg-white">
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
            <a key={index} href={fact.link} className="block bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </a>
          ))}
        </div>

        {/* Territory Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Spanische Mittelmeerküste</h2>
          <TerritoryMap
            region="Spanien Mittelmeer"
            center={{ lat: 39.5, lng: 3.0 }}
            zoom={5}
            maptype="satellite"
            className="h-96"
          />
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 bg-white border border-gray-200 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Spanien: Balearen & Mittelmeerküste</h2>
            <p className="text-xl text-muted-foreground">
              Ihr Segeltörn im westlichen Mittelmeer
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h3 id="warum-spanien-klassiker" className="text-2xl font-bold mt-8 mb-4">Warum Spanien ein Segelklassiker ist</h3>
            <p className="text-lg leading-relaxed mb-6">
              Spanien vereint wie kein anderes Land die perfekte Balance zwischen mediterranem Lifestyle, erstklassiger nautischer Infrastruktur und endloser Vielfalt. Die <Link to="/reviere/mittelmeer/spanien/balearen" className="text-blue-600 hover:text-blue-800 underline">Balearen</Link> bilden das Herzstück des spanischen Chartererlebnisses – mit Mallorca als zentralem Dreh- und Angelpunkt für unvergessliche Segeltörns. Hier finden Sie alles, was das Seglerherz begehrt: beständige Winde, kristallklare Buchten, weltklasse Marinas und das unvergleichliche spanische Lebensgefühl.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Von Palma de Mallorca aus erschließt sich Ihnen ein Archipel aus vier Hauptinseln – Mallorca, Ibiza, Menorca und Formentera – jede mit eigenem Charakter. Kurze Distanzen zwischen den Inseln, perfekte Ankerbuchten und eine Infrastruktur, die keine Wünsche offen lässt, machen die <Link to="/reviere/mittelmeer/spanien/balearen" className="text-blue-600 hover:text-blue-800 underline">Balearen</Link> zum idealen Revier für Einsteiger wie Profis. Das ganzjährig milde Klima ermöglicht Segelsaison von März bis November.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Mallorcas Hauptstadt Palma überzeugt mit modernen Charterbasen, professionellem Service und einem reibungslosen Check-in. Nach dem Ablegen erwarten Sie über 200 Buchten und Strände, von den dramatischen Klippen der Serra de Tramuntana bis zu den türkisfarbenen Lagunen von Formentera. Spanien ist mehr als nur Segeln – es ist Lifestyle, Kultur und pure Lebensfreude auf höchstem Niveau.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Erreichbarkeit</h4>
              <p className="text-black mb-3">So reisen Chartergäste bequem nach Mallorca:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Flughafen Palma (PMI):</strong> Direktflüge aus Deutschland, Österreich und der Schweiz</li>
                <li><strong>Transfer zur Marina:</strong> 15-30 Minuten vom Flughafen zu den Charterbasen</li>
                <li><strong>Mietwagen & Taxi:</strong> Flughafentransfer problemlos verfügbar</li>
                <li><strong>Perfekte Infrastruktur:</strong> Supermärkte, Restaurants und Services in Hafennähe</li>
              </ul>
            </div>

            <div id="marinas-ausgangshaefen" className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Marinas & Ausgangshäfen</h4>
              <p className="text-black mb-3">Die <Link to="/reviere/mittelmeer/spanien/balearen" className="text-blue-600 hover:text-blue-800 underline">Balearen</Link> verfügen über erstklassige maritime Infrastruktur:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Marina Palma:</strong> Modernste Charter-Homebase mit breiten Boxen und Full-Service</li>
                <li><strong>Real Club Náutico Palma:</strong> Traditionsreiche Marina im Herzen der Altstadt</li>
                <li><strong>Port d'Andratx:</strong> Exklusiver Naturhafen im Südwesten Mallorcas</li>
                <li><strong>Marina Ibiza:</strong> Glamouröse Basis für One-Way-Törns zwischen den Inseln</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele – Die Vielfalt der <Link to="/reviere/mittelmeer/spanien/balearen" className="text-blue-600 hover:text-blue-800 underline">Balearen</Link></h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Mallorca – Buchten für jeden Geschmack</h4>
            <p className="mb-4">
              Mallorca bietet über 200 Buchten und Strände – von dramatischen Felsenküsten bis zu karibisch anmutenden Sandbuchten:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Westküste (Serra de Tramuntana)</h5>
                <p className="text-sm text-gray-600">Cala Deià, Cala Tuent – spektakuläre Felskulissen, nur vom Meer erreichbar</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Südküste</h5>
                <p className="text-sm text-gray-600">Es Trenc, Cala Pi – endlose Sandstrände mit karibischem Flair</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Ostküste</h5>
                <p className="text-sm text-gray-600">Cala Varques, Cala Mitjana – türkisfarbene Buchten, perfekt zum Ankern</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Südwesten</h5>
                <p className="text-sm text-gray-600">Cala Llamp, Port d'Andratx – exklusive Atmosphäre und Gourmet-Restaurants</p>
              </div>
            </div>

            {/* Cala Pi Image with Description */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/e4c1ff7b-f972-4af5-b734-1ab72d4f905c.png" 
                alt="Cala Pi Mallorca - türkisfarbenes Wasser mit Segelbooten" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-600 italic text-center">
                In der Cala Pi ankert man mit Buganker und Heckleine an der unbebauten Felsseite, wo etwa sechs Yachten Platz finden und Leinen zur Befestigung vorhanden sind; der Schwojraum ist begrenzt und bei südlichen Winden ist die Bucht ungeschützt
              </p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Ibiza – Zwischen Party und Natur</h4>
            <p className="mb-6">
              Ibiza vereint pulsierendes Nachtleben mit ursprünglicher Natur. Die UNESCO-Weltkulturerbe-Altstadt Dalt Vila steht im Kontrast zu weltberühmten Beach Clubs. Cala Salada und Cala Conta bieten spektakuläre Sonnenuntergänge, während Cala Jondal für entspannte Momente sorgt.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Formentera – Karibik des Mittelmeers</h4>
            <p className="mb-6">
              Die kleinste bewohnte Baleareninsel bezaubert mit puderzuckerweißen Stränden und türkisfarbenem Wasser. Playa de Ses Illetes gilt als einer der schönsten Strände Europas, während Cala Saona und Es Pujols perfekte Ankerplätze bieten.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Menorca – UNESCO-Biosphärenreservat</h4>
            <p className="mb-6">
              Menorca überrascht mit unberührter Natur und entspannter Atmosphäre. Die Südküste ist gesäumt von Traumstränden wie Cala Macarella, Cala Mitjana und Cala Turqueta – allesamt perfekt zum Ankern und Schwimmen.
            </p>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black"><strong>Nautische Hinweise:</strong> Die <Link to="/reviere/mittelmeer/spanien/balearen" className="text-blue-600 hover:text-blue-800 underline">Balearen</Link> bieten verlässliche thermische Winde (3-4 Bft) und kurze Distanzen zwischen den Inseln. Ankern mit Buganker in Sand- oder Sandbuchten ist Standard.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ihr 7-Tage-Traumtörn ab Marina Palma</h3>
            <p className="mb-4 font-medium">Ein perfekter Mix aus Segelspaß, Buchten-Hopping und spanischem Lifestyle:</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Palma → Port d'Andratx</h5>
                <p className="text-sm text-muted-foreground">Sanfter Einstieg entlang der Südwestküste. Ankunft im eleganten Naturhafen, Dinner in einem der berühmten Fischrestaurants.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Andratx → Cala Llamp → Dragonera</h5>
                <p className="text-sm text-muted-foreground">Morgens in der exklusiven Cala Llamp ankern, nachmittags zur Dragonera-Insel mit spektakulären Schnorchelplätzen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Dragonera → Cala Deià</h5>
                <p className="text-sm text-muted-foreground">Entlang der dramatischen Tramuntana-Küste zur malerischen Cala Deià. Besuch des Künstlerdorfs Deià optional.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Cala Deià → Formentera (Ses Illetes)</h5>
                <p className="text-sm text-muted-foreground">Längerer Schlag zur "Karibik des Mittelmeers". Ankern vor dem traumhaften Strand von Ses Illetes.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Formentera → Ibiza (Cala Conta)</h5>
                <p className="text-sm text-muted-foreground">Kurzer Übergang nach Ibiza. Nachmittag in der Cala Conta mit berühmten Sonnenuntergang, abends Dalt Vila erkunden.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Ibiza → Es Trenc (Mallorca)</h5>
                <p className="text-sm text-muted-foreground">Rückkehr nach Mallorca zum legendären Es Trenc Strand. Entspannter Badetag in karibischer Atmosphäre.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Es Trenc → Palma</h5>
                <p className="text-sm text-muted-foreground">Gemütliche Rückreise nach Palma. Check-out und letzter Stadtbummel durch die historische Altstadt.</p>
              </div>
            </div>

            <h3 id="wetter-windbedingungen" className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen: Perfekte Segelbedingungen</h3>
            <p className="mb-4">
              Die <Link to="/reviere/mittelmeer/spanien/balearen" className="text-blue-600 hover:text-blue-800 underline">Balearen</Link> bieten typisch mediterranes Klima mit verlässlichen thermischen Winden und ganzjährig milden Temperaturen – ideal für entspanntes Segeln in allen Erfahrungsstufen.
            </p>
            
            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Typische Winde</h4>
              <p className="text-black mb-3">Die lokalen Windsysteme der <Link to="/reviere/mittelmeer/spanien/balearen" className="text-blue-600 hover:text-blue-800 underline">Balearen</Link>:</p>
              <ul className="space-y-2 text-black">
                <li><strong>Thermische Winde:</strong> Verlässliche Land- und Seebrisen (3-4 Bft), 
                ideal für entspanntes Segeln mit der ganzen Familie.</li>
                <li><strong>Tramontana:</strong> Nordwind in den Übergangszeiten, besonders an den 
                Nordküsten von Mallorca und Menorca.</li>
                <li><strong>Maestral:</strong> Angenehmer Nordwestwind an den Sommerabenden, 
                perfekt für entspannte Ankerplätze.</li>
              </ul>
            </div>

            <div id="beste-reisezeit" className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Beste Reisezeit</h4>
              <p className="text-black mb-3">Wann ist die optimale Zeit für Ihren Spanien-Charter:</p>
              <ul className="space-y-2 text-black">
                <li><strong>Mai & Juni:</strong> Perfekte Temperaturen, weniger überfüllt, 
                zuverlässige Winde für ideales Segeln.</li>
                <li><strong>September & Oktober:</strong> Angenehme Wassertemperaturen, 
                entspannte Atmosphäre nach der Hochsaison.</li>
                <li><strong>Juli & August:</strong> Hochsaison mit viel Leben, aber auch 
                höchsten Preisen und Temperaturen um 30°C.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Weitere spanische Segelreviere</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4"><Link to="/reviere/mittelmeer/spanien/costa-brava" className="text-blue-600 hover:text-blue-800 underline">Costa Brava</Link> – Wilde Küste im Nordosten</h4>
            <p className="mb-6">
              Die "wilde Küste" von Blanes bis zur französischen Grenze bietet felsige Steilküsten, versteckte Buchten und die Nähe zu Barcelona. Ein kompakteres, aber nicht weniger reizvolles Charterrevier.
            </p>

            {/* Costa Brava Image with Description */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/11945d8a-63c7-46f0-abff-8edc0e2be073.png" 
                alt="Sa Tuna Costa Brava - bunte Häuser an ruhiger Meeresbucht" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-600 italic text-center">
                Bunte Häuser säumen eine ruhige Meeresbucht mit Strand in Sa Tuna, <Link to="/reviere/mittelmeer/spanien/costa-brava" className="text-blue-600 hover:text-blue-800 underline">Costa Brava</Link>, Spanien
              </p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4"><Link to="/reviere/atlantik/kanaren" className="text-blue-600 hover:text-blue-800 underline">Kanarische Inseln</Link> – Segelabenteuer im ewigen Frühling</h4>
            <p className="mb-6">
              Die <Link to="/reviere/atlantik/kanaren" className="text-blue-600 hover:text-blue-800 underline">Kanaren</Link> im Atlantik bieten ganzjährig mildes Klima und sportlicheres Segeln mit verlässlichen Passatwinden. Teneriffa und Gran Canaria sind die Hauptausgangspunkte für Atlantik-Charter.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Praktische Charter-Informationen</h4>
              <div className="grid md:grid-cols-2 gap-4 text-black">
                <div>
                  <p className="font-medium mb-2">Anreise & Transfer:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Flughafen Palma (PMI): 15-30 Min. zu Marinas</li>
                    <li>• Direktflüge aus D-A-CH verfügbar</li>
                    <li>• Mietwagen & Taxi am Flughafen</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Charteroptionen:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Bareboat für erfahrene Skipper</li>
                    <li>• Skippercharter für Entspannung</li>
                    <li>• Monohull oder Katamaran</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Fazit</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Spanien vereint als Charterrevier alles, was das Seglerherz begehrt: Von der mediterranen Eleganz der <Link to="/reviere/mittelmeer/spanien/balearen" className="text-blue-600 hover:text-blue-800 underline">Balearen</Link> über die wilde Schönheit der <Link to="/reviere/mittelmeer/spanien/costa-brava" className="text-blue-600 hover:text-blue-800 underline">Costa Brava</Link> bis hin zum ganzjährigen Atlantik-Abenteuer auf den <Link to="/reviere/atlantik/kanaren" className="text-blue-600 hover:text-blue-800 underline">Kanaren</Link>. Die erstklassige maritime Infrastruktur, kurze Anreise aus dem deutschsprachigen Raum und die perfekte Balance zwischen entspanntem Segeln und kulturellem Erlebnis machen Spanien zur idealen Wahl für Ihren nächsten Yachtcharter. Ob romantischer Pärchenurlaub, Familienabenteuer oder Segeln mit Freunden – in spanischen Gewässern finden Sie garantiert Ihr persönliches Segelparadies.
            </p>

            {/* CTA within main box */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 p-6 rounded-lg text-center mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Lust die Spanische Küste zu erkunden?
              </h3>
              <p className="text-gray-600 mb-4">
                Kontaktieren Sie uns noch heute. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
              </p>
              <CharterRequestForm>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                  Jetzt unverbindliches Angebot einholen
                </Button>
              </CharterRequestForm>
            </div>
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
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Lust die Spanische Küste zu erkunden?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Kontaktieren Sie uns noch heute. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
            </p>
            <CharterRequestForm>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium" size="lg">
                Jetzt unverbindliches Angebot einholen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        {/* TopDestinations */}
        <TopDestinations />
      </div>
    </div>
  );
};

export default Spain;