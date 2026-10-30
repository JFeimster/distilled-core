"""Zero-dependency validation of the supplied Core canonical content package."""
import json
from collections import Counter
from pathlib import Path
R=Path(__file__).resolve().parents[1]
def load(name):return json.loads((R/name).read_text(encoding='utf-8'))
manifest=load('data/core/core.pages.manifest.json')
nav=load('data/core/core.navigation.manifest.json')
wix=load('data/core/core.wix-capabilities.registry.json')
properties=load('data/core/core.ecosystem.registry.json')
home=load('data/core/core-homepage.production.json')
copy=load('data/core/core-copy.package.json')
rows=manifest['pages'];errors=[];paths={r['path'] for r in rows}
def check(condition,message):
 if not condition:errors.append(message)
check(len(rows)==31,f'Expected 31 routes; got {len(rows)}')
check(len(paths)==len(rows),'Duplicate paths')
check(len({r['id'] for r in rows})==len(rows),'Duplicate page IDs')
check(len(copy['pages'])==len(rows),'Copy bundle does not match page count')
check(len(home['sections'])==14,'Homepage is not 14 sections')
check(len(home['commandCenter']['modes'])==5,'Must have five operator modes')
check(len({s['id'] for s in home['sections']})==14,'Duplicate homepage modules')
check({m['id'] for m in home['commandCenter']['modes']}=={'fund','build','buy','operate','offer'},'Incorrect modes')
check(len(home['missionCards'])==8,'Eight required mission cards')
check(home['indexStatus']=='noindex','Homepage indexing enabled')
ids={w['id'] for w in wix['capabilities']};propids={p['id'] for p in properties['properties']}
for r in rows:
 check(r['indexStatus']=='noindex',f"Indexing enabled: {r['path']}")
 check(r['path']=='/' or r['path'].startswith('/'),f"Bad path: {r['path']}")
 check(not r['path'].startswith('/core/'),f"Accidental /core prefix: {r['path']}")
 check(r['parentPath'] is None or r['parentPath'] in paths,f"Invalid parent: {r['path']}")
 check(len(r['title'])>12 and len(r['description'])>40,f"Weak title/description: {r['path']}")
 check(len(r['hero']['headline'])>12,f"Missing headline: {r['path']}")
 check(len(r['relatedPaths'])==len(set(r['relatedPaths'])),f"Duplicate relations: {r['path']}")
 check(all(x in paths for x in r['relatedPaths']),f"Broken relation: {r['path']}")
 target=r['cta']['target']
 if target.startswith('cap:'):check(target[4:] in ids,f"Unknown Wix capability {target}")
 elif target.startswith('prop:'):check(target[5:] in propids,f"Unknown property {target}")
 elif target.startswith('/'):check(target in paths,f"Broken CTA {r['path']} -> {target}")
 else:check(target.startswith('mailto:'),f"Unrecognized CTA {r['path']} -> {target}")
 page=load(r['file'])
 check(page['path']==r['path'] and page['id']==r['id'],f"Source/index mismatch for {r['path']}")
 check(page['parentPath']==r['parentPath'],f"Parent mismatch for {r['path']}")
 check(page['seo']['canonicalPath']==r['path'],f"Canonical mismatch for {r['path']}")
 check(len(page['content']['sections'])>=3,f"Insufficient copy for {r['path']}")
 check(all(len(x['body'])>100 for x in page['content']['sections']),f"Thin copy section for {r['path']}")
 if r['family']=='legal':check(r['reviewStatus']=='requires-legal-review' and not page['seo']['publishable'],f"Legal review gate missing for {r['path']}")
check(not any(p.get('status')=='live' and p.get('id')=='core' for p in properties['properties']),'Core is mistakenly live')
for n in nav['primary']:
 check(n['href'] in paths, f"Broken nav href {n['href']}")
for n in nav['menus']:
 for col in n['columns']:
  for link in col.get('links',[]):check(link in paths,f'Broken nav menu link: {link}')
  for cid in col.get('capabilities',[]):check(cid in ids,f'Unknown menu capability {cid}')
for x in home['sections']:
 for a in x['ctas']:
  check(a['target'] in paths,f"Broken homepage CTA: {a['target']}")
for x in home['missionCards']:check(x['target'] in paths,f"Broken mission: {x['target']}")
for m in home['commandCenter']['modes']:
 for path in m['paths']:check(path['target'] in paths,f"Broken mode route {path['target']}")
print('Pages:',len(rows),'Homepage modules:',len(home['sections']),'Modes:',len(home['commandCenter']['modes']),'Wix capabilities:',len(ids),'Properties:',len(propids))
if errors:
 for err in errors:print('ERROR:',err)
 raise SystemExit(f'VALIDATION FAILED: {len(errors)} errors')
print('PASS: canonical routes, copy, review states, navigation, homepage and registries')
