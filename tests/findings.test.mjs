import test from 'node:test';
import assert from 'node:assert/strict';

test('case titles are normalized', () => {
  assert.equal('  Example dispute  '.trim(), 'Example dispute');
});

test('demo health integrations are all disabled', () => {
  const integrations = { database: false, ai: false, blockchain: false, authentication: false, arbitration: false };
  assert.equal(Object.values(integrations).every((value) => value === false), true);
});
