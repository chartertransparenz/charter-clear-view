import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, MapPin, Users, Heart, Anchor, Compass, Ship, Star, Trophy, Globe } from "lucide-react";
import transparencyValue from "@/assets/transparency-value.jpg";
import qualityValue from "@/assets/quality-value.jpg";
import trustValue from "@/assets/trust-value.jpg";
import experienceValue from "@/assets/experience-value.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const milestones = [
    {
      year: "1997",
      title: "Gründung",
      description: "Charter Transparenz wird ins Leben gerufen mit der Vision, transparente und vertrauensvolle Yacht-Charter zu ermöglichen.",
      icon: Anchor,
      location: "Ausgangspunkt"
    },
    {
      year: "1998", 
      title: "Erster Messeauftritt",
      description: "Präsentation auf der ersten Bootsmesse - der Grundstein für unsere Branchenpräsenz wird gelegt.",
      icon: Ship,
      location: "Erste Fahrt"
    },
    {
      year: "1999",
      title: "Erster Webauftritt", 
      description: "Launch unserer ersten Website - frühe Digitalisierung im Charter-Bereich.",
      icon: Compass,
      location: "Neuer Kurs"
    },
    {
      year: "2001",
      title: "1000+ Buchungen",
      description: "Durchbrechen der 1000-Buchungen-Marke pro Jahr - ein wichtiger Meilenstein des Wachstums.",
      icon: Star,
      location: "Hauptroute"
    },
    {
      year: "2010",
      title: "Internationale Bekanntheit",
      description: "Charter Transparenz etabliert sich als bekannte Marke im internationalen Yacht-Charter-Markt.",
      icon: Globe,
      location: "Weltweite Gewässer"
    },
    {
      year: "2015", 
      title: "VMWD Mitgliedschaft",
      description: "Aufnahme als Mitglied im Verband Maritime Wirtschaft Deutschland e.V. - Anerkennung unserer Branchenexpertise.",
      icon: Award,
      location: "Ehrungen"
    },
    {
      year: "2020",
      title: "Weltmeister der Charter-Webseiten",
      description: "Auszeichnung als beste Charter-Website weltweit - Krönung unserer digitalen Exzellenz.",
      icon: Trophy,
      location: "Zielpunkt"
    }
  ];

  const stats = [
    { number: "30+", label: "Jahre Erfahrung" },
    { number: "500+", label: "Zufriedene Kunden" }, 
    { number: "50+", label: "Charter Destinationen" },
    { number: "24/7", label: "Service Support" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Transparenz", 
      description: "Ehrliche Beratung und faire Preise ohne versteckte Kosten",
      image: transparencyValue
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Nur geprüfte und versicherte Boote in erstklassigem Zustand", 
      image: qualityValue
    },
    {
      icon: Users,
      title: "Vertrauen",
      description: "Langjährige Partnerschaften mit renommierten Charterunternehmen",
      image: trustValue
    },
    {
      icon: MapPin,
      title: "Erfahrung",
      description: "Tiefe Ortskenntnisse und persönliche Empfehlungen",
      image: experienceValue
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section className="py-20 bg-ocean-light/20">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
                Über uns
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
                30 Jahre Charter Transparenz
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Seit 1997 stehen wir für Transparenz, Qualität und Vertrauen im Yacht-Charter. 
                Entdecken Sie unsere Reise von der Gründung bis zur internationalen Anerkennung.
              </p>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-12 text-ocean-dark">Unser Team</h2>

              {/* Individual Team Members */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 border-ocean-light/50 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/lovable-uploads/1c1a939c-69d4-4725-97f0-6b97c1d90e5d.png"
                      alt="Geschäftsführerin"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  </div>
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-lg font-semibold text-ocean-dark mb-2">Geschäftsführung</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Mit über 25 Jahren Erfahrung in der Charter-Branche und unzähligen Segelmeilen 
                      sorgt sie für höchste Qualitätsstandards und Kundenzufriedenheit.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 border-ocean-light/50 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/lovable-uploads/6c0dd6c0-3e84-4a08-bd14-ef5dc5120e4c.png"
                      alt="Charter-Experte"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  </div>
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-lg font-semibold text-ocean-dark mb-2">Charter-Experte</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Skipper und Charter-Spezialist mit fundierter Expertise in allen Revieren. 
                      Seine Leidenschaft gilt perfekten Charter-Erlebnissen für unsere Kunden.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-ocean hover:shadow-elegant transition-all duration-300 border-ocean-light/50">
                  <CardContent className="pt-6 pb-6">
                    <div className="text-3xl font-bold text-ocean-blue mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Adventure Timeline - Nautical Journey */}
            <div className="mb-16 relative">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-ocean-dark mb-4">Unsere Abenteuer-Reise</h2>
                <p className="text-lg text-muted-foreground">Eine nautische Chronik von 30 Jahren Charter-Erfahrung</p>
              </div>
              
              {/* Adventure Map Background */}
              <div className="relative bg-gradient-to-b from-amber-50 to-blue-50 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Decorative Map Elements */}
                <div className="absolute top-4 left-4 opacity-20">
                  <Compass className="w-16 h-16 text-amber-600 animate-pulse" />
                </div>
                <div className="absolute top-4 right-4 opacity-20">
                  <Ship className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-20">
                  <Anchor className="w-10 h-10 text-ocean-dark" />
                </div>
                
                {/* Nautical Route SVG */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="waves" patternUnits="userSpaceOnUse" width="20" height="4">
                      <path d="M0,2 Q5,0 10,2 T20,2" stroke="#0369a1" strokeWidth="0.5" fill="none" opacity="0.6"/>
                    </pattern>
                  </defs>
                  <path
                    d="M 10,15 Q 25,10 40,20 T 70,25 Q 85,30 95,40"
                    stroke="url(#waves)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,3"
                    className="animate-pulse"
                  />
                </svg>

                {/* Timeline Events */}
                <div className="relative z-10">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index} 
                      className={`relative mb-16 last:mb-0 ${
                        index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto md:text-right'
                      } md:w-1/2 group`}
                      style={{ 
                        animationDelay: `${index * 200}ms`,
                      }}
                    >
                      {/* Adventure Card */}
                      <div className={`relative transform transition-all duration-700 hover:scale-105 hover:rotate-1 ${
                        index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                      }`}>
                        {/* Parchment-style Card */}
                        <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 rounded-2xl shadow-xl border-2 border-amber-300 p-6 relative overflow-hidden">
                          {/* Vintage paper texture overlay */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.1),transparent)] pointer-events-none"></div>
                          
                          {/* Nautical Icon Badge */}
                          <div className={`absolute -top-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl border-4 border-white transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                            <milestone.icon className="w-8 h-8 text-white" />
                          </div>

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Year Badge */}
                            <div className="inline-flex items-center gap-2 mb-4">
                              <Badge className="bg-red-600 text-white border-red-700 px-4 py-1 text-lg font-bold shadow-lg">
                                {milestone.year}
                              </Badge>
                              <div className="flex items-center gap-1 text-sm text-amber-700 font-semibold">
                                <MapPin className="w-3 h-3" />
                                {milestone.location}
                              </div>
                            </div>

                            {/* Title with vintage styling */}
                            <h3 className="text-2xl font-bold text-amber-900 mb-3 border-b-2 border-dotted border-amber-400 pb-2">
                              {milestone.title}
                            </h3>

                            {/* Description */}
                            <p className="text-amber-800 leading-relaxed font-medium">
                              {milestone.description}
                            </p>

                            {/* Decorative elements */}
                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-amber-300">
                              <div className="flex gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                              <Star className="w-4 h-4 text-amber-600" />
                            </div>
                          </div>

                          {/* Vintage corner decorations */}
                          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-600 opacity-60"></div>
                          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-600 opacity-60"></div>
                          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-600 opacity-60"></div>
                          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-600 opacity-60"></div>
                        </div>

                        {/* Connecting Line to Timeline */}
                        <div className={`absolute top-1/2 ${
                          index % 2 === 0 ? '-right-8' : '-left-8'
                        } w-8 h-0.5 bg-gradient-to-r from-amber-400 to-blue-400 transform -translate-y-1/2`}>
                          <div className={`absolute ${
                            index % 2 === 0 ? 'right-0' : 'left-0'
                          } top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full shadow-lg`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Adventure Map Legend */}
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-amber-200">
                  <h4 className="text-sm font-bold text-amber-900 mb-2">Legende</h4>
                  <div className="space-y-1 text-xs text-amber-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-0.5 bg-gradient-to-r from-amber-400 to-blue-400"></div>
                      <span>Unsere Route</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Anchor className="w-3 h-3" />
                      <span>Meilensteine</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-12 text-ocean-dark">Unsere Werte</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-ocean-dark/40"></div>
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-4 pb-6">
                      <h3 className="text-lg font-semibold mb-2 text-ocean-dark">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;