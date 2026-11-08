import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { classifyActionRequired, scanHistoricalRuns } from './scan-action-required.mjs';

const sha = 'a'.repeat(40);
const run = (id, conclusion) => ({
  id, conclusion, status: 'completed', head_sha: sha, name: 'CI',
  html_url: `https://github.com/example/actions/runs/${id}`, event: 'pull_request',
  created_at: '2026-10-31T12:00:00Z',
});

test('action_required cannot be mistaken for a successful job run', () => {
  const found = classifyActionRequired([run(1, 'action_required'), run(2, 'success')], { 1: 0 });
  assert.equal(found.length, 1);
  assert.equal(found[0].evidence, 'NOT_PASS');
  assert.equal(found[0].visible_jobs, 0);
  assert.equal(found[0].head_sha, sha);
});

test('partial history is explicit and a job count is read only for blocked runs', async () => {
  const urls = [];
  const report = await scanHistoricalRuns('example/repo', 1, async url => {
    urls.push(url);
    if (url.includes('/jobs?')) return { total_count: 0, jobs: [] };
    return { total_count: 200, workflow_runs: [run(1, 'action_required'), run(2, 'success')] };
  });
  assert.equal(report.history_incomplete, true);
  assert.equal(report.fetched_runs, 2);
  assert.equal(report.action_required[0].visible_jobs, 0);
  assert.equal(urls.length, 2);
  assert.match(report.note, /no reruns or approvals/);
});

test('historical job lookups are bounded without concealing uninspected runs', async () => {
  let jobRequests = 0;
  const blocked = Array.from({ length: 14 }, (_, i) => run(i + 1, 'action_required'));
  const report = await scanHistoricalRuns('example/repo', 1, async url => {
    if (url.includes('/jobs?')) {
      jobRequests++;
      return { total_count: 0, jobs: [] };
    }
    return { total_count: 14, workflow_runs: blocked };
  });
  assert.equal(jobRequests, 10);
  assert.equal(report.action_required.length, 14);
  assert.equal(report.job_counts_incomplete, true);
  assert.equal(report.action_required.at(-1).visible_jobs, null);
});
