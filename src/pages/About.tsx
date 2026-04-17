import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Anchor, Compass, Ship, Star, Trophy, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
// import maritimeImage from "@/assets/maritime-experience.jpg";
const About = () => {
  const m = META.about;
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };
  
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
  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      />
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
                Bald 30 Jahre Charter Transparenz
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
                  src="/lovable-uploads/48ae290b-f7f7-4f0a-82a5-2771aa15fb3a.webp" 
                  alt="Wir über uns - Seite im Aufbau" 
                  className="w-full h-auto rounded-xl shadow-ocean hover:shadow-elegant transition-all duration-300"
                />
              </div>
            </div>

          </div>
        </section>
      </main>

      <TopDestinations />
      </div>
    </>
  );
};
export default About;