import filter from '../src/filter';

describe('filter', () => {
  test('filters array based on predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(filter(arr, x => x % 2 === 0)).toEqual([2, 4]);
  });

  test('returns empty array if no element matches', () => {
    const arr = [1, 3, 5];
    expect(filter(arr, x => x % 2 === 0)).toEqual([]);
  });

  test('returns all elements if all match', () => {
    const arr = [2, 4, 6];
    expect(filter(arr, x => x % 2 === 0)).toEqual([2, 4, 6]);
  });

  test('handles empty array', () => {
    expect(filter([], x => true)).toEqual([]);
  });

  test('predicate receives value, index, array', () => {
    const arr = ['a', 'b', 'c'];
    const indices = [];
    filter(arr, (v, i, a) => {
      indices.push(i);
      return true;
    });
    expect(indices).toEqual([0, 1, 2]);
  });

  test('filters array of objects by property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true }
    ];
    expect(filter(users, u => u.active)).toEqual([
      { user: 'barney', active: true },
      { user: 'pebbles', active: true }
    ]);
  });
});

