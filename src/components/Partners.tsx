import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Shield, Anchor, Star } from "lucide-react";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
// import partnerMarina from "@/assets/partner-marina.jpg";
// import partnerManufacturers from "@/assets/partner-manufacturers.jpg";
// import partnerCertifications from "@/assets/partner-certifications.jpg";
// import partnersTrust from "@/assets/partners-trust.jpg";
// import partnersGlobal from "@/assets/partners-global.jpg";
// import partnersYears from "@/assets/partners-years.jpg";
// import partnersQuality from "@/assets/partners-quality.jpg";

const Partners = () => {
  const partnerCategories = [];
  const {
    ref: statisticsRef,
    isIntersecting
  } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  const count1 = useAnimatedCounter({
    end: 250,
    trigger: isIntersecting,
    duration: 2500
  });
  const count2 = useAnimatedCounter({
    end: 30,
    trigger: isIntersecting,
    duration: 2000
  });
  const count3 = useAnimatedCounter({
    end: 30,
    trigger: isIntersecting,
    duration: 2200
  });
  const count4 = useAnimatedCounter({
    end: 100,
    trigger: isIntersecting,
    duration: 2800
  });
  const statistics = [{
    number: count1,
    suffix: "+",
    label: "Yachtcharter Partner",
    icon: Users,
    image: "/lovable-uploads/fdbb6cb0-9d73-40b9-9c33-dc86861446c0.webp"
  }, {
    number: count2,
    suffix: "+",
    label: "Länder weltweit",
    icon: MapPin,
    image: "/lovable-uploads/fdbb6cb0-9d73-40b9-9c33-dc86861446c0.webp"
  }, {
    number: count3,
    suffix: "+",
    label: "Jahre Partnerschaft",
    icon: Award,
    image: "/lovable-uploads/fdbb6cb0-9d73-40b9-9c33-dc86861446c0.webp"
  }, {
    number: count4,
    suffix: "%",
    label: "Qualitätsgarantie",
    icon: Shield,
    image: "/lovable-uploads/fdbb6cb0-9d73-40b9-9c33-dc86861446c0.webp"
  }];
  return <section id="partner" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Partnernetzwerk
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            Unsere Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Gemeinsam mit starken Partnern bieten wir Ihnen erstklassigen Service und höchste Qualität in allen Bereichen des Yacht-Charters.</p>
        </div>

        {/* Statistics */}
        <div ref={statisticsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => <Card key={index} className="text-center shadow-ocean hover:shadow-elegant transition-all duration-300 border-ocean-light/50 overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img src={stat.image} alt={stat.label} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-ocean-dark/40"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="pt-4 pb-6">
                <div className="text-2xl font-bold text-ocean-blue mb-1">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>)}
        </div>

        {/* Partner Categories */}
        <div className="space-y-12">
          {partnerCategories.map((category, categoryIndex) => <div key={categoryIndex}>
              {/* Category Image */}
              <div className="relative mb-8 rounded-2xl overflow-hidden shadow-elegant">
                <img src={category.image} alt={category.title} loading="lazy" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/90 to-ocean-dark/60"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-ocean rounded-xl flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                        <p className="text-white/90 text-lg">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partners Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {category.partners.map((partner, partnerIndex) => <Card key={partnerIndex} className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="border-ocean-blue text-ocean-blue text-xs">
                          {partner.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-ocean-dark">{partner.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 text-sm">
                        <MapPin className="w-3 h-3" />
                        {partner.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {partner.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>)}
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>)}
        </div>

        {/* Yachtcharter Partner Logo Grid */}
        <section id="yachtcharter-partner" className="section section--partners" aria-labelledby="partner-heading" itemScope itemType="https://schema.org/ItemList">
          <div className="container">
            <header className="section__header">
              <h2 id="partner-heading" className="text-3xl md:text-4xl font-bold text-ocean-dark">Unsere Yachtcharter-Partner</h2>
              <p className="section__subtext">Weltweit führende Vercharterer, mit denen wir regelmäßig zusammenarbeiten.</p>
            </header>

            <ul className="partners-grid" role="list">
              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/pitter-yachting" itemProp="url" aria-label="Pitter Yachting – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/pitter-yachting.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Pitter Yachting" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Pitter Yachting</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/croatia-yachting" itemProp="url" aria-label="Croatia Yachting – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/croatia-yachting.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Croatia Yachting" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Croatia Yachting</span>
                </a>
                <meta itemProp="position" content="2" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/angelina-yachtcharter" itemProp="url" aria-label="Angelina Yachtcharter – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/angelina-yachtcharter.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Angelina Yachtcharter" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Angelina Yachtcharter</span>
                </a>
                <meta itemProp="position" content="3" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/ncp-mare" itemProp="url" aria-label="NCP & Mare – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/ncp-mare.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="NCP & Mare" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">NCP &amp; Mare</span>
                </a>
                <meta itemProp="position" content="4" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/ultra-sailing" itemProp="url" aria-label="Ultra Sailing – Partnerseite öffnen">
                  <img className="partner-card__logo object-contain" src="/media/partner/ultra-sailing.png?v=4" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Ultra Sailing" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Ultra Sailing</span>
                </a>
                <meta itemProp="position" content="5" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/waypoint" itemProp="url" aria-label="Waypoint Charter Croatia – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/waypoint.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Waypoint Charter Croatia" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Waypoint Charter Croatia</span>
                </a>
                <meta itemProp="position" content="6" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/istion-yachting" itemProp="url" aria-label="Istion Yachting – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/istion-yachting.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Istion Yachting" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Istion Yachting</span>
                </a>
                <meta itemProp="position" content="7" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/kavas-yachting" itemProp="url" aria-label="Kavas Yachting – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/kavas-yachting.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Kavas Yachting" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Kavas Yachting</span>
                </a>
                <meta itemProp="position" content="8" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/vernicos-yachts" itemProp="url" aria-label="Vernicos Yachts – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/vernicos-yachts.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Vernicos Yachts" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Vernicos Yachts</span>
                </a>
                <meta itemProp="position" content="9" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/athenian-yachts" itemProp="url" aria-label="Athenian Yachts – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/athenian-yachts.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Athenian Yachts" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Athenian Yachts</span>
                </a>
                <meta itemProp="position" content="10" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/olympic-yachting" itemProp="url" aria-label="Olympic Yachting – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/olympic-yachting.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Olympic Yachting" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Olympic Yachting</span>
                </a>
                <meta itemProp="position" content="11" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/five-seasons-yachting" itemProp="url" aria-label="Five Seasons Yachting – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/five-seasons-yachting.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Five Seasons Yachting" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Five Seasons Yachting</span>
                </a>
                <meta itemProp="position" content="12" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/dalmatia-charter" itemProp="url" aria-label="Dalmatia Charter – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/dalmatia-charter.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Dalmatia Charter" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Dalmatia Charter</span>
                </a>
                <meta itemProp="position" content="13" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/dream-yacht" itemProp="url" aria-label="Dream Yacht – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/dream-yacht.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Dream Yacht" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Dream Yacht</span>
                </a>
                <meta itemProp="position" content="14" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/navigare-yachting" itemProp="url" aria-label="Navigare Yachting – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/navigare-yachting.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Navigare Yachting" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Navigare Yachting</span>
                </a>
                <meta itemProp="position" content="15" />
              </li>

              <li className="partners-grid__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a className="partner-card" href="/yachtcharter-partner/kiriacoulis" itemProp="url" aria-label="Kiriacoulis Mediterranean – Partnerseite öffnen">
                  <img className="partner-card__logo" src="/media/partner/kiriacoulis.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }} alt="Kiriacoulis Mediterranean" loading="lazy" width="220" height="100" itemProp="logo" />
                  <span className="visually-hidden" itemProp="name">Kiriacoulis Mediterranean</span>
                </a>
                <meta itemProp="position" content="16" />
              </li>
            </ul>

            <div className="section__cta">
              <a className="btn btn--outline" href="/yachtcharter-partner" aria-label="Alle Yachtcharter-Partner anzeigen">Alle Yachtcharter-Partner</a>
            </div>
          </div>
        </section>

      </div>
    </section>;
};
export default Partners;