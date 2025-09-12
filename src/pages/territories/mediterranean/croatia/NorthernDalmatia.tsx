import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Clock, Users, Anchor, Wind, Sun, Star } from 'lucide-react';
import destinationCroatia from '@/assets/destination-croatia.jpg';
import TerritoryMap from '@/components/TerritoryMap';
import TopDestinations from '@/components/TopDestinations';
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
export default function NorthernDalmatia() {
  const m = META.norddalmatien;
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: 'Region',
    value: 'Norddalmatien'
  }, {
    icon: Clock,
    label: 'Beste Zeit',
    value: 'April - Oktober'
  }, {
    icon: Users,
    label: 'Geeignet für',
    value: 'Fortgeschrittene'
  }, {
    icon: Anchor,
    label: 'Marinas',
    value: '25+ Marinas'
  }, {
    icon: Wind,
    label: 'Windverhältnisse',
    value: 'Maestral & Bora'
  }, {
    icon: Sun,
    label: 'Sonnentage',
    value: '300+ pro Jahr'
  }];
  const cities = [{
    name: 'Zadar',
    description: 'Historische Stadt mit Meeresorgel und Sonnengruß',
    marinas: 4,
    highlights: ['Marina Zadar', 'Meeresorgel', 'Forum Romanum']
  }, {
    name: 'Šibenik',
    description: 'UNESCO-Weltkulturerbe mit beeindruckender Kathedrale',
    marinas: 3,
    highlights: ['Marina Šibenik', 'Kathedrale St. Jakob', 'Krka Nationalpark']
  }, {
    name: 'Biograd',
    description: 'Familienfreundlicher Ort vor den Kornaten',
    marinas: 2,
    highlights: ['Marina Kornati', 'Kornati Nationalpark', 'Pašman Insel']
  }, {
    name: 'Murter',
    description: 'Tor zu den Kornaten mit traditioneller Atmosphäre',
    marinas: 3,
    highlights: ['Marina Hramina', 'Kornati Tor', 'Slanica Strand']
  }];
  const highlights = ['Kornati Nationalpark - 89 Inseln', 'Krka Nationalpark mit Wasserfällen', 'Unberührte Natur und einsame Buchten', 'Starke Maestral-Winde für sportliches Segeln', 'Reiche Geschichte und Kultur', 'Authentische dalmatinische Küche', 'Weniger Massentourismus', 'Perfekt für Naturliebhaber'];
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
          {"@type": "ListItem", "position": 3, "name": "Kroatien", "item": "https://chartertransparenz.de/reviere/mittelmeer/kroatien"},
          {"@type": "ListItem", "position": 4, "name": "Norddalmatien", "item": "https://chartertransparenz.de/reviere/mittelmeer/kroatien/norddalmatien"}
        ]
      }} />
      <JsonLd json={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Marina Zadar",
        "address": {"@type": "PostalAddress", "addressLocality": "Zadar", "addressCountry": "HR"},
        "geo": {"@type": "GeoCoordinates", "latitude": 44.1194, "longitude": 15.2314},
        "url": "https://chartertransparenz.de/reviere/mittelmeer/kroatien/norddalmatien"
      }} />
      <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{
      backgroundImage: `url(/lovable-uploads/cba38d3c-2eaa-4174-949f-997ceffda0ee.png)`
    }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <Link to="/reviere/mittelmeer/kroatien" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Kroatien
            </Link>
            <h1 className="text-5xl font-bold mb-4">Norddalmatien</h1>
            <p className="text-xl text-white/90">Kornati Nationalpark und unberührte Naturschönheiten für erfahrene Segler</p>
          </div>
        </div>
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
                <BreadcrumbLink href="/reviere/mittelmeer">Mittelmeer</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/mittelmeer/kroatien">Kroatien</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Norddalmatien</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {quickFacts.map((fact, index) => <Card key={index} className="text-center">
              <CardContent className="p-4">
                <fact.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">{fact.label}</p>
                <p className="font-semibold">{fact.value}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          
          
          <p className="text-lg text-muted-foreground">
            Von den historischen Städten Zadar und Šibenik bis zu den einsamen Kornati-Inseln - Norddalmatien 
            vereint Kultur, Geschichte und unberührte Natur auf einzigartige Weise.
          </p>
        </div>

        {/* Territory Map */}
        <div className="mb-16">
          <TerritoryMap region="Norddalmatien" center={{
          lat: 43.9335,
          lng: 15.5049
        }} zoom={10} markers={[{
          lat: 44.1194,
          lng: 15.2314,
          name: 'Zadar',
          description: 'Historische Stadt mit Marina'
        }, {
          lat: 43.7350,
          lng: 15.8952,
          name: 'Šibenik',
          description: 'UNESCO-Weltkulturerbe'
        }, {
          lat: 43.9434,
          lng: 15.4506,
          name: 'Biograd',
          description: 'Tor zu den Kornati-Inseln'
        }, {
          lat: 43.8394,
          lng: 15.5897,
          name: 'Murter',
          description: 'Traditioneller Segelort'
        }]} className="max-w-4xl mx-auto" />
        </div>

        {/* Detailed Region Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Norddalmatien</h2>
            <p className="text-xl text-muted-foreground">
              Segeln im Herzen der kroatischen Inselwelt – Ihr Traumtörn zwischen Zadar, Šibenik und den Kornaten
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Kroatien – ein Land, das wie geschaffen ist für einen Yachtcharter. Mit seiner über 1.700 Kilometer langen 
              Küstenlinie, mehr als 1.200 Inseln und Inselchen, einem türkisblauen Meer und einer Fülle von historischen 
              Städten und modernen Marinas, ist die kroatische Adria seit Jahrzehnten eines der beliebtesten Segelreviere Europas. 
              Norddalmatien, die Region zwischen Zadar und Rogoznica, gilt dabei als das Kronjuwel für Segler. Hier erwartet 
              Sie eine unvergleichliche Mischung aus unberührter Natur, antiker Geschichte und herzlicher Gastfreundschaft.
            </p>

            <div className="my-8">
              <img src="/lovable-uploads/e80a0056-47b4-42b2-b2b4-05141058b00f.png" alt="Luftaufnahme der kroatischen Inselwelt in Norddalmatien" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md" />
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina in Zadar, Biograd oder Šibenik, lassen die 
              beeindruckende Kulisse der dalmatinischen Küste hinter sich und nehmen Kurs auf eine Inselwelt, die einem Märchen 
              gleicht. Jeder Tag bringt neue Horizonte: malerische Buchten, die zum Schwimmen und Schnorcheln einladen, 
              versteckte Grotten, die nur vom Meer aus zugänglich sind, und historische Städte, deren Gassen von Jahrtausenden 
              europäischer Geschichte erzählen.
            </p>

            <div className="my-8">
              <img src="/lovable-uploads/453b22cb-8862-431e-af5b-cae084d68d17.png" alt="Segelboote vor der kroatischen Küste in kristallklarem Wasser" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md" />
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Norddalmatien bietet eine unvergleichliche Vielfalt an Segelrevieren, die für jeden Geschmack und jede 
              Erfahrungsstufe das Richtige bereithalten. Die kurzen Distanzen zwischen den Inseln, die zahlreichen geschützten 
              Ankerplätze und die hervorragende maritime Infrastruktur machen diese Region zum idealen Ziel für Familien, 
              Genuss-Segler und alle, die das Inselhopping in vollen Zügen genießen möchten. Doch gerade in diesem Revier 
              sind die Kenntnis der lokalen Besonderheiten und die Einhaltung der Vorschriften von entscheidender Bedeutung 
              für einen reibungslosen und unvergesslichen Törn.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Die Regionen Norddalmatiens: Ein Segelparadies in zwei Akten</h3>
            <p className="text-lg leading-relaxed mb-6">
              Norddalmatien gliedert sich grob in zwei Hauptregionen, die jeweils ihren eigenen, unverwechselbaren Charme 
              und spezifische Segelbedingungen bieten.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">1. Die Region Zadar: Von der historischen Stadt bis zum Kornaten-Tor (Zadar bis Murter)</h4>
            <p className="mb-4">
              Diese nördliche Hälfte Norddalmatiens ist geprägt von der pulsierenden Stadt Zadar und einem weitläufigen 
              Archipel, der direkt in den Nationalpark Kornaten übergeht.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Zadar:</strong> Eine faszinierende Stadt mit einer über 3.000 Jahre alten Geschichte. Die Altstadt, 
              umgeben von venezianischen Mauern, ist ein Labyrinth aus römischen Ruinen, mittelalterlichen Kirchen und 
              belebten Plätzen. Nautische Highlights sind die einzigartige Meeresorgel, deren Töne durch die Wellen erzeugt 
              werden, und der "Gruß an die Sonne", ein Lichtkunstwerk, das bei Sonnenuntergang zum Leben erwacht. Zadar ist 
              ein wichtiger Charterstützpunkt mit mehreren Marinas (z.B. Marina Borik, Marina Tankerkomerc).</li>
              
              <li><strong>Der Zadarer Archipel:</strong> Direkt vor Zadar erstreckt sich eine Kette von Inseln, die sich 
              perfekt für erste Schläge eignen.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Ugljan & Pašman:</strong> Diese beiden Inseln sind durch eine Brücke verbunden und bieten 
                  charmante Dörfer, Olivenhaine und ruhige Buchten.</li>
                  <li><strong>Dugi Otok (Lange Insel):</strong> Eine der schönsten Inseln des Archipels, bekannt für den 
                  Naturpark Telašćica im Süden – ein tief eingeschnittener Fjord mit steilen Klippen und einem Salzwassersee. 
                  Hier liegt auch der berühmte Sakarun Beach, ein weißer Sandstrand mit türkisblauem Wasser, der an die 
                  Karibik erinnert.</li>
                </ul>
              </li>
              
              <li><strong>Nationalpark Kornaten:</strong> Ein absolutes Highlight für jeden Segler in Norddalmatien. 
              Dieses einzigartige Archipel besteht aus 89 Inseln, Inselchen und Riffen, die wie eine Mondlandschaft aus 
              dem Meer ragen. Die Kornaten sind ein Paradies für Segler, die Abgeschiedenheit, unberührte Natur und 
              kristallklares Wasser suchen. Es gibt zahlreiche Ankerbuchten und traditionelle Konobas (Restaurants), die 
              frischen Fisch und lokale Spezialitäten anbieten.</li>

              <div className="my-8">
                <img src="/lovable-uploads/d783d11a-5e6e-4572-8f9d-02bd02bf36d1.png" alt="Herzförmige Insel in den Kornaten - ein romantisches Naturwunder" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md" />
              </div>
              
              <li><strong>Murter:</strong> Die Insel Murter, über eine Brücke mit dem Festland verbunden, gilt als das Tor 
              zu den Kornaten. Hier befinden sich lebhafte Marinas wie Marina Hramina und Marina Betina, die ideale 
              Ausgangspunkte für Törns in den Nationalpark sind.</li>
            </ul>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black"><strong>Nautische Besonderheiten der Region Zadar:</strong> Die Gewässer sind 
              hier meist gut geschützt durch die vielen Inseln. Es gibt zahlreiche Kanäle und Passagen, die eine 
              abwechslungsreiche Navigation ermöglichen. Die Wassertiefen sind meist ausreichend, aber Aufmerksamkeit 
              für Untiefen und Riffe ist immer geboten.</p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">2. Die Region Šibenik: Historische Schätze und moderne Marinas (Šibenik bis Rogoznica)</h4>
            <p className="mb-4">
              Diese südliche Hälfte Norddalmatiens ist geprägt von der beeindruckenden Stadt Šibenik und einer Küstenlinie, 
              die von Flussmündungen und malerischen Küstenorten gesäumt ist.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Šibenik:</strong> Eine der ältesten kroatischen Städte an der Adria, die sich malerisch an einen 
              Hügel schmiegt. Ihr Wahrzeichen ist die Kathedrale des Heiligen Jakob, ein UNESCO-Welterbe, die vollständig 
              aus Stein erbaut wurde. Šibenik ist auch das Tor zum Nationalpark Krka.</li>

              <div className="my-8">
                <img src="/lovable-uploads/d5b9c634-09a0-4d6d-b970-43007a40bf95.png" alt="Luftaufnahme der historischen Altstadt Šibenik mit ihrem malerischen Hafen" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md" />
              </div>
              
              <li><strong>Nationalpark Krka:</strong> Ein weiteres Naturwunder Kroatiens. Über den Fluss Krka können Sie 
              mit dem Boot bis Skradin fahren und von dort aus die berühmten Wasserfälle und Seen des Nationalparks erkunden. 
              Das Segeln auf dem Süßwasser des Flusses Krka ist ein einzigartiges Erlebnis.</li>
              
              <li><strong>Der Šibeniker Archipel:</strong> Eine Gruppe von Inseln, die direkt vor Šibenik liegen und sich 
              ideal für Inselhopping eignen.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Zlarin:</strong> Eine charmante Insel, bekannt für ihre Korallenfischerei und entspannte Atmosphäre.</li>
                  <li><strong>Prvić:</strong> Eine kleine, autofreie Insel mit malerischen Dörfern und schönen Stränden.</li>
                  <li><strong>Kaprije & Žirje:</strong> Ruhigere Inseln, die sich für entspannte Ankerstopps eignen.</li>
                </ul>
              </li>
              
              <li><strong>Primošten:</strong> Ein malerischer Küstenort, dessen Altstadt auf einer kleinen Halbinsel liegt 
              und mit dem Festland verbunden ist. Bekannt für seine Weinberge und schönen Strände.</li>
              
              <li><strong>Rogoznica:</strong> Ein beliebter Ferienort mit der modernen Marina Frapa, einer der schönsten 
              und bestausgestatteten Marinas an der Adria. Rogoznica ist ein idealer Ausgangspunkt für Törns in den Süden 
              oder Norden Dalmatiens.</li>
            </ul>

            <div className="border border-gray-300 p-4 rounded-lg mb-8">
              <p className="text-black"><strong>Nautische Besonderheiten der Region Šibenik:</strong> Die Mündung des 
              Flusses Krka bietet eine einzigartige Flussfahrt. Die Kanäle sind hier oft tiefer. Die Region ist ebenfalls 
              gut geschützt, bietet aber auch offene Seeabschnitte.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erreichbarkeit: Ihr schneller Weg an Bord</h3>
            <p className="mb-4">
              Kroatien ist dank seiner hervorragenden Infrastruktur und seiner geografischen Nähe zu Mitteleuropa sehr gut erreichbar.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Per Flugzeug</h4>
                <p className="mb-4 text-black">Zahlreiche internationale Flughäfen entlang der Küste werden von Deutschland, Österreich 
                und der Schweiz aus direkt angeflogen. Die wichtigsten Zielflughäfen für unsere Chartergäste in Norddalmatien sind:</p>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Zadar (ZAD):</strong> Ideal für die Region Zadar und die nördlichen Kornaten.</li>
                  <li><strong>Split (SPU):</strong> Für die Region Šibenik und die südlichen Kornaten.</li>
                </ul>
                <p className="mt-3 text-sm text-black">Vom Flughafen zur Marina organisieren wir gerne einen 
                zuverlässigen Transfer für Sie und Ihre Crew.</p>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Per PKW</h4>
                <p className="mb-3 text-black">Kroatien ist aus Süddeutschland, Österreich und der Schweiz bequem mit dem Auto erreichbar. 
                Dies bietet den Vorteil, mehr Gepäck und persönlichen Proviant mitnehmen zu können.</p>
                <p className="text-sm text-black">Die meisten Marinas bieten sichere Parkmöglichkeiten für die 
                Dauer Ihres Törns.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Marinas & Ausgangshäfen: Perfekte Infrastruktur für Ihren Törn</h3>
            <p className="mb-4">
              Kroatien verfügt über eine exzellente maritime Infrastruktur mit einem dichten Netz an modernen Marinas und Stadthäfen.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">ACI Marinas</h4>
              <p className="text-black">Die ACI (Adriatic Croatia International Club) ist die größte Marina-Kette im 
              Mittelmeer und betreibt zahlreiche hochmoderne Marinas entlang der gesamten kroatischen Küste, auch in 
              Norddalmatien. Sie bieten umfassenden Service (Wasser, Strom, Sanitäranlagen, WLAN, Werften, Restaurants, Geschäfte).</p>
            </div>

            <h4 className="text-lg font-semibold mb-3">Wichtige Basen in Norddalmatien:</h4>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Zadar</strong> (Marina Borik, Marina Tankerkomerc, D-Marin Borik): Moderne Marinas direkt in oder nahe der Stadt Zadar.</li>
              <li><strong>Biograd na Moru</strong> (Marina Kornati, Marina Sangulin): Ein sehr beliebter Ausgangspunkt für Törns in die Kornaten.</li>
              <li><strong>Sukosan</strong> (Marina Dalmacija): Die größte Marina Kroatiens, südlich von Zadar gelegen.</li>
              <li><strong>Murter</strong> (Marina Hramina, Marina Betina): Ideale Basen für direkte Törns in die Kornaten.</li>
              <li><strong>Šibenik</strong> (Marina Mandalina): Eine moderne Marina nahe der historischen Stadt.</li>
              <li><strong>Rogoznica</strong> (Marina Frapa): Eine der schönsten und luxuriösesten Marinas an der Adria.</li>
            </ul>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Umfassende Flotte</h4>
              <p className="text-black mb-3">Unsere Flotte umfasst eine große Auswahl an Charteryachten für jeden Anspruch und jede Crewgröße:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Moderne Segelyachten (Monohulls):</strong> Ideal für sportliches Segeln und klassisches Seemannsgefühl.</li>
                <li><strong>Geräumige Katamarane:</strong> Perfekt für Familien und Gruppen, die Wert auf Komfort, Stabilität und viel Platz an Deck legen.</li>
                <li><strong>Schnelle Motoryachten:</strong> Für alle, die in kurzer Zeit große Distanzen zurücklegen möchten.</li>
              </ul>
              <p className="mt-3 text-black">Sie haben die Wahl: Bareboat-Charter für erfahrene Segler oder mit einem unserer 
              erfahrenen Skipper für entspannten Urlaub mit wertvollen Geheimtipps.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele: Ein Kaleidoskop der Adria</h3>
            <p className="mb-6">
              Ein Yachtcharter in Norddalmatien ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Zadar</h5>
                <p className="text-sm text-muted-foreground">Meeresorgel, Gruß an die Sonne, historische Altstadt</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Nationalpark Kornaten</h5>
                <p className="text-sm text-muted-foreground">89 Inseln, kristallklares Wasser, traditionelle Konobas</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Dugi Otok</h5>
                <p className="text-sm text-muted-foreground">Naturpark Telašćica, Sakarun Beach, spektakuläre Klippen</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Šibenik</h5>
                <p className="text-sm text-muted-foreground">UNESCO-Kathedrale, Festungen, Tor zum Nationalpark Krka</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Nationalpark Krka</h5>
                <p className="text-sm text-muted-foreground">Spektakuläre Wasserfälle, Flussfahrt nach Skradin</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Primošten & Rogoznica</h5>
                <p className="text-sm text-muted-foreground">Malerische Küstenorte, Marina Frapa, "Drachenauge"</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-semibold mb-2 text-black">Ankerplätze & Buchten</h5>
                  <p className="text-sm text-black">Unzählige geschützte Ankerbuchten mit kristallklarem Wasser. Viele bieten Mooringbojen.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-black">Nautische Highlights</h5>
                  <p className="text-sm text-black">Segeln durch Kornati-Passagen, Krka-Flussfahrt, Schnorcheln, Delfin-Beobachtung.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-black">Landaktivitäten</h5>
                  <p className="text-sm text-black">Historische Altstädte, Nationalpark-Wanderungen, Weinproben, lokale Küche.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ihr 7-Tage-Traumtörn in Norddalmatien</h3>
            <p className="mb-4 font-medium">Ab Biograd na Moru:</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Ankunft & Inselzauber (Biograd – Pašman/Ugljan)</h5>
                <p className="text-sm text-muted-foreground">Nach dem Check-in in Biograd setzen Sie die Segel für einen kurzen 
                Schlag zu einer ruhigen Bucht auf der Insel Pašman oder Ugljan. Genießen Sie das erste Bad im türkisblauen 
                Wasser und lassen Sie den Ankerabend ausklingen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Dugi Otok – Naturpark & Traumstrand (Pašman/Ugljan – Telašćica/Sakarun)</h5>
                <p className="text-sm text-muted-foreground">Segeln Sie zur Insel Dugi Otok. Besuchen Sie den Naturpark 
                Telašćica mit seinen beeindruckenden Klippen und dem Salzwassersee Mir. Am Nachmittag ankern Sie am berühmten 
                Sakarun Beach und genießen den weißen Sandstrand.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Nationalpark Kornaten – Insel-Labyrinth (Dugi Otok – Kornaten)</h5>
                <p className="text-sm text-muted-foreground">Tauchen Sie ein in das Labyrinth der Kornaten. Segeln Sie durch 
                die engen Passagen, ankern Sie in einer der unzähligen Buchten und genießen Sie die absolute Ruhe und Natur. 
                Übernachten Sie in einer Konoba-Bucht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Murter – Tor zu den Kornaten (Kornaten – Murter)</h5>
                <p className="text-sm text-muted-foreground">Verlassen Sie die Kornaten und segeln Sie zur Insel Murter. 
                Legen Sie in der Marina Hramina oder Betina an und erkunden Sie die charmanten Inselorte.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Šibenik & Krka-Wasserfälle (Murter – Šibenik/Skradin)</h5>
                <p className="text-sm text-muted-foreground">Segeln Sie nach Šibenik. Besuchen Sie die UNESCO-Kathedrale des 
                Heiligen Jakob. Alternativ fahren Sie den Fluss Krka hinauf bis Skradin und besuchen von dort aus die 
                spektakulären Wasserfälle des Nationalparks Krka.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Primošten & Rogoznica – Malerische Küstenorte (Šibenik/Skradin – Primošten/Rogoznica)</h5>
                <p className="text-sm text-muted-foreground">Kurs auf Primošten, eine malerische Stadt auf einer Halbinsel. 
                Am Nachmittag legen Sie in der luxuriösen Marina Frapa in Rogoznica an, einer der schönsten Marinas der Adria.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Abschied von Dalmatien (Primošten/Rogoznica – Biograd)</h5>
                <p className="text-sm text-muted-foreground">Nach einem letzten Frühstück an Bord segeln Sie zurück zu Ihrer 
                Charterbasis in Biograd und treten die Heimreise an – erfüllt von unvergesslichen Eindrücken aus Norddalmatien.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen: Segeln unter der Adriasonne</h3>
            <p className="mb-4">
              Das Wetter in Kroatien ist typisch mediterran mit heißen, trockenen Sommern und milden, feuchteren Wintern. 
              Die Segelsaison erstreckt sich von April bis in den späten Oktober.
            </p>
            
            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Typische Winde</h4>
              <p className="text-black mb-3">Die lokalen Windsysteme sind für die Törnplanung entscheidend:</p>
              <ul className="space-y-2 text-black">
                <li><strong>Bora (Bura):</strong> Ein starker, kalter Fallwind aus Nordost, der vor allem in den Wintermonaten 
                und in der Vor-/Nachsaison auftreten kann. Er bringt klaren Himmel und gute Sicht, kann aber sehr plötzlich 
                auftreten und hohe Wellen aufbauen.</li>
                <li><strong>Jugo (Scirocco):</strong> Ein warmer, feuchter Wind aus Südost, der oft Wolken und manchmal Regen 
                mit sich bringt. Er kündigt sich meist langsam an und kann zu drückender Schwüle und unruhiger See führen.</li>
                <li><strong>Maestral:</strong> Der vorherrschende Sommerwind, eine thermische Brise aus Nordwest, die tagsüber 
                für moderate und zuverlässige Segelbedingungen (3-5 Bft) sorgt und nachts oft einschläft.</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold mb-3">Saisonale Unterschiede:</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Frühling (April - Juni)</h5>
                <p className="text-black text-sm">Eine wunderbare Zeit zum Segeln. Die Natur blüht, angenehme Temperaturen, 
                weniger überfüllte Häfen. Die Winde können noch etwas kräftiger sein – ideal für ambitionierte Segler.</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Sommer (Juli - August)</h5>
                <p className="text-black text-sm">Hochsaison in Kroatien. Heiß, sonnig, der Maestral sorgt für angenehme 
                Segelbedingungen. Perfekt für Badeurlaub und Familien. Marinas sehr voll, höchste Preise.</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Herbst (September - Oktober)</h5>
                <p className="text-black text-sm">Für viele Kenner die beste Reisezeit. Aufgeheiztes Wasser, weniger 
                Touristen, sinkende Preise. Stabiles und warmes Wetter, leerere Häfen.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-2 text-black">Revier-Eignung für Erfahrungsstufen</h4>
              <p className="text-black">Norddalmatien ist ein sehr vielseitiges Revier. Die geschützten Inselgruppen wie die Kornaten oder die 
              Kanäle Dalmatiens sind auch für weniger erfahrene Segler und Familien gut geeignet. Die kurzen Distanzen und 
              die vielen Ausweichmöglichkeiten bieten viel Sicherheit. Für ambitionierte Segler bieten die offeneren 
              Seegebiete und die Möglichkeit von stärkeren Winden (Bora, Jugo) auch Herausforderungen.</p>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-2 text-black">Beste Reisezeit: Wann Ihr Kroatien-Traum wahr wird</h4>
              <p className="text-black">
                Die beste Reisezeit für einen Yachtcharter in Kroatien sind die Monate Mai, Juni und September. In dieser 
                Zeit sind die Temperaturen angenehm warm, das Wasser hat Badetemperatur, die Häfen sind nicht überfüllt und 
                die Preise sind moderater als in der Hochsaison (Juli/August).
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Vorschriften & Regeln: Wichtige Hinweise für einen reibungslosen Törn</h3>
            <p className="mb-6">
              Kroatien hat klare und umfassende Vorschriften für den Yachtsport, die der Sicherheit und dem Umweltschutz dienen.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Führerscheinpflicht</h5>
                <p className="text-sm">Für das Führen von Sportbooten auf der Adria ist der Sportbootführerschein See (SBF See) 
                obligatorisch. Für Yachten über 15m können weitergehende Scheine erforderlich sein.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Funkzeugnis (SRC)</h5>
                <p className="text-sm">Für UKW-Funkgeräte an Bord ist das Short Range Certificate (SRC) erforderlich.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Kroatisches Permit</h5>
                <p className="text-sm">Für ausländische Yachten ist eine "Vignette" oder "Permit" erforderlich. Ihr 
                Charterunternehmen kümmert sich in der Regel um diese Formalität.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Naturschutzgebiete</h5>
                <p className="text-sm">In Nationalparks (Kornaten, Krka) und Naturparks gelten besondere Regeln für das 
                Befahren, Ankern und Angeln. Für den Eintritt fallen Gebühren an.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Umweltauflagen</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Strikte Regeln zur Müllentsorgung (kein Müll über Bord)</li>
                <li>Abwasserentsorgung (keine Einleitung von Fäkalien in Küstennähe oder Naturschutzgebieten)</li>
                <li>Schutz mariner Lebensräume</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erfahrungen von Seglern: Eine Mischung aus Sport, Komfort und mediterranem Flair</h3>
            <p className="mb-6">
              Segler, die Norddalmatien besucht haben, berichten von einem Revier, das sowohl sportliche Herausforderungen 
              als auch entspannte Naturerlebnisse bietet.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-black">Positives</h4>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Inselvielfalt:</strong> Unzählige Inseln bieten enorme Vielfalt an Ankerplätzen</li>
                  <li><strong>Klares Wasser:</strong> Kristallklares, türkisblaues Wasser zum Schwimmen und Schnorcheln</li>
                  <li><strong>Hafeninfrastruktur:</strong> Moderne, saubere Marinas mit umfassendem Service</li>
                  <li><strong>Kurze Distanzen:</strong> Flexible Routenplanung durch nahe Inseln und Häfen</li>
                  <li><strong>Gastfreundschaft:</strong> Herzliche Kroaten, besonders in den Konobas</li>
                </ul>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-black">Herausforderungen</h4>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Wetterwechsel:</strong> Schnelle Umschläge mit plötzlichen Starkwinden (Bora, Jugo)</li>
                  <li><strong>Volle Marinas:</strong> Hochsaison kann beliebte Marinas sehr voll machen</li>
                  <li><strong>Untiefen:</strong> Außerhalb der Fahrwasser präzise Navigation erforderlich</li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Praktische Tipps aus der Seglergemeinschaft</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Wetter-App:</strong> Gute Wetter-App oder Wetterdienst sind unverzichtbar</li>
                  <li><strong>Hafenhandbuch:</strong> Aktuelles Handbuch für Navigation und Ankerplätze</li>
                </ul>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Konobas:</strong> Nutzen Sie die kleinen Inselrestaurants für frischen Fisch</li>
                  <li><strong>Bargeld:</strong> In kleineren Konobas oder auf Inseln ratsam</li>
                </ul>
              </div>
              <div className="w-full">
                <img src="/lovable-uploads/75055849-81d8-4d85-9318-6d8010d57e1f.png" alt="Frische Meeresfrüchte in einer dalmatinischen Konoba - ein kulinarisches Erlebnis" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit: Ihr Traumtörn in Kroatien – Ein Segelparadies an der Adria</h3>
            <p className="mb-6">
              Ein Yachtcharter in Kroatien ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, 
              jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, in einem lebhaften Hafenstädtchen 
              anlegen oder einfach auf dem offenen Meer die Sonne genießen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-3">Es ist die Kombination aus:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Abwechslungsreichen Segelbedingungen:</strong> Von geschützten Inselgruppen bis zu offeneren 
                  Seegebieten ist für jede Erfahrungsstufe etwas dabei.</li>
                  <li><strong>Atemberaubenden Küstenlandschaften:</strong> Dramatische Klippen, unzählige Inseln, grüne 
                  Nationalparks und malerische Buchten.</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-6 space-y-2 mt-8 md:mt-0">
                  <li><strong>Kultureller Vielfalt:</strong> Segeln Sie auf den Spuren der Römer, Venezianer und Slawen 
                  und entdecken Sie ein UNESCO-Welterbe nach dem anderen.</li>
                  <li><strong>Mediterranem Flair & Kulinarik:</strong> Genießen Sie frischen Fisch, lokale Weine und die 
                  köstliche kroatische Küche in jeder Region neu.</li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg font-medium mb-4">
                Kroatien bleibt ein spektakuläres Yachtcharter-Revier für alle, die das Abenteuer suchen und die Schönheit 
                der Adria vom Wasser aus erleben möchten. Wer die Regeln beachtet und sich gut vorbereitet, wird mit 
                einzigartigen Segelerlebnissen und einem tiefen Gefühl der Verbundenheit mit der Natur belohnt.
              </p>
              <h4 className="text-xl font-bold">Sind Sie bereit, die Segel zu setzen und Kroatien zu entdecken?</h4>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
              <h4 className="text-xl font-bold mb-4">Fordern Sie jetzt Ihr unverbindliches Angebot an!</h4>
              <p className="mb-6">
                Kontaktieren Sie uns noch heute. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
              </p>
              <CharterRequestForm>
                <Button size="lg" className="bg-[hsl(212_95%_25%)] hover:bg-[hsl(212_95%_20%)] text-white border-0 shadow-elegant transition-smooth">
                  Jetzt unverbindliches Angebot einholen
                </Button>
              </CharterRequestForm>
            </div>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Wichtige Segelbasen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cities.map((city, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{city.name}</CardTitle>
                      <CardDescription className="mt-2">{city.description}</CardDescription>
                    </div>
                    <Badge variant="secondary">{city.marinas} Marina{city.marinas > 1 ? 's' : ''}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2 text-primary" />
                      Highlights
                    </h4>
                    <ul className="space-y-1">
                      {city.highlights.map((highlight, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {highlight}
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>


        {/* CTA */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für Norddalmatien?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entdecken Sie die Kornati-Inseln und unberührte Naturschönheiten
          </p>
          <div className="flex justify-center">
            <CharterRequestForm>
              <Button size="lg" className="bg-[hsl(212_95%_25%)] hover:bg-[hsl(212_95%_20%)] text-white border-0 shadow-elegant transition-smooth">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        <TopDestinations />
      </div>
      </div>
    </>
  );
}