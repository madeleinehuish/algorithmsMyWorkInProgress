//Mocha Tests

const assert = require('chai').assert
const { longestNonRepeatingSubString, longestNonRepeatingSubStringNonOptimal } = require('./index');

let testData1 = 'abcabcbb';
let testData2 = 'bbbbb';
let testData3 = 'pwwkew';
let testData4 = 'abccdefgh';

let solution1 = 3;
let solution2 = 1;
let solution3 = 3;
let solution4 = 6

// console.log(longestNonRepeatingSubString(testData1));

describe('longestNonRepeatingSubString', function() {
    it('should correctly identify longest substring', function(done) {
      assert.equal(longestNonRepeatingSubString(testData1), solution1);
      done();
    });
});
