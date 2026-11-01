import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { resolve } from 'node:path';
import { auditFixtureText, scanFixtures } from '../../../scripts/delegated/k13/audit-fixtures.mjs';

test('fixture audit reports sensitive token patterns without exposing matched bytes', () => {
  const token = 'ghp_' + 'Q'.repeat(36);
  const findings = auditFixtureText(`safe\n${token}\n-----BEGIN PRIVATE KEY-----\n`, 'mock.txt');
  assert.deepEqual(findings.map(x => x.rule), ['GITHUB_CLASSIC_TOKEN', 'PRIVATE_KEY_BLOCK']);
  assert.equal(findings[0].line, 2);
  assert.ok(!JSON.stringify(findings).includes(token));
});

test('read-only scan of repository fixture folder has no known credential signatures', () => {
  const report = scanFixtures(resolve('test/fixtures'));
  assert.ok(report.scanned > 0);
  assert.deepEqual(report.skipped, []);
  assert.deepEqual(report.findings, []);
});
