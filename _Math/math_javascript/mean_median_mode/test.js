// const Stats = require('./index');
//
// const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
// const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);
//
// describe("Mean", () => {
//  test("Should implement mean", () => {
//   expect(Stats.round(stat1.mean())).toEqual(3.43);
//   expect(Stats.round(stat2.mean())).toEqual(2.5);
//  });
// });
// describe("Median", () => {
//  test("Should implement median", () => {
//   expect(stat1.median()).toEqual(4);
//   expect(stat2.median()).toEqual(2.5);
//  });
// });
// describe("Mode", () => {
//  test("Should implement mode", () => {
//   expect(stat1.mode()).toEqual([4, 5]);
//   expect(stat2.mode()).toEqual([]);
//  });
// });

const { mean, median, mode } = require('./index');

const stat1 = [1, 2, 3, 4, 4, 5, 5];

const stat2 = [1, 1, 2, 2, 3, 3, 4, 4];

describe("Mean", () => {
 test("Should implement mean", () => {
  expect(mean(stat1)).toEqual(3.43);
  expect(mean(stat2)).toEqual(2.5);
 });
});
describe("Median", () => {
 test("Should implement median", () => {
  expect(median(stat1)).toEqual(4);
  expect(median(stat2)).toEqual(2.5);
 });
});
describe("Mode", () => {
 test("Should implement mode", () => {
  expect(mode(stat1)).toEqual([4, 5]);
  expect(mode(stat2)).toEqual([]);
 });
});
