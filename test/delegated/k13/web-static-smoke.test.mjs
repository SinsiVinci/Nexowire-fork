import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const webRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../../../web');
const pages = [
  ['index.html', 'app.js'],
  ['connect.html', 'connect.js'],
  ['admin.html', 'admin.js'],
];

for (const [page, script] of pages) {
  test(`offline HTML structure and local assets: ${page}`, () => {
    const html = readFileSync(resolve(webRoot, page), 'utf8');
    assert.match(html, /^<!doctype html>/i);
    assert.match(html, /<html\s+lang="tr"/i);
    assert.match(html, /<meta\s+name="viewport"\s+content="[^"]+"/i);
    assert.match(html, /<title>[^<]+<\/title>/i);
    assert.equal((html.match(/<main(?:\s|>)/gi) ?? []).length, 1, 'one main landmark');
    assert.equal((html.match(/<\/main>/gi) ?? []).length, 1, 'one closing main');
    assert.match(html, /<link\s+rel="stylesheet"\s+href="\.\/styles\.css"/i);
    assert.match(html, new RegExp(`<script[^>]+src="\\./${script.replace('.', '\\.')}"></script>`, 'i'));
    assert.ok(existsSync(resolve(webRoot, 'styles.css')));
    assert.ok(existsSync(resolve(webRoot, script)));
  });
}
