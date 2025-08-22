import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Clock, Users, Anchor, Wind, Sun, Star } from 'lucide-react';
import TerritoryMap from '@/components/TerritoryMap';
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
    description: 'Größte Insel mit dem berühmten Goldenen Horn',
    marinas: 4,
    highlights: ['Marina Milna', 'Zlatni Rat', 'Bol', 'Supetar']
  }, {
    name: 'Kaštela',
    description: 'Moderne Marina-Infrastruktur zwischen Split und Trogir',
    marinas: 2,
    highlights: ['Marina Kaštela', 'Sieben Schlösser', 'Zentrale Lage']
  }, {
    name: 'Vis',
    description: 'Authentische Insel abseits der Touristenströme',
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
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-top" style={{
      backgroundImage: 'url(/lovable-uploads/16041da5-2d0d-490f-b325-47a855ffc362.png)'
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
        

        {/* Territory Map */}
        <div className="mb-16">
          <TerritoryMap region="Mitteldalmatien" center={{
          lat: 43.5081,
          lng: 16.4402
        }} zoom={10} markers={[{
          lat: 43.5081,
          lng: 16.4402,
          name: 'Split',
          description: 'Größte Stadt mit Diokletianpalast'
        }, {
          lat: 43.5154,
          lng: 16.2517,
          name: 'Trogir',
          description: 'UNESCO-Welterbe Altstadt'
        }, {
          lat: 43.4725,
          lng: 16.3249,
          name: 'Kaštela',
          description: 'Moderne Marina-Infrastruktur'
        }, {
          lat: 43.1729,
          lng: 16.4420,
          name: 'Hvar',
          description: 'Glamouröse Lavendelinsel'
        }]} className="max-w-4xl mx-auto" />
        </div>

        {/* Detailed Region Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Mitteldalmatien</h2>
            <p className="text-xl text-muted-foreground">
              Segeln im Herzen der kroatischen Adria – Ihr Traumtörn zwischen Trogir, Kaštela und Split
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Kroatien – ein Land, das wie geschaffen ist für einen Yachtcharter. Mit seiner über 1.700 Kilometer langen 
              Küstenlinie, mehr als 1.200 Inseln und Inselchen, einem türkisblauen Meer und einer Fülle von historischen 
              Städten und modernen Marinas, ist die kroatische Adria seit Jahrzehnten eines der beliebtesten Segelreviere Europas. 
              Mitteldalmatien, die Region rund um Trogir, Kaštela und Split, gilt dabei als das pulsierende Herz des kroatischen 
              Yachtcharters. Hier erwartet Sie eine unvergleichliche Mischung aus unberührter Natur, antiker Geschichte, 
              pulsierendem Leben und herzlicher Gastfreundschaft.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina in Trogir, Kaštela oder Split, lassen die 
              beeindruckende Kulisse der dalmatinischen Küste hinter sich und nehmen Kurs auf eine Inselwelt, die einem Märchen 
              gleicht. Jeder Tag bringt neue Horizonte: malerische Buchten, die zum Schwimmen und Schnorcheln einladen, 
              versteckte Grotten, die nur vom Meer aus zugänglich sind, und historische Städte, deren Gassen von Jahrtausenden 
              europäischer Geschichte erzählen.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Mitteldalmatien bietet eine unvergleichliche Vielfalt an Segelrevieren, die für jeden Geschmack und jede 
              Erfahrungsstufe das Richtige bereithalten. Die kurzen Distanzen zwischen den Inseln, die zahlreichen geschützten 
              Ankerplätze und die hervorragende maritime Infrastruktur machen diese Region zum idealen Ziel für Familien, 
              Genuss-Segler und alle, die das Inselhopping in vollen Zügen genießen möchten. Doch gerade in diesem Revier 
              sind die Kenntnis der lokalen Besonderheiten und die Einhaltung der Vorschriften von entscheidender Bedeutung 
              für einen reibungslosen und unvergesslichen Törn.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Das Herz Dalmatiens: Mitteldalmatien und seine Inselperlen</h3>
            <p className="text-lg leading-relaxed mb-6">
              Mitteldalmatien ist der beliebteste und am besten erschlossene Teil Dalmatiens und bietet eine perfekte Mischung 
              aus Kultur, Natur und maritimem Leben. Es ist das ideale Revier, um die berühmtesten Inseln Kroatiens zu erkunden.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Split:</strong> Die zweitgrößte Stadt Kroatiens und das pulsierende Zentrum Dalmatiens. Der 
              Diokletianpalast, ein UNESCO-Welterbe und das Herz der Stadt, ist ein lebendiges Museum, in dem sich Geschichte 
              und modernes Leben auf einzigartige Weise verbinden. Split ist ein wichtiger Charterstützpunkt mit mehreren 
              Marinas (z.B. ACI Marina Split, Marina Lav in Podstrana).</li>
              
              <li><strong>Trogir:</strong> Eine bezaubernde, mittelalterliche Stadt, die auf einer kleinen Insel liegt und 
              durch Brücken mit dem Festland und der Insel Ciovo verbunden ist. Die gesamte Altstadt von Trogir ist ein 
              UNESCO-Welterbe und ein Labyrinth aus engen Gassen, historischen Gebäuden und charmanten Plätzen. Die ACI Marina 
              Trogir liegt direkt gegenüber der Altstadt und bietet einen atemberaubenden Blick.</li>
              
              <li><strong>Kaštela:</strong> Eine Kette von sieben historischen Dörfern, die sich zwischen Split und Trogir 
              erstrecken. Hier befindet sich die Marina Kaštela, eine der größten und modernsten Marinas an der Adria. Ihre 
              strategische Lage macht sie zu einem idealen Ausgangspunkt für Törns in alle Richtungen Mitteldalmatiens.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Die Inseln Mitteldalmatiens:</h4>
            <p className="mb-4">Die vorgelagerten Inseln sind das eigentliche Segelparadies und bieten eine unglaubliche Vielfalt.</p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Brač:</strong> Die größte Insel Dalmatiens, bekannt für den berühmten Strand Zlatni Rat (Goldenes Horn) 
              bei Bol, der seine Form je nach Wind und Strömung ändert. Charmante Orte wie Milna und Supetar laden zum Verweilen ein.</li>
              
              <li><strong>Hvar:</strong> Die "Lavendelinsel", berühmt für ihre sonnigen Weinberge, ihr pulsierendes Nachtleben 
              in Hvar-Stadt, aber auch für ihre historischen Städte wie Stari Grad (eine der ältesten Städte Europas, 
              UNESCO-Welterbe) und Jelsa. Die Pakleni-Inseln vor Hvar-Stadt bieten unzählige geschützte Ankerbuchten und die 
              berühmte Marina Palmižana.</li>
              
              <li><strong>Vis:</strong> Die am weitesten vom Festland entfernte bewohnte Insel, die lange Zeit militärisches 
              Sperrgebiet war und daher ihre Ursprünglichkeit bewahren konnte. Bekannt für ihre entspannte Atmosphäre, 
              hervorragende Weine und die Blaue Grotte auf der Nachbarinsel Biševo.</li>
              
              <li><strong>Šolta:</strong> Die dem Festland am nächsten gelegene Insel, bekannt für ihre Olivenhaine, 
              Honigproduktion und ruhige, charmante Dörfer wie Maslinica und Stomorska.</li>
              
              <li><strong>Drvenik Veli & Mali:</strong> Kleinere, ruhige Inseln mit wunderschönen Buchten, darunter die berühmte 
              Blaue Lagune auf Drvenik Veli – ein Paradies zum Schwimmen und Schnorcheln.</li>
            </ul>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black"><strong>Nautische Besonderheiten Mitteldalmatiens:</strong> Die Gewässer sind 
              hier meist gut geschützt durch die vielen Inseln. Es gibt zahlreiche Kanäle und Passagen, die eine 
              abwechslungsreiche Navigation ermöglichen. Die Wassertiefen sind meist ausreichend, aber Aufmerksamkeit 
              für Untiefen und Riffe ist immer geboten.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erreichbarkeit: Ihr schneller Weg an Bord</h3>
            <p className="mb-4">
              Kroatien ist dank seiner hervorragenden Infrastruktur und seiner geografischen Nähe zu Mitteleuropa sehr gut erreichbar.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Per Flugzeug</h4>
                <p className="mb-4 text-black">Der Flughafen Split (SPU) ist der wichtigste Ankunftsort für Chartergäste in 
                Mitteldalmatien. Er liegt strategisch günstig, nur wenige Kilometer von Trogir (ca. 6 km) und Kaštela (ca. 10 km) 
                entfernt. Zahlreiche internationale Flughäfen in Deutschland, Österreich und der Schweiz bieten Direktflüge nach 
                Split an.</p>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Per PKW</h4>
                <p className="mb-3 text-black">Kroatien ist aus Süddeutschland, Österreich und der Schweiz bequem mit dem Auto erreichbar. 
                Dies bietet den Vorteil, mehr Gepäck und persönlichen Proviant mitnehmen zu können.</p>
                <p className="text-sm text-black">Die meisten Marinas bieten sichere Parkmöglichkeiten für die 
                Dauer Ihres Törns.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Marinas & Ausgangshäfen: Perfekte Infrastruktur für Ihren Törn</h3>
            <p className="mb-4">
              Kroatien verfügt über eine exzellente maritime Infrastruktur mit einem dichten Netz an modernen Marinas und Stadthäfen.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">ACI Marinas</h4>
              <p className="text-black">Die ACI (Adriatic Croatia International Club) ist die größte Marina-Kette im 
              Mittelmeer und betreibt zahlreiche hochmoderne Marinas entlang der gesamten kroatischen Küste, auch in 
              Dalmatien. Sie bieten umfassenden Service (Wasser, Strom, Sanitäranlagen, WLAN, Werften, Restaurants, Geschäfte).</p>
            </div>

            <h4 className="text-lg font-semibold mb-3">Wichtige Basen in Mitteldalmatien:</h4>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Marina Kaštela:</strong> Eine der größten und modernsten Marinas an der Adria, mit einer riesigen 
              Auswahl an Charteryachten. Ihre zentrale Lage zwischen Split und Trogir ist ideal.</li>
              <li><strong>ACI Marina Trogir:</strong> Direkt gegenüber der historischen Altstadt von Trogir gelegen, bietet sie 
              einen einzigartigen Charme und direkten Zugang zum UNESCO-Welterbe.</li>
              <li><strong>Marina Trogir:</strong> Sehr moderne & professionelle Marina direkt vor der ACI Marina. Gegenüber der 
              historischen Altstadt von Trogir gelegen.</li>
              <li><strong>ACI Marina Split:</strong> Direkt in der Stadt Split gelegen, ideal für alle, die das pulsierende 
              Stadtleben vor oder nach dem Törn genießen möchten.</li>
              <li><strong>Marina Lav (Podstrana):</strong> Eine weitere luxuriöse Marina südlich von Split.</li>
            </ul>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Umfassende Flotte</h4>
              <p className="text-black mb-3">Unsere Flotte umfasst eine große Auswahl an Charteryachten für jeden Anspruch und jede Crewgröße:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Moderne Segelyachten (Monohulls):</strong> Ideal für sportliches Segeln und klassisches Seemannsgefühl.</li>
                <li><strong>Geräumige Katamarane:</strong> Perfekt für Familien und Gruppen, die Wert auf Komfort, Stabilität und 
                viel Platz an Deck legen. Ideal für entspanntes Inselhopping.</li>
                <li><strong>Schnelle Motoryachten:</strong> Für alle, die in kurzer Zeit große Distanzen zurücklegen und mehrere 
                Highlights miteinander verbinden möchten.</li>
              </ul>
              <p className="mt-3 text-black">Sie haben die Wahl: Entscheiden Sie sich für eine Bareboat-Charter, wenn Sie über 
              die nötige Erfahrung und die erforderlichen Lizenzen verfügen, um die Yacht selbst zu führen. Oder genießen Sie 
              einen rundum entspannten Urlaub und buchen Sie einen unserer erfahrenen Skipper, der Sie sicher zu den schönsten 
              Plätzen des Reviers führt und Ihnen wertvolle Geheimtipps verrät.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele: Ein Kaleidoskop der Adria</h3>
            <p className="mb-6">
              Ein Yachtcharter in Dalmatien ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Trogir</h5>
                <p className="text-sm text-muted-foreground">UNESCO-geschützte Altstadt mit Kathedrale und Festung Kamerlengo</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Kaštela</h5>
                <p className="text-sm text-muted-foreground">Sieben charmante Dörfer mit historischen Burgen und Palästen</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Split</h5>
                <p className="text-sm text-muted-foreground">Diokletianpalast, Riva Promenade, lebhaftes Stadtleben</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Insel Hvar</h5>
                <p className="text-sm text-muted-foreground">Pulsierendes Nachtleben, Lavendelfelder, Stari Grad</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Pakleni-Inseln</h5>
                <p className="text-sm text-muted-foreground">Geschützte Ankerbuchten, Marina Palmižana, Restaurants</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h5 className="font-semibold">Insel Brač</h5>
                <p className="text-sm text-muted-foreground">Berühmter Strand Zlatni Rat bei Bol, charmante Hafenorte</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-semibold mb-2 text-black">Ankerplätze & Buchten</h5>
                  <p className="text-sm text-black">Unzählige geschützte Ankerbuchten mit kristallklarem Wasser. Viele bieten 
                  Mooringbojen, andere erlauben das freie Ankern.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-black">Nautische Highlights</h5>
                  <p className="text-sm text-black">Segeln durch Inselkanäle, Erkundung von Höhlen, Schnorcheln und Tauchen 
                  in der klaren Adria, Delfin-Beobachtung.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-black">Landaktivitäten</h5>
                  <p className="text-sm text-black">Historische Altstädte, Wanderungen in Nationalparks, Weinproben auf den 
                  Inseln, lokale Küche in Konobas.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ihr 7-Tage-Traumtörn in Mitteldalmatien</h3>
            <p className="mb-4 font-medium">Ab Marina Kaštela:</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Ankunft & Inselzauber (Marina Kaštela – Šolta)</h5>
                <p className="text-sm text-muted-foreground">Nach dem Check-in in der Marina Kaštela setzen Sie die Segel für 
                einen kurzen Schlag zur Insel Šolta. Legen Sie in der malerischen Bucht von Maslinica an oder ankern Sie in 
                einer ruhigen Bucht. Genießen Sie das erste Bad im türkisblauen Wasser.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Kurs auf Vis – Die authentische Insel (Šolta – Vis)</h5>
                <p className="text-sm text-muted-foreground">Segeln Sie zur Insel Vis, der am weitesten entfernten bewohnten 
                Insel Mitteldalmatiens. Erkunden Sie die charmante Stadt Vis oder das Fischerdorf Komiža. Genießen Sie frischen 
                Fisch in einer lokalen Konoba.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Blaue Grotte & Hvar – Magie und Glamour (Vis – Biševo – Pakleni-Inseln/Hvar)</h5>
                <p className="text-sm text-muted-foreground">Machen Sie einen Ausflug zur Blauen Grotte auf der Insel Biševo 
                (am besten morgens). Anschließend segeln Sie zu den Pakleni-Inseln vor Hvar. Ankern Sie in einer der vielen 
                Buchten oder legen Sie in der ACI Marina Palmižana an.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Brač – Zlatni Rat & Inselcharme (Pakleni-Inseln/Hvar – Brač)</h5>
                <p className="text-sm text-muted-foreground">Segeln Sie zur Insel Brač. Besuchen Sie den berühmten Strand 
                Zlatni Rat bei Bol. Alternativ legen Sie im charmanten Hafen von Milna an und genießen die entspannte Atmosphäre.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Blaue Lagune – Ein Badeparadies (Brač – Drvenik Veli)</h5>
                <p className="text-sm text-muted-foreground">Kurs auf die Insel Drvenik Veli. Ankern Sie in der atemberaubenden 
                Blauen Lagune, einem Paradies zum Schwimmen und Schnorcheln mit kristallklarem Wasser und einem sandigen Meeresboden.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Trogir – UNESCO-Welterbe (Drvenik Veli – Trogir)</h5>
                <p className="text-sm text-muted-foreground">Segeln Sie zurück in die Nähe Ihrer Basis und legen Sie in der 
                ACI Marina Trogir an. Verbringen Sie den Nachmittag damit, die UNESCO-geschützte Altstadt von Trogir mit ihren 
                engen Gassen, historischen Gebäuden und der beeindruckenden Kathedrale zu erkunden.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Abschied von Dalmatien (Trogir – Marina Kaštela)</h5>
                <p className="text-sm text-muted-foreground">Nach einem letzten Frühstück an Bord segeln Sie die kurze Strecke 
                zurück zu Ihrer Charterbasis in der Marina Kaštela und treten die Heimreise an – erfüllt von unvergesslichen 
                Eindrücken aus Mitteldalmatien.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen: Segeln unter der Adriasonne</h3>
            <p className="mb-4">
              Das Wetter in Kroatien ist typisch mediterran mit heißen, trockenen Sommern und milden, feuchteren Wintern. 
              Die Segelsaison erstreckt sich von April bis in den späten Oktober.
            </p>
            
            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Typische Winde</h4>
              <p className="text-black mb-3">Die lokalen Windsysteme sind für die Törnplanung entscheidend:</p>
              <ul className="space-y-2 text-black">
                <li><strong>Maestral:</strong> Der vorherrschende Sommerwind, eine thermische Brise aus Nordwest, die tagsüber 
                für moderate und zuverlässige Segelbedingungen (3-5 Bft) sorgt und nachts oft einschläft. Ideal für entspanntes Segeln.</li>
                <li><strong>Bora (Bura):</strong> Ein starker, kalter Fallwind aus Nordost, der vor allem in den Wintermonaten 
                und in der Vor-/Nachsaison auftreten kann. Er bringt klaren Himmel und gute Sicht, kann aber sehr plötzlich 
                auftreten und hohe Wellen aufbauen.</li>
                <li><strong>Jugo (Scirocco):</strong> Ein warmer, feuchter Wind aus Südost, der oft Wolken und manchmal Regen 
                mit sich bringt. Er kündigt sich meist langsam an und kann zu drückender Schwüle und unruhiger See führen.</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold mb-3">Saisonale Unterschiede:</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Frühling (April - Juni)</h5>
                <p className="text-black text-sm">Eine wunderbare Zeit zum Segeln. Die Natur blüht, die Temperaturen sind 
                angenehm warm, aber nicht zu heiß. Die Häfen und Buchten sind noch nicht überfüllt. Die Winde können noch 
                etwas kräftiger sein – ideal für ambitionierte Segler.</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Sommer (Juli - August)</h5>
                <p className="text-black text-sm">Hochsaison in Kroatien. Es ist heiß, sonnig und der Maestral sorgt für 
                angenehme Segelbedingungen – perfekt für Badeurlaub und Familien. In dieser Zeit sind die Marinas und 
                beliebten Ankerplätze sehr voll und die Preise am höchsten.</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Herbst (September - Oktober)</h5>
                <p className="text-black text-sm">Für viele Kenner die beste Reisezeit. Das Wasser ist vom Sommer noch 
                aufgeheizt, die großen Touristenströme sind abgezogen und die Preise sinken. Das Wetter ist meist stabil 
                und warm, und die Häfen werden wieder leerer.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-2 text-black">Revier-Eignung für Erfahrungsstufen</h4>
              <p className="text-black">Dalmatien ist ein sehr vielseitiges Revier. Die geschützten Inselgruppen und Kanäle sind auch 
              für weniger erfahrene Segler und Familien gut geeignet. Die kurzen Distanzen und die vielen Ausweichmöglichkeiten 
              bieten viel Sicherheit. Für ambitionierte Segler bieten die offeneren Seegebiete und die Möglichkeit von stärkeren 
              Winden (Bora, Jugo) auch Herausforderungen.</p>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-2 text-black">Beste Reisezeit: Wann Ihr Kroatien-Traum wahr wird</h4>
              <p className="text-black">
                Die beste Reisezeit für einen Yachtcharter in Kroatien sind die Monate Mai, Juni und September. In dieser 
                Zeit sind die Temperaturen angenehm warm, das Wasser hat Badetemperatur, die Häfen sind nicht überfüllt und 
                die Preise sind moderater als in der Hochsaison (Juli/August).
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Vorschriften & Regeln: Wichtige Hinweise für einen reibungslosen Törn</h3>
            <p className="mb-6">
              Kroatien hat klare und umfassende Vorschriften für den Yachtsport, die der Sicherheit und dem Umweltschutz dienen.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Führerscheinpflicht</h5>
                <p className="text-sm">Für das Führen von Sportbooten auf der Adria ist der Sportbootführerschein See (SBF See) 
                obligatorisch. Für Yachten mit einer Länge über 15 Meter oder zur gewerblichen Nutzung können weitergehende 
                Scheine (z.B. Sportküstenschifferschein SKS) erforderlich sein.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Funkzeugnis (SRC)</h5>
                <p className="text-sm">Für UKW-Funkgeräte an Bord ist das Short Range Certificate (SRC) erforderlich.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Kroatisches Permit/Vignette</h5>
                <p className="text-sm">Für ausländische Yachten ist eine sogenannte "Vignette" oder "Permit" erforderlich, 
                die die Befugnis zum Befahren kroatischer Gewässer und zur Nutzung von Marinas regelt. Ihr Charterunternehmen 
                kümmert sich in der Regel um diese Formalität und die damit verbundenen Gebühren.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Naturschutzgebiete</h5>
                <p className="text-sm">In Nationalparks (z.B. Kornaten, Krka) und Naturparks (z.B. Telašćica) gelten besondere 
                Regeln für das Befahren, Ankern und Angeln. Für den Eintritt fallen Gebühren an. Diese Gebiete liegen jedoch 
                in Norddalmatien.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Umweltauflagen</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Strikte Regeln zur Müllentsorgung (kein Müll über Bord)</li>
                <li>Abwasserentsorgung (keine Einleitung von Fäkalien in Küstennähe oder in Naturschutzgebieten)</li>
                <li>Schutz mariner Lebensräume</li>
                <li>Hafenformalitäten: Bei der Ankunft in einer Marina melden Sie sich beim Hafenmeister an und entrichten die Liegegebühren</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erfahrungen von Seglern: Eine Mischung aus Sport, Komfort und mediterranem Flair</h3>
            <p className="mb-6">
              Segler, die Dalmatien besucht haben, berichten von einem Revier, das sowohl sportliche Herausforderungen 
              als auch entspannte Naturerlebnisse bietet.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-black">Positives</h4>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Inselvielfalt:</strong> Die unzähligen Inseln und Inselchen bieten eine enorme Vielfalt an Ankerplätzen und Zielen</li>
                  <li><strong>Klares Wasser:</strong> Die Adria ist bekannt für ihr kristallklares, türkisblaues Wasser, ideal zum Schwimmen und Schnorcheln</li>
                  <li><strong>Hafeninfrastruktur:</strong> Die Marinas sind modern, sauber und bieten umfassenden Service</li>
                  <li><strong>Kurze Distanzen:</strong> Die Inseln und Häfen liegen nah beieinander, was flexible Routenplanung ermöglicht</li>
                  <li><strong>Gastfreundschaft:</strong> Die Kroaten sind bekannt für ihre Herzlichkeit und Gastfreundschaft, besonders in den Konobas</li>
                </ul>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-black">Herausforderungen</h4>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Wetterwechsel:</strong> Das Wetter kann schnell umschlagen, mit plötzlichen Starkwinden (Bora, Jugo). Eine gute Wetterbeobachtung ist unerlässlich</li>
                  <li><strong>Volle Marinas:</strong> In der Hochsaison können beliebte Marinas sehr voll sein, eine frühzeitige Ankunft oder Reservierung ist ratsam</li>
                  <li><strong>Untiefen:</strong> Außerhalb der Fahrwasser gibt es einige Untiefen, die präzise Navigation erfordern</li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Praktische Tipps aus der Seglergemeinschaft</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Wetter-App:</strong> Eine gute Wetter-App oder ein Wetterdienst sind unverzichtbar</li>
                  <li><strong>Hafenhandbuch:</strong> Ein aktuelles Hafenhandbuch ist für die Navigation und die Wahl der Ankerplätze unerlässlich</li>
                </ul>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Konobas:</strong> Nutzen Sie die Gelegenheit, in den kleinen Inselrestaurants (Konobas) frischen Fisch und lokale Spezialitäten zu genießen</li>
                  <li><strong>Bargeld:</strong> In kleineren Konobas oder auf Inseln ist es ratsam, etwas Bargeld dabei zu haben</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit: Ihr Traumtörn in Kroatien – Ein Segelparadies an der Adria</h3>
            <p className="mb-6">
              Ein Yachtcharter in Kroatien ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, 
              jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, in einem lebhaften Hafenstädtchen 
              anlegen oder einfach auf dem offenen Meer die Sonne genießen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-3">Es ist die Kombination aus:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Abwechslungsreichen Segelbedingungen:</strong> Von geschützten Inselgruppen bis zu offeneren 
                  Seegebieten ist für jede Erfahrungsstufe etwas dabei.</li>
                  <li><strong>Atemberaubenden Küstenlandschaften:</strong> Dramatische Klippen, unzählige Inseln, grüne 
                  Nationalparks und malerische Buchten.</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-6 space-y-2 mt-8 md:mt-0">
                  <li><strong>Kultureller Vielfalt:</strong> Segeln Sie auf den Spuren der Römer, Venezianer und Slawen 
                  und entdecken Sie ein UNESCO-Welterbe nach dem anderen.</li>
                  <li><strong>Mediterranem Flair & Kulinarik:</strong> Genießen Sie frischen Fisch, lokale Weine und die 
                  köstliche kroatische Küche in jeder Region neu.</li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg font-medium mb-4">
                Kroatien bleibt ein spektakuläres Yachtcharter-Revier für alle, die das Abenteuer suchen und die Schönheit 
                der Adria vom Wasser aus erleben möchten. Wer die Regeln beachtet und sich gut vorbereitet, wird mit 
                einzigartigen Segelerlebnissen und einem tiefen Gefühl der Verbundenheit mit der Natur belohnt.
              </p>
              <h4 className="text-xl font-bold">Sind Sie bereit, die Segel zu setzen und Kroatien zu entdecken?</h4>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
              <h4 className="text-xl font-bold mb-4">Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Kroatien an!</h4>
              <p className="mb-6">
                Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten 
                Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
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