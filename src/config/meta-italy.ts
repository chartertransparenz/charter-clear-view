// Centralized Meta Configuration for all Italian yacht charter pages
// Optimized titles (<60 chars), descriptions (150-160 chars), and structured data

type MetaConfig = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  structuredData: object[];
};

// Helper function for consistent breadcrumb JSON-LD
const createBreadcrumb = (...items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Service schema for Charter Transparenz
const createServiceSchema = (areaServed: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `Yachtcharter ${areaServed}`,
  description,
  provider: {
    "@type": "Organization",
    name: "Charter Transparenz",
    url: "https://chartertransparenz.de"
  },
  areaServed: {
    "@type": "Place",
    name: areaServed
  }
});

// Main configuration object
export const ITALY_META: Record<string, MetaConfig> = {
  // 1) Italien Hub
  "/reviere/mittelmeer/italien": {
    title: "Yachtcharter Italien – Sardinien, Elba & Sizilien",
    description: "Sardinien, Elba/Toskana, Sizilien & Amalfiküste. Geprüfte Yachten, 30 Jahre Erfahrung. Jetzt Yachtcharter in Italien anfragen.",
    canonical: "https://chartertransparenz.de/reviere/mittelmeer/italien",
    ogImage: "https://chartertransparenz.de/images/og/italy-charter.jpg",
    structuredData: [
      createBreadcrumb(
        { name: "Start", url: "https://chartertransparenz.de" },
        { name: "Reviere", url: "https://chartertransparenz.de/#reviere" },
        { name: "Mittelmeer", url: "https://chartertransparenz.de/reviere/mittelmeer" },
        { name: "Italien", url: "https://chartertransparenz.de/reviere/mittelmeer/italien" }
      ),
      createServiceSchema("Italien", "Yachtcharter in Italien mit geprüften Flotten")
    ]
  },

  // 2) Sardinien Hub
  "/reviere/mittelmeer/italien/sardinien": {
    title: "Yachtcharter Sardinien – Costa Smeralda & La Maddalena",
    description: "Smaragdklare Buchten, Porto Cervo & La Maddalena. Geprüfte Flotten, mit/ohne Skipper. Jetzt Sardinien-Charter unverbindlich anfragen.",
    canonical: "https://chartertransparenz.de/reviere/mittelmeer/italien/sardinien",
    ogImage: "https://chartertransparenz.de/images/og/sardinia-charter.jpg",
    structuredData: [
      createBreadcrumb(
        { name: "Start", url: "https://chartertransparenz.de" },
        { name: "Reviere", url: "https://chartertransparenz.de/#reviere" },
        { name: "Mittelmeer", url: "https://chartertransparenz.de/reviere/mittelmeer" },
        { name: "Italien", url: "https://chartertransparenz.de/reviere/mittelmeer/italien" },
        { name: "Sardinien", url: "https://chartertransparenz.de/reviere/mittelmeer/italien/sardinien" }
      ),
      createServiceSchema("Sardinien", "Yachtcharter in Sardinien - Costa Smeralda und La Maddalena")
    ]
  },

  // 3) Costa Smeralda (Detail)
  "/reviere/mittelmeer/italien/sardinien/costa-smeralda": {
    title: "Yachtcharter Costa Smeralda – Segeln in Sardinien",
    description: "La Maddalena, Porto Cervo & smaragdklare Buchten. Geprüfte Yachten, 30 Jahre Erfahrung, mit/ohne Skipper. Jetzt Yacht an der Costa Smeralda anfragen.",
    canonical: "https://chartertransparenz.de/reviere/mittelmeer/italien/sardinien/costa-smeralda",
    ogImage: "https://chartertransparenz.de/images/og/costa-smeralda-charter.jpg",
    structuredData: [
      createBreadcrumb(
        { name: "Start", url: "https://chartertransparenz.de" },
        { name: "Reviere", url: "https://chartertransparenz.de/#reviere" },
        { name: "Mittelmeer", url: "https://chartertransparenz.de/reviere/mittelmeer" },
        { name: "Italien", url: "https://chartertransparenz.de/reviere/mittelmeer/italien" },
        { name: "Sardinien", url: "https://chartertransparenz.de/reviere/mittelmeer/italien/sardinien" },
        { name: "Costa Smeralda", url: "https://chartertransparenz.de/reviere/mittelmeer/italien/sardinien/costa-smeralda" }
      ),
      createServiceSchema("Costa Smeralda", "Exklusiver Yachtcharter an der Costa Smeralda")
    ]
  },

  // 4) Toskana / Elba
  "/reviere/mittelmeer/italien/toskana": {
    title: "Yachtcharter Toskana & Elba – Toskanischer Archipel",
    description: "Elba, Capraia & Giglio: kurze Etappen, schöne Buchten, gute Marinas. Segelyacht oder Kat mieten – Angebot für Toskana/Elba anfordern.",
    canonical: "https://chartertransparenz.de/reviere/mittelmeer/italien/toskana",
    ogImage: "https://chartertransparenz.de/images/og/tuscany-charter.jpg",
    structuredData: [
      createBreadcrumb(
        { name: "Start", url: "https://chartertransparenz.de" },
        { name: "Reviere", url: "https://chartertransparenz.de/#reviere" },
        { name: "Mittelmeer", url: "https://chartertransparenz.de/reviere/mittelmeer" },
        { name: "Italien", url: "https://chartertransparenz.de/reviere/mittelmeer/italien" },
        { name: "Toskana / Elba", url: "https://chartertransparenz.de/reviere/mittelmeer/italien/toskana" }
      ),
      createServiceSchema("Toskana", "Yachtcharter in der Toskana - Elba und Toskanischer Archipel")
    ]
  },

  // 5) Sizilien
  "/reviere/mittelmeer/italien/sizilien": {
    title: "Yachtcharter Sizilien – Äolische Inseln, Lipari & Stromboli",
    description: "Lipari, Vulcano, Stromboli: Vulkanwelten & Ankerbuchten. Beratung & geprüfte Flotten. Jetzt Sizilien-Charter vergleichen.",
    canonical: "https://chartertransparenz.de/reviere/mittelmeer/italien/sizilien",
    ogImage: "https://chartertransparenz.de/images/og/sicily-charter.jpg",
    structuredData: [
      createBreadcrumb(
        { name: "Start", url: "https://chartertransparenz.de" },
        { name: "Reviere", url: "https://chartertransparenz.de/#reviere" },
        { name: "Mittelmeer", url: "https://chartertransparenz.de/reviere/mittelmeer" },
        { name: "Italien", url: "https://chartertransparenz.de/reviere/mittelmeer/italien" },
        { name: "Sizilien", url: "https://chartertransparenz.de/reviere/mittelmeer/italien/sizilien" }
      ),
      createServiceSchema("Sizilien", "Yachtcharter in Sizilien - Äolische Inseln und Vulkane")
    ]
  },

  // 6) Amalfiküste
  "/reviere/mittelmeer/italien/amalfikueste": {
    title: "Yachtcharter Amalfiküste – Capri, Ischia & Sorrent",
    description: "Glamour & Kulissenküste: Capri, Ischia, Positano. Mit/ohne Skipper buchbar. Jetzt Amalfiküste-Charter anfragen.",
    canonical: "https://chartertransparenz.de/reviere/mittelmeer/italien/amalfikueste",
    ogImage: "https://chartertransparenz.de/images/og/amalfi-charter.jpg",
    structuredData: [
      createBreadcrumb(
        { name: "Start", url: "https://chartertransparenz.de" },
        { name: "Reviere", url: "https://chartertransparenz.de/#reviere" },
        { name: "Mittelmeer", url: "https://chartertransparenz.de/reviere/mittelmeer" },
        { name: "Italien", url: "https://chartertransparenz.de/reviere/mittelmeer/italien" },
        { name: "Amalfiküste", url: "https://chartertransparenz.de/reviere/mittelmeer/italien/amalfikueste" }
      ),
      createServiceSchema("Amalfiküste", "Yachtcharter an der Amalfiküste - Capri, Ischia und Sorrent")
    ]
  }
};

// Helper function to get meta config by pathname
export const getItalyMetaConfig = (pathname: string): MetaConfig | null => {
  return ITALY_META[pathname] || null;
};