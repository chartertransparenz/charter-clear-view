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
import { BREADCRUMB_CARIBBEAN } from "@/seo/breadcrumbs.caribbean";

const Antigua = () => {
  const m = META.antigua;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { label: "Lage", value: "Leeward Inseln, Karibik" },
    { label: "Beste Zeit", value: "Dezember - Mai" },
    { label: "Geeignet für", value: "Einsteiger & Fortgeschrittene" },
    { label: "Besonderheit", value: "365 Strände & Segeltradition" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Meta 
        title={m.title}
        description={m.description}
        canonical={m.canonical()}
        ogImage={m.ogImage}
      />
      <JsonLd json={BREADCRUMB_CARIBBEAN.antigua} />
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/092bc1eb-a5ff-4dd3-9b22-1838f44ee4c6.webp"
          alt="Antigua Yachtcharter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇦🇬</span>
            <Badge className="bg-blue-600 text-white">Segeltradition</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Antigua</h1>
          <p className="text-lg text-white/90 max-w-md">
            365 Strände & English Harbour – Karibik mit Tradition
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
                <BreadcrumbPage>Antigua</BreadcrumbPage>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Karte von Antigua</h2>
            <p className="text-gray-600">Entdecken Sie English Harbour & die 365 Strände</p>
          </div>
          <TerritoryMap 
            region="Antigua"
            center={{ lat: 17.0608, lng: -61.7964 }}
            zoom={11}
            maptype="satellite"
            className="shadow-lg"
          />
        </div>

        {/* Main Content Wrapper */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Antigua: English Harbour, Nelson's Dockyard & karibisches Segelerbe</h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Antigua ist das Herzstück der Leeward Islands und ein Revier mit tiefer Segeltradition. Die Insel beherbergt den legendären English Harbour mit Nelson's Dockyard, eine UNESCO-Weltkulturerbestätte und historischer Stützpunkt der Royal Navy. Heute ist Antigua ein erstklassiges Charterrevier mit modernen Marinas, 365 Stränden (einen für jeden Tag des Jahres) und perfekten Bedingungen für Bareboat-Charter.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Die Insel liegt im Zentrum der Leeward Islands und bietet ideale Ausgangspunkte für Törns nach Barbuda, Montserrat, Nevis, St. Kitts und weiter südlich zu den französischen Inseln Guadeloupe und Martinique. Die Passatwinde sind stabil, die Distanzen überschaubar und die Marina-Infrastruktur erstklassig.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Für wen geeignet & Schwierigkeitsgrad</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Antigua ist ideal für Segler mit Erfahrung im Passatrevier. Die konstanten NO-Winde (15-22 kn) sorgen für sportliches, aber gut kontrollierbares Segeln. Einsteiger sollten idealerweise bereits Bareboat-Erfahrung haben oder einen Skipper chartern. Fortgeschrittene Segler schätzen das Revier für längere Etappen zu Nachbarinseln und die Möglichkeit, an der berühmten Antigua Sailing Week (April/Mai) teilzunehmen.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Charterbasen & Infrastruktur</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Die Hauptcharterbasen liegen in English Harbour (Antigua Yacht Club Marina, Falmouth Harbour Marina) und im Jolly Harbour an der Westküste. Beide bieten Full-Service mit Diesel, Wasser, Strom, Proviantierung und technischem Support. English Harbour ist das historische Zentrum mit kolonialem Charme, Jolly Harbour ist moderner und familienfreundlicher mit Resort-Charakter.
              </p>
              <p className="text-gray-700">
                Antigua verfügt über einen internationalen Flughafen (VC Bird International Airport) mit direkten Verbindungen aus Europa und Nordamerika. Transfers zu den Marinas dauern 30-45 Minuten.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">Törnempfehlung: 7 Tage ab English Harbour</h3>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 1 – English Harbour → Green Island</h4>
                <p className="text-gray-700">Check-in, Sicherheitsbriefing, kurzer Shakedown-Schlag zur nahegelegenen Green Island. Schnorcheln & erste Nacht an Mooring.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 2 – Green Island → Barbuda</h4>
                <p className="text-gray-700">Nördlicher Schlag zur flachen Nachbarinsel Barbuda. Traumhafte rosa Sandstrände, Fregattvögel-Kolonie und absolute Ruhe. Mooring oder Anker in Low Bay.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 3 – Barbuda → Nevis</h4>
                <p className="text-gray-700">Längerer Schlag (ca. 35 NM) nach Süden zur vulkanischen Insel Nevis. Ankern in Charlestown Bay, Landgang in der historischen Hauptstadt.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 4 – Nevis → St. Kitts</h4>
                <p className="text-gray-700">Kurze Überfahrt zur Schwesterinsel St. Kitts. Ankern in Basseterre oder in der ruhigen White House Bay. UNESCO-Festung Brimstone Hill besuchen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 5 – St. Kitts → Montserrat</h4>
                <p className="text-gray-700">Schlag zur "Karibik-Pompeji" Montserrat. Aktiver Vulkan, verlassene Städte unter Asche, dramatische Landschaft. Ankern in Little Bay.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 6 – Montserrat → Antigua Westküste</h4>
                <p className="text-gray-700">Rückkehr nach Antigua, Stopp an der Westküste (Jolly Harbour oder Deep Bay). Schnorcheln am Wrack Andes, Strandtag.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 7 – Westküste → English Harbour</h4>
                <p className="text-gray-700">Entspannte Rückfahrt entlang der Südküste nach English Harbour. Tanken, Check-out, letzter Abend in historischem Ambiente.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Wind & Wetter</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Antigua liegt voll im NO-Passat. Von Dezember bis Mai wehen die Winde stabil mit 15-22 kn, gelegentlich bis 25 kn. Die Luv-Seite (Ost/Nordost) kann wellig sein, die Lee-Seite (West/Süd) ist deutlich ruhiger. Im Sommer (Juni-August) fällt der Wind etwas ab, kurze Squalls sind normal. Die Hurrikansaison (August-Oktober) sollte gemieden werden.
              </p>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Beste Reisezeit</h4>
                <p className="text-gray-700">
                  Dezember bis Mai ist die Hauptsaison mit stabilen Passaten und wenig Regen. April/Mai ist Zeit der Antigua Sailing Week – das Revier ist voll, aber die Stimmung einzigartig. Juni bis November ist off-season mit günstigeren Preisen, aber Hurrikanrisiko.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 rounded-lg mt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Bereit für Ihren Antigua-Charter?
                </h3>
                <p className="mb-6 text-gray-600">
                  Segeln Sie von English Harbour aus zu den schönsten Inseln der Leewards – mit Tradition, Stil und karibischem Flair.
                </p>
                <CharterRequestForm>
                  <Button size="lg">
                    Jetzt Antigua Charter anfragen
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

export default Antigua;
