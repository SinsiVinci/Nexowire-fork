import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { requiredHarnessPaths, verifyHeadHarness } from '../../../scripts/delegated/k13/verify-head-harness.mjs';

const head = 'a'.repeat(40);
function fakeGit({ omit = [], headRef = 'HEAD^2', actual = head, noParent = false } = {}) {
  return (command, ...args) => {
    if (command === 'rev-parse') {
      assert.equal(args[0], headRef);
      if (noParent) throw new Error('shallow checkout');
      return actual + '\n';
    }
    assert.equal(command, 'cat-file');
    assert.equal(args[0], '-t');
    const filename = args[1].split(':')[1];
    if (omit.includes(filename)) throw new Error('not found');
    return 'blob\n';
  };
}

test('pull_request checks exact second-parent source, not the merge tree', () => {
  const result = verifyHeadHarness('pull_request', head, fakeGit());
  assert.equal(result.source_head, head);
  assert.equal(result.checked_paths, requiredHarnessPaths.length);
});

test('missing PR-head tool fails before npm install or tests even if merge base has it', () => {
  assert.throws(
    () => verifyHeadHarness('pull_request', head, fakeGit({ omit: ['scripts/delegated/k13/run-delegated-tests.mjs'] })),
    /PR_HEAD_HARNESS_MISSING.*run-delegated-tests/,
  );
});

test('shallow pull request fetch and wrong head are explicit failures', () => {
  assert.throws(() => verifyHeadHarness('pull_request', head, fakeGit({ noParent: true })), /SOURCE_HEAD_UNAVAILABLE/);
  assert.throws(() => verifyHeadHarness('pull_request', head, fakeGit({ actual: 'b'.repeat(40) })), /SOURCE_HEAD_MISMATCH/);
});

test('push and workflow_dispatch use HEAD, invalid events cannot pass', () => {
  for (const event of ['push', 'workflow_dispatch']) {
    assert.equal(verifyHeadHarness(event, head, fakeGit({ headRef: 'HEAD' })).checked_paths, 4);
  }
  assert.throws(() => verifyHeadHarness('pull_request_target', head, fakeGit()), /UNSUPPORTED_CI_EVENT/);
});
