import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, MapPin, Users, Heart, Anchor, Compass, Ship, Star, Trophy, Globe } from "lucide-react";
import transparencyValue from "@/assets/transparency-value.jpg";
import qualityValue from "@/assets/quality-value.jpg";
import trustValue from "@/assets/trust-value.jpg";
import experienceValue from "@/assets/experience-value.jpg";
import Navigation from "@/components/Navigation";


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

            {/* Nautical Treasure Map Timeline */}
            <div className="mb-16 relative">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-ocean-dark mb-4">Unsere Schatz-Route</h2>
                <p className="text-lg text-muted-foreground">30 Jahre Charter-Abenteuer auf den Weltmeeren</p>
              </div>
              
              {/* Treasure Map Container */}
              <div className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 rounded-3xl p-12 shadow-2xl overflow-hidden border-4 border-blue-200">
                {/* Map Decorations */}
                <div className="absolute top-6 left-6 opacity-30">
                  <Compass className="w-20 h-20 text-ocean-blue animate-spin" style={{ animationDuration: '20s' }} />
                </div>
                <div className="absolute top-6 right-6 opacity-20">
                  <Ship className="w-16 h-16 text-blue-600 animate-bounce" style={{ animationDelay: '1s' }} />
                </div>
                <div className="absolute bottom-6 left-6 opacity-25">
                  <Anchor className="w-12 h-12 text-ocean-dark animate-pulse" />
                </div>
                <div className="absolute bottom-6 right-6 opacity-20">
                  <Star className="w-10 h-10 text-blue-500 animate-pulse" style={{ animationDelay: '2s' }} />
                </div>
                
                {/* Animated Treasure Route SVG */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                  viewBox="0 0 1000 800"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e40af" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Main Route Path */}
                  <path
                    d="M 100,150 Q 200,100 300,140 Q 400,180 500,120 Q 600,80 700,130 Q 800,180 900,120"
                    stroke="url(#routeGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="15,10"
                    filter="url(#glow)"
                    className="animate-pulse"
                  />
                  
                  {/* Route Points */}
                  {milestones.map((_, index) => {
                    const positions = [
                      { x: 100, y: 150 },
                      { x: 250, y: 120 },
                      { x: 380, y: 160 },
                      { x: 520, y: 100 },
                      { x: 650, y: 155 },
                      { x: 780, y: 105 },
                      { x: 900, y: 120 }
                    ];
                    return (
                      <g key={index}>
                        {/* Treasure Point */}
                        <circle
                          cx={positions[index]?.x}
                          cy={positions[index]?.y}
                          r="8"
                          fill="#1e40af"
                          className="animate-pulse"
                          style={{ animationDelay: `${index * 0.5}s` }}
                        />
                        <circle
                          cx={positions[index]?.x}
                          cy={positions[index]?.y}
                          r="15"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          opacity="0.6"
                          className="animate-ping"
                          style={{ animationDelay: `${index * 0.5}s` }}
                        />
                        
                        {/* Connecting Dots between points */}
                        {index < milestones.length - 1 && (
                          <>
                            {[1, 2, 3, 4, 5].map((dotIndex) => {
                              const startPos = positions[index];
                              const endPos = positions[index + 1];
                              const progress = dotIndex / 6;
                              const x = startPos.x + (endPos.x - startPos.x) * progress;
                              const y = startPos.y + (endPos.y - startPos.y) * progress + 
                                       Math.sin(progress * Math.PI) * 20; // Add curve
                              
                              return (
                                <circle
                                  key={`${index}-${dotIndex}`}
                                  cx={x}
                                  cy={y}
                                  r="3"
                                  fill="#60a5fa"
                                  opacity="0.8"
                                  className="animate-pulse"
                                  style={{ 
                                    animationDelay: `${index * 0.5 + dotIndex * 0.1}s`,
                                    animationDuration: '2s'
                                  }}
                                />
                              );
                            })}
                          </>
                        )}
                      </g>
                    );
                  })}
                  
                  {/* Treasure Chest at the end */}
                  <g transform="translate(885, 105)">
                    <rect x="0" y="0" width="30" height="20" fill="#1e40af" rx="3" />
                    <rect x="5" y="-5" width="20" height="10" fill="#3b82f6" rx="2" />
                    <circle cx="15" cy="5" r="2" fill="#fbbf24" className="animate-pulse" />
                  </g>
                </svg>

                {/* Timeline Events */}
                <div className="relative z-10 grid gap-16">
                  {milestones.map((milestone, index) => {
                    const positions = ['left-0', 'right-0', 'left-0', 'right-0', 'left-0', 'right-0', 'left-0'];
                    const isLeft = index % 2 === 0;
                    
                    return (
                      <div 
                        key={index} 
                        className={`relative ${
                          isLeft ? 'justify-start' : 'justify-end'
                        } flex`}
                        style={{ 
                          marginTop: index === 0 ? '0' : '60px',
                          animationDelay: `${index * 300}ms`,
                        }}
                      >
                        {/* Treasure Card */}
                        <div className={`relative transform transition-all duration-700 hover:scale-105 ${
                          isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right'
                        } w-80 group`}>
                          
                          {/* Ocean-themed Card */}
                          <div className="bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200 rounded-2xl shadow-xl border-3 border-blue-300 p-6 relative overflow-hidden">
                            {/* Wave pattern overlay */}
                            <div className="absolute inset-0 opacity-10">
                              <svg className="w-full h-full" viewBox="0 0 100 20">
                                <defs>
                                  <pattern id={`waves-${index}`} patternUnits="userSpaceOnUse" width="40" height="8">
                                    <path d="M0,4 Q10,0 20,4 T40,4" stroke="#1e40af" strokeWidth="1" fill="none"/>
                                  </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill={`url(#waves-${index})`} />
                              </svg>
                            </div>
                            
                            {/* Maritime Icon Badge */}
                            <div className={`absolute -top-6 ${isLeft ? '-right-6' : '-left-6'} w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                              <milestone.icon className="w-10 h-10 text-white drop-shadow-lg" />
                              
                              {/* Glowing ring */}
                              <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping opacity-30"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 pt-4">
                              {/* Year Badge with nautical styling */}
                              <div className="inline-flex items-center gap-3 mb-4">
                                <Badge className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-blue-700 px-6 py-2 text-xl font-bold shadow-lg transform hover:scale-105 transition-transform">
                                  {milestone.year}
                                </Badge>
                                <div className="flex items-center gap-2 text-sm text-blue-700 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                                  <MapPin className="w-4 h-4" />
                                  {milestone.location}
                                </div>
                              </div>

                              {/* Title with ocean styling */}
                              <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-dotted border-blue-400 pb-3">
                                {milestone.title}
                              </h3>

                              {/* Description */}
                              <p className="text-blue-800 leading-relaxed font-medium mb-4">
                                {milestone.description}
                              </p>

                              {/* Maritime decorative elements */}
                              <div className="flex justify-between items-center pt-4 border-t border-blue-300">
                                <div className="flex gap-3">
                                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                  <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                </div>
                                <Anchor className="w-5 h-5 text-blue-600" />
                              </div>
                            </div>

                            {/* Nautical corner decorations */}
                            <div className="absolute top-3 left-3 w-6 h-6 border-l-3 border-t-3 border-blue-600 opacity-40"></div>
                            <div className="absolute top-3 right-3 w-6 h-6 border-r-3 border-t-3 border-blue-600 opacity-40"></div>
                            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-3 border-b-3 border-blue-600 opacity-40"></div>
                            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-3 border-b-3 border-blue-600 opacity-40"></div>
                          </div>

                          {/* Connection Line to Main Route */}
                          <div className={`absolute top-1/2 ${
                            isLeft ? '-right-12' : '-left-12'
                          } w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform -translate-y-1/2`}>
                            {/* Animated dots on connection line */}
                            <div className={`absolute ${
                              isLeft ? 'right-1' : 'left-1'
                            } top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full shadow-lg animate-pulse`}></div>
                            <div className={`absolute ${
                              isLeft ? 'right-4' : 'left-4'
                            } top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Treasure Map Legend */}
                <div className="absolute bottom-8 right-8 bg-blue-50/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-200">
                  <h4 className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    Schatzkarte
                  </h4>
                  <div className="space-y-2 text-xs text-blue-800">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                      <span>Abenteuer-Route</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span>Meilensteine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <span>Reiseverlauf</span>
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

      
    </div>
  );
};

export default About;