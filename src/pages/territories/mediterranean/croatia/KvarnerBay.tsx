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
import destinationCroatia from '@/assets/destination-croatia.jpg';

export default function KvarnerBay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Kvarner Bucht' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '8+ Häfen' },
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
    'Viele geschützte Ankerplätze',
    'Bora-Wind für sportliches Segeln',
    'Reiche Geschichte von Römern bis Venezianern',
    'Ausgezeichnete Marina-Infrastruktur',
    'Naturparks und Schutzgebiete'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${destinationCroatia})` }}>
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
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Yachtcharter Kvarner Bucht: Ein Segelparadies der Kontraste</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Willkommen in der Kvarner Bucht, einem Segelrevier, das mit seiner Vielfalt und Schönheit begeistert. Hier, wo das Festland auf ein Archipel aus großen und kleinen Inseln trifft, erwartet Sie eine Welt aus tiefgrün bewaldeten Küsten, kargen Mondlandschaften und kristallklarem Wasser. Ein Yachtcharter in der Kvarner Bucht ist eine Reise für alle Sinne, ideal für Naturliebhaber, Entdecker und alle, die das authentische kroatische Inselleben suchen.
            </p>
            <p>
              Die Kvarner Bucht ist ein Revier der Kontraste: Von den üppig grünen Inseln Cres und Lošinj im Westen bis zu den kargeren, aber faszinierenden Landschaften von Krk und Rab im Osten. Von malerischen Fischerdörfern bis zu mondänen Küstenorten wie Opatija – dieses Revier bietet eine perfekte Mischung aus aktivem Segeln in Kroatien, entspannten Ankerstopps und spannenden Landgängen. Die gute Erreichbarkeit und die erstklassige maritime Infrastruktur machen die Kvarner Bucht zu einer Top-Wahl für Ihren nächsten Charterurlaub.
            </p>

            <h3 className="text-2xl font-bold text-foreground">Ihre Ausgangshäfen in der Kvarner Bucht: Tor zu den Inseln</h3>
            <p>Die Kvarner Bucht bietet mehrere hervorragend ausgestattete Marinas, die als ideale Basis für Ihren Yachtcharter Kvarner Bucht dienen.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Marina Punat (Insel Krk):</strong> Eine der größten und ältesten Marinas an der Adria, bekannt für ihren hohen Standard und umfassenden Service. Punat ist dank der Brückenverbindung zum Festland bequem mit dem Auto erreichbar und ein idealer Ausgangspunkt für Törns in die gesamte Kvarner Bucht.</li>
              <li><strong>ACI Marina Cres:</strong> Direkt in der charmanten Stadt Cres gelegen, bietet diese ACI Marina alle Annehmlichkeiten und ist ein perfekter Startpunkt, um die grüne Insel Cres zu erkunden.</li>
              <li><strong>Marina Mali Lošinj:</strong> Im Herzen der "Insel der Vitalität" gelegen, ist diese Marina ein idealer Ausgangspunkt, um die duftenden Pinienwälder und das heilsame Klima von Lošinj zu erleben.</li>
              <li><strong>Andere Basen:</strong> Auch von Rijeka, Opatija oder Pula (Istrien) aus sind Törns in die Kvarner Bucht gut möglich.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground">Die Erreichbarkeit der Kvarner Bucht</h3>
            <p>Die Kvarner Bucht ist dank ihrer geografischen Lage besonders gut aus Mitteleuropa erreichbar.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mit dem PKW:</strong> Über gut ausgebaute Autobahnen ist die Region aus Deutschland, Österreich und der Schweiz bequem zu erreichen. Die Insel Krk ist über eine Brücke mit dem Festland verbunden, was die Anreise nach Punat besonders einfach macht. Die Marinas bieten sichere Parkmöglichkeiten.</li>
              <li><strong>Per Flugzeug:</strong> Der Flughafen Rijeka (RJK) auf der Insel Krk wird von verschiedenen europäischen Städten direkt angeflogen. Alternativ ist auch der Flughafen Pula (PUY) in Istrien eine Option, von wo aus die südliche Kvarner Bucht gut erreichbar ist.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground">Beliebte Törnziele: Die Vielfalt der Kvarner Inseln</h3>
            <p>Die Kvarner Bucht ist ein Paradies für Inselhopping in Kroatien, mit einer unglaublichen Vielfalt an Zielen.</p>

            <h4 className="text-xl font-semibold text-foreground">Cres: Die grüne Oase</h4>
            <p>Die Insel Cres ist die zweitgrößte Insel Kroatiens und besticht durch ihre unberührte Natur, dichte Wälder und versteckte Buchten.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Highlights:</strong> Die charmante Stadt Cres mit ihrer venezianischen Architektur, der Süßwassersee Vrana im Inselinneren und die Möglichkeit, Gänsegeier zu beobachten.</li>
              <li><strong>Nautische Besonderheiten:</strong> Zahlreiche geschützte Ankerbuchten entlang der Küste, ideal zum Entspannen.</li>
            </ul>

            <h4 className="text-xl font-semibold text-foreground">Lošinj: Die Insel der Vitalität und Delfine</h4>
            <p>Lošinj ist bekannt für sein mildes Klima, die duftenden Pinienwälder und die hohe Anzahl an Sonnentagen. Die Insel ist Heimat einer Delfinpopulation.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Highlights:</strong> Die malerische Stadt Mali Lošinj mit ihrem lebhaften Hafen, die Čikat-Bucht mit ihren luxuriösen Hotels und Spazierwegen, und das Meeresduft-Garten.</li>
              <li><strong>Nautische Besonderheiten:</strong> Die Meerenge von Osor zwischen Cres und Lošinj ist eine wichtige Passage mit Brückenöffnung (feste Zeiten beachten).</li>
            </ul>

            <h4 className="text-xl font-semibold text-foreground">Krk: Die vielfältige Insel</h4>
            <p>Krk ist die größte Insel Kroatiens und bietet eine beeindruckende landschaftliche Vielfalt – von kargen Karstlandschaften im Osten bis zu fruchtbaren Tälern und Weinbergen im Westen.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Highlights:</strong> Die historische Stadt Krk mit ihrer Kathedrale, das charmante Vrbnik auf einem Felsen über dem Meer (bekannt für seinen Wein Žlahtina) und die Bucht von Baška mit ihrem langen Kiesstrand.</li>
            </ul>

            <h4 className="text-xl font-semibold text-foreground">Rab: Die Insel der Sandstrände</h4>
            <p>Rab ist berühmt für seine einzigartigen Sandstrände, die in Kroatien selten sind. Die Stadt Rab selbst beeindruckt mit ihren vier Glockentürmen und einer wunderschönen Altstadt.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Highlights:</strong> Die Paradiesbucht (Rajska plaža) in Lopar, die vielen kleinen Sandbuchten entlang der Küste und die lebhafte Atmosphäre der Stadt Rab.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground">Wetter und Windbedingungen in der Kvarner Bucht</h3>
            <p>Die Kvarner Bucht bietet vielfältige Segelbedingungen.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Maestral (NW):</strong> Der dominierende Sommerwind, der am Nachmittag für zuverlässigen Segelwind (3-5 Bft) sorgt. Er ist ideal für entspanntes Segeln.</li>
              <li><strong>Bora (NO):</strong> Dieser trockene, böige Fallwind kann in der Kvarner Bucht, insbesondere im Velebit-Kanal, kräftig wehen. Im Sommer ist sie meist kurz und sorgt für klare Luft. Erfahrene Skipper wissen die Bora zu respektieren und nutzen die zahlreichen geschützten Buchten und Häfen als Schutz.</li>
              <li><strong>Jugo (SO):</strong> Ein warmer, feuchter Wind, der sich über mehrere Tage aufbaut und eine moderate Welle mit sich bringen kann.</li>
            </ul>
            <p>Das Revier ist im Sommer für alle Erfahrungsstufen geeignet, wobei ein grundlegendes Verständnis der Bora von Vorteil ist. In der Vor- und Nachsaison bietet es auch für erfahrene Skipper reizvolle Bedingungen mit weniger Trubel.</p>

            <h3 className="text-2xl font-bold text-foreground">Beste Reisezeit für Ihren Kvarner-Törn</h3>
            <p>Die Segelsaison in der Kvarner Bucht dauert von Mai bis Oktober. Die besten Monate sind Mai, Juni und September. In dieser Zeit genießen Sie angenehme Temperaturen, stabile Winde und ein noch nicht überlaufenes Revier. Das Meer ist bereits oder noch warm genug zum Baden. Juli und August sind die heißesten Monate mit dem größten touristischen Aufkommen.</p>

            <h3 className="text-2xl font-bold text-foreground">Fazit: Kvarner Bucht – Ihr Segelabenteuer der Gegensätze</h3>
            <p>Ein Yachtcharter in der Kvarner Bucht ist die perfekte Symbiose aus aktivem Segeln, kultureller Entdeckung und dem Eintauchen in eine einzigartige Natur. Die beeindruckenden Küstenlandschaften, die Vielfalt der Inseln und das unvergleichliche mediterrane Flair machen diese Region zu einem unvergesslichen Ziel. Ob Sie eine moderne Segelyacht, einen geräumigen Katamaran oder eine Charter mit erfahrenem Skipper suchen – die Kvarner Bucht wird Sie mit ihrer Schönheit und ihren Kontrasten begeistern.</p>

            <h3 className="text-2xl font-bold text-foreground">Bereit für Ihr Segelabenteuer in der Kvarner Bucht?</h3>
            <p>Fordern Sie jetzt Ihr unverbindliches Angebot für einen Bareboat-Charter oder eine Yacht mit Skipper an. Unser erfahrenes Team ist auf die Kvarner Bucht spezialisiert und berät Sie gerne bei der Planung Ihres Traumtörns.</p>
          </div>
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