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

export default function SouthernDalmatia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Süddalmatien' },
    { icon: Clock, label: 'Beste Zeit', value: 'April - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '15+ Marinas' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Mild & beständig' },
    { icon: Sun, label: 'Sonnentage', value: '300+ pro Jahr' }
  ];

  const cities = [
    {
      name: 'Dubrovnik',
      description: 'Perle der Adria - UNESCO-Weltkulturerbe',
      marinas: 3,
      highlights: ['ACI Marina Dubrovnik', 'Altstadt', 'Stadtmauern']
    },
    {
      name: 'Korčula',
      description: 'Geburtsort Marco Polos mit mittelalterlichem Charme',
      marinas: 2,
      highlights: ['ACI Marina Korčula', 'Marco Polo Haus', 'Vela Luka']
    },
    {
      name: 'Mljet',
      description: 'Nationalpark-Insel mit Salzwasserseen',
      marinas: 2,
      highlights: ['Marina Sobra', 'Mljet Nationalpark', 'Odysseus Höhle']
    },
    {
      name: 'Lastovo',
      description: 'Sterneninsel mit dunklem Himmel',
      marinas: 1,
      highlights: ['Marina Lastovo', 'Sternenpark', 'Fumari Festival']
    }
  ];

  const highlights = [
    'Dubrovnik - Perle der Adria',
    'Korčula - Marco Polos Heimat',
    'Mljet Nationalpark mit Salzwasserseen',
    'Elafiti Inseln vor Dubrovnik',
    'Milde Winde und ruhige See',
    'Unvergleichliche Naturschönheit',
    'Reiche Geschichte und Kultur',
    'Weniger überfüllt als andere Regionen'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/68a41bf5-1573-472d-8722-34cdca418a0e.png)' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <Link to="/reviere/mittelmeer/kroatien" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Kroatien
            </Link>
            <h1 className="text-5xl font-bold mb-4">Süddalmatien</h1>
            <p className="text-xl text-white/90">Dubrovnik und die südlichsten Perlen Kroatiens - Geschichte und unberührte Natur</p>
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
                <BreadcrumbPage>Süddalmatien</BreadcrumbPage>
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
          <h2 className="text-3xl font-bold mb-6">Segeln in Süddalmatien</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Süddalmatien ist die Krönung jeder Kroatien-Segelreise. Mit Dubrovnik als Juwel und den ursprünglichen Inseln 
            Korčula, Mljet und Lastovo bietet diese Region eine einzigartige Mischung aus UNESCO-Weltkulturerbe, 
            unberührter Natur und ruhigen Segelbedingungen.
          </p>
          <p className="text-lg text-muted-foreground">
            Hier finden Sie die perfekte Balance zwischen kulturellen Höhepunkten und entspanntem Segeln 
            in einer der schönsten Landschaften der Adria.
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
          <h2 className="text-3xl font-bold text-center mb-8">Warum Süddalmatien?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Bereit für Süddalmatien?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entdecken Sie Dubrovnik und die südlichsten Perlen Kroatiens
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