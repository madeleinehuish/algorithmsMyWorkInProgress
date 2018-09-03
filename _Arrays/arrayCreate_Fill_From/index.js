//create a prefilled array using .fill
let testFill = new Array(9).fill('x')

console.log('testFill: ', testFill); //-> [ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ]

//es6 easy way :
let testFill2 = Array.from(Array(10).keys());
console.log('testFill2: ', testFill2) //-> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//or even better :
let testFill3 = [...Array(10).keys()]
console.log('testFill3: ', testFill3) //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


//Array.from
//syntax: Array.from(arrayLike[, mapFn[, thisArg]])
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

//array from a set
var s = new Set(['foo', window]);
Array.from(s);
// ["foo", window]

//array from a map
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

var mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

​​​​​​​Array.from(mapper.keys());
// ['1', '2'];

//array from Array-like objects/arguments


// [1, 2, 3]



//see : https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n

//older version:
//create a prefilled array using .apply
let n = 9;
let testFill4 = Array.apply(null, {length: n}).map(Number.call, Number);
console.log('testFill3: ', testFill4) //-> [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

//using .apply to create array with random numbers
let testFill5 = Array.apply(null, {length: N}).map(Function.call, Math.random);
