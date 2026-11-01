import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

export const workflowPath = resolve(
  fileURLToPath(new URL('../../../.github/workflows/delegated-noncore.yml', import.meta.url)),
);

// Conservative source-level guard. GitHub parses the workflow; this is an
// additional regression alarm, not a YAML parser or a proof of CI execution.
export function validateWorkflow(source) {
  const problems = [];
  const requirePattern = (pattern, reason) => {
    if (!pattern.test(source)) problems.push(reason);
  };
  const forbidPattern = (pattern, reason) => {
    if (pattern.test(source)) problems.push(reason);
  };

  requirePattern(/^on:\s*$/m, 'missing explicit event list');
  requirePattern(/^  push:\s*$/m, 'missing fork branch push trigger');
  requirePattern(/^      - "k\[0-9\]\[0-9\]\/\*\*"\s*$/m, 'branch trigger is not restricted to kNN/*');
  requirePattern(/^  pull_request:\s*$/m, 'missing pull_request trigger');
  requirePattern(/^permissions:\s*\n  contents: read\s*$/m, 'top-level permission must be contents: read only');
  requirePattern(/persist-credentials:\s*false/, 'checkout must not persist credentials');
  requirePattern(/^    if: github\.repository == 'SinsiVinci\/Nexowire-fork'\s*$/m, 'missing fork-only job gate');
  requirePattern(/node scripts\/delegated\/k13\/run-delegated-tests\.mjs/, 'offline delegated tests not invoked');

  forbidPattern(/^  (?:pull_request_target|workflow_run|repository_dispatch|schedule):/m, 'unsafe or out-of-scope trigger');
  forbidPattern(/^\s*(?:id-token|actions|checks|contents|deployments|issues|packages|pull-requests|statuses):\s*write\s*$/m, 'write permission');
  forbidPattern(/\bsecrets\s*\./i, 'secret reference');
  forbidPattern(/\bNEXOWIRE_LIVE_[A-Z0-9_]+\b/, 'live acceptance flag');
  forbidPattern(/^\s*permissions:\s*write\s*$/m, 'broad write permission');

  const jobsSection = source.split(/^jobs:\s*$/m)[1] ?? '';
  const starts = [...jobsSection.matchAll(/^  [A-Za-z][A-Za-z0-9_-]*:\s*$/gm)];
  if (!starts.length) problems.push('no CI jobs');
  for (let i = 0; i < starts.length; i++) {
    const block = jobsSection.slice(starts[i].index, starts[i + 1]?.index);
    if (!/^    if: github\.repository == 'SinsiVinci\/Nexowire-fork'\s*$/m.test(block)) {
      problems.push(`job missing fork-only gate: ${starts[i][0].trim()}`);
    }
  }
  const checkouts = (source.match(/^\s*- uses: actions\/checkout@/gm) ?? []).length;
  const disabledCredentials = (source.match(/persist-credentials:\s*false/g) ?? []).length;
  if (!checkouts || checkouts !== disabledCredentials) problems.push('all checkouts must disable persisted credentials');
  return problems;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const problems = validateWorkflow(readFileSync(workflowPath, 'utf8'));
  for (const problem of problems) console.error(`CI_CONTRACT_FAIL: ${problem}`);
  if (problems.length) process.exitCode = 1;
  else console.log('CI_CONTRACT_PASS (source-only; run/OS/device checks NOT_RUN)');
}
