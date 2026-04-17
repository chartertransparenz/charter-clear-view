import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import TerritoryMap from "@/components/TerritoryMap";
import destinationGreece from "@/assets/destination-greece.jpg";
import TopDestinations from "@/components/TopDestinations";
const Sporades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Nordägäis"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-September"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Naturliebhaber"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Grüne Inseln"
  }];
  const cities = ["Skiathos", "Skopelos", "Alonissos", "Skyros"];
  const highlights = ["Mamma Mia Filmkulisse (Skopelos)", "Unberührte Natur und Strände", "Meeresschutzgebiet Alonissos", "Weniger frequentiert", "Grüne, bewaldete Inseln", "Authentisches Griechenland", "Kurze Distanzen zwischen Inseln"];
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/2fa92b23-1064-4b8e-b8aa-53f7c85fdfdf.webp" alt="Sporaden Griechenland - Kristallklares Wasser und Segelyacht" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Sporaden</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sporaden</h1>
            <p className="text-xl max-w-2xl">
              Grüne Juwelen der Nordägäis
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer/griechenland" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Griechenland
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Start</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer">Mittelmeer</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer/griechenland">Griechenland</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Sporaden</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => {
            const getAnchorLink = (label) => {
              switch(label) {
                case "Lage": return "#erreichbarkeit";
                case "Beste Zeit": return "#beste-reisezeit";
                case "Geeignet für": return "#eignung-erfahrungsstufe";
                case "Besonderheit": return "#wetter-windbedingungen";
                default: return "#";
              }
            };
            
            return (
              <a key={index} href={getAnchorLink(fact.label)} className="block bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </a>
            );
          })}
        </div>

        {/* Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sporaden</h2>
          <TerritoryMap
            region="Sporaden"
            center={{ lat: 39.2, lng: 23.7 }}
            zoom={8}
            maptype="satellite"
            className="h-96"
          />
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Sporaden – Ihr Törn ab Volos, Skiathos oder Skopelos</h2>
            <p className="text-xl text-muted-foreground">
              Grüne Juwelen der Nordägäis
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Die Nördlichen Sporaden sind das grüne Herz der Ägäis: pinienbewachsene Hänge bis ans Wasser, kristallklare Buchten mit sandigem Ankergrund, lebendige Hafenorte – und Winde, die seltener rau als in den Kykladen wehen. Wer hier Yachtcharter plant, findet ein Revier zwischen Komfort und Charakter: überschaubare Distanzen, viele Lee-Buchten, dazu ausreichend Brise für genussvolles Cruising. Von Volos am Festland sowie den Inseln Skiathos und Skopelos erreichen Sie in kurzer Zeit die gesamte Inselgruppe – einschließlich Alonissos und des Meeresnationalparks der Nördlichen Sporaden.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Gegenüber anderen griechischen Revieren punkten die Sporaden mit viel Grün, ruhigerem Seegang im Inselschutz, zahlreichen All-Weather-Anchorages und einer bemerkenswerten Naturvielfalt. Gleichzeitig gibt es genug seglerische Substanz: Düseneffekte zwischen den Inseln, tageszeitliche Thermik, gelegentliche Fallböen in steilen Buchten und ein Sommerwind mit Nordkomponente, der verlässlich für Fahrt im Schiff sorgt. Das Ergebnis ist ein Revier, das Einsteiger, Familien und Genusssegler ebenso anspricht wie ambitionierte Crews, die ihre Manöver verfeinern wollen.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Erreichbarkeit</h4>
              <p className="text-black mb-3">So kommen Sie bequem an Bord:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Volos (Flughafen Nea Anchialos / VOLOS-Region):</strong> Gute Anbindung per Flug (saisonal) und über Athen/Thessaloniki; kurze Wege zum Hafen. Volos ist ideal, wenn Sie auf dem Festland starten möchten – mit umfassenden Einkaufsmöglichkeiten und zügigem Transfer zur Yacht.</li>
                <li><strong>Skiathos (JSI):</strong> Saisonale Direktflüge aus mehreren europäischen Städten; der New Port liegt nahe dem Flughafen. Perfekt für Crews, die unmittelbar im Inselrevier ablegen wollen.</li>
                <li><strong>Skopelos:</strong> Kein Flughafen, aber per Fähre von Volos/Skiathos aus erreichbar. Skopelos-Stadt (Chora) und Loutraki/Glossa dienen als Einstiegspunkte, wenn Sie bereits im Revier sind oder eine One-Way-Charter planen.</li>
                <li><strong>Transfers & Services:</strong> Wir organisieren Door-to-Dock-Transfers, Proviantlieferungen an Bord sowie frühe/late Check-ins nach Verfügbarkeit.</li>
              </ul>
            </div>

            <div id="marinas-ausgangshaefen" className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Marinas & Ausgangshäfen</h4>
              
              <div className="mb-4">
                <h5 className="font-semibold text-black mb-2">Volos – Marina & Stadthafen</h5>
                <p className="text-black">Volos ist eine vollwertige Basis mit Wasser/Power am Steg, Tankservice, Chandlery, Werkstätten, Wäscherei sowie Supermärkten und Bäckern in Laufweite. Der Schutz ist gut, die Wege sind kurz – ideal für reibungslosen Check-in, Riggsichtung und Sicherheitsbriefing vor dem Ablegen Richtung Skiathos/Skopelos.</p>
              </div>
              
              <div className="mb-4">
                <h5 className="font-semibold text-black mb-2">Skiathos – New Port / Marina-Areal</h5>
                <p className="text-black">Der Hafen von Skiathos ist die Insel-Drehscheibe: Liegeplätze im New-Port-Bereich, Wasser/Power (teils via Karten), kraftstoffseitige Versorgung über Tankwagen/Station. Ums Eck: Proviantmärkte, Bäcker, Cafés – und die Startlinie zu zahlreichen Süd- und Westbuchten mit sandigem Grund.</p>
              </div>
              
              <div>
                <h5 className="font-semibold text-black mb-2">Skopelos – Chora & Loutraki (Glossa)</h5>
                <p className="text-black">Skopelos-Stadt bietet einen gut geschützten Stadthafen mit Buganker/Heckleinen, Wasser/Power und Gastronomie direkt am Kai. Loutraki/Glossa ist das Tor zur Westküste und ein praktischer Zwischenstopp auf dem Weg nach Alonissos. Im Ort Neo Klima/Elios gibt es zusätzlich Liegeplätze und Versorgungsmöglichkeiten.</p>
              </div>
            </div>

            <div className="mb-8">
              <img 
                src="/lovable-uploads/cf2311b1-fbc6-4174-910a-a5d89e0d8191.webp" 
                alt="Blick auf Skiathos mit dem Hafen im Hintergrund" 
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-4"
              />
              <div className="bg-muted/30 p-4 rounded-lg border border-border/40">
                <p className="text-muted-foreground italic text-sm leading-relaxed">
                  Blick auf Skiathos mit dem Hafen im Hintergrund.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele – Inseln, Buchten, nautische Highlights</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Skiathos – Pinien & Sandbuchten</h4>
            <p className="mb-6">
              Die Südküste von Skiathos ist ein Ankerparadies: Koukounaries und benachbarte Buchten bieten sandigen Grund mit gutem Halt, kurze Dinghy-Wege zum Strand und glasklares Wasser. An der Nordküste warten spektakuläre Kulissen – bei Brise jedoch exponierter. Tipp für den Ankunftstag: ein kurzer Daysail zu einer windgeschützten Süd-Bucht, Anker setzen, Landleine anbringen – und ankommen.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Skopelos – Panormos, Neo Klima & Chora</h4>
            <p className="mb-6">
              Panormos ist eine der beliebtesten Buchten der Sporaden: weit, grün umrahmt, mit sandigem Grund und Landleinen-Option. In Neo Klima/Elios finden Sie Stege mit Versorgungsanschlüssen; die Chora (Skopelos-Stadt) bietet das Bilderbuch-Griechenland aus weißen Häusern und Tavernen am Wasser. Südlich locken Buchten wie Stafylos für Bade- und Ankernächte.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Alonissos – Patitiri & Steni Vala</h4>
            <p className="mb-6">
              Patitiri ist der Haupthafen, Steni Vala der bevorzugte Yacht-Stopp mit Tavernen direkt am Wasser. Rund um Alonissos finden sich ruhige Lee-Buchten; bei der Törnplanung bitte die Regelungen des Meeresnationalparks beachten (Schutzzonen, Anker- und Zugangsregeln, teilweise nur tagsüber, teils Moorings).
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Peristera, Kyra Panagia & Skantzoura – Nationalpark & Natur pur</h4>
            <p className="mb-6">
              Vor Alonissos liegen die Nationalpark-Inseln mit glasklaren Gewässern, stillen Buchten und Mittelmeer-Mönchsrobben-Habitat. Hier segeln Sie achtsam: Zonen beachten, Ankerdisziplin wahren, Müllvermeidung ernst nehmen. Der Lohn sind unvergessliche Momente in nahezu unberührter Natur.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Skyros – für längere Törns</h4>
            <p className="mb-6">
              Wer Zeit hat, erweitert nach Skyros: weniger frequentiert, rauher und mit langen, offenen Schlägen – ein Ziel für ambitionierte Crews in stabilen Wetterfenstern.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnvorschlag – eine Woche ab Skiathos (familien- & genussorientiert)</h3>
            <p className="mb-4 font-medium">Ziel: Maximale Badezeit, sichere Lee-Liegeplätze, kurze Verlegeetappen und dennoch genügend Segelstunden in der Tagesbrise.</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1 – Skiathos → Süd-Bucht (z. B. Koukounaries-Region)</h5>
                <p className="text-sm text-muted-foreground">Ankommen, Check-in, Sicherheitsbriefing. Kurzer Schlag an die Südküste, Anker auf Sand, Landleinen anland. Abend im Cockpit, der Pinienduft weht über die Bucht.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2 – Skiathos → Skopelos (Panormos/Neo Klima)</h5>
                <p className="text-sm text-muted-foreground">Badepause unterwegs, dann Panormos zum Freischwimmen: großzügig Kette stecken, Halt mit Rückwärtsfahrt prüfen. Alternativ Neo Klima für Stegkontakt und Landgang.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3 – Skopelos (Chora) & Südostbuchten</h5>
                <p className="text-sm text-muted-foreground">Vormittags kurzer Hüpfer in die Stadt – Proviant, Bäcker, ein Eis an der Promenade. Nachmittags in eine Südostbucht verholen (z. B. Stafylos), Heckleinen an Land, Sundowner.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4 – Skopelos → Alonissos (Steni Vala/Patitiri)</h5>
                <p className="text-sm text-muted-foreground">Gemütlicher Kurs ostwärts. Steni Vala bietet Tavernen und Minimärkte direkt am Wasser; Patitiri mehr urbane Vielfalt. Ankerdisziplin: Kette großzügig, Schwojkreis prüfen.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5 – Nationalpark-Tag (Peristera/Kyra Panagia – Regeln beachten)</h5>
                <p className="text-sm text-muted-foreground">Früh los, Natur genießen. Schutzzonen respektieren, ggf. auf Moorings ausweichen, nur tagsüber ankern wo vorgeschrieben. Taucherbrille nicht vergessen – Sichtweiten sind großartig.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6 – Alonissos → Skopelos (Loutraki/Neo Klima)</h5>
                <p className="text-sm text-muted-foreground">Zurück Richtung Westen. In Loutraki (Glossa) oder Neo Klima am Steg liegen, Dusche, Wasser auffüllen. Wer mag, macht einen Abendspaziergang nach Glossa.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7 – Skopelos → Skiathos</h5>
                <p className="text-sm text-muted-foreground">Letzter Schlag mit Badepause. Fuel-Dock, Check-out – und die nächste Sporaden-Route schon im Kopf.</p>
              </div>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <h5 className="font-semibold text-black mb-2">Varianten:</h5>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Start ab Volos:</strong> Erster Stopp an der Halbinsel Trikeri oder im Pagasitischen Golf, dann Kurs über Skiathos nach Skopelos/Alonissos.</li>
                <li><strong>Start ab Skopelos:</strong> Direkt ins Zentrum – ideal für Crews, die weniger Transfer wünschen und die Süd- und Westbuchten intensiv nutzen möchten.</li>
                <li><strong>Katamaran-Charter:</strong> Flache Buchten und breite Liegemöglichkeiten; Schwojkreis und Nachbaryachten im Blick behalten.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg mb-8">
              <p className="text-black"><strong>Seemannschaft – Kurzcheck:</strong> Wetterfenster täglich prüfen; in Gewitterlagen frühzeitig Schutz suchen. Anker auf Sand, Kettenlänge großzügig bemessen, Halt per Rückwärtsfahrt testen, Ankeralarm aktivieren. Hafenmanöver: Buganker präzise fallen lassen, Heckleinen rechtzeitig, Fender auf Arbeits- und Ruhehöhe. Crewbriefing: Rollen an Deck, Dinghy-Regeln, Sonnenschutz & Hydration.</p>
            </div>

            <div className="mb-8">
              <img 
                src="/lovable-uploads/5d3cff17-20d4-4be9-a618-be5438ccdb0e.webp" 
                alt="Kristallklares Wasser in den Sporaden mit Yachten vor anker in einer türkisblauen Bucht" 
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-4"
              />
              <div className="bg-muted/30 p-4 rounded-lg border border-border/40">
                <p className="text-muted-foreground italic text-sm leading-relaxed">
                  Tauchen Sie ein in die Inselwelt der Sporaden und entdecken Sie Ihren Ankerplatz, um im kristallklaren Wasser zu schwimmen und die Seele baumeln zu lassen.
                </p>
              </div>
            </div>

            <h3 id="wetter-windbedingungen" className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen</h3>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Überblick:</strong> Die Sporaden liegen abseits der stärksten Meltemi-Achse der Zentralägäis. Im Sommer setzt tagsüber eine Nord- bis Nordwestbrise ein, die abends häufig abflaut. Das sorgt für planbares Cruising mit viel Badezeit und moderaten Seegangsverhältnissen im Inselschutz. Frühling und Herbst bringen mildere, variablere Winde – ideal für Einsteiger und Familien.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Tagesgang (Sommer):</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Morgen:</strong> Oft ruhig – perfekt für Verlegemanöver, Proviant und Badestopp.</li>
                <li><strong>Mittag/Nachmittag:</strong> Aufbau der Brise mit Nordkomponente; zwischen Inseln und an Kaps kann es kurzzeitig zulegen (Düseneffekt).</li>
                <li><strong>Abend/Nacht:</strong> Abflauen – in Lee-Buchten sehr ruhige Nächte.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Lokale Effekte:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fallböen in steil eingeschnittenen Buchten – Heckleinen sauber fahren, Fender passend ausbringen.</li>
                <li>Thermik bei Hitzeperioden – gute Gelegenheit, den Trimm feinzujustieren.</li>
                <li>Gewitterfenster in Randzeiten – Wetterbericht und Barometer im Blick behalten.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Vergleich zu anderen Revieren:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Ionisches Meer:</strong> Ähnlich gutmütig, jedoch dichter besiedelt und stärker frequentiert; die Sporaden sind grüner als viele Ägäisinseln, aber mit klarerer, trockenerer Luft als das Ionische.</li>
                <li><strong>Kykladen:</strong> Deutlich meltemistärker und exponierter; die Sporaden bieten mehr Lee-Optionen und häufig ruhigere Nächte.</li>
                <li><strong>Dodekanes:</strong> Sportliches Langstreckenrevier; die Sporaden punkten mit kürzeren Etappen und viel Inselschutz – ideal für Crews, die Komfort und Natur priorisieren.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 id="eignung-erfahrungsstufe" className="font-semibold mb-3 text-black">Eignung nach Erfahrungsstufe</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Einsteiger & Familien:</strong> Hervorragend geeignet in Mai/Juni und September/Oktober; viele sichere All-Weather-Anchorages.</li>
                <li><strong>Genusssegler:</strong> Viel Cruising mit Badepausen, mediterranes Flair in Hafenorten wie Skopelos-Chora oder Skiathos-Stadt.</li>
                <li><strong>Ambitionierte Crews:</strong> Längere Schläge zu den Außeninseln (z. B. Kyra Panagia, Skantzoura, ggf. Skyros) und Manövertraining in der verlässlichen Tagesbrise.</li>
              </ul>
            </div>

            <h3 id="beste-reisezeit" className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die beste Reisezeit für Yachtcharter Sporaden liegt in Mai/Juni sowie September/Oktober: angenehme Temperaturen, planbare Brisen, entspannte Häfen. In Juli/August ist Hochsaison – die Winde sind frischer, die Orte lebhafter. Wer dann segelt, nutzt konsequent Lee-Routen, läuft beliebte Häfen früh an oder wählt Ankerbuchten mit Sandgrund und Landleinen.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit</h3>
            <p className="text-lg leading-relaxed mb-8">
              Yachtcharter auf den Sporaden verbindet entspannte Segelbedingungen mit reiche Natur und einer maritimen Infrastruktur, die genau das bietet, was Cruising angenehm macht: sichere Ankerplätze, kurze Wege, gute Versorgung – und dazwischen türkisfarbene Stopps in Pinienstille. Volos liefert das Festlands-Setup mit großer Versorgerdichte, Skiathos und Skopelos legen Sie direkt ins Inselgefühl. Wer Seemannschaft schätzt und Urlaubstage mit viel Wasserzeit füllen möchte, setzt hier den richtigen Kurs.
            </p>
          </div>
        </div>

        {/* CTA - moved here */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Bereit für die Sporaden?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Entdecken Sie die grünen Juwelen Griechenlands mit unberührter 
              Natur und authentischer Atmosphäre.
            </p>
            <CharterRequestForm>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium" size="lg">
                Sporaden Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        {/* Cities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Inseln & Häfen</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{city}</p>
              </div>)}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>)}
          </div>
        </div>

        <TopDestinations />
      </div>
    </div>
  );
};

export default Sporades;