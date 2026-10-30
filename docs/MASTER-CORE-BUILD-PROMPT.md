# DISTILLED CORE — MASTER CODEX BUILD PROMPT v1.1
## Corporate flagship + canonical copy pack + ecosystem gateway

**Execution scope:** implement and validate the local Next.js project in `distilled-core`. No remote write, deploy, Wix edit, DNS, domain migration, service credential, publication or paid action is authorized.

**Core purpose:** Distilled Core is the **future flagship homepage** and corporate gateway for Moonshine Capital / Distilled Funding. It is **not** a fourth funding product catalog, a replacement CRM, a mirror of Wix, or a duplicate of the Funding, Solutions, Industries and Acquire applications.

**Target:** `https://www.distilledfunding.com`, currently Wix-owned. **Local preview:** noindex. Do not claim `distilled-core.vercel.app` already exists.

## 0. FIRST: Inspect the actual files, not merely the links

Read these current-workspace **authoritative Core contracts** before creating or changing code:

1. `CORE-COMPLETE-HEADER-MENU-PAGE.txt` — compact navigation and complete page hierarchy.
2. `CANONICAL-SITEMAP.txt` — exactly 31 intended Core-local routes; no `/core` prefix.
3. `data/core/core.pages.manifest.json` — derived routing/copy index (not independent editorial source).
4. `data/pages/*.json` — **canonical editable copy for every one of 31 pages**.
5. `data/core/core-homepage.production.json` — the distinctive 14-section flagship composition and all five functional mission modes.
6. `data/core/core-page.template.json` and `data/core/core-page.schema.json` — page copy contract and validation shape.
7. `data/core/core.navigation.manifest.json` — header, mega-menus, footer.
8. `data/core/core.ecosystem.registry.json` — owner, preview, production, destination status.
9. `data/core/core.wix-capabilities.registry.json` — observed Wix routes and unresolved capability handoffs.
10. `data/core/core.design-system.json` — baseline tokens, component requirements and visual constraints.
11. `docs/WIX-CUTOVER-DEPENDENCIES.md` — production domain and protected operational features.
12. `docs/COPY-STATUS.md` — verified facts versus editorial copy and missing policy approvals.
13. `_reference/design/*.html` — original Operator Capital homepage directions; conceptual visual references only.
14. `_reference/funding-distilled`, `_reference/distilled-solutions`, `_reference/distilled-industries`, `_reference/acquire-distilled` — complete read-only shallow clones when present.

Read `README-STARTER.md` and `scripts/validate_core_contract.py` and run the validator before implementation. If there is a reference conflict, use the current page contract for Core-specific route/copy ownership, the sibling site code for proven implementation patterns, and document material discrepancies in `docs/REFERENCE-RECONCILIATION.md`. **Never silently replace the user-provided Core copy contracts with the content from Wix or another site.**

## 1. BRAND, VISUAL FAMILY AND TECHNICAL REUSE

This site must unequivocally look like the **fourth sibling** of Funding, Solutions, Industries and Acquire, while having a more ambitious corporate-flagship layout. The precedent is the **existing working sibling repositories**, not generic starter templates, screenshots or prior experimental variations.

- Professional neo-brutalist / Operator Capital. Cream/paper, black ink, signal orange, electric blue, lime accents.
- Heavy display typography, monospace metadata, structural borders, offset shadows, 12-column bento, strong editorial hierarchy, function-led visual motifs.
- Match actual reusable fonts/tokens/components from siblings where compatible and authorized. Prefer their verified design primitive conventions and responsive behavior over guessing from HTML mockups.
- Mobile work at 320px/390px, accessible keyboard/touch menus, focus rings, proper `prefers-reduced-motion`, appropriate responsive card layouts.
- Do not copy fake approval scores or decorative sample metrics from source HTML. No 78% fundability, no "live routing" claim, no synthetic portfolio/funding statistics.
- No purple gradients, faux fintech dashboards, dead CTA buttons, gratuitous widget libraries, full-page animation theatrics, or generic SaaS hero.

