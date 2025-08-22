import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Clock, Users, Anchor, Wind, Sun, Star } from 'lucide-react';
import destinationCroatia from '@/assets/destination-croatia.jpg';
import TerritoryMap from '@/components/TerritoryMap';
export default function NorthernDalmatia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: 'Region',
    value: 'Norddalmatien'
  }, {
    icon: Clock,
    label: 'Beste Zeit',
    value: 'April - Oktober'
  }, {
    icon: Users,
    label: 'Geeignet für',
    value: 'Fortgeschrittene'
  }, {
    icon: Anchor,
    label: 'Marinas',
    value: '25+ Marinas'
  }, {
    icon: Wind,
    label: 'Windverhältnisse',
    value: 'Maestral & Bora'
  }, {
    icon: Sun,
    label: 'Sonnentage',
    value: '300+ pro Jahr'
  }];
  const cities = [{
    name: 'Zadar',
    description: 'Historische Stadt mit Meeresorgel und Sonnengruß',
    marinas: 4,
    highlights: ['Marina Zadar', 'Meeresorgel', 'Forum Romanum']
  }, {
    name: 'Šibenik',
    description: 'UNESCO-Weltkulturerbe mit beeindruckender Kathedrale',
    marinas: 3,
    highlights: ['Marina Šibenik', 'Kathedrale St. Jakob', 'Krka Nationalpark']
  }, {
    name: 'Biograd',
    description: 'Familienfreundlicher Ort vor den Kornaten',
    marinas: 2,
    highlights: ['Marina Kornati', 'Kornati Nationalpark', 'Pašman Insel']
  }, {
    name: 'Murter',
    description: 'Tor zu den Kornaten mit traditioneller Atmosphäre',
    marinas: 2,
    highlights: ['Marina Hramina', 'Kornati Tor', 'Slanica Strand']
  }];
  const highlights = ['Kornati Nationalpark - 89 Inseln', 'Krka Nationalpark mit Wasserfällen', 'Unberührte Natur und einsame Buchten', 'Starke Maestral-Winde für sportliches Segeln', 'Reiche Geschichte und Kultur', 'Authentische dalmatinische Küche', 'Weniger Massentourismus', 'Perfekt für Naturliebhaber'];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{
      backgroundImage: `url(${destinationCroatia})`
    }}>
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
          {quickFacts.map((fact, index) => <Card key={index} className="text-center">
              <CardContent className="p-4">
                <fact.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">{fact.label}</p>
                <p className="font-semibold">{fact.value}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          
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

        {/* Territory Map */}
        <div className="mb-16">
          <TerritoryMap 
            region="Norddalmatien"
            center={{ lat: 43.9335, lng: 15.5049 }}
            zoom={10}
            markers={[
              { lat: 44.1194, lng: 15.2314, name: 'Zadar', description: 'Historische Stadt mit Marina' },
              { lat: 43.7350, lng: 15.8952, name: 'Šibenik', description: 'UNESCO-Weltkulturerbe' },
              { lat: 43.9434, lng: 15.4506, name: 'Biograd', description: 'Tor zu den Kornati-Inseln' },
              { lat: 43.8394, lng: 15.5897, name: 'Murter', description: 'Traditioneller Segelort' }
            ]}
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Detailed Region Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Norddalmatien</h2>
            <p className="text-xl text-muted-foreground">
              Segeln im Herzen der kroatischen Inselwelt – Ihr Traumtörn zwischen Zadar, Šibenik und den Kornaten
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Kroatien – ein Land, das wie geschaffen ist für einen Yachtcharter. Mit seiner über 1.700 Kilometer langen 
              Küstenlinie, mehr als 1.200 Inseln und Inselchen, einem türkisblauen Meer und einer Fülle von historischen 
              Städten und modernen Marinas, ist die kroatische Adria seit Jahrzehnten eines der beliebtesten Segelreviere Europas. 
              Norddalmatien, die Region zwischen Zadar und Rogoznica, gilt dabei als das Kronjuwel für Segler. Hier erwartet 
              Sie eine unvergleichliche Mischung aus unberührter Natur, antiker Geschichte und herzlicher Gastfreundschaft.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina in Zadar, Biograd oder Šibenik, lassen die 
              beeindruckende Kulisse der dalmatinischen Küste hinter sich und nehmen Kurs auf eine Inselwelt, die einem Märchen 
              gleicht. Jeder Tag bringt neue Horizonte: malerische Buchten, die zum Schwimmen und Schnorcheln einladen, 
              versteckte Grotten, die nur vom Meer aus zugänglich sind, und historische Städte, deren Gassen von Jahrtausenden 
              europäischer Geschichte erzählen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Die Regionen Norddalmatiens: Ein Segelparadies in zwei Akten</h3>
            <p className="text-lg leading-relaxed mb-6">
              Norddalmatien gliedert sich grob in zwei Hauptregionen, die jeweils ihren eigenen, unverwechselbaren Charme 
              und spezifische Segelbedingungen bieten.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">1. Die Region Zadar: Von der historischen Stadt bis zum Kornaten-Tor</h4>
            <p className="mb-4">
              Diese nördliche Hälfte Norddalmatiens ist geprägt von der pulsierenden Stadt Zadar und einem weitläufigen 
              Archipel, der direkt in den Nationalpark Kornaten übergeht.
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Zadar:</strong> Eine faszinierende Stadt mit einer über 3.000 Jahre alten Geschichte. Die Altstadt, 
              umgeben von venezianischen Mauern, ist ein Labyrinth aus römischen Ruinen, mittelalterlichen Kirchen und 
              belebten Plätzen. Nautische Highlights sind die einzigartige Meeresorgel, deren Töne durch die Wellen erzeugt 
              werden, und der "Gruß an die Sonne".</li>
              
              <li><strong>Der Zadarer Archipel:</strong> Direkt vor Zadar erstreckt sich eine Kette von Inseln:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Ugljan & Pašman:</strong> Diese beiden Inseln sind durch eine Brücke verbunden und bieten 
                  charmante Dörfer, Olivenhaine und ruhige Buchten.</li>
                  <li><strong>Dugi Otok (Lange Insel):</strong> Eine der schönsten Inseln des Archipels, bekannt für den 
                  Naturpark Telašćica im Süden – ein tief eingeschnittener Fjord mit steilen Klippen und einem Salzwassersee.</li>
                </ul>
              </li>
              
              <li><strong>Nationalpark Kornaten:</strong> Ein absolutes Highlight für jeden Segler in Norddalmatien. 
              Dieses einzigartige Archipel besteht aus 89 Inseln, Inselchen und Riffen, die wie eine Mondlandschaft aus 
              dem Meer ragen.</li>
              
              <li><strong>Murter:</strong> Die Insel Murter, über eine Brücke mit dem Festland verbunden, gilt als das Tor 
              zu den Kornaten. Hier befinden sich lebhafte Marinas wie Marina Hramina und Marina Betina.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">2. Die Region Šibenik: Historische Schätze und moderne Marinas</h4>
            <p className="mb-4">
              Diese südliche Hälfte Norddalmatiens ist geprägt von der beeindruckenden Stadt Šibenik und einer Küstenlinie, 
              die von Flussmündungen und malerischen Küstenorten gesäumt ist.
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Šibenik:</strong> Eine der ältesten kroatischen Städte an der Adria, die sich malerisch an einen 
              Hügel schmiegt. Ihr Wahrzeichen ist die Kathedrale des Heiligen Jakob, ein UNESCO-Welterbe.</li>
              
              <li><strong>Nationalpark Krka:</strong> Ein weiteres Naturwunder Kroatiens. Über den Fluss Krka können Sie 
              mit dem Boot bis Skradin fahren und von dort aus die berühmten Wasserfälle erkunden.</li>
              
              <li><strong>Der Šibeniker Archipel:</strong> Eine Gruppe von Inseln mit Zlarin (Korallenfischerei), 
              Prvić (autofrei), Kaprije & Žirje (ruhige Ankerstopps).</li>
              
              <li><strong>Primošten:</strong> Ein malerischer Küstenort, dessen Altstadt auf einer kleinen Halbinsel liegt 
              und mit dem Festland verbunden ist.</li>
              
              <li><strong>Rogoznica:</strong> Ein beliebter Ferienort mit der modernen Marina Frapa, einer der schönsten 
              und bestausgestatteten Marinas an der Adria.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen</h3>
            <p className="mb-4">
              Das Wetter in Kroatien ist typisch mediterran mit heißen, trockenen Sommern und milden Wintern. 
              Die Segelsaison erstreckt sich von April bis in den späten Oktober.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Typische Winde:</h4>
              <ul className="space-y-2">
                <li><strong>Bora (Bura):</strong> Ein starker, kalter Fallwind aus Nordost</li>
                <li><strong>Jugo (Scirocco):</strong> Ein warmer, feuchter Wind aus Südost</li>
                <li><strong>Maestral:</strong> Der vorherrschende Sommerwind aus Nordwest (3-5 Bft)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ihr 7-Tage-Traumtörn in Norddalmatien</h3>
            <p className="mb-4 font-medium">Ab Biograd na Moru:</p>
            
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Ankunft & Inselzauber (Biograd – Pašman/Ugljan)</h5>
                <p className="text-sm text-muted-foreground">Nach dem Check-in kurzer Schlag zu einer ruhigen Bucht auf 
                Pašman oder Ugljan.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Dugi Otok – Naturpark & Traumstrand</h5>
                <p className="text-sm text-muted-foreground">Besuch des Naturparks Telašćica und des berühmten Sakarun Beach.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Nationalpark Kornaten – Insel-Labyrinth</h5>
                <p className="text-sm text-muted-foreground">Tauchen Sie ein in das Labyrinth der Kornaten mit unzähligen Buchten.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Murter – Tor zu den Kornaten</h5>
                <p className="text-sm text-muted-foreground">Marina Hramina oder Betina und Erkundung der charmanten Inselorte.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Šibenik & Krka-Wasserfälle</h5>
                <p className="text-sm text-muted-foreground">UNESCO-Kathedrale oder Fahrt den Fluss Krka hinauf zu den Wasserfällen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Primošten & Rogoznica</h5>
                <p className="text-sm text-muted-foreground">Malerische Küstenorte und die luxuriöse Marina Frapa.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Abschied von Dalmatien</h5>
                <p className="text-sm text-muted-foreground">Rückfahrt zur Charterbasis in Biograd.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h4 className="font-semibold mb-2 text-green-800">Beste Reisezeit</h4>
              <p className="text-green-700">
                Die beste Reisezeit für einen Yachtcharter in Norddalmatien sind die Monate Mai, Juni und September. 
                In dieser Zeit sind die Temperaturen angenehm warm, das Wasser hat Badetemperatur, die Häfen sind nicht 
                überfüllt und die Preise sind moderater als in der Hochsaison.
              </p>
            </div>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Wichtige Segelbasen</h2>
          <div className="grid md:grid-cols-2 gap-6">
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
          <h2 className="text-3xl font-bold text-center mb-8">Warum Norddalmatien?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Bereit für Norddalmatien?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entdecken Sie die Kornati-Inseln und unberührte Naturschönheiten
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