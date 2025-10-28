import compact from '../src/compact.js';

describe('compact', () => {
  test('removes falsey values from an array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  test('returns empty array if all values are falsey', () => {
    expect(compact([0, false, null, undefined, '', NaN])).toEqual([]);
  });

  test('returns the same array if all values are truthy', () => {
    expect(compact([1, true, 'a', {}, []])).toEqual([1, true, 'a', {}, []]);
  });

  test('handles an empty array', () => {
    expect(compact([])).toEqual([]);
  });

  test('handles 0 as string', () => {
    expect(compact(['0'])).toEqual(['0']);
  });
});

//FIX: resIndex = 0 