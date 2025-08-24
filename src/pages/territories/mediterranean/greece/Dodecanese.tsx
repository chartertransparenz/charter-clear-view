import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import destinationGreece from "@/assets/destination-greece.jpg";
const Dodecanese = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Südostägäis",
    link: "#erreichbarkeit"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "April-November",
    link: "#beste-reisezeit"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Erfahrene Segler",
    link: "#eignung-nach-erfahrungsstufe"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Längere Distanzen",
    link: "#wetter-windbedingungen"
  }];
  const cities = ["Rhodos", "Kos", "Patmos", "Leros", "Kalymnos", "Symi", "Tilos", "Karpathos"];
  const highlights = ["UNESCO-Weltkulturerbe Rhodos", "Klöster und Pilgerorte", "Authentische griechische Kultur", "Längere Segeletappen", "Kristallklares Wasser", "Weniger Tourismus als Kykladen", "Abwechslungsreiche Landschaften"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/3ef8c5ec-ec18-4744-a9ad-6df0fb1aaf83.png" alt="Dodekanes Griechenland" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Dodekanes</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Dodekanes</h1>
            <p className="text-xl max-w-2xl">
              Die zwölf authentischen Inseln
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer/griechenland" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Griechenland
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
                  <Link to="/reviere/mittelmeer/griechenland">Griechenland</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Dodekanes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => 
            <a key={index} href={fact.link} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer group">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:text-blue-700 transition-colors" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </a>)}
        </div>

        {/* Map */}
        <div className="mb-12">
          <TerritoryMap
            region="Dodekanes"
            center={{ lat: 36.6, lng: 28.0 }}
            zoom={8}
            maptype="satellite"
            className="mb-8"
          />
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Dodekanes – Ihr Törn ab Kos oder Rhodos</h2>
            <p className="text-xl text-muted-foreground">
              Die zwölf authentischen Inseln der Südostägäis
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Der Dodekanes ist das Revier für Segler, die griechische Inselwelt in ihrer puren, sonnendurchfluteten Form erleben wollen: kristallklares Wasser, weißgoldene Buchten, jahrtausendealte Kulturstätten – eingerahmt vom beständigen Sommerwind der Ägäis. Zwischen Kos, Rhodos, Symi, Tilos, Nisyros, Chalki sowie den nördlichen Perlen Kalymnos, Leros, Lipsi und Patmos entfaltet sich ein archipelartiges Fahrgebiet, das sowohl sportliche Schläge als auch ruhige Lee-Buchten bereithält.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Im Vergleich zu anderen griechischen Revieren ist der Dodekanes trocken-klar, windstabil und landschaftlich ursprünglicher – weniger Pinienwald als im Ionischen Meer, dafür Felsen, Licht und Sichtweiten bis zum Horizont. Auch nautisch zeigt das Revier Profil: Thermisch gestützte Nordwinde (Meltemi/Ägäis-Brise), Düseneffekte zwischen den Inseln, aber auch außerordentlich geschützte Naturhäfen wie die Bucht von Lakki (Leros). Wer Yachtcharter Dodekanes wählt, entscheidet sich für echtes Cruising – mit genügend Planungsfreiheit, um je nach Wetter den Kurs zwischen Nord- und Südrouten zu variieren.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Ausgangsbasen: In erster Linie Kos – mit der größten Charterauswahl und einer hervorragend organisierten Marina – sowie Rhodos. Ergänzend sind Mykonos/Paros/Syros keine Dodekanes-Basen; im Dodekanes selbst starten daneben gelegentlich Crews ab Leros oder Patmos, doch die Hauptdrehscheiben bleiben Kos und Rhodos.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 id="erreichbarkeit" className="font-semibold mb-3 text-black">Erreichbarkeit</h4>
              <p className="text-black mb-3">So kommen Chartergäste an Bord:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Kos (KGS):</strong> Saisonale Direktflüge aus vielen europäischen Städten; kurze Anfahrt zur Kos Marina. Ideal für Crews, die schnell ins Revier wollen – Yachtübernahme, Proviant und am selben Tag noch der erste Badestopp.</li>
                <li><strong>Rhodos (RHO):</strong> Umfangreiches Flugangebot in der Saison. Transfer zur Rhodes Marina oder zum Mandraki-Hafen in Rhodos-Stadt. Guter Ausgangspunkt für Törns nach Symi, Chalki und ins südliche Revier.</li>
                <li><strong>Transfers & Services:</strong> Auf Wunsch organisieren wir Door-to-Dock-Transfers, Proviantlieferungen an Bord, frühe/late Check-ins nach Verfügbarkeit und eine deutschsprachige Safety-Einweisung.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Marinas & Ausgangshäfen</h4>
              
              <h5 className="font-semibold mt-4 mb-2 text-black">Kos Marina</h5>
              <p className="text-black mb-3">
                Die moderne Kos Marina ist die primäre Charterdrehscheibe im Dodekanes: klare Abläufe, Muring-Plätze, Wasser/Power am Steg, Tankservice, Chandlery, Wäscherei, Sanitäranlagen sowie Supermärkte in Laufweite. Die Wege sind kurz – vom Taxi bis zum Trolley – und die technische Unterstützung (Segel, Rigg, Elektrik) ist eingespielt. Für Crews bedeutet das: Check-in, Riggsichtung, Sicherheitsbriefing – und zügig auf den ersten Kurs.
              </p>
              
              <h5 className="font-semibold mt-4 mb-2 text-black">Rhodos – Rhodes Marina & Mandraki</h5>
              <p className="text-black mb-3">
                Auf Rhodos stehen zwei Optionen im Fokus: die neuere Rhodes Marina mit umfassender Infrastruktur und der traditionsreiche Mandraki-Hafen am nördlichen Stadtkap. Mandraki besticht durch seine Lage und das Flair der Altstadt; in der Hochsaison ist die Verfügbarkeit begrenzt, eine Reservierung empfiehlt sich. Die Rhodes Marina punktet mit modernen Stegen, Services und guter Anbindung.
              </p>
              
              <h5 className="font-semibold mt-4 mb-2 text-black">Weitere Häfen & Liegeplätze</h5>
              <p className="text-black">
                Im Revier finden sich zahlreiche kommunale Häfen und Naturbuchten mit Buganker/Heckleinen oder Moorings: Pothia (Kalymnos), Lakki (Leros), Skala (Patmos), Lipsi, Pali (Nisyros), Livadia (Tilos), Gialos/Panormitis (Symi), Nimborio (Chalki). Viele Orte bieten Wasser/Power am Kai, Mini-Märkte, Bäcker und die Taverne direkt am Wasser – perfektes Cruising ohne Hektik.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele – Inseln, Buchten, nautische Highlights</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Kalymnos – Werkbank der Ägäis</h4>
            <p className="mb-6">
              Pothia, die farbige Inselhauptstadt, ist eine lebendige Hafenwelt mit maritimem Handwerk. In Buchten wie Vathi (Fjordcharakter) liegt man malerisch und gut geschützt. Kulinarisch dominiert Fisch – die Tische an der Kaimauer sind abends schnell besetzt.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Leros – die große, ruhige Bucht</h4>
            <p className="mb-6">
              Die weite Lakki-Bucht ist einer der sichersten Naturhäfen der Ägäis: ideales Revier, wenn die Brise zulegt. Lakki bietet Wasser/Power, Technik, Werft und gute Versorgung. An der Küste locken stille Buchten für einen Daysail mit Badestopp.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Lipsi – still, klar, freundlich</h4>
            <p className="mb-6">
              Lipsi empfängt den Segler mit einem entspannten Ort, sauberem Wasser und ehrlicher Küche. Am Kai gibt es Wasser/Power, die Buchten ringsum sind ideal für ruhige Nächte am Anker.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Patmos – UNESCO & Panoramabuchten</h4>
            <p className="mb-6">
              Skala ist das maritime Zentrum; die Südbuchten wie Grikos/Petra bieten viel Lee bei Nordwind. Der Besuch des Johannesklosters krönt den Landgang – Kultur und Kulisse in perfekter Balance.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Symi – neoklassische Postkarte</h4>
            <div className="mb-6">
              <img 
                src="/symi-harbor.png" 
                alt="Symi Hafen mit pastellfarbenen neoklassischen Häusern" 
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <p className="mb-3">
                Symi im Dodekanes verführt mit pastellfarbenen neoklassischen Häuschen und glasklaren Buchten – ein Traumziel, um festzumachen, erkunden und relaxen.
              </p>
              <p>
                Der Hafen Gialos ist eine steile Theaterkulisse aus pastellfarbenen Häusern. Bei Nordwind empfiehlt sich die große Panormitis-Bucht an der Südseite – ruhiger, mit dem berühmten Kloster direkt am Wasser.
              </p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Nisyros – Vulkan & Fischercharme</h4>
            <p className="mb-6">
              Pali an der Nordostküste ist der sichere Hafen der Insel. Von hier aus ist der Krater mit Mietwagen/Bus schnell erreicht – ein beeindruckendes Kontrastprogramm nach dem Badestopp.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Tilos – leise Insel</h4>
            <p className="mb-6">
              Livadia ist ein klassischer Dodekanes-Hafen: freundlich, zweckmäßig, mit guter Taverna-Dichte. Spaziergänge und Burgruinen sorgen für Abwechslung an Land.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Chalki – klein, fein, farbig</h4>
            <p className="mb-6">
              Nimborio ist Bilderbuchgriechenland mit ruhigen Abenden am Kai. In der Saison können Floating-Docks zusätzliche Liegeplätze bieten.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Kastellorizo & Karpathos/Kasos – für lange Törns</h4>
            <p className="mb-6">
              Wer Zeit und Erfahrung mitbringt, erweitert nach Südosten (Kastellorizo/Megisti) oder Richtung Südwesten (Karpathos/Kasos). Nautisch anspruchsvoller, dafür wiederum grandios in Landschaft und Wasserfarbe.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnvorschlag – eine Woche ab Kos (Nord-Dodekanes, komfortbetont)</h3>
            <p className="mb-4 font-medium">Ziel: Viel Segelzeit in der typischen Ägäis-Brise, gleichzeitig ruhige Nächte in Lee-Buchten und Häfen mit sicherem Ankergrund. Der Plan ist familientauglich, lässt sich aber durch längere Schläge sportlich erweitern.</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1 – Kos → Kalymnos (Pothia/Vathi)</h5>
                <p className="text-sm text-muted-foreground">Ankommen, Check-in, Sicherheitsbriefing, erster kurzer Schlag. Pothia für lebendiges Hafenflair oder Vathi als fjordartige Ruhestatt. Buganker sauber setzen, Heckleinen bereitlegen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2 – Kalymnos → Leros (Lakki/Agia Marina)</h5>
                <p className="text-sm text-muted-foreground">Genusssegeln mit Badepause. Lakki als großräumig geschützter Naturhafen mit guter Infrastruktur; alternativ Agia Marina für Dorfambiente.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3 – Leros → Lipsi (Hafen/Ankerbucht)</h5>
                <p className="text-sm text-muted-foreground">Kurzer Daysail zu türkisfarbenen Buchten. Am Kai Wasser/Power, Ankerplätze rund um die Insel für die Nacht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4 – Lipsi → Patmos (Skala/Grikos)</h5>
                <p className="text-sm text-muted-foreground">Vormittags Kultur oder Strand, nachmittags Segeln. Skala als städtischer Liegeplatz; Grikos/Petra mit viel Lee bei Nordwind – ideal zum Baden und für einen ruhigen Abend an Bord.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5 – Patmos → Arki/Marathi (Moorings/Anker)</h5>
                <p className="text-sm text-muted-foreground">Kurze Etappe in die stille Inselwelt nördlich von Leros. Marathi bietet Moorings und Tavernen direkt am Wasser – ein „Boaters' Sanctuary".</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6 – Arki/Marathi → Leros (Lakki)</h5>
                <p className="text-sm text-muted-foreground">Zurück in die Lakki-Bucht: Proviant auffrischen, Technik sichten, den Nachmittag am Strand oder in einer Nebenbucht verbringen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7 – Leros → Kos</h5>
                <p className="text-sm text-muted-foreground">Letzter Schlag mit Badepause auf dem Weg. Rechtzeitig zum Fuel-Dock, Check-out und entspanntem Farewell-Dinner am Kai.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black mb-3"><strong>Varianten:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Südschleife ab Kos:</strong> Nisyros (Pali) → Tilos (Livadia) → Chalki (Nimborio) → Symi (Panormitis/Gialos) → Rhodos oder Rückkehr nach Kos.</li>
                <li><strong>Start ab Rhodos:</strong> Symi (Panormitis/Gialos) → Chalki → Tilos → Nisyros → optional Kos.</li>
                <li><strong>Katamaran-Option:</strong> Flache Buchten gewinnen; Schwojkreis und umliegende Yachten im Blick behalten.</li>
              </ul>
            </div>

            {/* Ankerbuchten Bild */}
            <div className="mb-8">
              <img 
                src="/ankerbuchten-dodekanes.png" 
                alt="Unzählige Ankerbuchten zwischen Leros, Lipsi und Arki" 
                className="w-full h-64 object-cover rounded-lg mb-3"
              />
              <p className="text-center text-muted-foreground font-medium">
                Unzählige Ankerbuchten zwischen Leros, Lipsi und Arki
              </p>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg mb-8">
              <p className="text-black mb-3"><strong>Seemannschaft – Kurzcheck:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Wetterfenster am Vorabend prüfen; Reffpunkte markieren.</li>
                <li>Ankerdisziplin: Kette großzügig stecken, Halt per Rückwärtsfahrt prüfen, Ankeralarm setzen.</li>
                <li>Hafenmanöver: Buganker sauber fallen lassen, Heckleinen früh bereitlegen; Fender auf Arbeits- und Ruhehöhe.</li>
              </ul>
            </div>

            <h3 id="wetter-windbedingungen" className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen</h3>
            <p className="mb-4">
              Überblick: Im Sommer dominiert der Meltemi – eine trockene, nördliche Ägäis-Brise. Sie baut sich tagsüber auf und flaut abends häufig ab. Im Dodekanes ist er verlässlich, kann in Düsen (z. B. zwischen Paros–Naxos in der Zentralägäis – außerhalb des Dodekanes – oder an markanten Kaps) deutlich zulegen. Gute Törnplanung nutzt Lee-Seiten und große Naturhäfen als sichere „Häfen der Ruhe".
            </p>
            
            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Tagesgang (Sommer)</h4>
              <ul className="space-y-2 text-black">
                <li><strong>Morgen:</strong> Oft ruhige See – ideal zum Verlegen und für Badestopps.</li>
                <li><strong>Mittag/Nachmittag:</strong> Aufbau der Brise aus N bis NW; kurze, steilere Wellenfelder auf offenem Wasser möglich.</li>
                <li><strong>Abend/Nacht:</strong> Abflauen, in Lee-Buchten sehr ruhige Nächte.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Saisonale Differenzierung</h4>
              <ul className="space-y-2 text-black">
                <li><strong>Frühling (April–Mai):</strong> Milder, variabler, mit hervorragender Sicht; ideale Zeit für Einsteiger und Familien.</li>
                <li><strong>Sommer (Juni–September):</strong> Kernzeit des Meltemi – planbar, aber frisch. Reffbereitschaft, Gewichtsverteilung und konservativer Trimm sorgen für Komfort.</li>
                <li><strong>Herbst (Oktober):</strong> Warmes Wasser, stabile Brisen, gelegentliche Gewitterlagen; Wetterfenster beobachten und rechtzeitig abwettern.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Lokale Effekte & Schutzreviere</h4>
              <ul className="space-y-2 text-black">
                <li>Lakki (Leros) und Panormitis (Symi) gelten als sehr geschützte Anker-/Liegeplätze bei Nordwind.</li>
                <li>In tief eingeschnittenen Häfen (z. B. Kalymnos) sind abends Fallböen möglich – Heckleinen straff, Fender auf Höhe.</li>
                <li>Lee-Seiten der Inseln (Süd-/Westbuchten bei Nordwind) bieten ruhiges Wasser und sichere Nächte.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Vergleich zu anderen Revieren</h4>
              <ul className="space-y-2 text-black">
                <li><strong>Ionisches Meer:</strong> Deutlich grüner und windärmer; der Dodekanes ist sportlicher, mit längeren offenen Passagen und klareren, trockeneren Luftmassen.</li>
                <li><strong>Kykladen:</strong> In der Zentralägäis oft noch meltemistärker und exponierter; der Dodekanes bietet mehr All-Weather-Anchorages und Lee-Routen entlang der Inselketten.</li>
                <li><strong>Saronischer Golf:</strong> Nähe zu Athen, kürzere Etappen und mehr Schutz – der Dodekanes ist die steigerungsfähige Alternative für Crews, die „mehr Segeln" möchten.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 id="eignung-nach-erfahrungsstufe" className="font-semibold mb-3 text-black">Eignung nach Erfahrungsstufe</h4>
              <ul className="space-y-2 text-black">
                <li><strong>Einsteiger & Familien:</strong> Optimal in Mai/Juni und September/Oktober mit konservativer Routenwahl (Nord-Dodekanes).</li>
                <li><strong>Genusssegler:</strong> Planbar-kräftige Brise für entspanntes Cruising mit viel Segelzeit; Kulturstopps in Rhodos, Symi, Patmos.</li>
                <li><strong>Ambitionierte Crews:</strong> Längere Schläge und „Trimmarbeit" auf offenem Meer; Erweiterungen Richtung Karpathos/Kasos oder bis Kastellorizo.</li>
              </ul>
            </div>

            <h3 id="beste-reisezeit" className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
            <p className="mb-6">
              Die beste Reisezeit für Yachtcharter Dodekanes liegt in Mai/Juni und September/Oktober: verlässliche Brise, angenehme Temperaturen, freie Liegeplätze. In Juli/August ist Hochsaison – die Winde sind frischer, die Häfen lebhafter. Wer dann segelt, plant konsequent Lee-Routen, läuft Häfen früh an oder wählt Ankerbuchten mit Sandgrund und Landleinen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit</h3>
            <p className="mb-6">
              Yachtcharter im Dodekanes vereint Segelspaß mit Planbarkeit und einer außergewöhnlichen Mischung aus Natur und Kultur. Kos bietet in erster Linie die größte Yachtauswahl und ein reibungsloses Setup, Rhodos die Verbindung zu ikonischen Orten wie Symi und Chalki. Dazu kommen sichere Naturhäfen, klare Lee-Strategien und die berühmte Ägäis-Brise – genau das richtige Spielfeld für Skipper, die Segeln als bewusste, genussvolle Aktivität verstehen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Jetzt Yachtcharter Dodekanes anfragen</h3>
            <p className="mb-6">
              Bereit für Ihren Törn ab Kos oder Rhodos? Nennen Sie uns Crewgröße, Reisetermin und Wunsch-Yachtklasse (Monohull oder Katamaran, Bareboat oder mit Skipper). Wir erstellen ein individuelles Angebot, organisieren Transfer und Proviantservice, reservieren Liegeplätze und liefern Routenempfehlungen passend zu Wind und Crewprofil – inklusive praxiserprobter Anlege- & Ankerei-Tipps für jeden Hafen.
            </p>
            <p className="font-semibold text-lg">
              Jetzt unverbindlich anfragen – und die Leinen im Dodekanes lösen!
            </p>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Inseln & Häfen</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{city}</p>
              </div>)}
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
              Bereit für den Dodekanes?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die authentischen griechischen Inseln mit reicher 
              Geschichte und unberührter Natur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Dodekanes Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Dodecanese;