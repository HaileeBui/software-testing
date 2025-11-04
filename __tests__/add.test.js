import add from '../src/add.js';

describe('add()', () => {
  // test for multiple additions to find any hard coded solutions
  test('adds two positive numbers', () => {
    for(let a = 1; a < 10; a++){
      for(let b = 1; b < 10; b++){
        expect(add(a, b)).toBe(a + b);
      }
    }
  });

  test('adds a positive and a negative number', () => {
    for(let a = 1; a < 10; a++){
      for(let b = 1; b < 10; b++){
        expect(add(a, -b)).toBe(a - b);
      }
    }
  });

  test('handles zeros', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('handles undefined and a number', () => {
    expect(add(1, undefined)).toBe(NaN);
  });

  test('handles null', () => {
    expect(add(1, null)).toBe(1);
  });

  test('handles NaN', () => {
    expect(add(1, NaN)).toBe(NaN);
  });

  test('handles two NaNs', () => {
    expect(add(NaN, NaN)).toBe(NaN);
  });

  test('handles strings', () => {
    expect(add(0, "1")).toBe(NaN).toThrow(Error);
  });

  test('handles two strings', () => {
    expect(add("hello", "world")).toBe(NaN).toThrow(Error);
  });

  test('handles two numerical strings correctly', () => {
    expect(add("-1", "100")).toBe(NaN).toThrow(Error);
  });

  test('works with floating point numbers', () => {
    expect(add(1.2, 3.4)).toBeCloseTo(4.6);
  });
});
