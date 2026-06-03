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
import TopDestinations from "@/components/TopDestinations";

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
        <img src="/lovable-uploads/de517069-a66e-40d2-b848-d55b392f41eb.webp" alt="Athen Saronischer Golf - Akropolis von Athen mit Parthenon" className="w-full h-full object-cover" />
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

            <div className="border border-gray-200 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Erreichbarkeit</h4>
              <p className="mb-3">So kommen Chartergäste stressfrei an Bord:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Athen (ATH):</strong> Zahlreiche internationale Verbindungen – schnelle Transfers per Taxi/Minivan zur Basis</li>
                <li><strong>Kurze Wege zur Marina:</strong> Von ATH zur Alimos Marina (Kalamaki) benötigen Sie je nach Verkehr rund 45–60 Minuten; Zea Marina (Piräus) und Flisvos (Palaio Faliro) liegen ebenfalls an der Athenischen Riviera</li>
                <li><strong>Proviant & Service:</strong> Große Supermärkte, Chandlers, Bäckereien und Lieferdienste nahe der Basen; auf Wunsch Door to Dock Proviant und koordinierte Check in Zeiten</li>
              </ul>
            </div>

            <div id="marinas-ausgangshaefen" className="border border-gray-200 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Marinas & Ausgangshäfen</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">Alimos Marina (Kalamaki) – Hauptausgangsbasis</h5>
                  <p>Die Alimos Marina ist die größte Marina Griechenlands und zentrale Charterdrehscheibe von Athen: Muring-Plätze, Wasser/Power am Steg, Tankservice, Technikbetriebe (Rigg/Elektrik/Motor), Chandlery, Sanitär, Wäscherei und kurze Wege zur Proviantierung. Reibungslose Abläufe beim Check in, Riggsichtung und Sicherheitsbriefing sind hier Standard – ideal, um noch am Ankunftstag die Leinen loszuwerfen.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Zea Marina (Piräus)</h5>
                  <p>Renoviert und umfangreich ausgestattet – Wasser/Power, Werft/Servicekette, Shops und Gastronomie an der Promenade. Auch für größere Yachten ausgelegt, gleichzeitig beliebt bei Chartercrews, die den urbanen Anschluss schätzen und schnell Richtung Aegina/Poros aufbrechen möchten.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Flisvos Marina (Palaio Faliro)</h5>
                  <p>Die Flisvos Marina ist die Premium Adresse der Athenischen Riviera – Superyacht tauglich, mit elegantem Umfeld, Gastronomie und Einkaufsmöglichkeiten am Steg. Einige Charterflotten operieren hier oder in unmittelbarer Nähe; wer Wert auf kurzen Transfer und gehobenes Umfeld legt, ist bestens aufgehoben.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Weitere Startoptionen</h5>
                  <p>Kleinere Marinas/Häfen rund um Athen (z. B. Glyfada/Agios Kosmas, Kallithea) können je nach Anbieter als Alternativ Base dienen. Bitte Verfügbarkeit frühzeitig klären – die größte Auswahl an Yachten bleibt Alimos.</p>
                </div>
              </div>
            </div>

            {/* Scenic Image Section */}
            <div className="my-12">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-4">
                <img 
                  src="/lovable-uploads/5c4d5c49-2d62-4b5b-8c3a-e39beb428dfc.webp" 
                  alt="Traumhafte Ankerbucht im Saronischen Golf mit türkisfarbenem Wasser und Yachten" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-gray-600 text-lg italic">
                Im windgeschützten Saronischen Golf erwarten Sie unzählige traumhafte Ankerbuchten, perfekt für entspannte Tage und ruhige Nächte.
              </p>
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

            <div className="border-l-4 border-amber-400 bg-amber-50 p-4 rounded-r-lg mb-6">
              <p className="font-semibold text-amber-900 mb-1">
                Revierupdate: Poros – eingeschränkter Hafenbereich bis 31. Oktober 2026
              </p>
              <p className="text-amber-800 text-sm leading-relaxed mb-2">
                Im Hafenbereich von Poros gilt bis einschließlich 31. Oktober 2026 eine
                Einschränkung für eine offiziell definierte Wasserfläche. In dieser Zone
                sind Ankern, das Ausbringen von Mooring- oder Befestigungspunkten sowie
                Festmachen an festen oder nicht festen Küstenpunkten untersagt. Poros bleibt
                grundsätzlich planbar; Crews sollten vor dem Anlaufen jedoch die genaue Lage
                der Zone, lokale Hafeninformationen und aktuelle nautische Unterlagen prüfen.
              </p>
              <a
                href="/news/poros-ankern-festmachen-hafenbereich-2026"
                className="text-amber-700 underline text-sm font-medium hover:text-amber-900"
              >
                Alle Details und Koordinaten im Revierupdate →
              </a>
            </div>

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
                <h5 className="font-semibold">Tag 7 – Palaia Epidavros → Athen/Alimos</h5>
                <p className="text-sm text-muted-foreground">Rückschlag entlang der Küste. Rechtzeitig zum Fuel Dock, Check out – und der nächste Saronik Plan reift bereits.</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 mb-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Varianten</h5>
                <ul className="text-sm space-y-1">
                  <li>• Argolischer Golf mit Nafplio</li>
                  <li>• Kurzrunden Aegina–Angistri–Poros</li>
                  <li>• Katamaran Charter</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Seemannschaft</h5>
                <ul className="text-sm space-y-1">
                  <li>• Wetterfenster täglich prüfen</li>
                  <li>• Ankerdisziplin beachten</li>
                  <li>• Hafenmanöver vorbereiten</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Nautische Infrastruktur</h5>
                <ul className="text-sm space-y-1">
                  <li>• Verlässlich ausgestattete Marinas</li>
                  <li>• Water & Power am Steg</li>
                  <li>• Fuel-Docks und Proviantservice</li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Segeln im Saronischen Golf bedeutet mediterranes Cruising mit Komfortgarantie: kurze Schläge, geschützte Buchten, historische Highlights und lebendige Hafenpromenaden. Alimos bietet die größte Yachtauswahl und eingespielte Abläufe; Zea und Flisvos setzen auf urbanen Komfort direkt an der Athenischen Riviera. Wer Seemannschaft schätzt und Urlaubszeit mit viel Wasser, Kultur und Kulinarik füllen möchte, setzt hier den richtigen Kurs.
            </p>
          </div>
        </div>

        {/* CTA - moved here */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Bereit für den Saronischen Golf?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Entdecken Sie die historischen Inseln Griechenlands mit geschützten Gewässern 
              und authentischer griechischer Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium" size="lg">
                Saronischer Golf Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        {/* Important Islands & Harbors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Inseln & Häfen</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{city}</p>
              </div>)}
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Lavrion</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Angistri</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Methana</p>
            </div>
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

        <TopDestinations />
      </div>
    </div>
  );
};

export default AthenSaronischerGolf;