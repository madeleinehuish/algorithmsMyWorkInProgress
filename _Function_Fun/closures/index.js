//these code examples taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
function init() {
  var name = 'Madeleine'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();

//this example is more interesting as functon displayName is returned before being invoked
function makeFunc() {
  var name = 'Madeleine';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();


//another examplesfunction makeAdder(x) {
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


/*Emulating private methods with closures
Languages such as Java provide the ability to declare methods private,
meaning that they can only be called by other methods in the same class.

JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures.
Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing
your global namespace, keeping non-essential methods from cluttering up the public interface to your code.

The following code illustrates how to use closures to define public functions that can access private functions and variables.
Using closures in this way is known as the module pattern:*/

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      // console.log(privateCounter);
      return privateCounter;
    }
  };
})();

// console.log(counter.value()); // logs 0
counter.value();
counter.increment();
counter.increment();
// console.log(counter.value()); // logs 2
counter.value();
counter.decrement();
// console.log(counter.value()); // logs 1
counter.value();


//another implementation of basic counter (my own based on above)
const counter =  ( () => {
  let count = 0;
  function increment () {
    count++;
  };
  return {
    add: function() {
      increment();
      console.log('current count now is : ', count);
    },
    value: function() {
      return count;
    }
  }
} )();

counter.add();
counter.add();
counter.add();
counter.add();
counter.add();
counter.add();
counter.add();
counter.add();
counter.value();


//another example of a closure with iify

const person = (function() {
  let age = 25;

  return {
    name: "Nicholas",
    getAge: function() {
      return age;
    },
    growOlder: function() {
      age++;
    }
  };
})();

console.log(person.name);     // "Nicholas"
console.log(person.getAge()); // 25

person.age = 100;
console.log(person.age)   // 25

person.growOlder();
console.log(person.getAge())  //26



//another example
function Person(name) {
  let age = 25;
  this.name = name;
  this.getAge = function() {
    return age;
  }
}

const person = new Person('Madeleine');

person.name  // "Madeleine"
person.getAge()  // 25
person.age  // undefined
