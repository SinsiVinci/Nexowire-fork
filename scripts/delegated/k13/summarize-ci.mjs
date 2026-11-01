import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

// A successful workflow conclusion with zero visible jobs is not test evidence.
// Every result is bound to the requested exact commit, not a prior green run.
export function summarizeRuns(runs, jobsByRun, exactHead) {
  const matching = runs.filter(run => run.head_sha === exactHead);
  return matching.map(run => {
    const jobs = jobsByRun[run.id] ?? [];
    const completed = run.status === 'completed';
    const passed = completed && run.conclusion === 'success' &&
      jobs.length > 0 && jobs.every(job => job.status === 'completed' && job.conclusion === 'success');
    return {
      run_id: run.id,
      url: run.html_url,
      head_sha: run.head_sha,
      workflow: run.name,
      status: run.status,
      conclusion: run.conclusion,
      jobs: jobs.map(job => ({
        name: job.name,
        status: job.status,
        conclusion: job.conclusion,
        url: job.html_url,
      })),
      evidence: passed ? 'PASS' : (!jobs.length ? 'NO_JOB_PROOF' : 'NOT_PASS'),
    };
  });
}

const requiredForkJobs = ['linux-static (22)', 'linux-static (24)', 'windows-static'];

export function summarizeForkMatrix(runs, jobsByRun, exactHead) {
  const matching = runs
    .filter(run => run.head_sha === exactHead &&
      (run.path === '.github/workflows/delegated-noncore.yml' ||
        run.name === 'Fork non-core checks (offline)'))
    .sort((a, b) => b.id - a.id);
  if (!matching.length) return { evidence: 'NOT_PASS', reason: 'NO_EXACT_HEAD_RUN' };

  // Never union jobs from separate runs, earlier SHAs, or a stale green run.
  const run = matching[0];
  const jobs = jobsByRun[run.id] ?? [];
  if (run.status !== 'completed' || run.conclusion !== 'success') {
    return { evidence: 'NOT_PASS', reason: 'LATEST_RUN_NOT_SUCCESS', run_id: run.id };
  }
  const names = jobs.map(job => job.name);
  if (jobs.length !== requiredForkJobs.length ||
      !requiredForkJobs.every(name => names.filter(actual => actual === name).length === 1) ||
      jobs.some(job => job.status !== 'completed' || job.conclusion !== 'success')) {
    return { evidence: 'NOT_PASS', reason: 'INCOMPLETE_OR_FAILED_MATRIX', run_id: run.id };
  }
  return { evidence: 'PASS', run_id: run.id, head_sha: exactHead, jobs: [...requiredForkJobs] };
}

async function getJson(url) {
  const response = await fetch(url, {
    headers: { 'Accept': 'application/vnd.github+json', 'User-Agent': 'nexowire-noncore-ci-summary' },
    signal: AbortSignal.timeout(12_000),
  });
  if (!response.ok) throw new Error(`GitHub HTTP ${response.status} for ${url}`);
  return response.json();
}

export async function getExactHeadEvidence(repo, exactHead, get = getJson) {
  const base = `https://api.github.com/repos/${repo}/actions`;
  const runPage = await get(`${base}/runs?head_sha=${exactHead}&per_page=100`);
  const runs = runPage.workflow_runs ?? [];
  const jobsByRun = {};
  for (const run of runs.filter(item => item.head_sha === exactHead)) {
    const first = await get(`${base}/runs/${run.id}/jobs?per_page=100`);
    // GitHub defaults to up to 100 results; never declare PASS if truncated.
    const fetched = first.jobs ?? [];
    jobsByRun[run.id] = first.total_count > fetched.length
      ? [...fetched, { name: 'TRUNCATED_JOB_LIST', status: 'unknown', conclusion: null }]
      : fetched;
  }
  return summarizeRuns(runs, jobsByRun, exactHead);
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const [repo, exactHead] = process.argv.slice(2);
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo ?? '') || !/^[a-f0-9]{40}$/i.test(exactHead ?? '')) {
    console.error('Usage: node scripts/delegated/k13/summarize-ci.mjs OWNER/REPO FULL_40_CHAR_SHA');
    process.exitCode = 2;
  } else {
    try {
      const evidence = await getExactHeadEvidence(repo, exactHead);
      const matrix = summarizeForkMatrix(
        evidence.map(item => ({
          id: item.run_id, name: item.workflow, head_sha: item.head_sha,
          status: item.status, conclusion: item.conclusion,
        })),
        Object.fromEntries(evidence.map(item => [item.run_id, item.jobs])),
        exactHead,
      );
      console.log(JSON.stringify({
        repo, head_sha: exactHead, runs: evidence, fork_matrix: matrix,
        evidence: evidence.length ? 'SEE_RUNS' : 'NO_RUN',
      }, null, 2));
    } catch (error) {
      console.error(`READ_ONLY_CI_CHECK_FAILED: ${error.message}`);
      process.exitCode = 1;
    }
  }
}
