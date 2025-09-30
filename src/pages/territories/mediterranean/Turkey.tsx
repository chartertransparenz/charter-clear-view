import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
import { META } from "@/seo/meta.config";
import { BREADCRUMB_TURKEY } from "@/seo/breadcrumbs.turkey";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import destinationTurkey from "@/assets/destination-turkey.jpg";

const Turkey = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const m = META.tuerkei;

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Östliches Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "April-November" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Star, label: "Spezialität", value: "Viele Buchten & Sandstrände" }
  ];

  const regions = [
    {
      name: "Bodrum",
      link: "/reviere/mittelmeer/tuerkei/bodrum",
      description: "Klassische West-Basis mit direktem Zugang zu Gökova und Hisarönü",
      cities: ["Bodrum", "Gökova", "Hisarönü"]
    },
    {
      name: "Marmaris",
      link: "/reviere/mittelmeer/tuerkei/marmaris",
      description: "Größte Charterdrehscheibe mit perfekt geschützten Golfen",
      cities: ["Marmaris", "Selimiye", "Bozburun"]
    },
    {
      name: "Göcek & Fethiye",
      link: "/reviere/mittelmeer/tuerkei/goecek-fethiye",
      description: "Komfortabelstes Charterrevier mit Moorings und Badeparadies",
      cities: ["Göcek", "Fethiye", "Skopea Limanı"]
    },
    {
      name: "Kaş & Kalkan",
      link: "/reviere/mittelmeer/tuerkei/kas-kalkan",
      description: "Kekova-Reede mit glasklaren Küsten und versunkenen Ruinen",
      cities: ["Kaş", "Kalkan", "Kekova"]
    },
    {
      name: "Türkische Ägäis",
      link: "/reviere/mittelmeer/tuerkei/tuerkische-aegaeis",
      description: "Antike Kultur und spektakuläre Landschaften",
      cities: ["Bodrum", "Gökova", "Knidos"]
    }
  ];

  const highlights = [
    "Traditionelle Gület-Charter",
    "Blue Cruise Erlebnis",
    "Warmes, kristallklares Wasser",
    "Geschützte Buchten und Ankerplätze",
    "Türkische Gastfreundschaft",
    "Exzellentes Preis-Leistungs-Verhältnis",
    "Reiche Geschichte und Kultur"
  ];

  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        canonical={m.canonical()}
        ogImage={m.ogImage}
      />
      <JsonLd json={BREADCRUMB_TURKEY.tuerkei} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/b0c596f4-551d-4816-958d-570974af6c8d.png"
          alt="Türkei Mittelmeer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇹🇷 Türkei</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Türkei</h1>
            <p className="text-xl max-w-2xl">
              Blue Cruise Tradition und türkische Gastfreundschaft
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Mittelmeer
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
                <BreadcrumbPage>Türkei</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Karte Türkische Mittelmeerküste</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800000!2d28.010101!3d37.4905103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI5JzI1LjgiTiAyOMKwMDAnMzYuNCJF!5e1!3m2!1sde!2sde!4v1625097600000!5m2!1sde!2sde"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="w-full h-96"
              title="Karte Türkische Mittelmeerküste"
            />
          </div>
        </div>

        {/* Detailed Description */}
        <div className="max-w-none mx-auto mb-12">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Türkei – Revierführer für Bodrum, Marmaris, Göcek & Fethiye, Kaş & Kalkan</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Die türkische Südküste ist ein Sehnsuchtsrevier für Segler, Katamaran- und Motoryacht-Crews gleichermaßen: piniengrüne Hänge bis ans Wasser, zahllose, perfekt geschützte Buchten, ein enges Netz aus Marinas und Restaurantstegen – und verlässliche Sommerbrisen. Zwischen <Link to="/reviere/mittelmeer/tuerkei/bodrum" className="text-blue-600 hover:text-blue-800 underline">Bodrum</Link> im Westen und <Link to="/reviere/mittelmeer/tuerkei/kas-kalkan" className="text-blue-600 hover:text-blue-800 underline">Kaş/Kalkan</Link> im Osten finden Sie alles, was gutes Mittelmeer-Cruising ausmacht: kurze bis mittlere Etappen, klare Ankergründe, warmes Wasser, Kulinarik direkt am Steg – und ein Küstenbild aus antiken Stätten, Inselchen und fjordartigen Einschnitten. Wer die Yachtcharter Türkei wählt, profitiert obendrein von einer sehr praxisnahen Infrastruktur: Muring-Liegeplätze, Mooringbojen in Schutzgebieten, Fuel-Docks nahezu überall und Proviantservice durch die Basis.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Revierportraits</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  <Link to="/reviere/mittelmeer/tuerkei/bodrum" className="text-blue-600 hover:text-blue-800 underline">Bodrum</Link> – Gökova, Hisarönü & antike Kulissen
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>Profil:</strong> Bodrum ist die klassische West-Basis mit direktem Zugang zu zwei großartigen Golfen: Gökova (südlich) und Hisarönü (östlich) – beide voller Einschnitte, Inselchen und Sandankerplätze. An Land: lebhafte Promenade, Burg, Museen; auf dem Wasser: Tagesbrise, klares Wasser, viel Abwechslung.
                </p>
                <p className="text-gray-700 mb-2"><strong>Warum hier chartern?</strong></p>
                <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                  <li>Routenvielfalt: Von „entspannt" (Buchtenhüpfen im Golf) bis „sportlicher" (offene Übergänge an Kaps).</li>
                  <li>Marinas/Stege: Bodrum-Stadt, Turgutreis, Yalıkavak (premium) – gute Technik & Proviant.</li>
                  <li>Highlights: Sedir/„Kleopatra-Insel" (Natur & Historie), „English Harbour"-Buchten im Gökova-Golf, Knidos-Ruinen am Westkap.</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Eignung:</strong> Genuss- und Familiencrews im Golf; Ambitionierte auf den offenen Abschnitten – Reffpunkte kennen.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  <Link to="/reviere/mittelmeer/tuerkei/marmaris" className="text-blue-600 hover:text-blue-800 underline">Marmaris</Link> – Hisarönü-Golf & Bozburun-Halbinsel
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>Profil:</strong> Marmaris ist eine der größten Charterdrehscheiben der Türkei. Direkt „um die Ecke": der Hisarönü-Golf mit Bilderbuchorten Selimiye und Orhaniye (Kızkumu-Lagune), außerdem Bozburun mit Werften & Gulets.
                </p>
                <p className="text-gray-700 mb-2"><strong>Warum hier chartern?</strong></p>
                <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                  <li>Sehr guter Wetterschutz im Golf (kurze, ruhige Etappen).</li>
                  <li>Restaurantstege mit Lazy Lines: bequemes Anlegen, Essen am Kai, morgens entspannt ablegen.</li>
                  <li>Highlights: Bozukkale/Loryma (antike Festung), Sandbank von Kızkumu, Inselchen bei Dirsek.</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Eignung:</strong> Einsteiger & Familien (Golf), Ambitionierte bei Abstechern an Kapstrecken.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  <Link to="/reviere/mittelmeer/tuerkei/goecek-fethiye" className="text-blue-600 hover:text-blue-800 underline">Göcek & Fethiye</Link> – Skopea Limanı, Moorings & Badeparadies
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>Profil:</strong> Das wohl komfortabelste Chartermikrore¬vier der Türkei: Skopea Limanı (Göcek-Buchten), Fethiye-Bucht, Yassıca-Inseln, Tersane, Sarsala, Kapi Creek, Hamam Koyu (‚Kleopatra-Bad'). Viele Buchten sind mooring-bewirtschaftet; lange Leinen landen am Ufer, der Sandgrund hält verlässlich. In der SEPA-Zone schützen Bojenfelder die Seegraswiesen – Bojen nutzen statt Ankern.
                </p>
                <p className="text-gray-700 mb-2"><strong>Warum hier chartern?</strong></p>
                <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                  <li>Maximaler Wetterschutz, kurze Hüpfer, unzählige Badestopps.</li>
                  <li>Pump-Out/Blue-Card lückenlos verfügbar.</li>
                  <li>Highlights: Postkartenkulissen bei Yassıca, Tersane Adası (Werftinsel), Bedri-Rahmi-Bucht, Gemiler/St.-Nikolaus-Insel (mit Blick auf Ölüdeniz).</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Eignung:</strong> Perfekt für Einsteiger, Familien, Katamarane – und für Crews, die „Ankern, Baden, Lesen" großschreiben.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  <Link to="/reviere/mittelmeer/tuerkei/kas-kalkan" className="text-blue-600 hover:text-blue-800 underline">Kaş & Kalkan</Link> – Kekova-Reede & glasklare Küsten
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>Profil:</strong> Weiter östlich wird es etwas alpiner: steile Hänge, tiefblaues Wasser, stärkerer Reliefwind – und mit Kekova eines der spannendsten Marine-Kultur-Schutzgebiete des Mittelmeers (versunkene Ruinen, Burgen, Karstküste). In Kaş selbst: Tauchzentrum, klare Sichtweiten; Kalkan: amphitheatralisch über der Bucht.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Besonderheit Kekova (SEPA):</strong> Zonierung, Moorings, restriktive Regeln rund um die „Sunken City" – tagesaktuelle Hinweise beachten; freies Tauchen in Kernzonen/über Ruinen ist untersagt, organisierte Tauchgänge sind teilweise möglich/limitiert.
                </p>
                <p className="text-gray-700">
                  <strong>Eignung:</strong> Für erfahrene Skipper und Crews, die Natur-/Kulturkulisse suchen und mit Fallböen umgehen können.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Törnempfehlung: 1 Woche ab Göcek</h3>
                <p className="text-gray-700 mb-4 italic">(familien- & genussorientiert, ohne Seemeilenangaben)</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Tag 1 – Göcek → Yassıca-Inseln</h4>
                    <p className="text-gray-700">Ankommen, Check-in, Sicherheits- und Revierbriefing. Kurzer Hüpfer zu den Yassıca-Sandzungen. Mooringboje oder Sandanker (wo erlaubt); Einstieg ins Revier mit Badestopp und Sonnenuntergang.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Tag 2 – Yassıca → Hamam Koyu (‚Kleopatra-Bad') → Kapi Creek</h4>
                    <p className="text-gray-700">Vormittags in die Hamam-Bucht – Ruinen, glasklares Wasser. Nachmittags nach Kapi Creek (Restaurantsteg mit Lazy Lines) oder Sarsala. Legen Sie früh an und fahren Sie die Landleinen sauber.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Tag 3 – Kapi Creek → Tersane Adası (Werftinsel)</h4>
                    <p className="text-gray-700">Ruhiger Vormittag in einer Nebenbucht, danach nach Tersane – weitläufige Reede, Ruinen an Land. Abends Sternenhimmel, am Morgen kurzer Landspaziergang.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Tag 4 – Tersane → Bedri-Rahmi-Bucht → Fethiye-Bucht</h4>
                    <p className="text-gray-700">Zum „Fischmaler" (Felsmalerei) in die Bedri-Rahmi-Bucht, dann weiter in die Fethiye-Bucht. Wenn Sie Stadtluft mögen, lohnt ein Abendausflug in die Fethiye-Altstadt (Basar, Promenade).</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Tag 5 – Fethiye → Gemiler/St.-Nikolaus-Insel</h4>
                    <p className="text-gray-700">Kleiner Schlag nach Gemiler. Tagsüber baden/schnorcheln; zum Sonnenuntergang auf die Insel – Blick auf Ölüdeniz.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Tag 6 – Gemiler → Sarsala/Taşyaka</h4>
                    <p className="text-gray-700">Zurück in die Göcek-Buchten. Wahlweise Sarsala (breit, komfortabel) oder eine ruhigere Nebenbucht. Landleinen-Routine, Dinghy kurz an den Strand, Sundowner im Cockpit.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Tag 7 – Sarsala → Göcek</h4>
                    <p className="text-gray-700">Gemütlicher Rückweg. Fuel-Dock, Pump-Out, Check-out – und schon planen Sie die nächste Runde.</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mt-4 font-medium">
                  <strong>Hinweise:</strong> In der SEPA möglichst Bojen nutzen; Anker nur in freigegebenen Bereichen. Abstände zu Badezonen/Ufer beachten; Blue-Card mitführen und Pump-Out dokumentieren.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Wichtige Regeln & Formalitäten</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Transit Log (Cruising Permit):</strong> Für Yachten in der Türkei ist der Transit Log Standard. Er wird beim Check-in an der Basis bzw. beim Harbour Master ausgestellt; dafür benötigen Sie einen gültigen Skippernachweis (Originale mitführen). Bei Ausreise wird der Transit Log wieder abgegeben.</li>
                <li><strong>Abwasser & „Blue-Card"/Digital-System:</strong> Schwarzwasser – und in vielen Revieren auch Grauwasser – darf nicht ins Meer geleitet werden; Pump-Out ist Pflicht. Entlang der Küsten wird dies über ein elektronisches Blue-Card-System erfasst; mindestens ein dokumentierter Pump-Out pro Charter wird erwartet.</li>
                <li><strong>Schutzgebiete & Moorings:</strong> In sensiblen Zonen – etwa in der Fethiye–Göcek Special Environmental Protection Area (SEPA) – sind staatliche Mooringbojen gesetzt; dort gehen Sie an die Boje statt zu ankern, um Seegraswiesen zu schützen. Markierte Abstände zu Ufer/Badezonen sind einzuhalten.</li>
                <li><strong>Kekova/Kaş SEPA – archäologische Schutzzone:</strong> In der Reede von Kekova (Üçağız, Kaleköy/Simena, „Sunken City") gelten Nutzungs- und Tauchbeschränkungen; Teile sind streng geschützt, in Zonen existieren Moorings/Regeln. Bitte beachten Sie vor Ort die tagesaktuellen Bestimmungen.</li>
                <li><strong>Grenzübertritt in griechische Gewässer:</strong> Viele Charterverträge erlauben das Verlassen türkischer Gewässer nicht (Ausnahme: Notfälle). Klären Sie dies unbedingt vor der Buchung, wenn Sie Inselhüpfen Richtung Dodekanes planen.</li>
                <li><strong>Skipperlizenz & Funk:</strong> Für Bareboat-Charter wird ein anerkannter Skippernachweis (z. B. ICC, RYA Day Skipper oder nationales Pendant) verlangt. Ein VHF-Betriebszeugnis ist je nach Anbieter üblich/erwünscht – Originale mitnehmen.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Wind & Wetter – lokale Besonderheiten</h3>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>Sommerbrise & Meltemi:</strong> Von Juni bis September dominiert im Ägäisraum die Meltemi-/Etesien-Strömung aus nördlichen Sektoren; Peak meist Juli/August. Auf offenem Wasser kann sie frisch wehen, in den Golfen und Buchten (Marmaris-/Hisarönü-Golf, Fethiye/Göcek) wirkt sie deutlich abgeschwächt – perfekte Spielwiese für Cruising mit Badepausen.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Frühjahr & Herbst:</strong> Variabler und gelegentlich Lodos (Süd/Südost) – ein warmer, böiger Wind, der Schwell in offene Buchten drückt. In dieser Zeit spielen Lee-Routen und All-Weather-Anchorages ihre Stärken aus.
                </p>
                <p className="text-gray-700 mb-4"><strong>Lokale Effekte:</strong></p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Düsenzonen an Kaps/Engstellen (z. B. Datça-/Bozburun-Halbinsel) → kurzfristig kräftiger.</li>
                  <li>Thermik in den großen Buchten (Fethiye/Göcek, Marmaris) → verlässliche Nachmittagsbrise, abends abflauend.</li>
                  <li>Katabatik aus den Bergen (besonders Kaş/Kalkan, Westhänge) → nächtliche Fallböen möglich.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  <strong>Seegang:</strong> Im Inselschutz meist moderat; exponierte Kaps (Knidos, Deveboynu Burnu) und offene Leeküsten können kurzen, kabbeligen Schwell bringen.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Saison-Check (Kurzfassung):</strong></p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Frühling (April–Juni):</strong> Milde Temperaturen, blühende Küste, weniger Betrieb – ideal für Einsteiger und Familien. Lodos-Fenster im Blick behalten.</li>
                    <li><strong>Sommer (Juli–August):</strong> Warm, trocken, Meltemi zuverlässig – in Golfen moderat, auf offenem Wasser sportlich. Häfen/Restaurants früh anfahren.</li>
                    <li><strong>Herbst (September–Oktober):</strong> Warmes Wasser, ruhigere Marinas, stabiler als im Frühjahr; ab und zu Front/Schauer – leichtes Reff-Setup bereithalten.</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Für wen eignet sich welches Revier? (Schwierigkeitsgrade)</h3>
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Göcek & Fethiye – sehr einsteigerfreundlich</h4>
                  <p className="text-gray-700">Maximale Abdeckung durch Buchten/Lee, kurze Schläge, viele Moorings/Stege, lückenloser Pump-Out – ideal für Einsteiger, Familien, Katamarane und Crews, die die „Baden–Lesen–Grillen"-Dramaturgie lieben.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Marmaris/Hisarönü – einsteiger- bis mittelstufig</h4>
                  <p className="text-gray-700">Im Golf gut geschützt, perfekte Restaurantstege, charmante Orte. Für Ambitionierte bieten die Kapstrecken Richtung Bozburun/Knidos mehr Wind & Welle.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Bodrum – mittel bis sportlich</h4>
                  <p className="text-gray-700">Je weiter Sie aus Gökova/Hisarönü auf offene Abschnitte gehen, desto meltemi-geprägter und „blauer" wird es. Ideal für Crews mit Grundroutine, die „ein bisschen mehr" möchten.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Kaş & Kalkan – für Fortgeschrittene</h4>
                  <p className="text-gray-700">Katabatik & Düseneffekte, tiefe Küsten, längere Ausweichwege; dafür spektakuläre Kekova-Kulisse und exzellente Wasserqualität. Regeln der SEPA beachten.</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                <strong>Bareboat-Voraussetzungen (Praxis):</strong> ICC/RYA Day Skipper oder Äquivalent plus VHF (anbieterabhängig) werden gängig akzeptiert; ohne eigenes Patent buchen Sie alternativ einen Skipper oder schließen sich einer Flottille an. Der Transit Log wird nur mit vorgelegter Qualifikation ausgestellt.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Seemannschaft – Kurzcheck</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                <li><strong>Wetterfenster:</strong> Täglich Forecast prüfen; Meltemi-Tage auf offenen Strecken meiden oder früh reffen; Lodos (SE/S) im Frühjahr/Herbst ernst nehmen.</li>
                <li><strong>Moorings & Ankern:</strong> In SEPA-Zonen Bojen bevorzugen; sonst Sandgrund suchen, ausreichend Kette stecken, Halt mit Rückwärtsfahrt testen. Landleinen sauber fahren (Scheuerschutz!) – Abstand zu Ufer/Seegras einhalten.</li>
                <li><strong>Blue-Card & Pump-Out:</strong> Spätestens jeden zweiten/dritten Revetag prüfen; Pump-Out rechtzeitig planen (Rush-Hours am Nachmittag vermeiden).</li>
                <li><strong>Hafenmanöver:</strong> Mediterranean Mooring mit Lazy Line – langsam einlaufen, Achterleinen vorbereiten, Spring setzen, Fenderhöhen variieren.</li>
                <li><strong>Restaurantstege:</strong> Lokalregel beachten (Mooring häufig inklusive bei Restaurantbesuch). Strom/Wasser sind oft verfügbar – Nachtruhezeiten respektieren.</li>
                <li><strong>Schutzgebiete:</strong> Kekova-/Göcek-Regeln vorab lesen; Tauch-/Ankerverbote einhalten.</li>
                <li><strong>Grenzregeln:</strong> Griechenland-Abstecher nur, wenn Vertrag & Papiere es erlauben (oft nicht gestattet).</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Landgänge & Leben am Wasser</h3>
              <p className="text-gray-700 mb-6">
                Die türkische Küste ist wie gemacht für „Anlegen – Essen – Baden – Schlafen": In vielen Buchten liegen Restaurantstege mit Strom/Wasser; die Karte reicht von Meze über fangfrischen Fisch bis zum Frühstück mit Simit und Çay. In den Städten locken Basare und Altstadtgassen (Bodrum, Marmaris, Fethiye, Kaş). Wenn Sie Archäologie lieben, verbinden Sie den Törn mit Landgängen nach Knidos, Kaunos/Dalyan, Xanthos oder Patara – die Küste ist ein Freilichtmuseum.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Noch ein paar Tipps</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Welche Yacht?</strong> Segelyacht (Monohull) für klassisches Segeln und einfache Platzsuche; Katamaran für Familien/Komfort (ein Auge auf den Schwojkreis!); Motoryacht für kurze Wege und spontane Restaurantstopps.</p>
                  <p className="text-gray-700"><strong>Wie lange?</strong> Eine Woche reicht für Göcek oder den Marmaris-Golf; zwei Wochen eröffnen Bodrum ↔ Datça/Bozburun oder Kaş/Kalkan ↔ Kekova.</p>
                  <p className="text-gray-700"><strong>Wie voll ist es?</strong> Juli/August lebhaft – früh ankommen, Stege vorab anrufen. Mai/Juni & September/Oktober sind die Sweet Spots.</p>
                  <p className="text-gray-700"><strong>Mit Kindern unterwegs?</strong> Göcek/Fethiye ist unschlagbar: viele kurze Hüpfer, Lagunenwasser, sichere Nächte.</p>
                  <p className="text-gray-700"><strong>Mit Ambitionen?</strong> Bodrum sowie Kaş/Kalkan bieten offenes Wasser, Kaps, Düseneffekte – Reffdisziplin zahlt sich aus.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Fazit</h3>
              <p className="text-gray-700 mb-6">
                Yachtcharter in der Türkei ist die perfekte Mischung aus Seemannschaft & Dolce-Vita: Sie schlagen ruhige Routen in Golfen wie Marmaris oder Göcek – oder suchen das „Mehr-Meer-Gefühl" an den Kapstrecken von Bodrum und in den hohen Felskulissen um Kaş/Kalkan. Die Regeln sind klar (Transit Log, Blue-Card/Pump-Out, Schutzgebiete), die Infrastruktur spielt Ihnen in die Karten (Moorings, Restaurantstege, Marinas), die Winde sind planbar – von frühlingsmild über sommerfrisch (Meltemi) bis herbstgemütlich. Wenn Sie Familienzeit und Badebuchten suchen, starten Sie in Göcek/Fethiye; wenn Sie Segelstunden & Szenerie lieben, finden Sie in Bodrum und Kaş/Kalkan Ihr Revier; Marmaris schließt als Allrounder die Lücke.
              </p>
              <p className="text-gray-700">
                Sind Sie bereit, die Leinen in der Türkei zu lösen? Nennen Sie uns Crewgröße, Reisezeit und Yachtklasse – wir planen eine Route mit Lee-Optionen, reservieren Moorings/Stege, kümmern uns um Pump-Out-Logistik und geben Ihnen tagesaktuelle Hinweise zu SEPA-Regeln und Wetterfenstern.
              </p>

              {/* Ocean-Breeze CTA */}
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Lust die Türkische Küste zu erkunden?
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Kontaktieren Sie uns noch heute. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
                </p>
                <CharterRequestForm>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium" size="lg">
                    Jetzt unverbindliches Angebot einholen
                  </Button>
                </CharterRequestForm>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12 mt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">FAQ – Yachtcharter Türkei</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Welche Chartervarianten gibt es in der Türkei?
                  </AccordionTrigger>
                  <AccordionContent>
                    In der Türkei können Sie zwischen Bareboat-Charter (ohne Crew), Yachtcharter mit Skipper oder Crew, klassischen Gulet-Törns und Kabinencharter wählen. Die Türkei bietet eine sehr breite Angebotsvielfalt, von Standard- bis Luxusklasse, sodass für jeden Anspruch und Geldbeutel etwas dabei ist.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Benötige ich einen Segelschein oder spezielle Qualifikationen?
                  </AccordionTrigger>
                  <AccordionContent>
                    Für Bareboat-Charter müssen Skipper einen gültigen Segelschein (z. B. den International Certificate of Competence/ICC oder ein vergleichbares nationales Zertifikat wie den SKS) sowie üblicherweise ein VHF-Sprechfunkzeugnis vorlegen. Wer keinen Schein oder wenig Erfahrung hat, kann einen erfahrenen, lokalen Skipper buchen, der auch als Guide fungiert.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Gibt es amtliche Vorschriften und Genehmigungen?
                  </AccordionTrigger>
                  <AccordionContent>
                    Jede Charteryacht in der Türkei braucht einen gültigen Transit Log (Cruising Permit). Dieser wird von der Charterfirma beschafft und ist bei Übergabe der Yacht zahlungspflichtig (ca. 60–100 €). Die türkischen Sicherheits- und Ausrüstungsvorschriften sind hoch und werden fortlaufend von Küstenwache und Hafenämtern kontrolliert.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Wie läuft die Entsorgung von Grau- und Schwarzwasser (Fäkalientank) ab?
                  </AccordionTrigger>
                  <AccordionContent>
                    Das Abpumpen von Grauwasser (Wasch-/Duschabwasser) und Schwarzwasser (Toilettenabwasser im Fäkalientank) darf grundsätzlich nicht auf See erfolgen – Yachten sind verpflichtet, das Abwasser in speziellen Fäkalientanks zu sammeln. Entsorgt wird ausschließlich an den in vielen Häfen verfügbaren Pump-Out-Stationen. Die Einleitung ins Meer ist streng verboten und wird mit empfindlichen Geldbußen geahndet. Richten Sie daher Ihren Törn auch nach der Verfügbarkeit solcher Servicepunkte.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Wie lange dauert die ideale Charter in der Türkei und wann ist die beste Reisezeit?
                  </AccordionTrigger>
                  <AccordionContent>
                    Die meisten Gäste buchen 7 Nächte, längere Törns (10–14 Tage) sind aber ebenso möglich. Die Segelsaison reicht von April/Mai bis Oktober/November, wobei Juli und August die wärmsten und beliebtesten, aber auch belebtesten Monate sind.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    Kann ich von der Türkei aus die griechischen Inseln besuchen?
                  </AccordionTrigger>
                  <AccordionContent>
                    Es ist möglich, bei speziellen Routen auch einige griechische Inseln wie Kos, Rhodos oder Symi zu besuchen. Dafür benötigen Sie aber weitere Genehmigungen, Einreiseformalitäten und häufig einen anderen Transit Log. Nicht jedes Boot ist für internationale Fahrten zugelassen – dies muss vor Buchung klar mit der Charterfirma abgestimmt werden.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    Gibt es steuerliche Besonderheiten?
                  </AccordionTrigger>
                  <AccordionContent>
                    Bei ausländisch beflaggten Yachten wird in der Türkei keine Mehrwertsteuer fällig, bei türkisch beflaggten Yachten wird hingegen die lokale Mehrwertsteuer (aktuell 20 %) erhoben.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    Wie ist die Sicherheitslage und Infrastruktur?
                  </AccordionTrigger>
                  <AccordionContent>
                    Die Türkei verfügt über eine sehr gute Charter-Infrastruktur mit modernen Yachthäfen, Werften, Service-Stationen und vielerorts ausgezeichneten Supermärkten und Marinas. Die gängigen Routen sind sicher, die Küstenwache sowie lokale Behörden achten sehr auf die Einhaltung aller Vorschriften.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">
                    Worauf muss ich bei der Buchung achten?
                  </AccordionTrigger>
                  <AccordionContent>
                    Neben Yachtgröße, Baujahr und Ausstattung sollten Sie auf die Klarheit in Sachen Versicherungen, Kautionsregelung und enthaltene Service-Leistungen (Transit Log, Endreinigung, Bettwäsche etc.) achten. Klären Sie auch vorab, wer für die Verproviantierung und die Abrechnung von Kraftstoff, Liegegebühren und sonstigen Kosten zuständig ist.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">
                    Was ist an der türkischen Küste besonders zu beachten?
                  </AccordionTrigger>
                  <AccordionContent>
                    Ankern ist in vielen Buchten erlaubt, in einigen Schutzgebieten oder bei besonderen Wetterlagen gelten Einschränkungen. Informieren Sie sich über lokale Bestimmungen und Umweltauflagen. Die Navigation ist meist einfach; Seezeichen und Karten entsprechen internationalen Standards.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Bereit für eine Blue Cruise?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Entdecken Sie die traumhaften Buchten der türkischen Ägäis und 
              erleben Sie die legendäre Gastfreundschaft bei einer unvergesslichen Blue Cruise.
            </p>
            <CharterRequestForm>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium" size="lg">
                Türkei Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        <TopDestinations />
      </div>
    </div>
    </>
  );
};

export default Turkey;