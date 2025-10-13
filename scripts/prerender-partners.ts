// SSG Postbuild Script für Partner-Seiten
// Generiert statisches HTML mit SEO-Tags für 17 Partner-Seiten (Hub + 16 Partner)
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

// Partner Metadata (inline für Build-Stabilität)
const PARTNERS_META = {
  'pitter-yachting': {
    title: 'Pitter Yachting – Yachtcharter Kroatien | Über 30 Jahre Erfahrung',
    desc: 'Pitter Yachting: Traditionsreiche Charterbasis in Pula (Istrien). Moderne Flotte, persönlicher Service, faire Preise. Jetzt anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/pitter-yachting',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Pitter Yachting',
    region: 'Kroatien (Istrien)',
    fleet: '80+ Yachten',
    since: 1989
  },
  'croatia-yachting': {
    title: 'Croatia Yachting – Premium Yachtcharter Split & Dalmatien',
    desc: 'Croatia Yachting: Exklusive Flotten in Split & Dalmatien. Top-Service, moderne Yachten, transparente Konditionen. Jetzt beraten lassen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/croatia-yachting',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Croatia Yachting',
    region: 'Kroatien (Split & Dalmatien)',
    fleet: '120+ Yachten',
    since: 2005
  },
  'angelina-yachtcharter': {
    title: 'Angelina Yachtcharter – Familienfreundliche Flotten Kroatien',
    desc: 'Angelina Yachtcharter: Familienbetrieb mit Basis in Trogir. Persönliche Betreuung, gepflegte Yachten, faire Preise. Jetzt Charter anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/angelina-yachtcharter',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Angelina Yachtcharter',
    region: 'Kroatien (Trogir)',
    fleet: '50+ Yachten',
    since: 1998
  },
  'ncp-mare': {
    title: 'NCP Mare – Yachtcharter Kroatien | Split, Zadar & Dubrovnik',
    desc: 'NCP Mare: Moderne Flotten an 3+ Basen in Kroatien. Qualität, Flexibilität, persönlicher Service. Jetzt unverbindlich anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/ncp-mare',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'NCP Mare',
    region: 'Kroatien (Split, Zadar, Dubrovnik)',
    fleet: '90+ Yachten',
    since: 2010
  },
  'ultra-sailing': {
    title: 'Ultra Sailing – Premium Yachtcharter Kroatien & Griechenland',
    desc: 'Ultra Sailing: Hochwertige Flotten in Kroatien & Griechenland. Moderne Yachten, Top-Service, transparente Preise. Jetzt Charter buchen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/ultra-sailing',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Ultra Sailing',
    region: 'Kroatien & Griechenland',
    fleet: '100+ Yachten',
    since: 2006
  },
  'waypoint': {
    title: 'Waypoint Charter Croatia – Yachtcharter Split & Biograd',
    desc: 'Waypoint Charter: Familiengeführte Charterbasis in Kroatien. Persönliche Beratung, moderne Flotte, faire Konditionen. Jetzt anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/waypoint',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Waypoint Charter Croatia',
    region: 'Kroatien (Split & Biograd)',
    fleet: '70+ Yachten',
    since: 2012
  },
  'istion-yachting': {
    title: 'Istion Yachting – Premium Yachtcharter Griechenland',
    desc: 'Istion Yachting: Größter griechischer Charterer. 20+ Basen, moderne Flotte, exzellenter Service. Jetzt Griechenland-Charter anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/istion-yachting',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Istion Yachting',
    region: 'Griechenland (20+ Basen)',
    fleet: '500+ Yachten',
    since: 1986
  },
  'kavas-yachting': {
    title: 'Kavas Yachting – Yachtcharter Griechenland | Athen & Kykladen',
    desc: 'Kavas Yachting: Traditionsreicher Charterer in Griechenland. Moderne Flotten, persönlicher Service, faire Preise. Jetzt anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/kavas-yachting',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Kavas Yachting',
    region: 'Griechenland (Athen & Kykladen)',
    fleet: '150+ Yachten',
    since: 1995
  },
  'vernicos-yachts': {
    title: 'Vernicos Yachts – Luxus Yachtcharter Griechenland seit 1969',
    desc: 'Vernicos Yachts: Premium-Charterer mit 50+ Jahren Erfahrung. Exklusive Flotten, Top-Service in Griechenland. Jetzt beraten lassen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/vernicos-yachts',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Vernicos Yachts',
    region: 'Griechenland',
    fleet: '200+ Yachten',
    since: 1969
  },
  'athenian-yachts': {
    title: 'Athenian Yachts – Yachtcharter Griechenland | Athen & Inseln',
    desc: 'Athenian Yachts: Familiengeführter Charterer in Athen. Moderne Flotten, persönlicher Service, transparente Preise. Jetzt anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/athenian-yachts',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Athenian Yachts',
    region: 'Griechenland (Athen & Inseln)',
    fleet: '100+ Yachten',
    since: 1993
  },
  'olympic-yachting': {
    title: 'Olympic Yachting – Yachtcharter Griechenland | Ionisches Meer',
    desc: 'Olympic Yachting: Traditionsreiche Charterbasis auf Korfu. Moderne Flotten, persönlicher Service, faire Konditionen. Jetzt Charter buchen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/olympic-yachting',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Olympic Yachting',
    region: 'Griechenland (Korfu & Ionisches Meer)',
    fleet: '80+ Yachten',
    since: 2001
  },
  'five-seasons-yachting': {
    title: 'Five Seasons Yachting – Yachtcharter Griechenland & Kroatien',
    desc: 'Five Seasons: Moderne Flotten in Griechenland & Kroatien. Qualität, Service, transparente Preise. Jetzt unverbindlich anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/five-seasons-yachting',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Five Seasons Yachting',
    region: 'Griechenland & Kroatien',
    fleet: '120+ Yachten',
    since: 2008
  },
  'dalmatia-charter': {
    title: 'Dalmatia Charter – Premium Yachtcharter Kroatien | Split & Zadar',
    desc: 'Dalmatia Charter: Familiengeführt seit 2005. Moderne Flotten, persönlicher Service, transparente Konditionen. Jetzt Charter anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/dalmatia-charter',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Dalmatia Charter',
    region: 'Kroatien (Split & Zadar)',
    fleet: '60+ Yachten',
    since: 2005
  },
  'dream-yacht': {
    title: 'Dream Yacht Charter – Weltweites Yachtcharter-Netzwerk',
    desc: 'Dream Yacht Charter: Globales Netzwerk mit 60+ Basen weltweit. Moderne Flotten, Top-Service, transparente Preise. Jetzt anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/dream-yacht',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Dream Yacht Charter',
    region: 'Weltweit (60+ Basen)',
    fleet: '1000+ Yachten',
    since: 2000
  },
  'navigare-yachting': {
    title: 'Navigare Yachting – Premium Yachtcharter weltweit',
    desc: 'Navigare Yachting: Internationale Flotten, moderne Yachten, exzellenter Service. Mittelmeer, Karibik & mehr. Jetzt Charter buchen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/navigare-yachting',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Navigare Yachting',
    region: 'Weltweit (Mittelmeer, Karibik)',
    fleet: '800+ Yachten',
    since: 2003
  },
  'kiriacoulis': {
    title: 'Kiriacoulis – Premium Yachtcharter Griechenland seit 1969',
    desc: 'Kiriacoulis: Traditionsreicher Charterer in Griechenland. 50+ Jahre Erfahrung, moderne Flotten, Top-Service. Jetzt anfragen!',
    canon: 'https://chartertransparenz.de/yachtcharter-partner/kiriacoulis',
    image: 'https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg',
    h1: 'Kiriacoulis',
    region: 'Griechenland',
    fleet: '250+ Yachten',
    since: 1969
  }
};

