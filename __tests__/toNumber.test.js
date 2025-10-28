import toNumber from '../src//toNumber.js';

describe('toNumber', () => {
  // --- Numbers ---
  test('returns the same number for numbers', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(-5)).toBe(-5);
    expect(toNumber(0)).toBe(0);
  });

  test('returns Infinity for Infinity', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test('handles Number.MIN_VALUE', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
  });

  // --- Strings ---
  test('converts numeric strings to numbers', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('-42')).toBe(-42);
  });

  test('trims whitespace in numeric strings', () => {
    expect(toNumber('   5   ')).toBe(5);
  });

  test('handles binary strings (0b)', () => {
    expect(toNumber('0b101')).toBe(5);
  });

  test('handles octal strings (0o)', () => {
    expect(toNumber('0o10')).toBe(8);
  });

  test('returns NaN for bad hex values', () => {
    expect(toNumber('-0x1')).toBeNaN();
    expect(toNumber('+0x10')).toBeNaN();
  });

  test('handles hexadecimal strings (valid ones)', () => {
    expect(toNumber('0x10')).toBe(16);
  });

  test('returns NaN for non-numeric strings', () => {
    expect(toNumber('abc')).toBeNaN();
  });

  // --- Booleans & Nullish ---
  test('converts true to 1 and false to 0', () => {
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });

  test('converts null to 0 and undefined to NaN', () => {
    expect(toNumber(null)).toBe(0);
    expect(toNumber(undefined)).toBeNaN();
  });

  // --- Objects ---
  test('handles objects with numeric valueOf', () => {
    const obj = { valueOf: () => 10 };
    expect(toNumber(obj)).toBe(10);
  });

  test('handles objects with string valueOf', () => {
    const obj = { valueOf: () => '7' };
    expect(toNumber(obj)).toBe(7);
  });

  test('handles objects with no valueOf', () => {
    const obj = { a: 1 };
    expect(toNumber(obj)).toBeNaN();
  });

  test('handles arrays with a single number', () => {
    expect(toNumber([42])).toBe(42);
  });

  test('returns NaN for arrays with multiple values', () => {
    expect(toNumber([1, 2])).toBeNaN();
  });

  // --- Symbols ---
  test('returns NaN for symbols', () => {
    expect(toNumber(Symbol('x'))).toBeNaN();
  });

  test('handles scientific notation strings', () => {
    expect(toNumber('1e3')).toBe(1000);
    expect(toNumber('-2.5e2')).toBe(-250);
  });
});


//Better Nan handling, shouldnt return NaN