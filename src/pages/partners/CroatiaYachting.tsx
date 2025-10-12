import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function CroatiaYachting() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Croatia Yachting - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Croatia Yachting - Spezialist für Yachtcharter in Kroatien. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/croatia-yachting" />
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
                <BreadcrumbPage>Croatia Yachting</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Croatia Yachting</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Kroatiens Küste perfekt erkunden
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
                  src="/media/partner/croatia-yachting.svg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }}
                  alt="Croatia Yachting Logo" 
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
                <p className="font-semibold">160+ Yachten</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Anchor className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Seit</p>
                <p className="font-semibold">2004</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Croatia Yachting – professionell gemanagt, serviceorientiert, strategisch gut verteilt</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Croatia Yachting wurde 2004 gegründet – mit dem klaren Anspruch, die Attraktivität der dalmatinischen Küste mit einer professionell gemanagten, serviceorientierten Flotte zu verbinden. Aus diesem Ansatz ist einer der bekanntesten kroatischen Charteranbieter entstanden: modern organisiert, mit klaren Prozessen von der Anfrage bis zur Rückgabe und einem Team, das Land, Leute und Liegeplätze seit Jahren aus dem Effeff kennt. Die Flotte ist in den letzten Jahren dynamisch gewachsen und umfasst heute über 170 Yachten – eine komfortable Größenordnung, die Verfügbarkeit in gefragten Wochen sichert und zugleich eine sorgfältige technische Betreuung ermöglicht.
            </p>

            <h3 className="text-2xl font-bold mb-4">Basen & Revier</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die Basen sind strategisch entlang der Adria verteilt, sodass Sie ohne Umwege in die Inselwelt starten: Seget/Marina Baotić (bei Trogir) und Marina Kaštela erschließen Split und Mitteldalmatien, D-Marin Dalmacija (Sukošan) und die Marinas in Biograd und Šibenik/Mandalina sind perfekte Tore zu den Kornaten, während die Basis in der ACI Marina Komolac (Dubrovnik) den Süden abdeckt. Diese Dichte macht Routenplanungen flexibel – ob entspannter Familien-Törn, Fotopunkte in Nationalparks oder sportlichere Etappen über Hvar und Vis.
            </p>

            <h3 className="text-2xl font-bold mb-4">Flotte & Ausstattung</h3>
            <p className="text-lg leading-relaxed mb-6">
              Bei den Einrumpfyachten dominieren bewährte Serien von Bavaria, Beneteau, Jeanneau, Dufour, Hanse und Elan: vom kompakten 3-Kabinen-Cruiser um 30–34 Fuß (ideal für Paare und kleine Crews) bis zu familien- und performanceorientierten 45–50-Fuß-Yachten mit Bugstrahlruder, Plotter am Steuerstand und optionalen Leichtwindsegeln. Wer mehr Volumen, Privatsphäre und Komfort wünscht, greift zu Katamaranen von Lagoon, Bali, Fountaine Pajot oder Nautitech. Typische Grundrisse bieten vier gleichwertige Kabinen, große Pantry-Salons und – je nach Modell – Extras wie Generator, Klimaanlage und Watermaker. Viele Einheiten sind wahlweise bareboat oder mit Skipper buchbar; auf Wunsch ergänzt eine Hostess oder ein Koch das Setup.
            </p>

            <h3 className="text-2xl font-bold mb-4">Warum Croatia Yachting über Charter Transparenz buchen?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Weil Sie mit uns die Erfahrung aus 30 Jahren Beratung und einen direkten Draht zu den Teams vor Ort kombinieren. Wir kennen die Abläufe in der Charterbranche genau, haben Tipps zur Anfahrt, Park- und Proviantoptionen – und gleichen Ihre Wünsche (Kabinenplan, Baujahr, Ausstattungsdetails, Kinder an Bord, Skipperbedarf, sportliche Ambition) mit konkreten Yachtempfehlungen aus genau dieser Flotte ab. Statt generischer Listen erhalten Sie eine kurze, ehrliche Auswahl, die zu Crew und Revierplan passt – inklusive Hinweis, welche Grundrisse sich in welcher Woche bewährt haben, und welche Optionen (z. B. Gennaker, SUPs, früher Check-in) sich wirklich lohnen.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Auch nach der Buchung bleiben wir an Ihrer Seite: mit Routenideen zwischen Kornaten und Hvar/Vis, Tipps zu Bojenfeldern und Konobas Wetterfenster-Briefings und kleinen Praxisdetails, die den ersten Hafentag entspannen. Unser Ziel ist, dass Sie die erste Meile mit Vorfreude statt Fragezeichen segeln – und am Ende genau die Erfahrung mitnehmen, die Sie sich vorgestellt haben.
            </p>

            <p className="text-lg leading-relaxed font-semibold">
              Kurz: Mit Croatia Yachting wählen Sie eine große, gut betreute Flotte an erstklassigen Startpunkten der Adria. Mit Charter Transparenz sichern Sie sich die maßgeschneiderte Auswahl, faire Konditionen und eine verlässliche Abwicklung von der Anfrage bis zur Rückgabe. Sagen Sie uns Reisedatum, Crewgröße und Wunschroute – wir senden Ihnen umgehend passende Angebote aus der Croatia-Yachting-Flotte mit Verfügbarkeit, Ausstattungsdetails und transparentem Gesamtpreis.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Croatia Yachting anfragen</h4>
            <p className="text-muted-foreground mb-6">
              Interessiert an einem Charter mit Croatia Yachting? Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt Yachtcharter Croatia Yachting anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
