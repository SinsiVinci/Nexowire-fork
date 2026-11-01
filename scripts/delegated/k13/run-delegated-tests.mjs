import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const roots = [
  resolve('test/delegated'),
  resolve('scripts/delegated/ci-watch-k13'),
];
const tests = [];

function collect(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collect(path);
    else if (entry.isFile() && /\.test\.(?:mjs|cjs|js|ts)$/.test(entry.name)) tests.push(path);
  }
}

for (const root of roots) collect(root);
if (!tests.length) {
  console.error('No delegated static tests found; refusing empty PASS.');
  process.exitCode = 1;
} else {
  console.log(`Running ${tests.length} delegated offline test file(s)`);
  const result = spawnSync(process.execPath, ['--test', '--import', 'tsx', ...tests], {
    stdio: 'inherit',
    shell: false,
    env: process.env,
  });
  process.exitCode = result.status ?? 1;
}
