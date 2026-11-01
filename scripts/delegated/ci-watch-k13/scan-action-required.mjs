import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// This is historical discovery, not approval or a replacement for exact-head CI.
export function classifyActionRequired(runs, jobCounts = {}) {
  return runs
    .filter(run => run.conclusion === 'action_required')
    .map(run => ({
      run_id: run.id,
      url: run.html_url,
      workflow: run.name,
      event: run.event,
      head_sha: run.head_sha,
      created_at: run.created_at,
      conclusion: 'action_required',
      visible_jobs: jobCounts[run.id] ?? null,
      evidence: 'NOT_PASS',
    }));
}

async function getJson(url) {
  const response = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'nexowire-ci-watch-readonly' },
    signal: AbortSignal.timeout(12_000),
  });
  if (!response.ok) throw new Error(`GitHub HTTP ${response.status}: ${url}`);
  return response.json();
}

export async function scanHistoricalRuns(repo, pages = 1, get = getJson) {
  const base = `https://api.github.com/repos/${repo}/actions/runs`;
  const observed = [];
  let reportedTotal = null;
  for (let page = 1; page <= pages; page++) {
    const result = await get(`${base}?per_page=100&page=${page}`);
    reportedTotal = result.total_count ?? reportedTotal;
    const current = result.workflow_runs ?? [];
    observed.push(...current);
    if (current.length < 100) break;
  }
  const candidates = observed.filter(run => run.conclusion === 'action_required');
  const jobCounts = {};
  for (const run of candidates) {
    const result = await get(`${base}/${run.id}/jobs?per_page=1`);
    jobCounts[run.id] = result.total_count ?? null;
  }
  return {
    repo,
    fetched_runs: observed.length,
    repository_reported_total: reportedTotal,
    history_incomplete: reportedTotal === null || observed.length < reportedTotal,
    action_required: classifyActionRequired(observed, jobCounts),
    note: 'Historical snapshot only. action_required is never PASS; no reruns or approvals performed.',
  };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const repo = process.argv[2];
  const pages = Number(process.argv[3] ?? '1');
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo ?? '') || !Number.isInteger(pages) || pages < 1 || pages > 5) {
    console.error('Usage: node scripts/delegated/ci-watch-k13/scan-action-required.mjs OWNER/REPO [PAGES_1_TO_5]');
    process.exitCode = 2;
  } else {
    try {
      console.log(JSON.stringify(await scanHistoricalRuns(repo, pages), null, 2));
    } catch (error) {
      console.error(`READ_ONLY_HISTORY_FAILED: ${error.message}`);
      process.exitCode = 1;
    }
  }
}
