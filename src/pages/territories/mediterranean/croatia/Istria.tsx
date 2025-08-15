import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Clock, Users, Anchor, Wind, Sun, Star } from 'lucide-react';

export default function Istria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Nordkroatien' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '15+ Premium' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Mäßig bis stark' },
    { icon: Sun, label: 'Sonnentage', value: '280+ pro Jahr' }
  ];

  const cities = [
    {
      name: 'Pula',
      description: 'Historische Hafenstadt mit römischem Amphitheater',
      marinas: 3,
      highlights: ['Arena von Pula', 'ACI Marina Pula', 'Brijuni Nationalpark']
    },
    {
      name: 'Rovinj',
      description: 'Malerische Küstenstadt mit venezianischem Flair',
      marinas: 2,
      highlights: ['Altstadt', 'Marina Rovinj', 'Goldenes Kap']
    },
    {
      name: 'Poreč',
      description: 'UNESCO-Weltkulturerbe mit byzantinischen Mosaiken',
      marinas: 2,
      highlights: ['Euphrasius-Basilika', 'Marina Parentium', 'Zelena Laguna']
    },
    {
      name: 'Umag',
      description: 'Moderne Marina mit erstklassiger Ausstattung',
      marinas: 1,
      highlights: ['ACI Marina Umag', 'Tennisturniere', 'Weinregion']
    }
  ];

  const highlights = [
    'Kurze Anreise aus Deutschland und Österreich',
    'Kristallklares Wasser und versteckte Buchten',
    'Ausgezeichnete Marina-Infrastruktur',
    'Reiche Geschichte und Kultur',
    'Hervorragende istrische Küche und Weine',
    'Brijuni Nationalpark vor der Küste',
    'Milde Winde, ideal für Anfänger',
    'Zahlreiche Restaurants und Tavernen'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/626a5986-8add-495e-97d7-9c028042f1a4.png)' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <Link to="/reviere/mittelmeer/kroatien" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Kroatien
            </Link>
            <h1 className="text-5xl font-bold mb-4">Istrien</h1>
            <p className="text-xl text-white/90">Die nördlichste Halbinsel Kroatiens - perfekte Marina-Infrastruktur und venezianisches Flair</p>
          </div>
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
          <h2 className="text-3xl font-bold mb-6">Segeln in Istrien</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Istrien ist die perfekte Einstiegsregion für Kroatien-Segler. Die kurze Anreise, exzellente Marina-Infrastruktur 
            und milden Windverhältnisse machen sie ideal für Familien und Segelanfänger. Die venezianische Architektur und 
            erstklassige Küche sorgen für unvergessliche Landgänge.
          </p>
          <p className="text-lg text-muted-foreground">
            Von der historischen Arena in Pula bis zu den romantischen Gassen von Rovinj - Istrien vereint Kultur, 
            Natur und Segelsport auf einzigartige Weise.
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
          <h2 className="text-3xl font-bold text-center mb-8">Warum Istrien?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Bereit für Ihr Istrien-Abenteuer?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entdecken Sie die venezianische Küste Kroatiens mit perfekter Marina-Infrastruktur
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