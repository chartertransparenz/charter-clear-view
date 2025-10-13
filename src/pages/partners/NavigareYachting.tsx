import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import navigareKatamaranCrew from '@/assets/partners/navigare-yachting-katamaran-crew.jpg';
import navigareEntspannung from '@/assets/partners/navigare-yachting-entspannung.jpg';

export default function NavigareYachting() {
  useEffect(() => { if (typeof window !== 'undefined') window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Navigare Yachting - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Navigare Yachting - Internationaler Yachtcharter-Anbieter. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/navigare-yachting" />
      </Helmet>
      <Navigation />
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">Start</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink href="/yachtcharter-partner">Yachtcharter Partner</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Navigare Yachting</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
        </div>
      </div>
      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Navigare Yachting</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Internationale Charter-Kompetenz</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card><CardContent className="p-6 text-center"><p className="text-sm text-muted-foreground mb-3">Partner</p><img src="/media/partner/navigare-yachting.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Navigare Yachting Logo" className="object-contain max-h-20 mx-auto" /></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><MapPin className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Regionen</p><p className="font-semibold">Weltweit</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Ship className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Flotte</p><p className="font-semibold">350+ Yachten</p></CardContent></Card>
            <Card><CardContent className="p-6 text-center"><Anchor className="w-8 h-8 mx-auto mb-2 text-primary" /><p className="text-sm text-muted-foreground mb-1">Seit</p><p className="font-semibold">2001</p></CardContent></Card>
          </div>
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Navigare Yachting – von der schwedischen Gründung zum internationalen Flottenbetreiber</h2>
            <p className="text-lg leading-relaxed mb-6">Navigare Yachting startete Anfang der 2000er Jahre in Schweden mit einer klaren Idee: Charter sollte verlässlich, planbar und überall nach demselben Qualitätsmaßstab funktionieren. Aus den ersten Basen im Mittelmeer entwickelte sich Schritt für Schritt ein internationales Netzwerk mit professionell organisierten Übergaben, eigener Technik vor Ort und einer Flotte, die vom wendigen Cruiser bis zum großzügigen Katamaran alle gängigen Anforderungen abdeckt. Heute ist Navigare in Europa und Übersee vertreten und gilt als Anbieter, bei dem Prozesse, Service und Flottenpflege messbar im Mittelpunkt stehen.</p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Entstehung und Entwicklung</h3>
            <p className="text-lg leading-relaxed mb-6">Gegründet von den skandinavischen Seglern Jesper Ronngard und Per Abrahamsson, wuchs Navigare zunächst organisch in den Revieren, die viele Crews jährlich ansteuern: Kroatien, Griechenland, Italien und Spanien. Mit jeder Saison kamen Know-how, Basenerfahrung und Modelle hinzu, die in der Praxis funktionieren – saubere Energiepakete, Plotter am Steuerstand, verlässliche Deckshardware und, je nach Yacht, Leichtwindsegel. Parallel wurde das Portfolio um Katamarane erweitert, wodurch Familien und Freundescrews mehr Privatsphäre und Komfort erhalten. Die Marke professionalisierte zugleich die internen Abläufe: straffe Check-ins, klare Ausstattungsprofile, planbare Hilfe im Fall der Fälle. So entstand ein Setup, das in Split/Trogir ebenso funktioniert wie auf den Balearen – und sich auf Fernziele übertragen ließ.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <img 
                src={navigareKatamaranCrew} 
                alt="Navigare Yachting Katamaran Charter - Crew beim Segeln im Sonnenuntergang auf einem modernen Katamaran" 
                title="Unvergessliche Segelerlebnisse mit Navigare Yachting Katamaranen"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <img 
                src={navigareEntspannung} 
                alt="Navigare Yachting Charter - Entspannte Urlauber genießen Wein auf dem Deck einer Segelyacht" 
                title="Luxuriöser Yachtcharter mit Navigare Yachting - Komfort und Erholung pur"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Flotte, Basen und Reviere</h3>
            <p className="text-lg leading-relaxed mb-6">In der Flotte finden sich bewährte Einrumpfserien von Beneteau, Jeanneau, Bavaria, Hanse und Dufour – typischerweise zwischen rund 30 und 50 Fuß. Bei den Katamaranen sind Lagoon, Bali, Fountaine Pajot und Nautitech verbreitet; gängige Größen bewegen sich zwischen etwa 38 und 50 Fuß. Viele Einheiten bieten – je nach Modell – Extras wie Generator, Klimaanlage oder Watermaker. Im Mittelmeer bedient Navigare die entscheidenden Startpunkte: In Kroatien etwa Trogir/Seget und Split für die Inselwelt um Hvar, Vis und die Kornaten; in Griechenland Athen/Lavrion und die Ionischen Inseln für Saronischer Golf, Kykladen und ruhige West-Routen. Ergänzt wird das Netz durch Standorte in Italien, Spanien und der Türkei. Außerhalb Europas öffnet Navigare Karibik und Bahamas für den Winter sowie ausgewählte Fernziele wie Seychellen oder Thailand. Das Ergebnis ist eine geografische Abdeckung, die sowohl den ersten Familientörn als auch anspruchsvollere Routen sinnvoll unterstützt.</p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Warum Navigare über Charter Transparenz buchen</h3>
            <p className="text-lg leading-relaxed mb-6">Als Full-Service-Agentur mit drei Jahrzehnten Beratungserfahrung verzahnen wir die Reichweite von Navigare mit einer passgenauen, ehrlichen Auswahl. Statt langer Listen erhalten Sie eine kuratierte Vorauswahl, die zu Crewgröße, Kabinenplan, Baujahrwunsch und Segelambition passt. Wir kennen die Basen und Abläufe, wissen, welche Modelle in bestimmten Revieren besonders überzeugen, und sagen offen, worauf es zu Ihrer Reisezeit wirklich ankommt – etwa beim Meltemi in Griechenland oder bei Distanzen rund um Hvar/Vis. Sonderwünsche stimmen wir verbindlich ab: Early Check-in, Gennaker oder Code Zero, SUP-Pakete, Kinder-Netz, Skipper oder Hostess, Transfers und Proviant. Vor Abfahrt bekommen Sie einen kompakten Check-in-Leitfaden, praxistaugliche Routenideen für eine oder zwei Wochen sowie Hinweise zu Moorings, Genehmigungen und typischen Wetterfenstern. Während des Törns bleiben wir Ihr zweiter Ansprechpartner neben der Basis; falls etwas hakt, moderieren wir schnell und pragmatisch.</p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Jetzt Segeltörn planen</h3>
            <p className="text-lg leading-relaxed mb-6">Navigare Yachting steht für strukturierte Übergaben, gepflegte Flotten und eine Revierabdeckung, die vom Mittelmeer bis in die Fernziele reicht. Mit Charter Transparenz wird daraus Ihr individuell passender Törn – fachkundig geplant, sauber organisiert und fair kalkuliert. Teilen Sie uns Reisedatum, Crewgröße und Wunschrevier mit: Wir senden Ihnen passende Navigare-Vorschläge mit Verfügbarkeit, Ausstattungsdetails und einem transparenten Gesamtpreis.</p>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Navigare Yachting anfragen</h4>
            <p className="text-muted-foreground mb-6">Interessiert an einem Charter mit Navigare Yachting? Kontaktieren Sie uns für ein individuelles Angebot.</p>
            <CharterRequestForm><Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Jetzt Yachtcharter Navigare Yachting anfragen</Button></CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
