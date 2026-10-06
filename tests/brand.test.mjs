import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function read(rel) {
  return readFileSync(join(root, rel), 'utf8');
}

test('README uses AgentCourt AI and ElCryptoBoy', () => {
  const md = read('README.md');
  assert.match(md, /AgentCourt AI/);
  assert.match(md, /ElCryptoBoy/);
  assert.match(md, /srbisnes\/agentcourt-ai/);
  assert.match(md, /agentcourt-ai\.vercel\.app/);
});

test('AUDIT and KLEROS docs exist with product name', () => {
  assert.match(read('docs/AUDIT.md'), /AgentCourt AI/);
  assert.match(read('docs/KLEROS.md'), /AgentCourt AI/);
  assert.match(read('docs/SPEC.md'), /AgentCourt AI/);
});

test('package.json identity', () => {
  const pkg = JSON.parse(read('package.json'));
  assert.equal(pkg.name, 'agentcourt-ai');
  assert.equal(pkg.license, 'MIT');
  assert.match(pkg.homepage, /agentcourt-ai\.vercel\.app/);
});
