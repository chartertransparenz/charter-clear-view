import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import TerritoryMap from "@/components/TerritoryMap";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import destinationCroatia from "@/assets/destination-croatia.jpg";
const Croatia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Nordöstliches Mittelmeer"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Inseln",
    value: "Über 1.200 Inseln"
  }];
  const regions = [{
    name: "Istrien",
    link: "/reviere/mittelmeer/kroatien/istrien",
    description: "Die grüne Halbinsel mit venezianischem Flair und perfekter Marina-Infrastruktur",
    cities: ["Pula", "Rovinj", "Poreč", "Umag"]
  }, {
    name: "Kvarner Bucht",
    link: "/reviere/mittelmeer/kroatien/kvarner-bucht",
    description: "Geschützte Inselwelt mit authentischem Charme und kurzen Distanzen",
    cities: ["Rijeka", "Krk", "Rab", "Cres", "Mali Lošinj"]
  }, {
    name: "Norddalmatien",
    link: "/reviere/mittelmeer/kroatien/norddalmatien",
    description: "Kornati Nationalpark und unberührte Naturschönheiten",
    cities: ["Zadar", "Šibenik", "Biograd", "Murter"]
  }, {
    name: "Mitteldalmatien",
    link: "/reviere/mittelmeer/kroatien/mitteldalmatien",
    description: "Das Herzstück Kroatiens mit Split, Hvar und den schönsten Inseln",
    cities: ["Split", "Hvar", "Brač", "Vis", "Trogir"]
  }, {
    name: "Süddalmatien",
    link: "/reviere/mittelmeer/kroatien/sueddalmatien",
    description: "Dubrovnik und die südlichsten Perlen der kroatischen Adria",
    cities: ["Dubrovnik", "Korčula", "Mljet", "Lastovo"]
  }];
  const highlights = ["Über 1.200 Inseln und Inselchen", "Kristallklares, türkisfarbenes Wasser", "Exzellente Marina-Infrastruktur", "Kurze Distanzen zwischen Ankerplätzen", "UNESCO-Weltkulturerbe Städte", "Kornaten-Nationalpark", "Perfekte Segelbedingungen"];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={destinationCroatia} alt="Kroatien Mittelmeer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇭🇷 Kroatien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kroatien</h1>
            <p className="text-xl max-w-2xl">
              Die Perle der Adria
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Mittelmeer
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
                  <Link to="/reviere/mittelmeer">Mittelmeer</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Kroatien</BreadcrumbPage>
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
        <div className="mb-16">
          <TerritoryMap 
            region="Kroatien" 
            center={{ lat: 44.5, lng: 16.0 }} 
            zoom={7} 
            markers={[
              { lat: 45.2, lng: 13.9, name: 'Pula', description: 'Istrien - Hauptstadt mit römischem Amphitheater' },
              { lat: 45.3, lng: 14.3, name: 'Rijeka', description: 'Kvarner Bucht - Größte Stadt der Region' },
              { lat: 44.1, lng: 15.2, name: 'Zadar', description: 'Norddalmatien - Meeresorgel und Sonnengruß' },
              { lat: 43.7, lng: 15.9, name: 'Šibenik', description: 'Norddalmatien - UNESCO-Weltkulturerbe' },
              { lat: 43.5, lng: 16.4, name: 'Split', description: 'Mitteldalmatien - Diokletianpalast' },
              { lat: 43.3, lng: 16.9, name: 'Hvar', description: 'Mitteldalmatien - Lavendelinsel' },
              { lat: 42.6, lng: 18.1, name: 'Dubrovnik', description: 'Süddalmatien - Perle der Adria' }
            ]} 
            className="max-w-4xl mx-auto" 
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Kroatien: Segeln im Paradies der Adria – Ihr Traumtörn entlang der Inseln und Küsten</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Kroatien – das Land der über 1.200 Inseln, der türkisblauen Buchten, der antiken Städte und der mediterranen Lebensart. Kaum ein anderes Segelrevier in Europa bietet so viel Abwechslung, eine so dichte maritime Infrastruktur und eine so große Vielfalt an Natur und Kultur wie die kroatische Adria. Ein Yachtcharter in Kroatien ist weit mehr als nur ein Urlaub: Es ist die Einladung, die Schönheit der Küste und der Inselwelt vom Wasser aus zu erleben, authentische Gastfreundschaft zu genießen und auf den Spuren der Geschichte zu segeln.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Ob Sie als erfahrener Skipper, Einsteiger, Familie, Genießer oder sportliche Crew unterwegs sind – Kroatien hält für jeden das passende Segelabenteuer bereit. Die kroatische Küste erstreckt sich über 1.700 Kilometer und wird von über 1.200 Inseln gesäumt, von denen jede ihren eigenen Charme und ihre spezifischen Segelbedingungen bietet. Von den venezianisch geprägten Städten Istriens über die unberührten Nationalparks Dalmatiens bis hin zur weltberühmten "Perle der Adria", Dubrovnik, bietet Kroatien eine unvergleichliche Palette an Erlebnissen.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Die Vielfalt der Regionen reicht von geschützten Buchten und Inselgruppen, die sich ideal für entspanntes Inselhopping eignen, bis hin zu offeneren Seegebieten, die auch sportlich ambitionierte Segler begeistern. Die kurzen Distanzen zwischen den Inseln, die zahlreichen geschützten Ankerplätze und die hervorragende maritime Infrastruktur machen Kroatien zu einem der Top-Ziele für Yachtcharter weltweit. Doch gerade in diesem Revier sind die Kenntnis der lokalen Besonderheiten und die Einhaltung der Vorschriften von entscheidender Bedeutung für einen reibungslosen und unvergesslichen Törn.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Die Regionen Kroatiens: Ein Segelparadies in fünf Akten</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die kroatische Adriaküste gliedert sich in verschiedene Regionen, die jeweils ihren eigenen, unverwechselbaren Charme und spezifische Segelbedingungen bieten.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">1. Istrien: Mediterranes Flair, venezianische Städte und kulinarische Genüsse</h4>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Reviercharakter & Besonderheiten:</h5>
              <p>
                Istrien, die größte Halbinsel der Adria, ist geprägt von einer abwechslungsreichen Küste, venezianisch geprägten Hafenstädten, grünen Hügeln und einer hervorragenden Küche. Die Segelbedingungen sind meist moderat, die Häfen und Marinas modern und gut ausgestattet. Die Region ist ideal für entspannte Törns mit kurzen Etappen und bietet zahlreiche Möglichkeiten für Landgänge, die oft eine Mischung aus römischer Geschichte und italienischem Einfluss zeigen.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Hauptorte & Marinas:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Pula:</strong> Die größte Stadt Istriens und ein wichtiger Charterstützpunkt. Ihr Wahrzeichen ist das beeindruckende römische Amphitheater, das noch heute für Konzerte und Veranstaltungen genutzt wird. Die ACI Marina Pula ist modern und gut angebunden.</li>
                <li><strong>Rovinj:</strong> Eine der malerischsten Städte Kroatiens. Die Altstadt schmiegt sich malerisch an einen Hügel, überragt von der Kirche der Heiligen Euphemia, und bietet enge Gassen, Künstlerateliers und charmante Restaurants.</li>
                <li><strong>Poreč, Novigrad, Umag:</strong> Weitere charmante Küstenorte mit guter Infrastruktur, schönen Stränden und einer reichen Geschichte.</li>
                <li><strong>Vrsar, Medulin, Rabac:</strong> Kleinere Häfen, ideal für ruhigere Nächte und kurze Törns.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Highlights & Routenvorschläge:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Inselhopping zu den Brijuni-Inseln:</strong> Ein Nationalpark und ehemaliger Sommersitz von Tito, mit Safaripark, römischen Ruinen und unberührter Natur.</li>
                <li><strong>Landgänge in Rovinj, Pula und Poreč:</strong> Entdecken Sie die historischen Altstädte, römische Arenen und die UNESCO-geschützte Euphrasius-Basilika in Poreč.</li>
                <li><strong>Baden und Schnorcheln:</strong> In den kristallklaren Buchten der Küste, z.B. bei Kap Kamenjak im Süden Istriens.</li>
                <li><strong>Kulinarik:</strong> Istrien ist berühmt für seine Trüffel, Olivenöle und Weine. Genießen Sie frischen Fisch und Meeresfrüchte in den lokalen Konobas.</li>
              </ul>
            </div>

            <div className="mb-6">
              <p><strong>Für wen geeignet?</strong> Einsteiger, Familien, Genießer, Kulturinteressierte, Crews mit Lust auf kurze Schläge und viele Landgänge.</p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">2. Kvarner Bucht: Inselvielfalt, Delfine und kontrastreiche Küsten</h4>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Reviercharakter & Besonderheiten:</h5>
              <p>
                Die Kvarner Bucht liegt zwischen Istrien und Norddalmatien und ist bekannt für ihre kontrastreichen Inseln, die von der grünen Cres bis zur kargen, mondartigen Pag reichen. Die Region ist das Zuhause der Adria-Delfine, bietet viele geschützte Buchten und abwechslungsreiche Segelbedingungen. Die Inseln sind oft bergig und bieten spektakuläre Ausblicke.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Hauptorte & Marinas:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Rijeka:</strong> Die größte Stadt der Region und ein wichtiger Verkehrsknotenpunkt, der auch Charterbasen bietet.</li>
                <li><strong>Opatija:</strong> Ein historisches Seebad mit eleganter Promenade und prächtigen Villen.</li>
                <li><strong>Cres, Mali Lošinj, Krk, Rab, Pag:</strong> Die großen Kvarner-Inseln, jede mit eigenem Charakter und zahlreichen kleinen Häfen.</li>
                <li><strong>Marina Punat (Krk):</strong> Eine der größten und ältesten Marinas in Kroatien, mit umfassendem Service.</li>
                <li><strong>Marina Cres, Marina Mali Lošinj:</strong> Moderne Marinas auf den jeweiligen Inseln.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Highlights & Routenvorschläge:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Inselhopping:</strong> Krk (über eine Brücke mit dem Festland verbunden), Cres (Olivenhaine, Süßwassersee Vransko Jezero), Lošinj (Delfinzentrum, Pinienwälder, heilsames Klima), Rab (Sandstrände, mittelalterliche Altstadt), Pag (Salzfelder, mondähnliche Landschaft, Party in Novalja).</li>
                <li><strong>Nationalpark Risnjak (Festland), Naturpark Učka:</strong> Für Wanderungen und Naturerlebnisse im Hinterland.</li>
                <li><strong>Delfinbeobachtung:</strong> Rund um Lošinj gibt es eine große Delfinpopulation.</li>
                <li><strong>Kulinarik:</strong> Probieren Sie das berühmte Lamm von Pag, den Pager Käse und die lokalen Weine.</li>
              </ul>
            </div>

            <div className="mb-6">
              <p><strong>Für wen geeignet?</strong> Alle Erfahrungsstufen, Familien, Natur- und Tierliebhaber, Crews, die Abwechslung zwischen Inseln und Festland suchen.</p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">3. Norddalmatien: Insel-Labyrinth, Kornaten und Nationalparks</h4>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Reviercharakter & Besonderheiten:</h5>
              <p>
                Norddalmatien ist das Segelparadies für Entdecker und Genießer. Das Labyrinth der Kornaten, die grüne Insel Dugi Otok, die Nationalparks Krka und Paklenica sowie die lebendigen Städte Zadar und Šibenik bieten eine perfekte Mischung aus Natur, Kultur und maritimer Infrastruktur. Die Region ist bekannt für ihre unzähligen, oft kargen Inseln, die eine einzigartige, fast mondähnliche Landschaft bilden.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Hauptorte & Marinas:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Zadar:</strong> Eine faszinierende Stadt mit über 3.000 Jahren Geschichte. Die Altstadt, umgeben von venezianischen Mauern, ist ein Labyrinth aus römischen Ruinen, mittelalterlichen Kirchen und belebten Plätzen. Nautische Highlights sind die einzigartige Meeresorgel, deren Töne durch die Wellen erzeugt werden, und der "Gruß an die Sonne", ein Lichtkunstwerk, das bei Sonnenuntergang zum Leben erwacht. Zadar ist ein wichtiger Charterstützpunkt mit mehreren Marinas (z.B. Marina Borik, Marina Tankerkomerc, D-Marin Borik).</li>
                <li><strong>Biograd na Moru:</strong> Ein sehr beliebter Charterstützpunkt, ideal für Törns in die Kornaten.</li>
                <li><strong>Sukosan (Marina Dalmacija):</strong> Die größte Marina Kroatiens, südlich von Zadar gelegen, bietet umfassenden Service.</li>
                <li><strong>Murter, Vodice, Sali:</strong> Kleine Inselhäfen und Ausgangspunkte für Nationalparks.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Highlights & Routenvorschläge:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Nationalpark Kornaten:</strong> Ein absolutes Highlight für jeden Segler. Dieses einzigartige Archipel besteht aus 89 Inseln, Inselchen und Riffen, die wie eine Mondlandschaft aus dem Meer ragen. Ein Paradies für Segler, die Abgeschiedenheit, unberührte Natur und kristallklares Wasser suchen. Es gibt zahlreiche Ankerbuchten und traditionelle Konobas (Restaurants), die frischen Fisch und lokale Spezialitäten anbieten.</li>
                <li><strong>Dugi Otok (Lange Insel):</strong> Eine der schönsten Inseln des Archipels, bekannt für den Naturpark Telašćica im Süden – ein tief eingeschnittener Fjord mit steilen Klippen und einem Salzwassersee. Hier liegt auch der berühmte Sakarun Beach, ein weißer Sandstrand mit türkisblauem Wasser, der an die Karibik erinnert.</li>
                <li><strong>Nationalpark Krka:</strong> Ein weiteres Naturwunder Kroatiens. Über den Fluss Krka können Sie mit dem Boot bis Skradin fahren und von dort aus die berühmten Wasserfälle und Seen des Nationalparks erkunden. Das Segeln auf dem Süßwasser des Flusses Krka ist ein einzigartiges Erlebnis.</li>
                <li><strong>Zadar, Šibenik:</strong> UNESCO-Altstädte, Kathedralen, Festungen und lebendige Märkte.</li>
                <li><strong>Geheimtipps:</strong> Ankern in der Bucht von Vrgada, Schnorcheln bei Mana (Kornaten), Fischessen auf Zverinac.</li>
              </ul>
            </div>

            <div className="mb-6">
              <p><strong>Für wen geeignet?</strong> Einsteiger, Familien, Genießer, Naturfreunde, Crews mit Lust auf Inselhopping, Nationalparks und Kultur.</p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">4. Mitteldalmatien: Split, Trogir, Kaštela und die berühmten Inseln</h4>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Reviercharakter & Besonderheiten:</h5>
              <p>
                Mitteldalmatien ist das pulsierende Herz der kroatischen Adria und das beliebteste Charterrevier. Die Region rund um Split, Trogir und Kaštela ist idealer Ausgangspunkt für Törns zu den berühmtesten Inseln Kroatiens: Brač, Hvar, Vis, Šolta. Es bietet eine perfekte Mischung aus Kultur, Natur und maritimem Leben, mit kurzen Distanzen und vielen geschützten Ankerplätzen.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Hauptorte & Marinas:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Split:</strong> Die zweitgrößte Stadt Kroatiens und das pulsierende Zentrum Dalmatiens. Der Diokletianpalast, ein UNESCO-Welterbe und das Herz der Stadt, ist ein lebendiges Museum, in dem sich Geschichte und modernes Leben auf einzigartige Weise verbinden. Split ist ein wichtiger Charterstützpunkt mit mehreren Marinas (z.B. ACI Marina Split, Marina Lav in Podstrana).</li>
                <li><strong>Trogir:</strong> Eine bezaubernde, mittelalterliche Stadt, die auf einer kleinen Insel liegt und durch Brücken mit dem Festland und der Insel Ciovo verbunden ist. Die gesamte Altstadt von Trogir ist ein UNESCO-Welterbe und ein Labyrinth aus engen Gassen, historischen Gebäuden und charmanten Plätzen. Die ACI Marina Trogir liegt direkt gegenüber der Altstadt und bietet einen atemberaubenden Blick.</li>
                <li><strong>Kaštela:</strong> Eine Kette von sieben historischen Dörfern, die sich zwischen Split und Trogir erstrecken. Hier befindet sich die Marina Kaštela, eine der größten und modernsten Marinas an der Adria. Ihre strategische Lage macht sie zu einem idealen Ausgangspunkt für Törns in alle Richtungen Mitteldalmatiens.</li>
                <li><strong>Marina Lav (Podstrana), Marina Agana (Marina), Milna (Brač), Palmižana (Hvar):</strong> Weitere Basen und beliebte Häfen.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Highlights & Routenvorschläge:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Brač:</strong> Die größte Insel Dalmatiens, bekannt für den berühmten Strand Zlatni Rat (Goldenes Horn) bei Bol, der seine Form je nach Wind und Strömung ändert. Charmante Orte wie Milna und Supetar laden zum Verweilen ein.</li>
                <li><strong>Hvar:</strong> Die "Lavendelinsel", berühmt für ihre sonnigen Weinberge, ihr pulsierendes Nachtleben in Hvar-Stadt, aber auch für ihre historischen Städte wie Stari Grad (eine der ältesten Städte Europas, UNESCO-Welterbe) und Jelsa. Die Pakleni-Inseln vor Hvar-Stadt bieten unzählige geschützte Ankerbuchten und die berühmte Marina Palmižana.</li>
                <li><strong>Vis:</strong> Die am weitesten vom Festland entfernte bewohnte Insel, die lange Zeit militärisches Sperrgebiet war und daher ihre Ursprünglichkeit bewahren konnte. Bekannt für ihre entspannte Atmosphäre, hervorragende Weine und die Blaue Grotte auf der Nachbarinsel Biševo.</li>
                <li><strong>Šolta:</strong> Die dem Festland am nächsten gelegene Insel, bekannt für ihre Olivenhaine, Honigproduktion und ruhige, charmante Dörfer wie Maslinica und Stomorska.</li>
                <li><strong>Drvenik Veli & Mali:</strong> Kleinere, ruhige Inseln mit wunderschönen Buchten, darunter die berühmte Blaue Lagune auf Drvenik Veli – ein Paradies zum Schwimmen und Schnorcheln.</li>
              </ul>
            </div>

            <div className="mb-6">
              <p><strong>Für wen geeignet?</strong> Alle Erfahrungsstufen, Familien, Genießer, sportliche Crews, Nachtschwärmer, Kulturinteressierte.</p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">5. Süddalmatien: Dubrovnik, Elaphiten, Mljet und Lastovo</h4>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Reviercharakter & Besonderheiten:</h5>
              <p>
                Süddalmatien ist das südlichste Revier Kroatiens und besticht durch seine einzigartige Küstenlinie, die sich von der Halbinsel Pelješac bis zur montenegrinischen Grenze erstreckt. Diese Region ist geprägt von der majestätischen Stadt Dubrovnik und einer Kette von grünen Inseln, die zum Entdecken einladen. Die Distanzen zwischen den Inseln sind hier oft etwas länger.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Hauptorte & Marinas:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dubrovnik:</strong> Die "Perle der Adria" ist das strahlende Zentrum Süddalmatiens und ein UNESCO-Welterbe von Weltrang. Die imposanten Stadtmauern, die die gesamte Altstadt umschließen, sind ein Meisterwerk mittelalterlicher Architektur. Dubrovnik ist ein wichtiger Charterstützpunkt mit modernen Marinas (ACI Marina Dubrovnik, Orsan Yacht Club).</li>
                <li><strong>Slano, Cavtat:</strong> Kleine Häfen südlich von Dubrovnik, ideal für Törns Richtung Montenegro.</li>
                <li><strong>Korčula, Mljet, Lastovo:</strong> Inselhäfen, Naturbuchten, Nationalparks.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Highlights & Routenvorschläge:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dubrovnik:</strong> Erkunden Sie die UNESCO-geschützte Altstadt, schlendern Sie über den Stradun, besuchen Sie die Stadtmauern und genießen Sie den Panoramablick vom Berg Srđ.</li>
                <li><strong>Elaphiten Inseln:</strong> Direkt vor Dubrovnik gelegen, sind die Elaphiten ein malerisches Archipel, das sich perfekt für kurze, entspannte Schläge eignet. Dazu gehören Koločep, Lopud (mit dem Sandstrand Šunj Beach) und Šipan.</li>
                <li><strong>Mljet:</strong> Eine der grünsten Inseln der Adria und ein Nationalpark, bekannt für ihre zwei Salzwasserseen (Veliko Jezero und Malo Jezero) mit einem Benediktinerkloster.</li>
                <li><strong>Lastovo:</strong> Eine der abgelegensten und unberührtesten Inseln Kroatiens, die als Naturpark geschützt ist. Lastovo ist ein Paradies für Segler, die Ruhe, unberührte Natur und eine spektakuläre Unterwasserwelt suchen.</li>
                <li><strong>Korčula:</strong> Obwohl technisch zu Mitteldalmatien gehörend, ist die Insel Korčula oft Teil von Törns, die von Dubrovnik aus starten. Die Stadt Korčula ist eine wunderschöne mittelalterliche Stadt, die oft als "Klein-Dubrovnik" bezeichnet wird und angeblich der Geburtsort von Marco Polo ist.</li>
                <li><strong>Halbinsel Pelješac:</strong> Eine lange, schmale Halbinsel, bekannt für ihre hervorragenden Weine (z.B. Dingač, Postup), ihre Austernzucht in Ston und Mali Ston und ihre malerischen Buchten.</li>
                <li><strong>Törn nach Montenegro:</strong> Dubrovnik ist ein idealer Ausgangspunkt für einen Yachtcharter nach Montenegro (Kotor, Tivat, Budva) – vorherige Klärung mit dem Vercharterer und Einhaltung der Ein- und Ausreiseformalitäten (Zoll, Polizei, Hafenamt) in beiden Ländern ist zwingend erforderlich!</li>
              </ul>
            </div>

            <div className="mb-8">
              <p><strong>Für wen geeignet?</strong> Erfahrene Skipper, Crews mit Lust auf längere Schläge, Kultur- und Naturfans, Nachtschwärmer.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erreichbarkeit: Ihr schneller Weg an Bord</h3>
            <p className="text-lg leading-relaxed mb-6">
              Kroatien ist dank seiner hervorragenden Infrastruktur und seiner geografischen Nähe zu Mitteleuropa sehr gut erreichbar.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Per Flugzeug</h4>
                <p className="mb-4">Zahlreiche internationale Flughäfen entlang der Küste werden von Deutschland, Österreich und der Schweiz aus direkt angeflogen. Die wichtigsten Zielflughäfen für unsere Chartergäste sind:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li><strong>Pula (PUY):</strong> Für Istrien und die Kvarner Bucht.</li>
                  <li><strong>Zadar (ZAD):</strong> Für Norddalmatien und die Kornaten.</li>
                  <li><strong>Split (SPU):</strong> Für Mitteldalmatien und die berühmten Inseln (Hvar, Brač, Vis).</li>
                  <li><strong>Dubrovnik (DBV):</strong> Für Süddalmatien und die Elaphiten.</li>
                </ul>
                <p className="text-sm">Vom Flughafen zur Marina organisieren wir gerne einen zuverlässigen Transfer für Sie und Ihre Crew.</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Per PKW</h4>
                <p>Kroatien ist aus Süddeutschland, Österreich und der Schweiz bequem mit dem Auto erreichbar. Dies bietet den Vorteil, mehr Gepäck und persönlichen Proviant mitnehmen zu können. Die meisten Marinas bieten sichere Parkmöglichkeiten für die Dauer Ihres Törns.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Marinas & Ausgangshäfen: Perfekte Infrastruktur für Ihren Törn</h3>
            <p className="text-lg leading-relaxed mb-6">
              Kroatien verfügt über eine exzellente maritime Infrastruktur mit einem dichten Netz an modernen Marinas und Stadthäfen.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">ACI Marinas</h4>
              <p className="mb-3">Die ACI (Adriatic Croatia International Club) ist die größte Marina-Kette im Mittelmeer und betreibt zahlreiche hochmoderne Marinas entlang der gesamten kroatischen Küste. Sie bieten umfassenden Service (Wasser, Strom, Sanitäranlagen, WLAN, Werften, Restaurants, Geschäfte).</p>
              
              <h5 className="font-semibold mb-2">Vielfalt der Charterbasen:</h5>
              <p className="mb-3">Neben den ACI Marinas gibt es viele weitere private Marinas und Charterstützpunkte in allen Regionen.</p>
              
              <h5 className="font-semibold mb-2">Umfassende Flotte:</h5>
              <p className="mb-2">Unsere Flotte umfasst eine große Auswahl an Charteryachten für jeden Anspruch und jede Crewgröße:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Moderne Segelyachten (Monohulls):</strong> Ideal für sportliches Segeln und klassisches Seemannsgefühl.</li>
                <li><strong>Geräumige Katamarane:</strong> Perfekt für Familien und Gruppen, die Wert auf Komfort, Stabilität und viel Platz an Deck legen. Ideal für entspanntes Inselhopping.</li>
                <li><strong>Schnelle Motoryachten:</strong> Für alle, die in kurzer Zeit große Distanzen zurücklegen und mehrere Highlights miteinander verbinden möchten.</li>
              </ul>
              <p className="mt-3">Sie haben die Wahl: Entscheiden Sie sich für eine Bareboat-Charter, wenn Sie über die nötige Erfahrung und die erforderlichen Lizenzen verfügen, um die Yacht selbst zu führen. Oder genießen Sie einen rundum entspannten Urlaub und buchen Sie einen unserer erfahrenen Skipper, der Sie sicher zu den schönsten Plätzen des Reviers führt und Ihnen wertvolle Geheimtipps verrät.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele: Ein Kaleidoskop der Adria</h3>
            <p className="text-lg leading-relaxed mb-6">
              Ein Yachtcharter in Kroatien ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Highlights nach Regionen</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Istrien:</strong> Rovinj, Pula (Amphitheater), Nationalpark Brijuni.</li>
                <li><strong>Kvarner Bucht:</strong> Inseln Cres, Lošinj (Delfine), Krk, Rab (Sandstrände), Pag (mondähnlich).</li>
                <li><strong>Norddalmatien:</strong> Zadar (Meeresorgel), Nationalpark Kornaten (Insel-Labyrinth), Dugi Otok (Telašćica, Sakarun Beach), Nationalpark Krka (Wasserfälle).</li>
                <li><strong>Mitteldalmatien:</strong> Split (Diokletianpalast), Trogir (UNESCO-Altstadt), Kaštela, Inseln Hvar (Nightlife, Lavendel), Brač (Zlatni Rat), Vis (Blaue Grotte), Šolta, Drvenik Veli (Blaue Lagune).</li>
                <li><strong>Süddalmatien:</strong> Dubrovnik (Stadtmauern), Elaphiten-Inseln (Lopud, Šipan), Mljet (Nationalpark, Seen), Lastovo (Naturpark), Korčula (mittelalterliche Stadt).</li>
              </ul>
              
              <h5 className="font-semibold mt-4 mb-2">Ankerplätze & Buchten:</h5>
              <p className="mb-2">Kroatien ist berühmt für seine unzähligen, oft geschützten Ankerbuchten mit kristallklarem Wasser. Viele bieten Mooringbojen, andere erlauben das freie Ankern.</p>
              
              <h5 className="font-semibold mb-2">Nautische Highlights:</h5>
              <p className="mb-2">Die Erkundung von Höhlen (z.B. Blaue Grotte auf Biševo), das Schnorcheln und Tauchen in der klaren Adria, das Entdecken von versunkenen Schiffen oder das Beobachten von Delfinen.</p>
              
              <h5 className="font-semibold mb-2">Landaktivitäten:</h5>
              <p>Besuche von historischen Altstädten, Wanderungen in Nationalparks, Weinproben auf den Inseln, das Genießen der lokalen Küche in Konobas und das Erleben von traditionellen Festen.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen: Segeln unter der Adriasonne</h3>
            <p className="text-lg leading-relaxed mb-6">
              Das Wetter in Kroatien ist typisch mediterran mit heißen, trockenen Sommern und milden, feuchteren Wintern. Die Segelsaison erstreckt sich von April bis in den späten Oktober.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Typische Winde</h4>
              <p className="mb-3">Die lokalen Windsysteme sind für die Törnplanung entscheidend.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Maestral:</strong> Der vorherrschende Sommerwind, eine thermische Brise aus Nordwest, die tagsüber für moderate und zuverlässige Segelbedingungen (3-5 Bft) sorgt und nachts oft einschläft. Ideal für entspanntes Segeln.</li>
                <li><strong>Bora (Bura):</strong> Ein starker, kalter Fallwind aus Nordost, der vor allem in den Wintermonaten und in der Vor-/Nachsaison auftreten kann. Er bringt klaren Himmel und gute Sicht, kann aber sehr plötzlich auftreten und hohe Wellen aufbauen. Er ist besonders in den Kanälen zwischen den Inseln und dem Festland spürbar.</li>
                <li><strong>Jugo (Scirocco):</strong> Ein warmer, feuchter Wind aus Südost, der oft Wolken und manchmal Regen mit sich bringt. Er kündigt sich meist langsam an und kann zu drückender Schwüle und unruhiger See führen.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Saisonale Unterschiede</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Frühling (April - Juni):</strong> Eine wunderbare Zeit zum Segeln. Die Natur blüht, die Temperaturen sind angenehm warm, aber nicht zu heiß. Die Häfen und Buchten sind noch nicht überfüllt. Die Winde können noch etwas kräftiger sein – ideal für ambitionierte Segler.</li>
                <li><strong>Sommer (Juli - August):</strong> Hochsaison in Kroatien. Es ist heiß, sonnig und der Maestral sorgt für angenehme Segelbedingungen – perfekt für Badeurlaub und Familien. In dieser Zeit sind die Marinas und beliebten Ankerplätze sehr voll und die Preise am höchsten. Eine frühzeitige Buchung ist unerlässlich.</li>
                <li><strong>Herbst (September - Oktober):</strong> Für viele Kenner die beste Reisezeit. Das Wasser ist vom Sommer noch aufgeheizt, die großen Touristenströme sind abgezogen und die Preise sinken. Das Wetter ist meist stabil und warm, und die Häfen werden wieder leerer.</li>
              </ul>
              
              <p className="mt-4"><strong>Revier-Eignung für Erfahrungsstufen:</strong> Kroatien ist ein sehr vielseitiges Revier. Die geschützten Inselgruppen wie die Kornaten oder die Kanäle Dalmatiens sind auch für weniger erfahrene Segler und Familien gut geeignet. Die kurzen Distanzen und die vielen Ausweichmöglichkeiten bieten viel Sicherheit. Für ambitionierte Segler bieten die offeneren Seegebiete und die Möglichkeit von stärkeren Winden (Bora, Jugo) auch Herausforderungen.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit: Wann Kroatien am schönsten ist</h3>
            <div className="mb-8">
              <p>Die beste Reisezeit für einen Yachtcharter in Kroatien sind die Monate <strong>Mai, Juni und September</strong>. In dieser Zeit sind die Temperaturen angenehm warm, das Wasser hat Badetemperatur, die Häfen sind nicht überfüllt und die Preise sind moderater als in der Hochsaison (Juli/August).</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Vorschriften & Regeln: Wichtige Hinweise für einen reibungslosen Törn</h3>
            <p className="text-lg leading-relaxed mb-6">
              Kroatien hat klare und umfassende Vorschriften für den Yachtsport, die der Sicherheit und dem Umweltschutz dienen.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Wichtige Vorschriften</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Führerscheinpflicht:</strong> Für das Führen von Sportbooten auf der Adria ist der Sportbootführerschein See (SBF See) obligatorisch. Für Yachten mit einer Länge über 15 Meter oder zur gewerblichen Nutzung können weitergehende Scheine (z.B. Sportküstenschifferschein SKS) erforderlich sein.</li>
                <li><strong>Funkzeugnis (SRC):</strong> Für UKW-Funkgeräte an Bord ist das Short Range Certificate (SRC) erforderlich.</li>
                <li><strong>Kroatisches Permit/Vignette:</strong> Für ausländische Yachten ist eine sogenannte "Vignette" oder "Permit" erforderlich, die die Befugnis zum Befahren kroatischer Gewässer und zur Nutzung von Marinas regelt. Ihr Charterunternehmen kümmert sich in der Regel um diese Formalität und die damit verbundenen Gebühren.</li>
                <li><strong>Naturschutzgebiete:</strong> In Nationalparks (z.B. Kornaten, Krka, Mljet) und Naturparks (z.B. Telašćica, Lastovo) gelten besondere Regeln für das Befahren, Ankern und Angeln. Für den Eintritt fallen Gebühren an.</li>
                <li><strong>Umweltauflagen:</strong> Strikte Regeln zur Müllentsorgung (kein Müll über Bord), Abwasserentsorgung (keine Einleitung von Fäkalien in Küstennähe oder in Naturschutzgebieten) und zum Schutz mariner Lebensräume.</li>
                <li><strong>Neue Ankerregeln 2025:</strong> Das Ankern ist in einem Umkreis von 150 m von natürlichen Badegebieten verboten. In engen Buchten kann das zu Einschränkungen führen. Informieren Sie sich vor Ort über aktuelle Sperrzonen.</li>
                <li><strong>Hafenformalitäten:</strong> Bei der Ankunft in einer Marina melden Sie sich beim Hafenmeister an und entrichten die Liegegebühren.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erfahrungen von Seglern: Eine Mischung aus Sport, Komfort und mediterranem Flair</h3>
            <p className="text-lg leading-relaxed mb-6">
              Segler, die Kroatien besucht haben, berichten von einem Revier, das sowohl sportliche Herausforderungen als auch entspannte Naturerlebnisse bietet.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Positives</h4>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Inselvielfalt:</strong> Die unzähligen Inseln und Inselchen bieten eine enorme Vielfalt an Ankerplätzen und Zielen.</li>
                  <li><strong>Klares Wasser:</strong> Die Adria ist bekannt für ihr kristallklares, türkisblaues Wasser, ideal zum Schwimmen und Schnorcheln.</li>
                  <li><strong>Hafeninfrastruktur:</strong> Die Marinas sind modern, sauber und bieten umfassenden Service.</li>
                  <li><strong>Kurze Distanzen:</strong> Die Inseln und Häfen liegen nah beieinander, was flexible Routenplanung ermöglicht.</li>
                  <li><strong>Gastfreundschaft:</strong> Die Kroaten sind bekannt für ihre Herzlichkeit und Gastfreundschaft, besonders in den Konobas.</li>
                </ul>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-black">Herausforderungen</h4>
                <ul className="list-disc pl-6 space-y-1 text-black">
                  <li><strong>Wetterwechsel:</strong> Das Wetter kann schnell umschlagen, mit plötzlichen Starkwinden (Bora, Jugo). Eine gute Wetterbeobachtung ist unerlässlich.</li>
                  <li><strong>Volle Marinas:</strong> In der Hochsaison können beliebte Marinas sehr voll sein, eine frühzeitige Ankunft oder Reservierung ist ratsam.</li>
                  <li><strong>Untiefen:</strong> Außerhalb der Fahrwasser gibt es einige Untiefen, die präzise Navigation erfordern.</li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold mb-3 text-black">Praktische Tipps aus der Seglergemeinschaft</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Wetter-App:</strong> Eine gute Wetter-App oder ein Wetterdienst sind unverzichtbar.</li>
                <li><strong>Hafenhandbuch:</strong> Ein aktuelles Hafenhandbuch ist für die Navigation und die Wahl der Ankerplätze unerlässlich.</li>
                <li><strong>Konobas:</strong> Nutzen Sie die Gelegenheit, in den kleinen Inselrestaurants (Konobas) frischen Fisch und lokale Spezialitäten zu genießen.</li>
                <li><strong>Bargeld:</strong> In kleineren Konobas oder auf Inseln ist es ratsam, etwas Bargeld dabei zu haben.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit: Ihr Traumtörn in Kroatien – Ein Segelparadies an der Adria</h3>
            <p className="text-lg leading-relaxed mb-6">
              Ein Yachtcharter in Kroatien ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, in einem lebhaften Hafenstädtchen anlegen oder einfach auf dem offenen Meer die Sonne genießen. Es ist die Kombination aus:
            </p>

            <div className="mb-6">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Abwechslungsreichen Segelbedingungen:</strong> Von geschützten Inselgruppen bis zu offeneren Seegebieten ist für jede Erfahrungsstufe etwas dabei.</li>
                <li><strong>Atemberaubenden Küstenlandschaften:</strong> Dramatische Klippen, unzählige Inseln, grüne Nationalparks und malerische Buchten.</li>
                <li><strong>Kultureller Vielfalt:</strong> Segeln Sie auf den Spuren der Römer, Venezianer und Slawen und entdecken Sie ein UNESCO-Welterbe nach dem anderen.</li>
                <li><strong>Mediterranem Flair & Kulinarik:</strong> Genießen Sie frischen Fisch, lokale Weine und die köstliche kroatische Küche in jeder Region neu.</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Kroatien bleibt ein spektakuläres Yachtcharter-Revier für alle, die das Abenteuer suchen und die Schönheit der Adria vom Wasser aus erleben möchten. Wer die Regeln beachtet und sich gut vorbereitet, wird mit einzigartigen Segelerlebnissen und einem tiefen Gefühl der Verbundenheit mit der Natur belohnt.
            </p>

            <div className="mb-8 text-center">
              <h4 className="text-xl font-bold mb-4">Sind Sie bereit, die Segel zu setzen und Kroatien zu entdecken?</h4>
              <p className="mb-4">Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Kroatien an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.</p>
            </div>
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    {region.cities && <div className="grid grid-cols-2 gap-2">
                        {region.cities.slice(0, 6).map((city, idx) => <div key={idx} className="text-sm text-blue-600 font-medium">
                            • {city}
                          </div>)}
                        {region.cities.length > 6 && <div className="text-sm text-gray-500 italic">
                            +{region.cities.length - 6} weitere
                          </div>}
                      </div>}
                  </CardContent>
                </Card>
              </Link>)}
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
              Bereit für kroatisches Inselhopping?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die Schönheit der kroatischen Adria mit ihren 
              traumhaften Inseln, kristallklarem Wasser und charmanten Küstenstädten.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Kroatien Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Croatia;