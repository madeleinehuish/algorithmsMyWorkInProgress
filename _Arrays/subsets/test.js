const { isSubset, isSubsetDupsPossible } = require('./index');


test('isSubset is a function', () => {
  expect(typeof isSubset).toEqual('function');
});

test('isSubsetDupsPossible is a function', () => {
  expect(typeof isSubsetDupsPossible).toEqual('function');
});

let testArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let testArr2 = [1, 3, 7, 8];
let testArr3 = [1, 3, 7, 8, 9];
let testArr4 = ["Madeleine", "Lila", "Persephone"];
let testArr5 = ["Madeleine", "Persephone"];
let testArr6 = ["George", "Henry", "Madeleine"];

//duplicate cases
let testArr7 = ['a', 'b', 'd'];
let testArr8 = ['a', 'b', 'b', 'd'];

test('isSubset correctly returns true for a true subset', () => {
  expect(isSubset(testArr1, testArr2)).toEqual(true);
});

test('isSubset correctly returns true for a true subset', () => {
  expect(isSubset(testArr4, testArr5)).toEqual(true);
});

test('isSubset correctly returns false for a false subset', () => {
  expect(isSubset(testArr1, testArr3)).toEqual(false);
});

test('isSubset correctly returns false for a false subset', () => {
  expect(isSubset(testArr4, testArr6)).toEqual(false);
});

test('isSubsetDupsPossible correctly returns true for a true subset', () => {
  expect(isSubsetDupsPossible(testArr1, testArr2)).toEqual(true);
});

test('isSubsetDupsPossible correctly returns false for a false subset', () => {
  expect(isSubsetDupsPossible(testArr7, testArr8)).toEqual(false);
});
