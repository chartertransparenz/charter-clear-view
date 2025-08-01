import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Anchor, Waves, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import bodenseeAerial from "@/assets/bodensee-aerial.jpg";
import mediterranean from "@/assets/mediterranean.jpg";
import balticSea from "@/assets/baltic-sea.jpg";
import atlantic from "@/assets/atlantic.jpg";

const Territories = () => {
  const territories = [
    {
      name: "Bodensee",
      region: "Deutschland/Österreich/Schweiz",
      description: "Unser Heimatrevier - kristallklares Wasser umgeben von den Alpen",
      highlights: ["Ganzjährig segelbar", "Traumhaftes Alpenpanorama", "Sichere Gewässer", "Erstklassige Marinas"],
      image: bodenseeAerial,
      icon: Mountain,
      difficulty: "Anfänger",
      season: "März - November",
      popular: true
    },
    {
      name: "Mittelmeer",
      region: "Kroatien, Italien, Griechenland",
      description: "Traumhafte Buchten, türkisblaues Wasser und historische Häfen",
      highlights: ["1000+ Inseln", "Warmes Klima", "Kulturelle Vielfalt", "Kulinarische Höhepunkte"],
      image: mediterranean,
      icon: Waves,
      difficulty: "Fortgeschritten",
      season: "April - Oktober",
      popular: true
    },
    {
      name: "Ostsee",
      region: "Deutschland, Dänemark, Schweden",
      description: "Abwechslungsreiche Küstenlandschaften und charmante Hafenstädte",
      highlights: ["Schären-Landschaft", "Historische Hansestädte", "Milde Winde", "Familienfreundlich"],
      image: balticSea,
      icon: Anchor,
      difficulty: "Anfänger",
      season: "Mai - September",
      popular: false
    },
    {
      name: "Atlantik",
      region: "Portugal, Spanien, Frankreich",
      description: "Herausfordernde Gewässer für erfahrene Segler",
      highlights: ["Atlantik-Feeling", "Lange Schläge", "Professionelle Herausforderung", "Spektakuläre Küsten"],
      image: atlantic,
      icon: MapPin,
      difficulty: "Experte",
      season: "Juni - September",
      popular: false
    }
  ];

  return (
    <section id="territories" className="py-20 bg-gradient-to-b from-ocean-light/20 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Segelreviere
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            Unsere Reviere
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von heimischen Gewässern bis zu exotischen Destinationen - 
            entdecken Sie die schönsten Segelreviere Europas
          </p>
        </div>

        {/* Featured Territory */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-elegant">
          <div className="relative">
            <img
              src={bodenseeAerial}
              alt="Bodensee aus der Vogelperspektive"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-sunset text-white">Unser Heimatrevier</Badge>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Bodensee</h3>
              <p className="text-lg text-white/90 max-w-md">
                Das perfekte Segelrevier für Einsteiger und Familien - 
                sicher, schön und nur einen Steinwurf von unserer Basis entfernt.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ocean-dark mb-8 text-center">Weltweite Segelreviere</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/territories/mediterranean" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={mediterranean}
                    alt="Mittelmeer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <Badge className="mb-1 bg-sunset text-white text-xs">🌍 Europa</Badge>
                    <h3 className="font-bold">Mittelmeer</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Das beliebteste Segelrevier weltweit - stabile Wetterbedingungen und reiche Geschichte.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/territories/caribbean" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden bg-gradient-to-r from-ocean-blue to-ocean-dark">
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <Badge className="mb-1 bg-sunset text-white text-xs">🌊 Atlantik</Badge>
                    <h3 className="font-bold">Karibik</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Tropischer Klassiker mit warmem Wasser, Passatwinden und Insel-Hopping.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/territories/pacific" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden bg-gradient-to-r from-ocean-blue to-ocean-dark">
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <Badge className="mb-1 bg-sunset text-white text-xs">🌴 Südsee</Badge>
                    <h3 className="font-bold">Pazifik & Südsee</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Traumhafte Lagunen, Korallenriffe und exotische Segelabenteuer.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/territories/atlantic" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={atlantic}
                    alt="Atlantik"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <Badge className="mb-1 bg-sunset text-white text-xs">🌬️ Atlantik</Badge>
                    <h3 className="font-bold">Atlantik & Kanaren</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Kräftige Winde, sportliche Törns und ganzjähriges Segeln.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/territories/indian-ocean" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden bg-gradient-to-r from-ocean-blue to-ocean-dark">
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <Badge className="mb-1 bg-sunset text-white text-xs">🐧 Indischer Ozean</Badge>
                    <h3 className="font-bold">Indischer Ozean</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Exotische Lagunen, tropisches Klima und unberührte Natur.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/territories/north-europe" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={balticSea}
                    alt="Nord- und Ostsee"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <Badge className="mb-1 bg-sunset text-white text-xs">🧭 Nordeuropa</Badge>
                    <h3 className="font-bold">Nord- & Ostsee</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Beeindruckende Landschaften, Schärengärten und sichere Navigation.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/territories/expeditions" className="group md:col-span-2 lg:col-span-3">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden bg-gradient-to-r from-ocean-dark via-ocean-blue to-ocean-dark">
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <Badge className="mb-1 bg-sunset text-white text-xs">🔥 Expeditionen</Badge>
                    <h3 className="font-bold">Exoten & Expeditionen</h3>
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Für Abenteuerlustige: Patagonien, Alaska, Island, Grönland - wilde und anspruchsvolle Reviere für Extremsegler.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-ocean rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Lassen Sie sich beraten
            </h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Unsere Experten kennen jedes Revier persönlich und helfen Ihnen bei der 
              Auswahl des perfekten Segelgebiets für Ihre Bedürfnisse und Erfahrung.
            </p>
            <Button variant="transparent" size="lg">
              Persönliche Revierberatung
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Territories;