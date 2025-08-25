import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import destinationGreece from "@/assets/destination-greece.jpg";
const Cyclades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Zentralägäis"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Meltemi-Winde"
  }];
  const cities = ["Mykonos", "Santorini", "Paros", "Naxos", "Ios", "Syros", "Tinos", "Andros"];
  const highlights = ["Weltberühmte Inseln Mykonos & Santorini", "Konstante Meltemi-Winde im Sommer", "Authentische griechische Tavernen", "Kristallklares, türkises Wasser", "Klassisches Inselhopping", "Reiche antike Geschichte", "Perfekte Segelbedingungen"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/bfbeae49-044a-4e7b-9f0d-067c2b94c69e.png" alt="Kykladen Griechenland" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Kykladen</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kykladen</h1>
            <p className="text-xl max-w-2xl">
              Das Herz der Ägäis
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
                <BreadcrumbLink asChild>
                  <Link to="/#reviere">Reviere</Link>
                </BreadcrumbLink>
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
                <BreadcrumbPage>Kykladen</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => {
          const getAnchorLink = label => {
            switch (label) {
              case "Lage":
                return "#karte";
              case "Beste Zeit":
                return "#beste-reisezeit";
              case "Geeignet für":
                return "#fazit";
              case "Besonderheit":
                return "#wetter-windbedingungen";
              default:
                return "#";
            }
          };
          return <a key={index} href={getAnchorLink(fact.label)} className="block bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </a>;
        })}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          
        </div>

        {/* Map */}
        <div id="karte" className="mb-12">
          
          <TerritoryMap region="Kykladen Griechenland" center={{
          lat: 37.1,
          lng: 25.2
        }} zoom={6} maptype="satellite" className="max-w-4xl mx-auto" />
        </div>

        {/* Google Maps */}
        <div className="max-w-4xl mx-auto mb-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498536.8825978616!2d24.5346699!3d37.6101426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a77b07688bd3c1%3A0x44e4f32503f9dc99!2sCyclades%2C%20Greece!5e1!3m2!1sen!2s!4v1635780000000!5m2!1sen!2s&z=9&iwloc=&output=embed"
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Karte der Kykladen"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Kykladen – Ihr Törn ab Athen, Lavrion, Mykonos, Paros oder Syros</h2>
            <p className="text-xl text-muted-foreground">
              Das Herz der Ägäis
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Die Kykladen sind das Sinnbild griechischen Segelns: weiß getünchte Dörfer auf kargen Felsen, tiefblaues Wasser, weite Horizonte – und der berühmte Meltemi, der im Sommer zuverlässig für Fahrt im Schiff sorgt. Wer hier Yachtcharter plant, sucht das Zusammenspiel aus sportlichem Cruising, kristallklaren Ankerbuchten und maritimem Kulturerlebnis. Im Gegensatz zu den geschützteren Ionischen Inseln verlangt das Kykladen-Revier dem Skipper etwas mehr Seemannschaft ab: längere Schläge, offeneres Wasser, Düseneffekte zwischen den Inseln und Böen an steilen Hängen. Der Lohn sind Tage voller Segelzeit, spektakuläre Ansteuerungen – von Kea und Kythnos über Serifos, Sifnos und Paros bis Naxos, Mykonos und Syros – und Abende, die nach Salz, gegrilltem Fisch und Ankerlicht riechen.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Als Ausgangsbasis bieten sich vor allem die Region Athen mit der Alimos Marina (Kalamaki) und der Raum Lavrion an – mit dem Hafen Lavrion und der modernen Olympic Marine. Wer direkt „mittendrin" starten will, findet weitere Charteroptionen (weniger Auswahl, dafür kürzere Schläge in die Inselwelt) auf Mykonos, Paros und Syros. Egal von wo Sie ablegen: Die Kykladen sind ein Performance-Revier – ideal für Crews, die Segeln lieben und den Tag bewusst nach Windfenstern planen.
            </p>

            <div className="my-8">
              <img src="/lovable-uploads/83530afe-f741-44d5-b98c-ebd1c9aad6df.png" alt="Griechische Taverne am Meer" className="w-full rounded-lg shadow-lg" />
              <p className="text-sm text-muted-foreground mt-3 italic text-center">
                Stellen Sie sich vor: Nach einem perfekten Segeltag den Abend in einer griechischen Taverne ausklingen lassen, die Stühle direkt am Meer, und das sanfte Plätschern der Wellen lauschen.
              </p>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 id="erreichbarkeit" className="font-semibold mb-3 text-black">Erreichbarkeit</h4>
              <p className="text-black mb-3">So kommen Chartergäste bequem zu ihrer Yacht:</p>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li><strong>Athen (ATH) → Alimos Marina:</strong> Internationale Flüge nach Athen; Transfer per Taxi, Minivan oder Shuttle in die Alimos Marina. Unterwegs sind große Supermärkte und nautische Fachgeschäfte – perfekt für die Proviantierung.</li>
                <li><strong>Athen (ATH) → Lavrion / Olympic Marine:</strong> Vom Flughafen kurze Anfahrt nach Lavrion. Je nach Verkehr steht die Crew in weniger als einer Stunde am Steg – ideal für eine zügige Yachtübernahme und das frühe Ablegen Richtung Kea/Kythnos.</li>
                <li><strong>Direkt auf die Inseln:</strong> Mykonos (JMK), Paros (PAS), Syros (JSY) mit saisonalen Direktflügen oder Fährverbindungen ab Piräus/Rafina</li>
                <li><strong>Transfers & Services:</strong> Wir organisieren Door-to-Dock-Transfers, vorbestellte Proviantlieferungen an Bord sowie frühe/late Check-ins nach Verfügbarkeit.</li>
              </ul>
            </div>

            <div id="marinas-ausgangshaefen" className="border border-gray-300 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3 text-black">Marinas & Ausgangshäfen</h4>
              
              <div className="my-6">
                <img src="/lovable-uploads/963358b3-7cad-4b57-aadf-4cea2f3470ef.png" alt="Hafen mit Muringleinen auf Milos" className="w-full rounded-lg shadow-lg" />
                <p className="text-sm text-muted-foreground mt-3 italic text-center">
                  Hafen mit Muringleinen auf der Insel Milos.
                </p>
              </div>
              <div className="space-y-4 text-black">
                <div>
                  <h5 className="font-semibold mb-2">Alimos Marina (Athen)</h5>
                  <p className="mb-2">Die größte Charterdrehscheibe Griechenlands punktet mit umfassender Infrastruktur: viele Charterflotten, Technikbetriebe, Winterlager, Chandlery, Wasser & Strom am Steg, Tankservice im Hafenbereich.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Lavrion Hafen (Main Port)</h5>
                  <p className="mb-2">Der kommunale Hafen von Lavrion ist die „südliche Rampe" zu den Kykladen. Der Vorteil: Sie sparen Ansteuerungszeit, denn die Westkykladen beginnen praktisch vor der Hafenausfahrt.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Olympic Marine (Lavrion)</h5>
                  <p className="mb-2">Eine der modernsten Marinas im Ägäisraum – mit Muring-Plätzen, 24/7-Security, Travel-Lifts, Werftservice, Hard-Standing, Fuel Dock, Parkflächen und hervorragender Logistik.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Inselstarts: Mykonos, Paros, Syros</h5>
                  <p>Charteroptionen direkt auf den Inseln – weniger Auswahl, dafür kürzere Schläge in die Inselwelt.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Törnziele – West- und Zentral-Kykladen</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Kea – die Torinsel</h4>
            <p className="mb-6">
              Guter erster Stopp nach dem Ablegen in Lavrion: Vourkari bietet Liegeplätze an der Kaimauer, Tavernen, kleine Märkte. In den Buchten an der Nordwestküste genügt meist Sandgrund für sicheren Halt. Der Ort ist lebendig, ohne touristisch zu überdrehen – ein idealer Einstieg.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Kythnos – Thermen & Traumbuchten</h4>
            <p className="mb-6">
              Loutra an der Ostküste ist bekannt für seine warmen Quellen direkt am Strand. Kolona – die berühmte Doppelsandbucht – ist ein Ankertraum, bei Meltemi jedoch offen für Schwell; bei viel Wind besser an die Südküste ausweichen. Heckleinen an Land machen die Nacht ruhig.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Serifos – Felsen und Chora</h4>
            <p className="mb-6">
              Im Hafen Livadi liegt man geschützt und fußläufig zur Chora, die spektakulär über dem Tal thront. Der Ankergrund hält meist hervorragend. Wer wandern mag, steigt zum Kastell hinauf – der Blick über die Ägäis lohnt jeden Schritt.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Sifnos – Kulinarik & Kykladenstil</h4>
            <p className="mb-6">
              Kamares (Hafen) ist gut organisiert, mit Wasser/Power, Bäckern und Läden für frische Vorräte. Rund um die Insel locken stille Ankerplätze; an windreichen Tagen bieten die Süd- und Westbuchten besseren Schutz. Sifnos gilt als Gourmetinsel – perfekte Gelegenheit für ein ausgedehntes Abendessen an Land.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Paros – Parikia & Naoussa</h4>
            <p className="mb-6">
              Parikia bietet eine Mischung aus Geschichte und maritimem Treiben. Naoussa ist pittoresk, aber in Meltemi-Phasen anspruchsvoll. Zwischen Paros und Naxos kann der Wind düsen; Trimm anpassen, ggf. Reff setzen, damit das Boot ruhig läuft.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Naxos – groß & vielfältig</h4>
            <p className="mb-6">
              Als größte Kykladeninsel bietet Naxos zahlreiche Optionen: städtisches Flair, Strände, Täler. Der Hauptort hat Liegeplätze und Versorger; in Buchten im Süden findet man oft besseren Lee-Schutz.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-4">Mykonos – Postkartenmotiv mit Pfeffer</h4>
            <p className="mb-6">
              Mykonos-Stadt ist ein Erlebnis – maritim, mondän, lebhaft. Segler sollten die Böenlinien ernst nehmen: Reffbereitschaft und vorausschauende Ankerdisziplin sind die halbe Miete.
            </p>
            
            <div className="my-8">
              <img src="/lovable-uploads/72d6a75d-c97b-4b2e-b4e6-d0f739d31830.png" alt="Sonnenuntergang über Mykonos mit Windmühlen" className="w-full rounded-lg shadow-lg" />
              <p className="text-sm text-muted-foreground mt-3 italic text-center">
                Lust auf einen atemberaubenden Sonnenuntergang über den sanften Hügeln des griechischen Dorfes Mykonos, wo die farbenfrohe Altstadt und die ikonischen historischen Windmühlen in goldenes Licht getaucht werden?
              </p>
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-4">Syros – Zentrum mit Stil</h4>
            <p className="mb-6">
              Ermoupolis bringt städtische Eleganz in den Törn; Finikas ist die ruhige Alternative im Süden mit viel Lee bei Nordwind. Zudem gute Servicepunkte für Technik und Bordlogistik.
            </p>

            <div className="border border-gray-300 p-4 rounded-lg mb-6">
              <p className="text-black"><strong>Nautische Hinweise:</strong> Das Revier wird vom Meltemi geprägt – reffbereit segeln, Sandgrund für Anker bevorzugen, Lee-Seiten der Inseln bei starkem Wind nutzen.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnvorschlag – eine Woche West-/Zentral-Kykladen ab Lavrion</h3>
            <p className="mb-4 font-medium">Ein balancierter Plan mit seglerischem Anspruch, verlässlichen Lee-Ankerplätzen und genügend Zeit für Landgänge:</p>
            
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Lavrion → Kea (Vourkari)</h5>
                <p className="text-sm text-muted-foreground">Ruhiger Einstieg, Riggsichtung, erste Manöver. In Vourkari liegen Sie an der Kaimauer; Tavernen direkt am Wasser.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Kea → Kythnos (Loutra/Alternative Süd)</h5>
                <p className="text-sm text-muted-foreground">Entspanntes Cruising entlang der Küste, Badepause in einer Bucht. Loutra bietet Wasser/Power und Bäckereien.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Kythnos → Serifos (Livadi)</h5>
                <p className="text-sm text-muted-foreground">Weiter in die Westkykladen. Livadi ist gut geschützt; die Chora über dem Hafen ist lohnendes Ziel für den Abend.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Serifos → Sifnos (Kamares/Ankerbucht)</h5>
                <p className="text-sm text-muted-foreground">Genusssegeln mit Kulinarik-Finale. Kamares mit Versorgung am Kai oder ruhige Bucht an der Süd- oder Westküste.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Sifnos → Paros (Parikia oder Naoussa)</h5>
                <p className="text-sm text-muted-foreground">Zentral-Kykladen im Blick. Parikia bietet Stadthafen und gute Logistik, Naoussa ist landschaftlich reizvoll.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Paros → Syros (Finikas)</h5>
                <p className="text-sm text-muted-foreground">Kurs Nordwest in Richtung Syros. Finikas ist bei Nordwind ein klassischer Lee-Hafen mit Wasser/Power am Steg.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Syros → Lavrion</h5>
                <p className="text-sm text-muted-foreground">Längerer Schlag zurück in Richtung Festland. In Lavrion rechtzeitig zum Fuel Dock, dann Check-out.</p>
              </div>
            </div>

            <h3 id="wetter-windbedingungen" className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen</h3>
            <p className="mb-4">
              Die Kykladen werden im Sommer vom Meltemi geprägt – einem nördlichen, trockenen Wind, der tagsüber auffrischt und abends oft abflaut. Er sorgt für zügiges Segeln und frische Luft, kann aber Seegang aufbauen und erfordert durchdachte Törnplanung.
            </p>
            
            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Tagesgang & Charakter</h4>
              <ul className="space-y-2 text-black">
                <li><strong>Morgen:</strong> Häufig moderat mit ruhiger See – ideal für Abfahrten, Badepausen und Manövertraining.</li>
                <li><strong>Mittag/Nachmittag:</strong> Aufbau der Brise aus nördlichen Richtungen (NW–N–NE); in Düsen zwischen Inseln sowie an Kaps kann es deutlich zulegen.</li>
                <li><strong>Abend/Nacht:</strong> Abflauende Winde, in Lee-Buchten ruhige Nächte; in exponierten Ankerplätzen kann Schwell stehen.</li>
              </ul>
            </div>

            <div className="border border-gray-300 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-black">Saisonale Differenzierung</h4>
              <ul className="space-y-2 text-black">
                <li><strong>Frühling (April–Mai):</strong> Milder, variabler, gelegentlich Gradientwind. Perfekt für Einsteiger.</li>
                <li><strong>Sommer (Juni–September):</strong> Meltemi-Saison mit teils kräftigen Brisen; Reffbereitschaft ist angesagt.</li>
                <li><strong>Herbst (Oktober):</strong> Warmes Wasser, stabile Brisen, mögliche Gewitterlagen; Wetterfenster beobachten.</li>
              </ul>
            </div>

            <h3 id="beste-reisezeit" className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
            <p className="mb-6">
              Die beste Reisezeit für Yachtcharter Kykladen liegt in Mai/Juni sowie September/Oktober: verlässliche Brise, angenehme Temperaturen, entspannte Häfen. In Juli/August herrscht Hochsaison – die Winde sind frischer, die Etappen sportlicher, die Häfen voller: Für erfahrene Skipper ein Traum, für Familien mit kleinen Kindern mitunter fordernd.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit</h3>
            <p className="mb-6">
              Segeln auf den Kykladen ist pures Griechenland – intensiv, klar, reduziert auf das Wesentliche: Wind, Wasser, Fels, Licht. Die Kombination aus sportlichen Schlägen, charaktervollen Inselorten und verlässlicher Marina-Infrastruktur macht das Revier zum Favoriten anspruchsvoller Crews. Athen/Alimos bietet die große Auswahl und die gelernte Charterlogistik, Lavrion und die Olympic Marine den schnellsten Zugang in die Inselwelt.
            </p>
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

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Kykladen?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die berühmtesten Inseln Griechenlands mit perfekten 
              Segelbedingungen und authentischer griechischer Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Kykladen Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Cyclades;