import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const PROJECTS = Object.freeze([
  { repo: 'eNgine9r/nexolab-platform', label: 'NEXOLAB' },
  { repo: 'eNgine9r/omaux', label: 'OmaUX' },
  { repo: 'eNgine9r/sellora', label: 'Sellora' },
  { repo: 'eNgine9r/chatgpt-autopilot', label: 'Autopilot' },
  { repo: 'eNgine9r/lab_test_ref_door_iso23953', label: 'DoorTest' },
]);
const DAY = 86_400_000;
const VERSION = 2;
const START = '<!-- engineering-pulse:start -->';
const END = '<!-- engineering-pulse:end -->';
const sha = value => createHash('sha256').update(value).digest('hex');
const isoDay = date => new Date(date).toISOString().slice(0, 10);
const escape = text => String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);

export function windowFor(now) {
  const end = new Date(now);
  if (!Number.isFinite(end.getTime())) throw new Error('Invalid snapshot time');
  const midnight = Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate());
  const start = midnight - 83 * DAY;
  return { start: new Date(start).toISOString(), end: end.toISOString(), dates: Array.from({ length: 84 }, (_, i) => isoDay(start + i * DAY)) };
}

async function api(path, token) {
  const url = `https://api.github.com${path}`;
  const headers = { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'eNgine9r-profile-activity' };
  if (token) headers.Authorization = `Bearer ${token}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const response = await fetch(url, { headers, signal: AbortSignal.timeout(30_000) });
    if (response.ok) return response.json();
    if ((response.status === 429 || response.status >= 500) && attempt < 2) {
      await new Promise(resolve => setTimeout(resolve, Math.min(15, Number(response.headers.get('retry-after')) || 2 ** attempt) * 1000));
      continue;
    }
    throw new Error(`GitHub HTTP ${response.status} for ${path.split('?')[0]}; previous snapshot retained`);
  }
}

export async function collectProject(project, window, request) {
  const base = `/repos/${project.repo}`;
  const metadata = await request(base);
  // Never publish statistics if a previously public project becomes private.
  if (metadata.private !== false || !metadata.default_branch) throw new Error(`Public repository required: ${project.repo}`);
  const branch = await request(`${base}/branches/${encodeURIComponent(metadata.default_branch)}`);
  const head = branch.commit?.sha;
  if (!/^[a-f0-9]{40}$/.test(head || '')) throw new Error(`Invalid branch head: ${project.repo}`);
  const seen = new Set();
  const commits = [];
  for (let page = 1; page <= 100; page++) {
    const query = new URLSearchParams({ sha: head, since: window.start, until: window.end, per_page: '100', page: String(page) });
    const batch = await request(`${base}/commits?${query}`);
    if (!Array.isArray(batch)) throw new Error(`Invalid commits response: ${project.repo}`);
    for (const commit of batch) {
      const date = commit.commit?.committer?.date;
      if (!commit.sha || !Number.isFinite(Date.parse(date))) throw new Error(`Invalid commit: ${project.repo}`);
      if (!seen.has(commit.sha)) {
        seen.add(commit.sha);
        commits.push({ sha: commit.sha, date });
      }
    }
    if (batch.length < 100) return { name: project.repo.split('/')[1], defaultBranch: metadata.default_branch, commits };
  }
  throw new Error(`Pagination limit reached: ${project.repo}; refusing incomplete statistics`);
}

export function summarize(raw, now) {
  const window = windowFor(now);
  const projects = PROJECTS.map(project => {
    const source = raw.find(p => p.name === project.repo.split('/')[1]);
    if (!source || !source.defaultBranch || !Array.isArray(source.commits)) throw new Error(`Missing project: ${project.repo}`);
    const counts = Array(84).fill(0);
    const seen = new Set();
    for (const commit of source.commits) {
      const time = Date.parse(commit.date);
      if (!commit.sha || !Number.isFinite(time)) throw new Error(`Invalid commit data: ${project.repo}`);
      if (seen.has(commit.sha)) continue;
      seen.add(commit.sha);
      if (time < Date.parse(window.start) || time > Date.parse(window.end)) continue;
      const index = window.dates.indexOf(isoDay(time));
      if (index >= 0) counts[index]++;
    }
    return { ...project, defaultBranch: source.defaultBranch, counts };
  });
  return { version: VERSION, dates: window.dates, projects };
}

export function renderCity(state, mobile = false) {
  const width = mobile ? 700 : 1440, height = mobile ? 910 : 940;
  const daily = state.dates.map((_, i) => state.projects.reduce((sum, p) => sum + p.counts[i], 0));
  const total = daily.reduce((a, b) => a + b, 0), peak = Math.max(...daily), active = daily.filter(Boolean).length;
  const f = mobile ? 26 : 24;
  const parts = [`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">`,
    '<title id="title">Engineering pulse — real project commits</title>',
    `<desc id="desc">${total} commits across five public projects, ${active} active days, peak ${peak} commits per day. ${state.dates[0]} through ${state.dates.at(-1)} UTC. Each column represents one day; height is proportional to commit count. All authors, default branches, merge commits included. Snapshot ${escape(state.generatedAt)}.</desc>`,
    '<defs><radialGradient id="back"><stop stop-color="#35224f"/><stop offset="1" stop-color="#110e1b"/></radialGradient><radialGradient id="glow"><stop stop-color="#b27bff" stop-opacity=".24"/><stop offset="1" stop-color="#b27bff" stop-opacity="0"/></radialGradient></defs>',
    `<rect width="${width}" height="${height}" rx="28" fill="url(#back)"/>`,
    `<g font-family="DejaVu Sans,Arial,sans-serif" fill="#f4f0fc">`];
  const text = (x, y, size, value, extra = '') => parts.push(`<text x="${x}" y="${y}" font-size="${size}" ${extra}>${escape(value)}</text>`);
  const left = mobile ? 36 : 56;
  text(left, mobile ? 47 : 57, mobile ? 25 : 24, 'eNgine9r / ENGINEERING PULSE', 'fill="#c7a9e8"');
  text(left, mobile ? 103 : 121, mobile ? 39 : 56, 'Code becomes a skyline.');
  text(left, mobile ? 146 : 165, f, `${state.dates[0]} — ${state.dates.at(-1)} · UTC`, 'fill="#d0c3de"');
  const metricX = mobile ? [36, 262, 464] : [56, 500, 1010];
  [total.toLocaleString('en-US'), active, peak].forEach((value, i) => {
    text(metricX[i], mobile ? 216 : 250, mobile ? 49 : 64, value);
    text(metricX[i], mobile ? 254 : 289, mobile ? 25 : 24, ['commits', 'active days', 'peak / day'][i], 'fill="#cbb9dd"');
  });
  const dx = (width - 130) / 20, dy = dx * .32;
  const base = mobile ? 424 : 445, maxHeight = mobile ? 127 : 125;
  const a = dx * .82, b = dy * .82;
  const coord = n => n.toFixed(2);
  const polygon = (points, fill) => parts.push(`<polygon points="${points.map(p => p.map(coord).join(',')).join(' ')}" fill="${fill}"/>`);
  parts.push(`<ellipse cx="${width / 2}" cy="${base + 8 * dy}" rx="${width * .44}" ry="${mobile ? 120 : 210}" fill="url(#glow)"/>`);
  // Draw back to front so taller columns occlude correctly.
  for (let depth = 0; depth <= 17; depth++) {
    for (let week = 0; week < 12; week++) {
      const day = depth - week;
      if (day < 0 || day > 6) continue;
      const i = week * 7 + day, value = daily[i];
      const x = left + (week - day + 6) * dx, y = base + (week + day) * dy;
      const h = peak ? value / peak * maxHeight : 0;
      const intensity = peak ? value / peak : 0;
      const top = value === 0 ? '#35283f' : intensity > .65 ? '#d8b4ff' : intensity > .25 ? '#b083e4' : '#8353b1';
      const side = value === 0 ? '#221b2c' : intensity > .65 ? '#a373d0' : intensity > .25 ? '#7d50ac' : '#563479';
      parts.push(`<g><title>${state.dates[i]}: ${value} ${value === 1 ? 'commit' : 'commits'}</title>`);
      polygon([[x,y-h],[x+a,y+b-h],[x+a,y+b],[x,y]], side);
      polygon([[x+a,y+b-h],[x+2*a,y-h],[x+2*a,y],[x+a,y+b]], value ? '#4c2b6b' : '#191422');
      polygon([[x,y-h],[x+a,y-b-h],[x+2*a,y-h],[x+a,y+b-h]], top);
      parts.push('</g>');
    }
  }
  const legendY = mobile ? 622 : 841;
  text(left, legendY, f, 'Less', 'fill="#cbb9dd"');
  ['#35283f', '#8353b1', '#b083e4', '#d8b4ff'].forEach((fill, i) => parts.push(`<rect x="${left + 75 + i * 24}" y="${legendY - 19}" width="17" height="17" rx="3" fill="${fill}"/>`));
  text(left + 186, legendY, f, 'More', 'fill="#cbb9dd"');
  text(width - left, legendY, f, 'Older → Today', 'fill="#cbb9dd" text-anchor="end"');
  parts.push(`<path d="M ${left} ${legendY + 23} H ${width - left}" stroke="#493456" fill="none"/>`);
  state.projects.forEach((p, i) => {
    const x = mobile ? left + (i % 3) * 215 : left + i * 267;
    const y = mobile ? 697 + Math.floor(i / 3) * 95 : 898;
    text(x, y, mobile ? 27 : 24, p.label, 'fill="#cbb9dd"');
    text(x + (mobile ? 0 : 175), y + (mobile ? 41 : 0), mobile ? 33 : 26, p.counts.reduce((a, b) => a + b, 0).toLocaleString('en-US'));
  });
  if (mobile) {
    text(left, 877, 26, `Snapshot ${state.generatedAt.slice(0,16).replace('T',' ')} UTC`, 'fill="#cbb9dd"');
  } else {
    text(width - left, 57, 23, `Snapshot ${state.generatedAt.slice(0,16).replace('T',' ')} UTC`, 'text-anchor="end" fill="#cbb9dd"');
  }
  parts.push('</g></svg>');
  return parts.join('\n') + '\n';
}

