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

const StMartin = () => {
  const m = META.stMartin;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { label: "Lage", value: "Leeward Inseln, Karibik" },
    { label: "Beste Zeit", value: "Dezember - Mai" },
    { label: "Geeignet für", value: "Einsteiger & Fortgeschrittene" },
    { label: "Besonderheit", value: "Französisch & Niederländisch" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Meta 
        title={m.title}
        description={m.description}
        canonical={m.canonical()}
        ogImage={m.ogImage}
      />
      <JsonLd json={BREADCRUMB_CARIBBEAN.stMartin} />
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/092bc1eb-a5ff-4dd3-9b22-1838f44ee4c6.webp"
          alt="St. Martin Yachtcharter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇫🇷</span>
            <span className="text-3xl">🇳🇱</span>
            <Badge className="bg-blue-600 text-white">Zwei Nationen</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">St. Martin / Sint Maarten</h1>
          <p className="text-lg text-white/90 max-w-md">
            Französischer Charme & niederländische Lebensfreude
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
                <BreadcrumbPage>St. Martin</BreadcrumbPage>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Karte von St. Martin / Sint Maarten</h2>
            <p className="text-gray-600">Entdecken Sie Marigot, Orient Bay & Simpson Bay</p>
          </div>
          <TerritoryMap 
            region="St. Martin"
            center={{ lat: 18.0708, lng: -63.0501 }}
            zoom={11}
            maptype="satellite"
            className="shadow-lg"
          />
        </div>

        {/* Main Content Wrapper */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter St. Martin: Französisches & niederländisches Flair in der Karibik</h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              St. Martin / Sint Maarten ist die einzige Insel der Welt, die zwischen zwei Nationen geteilt ist – Frankreich im Norden und den Niederlanden im Süden. Diese einzigartige Konstellation macht das Segelrevier besonders reizvoll: Französische Patisserien und Weine auf der einen Seite, niederländische Casinos und Duty-Free-Shopping auf der anderen. Die Insel ist ein erstklassiger Ausgangspunkt für Törns zu Anguilla, St. Barths und den nördlichen Leeward Islands.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Die Marina-Infrastruktur ist exzellent: Simpson Bay Lagoon ist eine der größten Binnenlagunen der Karibik und beherbergt Dutzende Charterbasen und Werften. Marigot im Norden bietet französisches Flair und erstklassige Restaurants. Orient Bay ist der berühmteste Strand der Insel.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Für wen geeignet & Schwierigkeitsgrad</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              St. Martin ist ideal für Segler aller Erfahrungsstufen. Die kurzen Distanzen zu Nachbarinseln (Anguilla, St. Barths, Saba) machen das Revier überschaubar, während die stabilen Passatwinde (15-22 kn) für sportliches Segeln sorgen. Einsteiger schätzen die geschützte Simpson Bay Lagoon, Fortgeschrittene die Möglichkeit für anspruchsvollere Überfahrten.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Charterbasen & Infrastruktur</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Die Hauptcharterbasen liegen in der Simpson Bay Lagoon (niederländische Seite) und in Marigot (französische Seite). Simpson Bay ist die größte und modernste Marina mit Full-Service: Diesel, Wasser, Strom, Proviantierung, technischer Support und Duty-Free-Einkauf. Die Lagune ist über eine Klappbrücke mit dem Meer verbunden – Öffnungszeiten beachten.
              </p>
              <p className="text-gray-700">
                Der Princess Juliana International Airport (SXM) liegt direkt neben der Lagune – Transfers dauern 10-15 Minuten. Berühmt ist der Flughafen für Landeanflüge direkt über Maho Beach.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">Törnempfehlung: 7 Tage ab Simpson Bay</h3>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 1 – Simpson Bay → Marigot</h4>
                <p className="text-gray-700">Check-in, Sicherheitsbriefing, kurzer Schlag um die Nordküste nach Marigot. Ankern in der Bucht, französisches Dinner an Land.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 2 – Marigot → Anguilla</h4>
                <p className="text-gray-700">Kurze Überfahrt (ca. 6 NM) zur britischen Nachbarinsel Anguilla. Ankern in Road Bay, traumhafte weiße Strände, entspannte Atmosphäre.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 3 – Anguilla → Prickly Pear Cays</h4>
                <p className="text-gray-700">Tagesausflug zu den unbewohnten Prickly Pear Cays vor Anguilla. Schnorcheln, Strandtag, zurück nach Road Bay oder weiter nach Sandy Island.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 4 – Anguilla → St. Barths</h4>
                <p className="text-gray-700">Längerer Schlag (ca. 20 NM) nach Südosten zur glamourösen Insel St. Barths. Ankern in Gustavia, dem schicken Hauptort mit französischem Luxus-Flair.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 5 – St. Barths Buchten</h4>
                <p className="text-gray-700">Inseltag auf St. Barths: Colombier Bay, Anse de Grand Cul-de-Sac, Anse de Gouverneur. Schnorcheln, Strandbars, französische Küche.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 6 – St. Barths → Orient Bay (St. Martin)</h4>
                <p className="text-gray-700">Rückfahrt nach St. Martin, Stopp in Orient Bay – dem bekanntesten Strand der Insel. Ankern oder Mooring, Wassersport, Strandrestaurants.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 7 – Orient Bay → Simpson Bay</h4>
                <p className="text-gray-700">Entspannte Südfahrt zurück durch die Klappbrücke in die Lagune. Tanken, Check-out, letzter Abend mit Blick auf die Landeanflüge am Maho Beach.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Wind & Wetter</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                St. Martin liegt voll im NO-Passat. Von Dezember bis Mai wehen die Winde stabil mit 15-22 kn aus Nordost. Die Luv-Küsten (Nordost) können wellig sein, die Lee-Seite (Südwest/Lagune) ist ruhig. Im Sommer (Juni-August) fällt der Wind etwas ab, kurze Squalls sind normal. Die Hurrikansaison (August-Oktober) sollte gemieden werden.
              </p>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Beste Reisezeit</h4>
                <p className="text-gray-700">
                  Dezember bis Mai ist die Hauptsaison mit stabilen Passaten, wenig Regen und perfekten Segelbedingungen. März ist Hochsaison (Spring Break), Juni bis November ist off-season mit günstigeren Preisen, aber Hurrikanrisiko.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 rounded-lg mt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Bereit für Ihren St. Martin Charter?
                </h3>
                <p className="mb-6 text-gray-600">
                  Segeln Sie von St. Martin aus zu den schönsten Inseln der nördlichen Karibik – mit französischem Charme und niederländischer Lebensfreude.
                </p>
                <CharterRequestForm>
                  <Button size="lg">
                    Jetzt St. Martin Charter anfragen
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

export default StMartin;
