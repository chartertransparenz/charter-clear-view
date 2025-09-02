import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const CostaSmeralda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Nordost-Sardinien"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Naturliebhaber"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Unzählige Buchten"
  }];
  const marinas = ["Porto Cervo", "Portisco", "Porto Rotondo", "Poltu Quatu", "Cannigione", "Olbia"];
  const highlights = ["Weltberühmte Costa Smeralda", "Exklusive Marinas und Yachthäfen", "La Maddalena Archipel", "Kristallklares, smaragdgrünes Wasser", "Luxuriöse Boutiquen und Restaurants", "Spektakuläre Granitformationen", "Internationale Jet-Set Atmosphäre", "Perfekte Ankerplätze", "Erstklassige nautische Infrastruktur"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/lovable-uploads/814afb1d-620f-465b-8dff-f17614a1487e.png')",
        filter: "brightness(0.7)"
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-emerald-500 text-white">🇮🇹 Costa Smeralda</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Costa Smeralda</h1>
            <p className="text-xl max-w-2xl">
              Das Smaragdparadies Sardiniens
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer/italien/sardinien" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Sardinien
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
                  <Link to="/reviere/mittelmeer/italien">Italien</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer/italien/sardinien">Sardinien</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Costa Smeralda</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <Card key={index} className="shadow-lg">
              <CardContent className="p-6 text-center">
                <fact.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Map */}
        <TerritoryMap region="Costa Smeralda" center={{
        lat: 41.308856,
        lng: 9.637043
      }} zoom={8} maptype="satellite" className="mb-12" />

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Yachtcharter Costa Smeralda: Segeln im Smaragdparadies Sardiniens</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Willkommen in einem der exklusivsten und atemberaubendsten Segelreviere der Welt. Ein Yachtcharter an der Costa Smeralda ist nicht einfach nur ein Urlaub – es ist der Inbegriff des mediterranen Traums. Hier trifft karibisches Flair auf europäische Eleganz, unberührte Natur auf luxuriöse Marinas und sportliches Segeln auf entspanntes Dolce Vita. Der Nordosten Sardiniens mit der legendären Costa Smeralda und dem La Maddalena Archipel ist ein Magnet für Segler aus aller Welt.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Stellen Sie sich vor, Sie navigieren Ihre Yacht durch ein Meer, dessen Farben von tiefem Smaragdgrün bis zu leuchtendem Türkisblau changieren. Sie passieren bizarre, von Wind und Wetter geformte Granitfelsen, die wie Skulpturen aus dem Wasser ragen, und werfen Anker in Buchten mit Puderzuckerstränden, die Sie sonst nur aus Hochglanzmagazinen kennen.
              </p>

              {/* Yachtcharter Costa Smeralda Image */}
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <img src="/lovable-uploads/2112d3b6-fd2a-4cce-ab71-7c25452c2d4a.png" alt="Yachtcharter Costa Smeralda - Luxusyachten ankern in türkisblauer Bucht mit Granitfelsen an der Smaragdküste Sardiniens, perfekt für exklusiven Segelurlaub" title="Yachtcharter Costa Smeralda" className="w-full h-auto object-cover" loading="lazy" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Die Costa Smeralda: Wo Luxus auf Natur trifft</h3>
              <p className="text-lg text-gray-600 mb-6">
                Die „Smaragdküste" macht ihrem Namen alle Ehre. In den 1960er Jahren von Prinz Karim Aga Khan als exklusives Refugium entwickelt, ist sie heute ein Synonym für Luxus, Stil und unvergleichliche Naturschönheit. Ein Törn entlang dieses Küstenabschnitts ist ein Erlebnis für sich.
              </p>

              <p className="text-base text-gray-600 mb-4">
                Die bestens gelegenen Charterbasen in Olbia, Portisco oder Cannigione sind der ideale Startpunkt für Ihren Törn. Die Marinas hier gehören zu den berühmtesten der Welt:
              </p>

              <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
                <li><strong>Porto Cervo:</strong> Das unbestrittene Zentrum der Costa Smeralda. Die von Stararchitekt Luigi Vietti entworfene Marina ist ein Meisterwerk, das sich harmonisch in die Landschaft einfügt. Hier liegen die Superyachten der Welt vor Anker, und in den Gassen des Ortes finden sich die Boutiquen aller großen Designer.</li>
                <li><strong>Portisco:</strong> Eine moderne und umfassend ausgestattete Marina, die einen hervorragenden Service bietet und strategisch günstig zwischen Olbia und Porto Cervo liegt.</li>
                <li><strong>Poltu Quatu:</strong> Der „versteckte Hafen" liegt in einem fjordähnlichen Einschnitt und bietet eine intimere, aber ebenso luxuriöse Atmosphäre.</li>
              </ul>

              <p className="text-base text-gray-600 mb-6">
                Doch der wahre Luxus der Costa Smeralda ist die Natur selbst. Zwischen den mondänen Häfen finden Sie weltberühmte Buchten wie die Cala di Volpe oder den Liscia Ruja Strand, die mit ihrem kristallklaren Wasser und feinen Sand zum Ankern und Baden einladen.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Das Kronjuwel: Das La Maddalena Archipel – Ein Paradies für Segler</h3>
              <p className="text-base text-gray-600 mb-4">
                Nur wenige Seemeilen nördlich der Costa Smeralda beginnt das nautische Herzstück des Reviers: das La Maddalena Archipel. Dieser Nationalpark besteht aus über 60 Inseln und Felsen und ist ein wahres Paradies für Segler. Hier finden Sie unzählige, perfekt geschützte Ankerplätze.
              </p>

              <p className="text-base text-gray-600 mb-4">
                Die Schönheit der Natur ist hier überwältigend. Wind und Wetter haben über Jahrtausende bizarre Granitformationen geschaffen, die wie von Künstlerhand geformt aussehen. Dazwischen liegen unzählige Buchten mit feinstem weißen Sand und Wasser, das so klar ist, dass die Yachten über dem Meeresgrund zu schweben scheinen.
              </p>

              {/* Boot mieten Costa Smeralda Image */}
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <img src="/lovable-uploads/150dda6b-099a-40d6-a3d4-4c716d4be464.png" alt="Boot mieten Costa Smeralda - Luftaufnahme weißer Sandstrand mit türkisfarbenem Wasser und Segelbooten, La Maddalena Archipel Nationalpark ideal für Bootsverleih" title="Boot mieten Costa Smeralda" className="w-full h-auto object-cover" loading="lazy" />
              </div>

              <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
                <li><strong>Spargi:</strong> Berühmt für ihre Buchten an der Ostküste wie die Cala Corsara, umgeben von beeindruckenden Granitformationen.</li>
                <li><strong>Budelli:</strong> Bekannt für den legendären „Spiaggia Rosa", den rosa Strand. Auch die umliegenden Ankerplätze sind von atemberaubender Schönheit.</li>
                <li><strong>Caprera:</strong> Die Insel von Nationalheld Giuseppe Garibaldi ist grüner und bewaldeter. Hier liegt eine der berühmtesten Buchten des Mittelmeers: die Cala Coticcio, auch bekannt als „Tahiti", wegen ihres unglaublich türkisfarbenen Wassers.</li>
                <li><strong>La Maddalena:</strong> Die gleichnamige Hauptinsel beherbergt das einzige Städtchen des Archipels mit einem charmanten Hafen und lebhaften Gassen.</li>
              </ul>

              {/* Route Suggestions */}
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Routenvorschläge – 1 & 2 Wochen</h3>
              
              {/* 1 Week Route */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">1 Woche – „Maddalena & Costa Smeralda"</h4>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Tag 1: Portisco/Porto Cervo → Caprera (Cala Coticcio) – Einsegeln, Badestopp; abends ggf. La Maddalena (Cala Gavetta).</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Tag 2: La Maddalena → Spargi (Cala Corsara) → Budelli (Aussicht Spiaggia Rosa) – Distanz wahren, in Parkzone bojen.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Tag 3: Budelli/Santa Maria → Razzoli-Passagen → Caprera (Cala Napoletana) – kurzes Inselhüpfen, Longline nur wo zulässig.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Tag 4: Caprera → Santo Stefano → La Maddalena Stadt – Versorger-Stopp, ggf. Pump-Out.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Tag 5: La Maddalena → Costa Smeralda (Cala di Volpe/Liscia Ruja) – Tagesanker; für die Nacht in Bojenfeld/Marina ausweichen.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Tag 6: Costa Smeralda → Poltu Quatu/Porto Cervo – mondäner Abend, Boutiquen & Kulinarik.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-6 bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Tag 7: Porto Cervo/Poltu Quatu → Portisco/Cala dei Sardi – ruhiger Ausklang, Bunkern, Check-out.</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
                  <strong>Unsere Gedanken zum Thema Wind & Törnplanung:</strong> Bei Mistral sind Ost- und Südseiten der Inseln oft ruhiger; bei Scirocco eher Nord-/Westcales. Früh starten, Mittagsthermik nutzen, nachmittags früh festmachen.
                </p>
              </div>

              {/* 2 Week Route */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">2 Wochen – „Smaragd & Südkorsika"</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Woche 1:</strong> wie oben, jedoch mit zusätzlichen Nächten in Cala Granara (Spargi), Cala Brigantina (Caprera) und einem Lay-Day in La Maddalena (Stadt & Inselhikes).
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Woche 2:</strong> Bei stabilem Fenster Kurs Capo Testa → Bonifacio (Hafeninformationen beachten), Lavezzi/Cavallo nur bei ruhigen Bedingungen. Alternativ südwärts Tavolara/Molara und Golfo Aranci mit Fokus Schnorcheln/Tauchen. Für die Rückkehr in die Costa Smeralda rechtzeitig Marina-Reservierungen (Porto Cervo/Portisco/Cala dei Sardi) einplanen.
                </p>
                <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
                  <strong>Windgedanke:</strong> Der Mistral kann in der Achse Bonifacio stark böig werden; Reffstrategie, Crewbriefing und Lee-Routen über Inselabdeckung sind entscheidend.
                </p>
              </div>

              {/* Skipper Experiences */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Erfahrungen von Skippern – was unsere Kunden berichten</h3>
              <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
                <li><strong>Exklusivität & Luxus:</strong> Die Costa Smeralda gilt als einer der exklusivsten Hotspots im Mittelmeer. Hohe Dichte an Superyachten, luxuriöse Marinas (vor allem Porto Cervo) und ein internationales Publikum prägen das Bild.</li>
                <li><strong>Vielfältige Reviere:</strong> Zwischen mondänen Häfen und naturbelassenen Buchten – besonders im Maddalena-Archipel – sind die Etappen kurz, die Auswahl groß. Entspannte Tagespläne gelingen fast immer.</li>
                <li><strong>Wetter & Wind:</strong> Der Mistral kann im Sommer kräftig sein – reizvoll für Sportliche, aber nichts für Nachlässigkeit. Navigation zwischen den Inseln verlangt Aufmerksamkeit: Untiefen, Felsen, enge Passagen. Gute Seekarten (digital & Papier) und Plotter sind Standard.</li>
                <li><strong>Service & Infrastruktur:</strong> Marinas sind hervorragend ausgestattet, jedoch in der Hochsaison oft ausgebucht und teuer. Empfehlung: frühzeitig reservieren – gelegentlich auch Bojenplätze in besonders beliebten Buchten.</li>
                <li><strong>Kosten:</strong> Die Region ist preisintensiver als andere Reviere in Italien – von Liegegebühren über Restaurantbesuche bis Services.</li>
              </ul>

              {/* Seamanship */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Praxis & Seemannschaft</h3>
              <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
                <li><strong>Permit & Zonen:</strong> Permit auf dem Smartphone griffbereit, Zonenplan laminieren. Bojen vor Anker bevorzugen, Seegras meiden, Sandflecken suchen.</li>
                <li><strong>Mistral-Management:</strong> Reff früh, Trimm sauber, Crewbriefing vor den Passagen. Düseneffekte an Kaps antizipieren, Inselabdeckung nutzen, notfalls Marina-Ausweich.</li>
                <li><strong>Abwasser & Abfall:</strong> Kein Einleiten; Pump-Out und Hafenentsorgung fest in die Woche einplanen.</li>
                <li><strong>Manöver & Etikette:</strong> Langsam fahren, Sog/Welle vermeiden, Badezonen respektieren. VHF checken, vor Restaurantstegen kurz anfunken.</li>
                <li><strong>Ankern mit Landleinen:</strong> Nur wo zulässig und ohne Natur zu schädigen. Scheuerschutz nutzen, Winkel sauber setzen, anschließend leicht Vorlauf auf die Kette, Ankeralarm aktivieren.</li>
              </ul>

              {/* Best Time */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Beste Reisezeit</h3>
              <p className="text-base text-gray-600 mb-6">
                Mai–Juni und September–Oktober bieten warmes Wasser, stabile Winde und überschaubaren Andrang. Juli/August sind hoch frequentiert – Jetset-Atmosphäre inklusive. Wer die Hochsaison wählt, plant frühe Ankünfte, Reservierungen und Budgetpuffer ein. Bei Mistral helfen Lee-Cales im Archipel oder die Marinas an der Festlandküste.
              </p>

              {/* Charter Options */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ihr Yachtcharter – Optionen & Service</h3>
              <ul className="list-disc list-inside text-base text-gray-600 mb-6 space-y-2">
                <li><strong>Bareboat Sardinien:</strong> Für erfahrene Skipper, die Flexibilität schätzen.</li>
                <li><strong>Skipper Sardinien:</strong> Berufsskipper an Bord – entspannt ankommen, sicher segeln, lokal profitieren.</li>
                <li><strong>Crewed-Yacht:</strong> Skipper + Hostess/Koch – Premiumkomfort für Familien, Freunde, Incentives.</li>
                <li><strong>Katamaran mieten Sardinien:</strong> Viel Raum, Stabilität, geringer Tiefgang – perfekt für flache Cale.</li>
                <li><strong>Segelyacht Sardinien:</strong> Charakter, Performance, leises Gleiten – ideal bei Brise und Inselabdeckung.</li>
                <li><strong>Motoryacht:</strong> Tempo, mehrere Buchten pro Tag, Dinner-Sprung nach Porto Cervo oder Porto Rotondo.</li>
              </ul>
              <p className="text-base text-gray-600 mb-6">
                Auf Wunsch organisieren wir Transfer ab Olbia Flughafen, Proviant-Lieferung, Wasser-Toys (SUP, Seascooter) und natürlich Ihr Permit Maddalena.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Fazit: Sardinien – Ein Segelrevier der Superlative</h3>
              <p className="text-base text-gray-600 mb-6">
                Ein Yachtcharter an der Costa Smeralda bietet eine Vielfalt, die ihresgleichen sucht. Es ist die Freiheit, zwischen einem glamourösen Abend in Porto Cervo und einer stillen Nacht unter dem Sternenhimmel in einer einsamen Bucht zu wählen. Es ist die Kombination aus anspruchsvollem Segeln und entspanntem Badeurlaub. Es ist die Begegnung mit einer der spektakulärsten Küstenlandschaften Europas.
              </p>

              <p className="text-base text-gray-600 mb-6">
                Sind Sie bereit für das Segelabenteuer Ihres Lebens an den Smaragdküsten Sardiniens?
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Harbors & Ports */}
        <div className="mb-12">
          
          
        </div>

        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für das Smaragdparadies?
            </h3>
            <p className="mb-6 text-emerald-100">
              Erleben Sie das exklusivste Segelrevier des Mittelmeers und entdecken Sie 
              die legendäre Costa Smeralda vom Deck Ihrer Yacht aus.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50" size="lg">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default CostaSmeralda;