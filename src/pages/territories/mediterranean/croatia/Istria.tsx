import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { useMetaTags, generateStructuredData } from '@/hooks/useMetaTags';

import TerritoryMap from '@/components/TerritoryMap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Clock, Users, Anchor, Wind, Sun, Star } from 'lucide-react';
import TopDestinations from '@/components/TopDestinations';
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";

export default function Istria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta Tags
  useMetaTags({
    title: "Yachtcharter Istrien – Pula, Rovinj & Poreč",
    description: "Segeln Istrien: Venezianisches Flair, moderne Marinas, kurze Distanzen. Ab Pula & Rovinj. Segelyacht oder Katamaran mieten.",
    canonical: "https://premium-yachtcharter.com/reviere/mittelmeer/kroatien/istrien",
    ogTitle: "Yachtcharter Istrien – Pula, Rovinj & Poreč",
    ogDescription: "Segeln Istrien: Venezianisches Flair, moderne Marinas, kurze Distanzen. Ab Pula & Rovinj. Segelyacht oder Katamaran mieten.",
    ogImage: "https://premium-yachtcharter.com/assets/istria-sailing.jpg",
    ogUrl: "https://premium-yachtcharter.com/reviere/mittelmeer/kroatien/istrien",
    structuredData: {
      ...generateStructuredData.service("Istrien", "Yachtcharter in Istrien - Segeln vor der kroatischen Halbinsel mit venezianischem Flair"),
      ...generateStructuredData.breadcrumb([
        { name: "Start", url: "https://premium-yachtcharter.com/" },
        { name: "Reviere", url: "https://premium-yachtcharter.com/#reviere" },
        { name: "Mittelmeer", url: "https://premium-yachtcharter.com/reviere/mittelmeer" },
        { name: "Kroatien", url: "https://premium-yachtcharter.com/reviere/mittelmeer/kroatien" },
        { name: "Istrien", url: "https://premium-yachtcharter.com/reviere/mittelmeer/kroatien/istrien" }
      ])
    }
  });

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Nordkroatien' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '15+ Premium' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Mäßig bis stark' },
    { icon: Sun, label: 'Sonnentage', value: '280+ pro Jahr' }
  ];

  const cities = [
    {
      name: 'Pula',
      description: 'Historische Hafenstadt mit römischem Amphitheater',
      marinas: 3,
      highlights: ['Arena von Pula', 'ACI Marina Pula', 'Brijuni Nationalpark']
    },
    {
      name: 'Rovinj',
      description: 'Malerische Küstenstadt mit venezianischem Flair',
      marinas: 2,
      highlights: ['Altstadt', 'Marina Rovinj', 'Goldenes Kap']
    },
    {
      name: 'Poreč',
      description: 'UNESCO-Weltkulturerbe mit byzantinischen Mosaiken',
      marinas: 2,
      highlights: ['Euphrasius-Basilika', 'Marina Parentium', 'Zelena Laguna']
    },
    {
      name: 'Umag',
      description: 'Moderne Marina mit erstklassiger Ausstattung',
      marinas: 1,
      highlights: ['ACI Marina Umag', 'Tennisturniere', 'Weinregion']
    }
  ];

  const highlights = [
    'Kurze Anreise aus Deutschland und Österreich',
    'Kristallklares Wasser und versteckte Buchten',
    'Ausgezeichnete Marina-Infrastruktur',
    'Reiche Geschichte und Kultur',
    'Hervorragende istrische Küche und Weine',
    'Brijuni Nationalpark vor der Küste',
    'Milde Winde, ideal für Anfänger',
    'Zahlreiche Restaurants und Tavernen'
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
      <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png)' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <Link to="/reviere/mittelmeer/kroatien" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Kroatien
            </Link>
            <h1 className="text-5xl font-bold mb-4">Istrien</h1>
            <p className="text-xl text-white/90">Die nördlichste Halbinsel Kroatiens - perfekte Marina-Infrastruktur und venezianisches Flair</p>
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
                <BreadcrumbPage>Istrien</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <fact.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">{fact.label}</p>
                <p className="font-semibold">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map */}
        <div className="max-w-4xl mx-auto mb-16">
          <TerritoryMap
            region="Istrien Yachtcharter"
            center={{ lat: 45.1, lng: 13.9 }}
            zoom={7}
            markers={[
              {
                lat: 44.8664,
                lng: 13.8496,
                name: 'ACI Marina Pula',
                description: 'Hauptmarina im Zentrum von Pula'
              },
              {
                lat: 44.8234,
                lng: 13.8387,
                name: 'Marina Veruda',
                description: 'Große, geschützte Marina südlich von Pula'
              },
              {
                lat: 45.0816,
                lng: 13.6387,
                name: 'Rovinj',
                description: 'Malerische Küstenstadt mit Marina'
              },
              {
                lat: 45.2259,
                lng: 13.5966,
                name: 'Poreč',
                description: 'UNESCO-Weltkulturerbe mit Marina'
              },
              {
                lat: 45.4311,
                lng: 13.5289,
                name: 'Umag',
                description: 'ACI Marina Umag'
              },
              {
                lat: 45.1513,
                lng: 13.6053,
                name: 'Vrsar',
                description: 'Charmanter Fischerort mit Marina'
              },
              {
                lat: 44.9167,
                lng: 13.7667,
                name: 'Brijuni Nationalpark',
                description: 'Inselparadies und ehemaliger Präsidentensitz'
              }
            ]}
            className="shadow-lg"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Yachtcharter Istrien: Segeln zwischen römischer Geschichte und venezianischem Flair</h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Willkommen in Istrien, der größten Halbinsel der Adria und einem Segelrevier, das wie kein anderes Kultur, Kulinarik und Küstenzauber vereint. Oft als die „kroatische Toskana" bezeichnet, erwartet Sie hier eine Welt aus sanften, grünen Hügeln, mittelalterlichen Städtchen, weltberühmten Trüffeln und malerischen Weinbergen – alles umrahmt von kristallklarem, türkisblauem Wasser. Ein Yachtcharter in Istrien ist eine Reise für alle Sinne, ideal für Genießer, Kulturinteressierte und Familien.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Die Westküste Istriens ist gesäumt von historischen Hafenstädten, deren venezianische Architektur von einer reichen Vergangenheit erzählt. Von der antiken Metropole Pula als perfektem Ausgangspunkt für Ihren Törn bis zur romantischen Künstlerstadt Rovinj bietet dieses Revier eine perfekte Mischung aus entspanntem Segeln in Kroatien, faszinierenden Landgängen und erstklassiger Gastronomie. Die kurzen Distanzen zwischen den Zielen und die hervorragende Erreichbarkeit aus Mitteleuropa machen Istrien zu einer Top-Wahl für Ihren nächsten Charterurlaub.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ihre Ausgangshäfen in Istrien: Perfekter Startpunkt für Ihren Törn</h2>
            
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Die Region um Pula bietet eine exzellente Auswahl an modernen und bestens ausgestatteten Marinas, die als ideale Basis für Ihren Yachtcharter Istrien dienen. Jede Marina hat ihren eigenen Charakter und spezifische Vorteile.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>ACI Marina Pula:</strong> Eine Marina mit einer Lage, die ihresgleichen sucht. Sie liegt direkt im Herzen der Stadt, nur wenige Gehminuten vom majestätischen römischen Amphitheater entfernt. Hier verbinden Sie den Start Ihres Törns direkt mit einem tiefen Eintauchen in die 3.000 Jahre alte Geschichte Pulas. Die Marina bietet höchsten ACI-Standard und ist perfekt für Crews, die urbanes Flair schätzen.</li>
              <li><strong>Marina Tehnomont Veruda:</strong> Südlich von Pula in einer tief eingeschnittenen, perfekt geschützten Bucht gelegen, ist die Marina Veruda eine der größten und sichersten Marinas an der Adria. Mit über 600 Liegeplätzen und umfassenden Serviceeinrichtungen ist sie eine der Hauptbasen für Charterflotten. Ihre geschützte Lage macht sie zu einem idealen Ausgangs- und Zielhafen bei allen Wetterlagen.</li>
              <li><strong>Marina Polesana, Pula:</strong> Eine der neuesten Marinas in der Region, gelegen auf der Nordseite der Bucht von Pula. Sie besticht durch modernste Infrastruktur, großzügige Liegeplätze und einen Fokus auf Luxus und Komfort. Von hier aus haben Sie einen schnellen Zugang zum faszinierenden Brijuni-Nationalpark.</li>
              <li><strong>ACI Marina Pomer:</strong> Etwas weiter südlich in der geschützten Bucht von Medulin gelegen, ist die ACI Marina Pomer ein ruhigerer und naturnaher Ausgangspunkt. Sie ist besonders bei Familien und Crews beliebt, die nach dem Check-in direkt in die Ruhe der Natur eintauchen möchten. Pomer ist bekannt für seine Muschelzucht und die entspannte Atmosphäre.</li>
              <li><strong>Marina Funtana & Vrsar:</strong> Weiter nördlich an der Küste gelegen, sind diese Marinas ideale Ausgangspunkte für Törns, die sich auf die nördliche Küste Istriens mit Zielen wie Poreč und Novigrad konzentrieren. Sie sind kleiner, charmanter und bieten einen sehr direkten Zugang zu den malerischen Städtchen der Region.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Die unschlagbare Erreichbarkeit Istriens</h2>
            
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Einer der größten Vorteile eines Yachtcharters in Istrien ist die einfache und schnelle Anreise, insbesondere für Gäste aus dem deutschsprachigen Raum.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Mit dem PKW:</strong> Aus Süddeutschland, Österreich und der Schweiz ist Istrien in wenigen Stunden über gut ausgebaute Autobahnen bequem zu erreichen. Die Marinas bieten sichere und bewachte Parkmöglichkeiten für die gesamte Dauer Ihres Törns.</li>
              <li><strong>Per Flugzeug:</strong> Der internationale Flughafen Pula (PUY) wird von zahlreichen europäischen Städten direkt angeflogen. Vom Flughafen erreichen Sie die umliegenden Marinas in nur 15-20 Minuten per Taxi oder einem von uns organisierten Transfer.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Beliebte Törnziele: Eine Küste voller Juwelen</h2>
            
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Die Westküste Istriens ist wie eine Perlenkette, an der sich ein malerisches Highlight an das nächste reiht. Die kurzen Distanzen machen das Inselhopping hier besonders entspannt.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Pula: Ein Sprung in die Antike</h3>
            <p className="text-lg text-gray-700 mb-4">
              Ihre Reise beginnt in Pula, einer Stadt, die von der römischen Geschichte geprägt ist. Ankern Sie nicht nur in der Marina, sondern planen Sie Zeit für die Erkundung ein. Das sechstgrößte römische Amphitheater der Welt ist atemberaubend und wird heute für Konzerte und Festivals genutzt. Besuchen Sie auch den Augustus-Tempel und den Sergierbogen.
            </p>

            <div className="mb-8">
              <img 
                src="/lovable-uploads/7b74e2cd-6b59-409b-956f-21a342c849ee.png" 
                alt="Luftaufnahme von Pula mit dem römischen Amphitheater und Marina" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center italic">
                Pula - Das römische Amphitheater und die moderne Marina in perfekter Harmonie
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Nationalpark Brijuni: Titos Inselparadies</h3>
            <p className="text-lg text-gray-700 mb-3">
              Nur einen kurzen Schlag von Pula entfernt liegt der Brijuni-Archipel, ein Nationalpark von einzigartiger Schönheit. Die 14 Inseln waren einst die Sommerresidenz des jugoslawischen Präsidenten Tito, der hier Staatsgäste aus aller Welt empfing.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Nautische Besonderheiten:</strong> Das Ankern ist im gesamten Park streng verboten. Der einzige erlaubte Hafen ist der Hafen von Veliki Brijun. Eine vorherige Anmeldung bzw. Reservierung ist empfehlenswert.</li>
              <li><strong>Highlights an Land:</strong> Erkunden Sie die Insel mit einem gemieteten Elektro-Golfcart oder Fahrrad. Entdecken Sie römische Ruinen, Dinosaurier-Fußabdrücke und den berühmten Safari-Park mit Zebras, Lamas und Elefanten – Geschenke von Titos Staatsgästen.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Rovinj: Die romantische Künstlerstadt</h3>
            
            <div className="mb-6">
              <img 
                src="/lovable-uploads/54f48215-4790-47b9-a175-73813b6f57c1.png" 
                alt="Luftaufnahme von Rovinj mit dem charakteristischen Kirchturm und der Altstadt auf der Halbinsel" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center italic">
                Rovinj - Die auf einer Halbinsel erbaute Altstadt mit dem markanten Campanile der Heiligen Euphemia
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-4">
              Rovinj ist für viele das absolute Juwel Istriens. Die auf einer Halbinsel erbaute Altstadt drängt sich mit pastellfarbenen Häusern dicht aneinander und wird von der majestätischen Kirche der Heiligen Euphemia gekrönt. Schlendern Sie durch die verwinkelten, kopfsteingepflasterten Gassen, entdecken Sie die unzähligen Kunstgalerien und genießen Sie einen Sundowner in einer der Bars, die direkt an den Felsen am Wasser liegen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Vrsar und der Limski-Kanal</h3>
            <p className="text-lg text-gray-700 mb-4">
              Der charmante Fischerort Vrsar bietet eine moderne Marina und einen wunderschönen Blick auf die vorgelagerten kleinen Inseln. Von hier aus ist es nur ein Katzensprung zum Limski-Kanal, einem 12 Kilometer langen, fjordähnlichen Meeresarm. Der Kanal ist ein Naturschutzgebiet und bekannt für seine Austern- und Muschelzuchten. Ein Stopp in einem der Restaurants am Ufer für fangfrische Meeresfrüchte ist ein Muss.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Poreč: UNESCO-Weltkulturerbe</h3>
            <p className="text-lg text-gray-700 mb-6">
              Poreč ist eine weitere historische Perle an der Küste. Die Hauptattraktion ist die Euphrasius-Basilika aus dem 6. Jahrhundert, die wegen ihrer prächtigen byzantinischen Mosaike zum UNESCO-Weltkulturerbe gehört. Die Altstadt mit ihren römischen Straßenzügen lädt zum Bummeln und Verweilen ein.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Törnvorschlag 7 Tage Yachtcharter ab Pula – Kurs Süd bis Insel Olib</h2>
            
            <p className="text-lg text-gray-700 mb-4">
              Dieser Törn führt Sie von Istrien über die Kvarner Bucht in die faszinierende Inselwelt von Cres, Lošinj und den südlicheren Inseln bis nach Olib. Er bietet eine Mischung aus längeren Schlägen und ruhigen Ankerbuchten, ideal für Crews, die das wahre Inselhopping erleben möchten.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 1: Pula (Marina) → Kap Kamenjak / Medulin-Bucht</h4>
                <p className="text-gray-700">Nachdem Sie Ihre Yacht in Pula übernommen haben, setzen Sie Kurs nach Süden zur südlichsten Spitze Istriens. Das Naturreservat Kap Kamenjak lockt mit unzähligen kleinen Buchten und kristallklarem Wasser, perfekt für einen ersten Badestopp. Alternativ bietet die weitläufige Medulin-Bucht einen geschützten Ankerplatz für die Nacht und eine entspannte Atmosphäre.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 2: Kap Kamenjak / Medulin-Bucht → Cres (Cres-Stadt oder Osor)</h4>
                <p className="text-gray-700">Heute steht eine Passage über den Kvarner Golf an. Ihr Ziel ist die Insel Cres. Je nach Wetter und Vorliebe können Sie die charmante Stadt Cres mit ihrer historischen Altstadt und Marina anlaufen oder den idyllischen Ort Osor an der schmalen Meerenge zwischen Cres und Lošinj wählen. Achten Sie auf die Brückenöffnungszeiten in Osor, falls Sie die Meerenge passieren möchten.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 3: Cres (Cres-Stadt oder Osor) → Mali Lošinj</h4>
                <p className="text-gray-700">Nach einem entspannten Morgen segeln Sie weiter nach Mali Lošinj, der größten Stadt auf der Insel Lošinj. Die Stadt ist bekannt für ihr heilsames Klima, ihre duftenden Pinienwälder und ihre moderne, gut ausgestattete Marina. Erkunden Sie die Uferpromenade, besuchen Sie den Garten der Düfte oder genießen Sie einen Spaziergang entlang der malerischen Čikat-Bucht.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 4: Mali Lošinj → Ilovik / Susak</h4>
                <p className="text-gray-700">Ihr Kurs führt Sie heute weiter nach Süden zu den kleineren, ruhigeren Inseln. Ilovik, oft als "Insel der Blumen" bezeichnet, ist bekannt für sein großes Bojenfeld und die vielen Fischrestaurants. Susak ist eine einzigartige Sandinsel mit flachen, goldenen Stränden, die zum Verweilen einladen. Beide Inseln bieten eine authentische kroatische Atmosphäre abseits des großen Trubels.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 5: Ilovik / Susak → Olib</h4>
                <p className="text-gray-700">Heute erreichen Sie die Insel Olib, ein wahres Paradies für Ruhesuchende. Die Insel ist autofrei und bietet wunderschöne, weit geschwungene Sandbuchten wie Slatinica mit türkisfarbenem Wasser. Verbringen Sie den Tag mit Schwimmen, Schnorcheln und Entspannen in dieser idyllischen Umgebung.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 6: Olib → Unije / Lošinj (Rückweg)</h4>
                <p className="text-gray-700">Beginnen Sie heute Ihren Rückweg nach Norden. Ein idealer Zwischenstopp könnte die Insel Unije sein, eine weitere ruhige Insel mit einer schönen Bucht zum Ankern. Alternativ können Sie eine der vielen geschützten Buchten an der Westküste von Lošinj ansteuern, die Sie auf der Hinfahrt vielleicht verpasst haben.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 7: Unije / Lošinj → Pula (Marina)</h4>
                <p className="text-gray-700">Der letzte Schlag Ihres Törns führt Sie zurück über den Kvarner Golf nach Pula. Genießen Sie die Weite des Meeres und die letzten Sonnenstrahlen an Deck. Nach dem Anlegen in Ihrer Ausgangsmarina bleibt noch Zeit für die Übergabe der Yacht und einen letzten kroatischen Abend, bevor Sie die Heimreise antreten.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Wetter und Windbedingungen in Istrien</h2>
            
            <p className="text-lg text-gray-700 mb-3">
              Das Revier Istrien ist für seine milden und meist gutmütigen Segelbedingungen bekannt und eignet sich hervorragend für Familien und weniger erfahrene Crews.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Im Sommer dominiert der thermische Maestral aus Nordwest, der für zuverlässigen Segelwind am Nachmittag sorgt.</li>
              <li>Der Jugo (Südostwind) kann besonders im Frühling und Herbst auftreten und baut eine moderate Welle auf.</li>
              <li>Die Bora aus Nordost ist in Istrien schwächer ausgeprägt als in der Kvarner Bucht, kann aber dennoch für kräftige Böen sorgen. Die Küstenstruktur bietet jedoch stets schnell erreichbare, sichere Häfen und Buchten.</li>
            </ul>

            <p className="text-lg text-gray-700 mb-6">
              Das Revier ist im Sommer ideal für Einsteiger und Familien. In der Vor- und Nachsaison bietet es auch für erfahrene Skipper reizvolle Bedingungen.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Beste Reisezeit für Ihren Istrien-Törn</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Die Segelsaison in Istrien dauert von Mai bis Oktober. Die absolut beste Zeit für einen Yachtcharter ist die Vor- und Nachsaison im Mai, Juni und September. In diesen Monaten genießen Sie angenehm warme Temperaturen, stabile Winde, das Meer ist bereits oder noch warm genug zum Baden, und die Häfen und Städte sind nicht überlaufen. Sie erleben die Region von ihrer authentischsten Seite.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Fazit: Istrien – Ein Fest für die Sinne</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ein Yachtcharter in Istrien ist die perfekte Symbiose aus entspanntem Segeln, kultureller Entdeckungsreise und kulinarischem Hochgenuss. Die beeindruckenden Küstenlandschaften, das reiche historische Erbe von den Römern bis zu den Venezianern und das unvergleichliche mediterrane Flair machen diese Region zu einem unvergesslichen Ziel. Ob Sie eine moderne Segelyacht, einen geräumigen Katamaran oder eine Charter mit erfahrenem Skipper suchen – Istrien wird Sie verzaubern.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bereit für die kroatische Toskana auf dem Wasser?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Fordern Sie jetzt Ihr unverbindliches Angebot für einen Bareboat-Charter oder eine Yacht mit Skipper an. Unser erfahrenes Team ist auf Istrien spezialisiert und berät Sie gerne bei der Planung Ihres Traumtörns.
            </p>

            {/* CTA within main box */}
            <div className="bg-primary/5 rounded-lg p-6 text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">Bereit für Ihr Istrien-Abenteuer?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Entdecken Sie die venezianische Küste Kroatiens mit perfekter Marina-Infrastruktur
              </p>
              <div className="flex justify-center">
                <CharterRequestForm>
                  <Button size="lg" className="bg-[hsl(212_95%_25%)] hover:bg-[hsl(212_95%_20%)] text-white border-0 shadow-elegant transition-smooth">
                    Charter anfragen
                  </Button>
                </CharterRequestForm>
              </div>
            </div>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-16 hidden md:block">
          <h2 className="text-3xl font-bold text-center mb-8">Wichtige Segelbasen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cities.map((city, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
                      {city.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16 hidden md:block">
          <h2 className="text-3xl font-bold text-center mb-8">Warum Istrien?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Star className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <p className="text-sm">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        <TopDestinations />
        </div>
      </div>
    </>
  );
}