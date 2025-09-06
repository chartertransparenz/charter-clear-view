// src/seo/meta.config.ts
export type RegionKey =
  | "home" | "about" | "faq" | "impressum" | "allTerritories"
  | "kroatien" | "istrien" | "kvarner" | "norddalmatien" | "zentraldalmatien" | "sueddalmatien"
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
  },
  about: {
    title: "Über uns | 30 Jahre Charter Transparenz - Yachtcharter Experten",
    description: "30 Jahre Erfahrung im Yachtcharter: Von der Gründung 1997 bis zur internationalen Anerkennung. Transparenz, Qualität & Vertrauen seit drei Jahrzehnten.",
    keywords: ["Charter Transparenz","Über uns","30 Jahre Erfahrung","Yachtcharter Experten"],
    ogImage: "/og/about.jpg",
    canonical: () => "https://chartertransparenz.de/about"
  },
  faq: {
    title: "FAQ Yachtcharter | Häufige Fragen & Antworten - Charter Transparenz",
    description: "Häufige Fragen zum Yachtcharter beantwortet: Kosten, Buchung, Stornierung, Kaution & mehr. Alle wichtigen Infos für Ihren Segeltörn.",
    keywords: ["FAQ Yachtcharter","Häufige Fragen","Yachtcharter Antworten","Charter Fragen"],
    ogImage: "/og/faq.jpg",
    canonical: () => "https://chartertransparenz.de/faq"
  },
  impressum: {
    title: "Impressum | Charter Transparenz - Rechtliche Hinweise",
    description: "Impressum und rechtliche Hinweise von Charter Transparenz. Kontaktdaten, Verantwortlicher, Datenschutz & Haftungsausschluss.",
    keywords: ["Impressum","Charter Transparenz","Rechtliche Hinweise","Kontakt"],
    ogImage: "/og/impressum.jpg",
    canonical: () => "https://chartertransparenz.de/impressum"
  },
  allTerritories: {
    title: "Alle Charter Destinationen | Weltweite Yachtcharter Reviere",
    description: "Komplette Übersicht aller Yachtcharter Destinationen weltweit: Mittelmeer, Karibik, Atlantik, Indischer Ozean & mehr. Jetzt entdecken!",
    keywords: ["Charter Destinationen","Yachtcharter Reviere","Weltweite Charter","Segelreviere"],
    ogImage: "/og/all-territories.jpg",
    canonical: () => "https://chartertransparenz.de/reviere"
  },
  zentraldalmatien: {
    title: "Yachtcharter Zentraldalmatien | Split, Hvar, Brač, Vis",
    description: "Segeln Zentraldalmatien: Split als Ausgangspunkt, traumhafte Inseln Hvar, Brač & Vis. Perfekte Kombination aus Kultur & Natur. Jetzt anfragen!",
    keywords: ["Yachtcharter Zentraldalmatien","Split","Hvar","Brač","Vis","Kroatien"],
    ogImage: "/og/zentraldalmatien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien/zentraldalmatien"
  },
  sueddalmatien: {
    title: "Yachtcharter Süddalmatien | Dubrovnik, Korčula, Mljet",
    description: "Segeln Süddalmatien: UNESCO-Stadt Dubrovnik, grüne Insel Korčula & Nationalpark Mljet. Kroatiens schönster Süden. Jetzt anfragen!",
    keywords: ["Yachtcharter Süddalmatien","Dubrovnik","Korčula","Mljet","Kroatien"],
    ogImage: "/og/sueddalmatien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien/sueddalmatien"
  }
};