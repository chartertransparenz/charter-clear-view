import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const Mexico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Charter-Standorte",
    value: "La Paz, Cabo San Lucas"
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
    value: "Wüste trifft Meer"
  }];
  const charterBases = [{
    name: "La Paz",
    description: "Charmante Hauptstadt von Baja California Sur mit authentischem mexikanischen Flair",
    highlights: ["Marina de La Paz", "Isla Espíritu Santo", "Seelöwen-Kolonien", "Perlentauchen Geschichte"]
  }, {
    name: "Cabo San Lucas",
    description: "Weltberühmtes Segelziel am südlichsten Punkt der Baja California",
    highlights: ["El Arco", "Marina Cabo San Lucas", "Pazifik & Cortez-See", "Luxuriöse Resorts"]
  }];
  const sailingHighlights = ["Golf von Kalifornien (Sea of Cortez)", "Walbeobachtung", "Seelöwen-Kolonien", "Wüsteninseln", "Weltklasse Sportfischen", "Authentische mexikanische Kultur", "Spektakuläre Sonnenuntergänge"];
  const popularRoutes = ["La Paz - Isla Espíritu Santo - Los Islotes", "Cabo San Lucas - La Paz - Loreto", "La Paz - Isla Cerralvo - Isla San José", "Cabo San Lucas - El Arco - Lover's Beach"];
  const culturalHighlights = [{
    name: "El Arco",
    description: "Das berühmte Felsentor am südlichsten Punkt der Baja California"
  }, {
    name: "Mission San Xavier",
    description: "Historische Jesuitenmission aus dem 18. Jahrhundert"
  }, {
    name: "Perlentauchen-Geschichte",
    description: "La Paz war einst das Zentrum der Perlentaucherei im Golf von Kalifornien"
  }, {
    name: "Cabo Pulmo Nationalpark",
    description: "UNESCO-Welterbe mit einem der ältesten Korallenriffe Nordamerikas"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/2e57e252-c2db-41f7-956a-4e0a8859e082.png" alt="Mexiko Yacht Charter" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇲🇽 Mexiko</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mexiko, Baja California</h1>
            <p className="text-xl max-w-2xl">
              Wüste trifft Meer in spektakulärer Landschaft
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
                  <Link to="/reviere/amerika-bahamas">Amerika & Bahamas</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Mexiko</BreadcrumbPage>
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

        {/* Description */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Baja California: Segeln im „Aquarium der Welt" – Ihr Traumtörn im Golf von Kalifornien</h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Baja California – ein Name, der Abenteuer, unberührte Natur und eine einzigartige Verschmelzung von Wüste und Meer verspricht. Der Golf von Kalifornien, von Jacques Cousteau einst als „Aquarium der Welt" bezeichnet, ist ein Segelrevier von unvergleichlicher Schönheit und Artenvielfalt. Ein Yachtcharter in Baja California ist weit mehr als ein gewöhnlicher Urlaub; es ist eine Expedition in eine Welt, in der karge Wüstenlandschaften auf türkisblaues Wasser, weiße Sandstrände und eine faszinierende Unterwasserwelt treffen. Hier, wo Delfine die Bugwelle reiten, Wale majestätisch aus dem Wasser springen und Seelöwen neugierig Ihr Boot umkreisen, erwartet Sie ein Segelabenteuer, das alle Ihre Sinne berühren wird.
              </p>
              
              <p className="text-lg leading-relaxed">
                Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina in La Paz oder Loreto, lassen die lebhafte Atmosphäre der Stadt hinter sich und nehmen Kurs auf eine Inselwelt, die einem Märchen gleicht. Jeder Tag bringt neue Horizonte: malerische Buchten, die zum Schnorcheln und Schwimmen einladen, einsame Sandbänke, die nur für Sie allein zu sein scheinen, und die Möglichkeit, die einzigartige Flora und Fauna dieses Paradieses hautnah zu erleben – von bunten Fischen bis zu majestätischen Walhaien.
              </p>
              
              <p className="text-lg leading-relaxed">
                Baja California bietet eine unvergleichliche Vielfalt an Segelrevieren, die für jeden Geschmack und jede Erfahrungsstufe das Richtige bereithalten. Die Kombination aus unzähligen Ankerplätzen, meist ruhigen Gewässern und einer hervorragenden maritimen Infrastruktur in den Hauptorten macht die Sea of Cortez zu einem idealen Ziel für Familien, Genießer und alle, die das Inselhopping in vollen Zügen genießen möchten. Doch gerade in diesem einzigartigen Revier sind die Kenntnis der lokalen Besonderheiten und die Einhaltung der Vorschriften von entscheidender Bedeutung für einen reibungslosen und unvergesslichen Törn.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Die Regionen und Inselgruppen der Baja California: Ein Kaleidoskop aus Türkis und Wüste</h3>
              
              <p className="leading-relaxed">
                Die Segelregion Baja California erstreckt sich entlang der Ostküste der Halbinsel Baja California Sur und bietet verschiedene, unverwechselbare Bereiche.
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="leading-relaxed">
                  <strong>La Paz und Umgebung:</strong> Die Hauptstadt von Baja California Sur ist der wichtigste Ausgangspunkt für Yachtcharter. Die Gewässer um La Paz sind geschützt und bieten direkten Zugang zu den berühmten Inseln des Archipels. Die Stadt selbst ist lebhaft und bietet eine gute Versorgungsinfrastruktur.
                </li>
                <li className="leading-relaxed">
                  <strong>Isla Espíritu Santo & Isla Partida:</strong> Diese beiden Inseln sind durch eine schmale Landzunge verbunden und bilden ein UNESCO-Weltnaturerbe. Sie sind bekannt für ihre spektakulären Felsformationen, weißen Sandstrände, kristallklares Wasser und eine reiche Tierwelt. Hier finden Sie unzählige geschützte Ankerbuchten und die berühmte Seelöwenkolonie von Los Islotes.
                </li>
                <li className="leading-relaxed">
                  <strong>Isla San José & Isla San Francisco:</strong> Nördlich von Espíritu Santo gelegen, bieten diese Inseln ebenfalls wunderschöne Buchten und eine ruhigere Atmosphäre. Isla San Francisco ist berühmt für ihre markante, sichelförmige Bucht.
                </li>
                <li className="leading-relaxed">
                  <strong>Loreto und die nördliche Küste:</strong> Weiter nördlich liegt Loreto, eine charmante Kleinstadt mit historischem Flair und einem weiteren Charterstützpunkt. Die Gewässer um Loreto sind ebenfalls reich an Inseln (z.B. Isla Coronado, Isla Carmen) und bieten hervorragende Möglichkeiten zur Walbeobachtung (Grauwale, Blauwale, Finnwale). Die Küste erstreckt sich bis zur US-Grenze und wird zunehmend wilder und unberührter.
                </li>
              </ul>

              <p className="leading-relaxed mt-4">
                <strong>Nautische Besonderheiten:</strong> Die Sea of Cortez ist ein Revier mit klarem Wasser und vielen unbewohnten Inseln. Die Navigation ist tagsüber meist einfach, da Untiefen und Riffe durch die hohe Sichttiefe gut erkennbar sind. Das Ankern erfolgt in der Regel in geschützten Buchten auf Sandgrund. <strong>Windverhältnisse:</strong> Die Winde sind meist moderat, können aber saisonal variieren. <strong>Landschaftliche Reize:</strong> Die einzigartige Kombination aus kargen Wüstenbergen, die direkt ins Meer abfallen, und den türkisfarbenen Buchten ist atemberaubend. Kakteen, Palmen und bizarre Felsformationen prägen das Bild.
              </p>

              {/* Erreichbarkeit Sub-Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Erreichbarkeit: Ihr direkter Weg ins Segelparadies</h4>
                <p className="leading-relaxed mb-4">
                  Baja California ist gut an das internationale Flugnetz angebunden, was die Anreise zu Ihrem Yachtcharter-Abenteuer einfach und bequem macht.
                </p>
                <ul className="space-y-2 ml-6">
                  <li><strong>Per Flugzeug:</strong> Die wichtigsten Flughäfen sind:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Manuel Márquez de León International Airport (LAP) in La Paz.</li>
                      <li>• Loreto International Airport (LTO) in Loreto.</li>
                      <li>• Los Cabos International Airport (SJD) in San José del Cabo (für den südlichsten Teil der Baja).</li>
                    </ul>
                  </li>
                  <li><strong>Flugverbindungen:</strong> Viele Chartergäste fliegen zunächst nach Mexico City (MEX) und nehmen von dort einen Inlandsflug nach La Paz oder Loreto. Es gibt auch Direktflüge aus den USA (z.B. Los Angeles, Phoenix, Dallas) nach La Paz oder Los Cabos.</li>
                  <li><strong>Transfers zu den Ausgangshäfen/Marinas:</strong> Von den Flughäfen erreichen Sie Ihre Charterbasis bequem per Taxi, Shuttle oder Mietwagen.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Marinas & Ausgangshäfen: Moderne Infrastruktur im Segelparadies</h3>
              
              <p className="leading-relaxed mb-4">
                Die Baja California verfügt über eine wachsende und gut ausgebaute maritime Infrastruktur mit modernen Yachthäfen und einer guten Auswahl an Charteryachten.
              </p>
              
              <ul className="space-y-3 ml-6">
                <li><strong>La Paz:</strong> Der wichtigste Charterstützpunkt. Hier finden Sie moderne Marinas wie die Marina CostaBaja und die Marina La Paz. Diese bieten umfassende Dienstleistungen (Wasser, Strom, Treibstoff, Supermärkte, Restaurants, technische Unterstützung) und sind ideal gelegen für Törns zu den Inseln des Archipels.</li>
                <li><strong>Loreto:</strong> Bietet ebenfalls Marinas und ist ein guter Ausgangspunkt für die Erkundung der nördlicheren Inseln und Küstenabschnitte.</li>
                <li><strong>Verfügbarkeit von Yachten:</strong> Das Angebot reicht von komfortablen Segelyachten und geräumigen Katamaranen bis hin zu Motoryachten. Die Flotten sind in der Regel sehr gut gewartet und für die Bedingungen des Reviers optimiert.</li>
                <li><strong>Besonderheiten in puncto Service und Ausstattung:</strong> Die Charteryachten sind in der Regel gut ausgestattet für das Segeln in tropischen Gewässern, oft mit Klimaanlage, Generatoren und Wassermachern, was den Komfort in den heißen Monaten erhöht.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Beliebte Törnziele: Ein Kaleidoskop aus Wüste und Meer</h3>
              
              <p className="leading-relaxed mb-4">
                Ein Yachtcharter in Baja California ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.
              </p>
              
              <ul className="space-y-4 ml-6">
                <li>
                  <strong>Isla Espíritu Santo & Isla Partida:</strong> Diese Inseln sind das Herzstück vieler Törns ab La Paz.
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• <strong>Los Islotes:</strong> Eine kleine Inselgruppe nördlich von Espíritu Santo, Heimat einer großen Seelöwenkolonie. Hier können Sie mit den verspielten Tieren schnorcheln – ein unvergessliches Erlebnis.</li>
                    <li>• <strong>Puerto Balandra:</strong> Eine wunderschöne, flache Bucht mit kristallklarem Wasser und dem berühmten „Pilzfelsen" (Mushroom Rock). Ideal zum Schwimmen und Kajakfahren.</li>
                    <li>• <strong>Ensenada Grande (Isla Partida):</strong> Oft als eine der schönsten Buchten der Welt bezeichnet, mit einem langen Sandstrand und türkisfarbenem Wasser.</li>
                  </ul>
                </li>
                <li><strong>Isla San Francisco:</strong> Berühmt für ihre markante, sichelförmige Bucht, die einen hervorragenden Ankerplatz bietet. Ideal für Strandwanderungen und das Beobachten von Vögeln.</li>
                <li><strong>Isla San José:</strong> Eine größere Insel mit vielfältigen Landschaften, von Mangroven bis zu Kakteenwäldern.</li>
                <li><strong>San Evaristo:</strong> Ein kleines Fischerdorf auf dem Festland, bekannt für seine frischen Meeresfrüchte und eine entspannte Atmosphäre.</li>
                <li><strong>Puerto Los Gatos:</strong> Eine malerische Bucht mit beeindruckenden roten Felsen und einem kleinen Strand.</li>
                <li><strong>Bahia Amortajada:</strong> Eine weitere wunderschöne Bucht, ideal zum Ankern und Entspannen.</li>
              </ul>

              <p className="leading-relaxed mt-4">
                <strong>Geheimtipps für einsame Ankerplätze:</strong> Die Sea of Cortez ist gespickt mit unzähligen, oft menschenleeren Ankerbuchten. Ihr Skipper kann Sie zu versteckten Juwelen führen, die nur darauf warten, von Ihnen entdeckt zu werden. <strong>Nautische Highlights:</strong> Walbeobachtung (Grauwale im Winter, Blauwale im Frühjahr), Schnorcheln und Tauchen mit Walhaien (saisonal), Begegnungen mit Delfinen, Mobula-Rochen und Mantarochen. Die Unterwasserwelt ist spektakulär und bietet eine enorme Artenvielfalt. <strong>Landaktivitäten:</strong> Schnorcheln, Tauchen, Kajakfahren, Stand-Up-Paddling, Strandwanderungen, Vogelbeobachtung, Erkundung der Wüstenlandschaft und das Genießen der mexikanischen Küche in den Küstenorten.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Ihr 7-Tage-Traumtörn in der Sea of Cortez (ab La Paz)</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 1: Ankunft & Inselzauber</h4>
                  <p className="text-gray-700">Nach dem Check-in in La Paz setzen Sie die Segel für einen kurzen Schlag zu einer ruhigen Ankerbucht auf Isla Partida, z.B. Ensenada Grande. Genießen Sie das erste Bad im türkisfarbenen Wasser und lassen Sie den Ankerabend unter dem Sternenhimmel ausklingen.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 2: Espíritu Santo – Naturparadies & Seelöwen</h4>
                  <p className="text-gray-700">Erkunden Sie die Insel Espíritu Santo. Besuchen Sie die Seelöwenkolonie bei Los Islotes und schnorcheln Sie mit den verspielten Tieren. Am Nachmittag ankern Sie in einer der vielen geschützten Buchten der Insel, wie der Partida Bay.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 3: Isla San Francisco – Die Sichelbucht</h4>
                  <p className="text-gray-700">Segeln Sie zur markanten Isla San Francisco. Genießen Sie die einzigartige sichelförmige Bucht, ideal zum Strandwandern, Kajakfahren und für einen Sundowner am Strand.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 4: San Evaristo – Fischerdorf-Idylle</h4>
                  <p className="text-gray-700">Kurs auf San Evaristo, ein kleines Fischerdorf auf dem Festland. Hier können Sie frischen Fisch direkt von den Fischern kaufen und das authentische mexikanische Landleben kennenlernen.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 5: Puerto Los Gatos – Rote Felsen & Ruhe</h4>
                  <p className="text-gray-700">Fahren Sie nach Puerto Los Gatos, einer malerischen Bucht mit beeindruckenden roten Felsformationen. Genießen Sie die Ruhe und die einzigartige Landschaft.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 6: Walhaie & Playa Balandra</h4>
                  <p className="text-gray-700">Auf dem Rückweg nach La Paz haben Sie die Chance, saisonal Walhaie zu sichten und mit ihnen zu schnorcheln. Am Nachmittag besuchen Sie Playa Balandra, eine der schönsten Buchten Mexikos, bekannt für ihre Pilzfelsen.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 7: Abschied vom Paradies</h4>
                  <p className="text-gray-700">Nach einem letzten Frühstück an Bord segeln Sie zurück zu Ihrer Charterbasis in La Paz und treten die Heimreise an – erfüllt von unvergesslichen Eindrücken aus dem „Aquarium der Welt".</p>
                </div>
              </div>

              {/* Wetter Sub-Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Wetter & Windbedingungen: Segeln unter der mexikanischen Sonne</h4>
                <p className="leading-relaxed mb-4">
                  Das Klima in Baja California ist trocken und sonnig, geprägt von der Wüste und dem Einfluss des Golfs von Kalifornien.
                </p>
                <ul className="space-y-3 ml-6">
                  <li>
                    <strong>Saisonale Winde:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• <strong>Coromuel:</strong> Ein thermischer Wind aus Südwest, der am Nachmittag oft für eine angenehme Brise sorgt und das Segeln sehr angenehm macht.</li>
                      <li>• <strong>Chabascos:</strong> Lokale, oft starke Winde, die besonders in den Sommermonaten auftreten können und kurze, intensive Gewitter mit sich bringen.</li>
                    </ul>
                  </li>
                  <li><strong>Trockenzeit (Oktober bis Mai):</strong> Dies ist die Hauptsaison und die beste Reisezeit. Das Wetter ist sonnig und trocken, mit angenehmen Temperaturen (20-30°C) und konstanten Winden. Die Nächte können kühl sein.</li>
                  <li><strong>Regenzeit (Juni bis September):</strong> In dieser Zeit ist es heißer und feuchter, mit gelegentlichen, aber oft kurzen und intensiven Regenschauern. Dies ist auch die Zeit, in der tropische Stürme (Hurrikane) auftreten können, die jedoch meist die Pazifikküste betreffen.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  <strong>Revier-Eignung für Erfahrungsstufen:</strong> Baja California ist ein Revier, das sowohl für weniger erfahrene Segler (insbesondere in den geschützten Gewässern um La Paz) als auch für erfahrene Skipper geeignet ist. Die Navigation in den klaren Gewässern ist tagsüber meist unkompliziert, erfordert aber Aufmerksamkeit für Untiefen und Riffe.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Beste Reisezeit: Wann Ihr Baja California-Traum wahr wird</h3>
              
              <p className="leading-relaxed">
                Die beste Reisezeit für einen Yachtcharter in Baja California ist von Oktober bis Mai. In diesen Monaten sind die Wetterbedingungen ideal mit viel Sonne, moderaten Winden und angenehmen Temperaturen. Die Wahrscheinlichkeit für tropische Stürme ist gering. Besonders geeignet sind die Monate Dezember bis Mai.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Vorschriften & Regeln: Wichtige Hinweise für einen reibungslosen Törn</h3>
              
              <p className="leading-relaxed mb-4">
                Mexiko hat klare Vorschriften für Yachtcharter, die dem Schutz des einzigartigen Ökosystems dienen. Eine genaue Kenntnis und Einhaltung dieser Regeln ist entscheidend für einen reibungslosen Törn.
              </p>
              
              <ul className="space-y-3 ml-6">
                <li><strong>Cruising Permit:</strong> Ein Cruising Permit ist für alle ausländischen Yachten, die in mexikanischen Gewässern segeln, obligatorisch. Ihr Charterunternehmen kümmert sich in der Regel um die Beantragung.</li>
                <li><strong>Sportfischereilizenzen:</strong> Für das Sportfischen ist eine Lizenz erforderlich, die Sie online oder bei lokalen Agenturen erwerben können.</li>
                <li><strong>Naturschutzauflagen:</strong> In den zahlreichen Naturschutzgebieten (z.B. Isla Espíritu Santo) gelten strenge Regeln. Ankern ist nur auf Sandgrund erlaubt, Korallen dürfen nicht beschädigt werden. Müllentsorgung und Abwassermanagement sind strikt geregelt.</li>
                <li><strong>Sichtnavigation:</strong> Aufgrund der vielen Untiefen und Riffe ist die Sichtnavigation bei Tageslicht von größter Bedeutung. Verlassen Sie sich nicht ausschließlich auf elektronische Karten.</li>
                <li><strong>Nachtsegeln:</strong> Wird von den meisten Vercharterern abgeraten und ist in vielen Charterverträgen untersagt, da die Gefahren (unbeleuchtete Fischernetze, Treibgut, fehlende Betonnung) erheblich sind. Planen Sie Ihre Etappen so, dass Sie Ihren Ankerplatz immer bei Tageslicht erreichen.</li>
                <li><strong>Einreisebestimmungen:</strong> Für EU-Bürger ist die Einreise nach Mexiko in der Regel visafrei für touristische Aufenthalte bis zu 180 Tagen. Ein gültiger Reisepass ist erforderlich.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Erfahrungen von Seglern: Ein Paradies mit Abenteuer und Ruhe</h3>
              
              <p className="leading-relaxed mb-4">
                Segler, die Baja California besucht haben, berichten von einem Revier, das sowohl atemberaubende Schönheit als auch spezifische, aber beherrschbare Herausforderungen bietet.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Positives</h4>
              <ul className="space-y-2 ml-6">
                <li>• <strong>Spektakuläre Natur:</strong> Die einzigartige Kombination aus Wüste und Meer, die Vielfalt an Meerestieren und die unberührten Ankerplätze sind unübertroffen.</li>
                <li>• <strong>Tierwelt:</strong> Begegnungen mit Walen, Delfinen, Seelöwen und Walhaien sind häufige und unvergessliche Erlebnisse.</li>
                <li>• <strong>Einfache Tagesnavigation:</strong> Tagsüber ist die Navigation durch das klare Wasser und die gute Sicht auf Untiefen relativ einfach.</li>
                <li>• <strong>Ruhe und Abgeschiedenheit:</strong> Viele Ankerbuchten sind menschenleer und bieten absolute Ruhe.</li>
                <li>• <strong>Moderne Marinas:</strong> Die Marinas in La Paz sind modern und bieten guten Service.</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Herausforderungen</h4>
              <ul className="space-y-2 ml-6">
                <li>• <strong>Versorgung in abgelegenen Gebieten:</strong> Außerhalb der Städte ist die Versorgung begrenzt. Trinkwasser, Proviant und Treibstoff müssen großzügig geplant werden.</li>
                <li>• <strong>Nachtsegeln:</strong> Wird nicht empfohlen und ist riskant.</li>
                <li>• <strong>Ankern auf Kies:</strong> In manchen Buchten ist der Untergrund kiesig, was mehr Kette erfordert, um guten Halt zu gewährleisten.</li>
                <li>• <strong>Behördenkontrollen:</strong> Die Behörden kontrollieren die Einhaltung der Permits und Umweltauflagen.</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Praktische Tipps aus der Seglergemeinschaft</h4>
              <ul className="space-y-2 ml-6">
                <li>• <strong>Sorgfältige Proviantplanung:</strong> Decken Sie sich in La Paz oder Loreto ausreichend ein.</li>
                <li>• <strong>Wassertanks füllen:</strong> Nutzen Sie jede Gelegenheit, um die Wassertanks aufzufüllen, da Frischwasser in den Buchten rar ist.</li>
                <li>• <strong>Sonnenschutz:</strong> Die Sonne ist intensiv, ausreichender Sonnenschutz ist unerlässlich.</li>
                <li>• <strong>Fernglas und Kamera:</strong> Unverzichtbar für die Tierbeobachtung.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Fazit: Ihr Traumtörn im „Aquarium der Welt" – Ein unvergessliches Abenteuer</h3>
              
              <p className="leading-relaxed mb-4">
                Ein Yachtcharter in Baja California ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, mit Seelöwen schnorcheln oder einfach auf dem offenen Meer die Sonne genießen. Es ist die Kombination aus:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li>• <strong>Einzigartigen Segelbedingungen:</strong> Klare, geschützte Gewässer, unzählige Inseln und Buchten, die es zu entdecken gilt.</li>
                <li>• <strong>Atemberaubenden Landschaften:</strong> Karge Wüstenberge, die ins Meer abfallen, und türkisfarbene Lagunen.</li>
                <li>• <strong>Unvergleichliche Tierwelt:</strong> Begegnungen mit Walen, Delfinen, Seelöwen und Walhaien.</li>
                <li>• <strong>Abenteuer und Ruhe:</strong> Die perfekte Mischung aus Naturerkundung und Entspannung.</li>
              </ul>
              
              <p className="leading-relaxed mt-4">
                Baja California bleibt ein spektakuläres Yachtcharter-Revier für alle, die das Abenteuer suchen und die unberührte Schönheit der Sea of Cortez erleben möchten. Wer die Regeln beachtet und sich gut vorbereitet, wird mit einzigartigen Segelerlebnissen und einem tiefen Gefühl der Verbundenheit mit der Natur belohnt.
              </p>
              
              <p className="text-lg font-semibold text-gray-800 mt-6">
                Sind Sie bereit, die Segel zu setzen und das „Aquarium der Welt" zu entdecken?
              </p>
              
              <p className="leading-relaxed">
                Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Baja California an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
              </p>
            </div>
          </div>
        </div>

        {/* Charter Bases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {charterBases.map((base, index) => <div key={index}>
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800">
                        {base.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{base.description}</p>
                    <div className="space-y-1">
                      {base.highlights.map((highlight, idx) => <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <p className="text-sm text-gray-700">{highlight}</p>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>


        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Mexiko?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie spektakuläre Walbeobachtungen, schwimmen Sie mit Seelöwen 
              und entdecken Sie die unberührte Schönheit des Golf von Kalifornien.
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
export default Mexico;