interface PartnerMeta {
  title: string;
  desc: string;
  canon: string;
  image: string;
  h1: string;
  region: string;
  fleet: string;
  since: number;
}

interface Route {
  path: string;
  slug?: string;
  title: string;
  desc: string;
  canon: string;
  image: string;
  h1?: string;
  region?: string;
  fleet?: string;
  since?: number;
}

const ROUTES: Route[] = [
  // Hub page
  {
    path: "/yachtcharter-partner",
    title: "Yachtcharter-Partner | Geprüfte Charter-Anbieter weltweit",
    desc: "Unsere geprüften Yachtcharter-Partner in Kroatien, Griechenland & weltweit. Moderne Flotten, transparente Preise, persönlicher Service. Jetzt vergleichen!",
    canon: "https://chartertransparenz.de/yachtcharter-partner",
    image: "https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg"
  },
  // Individual partner pages
  ...Object.entries(PARTNERS_META).map(([slug, meta]) => ({
    path: `/yachtcharter-partner/${slug}`,
    slug,
    ...meta
  }))
];

const escapeHtml = (s: string | number) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const generateBodyContent = (r: Route) => {
  // Hub page - minimal template with static H1
  if (!r.h1 || !r.region || !r.fleet || !r.since) {
    return `
    <div class="min-h-screen bg-background">
      <div class="relative bg-gradient-ocean py-8">
        <div class="container mx-auto px-4">
          <div class="text-center text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Yachtcharter-Partner</h1>
            <p class="text-xl text-white/90">Geprüfte Charter-Anbieter weltweit</p>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg max-w-none mb-12">
            <h2 class="text-3xl font-bold mb-4">Unsere Partner</h2>
            <p class="text-lg leading-relaxed mb-6">${escapeHtml(r.desc)}</p>
            <p class="text-lg leading-relaxed">Moderne Flotten, transparente Preise, persönlicher Service – entdecken Sie unsere geprüften Yachtcharter-Partner in den beliebtesten Segelrevieren weltweit.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  }

  // Partner pages - full template
  return `
    <div class="min-h-screen bg-background">
      <div class="relative bg-gradient-ocean py-8">
        <div class="container mx-auto px-4">
          <div class="text-center text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">${escapeHtml(r.h1)}</h1>
            <p class="text-xl text-white/90">Premium Yachtcharter in ${escapeHtml(r.region)}</p>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg max-w-none mb-12">
            <h2 class="text-3xl font-bold mb-4">Über ${escapeHtml(r.h1)}</h2>
            <p class="text-lg leading-relaxed mb-6">${escapeHtml(r.desc)}</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div class="p-6 bg-card rounded-lg border border-border">
                <h3 class="font-semibold text-lg mb-2">Region</h3>
                <p class="text-muted-foreground">${escapeHtml(r.region)}</p>
              </div>
              <div class="p-6 bg-card rounded-lg border border-border">
                <h3 class="font-semibold text-lg mb-2">Flotte</h3>
                <p class="text-muted-foreground">${escapeHtml(r.fleet)}</p>
              </div>
              <div class="p-6 bg-card rounded-lg border border-border">
                <h3 class="font-semibold text-lg mb-2">Gegründet</h3>
                <p class="text-muted-foreground">${escapeHtml(r.since)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

const inject = (html: string, r: Route) => {
  // Remove ALL existing head tags to prevent duplicates
  let h = html
    // Remove existing title
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    // Remove all meta description tags
    .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, "")
    // Remove all canonical links
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, "")
    // Remove all OG tags
    .replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/gi, "")
    // Remove all Twitter tags
    .replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/gi, "");

  // Build new head content
  const head = [
    `<title>${escapeHtml(r.title)}</title>`,
    `<meta name="description" content="${escapeHtml(r.desc)}">`,
    `<link rel="canonical" href="${escapeHtml(r.canon)}">`,
    `<meta property="og:title" content="${escapeHtml(r.title)}">`,
    `<meta property="og:description" content="${escapeHtml(r.desc)}">`,
    `<meta property="og:url" content="${escapeHtml(r.canon)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:image" content="${escapeHtml(r.image)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(r.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(r.desc)}">`,
    `<meta name="twitter:image" content="${escapeHtml(r.image)}">`
  ].join("\n    ");

  // Inject new head content before </head>
  h = h.replace("</head>", `    ${head}\n  </head>`);

  // Inject body content for partner pages
  const bodyContent = generateBodyContent(r);
  if (bodyContent) {
    h = h.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${bodyContent}</div>`
    );
  }

  return h;
};

// Main execution
console.log("\n🚀 Starting Partner Pages SSG prerender...\n");

try {
  const tpl = readFileSync("dist/index.html", "utf8");
  let totalWritten = 0;

  for (const r of ROUTES) {
    const finalHtml = inject(tpl, r);
    
    // Determine output path
    let outPath: string;
    if (r.path === "/yachtcharter-partner") {
      // Hub page: /yachtcharter-partner/index.html
      outPath = join("dist", "yachtcharter-partner", "index.html");
    } else {
      // Individual pages: /yachtcharter-partner/[slug]/index.html
      outPath = join("dist", r.path, "index.html");
    }

    // Create directory if it doesn't exist
    mkdirSync(join(outPath, ".."), { recursive: true });
    
    // Write file
    writeFileSync(outPath, finalHtml, "utf8");
    
    // Log with H1 confirmation for partner pages
    if (r.h1) {
      console.log(`✅ Pre-rendered ${outPath} with <h1>${r.h1}</h1>`);
    } else {
      console.log(`✅ Pre-rendered ${outPath} (hub page)`);
    }
    totalWritten++;
  }

  console.log(`\n✅ Partner Pages SSG prerender completed successfully!`);
  console.log(`   Total pages: ${totalWritten} (1 hub + 16 partners)\n`);
} catch (error) {
  console.error("\n❌ Partner Pages SSG prerender failed:", error);
  process.exit(1);
}
