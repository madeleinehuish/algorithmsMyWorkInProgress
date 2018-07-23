const { linearSearch, binarySearch } = require('./index');

test('linearSearch function is defined', () => {
  expect(typeof linearSearch).toEqual('function');
});

test('binarySearch function is defined', () => {
  expect(typeof binarySearch).toEqual('function');
});

test('linearSearch correctly finds index of value', () => {
  let testArray = [1, 5, 10, 16, 36, 39, 87, 205];
  let testValue = 87;
  expect(linearSearch(testArray, testValue)).toEqual(6);
});

test('linearSearch correctly reports when value is not in array', () => {
  let testArray = [1, 5, 10, 16, 36, 39, 87, 205];
  let testValue = 25;
  expect(linearSearch(testArray, testValue)).toEqual(-1);
});

test('binarySearch correctly finds index of value', () => {
  let testArray = [1, 5, 10, 16, 36, 39, 87, 205];
  let testValue = 87;
  expect(binarySearch(testArray, testValue)).toEqual(6);
});

test('binarySearch correctly reports when value is not in array', () => {
  let testArray = [1, 5, 10, 16, 36, 39, 87, 205];
  let testValue = 25;
  expect(binarySearch(testArray, testValue)).toEqual(-1);
});
