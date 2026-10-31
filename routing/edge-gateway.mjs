/**
 * Distilled Core staged edge gateway — NOT ACTIVE on any production domain.
 *
 * Cloudflare Worker route (after explicit cutover approval):
 *   www.distilledfunding.com/*
 * Proxied DNS origin must remain Wix. Unknown paths and mutations go to Wix.
 * Route source of truth: the existing Core + Wix capability manifests.
 */
import core from '../data/core/core.pages.manifest.json' with { type: 'json' };
import wix from '../data/core/core.wix-capabilities.registry.json' with { type: 'json' };

const CORE_ORIGIN = 'https://distilled-core.vercel.app';
const CORE_HOST = new URL(CORE_ORIGIN).hostname;
const CORE_ROUTES = new Set(core.pages.map((page) => page.path));
const WIX_KNOWN_ROUTES = new Set(wix.capabilities.map((item) => item.path).filter(Boolean));

// /contact is reserved until its legacy ownership and integration are checked.
const UNVERIFIED_COLLISIONS = new Set(['/contact']);
const WIX_PREFIXES = [
  '/blog/', '/post/', '/groups/', '/book-online/', '/apply/',
  '/members/', '/account/', '/event/', '/_api/', '/_functions/',
  '/_functions-dev/', '/_partials/', '/_server/', '/_wix/',
];
const CORE_ASSETS = new Set(['/icon.svg']);
const CORE_ASSET_PREFIXES = ['/_next/'];

function normalize(pathname) {
  if (pathname === '/') return pathname;
  return pathname.replace(/\/+$/, '') || '/';
}

function isPrefix(pathname, prefix) {
  return pathname.startsWith(prefix) || pathname === prefix.slice(0, -1);
}

export function ownerForPath(pathname, method = 'GET') {
  if (method !== 'GET' && method !== 'HEAD') return 'wix';
  const path = normalize(pathname);
  if (WIX_KNOWN_ROUTES.has(path) || UNVERIFIED_COLLISIONS.has(path)) return 'wix';
  if (WIX_PREFIXES.some((prefix) => isPrefix(path, prefix))) return 'wix';
  if (CORE_ASSETS.has(path) || CORE_ASSET_PREFIXES.some((prefix) => isPrefix(path, prefix))) return 'core';
  return CORE_ROUTES.has(path) ? 'core' : 'wix';
}

export function listCollisions() {
  return [...CORE_ROUTES].filter((path) => WIX_KNOWN_ROUTES.has(path) || UNVERIFIED_COLLISIONS.has(path));
}

function upstreamRequest(request) {
  const target = new URL(request.url);
  target.protocol = 'https:';
  target.host = CORE_HOST;
  const headers = new Headers(request.headers);
  // Wix authentication and referral state belong only to Wix, not Vercel.
  for (const name of ['cookie', 'authorization', 'proxy-authorization', 'host']) {
    headers.delete(name);
  }
  return new Request(target, {
    method: request.method,
    headers,
    redirect: 'manual',
  });
}

export async function handleRequest(request, env, fetcher = fetch) {
  // Fail closed: default is Wix. No cutover from publishing this file.
  if (env?.CORE_ROUTING_ENABLED !== 'true') return fetcher(request);
  const incoming = new URL(request.url);
  if (ownerForPath(incoming.pathname, request.method) === 'wix') return fetcher(request);

  const response = await fetcher(upstreamRequest(request));
  const headers = new Headers(response.headers);
  headers.delete('set-cookie');
  // Next/Vercel internal absolute redirects should stay on the public domain.
  const location = headers.get('location');
  if (location) {
    const redirect = new URL(location, CORE_ORIGIN);
    if (redirect.hostname === CORE_HOST) {
      redirect.protocol = incoming.protocol;
      redirect.host = incoming.host;
      headers.set('location', redirect.toString());
    }
  }
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  },
};
