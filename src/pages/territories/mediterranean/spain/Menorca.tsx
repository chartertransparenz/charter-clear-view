import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
import menorcaHeader from "@/assets/menorca-header.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Menorca = () => {
  const m = META.menorca;
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Hauptstädte", value: "Mahón & Ciutadella" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Naturliebhaber & Familien" },
    { icon: Anchor, label: "Besonderheit", value: "UNESCO-Biosphärenreservat" }
  ];

  const ports = [
    "Mahón (Port de Maó)", "Ciutadella", "Fornells", "Cala en Porter"
  ];

  const highlights = [
    "UNESCO-Biosphärenreservat",
    "Unberührte Naturbuchten",
    "Mahón - Zweitgrößter Naturhafen Europas",
    "Cala Macarella & Macarelleta",
    "Ruhiger als Mallorca & Ibiza",
    "Türkisfarbenes Wasser",
    "Authentische Dörfer"
  ];

  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        keywords={m.keywords}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      />
      <JsonLd json={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Reviere", "item": "https://chartertransparenz.de/reviere"},
          {"@type": "ListItem", "position": 2, "name": "Mittelmeer", "item": "https://chartertransparenz.de/reviere/mittelmeer"},
          {"@type": "ListItem", "position": 3, "name": "Spanien", "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien"},
          {"@type": "ListItem", "position": 4, "name": "Balearen", "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"},
          {"@type": "ListItem", "position": 5, "name": "Menorca", "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/menorca"}
        ]
      }} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
        
        {/* Header */}
        <div className="relative h-64 md:h-96 overflow-hidden mt-20">
          <img
            src={menorcaHeader}
            alt="Yachtcharter Menorca - Türkisblaue Bucht mit Segelbooten und grüner Küstenlandschaft"
            title="Yachtcharter Menorca - Naturhafen mit kristallklarem Wasser"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Badge className="mb-4 bg-blue-500 text-white">🇪🇸 Menorca</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Menorca</h1>
              <p className="text-xl max-w-2xl">
                Die Ruhige Schönheit - Naturbuchten & Authentizität
              </p>
            </div>
          </div>
          <Link 
            to="/reviere/mittelmeer/spanien/balearen" 
            className="absolute top-6 left-6"
          >
            <Button variant="outline" className="bg-white/90 text-black border-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Balearen
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
                    <Link to="/reviere/mittelmeer/spanien">Spanien</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/reviere/mittelmeer/spanien/balearen">Balearen</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Menorca</BreadcrumbPage>
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

          {/* Territory Map */}
          <div className="max-w-4xl mx-auto mb-12">
            <TerritoryMap 
              region="Menorca"
              center={{ lat: 39.9625, lng: 4.0758 }}
              zoom={7}
              maptype="satellite"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold mb-6">Yachtcharter Menorca – entspanntes Inselhopping zwischen Nordküste & Südbuchten</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Menorca ist das ruhige Juwel der Balearen: türkisblaues Wasser, feinsandige Calas im Süden, wildromantische Nordküste mit rötlichen Klippen, dazu historische Städte und eine maritime Kultur, die seit Jahrhunderten vom Meer lebt. Ideale Ausgangspunkte für Ihren Törn sind Maó/Mahón – einer der größten Naturhäfen des Mittelmeers – sowie Ciutadella im Westen. Auch Fornells (Norden) und Addaia eignen sich hervorragend als Zwischen- oder Startstopp.
              </p>

              <p className="mb-6">
                Ob Segelyacht, Katamaran oder Motorboot, Bareboat oder mit Skipper: Auf Menorca finden Crews kurze Distanzen, viele sichere Ankerplätze mit Sandgrund und eine Infrastruktur, die entspanntes, genussvolles Segeln Menorca ermöglicht.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Revierüberblick: Küsten & Charakter</h3>
              
              <h4 className="text-xl font-semibold mt-6 mb-3">Südküste (Cala Galdana, Cala Macarella, Son Saura, Binibèquer)</h4>
              <p className="mb-6">
                Helle Sandbuchten mit smaragdgrünem Wasser, meist guter Ankergrund, kurze Schläge zwischen den Calas – ideal für Badestopps und Familien.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Nordküste (Fornells, Cavalleria, Algaiarens/La Vall)</h4>
              <p className="mb-6">
                Länger offen zum Tramontana, rauer und ursprünglicher Reiz mit Felsformationen, Dünen und einsamen Ankerplätzen. Fornells-Bucht bietet hervorragenden Schutz und Bojen.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Osten (Maó/Mahón & Es Castell/Cales Fonts)</h4>
              <p className="mb-6">
                Historischer Naturhafen mit moderner Marina-Infrastruktur, perfekte Basis für Proviantierung, Technik & Cityflair.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Westen (Ciutadella & Cala en Bosch)</h4>
              <p className="mb-6">
                Mediterrane Altstadt, lebhafte Gastronomie, kurze Wege zu Stränden; kleinere Marinas/Anleger als gemütliche Hubs.
              </p>

              <p className="mb-6">
                <strong>Tipp Bootswahl:</strong> Katamarane sind beliebt (stabil, geräumig, geringer Tiefgang), aber nicht Pflicht. Monohulls punkten mit Segelgefühl und „Spaß am Schlag". Motorboote erlauben flexible Tagesrouten. Entscheidend sind Crewgröße, Komfortwunsch und Törnprofil.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">7-Tage-Törnvorschlag ab Maó/Mahón (anpassbar für Segelyacht, Katamaran & Motorboot)</h3>
              
              <div className="space-y-3 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 1 – Check-in Mahón → Es Grau (6–8 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Einschiffen, Sicherheitsbriefing, kurzer Einsegler in die geschützte Bucht Es Grau. Ankern auf Sand, erster Sundowner, ruhige Nacht.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 2 – Es Grau → Fornells (12–16 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Kurs Nord. Je nach Bedingungen Badestopp an der Illa d'en Colom. In Fornells liegen Sie sicher an Boje/Anker; das Fischerdorf ist bekannt für Hummergerichte und entspanntes Abendausgehen.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 3 – Fornells → Cala Pregonda/Cavalleria → Algaiarens (18–22 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Nordküsten-Highlights mit kupferfarbenen Felsen und klarem Wasser. Wetter schauen: Bei kräftiger Tramontana lieber in Fornells bleiben oder Schutzbuchten wählen.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 4 – Algaiarens → Ciutadella (10–14 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Kurzer Schlag zur Altstadt. Marina-Stopp für Landgang, Proviant, Kultur und Tapas in den Gassen. Abends Hafenambiente genießen.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 5 – Ciutadella → Südküsten-Runde: Son Saura → Cala Macarella/Macarelleta → Cala Galdana (14–20 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Postkartenreif: helle Sandstrände, türkisfarbenes Becken. Früh ankommen – beliebte Ankerplätze! Auf Sand ankern, Posidonia freihalten.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 6 – Cala Galdana → Binigaus/Es Talaier → Binibèquer (18–24 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Gemütliches Inselhopping die Südküste entlang. Binibèquer punktet mit Dorfcharme und klaren Wasserfarben.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 7 – Binibèquer → Mahón (8–12 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Letzter Badestopp in einer nahegelegenen Cala, danach Rückkehr nach Mahón, Ausklarieren und Stadtbummel am Naturhafen.
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg mb-8">
                <p className="text-black">
                  <strong>Variante bei stärkerem Nordwind:</strong> Mehr Nächte Fornells/Mahón, die Südküste früher anlaufen; die Südbuchten bieten bei Tramontana oft die besseren Bedingungen.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Marinas, Liegeplätze & Service</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Mahón / Port de Maó:</strong> Mehrere Marinas/Pontoons entlang des Naturhafens; Fuel Dock, Technikbetriebe, Segelmacher, Supermärkte in Stegnähe.</li>
                <li><strong>Ciutadella:</strong> Zentrale Lage, abends lebhaft; Reservierung in Saison zu empfehlen.</li>
                <li><strong>Fornells:</strong> Großzügige, geschützte Bucht mit Bojenfeldern, Dinghy-freundlich, ruhige Nächte.</li>
                <li><strong>Addaia:</strong> Natürliche, gut geschützte Einfahrt; kleinere Infrastruktur, ideal als sicherer Nord-Stützpunkt.</li>
                <li><strong>Cala en Bosch & Es Castell (Cales Fonts):</strong> Gemütliche Anleger, Gastronomie und maritime Atmosphäre.</li>
              </ul>

              <p className="mb-6">
                Flotte & Optionen: Breite Auswahl an Segelyachten, Katamaranen und Motoryachten, Bareboat, Skippered oder Crewed. Für die Hochsaison früh buchen – insbesondere bei Multihulls und Familienlayouts.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele & nautische Hinweise</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Südbuchten (Son Saura, Turqueta, Macarella, Galdana):</strong> Sandiger Grund mit sehr guter Haltekraft, hervorragendes SUP/Schnorchel-Revier.</li>
                <li><strong>Nordküste (Pregonda, Cavalleria, Algaiarens):</strong> Ursprünglich und fotogen; auf Schwell & Winddreher achten, notfalls Plan B (Fornells).</li>
                <li><strong>Es Grau & Illa d'en Colom (Ost):</strong> Flache Sandplateaus, ideal für den ersten/letzten Badestopp.</li>
                <li><strong>Cala Binibèquer & Punta Prima (SO):</strong> Familienfreundlich, kurze Distanzen zur Marina Mahón.</li>
                <li><strong>Historische Städte:</strong> Ciutadella (westliches Flair), Mahón (britisch-spanisches Erbe, lange Uferpromenade).</li>
                <li><strong>Ankerpraxis:</strong> Auf Sand zielen, Kette großzügig stecken (mind. 4–5x Wassertiefe), Halt prüfen (Rückwärtsgang), Sichtcheck mit Maske.</li>
                <li><strong>Bojen & Schutzgebiete:</strong> In sensiblen Zonen Bojen nutzen; Ankern auf Posidonia (Seegras) ist untersagt.</li>
                <li><strong>Manöver:</strong> In schmalen Calas vorher Dinghy/Boards sichern, Einfahrten langsam und mit Abstand zu Badenden.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wetter, Winde & Revier-Eignung</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Tramontana (N/NW):</strong> Charakterwind Menorcas, kann frisch bis hart wehen. Dann bieten Mahón, Fornells und Teile der Südküste guten Schutz.</li>
                <li><strong>Seebrise (thermisch):</strong> In den Sommermonaten nachmittags oft 8–15 kn – ideal für entspannte Schläge mit Badestopps am Vormittag.</li>
                <li><strong>Mistral/Levante-Phasen:</strong> Kurzfristige Starkwindfenster möglich; Törn flexibel planen, Kaps früh reffen.</li>
                <li><strong>Seegang & Beschleunigungszonen:</strong> An exponierten Kaps und Nordbuchten können sich Schwell und Böen aufbauen – konservative Segelwahl und Reffstufen einplanen.</li>
              </ul>

              <h4 className="text-xl font-semibold mt-6 mb-3">Eignung:</h4>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Einsteiger & Familien:</strong> Sehr gut – kurze Distanzen, viele geschützte Buchten, klare Ankerregeln.</li>
                <li><strong>Erfahrene Skipper:</strong> Nordküsten-Etappen mit „Seemannsreiz", präzise Törnplanung belohnt mit spektakulären Kulissen und leereren Ankerplätzen.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Umwelt, Regeln & Sicherheit</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Posidonia-Schutz:</strong> Nie auf Seegras ankern, auch die Kette nicht über Posidonia führen. Sandflächen oder Bojen nutzen.</li>
                <li><strong>Biosphärenreservat:</strong> Menorca steht für nachhaltigen Tourismus – Müllvermeidung, Abwasserentsorgung in Marinas, respektvoller Umgang mit Natur & Lärmgebieten.</li>
                <li><strong>Sicherheitsstandards:</strong> Charteryachten werden regelmäßig gewartet und führen die vorgeschriebenen Rettungs- und Signalmittel. Ein Skipper-Briefing weist auf Revierbesonderheiten und Notfallkontakte hin.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Anreise & Logistik</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Flug nach Maó (MAH):</strong> In der Saison zahlreiche Direktflüge aus D/AT/CH/FR; kurze Transfers zu den Marinas.</li>
                <li><strong>Proviantierung:</strong> Supermärkte in Mahón & Ciutadella, kleinere Läden in Küstenorten; auf Wunsch Proviant-Lieferung bis an den Steg (gekühlt/gefrostet).</li>
                <li><strong>Transfers & Extras:</strong> Privattransfer, Wassersport-Toys (SUP/Kajak), Kinder- und Sicherheitsausrüstung organisieren wir gerne vorab.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Lizenzen & Chartermodelle</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Bareboat:</strong> Erfordert einen international anerkannten Bootsführerschein (z. B. ICC oder äquivalenter nationaler Schein).</li>
                <li><strong>Skippered/Crews:</strong> Wenn keine Lizenz oder wenn Komfort im Vordergrund steht.</li>
                <li><strong>Yachttypen:</strong> Segelyacht, Katamaran, Motorboot – wählen Sie nach Crewgröße, Komfortanspruch und gewünschter Revierstrategie (Ankerbuchten vs. Marinas).</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
              <p className="mb-6">
                Mai bis Oktober ist ideal. Mai–Juni und September bieten die beste Balance aus beständigem Wetter, freien Liegeplätzen und Wassertemperaturen. Juli–August sind sonnensicher und lebhaft – früh reservieren (Marinas/Bojen), besonders für Südbuchten.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Fazit</h3>
              <p className="mb-6">
                Yachtcharter Menorca bedeutet entschleunigtes Mittelmeer-Feeling: kurze Etappen, sichere Sandankerplätze, eindrucksvolle Nordküste und traumhafte Südbuchten – eingerahmt von Städteflair in Mahón und Ciutadella. Ob Segelyacht, Katamaran oder Motorboot: Das Revier ist zugänglich für Einsteiger, lohnend für Routiniers und dank klarer Umweltregeln nachhaltig zu genießen. Wer flexibel plant und Posidonia respektiert, erlebt eine der schönsten, zugleich ruhigsten Seiten der Balearen.
              </p>

              <p className="mb-6">
                <strong>Jetzt Yachtcharter Menorca anfragen:</strong> Wir finden die passende Yacht (Bareboat oder mit Skipper), planen Route & Bojen nach Windlage (Nord/Süd), organisieren Transfers & Proviant und teilen Insider-Tipps zu Calas, Restaurants und Landaktivitäten. Kontakt aufnehmen & Wunschtermin sichern!
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Bereit für Menorca?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Erleben Sie entschleunigtes Mittelmeer-Feeling mit kurzen Etappen, sicheren Sandankerplätzen und traumhaften Südbuchten – perfekt für Familien und Naturliebhaber.
              </p>
              <CharterRequestForm>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium" size="lg">
                  Menorca Charter anfragen
                </Button>
              </CharterRequestForm>
            </div>
          </div>

          {/* Top-Destinationen */}
          <div className="max-w-7xl mx-auto mt-20 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Ihre Top-Destinationen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Kroatien */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Yachtcharter Kroatien</h3>
                <ul className="space-y-2">
                  <li><Link to="/reviere/mittelmeer/kroatien" className="text-gray-700 hover:text-blue-600">Istrien</Link></li>
                  <li><Link to="/reviere/mittelmeer/kroatien" className="text-gray-700 hover:text-blue-600">Kvarner</Link></li>
                  <li><Link to="/reviere/mittelmeer/kroatien" className="text-gray-700 hover:text-blue-600">Zadar</Link></li>
                  <li><Link to="/reviere/mittelmeer/kroatien" className="text-gray-700 hover:text-blue-600">Dalmatien ab Split</Link></li>
                  <li><Link to="/reviere/mittelmeer/kroatien" className="text-gray-700 hover:text-blue-600">Dubrovnik</Link></li>
                </ul>
              </div>

              {/* Griechenland */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Yachtcharter Griechenland</h3>
                <ul className="space-y-2">
                  <li><Link to="/reviere/mittelmeer/griechenland/kykladen" className="text-gray-700 hover:text-blue-600">Kykladen</Link></li>
                  <li><Link to="/reviere/mittelmeer/griechenland/ionische-inseln" className="text-gray-700 hover:text-blue-600">Ionische Inseln</Link></li>
                  <li><Link to="/reviere/mittelmeer/griechenland/dodekanes" className="text-gray-700 hover:text-blue-600">Dodekanes</Link></li>
                  <li><Link to="/reviere/mittelmeer/griechenland/sporaden" className="text-gray-700 hover:text-blue-600">Sporaden</Link></li>
                  <li><Link to="/reviere/mittelmeer/griechenland/athen-saronischer-golf" className="text-gray-700 hover:text-blue-600">Athen & Saronischer Golf</Link></li>
                  <li><Link to="/reviere/mittelmeer/griechenland" className="text-gray-700 hover:text-blue-600">Nordgriechenland</Link></li>
                </ul>
              </div>

              {/* Italien */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Yachtcharter Italien</h3>
                <ul className="space-y-2">
                  <li><Link to="/reviere/mittelmeer/italien" className="text-gray-700 hover:text-blue-600">Sardinien</Link></li>
                  <li><Link to="/reviere/mittelmeer/italien" className="text-gray-700 hover:text-blue-600">Costa Smeralda</Link></li>
                  <li><Link to="/reviere/mittelmeer/italien" className="text-gray-700 hover:text-blue-600">Sizilien</Link></li>
                  <li><Link to="/reviere/mittelmeer/italien" className="text-gray-700 hover:text-blue-600">Toskana / Elba</Link></li>
                  <li><Link to="/reviere/mittelmeer/italien" className="text-gray-700 hover:text-blue-600">Amalfiküste</Link></li>
                </ul>
              </div>

              {/* Spanien */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Yachtcharter Spanien</h3>
                <ul className="space-y-2">
                  <li><Link to="/reviere/mittelmeer/spanien/balearen" className="text-gray-700 hover:text-blue-600">Balearen</Link></li>
                  <li><Link to="/reviere/mittelmeer/spanien" className="text-gray-700 hover:text-blue-600">Costa Brava</Link></li>
                  <li><Link to="/reviere/mittelmeer/spanien" className="text-gray-700 hover:text-blue-600">Valencia</Link></li>
                  <li><Link to="/reviere/mittelmeer/spanien/kanaren" className="text-gray-700 hover:text-blue-600">Kanaren</Link></li>
                </ul>
              </div>

              {/* Karibik */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Yachtcharter Karibik</h3>
                <ul className="space-y-2">
                  <li><Link to="/reviere/karibik" className="text-gray-700 hover:text-blue-600">British Virgin Islands</Link></li>
                  <li><Link to="/reviere/karibik" className="text-gray-700 hover:text-blue-600">US Virgin Islands</Link></li>
                  <li><Link to="/reviere/karibik" className="text-gray-700 hover:text-blue-600">Leeward Islands</Link></li>
                  <li><Link to="/reviere/karibik" className="text-gray-700 hover:text-blue-600">Windward Islands</Link></li>
                  <li><Link to="/reviere/karibik" className="text-gray-700 hover:text-blue-600">Kuba</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menorca;
