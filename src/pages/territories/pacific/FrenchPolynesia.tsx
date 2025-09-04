import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import TerritoryMap from "@/components/TerritoryMap";
const frenchPolynesiaHeader = "/lovable-uploads/a6e74b2e-f2a3-4510-99de-f4d333eeac84.png";
const FrenchPolynesia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Zentral-Südpazifik"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "April-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Highlight",
    value: "Tahiti und Bora Bora"
  }];
  const regions = [{
    name: "Leeward Islands (Gesellschaftsinseln)",
    link: "/reviere/suedpazifik/charter-standorte/raiatea",
    description: "Raiatea - Das Charter-Zentrum mit Tahaa, Bora Bora und Huahine",
    cities: ["Raiatea", "Bora Bora", "Tahaa", "Huahine"]
  }, {
    name: "Tuamotu Archipel",
    link: "/reviere/suedpazifik/charter-standorte/rangiroa",
    description: "Rangiroa - Größtes Atoll der Welt und Taucher-Paradies",
    cities: ["Rangiroa", "Tikehau", "Fakarava", "Manihi"]
  }];
  const highlights = ["Tahiti - Die Königin der Südsee", "Bora Bora - Die Perle des Pazifiks", "Traumhafte Atolls und Lagunen", "Französisches Savoir-vivre", "Überriffe-Charter zwischen Inseln", "Exzellente französische Küche", "Kristallklare Lagunen"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={frenchPolynesiaHeader} alt="Französisch Polynesien" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇵🇫 Französisch Polynesien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Französisch Polynesien</h1>
            <p className="text-xl max-w-2xl">
              Das ultimative Südsee-Paradies
            </p>
          </div>
        </div>
        <Link to="/reviere/suedpazifik" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Südpazifik
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation - Fixed at top */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Start</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/suedpazifik">Südpazifik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Französisch Polynesien</BreadcrumbPage>
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
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Französisch-Polynesien Archipel</h2>
          <TerritoryMap
            region="Französisch-Polynesien"
            center={{ lat: -17.0845677, lng: -149.4113217 }}
            zoom={6}
            maptype="satellite"
            className="mb-8"
          />
        </div>

        {/* Description */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Yachtcharter Französisch-Polynesien – Inselhüpfen im größten Lagunenpark der Welt</h2>
            
            <p className="text-lg text-gray-600 mb-4">
              Französisch-Polynesien ist ein Sehnsuchtsort für Segler – ein Mosaik aus türkisblauen Lagunen, smaragdgrünen Vulkaninseln, schneeweißen Sandbänken und einer Unterwasserwelt, die ihresgleichen sucht. Zwischen Tahiti, Bora Bora, Moorea und den umliegenden Gesellschaftsinseln erstreckt sich ein Revier, das wie geschaffen ist für Yachtcharter: beständige Passatwinde, gut geschützte Lagunen hinter Korallenriffen, kurze Distanzen zwischen den Inseln und eine Kultur, die jeden Landgang zum Erlebnis macht. Wer hier die Leinen löst, segelt durch ein lebendes Bilderbuch – vom leuchtenden Blau der Passagen bis zu den sattgrünen Hängen der Vulkane, die wie Theaterkulissen über den Lagunen stehen.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              Besonders im Vorteil ist, wer auf Multihulls setzt. Katamarane sind in Französisch-Polynesien die erste Wahl, weil ihr geringer Tiefgang das Ansteuern flacher Buchten und Sandbänke ermöglicht, ihr breiter Stand für stabilen Liegekomfort in der Lagune sorgt und ihr großzügiges Platzangebot Crew und Gepäck entspannt aufnimmt. Dazu kommt die Möglichkeit, entlegene Ankerplätze komfortabel zu erreichen – oft mit besserem Überblick über Korallenköpfe („Bommies"), die im klaren Wasser wie Skulpturen schimmern. Ob als Bareboat oder mit Skipper, ob Segelyacht oder Katamaran: Ein Yachtcharter in Französisch-Polynesien verbindet nautische Abwechslung mit luxuriöser Gelassenheit.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Regionale Gliederung – die großen Inselwelten im Überblick</h3>
            
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Gesellschaftsinseln</h4>
            <p className="text-lg text-gray-600 mb-4">
              Die Gesellschaftsinseln sind das Herzstück für Yachtcharter Französisch-Polynesien und gliedern sich in zwei Gruppen: Windward Islands im Südosten und Leeward Islands im Nordwesten. Gemeinsam ist ihnen die dramatische Topografie: erloschene oder erodierte Vulkankegel, die von Saumriffen umgeben und durch Passagen mit dem offenen Pazifik verbunden sind. Zwischen Riff und Insel entsteht die Lagune – ein ideales Revier für Katamarane.
            </p>

            <h5 className="text-lg font-medium text-gray-800 mb-3">Windward Islands – Tahiti, Moorea, Tetiaroa</h5>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-600">
              <li><strong>Tahiti</strong> ist das wirtschaftliche und logistische Zentrum. In Papeete (Tahiti Nui) und an der Westküste (z. B. Marina Taina) finden Sie die größte Auswahl an Yachten, Proviant und Technik. Nautisch interessant sind die Lagunenpassagen entlang der Küste – wer hier einsteigt, profitiert von optimaler Infrastruktur.</li>
              <li><strong>Moorea</strong> liegt nur eine kurze Überfahrt nördlich von Tahiti. Die beiden ikonischen Buchten Cook's Bay und Opunohu Bay ragen tief ins Inselinnere; zwischen ihnen zieht sich eine bilderbuchhafte Küstenlinie mit Ankerplätzen und Moorings. Wanderungen zu Aussichtspunkten, Vanilleplantagen, Schnorchelplätze mit Rochen und Schwarzspitzenhaien – Moorea verbindet sichere Liegen mit großem Erlebnisfaktor.</li>
              <li><strong>Tetiaroa</strong>, das Atoll nördlich von Tahiti, ist ein Hochglanzmotiv: eine kreisrunde Lagune, Korallenringe, Sandbänke in Pastelltönen. Aufgrund des Tiefgangs und der Passbeschaffenheit ist die Ansteuerung wetterabhängig; Katamarane mit geringem Tiefgang sind hier klar im Vorteil. Tetiaroa eignet sich für erfahrene Crews oder als geführter Ausflug.</li>
            </ul>

            <h5 className="text-lg font-medium text-gray-800 mb-3">Leeward Islands – Raiatea, Taha'a, Huahine, Bora Bora, Maupiti</h5>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-600">
              <li><strong>Raiatea</strong> ist das traditionelle Segelzentrum der Leeward Islands – mit guten Charterbasen rund um Uturoa/Apooiti. Die Lagunen von Raiatea und Taha'a sind teilweise verbunden, sodass Sie über lange Strecken innerhalb des Riffs fahren können – entspannt, geschützt und spektakulär. Taha'a ist die „Vanille-Insel": duftende Plantagen, Perlenfarmen und flache Motu-Ankerplätze.</li>
              <li><strong>Huahine</strong> ist wilder und ursprünglicher: zwei Hauptlagunen, zahlreiche Motu (Sandinselchen) und ruhige Ankerbuchten. Die Pässe sind gut betonnt, erfordern aber – wie überall – Passagensorgfalt bei Strömung und Welle.</li>
              <li><strong>Bora Bora</strong> gilt als die Lagune: der Vulkankegel Otemanu ragt wie eine Kathedrale auf, ringsum liegen Sandbänke und Motu-Resorts. Hier fährt man Lagunen-Kurse in allen Türkisnuancen, nimmt Moorings in Resorts-Nähe oder sucht sich stille Ecken im Lee – ein Schauplatz, an dem der Katamaran mit seinen großen Decksflächen besonders glänzt.</li>
              <li><strong>Maupiti</strong> ist ein Geheimtipp am Rand des Archipels: spektakulär schön, aber die Passage ist schmal und strömungsstark, nur bei passenden Bedingungen zu befahren. Wer ein Zeitfenster findet, erlebt eine stille Schwester von Bora Bora – mit Ankerbuchten wie aus einem Südsee-Märchen.</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Tuamotu-Archipel</h4>
            <p className="text-lg text-gray-600 mb-4">
              Die Tuamotu sind eine Kette flacher Korallenatolle – endlose Horizonte, leuchtende Lagunen, weltklasse Tauchgebiete. Die nautische Herausforderung steigt: tidenabhängige Passdurchfahrten (Slack-Water-Timing!), strömungsreiche Kanäle, Korallenköpfe und zum Teil fehlende Landabdeckung gegen Schwell. Für erfahrene Skipper und Katamaran-Crews aber ein Traum: Das geringe Eintauchen erlaubt sichere Ansteuerungen auf Sandflecken, die breite Plattform liegt selbst bei Restschwell ruhig. Beliebte Atolle (abhängig von Genehmigungen und Charterbedingungen) sind Rangiroa, Tikehau, Fakarava – Namen, die für klare Sichtweiten, Haigärten und absolute Ruhe stehen.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Australinseln, Marquesas, Gambier (optional)</h4>
            <p className="text-lg text-gray-600 mb-6">
              Diese Gruppen liegen abseits der klassischen Charterradien. Marquesas sind hoch aufragende Vulkaninseln ohne Saumriff – spektakulär, aber nautisch offen und oft schwellbehaftet, eher für Langfahrtsegler. Austral und Gambier sind klimatisch und logistisch anspruchsvoller. Für den Urlaubscharter empfehlen wir die Gesellschaftsinseln und – bei Erfahrung – ausgewählte Tuamotu.
            </p>

            {/* Erreichbarkeit Box */}
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Erreichbarkeit – so kommen Sie entspannt an</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Internationale Flüge nach Tahiti (PPT, Papeete):</strong> z. B. via Paris/USA/Neuseeland mit Umstieg; zunehmende Direktverbindungen aus den USA und ggf. saisonal aus Europa.</li>
                <li><strong>Inlandsflüge zu den Basen:</strong> schnelle Verbindungen Tahiti ↔ Raiatea, Bora Bora, Huahine – ideal, wenn Sie direkt bei der lokalen Charterbasis übernehmen.</li>
                <li><strong>Transfers & Logistik:</strong> organisierte Shuttles von den Flughäfen zu Marinas und Yachthäfen; Proviantlieferungen sind üblich und erleichtern den Start.</li>
                <li><strong>Einreise & Zeitfenster:</strong> Reisepass, ggf. elektronische Einreiseformalitäten; wegen der Zeitzonen empfiehlt sich eine Anreiselocation mit einer Übernachtung vor Törnbeginn.</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Marinas & Ausgangshäfen – wo Ihr Törn beginnt</h3>
            <p className="text-lg text-gray-600 mb-4">
              Die maritime Infrastruktur ist in den Gesellschaftsinseln gut ausgebaut, mit Fokus auf Tahiti und den Leeward Islands:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-600">
              <li><strong>Tahiti (Papeete, Marina Papeete / Marina Taina):</strong> Größte Auswahl an Segelyachten, Katamaranen und Motoryachten, exzellente Chandlery, Technik, Fuel-Dock, Wasser/Power, WLAN und Einkauf (Supermärkte in Reichweite).</li>
              <li><strong>Raiatea (Uturoa/Apooiti):</strong> Wichtigster Charterhub der Leewards. Viele Flotten stationieren hier ihre Multihulls; Ersatzteile, Werkstätten und Proviantierung sind zuverlässig verfügbar.</li>
              <li><strong>Bora Bora (Vaitape/Bora Bora Yacht Club – Moorings):</strong> Kein klassischer Yachthafen, dafür gut organisierte Mooringfelder, Serviceboote und Resort-Stege. Perfekt für Lagunen-Hopping mit Aussicht auf den Otemanu.</li>
              <li><strong>Huahine (Fare – Moorings/Kommunalstege):</strong> Charmanter Ort mit Märkten, kleinen Supermärkten und entspannten Ankerplätzen in Lagunennähe.</li>
              <li><strong>Moorea (Cook's Bay/Opunohu – Moorings):</strong> Guter Einstieg von Tahiti, ideal für den ersten Lagunentag.</li>
            </ul>
            <p className="text-lg text-gray-600 mb-6">
              <strong>Flotten & Schiffe:</strong> Für Yachtcharter Französisch-Polynesien dominieren Katamarane (40–52 ft) – wegen Komfort, Stabilität und Tiefgangsvorteil. Monohulls sind ebenfalls verfügbar, besonders für Crews, die das klassische Segelgefühl schätzen. Viele Anbieter bieten Skipper, Hostess/Koch und Water-Toys (SUP, Kajaks, Schnorchel-Gear) an – perfekt für Familien und Freunde.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Beliebte Törnziele – Lagunen, Pässe & Motu-Traumstrände</h3>
            
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Bora Bora – die Ikone</h4>
            <p className="text-lg text-gray-600 mb-4">
              Die Lagune von Bora Bora ist eine Bühne aus Blau: Moorings nahe Motu Toopua, Badepausen über Sandbänken, Dinner-Stopps an Resortstege (nach Voranmeldung). Nautisch wichtig sind Tiefenlinien und Korallenköpfe – tagsüber gut zu erkennen; Lookout am Bug und Sonnenstand einplanen. Mit dem Katamaran manövrieren Sie souverän in flachen Bereichen; die Nacht liegt ruhig im Leeschutz des Riffs.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Moorea – Bergkulisse & Rochen</h4>
            <p className="text-lg text-gray-600 mb-4">
              Opunohu und Cook's Bay bieten sichere Ankerplätze und Moorings. Zwischen den Buchten liegen Schnorchelareale mit Rochen und Riffhaien (respektvoller Abstand!). An Land lohnen Wanderungen zum Belvédère-Lookout, Vanilleverkostungen und Kulturstätten (Marae).
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Raiatea & Taha'a – verbunden durch die Lagune</h4>
            <p className="text-lg text-gray-600 mb-4">
              Zwischen Raiatea und Taha'a fahren Sie kilometerlang innerhalb des Riffs – ein Paradies für Lagunen-Navigation. Stopps an Perlenfarmen und Vanilleplantagen, Ankerplätze über Sand im Lee der Motu, Schnorcheltrails entlang der Passkanäle. Der geringe Tiefgang des Katamarans eröffnet Optionen, die Monohulls oft verwehrt bleiben.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Huahine – die Ursprüngliche</h4>
            <p className="text-lg text-gray-600 mb-4">
              Fare ist das Herz; rund um die Insel finden Sie Motu-Ankerplätze, Mangrovenbuchten und flache Lagunenarme. Die Pässe sind erprobt, doch Strömung und Sicht entscheiden. Belohnung: menschenleere Sandzungen, Polynesien wie vor Jahrzehnten.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Tetiaroa – Atollträume in Reichweite</h4>
            <p className="text-lg text-gray-600 mb-4">
              Bei passenden Bedingungen ist Tetiaroa ein Traum. Katamarane profitieren vom Tiefgang in der Lagune; die Einfahrt bleibt aber wetter- und erfahrungsabhängig. Vor Ort: Sandbänke, klares Wasser, Vogelkolonien – sensibel besuchen und Schutzregeln beachten.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Tuamotu – für die Könner</h4>
            <p className="text-lg text-gray-600 mb-6">
              Wer Erfahrung mit Pass-Timing und Strömungsnavigation mitbringt, findet in Atollen wie Fakarava oder Rangiroa ein Revier der Superlative: Slack-Water berechnen, Moorings im Innern nutzen, auf Bommies achten, Sandflecken zum Ankern wählen. Der Katamaran liegt angenehm ruhig, selbst wenn außerhalb der Lagune Dünung läuft.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Routenvorschlag – Leeward Islands (10 Tage, katamaranfreundlich)</h3>
            
            <div className="border-l-4 border-primary pl-4 mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 1: Raiatea – Übernahme & Einsegeln</h4>
              <p className="text-gray-600">
                Ankunft in Uturoa/Apooiti, Proviant und Crew-Briefing. Nach dem Check-in kurzer Einsegel-Schlag innerhalb der Lagune Richtung Taha'a. Erster Badestopp über hellem Sand vor einem Motu im Lee – perfekter Einstieg für SUP und Schnorchel. Nacht an einem gut geschützten Ankerplatz im Westen von Taha'a.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 2: Taha'a – Vanille, Perlen & Korallengarten</h4>
              <p className="text-gray-600">
                Vormittags Besuch einer Perlenfarm und – je nach Zeit – einer Vanilleplantage an Land. Danach zum berühmten Korallengarten (drift snorkel) zwischen Taha'a und Raiatea: Der Katamaran liegt ruhig in flachem Wasser, das Beiboot begleitet die Driftschnorchel-Route. Sunset im Leeschutz eines Motu, Sterne über der Lagune.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 3: Taha'a → Huahine (Fare)</h4>
              <p className="text-gray-600">
                Früher Start, Passfenster prüfen und aus der Lagune von Raiatea/Taha'a ins freie Wasser. Mit der Passatbrise Kurs auf Huahine, Ansteuerung eines nördlichen Passes (z. B. Avamoa) und Weiterfahrt innerhalb der Lagune nach Fare. Mooring/Ankerplatz vor dem Ort; Bummel über den Markt, frischer Thun und Mangos für den Grill.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 4: Huahine – Südlagune & Baie d'Avea</h4>
              <p className="text-gray-600">
                Lagunenfahrt entlang der Ostseite nach Süden. Zwischenstopps an Sandbänken, Schnorchelpause an Riffnasen. Ziel ist die weite Baie d'Avea: glasklar, sandiger Grund, ruhige Nacht. An Land kurze Wanderung, am Abend BBQ an Bord – der geringe Tiefgang des Katamarans bringt Sie nah an den Strand.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 5: Huahine → Taha'a/Raiatea (Motu-Tage)</h4>
              <p className="text-gray-600">
                Rückweg über das Passfenster nach Taha'a/Raiatea. Drinnen angekommen, entspanntes Lagunen-Cruisen: Motu-Hopping, Seegraswiesen, Schildkröten-Spotting. Ankern über Sand am Motu Tau Tau oder Ceran – türkisfarbene Badewanne inklusive.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 6: Taha'a → Bora Bora (Teavanui-Pass)</h4>
              <p className="text-gray-600">
                Früh los, um bei stabiler Brise die Inselquerung zu genießen. Einlaufen durch den Teavanui-Pass nach Bora Bora und auf Mooring vor Motu Toopua oder im Lee des Otemanu festmachen. SUP-Runde durchs Milchglasblau, Sundowner mit Blick auf den Vulkendom – Südsee-Kino in XXL.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 7: Bora Bora – Lagunenrunde Südost</h4>
              <p className="text-gray-600">
                Lagunenfahrt in den Südost-Sektor: Sandzungen, flache Kanäle, katamaranfreundliche Wassertiefen. Schnorcheln an Korallenblöcken, Badepausen an schneeweißen Bänken. Abends – nach Voranmeldung – optionales Dinner am Resortsteg oder ruhige Nacht an einer Mooring im Leeschutz.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 8: Bora Bora – Anau & Faanui</h4>
              <p className="text-gray-600">
                Morgens Richtung Anau (saisonal Manta-Sichtungen), tagsüber Schnorchel- und Fotostopps. Weiter in die Lagune von Faanui – deutlich ruhiger, ideal für eine zweite Nacht auf Bora Bora abseits des Trubels. Das breite Vorschiff des Katamarans wird zur Lounge unter Sternen.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 9: Bora Bora → Raiatea (Uturoa)</h4>
              <p className="text-gray-600">
                Rücketappe bei Passatwind, Einlaufen in Raiatea durch einen nördlichen Pass. Optional kurzer Stopp im Ort Uturoa (Früchte, Vanille, Baguette), anschließend letzte Nacht vor einem Motu in der gemeinsamen Lagune von Raiatea/Taha'a. Badefinale, SUP bis zum Strand, Erinnerungsfotos im Abendlicht.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tag 10: Raiatea – Bunkern, Fuel & Check-out</h4>
              <p className="text-gray-600">
                Gemütliche Lagunenfahrt zurück zur Charterbasis. Fuel-Dock, Wasser auffüllen, Müllentsorgung, Törnabschluss. Zeit für ein Abschiedsfrühstück im Café am Kai – und das Versprechen, wiederzukommen.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Alternativ: Kompaktvariante (7 Tage)</h3>
            
            <div className="border-l-4 border-primary pl-4 mb-2">
              <p className="text-gray-600"><strong>Tag 1:</strong> Raiatea → Taha'a (Motu im Westen).</p>
            </div>
            <div className="border-l-4 border-primary pl-4 mb-2">
              <p className="text-gray-600"><strong>Tag 2:</strong> Taha'a (Perlenfarm, Korallengarten) – Motu-Nacht.</p>
            </div>
            <div className="border-l-4 border-primary pl-4 mb-2">
              <p className="text-gray-600"><strong>Tag 3:</strong> Taha'a → Huahine (Fare), Buchtbummel.</p>
            </div>
            <div className="border-l-4 border-primary pl-4 mb-2">
              <p className="text-gray-600"><strong>Tag 4:</strong> Huahine Süd (Baie d'Avea), Schnorcheln & Strand.</p>
            </div>
            <div className="border-l-4 border-primary pl-4 mb-2">
              <p className="text-gray-600"><strong>Tag 5:</strong> Huahine → Bora Bora (Teavanui), Mooring Motu Toopua.</p>
            </div>
            <div className="border-l-4 border-primary pl-4 mb-2">
              <p className="text-gray-600"><strong>Tag 6:</strong> Bora Bora Lagunenrunde (Südost), Resort-Dinner optional.</p>
            </div>
            <div className="border-l-4 border-primary pl-4 mb-6">
              <p className="text-gray-600"><strong>Tag 7:</strong> Bora Bora → Raiatea, Rückgabe.</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Praktische Hinweise für beide Varianten</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6 text-gray-600">
              <li><strong>Passagen & Timing:</strong> Passdurchfahrten mit Slack Water oder moderater Strömung planen; mittägliches Sonnenlicht hilft, Bommies sicher zu erkennen.</li>
              <li><strong>Ankern & Moorings:</strong> In den Lagunen Sandflecken suchen, Korallen meiden. Moorings nutzen, wo vorhanden. Ein Lookout am Bug zahlt sich aus.</li>
              <li><strong>Katamaran-Vorteil:</strong> Geringer Tiefgang für Motu-Nähe, breite Plattform für ruhige Nächte, viel Stauraum für SUP, Schnorchel- und Tauchgear – ideal für Familien und Crews, die Badezeiten lieben.</li>
              <li><strong>Wetter & Wind:</strong> Meist südöstliche Passatwinde. Bei auffrischender Brise früh starten, nachmittags rechtzeitig im Leeschutz liegen.</li>
              <li><strong>Landaktivitäten:</strong> Perlenfarmen, Vanilleplantagen, Marae-Stätten, Lookouts (Moorea/Huahine), Resort-Stopps auf Bora Bora – rechtzeitig reservieren.</li>
            </ul>

            <p className="text-lg text-gray-600 mb-6">
              Mit diesem Plan erleben Sie die Essenz der Leeward Islands: geschützte Lagunen, kurze Schläge, ikonische Panoramen – und die Freiheit, dank Katamaran jeden Badestopp in eine private Südsee-Szene zu verwandeln.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              <strong>Tipp:</strong> Mittagslicht für Lagunenfahrten einplanen (bester Kontrast auf Bommies), Lookout am Bug und Trackaufzeichnung im Plotter – besonders beim Einfahren in flache Motu-Buchten.
            </p>

            {/* Wetter Box */}
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Wetter & Windbedingungen – Passat, Schauer, Palmenrauschen</h3>
              <p className="text-lg text-gray-600 mb-4">
                Das Klima ist tropisch und wird von den südöstlichen Passatwinden geprägt.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li><strong>„Winter"/Trockenzeit (Mai–Oktober):</strong> häufig beständige Passatbrise (SE-E), geringe Luftfeuchte, sehr gute Sicht – ideal für Inselhüpfen. Einzelne Fronten bringen frischen Wind; in den Passagen kann es ruppig werden. Katamarane punkten hier mit Stabilität und hoher Durchschnittsfahrt.</li>
                <li><strong>„Sommer"/Regenzeit (November–April):</strong> wärmer, feuchter, gelegentliche Schauer und Gewitterzellen, die lokal starken Wind bringen können. Die Lagunen bleiben meist ruhig; Ankerplätze sind gut geschützt. Zyklone sind in dieser Region selten, aber nicht ausgeschlossen – Wetterfenster prüfen, Marina-Optionen parat halten.</li>
              </ul>
              <p className="text-lg text-gray-600 mb-2">Eignung nach Erfahrungsstufen:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                <li><strong>Einsteiger & Familien</strong> fühlen sich in den Leeward Islands wohl: kurze Etappen, gute Moorings, viele Lee-Ankerplätze.</li>
                <li><strong>Fortgeschrittene</strong> genießen längere Linien zwischen Raiatea, Huahine und Bora Bora und erkunden bei passenden Bedingungen Tetiaroa.</li>
                <li><strong>Erfahrene Skipper</strong> wagen den Schritt in die Tuamotu – mit Pass-Timing, Strömungstaktik und sorgfältiger Routenplanung.</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Der Katamaran macht in allen Szenarien den Unterschied: weniger Krängung, ruhiges Liegen in Lagunen, flache Ansteuerung von Motu-Buchten und viel Decksfläche für Bade- und Schnorchelpause.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Beste Reisezeit</h3>
            <p className="text-lg text-gray-600 mb-6">
              Die Hauptsaison liegt zwischen Mai und Oktober: beständige Winde, angenehme Temperaturen, hervorragende Sicht – perfekt für Yachtcharter Französisch-Polynesien und Katamaran-Törns. Schulterzeiten (April, November) bieten oft ruhige Bedingungen bei etwas höherer Luftfeuchte und weniger Andrang. In der Sommerzeit (Dezember–März) locken warme Lagunen und üppiges Grün – ideal für Crews, die flexibel sind und Wetterfenster nutzen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Deshalb sollten Sie in Französisch Polynesien einmal gewesen sein</h3>
            <p className="text-lg text-gray-600 mb-4">
              Französisch-Polynesien vereint polynesisches Flair, exotische Inselvielfalt und abwechslungsreiche Segelbedingungen in einem Revier, das seltene Leichtigkeit ausstrahlt. Die Gesellschaftsinseln liefern sichere Lagunen und kurze Hüpfer, Bora Bora und Moorea entfachen Gänsehaut mit ikonischen Kulissen, Raiatea/Taha'a stehen für entspanntes Lagunen-Cruising, und die Tuamotu bieten – für die Erfahrenen – die hohe Schule der Passnavigation. Katamarane sind hier König: geringer Tiefgang für Motu-Buchten, stabiler Liegekomfort für erholsame Nächte, viel Platz für Familie, Freunde und Ausrüstung – und ein Badeplattform-Lebensgefühl, das man so nur in einer polynesischen Lagune erlebt.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Mit einem Yachtcharter in Französisch-Polynesien entscheiden Sie sich für entschleunigtes Reisen: morgens der erste Sprung in warmes Wasser, mittags eine Lagunenfahrt im Farbverlauf von Türkis bis Kobaltblau, abends Ukulele-Klänge, Vanilleduft und Sterne, so dicht wie auf einer gemalten Leinwand. Dieses Revier berührt – und bleibt.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Sie möchten Französisch-Polynesien per Yachtcharter entdecken? Sagen Sie uns Crewgröße, Reisezeit und Yachtwunsch – Segelyacht oder lieber Katamaran. Wir prüfen Flugverbindungen nach Tahiti, reservieren Marina-Liegeplätze oder Moorings, organisieren Transfers, Proviantlieferung sowie – auf Wunsch – Skipper und Crew. Dazu erhalten Sie unseren maßgeschneiderten Törnplan: sichere Passfenster, Lagunenrouten mit Sand-Ankerplätzen, Tipps zu Schnorchel-Spots, Motu-Picknicks und kulturellen Highlights.
            </p>

            {/* CTA Box */}
            <div className="bg-blue-50 p-8 rounded-lg text-center mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Bereit für Französisch-Polynesien?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Entdecken Sie das Herz des Südpazifiks mit seinen türkisblauen Lagunen, 
                smaragdgrünen Vulkaninseln und authentischer polynesischer Kultur.
              </p>
              <CharterRequestForm>
                <Button className="bg-blue-600 text-white hover:bg-blue-700" size="lg">
                  Französisch-Polynesien Charter anfragen
                </Button>
              </CharterRequestForm>
            </div>
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full max-w-2xl mx-auto">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    {region.cities && <div className="grid grid-cols-2 gap-2">
                        {region.cities.map((city, idx) => <div key={idx} className="text-sm text-blue-600 font-medium">
                            • {city}
                          </div>)}
                      </div>}
                  </CardContent>
                </Card>
              </Link>)}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ zu Yachtcharter in Französisch-Polynesien</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Welche Segelscheine brauche ich für einen Bareboat-Charter?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Für einen Bareboat-Charter in Französisch-Polynesien verlangt die Charterbasis einen international anerkannten Bootsführerschein, der zur Größe und Motorisierung der Yacht passt. Häufig akzeptiert werden der ICC (International Certificate of Competence) oder ein gleichwertiger nationaler Schein wie SKS/FB2 bzw. RYA. Ein Funkzeugnis wie SRC ist sehr zu empfehlen, da UKW-Funk für Sicherheit und Hafenkommunikation zum Standard gehört. Wer keinen Schein oder wenig Erfahrung hat, bucht einen Skipper und segelt als Skippered- oder Crewed-Charter; so genießen Sie das Revier ohne Navigationsverantwortung.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Für welches Erfahrungsniveau eignet sich das Revier – und warum gelten Katamarane als erste Wahl?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Die Gesellschaftsinseln mit Tahiti, Moorea, Raiatea, Taha'a, Huahine und Bora Bora sind für Einsteiger und Familien hervorragend geeignet, weil viele Etappen innerhalb der Lagunen gefahren werden und die Distanzen überschaubar sind. Ein Katamaran punktet hier gleich doppelt: Der geringe Tiefgang eröffnet flache Motu-Buchten und komfortable Ansteuerungen über Sand, die breite Plattform liegt in Lagunen auffallend ruhig, und das Platzangebot an Deck und im Salon macht den Bordalltag entspannt. Fortgeschrittene Crews haben ihren Spaß an Passfahrten und längeren Schlägen zwischen den Inseln. Die Tuamotu-Atolle sind das Königskapitel für sehr erfahrene Skipper, denn hier sind Pass-Strömungen, Slack-Water-Timing und Korallennavigation entscheidend.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Wie sind Wind, Wetter und Jahreszeiten in Französisch-Polynesien?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Das Klima ist tropisch mit verlässlichen Passatwinden aus östlichen bis südöstlichen Richtungen. In der sogenannten Trockenzeit von Mai bis Oktober herrschen meist moderate, stabile Bedingungen, die Sicht ist klar und die Luftfeuchte niedriger – das ist die beliebteste Zeit für Yachtcharter. Von November bis April ist es wärmer und feuchter, mit mehr Schauern und lokalen Böen. Tropische Störungen sind selten, aber möglich; wer in dieser Periode reist, beobachtet die Vorhersagen aufmerksam und plant flexible Etappen sowie sichere Ausweichplätze ein. In den Lagunen bleibt das Wasser häufig ruhig, auf offenen Passagen zwischen den Inseln kann eine frische Brise zulegen. Katamarane dämpfen Krängung und Schwell spürbar und sorgen so auch bei wechselnden Bedingungen für gelassenes Segeln.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Wann ist die beste Reisezeit für einen Törn?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Als Faustregel gelten die Monate Mai bis Oktober als ideal: konstante Passatbrise, angenehme Temperaturen und sehr gute Sicht unter Wasser. Schultermonate wie April und November sind oft ebenfalls attraktiv, mit etwas mehr Wärme und weniger Andrang. In den Sommermonaten Dezember bis März segeln Flexiblere und Ruhesuchende, die gelegentliche Schauer und ein wachsames Auge auf das Wetter in Kauf nehmen.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Worin unterscheidet sich die Navigation in Lagunen und Atollen von europäischen Revieren?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Das Besondere sind die Saumriffe, die durch markierte Pässe mit dem Ozean verbunden sind. Innerhalb des Riffs fahren Sie in türkisfarbenem, meist ruhigem Wasser, doch müssen überall Korallenköpfe – die sogenannten Bommies – beachtet werden. Augennavigation ist hier genauso wichtig wie Plotter und Papierkarte. Fahren Sie heikle Abschnitte am besten bei hohem Sonnenstand und mit einem Ausguck am Bug, der Sandflächen von Koralle unterscheiden kann. Bei Passdurchfahrten sind Strömung und Wellenauflauf zu berücksichtigen; ideal ist das Zeitfenster um den Stillstand der Tide, wenn die Strömung schwächer ist und die Sicht in der Einfahrt besser. In den Tuamotu-Atollen kommt hinzu, dass die Passströme kraftvoll sein können; dort ist saubere Tiden- und Wetterplanung unverzichtbar.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Wo darf ich ankern und gibt es Moorings?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">In vielen Lagunen ankern Sie über hellem Sand, stets mit gebührendem Abstand zu Korallen- und Seegrasflächen. In beliebten Zonen rund um Resorts oder empfindliche Riffbereiche sind Mooringbojen ausgelegt, die zu nutzen sind, teils gegen Gebühr. Ankern auf Koralle ist tabu, weil Anker und Kette die Lebensräume dauerhaft schädigen. Manche Gemeinden und Parks verwalten Schutzbereiche mit klaren Regeln; die Basen geben dazu aktuelle Hinweise und Karten aus. In Bora Bora beispielsweise sind weite Teile der Lagune mooringpflichtig, während Sandflächen abseits der Riffe frei nutzbar bleiben.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Welche Umweltschutzregeln sollte ich beachten?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Französisch-Polynesien schützt seine Lagunen konsequent. Abwasser wird nicht eingeleitet, Müll gehört in die Hafenentsorgung, und Treibstoffe oder Öle sind sorgfältig zu handhaben. Beim Schnorcheln und Tauchen gilt: nichts anfassen, nichts mitnehmen, keine Fische füttern. Dingi-Ritte durch sehr flache Lagunenarme erfolgen langsam, um Seegras und Jungfische zu schonen. Viele Strände und Motu sind privat; Respekt vor Grundstücken und traditionelle Gastfreundschaft schließen einander nicht aus – fragen ist besser als einfach anlanden.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>Wie funktioniert Check-in und Check-out bei einem Charter?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Die Übergabe beginnt mit einem ausführlichen Briefing zu Yacht, Ausrüstung, Funkkanälen, lokalen Regeln und Pass-Besonderheiten. Ein kurzer Probeschlag in der Lagune ist üblich, damit man Antrieb, Ankerwinde und Manöver checken kann. Beim Check-out wird im Regelfall in der Übernahmebasis abgegeben; Kraftstoff, Wassertanks und Abfallentsorgung werden wie im Vertrag vereinbart erledigt. Wer Einweg-Törns plant, etwa von Raiatea nach Bora Bora, klärt Verfügbarkeit und Rückführung rechtzeitig.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>Wie steht es um Proviant, Wasser und Versorgung unterwegs?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Auf Tahiti, Raiatea, Huahine und Bora Bora gibt es gut sortierte Supermärkte, Märkte mit Obst und Gemüse sowie Bäckereien. Viele Basen bieten Vorbestellung und liefern direkt an den Steg. In den Lagunen helfen kleine Läden, Resorts oder Farmen mit Grundbedarf, doch die Auswahl ist eingeschränkt und die Preise höher. Wasser kann in Marinas oder an kommunalen Pontons gebunkert werden; auf längeren Strecken hilft die Bord-Entsalzungsanlage, die viele Katamarane serienmäßig an Bord haben. Frischer Fisch ist reichlich vorhanden, allerdings ist in Teilen der Südsee Ciguatera möglich – informieren Sie sich lokal, welche Arten und Fanggebiete unbedenklich sind.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>Welche Distanzen sind realistisch und wie plant man einen typischen Törn?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Zwischen den Leeward-Inseln liegen meist Tagesdistanzen zwischen 20 und 35 Seemeilen. Ein klassischer Kurs verbindet Raiatea, Taha'a und Huahine mit Bora Bora, wobei lange Abschnitte innerhalb der Lagune gefahren werden. Ein gutes Tagesmuster lautet: am Vormittag die Passage oder den offenen Schlag erledigen, mittags in die Lagune einlaufen und am frühen Nachmittag den Anker über Sand fallen lassen. So bleibt Zeit für Schnorcheltrails, Motu-Spaziergänge und einen ruhigen Abend im Leeschutz. Wer weiter hinaus in die Tuamotu segelt, kalkuliert zusätzliche Tage für Wetterfenster, Pass-Timing und größere Distanzen ein.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger>Ist Yachtcharter in Französisch-Polynesien familienfreundlich?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Ja, und gerade Katamarane machen es besonders komfortabel. Der geringe Tiefgang bringt Sie nah an Strände, die große Terrasse am Heck wird zum Badeplateau, und die Doppelrümpfe liegen auch bei Brise gemütlich. Kinder lieben die einfache Abfolge aus kurzer Etappe, Mittagsschwimmen und Lagunen-Action. Schwimmwesten und Sonnenschutz sind Pflicht, rutschfeste Schuhe schützen vor Riffkratzern, und beim Schnorcheln gilt Abstand zu Rochen, Haien und Schildkröten.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger>Gibt es besondere Sicherheitsaspekte, auf die ich achten sollte?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Das Revier ist sicher, sofern man die eigenen Grenzen kennt und die lokalen Besonderheiten ernst nimmt. Passfahrten nur bei ausreichend Sicht, Strömungen vorher prüfen, in der Lagune nie mit Speed unterwegs sein und die Kette so stecken, dass sie Sand berührt, nicht Koralle. Ein zuverlässiges Dingi mit Außenborder ist essenziell, ebenso eine starke Taschenlampe für nächtliche Wege, auch wenn Nachtfahrten selbst zu vermeiden sind. Bei Schauerböen oder Frontdurchgang bleiben Sie innerhalb der Lagune, wo die Welle klein bleibt.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger>Wie bezahle ich vor Ort und wie bleibe ich verbunden?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Währung ist der CFP-Franc (XPF). In den größeren Orten gibt es Kartenakzeptanz und Geldautomaten, auf kleineren Inseln empfiehlt sich Bargeld. Für Kommunikation funktionieren lokale SIM-Karten gut; Marinas, Resorts und manche Moorea- oder Bora-Bora-Motu bieten zusätzlich WLAN. UKW-Funk bleibt das wichtigste Bordmittel; Hören auf Kanal 16 ist üblich.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger>Kann ich Tauchen, Kiten oder mit Water-Toys fahren?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Schnorcheln ist überall exzellent, Tauchen organisieren Sie am besten mit lizenzierten Centers in Tahiti, Moorea, Rangiroa oder Fakarava. Kite- und Wing-Spots existieren in flachen Lagunenbereichen, doch Sicherheitsabstände, Startzonen und Windfenster müssen respektiert werden. SUP und Kajak sind ideale Begleiter und meist im Katamaran-Charter enthalten.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger>Warum sollte ich meinen Törn frühzeitig buchen?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">Die Zahl der Charteryachten ist begrenzt, besonders bei Katamaranen mit vier oder mehr Kabinen. Hinzu kommt die hohe Nachfrage in der Trockenzeit. Wer früh bucht, sichert sich die Wunsch-Yacht, spart bei Flügen nach Papeete und kann Liege- oder Mooring-Optionen an beliebten Spots entspannt reservieren.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16">
                <AccordionTrigger>Was ist der größte „Geheimtipp" für ein entspanntes Inselhüpfen?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                     <p className="text-lg text-gray-600">Planen Sie Ihre heiklen Manöver ins beste Licht: Pass-Einfahrten und Bommie-Zonen bei Mittagssonne, Lagunen-Transfers mit einem Ausguck am Bug, längere offenen Schläge am Vormittag. Nutzen Sie die Stärken des Katamarans – geringe Tiefe, breite Plattform, viel Schatten – und lassen Sie den Nachmittag der Lagune, dem Wasser und dem Himmel. Genau dann entfaltet Französisch-Polynesien seinen Zauber, und genau dafür kommt man hierher.</p>
                     <p className="text-lg text-gray-600">Diese FAQ soll Ihnen die wichtigsten Fragen zu Yachtcharter in Französisch-Polynesien beantworten. Wenn Sie Details zu Routen, Permit-Situationen, Mooring-Regeln oder Verfügbarkeiten wünschen, beraten wir Sie persönlich, stellen aktuelle Karten und Hinweise der Basen zusammen und entwickeln einen Törnplan, der zu Ihrer Crew, Ihrem Zeitfenster und Ihrem Wunsch nach Südsee-Magie passt.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Französisch Polynesien?
            </h3>
            <p className="mb-6 text-blue-100">
              Erfüllen Sie sich den Traum von der perfekten Südsee mit 
              Tahiti, Bora Bora und den traumhaften Gesellschaftsinseln.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Französisch Polynesien Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default FrenchPolynesia;