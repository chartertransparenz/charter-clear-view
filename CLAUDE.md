# CharterTransparenz – Global Project Instructions for Claude Code

## 1. Brand positioning

CharterTransparenz is not an anonymous online booking platform.

The brand stands for:

- personal yacht charter advice
- real sailing and charter experience
- over 30 years of industry knowledge
- independent recommendations
- transparent pricing
- competent and calm support
- best possible prices without disadvantage compared to large online platforms

The website should feel:

- trustworthy
- experienced
- calm
- personal
- maritime
- professional
- slightly emotional, but never exaggerated

Avoid:

- aggressive sales language
- generic travel-blog wording
- clickbait
- luxury clichés
- fear-based wording
- startup/SaaS-style copy
- overpromising

---

## 2. Writing style

All German text should be:

- clear
- advisory
- well structured
- easy to understand
- factual but motivating
- slightly emotional where appropriate

The tone should make readers feel:

"This is understandable. I can imagine doing this. These people know what they are talking about."

Avoid phrases like:

- "Wichtig zu verstehen"
- "Achtung"
- "nur"
- "lediglich"
- "versteckte Kosten"
- "Sie müssen unbedingt"

Prefer phrases like:

- "gut planbar"
- "transparent"
- "realistisch einschätzen"
- "passend zu Ihrer Crew"
- "entspannt planen"
- "persönlich beraten"

---

## 3. SEO principles

Every new page or article must have:

- clear H1
- logical H2/H3 structure
- SEO title
- meta description
- clean slug
- meaningful teaser
- internal links
- CTA to /charter-anfrage where appropriate
- useful alt text for all images

Do not keyword-stuff.

Write for users first, search engines second.

Each article should target a clear search intent:
- informational
- decision-oriented
- comparison
- planning
- conversion

Avoid creating multiple articles that target the same keyword too closely. Prevent keyword cannibalization.

Example:
Do not create multiple separate "Was kostet ein Yachtcharter..." articles unless there is a clearly different search intent.

---

## 4. Internal linking rules

Internal links are mandatory when useful.

Every new blog article or news item should link naturally to relevant existing pages, for example:

- /charter-anfrage
- relevant destination / revier pages
- relevant blog articles
- relevant news items
- FAQ or service pages if available

Use natural anchor text.

Good examples:

- "Yachtcharter in Griechenland"
- "Bareboat oder mit Skipper"
- "Kosten eines Yachtcharters"
- "Griechenland-Törn anfragen"
- "passendes Revier für Ihre Crew"

Avoid:
- over-optimized anchors
- too many links in one paragraph
- linking the same target repeatedly
- linking irrelevant pages

A good article normally contains:
- 3–6 useful internal links
- one mid-article CTA if appropriate
- one final CTA

---

## 5. CTA style

CTAs must be calm, helpful and advisory.

Do not use aggressive sales language like:
- "Jetzt sofort buchen"
- "Nur heute"
- "Sichern Sie sich..."
- "Jetzt zuschlagen"

Preferred CTA style:

- "Jetzt unverbindlich anfragen"
- "Törn persönlich planen lassen"
- "Passendes Angebot anfragen"
- "Griechenland-Törn anfragen"
- "Yachtcharter-Beratung starten"

CTA copy should focus on help:

Example:
"Sie sind unsicher, welches Revier zu Ihrer Crew passt? Wir helfen Ihnen, Saison, Erfahrung und gewünschte Route realistisch einzuordnen."

All important commercial pages and most blog/news pages should guide users toward:

/charter-anfrage

---

## 6. Conversion principles

The website should not only inform. It should guide users toward a qualified inquiry.

Every commercial or decision-oriented page should answer:

- What problem does the reader have?
- What decision are they trying to make?
- How does CharterTransparenz help?
- What is the next step?

Important conversion messages:

- personal advice instead of anonymous platform
- run by sailors
- over 30 years of charter experience
- independent recommendations
- transparent pricing
- best possible prices / no disadvantage compared with large platforms
- practical help with yacht, revier, route, season and cost planning

---

## 7. Image rules

Use authentic, high-quality maritime images.

Images should feel:
- real
- calm
- professional
- emotionally inviting

Avoid:
- generic stock feeling
- luxury clichés
- champagne scenes
- unrealistic AI look
- overcrowded scenes

Every image needs:

- meaningful German alt text
- useful caption if captions are used
- correct local file path
- no external image URLs

Preferred folder structure:

Blog images:
public/images/blog/[topic]/

News images:
public/images/news/

Use SEO-friendly filenames.

---

## 8. Blog article rules

