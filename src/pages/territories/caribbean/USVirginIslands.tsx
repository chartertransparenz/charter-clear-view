
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import TerritoryMap from "@/components/TerritoryMap";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Meta } from "@/seo/Meta";
import { META } from "@/seo/meta.config";
import { JsonLd } from "@/seo/JsonLd";


const USVirginIslands = () => {
  const m = META.usvi;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://chartertransparenz.de/" },
      { "@type": "ListItem", "position": 2, "name": "Reviere", "item": "https://chartertransparenz.de/#reviere" },
      { "@type": "ListItem", "position": 3, "name": "Karibik", "item": "https://chartertransparenz.de/reviere/karibik" },
      { "@type": "ListItem", "position": 4, "name": "USVI", "item": "https://chartertransparenz.de/reviere/karibik/usvi" }
    ]
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { label: "Lage", value: "Kleine Antillen, Karibik" },
    { label: "Beste Zeit", value: "Dezember - April" },
    { label: "Geeignet für", value: "Einsteiger & Familien" },
    { label: "Besonderheit", value: "US-Territorium mit Line-of-sight Segeln" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Meta 
        title={m.title}
        description={m.description}
        canonical={m.canonical()}
        ogImage={m.ogImage}
      />
      <JsonLd json={breadcrumbJsonLd} />
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/808a1327-1e02-46a0-abc3-90d96bd5667a.png"
          alt="Karibische Bucht US Virgin Islands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇺🇸</span>
            <Badge className="bg-blue-600 text-white">Top Karibik-Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">US Virgin Islands</h1>
          <p className="text-lg text-white/90 max-w-md">
            USVI - Amerikanischer Komfort trifft Karibikflair
          </p>
        </div>
        <Link 
          to="/reviere/karibik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Karibik
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
                <BreadcrumbLink asChild>
                  <Link to="/#reviere">Reviere</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/karibik">Karibik</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>US Virgin Islands</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-300 text-center">
              <h3 className="font-bold text-gray-800 mb-1">{fact.label}</h3>
              <p className="text-gray-600 text-sm">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Interactive Map */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Karte der U.S. Virgin Islands</h2>
            <p className="text-gray-600">Entdecken Sie die Schönheit der amerikanischen Jungferninseln</p>
          </div>
          <TerritoryMap 
            region="U.S. Virgin Islands"
            center={{ lat: 18.3418, lng: -64.9307 }}
            zoom={11}
            maptype="satellite"
            className="shadow-lg"
          />
        </div>

        {/* Main Content Wrapper */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Main Description */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter U.S. Virgin Islands (USVI): St. Thomas, St. John & St. Croix – Karibikklassiker im Passat</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Stellen Sie sich ein Revier vor, in dem das Wasser wie gebläuter Kristall funkelt, Pelikane im Abendlicht über stillen Buchten kreisen und die Passatbrise Ihr Segel sanft spannt – willkommen in den U.S. Virgin Islands. Zwischen dem vibrierenden St. Thomas, dem grün schimmernden Naturjuwel St. John und dem kulturreichen St. Croix erleben Sie Karibik pur: kurze, übersichtliche Schläge, Bilderbuchstrände und Abende, die nach Salz, Limette und Steel Drums klingen. Ob entspanntes Inselhüpfen auf dem Katamaran oder sportlichere Etappen unter Segelyacht – hier entfaltet jeder Törn seinen eigenen Rhythmus.
            </p>

            {/* Für wen geeignet */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Für wen geeignet & Schwierigkeitsgrad
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Die USVI sind ideal für Einsteiger, Familien und Genießer: line-of-sight-Navigation, viele Mooringfelder und geschützte Buchten machen das Revier planbar und stressfrei. Ambitionierte Skipper freuen sich in der Winter-/Frühjahrssaison über frische Passate und – bei passendem Wetterfenster – den Abstecher nach St. Croix. Insgesamt gilt das Revier als leicht bis moderat; Aufmerksamkeit erfordern Riffe, gelegentlicher Nordschwell und dichter Verkehr in sehr beliebten Buchten.
            </p>

            {/* Besonderheiten - Nested Box */}
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Besonderheiten, Regeln & Umwelt
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Große Teile der Gewässer um St. John gehören zum Virgin Islands National Park. Dort gelten klare Mooring- und Ankerregeln: Übernachtungen erfolgen überwiegend an Park-Moorings, Ankern ist zum Schutz von Korallen und Seegras nur in definierten Bereichen erlaubt. Zusätzlich können für längeres Übernachten vor Anker sowie bestimmte Charterkonstellationen Anker- oder Cruising-Permits der Behörde U.S. Virgin Islands Department of Planning and Natural Resources (DPNR) erforderlich sein. Am besten klären Sie vorab mit Ihrem Charteranbieter, ob diese Genehmigungen bereits im Charterpaket enthalten sind oder ob Sie sie selbst beantragen müssen. Bitte respektieren Sie Badezonen, Geschwindigkeitsbegrenzungen in Häfen und sensible Lebensräume – so bleibt das Revier intakt und Ihre Nächte ruhiger.
              </p>
            </div>

            {/* Charterbasen */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Charterbasen & Infrastruktur
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Ihr Startpunkt ist meist St. Thomas:
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">– Yacht Haven Grande (Charlotte Amalie):</h4>
                <p className="text-gray-700 ml-4">Full-Service, ideal für Crewwechsel und Proviantierung.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">– Crown Bay Marina (West Charlotte Amalie):</h4>
                <p className="text-gray-700 ml-4">große Tankanlage, Werkstätten, Shops.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">– American Yacht Harbor (Red Hook, East End):</h4>
                <p className="text-gray-700 ml-4">schneller Sprung in die Mooringbuchten von St. John.</p>
              </div>
              <p className="text-gray-700 mt-4">
                Auf St. John gibt es keine Marinas – Sie liegen an Moorings in den Parkbuchten, was das Naturerlebnis besonders intensiv macht.
              </p>
            </div>

            {/* Törnempfehlung */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Törnempfehlung: 7 Tage ab St. Thomas</h3>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 1 – St. Thomas (Yacht Haven Grande/Red Hook) → Caneel/Honeymoon Bay (St. John)</h4>
                <p className="text-gray-700">Check-in, Sicherheitsbriefing, kurzer Einweisungsschlag. Erste Nacht an Park-Mooring in glasklarer Bucht, Sundowner an Bord.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 2 – North Shore St. John (Trunk, Hawksnest, Maho/Francis Bay)</h4>
                <p className="text-gray-700">Buchtenhopping und Schnorcheln; frühes Eintreffen sichert Moorings. Am Nachmittag leichte Landgänge auf Trails mit Meerblick.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 3 – Leinster Bay / Waterlemon Cay → Coral Bay (St. John)</h4>
                <p className="text-gray-700">Schnorchelspot am Vormittag, danach ruhiger Dorfcharme in Coral Bay mit kleinen Restaurants am Wasser.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 4 – St. John Südost (Salt Pond / Great Lameshur)</h4>
                <p className="text-gray-700">Viel Natur, kurze Wanderungen, Sterne zählen an ruhiger Mooring. Alternativ je nach Wetter zurück an die North Shore.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 5 – St. John → Lovango Cay / Maho Bay</h4>
                <p className="text-gray-700">Entspannter Inselbogen, Schildkröten-Spots, gemütlicher Nachmittag am Strand.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 6 – St. John → Christmas Cove (Great St. James) → St. Thomas</h4>
                <p className="text-gray-700">Letzte Nacht an Moorings in Christmas Cove mit relaxtem Inselflair und kurzer Rückfahrt zur Basis am Folgetag.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 7 – Rückkehr St. Thomas</h4>
                <p className="text-gray-700">Tanken, Auscheck, Zeit für einen Bummel durch Charlotte Amalie.</p>
              </div>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed italic">
              Hinweis: Nordoffene Buchten können bei Nordschwell unruhig sein; weichen Sie dann auf südlich geschützte Anker- und Mooringplätze aus.
            </p>

            {/* Wind und Wetter - Nested Box */}
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Wind & Wetter
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ganzjährig prägen Passatwinde aus NE–E das Revier. Im Winter und Frühjahr wehen sie meist moderat bis frisch und sorgen für zügiges, aber gut kontrollierbares Segeln; im Sommer fallen sie oft leichter aus, gelegentliche Squalls bringen kurze Schauer und Böen. Nordschwell kann nördlich offene Buchten zeitweise rollig machen, im Lee der Inseln ist es deutlich ruhiger. Der Tidenhub ist gering, dennoch in Engstellen Set & Drift im Blick behalten.
              </p>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Beste Reisezeit</h4>
                <p className="text-gray-700">
                  Dezember bis April gilt als klassische Hochsaison: verlässliche Passate, wenig Regen, hervorragende Sicht. April bis Juni ist die „Sweet Spot"-Zeit mit warmem, meist ruhigerem Wetter und weniger Andrang. Juni bis November fällt in die Hurrikansaison (Peak häufig August–Oktober): Wer dann segelt, plant flexibel, beobachtet Vorhersagen eng und klärt Absicherungen mit Vercharterer und Versicherung. Grundsätzlich sind die USVI ganzjährig segelbar – warmes Wasser und tropische Temperaturen sorgen stets für Badelaune.
                </p>
              </div>
            </div>

            {/* CTA within main content */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 rounded-lg mt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Bereit für Ihren USVI-Charter?
                </h3>
                <p className="mb-6 text-gray-600">
                  Amerikanischer Komfort trifft karibisches Flair – erleben Sie line-of-sight Segeln zwischen traumhaften Inseln im konstanten Passatwind.
                </p>
                <CharterRequestForm>
                  <Button size="lg">
                    Jetzt USVI Charter anfragen
                  </Button>
                </CharterRequestForm>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default USVirginIslands;
