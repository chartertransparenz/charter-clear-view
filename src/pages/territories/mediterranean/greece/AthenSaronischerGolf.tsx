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

        {/* Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Athen & Saronischer Golf</h2>
          <TerritoryMap
            region="Athen & Saronischer Golf"
            center={{ lat: 37.9, lng: 23.7 }}
            zoom={9}
            markers={[
              { lat: 37.9755, lng: 23.7348, name: "Athen", description: "Hauptstadt und wichtigster Ausgangspunkt" },
              { lat: 37.7469, lng: 23.4318, name: "Aegina", description: "Größte Insel des Saronischen Golfs" },
              { lat: 37.5167, lng: 23.4667, name: "Poros", description: "Grüne Insel mit natürlichem Hafen" },
              { lat: 37.3564, lng: 23.4641, name: "Hydra", description: "Autofreie Künstlerinsel" },
              { lat: 37.2667, lng: 23.15, name: "Spetses", description: "Elegante Insel mit Geschichte" }
            ]}
          />
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

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Athen & Saronischer Golf anfragen</h3>
            <p className="mb-6">
              Bereit für Ihren entspannten Törn im Saronischen Golf? Nennen Sie uns Ihre Crewgröße, Ihren Wunschtermin und Ihre bevorzugte Yachtklasse. Wir erstellen ein individuelles Angebot und organisieren Transfer, Proviant und alle weiteren Services für Ihren perfekten Griechenland-Urlaub.
            </p>
            <CharterRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthenSaronischerGolf;