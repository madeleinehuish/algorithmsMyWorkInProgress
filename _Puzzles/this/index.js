//this in constructor functions with classes
//the reason this.funct = this.funct.bind(this) is so that the local this of the function method is
// replaced by the global class constructor this

//arrow functions
// An arrow function expression has a shorter syntax than a function expression and does not have
// its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions,
// and they cannot be used as constructors.




class test {
  constructor(data) {
    this.data = data;

    // this.run = this.run.bind(this);
  }

  getData() {
    return this.data;
  }

}

let test1 = new test('local data')

let data = 'global data'

test1.getData()
// "local data"
let test2 = test1.getData

test2() //returns an error
// Uncaught TypeError: Cannot read property 'data' of undefined
//     at getData (<anonymous>:9:17)
//     at <anonymous>:1:1

this.data
// undefined

this.data = 'global data'
"global data"

test2()  //this returns an error
// VM306:9 Uncaught TypeError: Cannot read property 'data' of undefined
//     at getData (<anonymous>:9:17)
//     at <anonymous>:1:1

test2 = test2.bind(test1)
// ƒ getData() {
//     return this.data;
//   }

test2()
// "local data"

let test3 = test1.getData.bind(this);
test3()
// "global data"


////////////another example
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'

/////////////////another example
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34

/////////////////another example with bind
// ECMAScript 5 introduced Function.prototype.bind. Calling f.bind(someObject) creates a new function with the same body
// and scope as f, but where this occurs in the original function, in the new function it is permanently bound to the first
// argument of bind, regardless of how the function is being used.
function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.f(),o.f(), o.g(), o.h()); // 37,37, azerty, azerty
