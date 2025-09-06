import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import TerritoryMap from "@/components/TerritoryMap";
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const IonicIslands = () => {
  const m = META.ionisches;
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };

  const ionicStructuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "name": "Yachtcharter Ionische Inseln",
    "description": "Segeln Ionische Inseln: Sanfte Winde, grüne Landschaften, Korfu & Lefkada.",
    "provider": {
      "@type": "Organization",
      "name": "Charter Transparenz"
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Westgriechenland"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Familien & Einsteiger"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Sanfte Winde"
  }];
  const cities = ["Korfu", "Lefkada", "Kefalonia", "Zakynthos", "Ithaka", "Paxos"];
  const highlights = ["Familienfreundliche Windverhältnisse", "Grüne, bergige Inseln", "Traumhafte Sandstrände", "Venezianisches Erbe", "Kurze Distanzen", "Geschützte Ankerplätze", "Authentisches Griechenland"];
  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        keywords={m.keywords}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      />
      <JsonLd json={ionicStructuredData} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/ac12d7be-4a6e-4ac7-90b1-6d045810cae8.png" alt="Yachtcharter Ionische Inseln - Segelboot vor grünen Küsten von Korfu und Lefkada bei ruhiger See" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Ionische Inseln</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Yachtcharter Ionische Inseln</h1>
            <p className="text-xl max-w-2xl">
              Grüne Perlen des Ionischen Meeres
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer/griechenland" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Griechenland
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
                  <Link to="/reviere/mittelmeer/griechenland">Griechenland</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Ionische Inseln</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="hidden md:grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => {
            const getAnchorLink = (label) => {
              switch(label) {
                case "Lage": return "#marinas-ausgangshaefen";
                case "Beste Zeit": return "#beste-reisezeit";
                case "Geeignet für": return "#warum-toern-klassiker";
                case "Besonderheit": return "#wetter-windbedingungen";
                default: return "#";
              }
            };
            
            return (
              <a key={index} href={getAnchorLink(fact.label)} className="block bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </a>
            );
          })}
        </div>

        {/* Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ionisches Meer</h2>
          <TerritoryMap
            region="Ionisches Meer"
            center={{ lat: 38.5, lng: 20.5 }}
            zoom={7}
            maptype="satellite"
            className="h-96"
          />
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Ionische Inseln ab Lefkada</h2>
            <p className="text-xl text-muted-foreground">
              Ihr Törn entlang der Westküste Griechenlands
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h3 id="warum-toern-klassiker" className="text-2xl font-bold mt-8 mb-4">Warum ein Törn im Ionischen Meer ein Klassiker ist</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die Ionischen Inseln stehen seit Jahrzehnten für entspanntes, zugleich vielfältiges Segeln. Der Segler findet hier eine Kombination, die selten so stimmig ist: ruhige See mit verlässlichen thermischen Winden, zahllose, gut geschützte Ankerbuchten mit sicherem Ankergrund, grüne, duftende Hänge aus Pinien und Zypressen sowie lebendige Hafenorte, in denen Tavernen, Cafés und kleine Läden direkt an der Kaimauer liegen. Im Zentrum dieser Inselwelt liegt Lefkada (Lefkas) – Ihr idealer Ausgangspunkt für Yachtcharter im Ionischen Meer entlang der westgriechischen Küste.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Wer ab Lefkada sticht, profitiert von kurzen Schlägen zwischen den Inseln, sehr guter nautischer Infrastruktur und einer Routenvielfalt, die sowohl Einsteiger als auch erfahrene Skipper begeistert. Die Navigation ist überwiegend übersichtlich, das Seegebiet durch die vorgelagerten Inseln gut abgeschirmt, und dennoch bietet das Revier genügend Abwechslung: vom familienfreundlichen Badestopp bis zum ambitionierten Tagestörn. Ob Monohull oder Katamaran, Bareboat oder mit Skipper – die Ionischen Inseln sind das Revier für den, der Segeln als Genuss begreift: stressfrei, naturnah und mit genügend Spielraum für spontane Kursänderungen.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Lefkada überzeugt zusätzlich mit einem reibungslosen Start in den Törn: moderne Marina, professionelle Charterbasen, eingespielte Check-in-Prozesse und Services von der Proviantlieferung bis zum Technik-Support. Nach dem Ablegen führt Sie der Weg durch den Lefkas-Kanal hinaus in ein Revier, das in alle Himmelsrichtungen Optionen bereithält – von den nahen Inseln Meganisi, Kalamos und Kastos über Ithaka und Kefalonia bis hinauf nach Paxos und Korfu.
            </p>

            <div className="mb-8">
              <img 
                src="/lovable-uploads/d746b3cd-24fc-4942-9308-28b2f14b45c6.png" 
                alt="Blick auf den Strand von Voutoumi auf der schönen Insel Antipaxos" 
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                Blick auf den Strand von Voutoumi auf der schönen Insel Antipaxos.
              </p>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Erreichbarkeit</h4>
              <p className="text-black mb-3">So reisen Chartergäste bequem nach Lefkada:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Direktflug nach Preveza (Aktion Airport, PVK):</strong> In der Saison bedienen zahlreiche Airlines den Flughafen Preveza</li>
                <li><strong>Kurzer Transfer zur Marina Lefkada:</strong> Von PVK zur Marina benötigen Sie in der Regel rund eine halbe Stunde</li>
                <li><strong>Mietwagen & Taxi:</strong> Am Flughafen stehen Mietwagenfirmen und Taxis bereit</li>
                <li><strong>Beste Infrastruktur vor Ort:</strong> Supermärkte, Bäckereien, nautische Fachgeschäfte in fußläufiger Entfernung</li>
              </ul>
            </div>

            <div id="marinas-ausgangshaefen" className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Marinas & Ausgangshäfen</h4>
              <p className="text-black mb-3">Die Ionischen Inseln verfügen über hervorragende maritime Infrastruktur:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Marina Lefkada (Lefkas Marina):</strong> Homebase mit breiten Boxengassen, Strom- und Wasseranschlüssen</li>
                <li><strong>Gouvia Marina (Korfu):</strong> Größte Marina Griechenlands, ideal für One-Way-Törns</li>
                <li><strong>Sami Marina (Kefalonia):</strong> Kompakt und gut geschützt, strategisch günstig gelegen</li>
                <li><strong>Kommunale Häfen:</strong> Zahlreiche Anleger mit Buganker und Heckleinen entlang der Route</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele – Inseln, Buchten, nautische Highlights</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Meganisi – der sanfte Einstieg</h4>
            <p className="mb-6">
              Meganisi liegt östlich von Lefkada und ist für den ersten Törntag ideal. Der Weg dorthin ist kurz und führt Sie in ein archipelartiges Labyrinth geschützter Buchten. Abelike ist ein Klassiker: sandig-schlickiger Ankergrund mit gutem Halt, viel Platz zum Schwojen und ein Ufer, an dem Heckleinen an Land gebracht werden können.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Kalamos & Kastos – authentische Nachbarn</h4>
            <p className="mb-6">
              Südöstlich von Meganisi liegen Kalamos und Kastos, zwei schmale, grüne Inseln mit starkem Charakter. Kastos wirkt wie aus der Zeit gefallen: ein Bilderbuchhafen mit Tavernen am Wasser, in denen man den Tagesfang noch vom Boot aus sieht.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Ithaka – auf den Spuren des Odysseus</h4>
            <p className="mb-6">
              Kioni gilt als einer der schönsten Orte des Ionischen Meeres: bunt getünchte Häuser, Bougainvilleen, die über Balkone ranken, und eine Uferpromenade, die abends zum Flanieren einlädt. Vathy – eine große, geschützte Naturbucht – bietet viel Raum zum Ankern.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Kefalonia – Vielfalt auf großem Fuß</h4>
            <p className="mb-6">
              Kefalonia präsentiert sich mit spektakulärer Kalksteinküste, dichtem Grün und einer Reihe markanter Orte. Fiskardo ist der wohl bekannteste: ein eleganter Naturhafen, gesäumt von Tavernen und Boutiquen. Kefalonia ist auch kulinarisch ein Highlight – die Insel ist für Wein und exzellentes Olivenöl bekannt.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Paxos & Antipaxos – Türkis in Vollendung</h4>
            <p className="mb-6">
              Wer den Kurs nach Norden verlängern möchte, plant Paxos und Antipaxos ein. Lakka ist berühmt für sein leuchtend türkisfarbenes Wasser und sandigen Grund, der Anker hält hier meist auf Anhieb.
            </p>

            <div className="mb-8">
              <img 
                src="/lovable-uploads/31f5fef2-6b0a-471a-9822-2e65dbf4639d.png" 
                alt="Lust zu schnorcheln?" 
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                Lust zu schnorcheln?
              </p>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black"><strong>Nautische Hinweise:</strong> Das Revier ist von verlässlichen thermischen Winden geprägt. Das Ankermanöver mit Buganker und Heckleinen ist Standard; der Grund besteht häufig aus Sand oder Sand-Schlick mit sehr gutem Halt.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ihr 7-Tage-Traumtörn ab Marina Lefkada</h3>
            <p className="mb-4 font-medium">Ein ausgewogener Mix aus entspanntem Cruisen, sicheren Nachtliegeplätzen und ausreichend Zeit für Landgänge:</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Lefkada → Meganisi (Vathi oder Abelike)</h5>
                <p className="text-sm text-muted-foreground">Ankommen, einspielen, erste Manöver. Passage durch den Lefkas-Kanal, anschließend ein kurzer Schlag ins geschützte Revier von Meganisi. Sicherer Ankergrund, ideal zum ersten Badestopp.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Meganisi → Kalamos</h5>
                <p className="text-sm text-muted-foreground">Ruhiger Vormittag, Schwimmen in einer der Ostbuchten Meganisis; bei einsetzender Brise gemütlich nach Kalamos. Buganker und Heckleinen; am Abend können Fallböen vom Berg stehen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Kalamos → Ithaka (Kioni oder Vathy)</h5>
                <p className="text-sm text-muted-foreground">Landschaftsreicher Kurs nach Ithaka – perfekt für Fotostopps und ein Bad in türkisfarbenen Buchten. Kioni mit Buganker und Heckleinen an Land; Vathy als große, geschützte Naturbucht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Ithaka → Kefalonia (Fiskardo oder Sami)</h5>
                <p className="text-sm text-muted-foreground">Genusssegeln mit maritimer Kulisse. Fiskardo für das venezianische Flair, Sami für Top-Infrastruktur und Landtouren. Spaziergänge, kleine Boutiquen, evtl. Weingutbesuch.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Kefalonia – Badebucht & Erkundung</h5>
                <p className="text-sm text-muted-foreground">Ruhetag unter Segeln: kurzer Daysail in eine ruhige Bucht, Schnorcheln, Lesen im Cockpit. Variante für Ambitionierte: Längerer Schlag entlang der Ostküste mit Segeltrimm-Übungen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Kefalonia → Kastos</h5>
                <p className="text-sm text-muted-foreground">Ein klassischer Brisentag im Ionischen Meer. Nach dem Mittag baut sich meist eine angenehme Thermik auf. Kastos-Hafen: charmanter Anleger direkt vor den Tavernen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Kastos → Lefkada</h5>
                <p className="text-sm text-muted-foreground">Gemütliche Rückreise entlang der geschützten Inselküsten; ein letzter Badestopp vor Meganisi bietet Urlaubsfinale pur. Check-out in der Marina mit Farewell-Dinner.</p>
              </div>
            </div>

            <h3 id="wetter-windbedingungen" className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen: Segeln im Ionischen Meer</h3>
            <p className="mb-4">
              Das Revier rund um Lefkada ist bekannt für ruhige See, eine verlässliche thermische Brise und gutmütige Verhältnisse – ideale Voraussetzungen für Segeln mit Einsteigern, Familien und Genussseglern.
            </p>
            
            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Typische Winde</h4>
              <p className="text-black mb-3">Die lokalen Windsysteme im Ionischen Meer:</p>
              <ul className="space-y-2 text-black">
                <li><strong>Maistros-Brise:</strong> Thermischer Wind aus NW (3-5 Bft), angenehm segelbar, 
                selten ruppig, ideal für Familiensegeln.</li>
                <li><strong>Morgens:</strong> Häufig sehr ruhig, teils spiegelglattes Wasser – 
                perfekt für Badestopp und kurze Verlegemanöver.</li>
                <li><strong>Abends:</strong> Abflauen der Thermik, in Buchten ruhige Nächte mit 
                lokalen Land- und Seewind-Zirkulationen.</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold mb-3">Saisonale Unterschiede:</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Frühling (April - Mai)</h5>
                <p className="text-black text-sm">Milde Temperaturen, variablere Gradientwinde. 
                Segler genießen freie Häfen und sattgrüne Inseln. 
                Kurze Flautenphasen sind normal.</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Sommer (Juni - September)</h5>
                <p className="text-black text-sm">Stabiler Maistros, überwiegend moderater Seegang. 
                Thermik setzt verlässlich ein – ein Pluspunkt für 
                planbare Bareboat-Charter.</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">Herbst (Oktober)</h5>
                <p className="text-black text-sm">Warmes Wasser, lebendige Brisen. 
                Einzelne Gewitterlagen möglich; ideal für Genießer 
                und Fotografen.</p>
              </div>
            </div>

            <div className="mb-8">
              <img 
                src="/lovable-uploads/c8c65ed0-67d5-4426-956e-aa67126c946f.png" 
                alt="Der Navagio-Strand (Schiffbruchbucht) auf Zakynthos ist seit 2023 wegen bestätigter Erdrutschgefahr durch die umliegenden Klippen bis auf Weiteres gesperrt" 
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                Der Navagio-Strand (Schiffbruchbucht) auf Zakynthos ist seit 2023 wegen bestätigter Erdrutschgefahr durch die umliegenden Klippen bis auf Weiteres gesperrt
              </p>
            </div>

            <h3 id="beste-reisezeit" className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die angenehmsten Monate für Yachtcharter auf den Ionischen Inseln sind im Allgemeinen Mai, Juni, September und Oktober. In diesen Zeiträumen treffen verlässliche Winde auf moderate Temperaturen und ein überschaubares touristisches Aufkommen.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Im Juli und August herrscht Hochsaison mit langen, warmen Abenden an Deck und lebendigen Häfen. Im Frühjahr locken Ruhe und grüne Landschaft, im Herbst warmes Wasser und goldene Lichtstimmungen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit – Warum Yachtcharter auf den Ionischen Inseln?</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Entspannte Segelbedingungen</h5>
                <p className="text-sm">Thermische Brisen sorgen für Segelspaß ohne Härte, die See bleibt moderat, lange Querungen sind selten nötig.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Malerische Küsten & geschützte Buchten</h5>
                <p className="text-sm">Klarstes Wasser, sicherer Ankergrund und kulissenreife Ufer. Viele Orte erlauben Heckleinen an Land.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Mediterranes Flair & Kulinarik</h5>
                <p className="text-sm">Vom Espresso am Morgen bis zum Fisch am Abend – das Leben spielt sich am Wasser ab.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Nautische Infrastruktur</h5>
                <p className="text-sm">Verlässlich ausgestattete Marinas, Water & Power am Steg, Fuel-Docks und Proviantservice.</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Kurz: Wer die Yachtcharter ab Lefkada wählt, entscheidet sich für ein Revier, das den Begriff "Urlaub unter Segeln" mit Inhalt füllt – authentisch, genussvoll und mit genügend maritimer Substanz, um die Segel-Seele lange zu nähren.
            </p>
          </div>
        </div>

        {/* CTA - moved here */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Bereit für die Ionischen Inseln?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Entdecken Sie die grünen Perlen Westgriechenlands mit sanften Winden 
              und familienfreundlichen Segelbedingungen.
            </p>
            <CharterRequestForm>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium" size="lg">
                Ionische Inseln Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        {/* Cities */}
        <div className="hidden md:block mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Inseln & Häfen</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{city}</p>
              </div>)}
          </div>
        </div>

        {/* Highlights */}
        <div className="hidden md:block mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>)}
          </div>
        </div>

      </div>
      
        <TopDestinations />
      </div>
    </>
  );
};

export default IonicIslands;