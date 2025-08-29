import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Anchor,
  Star,
  ArrowLeft
} from "lucide-react";
import { useEffect, useState } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Amalfikuste = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showCharterForm, setShowCharterForm] = useState(false);

  const quickFacts = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Lage",
      value: "Westliches Mittelmeer"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Beste Zeit",
      value: "April - Oktober"
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Geeignet für",
      value: "Alle Erfahrungsstufen"
    },
    {
      icon: <Anchor className="h-5 w-5" />,
      label: "Besonderheit",
      value: "Dramatische Küstenlandschaft"
    }
  ];

  const cities = [
    "Amalfi",
    "Positano", 
    "Salerno",
    "Neapel",
    "Sorrento",
    "Agropoli",
    "Cetara",
    "Furore"
  ];

  const highlights = [
    "Inhalte werden später ergänzt",
    "Texte folgen...",
    "Weitere Highlights kommen",
    "Details werden hinzugefügt"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/77329fbc-9553-49e6-9548-5fdd997d4376.png')`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <div className="mb-4">
            <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm font-medium">
              Italien
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Amalfiküste
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4">
            Spektakuläre Steilküste am Golf von Salerno
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <span>Start</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Reviere</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Mittelmeer</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Italien</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Amalfiküste</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {fact.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{fact.label}</h3>
                <p className="text-muted-foreground">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Karte der Amalfiküste</h2>
          <TerritoryMap
            region="Amalfiküste"
            center={{ lat: 40.633, lng: 14.60 }}
            zoom={12}
            maptype="satellite"
            className="shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Yachtcharter Amalfiküste – Ihr Törn zwischen Sorrent, Capri & Salerno</h2>
              
              <div className="prose max-w-none space-y-8">
                <p className="text-lg leading-relaxed">
                  Die Amalfiküste ist kein Ort, sondern Ihr Revier – ein Seeraum für maßgeschneiderte Chartertörns und sportliches Segeln im Tyrrhenischen Meer. Zwischen Sorrent und Salerno erwarten Sie UNESCO-geschützte Küstenorte, mediterranes Lebensgefühl, markante Steilküsten und kurze, abwechslungsreiche Schläge zu den Inseln Capri, Ischia und Procida. Als erfahrene Charteragentur begleiten wir Sie von der Routenplanung über die Schiffsübernahme bis zur letzten Festmacherleine – ob Bareboat auf Segelyacht oder Katamaran, mit oder ohne Skipper.
                </p>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Erreichbarkeit</h3>
                  <p className="text-lg leading-relaxed">
                    Ihre Anreise ist komfortabel: Mit dem PKW reisen Sie aus Mitteleuropa über die Autostrade Richtung Neapel/Salerno (A1/A3). Per Flug gelangen Sie über internationale Direktverbindungen nach Neapel (NAP); die Transferzeiten in die Marinas von Sorrent, Castellammare di Stabia und Salerno/Marina d'Arechi sind kurz – ideal für eine entspannte Übernahme am Samstag und den ersten Schlag noch am selben Nachmittag.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Besonderheiten des Reviers</h3>
                  <p className="text-lg leading-relaxed">
                    Im Sommer prägen Thermik/Seebrise und leichte bis mäßige Winde die Tagesplanung; in Übergangszeiten treten Mistral, Libeccio oder Scirocco auf. Die Distanzen sind kurz, viele Ankerbuchten liegen küstennah und bieten tagsüber guten Schutz. Herausforderungen sind Schwell (v. a. an offenen Südbuchten), dichte Verkehrsrouten in der Hochsaison und böige local gusts an exponierten Kaps. Mit sauberem Reviermanagement – frühzeitiger Buchung von Liegeplätzen, Plan B für die Nacht und Respekt vor Schutzzonen – segeln Sie entspannt und sicher.
                  </p>
                </div>

                <div className="border border-gray-300 p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">Vorschriften & Regeln</h3>
                  <p className="text-lg leading-relaxed">
                    Die Amalfiküste umfasst sensible Schutzräume, unter anderem die Area Marina Protetta Punta Campanella. Diese ist in Zonen A/B/C gegliedert; in Zone A ist Einfahrt und Ankern untersagt. In Zonen B und C gilt: nicht in Posidonia-Seegrasfeldern ankern, Bojenfelder respektieren, Mindestabstände zu Stränden und Steilküsten einhalten sowie lokale Ordinanze der Küstenwache beachten. Regeln können saisonal angepasst werden – prüfen Sie vor Ort stets aktuelle Aushänge, Bojenpläne und Hafenbestimmungen.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Für wen geeignet & Schwierigkeitsgrad</h3>
                  <p className="text-lg leading-relaxed">
                    Die Amalfiküste ist ideal für Einsteiger und Familien, die kurze Schläge, Buchtenbaden und Landgänge lieben, ebenso für Genießer mit Fokus auf Kulinarik & Kultur. Ambitionierte Skipper finden in der Vor- und Nachsaison sportlichere Winde und kombinieren die Küste mit den Inseln. Schwierigkeit: leicht bis moderat in den Sommermonaten; je nach Wetterfenster und Revierkenntnis moderat in der Nebensaison.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Marinas & Infrastruktur</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Zwischen Sorrent, Amalfi und Salerno finden Sie eine gute Dichte an Häfen und Servicestützpunkten:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li><strong>Marina d'Arechi (Salerno) und Porto Turistico di Salerno:</strong> moderne Yachthäfen mit Technik, Diesel, Wasser/Strom, Sanitär und Charter-Infrastruktur; hervorragende Proviantierung in großen Supermärkten in Salerno.</li>
                    <li><strong>Porto di Amalfi & Marina di Cetara:</strong> geschützte Liegeplätze in Küstennähe, ideal für Landgänge am Abend; frühzeitig reservieren.</li>
                    <li><strong>Marina di Stabia (Castellammare di Stabia) & Porto di Sorrento:</strong> perfekte Startpunkte für Schläge nach Capri/Ischia/Procida; gute Anbindung an Neapel und Einkaufsmöglichkeiten in Sorrent und Castellammare.</li>
                    <li><strong>Capri – Marina Grande:</strong> begrenzte Transitliegeplätze, früh buchen; Alternativen sind Bojenfelder und geeignete Ankerplätze bei ruhigem Wetter.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Routenvorschlag</h3>
                  <h4 className="text-xl font-semibold mb-4">1 Woche „Klassik Tyrrhenisches Meer" – entspanntes Inselhüpfen mit kurzen Etappen</h4>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-bold">Tag 1: Salerno → Amalfi (ca. 12 sm, 2–3 Std.)</h5>
                      <p>Check-in in Salerno/Marina d'Arechi, Proviantierung, Sicherheitsbriefing. Früher Nachmittag: Ablegen Richtung West, entlang der Steilküste nach Amalfi. Liegeplatz im Hafen oder, bei ruhigem Wetter, an ausgewiesenem Bojenfeld vor der Küste. Landgang: Dom von Amalfi, Pastifici, Gelaterie. Tipp: Brise am Nachmittag nutzen, abends nimmt der Schiffsverkehr meist ab.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-bold">Tag 2: Amalfi → Capri (Marina Grande) oder Ankerbucht Marina Piccola (18–20 sm, 3–4 Std.)</h5>
                      <p>Morgens ablegen, Fotostopp vor Positano. Bei geeignetem Wetter Badepause an den Isole Li Galli (Schutzzonen beachten). Weiter nach Capri. Option 1: Marina Grande – knappe Transitplätze, früh reservieren. Option 2: Marina Piccola – beliebte Ankerbucht unterhalb der Faraglioni, bei Südschwell ausweichen. An Land: Piazzetta, Monte Solaro (Sessellift), Grotta Azzurra per Ausflugsboot.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-bold">Tag 3: Capri → Ischia (18–20 sm, 3–4 Std.)</h5>
                      <p>Vormittags ruhiger, am Nachmittag oft Thermik/Seebrise aus W–NW. Ziel je nach Wind und Vorlieben: Ischia Porto (urban, zentrale Lage), Casamicciola Terme (gute Technik), Forio (Sonnenuntergänge, Restaurants). Alternativ Ankerplatz Sant'Angelo (bei passendem Wetter). Wellness-Stopp in den Thermalparks oder Wanderung am Monte Epomeo.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-bold">Tag 4: Ischia → Procida (4–5 sm, 1–1,5 Std.)</h5>
                      <p>Kurzer Hüpfer. Marina di Procida als sicherer Liegeplatz, pittoreske Kulisse in Corricella (teils Bojen, restriktives Ankern möglich). Ideal für einen entspannten Layover-Tag: Fischküche, Spaziergänge durch bunte Gassen, Vorräte ergänzen.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-bold">Tag 5: Procida → Sorrent (18–20 sm, 3–4 Std.)</h5>
                      <p>Durch den Golf von Neapel Richtung Sorrent. Bei spürbarem Verkehr AIS und Ausguck im Blick behalten. Porto di Sorrento oder Marina di Stabia (Castellammare) als Alternative mit exzellenter Infrastruktur. Landgang: Altstadt Sorrent, Zitronenhaine, Limoncello-Manufakturen.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-bold">Tag 6: Sorrent → Positano (über Nerano/Punta Campanella) (17 sm, 3–4 Std.)</h5>
                      <p>Küstennahe Route rund Punta Campanella – Schutzgebiet beachten. Bade- oder Lunchstopp in der Ankerbucht von Nerano/Marina del Cantone (bei Schwell auf Alternativen ausweichen). Weiter nach Positano: Festmachen an genehmigten Bojen; Dinghy-Service an Land. Sunset-Aperitivo, Boutique-Bummel.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-bold">Tag 7: Positano → Salerno (18–20 sm, 3–4 Std.)</h5>
                      <p>Rücketappe entlang der Panoramaküste. Früh ablegen, um vormittägliche Ruhe zu nutzen; am Nachmittag kann lokaler Schwell zunehmen. Tanken, Auscheck in Marina d'Arechi. Abends Zeitpuffer für Technikübergabe einplanen.</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h5 className="font-bold mb-2">Wetter & Taktik:</h5>
                    <p>Sommerlich dominieren leichte bis mäßige Seewinde (Thermik), die am Nachmittag auffrischen. Starten Sie längere Schläge am späten Vormittag, planen Sie Alternativziele bei Südschwell (z. B. Nordseite Capri/Ischia oder geschützte Häfen) und vermeiden Sie exponierte Kaps bei auflandigen Böen. In der Hochsaison rechtzeitig Liegeplätze/Bojen reservieren.</p>
                  </div>

                  <div className="mt-6">
                    <h5 className="font-bold mb-2">Alternative Kurzvariante (3–4 Tage):</h5>
                    <p>Salerno/Marina d'Arechi → Amalfi → Capri (Hafen oder Marina Piccola) → Sorrent/Marina di Stabia → Salerno. Kurze Distanzen, ideale Einsteigerroute mit hohem Erlebnisfaktor.</p>
                  </div>

                  <div className="mt-6">
                    <h5 className="font-bold mb-2">Verlängerung Richtung Cilento (10–14 Tage):</h5>
                    <p>Ab Salerno südwärts nach Agropoli und Acciaroli (landschaflich ruhigere Küste, gute Küche), Rückweg via Amalfi/Positano. Kombination mit Inseln (Capri–Ischia–Procida) für maximale Abwechslung.</p>
                  </div>
                </div>

                <div className="border border-gray-300 p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">Nautische Hinweise & Ankerplätze, eine Auswahl:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li><strong>Marina Piccola (Capri):</strong> tagsüber spektakulär, nachts oft Schwell – Wetterfenster prüfen, Abstand zu Badezonen halten.</li>
                    <li><strong>Li Galli:</strong> je nach Schutzstatus Bojen nutzen, Posidonia meiden.</li>
                    <li><strong>Baia di Ieranto / Punta Campanella:</strong> stark reguliert, Einfahrts- und Ankerverbote in Teilbereichen – Beschilderung beachten.</li>
                    <li><strong>Positano:</strong> organisierte Bojenfelder mit Tender-Service, Ankern außerhalb markierter Zonen vermeiden.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Service & Proviantierung unterwegs:</h3>
                  <p className="text-lg leading-relaxed">
                    Großeinkauf in Salerno oder Sorrent/Castellammare; Frischware in Amalfi, Positano und auf Procida. Tanken in Salerno, Ischia und teils Sorrent/Marina di Stabia. Wasser/Strom in allen genannten Häfen üblich; früh anfragen in der Hochsaison.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Jetzt unverbindliches Angebot anfordern:</h3>
                  <p className="text-lg leading-relaxed text-center">
                    Teilen Sie uns Crewgröße, Reisedaten und Wunschyacht mit – wir prüfen Live-Verfügbarkeiten, beraten persönlich zu Route, Liegeplätzen und Proviantierung und senden Ihnen umgehend Ihr maßgeschneidertes Angebot.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Bereit für Ihr Amalfiküste-Abenteuer?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entdecken Sie die dramatische Schönheit der italienischen Küste
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => setShowCharterForm(true)}
              >
                Charter anfragen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charter Form Modal */}
      <CharterRequestForm 
        isOpen={showCharterForm}
        onOpenChange={setShowCharterForm}
      />
    </div>
  );
};

export default Amalfikuste;