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

const StVincentGrenadinen = () => {
  const m = META.stVincentGrenadinen;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { label: "Lage", value: "Windward Inseln, Karibik" },
    { label: "Beste Zeit", value: "Dezember - Mai" },
    { label: "Geeignet für", value: "Fortgeschrittene Segler" },
    { label: "Besonderheit", value: "Tobago Cays & Inselhüpfen" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Meta 
        title={m.title}
        description={m.description}
        canonical={m.canonical()}
        ogImage={m.ogImage}
      />
      <JsonLd json={BREADCRUMB_CARIBBEAN.stVincentGrenadinen} />
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/092bc1eb-a5ff-4dd3-9b22-1838f44ee4c6.png"
          alt="St. Vincent & Grenadinen Yachtcharter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇻🇨</span>
            <Badge className="bg-green-600 text-white">Tobago Cays</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">St. Vincent & Grenadinen</h1>
          <p className="text-lg text-white/90 max-w-md">
            Karibik wie im Bilderbuch – Inselhüpfen pur
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
                <BreadcrumbPage>St. Vincent & Grenadinen</BreadcrumbPage>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Karte von St. Vincent & Grenadinen</h2>
            <p className="text-gray-600">Entdecken Sie Tobago Cays, Bequia & Mustique</p>
          </div>
          <TerritoryMap 
            region="St. Vincent & Grenadinen"
            center={{ lat: 12.9843, lng: -61.2872 }}
            zoom={10}
            maptype="satellite"
            className="shadow-lg"
          />
        </div>

        {/* Main Content Wrapper */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter St. Vincent & Grenadinen: Tobago Cays, Bequia & karibisches Inselhüpfen</h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Die Grenadinen sind das Traumrevier für klassisches Inselhüpfen: Eine Perlenkette von 32 Inseln erstreckt sich über 60 Seemeilen zwischen St. Vincent im Norden und Grenada im Süden. Das Herzstück sind die Tobago Cays – ein geschütztes Meeresschutzgebiet mit türkisfarbenem Wasser, weißen Sandstränden und Schildkröten, die direkt am Boot vorbeischwimmen. Hier wurden Szenen für "Fluch der Karibik" gedreht.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Die Inselkette bietet perfekte Bedingungen für mehrtägige Törns: Bequia mit seinem charmanten Port Elizabeth, das exklusive Mustique (Hideaway der Stars), das ursprüngliche Mayreau, Canouan mit Luxus-Resorts und Union Island als südlichster Stützpunkt vor Grenada. Die Distanzen zwischen den Inseln sind überschaubar (5-15 NM), die Ankerbuchten traumhaft.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Für wen geeignet & Schwierigkeitsgrad</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Die Grenadinen sind ideal für erfahrene Bareboat-Segler. Die stabilen Passatwinde (18-25 kn) sorgen für sportliches Segeln, die Etappen sind zwar kurz, aber durch Strömung und Wellengang teilweise anspruchsvoll. Viele Ankerbuchten liegen offen zur atlantischen Dünung – gute Ankertechnik ist wichtig. Einsteiger sollten einen Skipper chartern oder bereits BVI/USVI-Erfahrung haben.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Charterbasen & Infrastruktur</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Die Hauptcharterbasis liegt in Blue Lagoon auf St. Vincent – eine geschützte Bucht südlich der Hauptstadt Kingstown. Die Marina bietet Full-Service mit Diesel, Wasser, Strom und Proviantierung. Alternative Basen gibt es auf Union Island (südlicher Einstieg). Die Infrastruktur ist einfacher als in BVI/USVI – ursprünglicher, aber weniger kommerziell.
              </p>
              <p className="text-gray-700">
                Der E.T. Joshua Airport (SVD) auf St. Vincent und Argyle International Airport (AIA) werden aus Europa mit Umstieg angeflogen. Transfer zur Blue Lagoon dauert 20-30 Minuten.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">Törnempfehlung: 7 Tage ab Blue Lagoon</h3>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 1 – Blue Lagoon (St. Vincent) → Bequia</h4>
                <p className="text-gray-700">Check-in, Sicherheitsbriefing, Schlag nach Süden zur charmanten Insel Bequia. Ankern in Admiralty Bay (Port Elizabeth), entspannter Inselort mit Restaurants und Bars.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 2 – Bequia → Mustique</h4>
                <p className="text-gray-700">Kurzer Schlag zur exklusiven Privatinsel Mustique. Ankern in Britannia Bay, Strandspaziergang, Schnorcheln. Teures Pflaster, aber traumhafte Kulisse.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 3 – Mustique → Tobago Cays</h4>
                <p className="text-gray-700">Das Highlight: Tobago Cays Meeresschutzgebiet. Ankern zwischen den fünf kleinen Inseln, Schnorcheln mit Schildkröten, Strandtag auf unbewohnten Inseln. Übernachten an Mooring.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 4 – Tobago Cays → Union Island</h4>
                <p className="text-gray-700">Kurzer Schlag zur südlichsten Insel der Grenadinen. Clifton (Hauptort) für Proviant, Wasser, Diesel. Abends in Chatham Bay – ruhige Ankerbucht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 5 – Union Island → Mayreau</h4>
                <p className="text-gray-700">Rückweg nach Norden, Stopp auf der kleinen Insel Mayreau. Salt Whistle Bay – Postkarten-Bucht mit Palmen und weißem Sand. Sehr entspannt.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 6 – Mayreau → Canouan</h4>
                <p className="text-gray-700">Segeln zur länglichen Insel Canouan mit ihren weißen Stränden. Ankern in Charlestown Bay oder vor dem Tamarind Beach Hotel. Wassersport, Schnorcheln.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 7 – Canouan → Blue Lagoon</h4>
                <p className="text-gray-700">Letzter Schlag zurück nach St. Vincent. Früher Start empfohlen. Tanken, Check-out, letzter Abend auf St. Vincent.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Wind & Wetter</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Die Grenadinen liegen im vollen Passat. Von Dezember bis Mai wehen die Winde stabil mit 18-25 kn aus Nordost – sportliches Segeln ist garantiert. Die atlantische Dünung ist spürbar, insbesondere an Ostankern. Im Sommer (Juni-August) fällt der Wind etwas ab, kurze Squalls sind normal. Die Hurrikansaison (August-Oktober) sollte gemieden werden.
              </p>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Beste Reisezeit</h4>
                <p className="text-gray-700">
                  Dezember bis Mai ist die Hauptsaison mit stabilen Passaten, wenig Regen und perfekten Segelbedingungen. Januar-März sind die trockensten Monate. Juni bis November ist off-season mit günstigeren Preisen, aber Hurrikanrisiko.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 rounded-lg mt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Bereit für Ihren Grenadinen-Charter?
                </h3>
                <p className="mb-6 text-gray-600">
                  Segeln Sie durch die Grenadinen zu den Tobago Cays – Karibik wie im Bilderbuch.
                </p>
                <CharterRequestForm>
                  <Button size="lg">
                    Jetzt Grenadinen Charter anfragen
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

export default StVincentGrenadinen;
