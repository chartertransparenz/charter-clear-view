import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
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

export default function KvarnerBay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Kvarner Bucht' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '20+ Marinas' },
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
    'Kristallklares Wasser und einsame Buchten',
    'Bora-Wind für sportliches Segeln',
    'Reiche Geschichte von Römern bis Venezianern',
    'Ausgezeichnete Marina-Infrastruktur',
    'Naturparks und Schutzgebiete'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/4150206c-dd18-4f04-84cf-eb44e39fe992.png)' }}>
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

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Segeln in der Kvarner Bucht</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Die Kvarner Bucht bietet eine einzigartige Mischung aus geschützten Gewässern und authentischer kroatischer Kultur. 
            Mit ihrer vielfältigen Inselwelt und den kurzen Distanzen zwischen den Zielen ist sie perfekt für entspanntes 
            Inselhüpfen und sportliches Segeln gleichermaßen.
          </p>
          <p className="text-lg text-muted-foreground">
            Von der lebendigen Hafenstadt Rijeka bis zur duftenden Insel Lošinj - jede Insel hat ihren eigenen Charakter 
            und lädt zu besonderen Entdeckungen ein.
          </p>
        </div>

        {/* Cities */}
        <div className="mb-16">
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
        <div className="mb-16">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CharterRequestForm />
            <Button size="lg" variant="outline">
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}