const { isPrime, sieveOfEratosthenes, primesOptimal } = require('./index');

describe("Sieve of Eratosthenes", () => {
 it("Should return all prime numbers", () => {
  expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]) ;
 });
});

describe("Sieve of Eratosthenes", () => {
 it("Should return all prime numbers", () => {
  expect(primesOptimal(10)).toEqual([2, 3, 5, 7]) ;
 });
});
