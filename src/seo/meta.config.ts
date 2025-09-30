// src/seo/meta.config.ts
export type RegionKey =
  | "home" | "about" | "faq" | "impressum" | "datenschutz" | "allTerritories"
  | "kroatien" | "istrien" | "kvarner" | "zadar" | "dalmatienSplit" | "dubrovnik"
  | "griechenland" | "kykladen" | "ionisches" | "tuerkei" | "mittelmeer"
  | "italien" | "spanien" | "frankreich" | "croatia" | "malta" | "montenegro" | "slowenien"
  | "sardinien" | "sizilien" | "toskana" | "toskanaElba" | "amalfikueste" | "costasmeralda"
  | "balearen" | "mallorca" | "ibiza" | "menorca" | "costabrava" | "valencia"
  | "coteazur" | "korsika"
  | "bodrum" | "marmaris" | "gocekFethiye" | "kaskalkan" | "tuerkischeaegaeis"
  | "dodekanes" | "sporaden" | "athenSaronischerGolf" | "nordgriechenland"
  | "canaryIslands"
  | "karibik" | "bvi" | "usvi" | "bahamas" | "antigua" | "stMartin" | "stVincentGrenadinen";

export const META: Record<RegionKey, {
  title: string;
  description: string;
  ogImage: string;          // absoluter Pfad/URL
  canonical: (path?: string) => string; // Umgebungssicher
}> = {
  home: {
    title: "Yachtcharter Preisvergleich – 30 Jahre Erfahrung",
    description: "Yachtcharter weltweit: Segelyacht & Katamaran mieten. Kroatien, Griechenland, Italien ab 890€/Woche. Jetzt Angebot anfragen!",
    ogImage: "/og/home.jpg",
    canonical: (p="") => `https://chartertransparenz.de/${p}`
  },
  kroatien: {
    title: "Yachtcharter Kroatien | Segeln Adria – Split, Dubrovnik, Hvar",
    description: "Segeln in Kroatien: 1.200+ Inseln, kurze Distanzen & klares Wasser. Ab Split, Dubrovnik, Hvar. Jetzt Segelyacht oder Katamaran anfragen!",
    ogImage: "/og/kroatien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien"
  },
  istrien: {
    title: "Yachtcharter Istrien | Pula, Rovinj, Poreč – Venetisches Flair",
    description: "Yachtcharter in Istrien: kurze Schläge, historische Städte & mediterranes Flair. Start ab Pula, Rovinj oder Poreč. Jetzt anfragen!",
    ogImage: "/og/istrien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien/istrien"
  },
  griechenland: {
    title: "Yachtcharter Griechenland – Ionisches Meer, Kykladen & mehr",
    description: "Segeln in Griechenland: Entdecken Sie Ionisches Meer, Kykladen, Sporaden & Dodekanes – ideale Reviere für Ihren Yachtcharter.",
    ogImage: "/lovable-uploads/ac12d7be-4a6e-4ac7-90b1-6d045810cae8.png",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland"
  },
  kvarner: {
    title: "Yachtcharter Kvarner Bucht | Krk, Cres, Rab – Kroatien Nord",
    description: "Segeln Kvarner Bucht: geschützte Gewässer, kurze Distanzen zu Krk, Cres & Rab. Ideal für Familien. Jetzt Yacht anfragen!",
    ogImage: "/og/kvarner.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien/kvarner"
  },
  zadar: {
    title: "Yachtcharter Zadar & Kornati | Nationalpark, Šibenik – Norddalmatien",
    description: "Segeln ab Zadar: Kornati Nationalpark, historisches Šibenik & kristallklares Wasser. Traumhafte Buchten. Jetzt anfragen!",
    ogImage: "/og/zadar.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien/zadar"
  },
  dalmatienSplit: {
    title: "Yachtcharter Dalmatien ab Split | Hvar, Brač, Vis – Mitteldalmatien",
    description: "Segeln ab Split: traumhafte Inseln Hvar, Brač & Vis. Perfekte Kombination aus Kultur & Natur. Jetzt anfragen!",
    ogImage: "/og/dalmatien-split.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien/dalmatien-split"
  },
  dubrovnik: {
    title: "Yachtcharter Dubrovnik – Süddalmatien, Mljet & Elaphiten",
    description: "Segeln ab Dubrovnik: Süddalmatien mit Elaphiten & Nationalpark Mljet. UNESCO‑Altstadt, ruhige Buchten, Inselhüpfen bis Korčula & Lastovo.",
    ogImage: "/og/dubrovnik.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien/dubrovnik"
  },
  kykladen: {
    title: "Yachtcharter Kykladen – Mykonos, Santorini & Paros",
    description: "Segeln auf den Kykladen: Inselhüpfen zu Mykonos, Santorini & Paros. Kristallklares Wasser & lebendige Hafenorte.",
    ogImage: "/lovable-uploads/ac12d7be-4a6e-4ac7-90b1-6d045810cae8.png",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/kykladen"
  },
  ionisches: {
    title: "Yachtcharter Ionisches Meer – Korfu, Lefkas & Kefalonia",
    description: "Segeln im Ionischen Meer: Entspannte Törns rund um Korfu, Lefkas & Kefalonia. Perfekt für Familien und Einsteiger.",
    ogImage: "/lovable-uploads/ac12d7be-4a6e-4ac7-90b1-6d045810cae8.png",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/ionisches-meer"
  },
  tuerkei: {
    title: "Yachtcharter Türkei – Bodrum, Göcek & Marmaris",
    description: "Segeln in der Türkei: Bodrum, Göcek/Fethiye, Marmaris & Antalya. Sonnensicher, viele Buchten & gute Marinas.",
    ogImage: "https://chartertransparenz.de/og/tuerkei.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei"
  },
  mittelmeer: {
    title: "Yachtcharter Mittelmeer | Kroatien, Griechenland, Italien, Türkei",
    description: "Mittelmeer segeln: über 20 Länder, 1000+ Häfen, ganzjährig segelbar. Von Kroatien bis Türkei. Jetzt Traumtörn anfragen!",
    ogImage: "/og/mittelmeer.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer"
  },
  about: {
    title: "Über uns | 30 Jahre Charter Transparenz - Yachtcharter Experten",
    description: "30 Jahre Erfahrung im Yachtcharter: Von der Gründung 1997 bis zur internationalen Anerkennung. Transparenz, Qualität & Vertrauen seit drei Jahrzehnten.",
    ogImage: "/og/about.jpg",
    canonical: () => "https://chartertransparenz.de/about"
  },
  faq: {
    title: "FAQ Yachtcharter | Häufige Fragen & Antworten - Charter Transparenz",
    description: "Häufige Fragen zum Yachtcharter beantwortet: Kosten, Buchung, Stornierung, Kaution & mehr. Alle wichtigen Infos für Ihren Segeltörn.",
    ogImage: "/og/faq.jpg",
    canonical: () => "https://chartertransparenz.de/faq"
  },
  impressum: {
    title: "Impressum | Charter Transparenz - Rechtliche Hinweise",
    description: "Impressum und rechtliche Hinweise von Charter Transparenz. Kontaktdaten, Verantwortlicher, Datenschutz & Haftungsausschluss.",
    ogImage: "/og/impressum.jpg",
    canonical: () => "https://chartertransparenz.de/impressum"
  },
  datenschutz: {
    title: "Datenschutzerklärung | Charter Transparenz - Datenschutz & DSGVO",
    description: "Datenschutzerklärung von Charter Transparenz. Transparente Informationen zum Schutz Ihrer personenbezogenen Daten nach DSGVO.",
    ogImage: "/og/datenschutz.jpg",
    canonical: () => "https://chartertransparenz.de/datenschutz"
  },
  allTerritories: {
    title: "Alle Charter Destinationen | Weltweite Yachtcharter Reviere",
    description: "Komplette Übersicht aller Yachtcharter Destinationen weltweit: Mittelmeer, Karibik, Atlantik, Indischer Ozean & mehr. Jetzt entdecken!",
    ogImage: "/og/all-territories.jpg",
    canonical: () => "https://chartertransparenz.de/reviere"
  },
  italien: {
    title: "Yachtcharter Italien – Sardinien, Elba & Sizilien",
    description: "Segeln in Italien: Entdecken Sie Sardinien, Elba, Sizilien & Amalfiküste. Yachtcharter mit Vielfalt & mediterranem Flair.",
    ogImage: "/og/italien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien"
  },
  spanien: {
    title: "Yachtcharter Spanien | Balearen, Costa Brava, Valencia",
    description: "Segeln Spanien: sonnige Balearen, Costa Brava & Valencia. Traumhafte Buchten, lebendige Häfen & spanische Kultur. Jetzt anfragen!",
    ogImage: "/og/spanien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien"
  },
  frankreich: {
    title: "Yachtcharter Frankreich | Côte d'Azur, Korsika, Provence",
    description: "Segeln Frankreich: glamouröse Côte d'Azur, wilde Korsika & provenzalische Küste. Luxuriöse Häfen & französisches Savoir-vivre. Jetzt anfragen!",
    ogImage: "/og/frankreich.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/frankreich"
  },
  croatia: {
    title: "Yachtcharter Kroatien | Adria-Perle mit 1200+ Inseln",
    description: "Kroatien segeln: kristallklare Adria, 1200+ Inseln, kurze Distanzen & perfekte Marina-Infrastruktur. Von Istrien bis Dubrovnik. Jetzt anfragen!",
    ogImage: "/og/croatia.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/kroatien"
  },
  malta: {
    title: "Yachtcharter Malta | Valletta, Gozo, Comino – Mittelmeer-Juwel",
    description: "Segeln Malta: historische Häfen, kristallklares Wasser & kulturelle Schätze. Von Valletta zu Gozo & Comino. Kompaktes Segelrevier. Jetzt anfragen!",
    ogImage: "/og/malta.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/malta"
  },
  montenegro: {
    title: "Yachtcharter Montenegro | Budva, Kotor, Tivat – Adriaperle",
    description: "Segeln Montenegro: dramatische Fjorde, mittelalterliche Städte & unberührte Buchten. Kotor Bay & Adriaküste entdecken. Jetzt anfragen!",
    ogImage: "/og/montenegro.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/montenegro"
  },
  slowenien: {
    title: "Yachtcharter Slowenien | Portorož, Piran, Izola – Adrianord",
    description: "Segeln Slowenien: kompakte Adriaküste, venezianisches Flair & kulinarische Vielfalt. Von Portorož bis Piran. Kurze Distanzen. Jetzt anfragen!",
    ogImage: "/og/slowenien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/slowenien"
  },
  sardinien: {
    title: "Yachtcharter Sardinien – Costa Smeralda & Maddalena",
    description: "Segeln in Sardinien: Exklusive Costa Smeralda & Maddalena-Archipel. Kristallklares Wasser & Luxusmarinas erwarten Sie.",
    ogImage: "/og/sardinien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/sardinien"
  },
  sizilien: {
    title: "Yachtcharter Sizilien – Äolische Inseln & Palermo",
    description: "Segeln in Sizilien: Entdecken Sie die Äolischen Inseln, Palermo & vulkanische Landschaften. Sonne & Kultur pur.",
    ogImage: "/og/sizilien.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/sizilien"
  },
  toskana: {
    title: "Yachtcharter Toskana | Viareggio, Elba, Livorno – Toskanische Küste",
    description: "Segeln Toskana: malerische Küste, Insel Elba & toskanische Weinkultur. Von Viareggio durch den Archipel Toscano. Jetzt anfragen!",
    ogImage: "/og/toskana.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/toskana"
  },
  toskanaElba: {
    title: "Yachtcharter Toskana & Elba – Segeln im Tyrrhenischen Meer",
    description: "Entdecken Sie Elba & die toskanische Küste. Yachtcharter mit kurzen Distanzen, Natur & mediterranem Charme.",
    ogImage: "/og/toskana.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/toskana-elba"
  },
  amalfikueste: {
    title: "Yachtcharter Amalfiküste – Capri, Positano & Neapel",
    description: "Segeln an der Amalfiküste: Erleben Sie Capri, Positano & Neapel vom Wasser aus. UNESCO-Küste mit mediterranem Flair.",
    ogImage: "/og/amalfikueste.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/amalfikueste"
  },
  costasmeralda: {
    title: "Yachtcharter Costa Smeralda | Porto Cervo, Smaragdküste Sardinien",
    description: "Segeln Costa Smeralda: exklusivste Segelreviere, Luxus-Marinas & smaragdgrünes Wasser. Porto Cervo & nobelste Buchten Sardiniens. Jetzt anfragen!",
    ogImage: "/og/costasmeralda.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/italien/costa-smeralda"
  },
  balearen: {
    title: "Yachtcharter Balearen – Mallorca, Ibiza & Menorca",
    description: "Segeln auf den Balearen: Entdecken Sie Mallorca, Ibiza & Menorca. Inselhüpfen mit Traumstränden & mediterranem Flair.",
    ogImage: "/og/balearen.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"
  },
  mallorca: {
    title: "Yachtcharter Mallorca – Segeln ab Palma & Port d'Andratx",
    description: "Mallorca per Yacht entdecken: Palma, Andratx & Cala d'Or. Buchten, Küstenvielfalt & mediterranes Lebensgefühl.",
    ogImage: "/og/mallorca.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/mallorca"
  },
  ibiza: {
    title: "Yachtcharter Ibiza – Inselhüpfen mit Formentera",
    description: "Ibiza & Formentera: Segeln, Nachtleben & glasklares Wasser. Entspannung & Party im perfekten Mix.",
    ogImage: "/og/ibiza.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/ibiza"
  },
  menorca: {
    title: "Yachtcharter Menorca – Mahón, Ciutadella & Naturbuchten",
    description: "Segeln auf Menorca: Ruhiger & familiärer als Mallorca & Ibiza. Entdecken Sie Mahón, Ciutadella & unberührte Naturbuchten.",
    ogImage: "/og/menorca.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/menorca"
  },
  costabrava: {
    title: "Yachtcharter Costa Brava | Barcelona, Girona, Roses – Katalanische Küste",
    description: "Segeln Costa Brava: wilde Küste, versteckte Buchten & katalanische Kultur. Von Barcelona zu den Traumstränden der Costa Brava. Jetzt anfragen!",
    ogImage: "/og/costabrava.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien/costa-brava"
  },
  valencia: {
    title: "Yachtcharter Valencia | Valencia, Alicante, Castellón – Levante",
    description: "Segeln Valencia: moderne Marinas, goldene Strände & valencianische Kultur. Von der Stadt der Künste zu den Stränden der Levante. Jetzt anfragen!",
    ogImage: "/og/valencia.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/spanien/valencia"
  },
  coteazur: {
    title: "Yachtcharter Côte d'Azur | Nizza, Cannes, Monaco, Saint-Tropez",
    description: "Segeln Côte d'Azur: glamouröse Riviera, Luxus-Häfen & französisches Savoir-vivre. Von Monaco bis Saint-Tropez. Exklusives Segeln. Jetzt anfragen!",
    ogImage: "/og/coteazur.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/frankreich/cote-azur"
  },
  korsika: {
    title: "Yachtcharter Korsika | Ajaccio, Bastia, Bonifacio – Île de Beauté",
    description: "Segeln Korsika: wilde Schönheit, dramatische Klippen & französische Eleganz. Von Ajaccio durch die Straße von Bonifacio. Jetzt anfragen!",
    ogImage: "/og/korsika.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/frankreich/korsika"
  },
  bodrum: {
    title: "Yachtcharter Bodrum – Gökova & Datça Golf",
    description: "Segeln ab Bodrum: Gökova- und Datça-Golf mit Badebuchten & ruhigen Ankerplätzen. Ideal für Inselhüpfen.",
    ogImage: "https://chartertransparenz.de/og/bodrum.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/bodrum"
  },
  marmaris: {
    title: "Yachtcharter Marmaris – Hisarönü & Bozburun",
    description: "Ab Marmaris zu den Golfs von Hisarönü & Bozburun: Natur, glasklares Wasser & charmante Küstenorte.",
    ogImage: "https://chartertransparenz.de/og/marmaris.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/marmaris"
  },
  gocekFethiye: {
    title: "Yachtcharter Göcek & Fethiye – Buchtenparadies",
    description: "Göcek & Fethiye: Kurze Etappen, geschützte Buchten, Top-Infrastruktur. Perfekt für Familien & Einsteiger.",
    ogImage: "https://chartertransparenz.de/og/gocek-fethiye.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/gocek-fethiye"
  },
  kaskalkan: {
    title: "Yachtcharter Kaş & Kalkan | Lykische Küste, Kekova – Antike Türkei",
    description: "Segeln Kaş & Kalkan: authentische Fischerdörfer, versunkene Stadt Kekova & unberührte Buchten. Lykisches Erbe entdecken. Jetzt anfragen!",
    ogImage: "/og/kaskalkan.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/kas-kalkan"
  },
  tuerkischeaegaeis: {
    title: "Yachtcharter Türkische Ägäis | Çeşme, Foça, Ayvalık – Westküste",
    description: "Segeln Türkische Ägäis: windreiche Gewässer, antike Städte & authentische Kultur. Von Çeşme zu den griechischen Inseln. Jetzt anfragen!",
    ogImage: "/og/tuerkischeaegaeis.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/tuerkische-aegaeis"
  },
  dodekanes: {
    title: "Yachtcharter Dodekanes – Rhodos, Kos & Symi",
    description: "Segeln im Dodekanes: Entdecken Sie Rhodos, Kos & Symi. Sonnenreiche Törns entlang der türkischen Küste.",
    ogImage: "/lovable-uploads/ac12d7be-4a6e-4ac7-90b1-6d045810cae8.png",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/dodekanes"
  },
  sporaden: {
    title: "Yachtcharter Sporaden – Skiathos, Skopelos & Alonnisos",
    description: "Segeln auf den Sporaden: Grüne Inseln wie Skiathos, Skopelos & Alonnisos. Natur pur im Ägäischen Meer.",
    ogImage: "/lovable-uploads/ac12d7be-4a6e-4ac7-90b1-6d045810cae8.png",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/sporaden"
  },
  athenSaronischerGolf: {
    title: "Yachtcharter Athen & Saronischer Golf – Segeln ab Athen",
    description: "Segeln ab Athen: Entdecken Sie den Saronischen Golf mit Poros, Hydra & Spetses. Kurze Distanzen & kulturelle Highlights.",
    ogImage: "/lovable-uploads/ac12d7be-4a6e-4ac7-90b1-6d045810cae8.png",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/athen-saronischer-golf"
  },
  nordgriechenland: {
    title: "Yachtcharter Nordgriechenland | Thessaloniki, Chalkidiki, Thasos",
    description: "Segeln Nordgriechenland: authentisches Hellas, unberührte Küsten & weniger touristische Inseln. Von Thessaloniki zu Thasos. Jetzt anfragen!",
    ogImage: "/og/nordgriechenland.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/mittelmeer/griechenland/nordgriechenland"
  },
  canaryIslands: {
    title: "Yachtcharter Kanaren – Teneriffa, Gran Canaria & Lanzarote",
    description: "Segeln auf den Kanaren: Ganzjährig Sonne & Passatwinde. Entdecken Sie Teneriffa, Gran Canaria & Lanzarote per Yacht.",
    ogImage: "/og/kanaren.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/atlantik/kanaren"
  },

  karibik: {
    title: "Yachtcharter Karibik – Bahamas, BVI & St. Martin",
    description: "Segeln in der Karibik: Bahamas, Britische Jungferninseln, USVI, St. Martin & Grenadinen. Tropisches Klima & türkisfarbenes Meer.",
    ogImage: "https://chartertransparenz.de/og/karibik.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/karibik"
  },

  bahamas: {
    title: "Yachtcharter Bahamas – Exumas & Nassau entdecken",
    description: "Segeln auf den Bahamas: Exumas, Nassau & paradiesische Strände. Perfekt für Katamaran-Charter & Inselhüpfen.",
    ogImage: "https://chartertransparenz.de/og/bahamas.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/karibik/bahamas"
  },

  bvi: {
    title: "Yachtcharter BVI – Britische Jungferninseln",
    description: "Segeln auf den BVI: Tortola, Virgin Gorda & Jost Van Dyke. Karibisches Inselhüpfen in den Britischen Jungferninseln.",
    ogImage: "https://chartertransparenz.de/og/bvi.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/karibik/bvi"
  },

  usvi: {
    title: "Yachtcharter USVI – US Jungferninseln",
    description: "Segeln ab St. Thomas & St. John. Traumhafte Strände & ideale Routen in den US Jungferninseln.",
    ogImage: "https://chartertransparenz.de/og/usvi.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/karibik/usvi"
  },

  antigua: {
    title: "Yachtcharter Antigua – Segeln im Herzen der Karibik",
    description: "Segeln ab Antigua: English Harbour, Nelson's Dockyard & traumhafte Buchten. Perfekt für Karibik-Charter.",
    ogImage: "https://chartertransparenz.de/og/antigua.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/karibik/antigua"
  },

  stMartin: {
    title: "Yachtcharter St. Martin – Französische & niederländische Seite",
    description: "Segeln ab St. Martin: Marigot, Orient Bay & Simpson Bay. Idealer Ausgangspunkt für Karibik-Inselhüpfen.",
    ogImage: "https://chartertransparenz.de/og/st-martin.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/karibik/st-martin"
  },

  stVincentGrenadinen: {
    title: "Yachtcharter St. Vincent & Grenadinen – Tobago Cays entdecken",
    description: "Segeln in den Grenadinen: Bequia, Mustique, Tobago Cays & Union Island. Karibik pur.",
    ogImage: "https://chartertransparenz.de/og/st-vincent-grenadinen.jpg",
    canonical: () => "https://chartertransparenz.de/reviere/karibik/st-vincent-grenadinen"
  }
};
