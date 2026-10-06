import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'lib/demo-cases.ts'), 'utf8');

test('demo cases define AgentCourt AI product identity in findings', () => {
  assert.match(src, /AgentCourt AI/);
});

test('demo case IDs follow AC- pattern', () => {
  const ids = [...src.matchAll(/id: '(AC-\d+)'/g)].map((m) => m[1]);
  assert.ok(ids.length >= 4);
  for (const id of ids) assert.match(id, /^AC-\d+$/);
});

test('demo cases include evidence and findings', () => {
  assert.match(src, /evidence:/);
  assert.match(src, /finding:/);
  assert.match(src, /contradictions:/);
});
