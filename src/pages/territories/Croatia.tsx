import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import destinationCroatia from "@/assets/destination-croatia.jpg";

const Croatia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [
    { label: "Lage", value: "Adriatisches Meer" },
    { label: "Beste Zeit", value: "Mai - Oktober" },
    { label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { label: "Ankerplätze", value: "1200+ Inseln & Buchten" }
  ];

  const regions = [
    {
      name: "Dalmatien (Split Region)",
      bases: ["Split", "Trogir", "Šibenik"],
      description: "Das Herzstück des kroatischen Segelns mit hunderten Inseln und Buchten"
    },
    {
      name: "Kornaten Nationalpark", 
      bases: ["Murter", "Biograd"],
      description: "Einzigartige Inselwelt mit über 150 unbewohnten Inseln"
    },
    {
      name: "Istrien & Kvarner",
      bases: ["Pula", "Opatija", "Krk"],
      description: "Nördlichste Region mit venezianischem Flair und geschützten Gewässern"
    },
    {
      name: "Süddalmatien",
      bases: ["Dubrovnik", "Korčula"],
      description: "Historische Städte und die berühmte 'Perle der Adria'"
    }
  ];

  const highlights = [
    "Über 1200 Inseln und Buchten",
    "Kristallklares, türkisfarbenes Wasser",
    "Hervorragende Marina-Infrastruktur", 
    "Kurze Distanzen zwischen Häfen",
    "Reiche Geschichte und Kultur",
    "Ausgezeichnete lokale Küche",
    "Stabile Wetterbedingungen",
    "Erschwingliche Preise"
  ];

  const routes = [
    "Split - Hvar - Vis - Korčula",
    "Šibenik - Kornaten - Zadar", 
    "Dubrovnik - Elafiti Inseln",
    "Pula - Rovinj - Brijuni"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationCroatia}
          alt="Kroatien Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇭🇷</span>
            <Badge className="bg-green-500 text-white">Top #1 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Kroatien</h1>
          <p className="text-lg text-white/90 max-w-md">
            Das beliebteste Segelrevier Europas mit über 1200 Inseln
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

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-orange-500 mb-2">
                {index === 0 && <MapPin className="w-6 h-6 mx-auto" />}
                {index === 1 && <Sun className="w-6 h-6 mx-auto" />}
                {index === 2 && <Anchor className="w-6 h-6 mx-auto" />}
                {index === 3 && <Star className="w-6 h-6 mx-auto" />}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{fact.label}</h3>
              <p className="text-gray-600 text-sm">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Yachtcharter Kroatien: Der ultimative Guide für Ihren Traumtörn an der Adria</h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Stellen Sie sich vor: Sie stehen am Steuer Ihrer Yacht, eine sanfte Brise füllt die Segel, die Sonne wärmt Ihr Gesicht und vor Ihnen erstreckt sich das endlose, glitzernde Blau der Adria. Ein Yachtcharter in Kroatien ist mehr als nur ein Urlaub – es ist die ultimative Freiheit, eines der faszinierendsten und vielfältigsten Segelreviere der Welt in Ihrem eigenen Tempo zu entdecken. Mit einer Küstenlinie von über 6.000 Kilometern, mehr als 1.200 Inseln und Inselchen, kristallklarem Wasser, antiken UNESCO-Städten und einer perfekten nautischen Infrastruktur bietet Kroatien die ideale Kulisse für Ihren unvergesslichen Törn.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Unabhängig davon, ob eine Crew einen Bareboat-Charter selbstständig organisiert, mit der Familie einen Katamaran bevorzugt oder einen Törn mit professionellem Skipper plant, bietet Kroatien eine breite Palette an Möglichkeiten. Die Segelgebiete reichen von den belebten Inseln Dalmatiens, die meist von Marinas rund um Split aus angesteuert werden, bis zu den ruhigen Buchten der Kornaten. Damit hält die kroatische Küste für ganz unterschiedliche Ansprüche das passende Revier bereit.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Die Segelreviere Kroatiens: Eine Küste, sechs einzigartige Charaktere</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Kroatien ist nicht gleich Kroatien. Die lange Adriaküste lässt sich in sechs Hauptregionen unterteilen, die jeweils ein einzigartiges Segelerlebnis bieten. Wählen Sie das Revier, das perfekt zu Ihren Wünschen passt.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Istrien: Die kulinarische Halbinsel im Norden</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Oft als die „kroatische Toskana" bezeichnet, verzaubert Istrien mit sanften, grünen Hügeln, mittelalterlichen Städtchen, Olivenhainen und Trüffelwäldern. Das italienische Erbe ist in der Architektur und der hervorragenden Küche spürbar.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Highlights:</strong> Das römische Amphitheater in Pula, die romantische Künstlerstadt Rovinj, der Limski-Kanal und der Brijuni-Nationalpark.</li>
              <li><strong>Segelcharakter:</strong> Kürzere Distanzen zwischen den Häfen, ideal für entspannte Törns. Die Nähe zu Italien und Slowenien macht es zu einem kulturell reichen Revier.</li>
              <li><strong>Ideal für:</strong> Genießer, Kulturinteressierte und Crews, die eine bequeme Anreise mit dem PKW aus Mitteleuropa schätzen.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Kvarner Bucht: Ein Revier der Kontraste</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Die Kvarner Bucht ist ein faszinierendes Revier voller Gegensätze. Hier treffen die dicht bewaldeten, grünen Inseln Cres und Losinj auf die kargeren, von der Bora geformten Landschaften von Krk und Rab.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Highlights:</strong> Die Delfinpopulation vor Losinj, die Sandstrände von Rab, die historische Stadt Krk und die abgeschiedenen Ankerbuchten auf Cres.</li>
              <li><strong>Segelcharakter:</strong> Kann seglerisch anspruchsvoller sein, da die Bora hier stärker auftreten kann. Belohnt wird man mit atemberaubender Naturvielfalt und weniger überlaufenen Zielen.</li>
              <li><strong>Ideal für:</strong> Naturverbundene Segler, erfahrene Crews, die Abwechslung suchen, und alle, die dem Trubel der Hauptsaison entfliehen möchten.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Region Zadar: Das Tor zum nautischen Paradies</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Zadar selbst ist eine faszinierende Stadt mit der berühmten Meeresorgel und dem „Gruß an die Sonne". Doch für Segler ist diese Region vor allem das Tor zum Nationalpark Kornaten. Bei Seglern beliebt sind auch die Marinas in Biograd, Sukosan und auf Murter.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Highlights:</strong> Der Nationalpark Kornaten, ein Labyrinth aus 89 Inseln und Riffen, der Naturpark Telašćica mit seinem Salzsee, und die langen Inseln Dugi Otok und Ugljan.</li>
              <li><strong>Segelcharakter:</strong> Ein absolutes Muss für jeden Wassersportliebhaber. Das Inselhopping in Kroatien erreicht hier eine neue Dimension. Unzählige sichere Ankerbuchten und urige Konobas (einfache Restaurants) direkt am Wasser.</li>
              <li><strong>Ideal für:</strong> Passionierte Segler, Natur- und Ruhesuchende, Entdecker.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Region Sibenik: Historische Schätze und Naturwunder</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Diese Region verbindet Kultur und Natur auf einzigartige Weise. Sibenik, die älteste kroatische Stadt an der Küste, beeindruckt mit ihrer zum UNESCO-Weltkulturerbe gehörenden Kathedrale.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Highlights:</strong> Die Fahrt auf dem Fluss Krka zu den berühmten Krka-Wasserfällen – ein unvergessliches Erlebnis. Die Festungen von Sibenik und die vorgelagerten, autofreien Inseln wie Zlarin und Prvić.</li>
              <li><strong>Segelcharakter:</strong> Eine perfekte Mischung aus Fluss- und Meeresschifffahrt. Gut geschützte Gewässer, ideal für Familien und weniger erfahrene Crews.</li>
              <li><strong>Ideal für:</strong> Familien, Kulturbegeisterte und alle, die ein einzigartiges Naturerlebnis suchen.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">5. Region Split: Das Herz von Dalmatien</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dies ist das beliebteste und bekannteste Revier für Yachtcharter in Kroatien. Von den Marinas rund um Split und Trogir aus liegt Ihnen die weltberühmte Inselwelt Mitteldalmatiens zu Füßen.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Highlights:</strong> Die pulsierende Insel Hvar mit ihrem glamourösen Nachtleben und den vorgelagerten Pakleni-Inseln, der berühmte Strand „Goldenes Horn" auf Brač, die authentische Insel Vis mit der Blauen Grotte und die ruhigere Insel Šolta.</li>
              <li><strong>Segelcharakter:</strong> Perfekte Mischung aus kurzen Schlägen und längeren Passagen, unzählige Buchten, moderne Marinas und lebhafte Hafenstädte. Hier ist immer etwas los.</li>
              <li><strong>Ideal für:</strong> Alle Erfahrungsstufen, Inselhopper, Sonnenanbeter und Crews, die eine perfekte Mischung aus Segeln, Kultur, Natur und Nachtleben suchen.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">6. Region Dubrovnik: Die Perle des Südens</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Ganz im Süden Kroatiens erwartet Sie ein Revier von majestätischer Schönheit. Dubrovnik, die „Perle der Adria", ist mit ihrer imposanten Stadtmauer ein atemberaubender Ausgangs- oder Zielhafen.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Highlights:</strong> Die Stadtmauern von Dubrovnik, der grüne Nationalpark Mljet, die abgeschiedene Insel Lastovo (ein weiterer Naturpark), die Elaphiten-Inseln und die Halbinsel Pelješac, bekannt für ihre exzellenten Weine und Muschelfarmen.</li>
              <li><strong>Segelcharakter:</strong> Etwas längere Distanzen zwischen den Hauptinseln, dafür belohnt mit üppiger Vegetation und viel Ruhe abseits der Hauptrouten.</li>
              <li><strong>Ideal für:</strong> Erfahrene Segler, Geschichts- und Weinliebhaber, Ruhesuchende.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ihre bequeme Anreise zum Chartertörn</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Kroatien ist dank seiner hervorragenden Verkehrsanbindung schnell und komfortabel zu erreichen, egal ob per Flugzeug oder mit dem eigenen PKW.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Per Flugzeug:</h3>
            <p className="text-lg text-gray-700 mb-3">Zahlreiche Direktflüge verbinden die wichtigsten Charterbasen mit fast allen großen europäischen Flughäfen.</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Für Istrien & Kvarner: Flughafen Pula (PUY) oder Rijeka (RJK).</li>
              <li>Für die Region Zadar: Flughafen Zadar (ZAD).</li>
              <li>Für die Regionen Split & Sibenik: Flughafen Split (SPU) ist der größte und wichtigste Hub.</li>
              <li>Für die Region Dubrovnik: Flughafen Dubrovnik (DBV).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Mit dem PKW:</h3>
            <p className="text-lg text-gray-700 mb-6">
              Insbesondere die nördlichen Reviere sind aus Deutschland, Österreich und der Schweiz sehr gut erreichbar. Das moderne kroatische Autobahnnetz (insbesondere die A1, die "Dalmatina") ermöglicht eine schnelle Fahrt bis nach Split und weiter südlich. Die meisten Marinas bieten bewachte Parkplätze für die Dauer Ihres Törns.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Marinas und Flotte: Infrastruktur auf Weltklasse-Niveau</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Die maritime Infrastruktur</h3>
            <p className="text-lg text-gray-700 mb-3">
              Kroatien verfügt über eine der besten und dichtesten maritimen Infrastrukturen im gesamten Mittelmeer. Das Netz aus über 50 modernen Marinas, darunter die renommierte ACI-Kette (Adriatic Croatia International Club), bietet höchsten Standard:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Sichere Liegeplätze mit Murings, Strom- und Wasseranschluss.</li>
              <li>Gepflegte Sanitäranlagen.</li>
              <li>Restaurants, Supermärkte und nautische Geschäfte direkt im Hafen.</li>
              <li>Technischer Service und Krananlagen.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ihre Traumyacht: Von der sportlichen Segelyacht bis zum luxuriösen Katamaran</h3>
            <p className="text-lg text-gray-700 mb-3">
              Unsere Flotte bietet eine riesige Auswahl an Charteryachten für jeden Anspruch und jedes Budget.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Segelyachten (Monohulls):</strong> Der Klassiker für den passionierten Segler. Sie bieten exzellente Segeleigenschaften und ein authentisches Gefühl am Wind. Ideal für sportliche Crews und alle, für die das Segeln selbst im Vordergrund steht.</li>
              <li><strong>Katamarane:</strong> Die erste Wahl für Komfort, Platz und Stabilität. Mit ihrem riesigen Salon, dem großen Cockpit und den Netzen im Bug sind sie wie schwimmende Ferienhäuser. Perfekt für Familien, größere Gruppen und alle, die Wert auf entspanntes Bordleben und geringe Krängung legen.</li>
              <li><strong>Motoryachten:</strong> Für alle, die schnell von A nach B kommen und in kurzer Zeit möglichst viel entdecken wollen. Sie bieten Luxus, Geschwindigkeit und Komfort.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Törnvorschlag: Der Klassiker – 7 Tage Inselhopping ab Split</h2>
            <p className="text-lg text-gray-700 mb-4">
              Dieser Törnvorschlag ist eine perfekte Einführung in die Schönheit Dalmatiens und kombiniert beliebte Ziele mit ruhigeren Ankerplätzen.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 1: Split/Trogir → Insel Šolta (Maslinica) (ca. 12 sm)</h4>
                <p className="text-gray-700">Nach dem Check-in in Ihrer Split Marina segeln Sie einen kurzen, entspannten Schlag zur Westseite der Insel Šolta. Der kleine Fischerort Maslinica verzaubert mit seinem Charme und bietet eine wunderschöne Bucht zum Ankern oder sichere Liegeplätze an der neuen Mole.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 2: Šolta → Insel Vis (Stadt Vis) (ca. 22 sm)</h4>
                <p className="text-gray-700">Heute steht eine längere Passage zur faszinierenden Insel Vis an. Vis war lange militärisches Sperrgebiet und hat sich dadurch eine einzigartige Authentizität bewahrt. Erkunden Sie die Stadt Vis mit ihren antiken Ruinen und genießen Sie den Abend in einer der hervorragenden Konobas.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 3: Vis → Blaue Grotte (Biševo) → Komiža (Vis) (ca. 18 sm)</h4>
                <p className="text-gray-700">Ein absolutes Highlight! Segeln Sie am Morgen zur Nachbarinsel Biševo und besuchen Sie die weltberühmte Blaue Grotte (am besten zwischen 10 und 12 Uhr). Danach geht es in den malerischen Fischerort Komiža an der Westküste von Vis.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 4: Komiža → Insel Hvar (Pakleni Inseln) (ca. 15 sm)</h4>
                <p className="text-gray-700">Kurs auf die berühmteste Insel Kroatiens. Anstatt direkt in den oft vollen Stadthafen von Hvar zu fahren, ankern Sie in einer der traumhaften Buchten der vorgelagerten Pakleni-Inseln (z.B. Vinogradišće). Von hier können Sie bequem mit einem Wassertaxi in die Stadt Hvar übersetzen.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 5: Pakleni Inseln → Insel Brač (Milna) (ca. 12 sm)</h4>
                <p className="text-gray-700">Nach einem morgendlichen Bad in der Ankerbucht segeln Sie zur Insel Brač. Der Ort Milna an der Westküste ist ein perfekt geschützter Naturhafen und bekannt für seine schöne Marina und die entspannte Atmosphäre.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 6: Milna → Bucht Bobovišće oder Stomorska (Šolta) (ca. 8 sm)</h4>
                <p className="text-gray-700">Ein letzter entspannter Segeltag. Sie können entweder in der tief eingeschnittenen und ruhigen Bucht von Bobovišće auf Brač ankern oder zum charmanten Hafenort Stomorska an der Nordküste von Šolta segeln, um ein letztes Mal dalmatinisches Flair zu genießen.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 7: Zurück zur Basis-Marina (ca. 10-15 sm)</h4>
                <p className="text-gray-700">Genießen Sie ein letztes Frühstück an Bord, bevor Sie den kurzen Schlag zurück zu Ihrer Ausgangsmarina antreten. Check-out und Abreise mit unvergesslichen Erinnerungen.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Wetter und Windbedingungen: Was Skipper wissen müssen</h2>
            <p className="text-lg text-gray-700 mb-4">
              Die Adria ist für ihre generell gutmütigen Segelbedingungen bekannt, doch jeder Skipper sollte die lokalen Winde kennen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Die Winde der Adria: Maestral, Bora und Jugo</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Maestral (NW):</strong> Der König der Sommerwinde. Ein thermischer Schönwetterwind, der am späten Vormittag einsetzt, am Nachmittag eine angenehme Stärke von 3-5 Bft erreicht und zum Abend hin wieder einschläft. Er sorgt für perfektes, unbeschwertes Segeln in Kroatien.</li>
              <li><strong>Bora (NO):</strong> Ein trockener, kalter und böiger Fallwind, der hauptsächlich von Herbst bis Frühling auftritt. Im Sommer sind Bora-Ereignisse selten und kurz. Sie kommt plötzlich, sorgt für klaren Himmel und kann erhebliche Stärken erreichen. Gutes Reffmanagement und Respekt vor dem Wind sind hier entscheidend.</li>
              <li><strong>Jugo (SO):</strong> Ein warmer, feuchter Wind, der sich über mehrere Tage aufbaut und eine beachtliche Welle mit sich bringen kann. Er kündigt oft eine Wetterverschlechterung an. Erfahrene Segler nutzen ihn für schnelle Törns auf raumen Kursen.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Das Revier im Wandel der Jahreszeiten</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Frühling (April - Mai):</strong> Die Natur erwacht, alles ist grün und blüht. Die Temperaturen sind mild, die Häfen und Buchten leer. Das Wasser ist noch frisch, aber die Segelbedingungen sind oft exzellent. Ein Revier für Kenner.</li>
              <li><strong>Sommer (Juni - August):</strong> Hochsaison mit warmem Wasser, viel Sonnenschein und dem zuverlässigen Maestral. Die Inseln und Städte sind voller Leben. Es ist ratsam, Liegeplätze in beliebten Marinas vorab zu reservieren. Ideal für Familien und Sonnenanbeter.</li>
              <li><strong>Herbst (September - Oktober):</strong> Für viele die beste Zeit zum Segeln. Das Meer ist noch vom Sommer aufgewärmt, die Touristenströme haben nachgelassen, und das Licht ist golden und weich. Die Winde können etwas unbeständiger sein, aber die Atmosphäre ist entspannt und authentisch.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Beste Reisezeit für Ihren Kroatien-Törn</h2>
            <p className="text-lg text-gray-700 mb-4">
              Die ideale Saison für einen Yachtcharter in Kroatien erstreckt sich von Ende April bis Mitte Oktober.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Für entspanntes Familiensegeln und Badeurlaub: Juni bis September.</li>
              <li>Für ambitioniertes Segeln mit weniger Trubel: Mai und Ende September bis Anfang Oktober.</li>
              <li>Für die günstigsten Preise und die meiste Ruhe: April und Oktober.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Fazit: Kroatien – Ein Segelrevier der Superlative</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ein Yachtcharter in Kroatien ist eine Reise durch atemberaubende Naturlandschaften, jahrtausendealte Kultur und pure mediterrane Lebensfreude. Die unschlagbare Kombination aus perfekten Segelbedingungen, einer erstklassigen Infrastruktur, unzähligen Törnzielen in Dalmatien und der ganzen Adria sowie der herzlichen Gastfreundschaft macht Kroatien zu einer absoluten Top-Destination für Ihren nächsten Bootsurlaub. Es ist ein Revier, das man immer wieder neu entdecken kann und das jeden Segler in seinen Bann zieht.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">Setzen Sie die Segel für Ihr Kroatien-Abenteuer!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sind Sie bereit, die Anker zu lichten? Ob Sie einen Bareboat-Charter für erfahrene Skipper suchen oder einen entspannten Törn mit einem unserer professionellen Skipper bevorzugen – wir machen Ihren Traumtörn zur Realität.
            </p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Kontaktieren Sie unser Expertenteam noch heute für Ihr persönliches und unverbindliches Angebot. Wir freuen uns darauf, Ihren perfekten Segelurlaub in Kroatien zu planen!
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Kroatien?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{region.name}</h3>
                <p className="text-gray-600 mb-4">{region.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Stützpunkte:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.bases.map((base, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                        {base}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Beliebte Routen</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid gap-3 md:grid-cols-2">
              {routes.map((route, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{route}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Kroatien?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das #1 Segelrevier der Welt mit über 1200 Inseln, 
              kristallklarem Wasser und perfekter Infrastruktur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Kroatien-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Croatia;