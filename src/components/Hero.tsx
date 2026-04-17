// Hero component with image carousel
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import NausysWidget from "./NausysWidget";
const mediterraneanImage = "/lovable-uploads/4150206c-dd18-4f04-84cf-eb44e39fe992.png";

import { useState, useEffect, useCallback } from "react";
const Hero = () => {
  const slides = [{
    image: "/lovable-uploads/5ed77d3d-0796-4844-abb5-9507d269869c.png",
    title: "Luxuriöse Yachten",
    alt: "Luxuriöse Segelyacht auf dem Mittelmeer – Yachtcharter CharterTransparenz"
  }, {
    image: "/lovable-uploads/256fb72b-90de-437f-9045-9f5b1b170b14.png",
    title: "Kristallklares Wasser",
    alt: "Katamaran in kristallklarem Wasser – Segelyacht mieten"
  }, {
    image: mediterraneanImage,
    title: "Mittelmeer Abenteuer",
    alt: "Segelyacht in kroatischer Bucht – Yachtcharter Mittelmeer"
  }, {
    image: "/lovable-uploads/c766448f-b061-494f-aecd-f58670d94300.png",
    title: "Karibische Träume",
    alt: "Katamaran in der Karibik – Segelurlaub weltweit buchen"
  }];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);
  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="start" className="relative min-h-screen flex flex-col overflow-visible pt-16">
      {/* Background Images Carousel — using <img> for LCP/preload eligibility */}
      {slides.map((slide, index) => (
        <div
          key={index}
          aria-hidden={index !== currentSlide}
          className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            fetchPriority={index === 0 ? "high" : "low"}
            loading={index === 0 ? "eager" : "lazy"}
            decoding={index === 0 ? "sync" : "async"}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 group">
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 group">
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
          />
        ))}
      </div>

      {/* Centered content block: text + widget grouped together */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full px-4 py-8">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-8 text-center text-white">

          {/* Text */}
          <div className="max-w-4xl flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Award className="w-4 h-4" />
              <span className="text-sm">30 Jahre Erfahrung im Chartermarkt</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-in">
              Yachtcharter weltweit –<br />Ihr perfekter Segeltörn
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in">
              Profitieren Sie von unserer 30-jährigen Erfahrung und lassen Sie sich jetzt ein unverbindliches Angebot erstellen.
            </p>
          </div>

          {/* Search Widget — glassmorphism card */}
          <div className="w-full">
            <div className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden">
              <NausysWidget profileKey="default" customTitle="Yacht-Suche" className="bg-transparent" embedded={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
