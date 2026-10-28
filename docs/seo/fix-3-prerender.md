# FIX-3: Statisches Prerendering für Crawler

Stand: 28.10.2026

## Problem

Crawler ohne JavaScript (GPTBot, ClaudeBot, PerplexityBot) erhielten auf allen
Seiten ein leeres `<div id="root">`. 126 von 188 Sitemap-URLs bekamen zusätzlich
Title, Description und Canonical der Startseite, weil `scripts/prerender-home.ts`
diese in `dist/index.html` schrieb und Netlify die Datei als SPA-Fallback für
jede Route ohne eigenes HTML auslieferte.

## Lösung

Kein SSR zur Laufzeit. Nach dem normalen Build wird jede Sitemap-URL einmal mit
React selbst gerendert und als statische Datei abgelegt.

```
bun run build                      # Client-Build + Sitemap (dist/ct-sitemap.xml)
bun tsx scripts/prerender-*.ts     # alte Skripte: Meta-Tags für 61 URLs (siehe unten)
bun run prerender                  # vite build --ssr src/entry-prerender.tsx + scripts/prerender.ts
bun tsx scripts/validate-seo.ts    # genau 1 Title/Description/Canonical, H1 vorhanden
```

- `src/entry-prerender.tsx` rendert die App für eine URL (`react-dom/server`,
  `StaticRouter`) und liefert HTML und die Helmet-Tags.
- `scripts/prerender.ts` liest alle URLs aus `dist/ct-sitemap.xml` und schreibt
  `dist/<route>/index.html` mit vollständigem Inhalt, H1, JSON-LD und genau einem
  Title, einer Description und einem Canonical.
- `src/main.tsx` übernimmt vorgerendertes HTML per `hydrateRoot`; Routen ohne
  eigene Datei laufen weiter über `dist/spa-fallback.html` (neutral, ohne
  Startseiten-Meta) mit `createRoot`.

**Neue Seite:** in `scripts/generate-sitemap.ts` eintragen, sonst nichts.

### Herkunft der Meta-Daten (Priorität)

1. Helmet-Tags der Seite (`<Meta>` aus `src/seo/Meta.tsx` oder `<Helmet>`)
2. Head aus einem alten `prerender-*.ts`-Skript für diese Route
3. Eintrag in `src/seo/meta.config.ts`, dessen Canonical zur URL passt
4. Abgeleitet aus H1 und erstem Absatz – das Skript meldet diese Seiten mit ⚠️

Statische SEO-Tags tragen `data-rh="true"`, damit Helmet sie im Browser ersetzt
statt zu verdoppeln.

## Prüfung

```
npx tsx scripts/audit-prerender.ts https://chartertransparenz.de docs/seo/prerender-audit.md
```

Ruft jede Sitemap-URL ohne JavaScript ab und prüft Status, Title (auch
Eindeutigkeit), Description, Anzahl und Ziel des Canonicals, H1, Wortzahl und
strukturierte Daten. Letzter Lauf: `prerender-audit-lokal.md`.

## Alte Prerender-Skripte

| Skript | Beitrag heute | Status |
|---|---|---|
| `prerender-home.ts` | schreibt `spa-fallback.html`; Startseiten-Meta wird von Helmet (`META.home`) überschrieben | wird benötigt (Fallback) |
| `prerender-croatia/greece/italy/spain/caribbean/turkey.ts` | Title, Description, Canonical, OG und BreadcrumbList für 44 Revierseiten, von denen viele keine eigene `<Meta>` haben | werden benötigt, solange diese Meta-Daten nur dort stehen |
| `prerender-partners.ts` | Partnerseiten setzen eigene Helmet-Tags, die Vorrang haben | entbehrlich, nach Live-Prüfung entfernbar |
| `prerender-france.ts` | schreibt `dist/reviere-mittelmeer-frankreich.html`, die Datei wird nie ausgeliefert (`_redirects` greift vorher) | wirkungslos, entfernbar |

Empfohlene Konsolidierung (eigener Schritt): Die Meta-Daten aus den Länder-Skripten
nach `src/seo/meta.config.ts` übernehmen; danach können alle alten Skripte bis auf
die Fallback-Erzeugung entfallen.

## Offene inhaltliche Befunde (kein Rendering-Fehler)

- 62 Revier- und Standortseiten haben weder eigene Meta noch einen Eintrag in
  `meta.config.ts`; Title/Description werden aus H1 und erstem Absatz abgeleitet.
  Redaktionelle Meta-Texte empfohlen.
- Zwei H1 im Seiten-Markup: Istrien, Kuba, Whitsundays, `/reviere/seychellen`.
- Doppelte Titel: `/reviere/seychellen` und `/reviere/indischer-ozean/seychellen`;
  `/reviere/nord-europa/deutsche-ostsee` und `…/charter-standorte`.
- `/reviere/amerika-bahamas/bahamas` hat bewusst das Canonical
  `/reviere/karibik/bahamas` (gleiche Seite unter zwei Routen).
- Wenig Text: `/yachtcharter-partner` (96 Wörter), Kavas und Vernicos (149).
- Bei App-interner Navigation zwischen Seiten ohne eigene `<Meta>` (z. B.
  Kroatien → Istrien) bleiben Title und Canonical der vorherigen Seite stehen.
  Betrifft nur Besucher im Browser, nicht Crawler; live vorher identisch.
