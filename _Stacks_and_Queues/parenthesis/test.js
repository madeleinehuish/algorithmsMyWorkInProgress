const { parenthesisBalanced, makeBalanced } = require('./index');

test('parenthesisBalanced is a function', () => {
  expect(typeof parenthesisBalanced).toEqual('function');
});

test('makeBalanced is a function', () => {
  expect(typeof makeBalanced).toEqual('function');
});

let test1 = '{{a}[b(c)]}';
let test2 = '{[](hi there)}()[([{}])]';
let test3 = '[{(){[0]}}}]';
// let test4 = '(())(';
// let test5 = '((())())(((())))(((()))))))()()()))))))()('

let solution1 = true;
let solution2 = true;
let solution3 = false;
// let solution4 = '(())';
// let solution5 = '((())())(((())))(((())))()()()()';


test('parenthesisBalanced successfully determines whether balanced or not', () => {
  expect(parenthesisBalanced(test1)).toEqual(solution1);
});

test('parenthesisBalanced successfully determines whether balanced or not', () => {
  expect(parenthesisBalanced(test2)).toEqual(solution2);
});

test('parenthesisBalanced successfully determines whether balanced or not', () => {
  expect(parenthesisBalanced(test3)).toEqual(solution3);
});

// test('makeBalanced successfully balances string', () => {
//   expect(makeBalanced(test4)).toEqual(solution4);
// });
//
// test('makeBalanced successfully balances string', () => {
//   expect(makeBalanced(test5)).toEqual(solution5);
// });
