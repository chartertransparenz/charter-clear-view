import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import destinationGreece from "@/assets/destination-greece.jpg";
const IonicIslands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Westgriechenland"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Familien & Einsteiger"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Sanftere Winde"
  }];
  const cities = ["Korfu", "Kefalonia", "Zakynthos", "Lefkada", "Ithaka", "Paxi", "Antipaxi"];
  const highlights = ["Venezianische Architektur auf Korfu", "Sanftere Winde als in der Ägäis", "Grüne, bergige Landschaften", "Kristallklare Buchten", "Familienfreundliche Reviere", "Reiche Geschichte und Kultur", "Ausgezeichnete Marinas"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={destinationGreece} alt="Ionische Inseln Griechenland" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Ionische Inseln</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ionische Inseln</h1>
            <p className="text-xl max-w-2xl">
              Grüne Perlen des Ionischen Meeres
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer/griechenland" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Griechenland
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
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer">Mittelmeer</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer/griechenland">Griechenland</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Ionische Inseln</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>)}
        </div>

        {/* Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ionisches Meer</h2>
          <TerritoryMap
            region="Ionisches Meer"
            center={{ lat: 38.5, lng: 20.5 }}
            zoom={7}
            maptype="satellite"
            className="h-96"
          />
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Ionische Inseln ab Lefkada</h2>
            <p className="text-xl text-muted-foreground">
              Ihr Törn entlang der Westküste Griechenlands
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold mt-8 mb-4">Warum ein Törn im Ionischen Meer ein Klassiker ist</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die Ionischen Inseln stehen seit Jahrzehnten für entspanntes, zugleich vielfältiges Segeln. Der Segler findet hier eine Kombination, die selten so stimmig ist: ruhige See mit verlässlichen thermischen Winden, zahllose, gut geschützte Ankerbuchten mit sicherem Ankergrund, grüne, duftende Hänge aus Pinien und Zypressen sowie lebendige Hafenorte, in denen Tavernen, Cafés und kleine Läden direkt an der Kaimauer liegen. Im Zentrum dieser Inselwelt liegt Lefkada (Lefkas) – Ihr idealer Ausgangspunkt für Yachtcharter im Ionischen Meer entlang der westgriechischen Küste.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Wer ab Lefkada sticht, profitiert von kurzen Schlägen zwischen den Inseln, sehr guter nautischer Infrastruktur und einer Routenvielfalt, die sowohl Einsteiger als auch erfahrene Skipper begeistert. Die Navigation ist überwiegend übersichtlich, das Seegebiet durch die vorgelagerten Inseln gut abgeschirmt, und dennoch bietet das Revier genügend Abwechslung: vom familienfreundlichen Badestopp bis zum ambitionierten Tagestörn. Ob Monohull oder Katamaran, Bareboat oder mit Skipper – die Ionischen Inseln sind das Revier für den, der Segeln als Genuss begreift: stressfrei, naturnah und mit genügend Spielraum für spontane Kursänderungen.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Lefkada überzeugt zusätzlich mit einem reibungslosen Start in den Törn: moderne Marina, professionelle Charterbasen, eingespielte Check-in-Prozesse und Services von der Proviantlieferung bis zum Technik-Support. Nach dem Ablegen führt Sie der Weg durch den Lefkas-Kanal hinaus in ein Revier, das in alle Himmelsrichtungen Optionen bereithält – von den nahen Inseln Meganisi, Kalamos und Kastos über Ithaka und Kefalonia bis hinauf nach Paxos und Korfu.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erreichbarkeit</h3>
            <p className="text-lg leading-relaxed mb-4">So reisen Chartergäste bequem nach Lefkada:</p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Direktflug nach Preveza (Aktion Airport, PVK):</strong> In der Saison bedienen zahlreiche Airlines den Flughafen Preveza. Die Wege vor Ort sind kurz, die Abfertigung ist routiniert, das Gepäck ist schnell am Band.</li>
              <li><strong>Kurzer Transfer zur Marina Lefkada:</strong> Von PVK zur Marina benötigen Sie in der Regel rund eine halbe Stunde. Auf Wunsch organisieren wir einen zuverlässigen, klimatisierten Transfer – pünktlich, inklusive Meet & Greet am Ausgang.</li>
              <li><strong>Mietwagen & Taxi:</strong> Am Flughafen stehen Mietwagenfirmen und Taxis bereit. Lefkada ist über eine bewegliche Brücke mit dem Festland verbunden, die Anfahrt ist unkompliziert und gut ausgeschildert.</li>
              <li><strong>Privater Shuttle & Gruppen-Transfer:</strong> Für größere Crews koordinieren wir Sammeltransfers mit Anhänger für Gepäck und Ausrüstung – vom Terminal direkt bis vor den Steg.</li>
              <li><strong>Beste Infrastruktur vor Ort:</strong> Supermärkte, Bäckereien, Obst- und Gemüseläden, Apotheke, Bankautomat sowie nautische Fachgeschäfte (Chandleries) liegen in fußläufiger Entfernung zur Marina. Für Last-Minute-Bedarf gibt es wassernahe Mini-Märkte und ein Fuel-Dock für die problemlose Bunkerung.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Marinas & Ausgangshäfen</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Marina Lefkada (Lefkas Marina)</h4>
            <p className="mb-4">
              Die Marina Lefkada ist Ihre Homebase im Ionischen Meer. Sie bietet breite Boxengassen mit Muring, Strom- und Wasseranschlüssen am Steg sowie eine 24/7-Sicherheitspräsenz. Ein kompetenter Technikservice deckt Elektrik, Rigg und Maschinenwartung ab; ein Travel Lift steht für größere Maßnahmen bereit. Sanitäre Anlagen sind gepflegt und ausreichend dimensioniert. Für die Proviantierung gibt es mehrere Supermärkte in Laufweite; auf Wunsch wird die Ware rechtzeitig bis an Bord geliefert. Ein Fuel-Dock im Hafenbereich ermöglicht die stressfreie Betankung vor Abreise oder vor dem Check-out. Cafés, Bistros und Bäckereien sorgen dafür, dass die Crew schon am Ankunftstag gut versorgt ist.
            </p>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Gouvia Marina (Korfu)</h4>
            <p className="mb-4">
              Als eine der größten Marinas Griechenlands ist Gouvia der wichtigste nördliche Hub für Yachtcharter im Ionischen Meer. Sie ist hervorragend ausgestattet, ideal für One-Way-Törns oder als nordischer Etappenhafen. Die Servicekette reicht von der Werft mit Kran- und Lagerflächen über mehrere Chandlers bis zu Restaurants und Supermärkten direkt im Marinaumfeld. Wer seinen Törn mit einem Abstecher nach Korfu-Stadt verbinden möchte, findet hier eine ideale Basis mit schneller Anbindung an die Altstadt.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Sami Marina (Kefalonia)</h4>
            <p className="mb-4">
              Sami ist kompakt, gut geschützt und strategisch günstig gelegen, wenn der Kurs auf Ithaka und die Ostküste Kefalonias führt. Wasser- und Stromanschlüsse sind vorhanden; Tavernen, Cafés und Mini-Märkte liegen am Kai. Die Nähe zu Mietwagenstationen erleichtert Inselausflüge. Für die Bordroutine bedeuten kurze Wege weniger Lauferei – Sie verbringen die Zeit dort, wo sie hingehört: an Deck oder in der Bucht.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Weitere Liegeplätze & kommunale Häfen</h4>
            <p className="mb-6">
              Neben den großen Marinas gibt es entlang der Route zahlreiche kommunale Häfen und Anleger, an denen mit Buganker und Heckleinen oder an Moorings festgemacht wird. Viele dieser Orte bieten Wasser auf dem Steg, gelegentlich auch Strom. Die Versorgung ist oft überraschend gut: Bäcker am Morgen, Obststände, Eiswürfel, Gasflaschen – und natürlich die Taverne mit Blick auf die eigene Yacht.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele – Inseln, Buchten, nautische Highlights</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Meganisi – der sanfte Einstieg</h4>
            <p className="mb-4">
              Meganisi liegt östlich von Lefkada und ist für den ersten Törntag ideal. Der Weg dorthin ist kurz und führt Sie in ein archipelartiges Labyrinth geschützter Buchten. Abelike ist ein Klassiker: sandig-schlickiger Ankergrund mit gutem Halt, viel Platz zum Schwojen und ein Ufer, an dem Heckleinen an Land gebracht werden können. In Vathi finden sich Liegeplätze an der Kaimauer sowie Moorings; die Tavernen sind berühmt für frischen Fang. Spartochori bietet einen spektakulären Blick – wer den Anstieg in Kauf nimmt, wird mit einem Sonnenuntergang belohnt, der die Masten im Hafen in warmes Gold taucht. Navigationsseitig ist Meganisi übersichtlich, ideal zum Ankommen, Einspielen der Crew und zum Überprüfen von Riggspannung, Reffpunkten und Ankerwinde.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Kalamos & Kastos – authentische Nachbarn</h4>
            <p className="mb-4">
              Südöstlich von Meganisi liegen Kalamos und Kastos, zwei schmale, grüne Inseln mit starkem Charakter. Kalamos bietet einen kleinen Hafen, in dem je nach Windrichtung Fallböen vom Berg herunterstehen können – ein guter Test für Anker und Heckleinenmanagement. Die Buchten an der Ostküste sind ruhig und glasklar. Kastos wirkt wie aus der Zeit gefallen: ein Bilderbuchhafen mit Tavernen am Wasser, in denen man den Tagesfang noch vom Boot aus sieht. Beide Inseln eignen sich bestens, um das Ankermanöver zu perfektionieren, den Schwojkreis zu prüfen und die Ankerkette in Ruhe auszumessen.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Ithaka – auf den Spuren des Odysseus</h4>
            <p className="mb-4">
              Kioni gilt als einer der schönsten Orte des Ionischen Meeres: bunt getünchte Häuser, Bougainvilleen, die über Balkone ranken, und eine Uferpromenade, die abends zum Flanieren einlädt. Das Festmachen erfolgt häufig mit Buganker und Heckleinen, die Liegeplätze sind begehrt. Vathy – eine große, geschützte Naturbucht – bietet viel Raum zum Ankern und ist bei wechselhaften Bedingungen eine sichere Wahl. Wer Landgang und Kultur sucht, findet kleine Museen und stille Wege mit Blick auf die Bucht. Für den Segler ist Ithaka ein Ort zum Durchatmen, gleichzeitig ein Drehkreuz für den weiteren Kurs nach Kefalonia oder zurück Richtung Meganisi.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Kefalonia – Vielfalt auf großem Fuß</h4>
            <p className="mb-4">
              Kefalonia präsentiert sich mit spektakulärer Kalksteinküste, dichtem Grün und einer Reihe markanter Orte. Fiskardo ist der wohl bekannteste: ein eleganter Naturhafen, gesäumt von Tavernen und Boutiquen. Frühzeitiges Einlaufen ist ratsam, Fender und Leinen sollten bereitliegen, da hier reger Betrieb herrscht. Sami eignet sich als Basis für Inselausflüge; die Infrastruktur ist hervorragend, der Schutz im Hafen gut. Entlang der Ostküste locken ruhige Ankerbuchten mit klarem Wasser und sicherem Grund. Kefalonia ist auch kulinarisch ein Highlight – die Insel ist für Wein und exzellentes Olivenöl bekannt.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Paxos & Antipaxos – Türkis in Vollendung</h4>
            <p className="mb-4">
              Wer den Kurs nach Norden verlängern möchte, plant Paxos und Antipaxos ein. Lakka ist berühmt für sein leuchtend türkisfarbenes Wasser und sandigen Grund, der Anker hält hier meist auf Anhieb. Gaios bietet die Mischung aus malerischer Kulisse und lebendigem Ort mit allen Versorgungsmöglichkeiten. Aufgrund der Beliebtheit empfiehlt sich eine vorausschauende Törnplanung – insbesondere, wenn die Crew Badestopps in den Buchten von Antipaxos wünscht.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Korfu – der nordische Fixpunkt</h4>
            <p className="mb-4">
              Korfu als nördlicher Abschluss eröffnet urbane und kulturelle Facetten. Die Altstadt (UNESCO-Welterbe) ist von der Gouvia Marina gut erreichbar. Für den Segler bietet Korfu vor allem eines: eine sichere, bestens organisierte Marina, die One-Way-Optionen attraktiv macht. Gastronomisch ist die Insel ein Fest – die italienischen Einflüsse sind deutlich spürbar.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Nautische Hinweise allgemein</h4>
            <p className="mb-6">
              Das Revier ist von verlässlichen thermischen Winden geprägt. Mittags setzt häufig eine Brise ein, die am späten Nachmittag wieder abflaut. Die See bleibt dabei meist moderat, Schwell entsteht vor allem an offenen Küstenabschnitten. Das Ankermanöver mit Buganker und Heckleinen ist in vielen Häfen Standard; Landleinen in Buchten erweitern die Optionen. Der Grund besteht häufig aus Sand oder Sand-Schlick, der Halt ist in der Regel sehr gut – dennoch empfiehlt es sich, die Kette großzügig zu stecken und den Halt mit Rückwärtsfahrt zu prüfen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnvorschlag – eine Woche ab Marina Lefkada</h3>
            <p className="text-lg leading-relaxed mb-6">
              Ziel: Ein ausgewogener Mix aus entspanntem Cruisen, sicheren Nachtliegeplätzen, verlässlicher Versorgung und ausreichend Zeit für Landgänge. Der Plan ist so aufgebaut, dass Tag 1 bewusst kurz bleibt, Mitte der Woche Abwechslung bietet und Tag 7 stressfrei zum Check-out führt. Er eignet sich für Bareboat-Charter ebenso wie für Crews mit Skipper – ob Monohull oder Katamaran.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Tag 1 – Lefkada → Meganisi (Vathi oder Abelike)</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tagesidee:</strong> Ankommen, einspielen, erste Manöver. Passage durch den Lefkas-Kanal, anschließend ein kurzer Schlag ins geschützte Revier von Meganisi.</li>
                <li><strong>Abelike:</strong> Sicherer Ankergrund, Landleinen möglich; ideal zum ersten Badestopp.</li>
                <li><strong>Vathi:</strong> Liegen an der Kaimauer oder an Moorings, Tavernen und Mini-Märkte direkt am Wasser.</li>
                <li><strong>Skipper-Tipp:</strong> Nach dem Setzen des Ankers mit leichter Rückwärtsfahrt prüfen; Schwojkreis mit Landmarke oder Plotter kontrollieren.</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Tag 2 – Meganisi → Kalamos</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tagesidee:</strong> Ruhiger Vormittag, Schwimmen in einer der Ostbuchten Meganisis; bei einsetzender Brise gemütlich nach Kalamos.</li>
                <li><strong>Kalamos-Hafen:</strong> Buganker und Heckleinen; am Abend können Fallböen vom Berg stehen – Fender bereithalten.</li>
                <li><strong>Ostküstenbuchten:</strong> Natur pur, sehr klares Wasser; Landleinen geben zusätzliche Ruhe.</li>
                <li><strong>Plan B:</strong> Bei vollem Hafen frühzeitig in eine Bucht ausweichen und Landgang per Dinghy.</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Tag 3 – Kalamos → Ithaka (Kioni oder Vathy)</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tagesidee:</strong> Landschaftsreicher Kurs nach Ithaka – perfekt für Fotostopps und ein Bad in türkisfarbenen Buchten.</li>
                <li><strong>Kioni:</strong> Buganker, Heckleinen an Land; am späten Nachmittag begehrt.</li>
                <li><strong>Vathy:</strong> Große, sehr gut geschützte Naturbucht; reichlich Platz zum Ankern.</li>
                <li><strong>Skipper-Tipp:</strong> Vor dem Einlaufen kurze Systemsichtung: UKW, Ankerwinsch, Bilge; klare Kommandos an Deck halten die Manöver ruhig.</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Tag 4 – Ithaka → Kefalonia (Fiskardo oder Sami)</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tagesidee:</strong> Genusssegeln mit maritimer Kulisse. Fiskardo für das venezianische Flair, Sami für Top-Infrastruktur und Landtouren.</li>
                <li><strong>Fiskardo:</strong> Früh ankommen; reger Verkehr, seitliches Le-to-Le an der Mole möglich.</li>
                <li><strong>Sami:</strong> Übersichtlicher Hafen, Wasser/Power am Kai; Supermärkte und Mietwagen in Gehweite.</li>
                <li><strong>Landaktivitäten:</strong> Spaziergänge, kleine Boutiquen, evtl. Weingutbesuch – Griechenland von seiner genussvollen Seite.</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Tag 5 – Kefalonia – Badebucht & Erkundung</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tagesidee:</strong> Ruhetag unter Segeln: kurzer Daysail in eine ruhige Bucht, Schnorcheln, Lesen im Cockpit.</li>
                <li><strong>Variante für Ambitionierte:</strong> Längerer Schlag entlang der Ostküste, Segeltrimm üben (Reffmanagement, Wende-/Halse-Taktik), anschließend wieder in eine geschützte Ankerbucht.</li>
                <li><strong>Service:</strong> Eis, Wasser und frisches Brot bekommt der Proviantmeister morgens in den Orten am Kai – ideal, um die Kühlboxen nachzufüllen.</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Tag 6 – Kefalonia → Kastos</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tagesidee:</strong> Ein klassischer Brisentag im Ionischen Meer. Nach dem Mittag baut sich meist eine angenehme Thermik auf – ideal, um Höhe zu machen und dabei komfortabel zu segeln.</li>
                <li><strong>Kastos-Hafen:</strong> Charmanter Anleger direkt vor den Tavernen; abends ruhig.</li>
                <li><strong>Buchten an der Ostküste:</strong> Landleinen empfohlen; traumhafte Morgenbäder garantiert.</li>
                <li><strong>Skipper-Tipp:</strong> Bei Brise frühzeitig ein erstes Reff im Groß setzen. Komfort geht vor Knoten – besonders mit Familie an Bord.</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Tag 7 – Kastos → Lefkada</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tagesidee:</strong> Gemütliche Rückreise entlang der geschützten Inselküsten; ein letzter Badestopp vor Meganisi bietet Urlaubsfinale pur.</li>
                <li><strong>Ablauf in der Marina:</strong> Fuel-Dock ansteuern, dann Check-out (Ausrüstung, Papiere, kurze Techniksicht). Wer mag, reserviert vorab einen Tisch für das Farewell-Dinner.</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Optional: Erweiterungen & Alternativen</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Nord-Variante:</strong> Bei sportlicher Crew kann eine zusätzliche Etappe Richtung Paxos/Antipaxos eingeplant werden (mehr Segeletappen, weniger Landgänge).</li>
              <li><strong>Familien-Variante:</strong> Längere Aufenthalte in Meganisi und Ithaka für mehr Badezeit und kürzere Schläge.</li>
              <li><strong>Katamaran-Charter:</strong> Durch geringen Tiefgang eröffnen sich flache Buchten; auf Schwojkreis und umliegende Yachten achten.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Organisation & Seemannschaft (Kurzcheck)</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Wetterfenster am Vorabend prüfen; lokale Thermik und eventuelle Gewitterlinien beachten.</li>
              <li>Ankerdisziplin: Kette großzügig stecken, Halt prüfen, Bezugspunkte peilen oder Ankeralarm im Plotter setzen.</li>
              <li>Hafenmanöver: Buganker sauber fallen lassen, Heckleinen früh bereitlegen; Fenderhöhe an Kaimauern variieren.</li>
              <li>Crewbriefing: Dinghy- und Badeleiterregeln, Sonnen- und Hitzemanagement, klare Handzeichen für Manöver.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen</h3>
            <p className="text-lg leading-relaxed mb-6">
              Überblick: Das Revier rund um Lefkada ist bekannt für ruhige See, eine verlässliche thermische Brise und gutmütige Verhältnisse – ideale Voraussetzungen für Segeln ab Lefkada mit Einsteigern, Familien und Genussseglern. Gleichzeitig bietet die Tagesbrise genug Druck, damit auch erfahrene Skipper Spaß haben.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Tagesverlauf der Brise (typischer Sommer)</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Morgen:</strong> Häufig sehr ruhig, teils spiegelglattes Wasser – perfekt für Badestopp, Frühstück vor Anker und kurze Verlegemanöver.</li>
              <li><strong>Mittag bis später Nachmittag:</strong> Aufbau der Maistros-Brise, meist aus NW. Angenehm segelbar, selten ruppig; bei offenen Küstenabschnitten kann leichter Schwell stehen.</li>
              <li><strong>Abend/Nacht:</strong> Abflauen der Thermik, in Buchten ruhige Nächte. Lokal können Land- und Seewind-Zirkulationen für leichte Dreher sorgen.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Saisonalität</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Frühling (April–Mai):</strong> Milde Temperaturen, variablere Gradientwinde. Segler genießen freie Häfen und sattgrüne Inseln. Kurze Flautenphasen sind normal; Maschine als Brückenlösung einkalkulieren.</li>
              <li><strong>Sommer (Juni–September):</strong> Stabiler Maistros, überwiegend moderater Seegang. Thermik setzt verlässlich ein – ein Pluspunkt für planbare Bareboat-Charter.</li>
              <li><strong>Herbst (Oktober):</strong> Warmes Wasser, lebendige Brisen. Einzelne Gewitterlagen möglich; Wetterfenster beobachten, rechtzeitig abwettern und notfalls einen Hafentag einlegen.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Lokale Effekte & Mikrometeorologie</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Düsen- und Kap-Effekte:</strong> An Kaps und zwischen Inseln kann der Wind kurzzeitig zunehmen; Segeltrimm anpassen, ggf. Reff vorbereiten.</li>
              <li><strong>Fallböen:</strong> In Häfen mit steilen Hängen (z. B. Kalamos) treten abends Böen vom Land auf – Heckleinen sauber fahren, Fender auf Arbeits- und Ruhehöhe einstellen.</li>
              <li><strong>Buchten-Mikroklima:</strong> Geschützte Ankerplätze bleiben oft deutlich ruhiger als freie See; bei Landwind Dreher beachten, Schwojkreis frei halten.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Seegang & Sicht</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Der Seegang ist im Inselschutz meist ruhig bis leicht; kurze Wellenfelder entstehen vor offenen Abschnitten.</li>
              <li>Die Sicht ist in der Regel sehr gut – ein Plus für die Navigation auf Sicht und das frühzeitige Erkennen von Engstellen und Fischfarmen.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Empfehlungen nach Erfahrungsstufe</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Einsteiger & Familien:</strong> Am Vormittag verlegen, am Nachmittag die Brise nutzen – so bleibt der Tag entspannt. In beliebten Häfen früh einlaufen oder bewusst Ankern auf gutem Grund.</li>
              <li><strong>Genusssegler:</strong> Leichte bis mittlere Brise für Cruising mit Wohlfühlfaktor. Reffmanagement konservativ halten; Komfort schlägt Geschwindigkeit.</li>
              <li><strong>Ambitionierte Crews:</strong> Nachmittags längere Schläge einplanen, Trimm- und Manövertraining (Wenden/Halsen, Code Zero/Gennaker sofern vorhanden) kombiniert mit Badestopps.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Sicherheits- und Komfortcheck bei Wetterumschwung</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Vorbereitung:</strong> Vor dem Ablegen Wetterbericht, Barometertrend und Radarbild (sofern vorhanden) prüfen.</li>
              <li><strong>Anker:</strong> Kettenlänge anpassen, möglichst sandigen Grund wählen, Halt per Rückwärtsfahrt testen; Ankeralarm setzen.</li>
              <li><strong>Segelplan:</strong> Reffpunkte markieren, Vorsegel ggf. eine Stufe kleiner fahren; Crew auf Manöver vorbereiten, Lifelines bereit halten.</li>
              <li><strong>Hafenalternative:</strong> Für jeden Schlag eine Plan-B-Bucht oder einen All-Weather-Ankerplatz parat haben.</li>
            </ul>

            <p className="text-lg leading-relaxed mb-8">
              <strong>Hinweis:</strong> Auch wenn die Yachtcharter Lefkas für ihr gutmütiges Wetter bekannt ist, gilt die goldene Regel: Gute Seemannschaft und vorausschauende Planung sind der Schlüssel zu einem sicheren, genussvollen Törn im Ionischen Meer.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die angenehmsten Monate für Yachtcharter auf den Ionischen Inseln sind im Allgemeinen Mai, Juni, September und Oktober. In diesen Zeiträumen treffen verlässliche Winde auf moderate Temperaturen und ein überschaubares touristisches Aufkommen. Die Häfen sind belebt, aber nicht überlaufen; in beliebten Buchten gibt es bis in den Nachmittag hinein ausreichend Platz.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Im Juli und August herrscht Hochsaison. Wer in dieser Zeit segelt, plant am besten frühzeitiges Einlaufen oder entscheidet sich bewusst für das Ankern auf gutem Grund, um dem Hafenrummel auszuweichen. Der Vorteil: lange, warme Abende an Deck, ein lebendiges Treiben an Land und eine große Auswahl an geöffneten Tavernen.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Im Frühjahr locken Ruhe und grüne Landschaft, im Herbst warmes Wasser und goldene Lichtstimmungen – beide Übergangszeiten sind ideal für Genießer und Fotografen, die die Inseln von ihrer ursprünglichsten Seite erleben wollen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit – Warum Yachtcharter auf den Ionischen Inseln?</h3>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><strong>Entspannte Segelbedingungen:</strong> Die Ionischen Inseln sind das Synonym für stressfreies Cruisen. Thermische Brisen sorgen für Segelspaß ohne Härte, die See bleibt in der Regel moderat, und durch die Inselketten sind lange, unbequeme Querungen selten nötig.</li>
              <li><strong>Malerische Küsten & geschützte Buchten:</strong> Ob Meganisi, Kastos oder Ithaka – die Buchten bieten klarstes Wasser, sicheren Ankergrund und kulissenreife Ufer. Viele Orte erlauben das Liegen mit Heckleinen an Land; so bleibt die Yacht ruhig, und das Dinghy ist schnell im Wasser.</li>
              <li><strong>Mediterranes Flair & Kulinarik:</strong> Vom Espresso am Morgen an der Kaimauer bis zum Fisch aus der Tagesauslage am Abend – das Leben spielt sich am Wasser ab. Wer Kultur sucht, findet sie in venezianisch geprägten Gassen, kleinen Museen und Klöstern auf den Höhen.</li>
              <li><strong>Nautische Infrastruktur:</strong> Marinas und kommunale Häfen sind verlässlich ausgestattet; Water & Power am Steg, Fuel-Docks, Chandlers und Werften erleichtern die Bordroutine. Ein reibungsloser Check-in/Check-out, Proviantservice und Transfers machen den Start in den Törn entspannt.</li>
              <li><strong>Flexibilität für jede Crew:</strong> Einsteiger genießen kurze Schläge und planbare Bedingungen; erfahrene Skipper erweitern den Radius nach Norden und verbinden Segelspaß mit Seemannschaft auf hohem Niveau. Monohull oder Katamaran, Bareboat oder Skipper – das Revier passt sich der Crew an, nicht umgekehrt.</li>
            </ul>

            <p className="text-lg leading-relaxed mb-8">
              Kurz: Wer die Yachtcharter ab Lefkada wählt, entscheidet sich für ein Revier, das den Begriff "Urlaub unter Segeln" mit Inhalt füllt – authentisch, genussvoll und mit genügend maritimer Substanz, um die Segel-Seele lange zu nähren.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Jetzt Törn anfragen</h3>
            <p className="text-lg leading-relaxed mb-6">
              Bereit, Kurs auf die Ionischen Inseln zu setzen? Teilen Sie uns Crewgröße, Reisetermin und Wunsch-Yachtklasse mit – ob sportlicher Monohull oder komfortabler Katamaran, Bareboat oder mit Skipper. Wir beraten professionell, erstellen eine maßgeschneiderte Routenempfehlung passend zu Wind und Crewprofil, reservieren Liegeplätze, organisieren Transfer und Proviantservice und geben praxiserprobte Anlege- und Ankerei-Tipps für jeden Hafen Ihres Plans.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Jetzt unverbindlich anfragen – und die Leinen loswerfen, sobald Sie an Bord kommen. Ihr Törn ab Lefkada wartet: klarer Kurs, sichere Buchten, mediterranes Lebensgefühl.
            </p>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Inseln & Häfen</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{city}</p>
              </div>)}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>)}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Ionischen Inseln?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die grünen Perlen Westgriechenlands mit sanften Winden 
              und familienfreundlichen Segelbedingungen.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Ionische Inseln Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default IonicIslands;