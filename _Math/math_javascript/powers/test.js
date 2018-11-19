const { isPowerOf2, isPowerOf } = require('./index');

describe("isPowerOf2", () => {

 const testTrue1 = [4, 9, 16, 25];
 const testFalse1 = [5, 0, -4, 47];

 it("Should return true cases", () => {
   for(let elem of testTrue1) {
     console.log('elem: ', elem);
     expect(isPowerOf2(elem)).toEqual(true) ;
   }
 });

 it("Should return false cases", () => {
   for(let elem of testFalse1) {
     expect(isPowerOf2(elem)).toEqual(false) ;
   }
 });
});

describe("isPowerof", () => {

 const testTrue2 = [[27, 3], [64, 3], [256, 4]];
 const testFalse2 = [[25, 3], [36, 5], [343, 0]];

 it("Should return true cases", () => {
   for(let elem of testTrue2) {
     expect(isPowerOf(elem[0], elem[1])).toEqual(true) ;
   }
 });

 it("Should return false cases", () => {
   for(let elem of testFalse2) {
     expect(isPowerOf(elem[0], elem[1])).toEqual(false) ;
   }
 });
});
