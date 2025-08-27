import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";

const GoecekFethiye = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: MapPin,
      label: "Lage",
      value: "Türkische Ägäis, Fethiye-Golf"
    },
    {
      icon: Calendar,
      label: "Beste Zeit",
      value: "Mai-Oktober"
    },
    {
      icon: Users,
      label: "Geeignet für",
      value: "Alle Erfahrungsstufen"
    },
    {
      icon: Star,
      label: "Besonderheit",
      value: "Zwölf Inseln & Butterfly Valley"
    }
  ];

  const highlights = [
    "Göcek - exklusive Marina zwischen bewaldeten Inseln",
    "Fethiye - lebendige Stadt mit antiken Felsengräbern", 
    "Butterfly Valley - verstecktes Paradies nur per Boot erreichbar",
    "Ölüdeniz - türkisblaue Lagune und Paragliding-Hotspot",
    "Zwölf Inseln von Göcek mit geschützten Ankerbuchten",
    "Saklıkent-Schlucht für Abenteuer an Land",
    "Authentische Fischerdörfer wie Kalkan und Kas",
    "Lykische Ruinenstätten direkt am Wasser"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/lovable-uploads/4a973c7a-e4d0-4205-97dd-43c3454a16c6.png')",
            filter: "brightness(0.7)"
          }} 
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <Link 
              to="/reviere/mittelmeer/tuerkei" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Türkei
            </Link>
          </div>
          <Badge variant="outline" className="mb-4 border-white/30 text-white">
            Türkische Ägäis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Göcek & Fethiye</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Traumhafte Buchten zwischen bewaldeten Inseln und antiker Lykischer Küste
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
              <BreadcrumbLink href="/reviere/mittelmeer/tuerkei">Türkei</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Göcek & Fethiye</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Quick Facts */}
        <div className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => {
              const IconComponent = fact.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      {fact.label}
                    </p>
                    <p className="font-bold">{fact.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Interactive Map */}
        <div className="max-w-none mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Göcek & der Golf von Fethiye</h2>
            <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d29.0560841!3d36.7164744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e1!3m2!1sde!2sde!4v1625097600000!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                className="w-full h-full" 
                title="Karte von Göcek & der Golf von Fethiye"
                onError={(e) => console.log('Map loading error:', e)}
              />
            </div>
          </div>
        </div>

        {/* Comprehensive Description */}
        <div className="max-w-none mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6">Yachtcharter Göcek & Fethiye – Ihr Premium-Törn an der Lykischen Küste</h2>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Einleitung</h3>
              <p className="text-lg leading-relaxed mb-6">
                Zwischen piniengrünen Hängen, antiken Felsgräbern und türkisfarbenen Buchten spannt sich eines der komfortabelsten Segelreviere des Mittelmeers auf: Göcek & Fethiye. Diese beiden Orte sind weit mehr als bloße Häfen – sie bilden die Ausgangsregion für Yachtcharter an der Türkischen Riviera, die den gesamten Fethiye-Golf und die Skopea Limanı (Göcek Bays) umfasst. Wer hier seinen Katamaran mietet, eine Segelyacht übernimmt oder eine Gulet-Charter wählt, findet eine maritime Bühne, die wie für entspanntes Cruising geschaffen ist: kurze Distanzen, thermische Nachmittagswinde, ein engmaschiges Netz aus Ankerplätzen, Bojenfeldern und Restaurantstegen – flankiert von hervorragend organisierten Marinas.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Die Topografie schützt vor Dünung, die Brise baut sich zuverlässig auf, und die Distanzen zwischen den Buchten sind so kurz, dass der Skipper jeden Tag flexibel planen kann. Ob Badestopp in kristallklarem Wasser, Landgang zu lykischen Stätten oder Dinner am Kai – Yachtcharter Göcek steht für maximalen Urlaubsertrag pro Segelmeile. Für Segeln Türkei, Bareboat Türkei oder Skipper Göcek ist dies das Revier, in dem selbst Einsteiger souverän wirken – und erfahrene Skipper das Feinhandwerk des Ankerns mit Landleinen zelebrieren.
              </p>

            {/* Erreichbarkeit Box */}
            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Erreichbarkeit & Anreise</h4>
              <p className="text-black mb-3">Dalaman Flughafen (DLM) ist die komfortabelste Anlaufstelle:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Kurze Transferzeiten direkt zu den Marinas von Göcek oder Fethiye</li>
                <li>Alternative Anreise über Antalya (AYT) oder Bodrum (BJV)</li>
                <li>PKW-Anreise über Balkan oder Fähren Italien/Griechenland</li>
                <li>Parkplätze in Marinas, Shuttle-Services und Proviant-Lieferdienste verfügbar</li>
              </ul>
            </div>

            {/* Besonderheiten des Reviers */}
            <h3 className="text-2xl font-semibold mt-8 mb-4">Besonderheiten des Reviers</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Geschützte Buchten</h5>
                <p className="text-sm">Die Skopea Limanı ist ein natürlicher „Wellenbrecher". Selbst bei auffrischender Brise liegen Sie ruhig und sicher.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Kurze Schläge</h5>
                <p className="text-sm">Viele Törnziele liegen nur wenige Seemeilen auseinander. Badepause, Lunch-Ankerplatz – alles fein dosierbar.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Thermische Winde</h5>
                <p className="text-sm">Ab Mittag baut sich moderate Brise auf, schläft abends ein – ideal für Genusssegler und Familien.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Ankern mit Landleinen</h5>
                <p className="text-sm">Sand-/Mudgrund mit sehr gutem Halt. Landleinen an Bäumen/Felsösen reduzieren Schwojen.</p>
              </div>
            </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Vorschriften & Regeln – kompakt und praxisnah</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Transit Log (Cruising Permit):</strong> Für jede Charteryacht in der Türkei obligatorisch. Der Transit Log wird beim Check-in erstellt und führt Bootsdaten, Crew, Revierangaben. Crewänderungen, Abstecher in besondere Zonen oder Hafenwechsel werden dokumentiert.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Check-in/Check-out:</strong> Standardisiert und effizient: Yachtübernahme, Sicherheitsbriefing, Revier-/Wetterhinweise, Kontrolle von Papieren/Funk. Beim Check-out: Fuel-Dock, Pump-Out, Übergabe – in der Hochsaison rechtzeitig einplanen.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Naturschutz & SEPA Göcek–Fethiye:</strong> Ein Großteil des Reviers ist Schutzgebiet. In ausgewiesenen Bereichen gilt: Bojen statt Ankern, Mindestabstände zu Ufer und Badezonen, besondere Rücksicht auf Seegraswiesen. Aushänge in Marinas beachten; Bojen- und No-Anchor-Zonen sind vor Ort klar gekennzeichnet.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Abwässer & Pump-Out (Blue-Card-Nachweis):</strong> Schwarz- und in vielen Zonen auch Grauwasser dürfen nicht eingeleitet werden. Entsorgung erfolgt an Pump-Out-Stationen in Marinas oder via Serviceboot. Der Nachweis der Entsorgung ist üblich (digital/Beleg) und kann kontrolliert werden. Planen Sie die Entleerung frühzeitig in die Route ein.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Geschwindigkeiten, Badezonen, Lärm:</strong> In Buchten gelten reduzierte Geschwindigkeiten. Wellen/Sog vermeiden, Musikpegel moderat halten, Badebereiche respektieren. In Ölüdeniz/Blue Lagoon gelten besondere Schutzgebietsregeln (Anker-/Motorzonen, Zugang, ggf. Zeitfenster).
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>VHF-Pflichten & Nachtfahrt:</strong> Funk betriebsbereit halten; Marinas/Restaurantstege sind meist auf festen Kanälen erreichbar. Nachtfahrten sind vertraglich oft ausgeschlossen – und in diesem Inselschutz-Revier ohnehin selten nötig.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Das Ankern mit Landleinen</h4>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Anker über Sand fallen lassen, Kettenlänge großzügig stecken. Tiefe beachten!</li>
                <li>Halt mit leichter Rückwärtsfahrt prüfen. Erst wenn Anker hält, Yacht aufstoppen und dann die zuvor an Land festgemachten Landleinen übergeben und auf den Heckklampen befestigen.</li>
                <li>Finaler Trimm: Leicht Vorlauf auf die Kette geben und Heckleinen nachspannen</li>
              </ol>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Segelscheine & Qualifikationen</h3>
              <p className="text-lg leading-relaxed mb-6">
                Für Bareboat Türkei werden ICC (International Certificate of Competence) oder gleichwertige nationale Scheine anerkannt (z. B. SBF See + SKS bzw. vergleichbar). Ein VHF-Betriebszeugnis (z. B. SRC) ist empfohlen und wird von vielen Flotten verlangt. Ohne eigene Lizenz fahren Sie Skippered (Berufsskipper an Bord) oder entscheiden sich für eine Crewed-Yacht – mit Hostess/Koch und Rundum-Service.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Für wen ist das Revier geeignet – und warum?</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Einsteiger & Familien:</strong> Leichte bis moderate Anforderungen, kurze Tagesetappen, viele Lee-Optionen, ruhige Nächte – das Revier verzeiht viel und belohnt mit maximaler Wasserzeit.</li>
                <li><strong>Genusssegler:</strong> Cala-Hopping, SUP, Schnorcheln, Lunch am Anker, Dinner am Restaurantsteg – das Lebensgefühl der Türkischen Riviera im Tagesrhythmus der Brise.</li>
                <li><strong>Ambitionierte Crews:</strong> Wer mehr will, verlängert die Route ostwärts über Gemiler/Ölüdeniz zu Kaş/Kalkan/Kekova (mehr Reliefwind, Düseneffekte, strenger geschützte Zonen) oder westwärts via Ekincik/Dalyan in den Hisarönü-Golf/Marmaris (längere Schläge, Kapstrecken). So wächst die sportliche Komponente – ohne auf die sichere Rückzugsmöglichkeit in die Skopea-Buchten zu verzichten.</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Marinas – State of the Art in Göcek & Umfeld</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>D-Marin Göcek</strong> – Große, tiefe Anlage mit weiten Manövrierbereichen, Wasser/Strom, Fuel-Dock, Pump-Out, Technikbetrieben, Gastronomie und Shops. High-End-Standard, 24/7-Sicherheit.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Skopea Marina</strong> – Zentrumsnah und ideal für kurze Wege in den Ort; umfassende Services, von Technik bis Laundry.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Göcek Municipality Marina</strong> – Der kommunale Stadthafen mit bestem Zugang zu Migros, CarrefourSA, Bäckern, Apotheken und Chandlery.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Club Marina</strong> – Ruhig und gut geschützt, Restaurant am Steg, solide Grundversorgung.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MarinTürk Göcek Village Port & MarinTürk Göcek Exclusive</strong> – Zwei moderne Anlagen mit Muring-Plätzen, Pump-Out, Technik-Support, Gastronomie – beliebt für Charterwechsel und Stopps vor/ nach dem Törn.
              </p>
              
              <h4 className="text-xl font-semibold mt-6 mb-3">Fethiye ergänzt das Angebot mit</h4>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Ece Marina (Ece Saray)</strong> – Großzügige Liegeplätze, Fuel-Dock, Pump-Out, Technik & Einkauf – ideal, wenn Sie eine Nacht „Stadt" einbauen möchten.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Yacht Classic Marina</strong> – Boutique-Marina am Hotel, charmant in Laufweite zur Promenade – für kleinere bis mittlere Yachten.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong>Proviantierung & Services:</strong> In Göcek decken Migros & CarrefourSA den großen Einkauf ab, dazu Wochenmärkte mit Obst/Gemüse. Viele Märkte liefern direkt „an Bord". Taxi-Boats verbinden Buchten und Restaurantstege. Chandlery und Werkstätten finden Sie in beiden Orten – Spezialteile schneller in Fethiye.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Törnziele – die Klassiker der Skopea Limanı</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Yassıca Adaları (12-Inseln)</strong> – Sandzungen, türkisfarbene Pools, Traum-Kulisse für den ersten Sprung ins Wasser.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Kapi Creek (Göbün)</strong> – Schmale Einfahrt, innen spiegelglatt; Restaurantsteg mit Lazy Lines, berühmter Sonnenuntergang.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Bedri Rahmi Koyu</strong> – Felsmalerei des Künstlers, grüne Ufer, Moorings/Steg, kurzer Wanderpfad.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Hamam Koyu (Cleopatra's Bath)</strong> – Byzantinische Ruinen im Wasser, top zum Schnorcheln; Longline oder Mooring je nach Spot.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Tersane Adası</strong> – Die „Werftinsel" bietet weiträumige Reeden, mehrere Buchten, guten Halt und Ruinen an Land.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Boynuzbükü</strong> – Guter Versorger-Stopp mit Steg und großer, ruhiger Bucht.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Sarsala</strong> – Breite Badebucht mit Restaurantsteg; Familienliebling.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Fethiye</strong> – Altstadt, Basar, Promenade; Hafenstopp für Kultur & Küche.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Ölüdeniz/Blue Lagoon</strong> – Ikone der Türkischen Riviera; Schutzgebiet mit Regelwerk (Zonen/Zeiten).
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Gemiler Adası</strong> – Historische Insel, Abendlicht deluxe mit Blick auf Ölüdeniz.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong>Weiterführende Ziele:</strong> Kaş/Kalkan (amphitheatralische Küstenstädte, Tauchzentren), Kekova-Reede (versunkene Stadt; streng zoniert), Ekincik (Ausflug Dalyan/Kaunos), Marmaris/Hisarönü (mehr Vielfalt und Kapstrecken).
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Routenvorschläge – mit Blick auf Brise & Komfort</h3>
              
              <h4 className="text-xl font-semibold mt-6 mb-3">1 Woche – Göcek-Buchten-Rundkurs (familien- & genussorientiert)</h4>
              
              <div className="space-y-3 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 1: Ankunft & Einstieg (Göcek → Yassıca)</h5>
                  <p className="text-sm text-muted-foreground">Ankommen, Check-in, Briefer. Erster Hüpfer, Baden, ruhige Nacht an Mooring oder auf Sand.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 2: Zu den Ruinen (Yassıca → Hamam Koyu → Kapi Creek)</h5>
                  <p className="text-sm text-muted-foreground">Vormittags Schnorcheln bei den Ruinen, abends Restaurantsteg; Lazy Lines nutzen, Landleinen sauber führen.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 3: Werftinsel erleben (Kapi Creek → Tersane Adası)</h5>
                  <p className="text-sm text-muted-foreground">Weite Reede, Landgang auf die Werftinsel, gelassene Nacht im Inselschutz.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 4: Kunst & Natur (Tersane → Bedri Rahmi → Boynuzbükü)</h5>
                  <p className="text-sm text-muted-foreground">Kunst, Kiefern, kleine Wanderung; später in die große, ruhige Bucht – perfekt für SUP bei Abendflaute.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 5: Stadtbummel & Versorgung (Boynuzbükü → Fethiye)</h5>
                  <p className="text-sm text-muted-foreground">Vorräte ergänzen, Basar & Promenade, optional Ece Marina oder Yacht Classic für Landstrom/Pool.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 6: Blaue Lagune & Ruhe (Fethiye → Gemiler/Ölüdeniz → Sarsala)</h5>
                  <p className="text-sm text-muted-foreground">Fotostopp in der Lagune (Regeln beachten), zur Nacht nach Sarsala – breiter Buchtfächer, Sandgrund.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold">Tag 7: Rückkehr zum Ausgangspunkt (Sarsala → Göcek)</h5>
                  <p className="text-sm text-muted-foreground">Gemütlicher Rückweg, Fuel-Dock, Pump-Out, Check-out.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                <strong>Windsignatur:</strong> Sommerlich thermisch, am Nachmittag segeln – morgens/abends ruhig. In Randzeiten variable Brisen; stets Lee-Optionen parat.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">2 Wochen – zwei Varianten für mehr Reichweite</h4>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Variante Ost – bis Kaş/Kalkan/Kekova</strong><br />
                Göcek-Buchten → Fethiye → Gemiler → Kalkan → Kaş → Kekova-Reede (Zonen, Moorings, Tauch-/Ankerregeln) → Kaş → Rückweg via Gemiler/Fethiye → Göcek.<br />
                <em>Charakter:</em> Dramatische Küsten, klarstes Wasser, punktuell katabatische Effekte; kulturhistorisch ein Höhepunkt der Lykischen Küste.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong>Variante West – bis Marmaris/Hisarönü</strong><br />
                Göcek-Buchten → Ekincik (Dalyan/Kaunos per Ausflugsboot) → Bozukkale/Loryma → Selimiye/Orhaniye (Restaurantstege, Kızkumu-Lagune) → Marmaris → „Buchtenhüpfen" retour → Göcek.<br />
                <em>Charakter:</em> Längere Schläge und Kapstrecken, dafür viele All-Weather-Anchorages im Golf – ideal, um auch mal „sportlicher" zu segeln.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Wind & Wetter – lokale Besonderheiten nach Saison</h3>
              
              <h4 className="text-xl font-semibold mt-6 mb-3">Frühling (April–Juni)</h4>
              <p className="text-lg leading-relaxed mb-4">
                Angenehme Temperaturen, blühende Hänge, moderate Brisen – gelegentlich Lodos (Süd/Südost) mit Schwell. Dann lohnt der Wechsel in Lee-Buchten; Reffbereitschaft ist selten, aber sinnvoll.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Sommer (Juli–August)</h4>
              <p className="text-lg leading-relaxed mb-4">
                Die Thermik liefert verlässlich Nachmittagswinde, der Meltemi-Einfluss ist in den Buchten stark abgemildert. Häfen und Restaurantstege füllen sich ab dem Nachmittag – früh anlegen und die goldene Stunde am Wasser genießen.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Herbst (September–Oktober)</h4>
              <p className="text-lg leading-relaxed mb-4">
                Warmes Wasser, klare Sichtweiten, entspannter Andrang. Brisen meist stabil, gelegentlich Schauer/Front – tagsüber segeln, abends ruhig liegen.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Seegang & lokale Effekte</h4>
              <p className="text-lg leading-relaxed mb-6">
                Im Inselschutz der Skopea Limanı ist die See überwiegend glatt. Exponierter wird es westlich Richtung Ekincik/Marmaris oder ostwärts vor Kaş/Kalkan (kurzer, kabbeliger Schwell an Kaps). In steilen Küstenabschnitten sind Fallböen möglich, in Engstellen Düseneffekte – Kurs und Trimm entsprechend anpassen.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Seemannschaft – Kurzcheck</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Forecast & Fenster:</strong> Täglich Wetter prüfen; Thermik nutzen, Lodos-Fenster beachten; Reffpunkte vorher setzen.</li>
                <li><strong>Ankern & Longline:</strong> Auf Sand/Mud ankern, Kette großzügig stecken, Halt testen, Heckleinen mit Scheuerschutz fahren, Ankeralarm aktivieren.</li>
                <li><strong>SEPA & Bojen:</strong> In Schutzgebieten Bojen nutzen, No-Anchor-Zonen respektieren, Badebereiche freihalten, langsam fahren.</li>
                <li><strong>Pump-Out/Blue-Card:</strong> Entsorgung früh planen, Beleg/Nachweis prüfen; Stoßzeiten an Fuel-/Pump-Out-Stegen meiden.</li>
                <li><strong>Hafenmanöver:</strong> Mediterranean Mooring mit Lazy Line – langsam einlaufen, Achterleinen vorbereitet, Springs setzen, Fenderhöhen variieren.</li>
                <li><strong>Crewbriefing:</strong> Rollen, Handzeichen, Dinghy-Regeln, Sonnenschutz & Trinkwasser, Nachtmanöver vermeiden (vertraglich oft untersagt).</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Warum Göcek & Fethiye? – Ihre Vorteile auf einen Blick</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Komfort & Sicherheit:</strong> Kurze Wege, ruhige Nächte, dichte Infrastruktur – Yachtcharter Göcek ist das Komfort-Revier der Türkischen Riviera.</li>
                <li><strong>Viel Erlebnis pro Tag:</strong> Cala-Hopping, SUP, Schnorcheln, Dinner am Kai, Kultur am Vormittag – ohne lange Transfers.</li>
                <li><strong>Flexible Routen:</strong> Bei Wetterumschwung genügt ein Kurswechsel in die nächste Bucht; die Skopea Limanı ist ein natürlicher Schutzschirm.</li>
                <li><strong>Alle Yachtklassen:</strong> Segelyacht Göcek, Katamaran mieten Türkei, Gulet-Charter oder Motoryacht – das Revier spielt mit jeder Plattform seine Stärken aus.</li>
                <li><strong>Für jede Crew:</strong> Vom Bareboat-Skipper mit ICC über Familien bis zur Crew, die mit Skipper Göcek oder komplett Crewed reisen möchte.</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Jetzt Yachtcharter Göcek & Fethiye planen</h3>
              <p className="text-lg leading-relaxed mb-6">
                Sagen Sie uns Crewgröße, Reisezeit und Yachtklasse (Segelyacht, Katamaran, Gulet oder Motoryacht). Wir erstellen Ihre individuelle Route mit Lee-Optionen, reservieren Bojen/Restaurantstege, koordinieren Pump-Out und organisieren den Transfer ab Dalaman Flughafen.
              </p>
              <p className="text-lg leading-relaxed">
                Jetzt unverbindlich anfragen – und die Leinen in der Skopea Limanı lösen. Für Segeln Türkei an der Lykischen Küste, fein dosierte Tagesetappen und Törnerinnerungen, die bleiben.
              </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-8 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihr Göcek & Fethiye-Abenteuer?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entdecken Sie die Zwölf Inseln und das Butterfly Valley. Lassen Sie uns Ihren Traumtörn planen.
          </p>
          <CharterRequestForm>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Jetzt Charter anfragen
            </Button>
          </CharterRequestForm>
        </div>
      </div>
    </div>
  );
};

export default GoecekFethiye;