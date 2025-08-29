
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";

const LeewardIslands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Nördliche Kleine Antillen" },
    { icon: Calendar, label: "Beste Zeit", value: "Dezember-Mai" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Inseln", value: "Vielfältige Inselgruppe" }
  ];

  const regions = [
    {
      name: "Leeward Inseln",
      link: "/reviere/karibik/charter-standorte/antigua",
      description: "Vielfältige Inselgruppe mit französischem und niederländischem Flair",
      cities: ["Antigua", "St. Martin", "Guadeloupe", "St. Kitts"]
    }
  ];

  const highlights = [
    "Vielfältige Kulturen und Sprachen",
    "Französisches und niederländisches Flair",
    "Traumhafte Sandstrände",
    "Konstante Passatwinde",
    "Exzellente Gastronomie",
    "Duty-free Shopping",
    "Perfekte Segelbedingungen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/0d4c42e2-59bd-4dcb-b526-875ab1f536b0.png"
          alt="Leeward Inseln - Panoramablick über türkisfarbene Buchten mit Segelbooten"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🏝️ Leeward Inseln</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Leeward Inseln</h1>
            <p className="text-xl max-w-2xl">
              Kulturelle Vielfalt in der nördlichen Karibik
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

        {/* Description */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Leeward Islands: Segeln im Herzen der karibischen Geschichte und Vielfalt</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Die Leeward Islands – ein faszinierendes Archipel im nordöstlichen Teil der Karibik, das Seglern eine einzigartige Mischung aus reicher Geschichte, kultureller Vielfalt und atemberaubender Natur bietet. Ein Yachtcharter in den Leeward Islands ist eine Einladung, in eine Welt einzutauchen, in der das azurblaue Wasser des Atlantiks auf palmengesäumte Strände trifft, wo antike Festungen von vergangenen Zeiten erzählen und die beständigen Passatwinde Sie sanft von einer Insel zur nächsten tragen.
              </p>
              
              <p>
                Stellen Sie sich vor, wie Sie den Anker in einer verträumten, geschützten Bucht lichten, während sich die Segel sanft im beständigen Passatwind wölben und das azurblaue Karibische Meer sich bis zum Horizont erstreckt. Jeder Tag beginnt wie ein Versprechen: Sie gleiten vorbei an malerischen Fischerdörfern, deren farbenfrohe Häuser sich an smaragdgrüne Hänge schmiegen, entdecken geheime Buchten mit puderzuckerweißem Sand, wo die Stille nur vom sanften Plätschern des Wassers unterbrochen wird, und tauchen ein in lebendige Orte, in denen Klänge von Reggae und Calypso die Luft erfüllen und das Lebensgefühl der Karibik widerspiegeln.
              </p>
              
              <p>
                Die Leeward Islands, auch bekannt als "Inseln unter dem Wind", sind das Revier für Segler, die eine perfekte Balance zwischen sportlichem Segeln, kulturellen Entdeckungen und entspanntem Inselleben suchen. Sie bieten eine andere Facette der Karibik als ihre südlichen Nachbarn, die Windward Islands, und sind ein Paradies für alle, die das authentische karibische Flair erleben möchten.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Leeward Islands vs. Windward Islands: Ein Vergleich für Segler</h3>
              <p>Um die Besonderheiten der Leeward Islands zu verstehen, lohnt sich ein Blick auf ihre südlichen Pendants, die Windward Islands.</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Windward Islands (Inseln über dem Wind):</strong> Diese Inseln (z.B. St. Lucia, St. Vincent, Grenada) sind in der Regel vulkanischen Ursprungs, grüner, gebirgiger und feuchter. Die Passagen zwischen ihnen sind oft länger und exponierter, was anspruchsvolleres Segeln auf offener See bedeutet. Sie sind bekannt für ihre dramatischen Landschaften und oft noch ursprünglichere Kulturen.</li>
                <li><strong>Leeward Islands (Inseln unter dem Wind):</strong> Diese Inseln (z.B. Antigua, St. Martin, St. Barth) sind geologisch älter, oft trockener, weniger gebirgig und tendenziell flacher. Die Passagen zwischen ihnen sind zwar auch auf offenem Meer, aber oft kürzer und können durch die Topografie der Inseln etwas geschützter sein. Kulturell sind sie stark von ihrer kolonialen Vergangenheit geprägt (britisch, französisch, niederländisch), was sich in Architektur, Küche und Sprache widerspiegelt. Die Infrastruktur ist oft sehr gut entwickelt, insbesondere in den großen Charterzentren.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Für wen ist das Revier der Leeward Islands geeignet?</h3>
              <p>Die Leeward Islands sind ideal für eine breite Palette von Seglern:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Erfahrene Segler:</strong> Die Passagen zwischen den Inseln bieten sportliches Segeln mit den beständigen Passatwinden. Hier können Sie Ihre Segelfähigkeiten unter Beweis stellen und längere Schläge auf offener See genießen.</li>
                <li><strong>Kulturliebhaber & Geschichtsfans:</strong> Die Inseln sind reich an kolonialer Geschichte, mit beeindruckenden Festungen, Plantagen und charmanten Städten, die zum Erkunden einladen.</li>
                <li><strong>Gourmets & Genießer:</strong> Insbesondere die französischen Inseln wie St. Barth und Guadeloupe sind bekannt für ihre exquisite Küche und bieten ein kulinarisches Erlebnis der Extraklasse.</li>
                <li><strong>Shopping-Begeisterte:</strong> St. Martin/Sint Maarten ist ein Paradies für zollfreies Einkaufen.</li>
                <li><strong>Taucher & Schnorchler:</strong> Die Unterwasserwelt ist lebendig und vielfältig, mit bunten Korallenriffen und einer reichen Meeresfauna.</li>
              </ul>

              <div className="border border-gray-300 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Die Besonderheiten der Leeward Islands</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Kulturelle Vielfalt:</strong> Die einzigartige Mischung aus britischen, französischen und niederländischen Einflüssen schafft eine faszinierende kulturelle Landschaft, die sich in Sprache, Küche und Architektur widerspiegelt.</li>
                  <li><strong>Hervorragende Infrastruktur:</strong> Die Leeward Islands verfügen über einige der besten Marinas und Yachtservice-Einrichtungen in der gesamten Karibik, insbesondere in Antigua und St. Martin.</li>
                  <li><strong>Historische Bedeutung:</strong> Viele Inseln spielten eine wichtige Rolle in der Seefahrtsgeschichte, was sich in gut erhaltenen Festungen und Marinestützpunkten widerspiegelt.</li>
                  <li><strong>Vielfältige Landschaften:</strong> Von den trockenen, kaktusbewachsenen Hügeln Anguillas bis zu den üppigen Regenwäldern Guadeloupes – die landschaftliche Vielfalt ist beeindruckend.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Die Perlen der Leeward Islands: Ihre Törnziele und Highlights</h3>
              <p>Jede Insel der Leeward Islands Kette ist ein Juwel für sich und bietet einzigartige Erlebnisse:</p>

              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Antigua: Die Insel der 365 Strände und der Seefahrtsgeschichte</h4>
              <p>Antigua ist ein Paradies für Segler und bekannt für seine reiche britische Seefahrtsgeschichte und seine unzähligen, oft unberührten Strände.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Charterbasis:</strong> English Harbour und Falmouth Harbour im Süden sind die Hauptzentren für Yachtcharter. Hier finden Sie eine hervorragende Infrastruktur, Restaurants, Bars und eine lebhafte Seglerszene.</li>
                <li><strong>Highlights:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Nelson's Dockyard: Ein UNESCO-Weltkulturerbe und der einzige noch funktionierende georgianische Marinestützpunkt der Welt. Ein Muss für Geschichtsfans.</li>
                    <li>Shirley Heights: Bietet einen spektakulären Panoramablick über English Harbour und die Küste, besonders beeindruckend bei Sonnenuntergang mit Live-Musik.</li>
                    <li>Die 365 Strände: Entdecken Sie jeden Tag einen neuen Strand, von belebten Abschnitten bis zu einsamen Buchten wie Green Island oder Half Moon Bay.</li>
                  </ul>
                </li>
                <li><strong>Unterwasserwelt:</strong> Die Riffe rund um Antigua bieten hervorragende Schnorchel- und Tauchmöglichkeiten mit bunten Korallen und vielfältigem Meeresleben.</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">St. Martin / Sint Maarten: Zwei Nationen, eine Insel</h4>
              <p>Diese einzigartige Insel ist in einen französischen (St. Martin) und einen niederländischen (Sint Maarten) Teil geteilt und bietet eine faszinierende Mischung aus Kulturen, hervorragende Marinas und zollfreies Einkaufen.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Charterbasis:</strong> Die Marinas in der geschützten Simpson Bay Lagoon sind die größten und am besten ausgestatteten der Karibik.</li>
                <li><strong>Highlights:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Französischer Teil (St. Martin): Charmante Hauptstadt Marigot mit französischem Flair, Gourmet-Restaurants in Grand Case, entspannte Atmosphäre.</li>
                    <li>Niederländischer Teil (Sint Maarten): Lebhafte Hauptstadt Philipsburg mit zollfreiem Shopping, Casinos und einer pulsierenden Atmosphäre.</li>
                    <li>Maho Beach: Weltberühmt für die niedrig fliegenden Flugzeuge, die direkt über den Strand hinweg landen.</li>
                  </ul>
                </li>
                <li><strong>Unterwasserwelt:</strong> Die Insel ist umgeben von Riffen und Wracks, die hervorragende Tauch- und Schnorchelbedingungen bieten.</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Guadeloupe: Die Schmetterlingsinsel mit üppiger Natur</h4>
              <p>Als französisches Überseedepartement ist Guadeloupe bekannt für seine Schmetterlingsform, üppige Natur, den aktiven Vulkan La Soufrière und hervorragende kreolische Küche.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Charterbasis:</strong> Pointe-à-Pitre ist die Hauptstadt und der wichtigste Ausgangspunkt für Yachtcharter.</li>
                <li><strong>Highlights:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Les Saintes: Eine malerische Inselgruppe südlich von Guadeloupe, die oft als die schönsten Inseln der Karibik bezeichnet werden. Türkisfarbenes Wasser, charmante Dörfer und die Festung Fort Napoléon.</li>
                    <li>Pigeon Island (Cousteau Marine Park): Ein geschützter Unterwasserpark mit intakten Korallenriffen und einer reichen Fischvielfalt, ideal zum Tauchen und Schnorcheln.</li>
                    <li>La Soufrière: Der aktive Vulkan bietet anspruchsvolle Wanderwege durch üppigen Regenwald.</li>
                  </ul>
                </li>
                <li><strong>Unterwasserwelt:</strong> Die Gewässer um Guadeloupe, insbesondere um Les Saintes und Pigeon Island, sind für ihre hervorragende Sicht und reiche Unterwasserwelt bekannt.</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">St. Barth: Exklusivität und Eleganz</h4>
              <p>St. Barth ist die Insel der Schönen und Reichen, bekannt für ihren exklusiven Charme, luxuriöse Boutiquen und erstklassige Restaurants.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Highlights:</strong> Die Hauptstadt Gustavia mit ihrem malerischen Hafen, die wunderschönen Strände wie Saline Beach oder Gouverneur Beach.</li>
                <li><strong>Nautische Tipps:</strong> Liegeplätze in Gustavia sind teuer und begehrt. Viele Yachten ankern außerhalb der Hafenbucht.</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Anguilla: Unberührte Strände und kulinarische Genüsse</h4>
              <p>Anguilla ist eine flache Koralleninsel, berühmt für ihre unberührten weißen Sandstrände und ihre gehobene Küche.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Highlights:</strong> Shoal Bay East (oft als einer der schönsten Strände der Welt bezeichnet), Rendezvous Bay, und eine Fülle von erstklassigen Restaurants.</li>
                <li><strong>Nautische Tipps:</strong> Die Insel ist von Riffen umgeben, was eine sorgfältige Navigation erfordert.</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">St. Kitts & Nevis: Vulkanische Schönheit und koloniales Erbe</h4>
              <p>Diese Zwillingsinseln bieten eine Mischung aus üppigen, vulkanischen Landschaften und reicher kolonialer Geschichte.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Highlights:</strong> Die Brimstone Hill Fortress auf St. Kitts (UNESCO-Weltkulturerbe), der Nevis Peak (Vulkan), historische Plantagen und charmante Städte.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Erreichbarkeit: Ihr schneller Weg ins Paradies</h3>
              <p>Die Anreise zu den Leeward Islands ist, insbesondere während der Hauptsaison, unkompliziert:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Direktflüge:</strong> Die wichtigsten Inseln verfügen über internationale Flughäfen, die von Europa (insbesondere Deutschland, Frankreich, Großbritannien), den USA und Kanada aus direkt angeflogen werden.
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Antigua (ANU): Für Charter ab Antigua.</li>
                    <li>St. Martin (SXM): Für Charter ab St. Martin.</li>
                    <li>Guadeloupe (PTP): Für Charter ab Guadeloupe.</li>
                  </ul>
                </li>
                <li><strong>Anschlussflüge & Fähren:</strong> Kleinere Inseln wie St. Barth oder Anguilla sind per Anschlussflug von St. Martin oder per Fähre erreichbar. Vom Flughafen zur Marina organisieren wir gerne einen zuverlässigen Transfer für Sie und Ihre Crew.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Marinas & Charteroptionen</h3>
              <p>Die Leeward Islands verfügen über eine hervorragende maritime Infrastruktur, die speziell auf Yachtcharter ausgerichtet ist.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Haupt-Charterbasen:</strong> English Harbour/Falmouth Harbour (Antigua), Simpson Bay Lagoon (St. Martin), Pointe-à-Pitre (Guadeloupe) sind die wichtigsten Ausgangspunkte.</li>
                <li><strong>Charteryachten:</strong> Eine große Auswahl an modernen Segelyachten (Monohulls) und geräumigen Katamaranen steht zur Verfügung. Katamarane sind aufgrund ihres geringen Tiefgangs, der Stabilität und des Komforts besonders beliebt.</li>
                <li><strong>Bareboat vs. Skippered:</strong> Sie können eine Bareboat-Charter wählen, wenn Sie über die nötige Erfahrung und Lizenzen verfügen. Für weniger erfahrene Segler oder diejenigen, die sich einfach entspannen möchten, empfehlen wir einen erfahrenen Skipper, der Sie sicher zu den schönsten Plätzen führt und Ihnen wertvolle Geheimtipps verrät.</li>
              </ul>

              <div className="border border-gray-300 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Wetter & Windbedingungen: Im Rhythmus der Passatwinde</h3>
                <p className="mb-4">Das Klima in den Leeward Islands ist tropisch, mit zwei Hauptsaisons:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Trockenzeit (Dezember - Mai):</strong> Dies ist die Hauptsaison für Yachtcharter. Das Wetter ist stabil, sonnig und trocken. Die Temperaturen sind angenehm warm (ca. 25-30°C), und die Luftfeuchtigkeit ist geringer. Die Passatwinde aus Nordost sind in dieser Zeit am beständigsten und wehen meist mit 15-25 Knoten, was für hervorragende Segelbedingungen sorgt.</li>
                  <li><strong>Regenzeit (Juni - November):</strong> In dieser Zeit ist die Luftfeuchtigkeit höher, und es kann zu kurzen, aber intensiven tropischen Regenschauern kommen. Die Winde sind tendenziell etwas schwächer und variabler. Dies ist auch die Hurrikansaison, wobei das höchste Risiko zwischen August und Oktober liegt.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beste Reisezeit: Wann Ihr Leeward Islands-Traum wahr wird</h3>
              <p>Die beste Reisezeit für Yachtcharter in den Leeward Islands ist von Mitte Dezember bis Ende Mai. In diesen Monaten ist das Wetter am stabilsten, die Passatwinde sind beständig, und das Risiko von Hurrikans ist minimal.</p>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Routenvorschlag: 1 Woche Segeltörn durch die Leeward Islands (ab St. Martin)</h3>
              <p className="mb-6">Dieser Törnvorschlag ist ein Klassiker und führt Sie zu den Highlights der Leeward Islands, ideal für eine entspannte Woche voller Segelspaß und Entdeckungen.</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 1</h4>
                  <p className="text-gray-700">Anreise nach St. Martin, Check-in in der Marina (z.B. in Simpson Bay Lagoon). Proviantierung und erste Nacht an Bord. Erkunden Sie die lebhafte Simpson Bay.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 2</h4>
                  <p className="text-gray-700">St. Martin → Anguilla. Segeln Sie nach Anguilla, bekannt für seine unberührten Strände. Ankern Sie in der Road Bay oder der Rendezvous Bay. Genießen Sie die Ruhe und die ausgezeichnete Küche.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 3</h4>
                  <p className="text-gray-700">Anguilla → St. Barth. Setzen Sie die Segel nach St. Barth, der Insel des Luxus. Ankern Sie in der Gustavia Harbour (Außenbereich) oder einer der schönen Buchten wie Anse de Colombier. Erkunden Sie die Boutiquen und Restaurants.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 4</h4>
                  <p className="text-gray-700">St. Barth → St. Kitts. Ein längerer Schlag nach St. Kitts. Ankern Sie in der White House Bay. Erkunden Sie die historische Brimstone Hill Fortress.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 5</h4>
                  <p className="text-gray-700">St. Kitts → Nevis. Kurzer Schlag zur ruhigeren Nachbarinsel Nevis. Ankern Sie in der Pinney's Beach und entspannen Sie an den Stränden oder erkunden Sie die historischen Plantagen.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 6</h4>
                  <p className="text-gray-700">Nevis → St. Martin. Rückkehr nach St. Martin. Ankern Sie in der Grand Case Bucht auf der französischen Seite. Genießen Sie ein Gourmet-Dinner in einem der vielen Restaurants.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 7</h4>
                  <p className="text-gray-700">St. Martin. Letzter Vormittag zum Schwimmen oder zollfreien Einkaufen. Rückkehr zur Charterbasis, Yachtübergabe und Abreise.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Fazit: Ihr Leeward Islands-Abenteuer wartet</h3>
              <p>Ein Yachtcharter in den Leeward Islands ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, in einer lebhaften Stadt anlegen oder einfach auf dem offenen Meer die Sonne und den Wind genießen. Es ist die perfekte Kombination aus:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Vielseitigen Segelbedingungen:</strong> Sportliches Segeln auf offener See und geschützte Ankerplätze.</li>
                <li><strong>Atemberaubender Natur:</strong> Türkisfarbenes Wasser, palmengesäumte Strände und üppige Landschaften.</li>
                <li><strong>Karibischem Lebensgefühl:</strong> Entspannung, Gastfreundschaft und mitreißende Rhythmen.</li>
                <li><strong>Kultureller Vielfalt:</strong> Eine faszinierende Mischung aus europäischen und karibischen Einflüssen.</li>
              </ul>

              <p className="text-lg font-semibold text-gray-800 mt-6">
                Sind Sie bereit, die Segel zu setzen und Ihr Leeward Islands-Abenteuer zu beginnen?
              </p>
              
              <p>
                Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in den Leeward Islands an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
              </p>
            </div>
          </div>
        </div>

        {/* Charter Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="block hover:no-underline group max-w-2xl mx-auto">
                <Card className="shadow-lg h-full group-hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-purple-200 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700">{region.description}</p>
                    {region.cities && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Verfügbare Charter-Standorte:</div>
                        <div className="grid grid-cols-2 gap-2">
                          {region.cities.map((city, idx) => (
                            <div key={idx} className="text-sm text-purple-600 font-medium group-hover:text-purple-700">
                              • {city}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="text-sm text-purple-600 font-medium group-hover:text-purple-700 flex items-center gap-1">
                      → Charter-Informationen & Marinas
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Leeward Inseln?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die kulturelle Vielfalt der nördlichen Karibik mit 
              französischem Savoir-vivre und karibischer Gelassenheit.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Leeward Inseln Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeewardIslands;