When creating a new blog article:

1. Create the post file in:
   src/blog/posts/

2. Register it in:
   src/blog/posts/index.ts

3. Place it newest-first.

4. Ensure it appears on:
   /blog

5. Assign the correct category.

Allowed blog categories include:
- Reviere & Destinationen
- Charterwissen & Kosten
- Törnplanung & Vorbereitung
- Yachtwahl & Bordleben
- Segelpraxis & Sicherheit
- Inspiration & Erfahrungsberichte

6. Add internal links.

7. Add CTA to /charter-anfrage if relevant.

8. Ensure sitemap generation includes the new article.

9. Update EXPECTED_URL_COUNT in scripts/validate-sitemap.ts to match
   the new total URL count produced by scripts/generate-sitemap.ts.

10. Run:
    tsc --noEmit
    npm run build

---

## 9. News / Törn-Hinweise rules

When creating a new news item / Törn-Hinweis:

1. Add it to the existing news system.
2. Keep news and blog systems separate unless intentionally cross-linked.
3. Ensure it appears on:
   /news

4. If it should also appear in the blog/news teaser area, use the existing project mechanism.

5. Link to relevant:
   - Revier pages
   - blog articles
   - /charter-anfrage where useful

6. Ensure sitemap generation includes the new news URL.

7. Update EXPECTED_URL_COUNT in scripts/validate-sitemap.ts.

8. Run:
   tsc --noEmit
   npm run build

---

## 10. Index and listing update rule

Whenever a new page, blog post, news item, destination page or partner page is created,
always check and update all relevant index/listing files.

For blog posts:
- update src/blog/posts/index.ts
- verify /blog listing

For news:
- update the relevant news index/data file
- verify /news listing

For destination/revier pages:
- update any relevant navigation/listing structures
- verify parent region pages if applicable

For partner pages:
- update partner index/listing if applicable

Do not create orphan pages.

Every new public page must be reachable through at least one internal link or listing.

---

## 11. Sitemap rules

Every new public URL must be included in sitemap generation.

The project uses a custom sitemap generator at scripts/generate-sitemap.ts.

Important:
- /sitemap.xml serves the correct custom sitemap via a force-rewrite in public/_redirects:
    /sitemap.xml  /ct-sitemap.xml  200!
- /ct-sitemap.xml is the generated source sitemap written by generate-sitemap.ts.
- Do NOT allow Netlify's automatic sitemap plugin to replace the correct sitemap output.
  The plugin overwrites dist/sitemap.xml after build; ct-sitemap.xml is unaffected.

After adding URLs to generate-sitemap.ts:
- update EXPECTED_URL_COUNT in scripts/validate-sitemap.ts to match
- run npm run build
- confirm the new URL appears in the generated sitemap

Do not include:
- API routes
- admin/test pages
- duplicate URLs
- query parameter URLs
- broken/404 pages

---

## 12. CTA box styling rule (critical)

When adding inline CTA boxes with dark backgrounds, ALWAYS set color explicitly
on every <p> element. Do not rely on CSS inheritance from the parent div.

The blog-content CSS overrides inherited color on <p> tags.

Correct pattern:

```tsx
<div style={{ background: "linear-gradient(135deg, #0f3460 0%, #1a5276 100%)", borderRadius: "12px", padding: "28px 32px" }}>
  <p style={{ color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
    Headline text
  </p>
  <p style={{ color: "#e8edf2", marginBottom: "20px" }}>
    Body text
  </p>
  <a href="/charter-anfrage" style={{ color: "#ffffff", background: "#e8a020", ... }}>
    Button label
  </a>
</div>
```

Never use color: "#fff" only on the wrapper div and assume it propagates.

---

## 13. Technical rules

Before changing code:
- inspect existing patterns
- reuse existing components
- do not introduce unnecessary dependencies
- keep TypeScript clean
- preserve existing design system
- avoid large rewrites unless explicitly requested

After meaningful changes always run:

tsc --noEmit
npm run build

If Supabase Edge Functions are changed, clearly state that the function must be redeployed:

npx supabase functions deploy send-charter-anfrage --project-ref bqckduaygatcopxyuyyv

---

## 14. Reporting rules

After each implementation, return a clear report with:

1. Files created
2. Files modified
3. Routes/slugs added
4. Images used
5. Internal links added
6. CTA links added
7. Sitemap/index updates
8. Whether the page appears in the correct listing
9. Build/typecheck result
10. Any required manual follow-up (e.g. deploy Edge Function, submit sitemap to Google Search Console)

---

END OF GLOBAL INSTRUCTIONS
