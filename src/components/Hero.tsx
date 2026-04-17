// Hero component with image carousel
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
const mediterraneanImage = "/lovable-uploads/4150206c-dd18-4f04-84cf-eb44e39fe992.png";

import { useState, useEffect, useCallback } from "react";
const Hero = () => {
  const slides = [{
    image: "/lovable-uploads/5ed77d3d-0796-4844-abb5-9507d269869c.png",
    title: "Luxuriöse Yachten",
    subtitle: "Erstklassige Flotte für unvergessliche Erlebnisse"
  }, {
    image: "/lovable-uploads/256fb72b-90de-437f-9045-9f5b1b170b14.png",
    title: "Kristallklares Wasser",
    subtitle: "Die schönsten Gewässer der Welt entdecken"
  }, {
    image: mediterraneanImage,
    title: "Mittelmeer Abenteuer",
    subtitle: "Träume von perfekten Segeltörns"
  }, {
    image: "/lovable-uploads/c766448f-b061-494f-aecd-f58670d94300.png",
    title: "Karibische Träume",
    subtitle: "Paradiesische Destinationen erleben"
  }];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);
  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);
  return <section id="start" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-28 md:pt-24 lg:pt-20">
      {/* Background Images Carousel */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} style={{
      backgroundImage: `url(${slide.image})`
    }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>)}

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 group">
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 group">
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`} />)}
      </div>

      {/* Floating elements removed - now in FloatingCTA component */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Award className="w-4 h-4" />
            <span className="text-sm">30 Jahre Erfahrung im Chartermarkt</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Bereit für Ihr nächstes<br />Segelabenteuer?
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-white/90 max-w-2xl mx-auto animate-fade-in">
            Profitieren Sie von unserer 30-jährigen Erfahrung und lassen Sie sich jetzt ein unverbindliches Angebot erstellen.
          </p>
        </div>
      </div>

      {/* Wave animation at bottom */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 animate-wave text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>;
};
export default Hero;