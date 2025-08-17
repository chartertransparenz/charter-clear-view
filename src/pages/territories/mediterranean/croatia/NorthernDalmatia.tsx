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

export default function NorthernDalmatia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Norddalmatien' },
    { icon: Clock, label: 'Beste Zeit', value: 'April - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Fortgeschrittene' },
    { icon: Anchor, label: 'Marinas', value: '25+ Marinas' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Maestral & Bora' },
    { icon: Sun, label: 'Sonnentage', value: '300+ pro Jahr' }
  ];

  const cities = [
    {
      name: 'Zadar',
      description: 'Historische Stadt mit Meeresorgel und Sonnengruß',
      marinas: 4,
      highlights: ['Marina Zadar', 'Meeresorgel', 'Forum Romanum']
    },
    {
      name: 'Šibenik',
      description: 'UNESCO-Weltkulturerbe mit beeindruckender Kathedrale',
      marinas: 3,
      highlights: ['Marina Šibenik', 'Kathedrale St. Jakob', 'Krka Nationalpark']
    },
    {
      name: 'Biograd',
      description: 'Familienfreundlicher Ort vor den Kornaten',
      marinas: 2,
      highlights: ['Marina Kornati', 'Kornati Nationalpark', 'Pašman Insel']
    },
    {
      name: 'Murter',
      description: 'Tor zu den Kornaten mit traditioneller Atmosphäre',
      marinas: 2,
      highlights: ['Marina Hramina', 'Kornati Tor', 'Slanica Strand']
    }
  ];

  const highlights = [
    'Kornati Nationalpark - 89 Inseln',
    'Krka Nationalpark mit Wasserfällen',
    'Unberührte Natur und einsame Buchten',
    'Starke Maestral-Winde für sportliches Segeln',
    'Reiche Geschichte und Kultur',
    'Authentische dalmatinische Küche',
    'Weniger Massentourismus',
    'Perfekt für Naturliebhaber'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/725dc9eb-cef9-47b0-9eb3-1097bd7e3324.png)' }}>
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
          <h2 className="text-3xl font-bold mb-6">Segeln in Norddalmatien</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Norddalmatien ist das Paradies für Naturliebhaber und erfahrene Segler. Die Region bietet mit dem Kornati 
            Nationalpark eine der schönsten und wildesten Insellandschaften der Adria. Hier finden Sie unberührte Natur, 
            kristallklares Wasser und die berühmten Maestral-Winde.
          </p>
          <p className="text-lg text-muted-foreground">
            Von den historischen Städten Zadar und Šibenik bis zu den einsamen Kornati-Inseln - Norddalmatien 
            vereint Kultur, Geschichte und unberührte Natur auf einzigartige Weise.
          </p>
        </div>

        {/* Cities */}
        <div className="mb-16">
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
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Warum Norddalmatien?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Bereit für Norddalmatien?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entdecken Sie die Kornati-Inseln und unberührte Naturschönheiten
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