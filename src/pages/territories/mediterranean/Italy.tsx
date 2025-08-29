import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import destinationItaly from "@/assets/destination-italy.jpg";

const Italy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Zentrales Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Küstenlänge", value: "Über 7.600 km" }
  ];

  const regions = [
    {
      name: "Amalfiküste",
      link: "/reviere/mittelmeer/italien/amalfikuste",
      description: "Amalfiküste, Neapel und die bezaubernden Inseln Capri und Ischia",
      cities: ["Agropoli", "Amalfi Küste", "Castellamare", "Neapel", "Procida", "Salerno"]
    },
    {
      name: "Sardinien",
      link: "/reviere/mittelmeer/italien/sardinien",
      description: "Traumhafte Insel mit smaragdgrünem Wasser und exklusiven Häfen",
      cities: ["Alghero", "Cagliari", "Cannigione", "Carloforte", "Costa Smeralda", "Olbia", "Portisco", "Porto Rotondo"]
    },
    {
      name: "Sizilien",
      link: "/reviere/mittelmeer/italien/sizilien",
      description: "Größte Mittelmeerinsel mit vielfältigen Segelrevieren",
      cities: ["Capo d'Orlando", "Marsala", "Palermo", "Portorosa", "Sant'Agata di Militello", "Trapani"]
    },
    {
      name: "Toskana",
      link: "/reviere/mittelmeer/italien/toskana",
      description: "Kulturdreiecke an der Küste mit Insel Elba",
      cities: ["Castiglioncello", "Elba"]
    }
  ];

  const highlights = [
    "Vielfältige Segelreviere für jeden Geschmack",
    "Weltklasse italienische Küche",
    "Reiche Kultur und Geschichte",
    "Exzellente Marina-Infrastruktur",
    "Traumhafte Inseln und Buchten",
    "Kurze Distanzen für Wochenendtörns",
    "Warmes, kristallklares Wasser"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="/lovable-uploads/79fac9fd-550d-4a4f-b314-fffdb854e49d.png"
          alt="Italien Mittelmeer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇮🇹 Italien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Italien</h1>
            <p className="text-xl max-w-2xl">
              Dolce Vita auf dem Wasser
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Mittelmeer
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="sticky top-20 z-60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
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
                <BreadcrumbPage>Italien</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Italien Segelreviere - Übersichtskarte</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500000!2d12.5674!3d41.8719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUyJzE5LjQiTiAxMsKwMzQnMDIuNyJF!5e1!3m2!1sde!2sde!4v1625097600000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Italien Karte"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Italien: Ihr Traumtörn an den schönsten Küsten des Mittelmeers</h2>
            <p className="text-xl text-muted-foreground">
              Segeln Sie mit uns ins Herz des Mittelmeers und erleben Sie „La Dolce Vita" an Bord einer modernen Yacht
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Italien, das Land der antiken Mythen, der pulsierenden Kultur und der unvergleichlichen Kulinarik, entfaltet vom Wasser aus seinen ganzen Zauber. Wer hier eine Yacht mietet – ob Monohull, Katamaran oder Motoryacht – bekommt kurze bis mittlere Distanzen, gut ausgebaute Marinas, viele Muring Liegeplätze, zuverlässige Versorgung und eine Küche, die jeden Hafentag veredelt. Dieser Revierbericht gliedert Italien in vier Hauptregionen und vertieft die jeweils wichtigsten Unterreviere – von der italienischen Riviera mit Portofino/Cinque Terre über den Golf von Neapel (mit Capri und Ischia), Ponza/Ventotene (Pontinische Inseln) bis nach Tropea an der Stiefelspitze Kalabriens.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Yachtcharter Toskana und angrenzende Italienische Riviera</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Profil & Besonderheiten</h4>
            <p className="mb-6">
              Die <Link to="/reviere/mittelmeer/italien/toskana" className="text-blue-600 hover:text-blue-800 underline font-medium">Toskana</Link> verbindet seglerischen Komfort mit Kultur und dem Toskanischen Archipel: Elba, Giglio, Giannutri, Capraia, Montecristo, Pianosa, Gorgona. Nördlich schließt die italienische Riviera (Ligurien) an – mit den Ikonen Portofino und Cinque Terre.
            </p>
            <p className="mb-6">
              Warum hier chartern? Überschaubare Etappen, viele Lee Buchten, sandiger Grund (Elba/„Golfi"), solide Marinas und Sightseeing vom Feinsten – Pisa, Lucca, Florenz an Land; auf dem Wasser die grün granitenen Inseln mit kristallklaren Ankerplätzen. <Link to="/reviere/mittelmeer/italien/toskana" className="text-blue-600 hover:text-blue-800 underline font-medium">Mehr zur Toskana erfahren →</Link>
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Basen & Logistik</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Festland Toskana:</strong> Marina di Scarlino/Puntone, San Vincenzo, Cecina, Castiglioncello, Piombino, Livorno.</li>
                <li><strong>Ligurien (Riviera):</strong> La Spezia, Santa Margherita Ligure, Rapallo, Genoa als größere Hubs.</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Inseln des Toskanischen Archipels</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Elba:</strong> Die „Miniatur Sardinien" der Toskana: Portoferraio (Naturhafen), Marciana Marina, Marina di Campo, Porto Azzurro. Süd /Westküste mit vielen Sandbuchten (guter Halt), Nordküste klar und felsiger.</li>
              <li><strong>Giglio:</strong> Malerisch, mit Giglio Porto und Buchten an der West /Südseite; bei Schwell aus W/SW ausweichen.</li>
              <li><strong>Giannutri:</strong> Klein, fast karibisch klar; teils Schutzbestimmungen – Moorings nutzen, Ankern limitiert.</li>
              <li><strong>Capraia:</strong> Vulkanische Insel nördlich von Elba; Porto im Osten, wilde Buchten im Westen – bei Ponente exponiert.</li>
              <li><strong>Montecristo/Pianosa/Gorgona:</strong> Streng geschützte Inseln – teils nur mit Genehmigung/organisiertem Besuch, für Charter i. d. R. Transit aus Distanz.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Italienische Riviera (Ligurien)</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Portofino:</strong> Legendärer Hafen – klein, teuer, schnell voll; ausweichen nach Santa Margherita/Rapallo und per Dinghy/Taxi anlanden.</li>
              <li><strong>Cinque Terre:</strong> Fünf Dörfer an steiler Küste; Ankerplätze begrenzt, Schwell möglich. Häufiger Day Stop bei ruhigem Wetter, ansonsten La Spezia als sicherer Hub mit Fjordschutz.</li>
            </ul>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Für wen ist das Revier geeignet?</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Einsteiger & Familien:</strong> Hervorragend – kurze Hopser, viele sichere Buchten, zuverlässige Infrastruktur.</li>
                <li><strong>Genusssegler & Motor:</strong> Dolce Vita Stops, Wein & Küche; Daycruising mit vielen Badestopps.</li>
                <li><strong>Ambitionierte:</strong> Routen kombinieren: Elba Runde + Capraia/Giglio; bei stabilem Fenster bis Ligurien/Portofino.</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-8">
              <h5 className="font-semibold">7 Tage Idee (ab Scarlino/San Vincenzo)</h5>
              <p className="text-sm text-muted-foreground">Elba Nord (Portoferraio) → Marciana Marina → Capraia (Porto) → Elba West (St André/Anker) → Elba Süd (Marina di Campo) → Porto Azzurro → Rückkehr Festland.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Yachtcharter Amalfiküste & Golf von Neapel</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Profil & Besonderheiten</h4>
            <p className="mb-6">
              Das Spektakel aus Steilküste, pastellfarbenen Dörfern und in den Fels gehauenen Häfen ist weltberühmt: Positano, Amalfi, Ravello (an Land), davor Capri, Ischia, Procida im Golf von Neapel. Die <Link to="/reviere/mittelmeer/italien/amalfikuste" className="text-blue-600 hover:text-blue-800 underline font-medium">Amalfiküste</Link> ist logistisch exzellent, nautisch aber wegen Schwell und Fährverkehr aufmerksam zu segeln. In der Hochsaison sind Liegeplätze rar – Reservierung/Plan B Buchten sind Gold wert. <Link to="/reviere/mittelmeer/italien/amalfikuste" className="text-blue-600 hover:text-blue-800 underline font-medium">Mehr zur Amalfiküste erfahren →</Link>
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Basen & Logistik</h4>
              <p className="text-black mb-3">Neapel & Umgebung: Mergellina, Castellammare di Stabia, Salerno, Sorrento, Procida als Charterdrehscheiben.</p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Inseln & Küsten (Kurzportraits)</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Capri:</strong> Marina Grande extrem gefragt; Ankerbuchten rund um Faraglioni nur bei ruhigem Wetter; viel Hydrofoil Verkehr.</li>
              <li><strong>Ischia:</strong> Thermeninsel mit geschützten Buchten (z. B. Sant'Angelo bei ruhigem Wetter); Marinas in Forio, Casamicciola, Ischia Porto.</li>
              <li><strong>Procida:</strong> Farbkulisse Marina Corricella (meist nur Day Stop/Dinghy), Marina di Procida als sicherer Basishafen.</li>
              <li><strong>Amalfi/Positano:</strong> Mini Häfen mit Buganker/Heckleinen; oft Moorings vor der Stadt – Wassertaxi nutzen. Schwell durch Verkehr/Seewind, abends ruhiger.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Ponza & Ventotene (Pontinische Inseln)</h4>
            <p className="mb-6">
              Nördlich des Golfs – perfekt als 1 Woche „Blauwasser light".
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Ponza:</strong> Glasklare Grotten, Rundfahrten, Ankerfelder mit Sand – bei Wellen aus SW ausweichen.</li>
              <li><strong>Ventotene:</strong> Historischer Hafen (römische Basalteinschnitte), Marina Nuova im Süden; ruhige, authentische Inselatmosphäre.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Tropea (Kalabrien)</h4>
            <p className="mb-6">
              Südlich der Amalfiküste an der Stiefelspitze: weiße Strände, türkisfarbene Buchten, Marina di Tropea als Ausgangspukt Richtung Stromboli/Aeolische – ideal für Motor/Katamaran Hopper, die „viel Baden, wenig Transfer" schätzen.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Für wen geeignet?</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Einsteiger & Genießer:</strong> Ja – bei guter Planung/Reservierung und Fokus auf Lee Buchten.</li>
                <li><strong>Ambitionierte:</strong> Kombinationen Neapel → Ponza/Ventotene; Tropea → Stromboli.</li>
                <li><strong>Motor & Daycruiser:</strong> Paradies für Scenic Cruising mit vielen Foto /Bade Stops.</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-8">
              <h5 className="font-semibold">7 Tage Idee (ab Neapel/Castellammare)</h5>
              <p className="text-sm text-muted-foreground">Procida → Ischia (Forio) → Capri (Day Stop + Abendausweich) → Amalfi/Positano (Moorings) → Sorrento/Marina Piccola → Ponza → Ventotene → Rückkehr (lange Etappen optional splitten).</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Yachtcharter Sardinien</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Profil & Besonderheiten</h4>
            <p className="mb-6">
              <Link to="/reviere/mittelmeer/italien/sardinien" className="text-blue-600 hover:text-blue-800 underline font-medium">Sardinien</Link> ist Italiens Karibik: Granit, Smaragd Töne, Dünenstrände – und der legendäre Mistral (NW), der für kernige, aber meist gut planbare Segeltage sorgt. Im Nordosten liegt das Arcipelago di La Maddalena – ein Nationalpark mit Moorings, Parkgebühr und Postkartenbuchten. Die Ostküste bietet Langstrände, die Westküste ist offener und wellenreicher, der Süden (Villasimius/Carloforte) mediterran lässig. <Link to="/reviere/mittelmeer/italien/sardinien" className="text-blue-600 hover:text-blue-800 underline font-medium">Mehr zu Sardinien erfahren →</Link>
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Basen & Logistik</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Nordost:</strong> Olbia, Portisco, Cannigione, Palau (Tor zur Maddalena).</li>
                <li><strong>Nordwest:</strong> Alghero, Stintino/Asinara (wilde, dünn besiedelte Küste).</li>
                <li><strong>Süd:</strong> Cagliari, Villasimius, Carloforte (San Pietro).</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">La Maddalena & Costa Smeralda</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Maddalena Archipel:</strong> Spargi, Budelli (rosa Strand – strikte Regeln), Santa Maria, Razzoli, Caprera. Überwiegend Moorings/Bojen; Ankern teils limitiert – Regelwerk beachten.</li>
              <li><strong><Link to="/reviere/mittelmeer/italien/sardinien/costa-smeralda" className="text-blue-600 hover:text-blue-800 underline font-medium">Costa Smeralda</Link>:</strong> Jet Set Flair (Porto Cervo, Porto Rotondo) und blitzsaubere Buchten; Preise in Hochsaison hoch, dafür Infrastruktur top. <Link to="/reviere/mittelmeer/italien/sardinien/costa-smeralda" className="text-blue-600 hover:text-blue-800 underline font-medium">Mehr zur Costa Smeralda →</Link></li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Weitere Highlights</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Ostküste (Orosei Golf):</strong> Felsige Buchten (Cala Luna, Goloritzé – teils Besucherlimits/kein Ankern, Day Stop mit Abstand).</li>
              <li><strong>Westküste:</strong> Langer Atlantik Charakter, mehr Seegang – „blau" für geübte Skipper.</li>
              <li><strong>Süden:</strong> Villasimius (MPA/Marina), Carloforte (Thunfisch Tradition), geschützte Buchten für windige Tage.</li>
            </ul>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Für wen geeignet?</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Einsteiger & Familien:</strong> Ja – vor allem Nordost mit Insel Lee und Moorings.</li>
                <li><strong>Genusssegler/Motor:</strong> Costa Smeralda & Maddalena als Day Cruising Spielplatz.</li>
                <li><strong>Ambitionierte:</strong> Nordwest/Sardinien West oder Rundinseln mit Mistral Fenster – viel Trimm, lange Schläge.</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-8">
              <h5 className="font-semibold">7 Tage Idee (ab Portisco/Olbia)</h5>
              <p className="text-sm text-muted-foreground">Caprera → La Maddalena (Moorings) → Spargi/Budelli (Regeln beachten) → Santa Teresa/Bonifacio Bucht (Wetterfenster) → Tavolara/Marine Protected Area → Golfo Aranci → Cala di Volpe/Costa Smeralda → Rückkehr.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Yachtcharter Sizilien &  Äolische/Liparische Inseln</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Profil & Besonderheiten</h4>
            <p className="mb-6">
              <Link to="/reviere/mittelmeer/italien/sizilien" className="text-blue-600 hover:text-blue-800 underline font-medium">Sizilien</Link> bietet alles: Vulkanlandschaften, Barockstädte, offene Passagen und All Weather Buchten. Nördlich liegen die Äolischen Inseln – Vulcano, Lipari, Salina, Panarea, Stromboli, Filicudi, Alicudi – eine der spannendsten Inselketten des Mittelmeers. <Link to="/reviere/mittelmeer/italien/sizilien" className="text-blue-600 hover:text-blue-800 underline font-medium">Mehr zu Sizilien erfahren →</Link>
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Basen & Logistik</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Äolische Zugänge:</strong> Portorosa/Tonnarella, Capo d'Orlando, Milazzo – perfekte Sprungbretter.</li>
                <li><strong>West Sizilien:</strong> Palermo, Trapani, Marsala – mit Anschluss an die Egadi Inseln (Favignana, Levanzo, Marettimo).</li>
                <li><strong>Ost/Süd:</strong> Siracusa, Marina di Ragusa, Catania (Etna Nähe) – lange Strände, kulturstarke Städte.</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Äolische Inseln (Kurzportraits)</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Vulcano:</strong> Schwefelduft, Fumarolen; sichere Buchten im Süden/Westen, Ankergrund vulkanisch (Halt prüfen).</li>
              <li><strong>Lipari:</strong> „Hauptstadt" mit Marina Lunga/Pignataro; Versorgerdichte hoch.</li>
              <li><strong>Salina:</strong> Grünste Insel; Santa Marina beliebt, Pollara als spektakulärer Day Stop.</li>
              <li><strong>Panarea:</strong> Schicke Boutiquen, Ankermöglichkeiten zwischen den Isolotti – auf Schwojkreis achten.</li>
              <li><strong>Stromboli:</strong> Aktiver Vulkan; Ankerplätze exponiert, Landgänge je nach Aktivität/Behördenlage.</li>
              <li><strong>Filicudi/Alicudi:</strong> Abgelegener, rauer – für Kenner und ruhesuchende Crews.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-4">Weitere Sizilien Highlights</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Egadi Inseln (AMP):</strong> Favignana mit Cala Rossa (Moorings/Ankerlimits), Levanzo kristallklar, Marettimo naturwild – Parkregeln beachten.</li>
              <li><strong>Siracusa:</strong> Grandiose Naturbucht Porto Grande, Altstadt Ortigia – Kulinarik & Kultur.</li>
              <li><strong>Taormina/Giardini Naxos:</strong> Szenische Reede, Etna Blick – bei Schwell auf Ausweichbuchten achten.</li>
            </ul>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Für wen geeignet?</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Einsteiger & Familien:</strong> Ja – bei Route in Insel Lee (Lipari Gruppe, Egadi Moorings) und konservativem Wetterfenster.</li>
                <li><strong>Genusssegler/Motor:</strong> Inselhüpfen mit spektakulären Kulissen; Abendprogramm an Land.</li>
                <li><strong>Ambitionierte:</strong> Lange Schläge (z. B. Egadi ↔ Äolische), Straße von Messina, Scirocco Taktik – viel Seemannschaft.</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 mb-8">
              <h5 className="font-semibold">7 Tage Idee (ab Capo d'Orlando/Milazzo)</h5>
              <p className="text-sm text-muted-foreground">Vulcano (Gelato & Moorings) → Lipari (Marina Lunga) → Salina (Santa Marina) → Panarea (Isolotti) → Stromboli (Rundung/Abendfeuer, je nach Lage) → Filicudi (Cala) → Rückkehr via Lipari Süd.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Praktisches für Skipper (kurz & nützlich)</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Scheine & Funk:</strong> Für Bareboat Charter wird ein national anerkannter Führerschein erwartet; bei UKW Ausrüstung ist ein Funkzeugnis üblich. Originale mitführen.</li>
              <li><strong>Mooring Stil:</strong> In Marinas meist mit Muringleinen. In kommunalen Häfen und Buchten Buganker/Heckleinen.</li>
              <li><strong>Gebühren & Bojen:</strong> Städtische Kais sind oft günstiger, private Marinas teurer (Hochsaison beachten). In Schutzgebieten (z. B. Maddalena, Egadi, Aeolische Spots) gibt es Mooringfelder/Bojenpflicht und teils Parkgebühren.</li>
              <li><strong>Proviant/Diesel/Wasser:</strong> Dichte Versorgung in allen Regionen; Fuel Docks in größeren Häfen, Tankwagen in Inselorten. Wasser oft inklusive, in der Hochsaison kontingentiert – Tanks rechtzeitig füllen.</li>
              <li><strong>Ankern & Schutzgebiete:</strong> Küstenschutz beachten, AMP (Area Marina Protetta) studieren. In manchen Zonen ist Ankern untersagt, Moorings nutzen.</li>
              <li><strong>Navigation:</strong> Gute Leuchtfeuerdichte; aufmerksam bei Fähr /Hydrofoil Routen (z. B. Neapel, Capri, Lipari), Fischfarmen (Tyrrhenisches Meer) und lokalen Düseneffekten.</li>
              <li><strong>Motor & Katamaran:</strong> Katamarane profitieren in Flachwasserbuchten, sind bei Mistral/Libeccio exponierter – früh Reffs ziehen und Lee Ankerplätze planen. Motoryachten lieben die kurzen Hop On Hop Off Distanzen und die Dichte an Day Use Buchten.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Wind (Tyrrhenisches & Ionisches Italien)</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Sommer:</strong> Dominanz von Thermik/Seewind am Nachmittag (W–NW/„Ponente"), morgens oft ruhig – ideal für Bade  und Verlegestunden. Lokale Starkwindlagen durch Mistral (NW, v. a. Sardinien/NW Korsika), Libeccio (SW), Grecale (NE) und Scirocco (SE).</li>
              <li><strong>Frühjahr/Herbst:</strong> Variabler, gelegentlich Frontdurchgänge – dafür leere Häfen und milde Temperaturen.</li>
              <li><strong>Seegang:</strong> Im Inselschutz meist moderat; an offenen Leeküsten (Sardinien West, Sizilien Süd/West) kann kurzer, steiler Schwell stehen.</li>
              <li><strong>Gewitterfenster:</strong> V. a. spätsommerlich; Radar/Nowcast checken, All Weather Anchorages bereithalten.</li>
              <li><strong>Spezial:</strong> Straße von Messina (Sizilien) mit Strömungen; lokale Katabatik an Steilhängen (Amalfi, Portofino, Lipari Inseln).</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Vergleich der Regionen (auf einen Blick)</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Toskana & Riviera:</strong> Am „einfachsten" – viele Lee Buchten, kurze Etappen, Kultur dicht am Wasser.</li>
              <li><strong>Amalfi & Golf von Neapel:</strong> Spektakulär & belebt – gute Logistik, aber Reservierungen/Plan B wichtig. Ponza/Ventotene als Blauwasser Bonus; Tropea als Brücke zu den Äolischen.</li>
              <li><strong>Sardinien:</strong> Natur & Farben; Mistral beachten, Maddalena Regeln kennen – dafür Playgrounds par excellence.</li>
              <li><strong>Sizilien:</strong> Vulkan Abenteuer & Inselketten; je nach Sektor von gemütlich (Egadi/Lee) bis anspruchsvoll (Stromboli/Offenwasser).</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Mai–Juni & September–Oktober:</strong> Ideale Monate: verlässliche Brisen, angenehme Temperaturen, moderate Belegung.</li>
              <li><strong>Juli–August:</strong> Hochsaison – Häfen früh voll, Preise hoch; Ankerbuchten wählen, Moorings vorbuchen, frühe Abfahrten planen.</li>
              <li><strong>Frühjahr/Spätherbst:</strong> Ruhiger, variabler Wind – perfekte Zeit für Genießer und Fotografen.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Sicherheit & Seemannschaft (Checkliste)</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Wetter & Routenplanung:</strong> Täglicher Forecast (inkl. Starkwindwarnungen), Plan B Häfen je Schlag, Zeitpuffer.</li>
              <li><strong>Ankerdisziplin:</strong> Sand bevorzugen, Kettenlänge großzügig, Halt per Rückwärtsfahrt prüfen, Ankeralarm.</li>
              <li><strong>Hafenmanöver:</strong> Muringleinen, Spring setzen, Fenderhöhen variieren (Stege/Molen).</li>
              <li><strong>Crewbriefing:</strong> Rollen, Handzeichen, Sonnen /Hitzemanagement, Dinghy Regeln, Nachtmanöver nur mit eingespielter Crew.</li>
              <li><strong>Schutzgebiete:</strong> AMP Karten studieren, Bojenpflicht/„No Anchor" respektieren, Müll /Abwasserdisziplin leben.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit</h3>
            <p className="mb-6">
              Eine Yachtcharter in Italien bedeutet Vielfalt auf engem Raum: von den Sandbuchten Elbas über die Filmkulissen der Amalfiküste, die Smaragdbecken Sardiniens bis zu den Vulkaninseln Siziliens. Jede Region hat ihre eigene Dramaturgie – von komfortablem Inselhüpfen bis zu ambitionierten Schlägen über offenes Wasser. Ob Segelyacht, Katamaran oder Motoryacht: Wer Genuss, Natur und Seemannschaft verbinden will, setzt Kurs auf Italien.
            </p>
            <p className="mb-6">
              Jetzt anfragen: Teilen Sie uns Crewgröße, Reisezeit und gewünschte Yachtklasse mit – wir erstellen ein maßgeschneidertes Angebot, organisieren Transfer, Proviantservice, empfehlen Lee Routen je Wetterlage und reservieren Marinas oder Moorings.
            </p>
            <p className="mb-6 font-medium">
              Dolce vita trifft blaues Wasser – der Rest ist Ihr Logbucheintrag :)
            </p>
          </div>
        </div>

        {/* Regions Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {regions.map((region, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{region.name}</h3>
                <p className="text-muted-foreground mb-4">{region.description}</p>
                {region.cities && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, cityIndex) => (
                        <Badge key={cityIndex} variant="secondary" className="text-xs">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                <Link to={region.link}>
                  <Button variant="outline" className="w-full">
                    Mehr erfahren
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Warum Italien chartern?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Charter Request Form */}
      <CharterRequestForm />
    </div>
  );
};

export default Italy;