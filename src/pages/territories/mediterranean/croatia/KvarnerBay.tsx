import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';

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
import destinationCroatia from '@/assets/destination-croatia.jpg';
import TopDestinations from '@/components/TopDestinations';

export default function KvarnerBay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Kvarner Bucht' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '8+ Häfen' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Bora & Schirokko' },
    { icon: Sun, label: 'Sonnentage', value: '260+ pro Jahr' }
  ];

  const cities = [
    {
      name: 'Rijeka',
      description: 'Größter Hafen Kroatiens und Kulturhauptstadt 2020',
      marinas: 2,
      highlights: ['Marina Rijeka', 'Trsat Burg', 'Korzo Promenade']
    },
    {
      name: 'Krk',
      description: 'Größte Insel der Adria mit eigener Brücke',
      marinas: 4,
      highlights: ['Marina Punat', 'Krk Stadt', 'Baška Strand']
    },
    {
      name: 'Rab',
      description: 'Insel der vier Glockentürme mit FKK-Tradition',
      marinas: 3,
      highlights: ['Marina Rab', 'Paradiesstrand', 'Rab Altstadt']
    },
    {
      name: 'Cres',
      description: 'Wilde Insel mit Geierpopulation und Süßwassersee',
      marinas: 2,
      highlights: ['Marina Cres', 'Vrana See', 'Lubenice Dorf']
    },
    {
      name: 'Mali Lošinj',
      description: 'Duftinsel mit Wellness-Tradition und Delfinen',
      marinas: 2,
      highlights: ['ACI Marina Mali Lošinj', 'Delfin-Watching', 'Aromapark']
    }
  ];

  const highlights = [
    'Vielfältige Inselwelt mit kurzen Distanzen',
    'Geschützte Gewässer ideal für Familien',
    'Authentische kroatische Kultur',
    'Viele geschützte Ankerplätze',
    'Viele gute Anker- und Bojenplätze',
    'Reiche Geschichte von Römern bis Venezianern',
    'Ausgezeichnete Marina-Infrastruktur',
    'Naturparks und Schutzgebiete'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(/lovable-uploads/e84a0e28-efd8-48a7-a441-191cf3510c86.png)` }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <Link to="/reviere/mittelmeer/kroatien" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Kroatien
            </Link>
            <h1 className="text-5xl font-bold mb-4">Kvarner Bucht</h1>
            <p className="text-xl text-white/90">Geschützte Inselwelt mit authentischem Charme und vielfältigen Segelmöglichkeiten</p>
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
                <BreadcrumbPage>Kvarner Bucht</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Facts */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
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
            region="Karte der Kvarner Bucht"
            center={{ lat: 44.8, lng: 14.5 }}
            zoom={9}
            markers={[
              {
                lat: 45.0175,
                lng: 14.6203,
                name: 'Marina Punat',
                description: 'Größte Marina der Kvarner Bucht'
              },
              {
                lat: 44.9614,
                lng: 14.4086,
                name: 'ACI Marina Cres',
                description: 'Marina in der Stadt Cres'
              },
              {
                lat: 44.5311,
                lng: 14.4686,
                name: 'Marina Mali Lošinj',
                description: 'Marina auf der Duftinsel Lošinj'
              },
              {
                lat: 44.7583,
                lng: 14.7619,
                name: 'Marina Rab',
                description: 'Marina auf der Insel der Sandstrände'
              }
            ]}
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Detailed Region Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Kvarner Bucht</h2>
            <p className="text-xl text-muted-foreground">
              Ein Segelparadies der Kontraste – Geschützte Inselwelt mit authentischem Charme
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Willkommen in der Kvarner Bucht, einem Segelrevier, das mit seiner Vielfalt und Schönheit begeistert. 
              Hier, wo das Festland auf ein Archipel aus großen und kleinen Inseln trifft, erwartet Sie eine Welt aus 
              tiefgrün bewaldeten Küsten, kargen Mondlandschaften und kristallklarem Wasser. Ein Yachtcharter in der 
              Kvarner Bucht ist eine Reise für alle Sinne, ideal für Naturliebhaber, Entdecker und alle, die das 
              authentische kroatische Inselleben suchen.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Die Kvarner Bucht ist ein Revier der Kontraste: Von den üppig grünen Inseln Cres und Lošinj im Westen 
              bis zu den kargeren, aber faszinierenden Landschaften von Krk und Rab im Osten. Von malerischen 
              Fischerdörfern bis zu mondänen Küstenorten wie Opatija – dieses Revier bietet eine perfekte Mischung 
              aus aktivem Segeln in Kroatien, entspannten Ankerstopps und spannenden Landgängen. Die gute 
              Erreichbarkeit und die erstklassige maritime Infrastruktur machen die Kvarner Bucht zu einer Top-Wahl 
              für Ihren nächsten Charterurlaub.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Die Kvarner Bucht bietet eine unvergleichliche Vielfalt an Segelrevieren, die für jeden Geschmack und 
              jede Erfahrungsstufe das Richtige bereithalten. Die kurzen Distanzen zwischen den Inseln, die zahlreichen 
              geschützten Ankerplätze und die hervorragende maritime Infrastruktur machen diese Region zum idealen 
              Ziel für Familien, Genuss-Segler und alle, die das Inselhopping in vollen Zügen genießen möchten.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Die Perlen der Kvarner Bucht: Authentische Inselwelt</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die Kvarner Bucht ist ein Paradies für Inselhopping in Kroatien und bietet eine unvergleichliche 
              Vielfalt an Zielen, die alle ihre eigenen Besonderheiten und Reize haben.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Cres - Die grüne Oase:</strong> Die zweitgrößte Insel Kroatiens besticht durch ihre 
              unberührte Natur, dichte Wälder und versteckte Buchten. Die charmante Stadt Cres mit ihrer 
              venezianischen Architektur und der Süßwassersee Vrana sind absolute Highlights.</li>
              
              <li><strong>Lošinj - Die Insel der Vitalität:</strong> Bekannt für sein mildes Klima, die duftenden 
              Pinienwälder und die hohe Anzahl an Sonnentagen. Die Insel ist Heimat einer Delfinpopulation und 
              das malerische Mali Lošinj lädt mit seinem lebhaften Hafen zum Verweilen ein.</li>
              
              <li><strong>Krk - Die vielfältige Insel:</strong> Die größte Insel Kroatiens bietet eine beeindruckende 
              landschaftliche Vielfalt – von kargen Karstlandschaften bis zu fruchtbaren Weinbergen. Das charmante 
              Vrbnik ist bekannt für seinen berühmten Wein Žlahtina.</li>
              
              <li><strong>Rab - Die Insel der Sandstrände:</strong> Berühmt für ihre einzigartigen Sandstrände, 
              die in Kroatien selten sind. Die Stadt Rab beeindruckt mit ihren vier Glockentürmen und der 
              Paradiesbucht (Rajska plaža) in Lopar.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Ausgangshäfen in der Kvarner Bucht:</h4>
            <p className="mb-4">Die Kvarner Bucht bietet mehrere hervorragend ausgestattete Marinas als ideale Basis für Ihren Törn.</p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Marina Punat (Insel Krk):</strong> Eine der größten und ältesten Marinas an der Adria, 
              bekannt für ihren hohen Standard und umfassenden Service. Dank der Brückenverbindung zum Festland 
              bequem mit dem Auto erreichbar.</li>
              
              <li><strong>ACI Marina Cres:</strong> Direkt in der charmanten Stadt Cres gelegen, bietet diese 
              Marina alle Annehmlichkeiten und ist ein perfekter Startpunkt für die Erkundung der grünen Insel.</li>
              
              <li><strong>Marina Mali Lošinj:</strong> Im Herzen der "Insel der Vitalität" gelegen, ideal um die 
              duftenden Pinienwälder und das heilsame Klima von Lošinj zu erleben.</li>
            </ul>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black"><strong>Nautische Besonderheiten:</strong> Die Meerenge von Osor zwischen 
              Cres und Lošinj ist eine wichtige Passage mit Brückenöffnung (feste Zeiten beachten). Die Gewässer 
              bieten zahlreiche geschützte Ankerbuchten, ideal für entspannte Stopps.</p>
            </div>

            {/* Additional Landscape Image */}
            <div className="mb-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/ad8e5768-a953-492f-9be5-ecbb1ad9e047.png" 
                  alt="Kristallklares blaues Wasser und grüne Inseln der Kvarner Bucht unter blauem Himmel"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erreichbarkeit: Ihr schneller Weg zur Kvarner Bucht</h3>
            <p className="mb-4">
              Die Kvarner Bucht ist dank ihrer geografischen Lage besonders gut aus Mitteleuropa erreichbar.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Per Flugzeug</h4>
                <p className="mb-4 text-black">Der Flughafen Rijeka (RJK) auf der Insel Krk wird von verschiedenen 
                europäischen Städten direkt angeflogen. Alternativ ist auch der Flughafen Pula (PUY) in Istrien 
                eine Option für die südliche Kvarner Bucht.</p>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Per PKW</h4>
                <p className="mb-3 text-black">Über gut ausgebaute Autobahnen aus Deutschland, Österreich und der 
                Schweiz erreichbar. Die Insel Krk ist über eine Brücke mit dem Festland verbunden.</p>
                <p className="text-sm text-black">Die Marinas bieten sichere Parkmöglichkeiten für die 
                Dauer Ihres Törns.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter und Windbedingungen</h3>
            <p className="mb-4">
              Die Kvarner Bucht bietet vielfältige und interessante Segelbedingungen für alle Erfahrungsstufen.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Wichtige Winde</h4>
              <ul className="list-disc pl-6 space-y-2 text-black">
                <li><strong>Maestral (NW):</strong> Der dominierende Sommerwind, der am Nachmittag für zuverlässigen 
                Segelwind (3-5 Bft) sorgt. Ideal für entspanntes Segeln.</li>
                <li><strong>Bora (NO):</strong> Trockener, böiger Fallwind, der insbesondere im Velebit-Kanal 
                kräftig wehen kann. Erfahrene Skipper nutzen die geschützten Buchten als Schutz.</li>
                <li><strong>Jugo (SO):</strong> Warmer, feuchter Wind, der sich über mehrere Tage aufbaut und 
                moderate Wellen mit sich bringen kann.</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold mb-3">Beste Reisezeit</h4>
            <p className="mb-6">Die Segelsaison dauert von Mai bis Oktober. Die besten Monate sind Mai, Juni und 
            September mit angenehmen Temperaturen, stabilen Winden und weniger touristischem Trubel. Juli und 
            August sind die heißesten Monate mit dem größten Aufkommen.</p>

            {/* Image Gallery Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/06f3d73a-3877-4382-8762-04ba81bb5bf7.png" 
                  alt="Panoramablick auf die Kvarner Bucht mit goldener Abendsonne über den Inseln und der Küstenlandschaft"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-sm text-muted-foreground">Blick über die Bucht zur "Goldenen Stunde"</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/a6bdb74b-7918-4d3e-928d-d16a1cc0a2e7.png" 
                  alt="Malerischer Hafen in der Kvarner Bucht mit Segelyachten und bunten kroatischen Häusern am Wasser"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-sm text-muted-foreground">Hafen Von Mali Losinj</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Warum die Kvarner Bucht?</h3>
              <p className="text-lg mb-4">Ein Yachtcharter in der Kvarner Bucht ist die perfekte Symbiose aus 
              aktivem Segeln, kultureller Entdeckung und dem Eintauchen in eine einzigartige Natur. Die 
              beeindruckenden Küstenlandschaften, die Vielfalt der Inseln und das unvergleichliche mediterrane 
              Flair machen diese Region zu einem unvergesslichen Ziel.</p>
              <p className="text-lg mb-6">Ob Sie eine moderne Segelyacht, einen geräumigen Katamaran oder eine Charter 
              mit erfahrenem Skipper suchen – die Kvarner Bucht wird Sie mit ihrer Schönheit und ihren Kontrasten 
              begeistern.</p>
              <div className="flex justify-center">
                <CharterRequestForm>
                  <button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                    Jetzt Angebot für dieses Revier einholen
                  </button>
                </CharterRequestForm>
              </div>
            </div>
          </div>
        </div>

        {/* Cities */}
        <div className="hidden md:block mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Wichtige Segelbasen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="hidden md:block mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Warum Kvarner Bucht?</h2>
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

        {/* CTA */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für die Kvarner Bucht?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entdecken Sie die vielfältige Inselwelt mit authentischem kroatischen Charme
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
  );
}