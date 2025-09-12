import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, MapPin, Users, Heart } from "lucide-react";
// import transparencyImg from "@/assets/transparency.jpg";
// import transparencyValue from "@/assets/transparency-value.jpg";
// import qualityValue from "@/assets/quality-value.jpg";
// import trustValue from "@/assets/trust-value.jpg";
// import experienceValue from "@/assets/experience-value.jpg";
const About = () => {
  const milestones = [
    {
      year: "1997",
      title: "Gründung",
      description: "Charter Transparenz wird ins Leben gerufen mit der Vision, transparente und vertrauensvolle Yacht-Charter zu ermöglichen."
    },
    {
      year: "1998", 
      title: "Erster Messeauftritt",
      description: "Präsentation auf der ersten Bootsmesse - der Grundstein für unsere Branchenpräsenz wird gelegt."
    },
    {
      year: "1999",
      title: "Erster Webauftritt", 
      description: "Launch unserer ersten Website - frühe Digitalisierung im Charter-Bereich."
    },
    {
      year: "2001",
      title: "1000+ Buchungen",
      description: "Durchbrechen der 1000-Buchungen-Marke pro Jahr - ein wichtiger Meilenstein des Wachstums."
    },
    {
      year: "2010",
      title: "Internationale Bekanntheit",
      description: "Charter Transparenz etabliert sich als bekannte Marke im internationalen Yacht-Charter-Markt."
    },
    {
      year: "2015", 
      title: "VMWD Mitgliedschaft",
      description: "Aufnahme als Mitglied im Verband Maritime Wirtschaft Deutschland e.V. - Anerkennung unserer Branchenexpertise."
    },
    {
      year: "2020",
      title: "Weltmeister der Charter-Webseiten",
      description: "Auszeichnung als beste Charter-Website weltweit - Krönung unserer digitalen Exzellenz."
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
      image: "/lovable-uploads/4150206c-dd18-4f04-84cf-eb44e39fe992.png"
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Nur geprüfte und versicherte Boote in erstklassigem Zustand", 
      image: "/lovable-uploads/4150206c-dd18-4f04-84cf-eb44e39fe992.png"
    },
    {
      icon: Users,
      title: "Vertrauen",
      description: "Langjährige Partnerschaften mit renommierten Charterunternehmen",
      image: "/lovable-uploads/4150206c-dd18-4f04-84cf-eb44e39fe992.png"
    },
    {
      icon: MapPin,
      title: "Erfahrung",
      description: "Tiefe Ortskenntnisse und persönliche Empfehlungen",
      image: "/lovable-uploads/4150206c-dd18-4f04-84cf-eb44e39fe992.png"
    }
  ];

  return (
    <section id="ueber-uns" className="py-20 bg-ocean-light/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Über uns
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            30 Jahre Charter Transparenz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seit 1997 stehen wir für Transparenz, Qualität und Vertrauen im Yacht-Charter. 
            Entdecken Sie unsere Reise von der Gründung bis zur internationalen Anerkennung.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-ocean-dark">Unser Team</h3>

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
                <h4 className="text-lg font-semibold text-ocean-dark mb-2">Geschäftsführung</h4>
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
                <h4 className="text-lg font-semibold text-ocean-dark mb-2">Charter-Experte</h4>
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

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-ocean-dark">Unsere Meilensteine</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-ocean h-full rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-ocean rounded-full border-4 border-white shadow-ocean z-10"></div>
                
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 border-ocean-light/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="border-ocean-blue text-ocean-blue font-bold">
                          {milestone.year}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold text-ocean-dark mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-ocean-dark">Unsere Werte</h3>
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
                  <h4 className="text-lg font-semibold mb-2 text-ocean-dark">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;