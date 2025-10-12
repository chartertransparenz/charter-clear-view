import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function NcpMare() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>NCP & Mare - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="NCP & Mare - Professioneller Yachtcharter-Partner. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/ncp-mare" />
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
                <BreadcrumbPage>NCP & Mare</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NCP & Mare</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Kroatien-Charter mit Expertise
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">Partner</p>
                <img 
                  src="/media/partner/ncp-mare.svg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }}
                  alt="NCP & Mare Logo" 
                  className="object-contain max-h-20 mx-auto"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Regionen</p>
                <p className="font-semibold">Kroatien</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Ship className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Flotte</p>
                <p className="font-semibold">80+ Yachten</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Anchor className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Seit</p>
                <p className="font-semibold">1995</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">NCP & Mare – Mitteldalmatien mit Schwerpunkt Šibenik/Mandalina</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              NCP & Mare hat sich an der dalmatinischen Küste einen Namen gemacht – mit Schwerpunkt Šibenik/Mandalina, dem perfekten Sprungbrett in zwei Welten: Richtung Kornaten mit geschützten Buchten und Bojenfeldern sowie flussaufwärts in den Krka-Nationalpark mit Skradin als Bilderbuch-Etappenziel. Aus den Anfängen als lokaler Charter- und Servicebetrieb entwickelte sich eine Flotte, die Urlaubsskippern wie ambitionierten Crews gleichermaßen gerecht wird – getragen von solider Technik, gut organisierten Übergaben und einem Team, das Revier und Infrastruktur im Detail kennt.
            </p>

            <h3 className="text-2xl font-bold mb-4">Flotte & Ausstattung</h3>
            <p className="text-lg leading-relaxed mb-6">
              Bei den Einrumpfyachten finden Sie bewährte Serien von Bavaria, Beneteau, Jeanneau, Dufour, Hanse und Elan – vom kompakten 2-/3-Kabinen-Cruiser um 30–34 Fuß bis zu familien- und performanceorientierten 40–50-Fuß-Yachten mit Bugstrahlruder und Plotter am Steuerstand. Wer mehr Volumen und Privatsphäre sucht, greift zu Katamaranen von Lagoon, Bali, Fountaine Pajot oder Nautitech; beliebt sind Layouts mit vier gleichwertigen Kabinen, großen Pantry-Salons sowie – je nach Yacht – Generator, Klimaanlage und Watermaker. Viele Einheiten sind wahlweise bareboat oder mit Skipper buchbar; optional ergänzen Hostess oder Koch das Setup.
            </p>

            <h3 className="text-2xl font-bold mb-4">Standortvorteil Šibenik/Mandalina</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die Lage in Mitteldalmatien reduziert Anfahrten und maximiert Revierflexibilität: Ein-Wochen-Törns durch die Kornaten, kombinierte Routen mit Zlarin–Prvić–Murter, oder – als Kontrast – die ruhige Flussfahrt nach Skradin. Versorgungsmöglichkeiten, Parken und Transfers sind gut planbar; technische Hilfe bleibt dank kurzer Wege verfügbar. Für Crews mit Kindern oder Einsteiger ist das Revier ideal: kurze Etappen, viele geschützte Ankerplätze, verlässliche Infrastruktur – und genug Optionen für einen „Plan B", falls das Wetter umschlägt.
            </p>

            <h3 className="text-2xl font-bold mb-4">Warum NCP & Mare über Charter Transparenz buchen?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Weil Sie die Vorteile eines etablierten Flottenbetreibers mit dem Komfort einer Full-Service-Agentur verbinden. Wir kennen die Abläufe in Mandalina, die typischen Check-in-Zeitfenster, Liegeplatz- und Tankgewohnheiten sowie die kleinen Handgriffe, die den ersten Hafentag entspannen. Auf Basis von 30 Jahren Beratungserfahrung gleichen wir Ihre Wünsche (Kabinenplan, Baujahr, Komfortfeatures, Kinder an Bord, Skipperbedarf, sportliche Ambitionen) mit konkreten Yachtempfehlungen aus genau dieser Flotte ab – kurz, ehrlich und passend zu Crew und Reisezeit. Dank direkter Ansprechpartner vor Ort klären wir Früh-Check-in, Zusatzleistungen (SUPs, Beiboote/Außenborder-Upgrades, Gennaker/Code Zero, Kinder-Netz) und Sonderwünsche pragmatisch – transparent im Preis und belastbar in der Umsetzung.
            </p>

            <h3 className="text-2xl font-bold mb-4">Events & Gruppen</h3>
            <p className="text-lg leading-relaxed mb-6">
              Für Freundescrews, Vereine oder Companies organisieren wir gemeinsam mit NCP & Mare Regatta- und Eventformate: homogene Bootstypen, Safety- und Taktik-Briefings, Zeitnahme sowie ein passendes Rahmenprogramm zwischen Marina, Inselkonoben und Skradin. So entsteht ein sportliches Erlebnis, das zugleich urlaubstauglich bleibt.
            </p>

            <h3 className="text-2xl font-bold mb-4">Ihr nächster Schritt</h3>
            <p className="text-lg leading-relaxed font-semibold">
              Sagen Sie uns Reisedaten, Crewgröße und Wunschroute – wir liefern Ihnen passende NCP-&-Mare-Vorschläge mit Verfügbarkeit, Ausstattungsdetails und einem transparenten Gesamtpreis. Auf Wunsch erhalten Sie dazu eine 1-Wochen-Route ab Šibenik/Mandalina (Kornaten oder Krka-Kombination) plus Check-in-Leitfaden und Praxis-Tipps für die erste Meile.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter NCP & Mare anfragen</h4>
            <p className="text-muted-foreground mb-6">
              Interessiert an einem Charter mit NCP & Mare? Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt Yachtcharter NCP & Mare anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
