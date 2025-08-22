import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
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

  const handleWhatsAppClick = () => {
    const phoneNumber = "4975434990800"; // Remove spaces and country code format
    const message = encodeURIComponent("Hallo! Ich interessiere mich für Ihre Yacht Charter Services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`fixed top-28 left-4 md:left-8 z-40 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`}>
      <button 
        onClick={handleWhatsAppClick}
        className="group relative w-16 h-16 bg-[#25D366] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl animate-float border-2 border-white ring-4 ring-black/10"
        aria-label="WhatsApp Chat öffnen"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
        
        {/* Pulse ring animation */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366]/50 animate-ping opacity-75"></div>
        <div className="absolute inset-2 rounded-full border border-[#25D366]/30 animate-ping animation-delay-200 opacity-50"></div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;