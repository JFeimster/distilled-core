# Copy, facts, and publication status

The 31 editable `data/pages/*.json` contain **substantive first-draft canonical page copy** with distinct headline, overview, problem/approach/next action, CTA and relationships. They are ready for implementation and **editorial review**, not claimed to have been approved by the company.

## Source-derived content

- The current Wix `https://www.distilledfunding.com/about` publishes Moonshine Capital's background in small business, banking and private lending and identifies hard work, problem solving and balanced leverage as company values. Adapted ideas are credited with `sourceKind=wix-about-adapted`.
- Wix `https://www.distilledfunding.com/partners` currently operates a partner page. Compensation, recruiting and earnings assertions on that page are NOT automatically carried into Core as guarantees.
- Current Wix navigation links to `/blog`, `/services`, `/apply`, `/book-online`, `/groups`, `/event`, `/privacy-policy`. Some destinations timed out or denied the crawler; those must be reverified before migration. Courses/programs/members/CMS have no verified route in this starter package.
- The three original Operator Capital HTML mockups are user-provided *visual references*; numbers and status indicators in mockups are fictional/illustrative and are NOT evidence of real approval, deals or product availability.

## Draft/generated content

- All company story and corporate voice expansions not stated on the live Wix pages are editorial drafts requiring owner's review.
- The 31 proposed paths are **planning contracts** and are not presently published on Wix or Vercel Core.
- Sitemap navigation Core routes vs Wix links must be reconciled in cutover; a future Core `/about` can compete with current Wix `/about` until ownership is resolved.
- The canonical editable page copy is under `data/pages/*.json`; `data/core/core.pages.manifest.json` and `data/core/core-copy.package.json` are derived, not independently editable content systems.

## Legal, compliance, and Wix dependency gates

`/legal`, `/privacy`, `/terms`, `/disclosures`, `/accessibility` must not be represented as approved policy documents or certified compliance statements. Specific privacy and legal terms require counsel/owner-approved source material. Editorial-friendly explanatory placeholders remain noindex.

No Wix production pages, DNS, analytics, forms, database, authentication, CMS or bookings are changed by this package.
