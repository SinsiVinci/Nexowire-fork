import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { summarizeRuns, getExactHeadEvidence } from '../../../scripts/delegated/k13/summarize-ci.mjs';

const head = 'a'.repeat(40);
const other = 'b'.repeat(40);
const run = (id, conclusion = 'success', sha = head) => ({
  id, head_sha: sha, status: 'completed', conclusion, html_url: `https://github.com/example/run/${id}`, name: 'CI',
});
const job = (conclusion = 'success') => ({
  name: 'check', status: 'completed', conclusion, html_url: 'https://github.com/example/job/1',
});

test('exact-head green run with actual successful job is evidence', () => {
  const result = summarizeRuns([run(1), run(2, 'success', other)], { 1: [job()] }, head);
  assert.equal(result.length, 1);
  assert.equal(result[0].evidence, 'PASS');
  assert.equal(result[0].head_sha, head);
});

test('action_required and zero-job apparent success are not PASS', () => {
  const result = summarizeRuns([run(1, 'action_required'), run(2)], { 1: [], 2: [] }, head);
  assert.deepEqual(result.map(r => r.evidence), ['NO_JOB_PROOF', 'NO_JOB_PROOF']);
});

test('failure, running and missing jobs cannot turn green', () => {
  const running = { ...run(1), status: 'in_progress', conclusion: null };
  const result = summarizeRuns([running, run(2)], { 1: [job()], 2: [job('failure')] }, head);
  assert.deepEqual(result.map(r => r.evidence), ['NOT_PASS', 'NOT_PASS']);
});

test('truncated job pages fail closed', async () => {
  const response = await getExactHeadEvidence('example/repo', head, async url => {
    if (url.includes('/runs?')) return { workflow_runs: [run(1)] };
    return { total_count: 101, jobs: [job()] };
  });
  assert.equal(response[0].evidence, 'NOT_PASS');
  assert.equal(response[0].jobs.at(-1).name, 'TRUNCATED_JOB_LIST');
});
