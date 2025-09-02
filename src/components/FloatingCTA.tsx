import { useState, useEffect } from "react";
import NewCharterRequestForm from "./NewCharterRequestForm";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button when user scrolls down 100px
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed top-28 right-4 md:right-8 z-40 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`}>
      <NewCharterRequestForm>
        <button className="group relative w-16 h-16 bg-ocean-dark backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl animate-float border-2 border-white ring-4 ring-black/10">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-ocean opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Logo */}
          <img 
            src="/lovable-uploads/7800ce91-211c-4ccb-b034-a6ce0187f339.png" 
            alt="Charter Anfrage stellen" 
            className="w-8 h-8 relative z-10 filter brightness-0 invert"
          />
          
          {/* Pulse ring animation */}
          <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping opacity-75"></div>
          <div className="absolute inset-2 rounded-full border border-white/30 animate-ping animation-delay-200 opacity-50"></div>
        </button>
      </NewCharterRequestForm>
    </div>
  );
};

export default FloatingCTA;