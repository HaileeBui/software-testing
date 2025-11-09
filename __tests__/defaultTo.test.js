import defaultTo from '../src/defaultTo.js';

describe('defaultTo()', () => {
  test('tests null', () => {
    expect(defaultTo(null, 0)).toBe(0);
  });
  test('tests NaN', () => {
    expect(defaultTo(NaN, 0)).toBe(0);
  });
  test('tests undefined', () => {
    expect(defaultTo(undefined, 0)).toBe(0);
  });
  test('tests array', () => {
    expect(defaultTo([], 0)).toBe([]);
  });
  test('tests string', () => {
    expect(defaultTo("undefined", 0)).toBe("undefined");
  });
  test('tests numerical values', () => {
    for(let i = 0; i < 10; ++i){
      expect(defaultTo(i, 0)).toBe(i);
    }
  });
  test('tests true boolean', () => {
    expect(defaultTo(true, 0)).toBe(true);
  });
  test('tests false boolean', () => {
    expect(defaultTo(false, 0)).toBe(false);
  });
});