// src/seo/meta.config.ts
export type RegionKey =
  | "home" | "kroatien" | "istrien" | "kvarner" | "norddalmatien"
  | "griechenland" | "kykladen" | "ionisches" | "tuerkei" | "mittelmeer";

export const META: Record<RegionKey, {
  title: string;
  description: string;
  keywords?: string[];
  ogImage: string;          // absoluter Pfad/URL
  canonical: (path?: string) => string; // Umgebungssicher
}> = {
  home: {
    title: "Yachtcharter Preisvergleich – 30 Jahre Erfahrung",
    description: "Yachtcharter weltweit: Segelyacht & Katamaran mieten. Kroatien, Griechenland, Italien ab 890€/Woche. Jetzt Angebot anfragen!",
    keywords: ["Yachtcharter", "Segelyacht mieten", "Katamaran mieten", "Preisvergleich"],
    ogImage: "/og/home.jpg",
    canonical: (p="") => `https://chartertransparenz.de/${p}`
  },
  kroatien: {
    title: "Yachtcharter Kroatien | Segeln Adria – Split, Dubrovnik, Hvar",
    description: "Segeln in Kroatien: 1.200+ Inseln, kurze Distanzen & klares Wasser. Ab Split, Dubrovnik, Hvar. Jetzt Segelyacht oder Katamaran anfragen!",
    keywords: ["Yachtcharter Kroatien","Segeln Adria","Katamaran Kroatien","Split","Dubrovnik","Hvar"],
    ogImage: "/og/kroatien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien"
  },
  istrien: {
    title: "Yachtcharter Istrien | Pula, Rovinj, Poreč – Venetisches Flair",
    description: "Yachtcharter in Istrien: kurze Schläge, historische Städte & mediterranes Flair. Start ab Pula, Rovinj oder Poreč. Jetzt anfragen!",
    keywords: ["Yachtcharter Istrien","Pula","Rovinj","Poreč","Kroatien Segeln"],
    ogImage: "/og/istrien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien/istrien"
  },
  griechenland: {
    title: "Yachtcharter Griechenland | Ägäis & Ionisches Meer – 6000+ Inseln",
    description: "Griechenland segeln: Kykladen & Ionisches Meer, malerische Buchten & Tavernen. Segelyacht oder Katamaran jetzt anfragen!",
    keywords: ["Yachtcharter Griechenland","Kykladen","Ionisches Meer","Segeln Griechenland"],
    ogImage: "/og/griechenland.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland"
  },
  kvarner: {
    title: "Yachtcharter Kvarner Bucht | Krk, Cres, Rab – Kroatien Nord",
    description: "Segeln Kvarner Bucht: geschützte Gewässer, kurze Distanzen zu Krk, Cres & Rab. Ideal für Familien. Jetzt Yacht anfragen!",
    keywords: ["Yachtcharter Kvarner","Krk","Cres","Rab","Kroatien Nord"],
    ogImage: "/og/kvarner.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien/kvarner"
  },
  norddalmatien: {
    title: "Yachtcharter Norddalmatien | Zadar, Kornati, Šibenik",
    description: "Segeln Norddalmatien: Kornati Nationalpark, historisches Zadar & Šibenik. Kristallklares Wasser & traumhafte Buchten. Jetzt anfragen!",
    keywords: ["Yachtcharter Norddalmatien","Zadar","Kornati","Šibenik","Kroatien"],
    ogImage: "/og/norddalmatien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien/norddalmatien"
  },
  kykladen: {
    title: "Yachtcharter Kykladen | Mykonos, Santorini, Paros – Ägäis",
    description: "Segeln Kykladen: ikonische weiße Dörfer, Mykonos & Santorini, traditionelle Tavernen. Traumreviere der Ägäis. Jetzt anfragen!",
    keywords: ["Yachtcharter Kykladen","Mykonos","Santorini","Paros","Ägäis"],
    ogImage: "/og/kykladen.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/kykladen"
  },
  ionisches: {
    title: "Yachtcharter Ionisches Meer | Korfu, Kefalonia, Zakynthos",
    description: "Segeln Ionisches Meer: grüne Inseln, geschützte Gewässer, Korfu & Kefalonia. Ideal für entspanntes Segeln. Jetzt anfragen!",
    keywords: ["Yachtcharter Ionisches Meer","Korfu","Kefalonia","Zakynthos","Griechenland"],
    ogImage: "/og/ionisches.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/ionisches-meer"
  },
  tuerkei: {
    title: "Yachtcharter Türkei | Bodrum, Marmaris, Göcek – Türkische Riviera",
    description: "Segeln Türkei: türkisblaue Buchten, antike Stätten & gastfreundliche Kultur. Start ab Bodrum, Marmaris oder Göcek. Jetzt anfragen!",
    keywords: ["Yachtcharter Türkei","Bodrum","Marmaris","Göcek","Türkische Riviera"],
    ogImage: "/og/tuerkei.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei"
  },
  mittelmeer: {
    title: "Yachtcharter Mittelmeer | Kroatien, Griechenland, Italien, Türkei",
    description: "Mittelmeer segeln: über 20 Länder, 1000+ Häfen, ganzjährig segelbar. Von Kroatien bis Türkei. Jetzt Traumtörn anfragen!",
    keywords: ["Yachtcharter Mittelmeer","Kroatien","Griechenland","Italien","Türkei"],
    ogImage: "/og/mittelmeer.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer"
  }
};