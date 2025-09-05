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
import TopDestinations from '@/components/TopDestinations';
export default function SouthernDalmatia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: 'Region',
    value: 'Süddalmatien'
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
    value: '15+ Marinas'
  }, {
    icon: Wind,
    label: 'Windverhältnisse',
    value: 'Mild & beständig'
  }, {
    icon: Sun,
    label: 'Sonnentage',
    value: '300+ pro Jahr'
  }];
  const cities = [{
    name: 'Dubrovnik',
    description: 'Perle der Adria - UNESCO-Weltkulturerbe',
    marinas: 3,
    highlights: ['ACI Marina Dubrovnik', 'Altstadt', 'Stadtmauern']
  }, {
    name: 'Korčula',
    description: 'Geburtsort Marco Polos mit mittelalterlichem Charme',
    marinas: 2,
    highlights: ['ACI Marina Korčula', 'Marco Polo Haus', 'Vela Luka']
  }, {
    name: 'Mljet',
    description: 'Nationalpark-Insel mit Salzwasserseen',
    marinas: 2,
    highlights: ['Marina Sobra', 'Mljet Nationalpark', 'Odysseus Höhle']
  }, {
    name: 'Lastovo',
    description: 'Sterneninsel mit dunklem Himmel',
    marinas: 1,
    highlights: ['Marina Lastovo', 'Sternenpark', 'Fumari Festival']
  }];
  const highlights = ['Dubrovnik - Perle der Adria', 'Korčula - Marco Polos Heimat', 'Mljet Nationalpark mit Salzwasserseen', 'Elafiti Inseln vor Dubrovnik', 'Milde Winde und ruhige See', 'Unvergleichliche Naturschönheit', 'Reiche Geschichte und Kultur', 'Weniger überfüllt als andere Regionen'];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{
      backgroundImage: `url('/lovable-uploads/95bb22bb-b794-47ba-b336-f3c02e41bfdb.png')`
    }}>
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
          {quickFacts.map((fact, index) => <Card key={index} className="text-center">
              <CardContent className="p-4">
                <fact.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">{fact.label}</p>
                <p className="font-semibold">{fact.value}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Map */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <p className="text-lg text-muted-foreground">
              Von der majestätischen Stadt Dubrovnik bis zu den unberührten Inseln Mljet und Lastovo - Süddalmatien 
              vereint UNESCO-Welterbestätten mit ursprünglicher Natur auf einzigartige Weise.
            </p>
          </div>
          <h2 className="text-3xl font-bold text-center mb-8">Karte von Süddalmatien</h2>
          <TerritoryMap
            region="Süddalmatien, Kroatien"
            center={{ lat: 42.6507, lng: 18.0944 }}
            zoom={10}
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Detailed Region Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Süddalmatien</h2>
            <p className="text-xl text-muted-foreground">
              Segeln im Land der "Perle der Adria" – Ihr Traumtörn zwischen Dubrovnik, Elaphiten und unberührten Inseln
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Kroatien – ein Land, das wie geschaffen ist für einen Yachtcharter. Mit seiner über 1.700 Kilometer langen 
              Küstenlinie, mehr als 1.200 Inseln und Inselchen, einem türkisblauen Meer und einer Fülle von historischen 
              Städten und modernen Marinas, ist die kroatische Adria seit Jahrzehnten eines der beliebtesten Segelreviere Europas. 
              Süddalmatien, die südlichste Region Kroatiens, mit der weltberühmten Stadt Dubrovnik als strahlendem Mittelpunkt, 
              gilt dabei als ein Revier von unvergleichlicher Schönheit und historischer Tiefe. Hier erwartet Sie eine 
              einzigartige Mischung aus unberührter Natur, antiker Geschichte, pulsierendem Leben und herzlicher Gastfreundschaft.
            </p>

            <div className="my-8">
              <img 
                src="/lovable-uploads/b4cd3f2d-847c-48ad-8345-04bb08f3e7dd.png" 
                alt="Traumhafte Bucht in Süddalmatien mit Segelyachten vor malerischen Inseln"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina in Dubrovnik, lassen die beeindruckende 
              Kulisse der Stadtmauern hinter sich und nehmen Kurs auf eine Inselwelt, die einem Märchen gleicht. Jeder Tag 
              bringt neue Horizonte: malerische Buchten, die zum Schwimmen und Schnorcheln einladen, versteckte Grotten, die 
              nur vom Meer aus zugänglich sind, und historische Städte, deren Gassen von Jahrtausenden europäischer Geschichte 
              erzählen.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Süddalmatien bietet eine unvergleichliche Vielfalt an Segelrevieren, die für jeden Geschmack und jede 
              Erfahrungsstufe das Richtige bereithalten. Die Kombination aus atemberaubender Küstenlandschaft, charmanten 
              Inseln und einer hervorragenden maritimen Infrastruktur macht diese Region zum idealen Ziel für Familien, 
              Genuss-Segler und alle, die das Inselhopping in vollen Zügen genießen möchten. Doch gerade in diesem Revier 
              sind die Kenntnis der lokalen Besonderheiten und die Einhaltung der Vorschriften von entscheidender Bedeutung 
              für einen reibungslosen und unvergesslichen Törn.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Das Juwel der Adria: Süddalmatien und seine Inselperlen</h3>
            <p className="text-lg leading-relaxed mb-6">
              Süddalmatien ist der südlichste Teil Kroatiens und besticht durch seine einzigartige Küstenlinie, die sich 
              von der Halbinsel Pelješac bis zur montenegrinischen Grenze erstreckt. Diese Region ist geprägt von der 
              majestätischen Stadt Dubrovnik und einer Kette von grünen Inseln, die zum Entdecken einladen.
            </p>

            <div className="my-8">
              <img 
                src="/lovable-uploads/ac6086b1-9d18-42fd-ae7d-2b4879b3bfe2.png" 
                alt="Spektakulärer Blick über die grünen Hügel und türkisblauen Buchten Süddalmatiens"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <ul className="list-disc pl-6 space-y-4 mb-6">
              <li>
                <strong>Dubrovnik:</strong> Die "Perle der Adria" ist das strahlende Zentrum Süddalmatiens und ein 
                UNESCO-Welterbe von Weltrang. Die imposanten Stadtmauern, die die gesamte Altstadt umschließen, sind ein 
                Meisterwerk mittelalterlicher Architektur. Ein Spaziergang über den Stradun, ein Besuch des Rektorenpalastes 
                oder eine Fahrt mit der Seilbahn auf den Berg Srđ für einen Panoramablick sind unvergessliche Erlebnisse. 
                Dubrovnik ist ein wichtiger Charterstützpunkt mit modernen Marinas.
              </li>
              
              <li>
                <strong>Die Elaphiten Inseln:</strong> Direkt vor Dubrovnik gelegen, sind die Elaphiten ein malerisches 
                Archipel, das sich perfekt für kurze, entspannte Schläge eignet.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Koločep:</strong> Die Dubrovnik am nächsten gelegene Insel, bekannt für ihre grünen 
                  Landschaften und charmanten Buchten.</li>
                  <li><strong>Lopud:</strong> Eine autofreie Insel mit einem wunderschönen Sandstrand (Šunj Beach) 
                  und einem historischen Franziskanerkloster.</li>
                  <li><strong>Šipan:</strong> Die größte der Elaphiten, mit malerischen Dörfern wie Suđurađ und 
                  Luka Šipanska, die zum Verweilen einladen.</li>
                </ul>
              </li>
              
              <li>
                <strong>Mljet:</strong> Eine der grünsten Inseln der Adria und ein Nationalpark, der etwa auf halbem 
                Weg zwischen Dubrovnik und Korčula liegt. Mljet ist bekannt für seine zwei Salzwasserseen (Veliko Jezero 
                und Malo Jezero), in deren Mitte eine kleine Insel mit einem Benediktinerkloster liegt. Das Segeln in den 
                Seen ist nicht erlaubt, aber das Ankern in der Bucht von Polače oder Pomena und ein Ausflug zu den Seen 
                sind ein Muss.
              </li>
              
              <li>
                <strong>Lastovo:</strong> Eine der abgelegensten und unberührtesten Inseln Kroatiens, die als Naturpark 
                geschützt ist. Lastovo ist ein Paradies für Segler, die Ruhe, unberührte Natur und eine spektakuläre 
                Unterwasserwelt suchen. Die Insel ist bekannt für ihre traditionelle Architektur und die vielen kleinen 
                Buchten, die zum Ankern einladen.
              </li>
            </ul>

            <div className="my-8">
              <img 
                src="/lovable-uploads/55105c0d-79f3-4a8c-be4f-6635eddae340.png" 
                alt="Luftaufnahme der malerischen Inselwelt Süddalmatiens mit kristallklaren Gewässern"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <ul className="list-disc pl-6 space-y-4 mb-6">
              
              <li>
                <strong>Korčula:</strong> Obwohl technisch zu Mitteldalmatien gehörend, ist die Insel Korčula oft Teil 
                von Törns, die von Dubrovnik aus starten. Die Stadt Korčula ist eine wunderschöne mittelalterliche Stadt, 
                die oft als "Klein-Dubrovnik" bezeichnet wird und angeblich der Geburtsort von Marco Polo ist.
              </li>
              
              <li>
                <strong>Halbinsel Pelješac:</strong> Eine lange, schmale Halbinsel, bekannt für ihre hervorragenden 
                Weine (z.B. Dingač, Postup), ihre Austernzucht in Ston und Mali Ston und ihre malerischen Buchten.
              </li>
            </ul>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black">
                <strong>Nautische Besonderheiten Süddalmatiens:</strong> Die Gewässer sind hier meist offen zum Meer hin, 
                was längere Schläge und die Möglichkeit von stärkeren Winden bedeutet. Die Navigation erfordert Aufmerksamkeit 
                für die zahlreichen Inseln, Riffe und Untiefen. Ist aber mit ein wenig Erfahrung völlig unproblematisch.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erreichbarkeit: Ihr schneller Weg an Bord</h3>
            <p className="mb-4">
              Kroatien ist dank seiner hervorragenden Infrastruktur und seiner geografischen Nähe zu Mitteleuropa sehr gut erreichbar.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Per Flugzeug</h4>
                <p className="mb-4 text-black">
                  Der Flughafen Dubrovnik (DBV) ist der wichtigste Ankunftsort für Chartergäste in Süddalmatien. 
                  Zahlreiche internationale Flughäfen in Deutschland, Österreich und der Schweiz bieten Direktflüge 
                  nach Dubrovnik an.
                </p>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Per PKW</h4>
                <p className="text-black">
                  Kroatien ist aus Süddeutschland, Österreich und der Schweiz bequem mit dem Auto erreichbar. Dies 
                  bietet den Vorteil, mehr Gepäck und persönlichen Proviant mitnehmen zu können. Die Marinas bieten 
                  sichere Parkmöglichkeiten für die Dauer Ihres Törns.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Marinas & Ausgangshäfen: Perfekte Infrastruktur für Ihren Törn</h3>
            <p className="mb-4">
              Kroatien verfügt über eine exzellente maritime Infrastruktur mit einem dichten Netz an modernen Marinas 
              und Stadthäfen.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">ACI Marinas</h4>
                <p className="text-black">
                  Die ACI (Adriatic Croatia International Club) ist die größte Marina-Kette im Mittelmeer und betreibt 
                  zahlreiche hochmoderne Marinas entlang der gesamten kroatischen Küste, auch in Dalmatien. Sie bieten 
                  umfassenden Service (Wasser, Strom, Sanitäranlagen, WLAN, Werften, Restaurants, Geschäfte).
                </p>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Wichtige Basen in Süddalmatien</h4>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>
                    <strong>ACI Marina Dubrovnik:</strong> Direkt am Fluss Ombla gelegen, nur wenige Kilometer von 
                    der Altstadt Dubrovnik entfernt. Sie ist eine der größten und modernsten Marinas an der Adria 
                    und bietet eine riesige Auswahl an Charteryachten.
                  </li>
                  <li>
                    <strong>Orsan Yacht Club (Dubrovnik):</strong> Eine weitere Option für Liegeplätze in Dubrovnik.
                  </li>
                </ul>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Umfassende Flotte</h4>
                <p className="mb-3 text-black">
                  Unsere Flotte umfasst eine große Auswahl an Charteryachten für jeden Anspruch und jede Crewgröße:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Moderne Segelyachten (Monohulls):</strong> Ideal für sportliches Segeln und klassisches Seemannsgefühl.</li>
                  <li><strong>Geräumige Katamarane:</strong> Perfekt für Familien und Gruppen, die Wert auf Komfort, Stabilität und viel Platz an Deck legen. Ideal für entspanntes Inselhopping.</li>
                  <li><strong>Schnelle Motoryachten:</strong> Für alle, die in kurzer Zeit große Distanzen zurücklegen und mehrere Highlights miteinander verbinden möchten.</li>
                </ul>
                <p className="mt-3 text-black">
                  Sie haben die Wahl: Entscheiden Sie sich für eine Bareboot-Charter, wenn Sie über die nötige Erfahrung 
                  und die erforderlichen Lizenzen verfügen, um die Yacht selbst zu führen. Oder genießen Sie einen rundum 
                  entspannten Urlaub und buchen Sie einen unserer erfahrenen Skipper, der Sie sicher zu den schönsten 
                  Plätzen des Reviers führt und Ihnen wertvolle Geheimtipps verrät.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele: Ein Kaleidoskop der Adria</h3>
            <p className="mb-4">
              Ein Yachtcharter in Süddalmatien ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Dubrovnik:</strong> Erkunden Sie die UNESCO-geschützte Altstadt, schlendern Sie über den Stradun, besuchen Sie die Stadtmauern und genießen Sie den Panoramablick vom Berg Srđ.</li>
            </ul>

            <div className="my-8">
              <img 
                src="/lovable-uploads/a2fa853d-8a65-48d9-b50e-201e57486739.png" 
                alt="Dubrovnik - Die Perle der Adria mit ihrer beeindruckenden Altstadt und den historischen Stadtmauern"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Elaphiten Inseln:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Lopud:</strong> Besuchen Sie den Sandstrand Šunj Beach und das historische Franziskanerkloster.</li>
                  <li><strong>Šipan:</strong> Erkunden Sie die charmanten Dörfer Suđurađ und Luka Šipanska.</li>
                </ul>
              </li>
              <li><strong>Mljet:</strong> Entdecken Sie den Nationalpark mit seinen Salzwasserseen und dem Benediktinerkloster. Wandern oder radeln Sie um die Seen.</li>
              <li><strong>Lastovo:</strong> Tauchen Sie ein in die unberührte Natur des Naturparks. Ankern Sie in einer der vielen ruhigen Buchten und genießen Sie die Stille.</li>
              <li><strong>Korčula:</strong> Besuchen Sie die wunderschöne mittelalterliche Stadt Korčula mit ihrer beeindruckenden Architektur und den angeblichen Geburtsort von Marco Polo.</li>
              <li><strong>Halbinsel Pelješac:</strong> Probieren Sie lokale Weine in den vielen Weingütern und genießen Sie frische Austern in Ston oder Mali Ston.</li>
            </ul>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black">
                <strong>Ankerplätze & Buchten:</strong> Süddalmatien bietet zahlreiche, oft geschützte Ankerbuchten 
                mit kristallklarem Wasser. Viele bieten Mooringbojen, andere erlauben das freie Ankern. <strong>Nautische 
                Highlights:</strong> Das Segeln entlang der beeindruckenden Küstenlinie mit ihren Klippen und Inseln, 
                die Erkundung von Höhlen, das Schnorcheln und Tauchen in der klaren Adria, das Entdecken von versunkenen 
                Schiffen oder das Beobachten von Delfinen. <strong>Landaktivitäten:</strong> Besuche von historischen 
                Altstädten, Wanderungen in Nationalparks, Weinproben, das Genießen der lokalen Küche in Konobas und das 
                Erleben von traditionellen Festen.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ihr 7-Tage-Traumtörn in Süddalmatien (ab Dubrovnik)</h3>
            
            <div className="space-y-4 mb-8">
              <div className="border border-gray-300 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Tag 1: Ankunft & Stadtzauber (ACI Marina Dubrovnik – Dubrovnik Altstadt)</h4>
                <p className="text-black">Nach dem Check-in in der ACI Marina Dubrovnik, nehmen Sie ein Taxi oder den Bus zur Altstadt. Erkunden Sie die UNESCO-geschützten Stadtmauern, schlendern Sie über den Stradun und genießen Sie das pulsierende Leben der "Perle der Adria".</p>
              </div>

              <div className="border border-gray-300 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Tag 2: Elaphiten Inseln – Entspannung pur (Dubrovnik – Lopud)</h4>
                <p className="text-black">Setzen Sie die Segel für einen kurzen Schlag zu den Elaphiten Inseln. Ankern Sie vor dem Sandstrand Šunj Beach auf Lopud und genießen Sie ein Bad im türkisblauen Wasser. Am Abend legen Sie im Hafen von Lopud an oder ankern in einer geschützten Bucht.</p>
              </div>

              <div className="border border-gray-300 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Tag 3: Grüne Oase Mljet (Lopud – Mljet)</h4>
                <p className="text-black">Segeln Sie zur Insel Mljet, einem Nationalpark. Ankern Sie in der Bucht von Polače oder Pomena und erkunden Sie die zwei Salzwasserseen und das Benediktinerkloster auf der Insel im Veliko Jezero.</p>
              </div>

              <div className="border border-gray-300 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Tag 4: Unberührte Natur Lastovo (Mljet – Lastovo)</h4>
                <p className="text-black">Ein längerer Schlag führt Sie zur Insel Lastovo, einem geschützten Naturpark. Genießen Sie die unberührte Natur, die Ruhe und die spektakulären Unterwasserwelten. Ankern Sie in einer der vielen idyllischen Buchten.</p>
              </div>

              <div className="border border-gray-300 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Tag 5: Korčula – Die Marco Polo Stadt (Lastovo – Korčula)</h4>
                <p className="text-black">Segeln Sie zur Insel Korčula. Besuchen Sie die wunderschöne mittelalterliche Stadt Korčula, schlendern Sie durch die engen Gassen und genießen Sie die historische Atmosphäre.</p>
              </div>

              <div className="border border-gray-300 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Tag 6: Pelješac – Wein und Austern (Korčula – Pelješac)</h4>
                <p className="text-black">Setzen Sie Kurs auf die Halbinsel Pelješac. Ankern Sie in einer Bucht und besuchen Sie eines der vielen Weingüter für eine Weinprobe. Alternativ fahren Sie nach Ston oder Mali Ston, um die berühmten Austern zu probieren und die beeindruckenden Stadtmauern zu besichtigen.</p>
              </div>

              <div className="border border-gray-300 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Tag 7: Abschied von Dalmatien (Pelješac – Dubrovnik)</h4>
                <p className="text-black">Nach einem letzten Frühstück an Bord segeln Sie zurück zur ACI Marina Dubrovnik und treten die Heimreise an – erfüllt von unvergesslichen Eindrücken aus Süddalmatien.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen: Segeln unter der Adriasonne</h3>
            <p className="mb-4">
              Das Wetter in Kroatien ist typisch mediterran mit heißen, trockenen Sommern und milden, feuchteren Wintern. 
              Die Segelsaison erstreckt sich von April bis in den späten Oktober.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Typische Winde</h4>
                <p className="mb-3 text-black">Die lokalen Windsysteme sind für die Törnplanung entscheidend.</p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Maestral:</strong> Der vorherrschende Sommerwind, eine thermische Brise aus Nordwest, die tagsüber für moderate und zuverlässige Segelbedingungen (3-5 Bft) sorgt und nachts oft einschläft. Ideal für entspanntes Segeln.</li>
                  <li><strong>Bora (Bura):</strong> Ein starker, kalter Fallwind aus Nordost, der vor allem in den Wintermonaten und in der Vor-/Nachsaison auftreten kann. Er bringt klaren Himmel und gute Sicht, kann aber sehr plötzlich auftreten und hohe Wellen aufbauen. Er ist besonders in den Kanälen zwischen den Inseln und dem Festland spürbar.</li>
                  <li><strong>Jugo (Scirocco):</strong> Ein warmer, feuchter Wind aus Südost, der oft Wolken und manchmal Regen mit sich bringt. Er kündigt sich meist langsam an und kann zu drückender Schwüle und unruhiger See führen.</li>
                </ul>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Saisonale Unterschiede</h4>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Frühling (April - Juni):</strong> Eine wunderbare Zeit zum Segeln. Die Natur blüht, die Temperaturen sind angenehm warm, aber nicht zu heiß. Die Häfen und Buchten sind noch nicht überfüllt. Die Winde können noch etwas kräftiger sein – ideal für ambitionierte Segler.</li>
                  <li><strong>Sommer (Juli - August):</strong> Hochsaison in Kroatien. Es ist heiß, sonnig und der Maestral sorgt für angenehme Segelbedingungen – perfekt für Badeurlaub und Familien. In dieser Zeit sind die Marinas und beliebten Ankerplätze sehr voll und die Preise am höchsten. Eine frühzeitige Buchung ist unerlässlich.</li>
                  <li><strong>Herbst (September - Oktober):</strong> Für viele Kenner die beste Reisezeit. Das Wasser ist vom Sommer noch aufgeheizt, die großen Touristenströme sind abgezogen und die Preise sinken. Das Wetter ist meist stabil und warm, und die Häfen werden wieder leerer.</li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black">
                <strong>Revier-Eignung für Erfahrungsstufen:</strong> Süddalmatien ist ein vielseitiges Revier. Die geschützten 
                Elaphiten sind auch für weniger erfahrene Segler und Familien gut geeignet. Die längeren Schläge zu Inseln 
                wie Mljet und Lastovo oder die offeneren Seegebiete erfordern jedoch mehr Erfahrung und eine gute Wetterbeobachtung.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit: Wann Ihr Kroatien-Traum wahr wird</h3>
            <p className="mb-6">
              Die beste Reisezeit für einen Yachtcharter in Kroatien sind die Monate Mai, Juni und September. In dieser Zeit 
              sind die Temperaturen angenehm warm, das Wasser hat Badetemperatur, die Häfen sind nicht überfüllt und die 
              Preise sind moderater als in der Hochsaison (Juli/August).
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Vorschriften & Regeln: Wichtige Hinweise für einen reibungslosen Törn</h3>
            <p className="mb-4">
              Kroatien hat klare und umfassende Vorschriften für den Yachtsport, die der Sicherheit und dem Umweltschutz dienen.
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Führerscheinpflicht:</strong> Für das Führen von Sportbooten auf der Adria ist der Sportbootführerschein See (SBF See) obligatorisch. Für Yachten mit einer Länge über 15 Meter oder zur gewerblichen Nutzung können weitergehende Scheine (z.B. Sportküstenschifferschein SKS) erforderlich sein.</li>
              <li><strong>Funkzeugnis (SRC):</strong> Für UKW-Funkgeräte an Bord ist das Short Range Certificate (SRC) erforderlich.</li>
              <li><strong>Kroatisches Permit/Vignette:</strong> Für ausländische Yachten ist eine sogenannte "Vignette" oder "Permit" erforderlich, die die Befugnis zum Befahren kroatischer Gewässer und zur Nutzung von Marinas regelt. Ihr Charterunternehmen kümmert sich in der Regel um diese Formalität und die damit verbundenen Gebühren.</li>
              <li><strong>Naturschutzgebiete:</strong> In Nationalparks (z.B. Mljet) und Naturparks (z.B. Lastovo) gelten besondere Regeln für das Befahren, Ankern und Angeln. Für den Eintritt fallen Gebühren an.</li>
              <li><strong>Umweltauflagen:</strong> Strikte Regeln zur Müllentsorgung (kein Müll über Bord), Abwasserentsorgung (keine Einleitung von Fäkalien in Küstennähe oder in Naturschutzgebieten) und zum Schutz mariner Lebensräume.</li>
              <li><strong>Hafenformalitäten:</strong> Bei der Ankunft in einer Marina melden Sie sich in der Rezeption an und bezahlen die Liegegebühren. Oder Sie buchen vorab online über eine Buchungsportal wie mySea.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erfahrungen von Seglern: Eine Mischung aus Sport, Komfort und mediterranem Flair</h3>
            <p className="mb-4">
              Segler, die Süddalmatien besucht haben, berichten von einem Revier, das sowohl sportliche Herausforderungen 
              als auch entspannte Naturerlebnisse bietet.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Positives</h4>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Historische Schätze:</strong> Die Kombination aus Segeln und dem Besuch von UNESCO-Welterbestätten wie Dubrovnik ist einzigartig.</li>
                  <li><strong>Klares Wasser:</strong> Die Adria ist bekannt für ihr kristallklares, türkisblaues Wasser, ideal zum Schwimmen und Schnorcheln.</li>
                  <li><strong>Hafeninfrastruktur:</strong> Die Marinas sind modern, sauber und bieten umfassenden Service.</li>
                  <li><strong>Gastfreundschaft:</strong> Die Kroaten sind bekannt für ihre Herzlichkeit und Gastfreundschaft, besonders in den Konobas.</li>
                  <li><strong>Abwechslung:</strong> Von den belebten Gassen Dubrovniks bis zu den einsamen Buchten Lastovos ist für jeden Geschmack etwas dabei.</li>
                </ul>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Herausforderungen</h4>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Wetterwechsel:</strong> Das Wetter kann schnell umschlagen, mit plötzlichen Starkwinden (Bora, Jugo). Eine gute Wetterbeobachtung ist unerlässlich.</li>
                  <li><strong>Volle Marinas:</strong> In der Hochsaison können beliebte Marinas, insbesondere in Dubrovnik und Korčula, sehr voll sein. Eine frühzeitige Ankunft oder Reservierung ist ratsam.</li>
                  <li><strong>Längere Schläge:</strong> Die Distanzen zwischen den Inseln sind in Süddalmatien oft etwas länger als in Mittel- oder Norddalmatien.</li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold mb-3 text-black">Praktische Tipps aus der Seglergemeinschaft</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Wetter-App:</strong> Eine gute Wetter-App oder ein Wetterdienst sind unverzichtbar.</li>
                <li><strong>Hafenhandbuch:</strong> Ein aktuelles Hafenhandbuch ist für die Navigation und die Wahl der Ankerplätze unerlässlich.</li>
                <li><strong>Konobas:</strong> Nutzen Sie die Gelegenheit, in den kleinen Inselrestaurants (Konobas) frischen Fisch und lokale Spezialitäten zu genießen.</li>
                <li><strong>Bargeld:</strong> In kleineren Konobas oder auf Inseln ist es ratsam, etwas Bargeld dabei zu haben.</li>
                <li><strong>Charter nach Montenegro:</strong> Dubrovnik ist ein idealer Ausgangspunkt für einen Yachtcharter nach Montenegro. Dies ist nach vorheriger Klärung mit dem Vercharterer und Einhaltung der Ein- und Ausreiseformalitäten (Zoll, Polizei, Hafenamt) in beiden Ländern möglich. Es erfordert eine sorgfältige Planung und die Bereitschaft, die notwendigen Behördengänge zu erledigen.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit: Ihr Traumtörn in Kroatien – Ein Segelparadies an der Adria</h3>
            <p className="mb-4">
              Ein Yachtcharter in Kroatien ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, jeden Tag 
              aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, in einem lebhaften Hafenstädtchen anlegen oder 
              einfach auf dem offenen Meer die Sonne genießen. Es ist die Kombination aus:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Abwechslungsreichen Segelbedingungen:</strong> Von geschützten Inselgruppen bis zu offeneren Seegebieten ist für jede Erfahrungsstufe etwas dabei.</li>
              <li><strong>Atemberaubenden Küstenlandschaften:</strong> Dramatische Klippen, unzählige Inseln, grüne Nationalparks und malerische Buchten.</li>
              <li><strong>Kultureller Vielfalt:</strong> Segeln Sie auf den Spuren der Römer, Venezianer und Slawen und entdecken Sie ein UNESCO-Welterbe nach dem anderen.</li>
              <li><strong>Mediterranem Flair & Kulinarik:</strong> Genießen Sie frischen Fisch, lokale Weine und die köstliche kroatische Küche in jeder Region neu.</li>
            </ul>

            <p className="text-lg leading-relaxed mb-8">
              Kroatien bleibt ein spektakuläres Yachtcharter-Revier für alle, die das Abenteuer suchen und die Schönheit der 
              Adria vom Wasser aus erleben möchten. Wer die Regeln beachtet und sich gut vorbereitet, wird mit einzigartigen 
              Segelerlebnissen und einem tiefen Gefühl der Verbundenheit mit der Natur belohnt.
            </p>

            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">Sind Sie bereit, die Segel zu setzen und Kroatien zu entdecken?</h4>
              <p className="mb-6">
                Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Kroatien an! Durchstöbern Sie unsere 
                Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die 
                ideale Yacht im perfekten Revier für Sie.
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


        {/* Ocean-Breeze CTA Box */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Kroatien an!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten 
              Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt unverbindliches Angebot einholen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        <TopDestinations />
      </div>
    </div>;
}