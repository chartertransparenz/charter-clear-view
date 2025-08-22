import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Clock, Users, Anchor, Wind, Sun, Star } from 'lucide-react';
export default function CentralDalmatia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: 'Region',
    value: 'Mitteldalmatien'
  }, {
    icon: Clock,
    label: 'Beste Zeit',
    value: 'April - Oktober'
  }, {
    icon: Users,
    label: 'Geeignet für',
    value: 'Alle Levels'
  }, {
    icon: Anchor,
    label: 'Marinas',
    value: '30+ Marinas'
  }, {
    icon: Wind,
    label: 'Windverhältnisse',
    value: 'Maestral ideal'
  }, {
    icon: Sun,
    label: 'Sonnentage',
    value: '320+ pro Jahr'
  }];
  const cities = [{
    name: 'Split',
    description: 'Größte Stadt Dalmatiens mit Diokletianpalast (UNESCO)',
    marinas: 5,
    highlights: ['ACI Marina Split', 'Diokletianpalast', 'Riva Promenade']
  }, {
    name: 'Hvar',
    description: 'Glamouröse Insel mit Lavendelfeldern und Nachtleben',
    marinas: 3,
    highlights: ['ACI Marina Palmižana', 'Hvar Stadt', 'Pakleni Inseln']
  }, {
    name: 'Brač',
    description: 'Berühmt für das Goldene Horn und weißen Stein',
    marinas: 4,
    highlights: ['Marina Milna', 'Zlatni Rat', 'Bol']
  }, {
    name: 'Vis',
    description: 'Authentische Insel abseits des Massentourismus',
    marinas: 2,
    highlights: ['Marina Vis', 'Blaue Grotte', 'Stiniva Bucht']
  }, {
    name: 'Trogir',
    description: 'UNESCO-Weltkulturerbe - steinerne Schönheit',
    marinas: 3,
    highlights: ['ACI Marina Trogir', 'Altstadt', 'Kathedrale St. Lovro']
  }];
  const highlights = ['Split - perfekte Ausgangsbasis', 'Hvar - Glamour und Lavendel', 'Brač - Goldenes Horn Strand', 'Vis - authentisches Inselleben', 'Kristallklares türkisfarbenes Wasser', 'Ideale Maestral-Winde', 'Reiche Geschichte und Kultur', 'Exzellente Marina-Infrastruktur'];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{
      backgroundImage: 'url(/lovable-uploads/f75a2961-5386-48a3-9aae-e12df9b325f6.png)'
    }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <Link to="/reviere/mittelmeer/kroatien" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Kroatien
            </Link>
            <h1 className="text-5xl font-bold mb-4">Mitteldalmatien</h1>
            <p className="text-xl text-white/90">Das Herzstück Kroatiens - Split, Hvar und die schönsten Inseln der Adria</p>
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
                <BreadcrumbPage>Mitteldalmatien</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {quickFacts.map((fact, index) => <Card key={index} className="text-center">
              <CardContent className="p-4">
                <fact.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">{fact.label}</p>
                <p className="font-semibold">{fact.value}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Description */}
        

        {/* Cities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Wichtige Segelbasen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
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
                      {city.highlights.map((highlight, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {highlight}
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Warum Mitteldalmatien?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Star className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <p className="text-sm">{highlight}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für Mitteldalmatien?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entdecken Sie das Herzstück Kroatiens mit seinen legendären Inseln
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
    </div>;
}