Use Next.js App Router + TypeScript, preferably the proven repository script/config/validator patterns (Zod optional where consistent); render content server-side unless it genuinely needs client state. Do not add a database, a general design-system repo, a monorepo, a new CMS, authentication or paid APIs for the initial flagship.

## 2. STRICT CONTENT OWNERSHIP

- `core`: corporate story, mission, trust, navigation, contact routing, featured network experiences.
- `funding`: capital products and financing comparisons.
- `solutions`: business problems/goals and operating improvements.
- `industries`: 15 sectors and 100 field guides about business operating models.
- `acquire`: buyer/seller journeys, valuation, due diligence, transaction workstations.
- `tools`: full calculator/assessment functionality, when actually built and verified.
- `marketplace`: business-service/provider/affiliate directory, when actually built and verified.
- `learn/press`: future editorial/education destination; keep Wix editorial ownership for now.
- `partners`: specialist referral/agency pathways and operations, when the owning property is confirmed.
- `wix`: blog, courses, events, groups, bookings, members, existing applications/forms and CMS/business data, until a separately authorized migration.

Core may curate previews and link to each canonical owner. Core may not duplicate full Funding products, entire Wix blog entries, Tools calculators, proprietary intake schemas or partner CRM data.

## 3. THE CANONICAL 31-PAGE STRUCTURE IS LOCKED FOR V1

Read `CANONICAL-SITEMAP.txt`, then implement exactly the 31 paths given. These consist of homepage, 7 company pages, 4 contact pages, 9 explore pages, 4 resources pages, 1 partner page and 5 legal/trust pages (31 total). Preserve the parent hierarchy, active menu subset, breadcrumbs, footer and 404 behavior.

Each `data/pages/*.json` is a **complete page draft** with individual headline, summary, three substantive page sections, context CTA, related paths, compliance/review metadata, SEO fields and a declared surface/section module plan. Use these records directly; do not fill all pages with one generic repeated benefits/FAQ stack.

Where copy is marked `requires-editorial-review`, this means a draft—not a confirmed external promise. Legal pages marked `requires-legal-review` are **not publishing-ready policy texts**. Render safe, clearly labeled handoffs/preview states locally and keep them noindex until approved; never generate legally binding terms, privacy assertions, banking protections or testimonials to fill a template.

Use the `data/core/core-page.template.json` structure for future extensions. Maintain a single editorial source per page; regenerate the manifest and aggregated copy package using the included script after edits. Do not independently edit the derived manifest to change body copy.

## 4. HOME: A DISTINCTIVE FLAGSHIP, NOT A GENERIC PAGE

Render the complete contract in `data/core/core-homepage.production.json` using composed, purpose-built modules. **All 14 defined homepage sections must be present** in the intentional order with real copy and working links where verified:

1. Flagship Hero — “BUILD IT. FUND IT. OWN MORE.”
2. Operator Command Center — five mission modes FUND/BUILD/BUY/OPERATE/OFFER, stateful and accessible.
3. Mission Bento — eight distinct visitor journeys.
4. Ecosystem / property grid — coherent explanation of owner boundaries and current status.
5. Funding pathways — visible capital families with links into Funding property gateways.
6. How It Works — clear decision steps.
7. Black Lab — featured *verified* tools, no invented working calculators.
8. Industries — sectors and industry finder cross-link.
9. Acquire — buyer/seller and deal intelligence entry.
10. Marketplace — business-service preview, planned-vs-existing status and Wix Services fallback.
11. Partners — professional referrals and agency distribution without earnings guarantees.
12. Field Notes — Wix blog editorial excerpt cards with original Wix canonical URLs; verify before surfacing.
13. Wix Capabilities — blog, events, groups, bookings, courses/members as currently supported; no broken planned links.
14. Final Action Router — clear decision-specific CTAs.

**Operator Command Center acceptance:** clicking/tabbing each intent visibly changes heading, guidance and route cards. It never displays fake credit, eligibility, approval scores or financing offers, and it does not send user input anywhere. Every active action has a real, verified path or a safe local gateway.

All page interactions must be functional; no style-only buttons. Avoid forcing every module to a fixed height if that causes mobile clipping. Home metadata and H1 come from the canonical homepage and index page records, not duplicated hardcoded strings with drift.

