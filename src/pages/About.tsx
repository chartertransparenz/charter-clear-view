import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, MapPin, Users, Heart, Anchor, Compass, Ship, Star, Trophy, Globe } from "lucide-react";
import transparencyValue from "@/assets/transparency-value.jpg";
import qualityValue from "@/assets/quality-value.jpg";
import trustValue from "@/assets/trust-value.jpg";
import experienceValue from "@/assets/experience-value.jpg";
import Navigation from "@/components/Navigation";
const About = () => {
  const milestones = [{
    year: "1997",
    title: "Gründung",
    description: "Charter Transparenz wird ins Leben gerufen mit der Vision, transparente und vertrauensvolle Yacht-Charter zu ermöglichen.",
    icon: Anchor,
    location: "Ausgangspunkt"
  }, {
    year: "1998",
    title: "Erster Messeauftritt",
    description: "Präsentation auf der ersten Bootsmesse - der Grundstein für unsere Branchenpräsenz wird gelegt.",
    icon: Ship,
    location: "Erste Fahrt"
  }, {
    year: "1999",
    title: "Erster Webauftritt",
    description: "Launch unserer ersten Website - frühe Digitalisierung im Charter-Bereich.",
    icon: Compass,
    location: "Neuer Kurs"
  }, {
    year: "2001",
    title: "1000+ Buchungen",
    description: "Durchbrechen der 1000-Buchungen-Marke pro Jahr - ein wichtiger Meilenstein des Wachstums.",
    icon: Star,
    location: "Hauptroute"
  }, {
    year: "2010",
    title: "Internationale Bekanntheit",
    description: "Charter Transparenz etabliert sich als bekannte Marke im internationalen Yacht-Charter-Markt.",
    icon: Globe,
    location: "Weltweite Gewässer"
  }, {
    year: "2015",
    title: "VMWD Mitgliedschaft",
    description: "Aufnahme als Mitglied im Verband Maritime Wirtschaft Deutschland e.V. - Anerkennung unserer Branchenexpertise.",
    icon: Award,
    location: "Ehrungen"
  }, {
    year: "2020",
    title: "Weltmeister der Charter-Webseiten",
    description: "Auszeichnung als beste Charter-Website weltweit - Krönung unserer digitalen Exzellenz.",
    icon: Trophy,
    location: "Zielpunkt"
  }];
  const stats = [{
    number: "30+",
    label: "Jahre Erfahrung"
  }, {
    number: "500+",
    label: "Zufriedene Kunden"
  }, {
    number: "50+",
    label: "Charter Destinationen"
  }, {
    number: "24/7",
    label: "Service Support"
  }];
  const values = [{
    icon: Heart,
    title: "Transparenz",
    description: "Ehrliche Beratung und faire Preise ohne versteckte Kosten",
    image: transparencyValue
  }, {
    icon: Award,
    title: "Qualität",
    description: "Nur geprüfte und versicherte Boote in erstklassigem Zustand",
    image: qualityValue
  }, {
    icon: Users,
    title: "Vertrauen",
    description: "Langjährige Partnerschaften mit renommierten Charterunternehmen",
    image: trustValue
  }, {
    icon: MapPin,
    title: "Erfahrung",
    description: "Tiefe Ortskenntnisse und persönliche Empfehlungen",
    image: experienceValue
  }];
  return <div className="min-h-screen">
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

            {/* Maritime Bild */}
            <div className="mb-16 flex justify-center">
              <div className="w-full max-w-4xl">
                <img 
                  src="/lovable-uploads/6b13b174-3eab-402e-90de-69f81e1ac06e.png" 
                  alt="Charter Transparenz - Maritime Erfahrung" 
                  className="w-full h-auto rounded-xl shadow-ocean hover:shadow-elegant transition-all duration-300"
                />
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-12 text-ocean-dark">Unser Team</h2>

              {/* Individual Team Members */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 border-ocean-light/50 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img src="/lovable-uploads/1c1a939c-69d4-4725-97f0-6b97c1d90e5d.png" alt="Geschäftsführerin" className="w-full h-full object-cover" />
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
                    <img src="/lovable-uploads/6c0dd6c0-3e84-4a08-bd14-ef5dc5120e4c.png" alt="Charter-Experte" className="w-full h-full object-cover" />
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
              {stats.map((stat, index) => <Card key={index} className="text-center shadow-ocean hover:shadow-elegant transition-all duration-300 border-ocean-light/50">
                  
                </Card>)}
            </div>


            {/* Values */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-12 text-ocean-dark">Unsere Werte</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => <Card key={index} className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <img src={value.image} alt={value.title} className="w-full h-full object-cover" />
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
                  </Card>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>;
};
export default About;