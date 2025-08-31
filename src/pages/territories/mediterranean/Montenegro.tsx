import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import mediterranean from "@/assets/mediterranean.jpg";
const Montenegro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Adriatisches Meer"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Erfahrene Segler"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Dramatische Fjordlandschaft"
  }];
  const regions = [{
    name: "Montenegro",
    link: "/reviere/mittelmeer/montenegro/montenegro",
    description: "Spektakuläre Bucht von Kotor und adriatische Küste",
    cities: ["Kotor", "Tivat"]
  }];
  const highlights = ["UNESCO-Weltkulturerbe Kotor", "Spektakuläre Fjordlandschaft", "Unberührte Natur", "Authentische Balkanbee", "Kristallklares Adriawasser", "Wenig befahrene Gewässer", "Atemberaubende Bergkulisse"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/c14a7d52-f289-40a7-af4d-7565cc68fcf7.png" alt="Montenegro Mittelmeer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇲🇪 Montenegro</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Montenegro</h1>
            <p className="text-xl max-w-2xl">
              Wilde Schönheit der südlichen Adria
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

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Yachtcharter Montenegro: Segeln im Land der Schwarzen Berge und des tiefblauen Meeres</h2>
            
            <div className="text-lg text-gray-600 space-y-4 mb-6">
              <p>
                Willkommen in einem Segelparadies, das noch immer als Geheimtipp gilt: Montenegro. Eingebettet zwischen Kroatien und Albanien, bietet die montenegrinische Adriaküste eine atemberaubende Kulisse für einen unvergesslichen Yachtcharter. Hier, wo majestätische Berge dramatisch ins kristallklare Wasser abfallen, historische Städte von Jahrtausenden erzählen und moderne Marinas höchsten Komfort bieten, erwartet Sie eine einzigartige Mischung aus mediterraner Ursprünglichkeit und luxuriösem Flair.
              </p>
              <p>
                Stellen Sie sich vor, Sie navigieren Ihre Yacht durch die fjordähnliche Bucht von Kotor, ein UNESCO-Welterbe von unvergleichlicher Schönheit, oder ankern in einer stillen Bucht an der Halbinsel Lustica. Montenegro ist ein Land der Kontraste: Von den mondänen Yachthäfen in Tivat bis zu den authentischen Fischerdörfern entlang der Küste, von den pulsierenden Stränden Budvas bis zu den unberührten Naturparks im Hinterland – jeder Tag auf See verspricht neue Entdeckungen. Ein Yachtcharter in Montenegro ist nicht nur ein Segelurlaub; es ist eine Reise in das Herz einer Region, die ihre Besucher mit ihrer Gastfreundschaft und der Schönheit ihrer Natur verzaubert.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Montenegros Adriaküste: Ein Segelrevier der Superlative</h3>
            <p className="text-lg text-gray-600 mb-4">
              Die Küste Montenegros ist zwar kompakt, aber unglaublich vielfältig. Sie bietet eine einzigartige Kombination aus tief eingeschnittenen Buchten, offenen Meerabschnitten, vorgelagerten Inseln und einer beeindruckenden Bergkulisse, die direkt am Wasser beginnt.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Die Vielfalt der montenegrinischen Küste: Von Fjorden bis zu Sandstränden</h4>
            <ul className="space-y-3 mb-6 text-gray-600">
              <li><strong>Bucht von Kotor (Boka Kotorska):</strong> Oft als südlichster Fjord Europas bezeichnet, ist die Bucht von Kotor das unbestrittene Highlight Montenegros. Sie ist ein tief eingeschnittenes, von hohen Bergen umgebenes Binnenmeer, das sich in mehrere Becken gliedert. Hier liegen historische Städte wie Kotor, Perast und Herceg Novi, die zum UNESCO-Welterbe gehören.</li>
              <li><strong>Halbinsel Lustica:</strong> Diese zerklüftete Halbinsel am Eingang der Bucht von Kotor ist ein Paradies für Naturliebhaber. Sie beherbergt unzählige versteckte Buchten, Olivenhaine und charmante Fischerdörfer.</li>
              <li><strong>Budva Riviera:</strong> Südlich der Bucht von Kotor erstreckt sich die Budva Riviera mit ihren lebhaften Stränden, dem berühmten Sveti Stefan und der historischen Altstadt von Budva.</li>
              <li><strong>Bar & Ulcinj:</strong> Weiter südlich wird die Küste flacher und offener, mit langen Sandstränden und dem größten Hafen Montenegros in Bar. Ulcinj, nahe der albanischen Grenze, bietet ein orientalisches Flair und ist bekannt für seine langen Strände und die einzigartige Insel Ada Bojana.</li>
              <li><strong>Herceg Novi:</strong> Am westlichen Eingang der Bucht von Kotor gelegen, ist Herceg Novi eine Stadt der Treppen und Blumen, die einen atemberaubenden Blick über die Bucht bietet.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Erreichbarkeit – Ihr schneller Weg an Bord</h3>
            <p className="text-lg text-gray-600 mb-4">Montenegro ist dank seiner gut ausgebauten Infrastruktur leicht zu erreichen:</p>
            <ul className="space-y-3 mb-6 text-gray-600">
              <li><strong>Per Flugzeug:</strong> Zwei internationale Flughäfen bedienen das Land:
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>Tivat (TIV):</strong> Ideal gelegen direkt an der Bucht von Kotor, nur wenige Minuten von den großen Marinas entfernt. Er wird von zahlreichen europäischen Städten direkt angeflogen.</li>
                  <li><strong>Podgorica (TGD):</strong> Die Hauptstadt Montenegros ist etwas weiter entfernt, bietet aber ebenfalls gute Flugverbindungen.</li>
                </ul>
              </li>
              <li><strong>Per PKW:</strong> Aus Deutschland, Österreich und der Schweiz ist Montenegro über Kroatien und Slowenien mit dem Auto erreichbar. Dies bietet den Vorteil, mehr Gepäck mitzunehmen und die landschaftlich reizvolle Anreise zu genießen. Die Marinas bieten sichere Parkmöglichkeiten.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Moderne Marinas und eine Flotte für jeden Anspruch</h3>
            <p className="text-lg text-gray-600 mb-4">Montenegro hat in den letzten Jahren massiv in seine maritime Infrastruktur investiert und bietet heute einige der luxuriösesten und modernsten Marinas der Adria.</p>
            <ul className="space-y-3 mb-6 text-gray-600">
              <li><strong>Porto Montenegro (Tivat):</strong> Das Aushängeschild Montenegros. Diese preisgekrönte Superyacht-Marina in Tivat bietet nicht nur Liegeplätze für die größten Yachten der Welt, sondern auch ein exklusives Dorf mit Boutiquen, Restaurants, Hotels und Freizeiteinrichtungen. Ein perfekter Ausgangspunkt für einen luxuriösen Charter.</li>
              <li><strong>Portonovi (Kumbor, Herceg Novi):</strong> Eine weitere erstklassige Marina am Eingang der Bucht von Kotor, die höchsten Standard und umfassenden Service bietet. D-Marin Portonovi ist ein Synonym für Luxus und Komfort.</li>
              <li><strong>Marina Bar:</strong> Der größte Hafen Montenegros und ein wichtiger Knotenpunkt für den Fährverkehr. Die Marina bietet eine gute Infrastruktur und ist ein idealer Ausgangspunkt, um den südlichen Teil der Küste zu erkunden.</li>
              <li><strong>Marina Kotor:</strong> Direkt in der historischen Stadt Kotor gelegen, bietet diese Marina einen einzigartigen Charme und direkten Zugang zur Altstadt.</li>
            </ul>

            <p className="text-lg text-gray-600 mb-4">Unsere Flotte umfasst eine große Auswahl an Charteryachten für jeden Anspruch und jede Crewgröße:</p>
            <ul className="space-y-2 mb-6 text-gray-600">
              <li><strong>Moderne Segelyachten (Monohulls):</strong> Ideal für sportliches Segeln und klassisches Seemannsgefühl.</li>
              <li><strong>Geräumige Katamarane:</strong> Perfekt für Familien und Gruppen, die Wert auf Komfort, Stabilität und viel Platz an Deck legen. Ideal für entspanntes Inselhopping.</li>
              <li><strong>Schnelle Motoryachten:</strong> Für alle, die in kurzer Zeit große Distanzen zurücklegen und mehrere Highlights miteinander verbinden möchten.</li>
            </ul>

            <p className="text-lg text-gray-600 mb-6">
              Sie haben die Wahl: Entscheiden Sie sich für eine Bareboat-Charter, wenn Sie über die nötige Erfahrung und die erforderlichen Lizenzen verfügen, um die Yacht selbst zu führen. Oder genießen Sie einen rundum entspannten Urlaub und buchen Sie einen unserer erfahrenen Skipper, der Sie sicher zu den schönsten Plätzen des Reviers führt und Ihnen wertvolle Geheimtipps verrät.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Beliebte Törnziele und nautische Highlights</h3>
            <p className="text-lg text-gray-600 mb-4">Montenegro bietet eine Fülle von Zielen, die jeden Segler begeistern werden:</p>
            <ul className="space-y-3 mb-6 text-gray-600">
              <li><strong>Bucht von Kotor:</strong>
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>Kotor:</strong> Die von massiven Festungsmauern umgebene Altstadt von Kotor ist ein UNESCO-Welterbe und ein Labyrinth aus engen Gassen, Plätzen und historischen Gebäuden. Ein Aufstieg zur Festung San Giovanni belohnt mit einem atemberaubenden Panoramablick über die Bucht.</li>
                  <li><strong>Perast:</strong> Ein malerisches Barockstädtchen mit zwei ikonischen Inselkirchen: Gospa od Škrpjela (Our Lady of the Rocks), eine künstlich angelegte Insel mit einer Kirche und einem Museum, und Sveti Đorđe (St. George), eine natürliche Insel mit einem Kloster.</li>
                  <li><strong>Herceg Novi:</strong> Am Eingang der Bucht gelegen, ist diese Stadt bekannt für ihre Festungen, Gärten und das bunte Treiben.</li>
                </ul>
              </li>
              <li><strong>Halbinsel Lustica:</strong> Erkunden Sie die unzähligen, oft nur vom Meer aus zugänglichen Buchten wie die Plava Špilja (Blaue Grotte), die zum Schwimmen und Schnorcheln einladen.</li>
              <li><strong>Budva Riviera:</strong>
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>Budva:</strong> Eine lebhafte Küstenstadt mit einer wunderschönen, von Mauern umgebenen Altstadt und langen Sandstränden.</li>
                  <li><strong>Sveti Stefan:</strong> Eine ikonische, befestigte Insel, die heute ein Luxusresort ist. Vom Meer aus bietet sich ein spektakulärer Anblick.</li>
                  <li><strong>Petrovac:</strong> Ein kleiner, charmanter Badeort mit einer Festungsinsel.</li>
                </ul>
              </li>
              <li><strong>Südliche Küste:</strong>
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>Bar:</strong> Der größte Hafen Montenegros, mit einer modernen Marina und einer sehenswerten Altstadt, die etwas im Landesinneren liegt.</li>
                  <li><strong>Ulcinj & Ada Bojana:</strong> Ganz im Süden, nahe der albanischen Grenze, liegt Ulcinj mit seiner historischen Altstadt und langen Sandstränden. Ada Bojana ist eine dreieckige Flussinsel, bekannt für ihre Fischrestaurants auf Stelzen und ihre entspannte Atmosphäre.</li>
                </ul>
              </li>
            </ul>

            <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
              <h3 className="font-bold text-gray-800 mb-4">Wind & Wetter – Segeln an der Adria</h3>
              <p className="text-gray-700 mb-4">
                Das Klima in Montenegro ist typisch mediterran mit heißen, trockenen Sommern und milden, feuchteren Wintern. Die Segelsaison erstreckt sich von April bis in den späten Oktober.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Typische Winde:</h4>
                  <p className="text-gray-700 mb-2">Die lokalen Windsysteme sind für die Törnplanung entscheidend.</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li><strong>Bora (Bura):</strong> Ein starker, kalter Fallwind aus Nordost, der aus den Bergen kommt. Er bringt klaren Himmel und gute Sicht, kann aber sehr plötzlich auftreten und hohe Wellen aufbauen. In der Bucht von Kotor kann die Bora durch die hohen Berge kanalisiert und verstärkt werden.</li>
                    <li><strong>Jugo (Scirocco):</strong> Ein warmer, feuchter Wind aus Südost, der oft Wolken und manchmal Regen mit sich bringt. Er kündigt sich meist langsam an und kann zu drückender Schwüle und unruhiger See führen.</li>
                    <li>Im Sommer dominieren thermische Winde (Land- und Seebrisen), die tagsüber für moderate und zuverlässige Segelbedingungen sorgen und nachts oft einschlafen.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Beste Reisezeit:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Frühling (April - Juni):</strong> Eine wunderbare Zeit zum Segeln. Die Natur blüht, die Temperaturen sind angenehm warm, aber nicht zu heiß. Die Häfen und Buchten sind noch nicht überfüllt. Die Winde können noch etwas kräftiger sein – ideal für ambitionierte Segler.</li>
                    <li><strong>Sommer (Juli - August):</strong> Hochsaison in Montenegro. Es ist heiß, sonnig und die Winde sind meist schwach bis mäßig – perfekt für Badeurlaub und Familien. In dieser Zeit sind die Marinas und beliebten Ankerplätze sehr voll und die Preise am höchsten. Eine frühzeitige Buchung ist unerlässlich.</li>
                    <li><strong>Herbst (September - Oktober):</strong> Für viele Kenner die beste Reisezeit. Das Wasser ist vom Sommer noch aufgeheizt, die großen Touristenströme sind abgezogen und die Preise sinken. Das Wetter ist meist stabil und warm, und die Häfen werden wieder leerer.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
              <h3 className="font-bold text-gray-800 mb-4">Einreiseformalitäten mit der Charteryacht von Kroatien nach Montenegro</h3>
              <p className="text-gray-700 mb-4">
                Für einen Yachtcharter von Kroatien nach Montenegro ist eine sorgfältige Planung der Einreiseformalitäten entscheidend.
              </p>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Ankunft & Port of Entry:</strong> Segler müssen direkt einen Port of Entry (z.B. Herceg Novi, Porto Montenegro, Kotor) anlaufen. Die Q-Flag muss gesetzt sein. Die Crew bleibt an Bord, bis die vollständige Einklarierung abgeschlossen ist.</li>
                <li><strong>2. Erforderliche Dokumente:</strong> Bereithalten müssen Sie: Reisepässe für alle Personen, Bootsregistrierung, Haftpflichtversicherung (mind. 800.000 EUR), Crewliste, Skipperlizenz und Funkzeugnis (SRC/LRC). Kopien beschleunigen den Prozess.</li>
                <li><strong>3. Obligatorische Gebühren:</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li><strong>Vignette (Cruising Permit):</strong> Zwingend erforderlich, wird beim Harbour Master bezahlt (Preis nach Bootslänge/Dauer) und muss sichtbar am Schiff angebracht werden.</li>
                    <li><strong>Touristensteuer:</strong> Pro Person/Zeitraum, innerhalb von 24 Stunden nach Vignettenkauf zu entrichten.</li>
                    <li><strong>Clearance Fee:</strong> Kann je nach Hafen anfallen.</li>
                  </ul>
                </li>
                <li><strong>4. Ablauf:</strong> Zuerst in Kroatien ordnungsgemäß ausklarieren. In Montenegro dann nacheinander Immigration, Zoll und Hafenamt aufsuchen. Erst nach vollständiger Clearance und Bezahlung aller Gebühren darf an Land gegangen werden. Crewwechsel sind meldepflichtig.</li>
                <li><strong>5. Duty-Free Fuel (ab 2025):</strong> Steuerfreier Treibstoff ist wieder verfügbar, erfordert aber einen Mindestaufenthalt von 72 Stunden und das Verlassen der Territorialgewässer nach dem Bunkern.</li>
                <li><strong>6. Praktische Hinweise:</strong> Montenegro nutzt den Euro. Planen Sie etwa einen halben Tag für die Abwicklung ein. Klären Sie mit Ihrem Vercharterer, ob die Yacht für internationale Fahrten freigegeben ist.</li>
              </ol>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Andere Reviere: Grenzübergreifende Abenteuer</h3>
            <p className="text-lg text-gray-600 mb-4">Montenegro ist ein hervorragender Ausgangspunkt für grenzübergreifende Törns:</p>
            <ul className="space-y-3 mb-6 text-gray-600">
              <li><strong>Nördlich nach Kroatien (Süddalmatien):</strong> Die Nähe zu Süddalmatien mit Zielen wie Cavtat und Dubrovnik macht es einfach, einen Teil Ihres Törns in kroatischen Gewässern zu verbringen. Dies erfordert jedoch die oben beschriebenen Aus- und Einklarierungsprozesse. Die Windverhältnisse sind hier ähnlich, aber die Infrastruktur und die Preise können variieren.</li>
              <li><strong>Südlich nach Albanien:</strong> Für abenteuerlustige Segler bietet sich die Möglichkeit, die albanische Küste zu erkunden. Dies ist ein noch weniger erschlossenes Revier mit besonderen Anforderungen an die Navigation und die Einreiseformalitäten, aber auch mit dem Reiz des Unbekannten und der ursprünglichen Schönheit.</li>
            </ul>

            <p className="text-lg text-gray-600 mb-6">
              Die unterschiedlichen Anforderungen und Eignung für verschiedene Erfahrungsstufen sind hier klar: Während die Bucht von Kotor auch für weniger erfahrene Skipper geeignet ist, erfordern offene Seestrecken und grenzüberschreitende Törns mehr Erfahrung und sorgfältige Planung.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Fazit: Montenegro – Ihr nächstes Segelabenteuer</h3>
            <p className="text-lg text-gray-600 mb-4">
              Ein Yachtcharter in Montenegro ist ein Versprechen für einen unvergesslichen Urlaub. Ob Sie die elegante Atmosphäre der Superyacht-Marinas suchen, die historischen Städte der Bucht von Kotor erkunden oder in versteckten Buchten der Halbinsel Lustica entspannen möchten – Montenegro bietet eine unvergleichliche Vielfalt an Segelrevieren. Die Kombination aus vielseitigen Segelbedingungen, traumhaften Landschaften, montenegrinischer Gastfreundschaft, exquisiter Küche und reicher kultureller Vielfalt macht jeden Törn zu einem Fest für die Sinne.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Sind Sie bereit, die Segel zu setzen und das Land der Schwarzen Berge vom Wasser aus zu entdecken?
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Montenegro an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
            </p>
          </div>
        </div>

        {/* Regions */}
        

        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Montenegro?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die wilde Schönheit der montenegrinischen Küste mit 
              ihrer einzigartigen Fjordlandschaft und authentischen Balkanatmosphäre.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Montenegro Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Montenegro;