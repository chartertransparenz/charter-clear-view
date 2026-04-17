import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import balticSea from "@/assets/baltic-sea.jpg";

const GermanBalticSea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Deutsche Ostseeküste" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-September" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Tidenfrei segeln" }
  ];

  const regions = [
    {
      name: "Deutsche Ostsee",
      link: "/reviere/nord-europa/deutsche-ostsee/charter-standorte",
      description: "Tidenfrei segeln vor Deutschlands Ostseeküste",
      cities: ["Breege (Rügen)", "Flensburg", "Großenbrode", "Heiligenhafen", "Rostock/Warnemünde"]
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/a4ce7804-94fa-4ede-aa9c-6185aa126336.webp"
          alt="Deutsche Ostsee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇩🇪 Deutsche Ostsee</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Deutsche Ostsee</h1>
            <p className="text-xl max-w-2xl">
              Tidenfrei segeln vor der deutschen Küste
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/nord-europa" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Nord- & Ostsee
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
                <BreadcrumbLink href="/reviere/nord-europa">Nord- & Ostsee</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Deutsche Ostsee</BreadcrumbPage>
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

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Yachtcharter Deutsche Ostsee: Segeln im Herzen Nordeuropas – Ihr Traumtörn zwischen Hansestädten und Inselparadiesen</h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Die Deutsche Ostsee – ein Segelrevier, das mit seiner einzigartigen Mischung aus klarer Ostseeluft, malerischen Stränden, geschützten Buchten und historischen Hansestädten begeistert. Ein Yachtcharter an der deutschen Küste ist weit mehr als ein gewöhnlicher Segelurlaub; es ist eine Einladung, in eine Welt einzutauchen, in der maritime Tradition auf unberührte Natur, lebendige Kultur auf entspannte Gastfreundschaft trifft. Hier, wo die Wellen sanft an den Bug schlagen und die Möwen kreischen, erwartet Sie ein Segelabenteuer, das alle Ihre Sinne berühren wird.
              </p>
              <p>
                Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina in Kiel, Rostock oder Heiligenhafen, lassen die lebhafte Atmosphäre der Hafenstadt hinter sich und nehmen Kurs auf eine Inselwelt, die einem Bilderbuch gleicht. Jeder Tag bringt neue Horizonte: malerische Buchten, die zum Schwimmen und Sonnenbaden einladen, versteckte Naturhäfen, die absolute Ruhe versprechen, und historische Städte, deren Gassen von Jahrtausenden europäischer Geschichte erzählen.
              </p>
              <p>
                Die Deutsche Ostsee bietet eine unvergleichliche Vielfalt an Segelrevieren, die für jeden Geschmack und jede Erfahrungsstufe das Richtige bereithalten. Die kurzen Distanzen zwischen den Häfen, die zahlreichen geschützten Ankerplätze und die hervorragende maritime Infrastruktur machen die Ostsee zu einem idealen Ziel für Familien, Genießer und alle, die das Inselhopping in vollen Zügen genießen möchten. Doch gerade in diesem Revier sind die Kenntnis der lokalen Besonderheiten und die Einhaltung der Vorschriften von entscheidender Bedeutung für einen reibungslosen und unvergesslichen Törn.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Die Regionen und Inselgruppen der Deutschen Ostsee: Ein Kaleidoskop aus Küste und Kultur</h3>
              <p>
                Die deutsche Ostseeküste gliedert sich in verschiedene Regionen, die jeweils ihren eigenen, unverwechselbaren Charme und spezifische Segelbedingungen bieten.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Kieler Bucht:</strong> Das Tor zur westlichen Ostsee und oft der Startpunkt für Törns in die dänische Südsee. Die Kieler Bucht bietet offene Gewässer, aber auch geschützte Bereiche wie die Schlei, einen fjordähnlichen Meeresarm mit malerischen Ufern und charmanten Orten wie Kappeln.</li>
                <li><strong>Flensburger Förde:</strong> Eine langgezogene Förde, die die Grenze zu Dänemark bildet. Hier segeln Sie in einem geschützten Revier mit vielen kleinen Buchten und dänischen Inseln. Flensburg selbst ist eine lebendige Hafenstadt mit maritimem Flair.</li>
                <li><strong>Lübecker Bucht:</strong> Bekannt für ihre breiten Sandstrände und beliebten Badeorte wie Travemünde, Timmendorfer Strand und Grömitz. Die Bucht bietet unkompliziertes Segeln und ist ideal für kurze Ausflüge und Familien.</li>
                <li><strong>Mecklenburgische Küste:</strong> Eine abwechslungsreiche Küstenlinie mit langen Sandstränden, Steilküsten und der Halbinsel Fischland-Darß-Zingst. Hier finden Sie charmante Seebäder wie Kühlungsborn und Warnemünde sowie die geschützten Boddengewässer.</li>
                <li><strong>Rügen:</strong> Deutschlands größte Insel und ein Highlight für jeden Ostseesegler. Rügen beeindruckt mit den berühmten Kreidefelsen des Nationalparks Jasmund, malerischen Seebädern wie Binz und Sellin, und dem Kap Arkona. Die Insel bietet vielfältige Anker- und Hafenmöglichkeiten.</li>
                <li><strong>Hiddensee:</strong> Die autofreie "Perle der Ostsee" westlich von Rügen. Hiddensee ist ein Naturparadies mit unberührten Stränden, Leuchttürmen und kleinen, charmanten Orten wie Vitte und Kloster.</li>
                <li><strong>Usedom:</strong> Die "Sonneninsel" im Osten, bekannt für ihre breiten Sandstrände und die historischen Kaiserbäder Heringsdorf, Ahlbeck und Bansin. Usedom ist auch das Tor zu den polnischen Gewässern.</li>
                <li><strong>Boddengewässer Vorpommerns:</strong> Ein einzigartiges System aus flachen, brackigen Lagunen hinter der Halbinsel Darß-Zingst und den Inseln Rügen und Usedom. Die Bodden sind ein Paradies für Naturliebhaber, Vogelbeobachter und bieten geschützte, ruhige Segelbedingungen, die besonders für Katamarane oder Yachten mit geringem Tiefgang geeignet sind.</li>
              </ul>
              
              <p className="mt-4">
                <strong>Nautische Besonderheiten:</strong> Die Ostsee ist ein Binnenmeer ohne Gezeiten. Die Navigation erfordert jedoch Aufmerksamkeit für Untiefen, Fahrwasser und Tonnen. In den Boddengewässern sind die Tiefen oft gering, was eine präzise Navigation erfordert. <strong>Windverhältnisse:</strong> Die vorherrschenden Winde kommen aus West bis Südwest, sind aber oft wechselhaft. Lokale Thermik (Seewind) kann an sonnigen Tagen für eine angenehme Brise sorgen. <strong>Landschaftliche Reize:</strong> Von den dramatischen Kreidefelsen Rügens über die sanften Hügel der Schlei bis zu den weiten Sandstränden Usedoms – die Landschaft ist unglaublich vielfältig und reizvoll.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Erreichbarkeit: Ihr direkter Weg an die Ostsee</h4>
              <p>
                Die deutsche Ostseeküste ist dank ihrer gut ausgebauten Infrastruktur hervorragend zu erreichen.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Per Auto:</strong> Aus allen Teilen Deutschlands, Österreichs und der Schweiz ist die Ostsee bequem über das gut ausgebaute Autobahnnetz erreichbar. Die meisten Marinas bieten sichere und oft kostenpflichtige Parkmöglichkeiten für die Dauer Ihres Törns.</li>
                <li><strong>Per Bahn:</strong> Viele Küstenstädte wie Kiel, Lübeck, Rostock und Stralsund sind gut an das deutsche Bahnnetz angebunden. Von dort aus sind die Marinas oft mit dem ÖPNV oder Taxi erreichbar.</li>
                <li><strong>Per Flugzeug:</strong> Die nächstgelegenen Flughäfen sind:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Hamburg (HAM): Für die westliche Ostsee (Kiel, Lübeck, Fehmarn).</li>
                    <li>Rostock-Laage (RLG): Für die Mecklenburgische Küste und Rügen.</li>
                    <li>Lübeck (LBC): Für die Lübecker Bucht. Von den Flughäfen sind Transfers zu den Ausgangshäfen per Mietwagen, Shuttle oder ÖPNV möglich.</li>
                  </ul>
                </li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Marinas & Ausgangshäfen: Perfekte Infrastruktur für Ihren Törn</h4>
                <p className="mb-3">Die deutsche Ostseeküste verfügt über eine exzellente maritime Infrastruktur mit einem dichten Netz an modernen Marinas und Stadthäfen.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Kiel:</strong> Als Segelhauptstadt ist Kiel ein wichtiger Charterstützpunkt mit mehreren Marinas (z.B. Kiel-Schilksee, Düsternbrook), die eine große Auswahl an Yachten bieten.</li>
                  <li><strong>Flensburg:</strong> Am Ende der Flensburger Förde gelegen, ist Flensburg ein charmanter Ausgangspunkt für Törns in die dänische Südsee.</li>
                  <li><strong>Lübeck/Travemünde:</strong> Von Lübeck-Schlutup oder Travemünde aus erreichen Sie schnell die Lübecker Bucht, Grömitz, Neustadt, Poel oder Boltenhagen.</li>
                  <li><strong>Heiligenhafen:</strong> Ein beliebter und gut ausgestatteter Charterstützpunkt in Schleswig-Holstein, ideal für Törns nach Fehmarn, in die Lübecker Bucht oder nach Dänemark.</li>
                  <li><strong>Rostock:</strong> Mit seinem Überseehafen und der Nähe zu Warnemünde ist Rostock ein wichtiger Ausgangspunkt für die Mecklenburgische Küste und Rügen.</li>
                  <li><strong>Breege (Rügen):</strong> Ein zentraler Charterstützpunkt auf Rügen, ideal für Törns rund um die Insel und in die Boddengewässer.</li>
                  <li><strong>Großenbrode:</strong> Ein weiterer guter Ausgangspunkt in der Nähe von Fehmarn.</li>
                  <li><strong>Eckernförde:</strong> Eine beliebte Charterbasis mit guter Infrastruktur für Segler und Motorbootfahrer.</li>
                </ul>
                <p className="mt-3">
                  <strong>Verfügbarkeit von Yachten:</strong> Das Angebot reicht von komfortablen Segelyachten (Monohulls) und geräumigen Katamaranen bis hin zu Motoryachten. Die Flotten sind in der Regel sehr gut gewartet und für die Bedingungen des Reviers optimiert.
                </p>
                <p>
                  <strong>Besonderheiten Deutschlands in puncto Service und Ausstattung:</strong> Deutsche Charterunternehmen legen großen Wert auf Sicherheit, Wartung und Service. Die Yachten sind in der Regel sehr gut ausgestattet und erfüllen hohe Sicherheitsstandards.
                </p>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Beliebte Törnziele: Ein Kaleidoskop aus Küste und Kultur</h4>
              <p>Ein Yachtcharter in der Deutschen Ostsee ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Rügen:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Königsstuhl (Nationalpark Jasmund): Die berühmten Kreidefelsen sind ein absolutes Highlight.</li>
                    <li>Seebäder Binz und Sellin: Mit ihrer Bäderarchitektur und den Seebrücken.</li>
                    <li>Kap Arkona: Der nördlichste Punkt Rügens mit Leuchttürmen und einer beeindruckenden Steilküste.</li>
                  </ul>
                </li>
                <li><strong>Hiddensee:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Dornbusch-Leuchtturm: Bietet einen fantastischen Panoramablick über die Insel und die Ostsee.</li>
                    <li>Vitte und Kloster: Malerische Orte mit Reetdächern und Künstlerateliers.</li>
                  </ul>
                </li>
                <li><strong>Usedom:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Kaiserbäder Heringsdorf, Ahlbeck, Bansin: Prachtvolle Villen und lange Seebrücken.</li>
                    <li>Peenemünde: Historischer Ort mit dem Historisch-Technischen Museum.</li>
                  </ul>
                </li>
                <li><strong>Boddenlandschaft:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Darß-Zingst: Eine Halbinsel mit langen Sandstränden, Dünen und dem Weststrand, der zu den schönsten Europas zählt.</li>
                    <li>Barth und Prerow: Charmante Orte an den Bodden, ideal für Naturbeobachtungen.</li>
                  </ul>
                </li>
                <li><strong>Dänische Südsee:</strong> Nur einen Katzensprung entfernt, locken die dänischen Inseln wie Ærø, Langeland oder Als mit ihrem hyggeligen Charme, kleinen Häfen und entspannter Atmosphäre.</li>
                <li><strong>Hansestädte entlang der Küste:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Lübeck: UNESCO-Welterbe mit Holstentor und Marzipan.</li>
                    <li>Wismar: UNESCO-Welterbe mit Backsteingotik.</li>
                    <li>Rostock: Lebendige Hafenstadt mit Warnemünde als Seebad.</li>
                    <li>Stralsund: UNESCO-Welterbe mit historischer Altstadt und Ozeaneum.</li>
                  </ul>
                </li>
              </ul>
              
              <p className="mt-4">
                <strong>Geheimtipps für einsame Ankerplätze:</strong> Abseits der belebten Häfen finden Sie zahlreiche geschützte Buchten in den Förden, Bodden und um die Inseln, die zum freien Ankern einladen. <strong>Nautische Highlights:</strong> Das Segeln durch die engen Passagen der Schlei oder der Flensburger Förde, das Umrunden von Leuchttürmen, das Beobachten von Seehunden und Seeadlern in den Naturschutzgebieten. <strong>Landaktivitäten:</strong> Radfahren entlang der Küstenradwege, Wandern in Nationalparks, Sightseeing in historischen Städten, Besuch von Leuchttürmen und Museen, und natürlich das Genießen der norddeutschen Küche mit frischem Fisch und regionalen Spezialitäten.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Ihr 7-Tage-Törnvorschlag ab Heiligenhafen (Westliche Ostsee & Rügen)</h4>
              
              <div className="border-l-4 border-primary pl-4 mb-4">
                <p><strong>Tag 1: Ankunft & Inselzauber (Heiligenhafen – Fehmarn)</strong> Nach dem Check-in in Heiligenhafen setzen Sie die Segel für einen kurzen Schlag nach Fehmarn, Deutschlands drittgrößter Insel. Ankern Sie in einer ruhigen Bucht oder legen Sie in der Marina Burgtiefe oder Orth an.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4 mb-4">
                <p><strong>Tag 2: Kurs Ost (Fehmarn – Kühlungsborn/Warnemünde)</strong> Segeln Sie entlang der Mecklenburgischen Küste nach Kühlungsborn oder Warnemünde. Genießen Sie die langen Sandstrände und die Bäderarchitektur.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4 mb-4">
                <p><strong>Tag 3: Rügen – Die Kreidefelsen rufen! (Kühlungsborn/Warnemünde – Rügen)</strong> Ein längerer Schlag bringt Sie nach Rügen, Deutschlands größter Insel. Legen Sie in Sassnitz oder Lauterbach an und planen Sie einen Ausflug zu den berühmten Kreidefelsen des Nationalparks Jasmund.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4 mb-4">
                <p><strong>Tag 4: Rügen-Erkundung (Rügen)</strong> Verbringen Sie den Tag mit der Erkundung Rügens. Besuchen Sie das Kap Arkona mit seinen Leuchttürmen, die Seebäder Binz oder Sellin, oder genießen Sie die Natur in den Boddengewässern.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4 mb-4">
                <p><strong>Tag 5: Darß-Zingst – Naturparadies (Rügen – Darß/Zingst)</strong> Segeln Sie zur Halbinsel Darß-Zingst. Legen Sie in Barth oder Prerow an und erkunden Sie den Weststrand, einen der schönsten Naturstrände Europas.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4 mb-4">
                <p><strong>Tag 6: Rückschlag nach Fehmarn (Darß/Zingst – Fehmarn)</strong> Beginnen Sie die Rückreise in Richtung Fehmarn. Legen Sie in Großenbrode oder erneut in Burgtiefe an. Genießen Sie einen letzten Abend an Bord mit Blick auf die Küste.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4 mb-4">
                <p><strong>Tag 7: Abschied von der Ostsee (Fehmarn – Heiligenhafen)</strong> Nach einem letzten Frühstück an Bord segeln Sie zurück zu Ihrer Charterbasis in Heiligenhafen und treten die Heimreise an – erfüllt von unvergesslichen Eindrücken aus der Deutschen Ostsee.</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Wetter & Windbedingungen: Segeln im Rhythmus des Nordens</h4>
                <p className="mb-3">Das Klima an der Deutschen Ostseeküste ist gemäßigt maritim. Es ist bekannt für seine wechselhaften Bedingungen, was das Segeln spannend und abwechslungsreich macht.</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li><strong>Vorherrschende Winde:</strong> Die Winde kommen meist aus westlichen Richtungen (Westwinde), können aber schnell drehen. Lokale Thermik (Seewind) kann an sonnigen Tagen für eine angenehme Brise sorgen.</li>
                  <li><strong>Starkwindlagen:</strong> Besonders im Frühjahr und Herbst können Tiefdruckgebiete für Starkwindlagen sorgen. Die Ostsee ist bekannt für ihre kurzen, steilen Wellen, die bei starkem Wind eine Herausforderung darstellen können.</li>
                </ul>
                
                <h5 className="text-md font-semibold text-gray-800 mb-3">Saisonale Unterschiede:</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                    <h6 className="font-semibold text-gray-800 mb-2">Frühjahr (April/Mai)</h6>
                    <p className="text-sm text-gray-600">Die Natur erwacht, die Temperaturen sind noch kühl, aber angenehm. Die Winde können unbeständiger sein, was das Revier für sportliche Segler interessant macht.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                    <h6 className="font-semibold text-gray-800 mb-2">Sommer (Juni-August)</h6>
                    <p className="text-sm text-gray-600">Die wärmste und sonnigste Zeit. Die Winde sind meist moderat, ideal für entspanntes Segeln und Badeurlaub. Dies ist die Hauptsaison mit dem höchsten touristischen Aufkommen.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                    <h6 className="font-semibold text-gray-800 mb-2">Herbst (September/Oktober)</h6>
                    <p className="text-sm text-gray-600">Die Temperaturen sind noch angenehm, das Wasser ist vom Sommer noch warm. Die Winde können kräftiger werden, und die Wahrscheinlichkeit für Starkwindlagen nimmt zu. Die Häfen sind weniger voll, und die Natur zeigt sich in bunten Farben.</p>
                  </div>
                </div>
                
                <p className="mt-4">
                  <strong>Revier-Eignung für Erfahrungsstufen:</strong> Die Deutsche Ostsee ist ein vielseitiges Revier. Die geschützten Buchten und Bodden sind auch für weniger erfahrene Segler und Familien gut geeignet. Die offenen Gewässer und die Möglichkeit von Starkwindlagen bieten jedoch auch für erfahrene Skipper genügend Herausforderungen. Eine gute Wetterbeobachtung und flexible Routenplanung sind immer entscheidend.
                </p>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Beste Reisezeit: Wann Ihr Ostsee-Traum wahr wird</h4>
              <p>Die beste Reisezeit für einen Yachtcharter in der Deutschen Ostsee ist von Mai bis September.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Juni bis August:</strong> Die wärmsten Monate, ideal für Badeurlaub und entspanntes Segeln. Perfekt für Familien.</li>
                <li><strong>Mai und September:</strong> Weniger überfüllt, oft gute Winde und immer noch angenehme Temperaturen. Ideal für Segler, die etwas mehr Ruhe und sportlichere Bedingungen suchen.</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Vorschriften & Regeln: Wichtige Hinweise für einen reibungslosen Törn</h4>
              <p>Deutschland hat klare und umfassende Vorschriften für den Yachtsport, die der Sicherheit und dem Umweltschutz dienen.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Führerscheinpflicht:</strong> Für das Führen von Sportbooten auf der Ostsee ist der Sportbootführerschein See (SBF See) obligatorisch. Für Yachten mit einer Länge über 15 Meter oder zur gewerblichen Nutzung können weitergehende Scheine (z.B. Sportküstenschifferschein SKS) erforderlich sein.</li>
                <li><strong>Funkzeugnis (SRC):</strong> Für UKW-Funkgeräte an Bord ist mindestens das Short Range Certificate (SRC) erforderlich. Ab einer Bootslänge von 12 Metern ist ein fest installiertes UKW-Funkgerät Pflicht.</li>
                <li><strong>Pyroschein (FKN):</strong> Für den Erwerb und das Führen von Seenotsignalmitteln (Pyrotechnik) ist der Fachkundenachweis für Seenotsignalmittel (FKN) erforderlich.</li>
                <li><strong>Versicherungsnachweise:</strong> Eine Haftpflichtversicherung für das gecharterte Boot ist obligatorisch. Ihr Charterunternehmen kümmert sich in der Regel darum. Eine private Skipper-Haftpflichtversicherung wird zusätzlich empfohlen.</li>
                <li><strong>Bootspapiere:</strong> Alle relevanten Bootspapiere (Registrierung, Versicherungsnachweis, ggf. EU-Konformitätserklärung) müssen an Bord mitgeführt werden.</li>
                <li><strong>Umweltauflagen:</strong> Strikte Regeln zur Müllentsorgung (kein Müll über Bord), Abwasserentsorgung (keine Einleitung von Fäkalien in Küstennähe oder in Naturschutzgebieten) und zum Schutz mariner Lebensräume. Das Ankern auf Seegraswiesen oder in Naturschutzgebieten ist untersagt.</li>
                <li><strong>Hafenformalitäten:</strong> Bei der Ankunft in einer Marina melden Sie sich beim Hafenmeister an und entrichten die Liegegebühren.</li>
                <li><strong>Navigation:</strong> Es gelten die internationalen Kollisionsverhütungsregeln (KVR) sowie nationale Vorschriften. Besondere Aufmerksamkeit ist in Fahrwassern, Sperrgebieten und Naturschutzgebieten geboten.</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Erfahrungen von Seglern: Eine Mischung aus Sport, Komfort und Natur</h4>
              <p>Segler, die die Deutsche Ostsee besucht haben, berichten von einem Revier, das sowohl sportliche Herausforderungen als auch entspannte Naturerlebnisse bietet.</p>
              
              <p className="mt-4"><strong>Positives:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vielseitigkeit: Die Mischung aus offener See, geschützten Förden und Bodden, historischen Städten und Naturparadiesen ist einzigartig.</li>
                <li>Hafeninfrastruktur: Die Marinas sind modern, sauber und bieten umfassenden Service.</li>
                <li>Kurze Distanzen: Die Inseln und Häfen liegen nah beieinander, was flexible Routenplanung ermöglicht.</li>
                <li>Gute Versorgung: Proviantierung und technische Unterstützung sind in den Häfen problemlos möglich.</li>
                <li>Naturerlebnisse: Die Möglichkeit, Seehunde, Seeadler und eine reiche Vogelwelt zu beobachten.</li>
              </ul>
              
              <p className="mt-4"><strong>Herausforderungen:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wetterwechsel: Das Wetter kann schnell umschlagen, mit plötzlichen Starkwinden und kurzen, steilen Wellen. Eine gute Wetterbeobachtung ist unerlässlich.</li>
                <li>Untiefen: Besonders in den Boddengewässern und abseits der Fahrwasser gibt es viele Untiefen, die präzise Navigation erfordern.</li>
                <li>Volle Häfen: In der Hochsaison können beliebte Marinas sehr voll sein, eine frühzeitige Ankunft oder Reservierung ist ratsam.</li>
              </ul>
              
              <p className="mt-4"><strong>Praktische Tipps aus der Seglergemeinschaft:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wetter-App: Eine gute Wetter-App oder ein Wetterdienst sind unverzichtbar.</li>
                <li>Reffbereitschaft: Seien Sie immer bereit, Reffs einzubinden, auch wenn der Tag sonnig beginnt.</li>
                <li>Hafenhandbuch: Ein aktuelles Hafenhandbuch ist für die Navigation und die Wahl der Ankerplätze unerlässlich.</li>
                <li>Fahrrad mitnehmen: Viele Inseln und Küstenabschnitte lassen sich hervorragend mit dem Fahrrad erkunden.</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Fazit: Ihr Segeltörn an der Deutschen Ostsee – Ein unvergessliches Abenteuer</h4>
              <p>
                Ein Yachtcharter in der Deutschen Ostsee ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, in einer historischen Hansestadt anlegen oder einfach auf dem offenen Meer die frische Ostseeluft genießen. Es ist die Kombination aus:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Abwechslungsreichen Segelbedingungen: Von geschützten Bodden bis zu offener See ist für jede Erfahrungsstufe etwas dabei.</li>
                <li>Atemberaubenden Landschaften: Kreidefelsen, weite Sandstrände, grüne Inseln und malerische Förden.</li>
                <li>Kultureller Vielfalt: Historische Hansestädte, Bäderarchitektur und maritime Traditionen.</li>
                <li>Norddeutsche Gelassenheit & Gastfreundschaft: Entspannte Atmosphäre und herzliche Menschen.</li>
              </ul>
              
              <p className="mt-4">
                Die Deutsche Ostsee bleibt ein spektakuläres Yachtcharter-Revier für alle, die das Abenteuer suchen und die Schönheit Nordeuropas vom Wasser aus erleben möchten. Wer die Regeln beachtet und sich gut vorbereitet, wird mit einzigartigen Segelerlebnissen und einem tiefen Gefühl der Verbundenheit mit der Natur belohnt.
              </p>
              
              <p className="mt-4"><strong>Sind Sie bereit, die Segel zu setzen und die Deutsche Ostsee zu entdecken?</strong></p>
              <p>
                Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in der Deutschen Ostsee an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
              </p>
            </div>
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full max-w-4xl mx-auto">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    {region.cities && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {region.cities.map((city, idx) => (
                          <div key={idx} className="text-sm text-blue-600 font-medium">
                            • {city}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>


        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die deutsche Ostsee?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie tidenfreies Segeln vor der deutschen Küste mit 
              historischen Hansestädten und familienfreundlichen Revieren.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Deutsche Ostsee Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanBalticSea;