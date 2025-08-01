import { Button } from "@/components/ui/button";
import { Anchor, Award, Shield } from "lucide-react";
import heroYacht from "@/assets/hero-yacht.jpg";
import CharterRequestForm from "./CharterRequestForm";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroYacht})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <img 
            src="/lovable-uploads/7800ce91-211c-4ccb-b034-a6ce0187f339.png" 
            alt="Charter Icon" 
            className="w-8 h-8"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm">Über 30 Jahre Erfahrung</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transparent.
            <br />
            <span className="text-white">
              Vertrauenswürdig.
            </span>
            <br />
            Unvergesslich.
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entdecken Sie die Freiheit des Segelns mit CharterTransparenz - 
            Ihrem vertrauenswürdigen Partner für unvergessliche Chartererlebnisse 
            am Bodensee und darüber hinaus.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Shield className="w-5 h-5" />
              <span>Versichert & Lizenziert</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Award className="w-5 h-5" />
              <span>Keine versteckten Kosten</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="white-blue" 
              size="xl" 
              className="text-lg"
              onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Flotte entdecken
            </Button>
            <CharterRequestForm>
              <Button variant="transparent" size="xl" className="text-lg">
                Jetzt Anfrage stellen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>

      {/* Wave animation at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 animate-wave text-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;