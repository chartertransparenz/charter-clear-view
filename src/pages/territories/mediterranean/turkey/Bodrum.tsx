import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";

const Bodrum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: MapPin,
      label: "Lage",
      value: "Türkische Ägäis, Südwestküste"
    },
    {
      icon: Calendar,
      label: "Beste Zeit",
      value: "Mai-Oktober"
    },
    {
      icon: Users,
      label: "Geeignet für",
      value: "Alle Erfahrungsstufen"
    },
    {
      icon: Star,
      label: "Besonderheit",
      value: "Antike Stätten & Nightlife"
    }
  ];

  const highlights = [
    "Gökova-Golf mit geschützten Ankerbuchten",
    "Antike Doppelbucht von Knidos",
    "Milta Bodrum Marina mit erstklassiger Infrastruktur",
    "Traditionelles Ankern mit Heckleinen an Land",
    "Kleopatra-Insel (Sedir Adası) mit hellen Sanden",
    "Restaurantstege mit Lazy Lines und Services",
    "Optional: Dodekanes-Inseln in Reichweite",
    "Piniengesäumte Buchten wie Longoz und English Harbour"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/lovable-uploads/e19f0a81-a9e7-495b-892e-5071c5ed57ba.png')",
            filter: "brightness(0.7)"
          }} 
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <Link 
              to="/reviere/mittelmeer/tuerkei" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Türkei
            </Link>
          </div>
          <Badge variant="outline" className="mb-4 border-white/30 text-white">
            Türkische Ägäis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bodrum</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Antike Hafenstadt mit türkisblauen Buchten und lebendiger Yachtszene
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere">Reviere</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere/mittelmeer">Mittelmeer</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere/mittelmeer/tuerkei">Türkei</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Bodrum</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Quick Facts */}
        <div className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => {
              const IconComponent = fact.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      {fact.label}
                    </p>
                    <p className="font-bold">{fact.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Bodrum – Ihr Törn an der Karischen Küste (Türkische Ägäis)</h2>
            <p className="text-xl text-muted-foreground">
              Antike Geschichte trifft auf moderne Yachtkultur
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Bodrum ist mehr als nur ein Postkartenmotiv mit weiß getünchten Häusern und der Silhouette der Johanniterburg. Die Stadt ist einer der traditionsreichsten und vielseitigsten Ausgangspunkte für Yachtcharter an der Türkischen Ägäis – ein maritimes Drehkreuz, das die Karische Küste mit zwei legendären Segelwelten verbindet: dem Gökova-Golf östlich der Halbinsel und der weiten Bühne rund um Knidos und Datça im Westen. Wer hier ablegt, entdeckt eine Küstenlandschaft aus piniengrünen Hängen, tief eingeschnittenen Buchten mit kristallklarem Wasser, geschützten Ankerbuchten und einem dichten Netz an Restaurantstegen, die das Anlegen so unkompliziert machen, wie es nur an wenigen Mittelmeerküsten der Fall ist.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Yachtcharter Bodrum steht für Vielfalt: Vormittags segelt der Skipper entlang schroffer Kaps, nachmittags gleitet die Yacht mit thermischer Brise in eine ruhige Bucht, und abends liegt sie an der Muring am Kai einer Taverne – mit dem Duft von Pinien in der Luft und dem Blick auf eine Ruine aus lykisch-hellenistischer Zeit. Ob Segelyacht Bodrum, Katamaran mieten Türkei oder Gulet-Charter: Die Region kombiniert verlässliche Winde, kurze bis mittlere Etappen und eine maritime Infrastruktur, die vom Einsteiger bis zur ambitionierten Crew jeden Anspruch bedient.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Erreichbarkeit</h4>
              <p className="text-black mb-3">
                Die komfortabelste Anreise erfolgt über den Flughafen Milas–Bodrum (BJV). Je nach Liegeplatz erreichen Sie die Marinas in Bodrum-Stadt, Yalıkavak oder Turgutreis in ungefähr dreißig bis sechzig Minuten. Alternativ bieten sich Izmir (ADB) im Norden und Dalaman (DLM) im Osten an, wenn die Flugzeiten günstiger sind oder Sie eine Rundreise planen. Wer mit dem PKW aus Europa anreist, wählt entweder den Transit über den Balkan oder kombiniert Fähren nach Italien/Griechenland mit dem anschließenden Landweg. In den Häfen stehen Parkplätze, Shuttle- und Privattransfers bereit. Große Supermärkte liefern den Proviant auf Wunsch bis an den Steg, sodass der Bareboat-Törn in der Türkei ohne Logistikstress beginnt.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Besonderheiten des Reviers</h3>
            <p className="text-lg leading-relaxed mb-6">
              Bodrum liegt strategisch zwischen zwei markanten Segelarenen. Der Gökova-Golf zur Rechten ist das klassische „Genussrevier" mit zahllosen Einschnitten, Sand- und Schlickböden mit gutem Halt und Ankerplätzen, die schon am frühen Nachmittag zum Baden und Schnorcheln einladen. Namen wie Kissebükü, Çökertme, Akbük, Yedi Adalar (Sieben Inseln), Longoz, Değirmenbükü, English Harbour und die Kleopatra-Insel (Sedir Adası) gehören zu den festen Größen jeder Bordbibliothek. Auf der Westseite führt der Kurs über Orak Adası und Karaada in Richtung Datça und weiter zur antiken Doppelbucht von Knidos. Hier wird das Segeln an der Türkischen Ägäis eine Spur sportlicher, denn Kaps und Düsenzonen können den Wind spürbar beschleunigen – mit dem Lohn unvergesslicher Panoramen im Abendlicht.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Charakteristisch ist das Ankern mit Heckleinen an Land. In schmaleren Calas fährt das Beiboot eine oder zwei Landleinen an Felsösen oder um robuste Pinien, während die Yacht auf Sand- oder Schlickgrund sicher hält. Das reduziert das Schwojen, schafft Platz und sorgt für ruhige Nächte. In vielen Buchten finden sich Bojenfelder, und entlang der Küste betreiben Tavernen Restaurantstege mit Lazy Lines, Strom, Wasser und oft auch Duschen. So wird das Anlegen zu einem entspannten Teil des Törntages.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Landschaftlich und kulturell bietet Bodrum eine seltene Dichte an Highlights. Die Insel Orak lockt mit glasklarem Wasser, Sedir/Kleopatra mit feinem, hellen Sand und Ausgrabungen, Knidos mit Theatern, Säulen und dem berühmten Leuchtturmkamm. Wer einen Tag an Land einplant, spaziert durch die Gassen der Altstadt von Bodrum, besucht das Unterwassermuseum in der Burg – und verliert sich danach wieder in der stillen Geometrie einer einsamen Ankerbucht.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Vorschriften und Regeln – praxisnah erklärt</h4>
              <p className="text-black mb-3">
                Für jede Charteryacht ist der Transit Log Türkei obligatorisch. Das Cruising Permit wird beim Check-in durch die Charterbasis vorbereitet und enthält Angaben zu Yacht, Crew und geplanter Route. Crewwechsel werden eingetragen. Die Übergabe verläuft in Bodrum strukturiert und effizient: Sicherheits- und Revierbriefing, Sichtprüfung der Ausrüstung, Kontrolle der Papiere. Beim Check-out gehören Fuel-Dock und Pump-Out zum Standardprogramm; in der Hochsaison empfiehlt es sich, diese Manöver auf die ruhigeren Stunden zu legen.
              </p>
              <p className="text-black mb-3">
                Der Küstenschutz spielt eine zentrale Rolle. In Schutzgebieten – etwa in Teilen des Gökova-Golfs – sind Ankerbeschränkungen und Bojenpflicht möglich, außerdem Mindestabstände zum Ufer und zu Badezonen. Das Einleiten von Schwarzwasser und – je nach Zone – Grauwasser ist verboten. Die Entsorgung erfolgt in den Marinas oder über Serviceboote; der Mavi-Kart-Nachweis (Blue Card) bzw. ein entsprechender Beleg dokumentiert die Pump-Out-Vorgänge. Wer die Route vorausschauend plant, verbindet Proviantaufnahme, Diesel und Abwasserentsorgung mit einem Hafenstopp, um lange Wartezeiten zu vermeiden.
              </p>
              <p className="text-black">
                In Buchten gilt Langsamfahrt, Badebereiche sind freizuhalten, und übermäßige Wellenbildung ist zu vermeiden. VHF-Funk sollte betriebsbereit sein; Marinas und Restaurantstege arbeiten auf festen Kanälen. Nachtfahrten sind in vielen Charterverträgen nicht vorgesehen. Selbst wenn sie zulässig wären, empfiehlt sich im Inselschutz des Gökova-Golfs und entlang der Kaps das sichere Tageslichtfenster. Abstecher in griechische Gewässer – etwa nach Kos, Kalymnos oder Leros – sind nur nach vorheriger Absprache mit der Charterbasis und mit vollständigem Einklarieren möglich.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Das Ankern mit Landleinen folgt einer klaren Routine. Zunächst fällt der Anker auf Sand- oder Schlickgrund, die Kette wird ausreichend gesteckt und der Halt mit ruhiger Rückwärtsfahrt geprüft. Anschließend fährt das Dinghi die Heckleinen an Land, die mit Scheuerschutz versehen und in einem sauberen Winkel belegt werden. Wenn die Yacht ausgerichtet ist, nimmt der Skipper wieder leicht Vorlauf auf die Kette, spannt die Heckleinen nach und aktiviert den Ankeralarm. So liegt die Yacht stabil, und die Crew genießt den Abend ohne Schwojen.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Segelscheine und Qualifikationen</h4>
              <p className="text-black">
                Für Bareboat Türkei akzeptieren die Vercharterer in der Regel den ICC (International Certificate of Competence) oder eine vergleichbare nationale Lizenz wie SBF See in Kombination mit SKS beziehungsweise ein äquivalentes Zertifikat. Ein VHF-Funkzeugnis (zum Beispiel SRC) ist empfohlen und wird von vielen Flotten verlangt. Gäste ohne Schein wählen Skippered Charter mit Berufsskipper oder entscheiden sich für eine Crewed-Yacht, bei der neben dem Skipper häufig eine Hostess oder ein Koch für zusätzlichen Komfort sorgt. Beide Optionen sind in Bodrum weit verbreitet und eignen sich besonders für Ersttörns, Gruppenreisen oder Familien, die maximale Entspannung wünschen.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Für wen ist das Revier geeignet – und warum?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Bodrum ist ein Revier für alle Erfahrungsstufen, und der Schwierigkeitsgrad lässt sich über die Routenwahl dosieren. Einsteiger und Familien profitieren vom planbaren Tagesrhythmus im Gökova-Golf: kurze bis mittlere Etappen, viele geschützte Ankerplätze, ruhige Nächte und eine hervorragende Infrastruktur. Genusssegler schätzen die Abwechslung aus Segeln, Baden, Schnorcheln und dem abendlichen Festmachen am Restaurantsteg – inklusive Blick auf antike Mauern oder in die Weite einer piniengerahmten Bucht. Ambitionierte Crews setzen Kurs auf die Kapstrecken Richtung Datça und Knidos, wo die Türkische Ägäis ihre sportliche Seite zeigt. Wer die vertraglichen Voraussetzungen erfüllt und sauber einklariert, erweitert den Aktionsradius auf die nahe Dodekanes mit Kos, Kalymnos, Leros oder sogar Patmos – ein Bonus, der Yachtcharter Bodrum besonders vielseitig macht.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Marinas und Versorgung in Bodrum und Umgebung</h4>
              <p className="text-black mb-4">
                In Bodrum und auf der Halbinsel finden sich einige der bestausgestatteten Yachthäfen der Türkischen Ägäis. Die Milta Bodrum Marina (oft einfach Bodrum Marina genannt) liegt in Stadtnähe und überzeugt mit modernen Steganlagen, Wasser, Strom, Diesel, Pump-Out, Chandlery und Technik. Wer das urbane Leben liebt, ist hier richtig: Der Basar, Restaurants und Cafés liegen in Laufweite, und die Wege für Proviant und Ersatzteile sind kurz.
              </p>
              <p className="text-black mb-4">
                Weiter im Nordwesten empfängt die Yalıkavak Marina anspruchsvolle Crews mit großem Platzangebot, Premiumservice und einer direkten Anbindung an die Annehmlichkeiten des Ortes. Sie ist auch für größere Yachten ausgelegt und bietet alle relevanten Services von Technik bis Gastronomie. Auf der Südwestseite der Halbinsel liegt D-Marin Turgutreis – ein hervorragender Absprung in Richtung Kos und die Westküste. Wer nördlich der Halbinsel plant, findet mit D-Marin Didim und Güllük zusätzliche Alternativen, um eine längere Route entspannt zu strukturieren.
              </p>
              <p className="text-black">
                Die Versorgung ist unkompliziert. Große Supermärkte und Feinkostläden liefern den Einkauf bis an den Steg, Märkte in Bodrum, Turgutreis oder Yalıkavak bieten frisches Obst, Gemüse und regionale Produkte. Taxi-Boote und Shuttles verbinden je nach Standort Stadt, Marinas und Ankerbuchten. Chandlery und Werkstätten sind breit aufgestellt, sodass selbst spezielle Wünsche meist zeitnah erfüllt werden können. So bleibt die Crew frei für das Wesentliche: Segeln, Ankern, Genießen.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnziele ab Bodrum</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Der Gökova-Golf – genussvolles Insel- und Buchtenhüpfen</h4>
            <p className="mb-6">
              Der klassische Einsteiger- und Genusskurs führt von Bodrum ostwärts in den Gökova-Golf. Nach einem ersten Badestopp an Orak Adası zieht die Yacht weiter nach Kissebükü, wo die Ankerbedingungen auf Sand hervorragend sind und die Landschaft mit antiken Resten am Ufer überrascht. Von hier geht es nach Çökertme und weiter in den inneren Golf mit Akbük, Yedi Adalar und Longoz, einer Bucht, in der die Pinien bis ans Wasser reichen. English Harbour und Değirmenbükü sind weitere Favoriten, bevor die Route über die Kleopatra-Insel (Sedir Adası) – mit hellen Sanden und Ruinen – langsam wieder westwärts dreht. In fast allen Buchten finden sich Restaurantstege oder gut haltender Grund; das Ankern mit Landleinen sorgt für sicheren Stand und ruhige Nächte.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Westkurs nach Datça und Knidos – mehr Horizont, mehr Geschichte</h4>
            <p className="mb-6">
              Wer den Kurs auf die Westseite legt, segelt an Karaada vorbei Richtung Datça und setzt dann zum Sprung nach Knidos an der Westspitze der Halbinsel an. Hier öffnet sich eine spektakuläre Doppelbucht, über der sich die Reste der antiken Stadt terrassenförmig den Hang hinaufziehen. Die Ankerbucht ist bei passender Windrichtung ein Erlebnis; bei auflandiger Brise lohnt ein früheres Eintreffen für die ruhigste Lage. Auf dem Rückweg bieten Ortschaften wie Palamutbükü oder Kurubük schöne Zwischenstopps, bevor die Yacht wieder in die vertrauten, geschützten Buchten des Gökova-Golfs oder der Nordküste der Halbinsel zurückkehrt.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Optionale internationale Ziele – Dodekanes in Sichtweite</h4>
            <p className="mb-6">
              Kos liegt quasi vor der Haustür, Kalymnos und Leros sind in Reichweite. Wer diesen Bonus nutzen möchte, klärt vorab, ob der Chartervertrag Ausreisen erlaubt, und plant das Einklarieren sorgfältig. Mit sauberer Formalität wird der Törn zu einer kleinen Ägäis-Expedition – ein Erlebnis, das Yachtcharter Bodrum eine zusätzliche Dimension gibt.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnidee: Bodrum, Gökova & Knidos</h3>
            <p className="mb-4 font-medium">Ziel: Viel Segelzeit in der typischen Ägäis-Brise, ruhige Nächte in geschützten Ankerbuchten und entspannte Stopps an Restaurantstegen. Der Plan ist familientauglich – lässt sich aber durch längere Schläge über Datça/Knidos oder einen optionalen Dodekanes-Abstecher sportlich erweitern.</p>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Eine Woche – Gökova-Rundkurs (komfortorientiert)</h4>
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Bodrum → Orak Adası</h5>
                <p className="text-sm text-muted-foreground">kurzer Einstiegsschlag, Badestopp und erste Nacht im Ankerplatz.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Orak Adası → Kissebükü</h5>
                <p className="text-sm text-muted-foreground">sicherer Sandgrund und ruhiger Abend unter Sternen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Kissebükü → Çökertme</h5>
                <p className="text-sm text-muted-foreground">Restaurantstege mit Lazy Lines, Proviant nachfassen möglich.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Çökertme → Akbük / Yedi Adalar</h5>
                <p className="text-sm text-muted-foreground">tief im Golf mit viel Zeit zum Schwimmen und Schnorcheln.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Akbük / Yedi Adalar → Longoz</h5>
                <p className="text-sm text-muted-foreground">piniengesäumte Ankerbucht, optional kurze Wanderung an Land.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Longoz → English Harbour</h5>
                <p className="text-sm text-muted-foreground">sehr geschützte Bucht; entspannter Abend am Restaurantsteg oder mit Heckleinen an Land.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: English Harbour → Sedir (Kleopatra-Insel) → Bodrum</h5>
                <p className="text-sm text-muted-foreground">Fotostopp an den Ruinen, anschließend Rückweg mit Fuel-Dock und Pump-Out.</p>
              </div>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Zwei Wochen – Westwärts bis Knidos (oder kombiniert)</h4>
            <p className="mb-4 font-medium">Variante A: Westkurs bis Knidos</p>
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Bodrum → Orak Adası</h5>
                <p className="text-sm text-muted-foreground">Ankommen, erster Badestopp.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Orak Adası → Kissebükü</h5>
                <p className="text-sm text-muted-foreground">sicherer Ankerplatz auf Sand.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Kissebükü → Çökertme</h5>
                <p className="text-sm text-muted-foreground">Restaurantsteg, kurze Wege an Land.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Çökertme → Akbük</h5>
                <p className="text-sm text-muted-foreground">gemütliche Etappe tief in den Golf.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Akbük → Yedi Adalar</h5>
                <p className="text-sm text-muted-foreground">Insel- und Buchtenhüpfen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Yedi Adalar → Longoz</h5>
                <p className="text-sm text-muted-foreground">Pinien bis ans Wasser, ruhige Nacht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Longoz → English Harbour</h5>
                <p className="text-sm text-muted-foreground">Genussstopp mit viel Zeit im Wasser.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 8: English Harbour → Sedir (Kleopatra-Insel)</h5>
                <p className="text-sm text-muted-foreground">helles Wasser, Ruinenbesuch.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 9: Sedir → Karaada → Datça</h5>
                <p className="text-sm text-muted-foreground">erster Schritt auf den Westkurs, Bummel im Ort.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 10: Datça → Palamutbükü / Kurubük</h5>
                <p className="text-sm text-muted-foreground">kurzer Schlag entlang der Südküste.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 11: Palamutbükü / Kurubük → Knidos</h5>
                <p className="text-sm text-muted-foreground">antike Doppelbucht, Sonnenuntergang an Land.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 12: Knidos → Aspat / Karaada (bei Bodrum)</h5>
                <p className="text-sm text-muted-foreground">langer Rückschlag mit Badepause.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 13: Aspat / Karaada → Kissebükü</h5>
                <p className="text-sm text-muted-foreground">letzte Nacht in ruhiger Ankerbucht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 14: Kissebükü → Bodrum</h5>
                <p className="text-sm text-muted-foreground">entspanntes Einlaufen, Fuel-Dock und Pump-Out, Check-out.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wind und Wetter – lokale Besonderheiten</h3>
            <p className="text-lg leading-relaxed mb-6">
              Der Frühling von April bis Juni bietet milde Temperaturen, grüne Hänge und moderate Winde. Gelegentlich setzt sich ein südlicher Wind durch, der Schwell an offene Leeküsten bringt; dann empfiehlt es sich, Lee-Ankerplätze zu wählen und Ankunftszeiten so zu legen, dass die Yacht vor dem Nachmittagsdruck anliegt. Im Sommer sorgen thermische Winde und der großräumige Meltemi für verlässlichen Segelspaß. Im Gökova-Golf bleibt die Brise oft moderat und planbar, während an Kaps und auf der Westspitze um Knidos kräftigere Bedingungen herrschen können. Häfen und Restaurantstege füllen sich am Nachmittag; wer früh anlegt, hat die freie Wahl. Der Herbst von September bis Oktober kombiniert warmes Wasser, klares Licht und häufig stabile Brisen mit einem spürbar entspannteren Aufkommen – ideale Voraussetzungen für genussvolle Etappen und lange Abende an Deck.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Im Tagesablauf zahlt sich Routine aus. Ein kurzer Blick auf die Vorhersage, eine Etappe, die zur erwarteten Brise passt, und ein Plan B – vielleicht nur eine Bucht weiter – genügen, um jederzeit gelassen zu bleiben. In Düsenzonen an Kaps und bei Fallböen aus den Hängen hilft ein sauberer Segeltrimm; die Yacht bleibt gut beherrschbar, und der Kurs folgt der Logik von Wind, Welle und Küstenlinie.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Seemannschaft – kompakt, aber in ganzen Sätzen</h4>
              <p className="text-black">
                Gute Seemannschaft beginnt mit realistischen Tageszielen. Planen Sie die Pump-Outs und das Bunkern in ruhige Stunden und verbinden Sie sie mit der Proviantaufnahme. Ankern Sie auf Sand oder Schlick, stecken Sie ausreichend Kette, testen Sie den Halt und sichern Sie in engeren Buchten mit Landleinen. Fahren Sie in Buchten langsam, respektieren Sie Badezonen und nehmen Sie bei Restaurantstegen kurz Funkkontakt auf. Internationale Abstecher gelingen nur mit Erlaubnis der Basis und nach sauberem Einklarieren. Wer diese Leitlinien beachtet, segelt entspannter – und genießt mehr Zeit im Wasser.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Warum Yachtcharter Bodrum?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Weil hier die Türkische Ägäis in all ihren Facetten erlebbar wird. Die Milta Bodrum Marina im Stadtzentrum, Yalıkavak Marina, D-Marin Turgutreis und – für erweiterte Routen – D-Marin Didim und Güllük liefern die Infrastruktur für einen stressfreien Start: Wasser, Strom, Diesel, Pump-Out, Chandlery, Werkstätten und kurze Wege zu Märkten und Basaren. Das Revier selbst lässt sich fein abstimmen: vom Cala-Hopping im Gökova-Golf über die geschichtsträchtige Westspitze von Knidos bis hin zur Option Dodekanes, wenn Vertrag und Zeit es erlauben. Yachtcharter Bodrum, Gökova-Golf, Datça, Knidos – diese Namen stehen für verlässliche Winde, sichere Ankerplätze und eine Dichte an Natur- und Kulturmomenten, die jeden Segeltag füllt, ohne ihn zu überfrachten.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Jetzt Yachtcharter ab Bodrum planen</h3>
            <p className="text-lg leading-relaxed mb-6">
              Wenn Sie jetzt Lust bekommen haben, die Leinen zu lösen, nennen Sie uns Ihre Crewgröße, Ihre Reisezeit und die gewünschte Yachtklasse. Wir planen eine Route, die zu Ihnen passt, reservieren Restaurantstege und Moorings, koordinieren Mavi-Kart-Entsorgung und organisieren auf Wunsch den Transfer vom Flughafen bis an den Steg. Yachtcharter Bodrum bedeutet Segeln Türkei auf höchstem Komfortniveau: klare Routen, kurze Wege, viel Zeit im Wasser – und Erinnerungen, die bleiben.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Highlights in Bodrum</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <p className="text-center">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-8 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihren Bodrum-Törn?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entdecken Sie die Karische Küste ab Bodrum – von Gökova-Golf bis Knidos. Lassen Sie uns Ihren perfekten Charter planen.
          </p>
          <CharterRequestForm>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Jetzt Charter anfragen
            </Button>
          </CharterRequestForm>
        </div>
      </div>
    </div>
  );
};

export default Bodrum;