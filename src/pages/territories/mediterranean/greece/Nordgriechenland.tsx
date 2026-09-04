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
import TopDestinations from "@/components/TopDestinations";
const Nordgriechenland = () => {
  useEffect(() => {
    document.title = "Yachtcharter Nordgriechenland | Chalkidiki & Thessaloniki Segeln";
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Nordägäis & Thermaischer Golf"
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
    value: "Heiliger Berg Athos"
  }];
  const cities = ["Thessaloniki", "Kavala", "Alexandroupoli", "Nea Moudania", "Ouranoupoli", "Ammouliani"];
  const highlights = ["Drei \"Finger\" der Chalkidiki-Halbinsel", "UNESCO-Welterbe Berg Athos", "Kristallklare Gewässer und Sandstrände", "Authentische griechische Kultur", "Moderate Winde - ideal für Familien", "Reiche Geschichte und Archäologie", "Exzellente lokale Küche"];
  const mapMarkers = [{
    lat: 40.6401,
    lng: 22.9444,
    name: "Thessaloniki",
    type: "base"
  }, {
    lat: 40.0583,
    lng: 23.8333,
    name: "Nea Moudania",
    type: "base"
  }, {
    lat: 40.3167,
    lng: 23.9833,
    name: "Ouranoupoli",
    type: "destination"
  }, {
    lat: 40.3500,
    lng: 23.8667,
    name: "Ammouliani",
    type: "destination"
  }, {
    lat: 40.9394,
    lng: 24.4069,
    name: "Kavala",
    type: "destination"
  }];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/f5227d64-8443-47fd-be3d-af465828b4a5.webp" alt="Nordgriechenland Chalkidiki" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Nordgriechenland</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Nordgriechenland</h1>
            <p className="text-xl max-w-2xl">
              Chalkidiki & Thermaischer Golf
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

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere/mittelmeer">Mittelmeer</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere/mittelmeer/griechenland">Griechenland</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Nordgriechenland</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-blue-500 mb-2">
                <fact.icon className="w-6 h-6 mx-auto" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{fact.label}</h3>
              <p className="text-gray-600 text-sm">{fact.value}</p>
            </div>)}
        </div>

        {/* Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nordgriechenland Karte</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TerritoryMap region="Nordgriechenland" center={{
            lat: 40.4,
            lng: 23.7
          }} zoom={8} markers={mapMarkers} className="h-96 w-full rounded-lg" />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Nordgriechenland & Chalkidiki – Ihr Törn durch die nördliche Ägäis</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Warum dieses Revier?</h3>
            <p className="text-gray-600 mb-6">
              Nordgriechenland mit der Halbinsel Chalkidiki zählt zu den vielseitigsten Revieren der Ägäis – ein nautisches Mosaik aus kristallklarem Wasser, kiefernbewachsenen Küsten, versteckten Ankerbuchten, charmanten Fischerdörfern und modernen Marinas. Für Segler, Motorbootfahrer und Wassersportbegeisterte eröffnet sich hier ein Revier mit entspannten Distanzen, zuverlässigen Winden und einer Infrastruktur, die vom Bareboat-Charter über Katamaran-Flotten bis zur exklusiven Superyacht alles abdeckt. Thessaloniki und Kavala sind dabei die beiden wichtigen Anreiseflughäfen; die eigentlichen Charterbasen liegen mit Nikiti (Sithonia) und Keramoti/Kavala meist auf der Halbinsel beziehungsweise direkt an der Küste – perfekt gelegen, um die drei „Finger" von Chalkidiki (Kassandra, Sithonia, Athos) und die Inselwelt der Nordägäis (Thassos, Limnos, Samothraki, Ammouliani) auf einem abwechslungsreichen Törn zu verbinden. Moderne Marinas wie Porto Carras (Sithonia) oder Miraggio (Kassandra) sowie die Marina Kavala bieten professionelle Services und komfortable Liegeplätze – optimal für den Start in Ihr Inselhopping in der Nordägäis.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Die Regionen im Überblick</h3>
            <div className="mb-6">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Kassandra</strong> – der westliche „Finger" mit langen Sandstränden, gepflegten Resorts und der Boutique-Marina Miraggio im Süden (Paliouri). Ideal für Crewed-Charter, Familien und Motorboote, die kurze Schläge und exzellente Landinfrastruktur schätzen.</li>
                <li><strong>Sithonia</strong> – der mittlere „Finger" gilt als landschaftlich wild-romantisch: fjordartige Buchten, smaragdgrüne Lagunen um Vourvourou und Diaporos, dazu die Full-Service-Marina Porto Carras bei Neos Marmaras. Perfekt für Ankerfans, SUP- und Schnorchel-Liebhaber.</li>
                <li><strong>Athos</strong> – der östliche „Finger" mit dem autonomen Mönchsstaat. Umsicht ist Pflicht: Es gilt ein Abstand zur Küstenlinie; Landgänge im Klostergebiet sind genehmigungspflichtig und für Frauen nicht erlaubt. Planen Sie Ihren Kurs entsprechend und halten Sie die Distanzvorgaben ein.</li>
                <li><strong>Ammouliani & Drenia-Inselchen</strong> – kleine, türkisfarbene Paradiese zwischen Sithonia und Athos. Traumhafte Badestopps, die sich ideal in gemütliche Tagesetappen integrieren lassen.</li>
                <li><strong>Thassos</strong> – grüne Rundinsel südlich von Kavala mit sicheren Häfen (Limenas, Limenaria) und pitschklaren Buchten (z. B. Aliki). Beste Kombination aus Natur, Tavernen und kurzen Schlägen.</li>
                <li><strong>Limnos (Lemnos)</strong> – größer, ursprünglicher und ein Top-Tipp für erfahrene Skipper: Myrina als Hafenstadt, Moudros als weitläufige, hervorragend geschützte Bucht – ein klassisches Meltemi-Zufluchtsrevier.</li>
                <li><strong>Samothraki</strong> – monumental und rau, berühmt für Wasserfälle und den Kult der „Großen Götter". Yachthäfen sind rar (Kamariotissa), Ankerplätze begrenzt – ein Ziel für stabile Wetterfenster und ambitionierte Crews.</li>
              </ul>
            </div>

            {/* Erreichbarkeit Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Erreichbarkeit: So kommen Sie bequem nach Nordgriechenland</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Direktflug nach Thessaloniki (SKG)</strong> – größter Airport Nordgriechenlands mit ganzjährigem Betrieb und zahlreichen saisonalen Nonstop-Verbindungen aus Deutschland, Österreich und der Schweiz. Von SKG sind die Marinas auf Chalkidiki in 60–120 Min. per Transfer erreichbar.</li>
                <li><strong>Direktflug nach Kavala (KVA)</strong> – ideal für Thassos, Limnos oder den Start in Kavala; saisonale Direktverbindungen und schnelle Anbindung an die Marina.</li>
                <li><strong>Anreise mit dem Auto</strong> – über die Autobahn A2/Egnatia Odos erreichen Sie Thessaloniki, Chalkidiki und Kavala komfortabel; besonders attraktiv für Crews aus Süddeutschland und Österreich (flexibles Gepäck/Proviant).</li>
                <li><strong>Fähren & Inlandsflüge</strong> – ergänzend verbinden Fähren den Hafen Kavala mit den Inseln der Nordägäis; Inlandsflüge erleichtern Crewwechsel.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Anreise, Charterbasen und Marinas: Wer bietet was?</h3>
            <p className="text-gray-600 mb-4">
              In Nordgriechenland lohnt es sich, klar zwischen Anreiseflughäfen, tatsächlichen Charterbasen und reinen Marinas beziehungsweise Revierorten zu unterscheiden – die Auswahl an Yachten ist hier kleiner als in Athen, Lefkas oder auf Korfu, und nicht jeder Ort mit Marina ist automatisch auch ein Wochencharter-Stützpunkt.
            </p>
            <div className="text-gray-600 mb-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Anreiseflughäfen</h4>
                <p><strong>Thessaloniki (SKG)</strong> – größter Flughafen Nordgriechenlands, wichtigster Anreisepunkt für Chalkidiki, Nikiti und Sithonia; Transfer zu den Yachtbasen dauert je nach Ziel rund 60–120 Minuten. <strong>Kavala (KVA)</strong> – ideal für Törns ab Keramoti, Kavala oder Thassos, mit kurzer Anbindung an die Marina.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Typische Charterbasen</h4>
                <p><strong>Nikiti (Sithonia)</strong> – für klassische Chalkidiki-Routen die naheliegende Basis, mit kurzen Wegen zu Sithonia, Diaporos und dem Athos-Blick. <strong>Keramoti / Kavala Marina</strong> – moderne, schwimmende Marina im Altstadthafen mit rund 200 Liegeplätzen; Ausgangspunkt für Törns Richtung Thassos, Athos und Sithonia. Je nach Anbieter und Saison sind ergänzend auch Nea Peramos oder Avdira (Xanthi) als kleinere Charterbasen im Angebot – Flottengröße und Verfügbarkeit dort bitte individuell mit dem Anbieter klären.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Marinas, Revierorte und Stopps</h4>
                <p><strong>Porto Carras Marina (Sithonia, Neos Marmaras)</strong> – groß dimensionierte, bestens geschützte Marina; bis ~60 m LOA, ~5,5 m Tiefe, umfangreiche Services. <strong>Miraggio Marina (Kassandra, Paliouri)</strong> – preisgekrönte Boutique-Marina mit rund 80 Plätzen (bis 40 m), 24/7-Service und gehobenem Resort-Anschluss. <strong>Ormos Panagias (Sithonia, Ostküste)</strong> – touristischer Hafen, ca. 170 Plätze, guter Zwischenstopp Richtung Diaporos. <strong>Sani und Sarti</strong> sowie <strong>Ouranoupoli</strong> – beliebte Revierorte und Tagesstopps, jedoch keine klassischen Wochencharter-Stützpunkte. <strong>Thessaloniki/Aretsou (Kalamaria)</strong> – 242 Liegeplätze für Yachten bis 30 m, stadtnahe Lage; eher für Crewed-Charter mit urbanem Vorprogramm als für den klassischen Bareboat-Start in Chalkidiki.</p>
              </div>
            </div>

            {/* Blog Link Box: Chalkidiki Routenguide */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Törnideen für Chalkidiki</h4>
              <p className="text-gray-700 mb-4">
                Sie möchten wissen, welche Route ab Nikiti, Keramoti oder Kavala zu Ihrer Crew passt? Unser Routenguide zeigt Varianten für 7 bis 14 Tage – mit Sithonia, Athos-Blick, Thasos, Porto Koufo und Diaporos.
              </p>
              <Link to="/blog/yachtcharter-chalkidiki-thessaloniki-nikiti-keramoti" className="inline-flex items-center text-primary font-semibold hover:underline">
                Zum Routenguide Chalkidiki
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Beliebte Törnziele & nautische Highlights</h3>
            <div className="text-gray-600 mb-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Kassandra</h4>
                <p>Von Nea Skioni bis Paliouri warten weite Sandstrände und ruhige Buchten. Die Miraggio Marina dient als komfortabler Stützpunkt. Empfehlenswerte Badestopps: die Buchten rund um Kanistro-Kap; abends Tavernen am Fischerhafen von Nea Skioni.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Sithonia: Vourvourou & Diaporos</h4>
                <p>Die Lagunen um Diaporos sind berühmt für ihr karibisch anmutendes Wasser – flach, glasklar und ideal zum Schnorcheln, SUP und für Crew-Badepausen. Ankern Sie auf Sand (gute Haltekraft) in geschützten Buchten wie „Blue Lagoon" und genießen Sie kurze Dingi-Trips an Land. Porto Carras bietet nach dem Naturtag erstklassigen Marina-Komfort.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Athos-Halbinsel (ohne Landgang im Klostergebiet)</h4>
                <p>Die Westküste des Athos mit ihren spektakulären Klöstern ist ein eindrucksvoller, rein maritimer Höhepunkt. Beachten Sie den vorgeschriebenen Mindestabstand zur Küste und planen Sie Ihr Routing konservativ; Patrouillenboote kontrollieren. Für Stopps außerhalb des autonomen Gebiets sind Ouranoupoli und Ammouliani beliebt.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Ammouliani & Drenia-Inselchen</h4>
                <p>Türkisblaue Badebuchten, feiner Sand, kurze Distanzen – perfekt für Familien und Crews, die viele Badestopps einplanen. Ankern auf Sandflächen bei leichten Winden gut möglich.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Thassos</h4>
                <p>Limenas (Thassos-Stadt) und Limenaria bieten sichere Liegeplätze und Proviantmöglichkeiten. Rund um die Insel locken Buchten wie Aliki (tagsüber beliebt), Tripiti oder Skala Rachoniou – ideal für Inselrunden mit vielen Badestopps.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Limnos (Lemnos)</h4>
                <p>Myrina (W-Küste) ist die postcard-schöne Hafenstadt; in der Moudros-Bucht findet man hervorragenden Rundum-Schutz – gerade bei auffrischendem Meltemi eine sichere Option. Navigieren Sie umsichtig: in offenen Buchten kann Schwell stehen.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Samothraki</h4>
                <p>Für gut vorbereitete Crews mit Blick auf Wetterfenster: Kamariotissa ist der zentrale Hafen, Natur und Kultur (Archäologie, Wasserfälle) sind spektakulär. Aufgrund weniger Häfen ist ein flexibles Törnkonzept ratsam.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">7-Tage-Törnempfehlung ab Kavala</h3>
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800">Tag 1 – Kavala → Limenas (Thassos)</h4>
                <p className="text-gray-600">Check-in, Sicherheitseinweisung, kurzer Schlag (ca. 15–20 sm) nach Thassos-Stadt. Abends Bummeln in der Altstadt, frischer Fisch an der Promenade. Liegeplatz: Hafen Limenas.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800">Tag 2 – Thassos Südostrunde (Aliki/Salonikios) → Limenaria</h4>
                <p className="text-gray-600">Baden in Aliki (früh kommen), weiter um die Südspitze; abends Limenaria (Hafen), Tavernen am Wasser.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800">Tag 3 – Limenaria → Limnos (Myrina)</h4>
                <p className="text-gray-600">Früh auslaufen für den längeren Schlag (Wetterfenster beachten). Myrina bietet Stadthafen-Flair, versorgt und geschützt – ideal für Landgang und Proviant.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800">Tag 4 – Myrina → Moudros-Bucht (Limnos)</h4>
                <p className="text-gray-600">Kurzstrecke nach Moudros: ausgedehnte, sehr geschützte Bucht mit Sand/Mud-Grund – perfekter Chill- und SUP-Tag; bei Starkwind Plan B für zusätzliche Nacht.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800">Tag 5 – Moudros → Thassos (Nord-/Westküste)</h4>
                <p className="text-gray-600">Rückschlag Richtung Thassos. Ankern Sie je nach Wind in Skala Rachoniou oder an der Westküste; ruhiger Abend vor Anker.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800">Tag 6 – Thassos → Festlandbucht / Ammouliani-Alternative</h4>
                <p className="text-gray-600">Je nach Restzeit: Entweder gemütliche Festlandbucht Richtung Kavala oder bei stabilem Wetter optionaler Abstecher Ammouliani/Drenia mit Badestopps – dann längerer Rückschlag am Folgetag. (Bei Wahl Ammouliani: Distanz und Athos-Abstände berücksichtigen.)</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-800">Tag 7 – Zurück nach Kavala</h4>
                <p className="text-gray-600">Frühe Ankunft, Törnabschluss, Bunkerung/Check-out.</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-8">Hinweis: Distanzen sind abhängig von Start-/Ziel-Buchten. Passen Sie Etappen an Crew-Erfahrung, Wetter und Tageslicht an; bei Meltemi-Phasen bieten Moudros (Limnos) und die West-/Nordküste von Thassos verlässliche Alternativen.</p>

            {/* Wetter & Windbedingungen Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wetter & Windbedingungen: Meltemi – aber moderater als in den Kykladen</h3>
              <div className="text-gray-600 space-y-4">
                <p>Im Sommer prägt der Meltemi die Ägäis – ein trockener, nördlicher Wind, der in der Zentral- und Südägäis teils stürmisch bläst. Im Norden weht er in der Regel schwächer und berechenbarer: häufig Bf 2–5, lokal durch Orographie und Düseneffekte moduliert. In Chalkidiki drehen Wind und Böigkeit durch Land-See-Wind-Einflüsse; in den Diaporos-Lagunen und den Buchten Süd-Sithonias herrschen oft angenehme, badetaugliche Bedingungen. Frühling und Herbst bringen milde Temperaturen, wärmespeicherndes Wasser und oft sehr stabiles Wetter – ideal für Genießer-Törns mit viel Landprogramm.</p>
                
                <h4 className="font-semibold text-gray-800">Saisonaler Überblick</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Frühling (April–Juni):</strong> Längere Hochdruckphasen, moderater Wind, noch ruhige Häfen – perfekt für Einsteiger, Bareboat-Crews und Skippertrainings.</li>
                  <li><strong>Sommer (Juli–August):</strong> Verlässlicher Meltemi, thermische Effekte; im Vergleich zu den Kykladen meist angenehmer. Planung mit Vormittagsetappen und Badepausen ist ideal.</li>
                  <li><strong>Herbst (September–Oktober):</strong> Warmes Wasser, entspannter Andrang, oft sanfte Brisen – Lieblingszeit vieler Stammcrews.</li>
                </ul>

                <h4 className="font-semibold text-gray-800">Revier-Eignung nach Erfahrungsstufe</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Einsteiger & Familien:</strong> Chalkidiki (Sithonia/Diaporos), Thassos-Runde mit kurzen Schlägen, Marinas mit Full-Service.</li>
                  <li><strong>Fortgeschrittene:</strong> Limnos via Myrina/Moudros, optional Samothraki bei stabilem Fenster.</li>
                  <li><strong>Experten:</strong> Kombi-Routen Nordägäis ↔ Sporaden, längere Querungen und küstennahe Strömungstaktik.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Beste Reisezeit für Yachtcharter in Nordgriechenland</h3>
            <p className="text-gray-600 mb-6">
              Mai bis Oktober ist die Kernzeit. Wer ruhigere Marinas, milde Winde und warmes Wasser schätzt, wählt Mai/Juni oder September/Oktober. Für badelastige Familien-Törns und Inselhopping Nordägäis mit vielen Ankerstopps ist Juli/August attraktiv – mit der Option, meltemikalen Tagen über geschützte Kurswahl (z. B. Moudros, West-Thassos, Sithonia-Buchten) auszuweichen.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Praktische Hinweise & Sicherheit</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li><strong>Athos-Regeln:</strong> Küstenabstand strikt einhalten; Landgang im Klostergebiet reglementiert. Planen Sie Ihre Route außerhalb der Sperrzonen und prüfen Sie lokale Hinweise.</li>
              <li><strong>Häfen & Versorger:</strong> Thessaloniki/Aretsou, Miraggio (Kassandra), Porto Carras (Sithonia), Ormos Panagias sowie Kavala Marina sind zuverlässige Basen für Übernahmen, Crewwechsel und Proviant.</li>
              <li><strong>Ankern:</strong> In den Lagunen von Diaporos/Sithonia auf Sand mit ausreichender Kettenlänge; bei auffrischendem Wind geschützte Alternativen nutzen.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fazit: Yachtcharter Nordgriechenland & Chalkidiki – Vielfalt auf kurzer Distanz</h3>
            <p className="text-gray-600 mb-6">
              Dieses Revier verbindet alles, was Segeln in der Ägäis so besonders macht – nur eine Spur entspannter: abwechslungsreiche Küsten, sichere Buchten, kurze Etappen, verlässliche (meist moderate) Winde und eine Marina-Infrastruktur vom familiären Fischerhafen bis zum 5-Sterne-Resort. Ob Bareboat mit Freunden, Skipper-geführter Familienurlaub, Katamaran-Komfort oder sportlicher Schlag zur nächsten Insel – Nordgriechenland und Chalkidiki liefern die perfekte Bühne für einen individuellen Törn zwischen Natur, Kultur und mediterranem Lebensgefühl.
            </p>

            <p className="text-gray-600">
              <strong>Jetzt Ihren Wunschtörn sichern:</strong> Teilen Sie uns Start-Marina (z. B. Thessaloniki/Aretsou, Porto Carras, Miraggio, Kavala), Reisezeitraum und Crewgröße mit – wir beraten Sie persönlich zu Bareboat-Optionen, Skipper-Charter, Katamaranen und Segelyachten, optimieren die Route nach Wind & Welle und reservieren passende Liegeplätze.
            </p>
            <p className="text-gray-600 font-semibold">
              Kontakt aufnehmen & Angebot erhalten – Ihr Yachtcharter in Nordgriechenland beginnt hier.
            </p>

            {/* Prominent CTA Button */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 mt-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Bereit für Ihr Nordgriechenland-Abenteuer?
              </h3>
              <p className="text-gray-700 mb-4">
                Starten Sie jetzt Ihre Anfrage und lassen Sie sich von unseren Experten beraten.
              </p>
              <CharterRequestForm>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-semibold">
                  Jetzt Nordgriechenland-Charter anfragen
                </Button>
              </CharterRequestForm>
            </div>
          </div>
        </div>

        {/* Important Islands/Harbors */}
        

        {/* Highlights */}
        

        {/* Sample Itinerary */}
        <div className="max-w-4xl mx-auto mb-12">
          
        </div>

        <TopDestinations />
      </div>
    </div>;
};
export default Nordgriechenland;