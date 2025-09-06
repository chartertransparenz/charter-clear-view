// src/seo/meta.config.ts
export type RegionKey =
  | "home" | "about" | "faq" | "impressum" | "allTerritories"
  | "kroatien" | "istrien" | "kvarner" | "norddalmatien" | "zentraldalmatien" | "sueddalmatien"
  | "griechenland" | "kykladen" | "ionisches" | "tuerkei" | "mittelmeer"
  | "italien" | "spanien" | "frankreich" | "croatia" | "malta" | "montenegro" | "slowenien"
  | "sardinien" | "sizilien" | "toskana" | "amalfikueste" | "costasmeralda"
  | "balearen" | "costabrava" | "valencia"
  | "coteazur" | "korsika"
  | "bodrum" | "marmaris" | "goecekfethiye" | "kaskalkan" | "tuerkischeaegaeis"
  | "dodekanes" | "sporaden" | "athenSaronischerGolf" | "nordgriechenland";

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
  },
  italien: {
    title: "Yachtcharter Italien | Sardinien, Sizilien, Amalfiküste",
    description: "Segeln Italien: malerische Küsten, charmante Häfen & italienisches Flair. Sardinien, Sizilien & Amalfiküste entdecken. Jetzt anfragen!",
    keywords: ["Yachtcharter Italien","Sardinien","Sizilien","Amalfiküste","Italien segeln"],
    ogImage: "/og/italien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien"
  },
  spanien: {
    title: "Yachtcharter Spanien | Balearen, Costa Brava, Valencia",
    description: "Segeln Spanien: sonnige Balearen, Costa Brava & Valencia. Traumhafte Buchten, lebendige Häfen & spanische Kultur. Jetzt anfragen!",
    keywords: ["Yachtcharter Spanien","Balearen","Costa Brava","Valencia","Spanien segeln"],
    ogImage: "/og/spanien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien"
  },
  frankreich: {
    title: "Yachtcharter Frankreich | Côte d'Azur, Korsika, Provence",
    description: "Segeln Frankreich: glamouröse Côte d'Azur, wilde Korsika & provenzalische Küste. Luxuriöse Häfen & französisches Savoir-vivre. Jetzt anfragen!",
    keywords: ["Yachtcharter Frankreich","Côte d'Azur","Korsika","Provence","Frankreich segeln"],
    ogImage: "/og/frankreich.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/frankreich"
  },
  croatia: {
    title: "Yachtcharter Kroatien | Adria-Perle mit 1200+ Inseln",
    description: "Kroatien segeln: kristallklare Adria, 1200+ Inseln, kurze Distanzen & perfekte Marina-Infrastruktur. Von Istrien bis Dubrovnik. Jetzt anfragen!",
    keywords: ["Yachtcharter Kroatien","Adria","Kroatien segeln","Inseln","Marinas"],
    ogImage: "/og/croatia.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien"
  },
  malta: {
    title: "Yachtcharter Malta | Valletta, Gozo, Comino – Mittelmeer-Juwel",
    description: "Segeln Malta: historische Häfen, kristallklares Wasser & kulturelle Schätze. Von Valletta zu Gozo & Comino. Kompaktes Segelrevier. Jetzt anfragen!",
    keywords: ["Yachtcharter Malta","Valletta","Gozo","Comino","Malta segeln"],
    ogImage: "/og/malta.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/malta"
  },
  montenegro: {
    title: "Yachtcharter Montenegro | Budva, Kotor, Tivat – Adriaperle",
    description: "Segeln Montenegro: dramatische Fjorde, mittelalterliche Städte & unberührte Buchten. Kotor Bay & Adriaküste entdecken. Jetzt anfragen!",
    keywords: ["Yachtcharter Montenegro","Budva","Kotor","Tivat","Montenegro segeln"],
    ogImage: "/og/montenegro.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/montenegro"
  },
  slowenien: {
    title: "Yachtcharter Slowenien | Portorož, Piran, Izola – Adrianord",
    description: "Segeln Slowenien: kompakte Adriaküste, venezianisches Flair & kulinarische Vielfalt. Von Portorož bis Piran. Kurze Distanzen. Jetzt anfragen!",
    keywords: ["Yachtcharter Slowenien","Portorož","Piran","Izola","Slowenien segeln"],
    ogImage: "/og/slowenien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/slowenien"
  },
  sardinien: {
    title: "Yachtcharter Sardinien | Costa Smeralda, Cagliari, Alghero",
    description: "Segeln Sardinien: smaragdgrüne Buchten, exklusive Costa Smeralda & wilde Westküste. Traumstrände & kristallklares Wasser. Jetzt anfragen!",
    keywords: ["Yachtcharter Sardinien","Costa Smeralda","Cagliari","Alghero","Sardinien segeln"],
    ogImage: "/og/sardinien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/sardinien"
  },
  sizilien: {
    title: "Yachtcharter Sizilien | Palermo, Catania, Äolische Inseln",
    description: "Segeln Sizilien: größte Mittelmeerinsel, Vulkan Ätna, Äolische Inseln & sizilianische Kultur. Von Palermo zu den Liparischen Inseln. Jetzt anfragen!",
    keywords: ["Yachtcharter Sizilien","Palermo","Catania","Äolische Inseln","Sizilien segeln"],
    ogImage: "/og/sizilien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/sizilien"
  },
  toskana: {
    title: "Yachtcharter Toskana | Viareggio, Elba, Livorno – Toskanische Küste",
    description: "Segeln Toskana: malerische Küste, Insel Elba & toskanische Weinkultur. Von Viareggio durch den Archipel Toscano. Jetzt anfragen!",
    keywords: ["Yachtcharter Toskana","Viareggio","Elba","Livorno","Toskana segeln"],
    ogImage: "/og/toskana.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/toskana"
  },
  amalfikueste: {
    title: "Yachtcharter Amalfiküste | Neapel, Positano, Capri, Ischia",
    description: "Segeln Amalfiküste: spektakuläre Küste, glamouröse Inseln Capri & Ischia, pittoreske Dörfer. UNESCO-Welterbe erleben. Jetzt anfragen!",
    keywords: ["Yachtcharter Amalfiküste","Neapel","Positano","Capri","Ischia"],
    ogImage: "/og/amalfikueste.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/amalfikueste"
  },
  costasmeralda: {
    title: "Yachtcharter Costa Smeralda | Porto Cervo, Smaragdküste Sardinien",
    description: "Segeln Costa Smeralda: exklusivste Segelreviere, Luxus-Marinas & smaragdgrünes Wasser. Porto Cervo & nobelste Buchten Sardiniens. Jetzt anfragen!",
    keywords: ["Yachtcharter Costa Smeralda","Porto Cervo","Smaragdküste","Luxus segeln"],
    ogImage: "/og/costasmeralda.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/costa-smeralda"
  },
  balearen: {
    title: "Yachtcharter Balearen | Mallorca, Ibiza, Menorca, Formentera",
    description: "Segeln Balearen: Mallorca, Ibiza & Menorca, traumhafte Buchten & lebendiges Nachtleben. Perfekte Windverhältnisse ganzjährig. Jetzt anfragen!",
    keywords: ["Yachtcharter Balearen","Mallorca","Ibiza","Menorca","Formentera"],
    ogImage: "/og/balearen.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"
  },
  costabrava: {
    title: "Yachtcharter Costa Brava | Barcelona, Girona, Roses – Katalanische Küste",
    description: "Segeln Costa Brava: wilde Küste, versteckte Buchten & katalanische Kultur. Von Barcelona zu den Traumstränden der Costa Brava. Jetzt anfragen!",
    keywords: ["Yachtcharter Costa Brava","Barcelona","Girona","Roses","Katalonien"],
    ogImage: "/og/costabrava.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien/costa-brava"
  },
  valencia: {
    title: "Yachtcharter Valencia | Valencia, Alicante, Castellón – Levante",
    description: "Segeln Valencia: moderne Marinas, goldene Strände & valencianische Kultur. Von der Stadt der Künste zu den Stränden der Levante. Jetzt anfragen!",
    keywords: ["Yachtcharter Valencia","Alicante","Castellón","Levante","Valencia segeln"],
    ogImage: "/og/valencia.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien/valencia"
  },
  coteazur: {
    title: "Yachtcharter Côte d'Azur | Nizza, Cannes, Monaco, Saint-Tropez",
    description: "Segeln Côte d'Azur: glamouröse Riviera, Luxus-Häfen & französisches Savoir-vivre. Von Monaco bis Saint-Tropez. Exklusives Segeln. Jetzt anfragen!",
    keywords: ["Yachtcharter Côte d'Azur","Nizza","Cannes","Monaco","Saint-Tropez"],
    ogImage: "/og/coteazur.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/frankreich/cote-azur"
  },
  korsika: {
    title: "Yachtcharter Korsika | Ajaccio, Bastia, Bonifacio – Île de Beauté",
    description: "Segeln Korsika: wilde Schönheit, dramatische Klippen & französische Eleganz. Von Ajaccio durch die Straße von Bonifacio. Jetzt anfragen!",
    keywords: ["Yachtcharter Korsika","Ajaccio","Bastia","Bonifacio","Korsika segeln"],
    ogImage: "/og/korsika.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/frankreich/korsika"
  },
  bodrum: {
    title: "Yachtcharter Bodrum | Bodrum Peninsula, Gökova Bay – Ägäische Türkei",
    description: "Segeln Bodrum: kosmopolitisches Flair, antike Stätten & türkisblaue Buchten. Von Bodrum durch die Gökova Bay. Jetzt anfragen!",
    keywords: ["Yachtcharter Bodrum","Gökova Bay","Türkei segeln","Ägäis"],
    ogImage: "/og/bodrum.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/bodrum"
  },
  marmaris: {
    title: "Yachtcharter Marmaris | Marmaris Bay, Datça, Knidos – Türkische Riviera",
    description: "Segeln Marmaris: geschützte Bucht, lebendiger Hafen & antike Ruinen. Von Marmaris zur Datça-Halbinsel. Perfekte Charterbasis. Jetzt anfragen!",
    keywords: ["Yachtcharter Marmaris","Datça","Knidos","Türkische Riviera"],
    ogImage: "/og/marmaris.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/marmaris"
  },
  goecekfethiye: {
    title: "Yachtcharter Göcek & Fethiye | 12 Inseln, Ölüdeniz – Lykische Küste",
    description: "Segeln Göcek & Fethiye: 12 Inseln, antike lykische Stätten & türkisblaues Wasser. Von Göcek zur berühmten Blauen Lagune. Jetzt anfragen!",
    keywords: ["Yachtcharter Göcek","Fethiye","12 Inseln","Ölüdeniz","Lykische Küste"],
    ogImage: "/og/goecekfethiye.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/goecek-fethiye"
  },
  kaskalkan: {
    title: "Yachtcharter Kaş & Kalkan | Lykische Küste, Kekova – Antike Türkei",
    description: "Segeln Kaş & Kalkan: authentische Fischerdörfer, versunkene Stadt Kekova & unberührte Buchten. Lykisches Erbe entdecken. Jetzt anfragen!",
    keywords: ["Yachtcharter Kaş","Kalkan","Kekova","Lykische Küste","Antike"],
    ogImage: "/og/kaskalkan.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/kas-kalkan"
  },
  tuerkischeaegaeis: {
    title: "Yachtcharter Türkische Ägäis | Çeşme, Foça, Ayvalık – Westküste",
    description: "Segeln Türkische Ägäis: windreiche Gewässer, antike Städte & authentische Kultur. Von Çeşme zu den griechischen Inseln. Jetzt anfragen!",
    keywords: ["Yachtcharter Türkische Ägäis","Çeşme","Foça","Ayvalık","Ägäis"],
    ogImage: "/og/tuerkischeaegaeis.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/tuerkische-aegaeis"
  },
  dodekanes: {
    title: "Yachtcharter Dodekanes | Rhodos, Kos, Patmos, Kalymnos – Südägäis",
    description: "Segeln Dodekanes: 12 Inseln der Südägäis, mittelalterliche Rhodos & klösterliches Patmos. Türkei-nahe Inselwelt entdecken. Jetzt anfragen!",
    keywords: ["Yachtcharter Dodekanes","Rhodos","Kos","Patmos","Kalymnos"],
    ogImage: "/og/dodekanes.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/dodekanes"
  },
  sporaden: {
    title: "Yachtcharter Sporaden | Skiathos, Skopelos, Alonissos – Grüne Inseln",
    description: "Segeln Sporaden: üppig grüne Inseln, Mamma Mia Filmkulissen & geschützte Gewässer. Von Skiathos zu Alonissos Meerespark. Jetzt anfragen!",
    keywords: ["Yachtcharter Sporaden","Skiathos","Skopelos","Alonissos","Grüne Inseln"],
    ogImage: "/og/sporaden.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/sporaden"
  },
  athenSaronischerGolf: {
    title: "Yachtcharter Saronischer Golf | Athen, Ägina, Hydra, Spetses",
    description: "Segeln Saronischer Golf: Athen-nahe Inseln, autofreie Hydra & aristokratisches Spetses. Kultur & Segeln perfekt kombiniert. Jetzt anfragen!",
    keywords: ["Yachtcharter Saronischer Golf","Athen","Ägina","Hydra","Spetses"],
    ogImage: "/og/saronischergolf.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/athen-saronischer-golf"
  },
  nordgriechenland: {
    title: "Yachtcharter Nordgriechenland | Thessaloniki, Chalkidiki, Thasos",
    description: "Segeln Nordgriechenland: authentisches Hellas, unberührte Küsten & weniger touristische Inseln. Von Thessaloniki zu Thasos. Jetzt anfragen!",
    keywords: ["Yachtcharter Nordgriechenland","Thessaloniki","Chalkidiki","Thasos"],
    ogImage: "/og/nordgriechenland.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/nordgriechenland"
  }
};