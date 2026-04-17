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
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const Mallorca = () => {
  const m = META.mallorca;
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Hauptstadt",
    value: "Palma de Mallorca"
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
    label: "Buchten",
    value: "200+ Calas"
  }];
  const ports = ["Palma de Mallorca", "Port d'Andratx", "Port de Sóller", "Alcúdia", "Portocolom", "Cala d'Or"];
  const highlights = ["Palma - Lebendige Hauptstadt", "Cabrera Nationalpark", "Serra de Tramuntana UNESCO-Welterbe", "Es Trenc - Karibik-Feeling", "Cap Formentor", "200+ Traumhafte Buchten", "Weltklasse Marinas"];
  return <>
      <Meta title={m.title} description={m.description} ogImage={absoluteOg(m.ogImage)} canonical={m.canonical()} />
      <JsonLd json={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Reviere",
        "item": "https://chartertransparenz.de/reviere"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Mittelmeer",
        "item": "https://chartertransparenz.de/reviere/mittelmeer"
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": "Spanien",
        "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien"
      }, {
        "@type": "ListItem",
        "position": 4,
        "name": "Balearen",
        "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"
      }, {
        "@type": "ListItem",
        "position": 5,
        "name": "Mallorca",
        "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/mallorca"
      }]
    }} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
        
        {/* Header */}
        <div className="relative h-64 md:h-96 overflow-hidden mt-20">
          <img src="/lovable-uploads/cc180839-2a23-40be-b2bd-45eedcf7e909.webp" alt="Mallorca Yachtcharter - Cala Llombards" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Badge className="mb-4 bg-blue-500 text-white">🇪🇸 Mallorca</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Mallorca</h1>
              <p className="text-xl max-w-2xl">
                Die Königin der Balearen - Traumhafte Buchten & Lebendige Kultur
              </p>
            </div>
          </div>
          <Link to="/reviere/mittelmeer/spanien/balearen" className="absolute top-6 left-6">
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
                  <BreadcrumbPage>Mallorca</BreadcrumbPage>
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

          {/* Territory Map */}
          <div className="max-w-4xl mx-auto mb-12">
            <TerritoryMap region="Mallorca" center={{
            lat: 39.6953,
            lng: 3.0176
          }} zoom={6} maptype="satellite" />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold mb-6">Yachtcharter Mallorca – Ihr Törn im westlichen Mittelmeer</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Mallorca zählt 2025 weiterhin zu den gefragtesten Yachtcharter-Destinationen im Mittelmeer – und das aus guten Gründen: türkisblaues Wasser, weitläufige Sandstrände, zerklüftete Steilküsten, malerische Calas, lebendige Hafenstädte und eine authentische mallorquinische Kultur. Palma de Mallorca, Port d'Andratx, Port de Sóller und Alcúdia sind ideale Ausgangspunkte, um die Insel im Bareboat oder mit Skipper per Segelyacht, Katamaran oder Motorboot zu erkunden. Für Crews und Familien sind Multihulls (Katamarane) besonders attraktiv: Sie bieten stabilen Liegekomfort, geringen Tiefgang für flache Ankerbuchten, großzügiges Platzangebot für Crew und Gepäck sowie die entspannte Möglichkeit, auch abgelegene Ankerplätze komfortabel zu erreichen. Die Charterlandschaft ist vielfältig – von wendigen Fahrtenseglern über familienfreundliche Kats bis hin zu exklusiven Motoryachten – und auf Sicherheit, Service und Komfort ausgelegt.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Geografie & Revierübersicht: Mallorcas Küstenabschnitte im Überblick</h3>
              
              <h4 className="text-xl font-semibold mt-6 mb-3">Südwesten (Palma, Portals Nous, Port d'Andratx)</h4>
              <p className="mb-6">
                Die Bucht von Palma ist eines der besterschlossenen Segelzentren im Mittelmeer. Moderne Marinas, Technikservices, Segelmacher, nautische Ausstatter und hervorragende Proviantierungsmöglichkeiten sorgen für reibungslose Übergaben. Portals Nous und Illetes locken mit sandigem Ankergrund und kurzen Schlägen, Port d'Andratx mit einer geschützten Naturbucht, guten Gastliegeplätzen und hochwertiger Gastronomie – ein perfekter Start- oder Endhafen.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Westen (Serra de Tramuntana, Port de Sóller)</h4>
              <p className="mb-6">
                Die Tramuntana fällt spektakulär ins Meer ab: dramatische Steilwände, Felsformationen und fjordartige Einschnitte prägen die Küstenlinie. Port de Sóller ist der einzige geschützte Hafen an der Westküste – ideal, um Wetterfenster abzuwarten oder die abwechslungsreiche Nord- und Westküste in Etappen zu erkunden. Zwischen Sóller und Sa Calobra finden sich beeindruckende Kulissen, die zum Fotografieren und Schnorcheln einladen.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Norden (Pollensa, Alcúdia, Cap Formentor)</h4>
              <p className="mb-6">
                Der Norden punktet mit Landmarken wie Cap Formentor und weit geschwungenen Buchten. Alcúdia und Pollensa bieten gut ausgerüstete Häfen, zahlreiche Versorgungsoptionen und Sandbuchten mit zuverlässigem Ankergrund. Der Abschnitt eignet sich hervorragend für Crews, die ruhige Ankerplätze schätzen und Tagesetappen flexibel planen möchten.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Osten (Cala d'Or, Porto Cristo)</h4>
              <p className="mb-6">
                Die Ostküste ist ein Mosaik aus sandigen Calas, türkisfarbenen Badebecken und kurzen Distanzen. Cala d'Or überzeugt mit einer modernen Marina, breiter Charterauswahl und einer Promenade voller Restaurants. Porto Cristo bietet einen geschützten Hafen und Zugang zu Höhlen und Stränden – ideal für Kombinationen aus Segeln, Kultur und Familienprogramm.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Süden (Es Trenc, Cabrera-Inselgruppe)</h4>
              <p className="mb-6">
                Südlich von Palma locken feinsandige Strände wie Es Trenc und die Insel Cabrera als mariner Nationalpark. Cabrera ist ein Natur-Highlight und wird über Mooringbojen angelaufen; das Ankern ist dort untersagt. Wer rechtzeitig reserviert, genießt eine Nacht unter sternenklarem Himmel in kristallklarem Wasser – ein unvergesslicher Moment jedes Törns.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Warum Katamarane auf Mallorca besonders beliebt sind</h4>
              <p className="mb-6">
                Katamarane sind auf Mallorca zu Recht stark nachgefragt. Der geringe Tiefgang erlaubt das sichere Anlaufen flacher Sandbuchten, die breite Plattform sorgt für Stabilität auch bei moderatem Schwell, und die großzügigen Innen- und Außenflächen erleichtern den Bordalltag – von Familien mit Kindern bis zur Freundescrew. Mit zwei Maschinen sind Hafenmanöver präzise und stressfrei, die großen Wasser- und Energievolumina ermöglichen lange Ankerphasen ohne Komfortverzicht. Für Inselhopping Mallorca sind Multihulls daher die erste Wahl.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">7-Tage-Törnvorschlag ab Palma de Mallorca (katamaran- & familienfreundlich)</h3>
              
              <div className="space-y-3 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 1 – Palma → Illetes / Portals Nous (8–12 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Check-in, Sicherheitseinweisung, Proviant an Bord. Am Nachmittag ein kurzer Einsegler in die Bucht von Illetes oder vor Portals Nous. Vorzugsweise auf Sandgrund ankern (Posidonia-Seegras meiden), im klaren Wasser baden und den Sonnenuntergang im Cockpit genießen. Perfekt, um Crew und Schiff einzuspielen.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 2 – Portals Nous → Port d'Andratx (18–22 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Gemütlicher Vormittag, später setzt die Thermik ein – ideale Bedingungen für entspanntes Segeln. In Port d'Andratx erwarten Sie Gastliegeplätze, Wasser/Strom, Sanitäranlagen, Technikpartner und eine exzellente Auswahl an Restaurants. Die geschützte Bucht bietet nachts Ruhe und tagsüber kurze Dinghy-Wege.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 3 – Andratx → Port de Sóller (25–30 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Entlang der Tramuntana-Küste segeln Sie an imposanten Steilwänden vorbei. Bei moderatem Schwell spielt der Katamaran seine Stabilitätsvorteile aus. Port de Sóller bietet als sicherer Hafen Infrastruktur, Einkaufsmöglichkeiten und eine besonders stimmungsvolle Kulisse zwischen Bergen und Meer.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 4 – Sóller → Sa Calobra → Pollensa/Alcúdia (30–40 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Frühe Ankunft in Sa Calobra belohnt mit ruhigerem Wasser und weniger Tagesbooten. Danach Kurs gen Norden um Cap Formentor. Ziel sind Alcúdia oder Pollensa – entweder Marina-Liegeplatz oder eine sandige Bucht für eine sternenklare Ankernacht.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 5 – Alcúdia → Cala Mesquida / Cala Ratjada → Cala d'Or (30–35 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Wechsel an die Ostküste: zahlreiche Calas mit Sandgrund, türkisfarbenem Wasser und abwechslungsreicher Szenerie. Cala d'Or überzeugt mit moderner Marina, Supermärkten in Laufweite, Cafés und einem lebhaften, dennoch entspannten Abendflair.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 6 – Cala d'Or → Es Trenc → Cabrera (25–30 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Mittagsstop am Es Trenc für Badepause und Strandspaziergang. Anschließend Richtung Cabrera – Boje im Nationalpark vorab reservieren. In der geschützten Bucht ankern Sie an der Mooring, genießen absolute Ruhe und ein faszinierendes Sternenpanorama.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 7 – Cabrera → Palma (25–30 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Rücktörn in die Bucht von Palma. Nach dem Anlegen bleibt Zeit für einen Stadtbummel: Kathedrale La Seu, Altstadtgassen, Tapas-Bars – der perfekte Abschluss eines vielfältigen Törns.
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg mb-8">
                <p className="text-black">
                  <strong>Tagesrhythmus-Tipp:</strong> In den Sommermonaten baut sich die Seewind-Thermik meist am frühen Nachmittag auf. Wer vormittags zum Baden ankert und nachmittags segelt, kombiniert Badezeit und Segelspaß ideal – besonders angenehm auf einem Katamaran mit großzügigen Decksflächen.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Erreichbarkeit: So kommen Sie bequem nach Mallorca</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Direktflug nach Palma de Mallorca (PMI):</strong> Sehr gute Anbindung aus Deutschland, Österreich, der Schweiz, Frankreich und vielen weiteren Ländern. In der Sommersaison zahlreiche Nonstop-Verbindungen.</li>
                <li><strong>Kurze Wege zu den Charterbasen:</strong> Marinas in Palma liegen 15–25 Minuten per Taxi/Transfer vom Airport; Port d'Andratx, Port de Sóller, Alcúdia und Cala d'Or sind per Straße komfortabel erreichbar.</li>
                <li><strong>Transfer & Proviantservice:</strong> Auf Wunsch organisieren wir private Transfers sowie Proviantierung bis an den Steg – gekühlt, frisch und passend zu Ihrem Törnplan.</li>
                <li><strong>Gepäck & Anreisekomfort:</strong> Für Crews mit viel Ausrüstung empfiehlt sich ein Anreisetag mit frühem Check-in oder Luggage Drop in der Marina, damit Sie entspannt starten.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Marinas & Ausgangshäfen: Top-Infrastruktur rund um die Insel</h3>
              
              <h4 className="text-xl font-semibold mt-6 mb-3">Palma de Mallorca – Charter-Hotspot</h4>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Real Club Náutico de Palma (RCNP) und Club de Mar-Mallorca:</strong> herausragende Kapazitäten, Technikbetriebe, Fuel Dock, Sanitäranlagen, Segelmacher, nautische Ausstatter. Beide Anlagen liegen zentral mit perfekter Stadtnähe – ideal für Sightseeing vor oder nach dem Törn.</li>
                <li><strong>Weitere Palma-Marinas:</strong> Marina Port de Mallorca, Marina Palma Cuarentena, La Lonja – alle mit gut eingespielten Abläufen für Check-in/Check-out, Parkmöglichkeiten und Zugang zu Supermärkten.</li>
              </ul>

              <h4 className="text-xl font-semibold mt-6 mb-3">Port d'Andratx</h4>
              <p className="mb-6">
                Club de Vela mit Gastliegeplätzen, Wasser/Strom, WLAN, Sanitäranlagen; abends stimmungsvolle Restaurants rund um die Bucht. Ein toller Spot für die erste oder letzte Charter-Nacht.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Port de Sóller</h4>
              <p className="mb-6">
                Sicherer Hafen an der Westküste, Marina Tramuntana mit Strom, Wasser, Duschen, Tankmöglichkeit und kurzen Wegen in den Ort. Perfekt als Basis für Ausflüge in die Tramuntana.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Alcúdia</h4>
              <p className="mb-6">
                Alcudiamar: voll ausgestatteter Yachthafen, familienfreundlich, Strandnähe, gute Versorgung. Ideal für Crews, die den Norden intensiver erkunden möchten.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Cala d'Or</h4>
              <p className="mb-6">
                Moderne Marina mit breiter Charterflotte und marinanaher Infrastruktur; die Ostküste lässt sich in kurzen, entspannten Etappen mit vielen Bade- und Fotostopps erleben.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Multihull-Auswahl</h4>
              <p className="mb-6">
                Mallorca bietet eine der größten Katamaran-Flotten im westlichen Mittelmeer – vom kompakten 38-Fuß-Kat bis zur luxuriösen 50+-Fuß-Yacht mit Wassersport-Equipment. Für Katamaran Mallorca empfiehlt sich frühzeitiges Buchen, insbesondere für Termine in der Hauptsaison und zu Ferienzeiten.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele & nautische Besonderheiten</h3>
              
              <h4 className="text-xl font-semibold mt-6 mb-3">Cala d'Or & Cala Figuera (Ostküste)</h4>
              <p className="mb-6">
                Zahlreiche Sandbuchten mit türkisfarbenem Wasser, oft guter Ankergrund und landschaftlich reizvolle Ufer. An Land erwarten Sie Promenaden, Restaurants und kleine Strände – ideal für Crews, die Ruhe und Komfort kombinieren wollen.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Port de Sóller & Sa Calobra (Westküste)</h4>
              <p className="mb-6">
                Die Naturkulisse der Tramuntana macht diesen Abschnitt einzigartig: Felsformationen, Höhlen, tiefe Einschnitte. Sa Calobra ist am Morgen am ruhigsten; später kann Schwell stehen. Port de Sóller bietet verlässlichen Schutz und gute Versorgungsoptionen.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Cap Formentor (Norden)</h4>
              <p className="mb-6">
                Markantes Kap mit möglichen Windbeschleunigungen. Eine sorgfältige Törnplanung mit Blick auf lokale Wind- und Schwellvorhersagen ist hier besonders wichtig. Alcúdia und Pollensa sind nahe sichere Häfen.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Es Trenc (Süden)</h4>
              <p className="mb-6">
                Karibisch anmutender Strand mit seichtem, sandigem Grund. Achten Sie auf Schutzauflagen und auf Posidonia-Seegras: ausschließlich auf Sand ankern und Kette frei von Seegras halten. In sensiblen Zonen sind Mooringbojen vorzuziehen.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Cabrera-Archipel (Nationalpark)</h4>
              <p className="mb-6">
                Ein Höhepunkt vieler Mallorca-Törns. Ankern ist verboten, stattdessen werden Bojen vorab reserviert. Der Naturhafen bietet absolute Ruhe, klares Wasser und einen Himmel voller Sterne – eine unvergessliche Nacht.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Posidonia & Umweltschutz</h4>
              <p className="mb-6">
                Die Balearen schützen Seegraswiesen (Posidonia oceanica) streng. Ankern auf Seegras (auch mit Kette) ist untersagt; nutzen Sie Bojenfelder sowie digitale Karten/Apps zur Erkennung von Seegrasflächen. Kontrollen und empfindliche Bußgelder sind möglich. Nachhaltiges Verhalten – Müllvermeidung, Abwasserentsorgung in der Marina, respektvoller Umgang mit Schutzgebieten – gehört zum guten Ton.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen: Mediterran, thermisch – mit Respekt vor Tramontana/Mistral</h3>
              <p className="mb-4">
                Mallorca liegt im westlichen Mittelmeer mit mediterranem Klima: trockene, heiße Sommer; milde Übergangszeiten.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Sommer:</strong> Häufig Seewind/Thermik entlang der Küste und in der Bucht von Palma. Nachmittags sind 8–18 kn typisch; vormittags herrscht oft Leichtwind – ideal für Bade- und Ankerstopps.</li>
                <li><strong>Tramontana/Mistral-Einfluss:</strong> Nördliche Starkwindlagen können über den Golf von Lion durchgreifen und zu raschem Windanstieg sowie rauerer See führen. Wer Wetterfenster beachtet, genießt dennoch sichere und planbare Etappen.</li>
                <li><strong>Schwell & Kaps:</strong> An exponierten Kaps (Formentor, Cap de ses Salines) kann es zu Beschleunigungszonen und Schwell kommen – früh reffen schont Material und Nerven.</li>
              </ul>

              <h4 className="text-xl font-semibold mt-6 mb-3">Revier-Eignung</h4>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Einsteiger & Familien:</strong> Die vielen geschützten Buchten, kurzen Distanzen und die verlässliche Sommerthermik machen Mallorca ideal – besonders mit Katamaran (geringe Krängung, viel Platz, sicherer Zugang zu flachen Buchten).</li>
                <li><strong>Erfahrene Skipper:</strong> Anspruchsvollere Passagen an markanten Kaps und entlang der Westküste bieten sportliche Abwechslung. Mit vorausschauender Planung lässt sich die Insel in einer Woche entspannt umrunden oder in zwei Wochen in Ruhe entdecken.</li>
              </ul>

              <h4 className="text-xl font-semibold mt-6 mb-3">Warum Katamaran bei wechselnden Bedingungen?</h4>
              <p className="mb-6">
                Katamarane reduzieren die Krängung, bieten hohe Aufbautenfreiheit und ruhige Wohnbereiche – das sorgt für entspanntes Bordleben, selbst bei moderatem Schwell. Großzügige Wasser-/Energiesysteme und Dinghy-Plattformen erleichtern das Ankern über mehrere Tage.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit für Yachtcharter Mallorca</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Mai–Juni & September–Oktober:</strong> Für viele Crews die Bestzeit. Angenehme Temperaturen, moderates Besucheraufkommen, verlässliche Winde – perfekte Balance aus Segeln, Baden und Landprogramm.</li>
                <li><strong>Juli–August (Hauptsaison):</strong> Maximale Sonnenstunden, warme Abende, lebhafte Häfen. Frühzeitige Bojen- und Liegeplatzreservierung ist ratsam (insbesondere Cabrera und bekannte Hotspots).</li>
                <li><strong>April & November:</strong> Ruhigere Monate mit Chance auf leere Buchten und mildes Wetter. Wetterfenster im Blick behalten, da Starkwindlagen möglich sind.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Sicherheit, Lizenzen & Standards</h3>
              <p className="mb-6">
                Für das Chartern in Spanien wird ein international anerkannter Bootsführerschein benötigt (z. B. ICC oder ein gleichwertiger nationaler Schein). Liegt keine Lizenz vor, kann ein Skipper oder eine Crew gebucht werden. Alle Charteryachten erfüllen spanische Sicherheitsstandards und werden regelmäßig gewartet. Zur Pflichtausrüstung zählen u. a. Rettungsmittel, Signalmittel, Feuerlöscher und Navigationsausrüstung. Ein Skipper-Briefing bei der Übergabe klärt Revierbesonderheiten, Ein- und Ausklarierung in den Marinas, Notfallkontakte sowie lokale Vorschriften – einschließlich Schutzzonen und Ankerregeln (Posidonia).
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Proviantierung & Services</h3>
              <p className="mb-6">
                Rund um Palma und in allen größeren Häfen (Andratx, Sóller, Alcúdia, Cala d'Or) finden Sie Supermärkte, Bäckereien, Fischläden, nautische Ausstatter und Fuel Docks. Auf Wunsch organisieren wir Vorab-Proviantlieferungen direkt an den Steg – inklusive Frischeprodukten, Getränken, Eis, Kühl- und Tiefkühlware. Viele Marinas bieten Wäschereien, Duschen, WLAN und Technikbetriebe, sodass Wartung und kleinere Reparaturen während des Törns unkompliziert möglich sind.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Fazit: Warum Yachtcharter Mallorca – besonders als Katamaran Mallorca</h3>
              <p className="mb-6">
                Mallorca vereint mediterranes Flair, abwechslungsreiche Küstenlandschaften und eine erstklassige maritime Infrastruktur. Von der Weltstadt Palma über stille Naturbuchten bis hin zu spektakulären Steilküsten bietet die Insel alles, was einen gelungenen Törn ausmacht: kurze Schläge, verlässliche Sommerwinde, hervorragende Häfen und vielfältige Landaktivitäten. Der Katamaran ist für Crews und Familien die Komfort-Wahl: mehr Platz, stabile Plattform, geringer Tiefgang für die schönsten Sand-Ankerplätze und entspannte Nächte in Buchten. Hinzu kommen klare Umweltregeln (Posidonia-Schutz), die das Revier in seiner Schönheit bewahren – mit Bojenfeldern und digitalen Karten, die die sichere Ankerplatzwahl erleichtern. Wer Servicequalität, kulinarische Vielfalt und professionelle Abläufe schätzt, findet auf Mallorca ein Charterrevier, das von der ersten Meile an überzeugt.
              </p>
            </div>
          </div>

          {/* CTA - Jetzt Mallorca Charter anfragen */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Jetzt Yachtcharter Mallorca anfragen
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Ob Bareboat, Skippered, Segelyacht, Katamaran oder Motorboot – wir beraten zu Yachtwahl, Routenplanung, Bojen-/Liegeplatz-Reservierungen (Cabrera!), Transfers und Proviantierung. Sichern Sie sich Ihren Wunschtermin für die Hauptsaison Mai–Oktober und starten Sie Ihren persönlichen Traumtörn ab Palma, Andratx, Sóller, Alcúdia oder Cala d'Or.
              </p>
              <CharterRequestForm>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium" size="lg">
                  Mallorca Charter anfragen
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
    </>;
};
export default Mallorca;