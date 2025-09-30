
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
const balearicsHeader = "/lovable-uploads/c0896df7-5ba2-4d93-9c3a-ffd817d565c5.png";

const Balearics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Westliches Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "April-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Inseln", value: "4 Hauptinseln" }
  ];

  const cities = [
    "Palma de Mallorca", "Ibiza", "Mahón (Menorca)", "Sant Antoni"
  ];

  const highlights = [
    "Weltklasse Marina-Infrastruktur",
    "Kurze Distanzen zwischen Inseln",
    "Lebendiges Nachtleben (Ibiza)",
    "Familienfreundliche Strände",
    "Ausgezeichnete Restaurants",
    "Ganzjährig milde Temperaturen",
    "Perfekte Segelbedingungen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={balearicsHeader}
          alt="Balearen Spanien - traumhafte Bucht mit türkisblauem Wasser"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇪🇸 Balearen</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Balearen</h1>
            <p className="text-xl max-w-2xl">
              Mediterrane Perlen vor Spaniens Küste
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer/spanien" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Spanien
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
                  <Link to="/reviere/mittelmeer/spanien">Spanien</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Balearen</BreadcrumbPage>
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

          {/* Territory Map */}
          <div className="max-w-4xl mx-auto mb-12">
            <TerritoryMap 
              region="Balearen"
              center={{ lat: 39.7086231, lng: 2.6946892 }}
              zoom={8}
              maptype="satellite"
            />
          </div>

          {/* Island Links */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid gap-6 md:grid-cols-3">
              <Link to="/reviere/mittelmeer/spanien/balearen/mallorca" className="block">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Mallorca</h3>
                    <p className="text-sm text-muted-foreground mb-3">Die größte Insel mit 200+ Buchten, Palma & Cabrera Nationalpark</p>
                    <Button variant="outline" className="w-full">Mehr erfahren →</Button>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/reviere/mittelmeer/spanien/balearen/ibiza" className="block">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Ibiza</h3>
                    <p className="text-sm text-muted-foreground mb-3">Weltberühmtes Nachtleben, Beach Clubs & Formentera-Nähe</p>
                    <Button variant="outline" className="w-full">Mehr erfahren →</Button>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/reviere/mittelmeer/spanien/balearen/menorca" className="block">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Menorca</h3>
                    <p className="text-sm text-muted-foreground mb-3">UNESCO-Biosphärenreservat, unberührte Natur & Mahón Hafen</p>
                    <Button variant="outline" className="w-full">Mehr erfahren →</Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Balearen: Ihr Traumtörn im Herzen des Mittelmeers</h2>
            <p className="text-xl text-muted-foreground">
              Spaniens Segelparadies im westlichen Mittelmeer
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Die Balearen – ein Name, der Sehnsüchte weckt. <Link to="/reviere/mittelmeer/spanien/balearen/mallorca" className="text-blue-600 hover:text-blue-800 underline">Mallorca</Link>, <Link to="/reviere/mittelmeer/spanien/balearen/ibiza" className="text-blue-600 hover:text-blue-800 underline">Ibiza</Link>, <Link to="/reviere/mittelmeer/spanien/balearen/menorca" className="text-blue-600 hover:text-blue-800 underline">Menorca</Link> und Formentera bilden ein Archipel, das wie kein anderes für mediterrane Lebensfreude, atemberaubende Natur und unvergessliche Segelerlebnisse steht. Ein Yachtcharter auf den Balearen ist eine Einladung, in eine Welt einzutauchen, in der kristallklares Wasser auf berühmte Buchten, exzellente Marinas auf charmante Altstädte und entspanntes Lebensgefühl auf einen Hauch von Glamour trifft.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Hier, im Herzen des westlichen Mittelmeers, finden Segler und Motorbootfahrer ein Paradies, das für jeden Geschmack das Richtige bereithält. Ob Sie die pulsierende Energie <Link to="/reviere/mittelmeer/spanien/balearen/ibiza" className="text-blue-600 hover:text-blue-800 underline">Ibizas</Link> erleben, die unberührte Ruhe <Link to="/reviere/mittelmeer/spanien/balearen/menorca" className="text-blue-600 hover:text-blue-800 underline">Menorcas</Link> genießen oder die vielseitige Schönheit <Link to="/reviere/mittelmeer/spanien/balearen/mallorca" className="text-blue-600 hover:text-blue-800 underline">Mallorcas</Link> entdecken möchten – die Balearen bieten eine perfekte Kombination aus beständigen Sommerwinden, hervorragender Infrastruktur und unzähligen Möglichkeiten für unvergessliche Landgänge. Lassen Sie sich von der spanischen Gastfreundschaft verzaubern und erleben Sie die Freiheit des Meeres.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4"><Link to="/reviere/mittelmeer/spanien/balearen/mallorca" className="text-blue-600 hover:text-blue-800 underline">Mallorca</Link>: Die Königin der Balearen – Ihr zentraler Dreh- und Angelpunkt</h3>
            <p className="text-lg leading-relaxed mb-6">
              <Link to="/reviere/mittelmeer/spanien/balearen/mallorca" className="text-blue-600 hover:text-blue-800 underline">Mallorca</Link>, die größte der Baleareninseln, ist nicht nur das wichtigste Charterziel in Spanien, sondern auch ein Segelrevier von Weltklasse. Die Insel bietet eine schier unglaubliche Vielfalt an Landschaften, von den majestätischen Bergen der Serra de Tramuntana im Westen bis zu den weiten Sandstränden im Osten und Süden.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Ihre Ausgangsbasen auf Mallorca</h4>
              <p className="text-black mb-3">Die meisten Yachtcharter auf Mallorca beginnen in der Inselhauptstadt Palma. Die Stadt verfügt über mehrere erstklassige Marinas, darunter die Marina Palma, Real Club Náutico de Palma und Port de Mallorca, die eine ausgezeichnete Infrastruktur und eine breite Auswahl an Charteryachten bieten. Palma selbst ist eine pulsierende Metropole mit einer beeindruckenden Kathedrale, charmanten Gassen, exquisiten Restaurants und einem lebhaften Nachtleben.</p>
              <p className="text-black mb-3">Weitere beliebte Ausgangshäfen sind:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Port d'Andratx:</strong> Ein malerischer Naturhafen im Südwesten, bekannt für sein exklusives Flair und seine hervorragenden Fischrestaurants.</li>
                <li><strong>Portocolom:</strong> Ein idyllischer Naturhafen an der Ostküste, der eine entspannte Atmosphäre bietet und ein guter Ausgangspunkt für die Erkundung der südöstlichen Buchten ist.</li>
                <li><strong>Alcúdia:</strong> Im Norden der Insel gelegen, ist Alcúdia ein idealer Startpunkt, um die nördliche Küste und das Cap Formentor zu erkunden.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Chartermöglichkeiten auf Mallorca</h4>
              <p className="text-black mb-3">Die Auswahl an Charteryachten auf Mallorca ist riesig und deckt jeden Bedarf ab:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Segelyachten (Monohulls):</strong> Von sportlichen Performance-Yachten bis zu komfortablen Fahrtenyachten, ideal für klassisches Segelvergnügen.</li>
                <li><strong>Katamarane:</strong> Perfekt für Familien und Gruppen, die Wert auf viel Platz, Stabilität und Komfort legen. Katamarane eignen sich hervorragend für das Ankern in flachen Buchten.</li>
                <li><strong>Motoryachten:</strong> Für alle, die schnell von Bucht zu Bucht wechseln und in kurzer Zeit viele Highlights sehen möchten.</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Die Vielfalt der Buchten und Strände</h4>
            <p className="mb-4">
              Mallorca ist berühmt für seine über 200 Buchten und Strände, die von feinen Sandstränden bis zu felsigen Calas reichen.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Südwesten</h5>
                <p className="text-sm text-gray-600">Exklusive Buchten wie die Cala Llamp oder die Cala Marmassen.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Westküste (Serra de Tramuntana)</h5>
                <p className="text-sm text-gray-600">Dramatische Felsformationen und kleine, oft nur vom Meer aus zugängliche Buchten wie die Cala Deià oder die Cala Tuent.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Südküste</h5>
                <p className="text-sm text-gray-600">Weite Sandstrände wie Es Trenc mit karibischem Flair und geschützte Buchten wie die Cala Pi.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Osten</h5>
                <p className="text-sm text-gray-600">Zahlreiche Calas mit türkisfarbenem Wasser, ideal zum Ankern und Schwimmen, z.B. Cala Varques, Cala Mitjana oder die Cala d'Or.</p>
              </div>
            </div>

            {/* Cap de ses Salines Lighthouse Image */}
            <div className="my-8">
              <img
                src="/lovable-uploads/a3c45dc2-70f0-4ef8-965b-c96e9db59319.png"
                alt="Leuchtturm am Cap de ses Salines - südlichster Punkt Mallorcas"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-center text-sm text-gray-600 mt-2 italic">
                Der Leuchtturm am Cap de ses Salines (südlichster Punkt Mallorcas) ist für Sportboote ein markanter Tag- und Nacht-Peilpunkt: Er dient als sicherer Wegweiser beim Rund-Mallorca-Törn und auf dem Kurs durchs Cabrera‑Seegebiet
              </p>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Nautische Highlights rund um Mallorca</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Cabrera Nationalpark:</strong> Südlich von Mallorca liegt dieser geschützte Archipel, ein Paradies für Naturliebhaber. Das Ankern und Übernachten ist nur mit vorheriger Genehmigung erlaubt, aber ein Besuch lohnt sich für das kristallklare Wasser und die unberührte Natur.</li>
                <li><strong>Cap Formentor:</strong> Die spektakuläre Nordspitze Mallorcas mit ihren dramatischen Klippen und dem Leuchtturm ist vom Meer aus besonders beeindruckend.</li>
                <li><strong>Drachenhöhlen (Coves del Drac):</strong> An der Ostküste gelegen, können diese beeindruckenden Tropfsteinhöhlen mit einem unterirdischen See besucht werden.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Anreise nach Mallorca</h4>
              <p className="text-black">Der internationale Flughafen Palma de Mallorca (PMI) ist einer der größten und am besten angebundenen Flughäfen Europas. Er wird von zahlreichen Städten in Deutschland, Österreich und der Schweiz direkt und regelmäßig angeflogen. Von dort erreichen Sie die Marinas in Palma in kurzer Zeit.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Routenvorschläge für eine rund Mallorca Törn (Beispiele für 7 Tage)</h3>
            <p className="mb-4 font-medium">Vorschlag: 7 Tage im Uhrzeigersinn ab Palma</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Palma – Cala Pi oder Cabrera</h5>
                <p className="text-sm text-muted-foreground">Kurzer Einfahrttag entlang der Südküste. Alternativen/Stopps: Illetes, Portals Vells. Übernachtung: Ankern in Cala Pi (Sand, begrenzter Schwojraum) oder an der Boje im Nationalpark Cabrera (vorab Boje reservieren).</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Cala Pi/Cabrera – Porto Colom oder Cala d'Or</h5>
                <p className="text-sm text-muted-foreground">Ruhige Etappe mit vielen Badebuchten (Es Trenc, Cala Mondragó). Übernachtung: Sicherer Naturhafen Porto Colom (gute Versorger, Moorings/Marina) oder Marina/Boje in Cala d'Or.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Porto Colom – Porto Cristo oder Cala Ratjada</h5>
                <p className="text-sm text-muted-foreground">Ostküste mit „Calas"-Hopping (z. B. Cala Varques). Hafenoptionen: Porto Cristo (Innenhafen, Höhlen von Drach) oder Marina Cala Ratjada; begrenzte Ankerplätze.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Cala Ratjada – Bucht von Alcúdia oder Pollença</h5>
                <p className="text-sm text-muted-foreground">Um die Nordostspitze, vorbei an Cap Ferrutx. Ankern: Playa de Formentor (bei ruhigem Wetter), Es Coll Baix, oder Marina Port d'Alcúdia/Port de Pollença. Achte auf Tramuntanalage und Schwell.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Pollença/Alcúdia – Port de Sóller (langer „Klippen-Tag")</h5>
                <p className="text-sm text-muted-foreground">Runde Cap Formentor, dann spektakuläre Tramuntana-Westküste. Bade-/Mittagsstopps: Cala Figuera (Formentor), Cala Murta, Sa Calobra/Torrent de Pareis, Cala Tuent (nur tagsüber, offen für Schwell). Übernachtung: Port de Sóller (einziger allwettertauglicher Hafen an der Westküste).</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Port de Sóller – Sant Elm/Dragonera oder Port d'Andratx</h5>
                <p className="text-sm text-muted-foreground">Westküste südwärts. Fotostopp/Badestopp: Sa Foradada (Tagesbojen), Cala Deià, Banyalbufar/Estellencs (nur bei ruhigem Wetter). Übernachtung: Bojenfeld Sant Elm/Dragonera (Reservierung empfohlen) oder Marina/Club Náutico Andratx.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Andratx – Palma</h5>
                <p className="text-sm text-muted-foreground">Gemütlicher Abschlusstag mit Badestopp in Cala Blanca, Camp de Mar oder Portals Vells. Einlaufen Palma, Tanken, Check-out.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Tipps zu Wetter, Taktik und Reservierungen</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Richtung wählen:</strong> Plane den langen Westküsten-/Formentor-Tag in ein stabiles Wetterfenster ohne kräftige Tramuntana oder starken SW-Schwell. Starte je nach Vorhersage im Uhrzeigersinn oder dagegen.</li>
                <li><strong>Distanzen:</strong> Tägliche Schläge meist 15–40 sm; die komplette Runde liegt grob um 150 sm, je nach Buchtenhopping.</li>
                <li><strong>Ankern & Umwelt:</strong> Nur auf Sand, Posidonia-Wiesen konsequent meiden (hohe Strafen möglich). In der Saison sind Bojenfelder verbreitet; früh kommen hilft.</li>
                <li><strong>Genehmigungen:</strong> Cabrera-Boje vorab online reservieren. Für Dragonera/Sant Elm je nach Saison Bojenpflicht.</li>
                <li><strong>Häfen:</strong> Westküste hat weite Abstände (Sóller ist der sichere Hafen). Reserviere in der Hochsaison vorab (PortsIB, Club Náuticos, gängige Apps).</li>
                <li><strong>Servicepunkte:</strong> Tanken/Versorgung in Palma, Porto Colom, Porto Cristo, Alcúdia/Pollença, Sóller, Andratx.</li>
                <li><strong>Plan B:</strong> Bei Starkwind aus Nord oder West lieber Süd- und Ostküste intensiver segeln und vor Formentor wenden; alternativ halbe Insel und zurück.</li>
              </ul>
            </div>

            {/* Cala Llombards Image */}
            <div className="my-8">
              <img
                src="/lovable-uploads/cc180839-2a23-40be-b2bd-45eedcf7e909.png"
                alt="Cala Llombards - windgeschützte Bucht auf Mallorca"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-center text-sm text-gray-600 mt-2 italic">
                Die windgeschützte Bucht Cala Llombards mit sandigem Grund und 3–6 m Wassertiefe ist nahezu wellenfrei und ein ruhiger, sicherer Ankerplatz.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Die anderen Balearen: <Link to="/reviere/mittelmeer/spanien/balearen/ibiza" className="text-blue-600 hover:text-blue-800 underline">Ibiza</Link>, <Link to="/reviere/mittelmeer/spanien/balearen/menorca" className="text-blue-600 hover:text-blue-800 underline">Menorca</Link> und Formentera</h3>
            <p className="mb-4">Jede der anderen Baleareninseln hat ihren eigenen Reiz und ist ein lohnendes Ziel für einen Yachtcharter.</p>

            <h4 className="text-xl font-semibold mt-6 mb-4"><Link to="/reviere/mittelmeer/spanien/balearen/ibiza" className="text-blue-600 hover:text-blue-800 underline">Ibiza</Link>: Die weiße Insel mit vielen Facetten</h4>
            <p className="mb-6">
              <Link to="/reviere/mittelmeer/spanien/balearen/ibiza" className="text-blue-600 hover:text-blue-800 underline">Ibiza</Link> ist weltberühmt für sein pulsierendes Nachtleben, aber die Insel hat auch eine überraschend ruhige und natürliche Seite. Neben den berühmten Beach Clubs und Diskotheken bietet Ibiza unzählige wunderschöne Buchten mit türkisfarbenem Wasser, Pinienwäldern und charmanten Dörfern. Die Altstadt von Ibiza-Stadt (Dalt Vila) ist UNESCO-Weltkulturerbe. Beliebte Ankerplätze sind die Cala Salada, Cala Conta für spektakuläre Sonnenuntergänge, oder die ruhigere Cala Jondal. Von Ibiza aus ist es nur ein kurzer Schlag zur Nachbarinsel Formentera.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Formentera: Die Karibik des Mittelmeers</h4>
            <p className="mb-6">
              Formentera ist die kleinste bewohnte Baleareninsel und ein wahres Naturparadies. Bekannt für ihre puderzuckerweißen Strände und das unglaublich klare, türkisfarbene Wasser, das an die Karibik erinnert. Die Insel ist flach und ideal zum Radfahren. Die Playa de Ses Illetes ist ein ikonischer Ankerplatz, aber auch die Cala Saona oder die Bucht von Es Pujols sind sehr beliebt. Das Wasser zwischen Ibiza und Formentera ist teils flach und erfordert Aufmerksamkeit bei der Navigation.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4"><Link to="/reviere/mittelmeer/spanien/balearen/menorca" className="text-blue-600 hover:text-blue-800 underline">Menorca</Link>: Die ruhige Schönheit</h4>
            <p className="mb-6">
              <Link to="/reviere/mittelmeer/spanien/balearen/menorca" className="text-blue-600 hover:text-blue-800 underline">Menorca</Link> ist die östlichste und zweitgrößte Baleareninsel, bekannt für ihre unberührte Natur und ihre entspannte Atmosphäre. Menorca wurde von der UNESCO zum Biosphärenreservat erklärt und bietet eine Fülle von unberührten Stränden (Calas) und eine reiche Flora und Fauna. Die Insel ist ruhiger und weniger touristisch als Mallorca oder Ibiza. Die Südküste Menorcas ist gesäumt von atemberaubenden Calas wie Cala Macarella, Cala Mitjana oder Cala Turqueta, die zum Ankern und Schwimmen einladen. Die beiden Hauptstädte Mahón (im Osten) und Ciutadella (im Westen) verfügen über wunderschöne Naturhäfen, die einen Besuch wert sind.
            </p>

            {/* Cala Macarella Image */}
            <div className="my-8">
              <img
                src="/lovable-uploads/16f1d4fc-5a9e-4edc-b6bd-cfd79999a60c.png"
                alt="Cala Macarella - malerische Bucht an Menorcas Südküste"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-center text-sm text-gray-600 mt-2 italic">
                Die Cala Macarella ist eine malerische Bucht an Menorcas Südküste, in der Segler tagsüber über feinem Sand in türkisfarbenem Wasser ankern können. In der Nach kann in der nach Süden hin völlig offenen Bucht Schwell stehen.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wind- und Wetterbedingungen auf den Balearen</h3>
            <p className="mb-4">
              Das Klima auf den Balearen ist typisch mediterran mit heißen, trockenen Sommern und milden Wintern. Die Segelsaison erstreckt sich von April bis in den späten Oktober.
            </p>
            
            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Windverhältnisse</h4>
              <ul className="space-y-2 text-black">
                <li><strong>Sommerwinde:</strong> Im Sommer dominieren thermische Winde (Land- und Seebrisen), die tagsüber für moderate und zuverlässige Segelbedingungen (3-4 Bft) sorgen und nachts oft einschlafen. Dies ist ideal für entspanntes Cruisen und Badeurlaub.</li>
                <li><strong>Tramontana:</strong> Ein Nordwind, der vor allem in den Übergangszeiten (Frühling, Herbst) kräftiger auftreten kann, besonders an der Nordküste Mallorcas und Menorcas.</li>
                <li><strong>Beste Reisezeit:</strong> Die idealen Monate für einen Yachtcharter auf den Balearen sind Mai, Juni und September. Die Temperaturen sind angenehm warm, das Wasser hat Badetemperatur, und die Häfen und Buchten sind belebt, aber nicht überfüllt. Im Juli und August ist Hochsaison mit sehr hohen Temperaturen und maximalem Andrang. Eine frühzeitige Buchung von Liegeplätzen ist dann unerlässlich.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Landaktivitäten und spanische Lebensart</h3>
            <p className="mb-4">Ein Yachtcharter auf den Balearen bietet weit mehr als nur Segeln:</p>
            
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Vorteile eines Yachtcharters auf den Balearen</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Märkte:</strong> Besuchen Sie die lokalen Wochenmärkte in den Dörfern, um frische Produkte und Kunsthandwerk zu entdecken.</li>
                <li><strong>Sightseeing:</strong> Erkunden Sie historische Altstädte wie Palma de Mallorca, Ibiza-Stadt oder Ciutadella auf Menorca.</li>
                <li><strong>Gastronomie:</strong> Genießen Sie die erstklassige spanische und mediterrane Küche – von frischem Fisch und Meeresfrüchten bis zu Tapas und Paella.</li>
                <li><strong>Nightlife:</strong> Ibiza ist weltberühmt für seine Clubs, aber auch Palma bietet ein pulsierendes Nachtleben.</li>
                <li><strong>Abwechslungsreiche Segelbedingungen:</strong> Von geschützten Buchten bis zu offener See ist für jeden etwas dabei.</li>
                <li><strong>Mediterranes Flair:</strong> Sonne, Meer und die entspannte spanische Lebensart.</li>
                <li><strong>Erstklassige Küche:</strong> Kulinarische Genüsse auf höchstem Niveau.</li>
                <li><strong>Kulturelle Vielfalt:</strong> Historische Städte, charmante Dörfer und eine reiche Geschichte.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit: Die Balearen – Ihr nächstes Segelparadies</h3>
            <p className="mb-6">
              Ein Yachtcharter auf den Balearen ist ein Versprechen für einen unvergesslichen Urlaub. Ob Sie die elegante Atmosphäre der Superyacht-Marinas suchen, die historischen Städte erkunden oder in versteckten Buchten der Halbinsel Lustica entspannen möchten – die Balearen bieten eine unvergleichliche Vielfalt an Segelrevieren. Die Kombination aus vielseitigen Segelbedingungen, traumhaften Landschaften, spanischer Gastfreundschaft, exquisiter Küche und reicher kultureller Vielfalt macht jeden Törn zu einem Fest für die Sinne.
            </p>
            
            <p className="mb-8 font-semibold">
              Sind Sie bereit, die Segel zu setzen und die Balearen vom Wasser aus zu entdecken? Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter auf den Balearen an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
            </p>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Häfen</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{city}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Balearen?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie Spaniens beliebteste Segelinseln mit perfekter 
              Infrastruktur und mediterranem Flair.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Balearen Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balearics;
