import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Kiriacoulis() {
  useEffect(() => { if (typeof window !== 'undefined') window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kiriacoulis Mediterranean - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Kiriacoulis Mediterranean - Premium Yachtcharter in Griechenland. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/kiriacoulis" />
      </Helmet>
      <Navigation />
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">Start</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink href="/yachtcharter-partner">Yachtcharter Partner</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Kiriacoulis Mediterranean</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
        </div>
      </div>
      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kiriacoulis Mediterranean</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Über 60 Jahre Erfahrung im griechischen Charter</p>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <img 
          src="/media/partner/kiriacoulis_yachting.jpg" 
          alt="Kiriacoulis Yachting - Segelurlaub in Griechenland"
          className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card><CardContent className="p-6 text-center"><p className="text-sm text-muted-foreground mb-3">Partner</p><img src="/media/partner/kiriacoulis.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Kiriacoulis Mediterranean Logo" className="object-contain max-h-20 mx-auto" /></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><MapPin className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Regionen</p><p className="font-semibold">Griechenland</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Ship className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Flotte</p><p className="font-semibold">300+ Yachten</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Anchor className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Seit</p><p className="font-semibold">1986</p></CardContent></Card>
          </div>
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4">Kiriacoulis – griechische Charter-DNA mit großem Mittelmeer-Netz</h2>
            <p className="text-lg leading-relaxed mb-4">Kiriacoulis Mediterranean ist einer der traditionsreichsten Charteranbieter Griechenlands – entstanden aus einer griechischen Familienunternehmung, die früh verstand, dass gepflegte Yachten, verlässliche Abläufe und ein dichtes Netz an Basen den Unterschied machen. Von Athen und Lavrion aus wuchs das Unternehmen Schritt für Schritt in die wichtigsten Reviere des Landes und später in weitere Mittelmeerregionen. Heute steht der Name Kiriacoulis für eine breite Präsenz, solide Technik und eine Charterkultur, die Seglerinnen und Seglern planbare, stressarme Törns ermöglicht.</p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Die Kiriacoulis Flotte</h3>
            <p className="text-lg leading-relaxed mb-4">In der Flotte finden sich bewährte Einrumpfserien von Beneteau, Jeanneau, Dufour, Bavaria und Hanse – vom wendigen 30–34-Fuß-Cruiser für Paare und kleine Crews bis zu familien- und performanceorientierten Yachten im Bereich 40–50 Fuß. Wer mehr Raum und Komfort sucht, wählt einen Katamaran von Lagoon, Bali, Fountaine Pajot oder Nautitech, typischerweise zwischen 38 und 50 Fuß mit großzügigem Salon-Cockpit-Fluss und – je nach Einheit – Ausstattungen wie Generator, Klimaanlage und Watermaker. Neben Bareboat sind Skippered- und auf Wunsch Crewed-Setups möglich; viele Boote lassen sich mit Leichtwindsegeln, SUPs und weiteren Extras konfigurieren.</p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Basen und Reviere</h3>
            <p className="text-lg leading-relaxed mb-4">Der Kern von Kiriacoulis liegt in Griechenland. Von Athen/Alimos und Lavrion starten Sie in den Saronischen Golf und die Kykladen, ab Lefkas und Korfu erschließen sich die ruhigen Gewässer des Ionischen Meers, während Kos und Rhodos die Dodekanes öffnen. Ergänzend unterhält Kiriacoulis seit Jahren Basen in weiteren Mittelmeer-Ländern, darunter Kroatien, Italien, Malta und Montenegro. Diese Breite erlaubt flexible Routenentscheidungen: kurze Familienetappen im Westen, meltemige Sprünge über die Kykladen, Inselhüpfen mit Kulturprogramm oder zwei Wochen mit Revierwechsel – jeweils mit demselben organisatorischen Standard.</p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Wartung, Übergaben und Verlässlichkeit</h3>
            <p className="text-lg leading-relaxed mb-4">Kiriacoulis setzt seit jeher auf robuste Prozesse entlang der gesamten Charterkette. Winterarbeiten und planmäßige Inspektionen sorgen dafür, dass die Boote zum Saisonstart technisch auf Stand sind. Die Übergaben sind straff organisiert und auf die Besonderheiten der jeweiligen Marina abgestimmt, von Anfahrt und Parken bis zu Proviant- und Tankgewohnheiten. Für viele Crews ist das der Schlüssel zu einem entspannten ersten Hafentag: klare Abläufe, gut erreichbare Technikteams und verlässliche Ansprechpartner vor Ort.</p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Warum Kiriacoulis über Charter Transparenz buchen</h3>
            <p className="text-lg leading-relaxed mb-4">Charter Transparenz arbeitet seit 1997 mit Kiriacoulis zusammen. Diese lange Partnerschaft zahlt direkt auf Ihr Erlebnis ein: Wir kennen die Basen, die Teams und die kleinen Details, die man nicht im Katalog findet – etwa typische Check-in-Fenster, sinnvolle Routenvarianten für die jeweilige Jahreszeit oder die Modelle, die sich in bestimmten Revieren besonders bewährt haben. Auf Basis Ihres Crewprofils und Ihres Reiseziels filtern wir die Flotte auf eine kurze, ehrliche Vorauswahl mit passenden Grundrissen, Baujahren und Ausstattungen. Sonderwünsche wie Early Check-in, Zusatzsegel, Kinder-Netz, SUP-Pakete, Skipper oder Hostess klären wir vorab verbindlich, damit an der Pier keine Überraschungen entstehen.</p>
            
            <p className="text-lg leading-relaxed mb-4">Vor Abreise erhalten Sie von uns einen kompakten Check-in-Leitfaden, praxisnahe Routenideen für eine oder zwei Wochen und Hinweise zu Liegeplätzen, Genehmigungen und Wetterfenstern. Während des Törns bleiben wir Ihr zweiter Ansprechpartner neben der Basis: Wenn etwas hakt, moderieren wir, übersetzen und sorgen dafür, dass Lösungen schnell und pragmatisch umgesetzt werden. So verbinden Sie die Reichweite und Prozesssicherheit von Kiriacoulis mit der individuellen Betreuung einer Full-Service-Agentur.</p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Jetzt Ihren Törn mit Charter Transparenz buchen</h3>
            <p className="text-lg leading-relaxed mb-4">Kiriacoulis steht für griechische Charter-Tradition, große Revierauswahl und verlässliche Abläufe – von der Buchung bis zur Rückgabe. Mit Charter Transparenz an Ihrer Seite wird daraus Ihr maßgeschneiderter Törn: klar beraten, sauber organisiert und mit Rückhalt, wenn es darauf ankommt. Teilen Sie uns Reisedatum, Crewgröße und Wunschrevier mit – wir senden Ihnen passende Kiriacoulis-Vorschläge mit Verfügbarkeit, Ausstattungsdetails und einem transparenten Gesamtpreis.</p>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Kiriacoulis Mediterranean anfragen</h4>
            <p className="text-muted-foreground mb-6">Interessiert an einem Charter mit Kiriacoulis Mediterranean? Kontaktieren Sie uns für ein individuelles Angebot.</p>
            <CharterRequestForm><Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Jetzt Yachtcharter Kiriacoulis Mediterranean anfragen</Button></CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
