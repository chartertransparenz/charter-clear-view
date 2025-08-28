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

const KasKalkan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: MapPin,
      label: "Lage",
      value: "Lykische Küste, Südtürkei"
    },
    {
      icon: Calendar,
      label: "Beste Zeit",
      value: "Mai-Oktober"
    },
    {
      icon: Users,
      label: "Geeignet für",
      value: "Erfahrene Segler"
    },
    {
      icon: Star,
      label: "Besonderheit",
      value: "Antike Lykische Kultur"
    }
  ];

  const highlights = [
    "Kas - authentisches Fischerdorf mit antikem Theater am Wasser",
    "Kalkan - malerisches Bergdorf mit osmanischen Häusern",
    "Kekova - versunkene Stadt mit glasklarem Wasser",
    "Meis (Kastellorizo) - griechische Insel in Sichtweite",
    "Patara Beach - einer der längsten Sandstrände der Türkei",
    "Lykische Felsengräber und antike Ruinenstätten",
    "Kristallklare Gewässer ideal zum Schnorcheln und Tauchen",
    "Ruhige Ankerplätze abseits der Massen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/public/lovable-uploads/1ea68c6f-87dc-44e1-9f11-6805e2ddf28f.png')",
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
            Lykische Küste
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kas & Kalkan</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Authentische Lykische Küste mit versunkenen Städten und kristallklarem Wasser
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
              <BreadcrumbPage>Kas & Kalkan</BreadcrumbPage>
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

        {/* Territory Map */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Karte der Region Kas & Kalkan</h3>
            <TerritoryMap
              region="Kas & Kalkan"
              center={{ lat: 36.2427094, lng: 29.6395256 }}
              zoom={18}
              maptype="satellite"
              className="mb-8"
            />
          </div>
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Kaş & Kalkan – Ihr Törn an der Lykischen Küste (Türkische Ägäis)</h2>
            <p className="text-xl text-muted-foreground">
              Authentische Lykische Küste mit versunkenen Städten und kristallklarem Wasser
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Kaş und Kalkan sind keine gewöhnlichen Küstenorte – sie sind die perfekte Ausgangsregion für Yachtcharter an der Lykischen Küste. Zwischen steil aufragenden Felswänden, pinienbewaldeten Hängen und einer Kette tief eingeschnittener, türkisfarbener Buchten entfaltet sich ein Revier, das seinesgleichen sucht: glasklares Wasser, hervorragend geschützte Ankerbuchten, Restaurantstege in Bilderbuchkulissen – und mit Kekova eines der faszinierendsten Schutzgebiete des Mittelmeers.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Yachtcharter Kaş & Kalkan steht für Kontraste und Abwechslung: Am Vormittag führt der Kurs entlang spektakulärer Küstenlinien, am Nachmittag trägt eine verlässliche Brise die Yacht in eine ruhige Bucht, und am Abend liegt sie sicher an der Muring am Restaurantsteg – mit Blick auf die Burgruine von Kaleköy/Simena oder auf die langen Strände von Patara. Ob Segelyacht Kaş, Katamaran mieten Türkei oder Gulet-Charter: Die Region kombiniert planbare Winde, kurze bis mittlere Etappen und eine Infrastruktur, die vom Einsteiger bis zur ambitionierten Crew alle Wünsche erfüllt.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 id="erreichbarkeit" className="font-semibold mb-3 text-black">Erreichbarkeit</h4>
              <p className="text-black mb-3">
                Die komfortabelste Anreise erfolgt über den Flughafen Dalaman (DLM). Von hier erreichen Sie Kaş Marina in rund zwei Stunden und Kalkan in etwa 90–120 Minuten – je nach Verkehr und Tageszeit. Als Alternative bietet sich Antalya (AYT) an; die Fahrzeit ist ähnlich, oft mit sehr schöner Küstenroute. Wer mit dem PKW aus Europa anreist, wählt den Transit über den Balkan oder kombiniert Fähren nach Italien/Griechenland mit dem anschließenden Landweg. In den Häfen stehen Parkplätze, Shuttle- und Privattransfers bereit. Große Supermärkte (z. B. Migros, CarrefourSA) liefern den Proviant auf Wunsch bis an den Steg – ideal für einen stressfreien Start in den Bareboat-Törn in der Türkei.
              </p>
            </div>

            <h4 className="font-semibold mb-3">Besonderheiten des Reviers</h4>
            
            <h5 className="font-semibold mt-4 mb-2">Große Kulisse, geschützte Buchten</h5>
            <p className="mb-3">
              Zwischen Kaş und Kalkan fällt das Taurusgebirge nahezu direkt ins Meer ab. Vor der Küste liegt die Inselkette von Kekova und Kekova Adası, die zusammen mit dem Festland die berühmte Kekova-Reede bilden – ein natürlicher Schutzschirm mit zahllosen Ankerplätzen. Die Buchten sind tief eingeschnitten, das Wasser außergewöhnlich klar, und viele Stellen sind vor Dünung hervorragend geschützt.
            </p>
            
            <h5 className="font-semibold mt-4 mb-2">Thermik mit Meltemi-Einfluss</h5>
            <p className="mb-3">
              Im Sommer stellt sich tagsüber eine verlässliche Brise aus nördlichen bis westlichen Sektoren ein; am Abend beruhigt sich der Wind oft – beste Voraussetzungen für Ankern in stillen Buchten. Auf den offenen Abschnitten zwischen Kaş und Kalkan, an Kaps oder Düsenzonen, kann der Wind frisch durchziehen, während in Kekova oft spiegelglatte Bedingungen herrschen.
            </p>
            
            <h5 className="font-semibold mt-4 mb-2">Ankern mit Heckleinen – Standard an der Lykischen Küste</h5>
            <p className="mb-3">
              Die Küsten fallen häufig steil ab; Sand-/Schlickfelder und Felsbänder wechseln. Der typische Ablauf: Anker auf gutem Grund, Kette stecken, Halt prüfen, eine oder zwei Landleinen an Bäumen/Felsösen ausbringen, Yacht ausrichten, Leinen und Kette sauber auf Spannung. Das spart Raum, reduziert Schwojen und sorgt für ruhige Nächte.
            </p>
            
            <h5 className="font-semibold mt-4 mb-2">Bojenfelder & Restaurantstege</h5>
            <p className="mb-3">
              In vielen Bereichen von Kekova (Üçağız, Kaleköy/Simena, Tersane) gibt es Mooringbojen und Stege mit Lazy Lines. Häufig gehören Strom/Wasser und ein sehr gutes Abendessen am Kai dazu – ein Komfort, der Yachtcharter Kaş so angenehm macht.
            </p>
            
            <h5 className="font-semibold mt-4 mb-2">Landschaft & Kultur</h5>
            <p className="mb-6">
              Berühmte Ziele sind die versunkene Stadt an der Nordküste von Kekova, die Burg von Kaleköy/Simena, das antike Aperlai, die langen Sandbänder von Patara, das Amphitheater von Kaş und die Bilderbuchbucht Kaputaş. Wer einen Landtag einschiebt, erlebt in kurzer Distanz eine ungewöhnliche Dichte an lykischen Stätten.
            </p>

            <h4 className="font-semibold mb-3">Vorschriften & Regeln – praxisnah erklärt</h4>
            
            <h5 className="font-semibold mt-4 mb-2">Transit Log Türkei (Cruising Permit)</h5>
            <p className="mb-3">
              Für jede Charteryacht obligatorisch. Der Transit Log wird beim Check-in erstellt (Boot, Crew, Revier) und begleitet Sie bis zum Check-out. Crewänderungen und besondere Streckenabschnitte werden dokumentiert.
            </p>
            
            <h5 className="font-semibold mt-4 mb-2">SEPA Kekova – Schutzgebiet mit Zonen</h5>
            <p className="mb-3">
              Große Teile der Kekova-Reede sind Sonderschutzgebiet (SEPA). Hier gelten Bojenpflicht bzw. Ankerbeschränkungen in sensiblen Zonen (u. a. über Ruinenfeldern), Mindestabstände zum Ufer sowie Geschwindigkeitslimits. Die versunkene Stadt darf nicht betaucht werden; Tauchgänge sind nur in freigegebenen Bereichen und mit lokalen Centern möglich.
            </p>
            
            <h5 className="font-semibold mt-4 mb-2">Mavi Kart (Blue Card) & Pump-Out</h5>
            <p className="mb-3">
              Das Einleiten von Schwarzwasser und – je nach Zone – Grauwasser ist verboten. Entsorgung erfolgt an Pump-Out-Stationen (Marinas/Serviceboote) und wird per Mavi Kart bzw. Nachweis dokumentiert. Planen Sie Pump-Out und Bunkern gemeinsam mit Proviant-Stopps, um Wartezeiten zu vermeiden.
            </p>
            
            <h5 className="font-semibold mt-4 mb-2">VHF, Fahrregeln & Nacht</h5>
            <p className="mb-3">
              VHF betriebsbereit halten; Marinas/Stege funken auf festen Kanälen. In Buchten gilt Langsamfahrt, Badezonen sind freizuhalten, Sog/Welle vermeiden. Nachtfahrten sind in vielen Charterverträgen nicht vorgesehen; das Revier lässt sich ideal im Tageslichtfenster segeln.
            </p>
            
            <h5 className="font-semibold mt-4 mb-2">Grenznah & international</h5>
            <p className="mb-6">
              Direkt vor Kaş liegt die griechische Insel Kastellorizo/Meis – ein beliebtes Ziel mit Postkartenhafen. Ein Besuch ist nur mit Einklarieren und Chartererlaubnis möglich. Klären Sie vorab, ob Ihr Vertrag internationale Fahrten zulässt.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 id="segelscheine" className="font-semibold mb-3 text-black">Segelscheine & Qualifikationen</h4>
              <p className="text-black">
                Für Bareboat Türkei akzeptieren die Vercharterer in der Regel den ICC (International Certificate of Competence) oder eine vergleichbare nationale Lizenz (z. B. SBF See + SKS bzw. Äquivalent). Ein VHF-Funkzeugnis (z. B. SRC) ist empfohlen und wird von vielen Flotten gefordert. Gäste ohne Schein wählen Skippered Charter (Berufsskipper an Bord) oder eine Crewed-Yacht – ideal für Ersttörns, Familien und Komfort-Crews.
              </p>
            </div>

            <h4 id="eignung-nach-erfahrungsstufe" className="font-semibold mb-3">Für wen ist das Revier geeignet – und warum?</h4>
            <p className="mb-6">
              Alle Erfahrungsstufen profitieren. Einsteiger und Familien genießen die geschützten Ankerplätze in Kekova, kurze Hüpfer und ruhige Nächte – mit viel Zeit zum Schwimmen und Schnorcheln. Genusssegler kombinieren Küstenpanorama, Restaurantstege und die Kultur der Lykischen Küste. Ambitionierte Crews suchen die offeneren Abschnitte zwischen Kaş und Kalkan, setzen längere Schläge nach Westen in Richtung Fethiye/Göcek oder nach Osten bis Finike/Kemer – je nach Wetterfenster und Reiselust. So lässt sich der Schwierigkeitsgrad von „entspannt" bis „sportlich" fein dosieren.
            </p>

            <h4 className="font-semibold mb-3">Marinas & Versorgung in Kaş–Kalkan</h4>
            <p className="mb-3">
              Kaş Marina ist die zentrale Drehscheibe für Yachtcharter Kaş: moderne Steganlagen, Wasser, Strom, Diesel, Pump-Out, Technik/Chandlery, Shops und Gastronomie – dazu Taxi- und Transferdienste. Kalkan verfügt über einen kleinen Stadthafen mit begrenzten Plätzen; Wasser/ Strom sind saisonal verfügbar, der Ort selbst punktet mit Restaurants, Bars und kurzen Wegen. Als zusätzliche Stützpunkte bieten sich Setur Finike Marina (östlich) und – für Westrouten – die Anlagen um Fethiye/Göcek an.
            </p>
            <p className="mb-6">
              Proviantierung ist unkompliziert: In Kaş und Kalkan gibt es Migros, CarrefourSA, Wochenmärkte und Bäckereien; viele liefern direkt an den Steg. In Üçağız und Kaleköy (Kekova) versorgen Restaurantstege die Crews; kleine Läden, Wasser, Eis und frische Produkte sind verfügbar. Taxi-Boote verbinden Stege und Dörfer – praktisch für kurze Landgänge.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnziele – die Klassiker ab Kaş & Kalkan</h3>

            <h4 className="text-xl font-semibold mt-6 mb-4">Kekova-Reede (Üçağız – Kaleköy/Simena – Tersane – Gökkaya)</h4>
            <p className="mb-6">
              Das Herz des Reviers: geschützte Buchten, Moorings, glasklares Wasser, kurze Wege. Kaleköy mit Burgruine und Eisdielen am Steg, Tersane mit Werftrelikten, Gökkaya Limanı mit vielen Ankerplätzen und Höhlen. Aperlai (NW-Kekova) verzaubert mit antiken Resten am Ufer und langen Leinen an Land.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Kaputaş & Patara</h4>
            <p className="mb-6">
              Zwischen Kaş und Kalkan liegen die berühmten Strände Kaputaş (dramatische Schluchtkulisse) und Patara (kilometerlanges Sandband). Tagsüber eignen sich die Buchten für Badestopps; für die Nacht wählt man besser die windgeschützten Ankerbuchten in Kekova oder rund um Kaş.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Demre/Andriake & Finike</h4>
            <p className="mb-6">
              Östlich von Kekova bieten Andriake/Çayağzı (Demre) und die Setur Finike Marina weitere Versorger- und Etappenhäfen. Wer Kultur mag, plant Myra (Felsgräber, Nikolauskirche) als Landgang.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Optionale internationale Ziele – Kastellorizo/Meis</h4>
            <p className="mb-6">
              Nur eine Handbreit vor Kaş – aber Grenze: Ein Abstecher ist ein unvergessliches Erlebnis, erfordert jedoch Einklarieren und vertragliche Erlaubnis.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnidee: Kaş, Kalkan & Kekova</h3>
            <p className="mb-4 font-medium">Ziel: Viel Segelzeit in der verlässlichen Sommerbrise, ruhige Nächte in geschützten Ankerbuchten und entspannte Stopps an Restaurantstegen. Der Plan ist familientauglich – lässt sich aber durch längere Schläge Richtung Finike oder Fethiye/Göcek sowie einen optionalen Abstecher nach Kastellorizo/Meis (mit Einklarieren) sportlich erweitern.</p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Eine Woche – Kekova-Rundkurs (komfortorientiert)</h4>
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Kaş → Limanağzı / İnönü</h5>
                <p className="text-sm text-muted-foreground">kurzer Einstieg, Baden, erste Nacht in der Ankerbucht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Limanağzı → Üçağız (Kekova)</h5>
                <p className="text-sm text-muted-foreground">Mooring/Restaurantsteg, Dorfbummel und frischer Fisch am Kai.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Üçağız → Kaleköy/Simena → Tersane</h5>
                <p className="text-sm text-muted-foreground">Burgaufstieg, anschließend in die Werftbucht, Landleinen setzen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Tersane → Gökkaya Limanı</h5>
                <p className="text-sm text-muted-foreground">mehrere Ankerplätze zur Auswahl, Höhlen erkunden, ruhige Nacht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Gökkaya → Aperlai (NW-Kekova)</h5>
                <p className="text-sm text-muted-foreground">antike Reste am Ufer, klare Sicht, Longline an Land.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Aperlai → Kalkan</h5>
                <p className="text-sm text-muted-foreground">Stadthafen/Restaurantstege (Platzverfügbarkeit beachten), Bummel durch die Altstadt.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Kalkan → Kaputaş Badestopp → Kaş</h5>
                <p className="text-sm text-muted-foreground">kurzer Rückweg, Fuel-Dock, Pump-Out, Check-out.</p>
              </div>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Zwei Wochen – Ostwärts bis Finike oder Westwärts bis Fethiye/Göcek</h4>
            
            <h5 className="font-semibold mt-4 mb-2">Variante Ost (Kultur & Ruhe):</h5>
            <div className="space-y-2 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 1:</strong> Kaş → Limanağzı</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 2:</strong> Limanağzı → Üçağız</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 3:</strong> Üçağız → Kaleköy/Simena → Tersane</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 4:</strong> Tersane → Gökkaya</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 5:</strong> Gökkaya → Andriake (Demre) – Landgang Myra/Nikolauskirche.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 6:</strong> Andriake → Finike Marina – Versorgerstopp.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 7:</strong> Finike → Çayağzı / ruhige Bucht</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 8:</strong> Çayağzı → Gökkaya</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 9:</strong> Gökkaya → Aperlai</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 10:</strong> Aperlai → Kalkan</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 11:</strong> Kalkan → Kaputaş Badestopp → Kaş</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 12–14:</strong> Laydays/Reserve für Wetter, zusätzliche Kekova-Buchten oder einen Tag Kastellorizo (nur mit Einklarieren und Chartererlaubnis).</p>
              </div>
            </div>

            <h5 className="font-semibold mt-4 mb-2">Variante West (genussorientiert):</h5>
            <div className="space-y-2 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 1:</strong> Kaş → Limanağzı</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 2:</strong> Limanağzı → Kalkan</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 3:</strong> Kalkan → Gemiler/Ölüdeniz (reguliertes Schutzgebiet, Tagesstopp)</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 4–7:</strong> Göcek-Buchten (Hamam Koyu, Kapi Creek, Tersane Adası, Yassıca) – Moorings/Restaurantstege</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 8:</strong> Göcek → Fethiye – Stadtstopp, Proviant</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 9–10:</strong> Fethiye → Kalkan – Badebuchten entlang der Küste</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 11:</strong> Kalkan → Kaputaş → Kaş</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm"><strong>Tag 12–14:</strong> Zusatz-Stopps in Lieblingsbuchten, Fuel-Dock & Pump-Out am Ende.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 id="wetter-windbedingungen" className="font-semibold mb-3 text-black">Wind & Wetter – lokale Besonderheiten</h4>
              
              <h5 className="font-semibold mt-4 mb-2 text-black">Frühling (April–Juni)</h5>
              <p className="text-black mb-3">
                Milde Temperaturen, klare Sicht und meist moderate Winde. Südliche Lagen (Lodos) können Schwell in offene Buchten drücken; dann zahlt sich die Nähe zu Kekova mit seinen Lee-Ankerplätzen aus.
              </p>
              
              <h5 className="font-semibold mt-4 mb-2 text-black">Sommer (Juli–August)</h5>
              <p className="text-black mb-3">
                Verlässliche Sommerbrise mit Meltemi-Einfluss. Auf offenen Abschnitten zwischen Kaş und Kalkan kann der Wind auffrischen, in Kekova bleibt das Wasser oft ruhig. Häfen und Restaurantstege füllen sich am Nachmittag – frühes Ankommen sichert die beste Wahl.
              </p>
              
              <h5 className="font-semibold mt-4 mb-2 text-black">Herbst (September–Oktober)</h5>
              <p className="text-black mb-3">
                Warmes Wasser, beständiger Wind, entspanntes Aufkommen. Vereinzelte Schauerfronten lassen sich mit flexiblem Tagesplan gut nutzen.
              </p>
              
              <h5 className="font-semibold mt-4 mb-2 text-black">Lokale Effekte</h5>
              <p className="text-black">
                Düsenzonen an Kaps, Fallböen aus den steilen Hängen sowie Tiefenlinien, die nahe ans Ufer reichen. Ein sauberer Segeltrimm und das rechtzeitige Setzen von Landleinen sind die halbe Miete für ruhige Nächte.
              </p>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Seemannschaft – kompakt & komplett</h4>
              <p className="text-black">
                Planen Sie realistische Tagesetappen und prüfen Sie täglich die Vorhersage. Kombinieren Sie Bunkern, Proviant und Pump-Out mit einem Hafenstopp zu ruhigen Zeiten. Ankern Sie auf Sand/Mud, stecken Sie ausreichend Kette, testen Sie den Halt und sichern Sie in schmalen Buchten mit Heckleinen. Fahren Sie in Buchten langsam, respektieren Sie Badezonen, und nehmen Sie bei Restaurantstegen vor dem Anlaufen kurz Funkkontakt auf. Internationale Abstecher – etwa nach Kastellorizo/Meis – gelingen nur mit Einklarieren und vertraglicher Erlaubnis.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Warum Yachtcharter Kaş & Kalkan?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Weil hier Naturbühne und Komfort zusammenkommen: Kaş Marina als perfekt ausgestatteter Start- und Zielhafen, Kalkan als atmosphärischer Zwischenstopp, Kekova als geschütztes Insel-Labyrinth – und ringsum eine Dichte an Törnzielen, die von der stillen Ankerbucht bis zur lebendigen Promenade reicht. Segeln Türkei, Bareboat Türkei, Skipper Kaş, Katamaran mieten Türkei, Gulet-Charter – an der Lykischen Küste findet jede Crew ihr Tempo: mal genussvoll, mal sportlich, immer mit einem sicheren Platz für die Nacht.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Jetzt Yachtcharter Kaş & Kalkan planen: Nennen Sie uns Crewgröße, Reisezeit und Yachtklasse. Wir erstellen Ihre Route mit Lee-Optionen, reservieren Moorings/Restaurantstege, koordinieren Mavi-Kart-Entsorgung und organisieren Ihren Transfer ab Dalaman oder Antalya – für einen Törn, der vom ersten Ableger an Freude macht.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Highlights in Kas & Kalkan</h3>
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
            Bereit für Ihr Kaş & Kalkan-Abenteuer?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Erleben Sie die authentische Lykische Küste mit kristallklarem Wasser, versunkenen Städten und geschützten Ankerbuchten. Wir organisieren Ihren unvergesslichen Charter.
          </p>
          <CharterRequestForm>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Jetzt Kaş & Kalkan Charter anfragen
            </Button>
          </CharterRequestForm>
        </div>
      </div>
    </div>
  );
};

export default KasKalkan;