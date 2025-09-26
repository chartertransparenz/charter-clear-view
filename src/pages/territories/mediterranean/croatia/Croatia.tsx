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

export default function Croatia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta Tags and Schema.org
  useMetaTags({
    title: 'Yachtcharter Kroatien – Dalmatien, Istrien & Kornaten',
    description: 'Inselhüpfen an der Adria: Split, Zadar, Šibenik/Kornaten, Istrien & Dubrovnik. Geprüfte Yachten, 30 Jahre Erfahrung. Jetzt Kroatien-Charter anfragen.',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien',
    ogTitle: 'Yachtcharter Kroatien – Dalmatien, Istrien & Kornaten',
    ogDescription: 'Inselhüpfen an der Adria: Split, Zadar, Šibenik/Kornaten, Istrien & Dubrovnik. Geprüfte Yachten, 30 Jahre Erfahrung. Jetzt Kroatien-Charter anfragen.',
    ogImage: 'https://chartertransparenz.de/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
    ogUrl: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien',
    structuredData: [
      generateStructuredData.breadcrumb([
        { name: 'Start', url: 'https://chartertransparenz.de' },
        { name: 'Reviere', url: 'https://chartertransparenz.de/#reviere' },
        { name: 'Mittelmeer', url: 'https://chartertransparenz.de/reviere/mittelmeer' },
        { name: 'Kroatien', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien' }
      ]),
      generateStructuredData.service('Kroatien', 'Premium Yachtcharter in Kroatien - Dalmatien, Istrien und Kornaten. Geprüfte Yachten und 30 Jahre Erfahrung.')
    ]
  });

  const quickFacts = [
    { icon: MapPin, label: 'Regionen', value: '7 Hauptreviere' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '50+ Premium' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Mäßig' },
    { icon: Sun, label: 'Sonnentage', value: '2.600 Std/Jahr' }
  ];

  const regions = [
    {
      name: 'Dalmatien (Split)',
      path: '/reviere/mittelmeer/kroatien/dalmatien-split',
      description: 'Hvar, Vis & Brač - die berühmtesten Inseln Kroatiens',
      image: '/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
      highlights: ['Split als Ausgangspunkt', 'Hvar - Party & Lavendel', 'Vis - versteckte Buchten']
    },
    {
      name: 'Šibenik & Kornaten',
      path: '/reviere/mittelmeer/kroatien/sibenik-kornaten',
      description: 'Nationalpark Kornaten mit 89 Inseln',
      image: '/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
      highlights: ['Kornati Nationalpark', 'Šibenik Altstadt', 'Krka Wasserfälle']
    },
    {
      name: 'Zadar & Norddalmatien',
      path: '/reviere/mittelmeer/kroatien/zadar',
      description: 'Dugi Otok, Ugljan & Pag',
      image: '/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
      highlights: ['Zadar Meeresorgel', 'Dugi Otok Strände', 'Pag Käse & Party']
    },
    {
      name: 'Istrien',
      path: '/reviere/mittelmeer/kroatien/istrien',
      description: 'Venezianisches Flair & kulinarische Höhepunkte',
      image: '/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
      highlights: ['Pula & Rovinj', 'Brijuni Nationalpark', 'Trüffel & Wein']
    },
    {
      name: 'Kvarner & Krk',
      path: '/reviere/mittelmeer/kroatien/kvarner',
      description: 'Große Inseln mit kurzen Distanzen',
      image: '/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
      highlights: ['Krk & Cres', 'Lošinj Delfine', 'Rab Sandstrände']
    },
    {
      name: 'Dubrovnik & Süddalmatien',
      path: '/reviere/mittelmeer/kroatien/dubrovnik',
      description: 'Die Perle der Adria & Elaphiten',
      image: '/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
      highlights: ['Dubrovnik Altstadt', 'Elaphiten Inseln', 'Mljet Nationalpark']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png)' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-4xl">
            <Link to="/reviere/mittelmeer" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zum Mittelmeer
            </Link>
            <h1 className="text-6xl font-bold mb-6">Yachtcharter Kroatien</h1>
            <p className="text-xl text-white/90 mb-6">1.244 Inseln, kristallklares Wasser und über 2.600 Sonnenstunden im Jahr</p>
            <p className="text-lg text-white/80">Von Istrien bis Dubrovnik - entdecken Sie das vielfältigste Segelrevier der Adria</p>
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
                <BreadcrumbPage>Kroatien</BreadcrumbPage>
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
        <div className="max-w-5xl mx-auto mb-16">
          <TerritoryMap
            region="Kroatien Yachtcharter"
            center={{ lat: 44.0, lng: 15.5 }}
            zoom={6}
            markers={[
              {
                lat: 43.5081,
                lng: 16.4402,
                name: 'Split',
                description: 'Hauptbasis für Dalmatien-Charter'
              },
              {
                lat: 43.7384,
                lng: 15.8960,
                name: 'Šibenik',
                description: 'Tor zu den Kornaten'
              },
              {
                lat: 44.1194,
                lng: 15.2314,
                name: 'Zadar',
                description: 'Norddalmatien und Dugi Otok'
              },
              {
                lat: 44.8664,
                lng: 13.8496,
                name: 'Pula',
                description: 'Istrien Hauptbasis'
              },
              {
                lat: 45.0816,
                lng: 13.6387,
                name: 'Rovinj',
                description: 'Malerische Küstenstadt'
              },
              {
                lat: 45.1636,
                lng: 14.7706,
                name: 'Rijeka',
                description: 'Kvarner Bucht'
              },
              {
                lat: 42.6507,
                lng: 18.0944,
                name: 'Dubrovnik',
                description: 'Süddalmatien Hub'
              }
            ]}
            className="shadow-lg"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Warum Kroatien das perfekte Segelrevier ist</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Kroatien ist nicht umsonst eines der beliebtesten Segelreviere weltweit. Mit über 1.240 Inseln und Inselchen, kristallklarem Wasser und einer Küstenlinie von über 1.700 Kilometern bietet das Land eine unvergleichliche Vielfalt für Segler aller Erfahrungsstufen.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Von den venezianisch geprägten Städten Istriens über die party-erprobten Inseln Dalmatiens bis hin zur majestätischen Kulisse Dubrovniks - jede Region hat ihren eigenen Charakter und ihre besonderen Reize. Die moderate Bora und der sanfte Mistral sorgen für ideale Segelbedingungen, während die ausgezeichnete Marina-Infrastruktur höchsten Komfort garantiert.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Perfekte Segelbedingungen</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Mäßige Winde (10-20 Knoten im Durchschnitt)</li>
                  <li>Über 2.600 Sonnenstunden pro Jahr</li>
                  <li>Wassertemperaturen bis 26°C im Sommer</li>
                  <li>Kurze Distanzen zwischen den Zielen</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Erstklassige Infrastruktur</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Über 50 moderne ACI- und Premium-Marinas</li>
                  <li>Hervorragende Servicequalität</li>
  <li>Einfache Anreise aus dem deutschsprachigen Raum</li>
                  <li>Umfangreiche Charterflotten aller Kategorien</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Croatian Regions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Die Segelreviere Kroatiens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={region.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{region.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {region.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {region.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-3 h-3 mr-2 text-yellow-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to={region.path}>
                      Revier entdecken
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Charter Request Form */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Jetzt Kroatien-Charter anfragen</h2>
              <p className="text-lg text-gray-600">Lassen Sie sich von unseren Experten beraten und finden Sie die perfekte Yacht für Ihren Kroatien-Törn</p>
            </div>
            <CharterRequestForm />
          </div>
        </div>

        {/* Top Destinations */}
        <TopDestinations />
      </div>
    </div>
  );
}