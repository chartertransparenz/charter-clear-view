
import { useState, useEffect, Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
const CharterRequestForm = lazy(() => import("./CharterRequestForm"));
import ReviereDropdown from "./ReviereDropdown";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
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

  const navItems = [
    { href: "#leistungen", label: "Services" },
    { href: "#flotte", label: "Yachten" },
    { href: "#partner", label: "Partner" },
    { href: "/faq", label: "FAQ" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-lg border-b border-white/40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
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
          <div className="hidden md:flex items-center gap-8">
            <ReviereDropdown onNavigate={handleNavClick} />
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="menu-typography hover:text-sunset transition-smooth bg-transparent border-0 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Suspense fallback={<Button variant="default" size="sm" className="bg-ocean-dark text-white" disabled>Lädt…</Button>}>
              <CharterRequestForm>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-ocean-dark hover:bg-ocean-blue text-white border-0 shadow-sm transition-smooth font-sans text-xs font-600 tracking-widest uppercase"
                >
                  Jetzt Anfrage stellen
                </Button>
              </CharterRequestForm>
            </Suspense>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <div className="px-4">
                <ReviereDropdown isMobile={true} onNavigate={handleNavClick} />
              </div>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="menu-typography hover:text-sunset transition-smooth px-4 py-2 text-left bg-transparent border-0 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4">
                <Suspense fallback={<Button variant="default" size="sm" className="w-full bg-[hsl(212_95%_25%)] text-white" disabled>Lädt…</Button>}>
                  <CharterRequestForm>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="w-full bg-ocean-dark hover:bg-ocean-blue text-white border-0 shadow-sm transition-smooth font-sans text-xs tracking-widest uppercase"
                    >
                      Jetzt Anfrage stellen
                    </Button>
                  </CharterRequestForm>
                </Suspense>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
