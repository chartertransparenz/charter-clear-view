import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { MapPin, Anchor, Waves, Mountain, Star } from "lucide-react";
import { Link } from "react-router-dom";
import bodenseeAerial from "@/assets/bodensee-aerial.jpg";
import mediterranean from "@/assets/mediterranean.jpg";
import balticSea from "@/assets/baltic-sea.jpg";
import atlantic from "@/assets/atlantic.jpg";
import caribbean from "@/assets/caribbean.jpg";
import pacific from "@/assets/pacific.jpg";
import indianOcean from "@/assets/indian-ocean.jpg";
import expedition from "@/assets/expedition.jpg";
import destinationCroatia from "@/assets/destination-croatia.jpg";
import destinationGreece from "@/assets/destination-greece.jpg";
import destinationItaly from "@/assets/destination-italy.jpg";
import destinationSpain from "@/assets/destination-spain.jpg";
import destinationTurkey from "@/assets/destination-turkey.jpg";
import destinationFrance from "@/assets/destination-france.jpg";
import destinationBvi from "@/assets/destination-bvi.jpg";
import destinationThailand from "@/assets/destination-thailand.jpg";
import destinationSeychelles from "@/assets/destination-seychelles.jpg";
import destinationAustralia from "@/assets/destination-australia.jpg";
const Territories = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const topDestinations = [{
    rank: 1,
    flag: "🇭🇷",
    name: "Kroatien",
    regions: "Dalmatien (Split, Šibenik, Dubrovnik), Kornaten, Istrien, Kvarner",
    highlights: ["Hunderte Inseln & Buchten", "Hervorragende Infrastruktur", "Klare Regeln & guter Service", "Ideales Klima (Mai–Oktober)"],
    image: destinationCroatia,
    link: "/reviere/kroatien"
  }, {
    rank: 2,
    flag: "🇬🇷",
    name: "Griechenland",
    regions: "Kykladen, Saronischer Golf, Ionische Inseln, Dodekanes, Sporaden",
    highlights: ["Inselhopping mit Tavernen-Charme", "Konstante Meltemi-Winde (Sommer)", "Kultur & Natur vereint", "Ideal für Bareboat- oder Skippercharter"],
    image: destinationGreece,
    link: "/reviere/griechenland"
  }, {
    rank: 3,
    flag: "🇮🇹",
    name: "Italien",
    regions: "Sardinien, Elba/Toskana, Sizilien, Amalfiküste, Aeolische Inseln",
    highlights: ["Vielfalt an Revierarten: ruhig bis anspruchsvoll", "Gutes Essen, Kultur & spektakuläre Küsten", "Auch für Wochenend-Törns beliebt"],
    image: destinationItaly,
    link: "/reviere/italien"
  }, {
    rank: 4,
    flag: "🇪🇸",
    name: "Spanien",
    regions: "Balearen (Mallorca, Menorca, Ibiza, Formentera), Kanaren",
    highlights: ["Mediterrane Atmosphäre mit Top-Infrastruktur", "Ganzjahresziel (v.a. Kanaren)", "Große Auswahl an Charterbasen"],
    image: destinationSpain,
    link: "/reviere/spanien"
  }, {
    rank: 5,
    flag: "🇹🇷",
    name: "Türkei",
    regions: "Türkische Ägäis (Bodrum, Marmaris, Göcek, Fethiye)",
    highlights: ["Blue Cruise-Tradition", "Gület-Charter beliebt", "Warmes Wasser, geschützte Buchten", "Gastfreundschaft & gutes Preis-Leistungs-Verhältnis"],
    image: destinationTurkey,
    link: "/reviere/tuerkei"
  }, {
    rank: 6,
    flag: "🇫🇷",
    name: "Frankreich",
    regions: "Côte d'Azur, Korsika, Bretagne",
    highlights: ["Segeln mit Stil (Cannes, St. Tropez)", "Anspruchsvolles Tidenrevier (Bretagne)", "Sehr gute Yachtausstattung & Infrastruktur"],
    image: destinationFrance,
    link: "/reviere/frankreich"
  }, {
    rank: 7,
    flag: "🇻🇬",
    name: "Britische Jungferninseln (BVI)",
    regions: "Inselgruppe der Kleinen Antillen, Karibik",
    highlights: ["Traumhafte, kurze Tagesetappen", "Karibik-Feeling pur", "Perfekt für Einsteiger & Familien", "Line-of-sight sailing mit Top-Logistik"],
    image: destinationBvi,
    link: "/reviere/britische-jungferninseln"
  }, {
    rank: 8,
    flag: "🇹🇭",
    name: "Thailand",
    regions: "Phuket & Andamanensee",
    highlights: ["Exotische Kulisse mit Felseninseln & Lagunen", "Günstige Charterpreise", "Kultur & Küche an Land", "Beste Reisezeit: Nov–Apr"],
    image: destinationThailand,
    link: "/reviere/thailand"
  }, {
    rank: 9,
    flag: "🇸🇨",
    name: "Seychellen",
    regions: "Mahé, Praslin, La Digue, Amiranten",
    highlights: ["Tropisches Inselparadies", "Katamaran bevorzugt", "Glasklares Wasser, Schnorcheln", "Ankern vor Traumstränden"],
    image: destinationSeychelles,
    link: "/reviere/seychellen"
  }, {
    rank: 10,
    flag: "🇦🇺",
    name: "Australien",
    regions: "Whitsunday Islands (Great Barrier Reef)",
    highlights: ["Unberührte Inselwelt", "Traumhafte Ankerbuchten", "Tropisches Klima, bestes Segelrevier der Südhalbkugel", "Meist mit Skipper empfohlen"],
    image: destinationAustralia,
    link: "/reviere/australien"
  }];

  // Automatisches Karussell für Top 10 Destinationen
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000); // Alle 4 Sekunden

    return () => clearInterval(interval);
  }, [api]);
  return <section id="reviere" className="py-20 bg-gradient-to-b from-ocean-light/20 to-white">
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
            entdecke die schönsten Segelreviere Europas
          </p>
        </div>

        {/* Top 10 Destinations Carousel */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-ocean-dark">
            Unsere Top 10 Revier-Empfehlungen für dich
          </h2>
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {topDestinations.map(destination => <CarouselItem key={destination.rank} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link to={destination.link} className="group">
                    <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img src={destination.image} alt={destination.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-sunset text-white font-bold">
                            <Star className="w-3 h-3 mr-1" />
                            #{destination.rank}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl">{destination.flag}</span>
                            <h3 className="text-xl font-bold">{destination.name}</h3>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-3 font-medium">
                          {destination.regions}
                        </p>
                        <ul className="space-y-1">
                          {destination.highlights.map((highlight, idx) => <li key={idx} className="flex items-center gap-2 text-xs">
                              <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full flex-shrink-0"></div>
                              {highlight}
                            </li>)}
                        </ul>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Navigation Menu */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ocean-dark mb-8 text-center">Weltweite Segelreviere</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/reviere/mittelmeer" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <img src={mediterranean} alt="Mittelmeer" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
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

            <Link to="/reviere/karibik" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <img src={caribbean} alt="Karibik" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
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

            <Link to="/reviere/pazifik" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <img src={pacific} alt="Pazifik" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
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

            <Link to="/reviere/atlantik" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <img src={atlantic} alt="Atlantik" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
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

            <Link to="/reviere/indischer-ozean" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <img src={indianOcean} alt="Indischer Ozean" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
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

            <Link to="/reviere/nord-europa" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <img src={balticSea} alt="Nord- und Ostsee" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
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

            <Link to="/reviere/amerika-bahamas" className="group">
              <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer">
                <div className="relative h-32 overflow-hidden">
                  <img src={caribbean} alt="Amerika & Bahamas" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <Badge className="mb-1 bg-sunset text-white text-xs">🇺🇸 Amerika</Badge>
                    <h3 className="font-bold">Amerika & Bahamas</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Kristallklare Lagunen, amerikanische Gastfreundschaft und erstklassige Marina-Infrastruktur.
                  </p>
                </CardContent>
              </Card>
            </Link>

          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          
        </div>
      </div>
    </section>;
};
export default Territories;