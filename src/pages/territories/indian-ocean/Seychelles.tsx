import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, Plane, Wind, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import destinationSeychelles from "@/assets/destination-seychelles.jpg";

const Seychelles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { 
      icon: MapPin, 
      label: "Lage", 
      value: "115 Inseln, Indischer Ozean" 
    },
    { 
      icon: Calendar, 
      label: "Beste Zeit", 
      value: "April-Mai, Oktober-November" 
    },
    { 
      icon: Users, 
      label: "Geeignet für", 
      value: "Alle Levels" 
    },
    { 
      icon: Ship, 
      label: "Besonderheit", 
      value: "Katamaran-Paradies" 
    },
    { 
      icon: Wind, 
      label: "Windverhältnisse", 
      value: "Passatwinde 8-20 Knoten" 
    },
    { 
      icon: Anchor, 
      label: "Ankerverbote", 
      value: "Nachtfahrtverbot 17:00 Uhr" 
    }
  ];

  const faqData = [
    {
      question: "Welche Segelscheine und Befähigungsnachweise sind für das Chartern einer Yacht auf den Seychellen erforderlich?",
      answer: "Für das Chartern einer Yacht auf den Seychellen benötigen Sie einen gültigen internationalen Führerschein für Sportbootfahrer (International Certificate of Competence - ICC) oder einen äquivalenten nationalen Segelschein wie den Sportbootführerschein See (SBF See) oder den Sportküstenschifferschein (SKS). Zusätzlich ist ein aktuelles Funkzeugnis (Short Range Certificate - SRC) erforderlich. Bei größeren Yachten über 24 Meter Länge kann ein erweiterte Qualifikation wie der Sportseeschifferschein (SSS) verlangt werden."
    },
    {
      question: "Welche Kosten sind beim Yachtcharter auf den Seychellen zu erwarten?",
      answer: "Die Charterkosten für eine Yacht auf den Seychellen variieren je nach Saison, Yachttyp und -größe. Eine Katamaran für 8-10 Personen kostet in der Hauptsaison (Dezember-Januar, Juli-August) etwa 4.000-8.000 Euro pro Woche, in der Nebensaison 2.500-5.000 Euro. Hinzu kommen Nebenkosten wie Endreinigung (200-500 Euro), Treibstoff, Hafengebühren, Verpflegung und optionale Extras wie Skipper (1.200-1.500 Euro/Woche) oder Cook/Hostess."
    },
    {
      question: "Wann ist die beste Reisezeit für einen Segelurlaub auf den Seychellen?",
      answer: "Die beste Zeit für einen Segelurlaub auf den Seychellen sind die Übergangszeiten von April bis Mai und Oktober bis November. In diesen Monaten herrschen milde Winde (10-15 Knoten), ruhige See und minimale Regenfälle. Die Trockenzeit von Mai bis September bietet stabile Südost-Passatwinde, kann aber windiger sein. Die Regenzeit von Dezember bis März sollte vermieden werden, da häufige Regenschauer und stärkere Nordwest-Winde auftreten können."
    },
    {
      question: "Welche Route ist für eine einwöchige Segelreise auf den Seychellen empfehlenswert?",
      answer: "Eine klassische einwöchige Route startet in Mahé und führt über Praslin nach La Digue, mit Stopps in Cousin Island, Curieuse Island und St. Pierre. Diese Route bietet die perfekte Mischung aus den drei Hauptinseln mit ihren unterschiedlichen Charakteristiken: moderne Infrastruktur auf Mahé, das UNESCO-Welterbe Vallée de Mai auf Praslin und die berühmten Granitfelsen-Strände von La Digue. Die Distanzen sind überschaubar (15-25 Seemeilen zwischen den Inseln) und bieten auch weniger erfahrenen Seglern entspanntes Inselhüpfen."
    },
    {
      question: "Welche Besonderheiten gelten beim Segeln und Ankern auf den Seychellen?",
      answer: "Beim Segeln auf den Seychellen müssen Sie besonders auf Korallenriffe und Untiefen achten, da viele Bereiche nur bei Flut passierbar sind. Ankern ist nur in ausgewiesenen Bereichen erlaubt, um die empfindlichen Korallenriffe zu schützen. In vielen Buchten stehen Mooringbojen zur Verfügung, deren Nutzung bevorzugt werden sollte. Der Besuch der meisten Inseln erfordert eine Genehmigung, die über die Charterfirma arrangiert werden kann. Beachten Sie die strengen Naturschutzbestimmungen, insbesondere in den Nationalparks und Meeresschutzgebieten."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/753887c4-55b0-40ea-890c-1a64defa8c5f.png"
          alt="Seychellen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇸🇨 Seychellen</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Seychellen</h1>
            <p className="text-xl max-w-2xl">
              Tropisches Inselparadies mit Granit-Felsen
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/indischer-ozean" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Indischen Ozean
          </Button>
        </Link>
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
                <BreadcrumbLink href="/reviere/indischer-ozean">Indischer Ozean</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Seychellen</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {quickFacts.map((fact, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <fact.icon className="w-8 h-8 text-blue-600 mx-auto" />
                </CardHeader>
                <CardContent className="pt-0">
                  <CardTitle className="text-sm font-medium text-muted-foreground mb-1">
                    {fact.label}
                  </CardTitle>
                  <p className="text-sm font-semibold">{fact.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Territory Map */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Lage der Seychellen im Indischen Ozean
          </h2>
          <TerritoryMap
            region="Seychellen"
            center={{ lat: -4.6796, lng: 55.4915 }}
            zoom={9}
            maptype="satellite"
            className="w-full"
          />
        </div>
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Seychellen - Segeln im Paradies des Indischen Ozeans</h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Yachtcharter Seychellen: Segeln im Paradies des Indischen Ozeans – Ihr Traumtörn wartet auf Sie</h2>
              
              <p className="mb-6">
                Die Seychellen – ein Name, der Sehnsüchte weckt. Ein Archipel von 115 Inseln, die wie smaragdgrüne Juwelen im kristallklaren Wasser des Indischen Ozeans liegen. Ein Yachtcharter auf den Seychellen ist die ultimative Einladung, ein einzigartiges Naturparadies zu entdecken, das mit seinen traumhaften Stränden, der üppigen Vegetation, spektakulären Granitfelsen, einer farbenfrohen Unterwasserwelt und einer authentischen Inselkultur verzaubert. Hier, wo die Palmen im sanften Passatwind wiegen und das Meer in unzähligen Türkistönen leuchtet, erwartet Sie ein Segelabenteuer, das alle Ihre Sinne berühren wird.
              </p>
              
              <p className="mb-6">
                Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina auf Mahé, lassen die tropische Kulisse hinter sich und nehmen Kurs auf eine der nächsten Inseln. Jeder Tag bringt neue Horizonte: malerische Buchten, die zum Schnorcheln und Schwimmen einladen, unberührte Strände, die Sie ganz für sich allein haben, und die Möglichkeit, die einzigartige Flora und Fauna dieser Inselwelt hautnah zu erleben.
              </p>
              
              <p className="mb-6">
                Gerade in diesem Revier, das von flachen, korallenreichen Gewässern und unzähligen Ankerbuchten geprägt ist, spielt ein Katamaran seine Stärken voll aus. Mit seinem geringen Tiefgang ermöglicht er das sichere Ansteuern von Lagunen und abgelegenen Buchten, die für Monohulls oft unerreichbar bleiben. Die Stabilität eines Katamarans sorgt für maximalen Liegekomfort, auch bei leichtem Schwell, und das großzügige Platzangebot an Deck und im Salon bietet Crew und Gepäck den nötigen Raum für einen entspannten und luxuriösen Urlaub. Ein Katamaran ist die ideale Wahl für Familien, Freunde und alle, die das Inselhopping auf den Seychellen in vollen Zügen genießen möchten.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Die Inselwelten der Seychellen: Ein Paradies in zwei Teilen</h3>
              
              <p className="mb-4">
                Die Seychellen gliedern sich in zwei Hauptgruppen, die unterschiedliche Segelerlebnisse versprechen.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Die Inner Islands: Das Herz des Yachtcharters</h4>
              
              <p className="mb-4">
                Die Inner Islands sind die Granitinseln und bilden das touristische und nautische Zentrum der Seychellen. Hier konzentrieren sich die Charterbasen und die meisten der beliebten Törnziele. Sie sind bekannt für ihre spektakulären Granitfelsen, die üppige Vegetation und die weltberühmten Traumstrände.
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong><Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-primary hover:underline">Mahé</Link>:</strong> Die größte Insel und das Tor zu den Seychellen. Hier befindet sich der internationale Flughafen und die meisten Charterbasen. Mahé bietet eine Mischung aus lebhaften Städten (Victoria, die Hauptstadt), beeindruckenden Bergen, Teeplantagen und wunderschönen Stränden.</li>
                <li><strong><Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-primary hover:underline">Praslin</Link>:</strong> Die zweitgrößte Insel, berühmt für das UNESCO-Welterbe Vallée de Mai, Heimat der einzigartigen Coco de Mer Palme. Praslin ist ein exzellenter Ausgangspunkt für Törns zu den umliegenden Inseln.</li>
                <li><strong><Link to="/reviere/indischer-ozean/seychellen/ladigue" className="text-primary hover:underline">La Digue</Link>:</strong> Eine der malerischsten Inseln, bekannt für den Anse Source d'Argent, einen der meistfotografierten Strände der Welt mit seinen riesigen Granitfelsen. La Digue erkundet man am besten mit dem Fahrrad.</li>
                <li><strong>Silhouette Island:</strong> Eine große, bergige Insel, die größtenteils unberührt ist und einen Nationalpark beherbergt. Ideal für Wanderungen und das Erleben unberührter Natur.</li>
                <li><strong>Curieuse Island:</strong> Bekannt für ihre Riesenschildkröten und Mangrovenwälder.</li>
                <li><strong>Cousin Island:</strong> Ein streng geschütztes Vogelschutzgebiet.</li>
              </ul>
              
              <p className="mb-6">
                Gerade in den Inner Islands sind Katamarane die unangefochtenen Könige der Gewässer. Ihr geringer Tiefgang ermöglicht es, über Riffe hinweg in flachere, geschützte Lagunen und nahe an die Strände zu fahren, wo Monohulls oft nicht hinkommen. Die Stabilität der zwei Rümpfe sorgt für minimales Rollen, was das Ankern und Übernachten an Bord besonders angenehm macht – ein enormer Vorteil für komfortables Inselhopping.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Die Outer Islands: Das Abenteuer für Expeditionen</h4>
              
              <p className="mb-6">
                Die Outer Islands sind Koralleninseln, die weit entfernt von den Hauptinseln liegen und oft nur mit speziellen Expeditionen oder längeren Törns erreicht werden. Hierzu gehören Atolle wie Aldabra, die Amiranten, Farquhar und Alphonse. Diese Reviere sind für erfahrene Segler mit viel Zeit und Abenteuerlust gedacht, die das absolute Naturerlebnis und unberührte Tauchgründe suchen.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Erreichbarkeit: Ihr direkter Weg ins Inselparadies</h3>
              
              <p className="mb-4">
                Die Seychellen sind überraschend gut an das internationale Flugnetz angebunden, was die Anreise zu Ihrem Yachtcharter-Abenteuer einfach und bequem macht.
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Per Direktflug:</strong> Der Seychelles International Airport (SEZ) auf Mahé wird von verschiedenen internationalen Flughäfen direkt angeflogen. Fluggesellschaften wie Condor, Edelweiss Air (saisonal), Emirates, Qatar Airways, Ethiopian Airlines und Turkish Airlines bieten Verbindungen aus Deutschland, Österreich, der Schweiz und anderen europäischen Städten an.</li>
                <li><strong>Kurze Transfers:</strong> Vom Flughafen auf Mahé sind die meisten Charterbasen in der Regel nur eine kurze Taxifahrt entfernt. Für Charter, die auf Praslin oder La Digue starten, gibt es bequeme Weiterreiseoptionen per Inlandsflug oder Fähre.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Marinas & Ausgangshäfen: Moderne Infrastruktur im Tropenparadies</h3>
              
              <p className="mb-4">
                Die Seychellen verfügen über eine moderne und gut ausgebaute maritime Infrastruktur, die speziell auf die Bedürfnisse von Yachtcharter-Gästen zugeschnitten ist.
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Mahé:</strong> Die Hauptinsel beherbergt die wichtigsten Charterbasen, insbesondere in der Eden Island Marina und der Port Victoria Marina. Diese Marinas bieten umfassende Dienstleistungen wie Wasser, Strom, Treibstoff, Supermärkte, Restaurants und technische Unterstützung. Hier finden Sie die größte Auswahl an Charteryachten, darunter zahlreiche Katamarane, Segelyachten und Motorboote verschiedener Größen und Ausstattungen.</li>
                <li><strong>Praslin:</strong> Auch auf Praslin gibt es Charterbasen, die einen direkten Start in die Inselwelt der Inner Islands ermöglichen. Die Baie Sainte Anne Marina ist ein beliebter Anlaufpunkt.</li>
                <li><strong>La Digue:</strong> Auf La Digue gibt es kleinere Anlegemöglichkeiten, die jedoch weniger als Ausgangsbasis, sondern eher als Törnziel dienen.</li>
              </ul>
              
              <p className="mb-6">
                Die große Auswahl an Multihulls ist ein entscheidender Vorteil auf den Seychellen. Sie sind nicht nur komfortabler und stabiler, sondern auch ideal für die Navigation in den flachen Gewässern und die Ansteuerung der zahlreichen Korallenriffe und Lagunen.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Beliebte Törnziele: Ein Kaleidoskop tropischer Schönheit</h3>
              
              <p className="mb-4">
                Ein Yachtcharter auf den Seychellen ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Sainte Anne Marine National Park (Mahé):</strong> Nur einen Katzensprung von Mahé entfernt, ist dieser Marinepark ein Muss für Schnorchel- und Tauchbegeisterte. Das kristallklare Wasser und die bunte Unterwasserwelt sind atemberaubend. Hier können Sie sicher ankern und die Ruhe genießen.</li>
                <li><strong>Beau Vallon (<Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-primary hover:underline">Mahé</Link>):</strong> Ein langer, belebter Sandstrand mit Restaurants und Wassersportmöglichkeiten. Ein guter Ort für einen Landgang und das Eintauchen ins lokale Leben.</li>
                <li><strong>Anse Lazio (<Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-primary hover:underline">Praslin</Link>):</strong> Oft als einer der schönsten Strände der Welt bezeichnet, begeistert Anse Lazio mit seinem puderfeinen Sand, dem türkisfarbenen Wasser und den charakteristischen Granitfelsen. Perfekt für einen ausgedehnten Badestopp.</li>
                <li><strong>Curieuse Island:</strong> Ein Naturreservat, das für seine freilebenden Riesenschildkröten bekannt ist. Hier können Sie an Land gehen, die Schildkröten beobachten und durch Mangrovenwälder wandern.</li>
                <li><strong>Cousin Island:</strong> Ein streng geschütztes Vogelschutzgebiet, das nur unter Führung besucht werden darf. Ein Paradies für Ornithologen.</li>
                <li><strong><Link to="/reviere/indischer-ozean/seychellen/ladigue" className="text-primary hover:underline">La Digue</Link>:</strong> Mit dem Fahrrad erkunden Sie die Insel und besuchen den berühmten Anse Source d'Argent, wo riesige Granitfelsen den Strand säumen und ein einzigartiges Fotomotiv bieten.</li>
                <li><strong>Die kleinen Inseln:</strong> Entdecken Sie weitere unbewohnte Inseln wie Grande Soeur, Petite Soeur oder Coco Island mit ihren fantastischen Schnorchelplätzen und unberührten Stränden.</li>
              </ul>
              
              <p className="mb-6">
                Dank ihres geringen Tiefgangs sind Katamarane ideal für das Inselhopping auf den Seychellen. Sie können näher an die Strände heranfahren, in flacheren Lagunen ankern und bieten somit einen direkteren Zugang zu den schönsten Plätzen. Ihr großzügiges Deck und die Badeplattformen machen sie perfekt für Wassersportaktivitäten direkt vom Boot aus.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Wetter & Windbedingungen: Segeln im tropischen Klima</h3>
              
              <p className="mb-4">
                Die Seychellen liegen außerhalb des Zyklongürtels und sind somit ganzjährig ein sicheres Segelrevier. Das Klima ist tropisch-warm und feucht. Die Winde werden von den Monsunperioden bestimmt:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Nordwestmonsun (November bis März):</strong> In dieser Zeit wehen die Winde aus Nordwest, meist mit 8-12 Knoten. Das Meer ist ruhiger, aber es kann heißer und feuchter sein, mit gelegentlichen tropischen Schauern, besonders von Dezember bis Februar. Dies ist eine gute Zeit für entspanntes Cruisen und für Crews, die weniger Wind bevorzugen. Katamarane sorgen auch bei höheren Temperaturen für eine angenehme Belüftung und bieten viel Schatten auf dem Deck.</li>
                <li><strong>Südostpassat (April bis Oktober):</strong> Dies ist die trockenere und kühlere Jahreszeit mit beständigeren Winden aus Südost, die oft 10-20 Knoten erreichen können. Das Meer kann etwas rauer sein, aber die Segelbedingungen sind hervorragend für sportlicheres Segeln. Katamarane bieten auch bei stärkeren Winden und leichtem Schwell einen stabilen und komfortablen Stand, was Seekrankheit vorbeugt und das Segelerlebnis entspannter macht.</li>
              </ul>
              
              <p className="mb-6">
                <strong>Wichtige nautische Besonderheit:</strong> Auf den Seychellen ist das Segeln bei Nacht behördlich untersagt. Dies erfordert eine sorgfältige Törnplanung, sodass Sie Ihren Ankerplatz immer vor Einbruch der Dunkelheit (ca. 17:00 Uhr) erreichen. Ankern sollte stets auf Sandgrund erfolgen, um die empfindlichen Korallenriffe zu schützen.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Beste Reisezeit: Wann Ihr Seychellen-Traum wahr wird</h3>
              
              <p className="mb-4">
                Die Seychellen sind ganzjährig segelbar, doch bestimmte Perioden bieten optimale Bedingungen:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>April/Mai und Oktober/November (Übergangszeiten):</strong> Diese Monate gelten als die besten Reisezeiten. Die Winde sind moderater, das Wasser ist besonders klar (Sichtweiten bis zu 30 Meter), ideal zum Schnorcheln und Tauchen, und die Temperaturen sind angenehm.</li>
                <li><strong>Juni bis September:</strong> Hervorragend für aktives Segeln dank des beständigen Südostpassats. Es ist trockener und kühler.</li>
                <li><strong>Dezember bis März:</strong> Ruhigeres Segeln mit weniger Wind, aber potenziell mehr Regen und höherer Luftfeuchtigkeit.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-6">7-Tage-Törnvorschlag Seychellen</h3>
              
              <div className="mb-4 border-l-4 border-primary pl-4">
                <h4 className="font-bold text-gray-800">Tag 1: <Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-primary hover:underline">Mahé</Link> - Eden Bleu Marina</h4>
                <p className="text-gray-600">Übernahme der Yacht, Einweisung und erste Übernachtung in der Marina. Einkauf und Proviantierung für die Woche.</p>
              </div>
              
              <div className="mb-4 border-l-4 border-primary pl-4">
                <h4 className="font-bold text-gray-800">Tag 2: Mahé - St. Anne Island (8 SM)</h4>
                <p className="text-gray-600">Kurzer erster Schlag zur geschützten St. Anne Island. Schnorcheln im Meerespark und Besuch des Luxury Resorts.</p>
              </div>
              
              <div className="mb-4 border-l-4 border-primary pl-4">
                <h4 className="font-bold text-gray-800">Tag 3: St. Anne - <Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-primary hover:underline">Praslin</Link>/Baie Sainte Anne (22 SM)</h4>
                <p className="text-gray-600">Segeln nach <Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-primary hover:underline">Praslin</Link>. Besuch des berühmten UNESCO-Welterbes Vallée de Mai mit den seltenen Coco de Mer Palmen.</p>
              </div>
              
              <div className="mb-4 border-l-4 border-primary pl-4">
                <h4 className="font-bold text-gray-800">Tag 4: <Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-primary hover:underline">Praslin</Link> - <Link to="/reviere/indischer-ozean/seychellen/ladigue" className="text-primary hover:underline">La Digue</Link> (6 SM)</h4>
                <p className="text-gray-600">Kurzer Schlag zur malerischen <Link to="/reviere/indischer-ozean/seychellen/ladigue" className="text-primary hover:underline">La Digue</Link>. Besuch der berühmten Anse Source d'Argent mit den ikonischen Granitfelsen.</p>
              </div>
              
              <div className="mb-4 border-l-4 border-primary pl-4">
                <h4 className="font-bold text-gray-800">Tag 5: <Link to="/reviere/indischer-ozean/seychellen/ladigue" className="text-primary hover:underline">La Digue</Link> - Cousin Island - <Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-primary hover:underline">Praslin</Link> (15 SM)</h4>
                <p className="text-gray-600">Besuch der Vogelschutzinsel Cousin Island am Morgen, dann weiter nach <Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-primary hover:underline">Praslin</Link> zum Anse Volbert Beach.</p>
              </div>
              
              <div className="mb-4 border-l-4 border-primary pl-4">
                <h4 className="font-bold text-gray-800">Tag 6: <Link to="/reviere/indischer-ozean/seychellen/praslin" className="text-primary hover:underline">Praslin</Link> - Curieuse Island - St. Pierre (10 SM)</h4>
                <p className="text-gray-600">Ausflug zur Curieuse Island mit Riesenschildkröten-Beobachtung. Schnorcheln bei St. Pierre Island.</p>
              </div>
              
              <div className="mb-6 border-l-4 border-primary pl-4">
                <h4 className="font-bold text-gray-800">Tag 7: St. Pierre - <Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-primary hover:underline">Mahé</Link>/Eden Bleu (25 SM)</h4>
                <p className="text-gray-600">Rücksegeln nach <Link to="/reviere/indischer-ozean/seychellen/mahe" className="text-primary hover:underline">Mahé</Link> mit letztem Stopp in einer geschützten Bucht vor der Yacht-Rückgabe am nächsten Morgen.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Fazit: Ein Katamaran-Paradies im Indischen Ozean</h3>
              
              <p className="mb-4">
                Ein Yachtcharter auf den Seychellen ist eine unvergleichliche Erfahrung, die alle Sinne anspricht. Es ist die einzigartige Kombination aus karibischem Flair, exotischen Landschaften, abwechslungsreichen Segelbedingungen und einer entspannten Atmosphäre. Die Seychellen sind ein Revier, das zum Entschleunigen einlädt, zum Eintauchen in eine Welt voller natürlicher Wunder.
              </p>
              
              <p className="mb-4">
                Insbesondere die Wahl eines Katamarans maximiert Ihr Seychellen-Erlebnis. Sein geringer Tiefgang, die Stabilität, das großzügige Platzangebot und der hohe Komfort machen ihn zum idealen Begleiter für Crews und Familien, die die verborgenen Schätze dieser Inselwelt entdecken möchten. Erleben Sie die Seychellen vom Wasser aus – es wird ein Abenteuer, das Sie nie vergessen werden.
              </p>
              
              <p className="mb-6">
                Sind Sie bereit, die Segel zu setzen und Ihr Paradies auf Erden zu entdecken?
              </p>
              
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bereit für Ihren Seychellen-Charter?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter auf den Seychellen an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Jetzt Seychellen Charter anfragen
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Häufig gestellte Fragen - Yachtcharter Seychellen</h3>
            
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Seychellen?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das tropische Paradies mit seinen einzigartigen 
              Granitfelsen-Stränden und der faszinierenden Tier- und Pflanzenwelt.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Seychellen Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seychelles;