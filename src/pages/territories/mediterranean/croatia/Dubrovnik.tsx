import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { useMetaTags, generateStructuredData } from '@/hooks/useMetaTags';
import TerritoryMap from '@/components/TerritoryMap';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Clock, Users, Anchor, Wind, Sun } from 'lucide-react';
import TopDestinations from '@/components/TopDestinations';

export default function Dubrovnik() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta Tags and Schema.org
  useMetaTags({
    title: 'Yachtcharter Kroatien – Dubrovnik & Süddalmatien',
    description: 'Elaphiten, Mljet & Korčula. Traumkulisse & Kultur. Jetzt Yacht ab Dubrovnik mit/ohne Skipper anfragen.',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/dubrovnik',
    ogTitle: 'Yachtcharter Kroatien – Dubrovnik & Süddalmatien',
    ogDescription: 'Elaphiten, Mljet & Korčula. Traumkulisse & Kultur. Jetzt Yacht ab Dubrovnik mit/ohne Skipper anfragen.',
    ogImage: 'https://chartertransparenz.de/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png',
    ogUrl: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/dubrovnik',
    structuredData: [
      generateStructuredData.breadcrumb([
        { name: 'Start', url: 'https://chartertransparenz.de' },
        { name: 'Reviere', url: 'https://chartertransparenz.de/#reviere' },
        { name: 'Mittelmeer', url: 'https://chartertransparenz.de/reviere/mittelmeer' },
        { name: 'Kroatien', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien' },
        { name: 'Dubrovnik', url: 'https://chartertransparenz.de/reviere/mittelmeer/kroatien/dubrovnik' }
      ])
    ]
  });

  const quickFacts = [
    { icon: MapPin, label: 'Region', value: 'Süddalmatien' },
    { icon: Clock, label: 'Beste Zeit', value: 'Mai - Oktober' },
    { icon: Users, label: 'Geeignet für', value: 'Alle Levels' },
    { icon: Anchor, label: 'Marinas', value: '8+ Premium' },
    { icon: Wind, label: 'Windverhältnisse', value: 'Maestral & Jugo' },
    { icon: Sun, label: 'Sonnentage', value: '320+ pro Jahr' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png)' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <Link to="/reviere/mittelmeer/kroatien" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Kroatien
            </Link>
            <h1 className="text-5xl font-bold mb-4">Yachtcharter Dubrovnik</h1>
            <p className="text-xl text-white/90">Die Perle der Adria und die Elaphiten-Inseln</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Start</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/mittelmeer">Mittelmeer</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/mittelmeer/kroatien">Kroatien</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dubrovnik</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <fact.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">{fact.label}</p>
                <p className="font-semibold">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map */}
        <div className="max-w-4xl mx-auto mb-16">
          <TerritoryMap
            region="Dubrovnik & Süddalmatien Yachtcharter"
            center={{ lat: 42.6, lng: 17.8 }}
            zoom={8}
            markers={[
              {
                lat: 42.6507,
                lng: 18.0944,
                name: 'Dubrovnik',
                description: 'Perle der Adria - UNESCO-Weltkulturerbe'
              },
              {
                lat: 42.6833,
                lng: 17.75,
                name: 'Elaphiten-Inseln',
                description: 'Koločep, Lopud und Šipan'
              },
              {
                lat: 42.7833,
                lng: 17.3167,
                name: 'Mljet',
                description: 'Nationalpark mit Salzwasserseen'
              },
              {
                lat: 42.9603,
                lng: 17.1358,
                name: 'Korčula',
                description: 'Geburtsort von Marco Polo'
              }
            ]}
            className="shadow-lg"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Yachtcharter Dubrovnik & Süddalmatien</h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Dubrovnik, die "Perle der Adria", ist der krönende Abschluss der kroatischen Küste und zugleich einer der spektakulärsten Ausgangspunkte für unvergessliche Segeltörns. Diese UNESCO-Weltkulturerbestadt mit ihren mächtigen Stadtmauern und barocken Palästen bildet das Tor zu den Elaphiten-Inseln, dem Nationalpark Mljet und der historischen Insel Korčula - eine Region, die Geschichte, Kultur und unberührte Natur in perfekter Harmonie vereint.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Süddalmatien bietet das exklusivste Segelerlebnis Kroatiens: von den eleganten Marinas Dubrovniks erreichen Sie auf kurzen Etappen legendäre Ziele wie die autofreien Elaphiten-Inseln, die mystischen Salzwasserseen von Mljet oder das mittelalterliche Korčula. Das milde Klima, die spektakuläre Landschaft und die reiche kulturelle Tradition machen diese Region zum perfekten Revier für anspruchsvolle Segler.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dubrovnik - Die Perle der Adria</h2>
            <p className="text-lg text-gray-700 mb-4">
              Dubrovnik selbst ist ein architektonisches Meisterwerk, umgeben von einer 2 Kilometer langen, komplett erhaltenen Stadtmauer aus dem 14. Jahrhundert. Die Altstadt mit der berühmten Stradun-Promenade, dem Rektorenpalast und der Kathedrale ist ein lebendiges Museum der Seefahrerrepublik Ragusa. Moderne Marinas wie ACI Marina Dubrovnik und Marina Komolac bieten erstklassige Ausstattung vor dieser historischen Kulisse.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Dubrovniks maritime Infrastruktur:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>ACI Marina Dubrovnik:</strong> Premium-Marina mit 380 Liegeplätzen</li>
              <li><strong>Marina Komolac:</strong> Geschützte Marina am Fluss Ombla</li>
              <li><strong>Port Gruž:</strong> Haupthafen mit Charter-Basis</li>
              <li><strong>Lokrum Ankerplatz:</strong> Ruhige Insel vor der Altstadt</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Die Elaphiten - Autofreie Inselwelt</h2>
            <p className="text-lg text-gray-700 mb-4">
              Die Elaphiten-Inseln Koločep, Lopud und Šipan liegen wie Perlen vor Dubrovnik und bieten eine einzigartige Mischung aus unberührter Natur und reicher Geschichte. Diese autofreien Inseln sind perfekt für entspannte Spaziergänge, kristallklare Badebuchten und romantische Sonnenuntergänge.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Elaphiten-Highlights:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Lopud:</strong> Sandstrand Šunj - einer der wenigen echten Sandstrände Kroatiens</li>
              <li><strong>Šipan:</strong> Größte Elaphiten-Insel mit prächtigen Sommerresidenzen</li>
              <li><strong>Koločep:</strong> Kleinste bewohnte Insel mit versteckten Höhlen</li>
              <li><strong>Jakljan:</strong> Unbewohnte Insel mit perfekten Ankerplätzen</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Mljet - Der grüne Nationalpark</h2>
            <p className="text-lg text-gray-700 mb-4">
              Mljet, zu einem Drittel Nationalpark, ist die grünste Insel der Adria und ein Paradies für Naturliebhaber. Die beiden Salzwasserseen Veliko und Malo jezero mit der romantischen Insel Sveta Marija in der Mitte gehören zu den spektakulärsten Naturwundern Kroatiens. Der dichte Pinienwald und die unberührten Buchten bieten perfekte Ruhe abseits des Tourismus.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Korčula - Die kleine Dubrovnik</h2>
            <p className="text-lg text-gray-700 mb-4">
              Korčula, oft als "kleine Dubrovnik" bezeichnet, beeindruckt mit einer perfekt erhaltenen mittelalterlichen Altstadt und behauptet, der Geburtsort von Marco Polo zu sein. Die Insel ist berühmt für ihre Weine, insbesondere den weißen Grk und den roten Pošip, sowie für den traditionellen Schwerttanz Moreška. Vela Luka und Korčula-Stadt bieten ausgezeichnete Marinas und lebendige Atmosphäre.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Optimale Segelbedingungen</h2>
            <p className="text-lg text-gray-700 mb-4">
              Süddalmatien genießt das mildeste Klima der kroatischen Küste mit über 320 Sonnentagen pro Jahr. Der Maestral sorgt für perfekte Segelbedingungen, während der warme Jugo aus Südost interessante Herausforderungen bietet. Die relativ kurzen Distanzen zwischen den Zielen ermöglichen entspannte Tagesetappen mit viel Zeit für Kultur und Genuss.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Beste Reisezeit für Süddalmatien:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Mai - Juni:</strong> Mild, wenig Touristen, perfekt für Kultur-Törns</li>
              <li><strong>Juli - August:</strong> Hochsaison mit lebendiger Atmosphäre</li>
              <li><strong>September - Oktober:</strong> Traumwetter, warmes Meer, weniger Verkehr</li>
              <li><strong>November:</strong> Noch mild, ideal für ruhige Entdeckungsreisen</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Kulinarische Exzellenz</h2>
            <p className="text-lg text-gray-700 mb-4">
              Süddalmatien ist die Haute Cuisine Region Kroatiens. Dubrovnik bietet Michelin-Stern-verdächtige Restaurants, während traditionelle Konobas auf den Inseln lokale Spezialitäten wie Lamm unter der Peka, Austern aus Mali Ston und die exzellenten Weine von Korčula servieren. Jeder Ankerplatz bietet kulinarische Entdeckungen höchsten Niveaus.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Game of Thrones - Segeln durch Westeros</h2>
            <p className="text-lg text-gray-700 mb-4">
              Dubrovnik und die umliegenden Inseln dienten als Drehort für die HBO-Serie Game of Thrones. Ihre Yacht wird Sie zu den Originalschauplätzen bringen: Dubrovnik als Königsmund, Lokrum als Qarth und die Elaphiten als Sommermeer. Ein besonderes Erlebnis für Fans der Serie und Filmliebhaber.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Entdecken Sie Dubrovnik & Süddalmatien</h2>
            <p className="text-lg text-muted-foreground">
              Erleben Sie UNESCO-Weltkulturerbe, Elaphiten-Inseln und Nationalpark Mljet bei Ihrem exklusiven Yachtcharter.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <CharterRequestForm />
          </div>
        </div>

        <TopDestinations />
      </div>
    </div>
  );
}