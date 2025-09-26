import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { useMetaTags, generateStructuredData } from '@/hooks/useMetaTags';
import TerritoryMap from '@/components/TerritoryMap';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Clock, Users, Anchor, Wind, Sun } from 'lucide-react';
import TopDestinations from '@/components/TopDestinations';

export default function Kvarner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta Tags and Schema.org
  useMetaTags({
    title: 'Yachtcharter Kroatien – Kvarner & Krk',
    description: 'Inselwelt der Kvarner Bucht: Krk, Cres & Lošinj. Gute Marinas, kurze Etappen. Jetzt Yacht im Kvarner buchen.',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/kvarner',
    ogTitle: 'Yachtcharter Kroatien – Kvarner & Krk',
    ogDescription: 'Inselwelt der Kvarner Bucht: Krk, Cres & Lošinj. Gute Marinas, kurze Etappen. Jetzt Yacht im Kvarner buchen.',
    ogImage: 'https://chartertransparenz.de/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
    ogUrl: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/kvarner',
    structuredData: [
      generateStructuredData.breadcrumb([
        { name: 'Start', url: 'https://chartertransparenz.de' },
        { name: 'Reviere', url: 'https://chartertransparenz.de/#reviere' },
        { name: 'Mittelmeer', url: 'https://chartertransparenz.de/reviere/mittelmeer' },
        { name: 'Kroatien', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien' },
        { name: 'Kvarner & Krk', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/kvarner' }
      ])
    ]
  });

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Kvarner Bucht' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '10+ Premium' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Bora & Jugo' },
    { icon: Sun, label: 'Sonnentage', value: '260+ pro Jahr' }
  ];

  return (
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
            <h1 className="text-5xl font-bold mb-4">Yachtcharter Kvarner & Krk</h1>
            <p className="text-xl text-white/90">Geschützte Inselwelt mit Krk, Cres und Lošinj</p>
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
                <BreadcrumbLink href="/reviere/mittelmeer/kroatien">Kroatien</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Kvarner & Krk</BreadcrumbPage>
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
            region="Kvarner & Krk Yachtcharter"
            center={{ lat: 44.8, lng: 14.5 }}
            zoom={9}
            markers={[
              {
                lat: 45.0175,
                lng: 14.6203,
                name: 'Marina Punat (Krk)',
                description: 'Größte Marina der Kvarner Bucht'
              },
              {
                lat: 44.9614,
                lng: 14.4086,
                name: 'Cres',
                description: 'Grüne Insel mit Süßwassersee'
              },
              {
                lat: 44.5311,
                lng: 14.4686,
                name: 'Mali Lošinj',
                description: 'Duftinsel mit Delfinen'
              },
              {
                lat: 44.7583,
                lng: 14.7619,
                name: 'Rab',
                description: 'Insel der Sandstrände'
              }
            ]}
            className="shadow-lg"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Yachtcharter Kvarner & Krk</h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Die Kvarner Bucht mit der Insel Krk im Zentrum ist eines der vielfältigsten und familienfreundlichsten Segelreviere Kroatiens. Diese geschützte Inselwelt zwischen Istrien und Dalmatien vereint grüne Inseln wie Cres und Lošinj mit der gut erschlossenen Insel Krk zu einem perfekten Segelerlebnis. Kurze Distanzen, hervorragende Marinas und eine beeindruckende Landschaftsvielfalt machen diese Region ideal für entspannte Törns.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Krk, die größte Insel der Adria, ist über eine spektakuläre Brücke mit dem Festland verbunden und beherbergt mit Marina Punat eine der renommiertesten Marinas Kroatiens. Von hier aus erreichen Sie die duftende Insel Lošinj mit ihrer Delfinpopulation, die wilde Schönheit von Cres oder die Sandstrände von Rab - alles auf entspannten Tagesetappen.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Krk - Die Goldene Insel</h2>
            <p className="text-lg text-gray-700 mb-4">
              Krk, über die imposante Krk-Brücke vom Festland erreichbar, ist der ideale Ausgangspunkt für Kvarner-Törns. Die Insel bietet eine faszinierende Vielfalt: von den Weinbergen um Vrbnik mit dem berühmten Žlahtina-Wein über die lebendige Stadt Krk bis zu versteckten Buchten wie Oprna und Soline. Marina Punat gilt als eine der besten Marinas der Adria mit über 800 Liegeplätzen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Highlights auf Krk:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Marina Punat:</strong> Premium-Marina mit Vollservice und Reparaturwerft</li>
              <li><strong>Vrbnik:</strong> Mittelalterliches Städtchen mit Weinverkostungen</li>
              <li><strong>Krk Stadt:</strong> Historisches Zentrum mit römischen Ruinen</li>
              <li><strong>Baška:</strong> Berühmter Kiesstrand mit glasklarem Wasser</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Cres & Lošinj - Die grünen Schwestern</h2>
            <p className="text-lg text-gray-700 mb-4">
              Cres und Lošinj, durch einen schmalen Kanal getrennt aber durch eine Drehbrücke verbunden, bieten eine üppig grüne Landschaft und unberührte Natur. Cres beeindruckt mit dem Süßwassersee Vrana und einer großen Geierpopulation, während Lošinj für sein heilsames Klima und die Delfinpopulation bekannt ist.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Besondere Erlebnisse:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Delfin-Beobachtung:</strong> Über 200 Delfine leben rund um Lošinj</li>
              <li><strong>Lubenice (Cres):</strong> Spektakuläres Bergdorf mit Traumstrand</li>
              <li><strong>Mali Lošinj:</strong> Malerischer Hafen mit bunten Häusern</li>
              <li><strong>Osor:</strong> Historisches Städtchen mit Sommer-Musikfestival</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Rab - Die Insel der Sandstrände</h2>
            <p className="text-lg text-gray-700 mb-4">
              Rab ist eine Besonderheit in Kroatien - hier finden Sie echte Sandstrände, was in der felsigen Adria selten ist. Die Stadt Rab mit ihren vier charakteristischen Glockentürmen ist ein mittelalterliches Juwel, während die Bucht von Lopar mit ihrem "Paradiesstrand" Familien mit Kindern begeistert.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ideale Segelbedingungen</h2>
            <p className="text-lg text-gray-700 mb-4">
              Die Kvarner Bucht bietet geschützte Gewässer mit moderaten Winden, ideal für Familien und entspannte Törns. Die Bora aus Nordost kann im Winter stark werden, während der Sommer meist milde thermische Winde bringt. Die kurzen Distanzen zwischen den Inseln (meist 1-3 Stunden) ermöglichen flexible Tagesplanung.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Perfekte Marinas als Basis:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Marina Punat (Krk):</strong> Größte und bestausgestattete Marina</li>
              <li><strong>ACI Marina Cres:</strong> Charmante Marina in historischem Ambiente</li>
              <li><strong>Marina Mali Lošinj:</strong> Moderne Marina auf der Duftinsel</li>
              <li><strong>Marina Rab:</strong> Gut geschützte Marina mit Altstadtnähe</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Anreise und Erreichbarkeit</h2>
            <p className="text-lg text-gray-700 mb-4">
              Die Kvarner Bucht ist besonders gut erreichbar: Krk über die Brücke direkt mit dem Auto, der Flughafen Rijeka liegt auf Krk, und aus Deutschland/Österreich sind es nur wenige Stunden Fahrt. Diese Nähe macht spontane Törns und Wochenendtrips besonders attraktiv.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Kulinarische Genüsse</h2>
            <p className="text-lg text-gray-700 mb-4">
              Die Inselküche der Kvarner Bucht ist geprägt von frischen Meeresfrüchten, Lamm von Cres und Pag, dem berühmten Žlahtina-Wein von Krk und aromatischen Kräutern von Lošinj. Viele Ankerplätze bieten traditionelle Konobas mit regionalen Spezialitäten direkt am Wasser.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Entdecken Sie Kvarner & Krk</h2>
            <p className="text-lg text-muted-foreground">
              Erleben Sie Inselvielfalt, Delfine und entspanntes Segeln in der geschützten Kvarner Bucht.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <CharterRequestForm />
          </div>
        </div>

        <TopDestinations />
      </div>
    </div>
  );
}