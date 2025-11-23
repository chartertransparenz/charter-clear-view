import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
import TerritoryMap from "@/components/TerritoryMap";
import NausysWidgetSection from "@/components/NausysWidgetSection";
import elbaBeach from "@/assets/elba-beach.jpg";
import amalfiCoast from "@/assets/amalfi-coast.jpg";
// import destinationItaly from "@/assets/destination-italy.jpg";

const Italy = () => {
  console.log("Italy component loading...");
  const m = META.italien;
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };
  
  useEffect(() => {
    console.log("Italy useEffect running...");
    window.scrollTo(0, 0);
  }, []);
  
  console.log("Italy component rendering with meta:", m);
  
  const quickFacts = [{
    label: "Lage",
    value: "Mittelmeer"
  }, {
    label: "Beste Zeit", 
    value: "April - Oktober"
  }, {
    label: "Geeignet für",
    value: "Alle Segelerfahrungen"
  }, {
    label: "Besonderheit",
    value: "Dolce Vita & Kultur"
  }];
  const highlights = ["Exzellente italienische Küche", "Wunderschöne Küstenlandschaften", "Reiche Geschichte und Kultur", "Kristallklares Wasser", "Abwechslungsreiche Routen", "Gastfreundliche Marinas"];
  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      />
      <JsonLd json={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Reviere", "item": "https://chartertransparenz.de/reviere"},
          {"@type": "ListItem", "position": 2, "name": "Mittelmeer", "item": "https://chartertransparenz.de/reviere/mittelmeer"},
          {"@type": "ListItem", "position": 3, "name": "Italien", "item": "https://chartertransparenz.de/reviere/mittelmeer/italien"}
        ]
      }} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/79fac9fd-550d-4a4f-b314-fffdb854e49d.png" alt="Italien Segelrevier" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇮🇹</span>
            <Badge className="bg-orange-500 text-white">Top #3 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Italien</h1>
          <p className="text-lg text-white/90 max-w-md">
            <Link to="/reviere/mittelmeer/italien/sardinien" className="text-white hover:underline">Sardinien</Link>, Elba, <Link to="/reviere/mittelmeer/italien/sizilien" className="text-white hover:underline">Sizilien</Link> & <Link to="/reviere/mittelmeer/italien/amalfikueste" className="text-white hover:underline">Amalfiküste</Link> - Dolce Vita auf dem Wasser
          </p>
        </div>
        <Link to="/" className="absolute top-6 left-6" onClick={() => {
        setTimeout(() => {
          document.getElementById('reviere')?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }}>
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              
              <h3 className="font-bold text-gray-800 mb-1">{fact.label}</h3>
              <p className="text-gray-600 text-sm">{fact.value}</p>
            </div>)}
        </div>

        {/* Übersichtskarte */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Italien Segelreviere - Übersichtskarte</h2>
          <TerritoryMap 
            region="Italien" 
            center={{ lat: 41.8719, lng: 12.5674 }} 
            zoom={6} 
            maptype="satellite"
            markers={[
              { lat: 43.5503, lng: 10.3081, name: 'Toskana', description: 'Toskanischer Archipel & Elba' },
              { lat: 40.6401, lng: 14.6007, name: 'Amalfiküste', description: 'Golf von Neapel & Capri' },
              { lat: 41.1171, lng: 9.0833, name: 'Sardinien', description: 'Costa Smeralda & La Maddalena' },
              { lat: 37.5079, lng: 15.0830, name: 'Sizilien', description: 'Äolische Inseln & Palermo' }
            ]}
            className="mb-6"
          />
        </div>

        {/* NauSYS Widget Section */}
        <NausysWidgetSection />

        {/* Segelreviere Detail */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Die Vielfalt der italienischen Segelreviere: Von den Alpen bis nach Afrika</h2>
            <p className="text-lg text-gray-600 mb-8">
              Kaum ein anderes Land im Mittelmeer bietet eine derartige Bandbreite an unterschiedlichen Küstenlandschaften 
              und Segelbedingungen. Jede Region hat ihren eigenen Charakter, ihre eigenen Winde und ihre eigenen, 
              unverwechselbaren Highlights.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Toskana & das Tyrrhenische Meer – Kultur und Inselzauber</h3>
                <p className="text-gray-600 mb-4">
                  Die <Link to="/reviere/mittelmeer/italien/toskana" className="text-blue-600 hover:text-blue-800 underline">Toskana</Link>, weltberühmt für ihre sanften Hügel, Zypressenalleen und Renaissance-Städte, besitzt auch eine 
                  faszinierende Küste. Ausgangshäfen wie Livorno, Punta Ala oder Salivoli sind der ideale Startpunkt für einen 
                  Törn in den Toskanischen Archipel. Das Juwel dieser Inselgruppe ist zweifellos Elba, die drittgrößte Insel Italiens. 
                  Hier finden Segler eine perfekte Mischung aus gut ausgestatteten Marinas wie in Portoferraio, charmanten 
                  Ankerbuchten wie Fetovaia und geschichtsträchtigen Orten, die an Napoleons Exil erinnern.
                </p>
                <p className="text-gray-600">
                  Die kleineren Inseln wie Giglio, Capraia und das autofreie Giannutri sind wahre Oasen der Ruhe und bieten 
                  fantastische Bedingungen zum Tauchen und Wandern. Die Navigation ist hier unkompliziert, die Distanzen zwischen 
                  den Inseln sind moderat, was das Revier auch für Familien und weniger erfahrene Crews ideal macht.
                </p>
                <figure className="my-6">
                  <img 
                    src={elbaBeach} 
                    alt="Traumhafte Bucht auf Elba mit kristallklarem Wasser und Segelbooten" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
                    Genießen Sie den Traumurlaub auf Elba: Segeln Sie entlang der atemberaubenden Küstenlinie, entdecken Sie versteckte Buchten und erleben Sie das kristallklare Wasser – ein Paradies für alle, die Ruhe und Abenteuer suchen.
                  </figcaption>
                </figure>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4"><Link to="/reviere/mittelmeer/italien/sardinien" className="text-primary hover:underline">Sardinien</Link> – Karibikflair im Herzen des Mittelmeers</h3>
                <p className="text-gray-600 mb-4">
                  Ein Yachtcharter auf <Link to="/reviere/mittelmeer/italien/sardinien" className="text-primary hover:underline">Sardinien</Link> ist der Traum vieler Segler. Die Insel lockt mit weltberühmten Küstenabschnitten
                  und Wasserfarben, die von tiefem Smaragdgrün bis zu leuchtendem Türkis reichen.
                </p>
                <div className="ml-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Der Norden & die Costa Smeralda</h4>
                    <p className="text-gray-600">
                      Der Nordosten Sardiniens ist legendär. Von Charterbasen in Olbia, Portisco oder Cannigione aus erreichen Sie 
                      die berühmte <Link to="/reviere/mittelmeer/italien/sardinien/costa-smeralda" className="text-primary hover:underline">Costa Smeralda</Link> mit ihrem exklusiven Flair und dem mondänen Hafen von Porto Cervo. Das nautische
                      Highlight ist jedoch das Maddalena-Archipel, ein Nationalpark aus über 60 Inseln und Felsen. Hier finden Sie 
                      unzählige, gut geschützte Ankerplätze zwischen von Wind und Wetter geformten Granitfelsen. Inseln wie Spargi, 
                      Budelli (mit seinem berühmten rosa Strand) und Caprera bieten Postkartenmotive an jeder Ecke. Die Windbedingungen 
                      können hier durch den Düseneffekt der Straße von Bonifacio anspruchsvoll sein, was erfahrene Segler besonders schätzen.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Der Süden & die Küste von Cagliari</h4>
                    <p className="text-gray-600">
                      Der Süden um die Hauptstadt Cagliari ist ruhiger und ursprünglicher. Die Küste von Villasimius bis Chia 
                      bietet lange Sandstrände und geschützte Buchten. Ein Törn zu den Inseln San Pietro und Sant'Antioco im 
                      Südwesten führt Sie in eine Welt authentischer Fischerkultur und unberührter Natur.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4"><Link to="/reviere/mittelmeer/italien/sizilien" className="text-primary hover:underline">Sizilien</Link> & die Liparischen Inseln – Feuer, Geschichte und Genuss</h3>
                <p className="text-gray-600 mb-4">
                  Ein Yachtcharter auf <Link to="/reviere/mittelmeer/italien/sizilien" className="text-primary hover:underline">Sizilien</Link> ist eine Reise durch Jahrtausende der Geschichte, umgeben von einer dramatischen
                  Naturkulisse. Die größte Insel des Mittelmeers ist ein Schmelztiegel der Kulturen. Charterbasen wie Palermo, 
                  Portorosa oder Marsala eröffnen Ihnen zwei grundverschiedene Reviere:
                </p>
                <div className="ml-4 space-y-4">
                  <div>
                    
                    <p className="text-gray-600">
                      Von Portorosa oder Milazzo aus ist es nur ein kurzer Schlag zu den sieben vulkanischen Perlen des Archipels. 
                      Jede Insel hat ihren eigenen Charakter: das grüne Salina, das mondäne Panarea, das schwefelig duftende Vulcano 
                      mit seinen Fango-Bädern und natürlich der aktive Vulkan Stromboli, dessen nächtliche Eruptionen vom Wasser aus 
                      ein unvergessliches Schauspiel sind. Das Inselhopping hier ist ein Muss für jeden Mittelmeer-Segler.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Die West- & Ostküste</h4>
                    <p className="text-gray-600">
                      Entlang der Küste Siziliens selbst locken Ziele wie das charmante Cefalù, die antiken Tempel von Agrigent oder 
                      die pulsierende Metropole Palermo. Ein Törn zu den Ägadischen Inseln im Westen verspricht kristallklares Wasser 
                      und Einblicke in die Geschichte des Thunfischfangs.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Campanien & die <Link to="/reviere/mittelmeer/italien/amalfikueste" className="text-primary hover:underline">Amalfiküste</Link> – Postkartenmotive und antikes Erbe</h3>
                <p className="text-gray-600 mb-4">
                  Die Region Campanien mit dem Golf von Neapel ist eine der spektakulärsten Küstenlandschaften der Welt. 
                  Von den modernen Marinas in Neapel oder Salerno aus segeln Sie entlang der weltberühmten <Link to="/reviere/mittelmeer/italien/amalfikueste" className="text-primary hover:underline">Amalfiküste</Link>.
                  Die pastellfarbenen Dörfer Positano, Amalfi und Ravello, die sich dramatisch an die Felsen klammern, 
                  sind vom Wasser aus am besten zu bewundern. Ankerplätze sind hier rar, aber die gut ausgestatteten 
                  Bojenfelder und kleinen Häfen machen einen Stopp möglich.
                </p>
                <figure className="my-6">
                  <img 
                    src={amalfiCoast} 
                    alt="Positano an der Amalfiküste mit bunten Häusern und Yachten im kristallklaren Wasser" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
                    Segeln Sie entlang der atemberaubenden Amalfi-Küste und lassen Sie sich von den charmanten, bunten Häusern in Positano verzaubern. Genießen Sie die Freiheit auf dem Wasser, das kristallklare Meer und den spektakulären Blick auf eine der schönsten Küstenlandschaften der Welt
                  </figcaption>
                </figure>
                <p className="text-gray-600">
                  Gegenüber liegen die legendären Inseln: das glamouröse Capri mit seiner Blauen Grotte, das größere, 
                  grüne Ischia mit seinen Thermalquellen und das authentische Procida, Italiens Kulturhauptstadt 2022. 
                  Ein Landgang zum Besuch der antiken Ruinen von Pompeji und Herculaneum am Fuße des Vesuvs rundet 
                  diesen kulturhistorisch reichen Törn ab.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kalabrien & der Stiefelabsatz – Unentdeckte Juwelen Süditaliens</h3>
                <p className="text-gray-600">
                  Für Skipper, die das authentische und weniger überlaufene Italien suchen, ist die Küste Kalabriens ein Geheimtipp. 
                  Die „Stiefelspitze" Italiens bietet eine wilde, zerklüftete Küste mit atemberaubenden Stränden und kristallklarem 
                  Wasser. Der Hauptort Tropea, auf einem Felsen über dem Meer thronend, ist ein idealer Ausgangspunkt. Von hier aus 
                  können Sie die Costa degli Dei (Küste der Götter) erkunden oder bei guter Wetterlage den Sprung zu den Liparischen 
                  Inseln wagen. Die maritime Infrastruktur ist hier einfacher, aber der Lohn sind leere Ankerbuchten und eine 
                  Gastfreundschaft, die von Herzen kommt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Praktische Informationen */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Praktische Törninformationen für Ihren Yachtcharter in Italien</h2>
            <p className="text-lg text-gray-600 mb-6">
              Eine gute Törnplanung ist die halbe Miete. Italien ist dank seiner hervorragenden Infrastruktur ein sehr 
              zugängliches und komfortables Charterrevier.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Erreichbarkeit – Ihr schneller Weg an Bord</h3>
                <p className="text-gray-600 mb-4">
                  Die Anreise zu unseren Charterbasen ist unkompliziert und flexibel:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Per Flugzeug</h4>
                    <p className="text-gray-600 mb-3">
                      Zahlreiche internationale Flughäfen entlang der Küste werden von Deutschland, Österreich und der Schweiz 
                      aus direkt angeflogen. Die wichtigsten Zielflughäfen für unsere Chartergäste sind:
                    </p>
                    <ul className="text-gray-600 space-y-1 ml-6">
                      <li>• <strong>Für die <Link to="/reviere/mittelmeer/italien/toskana" className="text-primary hover:underline">Toskana</Link>:</strong> Pisa (PSA) und Florenz (FLR)</li>
                      <li>• <strong>Für <Link to="/reviere/mittelmeer/italien/sardinien" className="text-primary hover:underline">Sardinien</Link>:</strong> Olbia (OLB) im Norden und Cagliari (CAG) im Süden</li>
                      <li>• <strong>Für <Link to="/reviere/mittelmeer/italien/sizilien" className="text-primary hover:underline">Sizilien</Link>:</strong> Palermo (PMO) und Catania (CTA)</li>
                      <li>• <strong>Für Campanien/<Link to="/reviere/mittelmeer/italien/amalfikueste" className="text-primary hover:underline">Amalfiküste</Link>:</strong> Neapel (NAP)</li>
                      <li>• <strong>Für Ligurien:</strong> Genua (GOA)</li>
                    </ul>
                    <p className="text-gray-600 mt-3">
                      Vom Flughafen zur Marina organisieren wir gerne einen zuverlässigen Transfer für Sie und Ihre Crew.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Per PKW</h4>
                    <p className="text-gray-600">
                      Insbesondere die Reviere in Nord- und Mittelitalien (Ligurien, <Link to="/reviere/mittelmeer/italien/toskana" className="text-primary hover:underline">Toskana</Link>) sind aus Süddeutschland, 
                      Österreich und der Schweiz bequem mit dem Auto erreichbar. Dies bietet den Vorteil, mehr Gepäck und 
                      persönlichen Proviant mitnehmen zu können. Die meisten Marinas bieten sichere Parkmöglichkeiten für 
                      die Dauer Ihres Törns.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Marinas & Charterbasen – Perfekte Infrastruktur für Ihren Törn</h3>
                <p className="text-gray-600 mb-4">
                  Italien verfügt über eine exzellente maritime Infrastruktur. Von großen, modernen Marinas mit vollem 
                  Serviceangebot (Wasser, Strom, Sanitäranlagen, WLAN, Werften) bis hin zu kleinen, charmanten Stadthäfen 
                  finden Sie entlang der gesamten Küste sichere Liegeplätze.
                </p>
                <p className="text-gray-600 mb-4">
                  Unsere Flotte umfasst eine große Auswahl an Charteryachten für jeden Anspruch und jede Crewgröße:
                </p>
                <ul className="text-gray-600 space-y-2 ml-6">
                  <li>• <strong>Moderne Segelyachten (Monohulls):</strong> Ideal für sportliches Segeln und klassisches Seemannsgefühl.</li>
                  <li>• <strong>Geräumige Katamarane:</strong> Perfekt für Familien und Gruppen, die Wert auf Komfort, Stabilität und viel Platz an Deck legen. Ideal für entspanntes Inselhopping in Italien.</li>
                  <li>• <strong>Schnelle Motoryachten:</strong> Für alle, die in kurzer Zeit große Distanzen zurücklegen und mehrere Highlights miteinander verbinden möchten.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Sie haben die Wahl: Entscheiden Sie sich für eine Bareboat-Charter, wenn Sie über die nötige Erfahrung und 
                  die erforderlichen Lizenzen verfügen, um die Yacht selbst zu führen. Oder genießen Sie einen rundum entspannten 
                  Urlaub und buchen Sie einen unserer erfahrenen Skipper, der Sie sicher zu den schönsten Plätzen des Reviers 
                  führt und Ihnen wertvolle Geheimtipps verrät.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wetter, Wind und beste Reisezeit – Nautische Planung</h3>
                <p className="text-gray-600 mb-4">
                  Das Wetter in Italien ist typisch mediterran mit heißen, trockenen Sommern und milden, feuchteren Wintern. 
                  Die Segelsaison erstreckt sich von April bis in den späten Oktober.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Typische Winde</h4>
                    <p className="text-gray-600 mb-2">Die lokalen Windsysteme sind für die Törnplanung entscheidend:</p>
                    <ul className="text-gray-600 space-y-2 ml-6">
                      <li>• <strong>Mistral (Maestrale):</strong> Ein starker, trockener Wind aus Nordwest, der vor allem im Bereich <Link to="/reviere/mittelmeer/italien/sardinien" className="text-primary hover:underline">Sardinien</Link>, Korsika und dem Tyrrhenischen Meer auftritt. Er bringt klaren Himmel und gute Sicht, kann aber auch hohe Wellen aufbauen und erfordert seemännisches Können.</li>
                      <li>• <strong>Scirocco (Jugo):</strong> Ein warmer, feuchter Wind aus Südost, der oft Sand aus der Sahara mit sich bringt. Er kündigt sich meist langsam an und kann zu drückender Schwüle und unruhiger See führen.</li>
                      <li>• <strong>Libeccio:</strong> Ein Südwestwind, der häufig an der Westküste Italiens auftritt und schnell an Stärke zunehmen kann.</li>
                      <li>• Im Sommer dominieren thermische Winde (Land- und Seebrisen), die tagsüber für moderate und zuverlässige Segelbedingungen sorgen und nachts oft einschlafen.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Saisonale Unterschiede</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-600">
                          <strong>Frühling (April - Juni):</strong> Eine wunderbare Zeit zum Segeln. Die Natur blüht, die 
                          Temperaturen sind angenehm warm, aber nicht zu heiß. Die Häfen und Buchten sind noch nicht überfüllt. 
                          Die Winde können noch etwas kräftiger sein – ideal für ambitionierte Segler.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          <strong>Sommer (Juli - August):</strong> Hochsaison in Italien. Es ist heiß, sonnig und die Winde 
                          sind meist schwach bis mäßig – perfekt für Badeurlaub und Familien. In dieser Zeit, besonders im 
                          August („Ferragosto"), sind die Marinas und beliebten Ankerplätze sehr voll und die Preise am höchsten. 
                          Eine frühzeitige Buchung ist unerlässlich.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          <strong>Herbst (September - Oktober):</strong> Für viele Kenner die beste Reisezeit. Das Wasser ist 
                          vom Sommer noch aufgeheizt, die großen Touristenströme sind abgezogen und die Preise sinken. Das Wetter 
                          ist meist stabil und warm, und die Häfen werden wieder leerer.
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4 font-medium">
                      Unsere Empfehlung für die beste Reisezeit für einen Yachtcharter in Italien sind die Monate Mai, Juni, 
                      Juli, September und Anfang Oktober.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fazit */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Fazit: Warum ein Yachtcharter in Italien die perfekte Wahl ist</h2>
            <p className="text-lg text-gray-600 mb-6">
              Ein Segel- oder Motorbooturlaub in Italien ist eine unvergleichliche Erfahrung, die alle Sinne anspricht. 
              Es ist die Freiheit, jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, in einem 
              lebhaften Hafenstädtchen anlegen oder einfach auf dem offenen Meer die Sonne genießen. Es ist die Kombination aus:
            </p>
            
            <ul className="text-gray-600 space-y-2 ml-6 mb-6">
              <li>• <strong>Abwechslungsreichen Segelrevieren:</strong> Von geschützten Archipelen bis zu anspruchsvollen Passagen ist für jede Erfahrungsstufe etwas dabei.</li>
              <li>• <strong>Atemberaubenden Landschaften:</strong> Dramatische Klippen, vulkanische Inseln, karibische Strände und sanfte Hügel.</li>
              <li>• <strong>Kultureller Tiefe:</strong> Segeln Sie auf den Spuren der Antike und entdecken Sie ein UNESCO-Welterbe nach dem anderen.</li>
              <li>• <strong>Kulinarischen Genüssen:</strong> Genießen Sie frischen Fisch direkt vom Kutter, lokale Weine und die weltberühmte italienische Küche in jeder Region neu.</li>
              <li>• <strong>Italienischer Lebensfreude:</strong> Tauchen Sie ein in das mediterrane Flair, die Gastfreundschaft und die entspannte Atmosphäre.</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Bereit für Ihren Traumtörn?</h3>
              <p className="text-gray-600 mb-4">
                Die Küsten Italiens warten darauf, von Ihnen entdeckt zu werden. Ob Sie ein erfahrener Seebär oder ein 
                neugieriger Einsteiger sind, ob Sie Abenteuer oder Entspannung suchen – wir gestalten mit Ihnen gemeinsam 
                den perfekten Yachturlaub.
              </p>
              <p className="text-gray-600 font-medium">
                Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in Italien an! Durchstöbern Sie unsere 
                Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden 
                die ideale Yacht im perfekten Revier für Sie.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Bereit für "Dolce Vita" auf dem Wasser?
            </h3>
            <p className="mb-6 text-gray-700">
              Entdecken Sie Italiens schönste Küsten und erleben Sie unvergessliche 
              Momente zwischen Kultur, Kulinarik und kristallklarem Wasser.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Italien-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        </div>
      
      <TopDestinations />

      {/* Highlights */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center">
              <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
              <span className="text-gray-800">{highlight}</span>
            </div>)}
        </div>
      </div>

      </div>
    </>
  );
};

export default Italy;
