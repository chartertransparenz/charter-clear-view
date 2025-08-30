import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Plane, Heart, Fish } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CharterRequestForm from "@/components/CharterRequestForm";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import pacific from "@/assets/pacific.jpg";
const WhitsundayIslands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const marinas = [{
    name: "Abell Point Marina",
    description: "Australiens größte Superyacht-Marina",
    amenities: ["500+ Liegeplätze", "Superyacht-Service", "Restaurants", "Shopping", "Resort", "Concierge"]
  }, {
    name: "Port of Airlie",
    description: "Charter-Zentrum von Airlie Beach",
    amenities: ["Charter-Basen", "Fuel Station", "Provisioning", "Restaurants", "Nachtleben", "Transport"]
  }, {
    name: "Shute Harbour",
    description: "Gateway zu den Whitsunday Islands",
    amenities: ["Fährverbindungen", "Charter-Pickup", "Parkplätze", "Café", "Toiletten", "Gepäckaufbewahrung"]
  }];
  const highlights = ["Heart Reef - Weltberühmtes Herzriff", "Whitehaven Beach - Weißester Sand der Welt", "Great Barrier Reef - UNESCO Welterbe", "74 tropische Inseln", "Konstante Südost-Passatwinde", "Luxury Island Resorts", "Weltklasse Schnorcheln & Tauchen"];
  const distances = [{
    destination: "Hamilton Island",
    distance: "8 sm",
    time: "1-1.5 Std."
  }, {
    destination: "Whitehaven Beach",
    distance: "12 sm",
    time: "1.5-2 Std."
  }, {
    destination: "Hook Island",
    distance: "15 sm",
    time: "2-2.5 Std."
  }, {
    destination: "Daydream Island",
    distance: "6 sm",
    time: "45 Min."
  }, {
    destination: "Cairns",
    distance: "140 sm",
    time: "18-22 Std."
  }];
  const islands = [{
    name: "Hamilton Island",
    description: "Resort-Insel mit Flughafen und Marina"
  }, {
    name: "Whitehaven Beach",
    description: "7km weißester Silica-Sand der Welt"
  }, {
    name: "Hayman Island",
    description: "Luxus-Resort-Insel der Extraklasse"
  }, {
    name: "Daydream Island",
    description: "All-Inclusive Resort mit Wassersport"
  }, {
    name: "Hook Island",
    description: "Nationalpark mit spektakulären Buchten"
  }, {
    name: "Long Island",
    description: "Unberührte Natur und einsame Strände"
  }];
  const activities = [{
    name: "Great Barrier Reef",
    description: "Schnorcheln und Tauchen am größten Korallenriff"
  }, {
    name: "Heart Reef Flug",
    description: "Rundflug über das berühmte herzförmige Riff"
  }, {
    name: "Whitehaven Beach",
    description: "Besuch des schönsten Strandes Australiens"
  }, {
    name: "Hill Inlet",
    description: "Spektakulärer Aussichtspunkt über swirling sands"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={pacific} alt="Whitsunday Islands, Australien" className="w-full h-full object-cover" />
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
              <BreadcrumbSeparator />
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

      <div className="container mx-auto px-4 py-12">
        {/* Übersicht */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-800">Yachtcharter Whitsunday Islands – Ihr Segelabenteuer im Herzen des Great Barrier Reef</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Die Whitsunday Islands sind mehr als eine tropische Destination – sie sind ein Traumrevier für Yachtcharter am Great Barrier Reef. Zwischen 74 Inseln erwarten Sie leuchtend türkisfarbenes Wasser, palmengesäumte Strände und sichere Ankerbuchten in geschützten Passagen. Airlie Beach gilt als lebendiger Ausgangshafen mit hervorragender Infrastruktur und kurzen Distanzen zu den Highlights. Ob Bareboat mit Segelyacht oder Katamaran, oder mit Skipper an Bord: Inselhopping Whitsundays bedeutet entspanntes Segeln in Australien – mit ikonischen Motiven wie Whitehaven Beach und dem spektakulären Hill Inlet.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-orange-50 rounded-lg">
                <MapPin className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">20°16'S 148°57'E</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Plane className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">HTI/PPP Airport</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Anchor className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Marinas</div>
                <div className="text-sm text-gray-600">3 Hauptmarinas</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Fish className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Great Barrier Reef</div>
                <div className="text-sm text-gray-600">UNESCO Welterbe</div>
              </div>
            </div>
          </div>
        </div>

        {/* Erreichbarkeit */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Erreichbarkeit</h3>
            <p className="text-gray-600">
              Sie erreichen die Whitsundays bequem per Flug nach Whitsunday Coast Airport (Proserpine, PPP) oder Hamilton Island (HTI). Von PPP sind es rund 30–40 Minuten Transfer zur Coral Sea Marina bzw. zum Port of Airlie in Airlie Beach. Wer auf Hamilton Island landet, spaziert wenige Minuten zur Hamilton Island Marina – ideal, wenn Sie direkt an Bord gehen möchten.
            </p>
          </div>
        </div>

        {/* Besonderheiten des Reviers */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Besonderheiten des Reviers</h3>
            <p className="text-gray-600">
              Das Revier ist von starkem Tidenhub geprägt. Strömungen in Engstellen und Riffen verlangen Aufmerksamkeit bei Strom- und Kursplanung sowie beim Timing von Ein- und Ausfahrten in Ankerbuchten. Zugleich bieten die Inseln lange Leeseiten und geschützte Gewässer, die das Navigieren angenehm machen. Die Tierwelt ist einzigartig: Mit etwas Glück beobachten Sie Buckelwale (saisonal), Meeresschildkröten, Delfine und farbenprächtige Korallenriffe – perfekte Bedingungen zum Schnorcheln und Tauchen. Die vorherrschenden südöstlichen Passatwinde sorgen meist für konstante, moderate Segelbedingungen.
            </p>
          </div>
        </div>

        {/* Vorschriften und Regeln */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Vorschriften und Regeln</h3>
            <p className="text-gray-600">
              Die Whitsundays liegen im Great Barrier Reef Marine Park. Beachten Sie die Zonierung: In ausgewiesenen Schutzbereichen gelten Ankerverbote, es sind Mooringbojen zu nutzen oder Mindestabstände einzuhalten. Das Berühren von Korallen und das Absetzen von Ankern in sensiblen Habitaten ist strikt zu vermeiden. Informieren Sie sich vor dem Ablegen über aktuelle Marine-Park-Maps, Mooringkapazitäten und No-anchoring-Zonen. Allgemein gilt: Abfall nur in Häfen entsorgen, Abwasser nicht einleiten, Geschwindigkeit in Buchten und Hafennähe reduzieren und Wildlife respektieren (kein Füttern, angemessene Distanz).
            </p>
          </div>
        </div>

        {/* Für wen ist das Revier geeignet? */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Für wen ist das Revier geeignet?</h3>
            <p className="text-gray-600">
              Die Whitsundays sind leicht bis mittelschwer und damit ideal für Familien, Paare und Genießer, die kurze Etappen und sichere Ankerplätze schätzen. Gleichzeitig bietet die Tidennavigation genügend Anspruch für erfahrene Skipper, die Strömungstaktik, Passagenplanung und präzises Anker-Handling lieben. Katamarane punkten mit Stabilität, Raum und geringem Tiefgang in flachen Buchten; Segelyachten glänzen bei den Passatwinden mit effizientem Vorankommen.
            </p>
          </div>
        </div>

        {/* Marinas */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Marinas</h3>
            <p className="text-gray-600 mb-6">
              Coral Sea Marina (Airlie Beach) ist der Hauptdreh- und Angelpunkt für Yachtcharter Whitsundays: moderne Stege, Wasser/Strom, Fuel, Pump-out, Chandlery, WLAN, Gastronomie – dazu kurze Wege zu Woolworths und Coles. Port of Airlie bietet ebenfalls vollwertige Charter-Infrastruktur mit Shops und Restaurants direkt am Becken. Auf der Insel selbst empfängt Sie die Hamilton Island Marina mit exzellenten Services, Resorts, Restaurants und schnellen Wegen zu Stränden und Wanderwegen – ideal, wenn Sie die Crew bequem per Inselflug bündeln möchten.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {marinas.map((marina, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-2">{marina.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">{marina.description}</p>
                    <ul className="space-y-1">
                      {marina.amenities.map((amenity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <Anchor className="w-3 h-3 text-orange-600 mr-2 flex-shrink-0" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Törnziele */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Törnziele</h3>
            <p className="text-gray-600 mb-6">
              Whitsunday Island mit Whitehaven Beach ist der ikonische Höhepunkt: feiner, schneeweißer Sand, klares Wasser und das berühmte Hill Inlet mit seinen Meeresarmen, die bei Tidenwechsel atemberaubende Muster zeichnen. Hook Island lockt mit der geschützten Nara Inlet (beliebt für die Nacht, Wanderung zu Höhlenmalereien) und Butterfly Bay mit hervorragenden Mooringfeldern zum Schnorcheln. Langford Island bietet einen malerischen Sandspit – ideal für einen Badestopp bei auflaufendem Wasser. Weitere Favoriten sind Cateran Bay (Border Island), Stonehaven (Hook Island West) und die Cid Harbour-Region, die mit weiten Ankerbuchten und guten Wanderoptionen überzeugt.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {islands.map((island, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-2">{island.name}</h4>
                    <p className="text-sm text-gray-600">{island.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Routenempfehlung */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Routenempfehlung (7 Tage)</h3>
            <p className="text-gray-600">
              Start Airlie Beach → Nara Inlet → Butterfly Bay → Blue Pearl Bay (Hayman) → Whitehaven Beach/Hill Inlet → Cid Harbour/Goldsmith-Region → Airlie Beach. Planen Sie kurze Distanzen (typisch 8–20 sm pro Tag) und segeln Sie mit den Passatwinden am Vormittag; nutzen Sie die Tide für enge Passagen und wählen Sie abends eine Ankerbucht mit Leeschutz.
            </p>
          </div>
        </div>

        {/* Distanzen */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Distanzen</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {distances.map((distance, index) => (
                <div key={index} className="p-4 bg-orange-50 rounded-lg text-center">
                  <div className="font-semibold text-gray-800">{distance.destination}</div>
                  <div className="text-orange-600 font-bold">{distance.distance}</div>
                  <div className="text-sm text-gray-600">{distance.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center p-3 bg-orange-50 rounded-lg">
                  <Heart className="w-4 h-4 text-orange-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fazit */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fazit</h3>
            <p className="text-gray-600">
              Mit Yachtcharter Whitsundays kombinieren Sie Great Barrier Reef, Airlie Beach-Komfort und abwechslungsreiches Inselhopping Whitsundays. Ob Bareboat, mit Skipper, Segelyacht oder Katamaran – dieses Revier verbindet tropische Bilderbuchkulissen mit planbaren Segeltagen und unvergesslichen Erlebnissen über und unter Wasser.
            </p>
          </div>
        </div>
        

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Entdecken Sie die Whitsunday Islands</h2>
            <p className="text-xl mb-6">
              74 tropische Inseln im Great Barrier Reef warten auf Sie
            </p>
            <CharterRequestForm>
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Whitsundays Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default WhitsundayIslands;