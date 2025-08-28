import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";

const CostaBrava = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: MapPin,
      label: "Lage",
      value: "Spanische Festlandküste"
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
      value: "Wilde Küste & Barcelona"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/0027bb02-2f53-4dd7-81ed-206d49f8e2c8.png')",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <Link
              to="/reviere/mittelmeer/spanien"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zu Spanien
            </Link>
          </div>
          <Badge variant="outline" className="mb-4 border-white/30 text-white">
            Mittelmeer
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Costa Brava</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Spaniens wilde Küste zwischen Barcelona und der französischen Grenze
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
              <BreadcrumbLink href="/reviere/mittelmeer/spanien">Spanien</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Costa Brava</BreadcrumbPage>
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

        {/* Kartenansicht */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Kartenansicht Costa Brava</h2>
          <Card>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350000!2d3.1012779!3d41.9108823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU0JzM5LjIiTiAzwrAwNicwNC42IkU!5e1!3m2!1sde!2sde!4v1234567890!5m2!1sde!2sde&z=8"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kartenansicht Costa Brava"
              />
            </CardContent>
          </Card>
        </div>

        {/* Detailed Territory Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Costa Brava: Segeln an Spaniens wilder Küste</h2>
            <p className="text-xl text-muted-foreground">
              Entdecken Sie ein Segelrevier von unvergleichlicher Schönheit und Ursprünglichkeit
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Entdecken Sie ein Segelrevier von unvergleichlicher Schönheit und Ursprünglichkeit: die Costa Brava. Zwischen den Pyrenäen und dem Mittelmeer erstreckt sich dieser Küstenabschnitt im Nordosten Spaniens, der seinem Namen – „wilde Küste" – alle Ehre macht. Ein Yachtcharter an der Costa Brava ist eine Einladung, eine Landschaft zu erkunden, die von schroffen Klippen, tief eingeschnittenen Buchten und dem azurblauen Wasser des Mittelmeers geprägt ist. Hier trifft katalanische Kultur auf mediterranes Flair, und die Freiheit des Segelns verbindet sich mit dem Charme malerischer Fischerdörfer.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Die Costa Brava ist ein Geheimtipp für Segler, die das authentische Spanien abseits des Massentourismus suchen. Sie bietet eine einzigartige Mischung aus Naturerlebnissen, kulturellen Entdeckungen und entspanntem Küstensegeln. Dank ihrer überschaubaren Größe ist sie ideal für einwöchige Törns, die sowohl Familien als auch Genusssegler begeistern werden.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Die wilde Schönheit der Costa Brava</h3>
            <p className="text-lg leading-relaxed mb-6">
              Charakteristisch für die Costa Brava sind die steilen, oft bewaldeten Klippen, die dramatisch ins Meer abfallen. Dazwischen verstecken sich unzählige kleine, oft nur vom Meer aus zugängliche Calas (Buchten) mit kristallklarem Wasser, die zum Ankern, Schwimmen und Schnorcheln einladen. Die Region ist bekannt für ihre malerischen Fischerdörfer, die sich an die Küste schmiegen, und die Spuren berühmter Künstler wie Salvador Dalí, dessen Museen und Häuser hier zu finden sind.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ihre Ausgangspunkte und Marinas</h3>
            <p className="text-lg leading-relaxed mb-6">
              Die Costa Brava verfügt über eine gute Infrastruktur mit modernen Marinas, die alle notwendigen Einrichtungen für einen entspannten Charter bieten. Beliebte Ausgangshäfen sind:
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-3 text-black">
                <li><strong>Roses:</strong> Am nördlichen Ende der Costa Brava gelegen, bietet Roses eine große, geschützte Bucht und ist ein idealer Startpunkt, um den Naturpark Cap de Creus zu erkunden.</li>
                <li><strong>L'Escala:</strong> Ein charmantes Fischerdorf mit einer modernen Marina, das direkten Zugang zu den Ruinen von Empúries bietet – einer beeindruckenden römischen und griechischen Ausgrabungsstätte.</li>
                <li><strong>Palamós:</strong> Ein lebhafter Fischereihafen mit einer schönen Promenade und exzellenten Fischrestaurants. Die Marina ist gut ausgestattet und ein guter Ausgangspunkt für Törns entlang der zentralen Costa Brava.</li>
                <li><strong>Blanes:</strong> Am südlichen Ende der Küste gelegen, ist Blanes bekannt für seine botanischen Gärten und den jährlichen Feuerwerkswettbewerb. Die Marina bietet eine gute Anbindung an die südlichen Buchten.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Törnziele und Highlights</h3>
            <p className="text-lg leading-relaxed mb-6">
              Von Ihrer Charterbasis aus können Sie die vielfältige Küste erkunden:
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-3 text-black">
                <li><strong>Cap de Creus:</strong> Der östlichste Punkt der Iberischen Halbinsel ist ein windgepeitschter Naturpark mit bizarren Felsformationen und einer einzigartigen Landschaft, die Dalí inspirierte.</li>
                <li><strong>Illes Medes:</strong> Vor der Küste von L'Estartit gelegen, sind die Medes-Inseln ein streng geschütztes Meeresschutzgebiet und ein Paradies für Taucher und Schnorchler.</li>
                <li><strong>Cala Fornells, Cala Pola, Cala Futadera:</strong> Nur einige Beispiele der unzähligen, oft nur vom Meer aus erreichbaren Traumbuchten, die zum Verweilen einladen.</li>
                <li><strong>Cadaqués:</strong> Ein malerisches Dorf mit weißen Häusern, das sich perfekt in die Landschaft einfügt und als Heimat von Salvador Dalí bekannt ist.</li>
                <li><strong>Tossa de Mar:</strong> Eine charmante Küstenstadt mit einer beeindruckenden mittelalterlichen Festung, die direkt am Meer liegt.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Wind & Wetter: Segeln an der Costa Brava</h3>
            <p className="text-lg leading-relaxed mb-6">
              Das Klima an der Costa Brava ist mediterran.
            </p>

            <div className="border border-gray-300 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-3 text-black">
                <li><strong>Windbedingungen:</strong> Im Sommer dominieren meist ruhige, thermische Winde (Garbí aus Südwest), die entspanntes Segeln ermöglichen. Der Tramontana, ein starker Nordwind, kann besonders in der Vor- und Nachsaison auftreten und erfordert Aufmerksamkeit, bietet aber auch sportliche Segelbedingungen.</li>
                <li><strong>Beste Reisezeit:</strong> Die idealen Monate für einen Yachtcharter sind Mai, Juni und September. Das Wetter ist angenehm warm, die Wassertemperaturen sind ideal zum Baden, und die Häfen sind belebt, aber nicht überfüllt. Der Juli und August sind ebenfalls beliebt, aber dann ist es am vollsten und heißesten.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Fazit: Ihr entspanntes Segelabenteuer in Katalonien</h3>
            <p className="text-lg leading-relaxed mb-6">
              Ein Yachtcharter an der Costa Brava ist die perfekte Wahl für alle, die eine unkomplizierte Anreise, authentisches spanisches Flair und maximale Flexibilität bei der Törnplanung schätzen. Sie erleben eine Küste voller Charakter, genießen die katalanische Küche und tauchen ein in eine Region, die ihre Besucher mit ihrer wilden Schönheit und ihrem entspannten Lebensrhythmus verzaubert. Die Nähe zu Barcelona bietet zudem die Möglichkeit, einen Städtetrip mit dem Segelurlaub zu verbinden.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Sind Sie bereit, die Segel an der Costa Brava zu setzen und Spaniens wilde Küste zu entdecken?
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Kontaktieren Sie uns für Ihr persönliches Angebot. Wir helfen Ihnen, die perfekte Yacht und Route für Ihren unvergesslichen Törn an der Costa Brava zu finden.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Jetzt Charter-Anfrage stellen</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entdecken Sie die Costa Brava mit einem Charterboot. Unser Team hilft Ihnen bei der Planung Ihres perfekten Segeltörns.
          </p>
          <CharterRequestForm>
            <Button size="lg" className="text-lg px-8 py-3">
              Unverbindliche Anfrage stellen
            </Button>
          </CharterRequestForm>
        </div>
      </div>
    </div>
  );
};

export default CostaBrava;