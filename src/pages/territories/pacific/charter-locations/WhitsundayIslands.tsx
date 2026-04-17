import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Plane, Heart, Fish } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CharterRequestForm from "@/components/CharterRequestForm";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import TerritoryMap from "@/components/TerritoryMap";
import pacific from "@/assets/pacific.jpg";

const WhitsundayIslands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-80 md:h-[500px] overflow-hidden mt-20">
        <img src="/lovable-uploads/8049c648-7c5d-4147-a62d-f364591ec70e.webp" alt="Whitsunday Islands, Australien" className="w-full h-full object-contain" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-600 text-white">🇦🇺 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Whitsunday Islands</h1>
            <p className="text-xl max-w-2xl">
              74 tropische Inseln im Great Barrier Reef
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
              
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/suedpazifik">Südpazifik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/suedpazifik/australien">Australien</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Whitsunday Islands</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-sky-200">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-sky-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-1">74 Inseln</h3>
                <p className="text-sm text-gray-600">Tropisches Inselparadies</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-sky-200">
              <CardContent className="p-6 text-center">
                <Fish className="w-8 h-8 text-sky-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-1">Great Barrier Reef</h3>
                <p className="text-sm text-gray-600">Weltklasse Schnorcheln</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-sky-200">
              <CardContent className="p-6 text-center">
                <Plane className="w-8 h-8 text-sky-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-1">2 Flughäfen</h3>
                <p className="text-sm text-gray-600">PPP & HTI direkt vor Ort</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-sky-200">
              <CardContent className="p-6 text-center">
                <Anchor className="w-8 h-8 text-sky-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-1">Airlie Beach Marina</h3>
                <p className="text-sm text-gray-600">Perfekter Starthafen</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Die Whitsunday Islands im Überblick</h2>
            <p className="text-gray-600">Entdecken Sie die 74 Inseln im Herzen des Great Barrier Reef</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <TerritoryMap
              region="Whitsunday Islands"
              center={{ lat: -20.2759, lng: 148.8988 }}
              zoom={11}
              maptype="satellite"
              className="shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Yachtcharter Whitsunday Islands – Ihr tropisches Inselhopping im Herzen des Great Barrier Reef
            </h1>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">74 Inseln, ein Versprechen</h2>
              <p className="text-gray-700 mb-4">
                Die Whitsunday Islands sind mehr als ein Postkartenmotiv – sie sind Ihr persönliches Spielfeld für Yachtcharter im Herzen des Great Barrier Reef. Zwischen 74 üppig bewachsenen Inseln, leuchtend türkisfarbenen Lagunen und schneeweißen Stränden entfaltet sich ein Revier, in dem Segeln in Australien sowohl entspannt als auch inspirierend ist. Airlie Beach bildet den pulsierenden Ausgangspunkt: Hier gehen Sie an Bord, werfen die Leinen los und gleiten in eine Welt aus ruhigen Ankerbuchten, geschützten Passagen und Szenerien, die jeden Tag wie den ersten Tag im Paradies wirken lassen. Ob Bareboat mit Segelyacht oder Katamaran oder mit Skipper an Ihrer Seite – Yachtcharter Whitsundays bedeutet Inselhüpfen mit ikonischen Zielen: Whitehaven Beach, Hill Inlet, Nara Inlet, Butterfly Bay und Langford Island.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Erreichbarkeit: Einfach ankommen, direkt ablegen</h2>
              <p className="text-gray-700 mb-4">
                Ihre Anreise ist komfortabel: Fliegen Sie zum Whitsunday Coast Airport (Proserpine, PPP) und erreichen Sie Airlie Beach in rund einer halben Stunde Transferzeit. Alternativ landen Sie direkt im Inselreich: Hamilton Island (HTI) verfügt über einen eigenen Flughafen – vom Terminal sind es nur wenige Gehminuten zur Hamilton Island Marina. Beide Optionen verkürzen die Zeit vom Rollfeld bis zum Steg, sodass Sie am Ankunftstag in Ruhe einchecken, proviantieren und bei einem ersten Sundowner die Meeresbrise spüren.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Besonderheiten des Reviers: Tropisch, geschützt – und doch mit Anspruch</h2>
              <p className="text-gray-700 mb-4">
                Der Zauber der Whitsundays liegt im Zusammenspiel aus geschützten Gewässern und tropischem Flair. Die schützende Inselkette bricht die Dünung, die Passagen sind kurz, die Ankerplätze zahlreich. Gleichzeitig fordert das Revier mit Tidenhub und strömungsreichen Engstellen ein aufmerksames Zeitmanagement: Wer Tide und Strom in die Routenplanung einbezieht, segelt entspannter, ankert ruhiger und nutzt die Kraft der Natur für effiziente Etappen. Belohnt werden Sie mit außergewöhnlicher Biodiversität: Buckelwale (saisonal), Meeresschildkröten, Delfine, bunte Riffbewohner – die Unterwasserwelt des Great Barrier Reef ist ein einziger Grund, Maske und Schnorchel griffbereit zu halten. Dazu wehen meist südöstliche Passatwinde, die für konstante, gut kalkulierbare Segeltage sorgen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Vorschriften & Marine Park: So schützen Sie, was Sie lieben</h2>
              <p className="text-gray-700 mb-4">
                Die Whitsundays liegen im Great Barrier Reef Marine Park. Hier sorgen Zonierungen für Balance zwischen Natur und Nutzung. Für Sie heißt das: In Schutzbereichen sind Ankerverbote ausgewiesen, oft stehen Mooringbojen bereit. Bitte beachten Sie die Marine-Park-Karten, nutzen Sie Moorings, wo vorhanden, und setzen Sie den Anker ausschließlich auf Sand – niemals auf Korallen. Abfall gehört in die Hafenentsorgung, Abwasser wird nicht eingeleitet. Reduzieren Sie die Geschwindigkeit in Buchten und Hafennähe, halten Sie Distanz zu Tieren und füttern Sie kein Wildlife. Mit dieser Haltung genießen Sie nicht nur ein makelloses Revier – Sie helfen aktiv, es zu bewahren.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Für wen sind die Whitsundays geeignet?</h2>
              <p className="text-gray-700 mb-4">
                Dieses Revier ist leicht bis mittelschwer und damit ideal für Familien, Paare und Genießer, die kurze Schläge, gut geschützte Ankerbuchten und ein berechenbares Tagesfenster schätzen. Gleichzeitig kommen erfahrene Skipper auf ihre Kosten: Tidennavigation, Stromtaktik, präzises Anker-Handling und das Lesen von Karten und Sektorenzeichen verleihen jeder Etappe Tiefe. Katamarane spielen ihre Stärken in Flachwasserbereichen und beim Bordkomfort aus; Segelyachten glänzen bei den Passatwinden mit effizientem Vorankommen und feinfühligem Trimm.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Marinas & Service: Startklar in Airlie Beach und auf Hamilton</h2>
              <p className="text-gray-700 mb-4">
                In Airlie Beach stehen zwei erstklassige Starthäfen bereit: die Coral Sea Marina und der Port of Airlie – beide mit modernen Steganlagen, Wasser/Strom, Fuel, Pump-out, Chandlery, WLAN, Charter- und Servicedienstleistern sowie kurzen Wegen zu Woolworths und Coles. Wer direkt im Inselreich ablegen möchte, geht in der Hamilton Island Marina an Bord: exzellenter Rundumservice, Resorts, Restaurants, Strände und Wanderwege – perfekt zum Kombinieren von Segel- und Inselurlaub.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Törnziele & Highlights: Whitehaven, Hill Inlet & Co.</h2>
              <div className="text-gray-700 space-y-4">
                <p><strong>Whitsunday Island – Whitehaven Beach & Hill Inlet:</strong> Feiner, strahlend weißer Silicasand, kristallklares Wasser und die berühmten Sandbänke des Hill Inlet, die bei Tidenwechsel surreal schöne Muster zeichnen. Früh ankommen, den Blick vom Lookout genießen und das Farbspiel im Kopf eintätowieren.</p>
                
                <p><strong>Hook Island – Nara Inlet & Butterfly Bay:</strong> Nara Inlet gilt als eine der sichersten Ankerbuchten der Whitsundays – langgezogen, gut geschützt, ideal für ruhige Nächte. Eine kurze Wanderung führt zu Felsmalereien indigener Völker. Butterfly Bay bietet ausgezeichnete Mooringfelder und Schnorchelspots mit lebendigen Korallen.</p>
                
                <p><strong>Langford Island & Sandspit:</strong> Ein schmaler, je nach Tide wandernder Sandstreifen, umspült von klarem Wasser – perfekt für Badestopp, SUP und Drohnen-Bilder (wo erlaubt).</p>
                
                <p><strong>Blue Pearl Bay (Hayman Island) & Stonehaven (Hook West):</strong> Klassiker für Schnorcheln und Sundowner – mit guten Moorings und Blick auf spektakuläre Sonnenuntergänge.</p>
                
                <p><strong>Cid Harbour (Whitsunday Island West):</strong> Weite, ruhige Ankerbucht, üppig grün gerahmt, ausgezeichnet für wanderfreudige Crews und lange Schwimmpausen.</p>
                
                <p><strong>Border Island – Cateran Bay:</strong> Beliebtes Schnorchelrevier, wenn die Bedingungen passen; die Bucht leuchtet in Blau- und Türkistönen, wie man sie sonst nur aus Magazin-Covern kennt.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Routenvorschlag (7–8 Tage): Sanftes Inselhüpfen mit Passatwind</h2>
              <div className="text-gray-700 space-y-2">
                <p><strong>Tag 1 – Airlie Beach → Nara Inlet (Hook Island):</strong> Einsegeln, Tide im Blick, ruhige Nacht.</p>
                <p><strong>Tag 2 – Nara Inlet → Butterfly Bay:</strong> Mooring aufnehmen, Schnorcheln und nachmittags an Deck entspannen.</p>
                <p><strong>Tag 3 – Butterfly Bay → Blue Pearl Bay (Hayman):</strong> Riffkanten & Fische satt; je nach Wetter abends nach Stonehaven verholen.</p>
                <p><strong>Tag 4 – Stonehaven → Langford Island:</strong> Badestopp am Sandspit, später Kurs Richtung Cid Harbour.</p>
                <p><strong>Tag 5 – Cid Harbour → Whitehaven Beach (Whitsunday Island):</strong> Silicasand, türkisfarbene Weiten; bei moderatem Wind ein perfekter Strandtag.</p>
                <p><strong>Tag 6 – Whitehaven → Tongue Bay → Hill Inlet Lookout:</strong> Tidenfenster nutzen, Dinghy an Land, Lookout-Wanderung & Fotomotive deluxe.</p>
                <p><strong>Tag 7 – Whitsunday Island → Hamilton Island oder zurück nach Airlie Beach:</strong> Proviant ergänzen, Resort-Atmosphäre genießen oder rechtzeitig in die Charterbasis einlaufen.</p>
                <p><strong>Tag 8 – Reserve/Schlechtwettertag:</strong> Flexibel halten für MTO-Anpassungen, zusätzliche Schnorchel- oder Wanderstopps.</p>
              </div>
              <p className="text-gray-700 mt-4">
                <strong>Tipp:</strong> Planen Sie Etappen am Vormittag und nutzen Sie die südöstlichen Passatwinde. Stimmen Sie Ankerzeit und Strömung aufeinander ab, wählen Sie für die Nacht eine Ankerbucht mit Leeschutz – so bleibt der Abend lang und ruhig.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Warum gerade jetzt ein Boot in den Whitsundays mieten?</h2>
              <p className="text-gray-700 mb-4">
                Weil kaum ein Revier so viel Schönheit auf so kurzer Distanz versammelt. Jeder Schlag bringt eine neue Kulisse: smaragdgrüne Hügel, Korallenriffe zum Abtauchen, Sandstrände, die unter den Füßen singen, und Ankerplätze, an denen die Sterne so nah wirken, als würden sie im Rigg hängen. Die Infrastruktur ist hervorragend, die Distanzen sind angenehm kurz, und das Zusammenspiel aus Passatwind, Tide und geschützten Passagen schafft genau jene Mischung, die Anfänger sicher ankommen lässt und erfahrene Skipper mit nautischer Finesse belohnt. Ob Bareboat, Skipper, Katamaran oder Segelyacht – die Whitsunday Islands sind das Revier, das Sie immer wieder zurückruft.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ihr nächster Schritt</h2>
              <p className="text-gray-700 mb-4">
                Sagen Sie uns Reisezeit, Crewgröße und die gewünschte Yachtklasse. Wir sichern Liegeplätze in Airlie Beach oder Hamilton Island, organisieren Transfers, stellen Ihre Tiden- und Routenplanung zusammen, reservieren Moorings in beliebten Buchten und kümmern uns um Proviantlieferungen.
              </p>
              <p className="text-gray-700">
                Yachtcharter Whitsundays bedeutet: Inselhopping Whitsundays, Great Barrier Reef direkt unterm Kiel und Erinnerungen, die so klar sind wie das Wasser, in dem Sie heute ankern. Setzen Sie die Segel – der tropische Traum wartet.
              </p>
            </section>
          </div>
        </div>
        
        {/* Additional CTA with light blue gradient */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-sky-400 to-sky-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Kostenlose Beratung für Ihren Whitsundays Charter
            </h3>
            <p className="mb-6 text-sky-100">
              Unsere Experten helfen Ihnen bei der Planung Ihres perfekten Segeltörns 
              durch die traumhaften Whitsunday Islands.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-sky-600 hover:bg-sky-50" size="lg">
                Jetzt kostenlos beraten lassen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-sunset-orange to-sunset-red text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Entdecken Sie die Whitsunday Islands</h2>
            <p className="text-xl mb-6">
              74 tropische Inseln im Great Barrier Reef warten auf Sie
            </p>
            <CharterRequestForm>
              <Button size="lg" variant="secondary" className="bg-white text-sunset-orange hover:bg-gray-100">
                Whitsundays Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitsundayIslands;
