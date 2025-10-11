import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function IstionYachting() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Istion Yachting - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Istion Yachting - Griechenland-Spezialist für Yachtcharter. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/istion-yachting" />
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
                <BreadcrumbPage>Istion Yachting</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Istion Yachting</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Professioneller Charter-Service in Griechenland
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
                  src="/media/partner/istion-yachting.svg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }}
                  alt="Istion Yachting Logo" 
                  className="object-contain max-h-20 mx-auto"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Regionen</p>
                <p className="font-semibold">Griechenland & Kroatien</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Ship className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Flotte</p>
                <p className="font-semibold">200+ Yachten</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Anchor className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Seit</p>
                <p className="font-semibold">1991</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4">Über Istion Yachting</h2>
            <p className="text-lg leading-relaxed mb-6">
              Istion Yachting begann 1992 auf Kos – zunächst als kleiner Flottenbetreiber mit wenigen Segelyachten für Bareboat- und Skipper-Charter. Von Beginn an setzte das Team auf sorgfältig gewartete Boote, klare Prozesse und persönliche Betreuung. Charter Transparenz war von Anfang an Partner von Istion: Aus dieser frühen Zusammenarbeit entstand ein enges Verständnis für die Wünsche deutschsprachiger Crews – von der Beratung vor der Buchung bis zur reibungslosen Übergabe an der Pier. Dieses Zusammenspiel aus lokaler Expertise (Istion) und transparentem Erwartungsmanagement (Charter Transparenz) prägte die Qualitätserfahrung vieler Stammkundinnen und -kunden.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Mit wachsender Nachfrage entwickelte sich Istion zu einem landesweit präsenten Anbieter: Basen in Athen/Lavrion, <Link to="/reviere/mittelmeer/griechenland/ionisches-meer/lefkas" className="text-primary hover:underline">Lefkas</Link>, <Link to="/reviere/mittelmeer/griechenland/ionisches-meer/korfu" className="text-primary hover:underline">Korfu</Link> und weiteren Knotenpunkten erschließen heute <Link to="/reviere/mittelmeer/griechenland/ionisches-meer" className="text-primary hover:underline">Ionisches Meer</Link>, <Link to="/reviere/mittelmeer/griechenland/kykladen" className="text-primary hover:underline">Kykladen</Link> und <Link to="/reviere/mittelmeer/griechenland/dodekanes" className="text-primary hover:underline">Dodekanes</Link> – mit Routen und Servicepaketen für Einsteiger, Familien und ambitionierte Crews. Parallel wurde das Leistungsportfolio ausgebaut: vom klassischen Bareboat über Skipper-Charter bis zu voll besetzten Crewed-Yachten und individuellen Törnwünschen. Im Premium-Segment betreibt die Gruppe zusätzlich eine eigene Luxus-Sparte. Charter Transparenz begleitete diesen Weg beratend und vermittelnd – etwa bei der Auswahl passender Yachtmodelle je Revier, bei Frühbucherfenstern und bei der Standardisierung der Ausstattungsprofile, damit Sie schon bei der Anfrage wissen, was Sie an Bord erwartet.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ein Aushängeschild sind die Events von Istion. Die Catamarans-Cup-Regatta verbindet seit 2010 entspanntes Urlaubstörnen mit sportlichem Racing und lockt jährlich internationale Crews nach Griechenland. Ergänzend setzt Istion mit dem Skradin Cup ein Schwesterformat an der dalmatinischen Küste – eine Woche aus Küstenetappen, Wertungen und stimmungsvollen Abendprogrammen. Beide Formate zeigen, wie erlebbar und sicher Fahrtenkatamarane im Regatta-Kontext sind – ideal für Freundescrews, Vereine oder Firmenevents. Charter Transparenz unterstützt Sie bei der Wahl des passenden Bootstyps, bei Crewzuschnitten und bei organisatorischen Details rund um Briefings, Safety-Checks und Wertungsmodalitäten.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Auch beim Thema Kauf & Management ist Istion eine feste Größe: Als offizieller Händler und Brokerage-Partner für Lagoon begleitet das Team den gesamten Prozess vom Modellvergleich über Finanzierung und Ausrüstung bis zur Indienststellung – auf Wunsch inklusive Charter-Management. Neben Lagoon sind weitere Hersteller im Portfolio; Charter Transparenz sorgt dafür, dass Ihre Vorstellungen (Komfort, Performance, Chartertauglichkeit) sauber mit den verfügbaren Layouts und Optionen abgeglichen werden.
            </p>
            <figure className="my-8">
              <img 
                src="/media/partner/istion-yachting-skradin.jpg" 
                alt="Istion Yachting Basis ACI Marina Skradin" 
                className="w-full rounded-lg shadow-lg"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-3">
                An der Istion-Basis in der ACI Marina Skradin liegen moderne Kats und Yachten wie Perlen im smaragdgrünen Krka-Fluss, eingerahmt von Pinienhängen – mit der markanten Brücke als Kulisse zum Törnstart in die Kornaten.
              </figcaption>
            </figure>
            <p className="text-lg leading-relaxed mb-6">
              2023 schlug Istion ein neues Kapitel außerhalb Griechenlands auf: die Eröffnung der Basis in der ACI Marina Skradin (Šibenik). Das „Grand Opening" markierte den Start eines kontinuierlichen Ausbaus in <Link to="/reviere/mittelmeer/kroatien" className="text-primary hover:underline">Kroatien</Link> – mit schnellen Wegen in die Kornaten und in die dalmatinische Inselwelt.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ob Sie die ruhigen Buchten der Ionischen Inseln erkunden, Kykladen-Distanzen planen oder Kroatiens Nationalparks per One-Way entdecken möchten – Istion und Charter Transparenz stehen gemeinsam für lokale Stärke, transparente Prozesse und eine breite Flottenabdeckung vom sportlichen Monohull bis zum komfortablen Lagoon-Katamaran. Nennen Sie Reisedatum, Crewgröße und Wunschrevier – wir liefern passende Istion-Yachten mit Verfügbarkeit, Ausstattungsdetails und transparentem Gesamtpreis.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Istion Yachting anfragen</h4>
            <p className="text-muted-foreground mb-6">
              Interessiert an einem Charter mit Istion Yachting? Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt Yachtcharter Istion Yachting anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
