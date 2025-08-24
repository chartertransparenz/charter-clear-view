import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import TerritoryMap from "@/components/TerritoryMap";

const AthenSaronischerGolf = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Saronischer Golf"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "März-November"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Einsteiger & Familien"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Nähe zu Athen"
  }];

  const cities = ["Athen", "Aegina", "Poros", "Hydra", "Spetses"];
  const highlights = [
    "Kurze Anreise von Athen",
    "Geschützte Gewässer",
    "Historische Inseln",
    "Milde Winde",
    "Traditionelle Architektur",
    "Autofreie Inseln",
    "Kurze Distanzen",
    "Ganzjährig segelbar"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/f5227d64-8443-47fd-be3d-af465828b4a5.png" alt="Athen Saronischer Golf - Segelyacht vor griechischer Inselkulisse" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Athen & Saronischer Golf</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Athen & Saronischer Golf</h1>
            <p className="text-xl max-w-2xl">
              Segelparadies vor den Toren Athens
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
                <BreadcrumbPage>Athen & Saronischer Golf</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => {
            const getAnchorLink = (label) => {
              switch(label) {
                case "Lage": return "#erreichbarkeit";
                case "Beste Zeit": return "#beste-reisezeit";
                case "Geeignet für": return "#eignung-erfahrungsstufe";
                case "Besonderheit": return "#wetter-windbedingungen";
                default: return "#";
              }
            };
            
            return (
              <a key={index} href={getAnchorLink(fact.label)} className="block bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </a>
            );
          })}
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Athen / Saronischer Golf – Ihr Törn ab Alimos, Zea, Flisvos</h2>
            <p className="text-xl text-muted-foreground">
              Ihr Törn ab Athen in den Saronischen Golf
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Der Saronische Golf ist die vielleicht vielseitigste Spielwiese für Yachtcharter in Griechenland: kurze Etappen, hoher Wetterschutz, charismatische Inseln und antike Stätten, die per Dinghy- oder Taxifahrt erreichbar sind. Zwischen Athen und der Ostküste des Peloponnes warten Aegina, Angistri, Poros, Hydra, Spetses, Methana, Ermioni und Epidavros – ein Revier, das Einsteiger, Familien und Genusssegler begeistert, aber auch ambitionierten Crews solide Segeltage bietet.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Im Unterschied zu den Kykladen wächst die Tagesbrise hier meist moderater an; die Inseln und die Attika-Küste schaffen Lee-Routen mit ruhiger See. Gleichzeitig sorgen Düseneffekte in Engstellen, Fallböen an steilen Küsten und gelegentliche Scirocco-Lagen für genügend nautische Substanz. Wer Yachtcharter Athen wählt, genießt die perfekte Kombination: große Charterflotten, Top-Infrastruktur und eine Route, die sich tagesaktuell an Wind, Crewprofil und Lust auf Landgänge anpassen lässt.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Erreichbarkeit</h4>
              <p className="text-black mb-3">So kommen Chartergäste stressfrei an Bord:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Athen (ATH):</strong> Zahlreiche internationale Verbindungen – schnelle Transfers per Taxi/Minivan zur Basis</li>
                <li><strong>Kurze Wege zur Marina:</strong> Von ATH zur Alimos Marina (Kalamaki) benötigen Sie je nach Verkehr rund 45–60 Minuten; Zea Marina (Piräus) und Flisvos (Palaio Faliro) liegen ebenfalls an der Athenischen Riviera</li>
                <li><strong>Proviant & Service:</strong> Große Supermärkte, Chandlers, Bäckereien und Lieferdienste nahe der Basen; auf Wunsch Door to Dock Proviant und koordinierte Check in Zeiten</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Marinas & Ausgangshäfen</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-black mb-2">Alimos Marina (Kalamaki) – Hauptausgangsbasis</h5>
                  <p className="text-black">Die Alimos Marina ist die größte Marina Griechenlands und zentrale Charterdrehscheibe von Athen: Muring-Plätze, Wasser/Power am Steg, Tankservice, Technikbetriebe (Rigg/Elektrik/Motor), Chandlery, Sanitär, Wäscherei und kurze Wege zur Proviantierung. Reibungslose Abläufe beim Check in, Riggsichtung und Sicherheitsbriefing sind hier Standard – ideal, um noch am Ankunftstag die Leinen loszuwerfen.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-black mb-2">Zea Marina (Piräus)</h5>
                  <p className="text-black">Renoviert und umfangreich ausgestattet – Wasser/Power, Werft/Servicekette, Shops und Gastronomie an der Promenade. Auch für größere Yachten ausgelegt, gleichzeitig beliebt bei Chartercrews, die den urbanen Anschluss schätzen und schnell Richtung Aegina/Poros aufbrechen möchten.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-black mb-2">Flisvos Marina (Palaio Faliro)</h5>
                  <p className="text-black">Die Flisvos Marina ist die Premium Adresse der Athenischen Riviera – Superyacht tauglich, mit elegantem Umfeld, Gastronomie und Einkaufsmöglichkeiten am Steg. Einige Charterflotten operieren hier oder in unmittelbarer Nähe; wer Wert auf kurzen Transfer und gehobenes Umfeld legt, ist bestens aufgehoben.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-black mb-2">Weitere Startoptionen</h5>
                  <p className="text-black">Kleinere Marinas/Häfen rund um Athen (z. B. Glyfada/Agios Kosmas, Kallithea) können je nach Anbieter als Alternativ Base dienen. Bitte Verfügbarkeit frühzeitig klären – die größte Auswahl an Yachten bleibt Alimos.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele – Inseln, Buchten, nautische Highlights</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Aegina & Angistri – der sanfte Einstieg</h4>
            <p className="mb-6">
              Aegina lockt mit dem Tempel der Aphaia, Pistazienmärkten und Häfen wie Aegina Stadt oder Perdika. Im Inselschatten finden sich Sandböden mit gutem Ankerhalt; die Buchten an der Südwestküste eignen sich ideal für die erste Nacht. Angistri gegenüber bietet türkisfarbene Buchten und kurze Dinghy Wege zum Strand – perfekt für Familien.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Poros – Kanal, Russian Bay & Lemonenwald</h4>
            <p className="mb-6">
              Der Poros Kanal ist ein maritimes Postkartenmotiv: Querpülende Brisen, Fährverkehr und enger Raum verlangen aufmerksames Manövrieren – dafür belohnen Stadtkai und die nahe Russian Bay mit Sandgrund und klarstem Wasser. An Land lockt der Lemonenwald; am Abend liegt man vor Tavernenfassaden, die sich im Hafenwasser spiegeln.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Hydra – autofreies Hafenjuwel</h4>
            <p className="mb-6">
              Hydra Stadt ist autofrei und eine Kulisse aus steilen, steingepflasterten Gassen. Das Hafenbecken ist klein und schnell gefüllt; Buganker und Heckleinen müssen sitzen, Cross Anchoring vermeiden. Als Plan B bietet sich die Mandraki Bucht östlich an – ruhiger, mit Wasseraktivitäten und kurzer Wassertaxi Distanz zur Stadt.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Spetses – Dapia & Baltiza</h4>
            <p className="mb-6">
              Spetses verbindet mondänes Flair mit seglerischer Substanz. Für Yachten empfiehlt sich oft das Baltiza/Alter Hafen im Süden der Stadt; Dapia ist lebhaft und teils exponiert. Lange Promenaden, gepflegte Villen – und abends ein stimmungsvoller Blick über die Bucht.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Methana & Epidavros – Vulkan & Theater</h4>
            <p className="mb-6">
              Die Halbinsel Methana punktet mit heißen Quellen und zwei Häfen (alt/neu). Von Palaia Epidavros erreichen Sie das Kleine Theater und, als Tagesausflug, das berühmte große Theater von Epidauros. In der Bucht vor Palaia Epidavros locken Schnorchelspots (u. a. versunkene Ruinen in Ufernähe).
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Ermioni, Porto Heli & Dokos – ruhige Liegeplätze</h4>
            <p className="mb-6">
              Ermioni liegt strategisch günstig zwischen Hydra und Porto Heli (geschütztes Binnenbecken). Dokos, die unbewohnte Nachbarin von Hydra, bietet klassischen Ankergrund für sternklare Nächte – Landleinen empfohlen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnvorschlag – eine Woche ab Alimos (familien- & genussorientiert)</h3>
            <p className="mb-4 font-medium">Ziel: Viel Badezeit, sichere Lee Liegeplätze, kurze Verlegeetappen – und dennoch ausreichend Segelstunden in der Tagesbrise.</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1 – Athen/Alimos → Aegina (Perdika oder Aegina Stadt)</h5>
                <p className="text-sm text-muted-foreground">Ankommen, Check in, Sicherheitsbriefing. Kurzer Schlag ins Inselschutz Revier; Anker auf Sand, Landleinen nach Bedarf. Abendspaziergang und erste Pistazien Kostprobe.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2 – Aegina → Poros (Russian Bay/Stadtkai)</h5>
                <p className="text-sm text-muted-foreground">Badepause in der Russian Bay, danach Stadtkai Poros. Beim Durchfahren des Kanals Manöver vorbereiten, Fährverkehr beachten. Sundowner mit Blick auf die Uhrturm Silhouette.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3 – Poros → Hydra (Hafen oder Mandraki)</h5>
                <p className="text-sm text-muted-foreground">Frühes Einlaufen erhöht die Liegeplatz Chance. Alternativ Ankern in Mandraki und per Wassertaxi in die Stadt. Buganker sauber setzen, Heckleinen zügig fahren.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4 – Hydra → Spetses (Baltiza/Alter Hafen)</h5>
                <p className="text-sm text-muted-foreground">Genusssegeln mit Kulturstopp an Land. Im Baltiza Becken liegt man windarm; Dinghy parken, Altstadt bummeln.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5 – Spetses → Ermioni oder Porto Heli</h5>
                <p className="text-sm text-muted-foreground">Kurze Verlegung zu gut geschützten Liegeplätzen. Ermioni bietet Promenade & Tavernen, Porto Heli viel Raum und ruhiges Wasser – ideal für Wassersport.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6 – Porto Heli/Ermioni → Palaia Epidavros (über Dokos optional)</h5>
                <p className="text-sm text-muted-foreground">Wer mag, setzt einen Zwischenstopp auf Dokos zum Baden. Abends in Palaia Epidavros – Besuch des Kleinen Theaters und Spaziergang durch Orangenhaine.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7 – Palaia Epidavros → Athen/Alimos</h5>
                <p className="text-sm text-muted-foreground">Rückschlag entlang der Küste. Rechtzeitig zum Fuel Dock, Check out – und der nächste Saronik Plan reift bereits.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Varianten</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Argolischer Golf mit Nafplio (historische Altstadt, Festung Palamidi) bei stabilem Wetterfenster</li>
                <li>Kurzrunden Aegina–Angistri–Poros für Crews mit Fokus auf Baden und Häfen</li>
                <li>Katamaran Charter: Flache Buchten gewinnen; Schwojkreis und Nachbaryachten beachten</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Seemannschaft – Kurzcheck</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Wetterfenster täglich prüfen; Reffpunkte markieren, konservatives Trimm Setup bei Brise</li>
                <li>Ankerdisziplin: Sandgrund wählen, Kette großzügig stecken, Halt per Rückwärtsfahrt testen, Ankeralarm setzen</li>
                <li>Hafenmanöver: Buganker präzise fallen lassen, Heckleinen früh, Fender auf Arbeits- und Ruhehöhe; im Poros Kanal Fährverkehr & Sog beachten</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen</h3>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Überblick:</strong> Der Saronische Golf ist windmäßig gutmütiger als Kykladen und Dodekanes. Im Sommer setzt eine Nord- bis Nordostbrise ein, die über Mittag auffrischt und abends häufig abflaut. Früh- und Spätsaison bringen variable, meist schwächere Winde; gelegentlich weht eine leichte SE Thermik (Scirocco).
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Tagesgang (Sommer)</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Morgen:</strong> Häufig ruhig – ideal für Verlegemanöver, Proviant, Badestopp</li>
                <li><strong>Mittag/Nachmittag:</strong> Aufbau der Brise; in Düsen (z. B. an Kaps/Engstellen) kurzzeitig kräftiger</li>
                <li><strong>Abend/Nacht:</strong> Abflauen; in Lee Buchten sehr ruhige Nächte</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Lokale Effekte</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Fallböen an steilen Küsten (Hydra/Spetses) – Heckleinen straff, Fender korrekt</li>
                <li>Strömungen & Sog im Poros Kanal durch Fährverkehr – Manöver vorher briefen</li>
                <li>Gewitterfenster in Randzeiten – Radar/Barometer und Wetterbericht im Blick</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Vergleich zu anderen Revieren</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Ionisches Meer:</strong> ähnlich gutmütig, jedoch weiter westlich und im Hochsommer stark frequentiert; der Saronische Golf punktet mit Athen Nähe und mehr Kulturstopps</li>
                <li><strong>Kykladen:</strong> frischer, exponierter; der Saronik ist die komfortorientierte Alternative mit moderater Brise und vielen All Weather Anchorages</li>
                <li><strong>Dodekanes:</strong> sportlichere, längere Schläge; im Saronik überwiegen kürzere Etappen und dichter Inselschutz – ideal für Familien und Einsteiger</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Eignung nach Erfahrungsstufe</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Einsteiger & Familien:</strong> Hervorragend geeignet in Mai/Juni und September/Oktober; viele sichere Häfen/Buchten, kurze Etappen</li>
                <li><strong>Genusssegler:</strong> Planbare Brise, Kulinarik & Kultur (Hydra/Spetses/Epidavros), entspannte Häfen</li>
                <li><strong>Ambitionierte Crews:</strong> Längere Schläge in den Argolischen Golf, Trimm-/Manövertraining in der Tagesbrise</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
            <p className="text-lg leading-relaxed mb-8">
              Die beste Reisezeit für Yachtcharter Athen / Saronischer Golf liegt in Mai/Juni sowie September/Oktober: angenehme Temperaturen, verlässliche Tagesbrisen, entspannte Häfen. In Juli/August ist Hochsaison – Häfen wie Hydra werden früh voll; wer dann segelt, läuft rechtzeitig ein oder wählt Ankerbuchten mit Sandgrund und Landleinen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit</h3>
            <p className="text-lg leading-relaxed mb-8">
              Segeln im Saronischen Golf bedeutet mediterranes Cruising mit Komfortgarantie: kurze Schläge, geschützte Buchten, historische Highlights und lebendige Hafenpromenaden. Alimos bietet die größte Yachtauswahl und eingespielte Abläufe; Zea und Flisvos setzen auf urbanen Komfort direkt an der Athenischen Riviera. Wer Seemannschaft schätzt und Urlaubszeit mit viel Wasser, Kultur und Kulinarik füllen möchte, setzt hier den richtigen Kurs.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Jetzt Yachtcharter Athen / Saronischer Golf anfragen</h4>
              <p className="text-black">
                Bereit für Ihren Törn ab Athen in den Saronischen Golf? Nennen Sie uns Crewgröße, Reisetermin und Wunsch Yachtklasse (Monohull oder Katamaran, Bareboat oder mit Skipper). Wir erstellen ein individuelles Angebot, organisieren Transfer und Proviantservice, reservieren Liegeplätze und liefern Routenempfehlungen passend zu Wind und Crewprofil – inklusive praxiserprobter Anlege- & Ankerei Tipps.
              </p>
              <p className="text-black font-semibold mt-3">
                Jetzt unverbindlich anfragen – und die Leinen im Saronischen Golf lösen!
              </p>
            </div>
          </div>
        </div>

        {/* Important Islands & Harbors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Inseln & Häfen</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-8 h-8 text-blue-600 mx-auto mb-3">
                  <MapPin className="w-full h-full" />
                </div>
                <p className="font-semibold text-gray-800">{city}</p>
              </div>
            ))}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-8 h-8 text-blue-600 mx-auto mb-3">
                <MapPin className="w-full h-full" />
              </div>
              <p className="font-semibold text-gray-800">Lavrion</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-8 h-8 text-blue-600 mx-auto mb-3">
                <MapPin className="w-full h-full" />
              </div>
              <p className="font-semibold text-gray-800">Angistri</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-8 h-8 text-blue-600 mx-auto mb-3">
                <MapPin className="w-full h-full" />
              </div>
              <p className="font-semibold text-gray-800">Methana</p>
            </div>
          </div>
        </div>

        {/* Google Maps - Satellite View */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Kartenansicht Saronischer Golf</h2>
          <TerritoryMap
            region="Athen & Saronischer Golf"
            center={{ lat: 37.6, lng: 23.5 }}
            zoom={4}
            maptype="satellite"
            markers={[
              { lat: 37.9755, lng: 23.7348, name: "Athen", description: "Hauptstadt und wichtigster Ausgangspunkt" },
              { lat: 37.7469, lng: 23.4318, name: "Aegina", description: "Größte Insel des Saronischen Golfs" },
              { lat: 37.5167, lng: 23.4667, name: "Poros", description: "Grüne Insel mit natürlichem Hafen" },
              { lat: 37.3564, lng: 23.4641, name: "Hydra", description: "Autofreie Künstlerinsel" },
              { lat: 37.2667, lng: 23.15, name: "Spetses", description: "Elegante Insel mit Geschichte" },
              { lat: 37.7167, lng: 24.0167, name: "Lavrion", description: "Moderne Marina südöstlich von Athen" }
            ]}
          />
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-6 h-6 text-blue-600 mx-auto mb-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mt-2"></div>
                </div>
                <p className="text-gray-700 text-sm">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mt-8 mb-4">Yachtcharter Athen & Saronischer Golf – Ihr Törn ab Athen, Lavrion oder Aegina</h3>
          <p className="text-lg leading-relaxed mb-6">
            Der Saronische Golf ist das perfekte Segelrevier für entspannte Törns in geschützten Gewässern. Nur eine Stunde von Athen entfernt, bietet dieses Revier historische Inseln, charmante Häfen und milde Winde – ideal für Einsteiger, Familien und alle, die das authentische Griechenland erleben möchten. Von den Häfen in Athen, Lavrion oder Aegina erreichen Sie in kurzer Zeit die berühmten Inseln Hydra, Poros und Spetses.
          </p>

          <div id="erreichbarkeit" className="mb-8">
            <h3 className="text-2xl font-bold mt-8 mb-4">Erreichbarkeit</h3>
            <p className="text-lg leading-relaxed mb-4">
              <strong>So kommen Sie bequem an Bord:</strong>
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-black mb-2">Athen (Flughafen ATH)</h5>
                  <p className="text-black">Internationale Direktflüge aus ganz Europa. Transfer zu den Marinas Alimos, Kalamaki oder Lavrion. Größte Auswahl an Charterbooten und Serviceeinrichtungen.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-black mb-2">Lavrion</h5>
                  <p className="text-black">Moderne Marina ca. 45 Minuten südöstlich von Athen. Ausgezeichnete Infrastruktur und direkter Zugang zum Saronischen Golf und den Kykladen.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-black mb-2">Aegina</h5>
                  <p className="text-black">Traditioneller Hafen auf der gleichnamigen Insel. Per Fähre von Piräus erreichbar, ideal für Crews die direkt im Revier starten möchten.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Marinas & Ausgangshäfen</h3>
          
          <h4 className="text-xl font-semibold mt-6 mb-4">Athen – Marina Alimos & Kalamaki</h4>
          <p className="mb-6">
            Die Marinas in Alimos und Kalamaki bieten vollständige Serviceeinrichtungen mit Wasser, Strom, Sanitäranlagen, Restaurants und Supermärkten. Sichere Liegeplätze mit gutem Schutz vor allen Windrichtungen. Transfer vom Flughafen in 30-45 Minuten.
          </p>

          <h4 className="text-xl font-semibold mt-6 mb-4">Lavrion – Marina & Olympic Marine</h4>
          <p className="mb-6">
            Moderne Marinas mit erstklassiger Ausstattung: Fuel-Dock, Technikservice, Chandlery, Restaurants und Einkaufsmöglichkeiten. Gute Anbindung zu den Inseln des Saronischen Golfs und den nahen Kykladen.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele – Inseln, Buchten, nautische Highlights</h3>
          
          <h4 className="text-xl font-semibold mt-6 mb-4">Aegina – Pistazien & Tradition</h4>
          <p className="mb-6">
            Die größte Insel des Saronischen Golfs bietet einen malerischen Fischerhafen, den berühmten Tempel der Aphaia und die besten Pistazien Griechenlands. Geschützter Hafen mit guter Infrastruktur und authentischen Tavernen.
          </p>

          <h4 className="text-xl font-semibold mt-6 mb-4">Poros – Grüne Oase</h4>
          <p className="mb-6">
            Poros bezaubert mit seinem natürlichen Hafen und der grünen Landschaft. Die Insel ist durch eine schmale Meerenge vom Peloponnes getrennt und bietet ruhige Ankerplätze sowie charmante Restaurants direkt am Wasser.
          </p>

          <h4 className="text-xl font-semibold mt-6 mb-4">Hydra – Künstlerparadies ohne Autos</h4>
          <p className="mb-6">
            Das autofreie Hydra ist ein lebendiges Museum mit prächtigen Kapitänshäusern aus dem 18. Jahrhundert. Der amphitheatralisch angelegte Hafen ist einer der schönsten im Mittelmeer. Festmachen mit Buganker und Heckleinen.
          </p>

          <h4 className="text-xl font-semibold mt-6 mb-4">Spetses – Eleganz & Charme</h4>
          <p className="mb-6">
            Spetses verbindet Geschichte mit Eleganz. Die Insel spielte eine wichtige Rolle im griechischen Unabhängigkeitskampf und bietet heute exquisite Restaurants, Boutiquen und wunderschöne Strände.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Törnvorschlag – eine Woche ab Athen (entspannt & kulturell)</h3>
          <p className="mb-4 font-medium">Ziel: Entspanntes Segeln in geschützten Gewässern mit kulturellen Höhepunkten und authentischem griechischen Flair.</p>
          
          <div className="space-y-3 mb-8">
            <div className="border-l-4 border-primary pl-4">
              <h5 className="font-semibold">Tag 1 – Athen → Aegina</h5>
              <p className="text-sm text-muted-foreground">Check-in, Sicherheitsbriefing, erste Segelmeilen. Aegina-Stadt mit Hafenbummel und Pistazien-Shopping. Abends in einer traditionellen Taverne.</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h5 className="font-semibold">Tag 2 – Aegina → Poros</h5>
              <p className="text-sm text-muted-foreground">Kurzer Segeltag zu der grünen Insel Poros. Ankern in einer der vielen geschützten Buchten oder Festmachen am Stadtkai. Spaziergang auf die Akropolis.</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h5 className="font-semibold">Tag 3 – Poros → Hydra</h5>
              <p className="text-sm text-muted-foreground">Segeln zur berühmten Künstlerinsel. Festmachen im pittoresken Hafen, Erkundung der autofreien Insel zu Fuß oder per Esel-Taxi.</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h5 className="font-semibold">Tag 4 – Hydra → Spetses</h5>
              <p className="text-sm text-muted-foreground">Zur elegantesten Insel des Saronischen Golfs. Dapia-Hafen mit prächtigen Villen und exzellenten Restaurants. Möglichkeit für Inselrundfahrt mit Pferdekutsche.</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h5 className="font-semibold">Tag 5 – Spetses → Ermioni (Peloponnes)</h5>
              <p className="text-sm text-muted-foreground">Kurzer Schlag zum charmanten Fischerort Ermioni. Ruhiger Ankerplatz in einer der Buchten, Besuch des traditionellen Dorfes.</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h5 className="font-semibold">Tag 6 – Ermioni → Aegina</h5>
              <p className="text-sm text-muted-foreground">Zurück nach Aegina für eine weitere Nacht. Gelegenheit für Einkäufe und Besuch des Aphaia-Tempels.</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h5 className="font-semibold">Tag 7 – Aegina → Athen</h5>
              <p className="text-sm text-muted-foreground">Rückkehr zum Basishafen. Check-out und Transfer zum Flughafen oder Verlängerung in Athen für Sightseeing.</p>
            </div>
          </div>

          <div id="wetter-windbedingungen" className="mb-8">
            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen</h3>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Überblick:</strong> Der Saronische Golf bietet ganzjährig segelbare Bedingungen mit milden Winden und geschützten Gewässern. Die Meltemi-Winde sind hier deutlich schwächer als in der offenen Ägäis, was das Revier ideal für entspanntes Cruising macht.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Windverhältnisse:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Sommer (Juni-August):</strong> Meltemi 3-5 Bft aus Nord bis Nordost, nachmittags stärker</li>
                <li><strong>Frühjahr/Herbst:</strong> Variable Winde 2-4 Bft, ideale Segelbedingungen</li>
                <li><strong>Winter:</strong> Südliche Winde möglich, generell ruhige See</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Besonderheiten:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Geschützte Lage durch umgebende Landmassen</li>
                <li>Kurze Wellen durch begrenzte Fetchlänge</li>
                <li>Viele natürliche Windschatten hinter Inseln</li>
                <li>Thermische Effekte an den Küsten</li>
              </ul>
            </div>
          </div>

          <div id="eignung-erfahrungsstufe" className="mb-8">
            <h3 className="text-2xl font-bold mt-8 mb-4">Eignung nach Erfahrungsstufe</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Einsteiger & Familien</h4>
                <p className="text-green-700">Perfekt geeignet durch kurze Distanzen, geschützte Gewässer und milde Winde. Viele sichere Häfen als Rückzugsmöglichkeit.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Genusssegler</h4>
                <p className="text-blue-700">Ideale Kombination aus entspanntem Segeln und kulturellen Highlights. Kurze Tagesetappen lassen Zeit für Erkundungen.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Erfahrene Segler</h4>
                <p className="text-orange-700">Als Trainingsrevier oder für entspannte Törns geeignet. Möglichkeit zur Erweiterung in die Kykladen.</p>
              </div>
            </div>
          </div>

          <div id="beste-reisezeit" className="mb-8">
            <h3 className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
            <p className="text-lg leading-relaxed mb-4">
              Der Saronische Golf ist ganzjährig segelbar, wobei die beste Zeit von April bis Oktober reicht. Besonders empfehlenswert sind Mai/Juni und September/Oktober mit angenehmen Temperaturen und stabilen Wetterbedingungen.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Hochsaison (Juli-August)</h4>
                <p className="text-green-700">Beste Windverhältnisse, warme Temperaturen, lebendige Atmosphäre in den Häfen</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Nebensaison (April-Juni, September-Oktober)</h4>
                <p className="text-blue-700">Milde Temperaturen, weniger Andrang, günstigere Preise, ideale Segelbedingungen</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fazit</h3>
          <p className="text-lg leading-relaxed mb-8">
            Der Saronische Golf ist das ideale Einsteigerrevier Griechenlands und bietet gleichzeitig erfahrenen Seglern entspannte Törns mit kulturellen Höhepunkten. Die Kombination aus geschützten Gewässern, historischen Inseln und der Nähe zu Athen macht dieses Revier zu einem perfekten Ziel für unvergessliche Segelurlaube.
          </p>

          {/* Blue CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg text-center mt-12">
            <h3 className="text-3xl font-bold mb-4">Bereit für den Saronischen Golf?</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Entdecken Sie die historischen Inseln Griechenlands mit geschützten Gewässern und authentischer griechischer Kultur.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
              Saronischer Golf Charter anfragen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthenSaronischerGolf;