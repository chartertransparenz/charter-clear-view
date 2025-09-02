import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
const hollandCoast = "/lovable-uploads/0eef7af9-d0e3-4695-beb3-dcc6a319901a.png";
const Holland = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Niederländische Nordsee & IJsselmeer"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-September"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Erfahrene Segler"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Tidenfreier Binnensee & Wattenmeer"
  }];
  const highlights = ["IJsselmeer - riesiges Binnengewässer", "Extreme Nordsee-Gezeiten bis 4m", "Traditionelle Segelkultur", "Historische Hafenstädte", "Wattenmeer UNESCO-Welterbe", "Ausgezeichnete Infrastruktur", "Herausfordernde Tidenreviere"];
  const marinas = [{
    name: "IJsselmeer",
    description: "Großes Binnengewässer ohne Gezeiten",
    facilities: ["Viele Marinas", "Familienfreundlich", "Geschützte Gewässer"]
  }, {
    name: "Nordseeküste",
    description: "Anspruchsvolle Tidenreviere",
    facilities: ["Extreme Gezeiten", "Wattenmeer", "Navigation anspruchsvoll"]
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={hollandCoast} alt="Holland Nordsee" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇳🇱 Holland</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Holland</h1>
            <p className="text-xl max-w-2xl">
              IJsselmeer und extreme Nordsee-Gezeiten
            </p>
          </div>
        </div>
        <Link to="/reviere/nord-europa/nordsee" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Nordsee
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="sticky top-20 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
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
                <BreadcrumbLink href="/reviere/nord-europa">Nord Europa</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/nord-europa/nordsee">Nordsee</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Holland</BreadcrumbPage>
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

        {/* Google Maps */}
        <div className="mb-12">
          <TerritoryMap 
            region="Holland"
            center={{ lat: 52.7859112, lng: 5.2293219 }}
            zoom={7}
            maptype="satellite"
          />
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Yachtcharter Holland: Segeln im Land des Wassers – Ihr Traumtörn zwischen Grachten, Seen und dem Wattenmeer</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Holland – ein Land, das wie kein anderes für seine einzigartige Beziehung zum Wasser steht. Von den historischen Grachten Amsterdams über die weiten Flächen des IJsselmeeres bis hin zur rauen Schönheit des Wattenmeeres – ein Yachtcharter in Holland ist weit mehr als ein gewöhnlicher Segelurlaub; es ist eine Einladung, in eine Welt einzutauchen, in der maritime Tradition auf malerische Landschaften, charmante Städte und die berühmte niederländische „Gezelligheid" trifft. Hier, wo Windmühlen am Horizont tanzen und die Kanäle sich wie Lebensadern durch die Landschaft ziehen, erwartet Sie ein Segelabenteuer, das alle Ihre Sinne berühren wird.
              </p>
              
              <p>
                Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina in Lemmer, Stavoren oder Enkhuizen, lassen die lebhafte Atmosphäre des Hafens hinter sich und nehmen Kurs auf eine Wasserwelt, die einem Bilderbuch gleicht. Jeder Tag bringt neue Horizonte: malerische Grachten, die zum Erkunden einladen, weite Seen, die zum Segeln einladen, und historische Hafenstädte, deren Gassen von einer reichen Seefahrtsgeschichte erzählen.
              </p>
              
              <p>
                Holland bietet eine unvergleichliche Vielfalt an Segelrevieren, die für jeden Geschmack und jede Erfahrungsstufe das Richtige bereithalten. Die einzigartige Kombination aus unzähligen Ankerplätzen, meist geschützten Gewässern und einer hervorragenden maritimen Infrastruktur macht Holland zu einem idealen Ziel für Familien, Naturliebhaber und alle, die das Inselhopping oder das „Grachten-Hopping" in vollen Zügen genießen möchten. Doch gerade in diesem Revier sind die Kenntnis der lokalen Besonderheiten und die Einhaltung der Vorschriften von entscheidender Bedeutung für einen reibungslosen und unvergesslichen Törn.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Die Regionen und Inselgruppen Hollands: Ein Kaleidoskop aus Wasser und Kultur</h3>
              <p>
                Holland gliedert sich in verschiedene Segelregionen, die jeweils ihren eigenen, unverwechselbaren Charme und spezifische Segelbedingungen bieten.
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>IJsselmeer:</strong> Das IJsselmeer ist der größte Binnensee der Niederlande, entstanden aus der ehemaligen Zuiderzee, die durch den Abschlussdeich (Afsluitdijk) vom Wattenmeer getrennt wurde.
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li><strong>Nautische Besonderheiten:</strong> Süßwasser, keine Gezeiten, meist moderate Winde, aber bei Starkwind können sich auf der großen Fläche erhebliche Wellen aufbauen. Die Navigation ist gut betonnt, aber Untiefen müssen beachtet werden.</li>
                    <li><strong>Landschaftliche Reize:</strong> Umgeben von historischen Hafenstädten wie Hoorn, Enkhuizen, Medemblik, Stavoren, Hindeloopen und Urk, die mit ihren alten Häfen, Museen und charmanten Gassen zum Verweilen einladen.</li>
                  </ul>
                </li>
                <li><strong>Friese Meren (Friesische Seenplatte):</strong> Ein weit verzweigtes Netz aus Seen, Kanälen und Flüssen in der Provinz Friesland.
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li><strong>Nautische Besonderheiten:</strong> Geschützte, flache Gewässer, ideal für entspanntes Segeln, auch bei stärkerem Wind. Viele Brücken und Schleusen erfordern Geduld und präzise Manöver.</li>
                    <li><strong>Landschaftliche Reize:</strong> Malerische Dörfer, grüne Weiden, Windmühlen und die typische friesische Kultur. Städte wie Sneek mit seiner Wassersporttradition oder Sloten mit seiner historischen Festung sind Highlights.</li>
                  </ul>
                </li>
                <li><strong>Wattenmeer (Waddenzee):</strong> Das UNESCO-Weltnaturerbe Wattenmeer liegt zwischen dem Festland und den Westfriesischen Inseln.
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li><strong>Nautische Besonderheiten:</strong> Tidengewässer mit einem erheblichen Tidenhub. Die Navigation erfordert genaue Kenntnisse der Gezeiten, Strömungen und das Beachten der Fahrwasser, die sich ständig ändern können. Das Trockenfallen auf Sandbänken ist ein einzigartiges Erlebnis.</li>
                    <li><strong>Landschaftliche Reize:</strong> Eine einzigartige Naturlandschaft mit weiten Sandbänken, Salzwiesen und einer reichen Vogel- und Seehundpopulation. Die Westfriesischen Inseln (Texel, Vlieland, Terschelling, Ameland, Schiermonnikoog) bieten charmante Dörfer, Leuchttürme und endlose Strände.</li>
                  </ul>
                </li>
                <li><strong>Randmeren:</strong> Eine Kette von Seen, die den Flevopolder (größte künstliche Insel der Welt) vom Festland trennen.
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li><strong>Nautische Besonderheiten:</strong> Geschützte, meist flache Gewässer, ideal für entspanntes Segeln und Wassersport.</li>
                    <li><strong>Landschaftliche Reize:</strong> Eine Mischung aus Natur und moderner Landgewinnung.</li>
                  </ul>
                </li>
                <li><strong>Zeeland:</strong> Die südwestlichste Provinz Hollands, geprägt von den Mündungsarmen der Flüsse Rhein, Maas und Schelde.
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li><strong>Nautische Besonderheiten:</strong> Offene Gewässer, Gezeiten, aber auch geschützte Buchten und die beeindruckenden Deltawerke.</li>
                    <li><strong>Landschaftliche Reize:</strong> Breite Sandstrände, Dünen, charmante Küstenorte und eine reiche Geschichte.</li>
                  </ul>
                </li>
              </ul>

              {/* Erreichbarkeit Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3">Erreichbarkeit: Ihr direkter Weg nach Holland</h4>
                <p className="mb-3">Holland ist dank seiner hervorragenden Infrastruktur und seiner geografischen Nähe zu Mitteleuropa sehr gut erreichbar.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Per Auto:</strong> Aus Deutschland, Österreich, der Schweiz und Belgien ist Holland bequem über das gut ausgebaute Autobahnnetz erreichbar. Die meisten Marinas bieten sichere und oft kostenpflichtige Parkmöglichkeiten für die Dauer Ihres Törns.</li>
                  <li><strong>Per Bahn:</strong> Viele Städte wie Amsterdam, Rotterdam, Utrecht und Groningen sind gut an das europäische Bahnnetz angebunden. Von dort aus sind die Marinas oft mit dem ÖPNV oder Taxi erreichbar.</li>
                  <li><strong>Per Flugzeug:</strong> Die wichtigsten Flughäfen sind:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Amsterdam Schiphol (AMS): Der größte Flughafen der Niederlande, gut angebunden an viele europäische und internationale Städte.</li>
                      <li>Rotterdam The Hague Airport (RTM): Für die Region um Rotterdam und Zeeland.</li>
                      <li>Eindhoven Airport (EIN): Für den Süden der Niederlande. Von den Flughäfen sind Transfers zu den Ausgangshäfen per Mietwagen, Shuttle oder ÖPNV möglich.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Marinas & Ausgangshäfen: Perfekte Infrastruktur für Ihren Törn</h3>
              <p>
                Holland verfügt über eine exzellente maritime Infrastruktur mit einem dichten Netz an modernen Marinas und Stadthäfen. Die niederländischen Häfen sind bekannt für ihren hohen Standard, ihre Sauberkeit und ihre Gastfreundschaft.
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Lemmer:</strong> Ein wichtiger und sehr beliebter Charterstützpunkt am südöstlichen IJsselmeer. Lemmer ist das Tor zur Friesischen Seenplatte und bietet direkten Zugang zum IJsselmeer und über Schleusen zum Wattenmeer. Hier finden Sie eine große Auswahl an Charteryachten.</li>
                <li><strong>Stavoren:</strong> Eine der elf friesischen Städte, direkt am IJsselmeer gelegen und ein guter Ausgangspunkt für Törns auf dem IJsselmeer oder in die Friesische Seenplatte.</li>
                <li><strong>Enkhuizen:</strong> Eine historische Hafenstadt am IJsselmeer, bekannt für ihr Zuiderzee-Museum und ihre charmante Altstadt. Ein beliebter Charterstützpunkt.</li>
                <li><strong>Monnickendam:</strong> Nördlich von Amsterdam am IJsselmeer gelegen, ein weiterer guter Ausgangspunkt für Törns auf dem IJsselmeer und in die Randmeren.</li>
                <li><strong>Lelystad:</strong> Eine moderne Stadt am IJsselmeer mit großen Marinas und direkter Anbindung an Amsterdam.</li>
                <li><strong>Hindeloopen:</strong> Eine malerische friesische Stadt am IJsselmeer, bekannt für ihre traditionelle Malerei und Trachten.</li>
              </ul>

              <p className="mt-4">
                <strong>Verfügbarkeit von Yachten:</strong> Das Angebot reicht von komfortablen Segelyachten (Monohulls) und geräumigen Katamaranen bis hin zu Motoryachten. Die Flotten sind in der Regel sehr gut gewartet und erfüllen hohe Sicherheitsstandards.
              </p>

              <p className="mt-3">
                <strong>Besonderheiten Hollands in puncto Service und Ausstattung:</strong> Niederländische Charterunternehmen legen großen Wert auf Sicherheit, Wartung und Service. Die Yachten sind in der Regel sehr gut ausgestattet. Die Gastfreundschaft in den Häfen ist sprichwörtlich; viele Marinas bieten moderne Sanitäranlagen, Spielplätze und oft auch Fahrradverleih. Die niederländische Mehrwertsteuer (BTW) beträgt 21 % und ist in den Charterpreisen in der Regel bereits enthalten.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Beliebte Törnziele: Ein Kaleidoskop aus Wasser und Kultur</h3>
              <p>Ein Yachtcharter in Holland ist ein ständiges Inselhopping oder „Grachten-Hopping"-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.</p>

              <ul className="list-disc list-inside space-y-3 ml-4 mt-3">
                <li><strong>Historische IJsselmeer-Städte:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Hoorn: Eine prächtige Hafenstadt mit einer reichen Geschichte als Handelszentrum der VOC (Niederländische Ostindien-Kompanie).</li>
                    <li>Enkhuizen: Mit dem Zuiderzee-Museum, das die Geschichte der Region vor dem Bau des Abschlussdeichs lebendig werden lässt.</li>
                    <li>Medemblik: Die älteste Stadt Westfrieslands mit dem Schloss Radboud.</li>
                    <li>Stavoren & Hindeloopen: Malerische friesische Städte mit einzigartiger Kultur und Tradition.</li>
                    <li>Urk: Ein ehemaliges Fischerdorf auf einer Insel im IJsselmeer, bekannt für seine traditionellen Trachten und seinen Fischereihafen.</li>
                    <li>Volendam: Ein malerisches Fischerdorf mit bunten Holzhäusern und traditionellen Trachten, nahe Amsterdam.</li>
                  </ul>
                </li>
                <li><strong>Friesische Seenplatte:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Sneek: Das Wassersportzentrum Frieslands mit der berühmten Waterpoort.</li>
                    <li>Sloten: Eine der elf friesischen Städte, bekannt für ihre gut erhaltene Festung.</li>
                    <li>Giethoorn: Das „Venedig des Nordens", ein autofreies Dorf, das nur mit Booten erkundet werden kann (oft mit kleineren Booten oder Ausflugsbooten).</li>
                  </ul>
                </li>
                <li><strong>Westfriesische Inseln (Wattenmeer):</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Texel: Die größte und südlichste der Inseln, bekannt für ihre Natur, Strände und das Ecomare (Naturzentrum mit Seehundauffangstation).</li>
                    <li>Vlieland & Terschelling: Beliebte Inseln mit charmanten Dörfern, Leuchttürmen und weiten Stränden.</li>
                    <li>Ameland & Schiermonnikoog: Ruhigere Inseln, ideal für Naturbeobachtungen und Entspannung.</li>
                  </ul>
                </li>
                <li><strong>Amsterdam:</strong> Die Hauptstadt der Niederlande ist mit dem Boot über das IJsselmeer und Kanäle erreichbar. Ein Landgang in Amsterdam bietet eine Fülle von kulturellen Highlights, Museen und Grachtenfahrten.</li>
                <li><strong>Geheimtipps für einsame Ankerplätze:</strong> Abseits der belebten Häfen finden Sie zahlreiche geschützte Buchten in den Seen und im Wattenmeer, die zum freien Ankern einladen.</li>
                <li><strong>Nautische Highlights:</strong> Das Passieren von Brücken und Schleusen (oft mit Brückenwärtern, die auf Zuruf öffnen), das Segeln auf dem Wattenmeer mit seinen Gezeiten und Sandbänken, das Beobachten von Seehunden auf den Sandbänken, das Befahren historischer Grachten.</li>
                <li><strong>Landaktivitäten:</strong> Radfahren entlang der gut ausgebauten Radwege, Wandern in der Natur, Sightseeing in historischen Städten, Besuch von Windmühlen (z.B. Kinderdijk), Käsemärkten (z.B. Alkmaar), und natürlich das Genießen der niederländischen Küche mit frischem Fisch, Käse und Poffertjes.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Ihr 7-Tage-Traumtörn ab Lemmer (IJsselmeer & Texel)</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 1: Ankunft & Friesisches Flair (Lemmer – Hindeloopen/Stavoren)</h4>
                  <p className="text-gray-600 text-sm">Nach dem Check-in in Lemmer setzen Sie die Segel für einen kurzen Schlag über das IJsselmeer zu einer der charmanten friesischen Städte wie Hindeloopen oder Stavoren. Genießen Sie die einzigartige Kultur und die malerischen Häfen.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 2: Historische Hafenstadt (Hindeloopen/Stavoren – Enkhuizen)</h4>
                  <p className="text-gray-600 text-sm">Segeln Sie über das IJsselmeer nach Enkhuizen, einer prächtigen Hafenstadt mit reicher Geschichte. Besuchen Sie das Zuiderzee-Museum und schlendern Sie durch die Altstadt.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 3: Windmühlen & Tradition (Enkhuizen – Medemblik/Hoorn)</h4>
                  <p className="text-gray-600 text-sm">Kurs auf Medemblik, die älteste Stadt Westfrieslands, oder Hoorn, bekannt für seine VOC-Vergangenheit. Entdecken Sie historische Gebäude und genießen Sie das maritime Ambiente.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 4: Schleusenabenteuer (Medemblik/Hoorn – Den Oever)</h4>
                  <p className="text-gray-600 text-sm">Segeln Sie zum Abschlussdeich (Afsluitdijk) bei Den Oever. Hier passieren Sie die Schleusen, die das IJsselmeer vom Wattenmeer trennen – ein beeindruckendes Erlebnis. Ankern Sie in einer Bucht nahe Den Oever oder legen Sie im Hafen an.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 5: Wattenmeer-Erkundung (Den Oever – Texel)</h4>
                  <p className="text-gray-600 text-sm">Ein spannender Tag im Wattenmeer erwartet Sie. Navigieren Sie durch das Gezeitengewässer zur Insel Texel, der größten der Westfriesischen Inseln. Legen Sie im Hafen von Oudeschild an und erkunden Sie die Insel mit dem Fahrrad, besuchen Sie das Ecomare.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 6: Zurück auf das IJsselmeer (Texel – Makkum/Stavoren)</h4>
                  <p className="text-gray-600 text-sm">Nach einem letzten Blick auf das Wattenmeer passieren Sie erneut die Schleusen des Abschlussdeichs und kehren auf das IJsselmeer zurück. Legen Sie in Makkum oder Stavoren an, um den letzten Abend an Bord zu genießen.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-800">Tag 7: Abschied vom Wasserland (Makkum/Stavoren – Lemmer)</h4>
                  <p className="text-gray-600 text-sm">Nach einem letzten Frühstück an Bord segeln Sie zurück zu Ihrer Charterbasis in Lemmer und treten die Heimreise an – erfüllt von unvergesslichen Eindrücken aus dem niederländischen Wasserland.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Wetter & Windbedingungen: Segeln im Rhythmus des Nordens</h3>
              <p>Das Klima in Holland ist gemäßigt maritim, geprägt von der Nähe zur Nordsee. Es ist bekannt für seine wechselhaften Bedingungen, was das Segeln spannend und abwechslungsreich macht.</p>

              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Vorherrschende Winde:</strong> Die Winde kommen meist aus westlichen Richtungen, können aber schnell drehen. Lokale Thermik (Seewind) kann an sonnigen Tagen für eine angenehme Brise sorgen.</li>
                <li><strong>Starkwindlagen:</strong> Besonders im Frühjahr und Herbst können Tiefdruckgebiete für Starkwindlagen sorgen. Auf dem IJsselmeer können sich bei starkem Wind kurze, steile Wellen aufbauen.</li>
              </ul>

              {/* Saisonale Unterschiede - 3 Boxen nebeneinander */}
              <div className="mt-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Saisonale Unterschiede:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Frühjahr (April/Mai)</h5>
                    <p className="text-sm text-gray-600">Die Natur erwacht, die Temperaturen sind noch kühl, aber angenehm. Die Winde können unbeständiger sein, was das Revier für sportliche Segler interessant macht.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Sommer (Juni-August)</h5>
                    <p className="text-sm text-gray-600">Die wärmste und sonnigste Zeit. Die Winde sind meist moderat, ideal für entspanntes Segeln und Badeurlaub. Dies ist die Hauptsaison mit dem höchsten touristischen Aufkommen.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Herbst (September/Oktober)</h5>
                    <p className="text-sm text-gray-600">Die Temperaturen sind noch angenehm, das Wasser ist vom Sommer noch warm. Die Winde können kräftiger werden, und die Wahrscheinlichkeit für Starkwindlagen nimmt zu. Die Häfen sind weniger voll, und die Natur zeigt sich in bunten Farben.</p>
                  </div>
                </div>
              </div>

              <p className="mt-4">
                <strong>Revier-Eignung für Erfahrungsstufen:</strong> Holland ist ein sehr vielseitiges Revier. Die Friesischen Seen und das IJsselmeer sind auch für weniger erfahrene Segler und Familien gut geeignet, erfordern aber Aufmerksamkeit bei Brücken- und Schleusenpassagen sowie für Untiefen. Das Wattenmeer ist ein Tidengewässer und erfordert mehr Erfahrung in der Tidennavigation und im Umgang mit Strömungen. Eine gute Wetterbeobachtung und flexible Routenplanung sind immer entscheidend.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Beste Reisezeit: Wann Ihr Holland-Traum wahr wird</h3>
              <p>Die beste Reisezeit für einen Yachtcharter in Holland ist von Mai bis September.</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Juni bis August:</strong> Die wärmsten Monate, ideal für Badeurlaub und entspanntes Segeln. Perfekt für Familien.</li>
                <li><strong>Mai und September:</strong> Weniger überfüllt, oft gute Winde und immer noch angenehme Temperaturen. Ideal für Segler, die etwas mehr Ruhe und sportlichere Bedingungen suchen.</li>
              </ul>

              {/* Vorschriften & Regeln Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3">Vorschriften & Regeln: Wichtige Hinweise für einen reibungslosen Törn</h4>
                <p className="mb-3">Holland hat klare und umfassende Vorschriften für den Yachtsport, die der Sicherheit und dem Umweltschutz dienen.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Führerscheinpflicht:</strong> Für das Führen von Sportbooten über 15 Meter Länge oder mit einer Geschwindigkeit von mehr als 20 km/h ist der Klein Vaarbewijs 2 (KVB2) erforderlich. Für kleinere Boote genügt oft der KVB1 oder eine praktische Einweisung durch den Vercharterer. Ein international anerkannter Bootsführerschein (z.B. SBF See oder ICC) wird in der Regel anerkannt.</li>
                  <li><strong>Funkzeugnis (SRC):</strong> Für UKW-Funkgeräte an Bord ist das Short Range Certificate (SRC) erforderlich.</li>
                  <li><strong>Brücken und Schleusen:</strong> In Holland gibt es sehr viele Brücken und Schleusen. Die Regeln für deren Passage müssen beachtet werden (Sichtzeichen, Funkkontakt, Wartezeiten). Viele Brücken öffnen auf Zuruf oder zu festen Zeiten.</li>
                  <li><strong>Umweltauflagen:</strong> Strikte Regeln zur Müllentsorgung und Abwasserentsorgung. Das Ankern auf Seegraswiesen oder in Naturschutzgebieten ist untersagt.</li>
                  <li><strong>Hafenformalitäten:</strong> Bei der Ankunft in einer Marina melden Sie sich beim Hafenmeister an und entrichten die Liegegebühren. Viele Häfen nutzen Automaten für die Bezahlung.</li>
                  <li><strong>Navigation:</strong> Es gelten die internationalen Kollisionsverhütungsregeln (KVR) sowie nationale Vorschriften. Besondere Aufmerksamkeit ist in engen Fahrwassern, Kanälen und bei der Tidennavigation im Wattenmeer geboten.</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Erfahrungen von Seglern: Eine Mischung aus Sport, Komfort und „Gezelligheid"</h3>
              <p>Segler, die Holland besucht haben, berichten von einem Revier, das sowohl sportliche Herausforderungen als auch entspannte Naturerlebnisse und eine einzigartige Gastfreundschaft bietet.</p>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Positives:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Einzigartiges Wasserland: Die Vielfalt der Reviere (IJsselmeer, Grachten, Wattenmeer) ist weltweit einzigartig.</li>
                  <li>Hafeninfrastruktur: Die Marinas sind modern, sauber und bieten umfassenden Service.</li>
                  <li>Kurze Distanzen: Die Städte und Inseln liegen nah beieinander, was flexible Routenplanung ermöglicht.</li>
                  <li>Gute Versorgung: Proviantierung und technische Unterstützung sind in den Häfen problemlos möglich.</li>
                  <li>Gastfreundschaft („Gezelligheid"): Die freundliche und entspannte Atmosphäre in den Häfen und Dörfern wird von Seglern sehr geschätzt.</li>
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Herausforderungen:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Wetterwechsel: Das Wetter kann, wie in Nordeuropa üblich, schnell umschlagen.</li>
                  <li>Brücken und Schleusen: Wartezeiten können auftreten, und die Manöver erfordern Aufmerksamkeit.</li>
                  <li>Wattenmeer-Navigation: Das Segeln im Wattenmeer erfordert genaue Kenntnisse der Gezeiten und Strömungen.</li>
                  <li>Volle Häfen: In der Hochsaison können beliebte Marinas sehr voll sein, eine frühzeitige Ankunft oder Reservierung per App ist ratsam.</li>
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Praktische Tipps aus der Seglergemeinschaft:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Gute Karten: Investieren Sie in aktuelle und detaillierte Seekarten für Ihr geplantes Revier.</li>
                  <li>Wetter-App: Eine zuverlässige Wetter-App ist unverzichtbar.</li>
                  <li>Fahrräder: Viele Städte und Inseln lassen sich hervorragend mit dem Fahrrad erkunden.</li>
                  <li>Geduld: Bei Brücken und Schleusen ist Geduld gefragt, aber die Atmosphäre ist meist entspannt.</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Fazit: Ihr Traumtörn in Holland – Ein unvergessliches Abenteuer</h3>
              <p>
                Ein Yachtcharter in Holland ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, jeden Tag aufs Neue zu entscheiden, ob Sie eine historische Stadt erkunden, eine einsame Bucht ansteuern oder einfach auf dem Wasser die einzigartige Landschaft genießen. Es ist die Kombination aus:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Einzigartigen Segelbedingungen:</strong> Von geschützten Seen und Grachten bis zu den Gezeiten des Wattenmeeres ist für jede Erfahrungsstufe etwas dabei.</li>
                <li><strong>Atemberaubenden Landschaften:</strong> Windmühlen, bunte Tulpenfelder (saisonal), historische Städte und weite Wasserflächen.</li>
                <li><strong>Kultureller Vielfalt:</strong> Reiche Seefahrtsgeschichte, Kunst und die berühmte niederländische „Gezelligheid".</li>
                <li><strong>Nordeuropäische Effizienz & Gastfreundschaft:</strong> Moderne Marinas und herzliche Menschen.</li>
              </ul>

              <p className="mt-4">
                Holland bleibt ein spektakuläres Yachtcharter-Revier für alle, die das Abenteuer suchen und die Schönheit des Wasserlandes vom Wasser aus erleben möchten. Wer die Regeln beachtet und sich gut vorbereitet, wird mit einzigartigen Segelerlebnissen und einem tiefen Gefühl der Verbundenheit mit der Natur belohnt.
              </p>

              <p className="mt-4 font-semibold">
                Sind Sie bereit, die Segel zu setzen und Holland zu entdecken?
              </p>

              <p className="mt-2">
                Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Holland an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
              </p>
            </div>
          </div>
        </div>
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Holland Charter anfragen
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie das vielseitige Holland mit dem entspannten IJsselmeer oder den herausfordernden Nordsee-Gezeiten.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Holland Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Holland;