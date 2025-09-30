import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import TopDestinations from "@/components/TopDestinations";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
import { META } from "@/seo/meta.config";
import { BREADCRUMB_TURKEY } from "@/seo/breadcrumbs.turkey";

const Marmaris = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const m = META.marmaris;
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Türkische Ägäis, Südwestküste"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Star,
    label: "Besonderheit",
    value: "Größte Marina der Türkei"
  }];
  const highlights = ["Idealer Ausgangspunkt für Yachtcharter an der Karischen Küste", "Geschützter Naturhafen von Marmaris für entspanntes Ankern", "Hisarönü-Golf mit verlässiger thermischer Brise", "Spektakuläre Ankerbuchten mit Restaurantstegen", "Antike Stätte Knidos mit Doppelkap und Abendlicht", "Dalyan-Delta und Ekincik für Natur-Erlebnisse", "Erstklassige Marina-Infrastruktur mit Netsel und Adaköy", "Kurze Distanzen zwischen sicheren Ankerplätzen", "Perfekt für Einsteiger bis ambitionierte Crews"];
  return <>
      <Meta title={m.title} description={m.description} canonical={m.canonical()} ogImage={m.ogImage} />
      <JsonLd json={BREADCRUMB_TURKEY.marmaris} />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/boot-mieten-costa-smeralda.jpg')",
        filter: "brightness(0.7)"
      }} />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <Link to="/reviere/mittelmeer/tuerkei" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Türkei
            </Link>
          </div>
          <Badge variant="outline" className="mb-4 border-white/30 text-white">
            Türkische Ägäis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Marmaris</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Türkeis Charter-Metropole mit weltklasse Marina und traumhaften Buchten
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
              <BreadcrumbPage>Marmaris</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Quick Facts */}
        <div className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => {
            const IconComponent = fact.icon;
            return <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      {fact.label}
                    </p>
                    <p className="font-bold">{fact.value}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Karte der Region Marmaris</h3>
          <TerritoryMap region="Marmaris" center={{
          lat: 36.8359908,
          lng: 28.2162717
        }} zoom={11} maptype="satellite" className="max-w-4xl mx-auto" />
        </div>

        {/* Detailed Region Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Marmaris – Ihr Törn an der Karischen Küste (Türkische Ägäis)</h2>
            <p className="text-xl text-muted-foreground">
              Türkeis Charter-Metropole mit weltklasse Marina und traumhaften Buchten
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold mt-8 mb-4">Einleitung</h3>
            <p className="text-lg leading-relaxed mb-6">
              Marmaris ist nicht nur eine lebendige Hafenstadt, sondern vor allem ein idealer Ausgangspunkt für Yachtcharter entlang der Karischen Küste und im Hisarönü-Golf. Wer hier ablegt, spürt sofort, warum die Türkische Ägäis seit Jahrzehnten zu den beliebtesten Revieren für Segeln in der Türkei zählt: Pinienbewaldete Hänge fallen in tiefe, türkis schimmernde Buchten ab, das Wasser ist außergewöhnlich klar, und zwischen den Kaps öffnet sich ein Mosaik aus sicheren Ankerbuchten, charmanten Küstenorten und Restaurantstegen, die das Anlegen zum Vergnügen machen. Marmaris vereint internationales Flair, eine erstklassige maritime Infrastruktur und kurze Distanzen – eine Kombination, die Yachtcharter Marmaris zu einer ausgezeichneten Wahl für Einsteiger, Familien, Genießer und ambitionierte Crews macht. Ob Segelyacht Marmaris, Katamaran mieten Türkei oder Gulet-Charter Marmaris: In diesem Revier findet jeder Skipper die passende Bühne für sein Segelabenteuer.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Erreichbarkeit</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die Anreise ist komfortabel. Vom Dalaman Flughafen (DLM) erreichen Sie die Marinas von Marmaris in etwa neunzig Minuten – eine Transferzeit, die es erlaubt, am Ankunftstag entspannt an Bord zu gehen, den Check-in abzuschließen und die ersten Seemeilen zu genießen. Als Alternative bietet sich Bodrum (BJV) an; die Weiterfahrt ist etwas länger, lässt sich aber gut mit einem Zwischenstopp an der Küste verbinden. Wer mit dem PKW aus Europa anreist, wählt entweder den Transit über den Balkan oder nutzt Fähren nach Italien bzw. Griechenland mit anschließendem Landweg. Vor Ort stehen in den Häfen Parkplätze, Shuttle- und Privattransfers zur Verfügung, und dank gut organisierter Lieferservices kommt die Proviantkiste auf Wunsch direkt bis an den Steg. So beginnt der Bareboat-Törn in der Türkei ohne logistischen Aufwand.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Besonderheiten des Reviers</h3>
            <p className="text-lg leading-relaxed mb-6">
              Marmaris liegt in einem beeindruckend geschützten Naturhafen. Die Stadtbucht ist groß und ruhig, ideal, um nach dem Übernahmebriefing Manöver zu üben, die Crew einzuspielen und erste Ankerplätze kennenzulernen. Bereits hinter dem Stadtausgang öffnet sich die Küste Richtung Westen in den Hisarönü-Golf, dessen Geografie mit Inselketten und Halbinseln für eine verlässliche Nachmittagsbrise sorgt, während der Seegang häufig moderat bleibt. Genau dieses Zusammenspiel macht das Segeln in der Türkischen Ägäis hier so angenehm: Nach dem Ablegen setzt oft eine thermische Brise ein, die den Tag über für anregenden Fahrtwind sorgt und gegen Abend abflaut, wenn die Yacht bereits sicher in einer Bucht liegt und die Crew den Sprung ins warme Wasser genießt.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Das Revier bietet einen reizvollen Mix aus lebhaften Orten und abgelegenen Ankerbuchten. Namen wie Kumlubük, Çiftlik, Serçe Limanı, Bozukkale (Loryma), Dirsekbükü, Selimiye, Orhaniye mit dem bekannten Kızkumu-Strand, Bencik und Datça sind in Törnberichten feste Größen. Wer ostwärts steuert, erreicht Ekincik, von wo aus sich der Ausflug per Ausflugsboot in den Dalyan-Fluss mit seinen Schildkrötenrevieren anbietet, und bei längerer Reiseplanung locken die Göcek-Buchten und Fethiye mit ihren Moorings, Restaurantstegen und kulturellen Höhepunkten. Im Westen wartet an der Halbinselspitze die antike Stätte Knidos mit spektakulärem Doppelkap und großartigem Abendlicht.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Typisch für das Revier ist das Ankern mit Heckleinen an Land. Die Böden bestehen häufig aus Sand oder feinem Schlick, der guten Halt bietet. In den schmaleren Einschnitten sorgt eine oder – je nach Breite – zwei Landleinen für Stabilität und schafft Platz für weitere Yachten. In vielen Buchten sind Bojenfelder ausgebracht, und noch häufiger locken Restaurantstege mit Lazy Lines, Strom, Wasser und der Aussicht, den Sundowner nur wenige Schritte von der Achterleine entfernt zu genießen. So gelingt Ankern im Hisarönü-Golf mit maximalem Komfort.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Landschaftlich und kulturell ist die Karische Küste eine Entdeckungsreise. Über Serçe Limanı erhebt sich die Festung von Loryma/Bozukkale, die in der warmen Abendluft per kurzem Aufstieg erreichbar ist. In Knidos spaziert der Skipper durch die Ruinen der antiken Stadt, während unterhalb die Segelyachten in der Ankerbucht auf die Nacht vorbereiten. Und in Ekincik führt der Weg per Boot tief in die Schilflandschaft des Dalyan-Deltas – ein Kontrastprogramm zur maritimen Kulisse der offenen Küste.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Vorschriften und Regeln – praxisnah erklärt</h3>
            <p className="text-lg leading-relaxed mb-6">
              Für jede Charteryacht ist der Transit Log Türkei – das Cruising Permit – obligatorisch. Er wird beim Check-in durch die Charterbasis organisiert und enthält Angaben zu Schiff, Crew und geplanter Route. Änderungen, etwa beim Crewwechsel, werden eingetragen. Die Übergabe in Marmaris folgt eingespielten Abläufen: Sicherheits- und Revierbriefing, Kontrolle der Ausrüstung und der Papiere. Beim Check-out werden Treibstoff und Abwassertanks wie vereinbart abgefertigt, bevor die Rückgabe erfolgt. In der Hochsaison lohnt es sich, die Tank- und Pump-Out-Manöver etwas früher einzuplanen, um Wartezeiten zu vermeiden.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Der Schutz der Küstenumwelt hat Priorität. In Teilen der Bozburun-Halbinsel und des Hisarönü-Golfs gelten Naturschutzregelungen, die Ankerverbote in Seegrasfeldern, Mindestabstände zum Ufer oder eine Bojenpflicht vorsehen können. Das Einleiten von Schwarz- und – je nach Zone – Grauwasser ist untersagt. Die Entsorgung erfolgt über Pump-Out-Stationen in den Marinas oder über Serviceboote, und sie wird über das Mavi-Kart-System (Blaue Karte) beziehungsweise einen entsprechenden Nachweis dokumentiert. Wer den Tag strukturiert plant, verbindet die Proviantaufnahme und das Bunkern von Diesel mit einem Pump-Out-Stopp und spart so wertvolle Zeit.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              In Buchten gilt langsames Fahren, Badezonen sind freizuhalten, und übermäßige Wellenbildung ist zu vermeiden. VHF-Funk sollte an Bord betriebsbereit sein; die meisten Marinas und Restaurantstege sind auf festen Kanälen erreichbar. Nachtfahrten sind in vielen Charterverträgen nicht vorgesehen. Selbst wenn sie zulässig wären, empfiehlt sich in diesem Küstenmosaik das sichere Zeitfenster bei Tageslicht. Wer im Rahmen des Vertrages internationale Ziele ansteuern möchte – etwa Rhodos oder Symi –, muss vorab die Einklarierungsformalitäten und die Erlaubnis im Chartervertrag klären.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Das Ankern mit Landleinen folgt einer klaren Routine, die auch Neulinge schnell beherrschen. Zuerst fällt der Anker auf Sand oder Mud, die Kette wird ausreichend gesteckt, und der Halt wird mit einem kurzen Rückwärtslauf kontrolliert. Anschließend fährt das Beiboot eine oder zwei Heckleinen an Land, die über Felsösen oder um robuste Bäume geführt und mit Scheuerschutz versehen werden. Wenn die Yacht sauber ausgerichtet ist, nimmt der Skipper wieder leicht Vorlauf auf die Kette, spannt die Heckleinen nach, und aktiviert den Ankeralarm. So liegt die Yacht stabil, schwojt kaum und bietet der Crew eine ruhige Nacht.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Segelscheine und Qualifikationen</h3>
            <p className="text-lg leading-relaxed mb-6">
              Für Bareboat in der Türkei akzeptieren die meisten Vercharterer den ICC (International Certificate of Competence) oder vergleichbare nationale Lizenzen, etwa SBF See in Kombination mit SKS oder eine gleichwertige Qualifikation. Ein VHF-Funkzeugnis wie das SRC ist empfohlen und wird von vielen Flotten gefordert. Gäste ohne Schein entscheiden sich für Skippered Charter mit Berufsskipper oder für eine Crewed-Yacht, bei der neben dem Skipper oft auch eine Hostess oder ein Koch die Gäste betreut. Beide Optionen sind in Marmaris weit verbreitet und ermöglichen einen entspannten Einstieg in das Revier.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Für wen ist das Revier geeignet – und warum?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Der Schwierigkeitsgrad reicht von leicht bis anspruchsvoll und lässt sich über die Routenwahl steuern. Einsteiger und Familien profitieren vom großen, geschützten Naturhafen von Marmaris, in dem Manöver stressfrei geübt werden können, und von den kurzen Distanzen zwischen den Ankerbuchten im Hisarönü-Golf. Genusssegler lieben den Rhythmus aus Segeln, Schwimmen, Schnorcheln und dem abendlichen Festmachen am Restaurantsteg. Ambitionierte Crews suchen die längeren Schläge über die Datça-Halbinsel, lassen sich an Kapstrecken vom Meltemi fordern oder planen – sofern vertraglich erlaubt – einen Abstecher nach Rhodos oder Symi. Wer den Fokus auf die Ostvariante legt, verbindet Marmaris mit Ekincik und den Göcek-Buchten bis Fethiye für zwei abwechslungsreiche Wochen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Marinas und Versorgung in Marmaris und Umgebung</h3>
            <p className="text-lg leading-relaxed mb-6">
              Netsel Marina liegt mitten im Stadtzentrum. Sie bietet moderne Steganlagen, Wasser, Strom, Diesel, Pump-Out, Chandlery und Technik, dazu kurze Wege zum großen Basar, zu Migros und CarrefourSA. Wer das urbane Leben schätzt, ist hier bestens aufgehoben. Etwas außerhalb, in der Adaköy-Bucht, liegt die Marmaris Yacht Marina. Sie überzeugt mit weiten Manövrierbereichen, Werkstätten, Travel-Lift, Fuel-Dock, Pump-Out und einer ruhigen Lage – ideal, wenn die Crew vor dem Ablegen noch in entspannter Atmosphäre ankommt. Albatros Marina und Pupa Marina ergänzen das Angebot in Stadtnähe. Als wichtiger Stützpunkt im Golf gilt die Martı Marina in Orhaniye, die mit Restaurantsteg, Wasser, Strom, Diesel, Pump-Out, Technik und Minimarkt die Versorgung mitten im Revier sicherstellt.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Das Einkaufen ist unkompliziert. Große Supermärkte liefern auf Wunsch direkt an den Liegeplatz; der Basar von Marmaris bietet frisches Obst, Gemüse, Gewürze und lokale Produkte. Taxi-Boote und Shuttles verbinden Stadt, Marinas und Ankerbuchten. Für Ersatzteile und nautisches Equipment stehen Chandlery-Shops und Werkstätten bereit. So bleibt der Fokus auf dem Wesentlichen: Segeln, Ankern, Genießen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnziele ab Marmaris</h3>
            <h4 className="text-xl font-semibold mt-6 mb-4">Richtung Osten</h4>
            <p className="text-lg leading-relaxed mb-6">
              Ekincik ist eine weite Bucht mit gutem Haltegrund, mehreren Restaurantstegen und idealer Ausgangspunkt für den Ausflug in den Dalyan-Fluss. Zwischen Schilfgassen, Felsengräbern und der antiken Stätte Kaunos erleben Sie eine ganz andere Facette der Türkischen Ägäis. Wer den Törn verlängern möchte, setzt weiter Kurs auf Göcek und Fethiye. Dort warten die Skopea-Buchten mit Moorings, Restaurantstegen, Hamam Koyu, Tersane Adası und Kapi Creek – ein Paradies für Yachtcharter mit viel Zeit im Wasser.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Richtung Westen – Hisarönü-Golf und Datça-Halbinsel</h4>
            <p className="text-lg leading-relaxed mb-6">
              Hinter der Stadt folgen Kumlubük und Çiftlik, zwei Klassiker für den ersten Sprung ins Meer. Serçe Limanı gilt als besonders geschützte Ankerbucht. In Bozukkale (Loryma) liegt die Yacht unter der antiken Festung, und ein kurzer Pfad führt am Abend hinauf zum Panorama. Dirsekbükü verführt mit glatter Wasserfläche und einem beliebten Restaurantsteg, Selimiye mit Uferpromenade und ruhigen Nächten. In Orhaniye zieht sich die Kızkumu-Sandbank weit ins Meer, während die Martı Marina als Service-Hub dient. Bencik besitzt eine schmale Einfahrt und liegt innen still wie ein See. Datça ist ein charmanter Ort mit guter Versorgung, und am Ende der Halbinsel bietet Knidos die eindrucksvollste Kulisse weit und breit: Antike Mauern, ein Leuchtturmkamm und das goldene Licht der untergehenden Sonne über der Ankerbucht.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Optionale internationale Ziele</h4>
            <p className="text-lg leading-relaxed mb-6">
              Rhodos und Symi sind reizvolle Ziele und aus Marmaris gut erreichbar. Sie erfordern jedoch eine saubere Abwicklung der Grenz- und Hafenformalitäten. Klären Sie rechtzeitig, ob Ihr Chartervertrag und der Transit Log Ausreisen vorsehen, und planen Sie die Zeit für das Einklarieren ein. Viele Basen unterstützen bei der Organisation mit lokalen Agenturen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Routenvorschläge mit saisonalem Blick</h3>
            <h4 className="text-xl font-semibold mt-6 mb-4">Eine Woche – Rundkurs im Hisarönü-Golf</h4>
            <p className="text-lg leading-relaxed mb-6">
              Ein gelungener Wochenplan beginnt mit dem Ableger aus Marmaris und einer kurzen Etappe nach Kumlubük oder Çiftlik, wo die Crew den ersten Badestopp einlegt und am Abend am Restaurantsteg festmacht. Am zweiten Tag setzt die Yacht Kurs nach Bozukkale, um unter der Festung in einer der schönsten Ankerbuchten der Region zu liegen und den Sonnenuntergang von oben zu betrachten. Es folgt ein entspannter Schlag nach Dirsekbükü mit ausgiebiger Schwimmpause, bevor Selimiye mit seiner Promenade und den Tavernen lockt. Am fünften Tag geht es nach Orhaniye, wo die Sandbank und die Martı Marina warten. Anschließend führt der Weg über Bencik in die besonders geschützte Bucht von Serçe Limanı, bevor am letzten Tag der Rückkurs nach Marmaris ansteht. Im Sommer trägt die Yacht die thermische Brise am Nachmittag verlässlich von Bucht zu Bucht; morgens und abends ist es häufig ruhig, was lange Badezeiten und entspannte Ankünfte begünstigt.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Zwei Wochen – Westwärts bis Knidos oder ostwärts bis Göcek</h4>
            <p className="text-lg leading-relaxed mb-6">
              Wer zwei Wochen Zeit hat, kann den Törn westwärts bis Knidos strecken. Hinter Çiftlik und Bozukkale bietet Datça einen idealen Versorgerstopp, bevor das Doppelkap von Knidos angesteuert wird. Hier lohnt es sich, den Abend bewusst zu planen: Bei auflandiger Brise kann kurzer Schwell in die Ankerbucht laufen, sodass ein früheres Eintreffen zusätzliche Ruhe bringt. Der Rückweg führt über Palamutbükü oder Kurubük und dann wieder in die ruhigen Buchten des Hisarönü-Golfs. Alternativ steuert man ostwärts Ekincik an und nutzt die zweite Woche für das Buchtenhüpfen in Göcek und Fethiye. Hamam Koyu, Kapi Creek, Tersane Adası und idyllische Sandzungen in den Yassıca-Inseln zeigen die genussvolle Seite des Segelns in der Türkei, bevor es über Ekincik zurück nach Marmaris geht.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wind und Wetter – lokale Besonderheiten</h3>
            <p className="text-lg leading-relaxed mb-6">
              Der Frühjahrstörn von April bis Juni verwöhnt mit milden Temperaturen und blühenden Hängen. Gelegentlich setzt sich ein südlicher Wind durch, der Schwell an offene Leeküsten bringt. In solchen Phasen sind Lee-Ankerplätze die richtige Wahl, und ein Blick auf den Segeltrimm sorgt für komfortable Etappen. Im Hochsommer von Juli bis August prägen thermische Winde den Tagesablauf. Der Hisarönü-Golf liefert oft genau jene Brise, die sich Genusssegler wünschen, während an exponierten Kaps und der Westspitze der Datça-Halbinsel auch frischere Bedingungen entstehen können. Häfen und Restaurantstege füllen sich am Nachmittag; wer früh anlegt, genießt mehr Auswahl. Im Herbst von September bis Oktober bleibt das Wasser warm, das Licht klar und die Brisen meist stabil. Gelegentliche Schauerfronten lassen sich mit einer angepassten Tagesplanung locker umschiffen.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Im täglichen Ablauf zahlt sich Routine aus. Ein kurzer Forecast-Check am Morgen, die Wahl einer Etappe, die zur erwarteten Brise passt, und ein Plan B in der Hinterhand genügen, um jederzeit gelassen zu bleiben. In Düsenzonen an Kaps und bei Fallböen aus den Berghängen hilft ein sauberer Segeltrimm; die Yacht bleibt gut beherrschbar, und der Kurs folgt der Logik von Wind, Welle und Küstenverlauf.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Seemannschaft – kompakt, aber in ganzen Sätzen</h3>
            <p className="text-lg leading-relaxed mb-6">
              Gute Seemannschaft beginnt mit realistischen Tageszielen und endet mit einer aufgeräumten Plicht. Prüfen Sie täglich die Vorhersage, nutzen Sie die Thermik für die Strecke und planen Sie den Pump-Out in ruhigere Stunden. Ankern Sie auf Sand oder feinem Schlick, stecken Sie die Kette großzügig, testen Sie den Halt und sichern Sie – wo es sinnvoll ist – mit Landleinen. Fahren Sie in Buchten langsam, halten Sie Badezonen frei und nehmen Sie vor dem Anlaufen eines Restaurantstegs kurz Funkkontakt auf. Internationale Abstecher sind nur mit Erlaubnis des Vercharterers und nach sauberem Einklarieren möglich. Wer diese einfachen Leitplanken beachtet, segelt entspannter – und genießt mehr Zeit im Wasser.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Warum Yachtcharter Marmaris?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Weil hier alles zusammenkommt: eine Top-Infrastruktur mit Netsel Marina, Marmaris Yacht Marina (Adaköy), Albatros, Pupa und der Martı Marina in Orhaniye; eine Logistik, die mit großen Supermärkten, Basar und Lieferservice das Proviantieren leicht macht; ein Revier, das vom Stadtausleger bis zum Doppelkap von Knidos, vom Ekincik-Ausflug bis zu den Göcek-Buchten jede Vorliebe bedient. Yachtcharter Marmaris, Hisarönü-Golf, Bozburun-Halbinsel und Datça sind Namen, die für verlässliche Winde, sichere Ankerplätze und intensive Erlebnisse stehen – auf Segelyacht, Katamaran oder Gulet.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Jetzt Yachtcharter Marmaris planen</h3>
            <p className="text-lg leading-relaxed mb-6">
              Wenn Sie jetzt Lust bekommen haben, die Leinen zu lösen, nennen Sie uns Ihre Crewgröße, Ihre Reisezeit und die gewünschte Yachtklasse. Wir planen einen Törn, der zu Ihnen passt, reservieren Restaurantstege und Moorings, koordinieren Mavi-Kart-Entsorgung und organisieren auf Wunsch den Transfer vom Dalaman Flughafen bis an den Steg. Yachtcharter Marmaris bedeutet Segeln Türkei auf den Punkt: klare Routen, kurze Wege, viel Zeit im Wasser – und Erinnerungen, die länger tragen als jede Welle.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Highlights in Marmaris</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <p className="text-center">{highlight}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-8 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihr Marmaris-Abenteuer?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Starten Sie Ihren Charter von der führenden Marina der türkischen Ägäis. Wir planen Ihren perfekten Segelurlaub.
          </p>
          <CharterRequestForm>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Jetzt Charter anfragen
            </Button>
          </CharterRequestForm>
        </div>

        <TopDestinations />
      </div>
    </div>
    </>;
};
export default Marmaris;