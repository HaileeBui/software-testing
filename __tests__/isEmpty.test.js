import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
  test('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
  });

  test('returns true for primitive values (boolean, number, symbol)', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(Symbol('x'))).toBe(true);
  });

  // Arrays and array-like
  test('returns true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('returns false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('returns false for non-empty string', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  test('returns true for empty object literal', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('returns false for object with properties', () => {
    expect(isEmpty({ a: { b : 1 } })).toBe(false);
  });

  test('returns true for empty object created with Object.create(null)', () => {
    const obj = Object.create(null);
    expect(isEmpty(obj)).toBe(true);
  });

  test('returns false for object with inherited enumerable properties', () => {
    const proto = { a: 1 };
    const obj = Object.create(proto);
    expect(isEmpty(obj)).toBe(true); // own props only count
  });

  // Maps and Sets
  test('returns true for empty Map and Set', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  test('returns false for non-empty Map and Set', () => {
    const map = new Map();
    map.set('a', 1);
    const set = new Set([1]);
    expect(isEmpty(map)).toBe(false);
    expect(isEmpty(set)).toBe(false);
  });

  // Prototypes
  test('returns true for prototype object with no keys', () => {
    function Foo() {}
    expect(isEmpty(Foo.prototype)).toBe(true);
  });

  test('returns false for prototype with keys', () => {
    function Foo() {}
    Foo.prototype.bar = 1;
    expect(isEmpty(Foo.prototype)).toBe(false);
  });

  test('returns true for empty arguments object', () => {
    (function () {
      expect(isEmpty(arguments)).toBe(true);
    })();
  });

  test('returns false for arguments with values', () => {
    (function () {
      expect(isEmpty(arguments)).toBe(false);
    })(1, 2, 3);
  });

  test('returns true for empty Buffer or TypedArray', () => {
    expect(isEmpty(Buffer.from([]))).toBe(true);
    expect(isEmpty(new Uint8Array())).toBe(true);
  });

  test('returns false for non-empty Buffer or TypedArray', () => {
    expect(isEmpty(Buffer.from([1,2]))).toBe(false);
    expect(isEmpty(new Uint8Array([1,2]))).toBe(false);
  });
});