import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, MapPin, Users, Heart } from "lucide-react";
import transparencyImg from "@/assets/transparency.jpg";
import transparencyValue from "@/assets/transparency-value.jpg";
import qualityValue from "@/assets/quality-value.jpg";
import trustValue from "@/assets/trust-value.jpg";
import experienceValue from "@/assets/experience-value.jpg";
const About = () => {
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
  return <section id="ueber-uns" className="py-20 bg-ocean-light/20">
      
    </section>;
};
export default About;