export function replaceSection(readme, section) {
  if (readme.split(START).length !== 2 || readme.split(END).length !== 2) throw new Error('Expected one Engineering Pulse marker pair');
  const start = readme.indexOf(START), end = readme.indexOf(END);
  if (start >= end) throw new Error('Invalid Engineering Pulse markers');
  return readme.slice(0, start) + section + readme.slice(end + END.length);
}

export async function update(root, raw, now) {
  const state = summarize(raw, now);
  const dataHash = sha(JSON.stringify(state));
  const assets = join(root, 'assets/activity');
  const readmePath = join(root, 'README.md');
  const readme = await readFile(readmePath, 'utf8');
  let old;
  try { old = JSON.parse(await readFile(join(assets, 'snapshot.json'), 'utf8')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (old?.dataHash === dataHash) {
    const expected = [`commit-city-${old.imageHash}.svg`, `commit-city-mobile-${old.imageHash}.svg`];
    const files = await readdir(assets);
    if (expected.every(name => files.includes(name) && readme.includes(name))) return { changed: false, state: old };
  }
  state.generatedAt = new Date(now).toISOString();
  state.dataHash = dataHash;
  const desktop = renderCity(state), mobile = renderCity(state, true);
  const imageHash = sha(desktop + mobile).slice(0, 12);
  state.imageHash = imageHash;
  const desktopName = `commit-city-${imageHash}.svg`, mobileName = `commit-city-mobile-${imageHash}.svg`;
  const total = state.projects.reduce((sum, p) => sum + p.counts.reduce((a, b) => a + b, 0), 0);
  const section = `${START}\n## Engineering pulse\n\n<picture>\n  <source media="(max-width: 600px)" srcset="./assets/activity/${mobileName}" />\n  <img src="./assets/activity/${desktopName}" alt="Engineering pulse: ${total.toLocaleString('en-US')} commits across five public projects over the last 12 weeks. Daily activity shown as an isometric skyline." width="100%" />\n</picture>\n\n<details>\n<summary>Activity scope and updates</summary>\n\nActual commits across NEXOLAB, OmaUX, Sellora, Project Autopilot and Door Test Controller. All authors; default branches; merge commits included; grouped by committer date in UTC. Private projects are omitted. This is independent of GitHub's contribution graph.\n\nChecked every 15 minutes; GitHub Actions may delay scheduled runs. A new snapshot is published when the counts or date window change. The snapshot time appears in the image. Reload the profile to see published changes.\n\n[Snapshot data](./assets/activity/snapshot.json) · [Update workflow](https://github.com/eNgine9r/eNgine9r/actions/workflows/update-activity.yml)\n\n</details>\n${END}`;
  const updated = replaceSection(readme, section);
  await mkdir(assets, { recursive: true });
  await writeFile(join(assets, desktopName), desktop);
  await writeFile(join(assets, mobileName), mobile);
  await writeFile(readmePath, updated);
  await writeFile(join(assets, 'snapshot.json'), JSON.stringify(state, null, 2) + '\n');
  // Content-addressed filenames avoid stale image URLs without endless cache-buster commits.
  for (const name of await readdir(assets)) {
    if (/^commit-city-(?:mobile-)?[a-f0-9]{12}\.svg$/.test(name) && ![desktopName, mobileName].includes(name)) await unlink(join(assets, name));
  }
  return { changed: true, state };
}

async function main() {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const fixtureIndex = process.argv.indexOf('--fixture');
  let raw, now;
  if (fixtureIndex >= 0) {
    const fixture = JSON.parse(await readFile(process.argv[fixtureIndex + 1], 'utf8'));
    raw = fixture.projects; now = new Date(fixture.capturedAt);
  } else {
    now = new Date();
    const window = windowFor(now);
    // Fetch every allowlisted public repository before touching the previous snapshot.
    raw = [];
    for (const project of PROJECTS) raw.push(await collectProject(project, window, path => api(path, process.env.GH_TOKEN)));
  }
  const result = await update(root, raw, now);
  console.log(result.changed ? 'Published local activity snapshot; ready to commit.' : 'Activity unchanged; no commit required.');
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) main().catch(error => { console.error(error.message); process.exitCode = 1; });
