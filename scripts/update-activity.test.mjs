import assert from 'node:assert/strict';
import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { collectProject, PROJECTS, renderCity, replaceSection, summarize, update, windowFor } from './update-activity.mjs';

const now = new Date('2026-10-08T19:22:31Z');
const empty = () => PROJECTS.map(p => ({ name: p.repo.split('/')[1], defaultBranch: 'main', commits: [] }));
const commit = (sha, date) => ({ sha, date });

test('84 UTC days include both endpoints, deduplicate SHAs and exclude out-of-window dates', () => {
  const window = windowFor(now);
  assert.equal(window.dates.length, 84);
  assert.equal(window.dates[0], '2026-07-17');
  assert.equal(window.dates.at(-1), '2026-10-08');
  const data = empty();
  data[0].commits = [commit('a', window.start), commit('a', window.start), commit('b', window.end), commit('c', '2026-07-16T23:59:59Z'), commit('d', '2026-10-08T19:22:32Z')];
  const state = summarize(data, now);
  assert.equal(state.projects[0].counts[0], 1);
  assert.equal(state.projects[0].counts[83], 1);
  assert.equal(state.projects[0].counts.reduce((a, b) => a + b), 2);
  assert.equal(state.projects.length, 5);
});

test('a repository allowlist prevents unrelated and private projects entering totals', () => {
  const data = empty();
  data.push({ name: 'unrelated-project', defaultBranch: 'main', commits: [commit('x', now.toISOString())] });
  const state = summarize(data, now);
  assert.equal(state.projects.reduce((s, p) => s + p.counts.reduce((a, b) => a + b), 0), 0);
  assert.throws(() => summarize(data.slice(1), now), /Missing project/);
});

test('pagination uses a pinned branch head and fetches beyond the first 100 commits', async () => {
  const paths = [];
  const head = 'a'.repeat(40);
  const request = async path => {
    paths.push(path);
    if (path === '/repos/eNgine9r/nexolab-platform') return { private: false, default_branch: 'release/main' };
    if (path.includes('/branches/')) return { commit: { sha: head } };
    const query = new URL('https://api.github.com' + path).searchParams;
    assert.equal(query.get('sha'), head);
    assert.equal(query.get('until'), now.toISOString());
    const page = Number(query.get('page'));
    return Array.from({ length: page === 1 ? 100 : 1 }, (_, i) => ({ sha: String(page * 100 + i), commit: { committer: { date: now.toISOString() } } }));
  };
  const collected = await collectProject(PROJECTS[0], windowFor(now), request);
  assert.equal(collected.commits.length, 101);
  assert(paths.includes('/repos/eNgine9r/nexolab-platform/branches/release%2Fmain'));
});

test('API errors and a public-to-private change fail instead of publishing zeroes', async () => {
  await assert.rejects(collectProject(PROJECTS[0], windowFor(now), async () => ({ private: true, default_branch: 'main' })), /Public repository required/);
  await assert.rejects(collectProject(PROJECTS[0], windowFor(now), async () => { throw new Error('HTTP 403'); }), /HTTP 403/);
});

test('renderer handles an empty or peak-heavy window with 84 complete columns', () => {
  for (const mobile of [false, true]) {
    for (const heavy of [false, true]) {
      const data = empty();
      if (heavy) data[0].commits = Array.from({ length: 250 }, (_, i) => commit(String(i), now.toISOString()));
      const state = { ...summarize(data, now), generatedAt: now.toISOString() };
      const svg = renderCity(state, mobile);
      assert(!/NaN|Infinity|undefined/.test(svg));
      assert.equal((svg.match(/<polygon /g) || []).length, 252);
      assert.equal((svg.match(/<g><title>/g) || []).length, 84);
      assert(!/<script|<foreignObject|href=/.test(svg));
      const [, width, height] = svg.match(/width="(\d+)" height="(\d+)"/).map(Number);
      for (const mark of svg.matchAll(/points="([^"]+)"/g)) {
        for (const pair of mark[1].split(' ')) {
          const [x, y] = pair.split(',').map(Number);
          assert(x >= 0 && x <= width);
          assert(y >= 290 && y <= height);
        }
      }
    }
  }
});

test('README edits are bounded by exactly one marker pair', () => {
  const old = 'before\n<!-- engineering-pulse:start -->old<!-- engineering-pulse:end -->\nafter';
  assert.equal(replaceSection(old, 'replacement'), 'before\nreplacement\nafter');
  assert.throws(() => replaceSection('missing markers', 'x'), /marker pair/);
  assert.throws(() => replaceSection(old + old, 'x'), /marker pair/);
});

test('unchanged counts create no commits; changed counts create new image URLs and prune old files', async () => {
  const root = await mkdtemp(join(tmpdir(), 'engine-profile-test-'));
  try {
    await writeFile(join(root, 'README.md'), 'intro\n<!-- engineering-pulse:start -->\n<!-- engineering-pulse:end -->\nfooter\n');
    const data = empty();
    const first = await update(root, data, now);
    assert(first.changed);
    const original = await readFile(join(root, 'README.md'), 'utf8');
    const second = await update(root, data, new Date('2026-10-08T20:22:31Z'));
    assert.equal(second.changed, false);
    assert.equal(await readFile(join(root, 'README.md'), 'utf8'), original);
    assert.equal(second.state.generatedAt, first.state.generatedAt);
    data[0].commits.push(commit('new', now.toISOString()));
    const third = await update(root, data, now);
    assert(third.changed);
    assert.notEqual(third.state.imageHash, first.state.imageHash);
    const files = await readdir(join(root, 'assets/activity'));
    assert.equal(files.length, 3);
    const current = await readFile(join(root, 'README.md'), 'utf8');
    assert(current.includes(third.state.imageHash));
    assert(!current.includes(first.state.imageHash));
    const invalid = empty(); invalid[0].commits.push(commit('bad', 'invalid-date'));
    await assert.rejects(update(root, invalid, now), /Invalid commit data/);
    assert.equal(await readFile(join(root, 'README.md'), 'utf8'), current);
    assert((await update(root, data, new Date('2026-10-09T00:00:00Z'))).changed);
  } finally { await rm(root, { recursive: true, force: true }); }
});
