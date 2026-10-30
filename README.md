# Distilled Core

Local, noindex corporate flagship for the Distilled network. Wix remains the current production owner of the root hostname and its operational capabilities. This application has not been deployed or authorized for cutover.

## Run

Requires Node 22+ and Python 3. `npm install`, then `npm run dev`. Verify with `npm run check` (contract validation, lint, typecheck, tests, and production build); `npm start` serves the production build. `sitemap.xml` is intentionally empty, and all pages emit noindex/nofollow. No canonical host is emitted in preview; a future launch requires an explicitly reviewed, host-aware canonical and indexing policy.

## Copy and routes

The 31 `data/pages/*.json` files are the editable page sources. Edit those records, then run `python scripts/generate_core_artifacts.py` and `npm run validate`. The route manifest and copy package are derived; do not edit their page copy independently. `lib/core/page-sources.ts` statically imports the 31 source records for build tracing; if the route contract is intentionally revised in a future task, update those imports alongside the manifest. `core-homepage.production.json` owns the 14 homepage modules and mission paths. Navigation comes from `core.navigation.manifest.json`. The resolver in `lib/core/data.ts` uses the ecosystem and Wix capability registries; only approved preview properties and Wix records marked safe to expose become active external links. Planned or unverified destinations render as status text.

Legal pages are draft handoffs requiring review, not approved policies. See `docs/COPY-STATUS.md`, `docs/REFERENCE-RECONCILIATION.md`, and `docs/WIX-CUTOVER-DEPENDENCIES.md` before any publication decision. No applicant data is stored by this app.
