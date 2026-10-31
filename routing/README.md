# Distilled Core — full-bleed routing (STAGED, NOT LIVE)

This is an inactive Cloudflare Worker gateway for the existing Vercel-hosted Next.js site. It does not embed, iframe, rewrite or rebuild the homepage.

## Routing contract

- Cloudflare Worker Route, after a separately approved DNS/cutover: www.distilledfunding.com/*
- Requests for Core paths in the existing 31-page Core manifest go to the Vercel origin.
- Existing Wix paths have precedence. Unknown paths, form submissions and all non-GET/HEAD traffic go to the Wix DNS origin unchanged.
- Existing Wix cookies and authorization credentials are never forwarded to Vercel.
- Core static asset requests under /_next/ go to Vercel.
- Import route ownership from the EXISTING data/core manifests; no parallel page registry.
- CORE_ROUTING_ENABLED defaults OFF. No route changes occur merely because this file exists.

Known collisions: /about and /partners exist on both Core and Wix. /contact is conservatively reserved for Wix until its legacy ownership is confirmed. No new routing can be activated until the collisions and navigation behavior are explicitly accepted.

## Current blockers

1. The domain is on Wix nameservers. Cloudflare account has NO zone for distilledfunding.com. A Cloudflare Worker Route requires a verified zone and proxied DNS origin; no DNS or Cloudflare state was changed.
2. All Core pages currently emit noindex/nofollow unconditionally and its sitemap is empty. Public SEO readiness requires explicit independent validation and an approved index change; preserve existing Wix /robots.txt and /sitemap.xml until then.
3. Wix blog, post URLs, partner/apply, booking, groups, membership, authentication, analytics and referral continuity must be tested through a real proxy and browser, not just by mocks.
4. Existing Wix and Core route collisions, legacy route inventory and rollback must be resolved.
5. No full cutover until 320px, 390px and 1440px full-bleed visual acceptance and 5 Command Center modes pass.

## Tests

From repo root: node --test routing/edge-gateway.test.mjs

This commit DOES NOT create a Cloudflare zone or Worker, edit Vercel config, deploy any routing, move DNS, modify Wix or enable indexing. Keep Vercel auto-deployment of the existing site as-is.
