import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const rules = Object.freeze([
  ['AWS_ACCESS_KEY', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/g],
  ['GITHUB_CLASSIC_TOKEN', /\bgh[opusr]_[A-Za-z0-9]{30,}\b/g],
  ['GITHUB_FINE_GRAINED', /\bgithub_pat_[A-Za-z0-9_]{50,}\b/g],
  ['SLACK_TOKEN', /\bxox[baprs]-[A-Za-z0-9-]{24,}\b/g],
  ['PRIVATE_KEY_BLOCK', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g],
]);

export function auditFixtureText(contents, filename) {
  const findings = [];
  for (const [index, line] of contents.split(/\r?\n/).entries()) {
    for (const [rule, regex] of rules) {
      regex.lastIndex = 0;
      if (regex.test(line)) findings.push({ file: filename, line: index + 1, rule });
    }
  }
  return findings; // Never log or return the potential secret's bytes.
}

export function scanFixtures(root) {
  let scanned = 0;
  const skipped = [];
  const findings = [];
  function visit(path) {
    for (const item of readdirSync(path, { withFileTypes: true })) {
      const full = join(path, item.name);
      if (item.isDirectory()) visit(full);
      else if (item.isSymbolicLink()) skipped.push(full);
      else if (item.isFile()) {
        const { size } = statSync(full);
        if (size > 1024 * 1024) {
          skipped.push(full);
          continue;
        }
        const bytes = readFileSync(full);
        if (bytes.includes(0)) {
          skipped.push(full);
          continue;
        }
        scanned++;
        findings.push(...auditFixtureText(bytes.toString('utf8'), full));
      }
    }
  }
  visit(root);
  return { scanned, skipped, findings };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try {
    const root = resolve(process.argv[2] ?? 'test/fixtures');
    const report = scanFixtures(root);
    // Potential credentials are deliberately redacted; only location and class.
    console.log(JSON.stringify(report, null, 2));
    if (report.findings.length || report.skipped.length) process.exitCode = 1;
  } catch (error) {
    console.error(`FIXTURE_AUDIT_ERROR: ${error.message}`);
    process.exitCode = 1;
  }
}
