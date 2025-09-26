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

export default function DalmatienSplit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta Tags and Schema.org 
  useMetaTags({
    title: 'Yachtcharter Kroatien – Dalmatien ab Split',
    description: 'Hvar, Vis & Brač auf kurzen Etappen. Geprüfte Flotten, mit/ohne Skipper. Jetzt Yachtcharter in Dalmatien (ab Split) anfragen.',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/dalmatien-split',
    ogTitle: 'Yachtcharter Kroatien – Dalmatien ab Split',
    ogDescription: 'Hvar, Vis & Brač auf kurzen Etappen. Geprüfte Flotten, mit/ohne Skipper. Jetzt Yachtcharter in Dalmatien (ab Split) anfragen.',
    ogImage: 'https://chartertransparenz.de/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
    ogUrl: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/dalmatien-split',
    structuredData: [
      generateStructuredData.breadcrumb([
        { name: 'Start', url: 'https://chartertransparenz.de' },
        { name: 'Reviere', url: 'https://chartertransparenz.de/#reviere' },
        { name: 'Mittelmeer', url: 'https://chartertransparenz.de/reviere/mittelmeer' },
        { name: 'Kroatien', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien' },
        { name: 'Dalmatien (Split)', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/dalmatien-split' }
      ])
    ]
  });

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Mitteldalmatien' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '20+ Premium' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Maestral & Jugo' },
    { icon: Sun, label: 'Sonnentage', value: '300+ pro Jahr' }
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
            <h1 className="text-5xl font-bold mb-4">Yachtcharter Dalmatien</h1>
            <p className="text-xl text-white/90">Split, Hvar, Vis & Brač - das Herz der kroatischen Inselwelt</p>
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
                <BreadcrumbPage>Dalmatien (Split)</BreadcrumbPage>
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
            region="Dalmatien - Split Yachtcharter"
            center={{ lat: 43.5, lng: 16.5 }}
            zoom={8}
            markers={[
              {
                lat: 43.5081,
                lng: 16.4402,
                name: 'Split',
                description: 'Hauptcharterhafen Mitteldalmatiens'
              },
              {
                lat: 43.1729,
                lng: 16.6398,
                name: 'Hvar',
                description: 'Mondäne Insel mit Lavendelfeldern'
              },
              {
                lat: 43.0504,
                lng: 16.1833,
                name: 'Vis',
                description: 'Ursprüngliche Insel abseits des Massentourismus'
              },
              {
                lat: 43.3128,
                lng: 16.6370,
                name: 'Brač',
                description: 'Insel des weißen Steins mit Zlatni Rat'
              }
            ]}
            className="shadow-lg"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Yachtcharter Dalmatien - Segeln ab Split</h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Willkommen im Herzen der kroatischen Inselwelt! Dalmatien rund um Split bietet das ultimative Segelerlebnis mit legendären Inseln wie Hvar, Vis und Brač. Von den modernen Marinas in Split erreichen Sie auf kurzen Etappen weltberühmte Ziele: die Lavendelinsel Hvar mit ihrem mondänen Nachtleben, die authentische Fischerinsel Vis mit kristallklaren Buchten und Brač mit dem berühmten Zlatni Rat Strand.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Diese Region vereint alles, was einen perfekten Yachtcharter ausmacht: kurze Distanzen zwischen spektakulären Zielen, hervorragende Marina-Infrastruktur, zuverlässige Windverhältnisse und eine Vielfalt an Aktivitäten - von entspannten Familien-Törns bis zu sportlichen Regatta-Erlebnissen. Split als UNESCO-Weltkulturerbe bietet zudem den perfekten kulturellen Rahmen für Ihren Charterurlaub.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Die Inseln Mitteldalmatiens</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hvar - Die Königin der Adria-Inseln</h3>
            <p className="text-lg text-gray-700 mb-4">
              Hvar gilt als mondänste Insel Kroatiens und verzaubert mit endlosen Lavendelfeldern, exzellenten Weinen und einem pulsierenden Nachtleben. Die Stadt Hvar mit ihrer prächtigen Renaissance-Architektur und dem lebhaften Hauptplatz ist ein absolutes Muss. Entdecken Sie versteckte Buchten wie Pakleni Otoci oder genießen Sie Sonnenuntergänge in den angesagten Beach Clubs.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Vis - Das authentische Kroatien</h3>
            <p className="text-lg text-gray-700 mb-4">
              Vis, lange Zeit militärisches Sperrgebiet, hat sich ihre Ursprünglichkeit bewahrt. Entdecken Sie die berühmte Blaue Grotte auf der Insel Biševo, probieren Sie lokale Spezialitäten in traditionellen Konobas und ankern Sie in glasklaren Buchten wie Stiniva, die zu den schönsten Stränden Kroatiens zählt.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Brač - Insel des weißen Steins</h3>
            <p className="text-lg text-gray-700 mb-4">
              Brač ist berühmt für den weißen Kalkstein, aus dem unter anderem das Weiße Haus in Washington gebaut wurde. Der Zlatni Rat bei Bol ist einer der bekanntesten Strände der Adria - ein sich ständig veränderndes "Goldenes Horn" aus feinstem Kies. Entdecken Sie auch das malerische Fischerdorf Sutivan oder die Künstlerstadt Supetar.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Split - Ihr idealer Starthafen</h2>
            <p className="text-lg text-gray-700 mb-4">
              Split bietet mehrere moderne Marinas wie ACI Marina Split, Marina Kastela und Marina Agana, alle mit hervorragender Ausstattung. Die Stadt selbst ist ein lebendiges Museum mit dem berühmten Diokletianpalast im Herzen der Altstadt. Nutzen Sie die Zeit vor und nach Ihrem Törn, um diese einzigartige Mischung aus antikem Erbe und modernem dalmatinischem Leben zu erleben.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Perfekte Segelbedingungen</h2>
            <p className="text-lg text-gray-700 mb-4">
              Das Revier um Split bietet optimale Bedingungen für alle Segler-Niveaus. Der thermische Maestral weht regelmäßig von Nordwest und sorgt für perfekte Segelbedingungen bei 10-20 Knoten. Die Distanzen zwischen den Inseln sind kurz - meist nur 2-4 Stunden Segelzeit - was entspannte Tagestouren ermöglicht.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Starten Sie Ihr Dalmatien-Abenteuer</h2>
            <p className="text-lg text-muted-foreground">
              Entdecken Sie die legendären Inseln Hvar, Vis und Brač bei Ihrem persönlichen Yachtcharter ab Split.
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