## 5. NETWORK NAVIGATION + URL RESOLUTION

Build desktop and mobile navigation from `core.navigation.manifest.json`, **not** the entire sitemap. Provide direct, understandable paths to the flagship properties, a compact Explore mega-menu, Company and Resources menus, useful footer groups, skip links and semantic breadcrumbs where needed. Navigation is more compact than the sitemap.

Build a reusable URL resolver for references such as `prop:funding`, `prop:solutions`, `cap:wix-blog`, `cap:wix-apply` and local `/routes`:

- `prop:*` resolves through `core.ecosystem.registry.json`. If an approved live preview exists, it may be used and labeled Preview. If only future canonical host exists, **do not produce a broken active link**.
- `cap:*` resolves through `core.wix-capabilities.registry.json`. Distinguish `verified-page`, `linked-from-navigation`, `access restricted` and `unverified` statuses. The website may link to an observed current Wix page but must not claim its functionality was acceptance tested.
- With a legacy Wix link, keep the dependency explicit. `/blog` on `www.distilledfunding.com` will no longer automatically be served by Wix when Core eventually owns that hostname.
- Do not silently rewrite links to fake subdomains. Never invent Wix member, LMS or CMS route URLs.
- All cross-property destination changes should require updating one registry entry, not hundreds of components.

## 6. WIX CONTINUITY / DOMAIN TRANSITION

Wix currently controls `www.distilledfunding.com`. **DO NOT MODIFY IT.** Core is a noindex preview until explicitly approved for migration. Create a route-by-route cutover audit using the verified current links in `docs/WIX-CUTOVER-DEPENDENCIES.md`, with special attention to:

- Published and indexed `/blog` URLs and Wix dynamic content.
- Working funding intake `/apply` and associated CRM/consent.
- Partner page `/partners` and its recruitment/intake.
- Wix event `/event`, booking `/book-online`, groups `/groups`.
- Wix membership, courses, programs, forms, CMS and business data.
- Existing Wix `/about`, `/services`, `/privacy-policy` and terms routes.

Do not assume a DNS switch will preserve Wix-hosted routes. Distinguish preview routes, future Core paths, Wix paths and owner-specific specialist sites. Document feasible preservation approaches for later approval without implementing redirects, edge proxies, Wix embeds, DNS, or authentication migrations.

## 7. SEO / AEO / REVIEW STATE

- Every Core page gets unique authored title/description, semantic headings, actual canonical route identity, breadcrumb links when applicable and appropriate JSON-LD (Organization/WebSite for home; WebPage/ContactPage/AboutPage or BreadcrumbList where genuinely suitable).
- Never declare a WebPage with an unsupported formal certification, bank charter, lender license, provider rating, fake client testimonial, rate or approval claim.
- All staging pages `noindex, nofollow` only if that's the established preview convention; ordinary `noindex` with actual page metadata is acceptable. Do not block crawling so aggressively that robots never see noindex. Preview sitemap should remain empty until launch eligibility is authorized.
- Avoid canonical tags pointing at an already-live **different** Wix page as if Core content is canonical. Implement host-aware canonical policy and document launch gating.
- Support later selective indexing only through explicit hostname readiness + review state. No actual index toggle in this task.
- AEO requires useful readable answers, actual authorship/review where known, provenance and clear entity relationships; no keyword stuffing or fake FAQ blocks.

## 8. CONTENT / COPY SAFEGUARDS

Your source files contain approved **architecture and editorial direction**, not lender/provider approvals or fully approved legal disclosures. Reuse copy faithfully but don't hallucinate facts that would require underwriting/provider verification. The earlier mockups sometimes include illustrative deal metrics or sample scores; they are visual examples and cannot be represented as live data.

No invented funded volumes, pricing, guaranteed offers, approval rates, finance terms, qualifications, earnings, partner commission rules or asserted regulatory status. Distinguish broker/referral/education functions from the actual funding provider. Use real existing support paths. No forms may persist personally identifiable applicant data in this new app.

## 9. RECOMMENDED APP ORGANIZATION

Adapt proven patterns; don't create parallel infrastructure without need:

