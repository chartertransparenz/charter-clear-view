import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import destinationItaly from "@/assets/destination-italy.jpg";

const Italy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [
    { label: "Lage", value: "Mittelmeer" },
    { label: "Beste Zeit", value: "April - Oktober" },
    { label: "Geeignet für", value: "Alle Segelerfahrungen" },
    { label: "Besonderheit", value: "Dolce Vita & Kultur" }
  ];

  const regions = [
    {
      name: "Sardinien & Costa Smeralda",
      bases: ["Olbia", "Portisco", "Cannigione"],
      description: "Exklusive Buchten, kristallklares Wasser und mondäne Häfen"
    },
    {
      name: "Elba & Toskanischer Archipel", 
      bases: ["Portoferraio", "Marina di Campo"],
      description: "Napoleons Exil-Insel mit charmanten Küstenstädten"
    },
    {
      name: "Sizilien & Liparische Inseln",
      bases: ["Palermo", "Catania", "Lipari"],
      description: "Vulkanische Landschaften und authentische italienische Kultur"
    },
    {
      name: "Amalfiküste & Golf von Neapel",
      bases: ["Salerno", "Castellammare"],
      description: "Spektakuläre Küstenlandschaft und romantische Atmosphäre"
    }
  ];

  const highlights = [
    "Exzellente italienische Küche",
    "Wunderschöne Küstenlandschaften", 
    "Reiche Geschichte und Kultur",
    "Kristallklares Wasser",
    "Abwechslungsreiche Routen",
    "Gastfreundliche Marinas"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationItaly}
          alt="Italien Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇮🇹</span>
            <Badge className="bg-orange-500 text-white">Top #3 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Italien</h1>
          <p className="text-lg text-white/90 max-w-md">
            Sardinien, Elba, Sizilien & Amalfiküste - Dolce Vita auf dem Wasser
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

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Italien: Ihr Traumtörn an den schönsten Küsten des Mittelmeers</h2>
            <p className="text-lg text-gray-600 mb-4">
              Segeln Sie mit uns ins Herz des Mittelmeers und erleben Sie „La Dolce Vita" an Bord einer modernen Yacht. 
              Italien, das Land der antiken Mythen, der pulsierenden Kultur und der unvergleichlichen Kulinarik, 
              entfaltet vom Wasser aus seinen ganzen Zauber. Ein Yachtcharter in Italien ist mehr als nur ein Urlaub – 
              es ist eine Entdeckungsreise für die Seele, ein Abenteuer für den erfahrenen Skipper und ein 
              unvergessliches Erlebnis für die ganze Familie.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Stellen Sie sich vor: Sie lichten den Anker in einer sonnenverwöhnten Marina, die Segel füllen sich 
              mit einer sanften Brise und vor Ihnen liegt das endlose Blau des Tyrrhenischen oder Ionischen Meeres. 
              Jeder Tag bringt neue Horizonte: malerische Fischerdörfer, deren pastellfarbene Häuser sich an steile 
              Klippen schmiegen, einsame Ankerbuchten mit kristallklarem Wasser, das zum Schnorcheln einlädt, und 
              historische Hafenstädte, in denen die Spuren der Römer, Griechen und Normannen noch heute lebendig sind.
            </p>
            <p className="text-lg text-gray-600">
              Von der rauen Schönheit der Toskana mit der geschichtsträchtigen Insel Elba, über die glamouröse 
              Amalfiküste und die vulkanischen Wunder der Liparischen Inseln bis hin zum karibisch anmutenden 
              Archipel von La Maddalena vor der Küste Sardiniens – Italien bietet eine nautische Vielfalt, 
              die ihresgleichen sucht.
            </p>
          </div>
        </div>

        {/* Segelreviere Detail */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Die Vielfalt der italienischen Segelreviere</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Toskana & das Tyrrhenische Meer – Kultur und Inselzauber</h3>
                <p className="text-gray-600 mb-4">
                  Die Toskana, weltberühmt für ihre sanften Hügel, Zypressenalleen und Renaissance-Städte, besitzt auch eine 
                  faszinierende Küste. Ausgangshäfen wie Livorno, Punta Ala oder Salivoli sind der ideale Startpunkt für einen 
                  Törn in den Toskanischen Archipel. Das Juwel dieser Inselgruppe ist zweifellos Elba, die drittgrößte Insel Italiens.
                </p>
                <p className="text-gray-600">
                  Hier finden Segler eine perfekte Mischung aus gut ausgestatteten Marinas wie in Portoferraio, charmanten 
                  Ankerbuchten wie Fetovaia und geschichtsträchtigen Orten, die an Napoleons Exil erinnern. Die kleineren Inseln 
                  wie Giglio, Capraia und das autofreie Giannutri sind wahre Oasen der Ruhe.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sardinien – Karibikflair im Herzen des Mittelmeers</h3>
                <p className="text-gray-600 mb-4">
                  Ein Yachtcharter auf Sardinien ist der Traum vieler Segler. Die Insel lockt mit weltberühmten Küstenabschnitten 
                  und Wasserfarben, die von tiefem Smaragdgrün bis zu leuchtendem Türkis reichen.
                </p>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Der Norden & die Costa Smeralda</h4>
                    <p className="text-gray-600">
                      Von Charterbasen in Olbia, Portisco oder Cannigione aus erreichen Sie die berühmte Costa Smeralda mit 
                      ihrem exklusiven Flair. Das nautische Highlight ist das Maddalena-Archipel, ein Nationalpark aus über 
                      60 Inseln und Felsen mit unzähligen, gut geschützten Ankerplätzen.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Der Süden & die Küste von Cagliari</h4>
                    <p className="text-gray-600">
                      Der Süden um die Hauptstadt Cagliari ist ruhiger und ursprünglicher. Die Küste von Villasimius bis Chia 
                      bietet lange Sandstrände und geschützte Buchten. Ein Törn zu den Inseln San Pietro und Sant'Antioco führt 
                      Sie in eine Welt authentischer Fischerkultur.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sizilien & die Liparischen Inseln – Feuer, Geschichte und Genuss</h3>
                <p className="text-gray-600 mb-4">
                  Ein Yachtcharter auf Sizilien ist eine Reise durch Jahrtausende der Geschichte, umgeben von einer dramatischen 
                  Naturkulisse. Die größte Insel des Mittelmeers ist ein Schmelztiegel der Kulturen. Charterbasen wie Palermo, 
                  Portorosa oder Marsala eröffnen Ihnen zwei grundverschiedene Reviere.
                </p>
                <p className="text-gray-600">
                  Von Portorosa oder Milazzo aus ist es nur ein kurzer Schlag zu den sieben vulkanischen Perlen des Archipels. 
                  Jede Insel hat ihren eigenen Charakter: das grüne Salina, das mondäne Panarea, das schwefelig duftende Vulcano 
                  und natürlich der aktive Vulkan Stromboli, dessen nächtliche Eruptionen ein unvergessliches Schauspiel sind.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Campanien & die Amalfiküste – Postkartenmotive und antikes Erbe</h3>
                <p className="text-gray-600 mb-4">
                  Die Region Campanien mit dem Golf von Neapel ist eine der spektakulärsten Küstenlandschaften der Welt. 
                  Von den modernen Marinas in Neapel oder Salerno aus segeln Sie entlang der weltberühmten Amalfiküste. 
                  Die pastellfarbenen Dörfer Positano, Amalfi und Ravello, die sich dramatisch an die Felsen klammern, 
                  sind vom Wasser aus am besten zu bewundern.
                </p>
                <p className="text-gray-600">
                  Gegenüber liegen die legendären Inseln: das glamouröse Capri mit seiner Blauen Grotte, das größere, 
                  grüne Ischia mit seinen Thermalquellen und das authentische Procida. Ein Landgang zum Besuch der antiken 
                  Ruinen von Pompeji und Herculaneum rundet diesen kulturhistorisch reichen Törn ab.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kalabrien & der Stiefelabsatz – Unentdeckte Juwelen Süditaliens</h3>
                <p className="text-gray-600">
                  Für Skipper, die das authentische und weniger überlaufene Italien suchen, ist die Küste Kalabriens ein Geheimtipp. 
                  Die „Stiefelspitze" Italiens bietet eine wilde, zerklüftete Küste mit atemberaubenden Stränden und kristallklarem 
                  Wasser. Der Hauptort Tropea, auf einem Felsen über dem Meer thronend, ist ein idealer Ausgangspunkt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Praktische Informationen */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Praktische Törninformationen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Erreichbarkeit – Ihr schneller Weg an Bord</h3>
                <p className="text-gray-600 mb-3">
                  Die Anreise zu unseren Charterbasen ist unkompliziert und flexibel. Zahlreiche internationale Flughäfen 
                  entlang der Küste werden direkt angeflogen:
                </p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• <strong>Toskana:</strong> Pisa (PSA) und Florenz (FLR)</li>
                  <li>• <strong>Sardinien:</strong> Olbia (OLB) im Norden und Cagliari (CAG) im Süden</li>
                  <li>• <strong>Sizilien:</strong> Palermo (PMO) und Catania (CTA)</li>
                  <li>• <strong>Campanien/Amalfiküste:</strong> Neapel (NAP)</li>
                  <li>• <strong>Ligurien:</strong> Genua (GOA)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Wetter und beste Reisezeit</h3>
                <p className="text-gray-600 mb-3">
                  Das Wetter in Italien ist typisch mediterran mit heißen, trockenen Sommern und milden Wintern. 
                  Die Segelsaison erstreckt sich von April bis in den späten Oktober.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <strong>Frühling (April - Juni):</strong> Wunderbare Zeit zum Segeln, angenehme Temperaturen, 
                    weniger überfüllt, ideal für ambitionierte Segler.
                  </p>
                  <p className="text-gray-600">
                    <strong>Sommer (Juli - August):</strong> Hochsaison, heiß und sonnig, perfekt für Familien, 
                    aber voll und teuer.
                  </p>
                  <p className="text-gray-600">
                    <strong>Herbst (September - Oktober):</strong> Für viele die beste Reisezeit, warmes Wasser, 
                    weniger Touristen, stabile Wetterlage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{region.name}</h3>
                <p className="text-gray-600 mb-4">{region.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Stützpunkte:</h4>
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

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für "Dolce Vita" auf dem Wasser?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie Italiens schönste Küsten und erleben Sie unvergessliche 
              Momente zwischen Kultur, Kulinarik und kristallklarem Wasser.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Italien-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Italy;