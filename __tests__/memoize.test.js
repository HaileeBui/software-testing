import memoize from '../src/memoize.js';

function values(array){
  var arr = [];
  for (var key in array) {
      if (array.hasOwnProperty(key)) {
          arr.push( array[key] );
      }
  }
  return arr;
}

describe('memoize()', () => {
  test('test example', () => {
    const object = { 'a': 1, 'b': 2 };
    const other = { 'c': 3, 'd': 4 };
  
    const value = memoize((a) => values(a));
    expect(value(object)).toEqual([1, 2]);
    object.a = 2;
    expect(value(object)).toEqual([1, 2]);
    expect(value(other)).toEqual([3, 4]);

    value.cache.set(object, ['a', 'b']);
    expect(value(other)).toEqual([3, 4]);
    expect(value(object)).toEqual(['a', 'b']);
  });
  test('test id', () => {
    const object = { 'a': 1, 'b': 2 };
    const value = memoize((a) => a);
    expect(value(object)).toEqual(object);
  });
  test('test changing values', () => {
    const object = { 'a': 3, 'b': 4 };
    const value = memoize((a) => values(a));
    object['a'] = 4;
    expect(value(object)).toEqual([4, 4]);
  });
  test('test empty', () => {
    const object = {};
    const value = memoize((a) => values(a));
    expect(value(object)).toEqual([]);
  });
  test('test array and id function', () => {
    const object = [1,2,3,4];
    const value = memoize((a) => a);
    expect(value(object)[0]).toEqual(1);
  });
  test('test undefined', () => {
    const value = memoize((a) => a);
    expect(value(undefined)).toEqual(undefined);
  });
  test('test cache delete', () => {
    const object = { 'a': 3, 'b': 4 };
    const value = memoize((a) => values(a));
    value(object);
    value.cache.delete(object);
    expect(value.cache.size).toEqual(0);
  });
  test('test cache delete key', () => {
    const object = { 'a' : 3, 'b': 4 };
    const value = memoize(values, (obj) => obj.a);
    value(object);
    value.cache.delete(3);
    expect(value.cache.size).toEqual(1);
  });
  test('test cache clear', () => {
    const object = { 'a': 3, 'b': 4 };
    const value = memoize((a) => values(a));
    value(object);
    value.cache.clear(); // clears cache
    expect(value.cache.size).toEqual(0);
  });
});