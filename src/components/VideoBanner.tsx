import { Button } from "@/components/ui/button";
import { Play, Users, Compass, Award } from "lucide-react";
// import videoBannerBg from "@/assets/video-banner-bg.jpg";

const VideoBanner = () => {
  const highlights = [
    {
      icon: Users,
      text: "Über 5000 zufriedene Kunden"
    },
    {
      icon: Compass,
      text: "180+ Segelgebiete weltweit"
    },
    {
      icon: Award,
      text: "Ausgezeichneter Service"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Video/Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/078607c7-e315-459a-b095-449836e21acd.webp')` }}
      >
        <div className="absolute inset-0 bg-ocean-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Play Button */}
          <div className="mb-8">
            <button className="group relative w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-ocean opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Play className="w-8 h-8 text-white ml-1 relative z-10" fill="currentColor" />
              
              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
              <div className="absolute inset-2 rounded-full border border-white/20 animate-ping animation-delay-200"></div>
            </button>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Entdecken Sie Ihre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sunset to-wave">
              Charter-Träume
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Erlebe unvergessliche Momente auf dem Wasser mit unseren 
            Premium-Yachten und erstklassigem Service
          </p>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-white">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <highlight.icon className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white-blue" size="lg" className="text-lg">
              Video ansehen
            </Button>
            <Button variant="transparent" size="lg" className="text-lg">
              Katalog anfordern
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-16 text-background"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default VideoBanner;