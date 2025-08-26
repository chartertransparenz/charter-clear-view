
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
const balearicsHeader = "/lovable-uploads/c0896df7-5ba2-4d93-9c3a-ffd817d565c5.png";

const Balearics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Westliches Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "April-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Inseln", value: "4 Hauptinseln" }
  ];

  const cities = [
    "Palma de Mallorca", "Ibiza", "Mahón (Menorca)", "Sant Antoni"
  ];

  const highlights = [
    "Weltklasse Marina-Infrastruktur",
    "Kurze Distanzen zwischen Inseln",
    "Lebendiges Nachtleben (Ibiza)",
    "Familienfreundliche Strände",
    "Ausgezeichnete Restaurants",
    "Ganzjährig milde Temperaturen",
    "Perfekte Segelbedingungen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={balearicsHeader}
          alt="Balearen Spanien - traumhafte Bucht mit türkisblauem Wasser"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇪🇸 Balearen</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Balearen</h1>
            <p className="text-xl max-w-2xl">
              Mediterrane Perlen vor Spaniens Küste
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer/spanien" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Spanien
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
                <BreadcrumbPage>Balearen</BreadcrumbPage>
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
            region="Balearen"
            center={{ lat: 39.7086231, lng: 2.6946892 }}
            zoom={8}
            maptype="satellite"
          />
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Balearen: Mallorca, Ibiza, Menorca & Formentera</h2>
            <p className="text-xl text-muted-foreground">
              Spaniens Segelparadies im westlichen Mittelmeer
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold mt-8 mb-4">Warum die Balearen das perfekte Segelrevier sind</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die Balearen sind Spaniens unangefochtenes Segelparadies und vereinen alles, was einen unvergesslichen Yachtcharter ausmacht: kristallklare Buchten, kurze Distanzen zwischen traumhaften Inseln, verlässliche Segelbedingungen und eine erstklassige maritime Infrastruktur. Von der weltbekannten Marina Palma aus erschließt sich Ihnen ein Archipel aus vier einzigartigen Inseln – Mallorca, Ibiza, Menorca und Formentera – jede mit ihrem eigenen unverwechselbaren Charakter.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Mit über 200 Buchten allein auf Mallorca, den berühmten Traumstränden von Formentera, der UNESCO-Biosphäre Menorca und dem kosmopolitischen Flair Ibizas bieten die Balearen eine einzigartige Vielfalt auf kompaktem Raum. Das ganzjährig milde Mittelmeerklima, thermische Winde von 3-4 Beaufort und professionelle Charterbasen machen dieses Revier zur ersten Wahl für Segler aller Erfahrungsstufen.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Die kurzen Distanzen zwischen den Inseln – maximal 3-4 Stunden Segeln – ermöglichen entspannte Tagestouren mit ausreichend Zeit zum Ankern, Schwimmen und Entdecken. Mallorca dient dabei als perfekte Homebase mit direkten Flugverbindungen aus dem deutschsprachigen Raum und nur 20 Minuten Transfer vom Flughafen zu den Charterbasen.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Anreise & Transfer</h4>
              <p className="text-black mb-3">So erreichen Sie Ihre Charteryacht auf den Balearen:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Flughafen Palma (PMI):</strong> Direktflüge ab allen großen deutschen Flughäfen</li>
                <li><strong>Transfer zur Marina:</strong> 15-20 Minuten zu allen Charterbasen</li>
                <li><strong>Taxi & Mietwagen:</strong> Direkt am Flughafen verfügbar</li>
                <li><strong>Check-in Service:</strong> Professionelle Einweisung in deutscher Sprache</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Premium Marinas & Ausgangshäfen</h4>
              <p className="text-black mb-3">Erstklassige Charterbasen auf den Balearen:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Marina Palma:</strong> Modernste Charter-Homebase mit 750 Liegeplätzen</li>
                <li><strong>Club Náutico Palma:</strong> Traditionsreiche Marina im Stadtzentrum</li>
                <li><strong>Port d'Andratx:</strong> Exklusiver Naturhafen im Südwesten Mallorcas</li>
                <li><strong>Marina Ibiza:</strong> Glamouröse Basis für Insel-Hopping-Törns</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Die vier Perlen der Balearen</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Mallorca – Das Herz des Archipels</h4>
            <p className="mb-4">
              Mallorca begeistert mit der größten Buchtvielfalt des Mittelmeers. Von der dramatischen Serra de Tramuntana im Norden bis zu den karibischen Sandstränden der Südküste:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Westküste (Tramuntana)</h5>
                <p className="text-sm text-gray-600">Cala Deià, Port de Sóller – spektakuläre Felskulissen und versteckte Buchten</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Südküste</h5>
                <p className="text-sm text-gray-600">Es Trenc, Cala Pi – endlose Sandstrände mit türkisfarbenem Wasser</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Ostküste</h5>
                <p className="text-sm text-gray-600">Cala Varques, Cala Mondragó – unberührte Naturstrände und Meeresschutzgebiete</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Südwesten</h5>
                <p className="text-sm text-gray-600">Cala Llamp, Dragonera – exklusive Ankerbuchten mit Gourmet-Restaurants</p>
              </div>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Ibiza – Weltberühmtes Flair</h4>
            <p className="mb-6">
              Ibiza vereint pulsierendes Nachtleben mit ursprünglicher Natur. Die UNESCO-Weltkulturerbe-Altstadt Dalt Vila, weltberühmte Beach Clubs und versteckte Buchten wie Cala Salada schaffen einzigartige Kontraste. Die Westküste bietet spektakuläre Sonnenuntergänge, während die Ostküste mit ruhigen Familienbuchten punktet.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Formentera – Karibik des Mittelmeers</h4>
            <p className="mb-6">
              Formentera verzaubert mit den schönsten Stränden des Mittelmeers. Playa de Ses Illetes gilt als einer der Top 10 Strände weltweit, Cala Saona bietet perfekte Ankermöglichkeiten und die Insel Es Vedranell vor der Westküste ist ein Paradies für Schnorchler und Naturliebhaber.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Menorca – UNESCO-Biosphärenreservat</h4>
            <p className="mb-6">
              Menorca überrascht mit unberührter Natur und entspannter Atmosphäre. Die Südküste ist gesäumt von Traumstränden wie Cala Macarella und Cala Turqueta, während der Naturhafen Mahón einer der größten Naturhäfen der Welt ist und perfekte Infrastruktur bietet.
            </p>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black"><strong>Nautische Hinweise:</strong> Verlässliche thermische Winde (3-4 Bft), hervorragende Ankergründe in Sandbuchten, kurze Distanzen zwischen den Inseln (1-4 Stunden), ganzjährig segelbar von März bis November.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ihr perfekter 7-Tage-Balearen-Törn ab Palma</h3>
            <p className="mb-4 font-medium">Eine traumhafte Rundreise durch alle vier Baleareninseln:</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Palma → Port d'Andratx</h5>
                <p className="text-sm text-muted-foreground">Entspannter Start entlang der Südwestküste Mallorcas zum eleganten Naturhafen mit erstklassigen Restaurants.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Andratx → Dragonera → Cala Conta (Ibiza)</h5>
                <p className="text-sm text-muted-foreground">Stopp an der Dragonera-Insel, dann Überfahrt nach Ibiza zur berühmten Sonnenuntergangsbucht Cala Conta.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Ibiza → Formentera (Ses Illetes)</h5>
                <p className="text-sm text-muted-foreground">Kurzer Schlag zur "Karibik des Mittelmeers" mit den traumhaften Stränden von Ses Illetes und Playa Levante.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Formentera → Cala Saona → Es Vedranell</h5>
                <p className="text-sm text-muted-foreground">Erkundung der Westküste Formenteras mit Schnorcheln vor der mystischen Felseninsel Es Vedranell.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Formentera → Menorca (Cala Macarella)</h5>
                <p className="text-sm text-muted-foreground">Längerer Schlag nach Menorca zu einer der schönsten Buchten des Mittelmeers mit türkisfarbenem Wasser.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Menorca → Cala Varques (Mallorca)</h5>
                <p className="text-sm text-muted-foreground">Rückkehr nach Mallorca zur versteckten Ostküsten-Perle Cala Varques, nur vom Meer aus erreichbar.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Cala Varques → Palma</h5>
                <p className="text-sm text-muted-foreground">Entspannte Rückreise nach Palma mit Zeit für einen letzten Stadtbummel und Tapas in der Altstadt.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Klima & Segelbedingungen: Mediterraner Traum</h3>
            <p className="mb-4">
              Die Balearen bieten das perfekte mediterrane Klima mit verlässlichen Segelbedingungen für entspannte Familien- bis sportliche Segeltörns.
            </p>
            
            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Windverhältnisse</h4>
              <p className="text-black mb-3">Verlässliche Windsysteme rund um die Balearen:</p>
              <ul className="space-y-2 text-black">
                <li><strong>Thermische Winde:</strong> Verlässliche Land- und Seebrisen (3-4 Bft), 
                perfekt für entspanntes Segeln mit der Familie.</li>
                <li><strong>Maestral:</strong> Angenehmer Nordwestwind im Sommer, 
                ideal für längere Schläge zwischen den Inseln.</li>
                <li><strong>Tramontana:</strong> Frischer Nordwind in den Übergangszeiten, 
                bringt Klarheit und optimale Sichtweiten.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Optimale Reisezeit</h4>
              <p className="text-black mb-3">Die beste Zeit für Ihren Balearen-Charter:</p>
              <ul className="space-y-2 text-black">
                <li><strong>Mai & Juni:</strong> Perfekte Segelbedingungen, angenehme Temperaturen, 
                weniger überfüllt – ideal für Genießer.</li>
                <li><strong>September & Oktober:</strong> Warme Wassertemperaturen, 
                entspannte Atmosphäre nach der Hochsaison.</li>
                <li><strong>Juli & August:</strong> Hochsaison mit perfektem Wetter, 
                aber auch höchste Preise und mehr Trubel.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Häfen</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{city}</p>
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
              Bereit für die Balearen?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie Spaniens beliebteste Segelinseln mit perfekter 
              Infrastruktur und mediterranem Flair.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Balearen Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balearics;
