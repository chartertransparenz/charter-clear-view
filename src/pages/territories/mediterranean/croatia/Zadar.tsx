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

export default function Zadar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta Tags and Schema.org
  useMetaTags({
    title: 'Yachtcharter Kroatien – Zadar & Norddalmatien',
    description: 'Dugi Otok, Ugljan & Pag. Kurze Distanzen, viele Buchten. Jetzt Yacht ab Zadar vergleichen & buchen.',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/zadar',
    ogTitle: 'Yachtcharter Kroatien – Zadar & Norddalmatien',
    ogDescription: 'Dugi Otok, Ugljan & Pag. Kurze Distanzen, viele Buchten. Jetzt Yacht ab Zadar vergleichen & buchen.',
    ogImage: 'https://chartertransparenz.de/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
    structuredData: [
      generateStructuredData.breadcrumb([
        { name: 'Start', url: 'https://chartertransparenz.de' },
        { name: 'Reviere', url: 'https://chartertransparenz.de/#reviere' },
        { name: 'Mittelmeer', url: 'https://chartertransparenz.de/reviere/mittelmeer' },
        { name: 'Kroatien', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien' },
        { name: 'Zadar', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/zadar' }
      ])
    ]
  });

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Norddalmatien' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '12+ Häfen' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Maestral & Bora' },
    { icon: Sun, label: 'Sonnentage', value: '280+ pro Jahr' }
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
            <h1 className="text-5xl font-bold mb-4">Yachtcharter Zadar</h1>
            <p className="text-xl text-white/90">Meeresorgel, Dugi Otok und der Zadarer Archipel</p>
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
                <BreadcrumbPage>Zadar</BreadcrumbPage>
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
            region="Zadar Yachtcharter"
            center={{ lat: 44.1, lng: 15.2 }}
            zoom={9}
            markers={[
              {
                lat: 44.1194,
                lng: 15.2314,
                name: 'Zadar',
                description: 'Historische Stadt mit Meeresorgel'
              },
              {
                lat: 44.1,
                lng: 14.8,
                name: 'Dugi Otok',
                description: 'Lange Insel mit Naturpark Telašćica'
              },
              {
                lat: 44.13,
                lng: 15.07,
                name: 'Ugljan',
                description: 'Grüne Insel vor Zadar'
              },
              {
                lat: 44.44,
                lng: 14.85,
                name: 'Pag',
                description: 'Käse-Insel mit karger Landschaft'
              }
            ]}
            className="shadow-lg"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Yachtcharter Zadar & Norddalmatien</h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Zadar, die kulturelle Perle Norddalmatiens, ist der ideale Ausgangspunkt für unvergessliche Segeltörns im nördlichen Teil der kroatischen Inselwelt. Die 3.000 Jahre alte Stadt vereint römische Geschichte, venezianische Architektur und moderne Kunst zu einem einzigartigen Erlebnis - gekrönt von der weltberühmten Meeresorgel und dem "Gruß an die Sonne", die jeden Sonnenuntergang zu einem magischen Spektakel machen.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Der Zadarer Archipel mit über 300 Inseln und Inselchen bietet perfekte Segelbedingungen für alle Ansprüche: von der mondänen Insel Pag mit ihrem berühmten Käse bis zur wilden Schönheit von Dugi Otok mit dem Naturpark Telašćica. Kurze Distanzen, geschützte Gewässer und moderne Marinas machen diese Region ideal für entspannte Familien-Törns und abenteuerliche Entdeckungsreisen gleichermaßen.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Zadar - Stadt der Kontraste</h2>
            <p className="text-lg text-gray-700 mb-4">
              Zadar begeistert mit der einzigartigen Meeresorgel, einem architektonischen Kunstwerk, das durch die Wellenbewegung harmonische Töne erzeugt. Daneben lädt der "Gruß an die Sonne" - ein Solarfeld von 22 Metern Durchmesser - zu spektakulären Lichtshows bei Sonnenuntergang ein. Die Altstadt mit dem römischen Forum, der Donatus-Kirche und lebendigen Märkten ist ein faszinierendes Freilichtmuseum.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Moderne Marinas in Zadar:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Marina Zadar:</strong> Zentral gelegene Marina in der Altstadt</li>
              <li><strong>Marina Borik:</strong> Moderne Marina mit Vollservice</li>
              <li><strong>Marina Tankerkomerc:</strong> Große Marina am Stadtrand</li>
              <li><strong>D-Marin Borik:</strong> Premium-Marina mit 800 Liegeplätzen</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Die Inseln des Zadarer Archipels</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Dugi Otok - Die "Lange Insel"</h3>
            <p className="text-lg text-gray-700 mb-4">
              Dugi Otok, die größte Insel des Archipels, besticht mit dem Naturpark Telašćica im Süden - einem tief eingeschnittenen Fjord mit bis zu 160 Meter hohen Steilklippen. Der berühmte Sakarun Beach im Norden gilt mit seinem weißen Sand und türkisblauen Wasser als einer der schönsten Strände Kroatiens. Traditionelle Fischerdörfer wie Božava und Dragove laden zum authentischen Inselerlebnis ein.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ugljan & Pašman - Die grünen Inseln</h3>
            <p className="text-lg text-gray-700 mb-4">
              Diese beiden durch eine Brücke verbundenen Inseln sind für ihre üppige Vegetation und Olivenhaine bekannt. Ugljan, nur 15 Minuten mit der Fähre von Zadar entfernt, bietet charmante Buchten wie Muline und Over. Pašman besticht mit dem malerischen Ort Tkon und versteckten Ankerplätzen an der Westküste.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Pag - Die Käse-Insel</h3>
            <p className="text-lg text-gray-700 mb-4">
              Pag, berühmt für den gleichnamigen Schafskäse und die karge, mondähnliche Landschaft, bietet ein völlig anderes Segelerlebnis. Die Stadt Pag mit ihrer gotischen Architektur und der lebendige Party-Ort Novalja mit dem berühmten Zrće Beach sind beliebte Ankerplätze für Nachteulen und Kulturinteressierte.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Segelbedingungen und Navigation</h2>
            <p className="text-lg text-gray-700 mb-4">
              Das Revier um Zadar bietet optimale Bedingungen für alle Segler-Niveaus. Der thermische Maestral weht zuverlässig aus Nordwest mit 10-20 Knoten, während die vielen geschützten Kanäle zwischen den Inseln auch bei stärkerem Wind sichere Passage bieten. Die Distanzen sind kurz - meist nur 1-3 Stunden Segelzeit zwischen den Zielen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Beste Reisezeit:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Mai - Juni:</strong> Mild, wenig Verkehr, perfekt für ruhige Törns</li>
              <li><strong>Juli - August:</strong> Hochsaison mit warmem Wetter und lebendiger Atmosphäre</li>
              <li><strong>September - Oktober:</strong> Ideale Segelbedingungen, warmes Meer, weniger Trubel</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Kulinarische Entdeckungen</h2>
            <p className="text-lg text-gray-700 mb-4">
              Die Region um Zadar ist ein Paradies für Feinschmecker. Probieren Sie den berühmten Pager Käse, frische Meeresfrüchte in versteckten Konobas und den lokalen Maraschino-Likör, der bereits im 18. Jahrhundert europäische Königshäuser begeisterte. Viele Ankerplätze bieten traditionelle Restaurants direkt am Wasser.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Entdecken Sie Zadar & Norddalmatien</h2>
            <p className="text-lg text-muted-foreground">
              Erleben Sie Meeresorgel, Dugi Otok und authentische Inselkultur bei Ihrem Yachtcharter ab Zadar.
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