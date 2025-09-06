import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
// Using uploaded header image
const Slovenia = () => {
  console.log("Slovenia component loading...");
  const m = META.slowenien;
  console.log("Slovenia META loaded:", m);
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };

  const sloveniaStructuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "name": "Yachtcharter Slowenien",
    "description": "Segeln Slowenien: kompakte Adriaküste, venezianisches Flair & kulinarische Vielfalt.",
    "provider": {
      "@type": "Organization",
      "name": "Charter Transparenz"
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Nördliche Adria"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-September"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Kompakte Küstenlinie"
  }];
  const regions = [{
    name: "Slowenien",
    link: "/reviere/mittelmeer/slowenien/slowenien",
    description: "Charmante Adriaküste mit Izola als Segelzentrum",
    cities: ["Izola"]
  }];
  const highlights = ["Kompakte, überschaubare Küste", "Authentische Adriaatmosphäre", "Ausgezeichnete Weinregion", "Kurze Distanzen zu Kroatien/Italien", "Familienfreundliche Reviere", "Hochwertige Marina-Infrastruktur", "Grüne, unberührte Hinterländer"];
  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        keywords={m.keywords}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      />
      <JsonLd json={sloveniaStructuredData} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/98c0e901-0386-4c29-8a01-f29a5deb1055.png" alt="Slowenien Mittelmeer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇸🇮 Slowenien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Slowenien</h1>
            <p className="text-xl max-w-2xl">
              Das grüne Juwel der Adria
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
            region="Slowenien"
            center={{ lat: 45.8108496, lng: 13.6082144 }}
            zoom={8}
            maptype="satellite"
            className="shadow-lg"
          />
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold text-gray-800">Die slowenische Küste im Überblick</h3>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Slowenien: Entdecken Sie das charmante Segelrevier der Adria</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Die Adria lockt Segler und Motorbootfahrer aus aller Welt mit ihren unzähligen Inseln, malerischen Küsten und dem azurblauen Meer. Doch abseits der bekannten Hotspots Kroatiens und Italiens verbirgt sich ein wahres Juwel, das oft unterschätzt wird: die slowenische Adriaküste. Mit einem Yachtcharter in Slowenien öffnen sich Ihnen die Tore zu einem Revier, das auf vergleichsweise kurzer Distanz eine beeindruckende Vielfalt an maritimen Erlebnissen, kulturellen Highlights und unberührter Natur bietet. Kristallklares Wasser, sanfte mediterrane Landschaften, charmante Altstädte und moderne Marinas – Slowenien ist der ideale Ausgangspunkt für Ihren nächsten Törn.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              Unsere Agentur ist Ihr erfahrener Partner, wenn es darum geht, den perfekten Yachtcharter in Slowenien zu finden. Wir kennen die Besonderheiten dieses Reviers, die besten Ankerplätze und die charmantesten Häfen. Tauchen Sie mit uns ein in die Welt des Segelns und Motorbootfahrens an der slowenischen Adria und lassen Sie sich von der Schönheit und Gastfreundschaft dieses Landes verzaubern.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Die slowenische Adria: Ein vielseitiges Segelparadies</h3>
            <p className="text-lg text-gray-600 mb-6">
              Die slowenische Küste mag kurz sein, doch sie ist reich an Charakter und Abwechslung. Von der mondänen Hafenstadt Portorož über das malerische Piran bis hin zum geschäftigen Koper – jeder Ort hat seinen eigenen Reiz und lädt dazu ein, entdeckt zu werden. Dieses Revier ist ideal für all jene, die kurze Distanzen schätzen, aber dennoch nicht auf abwechslungsreiche Törns verzichten möchten. Es bietet sowohl Anfängern als auch erfahrenen Skippern beste Bedingungen, um die Faszination des Yachtcharters in vollen Zügen zu genießen.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Die Küstenabschnitte und ihre Besonderheiten</h3>
            <p className="text-lg text-gray-600 mb-4">
              Die slowenische Adriaküste ist in ihrer Kürze erstaunlich facettenreich. Hier sind die wichtigsten Abschnitte, die Sie bei Ihrem Yachtcharter in Slowenien erkunden können:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="text-gray-600">
                <strong>Die Bucht von Piran:</strong> Das Herzstück der slowenischen Küste ist zweifellos die Bucht von Piran. Sie beherbergt die gleichnamige, venezianisch geprägte Stadt Piran, die oft als die schönste Stadt Sloweniens bezeichnet wird. Mit ihren engen Gassen, dem Tartini-Platz und der imposanten St.-Georgs-Kirche, die majestätisch über der Stadt thront, bietet Piran ein einzigartiges Flair. Die Bucht selbst ist gut geschützt und bietet einige schöne Ankerplätze, von denen aus man das Panorama der Küste genießen kann.
              </li>

              {/* Piran Image */}
              <li className="text-gray-600">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/3cb7d715-410a-45dc-8c36-092ea4b40c5e.png" 
                    alt="Piran, slowenische Küste" 
                    className="w-full h-auto rounded-lg shadow-lg mb-4"
                  />
                  <p className="text-gray-600 text-center italic">
                    Piran, die Perle der Adria: Setzen Sie Kurs auf Sloweniens schönste Küstenstadt und erleben Sie venezianisches Flair direkt von Ihrer Yacht aus.
                  </p>
                </div>
              </li>
              
              <li className="text-gray-600">
                <strong>Die Salinen von Sečovlje:</strong> Südlich von Portorož und Piran erstreckt sich ein einzigartiges Natur- und Kulturdenkmal: die Salinen von Sečovlje. Diese historischen Salzgärten sind nicht nur ein wichtiger Lebensraum für zahlreiche Vogelarten und eine beeindruckende Feuchtlandschaft, sondern auch ein Zeugnis der jahrhundertealten Salzgewinnungstradition. Das Ankern in der Nähe ist eine besondere Erfahrung, da man die Ruhe und die einzigartige Atmosphäre dieses Ortes spürt. Es ist ein Ort, der zum Nachdenken und Entspannen einlädt, weitab vom Trubel der touristischen Zentren.
              </li>
              <li className="text-gray-600">
                <strong>Der Naturpark Strunjan:</strong> Zwischen Piran und Izola erstreckt sich der Naturpark Strunjan, ein weiteres Highlight für Naturliebhaber. Dieser Park ist bekannt für seine beeindruckenden Flysch-Klippen, die bis zu 80 Meter steil ins Meer abfallen – die höchsten an der gesamten Adria. Hier finden sich auch geschützte Lagunen und eine reiche Flora und Fauna. Der Park bietet wunderschöne Wanderwege entlang der Küste und versteckte Buchten, die sich perfekt für einen Badestopp eignen. Das Ankern in den geschützten Buchten von Strunjan, wie der Bucht von Strunjan oder der Mesečev zaliv (Mondbucht), ist ein unvergessliches Erlebnis. Das kristallklare Wasser lädt zum Schnorcheln und Schwimmen ein, während die steilen Klippen eine beeindruckende Kulisse bilden.
              </li>
            </ul>

            <p className="text-lg text-gray-600 mb-8">
              Diese Vielfalt macht Slowenien zu einem idealen Ziel für einen Yachtcharter, der sowohl Entspannung als auch Abenteuer verspricht.
            </p>

            {/* Erreichbarkeit - Nested Card */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Erreichbarkeit: Ihr schneller Weg zum Yachtcharter in Slowenien</h3>
                <p className="text-gray-600 mb-4">
                  Einer der größten Vorteile eines Yachtcharters in Slowenien ist die hervorragende Erreichbarkeit. Im Vergleich zu vielen anderen Mittelmeerzielen ist die Anreise kurz und unkompliziert, was Ihnen mehr Zeit auf dem Wasser und weniger Zeit auf der Straße oder in der Luft beschert.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Per Flugzeug:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="text-gray-600">
                        <strong>Flughafen Ljubljana (LJU):</strong> Der internationale Flughafen Jože Pučnik Ljubljana ist der größte Flughafen Sloweniens und bietet zahlreiche Direktflüge aus ganz Europa. Von Ljubljana aus erreichen Sie die Küste in etwa 1,5 Stunden mit dem Auto oder Taxi.
                      </li>
                      <li className="text-gray-600">
                        <strong>Flughafen Triest (TRS), Italien:</strong> Der Flughafen Triest (Ronchi dei Legionari) liegt nur etwa 45 Minuten Fahrtzeit von der slowenischen Küste entfernt und ist eine ausgezeichnete Alternative, insbesondere für Reisende aus Deutschland und Österreich.
                      </li>
                      <li className="text-gray-600">
                        <strong>Flughafen Pula (PUY), Kroatien:</strong> Obwohl in Kroatien gelegen, ist Pula für Charterer, die in Slowenien starten, eine weitere Option, da es nur etwa 1,5 bis 2 Stunden Fahrt zur slowenischen Küste sind.
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Per Auto:</h4>
                    <p className="text-gray-600">
                      Slowenien ist über ein gut ausgebautes Autobahnnetz hervorragend an Mitteleuropa angebunden. Aus Deutschland, Österreich und der Schweiz erreichen Sie die slowenische Küste bequem und zügig. Die Reisezeit ist oft kürzer als zu weiter südlich gelegenen Zielen an der Adria, was den Yachtcharter in Slowenien besonders attraktiv macht.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Per Bahn:</h4>
                    <p className="text-gray-600">
                      Auch mit der Bahn ist Slowenien gut erreichbar, mit Verbindungen nach Ljubljana und von dort weiter zur Küste.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mt-4">
                  Die kurze Anreisezeit bedeutet, dass Sie Ihren Urlaub von der ersten Minute an genießen können, ohne lange Transferzeiten in Kauf nehmen zu müssen.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Marinas & Ausgangshäfen: Das Herzstück Ihres Yachtcharters</h3>
            <p className="text-lg text-gray-600 mb-4">
              Die slowenische Küste mag kurz sein, doch sie verfügt über eine ausgezeichnete maritime Infrastruktur, die den Bedürfnissen von Yachtcharter-Gästen in jeder Hinsicht gerecht wird. Moderne Marinas bieten nicht nur sichere Liegeplätze, sondern auch umfassende Serviceleistungen, die Ihren Törn so komfortabel wie möglich gestalten. Die Auswahl an Charteryachten ist groß und reicht von agilen Segelyachten über komfortable Katamarane bis hin zu leistungsstarken Motorbooten in verschiedenen Größen und Ausstattungen.
            </p>
            
            <p className="text-lg text-gray-600 mb-4">Die wichtigsten Ausgangshäfen für Ihren Yachtcharter in Slowenien sind:</p>
            
            <ul className="space-y-4 mb-6">
              <li className="text-gray-600">
                <strong>Marina Portorož:</strong> Als größte und modernste Marina Sloweniens ist Portorož der ideale Ausgangspunkt für Ihren Yachtcharter. Sie bietet über 1.000 Liegeplätze und eine umfassende Infrastruktur: moderne Sanitäranlagen, Restaurants, Geschäfte, eine Tankstelle, technische Serviceleistungen und eine Werft. Die Marina ist bekannt für ihren hohen Standard und die Nähe zum mondänen Ferienort Portorož mit seinen Hotels, Casinos und dem lebhaften Nachtleben. Hier finden Sie eine breite Palette an Charteryachten, von kleinen Segelbooten bis hin zu luxuriösen Motoryachten und Katamaranen.
              </li>
              <li className="text-gray-600">
                <strong>Marina Izola:</strong> Die Marina Izola liegt im Herzen der charmanten Fischerstadt Izola und bietet eine authentischere, entspanntere Atmosphäre. Mit rund 700 Liegeplätzen ist sie ebenfalls gut ausgestattet und bietet alle notwendigen Dienstleistungen. Izola selbst besticht durch seinen historischen Stadtkern, die engen Gassen und die ausgezeichneten Fischrestaurants. Die Marina ist gut geschützt und ein beliebter Treffpunkt für Segler. Sie ist ein hervorragender Ausgangspunkt für Törns entlang der slowenischen Küste und darüber hinaus.
              </li>
              <li className="text-gray-600">
                <strong>Koper:</strong> Obwohl Koper in erster Linie ein wichtiger Handelshafen ist, bietet auch er Möglichkeiten für Yachtcharter und ist ein interessanter Ausgangspunkt. Die Stadt selbst ist reich an Geschichte und venezianischer Architektur. Der Hafenbereich für Sportboote ist kleiner, aber gut angebunden an die städtische Infrastruktur. Von Koper aus lassen sich ausgezeichnete Törns planen, die die historische Seite Sloweniens mit dem maritimen Erlebnis verbinden.
              </li>
              <li className="text-gray-600">
                <strong>Piran:</strong> Piran selbst verfügt über einen kleinen Hafen, der hauptsächlich für lokale Fischerboote und kleinere Sportboote genutzt wird. Für größere Charteryachten dient Piran eher als attraktives Törnziel mit Ankerbuchten in der Nähe, da die Liegeplatzkapazitäten für Charterflotten begrenzt sind. Die Stadt ist jedoch ein absolutes Muss auf jeder slowenischen Segelroute.
              </li>
            </ul>

            <p className="text-lg text-gray-600 mb-8">
              Die Verfügbarkeit einer breiten Palette an Yachttypen und -größen in diesen Marinas stellt sicher, dass Sie genau das richtige Schiff für Ihre Crew und Ihre Törnpläne finden. Ob Sie eine schnelle Segelyacht für sportliche Törns suchen, einen geräumigen Katamaran für Familien oder ein komfortables Motorboot für entspanntes Cruisen – die slowenischen Charterflotten lassen keine Wünsche offen.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Beliebte Törnziele & Routenvorschläge</h3>
            <p className="text-lg text-gray-600 mb-6">
              Die slowenische Adria und ihre unmittelbare Umgebung bieten eine Fülle an attraktiven Zielen für Ihren Yachtcharter. Von malerischen Küstenstädten über unberührte Naturparks bis hin zu spannenden Landaktivitäten – hier ist für jeden Geschmack etwas dabei.
            </p>

            {/* Attraktive Orte - Nested Card */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Attraktive Orte und Küstenabschnitte</h4>
                
                <ul className="space-y-4">
                  <li className="text-gray-600">
                    <strong>Portorož:</strong> Die "Rosenhafen"-Stadt ist das mondäne Zentrum der slowenischen Küste. Hier finden Sie luxuriöse Hotels, Casinos, ein pulsierendes Nachtleben und eine lange Promenade. Nautisch gesehen ist Portorož der ideale Ausgangspunkt mit seiner großen Marina. Ankerplätze finden sich in der Bucht vor der Stadt, wobei man auf den Schiffsverkehr achten sollte. Landaktivitäten umfassen Wellness-Angebote, Spaziergänge entlang der Promenade und den Besuch des Sečovlje Salina Nature Park.
                  </li>
                  <li className="text-gray-600">
                    <strong>Piran:</strong> Das venezianische Kleinod Piran ist ein absolutes Highlight. Die Stadt thront auf einer Halbinsel und ist von einer mittelalterlichen Stadtmauer umgeben. Der Tartini-Platz ist das Herzstück der Stadt, umgeben von wunderschönen Gebäuden. Ankern kann man in den Buchten nördlich und südlich der Halbinsel, wobei die Nordseite bei Jugo und die Südseite bei Bora Schutz bietet. Landaktivitäten: Erkunden der Altstadt, Aufstieg zum Glockenturm der St.-Georgs-Kirche für eine atemberaubende Aussicht, Besuch des Meereskundemuseums, Genuss von frischem Fisch in den lokalen Restaurants.
                  </li>
                  <li className="text-gray-600">
                    <strong>Izola:</strong> Eine charmante Fischerstadt mit einer entspannten Atmosphäre und einem schönen historischen Zentrum. Izola ist bekannt für seine ausgezeichneten Fischrestaurants und Weinstuben. Die Marina Izola ist gut geschützt und bietet alle Annehmlichkeiten. Ankerplätze finden sich in der Bucht vor Izola, geschützt durch die Mole. Landaktivitäten: Spaziergänge durch die Altstadt, Besuch des Fischmarktes, Radtouren entlang der Küste, Verkostung lokaler Spezialitäten.
                  </li>
                  <li className="text-gray-600">
                    <strong>Koper:</strong> Die größte Küstenstadt Sloweniens und ein wichtiger Handelshafen. Koper bietet eine reiche Geschichte, die sich in seiner venezianischen Architektur widerspiegelt. Der Prätorenpalast und die Kathedrale Mariä Himmelfahrt sind beeindruckende Bauwerke. Obwohl der Hafen eher industriell geprägt ist, gibt es einen Sportboothafen. Ankern ist in der Bucht von Koper möglich, jedoch ist die Stadt eher ein Ziel für einen Landgang als für einen längeren Ankerstopp. Landaktivitäten: Stadtrundgang, Besuch des Regionalmuseums, Shopping, Ausflüge ins Hinterland.
                  </li>
                  <li className="text-gray-600">
                    <strong>Naturpark Strunjan:</strong> Ein Paradies für Naturliebhaber. Die beeindruckenden Flysch-Klippen, die Salinen und die geschützten Buchten machen den Park zu einem Muss. Die Mondbucht (Mesečev zaliv) ist ein besonders schöner Ankerplatz mit kristallklarem Wasser und einer ruhigen Atmosphäre. Landaktivitäten: Wandern entlang der Klippenwege, Vogelbeobachtung in den Salinen, Schwimmen und Schnorcheln in den abgelegenen Buchten.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h4 className="text-xl font-bold text-gray-800 mb-4">Routenvorschläge für Ihren Yachtcharter in Slowenien</h4>
            <p className="text-lg text-gray-600 mb-6">
              Um Ihnen die Planung Ihres Törns zu erleichtern, haben wir drei abwechslungsreiche Routenvorschläge für einen 7-tägigen Yachtcharter ab Slowenien zusammengestellt. Diese Routen berücksichtigen unterschiedliche Interessen und Erfahrungsstufen.
            </p>

            <div className="space-y-8">
              <div>
                <h5 className="text-lg font-bold text-gray-800 mb-4">Route A: Istrien gemütlich – eine Woche Entschleunigung</h5>
                <p className="text-gray-600 mb-4">
                  Diese Route ist ideal für alle, die eine entspannte Woche auf dem Wasser verbringen möchten, ohne lange Seestrecken zurückzulegen. Sie kombiniert die Highlights der slowenischen Küste mit einem Abstecher ins nahegelegene kroatische Istrien.
                </p>
                
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 1: Start in Portorož</h5>
                    <p className="text-sm text-muted-foreground">Einweisung in die Yacht und erste kurze Etappe nach Piran. Ein abendlicher Bummel durch die venezianisch geprägte Altstadt stimmt auf die Reise ein.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 2: Von Piran nach Umag</h5>
                    <p className="text-sm text-muted-foreground">Von Piran geht es südwärts entlang der slowenischen Küste in Richtung Umag, der ersten kroatischen Stadt hinter der Grenze. Der Hafen ist modern ausgestattet, die Altstadt lädt zu einem Spaziergang ein.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 3: Weiterfahrt nach Novigrad</h5>
                    <p className="text-sm text-muted-foreground">Der kleine Fischerhafen vermittelt authentisches kroatisches Flair. Hier lohnt ein Besuch der Restaurants am Kai, die frischen Fisch servieren.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 4: Überfahrt nach Poreč</h5>
                    <p className="text-sm text-muted-foreground">Eine lebendige Stadt mit römischer Geschichte und der berühmten Euphrasius-Basilika.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 5: Kurs auf Rovinj</h5>
                    <p className="text-sm text-muted-foreground">Eine der malerischsten Städte Istriens. Die farbenfrohen Häuser der Altstadt erheben sich malerisch auf einer Halbinsel.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 6: Rücktörn Richtung Norden</h5>
                    <p className="text-sm text-muted-foreground">Mit Stopp in Vrsar oder im Limski-Kanal, der sich tief ins Land einschneidet und für seine Muscheln bekannt ist.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 7: Rückkehr nach Portorož</h5>
                    <p className="text-sm text-muted-foreground">Übergabe der Yacht und Ausklang an Bord oder in einem der Restaurants im Hafen.</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-bold text-gray-800 mb-4">Route B: Venedig & Lagunen (Anspruchsvoller, Fokus Italien)</h5>
                <p className="text-gray-600 mb-4">
                  Dieser Törn ist für erfahrene Segler gedacht, die das Abenteuer suchen und die einzigartige Kultur Venedigs vom Wasser aus erleben möchten. Er erfordert gute Navigationskenntnisse und die Einhaltung der italienischen Vorschriften.
                </p>
                
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 1: Abfahrt nach Grado</h5>
                    <p className="text-sm text-muted-foreground">Abfahrt in Izola oder Portorož, Segeln bis nach Grado, einem charmanten Badeort an der italienischen Küste.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 2: Von Grado nach Lignano Sabbiadoro</h5>
                    <p className="text-sm text-muted-foreground">Das mit langen Stränden und lebendigen Promenaden lockt.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 3: Überfahrt nach Venedig</h5>
                    <p className="text-sm text-muted-foreground">Das Einlaufen in die Lagune zählt zu den unvergesslichsten Erlebnissen eines Segeltörns.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 4-5: Aufenthalt in der Lagune von Venedig</h5>
                    <p className="text-sm text-muted-foreground">Ein Besuch des Markusplatzes ist ebenso ein Muss wie eine Fahrt durch die Kanäle. Wer abseits des Trubels sucht, steuert die Inseln Murano, Burano und Torcello an.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 6: Rückfahrt über die Lagune</h5>
                    <p className="text-sm text-muted-foreground">Zwischenstopp in Caorle oder Bibione, wo lange Sandstrände und kleine Altstädte für Abwechslung sorgen.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 7-8: Rücktörn nach Slowenien</h5>
                    <p className="text-sm text-muted-foreground">Je nach Zeitplan mit Zwischenstopp in Triest.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 9-10: Rückkehr nach Izola oder Portorož</h5>
                    <p className="text-sm text-muted-foreground">Entspannter Ausklang.</p>
                  </div>
                </div>
              </div>

              {/* Venice Image */}
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/07a02e7c-7650-42a9-952e-86b5cfe52466.png" 
                  alt="Venice Canal Grande" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-600 text-center italic">
                  Ein unvergesslicher Anblick. Von Slowenien aus ist es nur eine Tagesetappe bis zum Canal Grande.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-bold text-gray-800 mb-4">Route C: Dreiländer-Törn (Slowenien, Italien, Kroatien)</h5>
                <p className="text-gray-600 mb-4">
                  Diese Route bietet eine einzigartige Kombination aus Kultur, Natur und maritimen Erlebnissen in drei verschiedenen Ländern. Sie ist ideal für Abenteurer, die das Beste aus jedem Land herausholen möchten.
                </p>
                
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 1: Start in Koper</h5>
                    <p className="text-sm text-muted-foreground">Kurze Etappe nach Piran, wo die Crew den ersten Abend in historischer Kulisse verbringt.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 2: Von Piran nach Triest</h5>
                    <p className="text-sm text-muted-foreground">Die italienische Hafenstadt bietet elegante Kaffeehäuser und eine lange Seefahrertradition.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 3: Weiterfahrt nach Muggia oder Monfalcone</h5>
                    <p className="text-sm text-muted-foreground">Kleine italienische Häfen mit mediterranem Ambiente.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 4: Kurs zurück nach Süden und Überfahrt nach Umag</h5>
                    <p className="text-sm text-muted-foreground">In Kroatien.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 5: Von Umag nach Novigrad</h5>
                    <p className="text-sm text-muted-foreground">Ein kurzer Schlag, ideal für entspanntes Segeln und ein ausgedehntes Bad in einer Bucht.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 6: Rückfahrt über Izola</h5>
                    <p className="text-sm text-muted-foreground">Wo sich die Crew mit frischem Fisch eindecken und den Tag bei einem Glas Malvazija ausklingen lassen kann.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Tag 7: Rückkehr nach Koper</h5>
                    <p className="text-sm text-muted-foreground">Übergabe der Yacht und Abschlussabend in einem der Restaurants am Altstadthafen.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8 mt-6">
              Diese drei Routenvorschläge zeigen, wie abwechslungsreich ein Yachtcharter in Slowenien sein kann – von gemütlichen Törns entlang der istrischen Küste über kulturelle Höhepunkte in Venedig bis hin zu internationalen Erlebnissen im Dreiländereck.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Wetter & Windbedingungen: Segeln in der slowenischen Adria</h3>
            <p className="text-lg text-gray-600 mb-4">
              Das Klima an der slowenischen Adria ist typisch mediterran mit heißen, trockenen Sommern und milden, feuchten Wintern. Die Windverhältnisse sind für Segler interessant und abwechslungsreich.
            </p>
            
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3">Die wichtigsten Winde:</h4>
              <ul className="space-y-3">
                <li className="text-gray-600">
                  <strong>Maestral (NW):</strong> Der vorherrschende Sommerwind. Er setzt meist am späten Vormittag ein, erreicht am Nachmittag seine größte Stärke (oft 3-4 Bft, selten über 5 Bft) und flaut zum Abend hin ab. Der Maestral sorgt für angenehme Temperaturen und ideale Segelbedingungen. Er ist ein thermischer Wind, der durch die Erwärmung des Landes entsteht.
                </li>
                <li className="text-gray-600">
                  <strong>Bora (NE):</strong> Ein kalter, böiger Fallwind, der aus dem Landesinneren über die Berge zur Küste weht. Die Bora kann sehr stark werden (oft 6-8 Bft, in Böen auch mehr) und ist besonders in den Wintermonaten und im Frühjahr präsent. Im Sommer tritt sie seltener auf und ist meist kurzlebig, kann aber dennoch für Überraschungen sorgen. Sie bringt meist klares Wetter und gute Sicht. Bei Bora ist besondere Vorsicht geboten, und es ist ratsam, geschützte Häfen oder Buchten aufzusuchen.
                </li>
                <li className="text-gray-600">
                  <strong>Jugo/Scirocco (SE):</strong> Ein warmer, feuchter Südostwind, der oft mehrere Tage anhält und meist schlechtes Wetter und Regen mit sich bringt. Er kann das Meer stark aufwühlen und hohe Wellen verursachen. Der Jugo ist im Herbst und Frühjahr häufiger anzutreffen.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3">Saisonale Besonderheiten:</h4>
              <ul className="space-y-3">
                <li className="text-gray-600">
                  <strong>Frühling (April-Mai):</strong> Angenehme Temperaturen, die Natur erwacht. Die Winde können noch unbeständiger sein, mit einer höheren Wahrscheinlichkeit für Bora oder Jugo. Das Revier ist noch nicht überlaufen. Ideal für erfahrene Segler, die ruhige Bedingungen und das Erwachen der Natur genießen möchten.
                </li>
                <li className="text-gray-600">
                  <strong>Sommer (Juni-August):</strong> Die Hauptsaison mit stabilen Wetterbedingungen und dem Maestral als dominierendem Wind. Die Temperaturen sind hoch, das Wasser ist warm und ideal zum Schwimmen. Die Häfen und Orte sind belebter. Perfekt für Familien und Crews, die Sonne, Baden und lebhaftes Küstenleben suchen.
                </li>
                <li className="text-gray-600">
                  <strong>Herbst (September-Oktober):</strong> Das Wasser ist noch warm, die Temperaturen sind milder als im Hochsommer. Die touristische Hochsaison neigt sich dem Ende zu, was zu weniger überfüllten Häfen führt. Die Winde können wieder unbeständiger werden, mit einer erhöhten Chance auf Jugo oder Bora. Eine ausgezeichnete Zeit für Segler, die die Ruhe und die Schönheit der Natur schätzen und auch anspruchsvollere Segelbedingungen nicht scheuen.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3">Revier-Eignung für verschiedene Erfahrungsstufen:</h4>
              <p className="text-gray-600 mb-3">Die slowenische Adria ist ein Revier, das sowohl für Anfänger als auch für erfahrene Segler geeignet ist.</p>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  <strong>Anfänger und Familiencrews:</strong> Die kurzen Distanzen zwischen den Häfen und die vielen geschützten Buchten machen das Revier ideal für Einsteiger. Im Sommer sind die Bedingungen meist stabil und berechenbar.
                </li>
                <li className="text-gray-600">
                  <strong>Erfahrene Segler:</strong> Für erfahrene Skipper bieten die wechselnden Winde außerhalb der Hochsaison, insbesondere im Frühjahr und Herbst, spannende Herausforderungen. Die Möglichkeit, grenzüberschreitende Törns nach Kroatien oder Italien zu unternehmen, erhöht den Reiz des Reviers zusätzlich.
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Beste Reisezeit: Wann ist Ihr Yachtcharter in Slowenien am schönsten?</h3>
            <p className="text-lg text-gray-600 mb-4">
              Die ideale Reisezeit für Ihren Yachtcharter in Slowenien hängt von Ihren persönlichen Vorlieben ab:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="text-gray-600">
                <strong>Juni und September:</strong> Diese Monate gelten als die besten Reisezeiten für einen Yachtcharter. Die Temperaturen sind sehr angenehm, das Wasser ist warm genug zum Baden, und die touristischen Hotspots sind weniger überlaufen als im Hochsommer. Die Windbedingungen sind meist stabil und ideal zum Segeln.
              </li>
              <li className="text-gray-600">
                <strong>Juli und August:</strong> Dies ist die Hochsaison. Das Wetter ist garantiert sonnig und heiß, und das Wasser erreicht seine höchsten Temperaturen. Allerdings sind die Häfen und Strände dann am vollsten, und die Preise für Liegeplätze können höher sein. Wer das pulsierende Leben und die garantierte Sonne sucht, ist hier richtig.
              </li>
              <li className="text-gray-600">
                <strong>April, Mai und Oktober:</strong> Diese Monate sind ideal für Segler, die mildere Temperaturen, weniger Touristen und möglicherweise anspruchsvollere Segelbedingungen bevorzugen. Die Natur ist im Frühling besonders schön, und im Herbst locken die warmen Farben und die Ruhe.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fazit: Ihr unvergesslicher Yachtcharter in Slowenien</h3>
            <p className="text-lg text-gray-600 mb-4">
              Ein Yachtcharter in Slowenien ist weit mehr als nur ein Segeltörn – es ist eine Einladung, ein facettenreiches und oft unterschätztes Segelrevier zu entdecken, das mit seiner einzigartigen Mischung aus natürlicher Schönheit, reicher Geschichte und herzlicher Gastfreundschaft begeistert.
            </p>
            
            <div className="mb-6">
              <p className="text-lg text-gray-600 mb-3">Die slowenische Adriaküste bietet Ihnen:</p>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  <strong>Abwechslungsreiche Segelbedingungen:</strong> Von entspanntem Cruisen im Maestral bis hin zu anspruchsvolleren Passagen bei wechselnden Winden – für jeden Segler ist etwas dabei.
                </li>
                <li className="text-gray-600">
                  <strong>Kurze Distanzen:</strong> Die geringe Küstenlänge ermöglicht es Ihnen, in kurzer Zeit viele verschiedene Orte zu besuchen und die Vielfalt des Reviers voll auszukosten, ohne lange Überfahrten in Kauf nehmen zu müssen.
                </li>
                <li className="text-gray-600">
                  <strong>Mediterranes Flair:</strong> Tauchen Sie ein in die entspannte Lebensart der Adria, genießen Sie die Sonne, das kristallklare Wasser und die malerischen Küstenorte.
                </li>
                <li className="text-gray-600">
                  <strong>Eine besondere Mischung aus Kultur, Natur und Kulinarik:</strong> Entdecken Sie venezianisch geprägte Altstädte, unberührte Naturparks und eine hervorragende Küche, die mediterrane Aromen mit alpinen Einflüssen verbindet. Probieren Sie frische Meeresfrüchte, istrische Spezialitäten und exzellente slowenische Weine.
                </li>
                <li className="text-gray-600">
                  <strong>Hervorragende Infrastruktur:</strong> Moderne Marinas und eine große Auswahl an top-gepflegten Charteryachten sorgen für einen komfortablen und reibungslosen Ablauf Ihres Törns.
                </li>
                <li className="text-gray-600">
                  <strong>Optimale Erreichbarkeit:</strong> Die kurze und unkomplizierte Anreise macht Slowenien zu einem idealen Ziel für einen spontanen Wochenendtrip oder einen ausgedehnten Urlaub.
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              Lassen Sie sich von der Schönheit und Vielfalt der slowenischen Adria verzaubern. Ein Yachtcharter hier verspricht unvergessliche Momente auf dem Wasser und an Land, fernab des Massentourismus, aber nah an authentischen Erlebnissen.
            </p>

            <h4 className="text-xl font-bold text-gray-800 mb-4">Leinen los für Ihr Abenteuer!</h4>
            <p className="text-lg text-gray-600">
              Sind Sie bereit, die Anker zu lichten und die slowenische Adriaküste auf eigene Faust zu erkunden? Unser Team berät Sie gerne bei der Auswahl der passenden Yacht, der idealen Route und beantwortet all Ihre Fragen rund um Ihren Traumtörn. Senden Sie uns eine Anfrage über unser Kontaktformular, rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns darauf, Sie an Bord begrüßen zu dürfen!
            </p>
          </div>
        </div>

        {/* Regions */}
        

        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Slowenien?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das grüne Juwel der Adria mit seiner authentischen 
              Atmosphäre und perfekten Lage für Adriaerkundungen.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Slowenien Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Slovenia;