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

export default function SibenikKornaten() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta Tags and Schema.org
  useMetaTags({
    title: 'Yachtcharter Kroatien – Šibenik & Kornaten',
    description: 'Nationalpark Kornaten & Inselketten vor Šibenik. Routen für Familien & Sportliche. Jetzt Kroatien-Charter ab Šibenik anfragen.',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/sibenik-kornaten',
    ogTitle: 'Yachtcharter Kroatien – Šibenik & Kornaten',
    ogDescription: 'Nationalpark Kornaten & Inselketten vor Šibenik. Routen für Familien & Sportliche. Jetzt Kroatien-Charter ab Šibenik anfragen.',
    ogImage: 'https://chartertransparenz.de/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
    structuredData: [
      generateStructuredData.breadcrumb([
        { name: 'Start', url: 'https://chartertransparenz.de' },
        { name: 'Reviere', url: 'https://chartertransparenz.de/#reviere' },
        { name: 'Mittelmeer', url: 'https://chartertransparenz.de/reviere/mittelmeer' },
        { name: 'Kroatien', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien' },
        { name: 'Šibenik & Kornaten', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/sibenik-kornaten' }
      ])
    ]
  });

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Norddalmatien' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '15+ Häfen' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Maestral & Bora' },
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
            <h1 className="text-5xl font-bold mb-4">Yachtcharter Šibenik & Kornaten</h1>
            <p className="text-xl text-white/90">Nationalpark Kornaten und UNESCO-Stadt Šibenik</p>
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
                <BreadcrumbPage>Šibenik & Kornaten</BreadcrumbPage>
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
            region="Šibenik & Kornaten Yachtcharter"
            center={{ lat: 43.8, lng: 15.6 }}
            zoom={9}
            markers={[
              {
                lat: 43.7350,
                lng: 15.8952,
                name: 'Šibenik',
                description: 'UNESCO-Weltkulturerbe mit Kathedrale'
              },
              {
                lat: 43.8394,
                lng: 15.5897,
                name: 'Murter',
                description: 'Tor zu den Kornaten'
              },
              {
                lat: 43.8,
                lng: 15.3,
                name: 'Kornati Nationalpark',
                description: '89 Inseln und Riffe'
              },
              {
                lat: 43.9434,
                lng: 15.4506,
                name: 'Biograd',
                description: 'Marina vor den Kornaten'
              }
            ]}
            className="shadow-lg"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Yachtcharter Šibenik & Kornaten</h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Entdecken Sie eines der spektakulärsten Segelreviere der Adria! Die Region um Šibenik und den Kornati-Nationalpark bietet eine einzigartige Kombination aus kulturellen Schätzen und unberührter Inselwildnis. Von der UNESCO-Weltkulturerbestadt Šibenik mit ihrer berühmten Kathedrale des Heiligen Jakob segeln Sie zu einem der faszinierendsten Nationalparks Europas - den Kornaten mit ihren 89 unbewohnten Inseln.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Diese Region ist perfekt für Segler, die Abwechslung suchen: historische Städte mit venezianischer Architektur, lebendige Marinas, einsame Ankerplätze in kristallklaren Buchten und die mystische Atmosphäre der kargen Kornati-Inseln. Ob entspannter Familien-Törn oder abenteuerliche Entdeckungsreise - hier finden Sie Ihr perfektes Segelerlebnis.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Šibenik - UNESCO-Juwel der Adria</h2>
            <p className="text-lg text-gray-700 mb-4">
              Šibenik, eine der schönsten Städte Kroatiens, beeindruckt mit der Kathedrale des Heiligen Jakob - einem Meisterwerk der Renaissance-Architektur und UNESCO-Weltkulturerbe. Die Stadt bietet moderne Marinas wie D-Marin Mandalina und ACI Marina Šibenik mit erstklassiger Ausstattung. Erkunden Sie die verwinkelte Altstadt, besuchen Sie die vier historischen Festungen und genießen Sie die lebendige Gastronomieszene.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Kornati-Nationalpark - 89 Inseln der Stille</h2>
            <p className="text-lg text-gray-700 mb-4">
              Der Kornati-Nationalpark ist ein Paradies für Naturliebhaber und Segler, die Ruhe und Abgeschiedenheit suchen. Die 89 meist unbewohnten Inseln bieten eine karge, fast mondähnliche Landschaft mit kristallklarem Wasser und zahlreichen geschützten Buchten. Hier finden Sie einige der schönsten Ankerplätze der Adria, traditionelle Konobas mit frischem Fisch und eine Unterwasserwelt, die Schnorchler und Taucher begeistert.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Wichtige Kornati-Highlights:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Levrnaka:</strong> Größte Insel der Kornaten mit traditionellen Restaurants</li>
              <li><strong>Žut:</strong> Beliebte Ankerbucht mit Marina und Konoba</li>
              <li><strong>Mana:</strong> Spektakuläre Steilklippen und türkisblaue Buchten</li>
              <li><strong>Lojena:</strong> Einsame Buchten ideal zum Ankern</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Perfekte Ausgangshäfen</h2>
            <p className="text-lg text-gray-700 mb-4">
              Die Region bietet mehrere erstklassige Marinas als ideale Basis für Ihren Törn:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>D-Marin Mandalina Šibenik:</strong> Moderne Vollservice-Marina mit 429 Liegeplätzen</li>
              <li><strong>ACI Marina Šibenik:</strong> Zentral gelegene Marina in der Altstadt</li>
              <li><strong>Marina Kornati (Biograd):</strong> Idealer Ausgangspunkt für die Kornaten</li>
              <li><strong>Marina Hramina (Murter):</strong> Traditionelle Marina am "Tor zu den Kornaten"</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Krka-Nationalpark - Wasserfälle vom Meer aus</h2>
            <p className="text-lg text-gray-700 mb-4">
              Ein besonderes Highlight ist der Besuch des Krka-Nationalparks über den Fluss Krka. Von Šibenik können Sie mit der Yacht flussaufwärts bis nach Skradin fahren und von dort die berühmten Wasserfälle von Skradinski buk erkunden. Diese einzigartige Kombination aus Meer- und Süßwasser-Segeln macht Ihren Törn zu einem unvergesslichen Erlebnis.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Segelbedingungen und beste Reisezeit</h2>
            <p className="text-lg text-gray-700 mb-4">
              Die Region bietet optimale Segelbedingungen von Mai bis Oktober. Der thermische Maestral sorgt für zuverlässige Winde, während die geschützten Gewässer zwischen den Inseln auch bei stärkerem Wind sichere Ankerplätze bieten. Die relativ kurzen Distanzen ermöglichen entspannte Tagesetappen und viel Zeit zum Genießen der einzigartigen Landschaft.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Entdecken Sie Šibenik & die Kornaten</h2>
            <p className="text-lg text-muted-foreground">
              Erleben Sie UNESCO-Kultur und unberührte Inselwildnis bei Ihrem Yachtcharter ab Šibenik.
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