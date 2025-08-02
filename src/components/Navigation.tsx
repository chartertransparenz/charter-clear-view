
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import CharterRequestForm from "./CharterRequestForm";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#fleet", label: "Yachten" },
    { href: "#services", label: "Services" },
    { href: "#territories", label: "Reviere" },
    { href: "#partners", label: "Partner" },
    { href: "#faq", label: "FAQ" },
    { href: "#about", label: "Über uns" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/14215b70-fd89-4842-b84c-58268b2a0c56.png" 
              alt="CharterTransparenz Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-900 hover:text-ocean-dark transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <CharterRequestForm>
              <Button variant="default" size="sm" className="bg-gradient-ocean text-white hover:opacity-90">
                Jetzt Anfrage stellen
              </Button>
            </CharterRequestForm>
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
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-900 hover:text-ocean-dark transition-smooth px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4">
                <CharterRequestForm>
                  <Button variant="default" size="sm" className="w-full bg-gradient-ocean text-white hover:opacity-90">
                    Jetzt Anfrage stellen
                  </Button>
                </CharterRequestForm>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
