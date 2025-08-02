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
  const [api, setApi] = React.useState<CarouselApi>()

  const topDestinations = [
    {
      rank: 1,
      flag: "🇭🇷",
      name: "Kroatien",
      regions: "Dalmatien (Split, Šibenik, Dubrovnik), Kornaten, Istrien, Kvarner",
      highlights: [
        "Hunderte Inseln & Buchten",
        "Hervorragende Infrastruktur", 
        "Klare Regeln & guter Service",
        "Ideales Klima (Mai–Oktober)"
      ],
      image: destinationCroatia,
      link: "/territories/croatia"
    },
    {
      rank: 2,
      flag: "🇬🇷",
      name: "Griechenland",
      regions: "Kykladen, Saronischer Golf, Ionische Inseln, Dodekanes, Sporaden",
      highlights: [
        "Inselhopping mit Tavernen-Charme",
        "Konstante Meltemi-Winde (Sommer)",
        "Kultur & Natur vereint",
        "Ideal für Bareboat- oder Skippercharter"
      ],
      image: destinationGreece,
      link: "/territories/greece"
    },
    {
      rank: 3,
      flag: "🇮🇹",
      name: "Italien",
      regions: "Sardinien, Elba/Toskana, Sizilien, Amalfiküste, Aeolische Inseln",
      highlights: [
        "Vielfalt an Revierarten: ruhig bis anspruchsvoll",
        "Gutes Essen, Kultur & spektakuläre Küsten",
        "Auch für Wochenend-Törns beliebt"
      ],
      image: destinationItaly,
      link: "/territories/italy"
    },
    {
      rank: 4,
      flag: "🇪🇸",
      name: "Spanien",
      regions: "Balearen (Mallorca, Menorca, Ibiza, Formentera), Kanaren",
      highlights: [
        "Mediterrane Atmosphäre mit Top-Infrastruktur",
        "Ganzjahresziel (v.a. Kanaren)",
        "Große Auswahl an Charterbasen"
      ],
      image: destinationSpain,
      link: "/territories/spain"
    },
    {
      rank: 5,
      flag: "🇹🇷",
      name: "Türkei",
      regions: "Türkische Ägäis (Bodrum, Marmaris, Göcek, Fethiye)",
      highlights: [
        "Blue Cruise-Tradition",
        "Gület-Charter beliebt",
        "Warmes Wasser, geschützte Buchten",
        "Gastfreundschaft & gutes Preis-Leistungs-Verhältnis"
      ],
      image: destinationTurkey,
      link: "/territories/turkey"
    },
    {
      rank: 6,
      flag: "🇫🇷",
      name: "Frankreich",
      regions: "Côte d'Azur, Korsika, Bretagne",
      highlights: [
        "Segeln mit Stil (Cannes, St. Tropez)",
        "Anspruchsvolles Tidenrevier (Bretagne)",
        "Sehr gute Yachtausstattung & Infrastruktur"
      ],
      image: destinationFrance,
      link: "/territories/france"
    },
    {
      rank: 7,
      flag: "🇻🇬",
      name: "Britische Jungferninseln (BVI)",
      regions: "Inselgruppe der Kleinen Antillen, Karibik",
      highlights: [
        "Traumhafte, kurze Tagesetappen",
        "Karibik-Feeling pur",
        "Perfekt für Einsteiger & Familien",
        "Line-of-sight sailing mit Top-Logistik"
      ],
      image: destinationBvi,
      link: "/territories/bvi"
    },
    {
      rank: 8,
      flag: "🇹🇭",
      name: "Thailand",
      regions: "Phuket & Andamanensee",
      highlights: [
        "Exotische Kulisse mit Felseninseln & Lagunen",
        "Günstige Charterpreise",
        "Kultur & Küche an Land",
        "Beste Reisezeit: Nov–Apr"
      ],
      image: destinationThailand,
      link: "/territories/thailand"
    },
    {
      rank: 9,
      flag: "🇸🇨",
      name: "Seychellen",
      regions: "Mahé, Praslin, La Digue, Amiranten",
      highlights: [
        "Tropisches Inselparadies",
        "Katamaran bevorzugt",
        "Glasklares Wasser, Schnorcheln",
        "Ankern vor Traumstränden"
      ],
      image: destinationSeychelles,
      link: "/territories/seychelles"
    },
    {
      rank: 10,
      flag: "🇦🇺",
      name: "Australien",
      regions: "Whitsunday Islands (Great Barrier Reef)",
      highlights: [
        "Unberührte Inselwelt",
        "Traumhafte Ankerbuchten",
        "Tropisches Klima, bestes Segelrevier der Südhalbkugel",
        "Meist mit Skipper empfohlen"
      ],
      image: destinationAustralia,
      link: "/territories/australia"
    }
  ];

  // Automatisches Karussell für Top 10 Destinationen
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000) // Alle 4 Sekunden

    return () => clearInterval(interval)
  }, [api])

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
              {topDestinations.map((destination) => (
                <CarouselItem key={destination.rank} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link to={destination.link} className="group">
                    <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden cursor-pointer h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
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
                          {destination.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs">
                              <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full flex-shrink-0"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
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
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={caribbean}
                    alt="Karibik"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
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
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={pacific}
                    alt="Pazifik"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
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
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={indianOcean}
                    alt="Indischer Ozean"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
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
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={expedition}
                    alt="Expeditionen"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
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
              Lass dich beraten
            </h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Unsere Experten kennen jedes Revier persönlich und helfen dir bei der 
              Auswahl des perfekten Segelgebiets für deine Bedürfnisse und Erfahrung.
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