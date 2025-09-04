import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import CharterRequestForm from "../CharterRequestForm";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { megaNavItems, regularNavItems } from "./navigationData";

const MegaNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      
      if (location.pathname === '/') {
        // Already on homepage, just scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to homepage then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="block">
              <img 
                src="/lovable-uploads/91b8d598-4457-4e8d-abcf-abab6ff6b7fa.png" 
                alt="CharterTransparenz Logo" 
                className="h-10 sm:h-12 md:h-14 w-auto hover:opacity-90 transition-smooth cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Mega Navigation */}
            <DesktopNav items={megaNavItems} onNavigate={handleNavClick} />
            
            {/* Regular Navigation Items */}
            <div className="flex items-center gap-4 ml-4 border-l border-border pl-4">
              {regularNavItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-gray-900 hover:text-primary transition-colors bg-transparent border-0 cursor-pointer px-3 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <CharterRequestForm>
              <Button 
                variant="default" 
                size="sm" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-elegant transition-smooth ml-4"
              >
                Jetzt Anfrage stellen
              </Button>
            </CharterRequestForm>
          </div>

          {/* Mobile Navigation */}
          <MobileNav 
            items={[...megaNavItems, ...regularNavItems]}
            isOpen={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
            onNavigate={handleNavClick}
          />
        </div>

        {/* Mobile CTA (visible when menu is closed) */}
        {isMobile && !isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4">
            <CharterRequestForm>
              <Button 
                variant="default" 
                size="sm" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-elegant transition-smooth"
              >
                Jetzt Anfrage stellen
              </Button>
            </CharterRequestForm>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MegaNavigation;