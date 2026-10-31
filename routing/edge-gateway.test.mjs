import test from 'node:test';
import assert from 'node:assert/strict';
import { handleRequest, ownerForPath, listCollisions } from './edge-gateway.mjs';
import core from '../data/core/core.pages.manifest.json' with { type: 'json' };
import wix from '../data/core/core.wix-capabilities.registry.json' with { type: 'json' };

const base = 'https://www.distilledfunding.com';
const requests = [];
const fetcher = async (request) => {
  requests.push({ url: request.url, cookie: request.headers.get('cookie'), authorization: request.headers.get('authorization') });
  return new Response('OK', {status: 200, headers: {'content-type': 'text/plain', 'set-cookie': 'upstreamCookie=bad'}});
};

test('unapproved routing fails closed to Wix even for the homepage', async () => {
  requests.length = 0;
  await handleRequest(new Request(base + '/'), {}, fetcher);
  assert.equal(requests[0].url, base + '/');
});

test('approved homepage, Core explorer and Next assets go directly to Vercel', async () => {
  for (const path of ['/', '/explore', '/explore/funding', '/_next/static/a.css', '/_next/image?url=%2Flogo.png', '/icon.svg']) {
    requests.length = 0;
    await handleRequest(new Request(base + path), { CORE_ROUTING_ENABLED: 'true' }, fetcher);
    assert.equal(new URL(requests[0].url).hostname, 'distilled-core.vercel.app', path);
  }
});

test('Wix business URLs and existing colliding pages remain on Wix', async () => {
  const paths = ['/about', '/partners', '/contact', '/blog', '/blog/hello', '/post/business-credit-reporting-timeline', '/apply', '/book-online', '/groups', '/groups/example', '/event', '/members', '/_api/mcp', '/_functions/intake', '/privacy-policy', '/sitemap.xml', '/robots.txt', '/unlisted-wix-page'];
  for (const path of paths) {
    requests.length = 0;
    await handleRequest(new Request(base + path), { CORE_ROUTING_ENABLED: 'true' }, fetcher);
    assert.equal(new URL(requests[0].url).hostname, 'www.distilledfunding.com', path);
  }
});

test('non-GET requests never leave Wix regardless of path', async () => {
  requests.length = 0;
  await handleRequest(new Request(base + '/explore', {method: 'POST', body: 'sensitive'}), {CORE_ROUTING_ENABLED:'true'}, fetcher);
  assert.equal(requests[0].url, base + '/explore');
});

test('Wix session information is never forwarded to Vercel', async () => {
  requests.length = 0;
  const res = await handleRequest(new Request(base + '/explore', {headers:{cookie:'wix-session=secret', authorization:'Bearer secret'}}), {CORE_ROUTING_ENABLED:'true'}, fetcher);
  assert.equal(requests[0].cookie, null);
  assert.equal(requests[0].authorization, null);
  assert.equal(res.headers.get('set-cookie'), null);
});

test('all 31 existing Core routes are classified and route ownership is explicit', () => {
  assert.equal(core.pages.length, 31);
  assert.deepEqual(listCollisions().sort(), ['/about', '/contact', '/partners']);
  const wixRoutes = new Set(wix.capabilities.map((x)=>x.path).filter(Boolean));
  for (const page of core.pages) {
    assert.equal(ownerForPath(page.path), wixRoutes.has(page.path) || page.path==='/contact' ? 'wix' : 'core', page.path);
  }
});
