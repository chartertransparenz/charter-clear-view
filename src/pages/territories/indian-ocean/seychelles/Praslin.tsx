import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, Waves, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";

const Praslin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: <MapPin className="w-5 h-5" />,
    label: "Lage",
    value: "Zweitgrößte Insel der Seychellen"
  }, {
    icon: <Calendar className="w-5 h-5" />,
    label: "Beste Reisezeit",
    value: "April - Mai, Oktober - November"
  }, {
    icon: <Waves className="w-5 h-5" />,
    label: "Segelwetter",
    value: "SE Passat / NW Monsun"
  }, {
    icon: <Users className="w-5 h-5" />,
    label: "Chartertyp",
    value: "Katamaran bevorzugt"
  }];
  const marinas = [{
    name: "Praslin Marina",
    description: "Moderne Charterbasis mit umfassendem Service",
    facilities: ["Charter Base", "Fuel", "Wasser", "Provisions", "Transfer Service"]
  }, {
    name: "Baie Sainte Anne",
    description: "Haupthafen mit Fährverbindungen",
    facilities: ["Fuel", "Wasser", "Provisions", "Fähre nach Mahé"]
  }, {
    name: "Anse Volbert / Côte d'Or", 
    description: "Beliebter Ankerplatz an der Côte d'Or",
    facilities: ["Restaurants", "Beach Bars", "Wassersport", "Dinghy Landing"]
  }];

  const highlights = ["UNESCO Weltnaturerbe Vallée de Mai", "Seltene Coco de Mer Palmen", "Anse Lazio - einer der schönsten Strände der Welt", "Schwarzer Papagei (endemisch)", "Kristallklare Schnorchelgebiete", "Entspannte Atmosphäre", "Ausgezeichnete Ankerplätze"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/a01ef375-2c09-46c0-b2b1-f10026d0ecf2.png" alt="Praslin, Seychellen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🌴 Praslin</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Yachtcharter ab Praslin</h1>
            <p className="text-xl max-w-2xl">
              Inselhüpfen zwischen Granitkolossen, Lagunen & Riesenschildkröten
            </p>
          </div>
        </div>
        <Link to="/reviere/indischer-ozean/seychellen" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Seychellen
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Start</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#reviere">Reviere</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/indischer-ozean">Indischer Ozean</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/indischer-ozean/seychellen">Seychellen</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Praslin</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="flex justify-center text-blue-600 mb-2">
                  {fact.icon}
                </div>
                <div className="font-semibold text-sm text-gray-600 mb-1">
                  {fact.label}
                </div>
                <div className="text-sm font-medium">
                  {fact.value}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Praslin, Seychellen</h2>
          <div className="max-w-4xl mx-auto">
            <TerritoryMap
              region="Praslin, Seychellen"
              center={{ lat: -4.3199, lng: 55.7421 }}
              zoom={12}
              maptype="satellite"
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-blue-600" />
              Yachtcharter ab Praslin, Seychellen – Inselhüpfen zwischen Granitkolossen, Lagunen & Riesenschildkröten
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Einleitung</h3>
            <p className="text-lg text-gray-600 mb-6">
              Praslin ist das sanfte Herz der Inner Islands – grün bewaldete Hügel, blendend weiße Strände und Ankerbuchten wie aus dem Logbuch eines Träumers. Mit Start in der Praslin Marina segeln Sie mitten hinein in eines der fotogensten Reviere der Welt: kurze bis mittlere Distanzen, glasklares Wasser, gut haltende Sandflecken zum Ankern und Mooringfelder in marinen Schutzgebieten. Ob Bareboat auf Katamaran oder Segelyacht mit Skipper – ab Praslin erreichen Sie in wenigen Stunden weltberühmte Spots wie Anse Lazio, Curieuse mit frei lebenden Riesenschildkröten oder die Granitkuppeln rund um La Digue.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Anreise & Transfers</h3>
            <p className="text-gray-600 mb-6">
              Sie fliegen international nach Mahé (SEZ). Von dort bringt Sie ein kurzer Inlandsflug (ca. 15 Minuten) nach Praslin (PRI) oder alternativ die Schnellfähre von Mahé nach Baie Sainte Anne. Von Flughafen Praslin sind es nur wenige Kilometer zur Praslin Marina; Taxis und Transfers sind problemlos organisierbar. Viele Vercharterer bieten Early-Check-in und Proviantservices an, sodass Sie nach der Schiffsübernahme noch einen gemütlichen Einweisungsschlag in die nächste Ankerbucht machen können.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Reviercharakter, Wind & Navigation</h3>
            <p className="text-gray-600 mb-6">
              Die Seychellen sind ganzjährig warm. Von Mai bis Oktober dominiert der Südost-Passat – trockener, beständiger, teils frischer; exponierte Südostküsten können dann Schwell führen. November bis April bringt der Nordwest-Monsun eher leichtere Winde, glattere See und gelegentliche Schauer. Besonders beliebt sind die Übergänge April/Mai und Oktober/November: klares Wasser, moderater Wind, beste Schnorchelbedingungen. Navigiert wird überwiegend line of sight. Grundregel: heikle Riffe und Flachwasser nur bei Tageslicht anlaufen, Ausguck halten und den Plotter als Hilfe – nicht als alleinige Wahrheit – nutzen. Beim Ankern auf Sand langsam einfahren, Kette großzügig stecken und den Schwojkreis beachten.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Proviantierung & Technik</h3>
            <p className="text-gray-600 mb-6">
              Praslin bietet sehr gute Versorgung: In Baie Sainte Anne und Grand Anse finden Sie Supermärkte, Bäckereien, Gemüse- und Fischstände. Frischware (Fisch, Obst, Gemüse) am besten direkt nach Ankunft kaufen; haltbare Basics und Getränke können Sie vorbestellen und an Bord liefern lassen. In der Praslin Marina erhalten Sie üblicherweise Treibstoff, Wasser, Gas sowie Eis. Müll bitte trennen und ausschließlich an Land entsorgen; Grauwasser/Schwarzwasser nicht in Buchten oder Parks ablassen. Ein Dinghy mit Paddel, kräftige Mooringleinen, Schnorchelset und Sonnenschutz mit hohem LSF gehören zur Standardausrüstung.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Routenvorschlag (7–9 Tage, variabel)</h3>
            <p className="text-gray-600 mb-6">
              Tag 1 – Praslin Marina → Côte d'Or / Anse Volbert: Ruhiger Start, Badestopp und erstes Ankermanöver auf Sand.
              Tag 2 – Anse Volbert → Curieuse & St. Pierre: Vormittags Schildkröten auf Curieuse, nachmittags Schnorcheln am Îlot St. Pierre; Übernachtung je nach Bedingungen in einer geschützten Ankerbucht.
              Tag 3 – Curieuse → Anse Lazio: Früh ankommen, Anker sorgfältig einfahren; Strandtag und Sundowner an Bord.
              Tag 4 – Anse Lazio → La Digue: Sichere Mooring/Ankerplatz wählen, Dinghy an Land, Fahrräder mieten und Granitstrände erkunden.
              Tag 5 – La Digue → Coco/Félicité/Sisters: Wetterfenster prüfen; Schnorcheltag im klaren Wasser, ggf. Moorings nutzen.
              Tag 6 – Reserve- oder Landtag: Vallée de Mai (Praslin) oder ruhiger Lagunentag nach Wahl.
              Tag 7 – Gemütlicher Rückweg → Praslin Marina: Tanken, Wasser füllen, Technikübergabe.
              Bei 9–10 Tagen lassen sich Cousin/Cousine (Regeln beachten) sowie zusätzliche Ankerbuchten rund um Praslin einbauen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Praktische Tipps</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Früh buchen: Saisonspitzen sind beliebt; Yachten und Moorings werden knapp.</li>
              <li>• Katamaran vs. Monohull: Kats liegen ruhiger in der Dünung und sind ideal für Familien; Monohulls bieten mehr „Segelgefühl" am Wind.</li>
              <li>• Sonnenschutz & Riffschutz: UV-Kleidung, riffschonende Sonnencreme, viel Trinkwasser einplanen.</li>
              <li>• Cash & Gebühren: Kleinere Strandbars und Inselgebühren werden oft bar abgerechnet – Kleinbeträge bereithalten.</li>
              <li>• Plan B: Für jede Nacht eine Ausweich-Ankerbucht notieren; Winddreher und Schwellwechsel sind in den Tropen normal.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Unbedingt anschauen – Highlights ab Praslin</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• <strong>Anse Lazio & Anse Georgette (Praslin):</strong> Bilderbuchstrände mit hellem Sand und smaragdgrünem Wasser; tagsüber perfekter Badestopp.</li>
              <li>• <strong>Vallée de Mai (Praslin):</strong> An Land lockt der Palmenurwald mit der legendären Coco de Mer – ideal als Landtag vor oder nach dem Törn.</li>
              <li>• <strong>Curieuse Island:</strong> Freilebende Aldabra-Riesenschildkröten, flache Sandflächen zum Ankern (je nach Bedingungen), Naturpfade und Picknickplätze.</li>
              <li>• <strong>Îlot St. Pierre:</strong> Granitfelsen in der Lagune – einer der schönsten Schnorchel-Spots, bei ruhigem Wetter ein Muss.</li>
              <li>• <strong>La Digue:</strong> Mit dem Fahrrad zur Anse Source d'Argent; davor mehrere Ankerbuchten je nach Windfenster.</li>
              <li>• <strong>Coco, Félicité & Sisters:</strong> Turquoise satt, driftiges Schnorcheln über Riffen; je nach Schutzstatus Moorings nutzen und auf Sand ankern.</li>
              <li>• <strong>Cousin & Cousine:</strong> Naturreservate mit Anlandeauflagen – Schutzregeln prüfen; oft nur geführte Landgänge.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Regeln, Umwelt & Sicherheit</h3>
            <p className="text-gray-600 mb-6">
              Die Inseln rund um Praslin sind sensibel. In Marine Parks und Schutzgebieten gelten Mooringpflicht, Geschwindigkeitslimits und teilweise Ankerverbote außerhalb sandiger Zonen. Ankern Sie niemals auf Korallen oder im Seegras, respektieren Sie Badezonen und Dinghy-Korridore. Einige Privatinseln verlangen Genehmigungen bzw. Gebühren für Anlandungen. Nachtnavigation ist nicht empfehlenswert: unbeleuchtete Riffe, Fischer-Floats und wechselnde Strömungen können riskant sein. Halten Sie VHF 16 abhörbereit; eine lokale SIM erleichtert Wetter-Updates. In Passatphasen ggf. früh reffen, um Material und Crew zu schonen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fazit</h3>
            <p className="text-gray-600">
              Ein Yachtcharter ab Praslin bündelt die Stärken der Seychellen: kurze Schläge, sichere Ankerplätze, spektakuläre Granitkulissen und Begegnungen mit einer einzigartigen Unterwasserwelt. Mit klarem Blick auf Wetter, Schutzregeln und Proviantliste wird Ihr Törn vom ersten Ableger an zur entspannten Entdeckungsreise – und jede Bucht zum Postkartenmotiv.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-blue-50 border border-blue-200 text-blue-900 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Yachtcharter ab Praslin anfragen
            </h3>
            <p className="mb-6 text-blue-700">
              Entdecken Sie Inselhüpfen zwischen Granitkolossen, Lagunen und Riesenschildkröten ab Praslin.
            </p>
            <CharterRequestForm>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marinas & Häfen</h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {marinas.map((marina, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{marina.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Services:</div>
                    <div className="flex flex-wrap gap-2">
                      {marina.facilities.map((facility, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
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
    </div>;
};

export default Praslin;