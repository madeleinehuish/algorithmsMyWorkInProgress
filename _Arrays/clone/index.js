// for deep clone use
let arr = [{'obj1':1}, {'obj2':2}];

let newArr = JSON.parse(JSON.stringify(arr));

// notes from stack overflow on JSON.parse.etc... for deep clone:
// 43
// Important note for beginners: because this depends upon JSON, this also inherits its limitations. Among other things, that means your array cannot contain undefined or any functions. Both of those will be converted to null for you during the JSON.stringify process. Other strategies, such as (['cool','array']).slice() will not change them but also do not deep clone objects within the array. So there is a tradeoff. – Seth Holladay Oct 7 '14 at 14:01
// 14
// Very bad perf and don't work with special objects like DOM, date, regexp, function ... or prototyped objects. Don't support cyclic references. You should never use JSON for deep clone. – Yukulélé Dec 11 '15 at 17:57
// 6
// worst possible way! Only use if for some issue all other doesn't work. It's slow, it's resources intense and it has all JSON limitations already mentioned in comments. Can't imagine how it got 25 up-votes. – Lukas Jul 24 '16 at 13:12
// 2
// It deep copies arrays with primitives, and where properties are arrays with further primitives/arrays. For that it is ok. – Drenai Aug 6 '16 at 20:21

// also this library from npm called clone:
// https://github.com/pvorb/clone
// or lodash:
// https://www.npmjs.com/package/lodash.clonedeep

// for shallow clone use
let newArr2 = arr.slice(0); //or arr.slice() //however arr.slice() without the 0 is apparently slower

//
var clone1 = [].concat(arr);
let clone2 = [...arr1];

//as per stack overflow there are 5 major ways to clone an array
//loop, slice, Array.from(), concat, spread operator
//splice is fastest

//https://stackoverflow.com/questions/3978492/javascript-fastest-way-to-duplicate-an-array-slice-vs-for-loop
