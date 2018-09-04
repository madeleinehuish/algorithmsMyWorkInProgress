const { caesarCipher } = require('./index');


 test("Should shift to the right", () => {
  expect(caesarCipher("I love JavaScript!", 100)).toEqual("E hkra FwrwOynelp!");
 });
 test("Should shift to the left", () => {
  expect(caesarCipher("I love JavaScript!", -100)).toEqual("M pszi NezeWgvmtx!");
 });
