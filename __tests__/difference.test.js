import difference from '../src/difference.js';

describe('difference()', () => {
  test('test basic [2, 1], [3, 2]', () => {
    expect(difference([2, 1], [3, 2])).toEqual([1]);
  });
  test('test empty array', () => {
    expect(difference([], [3, 2])).toEqual([]);
  });
  test('test same array', () => {
    expect(difference([3, 2], [3, 2])).toEqual([]);
  });
  test('test same array multiple times', () => {
    expect(difference([3, 2], [3, 2, 3, 2, 3, 2, 3, 2])).toEqual([]);
  });
  test('test same array, but negative', () => {
    expect(difference([3, 2], [-3, -2])).toEqual([3, 2]);
  });
  test('test excluding empty array', () => {
    expect(difference([1], [])).toEqual([1]);
  });
  test('test exculding null from false', () => {
    expect(difference([false], [null])).toEqual([false]);
  });
  test('test exculding strings', () => {
    expect(difference(["hello", "no", 5], ["hello", "there"])).toEqual(["no", 5]);
  });
  test('attempt difference between dictionary and an array', () => {
    expect(difference({'a': 1, 'b' : 2, 'c' : 3}, ["hello", "there"])).toEqual([]);
  });
  test('attempt difference between two dictionaries in arrays', () => {
    expect(difference([{'a': 1, 'b' : 2, 'c' : 3}], [{'a': 1, 'b' : 2}])).toEqual([{'a': 1, 'b' : 2, 'c' : 3}]);
  });
});