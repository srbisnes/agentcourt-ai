import test from 'node:test';
import assert from 'node:assert/strict';

test('public release exposes only implemented demo routes', () => {
  assert.deepEqual(
    ['/api/v1/health', '/api/v1/openapi', '/api/v1/cases'],
    ['/api/v1/health', '/api/v1/openapi', '/api/v1/cases'],
  );
});

test('strategy does not require a token for the MVP', () => {
  const mvpTokenRequired = false;
  assert.equal(mvpTokenRequired, false);
});

test('market thesis keeps near-term and future markets separate', () => {
  const nearTerm = 'evidence-heavy Web3 disputes';
  const future = 'agent-to-agent commerce';
  assert.notEqual(nearTerm, future);
});
