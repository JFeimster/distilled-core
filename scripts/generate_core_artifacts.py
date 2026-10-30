"""Regenerate Core route index, full copy bundle, and sitemap from data/pages/.

This script reads canonical copy. It does NOT touch Wix, the internet or other repos.
"""
from pathlib import Path
from collections import Counter
import json

ROOT=Path(__file__).resolve().parents[1]
paths=list((ROOT/'data/pages').glob('*.json'))
records=[json.loads(p.read_text(encoding='utf-8')) for p in paths]
original=ROOT/'data/core/core.pages.manifest.json'
existing=json.loads(original.read_text(encoding='utf-8'))
order={p['path']:i for i,p in enumerate(existing['pages'])}
records.sort(key=lambda r:(order.get(r['path'],9999),r['path']))
entries=[]
for r in records:
 entries.append({'id':r['id'],'path':r['path'],'label':r['seo']['title'].split(' | ')[0],'pageType':r['pageType'],'family':r['family'],'parentPath':r['parentPath'],'file':r['sourceFile'],'status':r['status'],'reviewStatus':r['review']['status'],'indexStatus':r['indexStatus'],'title':r['seo']['title'],'description':r['seo']['description'],'hero':r['hero'],'relatedPaths':r['relatedPaths'],'cta':r['cta']})
existing['pages']=entries
existing['totalPages']=len(entries)
existing['pageFamilies']=dict(Counter(r['family'] for r in records))
original.write_text(json.dumps(existing,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
(RootCopy:=ROOT/'data/core/core-copy.package.json').write_text(json.dumps({'schemaVersion':'1.0','purpose':'Generated canonical copy bundle; edit data/pages/*.json instead','totalPages':len(records),'pages':records},indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
sections=[('home','HOMEPAGE'),('company','COMPANY'),('contact','CONTACT'),('explore','EXPLORE THE NETWORK'),('resources','RESOURCES'),('partners','PARTNER GATEWAY'),('legal','LEGAL / TRUST')]
lines=['DISTILLED CORE — COMPLETE CANONICAL SITE MAP','Intended host: https://www.distilledfunding.com','Current host owner: Wix. Preview noindex. No migration authorized.','These 31 paths are Core-local path proposals, not live destinations.','']
for fam,head in sections:
 lines.append(f'[{head}]')
 for r in records:
  if r['family']==fam:lines.append(f"{r['path']:<31} {r['seo']['title'].split(' | ')[0]} [{r['pageType']}]"+(' [LEGAL REVIEW REQUIRED]' if r['review']['status']=='requires-legal-review' else ''))
 lines.append('')
lines+=['WIX OWNERSHIP / HANDOFFS','Keep live Wix Blog, Events, Bookings, Groups, Members, Courses, Programs, Forms, CMS and Business Data operational.','These are capability links, NOT duplicates in this 31-route Core sitemap. See core.wix-capabilities.registry.json.','',f'TOTAL CORE-LOCAL ROUTES: {len(records)}','']
(ROOT/'CANONICAL-SITEMAP.txt').write_text('\n'.join(lines),encoding='utf-8')
print(f'Generated {len(entries)} page manifest entries and copy bundle; updated sitemap.')
