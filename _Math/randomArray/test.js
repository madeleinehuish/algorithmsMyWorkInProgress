const { shuffle, insertZero, findZeroInArray } = require('./index');

describe("function shuffle successfully builds random array", () => {
 it("Should return true", () => {
  let numberSet = new Set();
  for(let i = 1; i <= 100; i++) {
    numberSet.add(i);
  }
  let startingTestArray = shuffle(100);
  expect(startingTestArray.length).toEqual(100);

 });
});

describe("function insertZero successfully inserts zero into array randomly", () => {
 it("Should return return true", () => {
  // expect(primesOptimal(10)).toEqual([2, 3, 5, 7]) ;
 });
});
