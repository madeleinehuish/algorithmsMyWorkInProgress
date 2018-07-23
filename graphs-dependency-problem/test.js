const { Node, jobs } = require('./index.js');

test('jobs function exists', () => {
  expect(typeof jobs).toEqual('function');
});


let testArr1 = [[4,3], [3,2], [3,1], [1,0]];
let testArr2 = [[6,5], [6,4], [5,4], [5,3], [5,2], [4,3], [3,2], [3,1], [1,0]];
let testArr3 = [[4,3], [3,2], [3,1], [2,3], [1,0]];

let test1Solution = ['2', '0', '1', '3', '4'];
let test2Solution = ['2', '0', '1', '3', '4', '5', '6'];


test('correctly finds dependency resolution order', () => {
  expect(jobs(testArr1)).toEqual(test1Solution);
});

test('correctly finds dependency resolution order', () => {
  expect(jobs(testArr2)).toEqual(test2Solution);
});

test('correctly throws error for circular reference', () => {
  expect(jobs(testArr3)).toEqual('Circular reference detected');
});
