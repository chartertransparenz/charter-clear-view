import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function UltraSailing() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ultra Sailing - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Ultra Sailing - Yachtcharter mit modernen Flotten. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/ultra-sailing" />
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
                <BreadcrumbPage>Ultra Sailing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ultra Sailing</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Exzellenz im Yachtcharter
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
                  src="/media/partner/ultra-sailing.png?v=4" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }}
                  alt="Ultra Sailing Logo" 
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
                <p className="font-semibold">50+ Yachten</p>
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
            <h2 className="text-3xl font-bold mb-6">Ultra Sailing – kroatische Segel-DNA seit 1995, stark in Split, Trogir, Pula & Dubrovnik</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Ultra Sailing wurde 1995 in Split gegründet – zunächst mit klarer Fokussierung auf nautische Ausbildung und Charter. Aus dem kleinen Team entwickelte sich ein etablierter Flottenbetreiber mit eigenem Technik-Know-how, Segelschule und dichtem Basisnetz entlang der Adria. Diese Mischung aus Charter, Training und Service prägt bis heute die Marke: solide gewartete Yachten, klare Abläufe beim Check-in und kurze Wege in die dalmatinische Inselwelt.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Flotte & Ausrichtung</h3>
            <p className="text-lg leading-relaxed mb-6">
              Ultra betreibt eine eigene Charterflotte von Segelbooten (und ausgewählten Kats) ungefähr zwischen 30 und 60 Fuß – ideal für Paare, Familien und sportlichere Crews. Besonders sichtbar ist die starke Ausrichtung auf moderne Beneteau-Linien (Oceanis/First), ergänzt durch gängige Charterklassiker anderer Werften. Für Leichtwind-Tage stehen – je nach Yacht – Optionen wie Gennaker/Code Zero bereit. Größenordnung und Ausstattung variieren saisonal; für 7-Tage-Törns lassen sich homogene Boote für kleine Club-Regatten oder Teamevents zusammenstellen.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Basen & Reviere</h3>
            <p className="text-lg leading-relaxed mb-6">
              Strategisch gut verteilt, starten Sie mit Ultra u. a. ab Pula (Istrien/Kvarner), Split/Trogir (Mitteldalmatien) und Dubrovnik (Süddalmatien). Damit sind alle klassischen Routen erschlossen: die Kornaten und Nordinseln, Hvar/Vis/Brač um Split sowie die südliche Inselwelt bis Mljet. Für Crews mit begrenzter Zeit sind One-Week-Loops ohne lange Anfahrten möglich; wer zwei Wochen plant, kombiniert bequem zwei Reviercharaktere.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Segelschule & Know-how</h3>
            <p className="text-lg leading-relaxed mb-6">
              Ein Alleinstellungsmerkmal ist die Ultra Sailing School (seit 1995), die von Regatta-erfahrenen Skippern geprägt ist. Das spürt man beim Übergabe-Briefing und in den praxisnahen Tipps zu Trimm, Manövern und Revierbesonderheiten – ein Plus für Einsteiger und ambitionierte Crews gleichermaßen.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Flottengröße – realistisch eingeordnet</h3>
            <p className="text-lg leading-relaxed mb-6">
              Je nach Saison listet Ultra über 50 Charteryachten entlang der Küste; die genaue Zahl schwankt, weil Neubauten, Verkäufe und Wartungsfenster kontinuierlich einfließen. Für die Törnplanung zählt: In den Kernbasen Split/Trogir sowie Pula und Dubrovnik ist die Modell-Auswahl stabil – gut für Wunschgrundrisse und Baujahre in beliebten Urlaubswochen.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Warum Ultra Sailing über Charter Transparenz buchen?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Weil Sie die Markenstärke von Ultra mit unserem Full-Service kombinieren. Wir kennen die Basen, Übergaben und Teams persönlich, steuern die Yachtauswahl nach Crewprofil (Kabinen, Kinder, Skipperwunsch, Segelambition) und empfehlen konkrete Schiffe mit genau passenden Layouts, Baujahren und Ausstattungen – anstatt langer, unübersichtlicher Listen. Dank unseres Drahts zu den Base-Managern klären wir Early-Check-in, Zusatzsegel, SUPs, Kinder-Netze oder Transfer/Proviant pragmatisch und verbindlich. Vor Abreise erhalten Sie Reviervorschläge (Kornaten vs. Hvar/Vis), Mooring-Tipps, Anreise- und Parkinfos – damit die erste Meile entspannt gelingt.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Kurz: Ultra Sailing steht für verlässliche Technik, seglerische Kompetenz und Top-Lagen; Charter Transparenz sorgt dafür, dass daraus Ihr maßgeschneiderter Törn wird – mit fairen Konditionen, sauberer Organisation und schneller Hilfe, wenn's darauf ankommt. Senden Sie uns Reisedaten und Crewgröße – wir liefern passende Ultra-Vorschläge mit Verfügbarkeit, Ausstattungsdetails und transparentem Gesamtpreis.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Ultra Sailing anfragen</h4>
            <p className="text-muted-foreground mb-6">
              Interessiert an einem Charter mit Ultra Sailing? Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt Yachtcharter Ultra Sailing anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
