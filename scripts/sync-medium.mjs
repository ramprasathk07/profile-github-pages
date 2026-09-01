/*
 * Polls the Medium RSS feed for new posts and appends any not already
 * present (in either medium-posts.json or the hand-curated blogdata.jsx)
 * to ui_kits/portfolio/medium-posts.json.
 *
 * Zero npm deps on purpose — the site itself has no build step, so the
 * sync script stays a plain Node script runnable in CI with nothing to
 * install. RSS is regex-parsed rather than XML-parsed; Medium's feed
 * shape is stable enough for this, but a malformed/changed feed will
 * just yield zero matches (safe no-op) rather than a crash.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const FEED_URL = 'https://medium.com/feed/@ramk612000';
const POSTS_JSON = new URL('../ui_kits/portfolio/medium-posts.json', import.meta.url);
const BLOGDATA_JSX = new URL('../ui_kits/portfolio/blogdata.jsx', import.meta.url);

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
}

function canonicalize(link) {
  try {
    const u = new URL(link);
    u.search = '';
    return u.toString();
  } catch {
    return link;
  }
}

function slugify(link) {
  const path = new URL(link).pathname.split('/').filter(Boolean).pop() || '';
  return path.replace(/-[a-f0-9]{12}$/i, '').slice(0, 60) || 'post';
}

function formatDate(pubDate) {
  const d = new Date(pubDate);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function truncate(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return cut.slice(0, lastSpace > 0 ? lastSpace : max) + '…';
}

function readingTimeFor(text) {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200)) + ' min read';
}

async function main() {
  const res = await fetch(FEED_URL, { headers: { 'User-Agent': 'portfolio-sync-bot' } });
  if (!res.ok) throw new Error('Medium RSS fetch failed: ' + res.status);
  const xml = await res.text();

  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  if (items.length === 0) {
    console.log('No items parsed from feed — nothing to do.');
    return;
  }

  const existingUrls = new Set();

  // hand-curated posts already in blogdata.jsx
  if (existsSync(BLOGDATA_JSX)) {
    const src = readFileSync(BLOGDATA_JSX, 'utf8');
    for (const m of src.matchAll(/mediumUrl:\s*'([^']+)'/g)) existingUrls.add(canonicalize(m[1]));
  }

  // previously auto-synced posts
  let known = [];
  if (existsSync(POSTS_JSON)) {
    known = JSON.parse(readFileSync(POSTS_JSON, 'utf8'));
    for (const p of known) existingUrls.add(canonicalize(p.mediumUrl));
  }

  const added = [];
  for (const block of items) {
    const title = (block.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/) || [])[1]?.trim();
    const link = (block.match(/<link>([\s\S]*?)<\/link>/) || [])[1]?.trim();
    const pubDate = (block.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || [])[1]?.trim();
    const description = (block.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/) || [])[1] || '';
    const contentEncoded = (block.match(/<content:encoded>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/content:encoded>/) || [])[1] || '';

    if (!title || !link || !pubDate) continue;
    const canonical = canonicalize(link);
    if (existingUrls.has(canonical)) continue;

    const bodyText = stripTags(contentEncoded || description);
    // Medium's <description> is often empty on these feeds; fall back to
    // the article body's opening line for the dek.
    const dekSource = stripTags(description) || bodyText;

    const entry = {
      slug: slugify(canonical),
      // Medium's own <category> tags are free-text author tags, not a
      // controlled vocabulary ("moe", "mls", "lora"...) — they don't map
      // cleanly onto this site's topic taxonomy, so default generically
      // and let a human retag on PR review rather than guess wrong.
      topic: 'Writing',
      title,
      dek: truncate(dekSource, 200),
      date: formatDate(pubDate),
      isoDate: new Date(pubDate).toISOString(),
      readingTime: readingTimeFor(bodyText || dekSource),
      mediumUrl: canonical,
    };
    added.push(entry);
    existingUrls.add(canonical);
  }

  if (added.length === 0) {
    console.log('No new Medium posts.');
    return;
  }

  const merged = [...added, ...known];
  writeFileSync(POSTS_JSON, JSON.stringify(merged, null, 2) + '\n');
  console.log('Added ' + added.length + ' new post(s):');
  for (const a of added) console.log('  - ' + a.title + ' (' + a.date + ')');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
