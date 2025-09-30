import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const Ibiza = () => {
  const m = META.ibiza;
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Hauptstadt",
    value: "Ibiza-Stadt (Eivissa)"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Party & Entspannung"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "UNESCO-Weltkulturerbe"
  }];
  const ports = ["Marina Ibiza", "Sant Antoni de Portmany", "Santa Eulària des Riu", "Formentera (La Savina)"];
  const highlights = ["Dalt Vila - UNESCO-Weltkulturerbe", "Weltberühmtes Nachtleben", "Cala Conta - Traumhafte Sonnenuntergänge", "Formentera - Die Karibik Europas", "Beach Clubs & Chiringuitos", "Kristallklares Türkiswasser", "Hippie-Märkte"];
  return <>
      <Meta title={m.title} description={m.description} keywords={m.keywords} ogImage={absoluteOg(m.ogImage)} canonical={m.canonical()} />
      <JsonLd json={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Reviere",
        "item": "https://chartertransparenz.de/reviere"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Mittelmeer",
        "item": "https://chartertransparenz.de/reviere/mittelmeer"
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": "Spanien",
        "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien"
      }, {
        "@type": "ListItem",
        "position": 4,
        "name": "Balearen",
        "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"
      }, {
        "@type": "ListItem",
        "position": 5,
        "name": "Ibiza",
        "item": "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/ibiza"
      }]
    }} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
        
        {/* Header */}
        <div className="relative h-64 md:h-96 overflow-hidden mt-20">
          <img src="/lovable-uploads/c0896df7-5ba2-4d93-9c3a-ffd817d565c5.png" alt="Ibiza Yachtcharter - Die weiße Insel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Badge className="mb-4 bg-blue-500 text-white">🇪🇸 Ibiza & Formentera</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Ibiza</h1>
              <p className="text-xl max-w-2xl">
                Die Weiße Insel - Nachtleben, Traumstrände & Formentera
              </p>
            </div>
          </div>
          <Link to="/reviere/mittelmeer/spanien/balearen" className="absolute top-6 left-6">
            <Button variant="outline" className="bg-white/90 text-black border-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Balearen
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
                    <Link to="/reviere/mittelmeer/spanien">Spanien</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/reviere/mittelmeer/spanien/balearen">Balearen</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Ibiza</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Quick Facts */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </div>)}
          </div>

          {/* Territory Map */}
          <div className="max-w-4xl mx-auto mb-12">
            <TerritoryMap region="Ibiza" center={{
            lat: 38.9067,
            lng: 1.4206
          }} zoom={8} maptype="satellite" />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold mb-6">Yachtcharter Ibiza – Inselhopping zwischen Ibiza & Formentera</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Ibiza steht für mehr als Nightlife: Der Balearenklassiker begeistert Skipper und Motorbootfahrer mit türkisblauem Wasser, schroff-schönen Steilküsten, traumhaften Calas und einer lebendigen, mediterranen Kultur. Ideale Ausgangspunkte für Ihren Törn sind Ibiza-Stadt (Eivissa) mit Marina Ibiza und Botafoch, San Antonio (Sant Antoni de Portmany) an der Westküste sowie Santa Eulària im Osten. In direkter Nachbarschaft wartet Formentera – karibisch anmutend mit flachen Sandbänken und kristallklaren Becken.
              </p>

              <p className="mb-6">
                Wichtig: Katamarane spielen eine große Rolle (stabil, geräumig, geringer Tiefgang), doch die Inseln eignen sich ebenso hervorragend für Segelyachten und Motorboote – als Bareboat oder mit Skipper.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Revierüberblick: Küsten & Charakter</h3>
              
              <h4 className="text-xl font-semibold mt-6 mb-3">Süden & Südosten (Ibiza-Stadt, Talamanca, Ses Salines)</h4>
              <p className="mb-6">
                Charter-Hotspot mit Top-Marinas, urbanem Flair, kurzen Schlägen zu Beach-Stopps und guter Proviantierung.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Westen (San Antonio, Cala Bassa, Cala Comte, Cala d'Hort/Es Vedrà)</h4>
              <p className="mb-6">
                Postkartenkulisse, Sonnenuntergänge, klarer Sandgrund; ideal zum Ankern und Schnorcheln.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Norden (Benirràs, Portinatx)</h4>
              <p className="mb-6">
                Naturbelassen, ruhige Nächte, Felsformationen; häufig Sandflecken mit verlässlichem Halt.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Osten (Santa Eulària, Cala Llonga)</h4>
              <p className="mb-6">
                Familienfreundlich, kurze Etappen, gute Infrastruktur.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">Formentera (La Savina, Illetes, Levante)</h4>
              <p className="mb-6">
                Flache Sandplateaus, smaragdgrüne Becken – perfekt für Tagesausflüge oder Übernachtungen an Bojen. Achtung Posidonia: nur auf Sand ankern bzw. Bojen nutzen.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Warum dieses Revier? (ohne Katamaran-Schwerpunkt)</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Vielfalt der Bootstypen:</strong> Ob Segelyacht, Katamaran oder Motorboot – das Revier bietet kurze Distanzen, viele sichere Buchten und planbare Thermik.</li>
                <li><strong>Komfort & Service:</strong> Marinas mit Fuel Dock, Technik, Chandleries, Restaurants; Proviant-Lieferung bis an den Steg.</li>
                <li><strong>Planbare Etappen:</strong> Viele Ziele liegen 6–20 sm auseinander – ideal für Badestopps, Landgänge und entspannte Anker-Nächte.</li>
                <li><strong>Formentera in Griffweite:</strong> Ein Katzensprung mit karibischem Feeling – perfekt für Crews, die Inselhopping lieben.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">7-Tage-Törnidee ab Ibiza-Stadt (variabel für Segelyacht, Katamaran & Motorboot)</h3>
              
              <div className="space-y-3 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 1 – Ibiza-Stadt → Talamanca / Cala Llonga (6–10 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Check-in, Sicherheit, Proviant. Kurzer Einsegler, Anker auf Sand, erster Sprung ins Wasser. Abendblick auf Dalt Vila.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 2 – Cala Llonga → Santa Eulària → Ost-Calas (12–18 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Bunkern/Spaziergang in Santa Eulària, danach Schnorchel- und Badebuchten entlang der Ostküste.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 3 – Ost → Nord: Cala de San Vicente → Portinatx (16–22 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Helle Sandflecken mit gutem Halt; ruhige Nacht vor Anker oder Boje.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 4 – Portinatx → Benirràs → San Antonio (18–22 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Fotostopp am Benirràs-Felsen, Sonnenuntergangsetappe Richtung San Antonio. Marina- oder Bojenliegeplatz für Landgang.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 5 – San Antonio → Cala d'Hort / Es Vedrà → Cala Comte/Bassa (15–20 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Dramatische Kulisse vor Es Vedrà, türkisfarbene Becken in Cala Comte/Bassa. Tagsüber Ankerbucht, abends ruhige Marina – je nach Crewlaune.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 6 – West/Süd → Ses Salines → Formentera (La Savina / Illetes) (16–22 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Über Ses Salines nach Formentera. Hellblaue Sandbänke bei Illetes/Levante – bitte Posidonia meiden, Bojen nutzen. Optional Landgang im Hafen La Savina.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tag 7 – Formentera → Ibiza-Stadt (12–15 sm)</h4>
                  <p className="text-sm text-gray-600">
                    Gemütlicher Rücktörn, Ausklarieren, Zeit für Altstadt, Tapas und Shopping.
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg mb-8">
                <p className="text-black">
                  <strong>Hinweis:</strong> In der Saison setzt Seewind/Thermik oft am frühen Nachmittag ein. Vormittags Anker- und Badepausen, nachmittags Segeln – so nutzt man Wind & Licht optimal.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Marinas & Ausgangshäfen</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Ibiza-Stadt:</strong> Marina Ibiza und Botafoch – Premium-Liegeplätze, Treibstoff, Technik, kurze Wege in die City und zur Dalt Vila.</li>
                <li><strong>San Antonio:</strong> Lebendige Promenade, gute Versorger, Top-Ausgangspunkt für die Westküsten-Calas.</li>
                <li><strong>Santa Eulària:</strong> Modern, familienfreundlich, perfekte Basis für Ost- und Nordostroute.</li>
                <li><strong>La Savina (Formentera):</strong> Sicherer Hafen für Bunker, Wasser & Landgang; saisonal stark gefragt.</li>
              </ul>

              <p className="mb-6">
                Flottenauswahl: Aktuelle Charterflotten decken alles ab – von kompakten Fahrtenseglern über geräumige Katamarane bis zu sportlichen Motoryachten. Bareboat, Skippered und Crewed sind möglich.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Beliebte Ziele & nautische Tipps</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Cala Comte & Cala Bassa (West):</strong> Kristallklares Wasser, Sandgrund, gut zum Schwimmen & SUP.</li>
                <li><strong>Cala d'Hort / Es Vedrà:</strong> Landmarke mit gelegentlichem Schwell – früh ankommen, Anker gründlich einfahren.</li>
                <li><strong>Benirràs & Portinatx (Nord):</strong> Ruhige Nächte, Felskulisse, Sandflecken anpeilen.</li>
                <li><strong>Cala Llonga & Talamanca (Ost/Südost):</strong> Kurze Distanzen, ideal für Tag 1/7.</li>
                <li><strong>Ses Salines & Cap des Falcó (Süd):</strong> Flach, sandig, farbintensiv – Schutzgebiet beachten.</li>
                <li><strong>Formentera – Illetes & Levante:</strong> Karibik-Feeling; wegen Posidonia nur auf Sand oder an Boje.</li>
                <li><strong>Ankerpraxis:</strong> Größere Kettenvorlage, Rückwärtsgang zum Fieren, Sichtkontrolle mit Maske – auf Sand hält's hervorragend.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Wetter & Windbedingungen</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Sommer:</strong> Verlässliche Seebrise (meist 8–16 kn) am Nachmittag; vormittags oft Leichtwind – perfekt für Bade-Stopps.</li>
                <li><strong>Frühling/Herbst:</strong> Angenehm, etwas wechselhafter mit Frontdurchgängen; gute Lernbedingungen und mehr Ruhe in Häfen.</li>
                <li><strong>Dünung & Kaps:</strong> Offene Westbuchten können bei Levante oder Schwell unruhig werden. An Kaps (z. B. Es Vedrà) sind Beschleunigungszonen möglich – früh reffen.</li>
                <li><strong>Strömung:</strong> Meist schwach, Ankergrund überwiegend Sand/Feinsediment mit guter Haltekraft.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Eignung nach Erfahrungsstufe</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Einsteiger & Familien:</strong> Kurze Distanzen, viele geschützte Buchten, planbare Thermik. Multihulls punkten mit Stabilität und Platz, sind aber kein Muss.</li>
                <li><strong>Erfahrene Skipper:</strong> Sportliche Etappen an der Westküste, flexible Routen mit Nachtfahrten optional – Verkehr und Wetterfenster beachten.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Lizenzen, Sicherheit & Umwelt</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Bareboat:</strong> International anerkannter Bootsführerschein (z. B. ICC oder äquivalenter nationaler Schein) erforderlich. Ohne Schein: Skipper/Crew buchen.</li>
                <li><strong>Sicherheitsstandards:</strong> Charteryachten werden regelmäßig gewartet; Rettungsmittel, Signalmittel und Technik nach Vorschrift. Übergabe mit Revierbriefing.</li>
                <li><strong>Posidonia-Schutz:</strong> Nicht auf Seegras ankern (auch Kette nicht über Seegras führen). Sandflächen und Bojenfelder nutzen, Schutzzonen respektieren.</li>
                <li><strong>Nachhaltig chartern:</strong> Müll vermeiden, Abwasser in der Marina entsorgen, lokale Regeln befolgen – so bleibt das Revier intakt.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Anreise & Service</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Flug nach Ibiza (IBZ):</strong> In der Saison zahlreiche Nonstop-Verbindungen aus D/AT/CH/FR.</li>
                <li><strong>Kurze Transfers:</strong> 10–20 Minuten zu den Marinas in Ibiza-Stadt; San Antonio und Santa Eulària per Taxi/Transfer gut erreichbar.</li>
                <li><strong>Proviant & Extras:</strong> Supermärkte, Frischemärkte, Bäckereien und Lieferdienste sind marinanah. Auf Wunsch organisieren wir Proviant bis an den Steg, Wasserspielzeuge (SUP, Kajak), Kinder- und Sicherheitsausrüstung.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Beste Reisezeit</h3>
              <p className="mb-6">
                Mai–Oktober ist Hauptsaison. Mai–Juni und September–Oktober bieten oft die beste Balance aus Wind, Wassertemperatur und Verfügbarkeit. Juli–August sind sonnensicher und lebhaft – Liegeplätze/Bojen frühzeitig reservieren, besonders für Formentera.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Fazit</h3>
              <p className="mb-6">
                Yachtcharter Ibiza kombiniert kurze Etappen, sichere Sandankerplätze, eindrucksvolle Küsten und erstklassige Infrastruktur – mit Formentera als naher Traum-Extension. Ob Segelyacht, Katamaran oder Motorboot: Das Revier ist zugänglich für Einsteiger und spannend für Routiniers. Wer verantwortungsvoll mit Posidonia umgeht und clever plant, erlebt pure Mittelmeer-Leichtigkeit – vom ersten Ableger bis zum letzten Sundowner.
              </p>

              <p className="mb-6">
                <strong>Jetzt Yachtcharter Ibiza anfragen:</strong> Wir finden die passende Yacht (Bareboat oder mit Skipper), planen Route & Bojen – inklusive Formentera –, organisieren Transfers & Proviant und teilen Insider-Tipps zu Buchten, Restaurants und Landaktivitäten. Kontakt aufnehmen & Wunschtermin sichern!
              </p>
            </div>
          </div>

          {/* Ports */}
          

          {/* Highlights */}
          

          {/* CTA */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Bereit für Ibiza & Formentera?
              </h3>
              <p className="mb-6 text-blue-100">
                Erleben Sie den perfekten Mix aus Party, Strand und kristallklarem Wasser auf der weißen Insel.
              </p>
              <CharterRequestForm>
                <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                  Ibiza Charter anfragen
                </Button>
              </CharterRequestForm>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default Ibiza;