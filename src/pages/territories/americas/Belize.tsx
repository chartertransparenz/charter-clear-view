import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
const Belize = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Charter-Standorte",
    value: "Belize City, Placencia"
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
    value: "Belize Barrier Reef"
  }];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/75f7db93-d3a5-4fa5-b5f2-c8ff9287ca3c.png" alt="Belize Yacht Charter" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇧🇿 Belize</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Belize</h1>
            <p className="text-xl max-w-2xl">
              Unberührtes Segelparadies am größten Korallenriff der westlichen Hemisphäre
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
          <TerritoryMap 
            region="Belize"
            center={{ lat: 18.0795598, lng: -89.4117611 }}
            zoom={8}
            maptype="satellite"
            className="h-96"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Belize: Segeln im Herzen des Mesoamerikanischen Barriereriffs – Ihr Traumtörn im unberührten Karibikparadies</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Belize – ein Name, der für unberührte Natur, kristallklares Wasser und ein einzigartiges Segelerlebnis steht. An der Karibikküste Mittelamerikas gelegen, ist Belize die Heimat des zweitgrößten Barriereriffs der Welt und ein wahres Paradies für Segler, Motorbootfahrer und Wassersportbegeisterte. Ein Yachtcharter in Belize ist weit mehr als ein gewöhnlicher Urlaub; es ist eine Einladung, in eine Welt einzutauchen, in der palmengesäumte Cayes (kleine Inseln) aus dem türkisfarbenen Meer ragen, spektakuläre Korallenriffe eine farbenprächtige Unterwasserwelt beherbergen und die Gastfreundschaft der lokalen Bevölkerung Sie verzaubert.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina in Placencia oder San Pedro, lassen die tropische Kulisse hinter sich und nehmen Kurs auf eine Inselwelt, die einem Märchen gleicht. Jeder Tag bringt neue Horizonte: malerische Buchten, die zum Schnorcheln und Schwimmen einladen, versteckte Lagunen, die nur vom Meer aus zugänglich sind, und die Möglichkeit, die einzigartige Flora und Fauna dieses Paradieses hautnah zu erleben – von bunten Fischen bis zu majestätischen Seekühen.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Belize bietet eine unvergleichliche Vielfalt an Segelrevieren, die für jeden Geschmack und jede Erfahrungsstufe das Richtige bereithalten. Die geschützten Gewässer innerhalb des Barriereriffs, die unzähligen Ankerplätze und die hervorragende maritime Infrastruktur machen Belize zu einem idealen Ziel für Familien, Genuss-Segler und alle, die das Inselhopping in vollen Zügen genießen möchten. Doch gerade in diesem einzigartigen Revier sind die Kenntnis der lokalen Besonderheiten und die Einhaltung der Vorschriften von entscheidender Bedeutung für einen reibungslosen und unvergesslichen Törn.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Die Regionen und Inselgruppen Belizes: Ein Kaleidoskop aus Türkis und Grün</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Belize bietet verschiedene Segelregionen, die jeweils ihren eigenen, unverwechselbaren Charme und spezifische Segelbedingungen bieten.
            </p>

            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="text-lg">
                <strong>Placencia und der Süden:</strong> Der Süden Belizes, mit Placencia als Hauptcharterbasis, ist der beliebteste Ausgangspunkt für Segeltörns. Von hier aus haben Sie direkten Zugang zu den südlichen Cayes innerhalb des Barriereriffs. Dieses Gebiet ist bekannt für seine ruhigen, geschützten Gewässer, die ideal für entspanntes Segeln, Schnorcheln und Tauchen sind. Die Küste ist von Mangroven, Sandstränden und charmanten Fischerdörfern geprägt.
              </li>
              <li className="text-lg">
                <strong>Ambergris Caye und der Norden:</strong> San Pedro auf Ambergris Caye ist der wichtigste Ort im Norden Belizes und ein weiteres Zentrum für Wassersport. Die Gewässer hier sind ebenfalls durch das Riff geschützt. Der Norden ist lebhafter und touristischer, bietet aber auch Zugang zu weltberühmten Tauchspots wie dem Hol Chan Marine Reserve und Shark Ray Alley.
              </li>
              <li className="text-lg">
                <strong>Die Offshore-Atolle: Turneffe Atoll, Lighthouse Reef und Glover's Reef:</strong> Diese drei großen Atolle liegen östlich des Barriereriffs im offenen Meer und sind wahre Paradiese für Taucher.
                <ul className="ml-6 mt-2 space-y-2">
                  <li>Turneffe Atoll: Das größte Atoll Belizes, bekannt für seine vielfältige Unterwasserwelt und exzellente Tauchplätze.</li>
                  <li>Lighthouse Reef: Heimat des weltberühmten Great Blue Hole, einem riesigen Unterwasser-Sinkloch, das zu den Top-Tauchzielen der Welt zählt.</li>
                  <li>Glover's Reef: Ein weiteres Atoll mit unberührten Korallenriffen und einer reichen Artenvielfalt. Das Segeln zu diesen Atollen erfordert mehr Erfahrung und kann je nach Wetterlage anspruchsvoller sein.</li>
                </ul>
              </li>
              <li className="text-lg">
                <strong>Die zentralen Cayes: Tobacco Caye, South Water Caye, Laughing Bird Caye:</strong> Diese kleinen, idyllischen Inseln liegen innerhalb des Barriereriffs und sind beliebte Ankerziele.
                <ul className="ml-6 mt-2 space-y-2">
                  <li>Tobacco Caye: Eine winzige Insel mit entspanntem Karibikflair, ideal zum Schnorcheln direkt vom Strand aus.</li>
                  <li>Laughing Bird Caye: Ein Nationalpark und UNESCO-Welterbe, bekannt für seine Vogelkolonien und hervorragenden Schnorchel- und Tauchmöglichkeiten.</li>
                  <li>South Water Caye & Pelican Cayes: Weitere malerische Inseln mit puderweißen Stränden und intakten Riffen.</li>
                </ul>
              </li>
            </ul>

            {/* Nautische Besonderheiten Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Nautische Besonderheiten</h4>
              <p className="text-gray-600 mb-3">
                Das Herzstück Belizes ist das Mesoamerikanische Barriereriff. Die Navigation erfolgt hauptsächlich innerhalb dieses Riffs, in relativ flachen und geschützten Gewässern. Die Wassertiefen sind oft gering, und es gibt zahlreiche Untiefen und Korallenköpfe. Das unglaublich klare Wasser ermöglicht jedoch meist eine gute Sicht auf den Meeresboden, was die Sichtnavigation tagsüber erleichtert.
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Windverhältnisse:</strong> Belize liegt im Einflussbereich der Nordost-Passatwinde, die für beständige und meist moderate Winde (10-20 Knoten) sorgen.
              </p>
              <p className="text-gray-600">
                <strong>Landschaftliche Reize:</strong> Von palmengesäumten Sandstränden über dichte Mangrovenwälder bis hin zu den grünen Inseln mit Kokosnusspalmen – die Landschaft ist so vielfältig wie die Unterwasserwelt.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Erreichbarkeit: Ihr direkter Weg ins Inselparadies</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Belize ist gut an das internationale Flugnetz angebunden, was die Anreise zu Ihrem Yachtcharter-Abenteuer einfach und bequem macht.
            </p>

            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="text-lg">
                <strong>Per Direktflug:</strong> Der Philip S. W. Goldson International Airport (BZE) in Belize City ist der wichtigste Ankunftsort. Er wird von verschiedenen internationalen Flughäfen in Nordamerika (z.B. Houston, Miami, Atlanta, Toronto) direkt angeflogen.
              </li>
              <li className="text-lg">
                <strong>Umsteigeverbindungen:</strong> Aus Mitteleuropa und anderen Destinationen sind bequeme Umsteigeverbindungen über die USA oder Mexiko möglich.
              </li>
              <li className="text-lg">
                <strong>Transfers zu den Ausgangshäfen/Marinas:</strong> Von Belize City aus erreichen Sie Ihre Charterbasis per:
                <ul className="ml-6 mt-2 space-y-1">
                  <li>Inlandsflug: Am schnellsten und bequemsten sind Inlandsflüge (z.B. mit Tropic Air oder Maya Island Air) zu den Flughäfen in Placencia (PLJ) oder San Pedro (SPR).</li>
                  <li>Shuttle oder Speedboat: Für kürzere Distanzen oder als Alternative zum Flug.</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Marinas & Ausgangshäfen: Moderne Infrastruktur im karibischen Paradies</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Belize verfügt über eine wachsende maritime Infrastruktur mit modernen Yachthäfen und einer guten Auswahl an Charteryachten.
            </p>

            <ul className="space-y-4 mb-6 text-gray-600">
              <li className="text-lg">
                <strong>Placencia:</strong> Die wichtigste Charterbasis im Süden Belizes. Hier finden Sie mehrere Marinas und Charterunternehmen, die eine breite Auswahl an Segel- und Motoryachten sowie Katamaranen anbieten. Placencia ist ideal für Törns zu den südlichen Cayes und dem Barriereriff.
              </li>
              <li className="text-lg">
                <strong>San Pedro (Ambergris Caye):</strong> Bietet ebenfalls Charteroptionen und ist ein guter Ausgangspunkt für die Erkundung der nördlichen Riffgebiete und des Hol Chan Marine Reserve.
              </li>
              <li className="text-lg">
                <strong>Verfügbarkeit von Yachten:</strong> Das Angebot reicht von komfortablen Segelyachten und geräumigen Katamaranen bis hin zu Motoryachten. Katamarane sind aufgrund ihres geringen Tiefgangs und ihrer Stabilität in den flachen Gewässern Belizes besonders beliebt und effizient.
              </li>
              <li className="text-lg">
                <strong>Besonderheiten in puncto Service und Ausstattung:</strong> Die Charteryachten sind in der Regel gut ausgestattet für das Segeln in tropischen Gewässern, oft mit Klimaanlage, Generatoren und Wassermachern.
              </li>
            </ul>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <p className="text-gray-800 font-semibold">
                Wichtige Besonderheit: Offizielle Segellizenz durch die belizianische Hafenbehörde
              </p>
              <p className="text-gray-600 mt-2">
                Für Bareboat-Charter in Belize ist ein "Temporary Certificate of Competency" der Belize Port Authority obligatorisch. Dieses muss mindestens zwei Wochen vor Anreise beantragt werden. Ihr Charterunternehmen wird Sie bei diesem Prozess unterstützen und die notwendigen Formulare bereitstellen. Ohne dieses offizielle Permit ist kein eigenständiges Chartern erlaubt.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Beliebte Törnziele: Ein Kaleidoskop karibischer Schönheit</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Ein Yachtcharter in Belize ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.
            </p>

            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="text-lg"><strong>Tobacco Caye:</strong> Eine winzige, palmengesäumte Insel direkt am Barriereriff. Ideal zum Schnorcheln und Tauchen direkt vom Boot aus.</li>
              <li className="text-lg"><strong>South Water Caye:</strong> Eine weitere malerische Insel mit einem Marine Reserve, bekannt für seine reiche Unterwasserwelt und entspannte Atmosphäre.</li>
              <li className="text-lg"><strong>Laughing Bird Cay:</strong> Ein Nationalpark und UNESCO-Welterbe. Hier können Sie nicht nur die namensgebenden Lachmöwen beobachten, sondern auch an einem der schönsten Riffe Belizes schnorcheln.</li>
              <li className="text-lg"><strong>Glover's Reef:</strong> Eines der drei Offshore-Atolle, ein UNESCO-Welterbe und Marine Reserve. Ein Paradies für Taucher mit unberührten Korallenriffen.</li>
              <li className="text-lg"><strong>Turneffe Atoll:</strong> Das größte Atoll Belizes, mit einer vielfältigen Unterwasserwelt und exzellenten Tauchplätzen.</li>
              <li className="text-lg"><strong>Great Blue Hole (Lighthouse Reef):</strong> Ein weltberühmtes Tauchziel, ein riesiges, kreisrundes Unterwasser-Sinkloch. Der Überflug mit einem Kleinflugzeug ist ein unvergessliches Erlebnis.</li>
              <li className="text-lg"><strong>Geheimtipps für einsame Ankerplätze:</strong> Ihr Skipper kann Sie zu versteckten Buchten und Sandbänken führen, die nur darauf warten, von Ihnen entdeckt zu werden.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ihr 7-Tage-Traumtörn ab Placencia (Südliche Cayes)</h3>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">Tag 1: Ankunft & Inselzauber</h4>
                <p className="text-gray-600 text-sm">Nach dem Check-in in Placencia setzen Sie die Segel für einen kurzen Schlag zu einer ruhigen Ankerbucht in der Nähe, z.B. vor einer der kleinen Cayes im Süden. Genießen Sie das erste Bad im türkisfarbenen Wasser und lassen Sie den Ankerabend unter dem Sternenhimmel ausklingen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">Tag 2: Tobacco Caye – Riff direkt vor der Tür</h4>
                <p className="text-gray-600 text-sm">Segeln Sie nach Tobacco Caye, einer winzigen Insel direkt am Barriereriff. Schnorcheln Sie vom Boot aus oder erkunden Sie die Insel und genießen Sie das entspannte Karibikflair.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">Tag 3: South Water Caye & Pelican Cayes – Natur pur</h4>
                <p className="text-gray-600 text-sm">Kurs auf South Water Caye, eine weitere malerische Insel mit einem Marine Reserve. Erkunden Sie die Unterwasserwelt und segeln Sie weiter zu den Pelican Cayes, einer Gruppe von Mangroveninseln mit unberührten Schnorchelplätzen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">Tag 4: Laughing Bird Cay – Nationalpark-Idylle</h4>
                <p className="text-gray-600 text-sm">Besuchen Sie Laughing Bird Cay National Park, ein UNESCO-Welterbe. Genießen Sie die Vogelkolonien und das spektakuläre Riff. Verbringen Sie den Tag mit Schwimmen, Schnorcheln und Entspannen am Strand.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">Tag 5: Hatchet Caye – Abenteuer & Komfort</h4>
                <p className="text-gray-600 text-sm">Segeln Sie nach Hatchet Caye, einer kleinen Insel mit einem Resort, das Ankerplätze und Dienstleistungen für Segler anbietet. Von hier aus können Sie weitere Riffe erkunden oder einfach die Annehmlichkeiten genießen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">Tag 6: Rückfahrt & letzte Entdeckungen</h4>
                <p className="text-gray-600 text-sm">Beginnen Sie die Rückreise in Richtung Placencia. Legen Sie einen letzten Stopp an einer schönen, ruhigen Bucht an der Küste oder einer nahegelegenen Caye ein, um den letzten Abend an Bord zu genießen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">Tag 7: Abschied vom Paradies</h4>
                <p className="text-gray-600 text-sm">Nach einem letzten Frühstück an Bord segeln Sie zurück zu Ihrer Charterbasis in Placencia und treten die Heimreise an – erfüllt von unvergesslichen Eindrücken aus Belizes Inselwelt.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Wetter & Windbedingungen: Segeln unter der karibischen Sonne</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Das Klima in Belize ist tropisch und wird von den Passatwinden bestimmt.
            </p>

            <ul className="space-y-4 mb-6 text-gray-600">
              <li className="text-lg">
                <strong>Dominante Winde:</strong> Die Nordost-Passatwinde sorgen für beständige und meist moderate Winde (10-20 Knoten), die das Segeln sehr angenehm machen.
              </li>
              <li className="text-lg">
                <strong>Trockenzeit (Dezember bis Mai):</strong> Dies ist die Hauptsaison und die beste Reisezeit. Das Wetter ist sonnig und trocken, mit angenehmen Temperaturen und konstanten Winden.
              </li>
              <li className="text-lg">
                <strong>Regenzeit (Juni bis November):</strong> In dieser Zeit ist es heißer und feuchter, mit gelegentlichen, aber oft kurzen und intensiven Regenschauern. Dies ist auch die Hurrikansaison. Während die Wahrscheinlichkeit eines direkten Treffers gering ist, sollten Charterer in dieser Zeit flexibel sein und die Wettervorhersagen genau verfolgen.
              </li>
            </ul>

            <p className="text-lg text-gray-600 mb-8">
              <strong>Revier-Eignung für Erfahrungsstufen:</strong> Belize ist ein Revier, das sowohl für weniger erfahrene Segler (insbesondere in den geschützten Gewässern innerhalb des Barriereriffs) als auch für erfahrene Skipper (die sich in die Offshore-Atolle wagen) geeignet ist. Die Navigation in den flachen Gewässern erfordert jedoch Aufmerksamkeit und gute Kartenkenntnisse.
            </p>

            {/* Beste Reisezeit Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Beste Reisezeit: Wann Ihr Belize-Traum wahr wird</h4>
              <p className="text-gray-600 mb-3">
                Die beste Reisezeit für einen Yachtcharter in Belize ist von Dezember bis Mai (Trockenzeit). In diesen Monaten sind die Wetterbedingungen ideal mit viel Sonne, moderaten Winden und ruhigem Meer. Die Temperaturen sind angenehm warm, aber nicht drückend heiß.
              </p>
              <p className="text-gray-600">
                Die Monate Juni bis November (Regenzeit/Hurrikansaison) bieten zwar niedrigere Preise und weniger Touristen, erfordern aber eine sorgfältigere Wetterbeobachtung und flexible Planung.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Vorschriften & Regeln: Wichtige Hinweise für einen reibungslosen Törn</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Belize hat klare Vorschriften für Yachtcharter, die dem Schutz des einzigartigen Ökosystems dienen. Eine genaue Kenntnis und Einhaltung dieser Regeln ist entscheidend für einen reibungslosen Törn.
            </p>

            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="text-lg">
                <strong>Pflicht zur Segellizenz ("Temporary Certificate of Competency"):</strong> Für Bareboat-Charter ist dieses offizielle Permit der Belize Port Authority obligatorisch. Es muss mindestens zwei Wochen vor Anreise beantragt werden, wobei Ihr Charterunternehmen Sie dabei unterstützt. Ohne dieses Permit ist kein eigenständiges Chartern erlaubt.
              </li>
              <li className="text-lg">
                <strong>Crew-Anforderung:</strong> Mindestens zwei Personen müssen an Bord sein, Segeln alleine ist verboten.
              </li>
              <li className="text-lg">
                <strong>Nachtsegelverbot:</strong> Nachtsegeln ist in Belize grundsätzlich untersagt. Yachten müssen mindestens eine Stunde vor Sonnenuntergang festmachen. Ausnahmen sind nur nach Rücksprache mit der Basis und bei nachgewiesener Erfahrung möglich.
              </li>
              <li className="text-lg">
                <strong>Marine Parks & Gebühren:</strong> In den zahlreichen Marine Parks (z.B. Laughing Bird Caye, Hol Chan, Glover's Reef) fallen Eintrittsgebühren an (ca. 10 USD pro Person/Tag, Stand 2025). Diese Gebühren dienen dem Schutz der fragilen Ökosysteme.
              </li>
              <li className="text-lg">
                <strong>Angeln:</strong> Für das Fischen außerhalb der Marine Parks ist eine Angellizenz erforderlich. Innerhalb der Parks ist Angeln streng verboten.
              </li>
              <li className="text-lg">
                <strong>Umweltauflagen & Riffschutz:</strong> Es gelten strenge Regeln zum Schutz des Riffs. Ankern ist nur auf Sandgrund erlaubt; Korallen dürfen nicht beschädigt werden. Müllentsorgung und Abwassermanagement sind strikt geregelt. Verstöße werden geahndet.
              </li>
              <li className="text-lg">
                <strong>Sichtnavigation:</strong> Aufgrund der vielen Untiefen und Korallenköpfe ist die Sichtnavigation bei Tageslicht von größter Bedeutung. Verlassen Sie sich nicht ausschließlich auf elektronische Karten.
              </li>
              <li className="text-lg">
                <strong>Ausreisegebühren:</strong> Bei der Ausreise fällt eine Departure Tax an (ca. 56 USD pro Person).
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Erfahrungen von Seglern: Ein Paradies mit Abenteuer und Komfort</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Segler, die Belize besucht haben, berichten von einem Revier, das sowohl atemberaubende Schönheit als auch spezifische, aber beherrschbare Herausforderungen bietet.
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Positives:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Spektakuläre Natur: Das türkisfarbene, unglaublich klare Wasser, die unzähligen Cayes und das Barriereriff sind einzigartig.</li>
                <li>Vielfalt der Ankerplätze: Zahlreiche geschützte Buchten und Ankerplätze, oft mit Mooringbojen.</li>
                <li>Einfache Tagesnavigation: Tagsüber ist die Navigation durch das klare Wasser und die gute Sicht auf Untiefen relativ einfach.</li>
                <li>Freundliche Einheimische: Die Bevölkerung Belizes ist bekannt für ihre Gastfreundschaft und Hilfsbereitschaft.</li>
                <li>Kulturelle Vielfalt: Die Mischung aus karibischen, mexikanischen und Maya-Einflüssen macht Landgänge besonders spannend.</li>
                <li>Abenteuer und Komfort: Die Kombination aus ursprünglicher Natur und dem Komfort einer Charteryacht wird sehr geschätzt.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Herausforderungen:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Navigation in Flachwasser: Die vielen Untiefen und Korallenriffe erfordern ständige Aufmerksamkeit, präzise Navigation (gute Karten, Plotter, Echolot) und die Bereitschaft, die Wassertiefen genau zu beobachten.</li>
                <li>Permit-Prozess und Gebühren: Die Beantragung der Segellizenz und die verschiedenen Marineparkgebühren summieren sich und müssen eingeplant werden.</li>
                <li>Nachtfahrverbot: Die strikte Einhaltung des Nachtfahrverbots erfordert eine sorgfältige Planung der Tagesetappen.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Praktische Tipps aus der Seglergemeinschaft:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Permit frühzeitig beantragen: Beginnen Sie den Prozess für das "Temporary Certificate of Competency" rechtzeitig vor Ihrer Reise.</li>
                <li>Ausrüstung: Stellen Sie sicher, dass Ihr Charterboot über aktuelles Kartenmaterial, einen zuverlässigen Plotter und ein funktionierendes Echolot verfügt.</li>
                <li>Proviantierung: In Placencia oder San Pedro können Sie sich gut eindecken. Auf den Cayes sind die Möglichkeiten begrenzt.</li>
                <li>Respekt vor der Natur: Halten Sie sich strikt an die Umweltauflagen, um dieses einzigartige Ökosystem zu schützen.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fazit: Ihr Traumtörn im unberührten Karibikparadies</h3>
            
            <p className="text-lg text-gray-600 mb-4">
              Ein Yachtcharter in Belize ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, in einer Lodge auf einer Caye anlegen oder einfach auf dem offenen Meer die Sonne genießen. Es ist die Kombination aus:
            </p>

            <ul className="space-y-2 mb-6 text-gray-600">
              <li><strong>Einzigartigen Segelbedingungen:</strong> Geschützte Gewässer innerhalb des Barriereriffs, Flachwasser-Navigation und unzählige Cayes, die es zu entdecken gilt.</li>
              <li><strong>Atemberaubenden Landschaften:</strong> Türkisfarbenes Wasser, palmengesäumte Strände, üppige Vegetation und spektakuläre Korallenriffe.</li>
              <li><strong>Karibischem Flair & Gastfreundschaft:</strong> Entspannte Atmosphäre, freundliche Einheimische und eine köstliche, multikulturelle Küche.</li>
              <li><strong>Vielfalt maritimer und kultureller Erlebnisse:</strong> Weltklasse-Schnorcheln, Tauchen, Angeln, Dschungel-Exkursionen und die Erkundung alter Maya-Stätten.</li>
            </ul>

            <p className="text-lg text-gray-600 mb-6">
              Belize bleibt ein spektakuläres Yachtcharter-Revier für alle, die das Abenteuer suchen und die unberührte Schönheit der Karibik erleben möchten. Wer die Regeln beachtet und sich gut vorbereitet, wird mit einzigartigen Segelerlebnissen und einem tiefen Gefühl der Verbundenheit mit der Natur belohnt.
            </p>

            <p className="text-xl font-semibold text-gray-800">
              Sind Sie bereit, die Segel zu setzen und das unberührte Paradies Belizes zu entdecken?
            </p>
            
            <p className="text-lg text-gray-600 mt-4">
              Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Belize an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
            </p>
          </div>
        </div>
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Belize?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das unberührte Segelparadies Belize mit dem Great Blue Hole, 
              spektakulären Korallenriffen und authentischer karibischer Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Belize Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Belize;