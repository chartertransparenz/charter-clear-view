import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import TerritoryMap from "@/components/TerritoryMap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Korsika = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Französisches Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Erfahrene Segler" },
    { icon: Anchor, label: "Besonderheit", value: "Insel der Schönheit" }
  ];

  const cities = [
    "Ajaccio",
    "Bonifacio"
  ];

  const highlights = [
    "Kristallklares, türkisfarbenes Wasser",
    "Dramatische Klippen und Felsformationen",
    "Unberührte Natur und einsame Buchten", 
    "Französische Kultur mit italienischem Flair",
    "Excellente lokale Küche und Weine",
    "Weniger überlaufen als die Côte d'Azur",
    "Vielfältige Landschaften auf kleinem Raum"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img 
          src="/lovable-uploads/b54e3a6d-8df0-42dd-a8c2-3d59a4618322.png" 
          alt="Korsika sailing paradise with turquoise waters"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇫🇷 Frankreich</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Korsika</h1>
            <p className="text-xl max-w-2xl">
              Die Insel der Schönheit im Mittelmeer
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer/frankreich" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Frankreich
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
                  <Link to="/reviere/mittelmeer/frankreich">Frankreich</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Korsika</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6 text-center">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Karte */}
        <div className="mb-12">
          <TerritoryMap 
            region="Korsika & Nordsardinien"
            center={{ lat: 41.6, lng: 9.1 }}
            zoom={8}
            maptype="satellite"
          />
        </div>

        {/* Description */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Yachtcharter Korsika: Segeln im Herzen der „Île de Beauté"</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Korsika – die „Île de Beauté", die Insel der Schönheit. Dieser Name ist keine Übertreibung, sondern eine treffende Beschreibung für ein Segelrevier, das zu den faszinierendsten und abwechslungsreichsten im gesamten Mittelmeer zählt. Ein Yachtcharter auf Korsika ist eine Einladung, ein einzigartiges Naturparadies zu entdecken, das wilde, zerklüftete Küsten mit karibisch anmutenden Sandstränden, dichten Macchia-Wäldern und majestätischen Gebirgszügen vereint. Hier segeln Sie durch kristallklares, türkisfarbenes Wasser, umgeben von bizarren Felsformationen und einer Geschichte, die so vielfältig ist wie die Landschaft selbst.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Korsika ist ein Mikrokosmos, der die Essenz des Mittelmeers in sich trägt – eine Mischung aus französischer Eleganz und italienischem Temperament, gepaart mit einer tief verwurzelten eigenen Identität. Ob Sie die raue Schönheit der Westküste erkunden, die glamourösen Buchten im Süden ansteuern oder die unberührten Naturreservate im Norden entdecken möchten: Korsika bietet für jeden Segler, vom erfahrenen Seebären bis zum genussvollen Inselhüpfer, das perfekte Abenteuer. Die Freiheit, jeden Tag einen neuen Ankerplatz zu wählen, die Stille abgelegener Buchten zu genießen und abends in charmanten Hafenstädten einzukehren, macht einen Törn rund um Korsika zu einem unvergesslichen Erlebnis.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Korsikas Vielfalt: Ein Törn durch unterschiedliche Welten</h3>
            <p className="text-lg text-gray-700 mb-6">
              Die Insel ist in ihrer Topografie so vielfältig, dass jeder Küstenabschnitt seinen eigenen, unverwechselbaren Charakter hat.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Der Süden: Bonifacio und die Lavezzi-Inseln – Spektakel und Paradies</h4>
            <p className="text-lg text-gray-700 mb-4">
              Der Süden Korsikas ist zweifellos der spektakulärste Teil des Reviers und ein absolutes Highlight für jeden Segler.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Bonifacio:</strong> Die Einfahrt in den Naturhafen von Bonifacio ist ein Erlebnis, das man nie vergisst. Die Stadt thront majestätisch auf weißen Kalksteinklippen, die sich dramatisch aus dem Meer erheben. Der fjordähnliche Hafen ist tief eingeschnitten und bietet einen sicheren Liegeplatz unterhalb der historischen Zitadelle. Ein Spaziergang durch die engen Gassen der Altstadt, ein Besuch der Treppe des Königs von Aragon oder ein Abendessen mit Blick auf die Meerenge sind unvergesslich.</li>
              <li><strong>Die Lavezzi-Inseln:</strong> Südöstlich von Bonifacio liegt der Lavezzi-Archipel, ein Naturreservat aus über 20 kleinen Inseln und Felsen, die mit ihren Granitformationen und dem unglaublich klaren Wasser an die Seychellen erinnern. Hier finden Sie unzählige, gut geschützte Ankerplätze zum Schwimmen, Schnorcheln und Tauchen. Das Gebiet ist streng geschützt, und das Ankern ist nur in ausgewiesenen Zonen erlaubt.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Die Westküste: Ajaccio und die Calanques de Piana – Wildheit und Romantik</h4>
            <p className="text-lg text-gray-700 mb-4">
              Die Westküste Korsikas ist geprägt von einer wilden und unberührten Natur, die ihresgleichen sucht.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Ajaccio:</strong> Als Hauptstadt Korsikas und Geburtsort Napoleons ist Ajaccio ein lebhafter und historisch bedeutsamer Ausgangspunkt. Die Stadt bietet eine ausgezeichnete Infrastruktur, zahlreiche Marinas und eine charmante Altstadt mit Museen und Märkten. Von hier aus können Sie die südliche Westküste erkunden.</li>
              <li><strong>Die Calanques de Piana:</strong> Nördlich von Ajaccio erstrecken sich die Calanques de Piana, ein UNESCO-Welterbe und ein absolutes Naturwunder. Rote Granitfelsen, von Wind und Wetter geformt, stürzen hier dramatisch ins Meer und bilden bizarre Skulpturen. Das Segeln entlang dieser Küste bei Sonnenuntergang, wenn die Felsen in allen Rottönen leuchten, ist ein magisches Erlebnis.</li>
              <li><strong>Der Golf von Porto & das Scandola-Reservat:</strong> Weiter nördlich liegt der Golf von Porto, ebenfalls UNESCO-Welterbe, mit dem streng geschützten Scandola-Naturreservat. Dieses marine und terrestrische Schutzgebiet ist nur vom Meer aus zugänglich und bietet eine einzigartige Flora und Fauna. Das Ankern ist hier verboten, aber die Umrundung mit der Yacht oder dem Dingi ist erlaubt und ein Muss für Naturliebhaber.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Der Norden: Cap Corse und die Agriates-Wüste – Ursprünglichkeit und Ruhe</h4>
            <p className="text-lg text-gray-700 mb-4">
              Der Norden Korsikas ist rauer und weniger besiedelt.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Cap Corse:</strong> Die Halbinsel Cap Corse ist wild und ursprünglich. Hier finden Sie charmante Fischerdörfer wie Centuri und Nonza, die sich an steile Hänge schmiegen. Die Küste ist exponierter und die Winde können hier kräftiger sein, was das Revier für sportlichere Segler interessant macht.</li>
              <li><strong>Die Agriates-Wüste:</strong> Westlich von Saint-Florent erstreckt sich die „Désert des Agriates", eine unberührte Küstenlandschaft mit einigen der schönsten und abgelegensten Strände Korsikas, die nur vom Meer aus erreichbar sind.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Die Ostküste: Bastia und lange Sandstrände – Entspannung und Infrastruktur</h4>
            <p className="text-lg text-gray-700 mb-4">
              Die Ostküste Korsikas ist flacher und touristisch besser erschlossen.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Bastia:</strong> Die zweitgrößte Stadt Korsikas und ein wichtiger Fährhafen. Bastia bietet eine lebhafte Atmosphäre, eine schöne Altstadt und ist ein guter Ausgangspunkt, um den Norden und Osten der Insel zu erkunden.</li>
              <li><strong>Lange Sandstrände:</strong> Entlang der Ostküste finden Sie zahlreiche lange Sandstrände, die ideal für entspannte Badetage und Ankerstopps sind.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ihre Ausgangspunkte: Direkt auf Korsika oder als spannender Überführungstörn</h3>
            <p className="text-lg text-gray-700 mb-4">
              Für Ihren Yachtcharter auf Korsika haben Sie verschiedene Optionen für den Startpunkt, je nachdem, welche Region Sie primär erkunden möchten und wie viel Zeit Sie zur Verfügung haben.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Direkt auf Korsika chartern:</h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Ajaccio:</strong> Ideal, um die West- und Südküste zu erkunden.</li>
              <li><strong>Bastia:</strong> Perfekt für Törns entlang der Ostküste und um Cap Corse.</li>
              <li><strong>Propriano:</strong> Eine gute Basis im Südwesten, um die südliche Westküste und den Golf von Valinco zu entdecken.</li>
              <li><strong>Calvi:</strong> Im Nordwesten gelegen, ideal für die Erkundung der Calanques de Piana und des Scandola-Reservats.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Korsika als Ziel eines Überführungstörns:</h4>
            <p className="text-lg text-gray-700 mb-4">
              Für Segler, die mehr Zeit haben (mindestens 10 Tage bis 2 Wochen) und die Anreise zum Törn selbst machen möchten, bietet sich Korsika als Ziel eines Überführungstörns von anderen Revieren an:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Von Elba (Italien):</strong> Die Insel Elba ist nur einen Katzensprung von Korsika entfernt (ca. 25 Seemeilen über die Straße von Korsika). Viele Skipper chartern auf Elba und machen einen Abstecher nach Korsika, insbesondere zur Ostküste oder zum Cap Corse. Dies ist eine beliebte Option für 10- bis 14-tägige Törns.</li>
              <li><strong>Von der französischen Côte d'Azur:</strong> Für längere Törns (ab 2 Wochen) ist es auch möglich, von Charterbasen an der französischen Côte d'Azur (z.B. Nizza, Cannes, Antibes) nach Korsika zu segeln. Die Überfahrt über das offene Meer erfordert jedoch eine gute Wetterplanung und Erfahrung.</li>
              <li><strong>Von der italienischen Costa Smeralda (Sardinien):</strong> Eine besonders reizvolle Option ist die Kombination eines Korsika-Törns mit dem Segelparadies der Costa Smeralda und des La Maddalena Archipels. Die Straße von Bonifacio zwischen Sardinien und Korsika ist zwar für ihre Düseneffekte und teils kräftigen Winde bekannt, bietet aber eine der spektakulärsten Passagen im Mittelmeer. Viele Crews chartern auf Sardinien (z.B. in Portisco oder Olbia) und segeln von dort nach Bonifacio und erkunden den Süden Korsikas.</li>
            </ul>

            <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Wind, Wetter und die beste Reisezeit</h4>
              <p className="text-gray-700 mb-4">
                Das Klima auf Korsika ist mediterran, mit heißen, trockenen Sommern und milden Wintern.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Windbedingungen:</h5>
                <p className="text-gray-700 mb-2">Korsika ist bekannt für seine beständigen und oft kräftigen Winde.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li><strong>Mistral (Maestrale):</strong> Der vorherrschende Wind aus Nordwest, der besonders an der Westküste und in der Straße von Bonifacio stark sein kann. Er bringt klaren Himmel und gute Sicht, kann aber auch eine beachtliche Welle aufbauen.</li>
                  <li><strong>Libeccio:</strong> Ein Südwestwind, der ebenfalls kräftig sein kann.</li>
                  <li><strong>Scirocco:</strong> Ein warmer, feuchter Wind aus Südost, der oft Sand aus der Sahara mit sich bringt.</li>
                  <li><strong>Im Sommer dominieren thermische Winde (Land- und Seebrisen):</strong> die tagsüber für moderate Segelbedingungen sorgen und nachts oft einschlafen.</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Beste Reisezeit:</h5>
                <p className="text-gray-700">
                  Die Monate Mai, Juni und September sind ideal. Die Temperaturen sind angenehm, die Natur ist grün, und die Häfen und Buchten sind belebt, aber nicht überfüllt. Im Juli und August ist Hochsaison mit sehr hohen Temperaturen und maximalem Andrang in den Hotspots.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">7-Tage-Törn: Südkorsika ohne „Meilenfressen"</h3>
            <p className="text-lg text-gray-700 mb-6">
              Fokus: viele Badebuchten, kurze Schläge, schöne Orte ansteuern. Jeder Abschnitt bleibt unter 20 sm; es geht um entspanntes Yachtcharter-Erleben mit viel Zeit zum Schwimmen, Schnorcheln und Bummeln.
            </p>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Tag 1 – Ajaccio → Halbinsel Isolella</h4>
              <p className="text-gray-700 mb-2">Sanftes Einsegeln im Golf von Ajaccio. Vor der Halbinsel Isolella warten glasklare, sandige Buchten.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Baden & Schnorcheln:</strong> Seegraswiesen, flach abfallende Strände – perfekt für den ersten Sprung ins Wasser.</li>
                <li><strong>Ankern:</strong> Sand mit gutem Halt rund um Anse d'Isolella.</li>
                <li><strong>An Land:</strong> Kurzer Spaziergang zur kleinen Landspitze mit Blick über den Golf – Sonnenuntergang inklusive.</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Tag 2 – Isolella → Cala d'Orzu (Plage d'Argent)</h4>
              <p className="text-gray-700 mb-2">Küstennahe Genuss-Etappe entlang felsiger Landzungen.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Badebucht:</strong> Cala d'Orzu („Plage d'Argent") – türkisgrün, feiner Sand, karibisches Flair.</li>
                <li><strong>Ankern:</strong> Sandfelder, bei ruhigem Wetter sehr komfortabel.</li>
                <li><strong>Unternehmen:</strong> Strandbummel, SUP/Kajak entlang der Felsen; wer mag, ein kleiner Hike Richtung Capo di Muro.</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Tag 3 – Cala d'Orzu → Campomoro (Golfe de Valinco)</h4>
              <p className="text-gray-700 mb-2">Die Küste öffnet sich Richtung Valinco – Granit, Macchia, viel Blau.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Ort & Aussicht:</strong> Campomoro mit genuesischem Turm und Promenade – authentisch korsisch.</li>
                <li><strong>Badebuchten:</strong> Mehrere sandige Einschnitte nördlich/südlich des Ortes; klares Wasser, gute Schnorchel-Spots.</li>
                <li><strong>Landgang:</strong> Turm-Rundweg mit Küstenpfad und fabelhaften Fotopunkten.</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Tag 4 – Campomoro → Tizzano</h4>
              <p className="text-gray-700 mb-2">Kurzer Hüpfer in ein verschlafenes Fischerdörfchen – genau richtig für Entschleunigung.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Ort:</strong> Tizzano – kleine Lokale, Steinpiers, sehr ruhige Atmosphäre.</li>
                <li><strong>Badebuchten:</strong> Sandige Ankerstellen um Plage de Tizzano und Richtung Arbitru; Felsenriffe mit Fischschwärmen.</li>
                <li><strong>Tipp:</strong> Früh ankommen, die bekanntesten Sandflecke sind beliebt.</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Tag 5 – Tizzano → Roccapina</h4>
              <p className="text-gray-700 mb-2">Eine der ikonischsten Kulissen Südkorsikas.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Traumbucht:</strong> Cala di Roccapina – weißer Sand, türkisfarbenes Wasser, der Felsenlöwe „Lion de Roccapina" wacht darüber.</li>
                <li><strong>Ankern:</strong> Weite Sandflächen; bei Dünung möglichst tiefer in die Bucht.</li>
                <li><strong>An Land:</strong> Kurzer Aufstieg zur alten Wachtanlage – Panorama pur.</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Tag 6 – Roccapina → Cupabia / Porto Pollo (Valinco Nordost)</h4>
              <p className="text-gray-700 mb-2">Zurück in den Golfe de Valinco, wo eine der beliebtesten Badestellen wartet.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Badehotspot:</strong> Plage de Cupabia – halbrunde, weitläufige Sandbucht mit kristallklarem Wasser.</li>
                <li><strong>Ankern:</strong> Sandboden, viel Platz; ideal für einen langen Badetag.</li>
                <li><strong>Alternative:</strong> Porto Pollo für Eisdiele, Bäckerei und kleiner Strandspaziergang.</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Tag 7 – Cupabia / Porto Pollo → Ajaccio (mit Badestopp Capo di Muro oder Sanguinaires)</h4>
              <p className="text-gray-700 mb-2">Genussvolle Schlussetappe mit finalem Sprung ins Meer.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Badestopp:</strong> Felsige Becken am Capo di Muro oder – bei sehr stabilem Wetter – eine Runde um die Îles Sanguinaires (nur bei ruhiger See).</li>
                <li><strong>Ajaccio:</strong> Bummel durch die Altstadt, Marktbesuch, Maison Bonaparte, kleine Lokale an der Uferpromenade.</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Lieblings-Badebuchten dieses Törns</h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li><strong>Anse d'Isolella</strong> – sandig, familienfreundlich, klares Wasser.</li>
              <li><strong>Cala d'Orzu / Plage d'Argent</strong> – türkis, feinkörnig, Postkartenmotiv.</li>
              <li><strong>Campomoro-Buchten</strong> – mehrere Sandkerne, gut geschützt, schöner Küstenpfad.</li>
              <li><strong>Tizzano & Arbitru</strong> – helles Wasser, schnorchelige Felsnasen.</li>
              <li><strong>Cala di Roccapina</strong> – ikonische Postkartenbucht mit „Löwe".</li>
              <li><strong>Cupabia</strong> – groß, hell, viel Raum zum Schwimmen und SUP.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Praktische Hinweise</h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li><strong>Ankern & Schutz:</strong> In vielen Buchten dominiert Sand – ideal fürs Einfahren des Ankers. Bei Schwell Alternativen im Golf suchen.</li>
              <li><strong>Naturschutz & Respekt:</strong> Seegraswiesen meiden, markierte Zonen beachten; Bojen nutzen, wo vorhanden.</li>
              <li><strong>Proviant:</strong> Gute Versorger in Ajaccio; unterwegs kleine Läden/Restaurants in Campomoro, Tizzano und Porto Pollo.</li>
              <li><strong>Charter-Komfort:</strong> Dieser Plan passt perfekt zu entspannter Yachtcharter ohne lange Distanzen – viel Zeit für Boot mieten-Genuss, Badepausen und Landgänge.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fazit: Korsika – Ein Segeltraum für Anspruchsvolle</h3>
            <p className="text-lg text-gray-700 mb-4">
              Ein Yachtcharter auf Korsika ist eine einzigartige Erfahrung, die alle Sinne anspricht. Es ist die Freiheit, zwischen einem Badetag in einer karibischen Bucht und einer Wanderung in den Bergen zu wählen, zwischen einem Abendessen in einem mondänen Hafen und einer stillen Nacht unter dem Sternenhimmel in einer einsamen Ankerbucht. Die Kombination aus atemberaubender Natur, tiefgründiger Kultur und anspruchsvollen, aber lohnenden Segelbedingungen macht Korsika zu einem unvergesslichen Ziel für jeden Seefahrer.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Sind Sie bereit, die Segel zu setzen und die „Île de Beauté" zu erobern?
            </p>
            <p className="text-lg text-gray-700">
              Kontaktieren Sie uns für Ihr persönliches Angebot. Wir helfen Ihnen, die perfekte Yacht für Ihre Entdeckungsreise durch dieses magische Revier zu finden, sei es direkt ab Korsika oder als spannender Überführungstörn von Sardinien oder dem französischen Festland.
            </p>
          </div>
        </div>

        {/* Important Harbors & Ports */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Häfen & Ankerplätze</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cities.map((city, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{city}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Korsika?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="font-medium text-gray-800">{highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Bereit für das korsische Abenteuer?
            </h3>
            <p className="mb-6 text-gray-700">
              Entdecken Sie die unberührte Schönheit Korsikas und erleben Sie ein 
              authentisches Segelerlebnis fernab der Massen.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default Korsika;