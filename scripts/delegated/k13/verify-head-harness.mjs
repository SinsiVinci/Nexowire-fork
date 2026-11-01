import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export const requiredHarnessPaths = Object.freeze([
  'scripts/delegated/k13/verify-head-harness.mjs',
  'scripts/delegated/k13/validate-workflow.mjs',
  'scripts/delegated/k13/run-delegated-tests.mjs',
  'scripts/delegated/k13/summarize-ci.mjs',
]);

// GitHub pull_request checkout normally selects refs/pull/N/merge, whose
// second parent is the contributor's exact head. Inspect that tree rather than
// the merged checkout: base-branch files must not mask a missing PR head tool.
export function verifyHeadHarness(eventName, expectedHead, git) {
  if (!['push', 'pull_request', 'workflow_dispatch'].includes(eventName)) {
    throw new Error(`UNSUPPORTED_CI_EVENT: ${eventName}`);
  }
  if (!/^[a-f0-9]{40}$/i.test(expectedHead ?? '')) {
    throw new Error('SOURCE_HEAD_INVALID: expected full 40-character Git SHA');
  }

  const sourceRef = eventName === 'pull_request' ? 'HEAD^2' : 'HEAD';
  let resolvedHead;
  try {
    resolvedHead = git('rev-parse', sourceRef).trim();
  } catch {
    throw new Error('SOURCE_HEAD_UNAVAILABLE: PR merge parent not fetched; checkout needs fetch-depth: 2');
  }
  if (resolvedHead.toLowerCase() !== expectedHead.toLowerCase()) {
    throw new Error(`SOURCE_HEAD_MISMATCH: expected ${expectedHead}, checked ${resolvedHead}`);
  }

  const missing = [];
  for (const path of requiredHarnessPaths) {
    try {
      if (git('cat-file', '-t', `${resolvedHead}:${path}`).trim() !== 'blob') missing.push(path);
    } catch {
      missing.push(path);
    }
  }
  if (missing.length) {
    throw new Error(
      `PR_HEAD_HARNESS_MISSING: ${missing.join(', ')} absent from exact source ${resolvedHead}. ` +
      'Fork CI cannot silently use tools supplied only by the merge base; transplant the reviewed harness or use a separate pinned CI-tool checkout.',
    );
  }
  return { source_head: resolvedHead, checked_paths: requiredHarnessPaths.length };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const git = (...args) => execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  try {
    const result = verifyHeadHarness(process.env.GITHUB_EVENT_NAME, process.env.SOURCE_HEAD_SHA, git);
    console.log(`PR_HEAD_HARNESS_PASS ${result.source_head} (${result.checked_paths} files)`);
  } catch (error) {
    console.error(`::error title=Fork CI head preflight::${error.message}`);
    process.exitCode = 1;
  }
}
