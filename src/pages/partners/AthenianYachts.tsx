import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function AthenianYachts() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Athenian Yachts - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Athenian Yachts - Premium Yachtcharter in Griechenland. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/athenian-yachts/" />
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
                <BreadcrumbLink href="/yachtcharter-partner/">Yachtcharter Partner</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Athenian Yachts</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Athenian Yachts</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Premium Yachtcharter in griechischen Gewässern
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
                  src="/media/partner/athenian-yachts.svg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }}
                  alt="Athenian Yachts Logo" 
                  className="object-contain max-h-20 mx-auto"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Regionen</p>
                <p className="font-semibold">Griechenland</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Ship className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Flotte</p>
                <p className="font-semibold">100+ Yachten</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Anchor className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Seit</p>
                <p className="font-semibold">1993</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4">Über Athenian Yachts</h2>
            <p className="text-lg leading-relaxed mb-6">
              Athenian Yachts begann als kleiner, eigentümergeführter Flottenbetreiber in Athen und hat sich über die Jahre zu einem der bekanntesten Full-Service-Charteranbieter Griechenlands entwickelt. Der Grundgedanke blieb stets derselbe: sauber gewartete Yachten, klare Prozesse von der Anfrage bis zur Rückgabe und ein Team, das die Reviere des Landes wie die eigene Westentasche kennt. Aus ersten Liegeplätzen in der Alimos/Marina Kalamaki wuchs ein Netzwerk weiterer Stützpunkte – u. a. im Saronischen Golf (Athen/Lavrion) sowie auf Lefkas und Korfu für das Ionische Meer. Damit deckt Athenian die wichtigsten Routen Griechenlands ab: kurze Distanzen und geschützte Gewässer im Westen, frische Meltemi-Etappen über die Kykladen im Osten.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Die Flotte ist breit aufgestellt und kombiniert Komfort mit unkomplizierter Handhabung. Bei den Monohulls dominieren populäre Serien von Beneteau, Jeanneau, Bavaria, Dufour und Hanse – vom kompakten Weekender um 30–34 ft für Paare bis zu familien- und performanceorientierten Cruisern im Bereich 40–55 ft. Wer mehr Raum, Stabilität und Privatsphäre wünscht, findet bei den Katamaranen eine große Auswahl von Lagoon, Bali, Fountaine Pajot und Nautitech; gängige Größen liegen zwischen 38–50 ft mit großzügigen Salons, getrennten Eignerkabinen und – je nach Modell – Extras wie Generator, Klimaanlage oder Watermaker. Viele Yachten sind als Bareboat oder mit Skipper buchbar; auf Wunsch ergänzt Athenian das Setup um Hostess oder Koch.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ein klarer Pluspunkt ist die eigene Technik vor Ort. Winterarbeiten, planmäßige Inspektionen und schnelle Hilfe im Saisonbetrieb sorgen für verlässliche Übergaben und geringe Ausfallzeiten. Transparente Ausstattungslisten, realistische Kautions-/Versicherungsmodelle und – wo möglich – Early Check-in erleichtern Ihnen den Start. Familien schätzen kinderfreundliche Layouts, Bugstrahlruder und Plotter am Steuerstand; ambitionierte Crews greifen zu Modellen mit sportlicherem Rigg oder optionalen Leichtwindsegeln.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Neben Charter bietet Athenian auch Brokerage & Charter-Management: Wer den Schritt zum eigenen Boot plant, erhält Unterstützung bei Modellauswahl, Finanzierung, Ausrüstung und der späteren Flottenintegration. Dadurch lässt sich der Spagat zwischen Eigennutzung und wirtschaftlichem Betrieb realistisch gestalten. Für Gruppen, Vereine oder Firmen unterstützt Athenian zudem Regatta- und Eventformate – von flottenhomogenen Setups über Safety- und Taktik-Briefings bis hin zur Zeitnahme und Abendprogramm-Organisation.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ob Sie gemütliches Inselhüpfen durch das Ionische Meer planen, kykladische Langschläge bei Meltemi suchen oder einen Teamevent mit mehreren Booten aufsetzen möchten: Athenian Yachts verbindet lokale Expertise, eine vielfältige Flotte und einen serviceorientierten Ablauf. Nennen Sie Reisedaten, Crewgröße und Wunschrevier – wir stellen Ihnen passende Athenian-Yachten mit Verfügbarkeit, Ausstattungsdetails und einem transparenten Gesamtpreis zusammen.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Athenian Yachts anfragen</h4>
            <p className="text-muted-foreground mb-6">
              Interessiert an einem Charter mit Athenian Yachts? Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt Yachtcharter Athenian Yachts anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
