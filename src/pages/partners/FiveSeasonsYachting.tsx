import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function FiveSeasonsYachting() {
  useEffect(() => { if (typeof window !== 'undefined') window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Five Seasons Yachting - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Five Seasons Yachting - Professioneller Yachtcharter. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/five-seasons-yachting" />
      </Helmet>
      <Navigation />
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">Start</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink href="/yachtcharter-partner">Yachtcharter Partner</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Five Seasons Yachting</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
        </div>
      </div>
      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Five Seasons Yachting</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Qualität und Service seit Jahren</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card><CardContent className="p-6 text-center"><p className="text-sm text-muted-foreground mb-3">Partner</p><img src="/media/partner/five-seasons-yachting.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Five Seasons Yachting Logo" className="object-contain max-h-20 mx-auto" /></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><MapPin className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Regionen</p><p className="font-semibold">Mittelmeer & Karibik</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Ship className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Flotte</p><p className="font-semibold">100+ Yachten</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Anchor className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Seit</p><p className="font-semibold">2016</p></CardContent></Card>
          </div>
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Five Seasons Yachting – starke Flotte, starke Reviere</h2>
            <p className="text-lg leading-relaxed mb-6">
              Five Seasons Yachting ist eine der größeren inhabergeführten Charterflotten in Europa und der Karibik mit über 100 modernen Segelyachten und Katamaranen. In der Flotte finden sich vor allem komfortable Monohulls und Kats namhafter Werften wie Jeanneau, Beneteau, Hanse, Bavaria, Lagoon oder Fountaine Pajot – ideal für Familien, Crews und Fahrtensegler.
            </p>
            <p className="text-lg font-semibold mb-3">Die Yachten liegen an sorgfältig ausgewählten Stützpunkten in Top-Revieren:</p>
            <ul className="space-y-2 mb-6 list-disc pl-6">
              <li className="text-base leading-relaxed"><strong>Kroatien:</strong> Trogir & Skradin – perfekter Einstieg in Dalmatien und die Kornaten</li>
              <li className="text-base leading-relaxed"><strong>Griechenland (Ionisches Meer):</strong> Korfu / Marina Gouvia – entspanntes Inselhüpfen</li>
              <li className="text-base leading-relaxed"><strong>Spanien / Balearen:</strong> Palma de Mallorca & Portocolom, dazu Ibiza – kurze Schläge, Traumbuchten und viel Infrastruktur</li>
              <li className="text-base leading-relaxed"><strong>Kanarische Inseln:</strong> Teneriffa – für atlantische Törns mit mehr Wind</li>
              <li className="text-base leading-relaxed"><strong>Karibik:</strong> Basen z. B. in Grenada bzw. Martinique für exotische Wintertörns</li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              Five Seasons Yachting steht für professionell gewartete, sauber übergebene Yachten und wurde für seine Servicequalität bereits ausgezeichnet.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Über Charter Transparenz buchen Sie die Yachten von Five Seasons Yachting mit einem Plus an Sicherheit:</strong>
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Wir vergleichen für Sie die verfügbaren Schiffe und Stützpunkte, erklären alle Kosten verständlich und transparent und finden die Yacht, die wirklich zu Ihrer Crew passt.
            </p>
            <p className="text-lg leading-relaxed font-medium">
              👉 Jetzt unverbindliche Anfrage senden und Ihren Segeltraum mit Five Seasons Yachting und Charter Transparenz planen.
            </p>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Five Seasons Yachting anfragen</h4>
            <p className="text-muted-foreground mb-6">Interessiert an einem Charter mit Five Seasons Yachting? Kontaktieren Sie uns für ein individuelles Angebot.</p>
            <CharterRequestForm><Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Jetzt Yachtcharter Five Seasons Yachting anfragen</Button></CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
