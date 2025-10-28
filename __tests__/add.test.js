import add from '../src/add.js';

describe('add()', () => {
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(6, -4)).toBe(2);
  });

  test('handles zeros', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('works with floating point numbers', () => {
    expect(add(1.2, 3.4)).toBeCloseTo(4.6);
  });
});