```
app/                      # Next routes, layout, 404, metadata
components/layout/        # flagship header, footer, mobile nav
components/home/          # 14 home modules and operator console
components/core/          # page-family renderers
components/navigation/    # network nav and URL resolver
components/seo/           # if needed by the chosen architecture
data/pages/               # 31 editable canonical page JSON records
data/core/                # approved manifests, home contract, registries, design tokens
lib/core/                 # schema, page loader, navigation, integrations
scripts/                  # generation, validation and route audits
tests/                    # contracts, routing, interactions, SEO/index gates
public/                   # approved static assets
styles/                   # common tokens if consistent with sibling precedent
docs/                     # source-of-truth decisions, Wix cutover, build reports
README.md                 # how to run and edit content
AGENTS.md                 # future coding agent instructions
BUILD-REPORT.md           # real QA results
```

The starter kit is source data and instructions, **not yet a working Next.js app**. Build the application around the supplied manifests without removing or overwriting them with generic sample data.

## 10. IMPLEMENTATION SEQUENCE

1. **Reconnaissance:** inspect local Core contracts, the 3 current sibling repos and Acquire if available, then existing actual navigation/SEO/script conventions; inspect design HTML for inspiration but do not inherit fake metrics.
2. **Reference reconciliation:** document source-of-truth decision once, concisely, in `docs/REFERENCE-RECONCILIATION.md`.
3. **Architecture:** build Next.js scaffold, types/schema for page contract, centralized link resolution, design system and cross-property navigation.
4. **Data:** preserve the 31 canonical pages, generate necessary runtime manifests, validate all paths and review states.
5. **Home:** implement all 14 modules as flagship, including stateful Command Center and useful integrations.
6. **Page families:** corporate editorial, distinct gateway cards, resource directories, contact handoffs and legal/trust review-state surfaces. Different needs should not all render identically.
7. **Wix handoffs:** verified URLs, owner boundaries and future cutover audit; no backend replacement.
8. **SEO, accessibility, responsive:** preview noindex, appropriate schemas, stable mobile behavior.
9. **QA:** run tests and local production build. If browser tooling available test 320px, 390px, desktop, keyboard, touch/mouse menu behavior, command mode switching, links and form handoffs.
10. **Docs and report:** README, AGENTS, stable network registry explanation, copy edit workflow, deployment and Wix cutover blockers, final build report.

Do not stop after the homepage or ask for routine step-by-step confirmation. Make minimal, reversible choices within the **local** workspace and report results. Unavailable tools are not a reason to invent test results.

## 11. ACCEPTANCE GATES (MUST TEST)

- [ ] Exactly 31 canonical Core-local routes, unique IDs, paths and metadata, no `/core/` prefix.
- [ ] 31/31 canonical page copy files loaded, with unique content and correct parent/breadcrumb relationships.
- [ ] Header/nav/footer are coherent and much smaller than full site map; no dead active link.
- [ ] 14/14 homepage modules present and visually differentiated; five mission modes update UI.
- [ ] All legal-review-required pages protected from being published as authoritative policies.
- [ ] Wix-powered blog, forms, bookings, courses, groups, members and CMS NOT rebuilt or silently migrated.
- [ ] Cross-property hrefs resolved through registries, with planned/unverified destinations not sent to nonexistent URLs.
- [ ] Lint, typecheck, content validation, tests, full production build pass **in this run**.
- [ ] HTTP route audit 31/31 = 200 (excluding legal deliberate gating if represented by local preview), unknown route = real 404.
- [ ] Responsive/keyboard/browser QA passed if tooling available; otherwise mark unverified.
- [ ] All preview pages noindex and no public sitemap advertising them.
- [ ] No GitHub push/PR, no Vercel deployment, no DNS/Wix changes, no external state changes.

## 12. DELIVERABLES

Complete local implementation + production build; source-of-truth catalog and manifests; reusable page/section renderers; functional flagship; consistent navigation; SEO and review controls; tests; README/AGENTS; Wix continuity/cutover dependency audit; `BUILD-REPORT.md` summarizing route counts, individual module coverage, actual checks, missing assets/links and blockers.

**Final answer only when the source files, 31 routes, UX and QA have been implemented.**
