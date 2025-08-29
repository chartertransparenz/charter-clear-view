
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import caribbean from "@/assets/caribbean.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Cuba = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Große Antillen" },
    { icon: Calendar, label: "Beste Zeit", value: "November-April" },
    { icon: Users, label: "Geeignet für", value: "Erfahrene Segler" },
    { icon: Anchor, label: "Besonderheit", value: "Authentische Karibikkultur" }
  ];

  const regions = [
    {
      name: "Kuba",
      link: "/reviere/karibik/charter-standorte/havanna",
      description: "Die größte Karibikinsel mit authentischer Kultur",
      cities: ["Havanna", "Cienfuegos", "Trinidad", "Cayo Largo"]
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/f8c4f172-fe99-4b84-a4e0-028fe453b795.png"
          alt="Kubanische Architektur mit Blick aufs Meer - Cienfuegos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇨🇺 Kuba</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kuba</h1>
            <p className="text-xl max-w-2xl">
              Die authentische Perle der Karibik
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/karibik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Karibik
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
                <BreadcrumbLink asChild>
                  <Link to="/#reviere">Reviere</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/karibik">Karibik</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Kuba</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Hauptbeschreibung */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Kuba: Segeln im authentischen Herzen der Karibik ab Cienfuegos</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Kuba – ein Land, das wie kein anderes die Zeit angehalten zu haben scheint, ein lebendiges Museum voller Geschichte, pulsierender Rhythmen und einer unvergleichlichen Authentizität. Doch Kuba ist auch ein Seglerparadies der besonderen Art, ein Revier für Entdecker, die das Abenteuer abseits ausgetretener Pfade suchen. Ein Yachtcharter ab Cienfuegos an Kubas Südküste ist eine Einladung, in eine Welt einzutauchen, in der unberührte Natur auf koloniale Pracht, karibische Gelassenheit auf revolutionären Geist und kristallklares Wasser auf geheimnisvolle Korallenriffe trifft.
              </p>
              
              <p>
                Vergessen Sie die ausgetretenen Pfade der touristischen Hotspots. Hier, im Archipiélago de los Canarreos, segeln Sie durch ein Labyrinth aus Hunderten von Cayos (kleinen Inseln), die von Mangroven gesäumt sind und von einem der gesündesten Korallenriffe der Karibik geschützt werden. Jeder Tag bringt neue Horizonte: einsame Ankerbuchten, in denen Sie der einzige Besucher sind, unberührte Sandstrände, die zum Spazierengehen einladen, und eine faszinierende Unterwasserwelt, die darauf wartet, erkundet zu werden.
              </p>
              
              <p>
                Ein Yachtcharter in Kuba ist kein gewöhnlicher Segelurlaub. Es ist eine Reise, die Geduld und Flexibilität erfordert, aber mit unvergleichlichen Erlebnissen belohnt wird. Es ist die perfekte Wahl für erfahrene Segler, die autarke Törns lieben, für Naturliebhaber, die die Stille und Schönheit unberührter Landschaften schätzen, und für Abenteurer, die tief in eine einzigartige Kultur eintauchen möchten.
              </p>

              {/* Strand-Bild */}
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/lovable-uploads/697bcf13-dfd0-497a-a399-232cf2a1c1ed.png"
                  alt="Traumhafter kubanischer Strand mit türkisfarbenem Wasser"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="bg-gray-50 p-4">
                  <p className="text-gray-700 italic text-center">
                    Verlieben Sie sich in kubanische Traumstrände – pudriger, weißer Sand unter den Füßen, Palmen im warmen Passatwind und ein endloses Türkis, das nach einem Sprung ins Wasser ruft.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cienfuegos: Ihr Tor zum kubanischen Segelabenteuer</h2>
              
              <p>
                Ihre Reise beginnt in Cienfuegos, einer Stadt, die selbst ein UNESCO-Weltkulturerbe ist. Gelegen an einem der größten und schönsten Naturhäfen Kubas, ist Cienfuegos der ideale Ausgangspunkt für Ihren Yachtcharter an der Südküste.
              </p>
              
              <p>
                Die Stadt, oft als "Perle des Südens" bezeichnet, besticht durch ihre französisch geprägte Kolonialarchitektur, breite Boulevards und eine entspannte Atmosphäre. Bevor Sie die Leinen loswerfen, lohnt sich ein Spaziergang durch das historische Zentrum, ein Besuch des Terry Theaters oder ein Bummel entlang des Malecón.
              </p>
              
              <p>
                Die Marina Cienfuegos ist die Hauptbasis für Yachtcharter in dieser Region. Hier finden Sie eine Auswahl an modernen Segel- und Motoryachten sowie Katamaranen, die von lokalen und internationalen Anbietern betreut werden. Die Marina bietet grundlegende Dienstleistungen und ist der letzte Punkt für eine umfassende Proviantierung, bevor Sie in die Abgeschiedenheit der Cayos aufbrechen.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Das Segelrevier Süd-Kuba: Authentizität und Natur pur</h2>
              
              <p>
                Das Revier südlich von Cienfuegos, insbesondere das Archipiélago de los Canarreos mit Cayo Largo del Sur als zentralem Punkt, ist ein Naturparadies, das sich durch seine Ursprünglichkeit und Abgeschiedenheit auszeichnet.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Reviercharakter und Besonderheiten</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Robinson-Feeling:</strong> Im Gegensatz zu den touristisch stark entwickelten Regionen der Karibik bietet Kuba ein echtes Robinson-Crusoe-Erlebnis. Viele Cayos sind unbewohnt oder nur spärlich besiedelt. Die Infrastruktur außerhalb von Cayo Largo ist minimal.</li>
                <li><strong>Glasklares Wasser & Flache Riffe:</strong> Die Gewässer sind von außergewöhnlicher Klarheit und bieten hervorragende Sicht auf die ausgedehnten Seegrasfelder und flachen Korallenriffe. Dies macht das Revier zu einem Paradies für Schnorchler und Taucher.</li>
                <li><strong>Autarkes Segeln:</strong> Da die Versorgungsmöglichkeiten auf den Inseln begrenzt sind, ist eine sorgfältige Planung und eine autarke Bordorganisation unerlässlich. Proviant, Wasser und Treibstoff müssen für die gesamte Dauer des Törns mitgeführt oder in Cienfuegos bzw. Cayo Largo gebunkert werden.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Navigation und Ankerplätze</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sichtnavigation ist König:</strong> Die Navigation im Archipel erfordert besondere Aufmerksamkeit. Viele Bereiche sind flach, und Korallenköpfe können unerwartet auftauchen. Eine präzise Tageslicht-Navigation ist zwingend erforderlich, insbesondere bei der Ansteuerung von Buchten und Riffeinfahrten. Segeln bei Nacht in den Riffgebieten sollte vermieden werden.</li>
                <li><strong>Offline-Karten & Pilot Books:</strong> Verlassen Sie sich nicht allein auf elektronische Karten. Aktuelle Papierkarten und detaillierte Pilot Books sind unverzichtbar. Laden Sie Offline-Karten und nautische Informationen auf Tablets oder Smartphones herunter.</li>
                <li><strong>Ankern:</strong> Die meisten Übernachtungen erfolgen vor Anker auf sandigem Grund. Ein guter Anker, ausreichend Kette und ein verlässliches Ankerlicht sind obligatorisch. Mooring-Bojen gibt es nur an wenigen ausgewählten Spots, hauptsächlich in Cayo Largo.</li>
                <li><strong>Kommunikation:</strong> UKW-Funk ist das gängige Kommunikationsmittel. Mobilfunknetz und Internetzugang sind außerhalb der Marinas und größerer Orte sehr begrenzt oder nicht vorhanden.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Proviantierung und Versorgung</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Umfassende Proviantierung in Cienfuegos:</strong> Dies ist der wichtigste Tipp für einen Kuba-Charter. Decken Sie sich in Cienfuegos mit allen notwendigen Lebensmitteln, Getränken und Verbrauchsmaterialien für die gesamte Dauer Ihres Törns ein. Die Auswahl kann variieren, daher ist Flexibilität gefragt. Frische Produkte wie Obst, Gemüse und Fisch können auf lokalen Märkten erworben werden.</li>
                <li><strong>Cayo Largo als Versorgungsstützpunkt:</strong> Die Marina auf Cayo Largo del Sur ist der einzige Ort im Archipel, an dem Sie Treibstoff, Wasser und eingeschränkt auch Proviant nachbunkern können. Planen Sie Ihre Route entsprechend.</li>
                <li><strong>Ersatzteile und Werkzeug:</strong> Ein gut ausgestattetes Bord-Toolkit und kritische Ersatzteile (Impeller, Filter, Riemen) sind empfehlenswert, da die Verfügbarkeit von Technikern und Ersatzteilen auf den Cayos begrenzt ist.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Für wen ist das Revier geeignet?</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ideal für:</strong> Erfahrene Skipper und Crews, die Freude an naturbetontem Segeln, Tageslicht-Navigation im Flachwasser, autarker Bordorganisation und der Entdeckung unberührter Orte haben. Wer das "echte" Kuba abseits der Touristenpfade erleben möchte, ist hier genau richtig.</li>
                <li><strong>Möglich mit Skipper:</strong> Für weniger erfahrene Crews ist es ratsam, einen lokalen Skipper für die ersten Tage oder den gesamten Törn zu buchen. Ein ortskundiger Skipper erleichtert nicht nur die Navigation in den Riffgebieten, sondern auch die Behördenwege und den Kontakt zu den Einheimischen.</li>
                <li><strong>Weniger geeignet für:</strong> Crews, die einen Party-Törn oder spontanes Restaurant-Hopping erwarten. Die Kulinarik ist eher einfach, aber authentisch.</li>
              </ul>

              {/* Havanna-Bild */}
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/lovable-uploads/39f41d29-fb20-46ee-a388-651dee246b70.png"
                  alt="Bunte Oldtimer vor kolonialer Architektur in Havanna"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="bg-gray-50 p-4">
                  <p className="text-gray-700 italic text-center">
                    Erleben Sie Havanna, wo bunte Oldtimer wie rollende Zeitkapseln an pastellfarbenen Fassaden vorbeigleiten und jede Fahrt sich anfühlt wie eine Filmszene.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Regeln, Vorschriften und Formalitäten: Segeln in Kuba</h2>
              
              <p>
                Das Segeln in Kuba erfordert die Beachtung spezifischer Regeln und Formalitäten, die sich von anderen Karibikrevieren unterscheiden können. Geduld und Kooperation sind hier der Schlüssel.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Clearance und Checkpoints</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Einklarieren:</strong> Bei Ankunft in Kuba (oder beim Start des Charters) müssen Sie in einem offiziellen Port of Entry vollständig einklarieren. In Cienfuegos erledigt dies die Charterbasis. Immigration, Zoll und Hafenamt sind die zuständigen Behörden. Die gesamte Crew muss an Bord bleiben, bis die Clearance abgeschlossen ist.</li>
                <li><strong>Meldepflicht:</strong> Bewegungen zwischen den Navigationszonen und das Anlaufen bestimmter Checkpoints (z.B. in Cayo Largo) müssen gemeldet und dort registriert werden. Die Charterbasis wird Sie über die aktuellen Prozeduren informieren.</li>
                <li><strong>Crewwechsel:</strong> Alle Crewwechsel sind meldepflichtig und müssen den Behörden angezeigt werden.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Erforderliche Dokumente</h3>
              
              <p>Halten Sie folgende Dokumente stets griffbereit und in Kopie bereit:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Reisepässe:</strong> Gültige Reisepässe für alle Personen an Bord.</li>
                <li><strong>Bootsdokumente:</strong> Schiffsregistrierung, Versicherungsnachweis (Haftpflichtversicherung mit ausreichender Deckung), Chartervertrag.</li>
                <li><strong>Crewliste:</strong> Eine vom Hafenamt abgestempelte Crewliste mit allen Passagierdaten.</li>
                <li><strong>Skipperlizenz:</strong> Eine von der Charterfirma akzeptierte Skipperlizenz (z.B. SKS, RYA Yachtmaster oder ICC) und ggf. ein gültiges Funkzeugnis (SRC/LRC).</li>
                <li><strong>Vollmacht:</strong> Bei Bareboat-Chartern eine Vollmacht des Eigners/der Charterfirma, dass Sie das Schiff führen dürfen. Bekommt man beim Vercharterer</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Navigations- und Verhaltensregeln</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Navigationszonen:</strong> Bestimmte Schutzgebiete, wie Teile der Jardines de la Reina, haben sehr strikte Regeln und sind oft nur mit lizenzierten lokalen Anbietern oder speziellen Genehmigungen zugänglich. Informieren Sie sich vorab.</li>
                <li><strong>Nachtfahrten:</strong> Aufgrund der vielen Flachs und Korallenköpfe sind Nachtfahrten in den Riffgebieten nicht empfohlen.</li>
                <li><strong>Angeln & Tauchen:</strong> Informieren Sie sich über lokale Bestimmungen. In Schutzgebieten sind Spearfishing und das Berühren von Korallen streng verboten.</li>
                <li><strong>Währung:</strong> Kuba hat eine komplexe Währungssituation. Für Charterzahlungen wird meist Euro akzeptiert. Für kleinere Ausgaben an Land ist es ratsam, lokale Währung zu haben. Kreditkartenakzeptanz ist eingeschränkt.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Highlights des Reviers: Von Cayos bis Korallenriffen</h2>
              
              <p>Das Segelrevier südlich von Cienfuegos ist ein Schatzkästchen voller natürlicher und kultureller Highlights.</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cayo Largo del Sur:</strong> Das Herzstück des Archipiélago de los Canarreos. Hier finden Sie die einzige Marina im Revier, die grundlegende Versorgung (Treibstoff, Wasser, eingeschränkt Proviant), Immigration und Restaurants bietet. Cayo Largo ist bekannt für seine weiten, weißen Sandstrände und das kristallklare Wasser.</li>
              </ul>

              {/* Cayo Largo-Bild */}
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/lovable-uploads/065ef7b6-04d2-42cd-9d89-8af299c29ed5.png"
                  alt="Paradiesischer Strand auf Cayo Largo mit türkisfarbenem Wasser und Palmen"
                  className="w-full max-w-prose mx-auto h-64 md:h-80 object-cover"
                />
                <div className="bg-gray-50 p-4">
                  <p className="text-gray-700 italic text-center">
                    Auf Cayo Largo stehen Sie auf feinem, weißem Sand, blicken auf klares Türkis und genießen einfach Ruhe, Platz und entspanntes Abschalten.
                  </p>
                </div>
              </div>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cayos Rosario, Cantiles, Rico, Iguana:</strong> Diese und weitere kleine Inseln bieten traumhafte Sandbänke, türkisfarbene Flachwasserbereiche und oft eine beeindruckende Tierwelt, darunter Leguane und verschiedene Vogelarten. Die Cayos sind ideal für entspannte Ankerstopps, Schwimmen und Sonnenbaden.</li>
                <li><strong>Canarreos-Riffe:</strong> Die Unterwasserwelt ist spektakulär. Die Patch-Riffe sind von bunten Hartkorallen bedeckt und beherbergen eine reiche Vielfalt an Meereslebewesen, darunter Rochen, Schildkröten, Barrakudas und Ammenhaie. Die Sicht ist oft exzellent, was das Schnorcheln und Tauchen zu einem unvergesslichen Erlebnis macht.</li>
                <li><strong>Jardines de la Reina:</strong> Weiter östlich liegt dieses streng geschützte Marinegebiet, das als eines der besten Tauchgebiete der Welt gilt, bekannt für seine intakten Riffe und Haipopulationen. Der Zugang ist hier jedoch stark reglementiert und meist nur mit spezialisierten Anbietern möglich.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Wetter & Windbedingungen: Im Rhythmus der Passatwinde</h2>
              
              <p>Das Klima in Kuba ist tropisch, mit zwei Hauptsaisons:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Trockenzeit (November - April):</strong> Dies ist die beste Zeit für Yachtcharter. Das Wetter ist stabil, sonnig und trocken. Die Temperaturen sind angenehm warm (ca. 25-30°C), und die Luftfeuchtigkeit ist geringer. Die Passatwinde aus Nordost sind in dieser Zeit am beständigsten und wehen meist mit 15-25 Knoten, was für hervorragende Segelbedingungen sorgt.</li>
                <li><strong>Regenzeit (Mai - Oktober):</strong> In dieser Zeit ist die Luftfeuchtigkeit höher, und es kann zu kurzen, aber intensiven tropischen Regenschauern kommen. Die Winde sind tendenziell etwas schwächer und variabler. Dies ist auch die Hurrikansaison, wobei das höchste Risiko zwischen August und Oktober liegt.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Törnvorschläge: Ihr Kuba-Abenteuer ab Cienfuegos</h2>
              
              <p>Diese Routenvorschläge sind Beispiele und können je nach Wind- und Wetterbedingungen sowie den Vorlieben der Crew angepasst werden. Sie konzentrieren sich auf das Archipiélago de los Canarreos.</p>

              <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-4 rounded-r-lg mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1 Woche: Fokus Canarreos-Archipel (ab Cienfuegos)</h3>
                
                <ul className="space-y-2">
                  <li><strong>Tag 1:</strong> Anreise nach Cienfuegos, Check-in in der Marina. Umfassende Proviantierung. Erste Nacht an Bord in der Marina.</li>
                  <li><strong>Tag 2:</strong> Cienfuegos → Cayo Largo del Sur (ca. 50-60 sm). Längerer Schlag nach Cayo Largo, dem zentralen Hub des Archipels. Einklarieren bei den Behörden.</li>
                  <li><strong>Tag 3:</strong> Cayo Largo & Umgebung. Erkunden Sie die wunderschönen Strände von Cayo Largo, wie Playa Sirena oder Playa Paraíso. Schnorcheln und Entspannen.</li>
                  <li><strong>Tag 4:</strong> Cayo Largo → Cayo Rico / Cayo Iguana. Kurzer Schlag zu diesen malerischen Cayos. Ankern in türkisfarbenem Wasser, Besuch der Leguane auf Cayo Iguana.</li>
                  <li><strong>Tag 5:</strong> Cayo Rico / Cayo Iguana → Cayos Rosario / Cantiles. Segeln zu diesen Inseln, bekannt für ihre unberührten Strände und gute Schnorchelmöglichkeiten an den Rändern der Riffe.</li>
                  <li><strong>Tag 6:</strong> Cayos Rosario / Cantiles → Cayo Largo. Rückkehr nach Cayo Largo. Proviant und Wasser auffüllen, letzte Gelegenheit für einen Restaurantbesuch.</li>
                  <li><strong>Tag 7:</strong> Cayo Largo → Cienfuegos. Längerer Rückschlag zur Basis. Yachtübergabe und Abreise.</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-4 rounded-r-lg mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2 Wochen: Canarreos & weitere Erkundungen (ab Cienfuegos)</h3>
                
                <ul className="space-y-2">
                  <li><strong>Woche 1:</strong> Folgen Sie der 1-Wochen-Route bis einschließlich Tag 7.</li>
                  <li><strong>Tag 8:</strong> Cienfuegos → Cayo Guano del Este. Segeln Sie zu dieser abgelegenen Insel, bekannt für ihren Leuchtturm und die unberührte Natur.</li>
                  <li><strong>Tag 9:</strong> Cayo Guano del Este → Cayo Breton. Weiter östlich zu dieser größeren Insel, die Teil eines Marineparks ist und hervorragende Tauch- und Schnorchelmöglichkeiten bietet.</li>
                  <li><strong>Tag 10:</strong> Cayo Breton → Cayo Caballones. Erkunden Sie die östlichsten Ausläufer des Archipels, ein Gebiet von großer natürlicher Schönheit und Abgeschiedenheit.</li>
                  <li><strong>Tag 11:</strong> Cayo Caballones → Cayo Rosario. Rückkehr in die zentraleren Bereiche der Canarreos.</li>
                  <li><strong>Tag 12:</strong> Cayo Rosario → Cayo Largo del Sur. Ankunft in Cayo Largo, letzte Gelegenheit zur Versorgung und für Behördengänge.</li>
                  <li><strong>Tag 13:</strong> Cayo Largo del Sur (Lay Day). Entspannung, ausgedehntes Schnorcheln, Besuch der Schildkrötenfarm oder einfach die Seele baumeln lassen.</li>
                  <li><strong>Tag 14:</strong> Cayo Largo del Sur → Cienfuegos. Längerer Rückschlag zur Basis. Yachtübergabe und Abreise.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Praktische Tipps für Ihren Kuba-Charter</h2>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Geduld und Flexibilität:</strong> Abläufe können in Kuba länger dauern als gewohnt. Eine entspannte Einstellung und Flexibilität sind entscheidend für einen gelungenen Törn.</li>
                <li><strong>Bargeld:</strong> Kreditkartenakzeptanz ist begrenzt. Nehmen Sie ausreichend Bargeld mit.</li>
                <li><strong>Kommunikation:</strong> UKW-Funk ist wichtig. Informieren Sie Ihre Familie über begrenzte Erreichbarkeit.</li>
                <li><strong>Sicherheit:</strong> Ein Ersatzanker, ausreichend Kette und ein gut gewartetes Dinghi sind unerlässlich.</li>
                <li><strong>Erfahrungsberichte:</strong> Viele Charterer berichten von positiven Erfahrungen, oft mit der Empfehlung, die erste Passage nach Cayo Largo mit einem lokalen Skipper zu machen.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Fazit: Kuba – Ein Segeltraum für Anspruchsvolle</h2>
              
              <p>
                Ein Yachtcharter in Kuba ist eine einzigartige Erfahrung, die alle Sinne anspricht. Es ist die Freiheit, in einem der letzten unberührten Segelreviere der Karibik zu navigieren, umgeben von atemberaubender Natur und einer faszinierenden Kultur. Es ist die perfekte Wahl für Segler, die das Abenteuer suchen und bereit sind, sich auf ein authentisches, unvergessliches Erlebnis einzulassen.
              </p>
              
              <p>
                Sind Sie bereit, die Segel zu setzen und das authentische Kuba vom Wasser aus zu entdecken?
              </p>
              
              <p>
                Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Kuba an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
              </p>

              {/* CTA im Textbereich */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 rounded-lg shadow-lg text-center mt-8">
                <h3 className="text-xl font-bold mb-3">
                  Bereit für authentisches Kuba?
                </h3>
                <p className="mb-4 text-blue-100">
                  Entdecken Sie die authentische Seite der Karibik mit ihrer 
                  lebendigen Kultur und unberührten Naturschönheiten.
                </p>
                <CharterRequestForm>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                    Kuba Charter anfragen
                  </Button>
                </CharterRequestForm>
              </div>
            </div>
          </div>
        </div>

        {/* Charter Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="block hover:no-underline group max-w-2xl mx-auto">
                <Card className="shadow-lg h-full group-hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-green-200 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-green-700 group-hover:text-green-800" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-700">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700">{region.description}</p>
                    {region.cities && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Verfügbare Charter-Standorte:</div>
                        <div className="grid grid-cols-2 gap-2">
                          {region.cities.map((city, idx) => (
                            <div key={idx} className="text-sm text-green-700 font-medium group-hover:text-green-800">
                              • {city}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="text-sm text-green-700 font-medium group-hover:text-green-800 flex items-center gap-1">
                      → Charter-Informationen & Marinas
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cuba;
