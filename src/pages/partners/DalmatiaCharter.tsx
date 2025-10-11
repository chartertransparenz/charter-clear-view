import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function DalmatiaCharter() {
  useEffect(() => { if (typeof window !== 'undefined') window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dalmatia Charter - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Dalmatia Charter - Kroatien-Spezialist für Yachtcharter. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/dalmatia-charter/" />
      </Helmet>
      <Navigation />
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">Start</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink href="/yachtcharter-partner/">Yachtcharter Partner</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Dalmatia Charter</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
        </div>
      </div>
      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dalmatia Charter</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Die Adria authentisch erleben</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card><CardContent className="p-6 text-center"><p className="text-sm text-muted-foreground mb-3">Partner</p><img src="/media/partner/dalmatia-charter.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Dalmatia Charter Logo" className="object-contain max-h-20 mx-auto" /></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><MapPin className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Regionen</p><p className="font-semibold">Kroatien</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Ship className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Flotte</p><p className="font-semibold">25+ Yachten</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Anchor className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Seit</p><p className="font-semibold">1992</p></CardContent></Card>
          </div>
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Dalmatia Charter – persönlich geführt von Ivica Buble</h2>
            <p className="text-lg leading-relaxed mb-6">Dalmatia Charter steht für Charter mit Herz und Handschlagqualität. Inhaber Ivica Buble führt das Unternehmen persönlich – von der ersten Anfrage bis zur Rückkehr an den Steg. Diese Inhaberführung prägt das familiäre Umfeld, kurze Entscheidungswege und einen hohen Servicelevel an Bord wie an Land. Jede Yacht wird sorgfältig vorbereitet, Sonderwünsche werden pragmatisch und schnell gelöst.</p>
            
            <h3 className="text-2xl font-bold mb-4">Basen & Revier</h3>
            <p className="text-lg leading-relaxed mb-6">Sie starten wahlweise ab ACI Marina Trogir (bei Split) oder Marina Kremik/Primošten. Von Trogir aus erreichen Sie Hvar, Brač, Vis und Šolta bequem; Kremik öffnet Ihnen den direkten Weg in die Kornaten und nach Norddalmatien. Beide Basen sind ideal gelegen, mit guter Anbindung und kurzen Wegen zu den Highlights der Adria.</p>
            
            <h3 className="text-2xl font-bold mb-4">Flotte</h3>
            <p className="text-lg leading-relaxed mb-6">Die kompakte, gepflegte Flotte umfasst rund 25 Segelyachten (Monohulls) verteilt auf zwei Basen. Der bewusst überschaubare Umfang ermöglicht persönliche Betreuung statt Massenabfertigung – vom Check-in bis zur Übergabe.</p>
            
            <h3 className="text-2xl font-bold mb-4">Qualität & Service</h3>
            <p className="text-lg leading-relaxed mb-6">Wartung, Übergabe und Revierbriefing erfolgen durch das eingespielte Stammteam um Ivica Buble. Ergebnis sind zuverlässige Technik, saubere Yachten und transparente Abläufe. In Gästebewertungen wird regelmäßig die konstante Bootsqualität, die freundliche Betreuung sowie die lösungsorientierte Kommunikation hervorgehoben.</p>
            
            <h3 className="text-2xl font-bold mb-4">Sinnvolle Extras</h3>
            <p className="text-lg leading-relaxed mb-6">Viele Yachten sind mit Solarmodulen, WLAN an Bord und 12/220-V-Invertern ausgestattet – praktisch für komfortables, energieeffizientes Cruisen.</p>
            
            <h3 className="text-2xl font-bold mb-4">Warum Dalmatia Charter?</h3>
            <ul className="list-disc list-inside space-y-3 text-lg mb-6">
              <li><strong>Inhaberführung:</strong> Direkter Draht zu Ivica Buble – persönlich, verbindlich, schnell.</li>
              <li><strong>Familiäres Umfeld:</strong> Sie sind Gast, nicht Nummer – an Land wie an Bord.</li>
              <li><strong>Hoher Servicelevel:</strong> Top-gepflegte Yachten, klare Prozesse, zuverlässige Übergaben.</li>
              <li><strong>Beste Lage:</strong> Trogir und Kremik als ideale Startpunkte für Süd- und Norddalmatien.</li>
              <li><strong>Komfort an Bord:</strong> Sinnvolle Ausstattung für entspannte Törns.</li>
            </ul>
            
            <p className="text-lg leading-relaxed font-semibold">Fazit: Wenn Sie persönliche Betreuung, familiäre Atmosphäre und hohe Servicequalität schätzen, ist Dalmatia Charter die richtige Wahl – mit zwei starken Basen in Mitteldalmatien und einer sorgfältig gewarteten Flotte für entspannte, sichere Segelerlebnisse.</p>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Dalmatia Charter anfragen</h4>
            <p className="text-muted-foreground mb-6">Interessiert an einem Charter mit Dalmatia Charter? Kontaktieren Sie uns für ein individuelles Angebot.</p>
            <CharterRequestForm><Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Jetzt Yachtcharter Dalmatia Charter anfragen</Button></CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
