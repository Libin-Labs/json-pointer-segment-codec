import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('escapes slash and tilde', () => {
  assert.equal(api.escapePointerSegment('a/b~c'), 'a~1b~0c');
});
test('round trips segment', () => {
  assert.equal(api.unescapePointerSegment(api.escapePointerSegment('a/b~c')), 'a/b~c');
});
test('decodes tilde before slash', () => {
  assert.equal(api.unescapePointerSegment('~01'), '~1');
});
test('accepts empty segment', () => {
  assert.equal(api.escapePointerSegment(''), '');
});
test('leaves ordinary text unchanged', () => {
  assert.equal(api.unescapePointerSegment('name'), 'name');
});
test('rejects malformed tilde escape', () => {
  assert.throws(() => api.unescapePointerSegment('~2'), RangeError);
});
