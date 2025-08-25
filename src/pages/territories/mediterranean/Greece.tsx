import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Clock, Users, Anchor, Wind, Sun, Star, Calendar } from 'lucide-react';
import TerritoryMap from '@/components/TerritoryMap';

export default function Greece() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Ägäis & Ionisches Meer' },
    { icon: Clock, label: 'Beste Zeit', value: 'April - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Inseln', value: '6.000+ Inseln' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Meltemi ideal' },
    { icon: Sun, label: 'Sonnentage', value: '300+ pro Jahr' }
  ];

  const regions = [
    {
      name: 'Saronischer Golf',
      description: 'Entspanntes Einstiegsrevier für Genießer und Familien',
      marinas: 8,
      highlights: ['Ägina', 'Poros', 'Hydra', 'Spetses', 'Methana']
    },
    {
      name: 'Kykladen',
      description: 'Sportliches Revier für erfahrene Segler und Abenteurer',
      marinas: 15,
      highlights: ['Mykonos', 'Santorini', 'Paros', 'Naxos', 'Syros', 'Milos']
    },
    {
      name: 'Ionische Inseln',
      description: 'Grünes Inselparadies für Familien und Genießer',
      marinas: 12,
      highlights: ['Korfu', 'Lefkas', 'Kefalonia', 'Zakynthos', 'Ithaka', 'Paxi']
    },
    {
      name: 'Dodekanes',
      description: 'Geschichtsträchtige Inseln zwischen Kreta und Türkei',
      marinas: 10,
      highlights: ['Rhodos', 'Kos', 'Symi', 'Patmos', 'Leros', 'Kalymnos']
    },
    {
      name: 'Sporaden',
      description: 'Ursprüngliches Naturrevier für Ruhesuchende',
      marinas: 6,
      highlights: ['Skiathos', 'Skopelos', 'Alonnisos', 'Skyros']
    },
    {
      name: 'Nordgriechenland',
      description: 'Geheimtipp für Individualisten und Entdecker',
      marinas: 5,
      highlights: ['Thessaloniki', 'Chalkidiki', 'Kavala', 'Alexandroupoli']
    }
  ];

  const highlights = [
    'Über 6.000 Inseln und Inselchen',
    'Konstante Meltemi-Winde',
    'Authentische griechische Tavernen',
    'Kristallklares türkises Wasser',
    'Reiche antike Geschichte',
    'UNESCO-Weltkulturerbe Stätten',
    'Perfekte Segelbedingungen',
    'Mediterrane Gastfreundschaft'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-top" style={{
        backgroundImage: 'url(/lovable-uploads/f5227d64-8443-47fd-be3d-af465828b4a5.png)'
      }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <Link to="/reviere/mittelmeer" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zum Mittelmeer
            </Link>
            <h1 className="text-5xl font-bold mb-4">Griechenland</h1>
            <p className="text-xl text-white/90">Die Wiege des Segelns - Trauminseln der Ägäis und des Ionischen Meeres</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
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
                <BreadcrumbPage>Griechenland</BreadcrumbPage>
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

        {/* Territory Map */}
        <div className="mb-16">
        <TerritoryMap 
          region="Griechenland" 
          center={{ lat: 38.5, lng: 22.5 }} 
          zoom={2}
          maptype="satellite"
            markers={[
              { lat: 37.9755, lng: 23.7348, name: 'Athen', description: 'Hauptstadt und Ausgangspunkt Saronischer Golf' },
              { lat: 39.6243, lng: 19.9217, name: 'Korfu', description: 'Tor zu den Ionischen Inseln' },
              { lat: 37.4467, lng: 25.3289, name: 'Mykonos', description: 'Herz der Kykladen' },
              { lat: 36.3932, lng: 25.4615, name: 'Santorini', description: 'Spektakuläre Caldera' },
              { lat: 36.4411, lng: 28.2220, name: 'Rhodos', description: 'Hauptinsel der Dodekanes' }
            ]} 
            className="max-w-4xl mx-auto" 
          />
        </div>

        {/* Detailed Region Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Griechenland</h2>
            <p className="text-xl text-muted-foreground">
              Segeln im Land der Götter – Ihr Traumtörn durch das ursprüngliche Mittelmeer
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Griechenland – das Land der Mythen, des Lichts und der unzähligen Inseln. Ein Paradies für Segler, 
              Motorbootfahrer und Wassersportliebhaber, das mit türkisfarbenem Wasser, spektakulären Küsten, 
              antiker Geschichte und mediterranem Lebensgefühl begeistert. Ein Yachtcharter in Griechenland ist 
              weit mehr als ein Urlaub: Es ist die Einladung, das ursprüngliche Mittelmeer, authentische 
              Gastfreundschaft und eine der abwechslungsreichsten Inselwelten Europas hautnah zu erleben.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Ob Sie als Familie, Paar, Gruppe oder ambitionierter Skipper unterwegs sind – Griechenland bietet für 
              jeden Anspruch das passende Segelrevier. Die Vielfalt der Regionen reicht von geschützten Buchten im 
              <Link to="/reviere/mittelmeer/griechenland/athen-saronischer-golf" className="text-primary hover:underline">Saronischen Golf</Link> über die sportlichen <Link to="/reviere/mittelmeer/griechenland/kykladen" className="text-primary hover:underline">Kykladen</Link> bis zu den grünen <Link to="/reviere/mittelmeer/griechenland/ionische-inseln" className="text-primary hover:underline">Ionischen Inseln</Link>, den kulturell 
              reichen <Link to="/reviere/mittelmeer/griechenland/dodekanes" className="text-primary hover:underline">Dodekanes</Link>, den ursprünglichen <Link to="/reviere/mittelmeer/griechenland/sporaden" className="text-primary hover:underline">Sporaden</Link> und den Geheimtipps Nordgriechenlands.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              In diesem umfassenden Guide finden Sie alles, was Sie für Ihre Törnplanung wissen müssen: 
              Reviercharakter, Windverhältnisse, Highlights, Routenvorschläge, Erfahrungslevel und praktische Tipps.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Die griechischen Segelreviere im Überblick</h3>
            <p className="text-lg leading-relaxed mb-6">
              Griechenland bietet eine unvergleichliche Vielfalt an Segelrevieren, die für jeden Geschmack und 
              jede Erfahrungsstufe das Richtige bereithalten.
            </p>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">1. <Link to="/reviere/mittelmeer/griechenland/athen-saronischer-golf" className="text-primary hover:underline">Athen & Saronischer Golf</Link>: Das entspannte Einstiegsrevier</h4>
            <p className="mb-4">
              Der <Link to="/reviere/mittelmeer/griechenland/athen-saronischer-golf" className="text-primary hover:underline">Saronische Golf</Link> südwestlich von Athen ist das perfekte Revier für Segelneulinge, Familien und alle, 
              die entspanntes Inselhüpfen mit kurzen Schlägen suchen.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Ägina:</strong> Pistazien, Tempel des Aphaia, lebhafte Hafenstadt</li>
              <li><strong>Poros:</strong> Enge Durchfahrt, Pinienwälder, charmante Promenade</li>
              <li><strong>Hydra:</strong> Autofreie Insel, Künstlerflair, spektakulärer Naturhafen</li>
              <li><strong>Spetses:</strong> Edle Villen, Bougainvillea, Strände und Tavernen</li>
              <li><strong>Methana & Peloponnes:</strong> Vulkanlandschaften, antike Stätten, Thermen</li>
            </ul>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black"><strong>Wind & Wetter:</strong> Im Sommer weht der Meltemi hier deutlich 
              schwächer als in der Ägäis. Typisch sind thermische Brisen (3-5 Bft) aus Südwest bis West, 
              selten Starkwind oder hohe Welle.</p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">2. <Link to="/reviere/mittelmeer/griechenland/kykladen" className="text-primary hover:underline">Kykladen</Link>: Das sportliche Revier für Abenteurer</h4>
            <p className="mb-4">
              Die <Link to="/reviere/mittelmeer/griechenland/kykladen" className="text-primary hover:underline">Kykladen</Link> sind das klassische Bild der Ägäis: blendend weiße Häuser, blaue Kuppeln, 
              karge Felsen, Windmühlen und türkisfarbenes Wasser.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Syros:</strong> Verwaltungssitz, neoklassische Architektur, lebendige Stadt Ermoupolis</li>
              <li><strong>Mykonos:</strong> Jetset, Partyleben, enge Altstadt, Windmühlen, Strände</li>
              <li><strong>Delos:</strong> UNESCO-Welterbe, antikes Heiligtum</li>
              <li><strong>Paros & Naxos:</strong> Traditionelle Dörfer, Tavernen, Surf- und Kitespots</li>
              <li><strong>Santorini:</strong> Spektakuläre Caldera, Wein, Sonnenuntergänge</li>
              <li><strong>Milos:</strong> Bizarre Felsformationen, bunte Häfen, Kleftiko-Höhlen</li>
            </ul>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black"><strong>Wind & Wetter:</strong> Im Sommer dominiert der Meltemi, 
              ein starker, trockener Nordwind (4-7 Bft, gelegentlich mehr), der für sportliches Segeln sorgt. 
              Für erfahrene Skipper und sportliche Crews geeignet.</p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">3. <Link to="/reviere/mittelmeer/griechenland/ionische-inseln" className="text-primary hover:underline">Ionische Inseln</Link>: Das grüne Inselparadies</h4>
            <p className="mb-4">
              Das <Link to="/reviere/mittelmeer/griechenland/ionische-inseln" className="text-primary hover:underline">Ionische Meer</Link> westlich des griechischen Festlands ist ein Traumrevier für entspanntes Segeln, 
              Familien und Genießer.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Korfu:</strong> Venezianische Altstadt, Strände, Olivenhaine, Sissi-Palast</li>
              <li><strong>Paxos & Antipaxos:</strong> Smaragdgrünes Wasser, Höhlen, ruhige Buchten</li>
              <li><strong>Lefkas:</strong> Moderne Marina, Brücke zum Festland, Surferparadies Vasiliki</li>
              <li><strong>Kefalonia:</strong> Myrtos Beach, Melissani-Höhle, Wein und Fischerdörfer</li>
              <li><strong>Zakynthos:</strong> Navagio Beach (Schiffswrack), blaue Grotten, Meeresschildkröten</li>
            </ul>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Marinas & Ausgangshäfen</h4>
              <p className="text-black mb-3">Griechenland verfügt über eine hervorragende maritime Infrastruktur:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Athen (Alimos, Kalamaki, Lavrion):</strong> Perfekt für <Link to="/reviere/mittelmeer/griechenland/athen-saronischer-golf" className="text-primary hover:underline">Saronischer Golf</Link> und <Link to="/reviere/mittelmeer/griechenland/kykladen" className="text-primary hover:underline">Kykladen</Link></li>
                <li><strong>Korfu, Lefkas, Preveza:</strong> Für <Link to="/reviere/mittelmeer/griechenland/ionische-inseln" className="text-primary hover:underline">Ionische Inseln</Link></li>
                <li><strong>Kos, Rhodos:</strong> Für <Link to="/reviere/mittelmeer/griechenland/dodekanes" className="text-primary hover:underline">Dodekanes</Link></li>
                <li><strong>Skiathos, Volos:</strong> Für <Link to="/reviere/mittelmeer/griechenland/sporaden" className="text-primary hover:underline">Sporaden</Link></li>
                <li><strong>Thessaloniki, Chalkidiki:</strong> Für Nordgriechenland</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ihr 7-Tage-Traumtörn in den <Link to="/reviere/mittelmeer/griechenland/kykladen" className="text-primary hover:underline">Kykladen</Link></h3>
            <p className="mb-4 font-medium">Ab Marina Lavrion (Athen):</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Ankunft & Einstieg (Lavrion – Kea)</h5>
                <p className="text-sm text-muted-foreground">Nach dem Check-in segeln Sie zur nahegelegenen Insel Kea. 
                Legen Sie im charmanten Hafen von Korissia an oder ankern Sie in einer ruhigen Bucht. 
                Erster Eindruck der Kykladen-Atmosphäre.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Syros – Hauptstadt der Kykladen (Kea – Syros)</h5>
                <p className="text-sm text-muted-foreground">Segeln Sie nach Syros, dem Verwaltungssitz der Kykladen. 
                Erkunden Sie die neoklassische Architektur von Ermoupolis und genießen Sie das lebendige Stadtleben.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Mykonos – Jetset und Windmühlen (Syros – Mykonos)</h5>
                <p className="text-sm text-muted-foreground">Kurs auf die berühmteste Insel der Kykladen. 
                Schlendern Sie durch die engen Gassen der Altstadt, besuchen Sie die ikonischen Windmühlen 
                und erleben Sie das pulsierende Nachtleben.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Delos & Paros – Antike und Tradition (Mykonos – Delos – Paros)</h5>
                <p className="text-sm text-muted-foreground">Besuchen Sie das UNESCO-Welterbe Delos mit seinen 
                antiken Ruinen. Anschließend weiter nach Paros, bekannt für traditionelle Dörfer und 
                hervorragende Tavernen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Naxos – Die grüne Kykladeninsel (Paros – Naxos)</h5>
                <p className="text-sm text-muted-foreground">Kurzer Schlag zur größten Kykladeninsel. 
                Naxos bietet traumhafte Sandstrände, fruchtbare Täler und das beeindruckende 
                Portara-Tor bei Sonnenuntergang.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Kythnos – Authentisches Inselleben (Naxos – Kythnos)</h5>
                <p className="text-sm text-muted-foreground">Segeln Sie zu der weniger touristischen Insel Kythnos. 
                Genießen Sie authentisches griechisches Inselleben, Thermalquellen und unberührte Buchten.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Rückkehr (Kythnos – Lavrion)</h5>
                <p className="text-sm text-muted-foreground">Entspannter Rückschlag zum Ausgangspunkt. 
                Check-out und Abreise mit unvergesslichen Erinnerungen an die Kykladen.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen: Segeln unter der Mittelmeersonne</h3>
            <p className="mb-4">
              Das Wetter in Griechenland ist typisch mediterran mit heißen, trockenen Sommern und milden Wintern. 
              Die Segelsaison erstreckt sich von April bis in den späten Oktober.
            </p>
            
            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Typische Winde</h4>
              <p className="text-black mb-3">Die lokalen Windsysteme sind für die Törnplanung entscheidend:</p>
              <ul className="space-y-2 text-black">
                <li><strong>Meltemi:</strong> Der vorherrschende Sommerwind in der Ägäis aus Nord bis Nordwest 
                (4-7 Bft), der für zuverlässige aber sportliche Segelbedingungen sorgt.</li>
                <li><strong>Maestral:</strong> Thermischer Wind in den Ionischen Inseln (3-5 Bft), 
                ideal für entspanntes Familiensegeln.</li>
                <li><strong>Etesien:</strong> Konstante Nordwinde im Sommer, die für stabile Wetterbedingungen sorgen.</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold mb-3">Saisonale Unterschiede:</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Frühling (April - Juni)</h5>
                <p className="text-black text-sm">Ideal für sportliche Segler. Meltemi noch mäßig, 
                Natur in voller Blüte, angenehme Temperaturen, weniger Touristen. 
                Perfekt für authentische Griechenland-Erfahrung.</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Sommer (Juli - August)</h5>
                <p className="text-black text-sm">Hochsaison mit konstantem Meltemi. Ideale Bedingungen 
                für erfahrene Segler, aber volle Häfen und höchste Preise. 
                Perfektes Badewetter und Partystimmung.</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Herbst (September - Oktober)</h5>
                <p className="text-black text-sm">Beste Reisezeit für Genießer. Warmes Wasser, 
                schwächere Winde, leere Strände und moderate Preise. 
                Ideale Bedingungen für Familien und Einsteiger.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Vorschriften & Regeln: Wichtige Hinweise für einen reibungslosen Törn</h3>
            <p className="mb-6">
              Griechenland hat klare Vorschriften für den Yachtsport, die der Sicherheit und dem Umweltschutz dienen.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Führerscheinpflicht</h5>
                <p className="text-sm">Für eine Yachtcharter ohne Skipper in Griechenland sind ein amtlicher, international anerkannter Segelschein (wie SKS oder ICC) für den Skipper, ein zweites erwachsenes Crewmitglied mit Segelerfahrung und ein SRC-Funkschein zwingend erforderlich.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Funkzeugnis (SRC)</h5>
                <p className="text-sm">Für UKW-Funkgeräte an Bord ist das Short Range Certificate (SRC) Pflicht.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Griechisches Transit Log</h5>
                <p className="text-sm">Für ausländische Yachten ist ein Transit Log erforderlich, 
                das die Charterfirma normalerweise organisiert.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Hafenformalitäten</h5>
                <p className="text-sm">In den meisten Häfen gibt es einen Hafenmeister. 
                Die Liegegebühren sind meist moderat und werden vor Ort entrichtet.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Umweltauflagen</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Strikte Regeln zur Müllentsorgung (kein Müll über Bord)</li>
                <li>Abwasserentsorgung nur an Land oder in designierten Bereichen</li>
                <li>Schutz mariner Lebensräume - Ankern auf Seegraswiesen ist verboten</li>
                <li>Respekt vor Naturschutzgebieten und archäologischen Stätten</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erfahrungen von Seglern: Zwischen Mythos und Realität</h3>
            <p className="mb-6">
              Segler, die Griechenland besucht haben, berichten von einem Revier voller Kontraste 
              und unvergesslicher Erlebnisse.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-black">Positives</h4>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Inselvielfalt:</strong> Über 6.000 Inseln bieten unendliche Entdeckungsmöglichkeiten</li>
                  <li><strong>Authentizität:</strong> Traditionelle Tavernen, lokale Feste und echte griechische Gastfreundschaft</li>
                  <li><strong>Geschichte:</strong> Segeln auf den Spuren der Antike mit UNESCO-Welterbe an jeder Ecke</li>
                  <li><strong>Naturschönheit:</strong> Kristallklares Wasser, spektakuläre Sonnenuntergänge, vielfältige Landschaften</li>
                  <li><strong>Kulinarik:</strong> Frischer Fisch, lokale Weine, mediterrane Küche vom Feinsten</li>
                </ul>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-black">Herausforderungen</h4>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Meltemi:</strong> Kann in den Kykladen sehr stark werden (6-8 Bft), 
                  erfordert Erfahrung und gute Wetterbeobachtung</li>
                  <li><strong>Navigation:</strong> Viele Inseln und Untiefen erfordern präzise Navigation 
                  und aktuelle Seekarten</li>
                  <li><strong>Infrastruktur:</strong> Auf kleineren Inseln kann die marina-technische 
                  Ausstattung einfacher sein</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit: Ihr Traumtörn in Griechenland – Segeln im Land der Götter</h3>
            <p className="mb-6">
              Ein Yachtcharter in Griechenland ist ein Versprechen für einen unvergesslichen Urlaub. 
              Es ist die Freiheit, jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht 
              ansteuern, in einem lebhaften Hafenstädtchen anlegen oder einfach auf dem offenen Meer 
              die Sonne genießen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-3">Es ist die Kombination aus:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Abwechslungsreichen Segelbedingungen:</strong> Von geschützten Inselgruppen 
                  bis zu sportlichen Ägäis-Passagen ist für jede Erfahrungsstufe etwas dabei.</li>
                  <li><strong>Atemberaubenden Küstenlandschaften:</strong> Dramatische Klippen, 
                  unzählige Inseln, grüne Nationalparks und malerische Buchten.</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-6 space-y-2 mt-8 md:mt-0">
                  <li><strong>Kultureller Vielfalt:</strong> Segeln Sie auf den Spuren der Antike, 
                  entdecken Sie UNESCO-Welterbe und erleben Sie mediterrane Lebensfreude.</li>
                  <li><strong>Mediterranem Flair & Kulinarik:</strong> Genießen Sie frischen Fisch, 
                  lokalen Wein, Olivenöl und die berühmte griechische Gastfreundschaft.</li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg font-medium mb-4">
                Griechenland bleibt ein spektakuläres Yachtcharter-Revier für alle, die das Abenteuer suchen 
                und die Schönheit des Mittelmeers vom Wasser aus erleben möchten. Wer die Regeln beachtet 
                und sich gut vorbereitet, wird mit einzigartigen Segelerlebnissen und einem tiefen Gefühl 
                der Verbundenheit mit der Natur belohnt.
              </p>
              <h4 className="text-xl font-bold">Sind Sie bereit, die Segel zu setzen und Griechenland zu entdecken?</h4>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
              <h4 className="text-xl font-bold mb-4">Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Griechenland an!</h4>
              <p className="mb-6">
                Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. 
                Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
              </p>
            </div>
          </div>
        </div>

        {/* Regions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Wichtige Segelreviere</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{region.name}</CardTitle>
                      <CardDescription className="mt-2">{region.description}</CardDescription>
                    </div>
                    <Badge variant="secondary">{region.marinas} Marina{region.marinas > 1 ? 's' : ''}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2 text-primary" />
                      Highlights
                    </h4>
                    <ul className="space-y-1">
                      {region.highlights.map((highlight, idx) => (
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

        {/* Greece Regions Navigation */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Griechische Segelreviere entdecken</h3>
          <p className="text-center text-muted-foreground mb-8">
            Entdecken Sie die schönsten Segelreviere Griechenlands im Detail
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/reviere/mittelmeer/griechenland/athen-saronischer-golf" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Athen & Saronischer Golf
                  </CardTitle>
                  <CardDescription>
                    Das entspannte Einstiegsrevier für Familien und Genießer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">8 Marinas</Badge>
                    <Badge variant="outline">Alle Levels</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Kurze Schläge zwischen charmanten Inseln wie Ägina, Poros, Hydra und Spetses.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Highlights: Ägina • Poros • Hydra • Spetses • Methana
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/reviere/mittelmeer/griechenland/kykladen" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Kykladen
                  </CardTitle>
                  <CardDescription>
                    Sportliches Revier für erfahrene Segler und Abenteurer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">15 Marinas</Badge>
                    <Badge variant="outline">Fortgeschritten</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Klassische Ägäis mit Meltemi-Winden, weißen Häusern und türkisfarbenem Wasser.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Highlights: Mykonos • Santorini • Paros • Naxos • Syros • Milos
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/reviere/mittelmeer/griechenland/ionische-inseln" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Ionische Inseln
                  </CardTitle>
                  <CardDescription>
                    Grünes Inselparadies für Familien und Genießer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">12 Marinas</Badge>
                    <Badge variant="outline">Alle Levels</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Entspanntes Segeln zwischen grünen Inseln mit venezianischem Charme.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Highlights: Korfu • Lefkas • Kefalonia • Zakynthos • Ithaka • Paxi
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/reviere/mittelmeer/griechenland/dodekanes" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Dodekanes
                  </CardTitle>
                  <CardDescription>
                    Geschichtsträchtige Inseln zwischen Kreta und der Türkei
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">10 Marinas</Badge>
                    <Badge variant="outline">Mittelstufe</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Reiche Geschichte, mittelalterliche Städte und kristallklares Wasser.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Highlights: Rhodos • Kos • Symi • Patmos • Leros • Kalymnos
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/reviere/mittelmeer/griechenland/sporaden" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Sporaden
                  </CardTitle>
                  <CardDescription>
                    Ursprüngliches Naturrevier für Ruhesuchende
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">6 Marinas</Badge>
                    <Badge variant="outline">Alle Levels</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Unberührte Natur, Pinienwälder und ruhige Buchten abseits der Touristenströme.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Highlights: Skiathos • Skopelos • Alonnisos • Skyros
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Warum Griechenland?</h2>
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

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Häufig gestellte Fragen (FAQ) zum Yachtcharter in Griechenland</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="windverhaeltnisse">
                <AccordionTrigger>Wie sind die Windverhältnisse in Griechenland?</AccordionTrigger>
                <AccordionContent>
                  Im Sommer weht in der Ägäis der Meltemi (N-NW) mit 4-7 Bft, oft konstant und sportlich, besonders in den Kykladen und Dodekanes. Im Ionischen Meer und Saronischen Golf dominiert der thermische Maestral (NW, 3-5 Bft) – angenehm und familienfreundlich.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="segelscheine">
                <AccordionTrigger>Welche Segelscheine brauche ich für eine Bareboat-Charter?</AccordionTrigger>
                <AccordionContent>
                  Für eine Yachtcharter ohne Skipper in Griechenland ist ein amtlicher, international anerkannter Segelschein zwingend erforderlich, wobei der deutsche Sportküstenschifferschein (SKS) oder das International Certificate of Competence (ICC) akzeptiert werden. Der Sportbootführerschein See reicht häufig nicht aus. Neben dem Skipper muss zudem ein zweites erwachsenes Crewmitglied mit grundlegenden Segelkenntnissen an Bord sein, dessen Erfahrung schriftlich bestätigt wird. Des Weiteren ist ein SRC-Funkschein für die Bedienung der UKW-Anlage auf der Charteryacht vorgeschrieben. Auch andere international anerkannte Scheine wie der britische RYA Day Skipper werden von den griechischen Behörden anerkannt.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="segelerfahrung">
                <AccordionTrigger>Wie viel Segelerfahrung ist für Griechenland nötig?</AccordionTrigger>
                <AccordionContent>
                  Für den Saronischen Golf, Ionische Inseln und Sporaden reicht eine solide Basis-Erfahrung. Für die Kykladen, Dodekanes und offene Ägäis mit häufigem Starkwind und längeren Schlägen ist mehr Segelerfahrung nötig.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="reisezeit">
                <AccordionTrigger>Wann ist die beste Reisezeit für Yachtcharter in Griechenland?</AccordionTrigger>
                <AccordionContent>
                  Die beste Reisezeit ist von Mai bis Oktober. Im Juli/August ist Hochsaison mit viel Wind (Meltemi), Mai/Juni und September/Oktober bieten angenehmere Temperaturen und weniger Trubel.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="haefen-marinas">
                <AccordionTrigger>Wie gut sind die Häfen und Marinas ausgebaut?</AccordionTrigger>
                <AccordionContent>
                  Die Infrastruktur ist gut: In den größeren Städten und auf den Hauptinseln gibt es moderne Marinas mit Wasser, Strom, Sanitäranlagen und Werften. In kleinen Häfen und Buchten ist die Ausstattung einfacher, aber die Gastfreundschaft oft umso herzlicher.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="proviantierung">
                <AccordionTrigger>Gibt es gute Proviantierungsmöglichkeiten unterwegs?</AccordionTrigger>
                <AccordionContent>
                  In allen größeren Orten und auf den meisten Inseln gibt es Supermärkte, Märkte, Bäckereien und Fischläden. In abgelegenen Buchten empfiehlt es sich, ausreichend Proviant und Wasser an Bord zu haben.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="nautische-besonderheiten">
                <AccordionTrigger>Welche nautischen Besonderheiten gibt es im Revier?</AccordionTrigger>
                <AccordionContent>
                  Viele Inseln, wechselnde Windverhältnisse, Meltemi in der Ägäis, Maestral im Ionischen Meer, gute Sichtnavigation, aber auch Felsen und Untiefen. In Nationalparks gelten besondere Regeln zum Ankern und Umweltschutz.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="liegeplaetze">
                <AccordionTrigger>Wie sicher sind die Liegeplätze in Griechenland?</AccordionTrigger>
                <AccordionContent>
                  Die meisten Häfen und Marinas bieten guten Schutz. In Buchten und auf Inseln ist das Ankern meist sicher, aber der Schutz vor Meltemi und Schwell sollte beachtet werden. Mooringbojen sind weniger verbreitet als in Kroatien, aber das Ankern auf Sandgrund ist oft problemlos möglich.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für Griechenland?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entdecken Sie die Wiege des Segelns mit ihren traumhaften Inseln und antiker Geschichte
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
  );
}