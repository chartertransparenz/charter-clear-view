import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Waypoint() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Waypoint Charter Croatia - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Waypoint Charter Croatia - Kroatien-Spezialist für Yachtcharter. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/waypoint" />
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
                <BreadcrumbPage>Waypoint Charter Croatia</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Waypoint Charter Croatia</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ihr verlässlicher Partner für Kroatien-Charter
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
                  src="/media/partner/waypoint.svg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }}
                  alt="Waypoint Charter Croatia Logo" 
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
                <p className="font-semibold">110+ Yachten</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Anchor className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Seit</p>
                <p className="font-semibold">1998</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4">Über Waypoint Charter Croatia</h2>
            <p className="text-lg leading-relaxed mb-6">
              Waypoint Charter steht seit vielen Jahren für unvergessliche Segelerlebnisse an der kroatischen Adriaküste. Von zwei der schönsten Ausgangspunkte starten Sie direkt zu den Highlights der Region – spektakuläre Inselwelten, azurblaue Buchten und malerische Altstädte erwarten Sie. Genießen Sie entspannte Törns zu den Perlen der Adria, wo sowohl ruhige Natur als auch lebendiges mediterranes Flair auf Sie warten.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Die Flotte von Waypoint überzeugt durch moderne, bestens ausgestattete Yachten – ob beliebte Monohulls renommierter Werften oder großzügige Katamarane mit Komfortextras wie Klimaanlage und Watermaker. Vom kompakten Cruiser bis zur großen Performance-Yacht ist für Paare, Familien und Freundesgruppen das Richtige dabei. Sie wählen: Bareboat, mit Skipper, optional Hostess oder Koch – immer flexibel und nach Ihren Wünschen. Zur Grundausstattung gehören sinnvolle Details wie Bugstrahlruder, Plotter am Steuerstand, Bimini/Sprayhood und Dinghy; Zusatzsegel sind häufig zubuchbar.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Der Vorteil: Kurze Anreisewege, bestens ausgestattete Marinas und zuverlässige Technik machen Ihre Charter von Anfang an entspannt. Dank guter Infrastruktur und flexibler Routenmöglichkeiten, wie den traumhaften Insel-Loops, erleben Sie die kroatische Küste völlig unkompliziert – ob für eine Woche oder länger.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Mit Charter Transparenz kombinieren Sie die Erfahrung eines etablierten Vercharterers mit unserem erstklassigen Service. Wir beraten Sie individuell, stimmen Boot und Ausstattung genau auf Ihre Wünsche ab und kümmern uns um Sonderwünsche wie Early Check-in, SUP-Pakete, Kindersicherheit oder Transfers. Vor der Abreise erhalten Sie von uns inspirierende Routenvorschläge, Anlegertipps und einen praktischen Check-in-Leitfaden – so kann das Abenteuer sofort beginnen.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Egal ob Sie als Verein, Unternehmen oder mit Freunden reisen – wir organisieren auf Wunsch homogene Flotten, professionelle Briefings und, wenn gewünscht, sportliche Wertungsstrukturen inklusive Abendprogramm. Ihr Segelurlaub wird zum gemeinsamen Erlebnis voller spannender Momente und entspannter Stunden.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Waypoint Charter Croatia anfragen</h4>
            <p className="text-muted-foreground mb-6">
              Interessiert an einem Charter mit Waypoint Charter Croatia? Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt Yachtcharter Waypoint Charter Croatia anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
