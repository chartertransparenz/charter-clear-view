import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import TerritoryMap from "@/components/TerritoryMap";
import caribbean from "@/assets/caribbean.jpg";
const Bahamas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Charter-Standorte",
    value: "Nassau, Georgetown"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "November-April"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Kristallklares Wasser"
  }];
  const charterBases = [{
    name: "Nassau",
    description: "Hauptstadt der Bahamas mit exzellenter Charter-Infrastruktur",
    highlights: ["Paradise Island", "Cable Beach", "Straw Market", "Atlantis Resort"]
  }, {
    name: "Georgetown (Exumas)",
    description: "Tor zu den spektakulären Exuma Cays",
    highlights: ["Swimming Pigs", "Iguana Beach", "Thunderball Grotto", "Staniel Cay"]
  }];
  const sailingHighlights = ["Türkisfarbenes, kristallklares Wasser", "Unberührte Sandbänke und Cays", "Line-of-sight Navigation", "Schwimmende Schweine auf Big Major Cay", "Perfekte Ankerplätze und Buchten", "Warmes, tropisches Klima", "Exzellente Schnorchel- und Tauchgebiete"];
  const popularRoutes = ["Nassau - Rose Island - Green Cay", "Exumas: Georgetown - Staniel Cay - Compass Cay", "Nassau - Highbourne Cay - Normans Cay", "Eleuthera: Governor's Harbor - Spanish Wells"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/72646193-1d57-47bd-adcd-0db66bb17fb7.png" alt="Bahamas Yacht Charter" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇧🇸 Bahamas</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bahamas</h1>
            <p className="text-xl max-w-2xl">
              Paradiesisches Segeln im kristallklaren Wasser der Karibik
            </p>
          </div>
        </div>
        <Link to="/reviere/amerika-bahamas" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Amerika & Bahamas
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
                <BreadcrumbLink href="/reviere/amerika-bahamas">Amerika & Bahamas</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Bahamas</BreadcrumbPage>
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

        {/* Territory Map */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Die Inselwelt der Bahamas</h2>
              <TerritoryMap
                region="Bahamas"
                center={{ lat: 25.0443, lng: -77.3504 }}
                zoom={7}
                maptype="satellite"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Yachtcharter Bahamas: Segeln im Paradies der 700 Inseln – Ihr Traumtörn im türkisfarbenen Herzen der Karibik</h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Die Bahamas – ein Name, der Sehnsüchte weckt und Bilder von unberührten Paradiesen heraufbeschwört. Ein Archipel von über 700 Inseln und 2.400 Cays, die wie smaragdgrüne Juwelen im tiefblauen Atlantik liegen. Ein Yachtcharter auf den Bahamas ist weit mehr als ein gewöhnlicher Segelurlaub; es ist eine Einladung, in eine Welt einzutauchen, in der glasklares Wasser auf malerische, oft menschenleere Strände, exotische Flora und Fauna, traumhafte Ankerplätze und eine herzliche Gastfreundschaft trifft. Hier, wo die Zeit stillzustehen scheint und jeder Sonnenuntergang ein Meisterwerk der Natur ist, erwartet Sie ein Segelabenteuer, das alle Ihre Sinne berühren wird.
              </p>
              <p>
                Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina in Nassau oder Marsh Harbour, lassen die lebhafte Atmosphäre hinter sich und nehmen Kurs auf eine Inselwelt, die einem Märchen gleicht. Jeder Tag bringt neue Horizonte: malerische Buchten, die zum Schnorcheln und Schwimmen einladen, einsame Sandbänke, die nur für Sie allein zu sein scheinen, und die Möglichkeit, die einzigartige marine Tierwelt hautnah zu erleben – von schwimmenden Schweinen bis zu majestätischen Mantarochen.
              </p>
              <p>
                Die Bahamas bieten eine unvergleichliche Vielfalt an Segelrevieren, die für jeden Geschmack und jede Erfahrungsstufe das Richtige bereithalten. Die Kombination aus flachen, geschützten Gewässern, unzähligen Ankerplätzen und einer hervorragenden maritimen Infrastruktur macht die Bahamas zu einem idealen Ziel für Familien, Genuss-Segler und alle, die das Inselhopping in vollen Zügen genießen möchten. Doch gerade in diesem einzigartigen Revier sind die Kenntnis der lokalen Besonderheiten und die Einhaltung der Vorschriften von entscheidender Bedeutung für einen reibungslosen und unvergesslichen Törn.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Die Regionen und Inselgruppen der Bahamas: Ein Kaleidoskop aus Türkis und Grün</h3>
              <p>
                Die Bahamas gliedern sich in zahlreiche Inselgruppen, die jeweils ihren eigenen, unverwechselbaren Charme und spezifische Segelbedingungen bieten.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Abaco-Inseln:</strong> Im Nordosten der Bahamas gelegen, sind die Abacos ein klassisches Segelrevier, bekannt für ihre geschützten Gewässer, charmanten Siedlungen und malerischen Leuchttürme. Hier finden Sie eine perfekte Mischung aus lebhaften Häfen und ruhigen Ankerbuchten.</li>
                <li><strong>Exumas:</strong> Eine Kette von über 365 Cays (kleinen Inseln), die sich über 100 Meilen erstreckt. Die Exumas sind berühmt für ihr unglaublich klares, türkisfarbenes Wasser, die berühmten schwimmenden Schweine auf Big Major Cay und unzählige, oft unbewohnte Inseln. Ein Paradies für Schnorchler, Taucher und alle, die Abgeschiedenheit suchen.</li>
                <li><strong>Eleuthera & Harbour Island:</strong> Eleuthera ist eine lange, schmale Insel mit atemberaubenden rosa Sandstränden und dem berühmten Glass Window Bridge. Harbour Island, direkt vor Eleuthera gelegen, ist bekannt für seinen luxuriösen Charme und den spektakulären Pink Sand Beach.</li>
                <li><strong>Andros:</strong> Die größte Insel der Bahamas, geprägt von einem riesigen Barriereriff (drittgrößtes der Welt), unzähligen "Blue Holes" (Unterwasserhöhlen) und einer weitgehend unberührten Natur. Ideal für Taucher und Naturliebhaber, die das Abenteuer abseits der ausgetretenen Pfade suchen.</li>
                <li><strong>Berry Islands:</strong> Oft als "Fish Bowl of the Bahamas" bezeichnet, sind die Berry Islands ein Paradies für Angler. Sie bieten auch wunderschöne, abgelegene Buchten und eine entspannte Atmosphäre.</li>
                <li><strong>Bimini:</strong> Die den USA am nächsten gelegene Inselgruppe, bekannt für ihre Big-Game-Fischerei und als ehemalige Heimat von Ernest Hemingway. Bimini ist ein beliebtes Ziel für Kurztrips von Florida aus.</li>
                <li><strong>Grand Bahama:</strong> Die viertgrößte Insel, Heimat von Freeport, bietet eine Mischung aus modernen Resorts, Nationalparks (wie dem Lucayan National Park mit seinem Unterwasserhöhlensystem) und schönen Stränden.</li>
                <li><strong>Cat Island:</strong> Eine der weniger touristischen Inseln, bekannt für den Mount Alvernia, den höchsten Punkt der Bahamas, und eine reiche lokale Kultur. Ideal für Segler, die das authentische Bahamas erleben möchten.</li>
              </ul>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Nautische Besonderheiten</h4>
                <p className="mb-3">Die Bahamas sind ein Flachwasserrevier. Die Navigation erfordert präzise Kenntnisse der Wassertiefen, Sandbänke und Korallenriffe. Das unglaublich klare Wasser ermöglicht jedoch oft eine gute Sicht auf den Meeresboden, was die Navigation erleichtert. Windverhältnisse: Die Bahamas liegen im Einflussbereich der Nordost-Passatwinde, die für beständige und meist moderate Winde sorgen. Landschaftliche Reize: Von den üppig grünen Inseln mit Pinienwäldern bis zu den kargen, von Kakteen bewachsenen Cays – die Landschaft ist so vielfältig wie die Unterwasserwelt.</p>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Erreichbarkeit: Ihr direkter Weg ins Inselparadies</h4>
              <p>Die Bahamas sind hervorragend an das internationale Flugnetz angebunden, was die Anreise zu Ihrem Yachtcharter-Abenteuer einfach und bequem macht.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Per Direktflug:</strong> Der Lynden Pindling International Airport (NAS) in Nassau ist der wichtigste Ankunftsort und wird von zahlreichen internationalen Flughäfen in Nordamerika und Europa (z.B. London) direkt angeflogen.</li>
                <li><strong>Weitere Flughäfen:</strong> Der Marsh Harbour International Airport (MHH) auf Great Abaco ist ein wichtiger regionaler Flughafen für die Abaco-Inseln. Auch Bimini, Georgetown (Exumas) und Freeport (Grand Bahama) verfügen über Flughäfen.</li>
                <li><strong>Transfers zu den Ausgangshäfen/Marinas:</strong> Von den Flughäfen erfolgt der Transfer zu Ihrer Charteryacht oder zu weiter entfernten Inseln per: 
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Inlandsflug: Für entferntere Inseln wie die Exumas oder Abacos.</li>
                    <li>Fähre oder Speedboat: Für kürzere Distanzen zwischen den Inseln.</li>
                  </ul>
                </li>
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Marinas & Ausgangshäfen: Moderne Infrastruktur im karibischen Paradies</h4>
              <p>Die Bahamas verfügen über eine gut ausgebaute maritime Infrastruktur mit modernen Yachthäfen und einer großen Auswahl an Charteryachten.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Nassau:</strong> Als Hauptstadt und größte Stadt der Bahamas ist Nassau ein wichtiger Charterstützpunkt. Hier finden Sie eine Vielzahl von Marinas, darunter die luxuriösen Anlagen von Albany und Lyford Cay, sowie gut ausgestattete Häfen wie die Atlantis Marina auf Paradise Island. Nassau bietet eine breite Auswahl an Segel- und Motoryachten sowie Katamaranen.</li>
                <li><strong>Marsh Harbour (Abacos):</strong> Der Hauptcharterstützpunkt in den Abacos. Die Marinas hier sind gut ausgestattet und bieten einen idealen Ausgangspunkt für das Inselhopping in den geschützten Gewässern der Sea of Abaco.</li>
                <li><strong>Bimini:</strong> Wichtig für Charterer, die von Florida aus starten, mit Marinas, die auf Sportfischer ausgerichtet sind.</li>
                <li><strong>Georgetown (Exumas):</strong> Ein beliebter Treffpunkt für Fahrtensegler, mit guten Ankerplätzen und grundlegender Versorgung.</li>
              </ul>
              <p>Verfügbarkeit von Yachten: Das Angebot reicht von komfortablen Segelyachten und geräumigen Katamaranen bis hin zu luxuriösen Motoryachten. Die Flotten sind in der Regel sehr gut gewartet und für die Bedingungen des Reviers optimiert.</p>
              <p>Besonderheiten in puncto Service und Ausstattung: Die Bahamas bieten einen hohen Servicestandard, insbesondere in den größeren Marinas und Resorts. Viele Charteryachten sind mit Klimaanlage, Generatoren und Wassermachern ausgestattet, was den Komfort in den tropischen Gewässern erhöht.</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Beliebte Törnziele: Ein Kaleidoskop karibischer Schönheit</h4>
              <p>Ein Yachtcharter auf den Bahamas ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Exumas:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Big Major Cay: Besuchen Sie die berühmten schwimmenden Schweine – ein einzigartiges Erlebnis.</li>
                    <li>Thunderball Grotto: Eine spektakuläre Unterwasserhöhle, bekannt aus James-Bond-Filmen, ideal zum Schnorcheln und Tauchen.</li>
                    <li>Warderick Wells Cay (Exuma Cays Land & Sea Park): Ein streng geschützter Nationalpark mit atemberaubenden Ankerplätzen, Wanderwegen und einer reichen Unterwasserwelt.</li>
                    <li>Staniel Cay: Ein charmanter Ort mit einer Marina und der Möglichkeit, Haie zu füttern.</li>
                  </ul>
                </li>
                <li><strong>Abacos:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Hope Town (Elbow Cay): Bekannt für seinen ikonischen rot-weiß gestreiften Leuchtturm, der noch von Hand betrieben wird. Ein malerisches Dorf mit bunten Häusern.</li>
                    <li>Green Turtle Cay: Ein weiteres charmantes, historisches Dorf mit einer entspannten Atmosphäre und schönen Stränden.</li>
                    <li>Treasure Cay: Berühmt für seinen kilometerlangen, puderweißen Sandstrand.</li>
                  </ul>
                </li>
                <li><strong>Eleuthera:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Glass Window Bridge: Eine schmale Landbrücke, die den rauen Atlantik auf der einen Seite mit dem ruhigen, türkisfarbenen Karibischen Meer auf der anderen Seite trennt – ein beeindruckendes Naturschauspiel.</li>
                    <li>Pink Sand Beach (Harbour Island): Ein weltberühmter Strand mit einzigartigem rosa Sand.</li>
                  </ul>
                </li>
                <li><strong>Bimini:</strong> Erkunden Sie die Unterwasserwelt rund um Bimini, die für ihre Big-Game-Fischerei und die mysteriöse "Bimini Road" (eine unter Wasser liegende Steinformation) bekannt ist.</li>
                <li><strong>Andros:</strong> Tauchen Sie in die unzähligen Blue Holes ein oder erkunden Sie das Andros Barrier Reef, ein Paradies für Taucher und Schnorchler.</li>
              </ul>
              <p>Geheimtipps für einsame Ankerplätze: Ihr Skipper kann Sie zu versteckten Buchten und Sandbänken führen, die nur darauf warten, von Ihnen entdeckt zu werden. Hier können Sie die absolute Stille und die unberührte Natur genießen. Nautische Highlights: Die Bahamas sind ein Paradies für Unterwasseraktivitäten. Tauchen und Schnorcheln an den spektakulären Korallenriffen, Wracks und Blue Holes, Begegnungen mit Riffhaien, Schildkröten und unzähligen bunten Fischen sind an der Tagesordnung. Landaktivitäten: Inselhopping, Besuch von lokalen Fischerdörfern, Golfen, Erkundung von Nationalparks, Vogelbeobachtung und das Genießen der karibischen Küche in gemütlichen Restaurants.</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Ihr 7-Tage-Traumtörn in den Abacos (ab Marsh Harbour)</h4>
              <div className="space-y-3 mt-4">
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 1: Ankunft & Inselzauber</h5>
                  <p>Nach dem Check-in in Marsh Harbour setzen Sie die Segel für einen kurzen Schlag nach Hope Town (Elbow Cay). Genießen Sie den ikonischen Leuchtturm und die charmante Atmosphäre des Dorfes.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 2: Green Turtle Cay – Historischer Charme</h5>
                  <p>Segeln Sie nach Green Turtle Cay. Erkunden Sie das historische New Plymouth mit seinen bunten Holzhäusern und genießen Sie die entspannte Inselatmosphäre.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 3: Treasure Cay – Der Traumstrand</h5>
                  <p>Kurs auf Treasure Cay. Verbringen Sie den Tag am weltberühmten, kilometerlangen, puderweißen Sandstrand. Ideal zum Sonnenbaden und Schwimmen.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 4: Great Guana Cay – Party und Natur</h5>
                  <p>Segeln Sie nach Great Guana Cay. Besuchen Sie den berühmten Nippers Beach Bar & Grill oder erkunden Sie die unberührten Strände und Riffe der Insel.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 5: Man-O-War Cay – Bootsbau-Tradition</h5>
                  <p>Fahren Sie nach Man-O-War Cay, einer trockenen Insel, die für ihre traditionelle Bootsbaukunst bekannt ist. Schlendern Sie durch das ruhige Dorf und beobachten Sie die Bootsbauer bei der Arbeit.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 6: Tahiti Beach & Schnorcheln</h5>
                  <p>Genießen Sie einen entspannten Tag am Tahiti Beach auf Elbow Cay, einer wunderschönen Sandbank, die nur bei Niedrigwasser zugänglich ist. Verbringen Sie den Nachmittag mit Schnorcheln an einem der nahegelegenen Riffe.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 7: Abschied vom Paradies</h5>
                  <p>Nach einem letzten Frühstück an Bord segeln Sie zurück zu Ihrer Charterbasis in Marsh Harbour und treten die Heimreise an – erfüllt von unvergesslichen Eindrücken aus den Abacos.</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Wetter & Windbedingungen: Segeln unter der karibischen Sonne</h4>
              <p>Das Klima auf den Bahamas ist tropisch und wird von den Passatwinden bestimmt.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dominante Winde:</strong> Die Nordost-Passatwinde sorgen für beständige und meist moderate Winde (10-20 Knoten), die das Segeln sehr angenehm machen.</li>
                <li><strong>Trockenzeit (Dezember bis Mai):</strong> Dies ist die Hauptsaison und die beste Reisezeit. Das Wetter ist sonnig und trocken, mit angenehmen Temperaturen und konstanten Winden.</li>
                <li><strong>Regenzeit (Juni bis November):</strong> In dieser Zeit ist es heißer und feuchter, mit gelegentlichen, aber oft kurzen und intensiven Regenschauern. Dies ist auch die Hurrikansaison. Während die Wahrscheinlichkeit eines direkten Treffers gering ist, sollten Charterer in dieser Zeit flexibel sein und die Wettervorhersagen genau verfolgen. Viele Charterfirmen bieten spezielle Konditionen für die Hurrikansaison an.</li>
              </ul>
              <p>Revier-Eignung für Erfahrungsstufen: Die Bahamas sind ein sehr vielseitiges Revier. Die geschützten Gewässer der Abacos sind auch für weniger erfahrene Segler und Familien gut geeignet. Die kurzen Distanzen und die vielen Ausweichmöglichkeiten bieten viel Sicherheit. Die Navigation in den flachen Gewässern erfordert jedoch Aufmerksamkeit und gute Kartenkenntnisse. Für die offeneren Gewässer der Exumas oder längere Überfahrten ist mehr Segelerfahrung von Vorteil.</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Beste Reisezeit: Wann Ihr Bahamas-Traum wahr wird</h4>
              <p>Die beste Reisezeit für einen Yachtcharter auf den Bahamas ist von Dezember bis Mai. In diesen Monaten sind die Wetterbedingungen ideal mit viel Sonne, moderaten Winden und ruhigem Meer. Die Temperaturen sind angenehm warm, aber nicht drückend heiß.</p>
              <p>Die Monate Juni und November können ebenfalls attraktiv sein, bieten aber potenziell wechselhaftere Wetterbedingungen und das Risiko von tropischen Stürmen.</p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Vorschriften & Regeln: Wichtige Hinweise für einen reibungslosen Törn</h4>
                <p className="mb-3">Die Bahamas haben in den letzten Jahren ihre Vorschriften für Yachtcharter und ausländische Yachten aktualisiert. Eine genaue Kenntnis und Einhaltung dieser Regeln ist entscheidend für einen reibungslosen Törn.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>AIS-Pflicht (seit 1. Juli 2025):</strong> Alle ausländischen Yachten ab 50 Fuß Länge müssen durchgehend ein aktives AIS-Signal führen, auch vor Anker. Verstöße werden mit hohen Geldstrafen geahndet.</li>
                  <li><strong>Yacht-Registrierung:</strong> Ab Juli 2025 werden nur noch Yachten ab 24 Metern (ca. 78 Fuß) für eine Neuregistrierung in den Bahamas zugelassen. Yachten zwischen 20 und 24 Metern, die vorher registriert waren, behalten ihren Status. Yachten unter 20 Metern können nicht mehr neu registriert werden.</li>
                  <li><strong>Charterregeln & Eigentum:</strong> Das neue Gesetz verbietet jede Form von "ausländischer Eigentumsverschleierung" bei kommerziellen Charteryachten. Illegale Konstrukte können zu hohen Strafen führen.</li>
                  <li><strong>Steuern & Gebühren:</strong> Alle Yachten, die in den Bahamas chartern, müssen sich für die Mehrwertsteuer (VAT) registrieren und eine lokale Steuernummer (TIN) beantragen. Die VAT wird auf alle Charterleistungen erhoben.</li>
                  <li><strong>Cruising Permit:</strong> Ein Cruising Permit ist für alle ausländischen Yachten, die die Bahamas besuchen, obligatorisch. Dies wird bei der Einreise beantragt.</li>
                  <li><strong>Foreign Charter License:</strong> Für kommerzielle Charteryachten ist eine spezielle Foreign Charter License erforderlich. Ihr Charterunternehmen kümmert sich in der Regel um diese Genehmigung.</li>
                  <li><strong>Angellizenzen:</strong> Für das Freizeitangeln ist eine Angellizenz erforderlich.</li>
                  <li><strong>Funkpflicht:</strong> Jede Yacht muss über ein funktionierendes UKW-Funkgerät verfügen.</li>
                  <li><strong>Nachtfahrverbot:</strong> Obwohl nicht gesetzlich verboten, wird das Nachtsegeln dringend abgeraten aufgrund der vielen unbeleuchteten Hindernisse, Fischernetze und Untiefen. Planen Sie Ihre Etappen so, dass Sie Ihren Ankerplatz immer bei Tageslicht erreichen.</li>
                  <li><strong>Umweltregeln:</strong> Strenge Regeln zur Müllentsorgung, Abwasserentsorgung und zum Schutz mariner Lebensräume (z.B. Ankern nur auf Sandgrund, Schutz von Korallenriffen).</li>
                  <li><strong>Strenge Enforcement:</strong> Die bahamaischen Behörden haben angekündigt, die Einhaltung dieser Gesetze konsequenter zu überwachen.</li>
                </ul>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Erfahrungen von Seglern: Ein Paradies mit Herausforderungen</h4>
              <p>Segler, die die Bahamas besucht haben, berichten von einem Revier, das sowohl atemberaubende Schönheit als auch spezifische Herausforderungen bietet.</p>
              
              <h5 className="text-md font-semibold text-gray-800 mt-4 mb-2">Positives:</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Flachwasser-Navigation:</strong> Die Möglichkeit, in unglaublich flachen, türkisfarbenen Gewässern zu segeln und zu ankern, ist einzigartig. Die Farbenpracht des Wassers ist unübertroffen.</li>
                <li><strong>Vielfalt der Ankerplätze:</strong> Von lebhaften Marinas bis zu einsamen Sandbänken – die Auswahl an Ankerplätzen ist riesig.</li>
                <li><strong>Moderne Marinas:</strong> Die größeren Marinas bieten exzellenten Service, gute Versorgung und oft luxuriöse Infrastruktur.</li>
                <li><strong>Freundliche Einheimische:</strong> Die Bahamaer sind bekannt für ihre Gastfreundschaft und entspannte Atmosphäre.</li>
                <li><strong>Naturerlebnisse:</strong> Wal- und Delfinbeobachtungen, Schnorcheln und Tauchen an intakten Riffen sind unvergesslich.</li>
              </ul>
              
              <h5 className="text-md font-semibold text-gray-800 mt-4 mb-2">Herausforderungen:</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Navigation in Flachwasser:</strong> Die zahlreichen Untiefen und Sandbänke erfordern ständige Aufmerksamkeit, präzise Navigation (gute Karten und Plotter sind unerlässlich) und oft die Nutzung des Echolots.</li>
                <li><strong>Gezeiten und Strömungen:</strong> Insbesondere in den engen Passagen zwischen den Cays können Gezeitenströme stark sein und erfordern seemännisches Können.</li>
                <li><strong>Bürokratie und Kosten:</strong> Die neuen Regulierungen, Steuerpflichten und AIS-Vorschriften erhöhen den bürokratischen Aufwand und die Gesamtkosten eines Charters.</li>
                <li><strong>Strenge Kontrollen:</strong> Wer gegen die neuen Regeln verstößt, riskiert hohe Geldstrafen oder sogar Haft.</li>
              </ul>
              
              <h5 className="text-md font-semibold text-gray-800 mt-4 mb-2">Praktische Tipps aus der Seglergemeinschaft:</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Umfassende Vorbereitung:</strong> Klären Sie vorab mit Ihrem Broker alle Details zu den aktuellen Steuern, Gebühren, AIS-Pflicht und Compliance.</li>
                <li><strong>Ausrüstung:</strong> Stellen Sie sicher, dass Ihr Charterboot über aktuelles Kartenmaterial, einen zuverlässigen Plotter und ein funktionierendes Echolot verfügt.</li>
                <li><strong>Proviantierung:</strong> In den größeren Orten ist die Proviantierung gut möglich. Für längere Törns in entlegene Cays sollte ausreichend Proviant und Treibstoff eingeplant werden, da die Infrastruktur dort begrenzt sein kann.</li>
                <li><strong>Sicherheit:</strong> AIS, Bootspapiere und Versicherungen müssen stets aktuell und an Bord sein.</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Fazit: Ihr Traumtörn in der Karibik – Ein unvergessliches Abenteuer</h4>
              <p>Ein Yachtcharter auf den Bahamas ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, in einem lebhaften Hafenstädtchen anlegen oder einfach auf dem offenen Meer die Sonne genießen. Es ist die Kombination aus:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Einzigartigen Segelbedingungen:</strong> Flachwasser-Navigation, unzählige Inseln und Cays, die es zu entdecken gilt.</li>
                <li><strong>Atemberaubenden Landschaften:</strong> Türkisfarbenes Wasser, puderweiße Sandstrände, üppige Vegetation.</li>
                <li><strong>Karibischem Flair & Gastfreundschaft:</strong> Entspannte Atmosphäre, freundliche Einheimische und eine köstliche Küche.</li>
                <li><strong>Vielfalt maritimer Erlebnisse:</strong> Weltklasse-Schnorcheln, Tauchen, Angeln und Begegnungen mit einzigartiger Tierwelt.</li>
              </ul>
              <p>Die Bahamas bleiben ein spektakuläres, aber anspruchsvoller gewordenes Yachtcharter-Revier. Wer die Regeln beachtet und sich gut vorbereitet, wird mit einzigartigen Segelerlebnissen, einer faszinierenden Inselwelt und karibischem Lebensgefühl belohnt.</p>
              <p>Sind Sie bereit, die Segel zu setzen und das Paradies der 700 Inseln zu entdecken?</p>
              <p>Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter auf den Bahamas an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.</p>
            </div>
          </div>
        </div>
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Bahamas?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie paradiesisches Segeln im kristallklaren Wasser der Bahamas 
              mit schwimmenden Schweinen und unberührten Traumstränden.
            </p>
            <Button 
              className="bg-white text-blue-600 hover:bg-blue-50" 
              size="lg"
              onClick={() => {
                window.location.href = 'tel:+497543499080';
              }}
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Bahamas;