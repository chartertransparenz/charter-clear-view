import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import TerritoryMap from "@/components/TerritoryMap";
import atlantic from "@/assets/atlantic.jpg";
const CanaryIslands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Vor der afrikanischen Küste"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Ganzjährig"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Inseln",
    value: "7 Hauptinseln"
  }];
  const regions = [{
    name: "Gran Canaria",
    link: "/reviere/atlantik/kanaren/gran-canaria",
    description: "Miniaturkontinent mit Las Palmas",
    cities: ["Las Palmas", "Puerto Rico", "Maspalomas"]
  }, {
    name: "Teneriffa",
    link: "/reviere/atlantik/kanaren/teneriffa",
    description: "Größte Insel mit dem Teide",
    cities: ["Santa Cruz", "Los Cristianos", "Puerto Colón"]
  }, {
    name: "Lanzarote",
    link: "/reviere/atlantik/kanaren/lanzarote",
    description: "Vulkaninsel mit einzigartiger Landschaft",
    cities: ["Arrecife", "Puerto Calero", "Marina Rubicón"]
  }, {
    name: "Fuerteventura",
    link: "/reviere/atlantik/kanaren/fuerteventura",
    description: "Windige Insel für Wassersportler",
    cities: ["Puerto del Rosario", "Corralejo"]
  }];
  const highlights = ["Ganzjährig perfektes Segelwetter", "Konstante Nordost-Passatwinde", "Vulkanische Landschaften", "Vielfältige Inselcharaktere", "Weltklasse Windsurfing", "Stopover für Atlantiküberquerungen", "Spanische Kultur mit afrikanischen Einflüssen"];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/60d2e120-f975-4b09-9582-d3ec1f64e725.png" alt="Kanarische Inseln" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇪🇸 Kanaren</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kanaren</h1>
            <p className="text-xl max-w-2xl">
              Die Inseln des ewigen Frühlings
            </p>
          </div>
        </div>
        <Link to="/reviere/atlantik" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Atlantik
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation - Fixed at top */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Start</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/#reviere">Reviere</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/atlantik">Atlantik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Kanaren</BreadcrumbPage>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Die Kanarischen Inseln</h2>
          <TerritoryMap
            region="Kanarische Inseln"
            center={{ lat: 28.0, lng: -15.5 }}
            zoom={5}
            maptype="satellite"
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Kanaren: Ihr Segelabenteuer im ewigen Frühling des Atlantiks</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Setzen Sie die Segel zu einem der faszinierendsten Segelreviere der Welt: den Kanarischen Inseln. Als Inseln des ewigen Frühlings bieten sie ganzjährig milde Temperaturen, beständige Passatwinde und eine landschaftliche Vielfalt, die ihresgleichen sucht. Von den schwarzen Vulkanstränden Lanzarotes über die grünen Lorbeerwälder La Gomeras bis hin zu den goldenen Dünen Fuerteventuras – ein Yachtcharter auf den Kanaren ist eine Reise durch verschiedene Welten.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Die Kanarischen Inseln sind ein Revier für Entdecker. Jeder Schlag zwischen den Inseln ist ein kleines Hochseeabenteuer, belohnt mit spektakulären Ausblicken auf vulkanische Giganten wie den Teide auf Teneriffa. Moderne Marinas in lebendigen Hafenstädten wie Las Palmas de Gran Canaria, Santa Cruz de Tenerife oder Arrecife auf Lanzarote dienen als perfekte Ausgangspunkte für Ihren Törn. Ob Sie als erfahrener Skipper eine sportliche Bareboat-Charter suchen oder mit einem erfahrenen Skipper die Vorzüge einer luxuriösen Segelyacht oder eines geräumigen Katamarans genießen möchten – hier finden Sie die perfekte Yacht für Ihr Atlantik-Abenteuer.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Entdecken Sie die sieben Hauptinseln, von denen jede ihren eigenen, unverwechselbaren Charakter besitzt:
            </p>

            <ul className="text-lg text-gray-700 mb-6 leading-relaxed list-disc pl-6">
              <li className="mb-2"><strong>Teneriffa & Gran Canaria:</strong> Die pulsierenden Hauptinseln mit erstklassiger Infrastruktur.</li>
              <li className="mb-2"><strong>Lanzarote & Fuerteventura:</strong> Die östlichen Inseln, geprägt von Vulkanismus und endlosen Stränden.</li>
              <li className="mb-2"><strong>La Gomera, La Palma & El Hierro:</strong> Die westlichen Juwelen, bekannt für ihre unberührte Natur und Ruhe.</li>
            </ul>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Ein Törn auf den Kanaren ist mehr als nur Segeln. Es ist Inselhopping für Fortgeschrittene, eine Herausforderung für ambitionierte Crews und ein unvergessliches Erlebnis für jeden, der das Meer und die Freiheit liebt.
            </p>

            {/* Erreichbarkeit Box */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ihre Anreise ins Segelparadies: Erreichbarkeit der Kanaren</h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Die Planung Ihres Yachtcharters auf den Kanaren beginnt mit einer unkomplizierten Anreise. Dank der hervorragenden internationalen Anbindung sind die Ausgangshäfen schnell und bequem aus Deutschland, Österreich und der Schweiz erreichbar.
              </p>

              <ul className="text-gray-700 mb-4 leading-relaxed list-disc pl-6">
                <li className="mb-2">
                  <strong>Per Flugzeug:</strong> Zahlreiche Direktflüge verbinden die großen europäischen Flughäfen mit den internationalen Airports der Kanaren. Die wichtigsten Zielflughäfen für Chartergäste sind:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Gran Canaria (LPA)</li>
                    <li>Teneriffa Süd (TFS) & Teneriffa Nord (TFN)</li>
                    <li>Lanzarote (ACE)</li>
                    <li>Fuerteventura (FUE)</li>
                    <li>La Palma (SPC)</li>
                  </ul>
                </li>
                <li className="mb-2"><strong>Weiterreise auf den Inseln:</strong> Von den Flughäfen erreichen Sie Ihre Charterbasis bequem per Taxi oder vorab gebuchtem Transfer. Die Distanzen sind kurz und die Infrastruktur ist auf Touristen ausgelegt.</li>
                <li className="mb-2"><strong>Fährverbindungen:</strong> Ein exzellentes Netz an Schnellfähren und konventionellen Schiffen verbindet alle Inseln miteinander. Dies ermöglicht nicht nur eine flexible Törnplanung, sondern auch die Möglichkeit, Crewwechsel auf verschiedenen Inseln zu organisieren.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Marinas & Ausgangshäfen: Erstklassige maritime Infrastruktur</h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Die Kanarischen Inseln sind seit Jahrhunderten ein Knotenpunkt für Seefahrer und verfügen über eine entsprechend exzellente maritime Infrastruktur. Moderne, gut geschützte Marinas bieten höchsten Komfort, Sicherheit und eine breite Palette an Dienstleistungen für Yachteigner und Chartergäste. Hier finden Sie eine große Auswahl an Charteryachten aller Größen und Typen, von sportlichen Monohulls bis zu luxuriösen Katamaranen.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Unsere wichtigsten Charterbasen und empfohlene Marinas im Revier:
            </p>

            <ul className="text-lg text-gray-700 mb-6 leading-relaxed list-disc pl-6">
              <li className="mb-3">
                <strong>Lanzarote:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>Marina Rubicón (Playa Blanca):</strong> Eine der schönsten Marinas der Kanaren im eleganten Süden der Insel. Perfekter Startpunkt für Törns nach Fuerteventura und zur Isla de Lobos.</li>
                  <li><strong>Puerto Calero:</strong> Eine exklusive und bestens geschützte Marina, bekannt für ihren erstklassigen Service und als Törnziel für anspruchsvolle Segler.</li>
                </ul>
              </li>
              <li className="mb-3">
                <strong>Gran Canaria:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>Las Palmas de Gran Canaria:</strong> Der größte Hafen des Atlantiks und traditioneller Absprunghafen für Atlantiküberquerungen. Die Marina bietet alle erdenklichen Services.</li>
                  <li><strong>Pasito Blanco (Maspalomas):</strong> Eine ruhige und exklusive Marina im sonnigen Süden, ideal für Törns nach Teneriffa und La Gomera.</li>
                </ul>
              </li>
              <li className="mb-3">
                <strong>Teneriffa:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>Marina del Sur (Las Galletas):</strong> Ein authentischer Hafen im Süden, ideal gelegen für den kurzen Schlag nach La Gomera.</li>
                  <li><strong>Radazul:</strong> Eine moderne Marina an der Ostküste, gut positioniert für Törns in alle Richtungen.</li>
                  <li><strong>Santa Cruz de Tenerife:</strong> Die Hauptstadtmarina ist ein wichtiger Verkehrsknotenpunkt und bietet eine hervorragende Versorgungslage.</li>
                </ul>
              </li>
              <li className="mb-3">
                <strong>La Gomera & La Palma:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>San Sebastián de La Gomera:</strong> Ein geschichtsträchtiger Hafen, von dem aus schon Kolumbus startete. Ein Muss für jeden Kanaren-Segler.</li>
                  <li><strong>Santa Cruz de La Palma:</strong> Die charmante Hauptstadtmarina der „Isla Bonita" ist der perfekte Lohn nach einer anspruchsvollen Überfahrt.</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Inselhopping Kanaren: Törnziele für jeden Geschmack</h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Kein Törn gleicht dem anderen. Die Vielfalt der Inseln ermöglicht eine flexible Routenplanung, die sich an Wind, Wetter und den Wünschen der Crew orientiert.
            </p>

            <h4 className="text-xl font-bold text-gray-800 mb-3">Teneriffa – Im Schatten des Teide</h4>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Teneriffa, die größte Insel, wird vom majestätischen Vulkan Teide dominiert, dessen Gipfel oft über den Wolken thront. Segeln Sie entlang der Südküste und bestaunen Sie die gigantischen Klippen von Los Gigantes, die senkrecht aus dem Atlantik ragen. Ankern Sie in geschützten Buchten und genießen Sie das pulsierende Leben in Orten wie Los Cristianos oder werfen Sie den Anker vor dem berühmten schwarzen Sandstrand von La Tejita. Der grüne, feuchtere Norden bietet einen faszinierenden Kontrast zum trockenen Süden und ist ein Paradies für Wanderer.
            </p>

            <h4 className="text-xl font-bold text-gray-800 mb-3">Gran Canaria – Der Miniaturkontinent</h4>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Von der pulsierenden Metropole Las Palmas im Norden bis zu den berühmten Dünen von Maspalomas im Süden – Gran Canaria ist unglaublich vielseitig. Starten Sie Ihren Törn in der Hauptstadt und segeln Sie entlang der wilden Westküste zum malerischen Fischerdorf Puerto de Mogán, das auch als „Venedig der Kanaren" bekannt ist. Ankerplätze finden sich in geschützten Buchten wie der Bahía de Confital.
            </p>

            <h4 className="text-xl font-bold text-gray-800 mb-3">Lanzarote – Segeln in einer anderen Welt</h4>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Lanzarote ist ein Kunstwerk aus Feuer und Meer. Die pechschwarzen Vulkanlandschaften des Timanfaya-Nationalparks, die weißen Häuser und die künstlerische Prägung durch César Manrique schaffen eine einzigartige Atmosphäre. Die Törnziele Marina Rubicón und Puerto Calero sind erstklassige Ausgangspunkte. Ein absolutes Highlight ist der kurze Schlag zur Nachbarinsel La Graciosa, einem autofreien Naturparadies mit traumhaften Sandstränden und kristallklarem Wasser – ein perfekter Ankerplatz.
            </p>

            <h4 className="text-xl font-bold text-gray-800 mb-3">Fuerteventura – Paradies für Wind und Wellen</h4>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Bekannt für ihre endlosen, weißen Sandstrände, ist Fuerteventura ein Mekka für Wassersportler. Segler schätzen die langen Schläge entlang der Küste und die zahlreichen Ankerbuchten. Von Corralejo im Norden können Sie die unbewohnte Insel Lobos umrunden, ein Naturschutzgebiet mit einer wunderschönen Lagune. Die Halbinsel Jandía im Süden lockt mit karibisch anmutenden Stränden.
            </p>

            <h4 className="text-xl font-bold text-gray-800 mb-3">Die westlichen Perlen: La Gomera, La Palma und El Hierro</h4>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Für erfahrene Crews, die längere Schläge nicht scheuen, ist ein Törn zu den westlichen Inseln die Krönung eines Yachtcharters auf den Kanaren.
            </p>

            <ul className="text-lg text-gray-700 mb-6 leading-relaxed list-disc pl-6">
              <li className="mb-2"><strong>La Gomera:</strong> Nach einem anspruchsvollen Schlag von Teneriffa aus erreichen Sie San Sebastián. Die Insel ist ein Wanderparadies mit uralten Lorbeerwäldern (Garajonay Nationalpark) und tiefen Schluchten.</li>
              <li className="mb-2"><strong>La Palma:</strong> „La Isla Bonita" macht ihrem Namen alle Ehre. Die Insel ist grün, steil und spektakulär. Die Hauptstadt Santa Cruz de La Palma bezaubert mit kolonialem Charme.</li>
              <li className="mb-2"><strong>El Hierro:</strong> Die kleinste und westlichste Insel ist ein UNESCO-Biosphärenreservat und ein Ziel für Segler, die Abgeschiedenheit und unberührte Natur suchen. Der Marinepark bei La Restinga ist ein weltberühmtes Tauchrevier.</li>
            </ul>

            {/* Wetter & Wind Box */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Wetter & Windbedingungen: Das Reich der Passatwinde</h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Das Segeln auf den Kanaren wird vom beständigen Nordost-Passat bestimmt. Dieses Windsystem sorgt für zuverlässige Segelbedingungen, stellt aber auch hohe Anforderungen an Skipper und Material.
              </p>

              <ul className="text-gray-700 mb-4 leading-relaxed list-disc pl-6">
                <li className="mb-2"><strong>Wind:</strong> Der Passat weht meist mit 4-6 Bft. Zwischen den hohen Inseln wie Teneriffa, Gran Canaria, La Gomera und La Palma entstehen Beschleunigungszonen (Düsen), in denen der Wind plötzlich und heftig auf 7-8 Bft. oder mehr auffrischen kann. Eine sorgfältige Törnplanung und das rechtzeitige Reffen sind hier unerlässlich. Im Lee der Inseln kann es hingegen zu Flauten kommen.</li>
                <li className="mb-2"><strong>Welle:</strong> Der Atlantik erzeugt eine lange, konstante Dünung aus Nordwest, die besonders an den Nord- und Westküsten spürbar ist. In den Düsen kann sich eine kurze, steile Welle aufbauen.</li>
                <li className="mb-2"><strong>Klima:</strong> Das Klima ist ganzjährig mild und wird als „ewiger Frühling" bezeichnet. Die Temperaturen liegen im Winter selten unter 20 °C und im Sommer meist unter 30 °C. Die Wassertemperaturen bewegen sich zwischen 19 °C im Winter und 23 °C im Sommer.</li>
                <li className="mb-2"><strong>Erfahrungsstufe:</strong> Aufgrund der Starkwindzonen und der Atlantikdünung ist das Revier für erfahrene Skipper geeignet. Segelanfänger oder Crews, die einen entspannten Urlaubstörn suchen, sollten unbedingt einen erfahrenen Skipper buchen, der das Revier und seine Besonderheiten kennt.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Beste Reisezeit für Ihren Kanaren-Törn</h3>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Die Kanarischen Inseln sind ein echtes Ganzjahresrevier. Jede Saison hat ihren eigenen Reiz:
            </p>

            <ul className="text-lg text-gray-700 mb-6 leading-relaxed list-disc pl-6">
              <li className="mb-2"><strong>Oktober bis April:</strong> Dies ist die klassische Hochsaison für Segler. Die Winde sind oft etwas moderater als im Sommer, die Temperaturen sind angenehm warm und die Marinas sind weniger überlaufen. Ideal, um dem europäischen Winter zu entfliehen.</li>
              <li className="mb-2"><strong>Mai bis September:</strong> Die Sommermonate sind geprägt von einem sehr stabilen und oft stärkeren Passatwind. Dies ist die Zeit für sportliche Segler, die die Herausforderung lieben. Die Tage sind lang und sonnig, perfekt für ausgedehnte Segeltage.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fazit: Warum ein Yachtcharter auf den Kanaren ein Muss ist</h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ein Yachtcharter auf den Kanaren ist die ultimative Kombination aus Abenteuer und Erholung. Es ist die Chance, echtes Atlantik-Feeling zu erleben, die eigenen seglerischen Fähigkeiten zu testen und dabei eine Inselwelt von atemberaubender Schönheit und Vielfalt zu entdecken. Die Mischung aus anspruchsvollen Segelbedingungen, erstklassiger Infrastruktur, ganzjährig mildem Klima und der einzigartigen Kultur macht dieses Revier zu einem der besten der Welt. Ob Sie von Bucht zu Bucht segeln, lange Schläge auf dem offenen Meer genießen oder einfach nur in einer abgelegenen Bucht vor Anker die Seele baumeln lassen – die Kanaren werden Sie in ihren Bann ziehen.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Bereit für Ihren Kanaren-Törn?</h3>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Spüren Sie schon den Passatwind auf der Haut und den salzigen Geschmack des Atlantiks? Unser erfahrenes Team kennt das Revier wie die eigene Westentasche und hilft Ihnen, die perfekte Segelyacht oder den idealen Katamaran für Ihr Traum-Inselhopping zu finden.
            </p>

            <p className="text-lg text-gray-700 font-semibold">
              Fordern Sie jetzt Ihr individuelles und unverbindliches Angebot für Ihren Yachtcharter auf den Kanaren an!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Kanaren?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie ganzjährig perfekte Segelbedingungen auf den 
              Inseln des ewigen Frühlings mit konstanten Winden und vielfältigen Landschaften.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Kanaren Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default CanaryIslands;