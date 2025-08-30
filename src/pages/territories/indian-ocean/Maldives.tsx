import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, Waves, Wind, Ship, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import TerritoryMap from "@/components/TerritoryMap";
// Using uploaded Maldives header image
const Maldives = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [
    {
      icon: Waves,
      label: "Windverhältnisse",
      value: "10-20 Knoten, meist moderat"
    },
    {
      icon: Wind,
      label: "Monsune",
      value: "Nordost (trocken) & Südwest"
    },
    {
      icon: Ship,
      label: "Flotte",
      value: "Luxus-Segelyachten & Katamarane"
    },
    {
      icon: Compass,
      label: "Navigation",
      value: "Komplex - lokale Crew nötig"
    }
  ];
  const regions = [
    {
      name: "Malé-Atoll",
      link: "/reviere/indischer-ozean/malediven/male",
      description: "Hauptstadt und wichtigster Ausgangspunkt für Yachtcharter",
      cities: ["Malé", "Hulhumalé", "Vilimalé"]
    }
  ];

  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/afca79d6-75f1-4510-880a-13f284323cb5.png" alt="Malediven" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇲🇻 Malediven</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Malediven</h1>
            <p className="text-xl max-w-2xl">
              Das ultimative Luxus-Segelparadies
            </p>
          </div>
        </div>
        <Link to="/reviere/indischer-ozean" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Indischen Ozean
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
                <BreadcrumbLink href="/reviere/indischer-ozean">Indischer Ozean</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Malediven</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Territory Map */}
        <div className="max-w-4xl mx-auto mb-12">
          <TerritoryMap
            region="Malediven"
            center={{
              lat: 4.175,
              lng: 73.509
            }}
            zoom={8}
            maptype="satellite"
            className="w-full"
          />
        </div>

        {/* Main Content - Combined Text Block */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg rounded-lg border">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Malediven: Segeln im Paradies – Ihr Traumtörn in den Atollen des Indischen Ozeans</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Die Malediven – ein Name, der wie kein anderer für das ultimative Inselparadies steht. Ein Archipel von über 1.000 Koralleninseln, die wie eine Perlenkette im tiefblauen Indischen Ozean liegen. Ein Yachtcharter auf den Malediven ist weit mehr als ein gewöhnlicher Segelurlaub; es ist eine Einladung, in eine Welt einzutauchen, in der kristallklares, türkisfarbenes Wasser auf unberührte Sandstrände, spektakuläre Korallenriffe und eine faszinierende Unterwasserwelt trifft.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Hier, wo die Zeit stillzustehen scheint und jeder Sonnenuntergang ein Meisterwerk der Natur ist, erwartet Sie ein Segelabenteuer, das alle Ihre Sinne berühren wird. Stellen Sie sich vor, Sie lichten den Anker im Herzen der Malediven, lassen die lebhafte Atmosphäre von Malé hinter sich und nehmen Kurs auf eine Inselwelt, die einem Märchen gleicht.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                Die Malediven sind ein Revier, das sich durch seine einzigartige Topografie auszeichnet: flache Atolle, die von Riffen gesäumt sind, und unzählige Inseln, die wie kleine Oasen aus dem Meer ragen. Dies erfordert eine besondere Art des Segelns, die auf Entspannung, Entdeckung und das Eintauchen in die Natur abzielt. Hier zählt nicht die Geschwindigkeit, sondern das Erlebnis – das sanfte Gleiten über das Wasser, das Entdecken verborgener Schnorchelplätze und das Genießen der absoluten Ruhe.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Die Atolle der Malediven: Ein Kaleidoskop aus Türkis und Grün</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Die Malediven bestehen aus 26 natürlichen Atollen, die sich wie eine Kette vom Äquator nach Norden erstrecken. Jedes Atoll ist ein eigenes kleines Ökosystem mit einzigartigen Merkmalen.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Die zentralen Atolle: Malé, Ari, Baa – Das Herz des Yachtcharters</h3>
              
              <h4 className="text-xl font-bold text-gray-800 mb-3">Malé-Atoll (Nord- und Süd-Malé-Atoll)</h4>
              <p className="text-gray-700 mb-4">Das Tor zu den Malediven und der wichtigste Ausgangspunkt für Yachtcharter. Hier befindet sich der internationale Flughafen und die Hauptstadt Malé. Die Atolle bieten eine Mischung aus belebten Inseln, luxuriösen Resorts und unzähligen Tauch- und Schnorchelplätzen.</p>
              
              <h4 className="text-xl font-bold text-gray-800 mb-3">Ari-Atoll (Nord- und Süd-Ari-Atoll)</h4>
              <p className="text-gray-700 mb-4">Berühmt für seine spektakulären Tauchplätze, insbesondere für Walhaie und Mantarochen. Das Ari-Atoll ist ein Paradies für Unterwasserfotografen und bietet eine Vielzahl von Sandbänken und unbewohnten Inseln für private Ankerstopps.</p>
              
              <h4 className="text-xl font-bold text-gray-800 mb-3">Baa-Atoll</h4>
              <p className="text-gray-700 mb-4">Ein UNESCO-Biosphärenreservat, bekannt für seine reiche marine Biodiversität. Hier befindet sich die Hanifaru Bay, einer der weltweit besten Orte, um Mantarochen und Walhaie in großen Gruppen zu beobachten (saisonal). Das Baa-Atoll ist ein Muss für Naturliebhaber.</p>
              
              <h4 className="text-xl font-bold text-gray-800 mb-3">Raa-Atoll & Lhaviyani-Atoll</h4>
              <p className="text-gray-700 mb-6">Nördlich des Baa-Atolls gelegen, bieten diese Atolle unberührte Riffe und eine ruhigere Atmosphäre, ideal für Segler, die Abgeschiedenheit suchen.</p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Die südlichen Atolle: Dhaalu, Thaa, Laamu, Addu – Unberührte Schönheit</h3>
              
              <h4 className="text-xl font-bold text-gray-800 mb-3">Dhaalu-Atoll</h4>
              <p className="text-gray-700 mb-4">Ein aufstrebendes Atoll mit einigen luxuriösen Resorts und unberührten Tauchplätzen.</p>
              
              <h4 className="text-xl font-bold text-gray-800 mb-3">Addu-Atoll</h4>
              <p className="text-gray-700 mb-8">Das südlichste Atoll der Malediven, bekannt für seine einzigartige Herzform und seine historische Bedeutung im Zweiten Weltkrieg. Hier befindet sich der Flughafen Gan, der einen alternativen Ausgangspunkt für Törns im Süden bietet.</p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Erreichbarkeit: Ihr direkter Weg ins Inselparadies</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Die Malediven sind hervorragend an das internationale Flugnetz angebunden, was die Anreise zu Ihrem Yachtcharter-Abenteuer einfach und bequem macht.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Per Direktflug</h3>
              <p className="text-gray-700 mb-6">
                Der Velana International Airport (MLE) auf Hulhulé (direkt neben Malé) ist der wichtigste Ankunftsort. Er wird von zahlreichen internationalen Fluggesellschaften aus Mitteleuropa (z.B. Frankfurt, Zürich, Wien), dem Nahen Osten und Asien direkt oder mit bequemen Umsteigeverbindungen angeflogen.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Transfers zu den Ausgangshäfen/Marinas</h3>
              <p className="text-gray-700 mb-4">Von Malé aus erfolgt der Transfer zu Ihrer Charteryacht oder zu weiter entfernten Atollen je nach Lage der Basis:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                <li><strong>Speedboat:</strong> Für Marinas im Malé-Atoll oder nahegelegenen Atollen</li>
                <li><strong>Wasserflugzeug:</strong> Für Resorts und Charterbasen in entfernteren Atollen, ein Erlebnis für sich mit spektakulären Ausblicken</li>
                <li><strong>Inlandsflug:</strong> Für die südlichsten Atolle wie Addu (Flughafen Gan)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Marinas & Ausgangshäfen: Exzellenter Service im Tropenparadies</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Die maritime Infrastruktur auf den Malediven ist speziell auf den Tourismus und den Yachtcharter zugeschnitten.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Malé-Atoll</h3>
              <p className="text-gray-700 mb-4">Die meisten Charteryachten haben ihren Heimathafen im Malé-Atoll, oft in der Nähe des internationalen Flughafens. Hier finden Sie moderne Marinas und Anlegestellen, die umfassende Dienstleistungen bieten.</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Auswahl an Yachten</h3>
              <p className="text-gray-700 mb-4">Das Angebot reicht von luxuriösen Segelyachten und geräumigen Katamaranen bis hin zu komfortablen Motoryachten. Die Flotten sind in der Regel sehr gut gewartet und für die Bedingungen des Reviers optimiert.</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Besonderheiten des Service</h3>
              <p className="text-gray-700 mb-4">Die Malediven sind bekannt für ihren erstklassigen Service. Bei einem Yachtcharter bedeutet das oft, dass Sie eine erfahrene Crew an Bord haben, die sich um Navigation, Verpflegung und alle Details kümmert. Bareboat-Charter sind auf den Malediven praktisch nicht verfügbar.</p>
              
              <h4 className="text-xl font-bold text-gray-800 mb-3">Wichtiger Hinweis</h4>
              <p className="text-gray-700 mb-8">Die Komplexität der Navigation zwischen den Riffen, die Notwendigkeit lokaler Kenntnisse und die strengen Vorschriften erfordern die Anwesenheit eines erfahrenen Skippers und oft einer kompletten Crew. Dies garantiert Ihnen jedoch ein Höchstmaß an Sicherheit und Komfort.</p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Beliebte Törnziele: Ein Kaleidoskop tropischer Schönheit</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Ein Yachtcharter auf den Malediven ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Malé-Atoll</h3>
              <p className="text-gray-700 mb-4">Erkunden Sie die belebte Hauptstadt Malé mit ihren Märkten und Moscheen, oder entspannen Sie auf den Resort-Inseln. Die umliegenden Riffe bieten fantastische Schnorchel- und Tauchmöglichkeiten.</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Ari-Atoll</h3>
              <p className="text-gray-700 mb-4">Ein Paradies für Taucher. Besuchen Sie die Insel Dhigurah, bekannt für ihre Walhai-Sichtungen. Die unzähligen Sandbänke und unbewohnten Inseln bieten ideale Orte für private Picknicks und Sonnenbäder.</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Baa-Atoll (UNESCO-Biosphärenreservat)</h3>
              <p className="text-gray-700 mb-4">Ein Muss für Naturliebhaber. Die Hanifaru Bay ist weltberühmt für die saisonale Ansammlung von Mantarochen und Walhaien. Die Riffe des Atolls sind intakt und voller Leben.</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Maafushi</h3>
              <p className="text-gray-700 mb-8">Eine lokale Insel, die einen Einblick in das authentische maledivische Leben abseits der Resorts bietet. Hier können Sie lokale Märkte besuchen und mit Einheimischen in Kontakt treten.</p>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ihr 7-Tage-Traumtörn in den zentralen Malediven-Atollen (ab Malé)</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0 mt-1"></div>
                  <div>
                    <span className="text-gray-700"><strong>Tag 1: Ankunft & Paradiesische Begrüßung</strong><br />
                    Nach dem Transfer zu Ihrer Yacht im Malé-Atoll heißt Sie Ihre Crew herzlich willkommen. Nach dem Check-in und einer Sicherheitseinweisung segeln Sie zu einer nahegelegenen, ruhigen Lagune. Genießen Sie das erste Bad im türkisfarbenen Wasser und lassen Sie den Ankerabend unter dem Sternenhimmel ausklingen.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0 mt-1"></div>
                  <div>
                    <span className="text-gray-700"><strong>Tag 2: Malé-Atoll – Unterwasserwunder</strong><br />
                    Erkunden Sie die faszinierenden Riffe des Malé-Atolls. Schnorcheln oder tauchen Sie an einem der berühmten "Thilas" (Unterwasserberge) oder "Giriss" (kleine Riffe) und lassen Sie sich von der Farbenpracht der Korallen und Fischschwärme verzaubern. Am Abend ankern Sie vor einer Resort-Insel oder einer einsamen Sandbank.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0 mt-1"></div>
                  <div>
                    <span className="text-gray-700"><strong>Tag 3: Kurs auf das Ari-Atoll – Walhai-Begegnung</strong><br />
                    Setzen Sie die Segel in Richtung des Süd-Ari-Atolls. Heute haben Sie die Chance, an der Insel Dhigurah oder einem anderen bekannten Spot Walhaie zu sichten und mit ihnen zu schwimmen – ein unvergessliches Erlebnis.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0 mt-1"></div>
                  <div>
                    <span className="text-gray-700"><strong>Tag 4: Ari-Atoll – Mantarochen und Sandbänke</strong><br />
                    Verbringen Sie den Tag mit der Erkundung des Ari-Atolls. Besuchen Sie eine der vielen unbewohnten Sandbänke für ein privates Picknick oder schnorcheln Sie an einem Manta-Putzerplatz. Genießen Sie die absolute Ruhe und Abgeschiedenheit.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0 mt-1"></div>
                  <div>
                    <span className="text-gray-700"><strong>Tag 5: Baa-Atoll – UNESCO-Biosphärenreservat</strong><br />
                    Segeln Sie weiter zum Baa-Atoll, einem UNESCO-Biosphärenreservat. Wenn es die Saison erlaubt, besuchen Sie die Hanifaru Bay, um Mantarochen und Walhaie in großen Gruppen zu erleben. Alternativ erkunden Sie die intakten Riffe dieses besonderen Atolls.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0 mt-1"></div>
                  <div>
                    <span className="text-gray-700"><strong>Tag 6: Lokale Kultur & Entspannung</strong><br />
                    Besuchen Sie eine lokale Insel wie Maafushi, um einen Einblick in das authentische maledivische Leben zu bekommen. Schlendern Sie über den Markt, kaufen Sie Souvenirs und genießen Sie die Gastfreundschaft. Am Nachmittag entspannen Sie an Bord oder genießen einen letzten Schnorchelgang.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0 mt-1"></div>
                  <div>
                    <span className="text-gray-700"><strong>Tag 7: Rückkehr zum Ausgangspunkt</strong><br />
                    Nach einem letzten Frühstück an Bord segeln Sie zurück zu Ihrer Charterbasis im Malé-Atoll. Mit unvergesslichen Eindrücken und einer Seele voller Ruhe treten Sie die Heimreise an.</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Wetter & Windbedingungen: Segeln im tropischen Klima</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Die Malediven liegen nahe am Äquator und genießen ein tropisches Monsunklima, das ganzjährig warme Temperaturen um 28-30°C bietet. Die Winde werden von zwei Monsunperioden bestimmt:
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Nordost-Monsun (Iruvai) – Trockenzeit (Dezember bis April)</h3>
              <p className="text-gray-700 mb-4">Dies ist die Hauptsaison und die beste Reisezeit für die Malediven. Die Winde wehen aus Nordost mit meist 10-15 Knoten, das Meer ist ruhig, und der Himmel ist klar und sonnig. Die Sicht unter Wasser ist hervorragend.</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Südwest-Monsun (Hulhangu) – Regenzeit (Mai bis November)</h3>
              <p className="text-gray-700 mb-4">In dieser Zeit wehen die Winde aus Südwest, oft mit 15-20 Knoten. Es kann zu vermehrten, aber meist kurzen und intensiven Regenschauern kommen, gefolgt von Sonnenschein. Das Meer kann etwas rauer sein, aber das Segeln ist immer noch angenehm. Die Sicht unter Wasser kann durch Planktonblüten beeinträchtigt sein, was aber wiederum die Chance auf Mantas und Walhaie erhöht.</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Revier-Eignung für Erfahrungsstufen</h3>
              <p className="text-gray-700 mb-8">Die Malediven sind aufgrund der komplexen Riffstrukturen und der Notwendigkeit lokaler Kenntnisse kein klassisches Bareboat-Revier. Crewed-Charter mit erfahrenem Skipper und oft einer kompletten Crew sind hier Standard. Dies macht das Revier jedoch für alle Erfahrungsstufen zugänglich – vom Segelneuling bis zum erfahrenen Skipper, der sich entspannt zurücklehnen möchte.</p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Beste Reisezeit: Wann Ihr Malediven-Traum wahr wird</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Die beste Reisezeit für einen Yachtcharter auf den Malediven ist von <strong>Dezember bis April</strong> (Nordost-Monsun/Trockenzeit). In diesen Monaten sind die Wetterbedingungen ideal mit viel Sonne, moderaten Winden und ruhigem Meer.
              </p>
              <p className="text-gray-700 mb-6">
                Die Übergangsmonate <strong>Mai und November</strong> können ebenfalls sehr attraktiv sein, da die Preise oft niedriger sind und die Bedingungen noch gut sind.
              </p>
              <p className="text-gray-700 mb-8">
                Auch die Regenzeit (Juni bis Oktober) hat ihren Reiz, da die Atolle weniger frequentiert sind und die Natur in voller Pracht steht, auch wenn mit gelegentlichen Schauern zu rechnen ist.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Charter-Standorte</h2>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {regions.map((region, index) => (
                  <Link key={index} to={region.link} className="block">
                    <div className="h-full p-4 rounded-lg border hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{region.name}</h3>
                      <p className="text-gray-600 mb-3">{region.description}</p>
                      <div className="text-sm text-blue-600">
                        {region.cities.join(" • ")}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Fazit: Ein Paradies auf See – Ihr unvergesslicher Yachtcharter auf den Malediven</h2>
              
              <p className="text-lg text-gray-700 mb-4">
                Ein Yachtcharter auf den Malediven ist eine unvergleichliche Erfahrung, die alle Sinne anspricht. Es ist die einzigartige Kombination aus atemberaubender Natur, tiefgründiger Ruhe, abwechslungsreichen Segelbedingungen und einem Höchstmaß an Komfort und Service.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Die Malediven sind ein Revier, das zum Entschleunigen einlädt, zum Eintauchen in eine Welt voller natürlicher Wunder und herzlicher Gastfreundschaft. Die Wahl eines Crewed-Charters ermöglicht es Ihnen, dieses Paradies in vollen Zügen zu genießen, ohne sich um die komplexen nautischen Details kümmern zu müssen.
              </p>
              <p className="text-lg text-gray-700">
                Ihre erfahrene Crew führt Sie zu den schönsten Plätzen, kümmert sich um Ihr Wohl und sorgt dafür, dass Ihr Traumtörn auf den Malediven zu einem unvergesslichen Erlebnis wird.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold mb-4">
              Sind Sie bereit, die Segel zu setzen und Ihr Paradies im Indischen Ozean zu entdecken?
            </h3>
            <p className="mb-6 text-blue-100 text-lg">
              Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter auf den Malediven an! 
              Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Malediven Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Maldives;