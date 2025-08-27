import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
const Valencia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Ostspanische Küste"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "April-November"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Star,
    label: "Besonderheit",
    value: "Moderne Stadt & Tradition"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/boot-mieten-costa-smeralda.jpg')",
        filter: "brightness(0.7)"
      }} />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <Link to="/reviere/mittelmeer/spanien" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Zurück zu Spanien
            </Link>
          </div>
          <Badge variant="outline" className="mb-4 border-white/30 text-white">
            Mittelmeer
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Valencia</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Ostspaniens pulsierende Küste zwischen Tradition und Moderne
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere">Reviere</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere/mittelmeer">Mittelmeer</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere/mittelmeer/spanien">Spanien</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Valencia</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Quick Facts */}
        <div className="mb-12">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => {
            const IconComponent = fact.icon;
            return <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      {fact.label}
                    </p>
                    <p className="font-bold">{fact.value}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>

        {/* Kartenansicht */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Kartenansicht Revier Valencia</h2>
          <Card>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803434.5785240464!2d0.5037699!3d38.9876416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12172227f5a3b0dd%3A0x91d9d3e4ead65db!2sValencia%2C%20Spanien!5e1!3m2!1sde!2sde!4v1640995200000!5m2!1sde!2sde&disableDefaultUI=true&gestureHandling=cooperative&mapTypeControl=false&streetViewControl=false&fullscreenControl=false&zoomControl=false"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karte von Valencia"
              />
            </CardContent>
          </Card>
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Valencia – Mittelmeer-Cruising zwischen Kulturmetropole und Naturinseln</h2>
            <p className="text-xl text-muted-foreground">
              Spaniens pulsierende Ostküste zwischen Tradition und Moderne
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Valencia verbindet wie kaum ein anderes Revier City-Vibes mit unkompliziertem Insel- und Küstensegeln: breite, gut ausgestattete Marinas, lange Sandstrände, geschützte Lee-Buchten an Kaps und eine Gastronomie, die vom Markthallen-Tapas bis zur Paella am Strand reicht. Ein Yachtcharter ab Valencia öffnet dir die gesamte Costa de València – südlich über Cullera, Gandía und Dénia bis nach Jávea/Xàbia und Altea, nördlich hinauf zur Costa del Azahar mit Castellón, Oropesa, Alcossebre und Peñíscola. Und wer Lust auf Offshore-Feeling hat, plant die naturgeschützten Columbretes-Inseln als Highlight mit ein. Ob Segelyacht, Katamaran oder Motoryacht: Hier findest du kurze bis mittlere Etappen, verlässliche Sommerbrisen und eine Infrastruktur, die Charterern das Leben leicht macht.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Erreichbarkeit</h3>
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 text-black">
                <li><strong>Flug & Bahn:</strong> Der Flughafen Valencia VLC ist hervorragend angebunden; per Metro oder Taxi bist du schnell in den Häfen. Als Alternativen bieten sich Alicante ALC im Süden oder Castellón CDT im Norden an. Auch per Schnellzug aus Madrid/Barcelona bist du flott vor Ort.</li>
                <li><strong>City-Plus:</strong> Viele Crews kombinieren eine Nacht in der Stadt mit Altstadt, Turia-Park, City of Arts & Sciences mit dem Törnstart – praktisch, inspirierend und entspannt.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ausgangsbasen & Marinas</h3>
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <div className="space-y-4 text-black">
                <p><strong>La Marina de València</strong> – Großzügige Steganlagen, Muring/Lazy Lines, Strom/Wasser am Platz, zahlreiche Werften & Chandlers sowie Restaurants direkt am Kai. Die legendäre America's-Cup-Promenade macht den Start besonders angenehm.</p>
                <p><strong>Real Club Náutico de Valencia</strong> – Sportlich-traditionsreiche Alternative im Süden des Stadthafens mit kompletter Servicekette.</p>
                <p><strong>Gandía & Cullera</strong> – Ideale Zwischenbasen für den südlichen Sektor: kompakt, gut organisiert, kurze Wege in die Stadt und an breite Strände.</p>
                <p><strong>Dénia</strong> – Kulinarische Hochburg und Top-Drehscheibe für die nördliche Costa Blanca. Von hier ist es ein Katzensprung zu den Kap- und Felsbuchten bei Jávea/Xàbia wie Cabo de San Antonio und Cabo de la Nao.</p>
                <p><strong>Castellón / Oropesa / Alcossebre</strong> – Für die Costa del Azahar nach Norden: moderne Häfen, gute Logistik und der perfekte Absprung zu Peñíscola und – bei passendem Wetterfenster – zu den Columbretes.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Revierbesonderheiten & Regeln (wichtig!)</h3>
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 text-black">
                <li><strong>Meeresreservate & Bojen:</strong> Im Marine Reserve Columbretes sind Moorings vorgeschrieben bzw. stark empfohlen; Ankern ist in Kernzonen untersagt. Plätze sind limitiert – rechtzeitig planen.</li>
                <li><strong>Posidonia / Seegras:</strong> Wie überall im westlichen Mittelmeer gilt: nicht im Seegras ankern. Auf Sandgrund fallen lassen oder ausgewiesene Bojen nutzen.</li>
                <li><strong>Küstenverkehr:</strong> Rund um Valencia, Dénia, Alicante und Castellón ist mit lebhaftem Fähr-/Ausflugsverkehr zu rechnen; Quer- und Heckwelle einkalkulieren, insbesondere bei Sommerseegang aus Ost.</li>
                <li><strong>Fischerei & Aquakulturen:</strong> Vor einzelnen Küstenabschnitten liegen Fischfarmen/Bojenfelder – mit Abstand passieren.</li>
                <li><strong>Mooring-Stil:</strong> In Marinas dominiert Mediterranean Mooring mit Lazy Lines; an kommunalen Kais klassisch Buganker/Heckleinen.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele & Highlights</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Südlicher Sektor: Cullera – Gandía – Dénia – Jávea/Xàbia – Altea</h5>
                <p className="text-sm text-gray-600">Die Sandbuchten südlich von Valencia eignen sich perfekt für den ersten Badestopp. Ab Gandía wird die Küste abwechslungsreicher; bei Dénia ragen die Felsmassive von Cabo de San Antonio und Cabo de la Nao ins Meer. Dazwischen liegen kleine Calas mit klarem Wasser – ideal zum Ankern, Schnorcheln, SUP. Jávea/Xàbia punktet mit Buchten wie Granadella und Portitxol, Altea mit stimmungsvoller Altstadt über der Bucht.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Nördlicher Sektor: Sagunto – Castellón – Oropesa – Alcossebre – Peñíscola</h5>
                <p className="text-sm text-gray-600">Nördlich von Valencia beginnt die Costa del Azahar – weniger überlaufen, mit langen Stränden, Kaps und Felsabschnitten. Peñíscola sticht heraus: die Burgstadt auf dem Felsen ist vom Wasser aus spektakulär – ein perfekter Landgang zwischen Hafenmauer und Altstadtgassen.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-400">
              <h4 className="font-semibold mb-3 text-black">Offshore-Highlight: Columbretes-Inseln</h4>
              <p className="text-black">Der vulkanische Mini-Archipel liegt draußen im Tyrrheno-/Balearenbecken der spanischen Ostküste: klares Wasser, reiches Meeresleben, limitierte Moorings – ein Traum für Naturfreunde. Unbedingt Wetterfenster prüfen; bei E-/NE-Lagen kann rasch Schwell stehen.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnvorschlag – 7 Tage ab València</h3>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1 – Valencia → Cullera</h5>
                <p className="text-sm text-muted-foreground">Ankommen, Check-in, Sicherheitsbriefing. Später Start? Kurzer Nachmittags-Hüpfer in eine Sandbucht bei Cullera, abends Strandpromenade.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2 – Cullera → Gandía</h5>
                <p className="text-sm text-muted-foreground">Gemütlicher Küstentag mit Bade- und SUP-Stopps. In Gandía am Stadtkai oder in der Marina – Fischlokale und lange Strände vor der Tür.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3 – Gandía → Dénia</h5>
                <p className="text-sm text-muted-foreground">Kurs auf Dénia. Nachmittags Zeit für die Altstadt oder die Strandbars – der kulinarische Ruf der Stadt ist ausgezeichnet.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4 – Dénia → Jávea/Xàbia (Kaps & Calas)</h5>
                <p className="text-sm text-muted-foreground">Rund Cabo de San Antonio in die Felsbuchten. Ankern in einer Cala mit Sandgrund; Landleinen optional für ruhige Nacht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5 – Jávea/Xàbia → Altea oder Moraira/Calpe-Variante</h5>
                <p className="text-sm text-muted-foreground">Kurze Etappe mit Badestopp; abends Bummel durch Altea-Altstadt. Alternative je nach Lust: Moraira/Calpe mit markantem Peñón de Ifach.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6 – Altea → Dénia</h5>
                <p className="text-sm text-muted-foreground">Zurück in den Inselschutz, Vorräte auffrischen, noch ein Spätnachmittags-Badestopp an der Küste.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7 – Dénia → Valencia</h5>
                <p className="text-sm text-muted-foreground">Rückkurs entlang der Strände. Rechtzeitig zum Fuel-Dock und Check-out.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Varianten</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Azahar-Variante:</strong> Nördlicher Bogen via Castellón – Oropesa – Peñíscola mit mehr Stadt-/Kulturmix und ruhigen Reeden.</li>
                <li><strong>Columbretes-Window:</strong> Bei stabilem Fenster Offshore-Abstecher zu den Columbretes wobei Moorings/Regeln beachtet werden müssen – Bonus für naturverliebte Crews.</li>
                <li><strong>Katamaran-Fokus:</strong> Mehr Cala-Nächte bei Jávea/Altea; flache Reeden spielen ihre Stärken aus.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen</h3>
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 text-black">
                <li><strong>Sommerbrise „Embat/Garbí":</strong> Tagsüber setzt die Seewind-Thermik ein – ideal fürs Cruising mit Badepausen. Morgens/abends häufig ruhig.</li>
                <li><strong>Levante:</strong> Östliche Lagen bringen Schwell an offene Strände; Häfen und Kaps mit Lee einplanen.</li>
                <li><strong>Poniente:</strong> Westliche Binnenwinde sorgen nahe der Küste für flaches Wasser und schnelle Etappen – in der Hitze sehr trocken und warm.</li>
                <li><strong>Gewitterfenster:</strong> Spätsommer möglich; Forecast/Nowcast im Blick.</li>
                <li><strong>Seegang:</strong> Im Küstenschutz moderat, an exponierten Kaps und über Grundsee bei Ostlagen kabbelig – Reffbereitschaft einplanen.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <p className="text-black">
                Mai–Juni und September–Oktober bieten warme Temperaturen, planbare Brisen und entspanntere Häfen. Juli/August ist Hauptsaison: früh einlaufen, ggf. Marinas/Bojen reservieren und Wasser/Diesel nicht „auf Kante" planen. Wer City-Programm mag, baut eine Vor-/Nachnacht in Valencia ein – Logistik und Erlebnis in einem.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Geeignet für</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Einsteiger & Familien</h5>
                <p className="text-sm text-gray-600">Viele Sand-Ankerplätze, kurze Etappen, dichte Versorgung sorgen für maximalen Bade- und Genussfaktor.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Genusssegler</h5>
                <p className="text-sm text-gray-600">Küsten- und Cala-Hopping mit Tapas-Stopps, Altstadtbummeln in Valencia, Dénia, Peñíscola, abends ruhige Reeden.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Ambitionierte Crews</h5>
                <p className="text-sm text-gray-600">Längere Schläge zu Kaps und bei gutem Fenster Offshore zu den Columbretes sowie Trimm- und Manövertraining in der Thermik.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Katamarane</h5>
                <p className="text-sm text-gray-600">Profitieren von flachen Buchten bei Jávea/Altea und langen Strandreeden wobei Schwojkreis beachtet und früh an Moorings angelegt werden sollte.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h5 className="font-semibold mb-2">Motoryachten/Daycruiser</h5>
                <p className="text-sm text-gray-600">Viele Day-Use-Spots, kurze Wege und verlässliche Service-Dichte machen sie ideal für Foto-, Lunch- und Sundowner-Stopps.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Sicherheit & Seemannschaft</h3>
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <p className="text-black">
                Reservate/Regeln vor Abfahrt prüfen vor allem Columbretes, auf Sand ankern und Posidonia schützen, Kette großzügig stecken und Halt prüfen, Fischfarmen/Fährlinien mit Abstand queren, Reffpunkte markieren und Wetterfenster täglich checken. Komfort schlägt Knoten – besonders mit Familie an Bord.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit</h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-400">
              <p className="text-black">
                Yachtcharter Valencia ist die smarte Mischung aus Stadt & See: Du startest mit bester Infrastruktur, segelst entlang abwechslungsreicher Küsten zu Calas, Kaps und historischen Küstenstädten – und setzt bei Laune über zu einem der spannendsten Naturinseln der spanischen Ostküste. Wer mediterranes Cruising mit gut planbaren Winden, kulinarischen Höhepunkten und flexiblen Routen sucht, findet hier sein Revier – auf Monohull, Katamaran oder Motoryacht.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-3">Bereit für Valencia & die Costa del Azahar?</h4>
              <p className="text-lg mb-4">
                Nenne uns Crewgröße, Reisezeit und Yachtklasse – wir bauen dir eine Route mit Lee-Optionen, reservieren Marinas/Bojen und organisieren den Proviantservice.
              </p>
              <p className="font-semibold text-primary">
                Jetzt unverbindlich anfragen – und Kurs auf Valencia setzen!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Jetzt Charter-Anfrage stellen</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entdecken Sie Valencia mit einem Charterboot. Unser Team hilft Ihnen bei der Planung Ihres perfekten Segeltörns.
          </p>
          <CharterRequestForm>
            <Button size="lg" className="text-lg px-8 py-3">
              Unverbindliche Anfrage stellen
            </Button>
          </CharterRequestForm>
        </div>
      </div>
    </div>;
};
export default Valencia;