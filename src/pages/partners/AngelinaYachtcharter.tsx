import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function AngelinaYachtcharter() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Angelina Yachtcharter - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Angelina Yachtcharter - Premium Yachtcharter mit persönlichem Service. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/angelina-yachtcharter" />
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
                <BreadcrumbPage>Angelina Yachtcharter</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Angelina Yachtcharter</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Professioneller Yachtcharter mit Herz
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
                  src="/media/partner/angelina-yachtcharter.svg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }}
                  alt="Angelina Yachtcharter Logo" 
                  className="object-contain max-h-20 mx-auto"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Regionen</p>
                <p className="font-semibold">Mittelmeer</p>
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
            <h2 className="text-3xl font-bold mb-4">Angelina Yacht Charter Croatia – mit Charter Transparenz zum Traumtörn</h2>
            <p className="text-lg leading-relaxed mb-6">
              Wer die kroatische Adria mit all ihren Inseln, Buchten und glasklaren Ankerplätzen erleben will, kommt an Angelina Yacht Charter kaum vorbei. Seit Mitte der 1990er als Familienunternehmen gestartet, hat sich Angelina zu einer der renommiertesten Charterflotten des Landes entwickelt – mit sorgfältig gewarteten Yachten, aufmerksamen Basisteams und einem Streckennetz, das jede Wunschroute möglich macht.
            </p>
            <h3 className="text-2xl font-bold mb-4">Starke Flotte, große Auswahl</h3>
            <p className="text-lg leading-relaxed mb-6">
              Aktuell umfasst die Flotte rund 370 Yachten – perfekt verteilt auf alle beliebten Bootsklassen: etwa 270 Segelyachten (Monohulls) für sportliche Crews und klassische Segelfans, rund 85 Katamarane für maximale Privatsphäre, Raum und Komfort, sowie ca. 15 Motorboote und Motoryachten für alle, die gerne zügig von Bucht zu Bucht cruisen. Ob Familienurlaub, Freundestrip oder Genießer-Woche zu zweit: Bei dieser Bandbreite findet jede Crew das passende Schiff – von der kompakten 2-Kabinen-Yacht bis zum großzügigen Katamaran mit Watermaker und Generator.
            </p>
            <h3 className="text-2xl font-bold mb-4">Beste Ausgangslagen entlang der Küste</h3>
            <p className="text-lg leading-relaxed mb-6">
              Angelina punktet mit einem dichtem Netz an Ausgangsbasen – ideal, um Anreise und Törnplanung perfekt zu verbinden. Beliebte Startpunkte sind unter anderem Sukošan und Biograd in Norddalmatien, Šibenik/Mandalina, Vodice und Tribunj im Herz der Inselwelt, Trogir und Split für schnelle Wege zu den Klassikern Hvar, Brač und Vis sowie Dubrovnik für den südlichen Adriazauber. Auch in Istrien und der Kvarner Bucht – etwa Pula/Veruda, Pomer, Punat (Krk) oder Mali Lošinj – stehen attraktive Basen bereit. So starten Sie dort, wo Wind, Route und Urlaubsstimmung am besten zusammenpassen.
            </p>
            <h3 className="text-2xl font-bold mb-4">Warum Angelina?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Weil hier Qualität spürbar ist: moderne Ausrüstung, sauber organisierter Check-in/Check-out, zuverlässige Technik und Service-Teams, die auch im Saisontrubel den Überblick behalten. Kurzum: Sie übernehmen eine Yacht, auf die Sie sich verlassen können – und haben im Hintergrund Profis, die helfen, wenn doch einmal etwas klemmt.
            </p>
            <h3 className="text-2xl font-bold mb-4">Und warum über Charter Transparenz buchen?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Weil 30 Jahre Erfahrung den entscheidenden Unterschied machen. Als unabhängige Yachtcharter-Agentur kennen wir die Flotten, Basen und Reviere – und sagen Ihnen ehrlich, welches Schiff an welcher Basis zu welcher Reisezeit wirklich passt. Wir…
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg leading-relaxed">
              <li>filtern aus 370 Angelina-Yachten genau die Modelle, die zu Crewgröße, Kabinenwünschen, Komfortansprüchen und Budget passen,</li>
              <li>beraten zur Route – vom ruhigen Familien-Inselhüpfen bis zum ambitionierten Meilentörn,</li>
              <li>rechnen alle Kosten transparent vor (Kaution, Versicherungsoptionen, Transit-Log, Marina-Gebühren),</li>
              <li>geben Revier-Briefings und Wettertipps für jede Saisonphase,</li>
              <li>und sind im Fall der Fälle Ihr schneller Draht zwischen Crew und Basis.</li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              Mit Angelina bekommen Sie die starke Hardware und ein hervorragendes Basisnetz – mit Charter Transparenz sichern Sie sich die maßgeschneiderte Auswahl, klare Preise und echte Profiberatung. Ergebnis: weniger Überraschungen, mehr Urlaubszeit unter Segeln.
            </p>
            <p className="text-lg leading-relaxed">
              Klingt gut? Dann lassen Sie uns Ihren nächsten Kroatien-Törn gemeinsam planen. Erzählen Sie uns kurz, wann, mit wem und wie Sie segeln möchten – wir kümmern uns um den Rest.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Angelina Yachtcharter anfragen</h4>
            <p className="text-muted-foreground mb-6">
              Interessiert an einem Charter mit Angelina Yachtcharter? Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt Yachtcharter Angelina Yachtcharter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
