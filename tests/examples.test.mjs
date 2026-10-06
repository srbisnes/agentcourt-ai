import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

test('ready examples include three feedback scenarios', () => {
  const src = readFileSync(join(root, 'lib/examples.ts'), 'utf8');
  assert.match(src, /ex-marketplace/);
  assert.match(src, /ex-freelance/);
  assert.match(src, /ex-agent/);
  assert.match(src, /READY_EXAMPLES/);
});

test('analyze module is deterministic demo not live AI', () => {
  const src = readFileSync(join(root, 'lib/analyze.ts'), 'utf8');
  assert.match(src, /no external AI/i);
  assert.match(src, /contradictions/);
  assert.match(src, /confidence/);
});

test('workspace is client interactive', () => {
  const src = readFileSync(join(root, 'app/cases/Workspace.tsx'), 'utf8');
  assert.match(src, /'use client'/);
  assert.match(src, /localStorage/);
  assert.match(src, /Try this example/);
  assert.match(src, /Run analysis/);
  assert.match(src, /Save feedback locally/);
});
