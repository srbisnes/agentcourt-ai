import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'lib/kleros-evidence.ts'), 'utf8');

test('kleros evidence module declares ERC-1497 standard', () => {
  assert.match(src, /ERC-1497/);
  assert.match(src, /standard: 'ERC-1497'/);
});

test('kleros package is not ready for on-chain submission in demo', () => {
  assert.match(src, /readyForSubmission: false/);
  assert.match(src, /Does NOT submit on-chain/i);
});

test('kleros package documents SDK path', () => {
  assert.match(src, /@kleros\/kleros-sdk/);
  assert.match(src, /uploadEvidence/);
  assert.match(src, /submitEvidence/);
});
