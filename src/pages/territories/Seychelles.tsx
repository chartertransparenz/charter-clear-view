import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, MapPin, Star, Sun, Anchor, ChevronRight, Plane, CloudSun } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import destinationSeychelles from "@/assets/destination-seychelles.jpg";

const Seychelles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "Warum sind Katamarane auf den Seychellen besonders geeignet?",
      answer: "Katamarane sind aufgrund ihres geringen Tiefgangs ideal, um die vielen flachen Lagunen und Buchten der Seychellen sicher anzusteuern, die für Monohulls oft unerreichbar sind. Ihre Stabilität sorgt für hohen Liegekomfort und minimiert Seekrankheit, was besonders bei Ankerstopps angenehm ist. Zudem bieten sie großzügigen Platz an Deck und im Salon, ideal für Familien und Gruppen, sowie hervorragende Badeplattformen."
    },
    {
      question: "Wie sind die Windbedingungen auf den Seychellen?",
      answer: "Die Seychellen sind ganzjährig segelbar, geprägt von zwei Monsunperioden: Nordwestmonsun (November bis März): Winde aus Nordwest, meist 8-12 Knoten, ruhigeres Meer, höhere Luftfeuchtigkeit und gelegentliche Schauer. Südostpassat (April bis Oktober): Winde aus Südost, oft 10-20 Knoten, trockenere und kühlere Bedingungen, ideal für aktives Segeln. Die Seychellen liegen außerhalb des Zyklongürtels, große Stürme sind selten."
    },
    {
      question: "Wie findet man sichere Liegeplätze auf den Seychellen?",
      answer: "Sichere Liegeplätze findet man hauptsächlich in den zahlreichen geschützten Buchten der Inner Islands. Marinas gibt es vor allem auf Mahé (Eden Island, Port Victoria) und Praslin (Baie Sainte Anne). Beim Ankern ist es zwingend erforderlich, ausschließlich auf Sandgrund zu ankern, um die empfindlichen Korallenriffe nicht zu beschädigen. In manchen Buchten gibt es auch Mooringbojen."
    },
    {
      question: "Welche nautischen Besonderheiten gibt es dort?",
      answer: "Die wichtigste nautische Besonderheit ist das behördliche Nachtfahrverbot. Segler müssen ihren Ankerplatz vor Einbruch der Dunkelheit (ca. 17:00 Uhr) erreichen. Zudem sind die Gewässer von Korallenriffen und Flachwasserbereichen geprägt, was eine sorgfältige Navigation und gute Revierkenntnisse erfordert. Das Fischen ist in Meeresschutzgebieten verboten, und für den Besuch einiger Marine Parks fallen Gebühren an."
    },
    {
      question: "Welche Segelscheine werden für eine Bareboat-Charter auf den Seychellen benötigt?",
      answer: "Für eine Bareboat-Charter benötigen Sie einen amtlichen Sportbootführerschein, der für Küstengewässer gültig ist (z.B. SBF See oder ICC). Zusätzlich verlangen die meisten Vercharterer einen Nachweis über Segelerfahrung (z.B. durch einen detaillierten Segel-Lebenslauf oder Meilennachweise). Mindestens eine Person an Bord muss zudem über ein gültiges Funkzeugnis (SRC oder LRC) verfügen."
    },
    {
      question: "Wie viel Segelerfahrung brauche ich, um selbstständig eine Yacht auf den Seychellen zu führen?",
      answer: "Die Seychellen gelten als ein relativ gut zugängliches Revier. Dennoch sollten Sie über solide Grundkenntnisse im Segeln, Ankern (insbesondere mit Landleinen, wo nötig), Tagesnavigation und Wetterbeobachtung verfügen. Erfahrung mit Katamaranen ist vorteilhaft, aber nicht zwingend erforderlich. Für weniger erfahrene Crews empfiehlt sich die Buchung eines Skippers."
    },
    {
      question: "Wann ist die beste Reisezeit für die Seychellen?",
      answer: "Die besten Reisezeiten sind die Übergangsmonate April/Mai und Oktober/November. In diesen Perioden sind die Winde moderater, das Wasser ist besonders klar und die Temperaturen angenehm. Die Monate Juni bis September bieten konstante Winde für aktives Segeln, während November bis März ruhigeres Segeln mit gelegentlichen Schauern ermöglicht."
    },
    {
      question: "Wie gut sind die Häfen und Marinas auf den einzelnen Inseln ausgebaut?",
      answer: "Die Hauptinseln Mahé und Praslin verfügen über moderne und gut ausgestattete Marinas mit umfassenden Dienstleistungen (Wasser, Strom, Treibstoff, Geschäfte, Restaurants, technische Unterstützung). Auf kleineren Inseln gibt es oft nur einfache Anlegestellen oder man ankert in geschützten Buchten."
    },
    {
      question: "Wie gut sind die Proviantierungsmöglichkeiten unterwegs?",
      answer: "Die Proviantierung ist auf den Hauptinseln Mahé und Praslin gut möglich, mit Supermärkten und lokalen Märkten. Auf La Digue gibt es ebenfalls Einkaufsmöglichkeiten. Für Törns zu abgelegeneren Inseln sollte ausreichend Proviant von den Hauptinseln mitgenommen werden. Viele Charterfirmen bieten auch einen Proviantierungsservice an."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/753887c4-55b0-40ea-890c-1a64defa8c5f.png"
          alt="Seychellen Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇸🇨</span>
            <Badge className="bg-green-600 text-white">Top #9 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Seychellen</h1>
          <p className="text-lg text-white/90 max-w-md">
            Indischer Ozean - Tropisches Inselparadies für Katamaran-Charter
          </p>
        </div>
        <Link 
          to="/" 
          className="absolute top-6 left-6"
          onClick={() => {
            setTimeout(() => {
              document.getElementById('reviere')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Start</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Seychellen</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Seychellen: Segeln im Paradies des Indischen Ozeans – Ihr Traumtörn auf dem Katamaran</h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Die Seychellen – ein Name, der Sehnsüchte weckt. Ein Archipel von 115 Inseln, die wie smaragdgrüne Juwelen im kristallklaren Wasser des Indischen Ozeans liegen. Ein Yachtcharter auf den Seychellen ist die ultimative Einladung, ein einzigartiges Naturparadies zu entdecken, das mit seinen traumhaften Stränden, der üppigen Vegetation, spektakulären Granitfelsen, einer farbenfrohen Unterwasserwelt und einer authentischen Inselkultur verzaubert. Hier, wo die Palmen im sanften Passatwind wiegen und das Meer in unzähligen Türkistönen leuchtet, erwartet Sie ein Segelabenteuer, das alle Ihre Sinne berühren wird.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina auf Mahé, lassen die tropische Kulisse hinter sich und nehmen Kurs auf eine der nächsten Inseln. Jeder Tag bringt neue Horizonte: malerische Buchten, die zum Schnorcheln und Schwimmen einladen, unberührte Strände, die Sie ganz für sich allein haben, und die Möglichkeit, die einzigartige Flora und Fauna dieser Inselwelt hautnah zu erleben.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Gerade in diesem Revier, das von flachen, korallenreichen Gewässern und unzähligen Ankerbuchten geprägt ist, spielt ein Katamaran seine Stärken voll aus. Mit seinem geringen Tiefgang ermöglicht er das sichere Ansteuern von Lagunen und abgelegenen Buchten, die für Monohulls oft unerreichbar bleiben. Die Stabilität eines Katamarans sorgt für maximalen Liegekomfort, auch bei leichtem Schwell, und das großzügige Platzangebot an Deck und im Salon bietet Crew und Gepäck den nötigen Raum für einen entspannten und luxuriösen Urlaub. Ein Katamaran ist die ideale Wahl für Familien, Freunde und alle, die das Inselhopping auf den Seychellen in vollen Zügen genießen möchten.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Die Inselwelten der Seychellen: Ein Paradies in zwei Teilen</h2>
            <p className="text-lg text-gray-600 mb-6">
              Die Seychellen gliedern sich in zwei Hauptgruppen, die unterschiedliche Segelerlebnisse versprechen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Die Inner Islands: Das Herz des Yachtcharters</h3>
            <p className="text-gray-600 mb-4">
              Die Inner Islands sind die Granitinseln und bilden das touristische und nautische Zentrum der Seychellen. Hier konzentrieren sich die Charterbasen und die meisten der beliebten Törnziele. Sie sind bekannt für ihre spektakulären Granitfelsen, die üppige Vegetation und die weltberühmten Traumstrände.
            </p>

            <ul className="text-gray-600 mb-6 space-y-2 ml-4">
              <li><strong><Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-blue-600 hover:text-blue-800 underline font-bold">Mahé</Link>:</strong> Die größte Insel und das Tor zu den Seychellen. Hier befindet sich der internationale Flughafen und die meisten Charterbasen. Mahé bietet eine Mischung aus lebhaften Städten (Victoria, die Hauptstadt), beeindruckenden Bergen, Teeplantagen und wunderschönen Stränden.</li>
              <li><strong><Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-blue-600 hover:text-blue-800 underline font-bold">Praslin</Link>:</strong> Die zweitgrößte Insel, berühmt für das UNESCO-Welterbe Vallée de Mai, Heimat der einzigartigen Coco de Mer Palme. Praslin ist ein exzellenter Ausgangspunkt für Törns zu den umliegenden Inseln.</li>
              <li><strong>La Digue:</strong> Eine der malerischsten Inseln, bekannt für den Anse Source d'Argent, einen der meistfotografierten Strände der Welt mit seinen riesigen Granitfelsen. La Digue erkundet man am besten mit dem Fahrrad.</li>
              <li><strong>Silhouette Island:</strong> Eine große, bergige Insel, die größtenteils unberührt ist und einen Nationalpark beherbergt. Ideal für Wanderungen und das Erleben unberührter Natur.</li>
              <li><strong>Curieuse Island:</strong> Bekannt für ihre Riesenschildkröten und Mangrovenwälder.</li>
              <li><strong>Cousin Island:</strong> Ein streng geschütztes Vogelschutzgebiet.</li>
            </ul>

            <p className="text-gray-600 mb-6">
              Gerade in den Inner Islands sind Katamarane die unangefochtenen Könige der Gewässer. Ihr geringer Tiefgang ermöglicht es, über Riffe hinweg in flachere, geschützte Lagunen und nahe an die Strände zu fahren, wo Monohulls oft nicht hinkommen. Die Stabilität der zwei Rümpfe sorgt für minimales Rollen, was das Ankern und Übernachten an Bord besonders angenehm macht – ein enormer Vorteil für komfortables Inselhopping.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Die Outer Islands: Das Abenteuer für Expeditionen</h3>
            <p className="text-gray-600 mb-8">
              Die Outer Islands sind Koralleninseln, die weit entfernt von den Hauptinseln liegen und oft nur mit speziellen Expeditionen oder längeren Törns erreicht werden. Hierzu gehören Atolle wie Aldabra, die Amiranten, Farquhar und Alphonse. Diese Reviere sind für erfahrene Segler mit viel Zeit und Abenteuerlust gedacht, die das absolute Naturerlebnis und unberührte Tauchgründe suchen.
            </p>
          </div>
        </div>

        {/* Erreichbarkeit Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600" />
                Erreichbarkeit: Ihr direkter Weg ins Inselparadies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Die Seychellen sind überraschend gut an das internationale Flugnetz angebunden, was die Anreise zu Ihrem Yachtcharter-Abenteuer einfach und bequem macht.
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li><strong>Per Direktflug:</strong> Der Seychelles International Airport (SEZ) auf Mahé wird von verschiedenen internationalen Flughäfen direkt angeflogen. Fluggesellschaften wie Condor, Edelweiss Air (saisonal), Emirates, Qatar Airways, Ethiopian Airlines und Turkish Airlines bieten Verbindungen aus Deutschland, Österreich, der Schweiz und anderen europäischen Städten an.</li>
                <li><strong>Kurze Transfers:</strong> Vom Flughafen auf Mahé sind die meisten Charterbasen in der Regel nur eine kurze Taxifahrt entfernt. Für Charter, die auf Praslin oder La Digue starten, gibt es bequeme Weiterreiseoptionen per Inlandsflug oder Fähre.</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Marinas & Ausgangshäfen: Moderne Infrastruktur im Tropenparadies</h4>
              <p className="text-gray-600 mb-4">
                Die Seychellen verfügen über eine moderne und gut ausgebaute maritime Infrastruktur, die speziell auf die Bedürfnisse von Yachtcharter-Gästen zugeschnitten ist.
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li><strong><Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-blue-600 hover:text-blue-800 underline font-bold">Mahé</Link>:</strong> Die Hauptinsel beherbergt die wichtigsten Charterbasen, insbesondere in der Eden Island Marina und der Port Victoria Marina. Diese Marinas bieten umfassende Dienstleistungen wie Wasser, Strom, Treibstoff, Supermärkte, Restaurants und technische Unterstützung. Hier finden Sie die größte Auswahl an Charteryachten, darunter zahlreiche Katamarane, Segelyachten und Motorboote verschiedener Größen und Ausstattungen.</li>
                <li><strong><Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-blue-600 hover:text-blue-800 underline font-bold">Praslin</Link>:</strong> Auch auf Praslin gibt es Charterbasen, die einen direkten Start in die Inselwelt der Inner Islands ermöglichen. Die Baie Sainte Anne Marina ist ein beliebter Anlaufpunkt.</li>
                <li><strong>La Digue:</strong> Auf La Digue gibt es kleinere Anlegemöglichkeiten, die jedoch weniger als Ausgangsbasis, sondern eher als Törnziel dienen.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Die große Auswahl an Multihulls ist ein entscheidender Vorteil auf den Seychellen. Sie sind nicht nur komfortabler und stabiler, sondern auch ideal für die Navigation in den flachen Gewässern und die Ansteuerung der zahlreichen Korallenriffe und Lagunen.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Beliebte Törnziele */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Beliebte Törnziele: Ein Kaleidoskop tropischer Schönheit</h2>
            <p className="text-gray-600 mb-6">
              Ein Yachtcharter auf den Seychellen ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.
            </p>
            
            <ul className="text-gray-600 space-y-3 ml-4">
              <li><strong>Sainte Anne Marine National Park (Mahé):</strong> Nur einen Katzensprung von Mahé entfernt, ist dieser Marinepark ein Muss für Schnorchel- und Tauchbegeisterte. Das kristallklare Wasser und die bunte Unterwasserwelt sind atemberaubend. Hier können Sie sicher ankern und die Ruhe genießen.</li>
              <li><strong>Beau Vallon (<Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-blue-600 hover:text-blue-800 underline font-bold">Mahé</Link>):</strong> Ein langer, belebter Sandstrand mit Restaurants und Wassersportmöglichkeiten. Ein guter Ort für einen Landgang und das Eintauchen ins lokale Leben.</li>
              <li><strong>Anse Lazio (<Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-blue-600 hover:text-blue-800 underline font-bold">Praslin</Link>):</strong> Oft als einer der schönsten Strände der Welt bezeichnet, begeistert Anse Lazio mit seinem puderfeinen Sand, dem türkisfarbenen Wasser und den charakteristischen Granitfelsen. Perfekt für einen ausgedehnten Badestopp.</li>
              <li><strong>Curieuse Island:</strong> Ein Naturreservat, das für seine freilebenden Riesenschildkröten bekannt ist. Hier können Sie an Land gehen, die Schildkröten beobachten und durch Mangrovenwälder wandern.</li>
              <li><strong>Cousin Island:</strong> Ein streng geschütztes Vogelschutzgebiet, das nur unter Führung besucht werden darf. Ein Paradies für Ornithologen.</li>
              <li><strong>La Digue:</strong> Mit dem Fahrrad erkunden Sie die Insel und besuchen den berühmten Anse Source d'Argent, wo riesige Granitfelsen den Strand säumen und ein einzigartiges Fotomotiv bieten.</li>
              <li><strong>Die kleinen Inseln:</strong> Entdecken Sie weitere unbewohnte Inseln wie Grande Soeur, Petite Soeur oder Coco Island mit ihren fantastischen Schnorchelplätzen und unberührten Stränden.</li>
            </ul>
          </div>
        </div>

        {/* 7-Tage-Törnvorschlag */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ihr 7-Tage-Törnvorschlag auf den Seychellen (ab <Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-blue-600 hover:text-blue-800 underline font-bold">Mahé</Link>)</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Tag 1: Ankunft & Inselzauber</h3>
                <p className="text-gray-600">Nach dem Check-in auf <Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-blue-600 hover:text-blue-800 underline font-bold">Mahé</Link> setzen Sie die Segel für einen kurzen Schlag zum Sainte Anne Marine National Park. Genießen Sie das erste Bad im kristallklaren Wasser und schnorcheln Sie durch die farbenfrohe Unterwasserwelt.</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Tag 2: Kurs auf Praslin</h3>
                <p className="text-gray-600">Segeln Sie nach <Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-blue-600 hover:text-blue-800 underline font-bold">Praslin</Link>, der Heimat des UNESCO-Welterbes Vallée de Mai. Am Nachmittag ankern Sie vor dem berühmten Anse Lazio, einem der schönsten Strände der Welt, und lassen den Tag ausklingen.</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Tag 3: Palmen und Schildkröten</h3>
                <p className="text-gray-600">Erkunden Sie am Vormittag das Vallée de Mai mit seinen einzigartigen Coco de Mer Palmen. Anschließend geht es weiter zur Insel Curieuse, wo Sie die freilebenden Riesenschildkröten besuchen und die Mangrovenwälder erkunden können.</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Tag 4: La Digue – Das Postkartenmotiv</h3>
                <p className="text-gray-600">Ein kurzer Schlag bringt Sie nach La Digue. Mieten Sie Fahrräder und erkunden Sie die Insel, besuchen Sie den ikonischen Anse Source d'Argent mit seinen spektakulären Granitfelsen.</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Tag 5: Inselhopping & Schnorchelparadiese</h3>
                <p className="text-gray-600">Nutzen Sie den Tag, um die kleinen, unbewohnten Inseln um La Digue zu erkunden, wie Coco Island oder Grande Soeur. Diese bieten fantastische Schnorchelplätze und unberührte Strände.</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Tag 6: Entspannung & Rückfahrt</h3>
                <p className="text-gray-600">Beginnen Sie die Rückreise in Richtung <Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-blue-600 hover:text-blue-800 underline font-bold">Mahé</Link>. Legen Sie einen entspannten Stopp an einer der schönen Buchten von Silhouette Island oder einer abgelegenen Bucht an der Nordwestküste <Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-blue-600 hover:text-blue-800 underline font-bold">Mahés</Link> ein.</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Tag 7: Abschied vom Paradies</h3>
                <p className="text-gray-600">Nach einem letzten Frühstück an Bord segeln Sie zurück zu Ihrer Charterbasis auf <Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-blue-600 hover:text-blue-800 underline font-bold">Mahé</Link> und treten die Heimreise an – erfüllt von unvergesslichen Eindrücken.</p>
              </div>
            </div>
            
            <p className="text-gray-600 mt-6">
              Dank ihres geringen Tiefgangs sind Katamarane ideal für das Inselhopping auf den Seychellen. Sie können näher an die Strände heranfahren, in flacheren Lagunen ankern und bieten somit einen direkteren Zugang zu den schönsten Plätzen. Ihr großzügiges Deck und die Badeplattformen machen sie perfekt für Wassersportaktivitäten direkt vom Boot aus.
            </p>
          </div>
        </div>

        {/* Wetter & Windbedingungen Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CloudSun className="w-6 h-6 text-blue-600" />
                Wetter & Windbedingungen: Segeln im tropischen Klima
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Die Seychellen liegen außerhalb des Zyklongürtels und sind somit ganzjährig ein sicheres Segelrevier. Das Klima ist tropisch-warm und feucht. Die Winde werden von den Monsunperioden bestimmt:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Nordwestmonsun (November bis März):</h4>
                  <p className="text-gray-600">In dieser Zeit wehen die Winde aus Nordwest, meist mit 8-12 Knoten. Das Meer ist ruhiger, aber es kann heißer und feuchter sein, mit gelegentlichen tropischen Schauern, besonders von Dezember bis Februar. Dies ist eine gute Zeit für entspanntes Cruisen und für Crews, die weniger Wind bevorzugen. Katamarane sorgen auch bei höheren Temperaturen für eine angenehme Belüftung und bieten viel Schatten auf dem Deck.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Südostpassat (April bis Oktober):</h4>
                  <p className="text-gray-600">Dies ist die trockenere und kühlere Jahreszeit mit beständigeren Winden aus Südost, die oft 10-20 Knoten erreichen können. Das Meer kann etwas rauer sein, aber die Segelbedingungen sind hervorragend für sportlicheres Segeln. Katamarane bieten auch bei stärkeren Winden und leichtem Schwell einen stabilen und komfortablen Stand, was Seekrankheit vorbeugt und das Segelerlebnis entspannter macht.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800">
                  <strong>Wichtige nautische Besonderheit:</strong> Auf den Seychellen ist das Segeln bei Nacht behördlich untersagt. Dies erfordert eine sorgfältige Törnplanung, sodass Sie Ihren Ankerplatz immer vor Einbruch der Dunkelheit (ca. 17:00 Uhr) erreichen. Ankern sollte stets auf Sandgrund erfolgen, um die empfindlichen Korallenriffe zu schützen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Beste Reisezeit */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Beste Reisezeit: Wann Ihr Seychellen-Traum wahr wird</h2>
            <p className="text-gray-600 mb-6">
              Die Seychellen sind ganzjährig segelbar, doch bestimmte Perioden bieten optimale Bedingungen:
            </p>
            
            <ul className="text-gray-600 space-y-3 ml-4">
              <li><strong>April/Mai und Oktober/November (Übergangszeiten):</strong> Diese Monate gelten als die besten Reisezeiten. Die Winde sind moderater, das Wasser ist besonders klar (Sichtweiten bis zu 30 Meter), ideal zum Schnorcheln und Tauchen, und die Temperaturen sind angenehm.</li>
              <li><strong>Juni bis September:</strong> Hervorragend für aktives Segeln dank des beständigen Südostpassats. Es ist trockener und kühler.</li>
              <li><strong>Dezember bis März:</strong> Ruhigeres Segeln mit weniger Wind, aber potenziell mehr Regen und höherer Luftfeuchtigkeit.</li>
            </ul>
          </div>
        </div>

        {/* Fazit */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Fazit: Ein Katamaran-Paradies im Indischen Ozean</h2>
            <p className="text-gray-600 mb-6">
              Ein Yachtcharter auf den Seychellen ist eine unvergleichliche Erfahrung, die alle Sinne anspricht. Es ist die einzigartige Kombination aus karibischem Flair, exotischen Landschaften, abwechslungsreichen Segelbedingungen und einer entspannten Atmosphäre. Die Seychellen sind ein Revier, das zum Entschleunigen einlädt, zum Eintauchen in eine Welt voller natürlicher Wunder.
            </p>
            <p className="text-gray-600 mb-6">
              Insbesondere die Wahl eines Katamarans maximiert Ihr Seychellen-Erlebnis. Sein geringer Tiefgang, die Stabilität, das großzügige Platzangebot und der hohe Komfort machen ihn zum idealen Begleiter für Crews und Familien, die die verborgenen Schätze dieser Inselwelt entdecken möchten. Erleben Sie die Seychellen vom Wasser aus – es wird ein Abenteuer, das Sie nie vergessen werden.
            </p>
            <p className="text-gray-600">
              Sind Sie bereit, die Segel zu setzen und Ihr Paradies auf Erden zu entdecken? Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter auf den Seychellen an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Bereit für das Paradies?
            </h3>
            <p className="mb-6 text-gray-700">
              Entdecken Sie mit einem Katamaran die Trauminseln der Seychellen 
              und erleben Sie unberührte Natur im Indischen Ozean.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Seychellen-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Häufig gestellte Fragen (FAQ) zum Yachtcharter auf den Seychellen</h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-lg">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-6 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Seychelles;