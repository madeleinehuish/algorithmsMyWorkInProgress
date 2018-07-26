const { flatten, flatten2, flatten3 } = require('./index');

test('Flatten is a function', () => {
  expect(typeof flatten).toEqual('function');
});

test('Flatten2 is a function', () => {
  expect(typeof flatten2).toEqual('function');
});

test('Flatten3 is a function', () => {
  expect(typeof flatten3).toEqual('function');
});


const testArr1 = [[1,2], [3, 4, 5], [6, 7, 8, 9]];
const testArr2 = [[1,2], [3, 4, 5], [6, 7, 8, 9]];
const testArr3 = [[1,2], [3, 4, 5], [6, 7, 8, 9]];


const testSolution1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testSolution2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testSolution3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

test('flatten function successfully flattens an array with spread operator', () => {
  expect(flatten(testArr1)).toEqual(testSolution1);
});

test('flatten function successfully flattens an array with concat', () => {
  expect(flatten2(testArr2)).toEqual(testSolution2);
});

test('flatten function successfully flattens an array with reduce', () => {
  expect(flatten3(testArr3)).toEqual(testSolution3);
});
