import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import destinationBvi from "@/assets/destination-bvi.jpg";

const BVI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [
    { label: "Lage", value: "Kleine Antillen, Karibik" },
    { label: "Beste Zeit", value: "Dezember - Mai" },
    { label: "Geeignet für", value: "Einsteiger & Familien" },
    { label: "Besonderheit", value: "Line-of-sight Segeln" }
  ];

  const regions = [
    {
      name: "Tortola",
      bases: ["Road Town", "Nanny Cay"],
      description: "Hauptinsel mit modernen Marinas und Charter-Basen"
    },
    {
      name: "Virgin Gorda", 
      bases: ["Spanish Town", "Bitter End"],
      description: "The Baths und exklusive Resorts"
    },
    {
      name: "Jost Van Dyke",
      bases: ["Great Harbour", "White Bay"],
      description: "Berühmt für Soggy Dollar Bar und entspannte Atmosphäre"
    },
    {
      name: "Anegada",
      bases: ["Setting Point"],
      description: "Flaches Korallenatoll mit weißen Sandstränden"
    }
  ];

  const highlights = [
    "Traumhafte kurze Tagesetappen",
    "Karibik-Feeling pur", 
    "Perfekt für Einsteiger",
    "Line-of-sight Segeln",
    "Top Charter-Logistik",
    "Stabile Passatwinde",
    "Warmes, türkises Wasser",
    "Entspannte Insel-Atmosphäre"
  ];

  const routes = [
    "Tortola - Virgin Gorda - The Baths",
    "Jost Van Dyke - Sandy Cay", 
    "Norman Island - Peter Island",
    "Anegada - Coral World"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/63f7b57f-ee43-43f7-b1e6-c4720b7ad0ba.png"
          alt="BVI Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇻🇬</span>
            <Badge className="bg-green-600 text-white">Top #7 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Britische Jungferninseln</h1>
          <p className="text-lg text-white/90 max-w-md">
            BVI - Das perfekte Karibik-Charterrevier für Einsteiger
          </p>
        </div>
        <Link 
          to="/" 
          className="absolute top-6 left-6"
          onClick={() => {
            setTimeout(() => {
              document.getElementById('reviere')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
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
                <BreadcrumbPage>Britische Jungferninseln</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-orange-500 mb-2">
                {index === 0 && <MapPin className="w-6 h-6 mx-auto" />}
                {index === 1 && <Sun className="w-6 h-6 mx-auto" />}
                {index === 2 && <Anchor className="w-6 h-6 mx-auto" />}
                {index === 3 && <Star className="w-6 h-6 mx-auto" />}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{fact.label}</h3>
              <p className="text-gray-600 text-sm">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter British Virgin Islands (BVI): Inselhüpfen im Passatwind zwischen Korallenriffen und Karibikflair</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Setzen Sie die Segel für einen der legendärsten Törns der Welt: Die British Virgin Islands sind das synonyme Revier für entspanntes Inselhopping, glasklare Buchten und beständige Passatwinde. Ein Yachtcharter in den BVI ist eine Expedition für die Sinne – vom Türkis der Sir Francis Drake Channel bis zum Duft tropischer Inseln und der kreolischen Küche an Strandbars wie Foxy's oder der Soggy Dollar. Die BVI sind kein gewöhnliches Segelrevier – sie sind die Bühne der Karibikklassiker.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Werfen Sie die Leinen los in einer der Top-Charterbasen rund um Tortola (Road Town, Nanny Cay, Hodges Creek, Scrub Island) und nehmen Sie Kurs auf ikonische Spots: die Granitfelsen der The Baths auf Virgin Gorda, die Schnorchelreviere The Indians und The Caves bei Norman Island, die butterweichen Strände von Anegada und die Sundowner-Buchten von Jost Van Dyke. Jeder Tag auf See enthüllt eine neue Facette dieses Archipels: geschützte Ankerbuchten, gut gepflegte Mooringfelder, kurze Schläge mit „line of sight"-Navigation und karibische Lebensfreude an Land.
            </p>
          </div>
        </div>

        {/* Für wen geeignet - Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Anchor className="w-6 h-6 text-blue-600 mr-3" />
              Für wen das Revier geeignet ist & Schwierigkeitsgrad
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Die BVI sind ideal für Einsteiger, Familien und Genießer, die kurze Etappen, verlässliche Mooringbojen und viele sichere Buchten schätzen. Katamarane sind besonders beliebt – viel Platz, geringe Tiefe, ruhiges Liegen. Ambitionierte Skipper finden in der Passatzeit (Winter/Frühjahr) sportliche, aber gut beherrschbare Bedingungen und können – wetterabhängig – den Abstecher nach Anegada planen (Auge-navigieren über helle Sandbänke, Tagesansteuerung). Insgesamt: leicht bis moderat, mit Aufmerksamkeit für Riffe, Schwell bei Nordwinden und Verkehr in den Klassikerbuchten.
            </p>
          </div>
        </div>

        {/* Besonderheiten - Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-green-50 border border-green-200 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Star className="w-6 h-6 text-green-600 mr-3" />
              Besonderheiten, Regeln & Umwelt
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Viele Highlights liegen in Nationalparkzonen mit Mooringpflicht (z. B. The Indians, The Caves, The Baths). Nutzen Sie ausschließlich Mooringbojen oder sandige Bereiche – nie auf Korallen ankern. Ein National Parks Mooring Permit ist für ausgewiesene Bojenfelder erforderlich; die Verfügbarkeit ist in der Hauptsaison limitiert, daher früh ankommen. Strömung, Böen in Passagen und nächtlicher Schwell können auftreten; ein Anker- bzw. Mooring-Check am Abend ist Standard. Respektieren Sie Sperrzonen, Geschwindigkeit in Häfen und achten Sie auf Schildkröten- und Manatee-Schutz.
            </p>
          </div>
        </div>

        {/* Charterbasen - Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-orange-50 border border-orange-200 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <MapPin className="w-6 h-6 text-orange-600 mr-3" />
              Charterbasen & Infrastruktur
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">• Tortola – Road Town & Nanny Cay:</h4>
                <p className="text-gray-700 ml-4">große Flotten, Technik, Diesel, Wasser, Eis; hervorragende Proviantierung (z. B. Supermärkte in Road Town).</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">• Scrub Island / Trellis Bay:</h4>
                <p className="text-gray-700 ml-4">kurze Transferzeit vom Flughafen EIS, perfekte Start- oder Endnacht.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">• Virgin Gorda – North Sound (Leverick Bay, Bitter End Yacht Club):</h4>
                <p className="text-gray-700 ml-4">moderne Docks, Restaurants, Wasser/ Strom, Treibstoff; idealer Ausgangspunkt für Tagestrips in den Sound.</p>
              </div>
              <p className="text-gray-700 mt-4">
                In fast allen Buchten finden Sie Mooringfelder, Dinghy-Docks und Strandrestaurants – Reservierung ist in der Hochsaison sinnvoll.
              </p>
            </div>
          </div>
        </div>

        {/* Wind und Wetter - Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-sky-50 border border-sky-200 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Sun className="w-6 h-6 text-sky-600 mr-3" />
              Wind und Wetter
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die BVI liegen im Gürtel der nordöstlichen Passatwinde. Von Dezember bis April wehen sie verlässlich aus NE-E mit etwa 15-22 kn; kurzzeitig können die Christmas Winds auf 25-30 kn auffrischen. In den Passagen steht dann oft 1-2 m See, im Lee der Inseln ist es deutlich ruhiger. Von Mai bis Juli nimmt der Wind häufig auf 10-15 kn ab, nachmittags setzt Thermik ein; kurze Squalls sind normal. Im Winter kann Nordschwell nördlich offene Buchten (z. B. Cane Garden Bay, Anegada Nordseite) ungemütlich machen - weichen Sie auf südliche Buchten aus (Norman, Peter, Cooper, Great Harbour/JVD). Strömung meist moderat (unter 1 kn), Tidenhub gering (ca. 30-50 cm), in Engstellen dennoch auf Set und Drift achten.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-sky-500">
              <h4 className="font-semibold text-gray-800 mb-2">Beste Reisezeit</h4>
              <p className="text-gray-700">
                Dezember-April ist Hochsaison: stabile Passate, wenig Regen, hervorragende Sicht - ideal für Bareboat, Familien und Einsteiger. Mai-Juni gelten als Shoulder Season mit warmem, meist ruhigerem Wetter, weniger Betrieb und oft attraktiveren Preisen. August-Oktober liegt der Schwerpunkt der Hurrikansaison: nur mit flexiblen Plänen, passender Versicherung und engmaschiger Wetterbeobachtung chartern; einzelne Betriebe pausieren. November ist Übergang - erste Nordschwells möglich, die Passate bauen sich wieder auf. Wasser 26-29 °C, Luft 26-31 °C: ganzjährig badetauglich.
              </p>
            </div>
          </div>
        </div>

        {/* Törnempfehlung mit border-left */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Törnempfehlung: 7 Tage ab Tortola</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 1 – Tortola (Road Town/Nanny Cay) → The Bight, Norman Island</h4>
                <p className="text-gray-700">Check-in, Sicherheitsbriefing, kurzer Einweisungsschlag. Sundowner an Bord, abends Dinghy rüber zu „Pirates" oder „Willy T". Mooringboje empfohlen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 2 – Norman Island → Cooper Island (Manchioneel Bay)</h4>
                <p className="text-gray-700">Vormittags Schnorcheln an The Indians und The Caves. Weiter nach Cooper Island, Boutique-Eco-Resort, entspannter Strandnachmittag. Bojen sind begehrt – früh da sein.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 3 – Cooper Island → Virgin Gorda (The Baths → North Sound)</h4>
                <p className="text-gray-700">Früher Stopp an The Baths (Parkbojen, Schwimmzone). Am Nachmittag weiter in den North Sound: Leverick Bay oder Bitter End für Liegeplatz, Wasser/ Strom, Restaurants.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 4 – Exkursion Anegada (wetterabhängig)</h4>
                <p className="text-gray-700">Bei guten Bedingungen Kurs auf Anegada (flach, Auge-Navigation). Moorings in Setting Point. Strandtag: Loblolly Bay/Cow Wreck, Hummer zum Dinner. Alternativ: zusätzlicher North-Sound-Tag (Saba Rock, Prickly Pear, Schnorcheln an den „Dogs").</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 5 – Anegada / North Sound → Marina Cay oder Scrub Island</h4>
                <p className="text-gray-700">Ruhiger Schlag zurück in die Inselkette. Mooring vor Marina Cay oder in der Marina von Scrub Island; Pool, Spa, Aussicht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 6 – Scrub/Marina Cay → Jost Van Dyke (Great Harbour/White Bay)</h4>
                <p className="text-gray-700">Zwischenstopp in Cane Garden Bay (Tortola) möglich. Weiter nach Jost Van Dyke: abends Foxy's in Great Harbour; tagsüber White Bay für Barfußstrand und „Painkiller". Bojen nutzen, Ankern nur in Sand.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tag 7 – Jost Van Dyke → Soper's Hole (West End) → Rückkehr Tortola</h4>
                <p className="text-gray-700">Frühstücksstop in Soper's Hole (bunte Holzhäuser, Bäckerei), dann gemütlich zurück zur Basis. Tanken, Auscheck, letzten Abend karibisch ausklingen lassen.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Hauptinseln</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{region.name}</h3>
                <p className="text-gray-600 mb-4">{region.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Häfen & Ankerplätze:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.bases.map((base, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                        {base}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Beliebte Routen</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid gap-3 md:grid-cols-2">
              {routes.map((route, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{route}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fazit */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fazit: BVI – Karibik wie aus dem Logbuch der Träumer</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Beständige Winde, kurze Etappen, geschützte Gewässer und legendäre Buchten machen die British Virgin Islands zum perfekten Revier – vom ersten Charter bis zum genussvollen Island-Hopping auf dem Katamaran.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Jetzt unverbindliches Angebot anfordern
            </h3>
            <p className="mb-6 text-blue-100">
              Nennen Sie uns Reisedaten, Crewgröße und Wunschyacht – wir prüfen Live-Verfügbarkeiten, reservieren auf Wunsch Mooringbojen/Marinas und senden Ihnen umgehend Ihren maßgeschneiderten BVI-Törnplan.
            </p>
            <Button 
              className="bg-white text-blue-600 hover:bg-blue-50" 
              size="lg"
              onClick={() => {
                window.location.href = 'tel:+497543499080';
              }}
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BVI;