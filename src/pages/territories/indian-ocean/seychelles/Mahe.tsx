import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import anseSourceArgent from "@/assets/anse-source-argent.png";

const Mahe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [{
    icon: <MapPin className="w-5 h-5" />,
    label: "Lage",
    value: "Hauptinsel der Seychellen"
  }, {
    icon: <Calendar className="w-5 h-5" />,
    label: "Beste Reisezeit",
    value: "April - Mai, Oktober - November"
  }, {
    icon: <Waves className="w-5 h-5" />,
    label: "Segelwetter",
    value: "SE Passat 15-25 kn"
  }, {
    icon: <Users className="w-5 h-5" />,
    label: "Chartertyp",
    value: "Katamaran bevorzugt"
  }];

  const marinas = [{
    name: "Eden Bleu Marina",
    description: "Moderne Marina nahe dem Flughafen",
    facilities: ["Premium Service", "Flughafen nahe", "Shopping", "Restaurants"]
  }, {
    name: "Port Victoria",
    description: "Haupthafen von Victoria",
    facilities: ["Stadtzentrum", "Provisioning", "Lokale Kultur", "Märkte"]
  }];

  const highlights = ["115 Granitinseln erkunden", "Unique Coco de Mer Palmen", "Weltklasse Strände", "Riesenschildkröten auf Aldabra", "Kreolische Kultur", "Vallée de Mai UNESCO Park", "Pristine Korallenriffe", "Luxuriöse Entspannung"];

  const attractions = [{
    name: "Praslin & Vallée de Mai",
    description: "UNESCO Weltnaturerbe mit Coco de Mer",
    type: "Natur"
  }, {
    name: "La Digue",
    description: "Traumstrände und Granitfelsen",
    type: "Strand"
  }, {
    name: "Aldabra Atoll",
    description: "Riesenschildkröten Heiligtum",
    type: "Wildlife"
  }];

  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/ea72cf43-32c6-428b-aada-6f6b326b8052.png" alt="Mahé Seychellen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">💎 Mahé</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mahé</h1>
            <p className="text-xl max-w-2xl">
              Hauptinsel der Seychellen
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mahé, Seychellen</h2>
          <div className="max-w-4xl mx-auto">
            <TerritoryMap
              region="Mahé, Seychellen"
              center={{ lat: -4.6796, lng: 55.4918 }}
              zoom={11}
              maptype="satellite"
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-blue-600" />
              Yachtcharter ab Mahé, Seychellen – Granitinseln, Lagunen & Passatbrise
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Mahé ist die Hauptinsel der Seychellen und Ausgangspunkt für Charter zwischen den 115 Granitinseln des Archipels. Mit dem internationalen Flughafen, der Hauptstadt Victoria und modernen Marinas bietet Mahé die beste Infrastruktur für Seychellen-Charter.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Von hier aus erreichen Sie in kurzen bis mittleren Etappen die berühmten Granitinseln Praslin und La Digue, Nationalparks mit Korallenriffen und Tauchspots von Weltrang sowie stille Ankerbuchten, in denen Sie bei Sonnenuntergang nur das Plätschern am Rumpf hören. Ob Bareboat auf Katamaran oder Segelyacht mit Skipper: Das Revier belohnt gute Planung mit maximaler Urlaubsqualität.
            </p>
            
            {/* Anse Source d'Argent Image */}
            <div className="mb-8">
              <img 
                src={anseSourceArgent} 
                alt="Anse Source d'Argent auf La Digue mit Granitfelsen"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <p className="text-center text-gray-500 italic text-sm">
                An der Anse Source d'Argent auf La Digue (Seychellen) stehen Sie zwischen haushohen Granitfelsen auf feinem, hellen Sand, blicken in eine seichte türkisfarbene Lagune – und fühlen sofort Ruhe, Wärme und gelassenes Inseltempo.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Anreise & Transfer</h3>
            <p className="text-gray-600 mb-6">
              Sie fliegen nach Seychelles International (SEZ) auf Mahé, meist via große Drehkreuze. Nach der Landung sind es je nach Basis nur etwa 15–30 Minuten per Taxi oder Shuttle bis zur Marina – typischerweise Eden Island Marina oder Victoria. Wer weiter nach Praslin oder La Digue will, nutzt den Inlandsflug Mahé–Praslin oder die Schnellfähre. Praktisch: Viele Vercharterer bieten Early Check-in/Proviantservice, sodass Sie am Ankunftstag noch einen kurzen Eingewöhnungsschlag in den Sainte-Anne Marine Park schaffen. Prüfen Sie vorab Einreise- und Gesundheitsbestimmungen sowie Versicherungsschutz.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Reviercharakter & Wind</h3>
            <p className="text-gray-600 mb-6">
              Ganzjährig warm, in zwei monsungeprägten Jahreszeiten: Nordwest-Monsun (Nov–Apr) bringt meist leichtere Winde und glattere See, gelegentlich Schauer; Südost-Passat (Mai–Okt) weht frischer und trockener, mit mehr Wind und teils Schwell an exponierten SE-Küsten. Besonders ruhig und klar sind oft die Übergangsmonate April/Mai sowie Oktober/November – beliebt bei Seglern, Schnorchlern und Fotografen. Navigiert wird überwiegend line of sight, dennoch gilt: Ansteuerungen im Tageslicht, Riffe/Flats beachten, nicht „blind" dem Plotter folgen, Ausguck führen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Proviantierung & Technik</h3>
            <p className="text-gray-600 mb-6">
              Mahé bietet die beste Versorgungsinfrastruktur: Supermärkte und Feinkostläden in Victoria/Eden Island, frischer Fisch, Obst und Gemüse auf dem Markt, Eis, Trinkwasser, Gas und Treibstoff in der Marina. Viele Anbieter liefern vorbestellte Waren direkt an Bord; Alkohol, Spezialitäten und Frischware besorgen Sie am besten schon am ersten Tag. Trinkwasser ist verfügbar, dennoch empfiehlt sich Vorratsdisziplin (insbesondere Eis/Frischware). Mülltrennung, Entsorgung in der Marina; Grauwasser/Schwarzwasser keinesfalls in Buchten oder Parks ablassen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Route – sanftes Inselhüpfen (Beispiel, 7–10 Tage)</h3>
            <p className="text-gray-600 mb-6">
              Start Mahé/Eden Island → Sainte-Anne zum Eingewöhnen → langer Schlag nach Praslin/Anse Lazio → Curieuse (Tortoises) & St. Pierre (Schnorcheln) → La Digue (Fahrradtag) → je nach Wetter Coco/Sisters oder Félicité → zurück via Baie Chevalier oder Cousin/Cousine (Schutzauflagen beachten) → Mahé. Variieren Sie die Reihenfolge mit Wind/Schwell; bei kräftigem Südost besser leeseitige Buchten wählen und exponierte Kaps am Vormittag passieren.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tipps für einen entspannten Törn</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Früh reservieren: Auch in Paradiesen sind Moorings/Charteryachten zu Saisonspitzen gefragt.</li>
              <li>• Gewicht & Trim: Katamarane liegen ruhiger in der Dünung – ideal für Familien; Monohulls segeln knackiger am Wind.</li>
              <li>• Sonnenschutz & Riffschutz: Langer UV-Schutz, riff-freundliche Sonnencreme, Rutschschutz an Deck.</li>
              <li>• Cash & Gebühren: Kleinere Bars/Insellandgänge rechnen gern bar ab; Park- und Bojengebühren passend bereithalten.</li>
              <li>• Plan B: Für jede Nacht einen Ausweich-Ankerplatz notieren – Winddreher und Schwellwechsel sind in den Tropen normal.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fazit</h3>
            <p className="text-gray-600">
              Ein Yachtcharter ab Mahé vereint das Beste der Seychellen: kurze bis mittlere Schläge, sichere Ankerbuchten, spektakuläre Granitkulissen und warmes, klares Wasser – ein Revier, das Einsteiger begeistert und erfahrene Skipper mit feinem Inselhopping belohnt. Wenn Sie möchten, erstellen wir Ihnen gern einen maßgeschneiderten Törnplan mit aktuellen Parkregeln, Bojenoptionen und Proviantliste – damit Sie vom ersten Meter an in den Seychellenmodus schalten.
            </p>
          </div>
        </div>

        {/* Anse Source d'Argent Image with Caption */}
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="/lovable-uploads/90692d00-febc-4526-bda2-5bd3e808161c.png" 
            alt="Anse Source d'Argent auf La Digue mit charakteristischen Granitfelsen"
            className="w-full h-auto object-cover rounded-lg shadow-lg mb-4"
          />
          <p className="text-gray-700 text-center italic leading-relaxed">
            An der Anse Source d&apos;Argent auf La Digue (Seychellen) stehen Sie zwischen haushohen Granitfelsen auf feinem, hellen Sand, blicken in eine seichte türkisfarbene Lagune – und fühlen sofort Ruhe, Wärme und gelassenes Inseltempo.
          </p>
        </div>

        {/* Must-see Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-gray-600" />
              Must-see: Was Sie unbedingt anschauen sollten
            </h3>
            <ul className="space-y-3 text-black">
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">•</span>
                <span><strong>Sainte-Anne Marine National Park (vor Mahé):</strong> Perfekt für den ersten Badestopp – Ankerplatz auf Sand oder Park-Moorings, Schnorcheln zwischen farbigen Riffen.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">•</span>
                <span><strong>Praslin:</strong> Anse Lazio und Anse Georgette zählen zu den schönsten Stränden der Welt; an Land lockt das Vallée de Mai (Coco de Mer).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">•</span>
                <span><strong>La Digue:</strong> Mit dem Fahrrad zur Anse Source d'Argent zwischen Granitblöcken; vor der Küste ruhige Ankerbuchten je nach Wetterfenster.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">•</span>
                <span><strong>Curieuse & St. Pierre:</strong> Riesenschildkröten auf Curieuse, Bilderbuch-Schnorchelplatz vor Îlot St. Pierre.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">•</span>
                <span><strong>Coco, Félicité, Sister Islands:</strong> Kristallklares Wasser, Riffe zum Drift-Schnorcheln; je nach Schutzstatus Moorings nutzen und auf Sand ankern.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">•</span>
                <span><strong>Mahé by land:</strong> Markt in Victoria, Botanischer Garten, Strände im Südwesten (z. B. Anse Intendance) – ideal als Start oder Abschluss.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regeln, Umwelt & Sicherheit */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Anchor className="w-6 h-6 text-blue-600" />
              Regeln, Umwelt & Sicherheit
            </h3>
            <div className="text-gray-600 space-y-4">
              <p>
                Die Seychellen schützen ihre Riffe konsequent. In Marine Parks gelten Bojenpflicht oder Ankerverbote außerhalb sandiger Zonen; Ankern nie auf Korallen oder Seegras. Gebühren und Aufenthaltslimits sind ausgeschildert; einige Privatinseln verlangen Genehmigungen. Fahren Sie langsam in sensiblen Bereichen, respektieren Sie Badezonen und Dinghy-Korridore.
              </p>
              <p>
                Nachtnavigation ist wegen unbeleuchteter Riffe/Fischereimarkierungen nicht zu empfehlen. Halten Sie VHF 16 abhörbereit; für Wetter/Gezeiten lohnt sich eine lokale SIM. In der Passatzeit ausreichend Kette/Schwojkreis einplanen, bei Böen Ankeralarm setzen.
              </p>
              <p>
                Schildkröten, Rochen und – je nach Saison – Walhaie sind keine Seltenheit: Abstand halten, nicht anfüttern oder berühren.
              </p>
            </div>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marinas & Häfen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Eden Bleu Marina with image */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Anchor className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Eden Bleu Marina</h3>
                </div>
                <p className="text-gray-600 mb-4">Moderne Marina nahe dem Flughafen</p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm font-medium text-gray-700">Services:</div>
                  <div className="flex flex-wrap gap-2">
                    {["Premium Service", "Flughafen nahe", "Shopping", "Restaurants"].map((facility, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {facility}
                      </Badge>
                    ))}
                  </div>
                </div>
                <img 
                  src="/lovable-uploads/5a74279f-c55e-4e22-9e59-9dba920407ed.png" 
                  alt="Eden Island Marina Luftaufnahme mit charakteristischen roten Dächern" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
            
            {/* Port Victoria */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Anchor className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Port Victoria</h3>
                </div>
                <p className="text-gray-600 mb-4">Haupthafen von Victoria</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">Services:</div>
                  <div className="flex flex-wrap gap-2">
                    {["Stadtzentrum", "Provisioning", "Lokale Kultur", "Märkte"].map((facility, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {facility}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter ab Mahé
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie 115 Granitinseln mit den schönsten Stränden der Welt, 
              UNESCO Naturparks und einer einzigartigen kreolischen Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Mahé Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};

export default Mahe;