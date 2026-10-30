# Distilled Core — canonical build starter (not the generated app)

## What this kit contains

- `docs/MASTER-CORE-BUILD-PROMPT.md`: detailed Codex implementation instructions.
- `CORE-COMPLETE-HEADER-MENU-PAGE.txt`: usable corporate header and all page paths.
- `CANONICAL-SITEMAP.txt`: exact 31 Core-local routes.
- `data/pages/*.json`: the **editable canonical copy package** for all 31 routes.
- `data/core/core.pages.manifest.json`: derived compact route/copy index.
- `data/core/core-homepage.production.json`: detailed 14-section home composition, 8 mission cards and five working modes.
- `data/core/core-page.template.json` and `core-page.schema.json`: page contract/schema.
- `data/core/core.navigation.manifest.json`: curated header mega-menus and footer.
- `data/core/core.ecosystem.registry.json`: canonical ownership and launch/previews.
- `data/core/core.wix-capabilities.registry.json`: current Wix capability handoffs and verification status.
- `data/core/core.design-system.json`: style tokens and design precedents.
- `docs/WIX-CUTOVER-DEPENDENCIES.md` and `docs/COPY-STATUS.md`: migration and editorial status.
- `_reference/design/`: three original supplied Operator Capital HTML designs, ignored from Git.
- `scripts/generate_core_artifacts.py` and `scripts/validate_core_contract.py`: stdlib-only deterministic checks.
- `SETUP-DISTILLED-CORE.ps1`: non-destructive local workspace bootstrap into the user's desired Windows folder.

## Quick start

1. Extract this kit to an empty folder, such as Downloads.
2. Run in PowerShell in the extracted kit folder:
   `powershell -NoProfile -ExecutionPolicy Bypass -File .\SETUP-DISTILLED-CORE.ps1`
3. Open the target `distilled-core` in VS Code and launch **Codex Chat**.
4. Use this kickoff:

```text
Read and execute docs/MASTER-CORE-BUILD-PROMPT.md in full.
The source copy is data/pages/*.json; manifests are derived. Treat the three
current sibling sites as the design/engineering precedents. Build the complete
31-route Distilled Core flagship with all 14 home modules, working navigation,
5-mode operator console, Wix handoffs and noindex staging. Do not change Wix,
DNS or other repos, and do not deploy or push. Run real build/tests and report.
```

## Validate this starter package

`python scripts/validate_core_contract.py`

After editing page records, regenerate manifest, sitemap and aggregated copy package:

`python scripts/generate_core_artifacts.py`

The application and its `README.md` are produced by Codex later. This is a source and instruction package, not a deployed site or completed Next.js build.
