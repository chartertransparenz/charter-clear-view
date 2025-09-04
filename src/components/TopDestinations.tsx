import React from "react";

const TopDestinations = () => {
  return (
    <section 
      id="top-destinations" 
      aria-labelledby="top-destinations-heading" 
      className="py-12 bg-muted/30 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="top-destinations-heading" 
          className="text-3xl font-bold text-center mb-10 text-ocean-dark"
        >
          Ihre Top-Destinationen
        </h2>
        <nav 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          aria-label="Top-Destinationen"
        >
          {/* Kroatien */}
          <div className="space-y-4">
            <a 
              href="/reviere/mittelmeer/kroatien" 
              title="Yachtcharter Kroatien"
              className="block text-[21px] font-semibold text-ocean-dark hover:text-primary transition-colors"
            >
              Yachtcharter Kroatien
            </a>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/reviere/mittelmeer/kroatien/istrien"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Istrien
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/kroatien/kvarner-bucht"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Kvarner Bucht
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/kroatien/norddalmatien"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Norddalmatien
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/kroatien/mitteldalmatien"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Mitteldalmatien
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/kroatien/sueddalmatien"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Süddalmatien
                </a>
              </li>
            </ul>
          </div>

          {/* Griechenland */}
          <div className="space-y-4">
            <a 
              href="/reviere/mittelmeer/griechenland" 
              title="Yachtcharter Griechenland"
              className="block text-[21px] font-semibold text-ocean-dark hover:text-primary transition-colors"
            >
              Yachtcharter Griechenland
            </a>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/reviere/mittelmeer/griechenland/kykladen"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Kykladen
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/griechenland/ionische-inseln"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Ionische Inseln
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/griechenland/dodekanes"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Dodekanes
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/griechenland/sporaden"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Sporaden
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/griechenland/athen-saronischer-golf"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Athen & Saronischer Golf
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/griechenland/nordgriechenland"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Nordgriechenland
                </a>
              </li>
            </ul>
          </div>

          {/* Italien */}
          <div className="space-y-4">
            <a 
              href="/reviere/mittelmeer/italien" 
              title="Yachtcharter Italien"
              className="block text-[21px] font-semibold text-ocean-dark hover:text-primary transition-colors"
            >
              Yachtcharter Italien
            </a>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/reviere/mittelmeer/italien/sardinien"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Sardinien
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/italien/sardinien/costa-smeralda"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Costa Smeralda
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/italien/sizilien"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Sizilien
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/italien/toskana"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Toskana / Elba
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/italien/amalfikuste"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Amalfiküste
                </a>
              </li>
            </ul>
          </div>

          {/* Spanien */}
          <div className="space-y-4">
            <a 
              href="/reviere/mittelmeer/spanien" 
              title="Yachtcharter Spanien"
              className="block text-[21px] font-semibold text-ocean-dark hover:text-primary transition-colors"
            >
              Yachtcharter Spanien
            </a>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/reviere/mittelmeer/spanien/balearen"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Balearen
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/spanien/costa-brava"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Costa Brava
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/mittelmeer/spanien/valencia"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Valencia
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/atlantik/kanaren"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Kanaren
                </a>
              </li>
            </ul>
          </div>

          {/* Karibik */}
          <div className="space-y-4">
            <a 
              href="/reviere/karibik" 
              title="Yachtcharter Karibik"
              className="block text-[21px] font-semibold text-ocean-dark hover:text-primary transition-colors"
            >
              Yachtcharter Karibik
            </a>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/reviere/karibik/britische-jungferninseln"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  British Virgin Islands
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/karibik/us-jungferninseln"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  US Virgin Islands
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/karibik/us-virgin-islands"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  US Virgin Islands
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/karibik/leeward-inseln"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Leeward Islands
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/karibik/windward-inseln"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Windward Islands
                </a>
              </li>
              <li>
                <a 
                  href="/reviere/karibik/kuba"
                  className="block text-base leading-6 text-foreground hover:text-primary transition-colors hover:underline"
                >
                  Kuba
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TopDestinations;