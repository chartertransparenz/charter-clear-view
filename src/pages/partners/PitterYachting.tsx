import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function PitterYachting() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pitter Yachting - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Pitter Yachting - Professioneller Yachtcharter-Partner für Ihren perfekten Segeltörn. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/pitter-yachting" />
      </Helmet>

      <Navigation />
      
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Start</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/yachtcharter-partner">Yachtcharter Partner</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Pitter Yachting</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pitter Yachting</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Professioneller Yachtcharter mit erstklassigem Service
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">Partner</p>
                <img 
                  src="/media/partner/pitter-yachting.svg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }}
                  alt="Pitter Yachting Logo" 
                  className="object-contain max-h-20 mx-auto"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Regionen</p>
                <p className="font-semibold">Mittelmeer und Holland</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Ship className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Flotte</p>
                <p className="font-semibold">600+ Yachten</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Anchor className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Seit</p>
                <p className="font-semibold">1990</p>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4">Über Pitter Yachting</h2>
            <p className="text-lg leading-relaxed mb-6">
              Pitter Yachting zählt seit den frühen 1990er-Jahren zu den konstanten Größen im Adria-Charter. Aus einem familiengeführten Servicebetrieb entwickelte sich ein international aktiver Qualitätsanbieter – mit klarer Philosophie: technisch einwandfreie Yachten, transparente Abläufe und verlässlicher Service von der Buchung bis zur Rückgabe. Heute operiert Pitter mit über 600 Charteryachten auf 30 Basen in 7 Ländern. Herzstück ist weiterhin <Link to="/reviere/mittelmeer/kroatien" className="text-primary hover:underline">Kroatien</Link> mit mehr als 350 Yachten auf 15 Basen – von Pula/Veruda über Biograd, Jezera/Murter und Šibenik/Mandalina bis Split/Trogir. Ergänzend betreibt Pitter Basen in <Link to="/reviere/mittelmeer/griechenland" className="text-primary hover:underline">Griechenland</Link> z.B. im <Link to="/reviere/mittelmeer/griechenland/ionisches-meer" className="text-primary hover:underline">Ionischen Meer</Link> ab Korfu und den <Link to="/reviere/mittelmeer/griechenland/sporaden" className="text-primary hover:underline">Sporaden</Link> ab Volos. Zudem werden Yachten auch in <Link to="/reviere/mittelmeer/italien" className="text-primary hover:underline">Italien</Link> ab der <Link to="/reviere/mittelmeer/italien/amalfikueste" className="text-primary hover:underline">Amalfiküste</Link> angeboten. In der Saison 2025 waren +25 neue Yachten angekündigt; zusätzlich gehen neue Basen in Murter/Hramina (HR) und Kavala (GR) an den Start.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Die Flotte deckt ein breites Spektrum ab. Bei den Monohulls dominieren bewährte Serien von Bavaria, Beneteau, Jeanneau, Dufour, Hanse und Elan – von kompakten Cruisern um 30–34 ft (ideal für Paare/kleine Crews) bis hin zu familien- und performanceorientierten Yachten im Bereich 40–55 ft. Exakte Stückzahlen je Hersteller veröffentlicht Pitter nicht; erfahrungsgemäß bilden die populären Familiengrößen um 40–46 ft den Kern. Im Katamaran-Segment finden Sie Modelle von Lagoon, Bali, Fountaine Pajot und Nautitech – typischerweise 38–50 ft. Auch hier nennt Pitter keine exakten Typenzahlen, bietet aber eine breite Abdeckung vom kompakten Urlaubskat bis zum komfortorientierten 50-Fuß-Kat mit Generator/Klimaanlage.
            </p>
            
            <figure className="my-8">
              <img 
                src="/media/partner/pitter-yachtcharter.jpg" 
                alt="Moderne Yachten von Pitter Yachting" 
                className="w-full rounded-lg shadow-lg"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-3">
                Auf den modernen Yachten von Pitter Yachting können Sie die Buchten ganz entspannt erkunden.
              </figcaption>
            </figure>

            <p className="text-lg leading-relaxed mb-6">
              Ein wesentlicher Qualitätsbaustein ist die eigene Technik vor Ort: Winterarbeiten, planmäßige Inspektionen und schnelle Hilfe im Saisonbetrieb sorgen für zuverlässige Übergaben. Transparente Ausstattungslisten, faire Kautions-/Versicherungsmodelle und – wo möglich – frühes Check-in erleichtern Ihnen den Start. Familien freuen sich über kinderfreundliche Layouts, Bugstrahlruder und Plotter am Steuerstand; sportlich Ambitionierte nutzen Performance-Trimms, Gennaker/Code-Zero (modellabhängig) oder wählen flottenhomogene Setups für Regatten und Teamevents. Pitter unterstützt Sie dabei mit Briefings, Safety-Checks, Optional-Coaching und – auf Wunsch – Organisation von Wertung und Rahmenprogramm.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Strategisch wichtig ist die Mitgliedschaft in der Nautic Alliance. Für Sie bedeutet das: Zugang zu einem vernetzten Qualitäts- und Servicestandard über mehrere Länder und Marken hinweg, abgestimmte Prozesse (von der Verfügbarkeit bis zur Wartung), bessere Planbarkeit bei Einweg-Optionen oder Flotten-Events sowie einheitliche, transparente Kommunikation. Kurz: mehr Auswahl, mehr Verlässlichkeit – ohne auf den Pitter-Service zu verzichten, den viele Crews seit Jahren schätzen.
            </p>
            <h3 className="text-2xl font-bold mb-3 mt-8">Länder & Basen – Überblick (ohne Anspruch auf vollständige Stückzahlen):</h3>
            <ul className="text-lg leading-relaxed mb-6 list-disc list-inside">
              <li className="mb-2"><strong><Link to="/reviere/mittelmeer/kroatien" className="text-primary hover:underline">Kroatien</Link>:</strong> Schwerpunktland mit &gt;350 Yachten auf 15 Basen (Istrien, Nord-/Mitteldalmatien, Split/Trogir, Dubrovnik).</li>
              <li className="mb-2"><strong><Link to="/reviere/mittelmeer/griechenland" className="text-primary hover:underline">Griechenland</Link>:</strong> Basen u. a. Athen/Lavrion, Lefkas, Korfu; 2025 zusätzlich Kavala.</li>
              <li className="mb-2"><strong><Link to="/reviere/mittelmeer/italien" className="text-primary hover:underline">Italien</Link>:</strong> Castellamare die Stabia</li>
              <li className="mb-2"><strong>Weitere Länder:</strong> Holland, Ijsselmeer</li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              Ob Buchtenbummeln in den Kornaten, Inselhüpfen rund um Hvar & Vis, Ägäis-One-Ways oder eine Firmenregatta: die Kombination aus dichter Basenstruktur, großer Typenvielfalt und Nautic-Alliance-Rückhalt macht Pitter Yachting zu einer sicheren Wahl.
            </p>
            <p className="text-lg leading-relaxed font-semibold">
              Möchten Sie jetzt Ihre Pitter-Charter planen?<br />
              Nennen Sie Reisedaten, Crewgröße und Wunschrevier – wir liefern Ihnen konkrete Yachtvorschläge mit Verfügbarkeit, Ausstattungsdetails und einem transparenten Gesamtpreis. Jetzt Anfrage senden und mit Pitter Yachting ablegen!
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Pitter Yachting anfragen</h4>
            <p className="text-muted-foreground mb-6">
              Interessiert an einem Charter mit Pitter Yachting? Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt Yachtcharter Pitter Yachting anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
