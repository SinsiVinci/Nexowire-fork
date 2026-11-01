import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { readFileSync } from 'node:fs';
import { validateWorkflow, workflowPath } from '../../../scripts/delegated/k13/validate-workflow.mjs';

const original = readFileSync(workflowPath, 'utf8');

test('fork-only read-only non-core workflow meets source security guard', () => {
  assert.deepEqual(validateWorkflow(original), []);
  assert.match(original, /node-version: \[22, 24\]/);
  assert.match(original, /runs-on: windows-latest/);
  assert.match(original, /npm run typecheck/);
  assert.match(original, /npm run build/);
});

test('unsafe event is rejected', () => {
  assert.ok(validateWorkflow(original.replace('  pull_request:', '  pull_request_target:')).length > 0);
});

test('write token, secrets and live flags are rejected', () => {
  assert.ok(validateWorkflow(original.replace('  contents: read', '  contents: write')).length > 0);
  assert.ok(validateWorkflow(original + '\n# ${{ secrets.EXAMPLE }}\n').includes('secret reference'));
  assert.ok(validateWorkflow(original + '\n# NEXOWIRE_LIVE_WINDOWS_SERVICE_TEST\n').includes('live acceptance flag'));
});

test('missing fork guard and checkout hardening are rejected', () => {
  assert.ok(validateWorkflow(original.replaceAll(
    "if: github.repository == 'SinsiVinci/Nexowire-fork'",
    'if: true',
  )).length > 0);
  assert.ok(validateWorkflow(original.replaceAll('persist-credentials: false', 'persist-credentials: true')).length > 0);
});
