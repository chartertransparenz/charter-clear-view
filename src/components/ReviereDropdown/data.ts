import { MenuItem } from './types';

export const reviereMenu: MenuItem[] = [
  {
    label: "Kroatien",
    href: "/reviere/mittelmeer/kroatien",
    children: [
      { label: "Istrien", href: "/reviere/mittelmeer/kroatien/istrien" },
      { label: "Kvarner", href: "/reviere/mittelmeer/kroatien/kvarner" },
      { label: "Zadar", href: "/reviere/mittelmeer/kroatien/zadar" },
      { label: "Dalmatien ab Split", href: "/reviere/mittelmeer/kroatien/dalmatien-split" },
      { label: "Dubrovnik", href: "/reviere/mittelmeer/kroatien/dubrovnik" }
    ]
  },
  {
    label: "Griechenland",
    href: "/reviere/mittelmeer/griechenland",
    children: [
      { label: "Kykladen", href: "/reviere/mittelmeer/griechenland/kykladen" },
      { label: "Ionische Inseln", href: "/reviere/mittelmeer/griechenland/ionische-inseln" },
      { label: "Dodekanes", href: "/reviere/mittelmeer/griechenland/dodekanes" },
      { label: "Sporaden", href: "/reviere/mittelmeer/griechenland/sporaden" },
      { label: "Athen & Saronischer Golf", href: "/reviere/mittelmeer/griechenland/athen-saronischer-golf" },
      { label: "Nordgriechenland", href: "/reviere/mittelmeer/griechenland/nordgriechenland" }
    ]
  },
  {
    label: "Spanien",
    href: "/reviere/mittelmeer/spanien",
    children: [
      { label: "Balearen", href: "/reviere/mittelmeer/spanien/balearen" },
      { label: "Costa Brava", href: "/reviere/mittelmeer/spanien/costa-brava" },
      { label: "Valencia", href: "/reviere/mittelmeer/spanien/valencia" },
      { label: "Kanaren", href: "/reviere/atlantik/kanaren" }
    ]
  },
  {
    label: "Italien",
    href: "/reviere/mittelmeer/italien",
    children: [
      { label: "Sardinien", href: "/reviere/mittelmeer/italien/sardinien" },
      { label: "Costa Smeralda", href: "/reviere/mittelmeer/italien/sardinien/costa-smeralda" },
      { label: "Sizilien", href: "/reviere/mittelmeer/italien/sizilien" },
      { label: "Toskana", href: "/reviere/mittelmeer/italien/toskana" },
      { label: "Amalfiküste", href: "/reviere/mittelmeer/italien/amalfikuste" }
    ]
  },
  {
    label: "Türkei",
    href: "/reviere/mittelmeer/tuerkei",
    children: [
      { label: "Türkische Ägäis", href: "/reviere/mittelmeer/tuerkei/tuerkische-aegaeis" },
      { label: "Bodrum", href: "/reviere/mittelmeer/tuerkei/bodrum" },
      { label: "Marmaris", href: "/reviere/mittelmeer/tuerkei/marmaris" },
      { label: "Göcek–Fethiye", href: "/reviere/mittelmeer/tuerkei/goecek-fethiye" },
      { label: "Kaş–Kalkan", href: "/reviere/mittelmeer/tuerkei/kas-kalkan" }
    ]
  },
  {
    label: "Karibik",
    href: "/reviere/karibik",
    children: [
      { label: "Britische Jungferninseln", href: "/reviere/karibik/britische-jungferninseln" },
      { label: "US-Jungferninseln", href: "/reviere/karibik/us-jungferninseln" },
      { label: "US-Jungferninseln (Alternative Route)", href: "/reviere/karibik/us-virgin-islands" },
      { label: "Leeward-Inseln", href: "/reviere/karibik/leeward-inseln" },
      { label: "Windward-Inseln", href: "/reviere/karibik/windward-inseln" },
      { label: "Kuba", href: "/reviere/karibik/kuba" }
    ]
  },
  { label: "Alle Destinationen", href: "/reviere/alle-reviere", children: [] }
];