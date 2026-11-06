export function escapePointerSegment(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return value.replace(/~/g, '~0').replace(/\//g, '~1');
}
export function unescapePointerSegment(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  if (/~(?![01])/u.test(value)) throw new RangeError('Invalid JSON Pointer escape');
  return value.replace(/~1/g, '/').replace(/~0/g, '~');
}
