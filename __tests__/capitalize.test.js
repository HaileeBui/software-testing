import capitalize from '../src/capitalize.js';

describe('capitalize()', () => {
  test('capitalize a string fred', () => {
    expect(capitalize("fred")).toEqual("Fred");
  });
  test('capitalize a string FRED', () => {
    expect(capitalize("FRED")).toEqual("Fred");
  });
  test('capitalize a string 748217481', () => {
    expect(capitalize("748217481")).toEqual("748217481");
  });
  test('capitalize a string empty', () => {
    expect(capitalize("")).toEqual("");
  });
  test('capitalize a string symbols', () => {
    expect(capitalize("!()!#")).toEqual("!()!#");
  });
  test('capitalize a string !ACTIVE!', () => {
    expect(capitalize(undefined)).toEqual("Undefined");
  });
  test('capitalize a string Fred', () => {
    expect(capitalize("Fred")).toEqual("Fred");
  });
  test('capitalize a number sequence', () => {
    expect(capitalize(1234)).toEqual("1234");
  });
  test('capitalize an empty array', () => {
    expect(capitalize([])).toEqual("");
  });
  test('capitalize an undefined array', () => {
    expect(capitalize([NaN, undefined, null])).toEqual("Nan,,");
  });
  test('capitalize null', () => {
    expect(capitalize(null)).toEqual("Null");
  });
  test('capitalize NaN', () => {
    expect(capitalize(NaN)).toEqual("Nan");
  });
  test('capitalize symbols', () => {
    expect(capitalize("$£@£@$$€€[]@{$")).toEqual("$£@£@$$€€[]@{$");
  });
});