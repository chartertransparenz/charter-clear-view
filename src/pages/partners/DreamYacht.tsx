import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function DreamYacht() {
  useEffect(() => { if (typeof window !== 'undefined') window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dream Yacht - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Dream Yacht - Weltweiter Yachtcharter-Anbieter. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/dream-yacht" />
      </Helmet>
      <Navigation />
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">Start</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink href="/yachtcharter-partner">Yachtcharter Partner</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Dream Yacht</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
        </div>
      </div>
      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dream Yacht</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Weltweiter Charter mit Premium-Service</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card><CardContent className="p-6 text-center"><p className="text-sm text-muted-foreground mb-3">Partner</p><img src="/media/partner/dream-yacht.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Dream Yacht Logo" className="object-contain max-h-20 mx-auto" /></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><MapPin className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Regionen</p><p className="font-semibold">Weltweit</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Ship className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Flotte</p><p className="font-semibold">800+ Yachten</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Anchor className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Seit</p><p className="font-semibold">2000</p></CardContent></Card>
          </div>
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4">Dream Yacht Charter – vom Seychellen-Start zum globalen Netzwerk</h2>
            <p className="text-lg leading-relaxed mb-4">Dream Yacht Charter, heute oft als Dream Yacht Worldwide bezeichnet, wurde im Jahr 2000 von Loïc Bonnet mit sechs Booten auf den Seychellen gegründet. Die Idee war von Beginn an ambitioniert: Segeln für mehr Menschen zugänglich zu machen – mit einer großen Auswahl an Reisezielen, Charterformaten und fairen Prozessen von der Buchung bis zur Rückgabe. Aus diesem Startpunkt entwickelte sich in rasantem Tempo ein weltumspannendes Netzwerk mit hunderten Yachten, eigener Infrastruktur und standardisierten Abläufen, die Reisenden Planungssicherheit geben.</p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Wachstum, Flotte und Formate</h3>
            <p className="text-lg leading-relaxed mb-4">Der Ausbau verlief zweigleisig: einerseits durch neue Basen in attraktiven Revieren, andererseits durch einen stetigen Flottenaufbau. Heute reicht das Spektrum vom kompakten Monohull für Paare bis zum komfortorientierten Katamaran für Familien und Freundescrews. Bei den Einrumpfyachten dominieren bekannte Serien von Beneteau, Jeanneau, Dufour, Hanse und Bavaria; bei den Katamaranen sind Lagoon, Fountaine Pajot, Bali und Nautitech weit verbreitet. Neben Bareboat-Charter stehen Skippered und voll besetzte Crewed-Yachten bereit. Ein besonderer Zugang für Einsteiger oder kleine Crews ist das Kabinencharter-Modell: Sie buchen eine Kabine auf einem fest geführten Katamaran und erhalten Route, Skipper, Verpflegungsabläufe und Wohlfühlfaktor aus einer Hand.</p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Reviere und Basen weltweit</h3>
            <p className="text-lg leading-relaxed mb-4">Im Mittelmeer bedient Dream Yacht Charter die klassischen Hotspots Kroatiens, Griechenlands, Italiens, Spaniens und Frankreichs, ergänzt um die Türkei und Montenegro. In der Karibik und den Bahamas warten Routen mit verlässlichen Passatwinden, klaren Ankerplätzen und vielfältigen Inselwelten – von den Britischen Jungferninseln über Martinique bis zu den Exumas. Jenseits des Atlantiks öffnen sich weitere Horizonte: Mexiko und Belize in den Amerikas, Thailand und Französisch-Polynesien im asiatisch-pazifischen Raum sowie die Ursprungsregion im Indischen Ozean rund um die Seychellen. Diese Breite ist der Kernnutzen der Marke: Wer jährlich das Revier wechseln möchte, kann denselben Buchungsstandard in völlig unterschiedlichen Klimazonen und Kulturkreisen nutzen.</p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Warum über Charter Transparenz buchen</h3>
            <p className="text-lg leading-relaxed mb-4">Als Full-Service-Agentur mit drei Jahrzehnten Erfahrung verbinden wir die Größe und Reichweite von Dream Yacht mit präziser, persönlicher Beratung. Statt langer Listen erhalten Sie eine kuratierte Vorauswahl mit genau den Grundrissen, Baujahren und Ausstattungen, die zu Ihrer Crew, Reisezeit und Revieridee passen. Wir kennen die Basen, Check-in-Abläufe, Anreisewege, Park- und Proviantoptionen und sagen Ihnen ehrlich, welches Revier zu Saison und Können harmoniert – ob Balearen im Sommer, BVI im Winter oder Thailand in der Übergangszeit.</p>
            
            <p className="text-lg leading-relaxed mb-4">Vor Abreise klären wir Sonderwünsche verbindlich: Early Check-in, Zusatzsegel wie Gennaker oder Code Zero, SUP-Pakete, Kinder-Netz, Skipper und Hostess. Sie erhalten einen kompakten Check-in-Leitfaden, praxistaugliche Routenideen für eine oder zwei Wochen sowie Hinweise zu Moorings, Nationalpark-Genehmigungen und Wetterfenstern. Während des Törns bleiben wir Ihr zweiter Ansprechpartner neben der Basis, moderieren bei Bedarf und sorgen dafür, dass Lösungen schnell und pragmatisch umgesetzt werden.</p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Jetzt Ihren Segeltörn planen</h3>
            <p className="text-lg leading-relaxed">Dream Yacht Charter steht für weltweite Auswahl, verlässliche Prozesse und flexible Formate vom Bareboat bis zum Kabinencharter. Charter Transparenz macht daraus Ihren maßgeschneiderten Törn: mit ehrlicher Beratung, klaren Preisen, sauberer Organisation und Rückhalt, wenn es darauf ankommt. Teilen Sie uns Reisedatum, Crewgröße und Wunschrevier mit – wir schicken Ihnen passende Dream-Yacht-Vorschläge mit Verfügbarkeit, Ausstattungsdetails und einem transparenten Gesamtpreis.</p>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Dream Yacht anfragen</h4>
            <p className="text-muted-foreground mb-6">Interessiert an einem Charter mit Dream Yacht? Kontaktieren Sie uns für ein individuelles Angebot.</p>
            <CharterRequestForm><Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Jetzt Yachtcharter Dream Yacht anfragen</Button></CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
