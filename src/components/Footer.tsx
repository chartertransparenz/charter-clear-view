import { Anchor, MapPin, Phone, Mail, Facebook, Instagram, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Yacht Charter", href: "#flotte" },
      { name: "Gruppenevents", href: "#leistungen" },
      { name: "Beratung", href: "#kontakt" }
    ],
    destinations: [
      { name: "Mittelmeer", href: "/reviere/mittelmeer" },
      { name: "Karibik", href: "/reviere/karibik" },
      { name: "Südpazifik", href: "/reviere/suedpazifik" },
      { name: "Atlantik", href: "/reviere/atlantik" },
      { name: "Indischer Ozean", href: "/reviere/indischer-ozean" },
      { name: "Nord- & Ostsee", href: "/reviere/nord-europa" },
      { name: "Amerika & Bahamas", href: "/reviere/amerika-bahamas" }
    ],
    company: [
      { name: "Über uns", href: "/ueber-uns" },
      { name: "Kontakt", href: "#kontakt" },
      { name: "Impressum", href: "/impressum" },
      { name: "FAQ", href: "/faq" },
      { name: "Datenschutz", href: "#datenschutz" }
    ]
  };

  return (
    <footer className="bg-ocean-dark text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/c1b9b340-d2ee-4fa1-907f-0c1403219be9.png" 
                alt="CharterTransparenz Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/80 mb-6 text-sm">
              Dein vertrauensvoller Partner für unvergessliche Chartererlebnisse. 
              Seit über 30 Jahren stehen wir für Transparenz, Qualität und erstklassigen Service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sunset" />
                <span className="text-white/80">Goethestraße 24, 88079 Kressbronn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sunset" />
                <span className="text-white/80">+49 7543 499 080</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sunset" />
                <span className="text-white/80">info@chartertransparenz.de</span>
              </div>
              
              {/* WhatsApp Button */}
              <div className="mt-4">
                <a
                  href="https://wa.me/4975434990080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Send className="w-4 h-4" />
                  WhatsApp senden
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-sunset">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-sunset transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold mb-4 text-sunset">Destinationen</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-sunset transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sunset">Unternehmen</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-sunset transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3 text-sunset text-sm">Folge uns</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sunset/20 transition-smooth"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sunset/20 transition-smooth"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>
              © {currentYear} CharterTransparenz. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-sunset transition-smooth">
                AGB
              </a>
              <a href="/impressum" className="hover:text-sunset transition-smooth">
                Impressum
              </a>
              <a href="#" className="hover:text-sunset transition-smooth">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;