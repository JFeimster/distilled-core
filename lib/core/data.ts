import sample from "@/data/pages/index.json";
import {sourcePages} from "./page-sources";
import ecosystem from "@/data/core/core.ecosystem.registry.json";
import wix from "@/data/core/core.wix-capabilities.registry.json";
export type Page = typeof sample;
export const pages: Page[] = sourcePages as Page[];
export const getPage = (route: string) => pages.find((page) => page.path === route);
export const label = (route: string) => getPage(route)?.seo.title.split(" | ")[0] ?? route;
export function resolve(target: string): { href: string | null; note: string } {
 if (target.startsWith("/")) return {href: getPage(target) ? target : null, note: ""};
 if (target.startsWith("mailto:")) return {href: target, note: "Email"};
 if (target.startsWith("prop:")) { const [id, fragment] = target.slice(5).split("#"); const p = ecosystem.properties.find((x) => x.id === id); return {href: p?.status === "preview" && p.previewUrl ? p.previewUrl + (fragment ? `#${fragment}` : "") : null, note: p?.status === "preview" ? "Preview" : "Destination not verified"}; }
 if (target.startsWith("cap:")) { const c = wix.capabilities.find((x) => x.id === target.slice(4)); return {href: c?.safeToExpose ? c.currentUrl : null, note: c ? `${c.verification.replaceAll("-", " ")} · Wix` : "Destination not verified"}; }
 return {href:null,note:"Destination not verified"};
}
