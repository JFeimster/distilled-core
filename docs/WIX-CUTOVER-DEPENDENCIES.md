# Wix -> Distilled Core: preserved capabilities / cutover blockers

**State:** planning only. Wix controls `www.distilledfunding.com` now. The new Next.js app is a noindex preview and must not change Wix.

## Observed public paths (October 30, 2026)

| Capability | Current URL | Evidence state | Cutover action |
|---|---|---|---|
| Corporate About | https://www.distilledfunding.com/about | Page reviewed | Decide whether route moves to Core with content QA |
| Blog | https://www.distilledfunding.com/blog | Page reviewed | Keep Wix URLs through an approved reverse-proxy/subdomain/redirect plan; no blanket redirects |
| Events | https://www.distilledfunding.com/event | Page reviewed; no events visible at inspection | Retain platform; verify canonical route after cutover |
| Funding application | https://www.distilledfunding.com/apply | Page reviewed | Preserve intake destination, consent, and downstream routing; do NOT repoint speculatively |
| Partner page | https://www.distilledfunding.com/partners | Page reviewed | Preserve recruitment/referral intake and program rules |
| Book Online | https://www.distilledfunding.com/book-online | Linked in Wix header; page fetch timed out | Verify bookings availability and destination |
| Groups | https://www.distilledfunding.com/groups | Linked in Wix header; access restricted to crawler | Verify login/session and sharing URLs |
| Services | https://www.distilledfunding.com/services | Linked in Wix header; page fetch timed out | Preserve until Marketplace replaces its function |
| Privacy Policy | https://www.distilledfunding.com/privacy-policy | Linked in Wix header; content not audited | Obtain approved policy and legal sign-off |
| Courses / Programs / Members | Unknown | Present as platform capabilities; URLs not verified | Inventory real pages and authentication behavior |
| Wix CMS / business data | No public route assumed | Backend/operational systems | Do not migrate data without explicit approval and a data map |

## Launch gate

1. Inventory full Wix URL set using Wix site/cms APIs or export, page titles, metadata, canonical URLs and traffic.
2. Decide route-level owner: Core vs Wix vs specialist site, especially `/about`, `/partners`, `/apply`, `/blog`, `/event`, `/book-online`, `/groups`, `/services`.
3. Preserve paths through verified routing architecture (not a guessed generic redirect), with special handling for Wix login/member and dynamic pages.
4. Confirm Google Search Console ownership and staged sitemaps, robots, correct canonical URLs, accurate 301/308 redirects only for actually moved content.
5. Confirm forms, consent, HubSpot/Tally flows, analytics and referral attribution before switching hosts.
6. Obtain counsel approval for privacy, terms, disclosures and cookies before publishing new policies.
7. Separate explicit authorization required for DNS, Vercel domain attachment, indexing, Wix edits, redirects and operational migrations.

**Do not infer that Wix CMS or bookings survive automatically when the hostname points to Vercel.**

## Additional local-build checks (October 30, 2026)

Read-only HEAD requests returned 200 for the Funding, Solutions, Industries and Acquire preview roots and current Wix `/blog`, `/event`, `/services`, `/apply`, and `/partners`. This is reachability only, not functional, authenticated, consent, CRM or intake proof. Acquire remains marked unverified in the registry and is not exposed as an active external handoff. The Industries finder was separately exercised with a `contractor` search and returned seven results. Two original Wix article pages were inspected for the home editorial summaries: `/post/business-credit-reporting-timeline` and `/post/ai-cash-flow-stress-test-for-local-businesses`; their paths remain Wix dependencies.

| Route or system | Future ownership decision and proof required |
|---|---|
| `/blog` and each `/post/*` | Inventory published URLs and canonical metadata; preserve original article paths and dynamic content through an approved routing architecture. |
| `/apply` | Retain working intake and verify a signed submission, consent, attribution and CRM projection before changing routing. |
| `/partners` | Resolve collision with Core's proposed local page; preserve the actual Wix enrollment process and program terms. |
| `/event`, `/book-online`, `/groups` | Confirm events, booking and authenticated group flows independently; routing alone is insufficient. |
| `/about`, `/services` | Decide which content moves and preserve service functionality until an approved replacement exists. |
| `/privacy-policy` and existing terms | Inventory current policy URLs, establish applicable policies, and obtain legal review; Core draft pages are not approved policies. |
| Courses, programs, members, forms, CMS and business data | Inventory real paths, permissions, identity, integrations and data dependencies; no destination or migration is assumed. |

Potential approaches for later review include preserving Wix on a separately verified host with carefully scoped redirects, or a tested route-level proxy where platform and authentication constraints allow it. Neither has been implemented or approved. No solution may be assumed to preserve login, embedded forms, dynamic pages or attribution without end-to-end proof.
