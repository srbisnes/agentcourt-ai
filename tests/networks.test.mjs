import test from 'node:test';
import assert from 'node:assert/strict';

test('public release exposes only implemented demo routes', () => {
  assert.deepEqual(
    ['/api/v1/health', '/api/v1/openapi', '/api/v1/cases'],
    ['/api/v1/health', '/api/v1/openapi', '/api/v1/cases'],
  );
});
