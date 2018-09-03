
const parenthesisBalanced = str => {
  let stack = [];
  let open = { '{': '}', '[': ']', '(': ')' };
  let closed = { '}': true, ']': true, ')': true };

  for (let char of str) {
    console.log('char: ', char);
    console.log('open[char]: ', open[char]);
    console.log('closed[char]: ', closed[char]);
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  console.log('stack: ', stack);
  return stack.length === 0;
};


//this still isn't working :(
const makeBalanced = str => {
  let stack = [];
  let result = str;
  let open = { '{': '}', '[': ']', '(': ')' };
  let closed = { '}': true, ']': true, ')': true };

  for (let char of str) {
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) {
        str.substr(0, str.indexOf(char)) + str.substr(str.indexOf(char)+1, str.length)
      }
    }
  }

  return str.substr(0, str.length - stack.length);

}

//loop through string
//define char as str[i]
//if open[char] then push that char onto the stack
//else if closed[char] then if open[stack.pop()] !== char then return false
//want to return with an empty stack, otherwise it is false

module.exports = { parenthesisBalanced, makeBalanced };

// console.log(balanced('(())('));
// console.log(balanced('(())'));
// console.log(balanced('((())())(((())))(((()))))))()()()))))))()('));
// console.log(balanced('((())())(((())))(((()))))))()()()()('));
// console.log(balanced('((())())(((())))(((()))))))()()()()'));
// console.log(balanced('((())())()()()()'));

// //this one is my own interpretation of balanced parens based on my interview question...
// //it will only work for input type of ( or )
// function balanced(inputString) {
//     let arr = [];
//     let outputString = "";
//
//     let i = 0;
//     for (let char of inputString) {
//       if (char == '(') {
//         arr.push(i);
//       } else {
//
//         if (arr.length == 0) {
//           return false;
//         }
//         arr.pop();
//       }
//       i++;
//       outputString = outputString + char;
//     }
//     return arr.length===0
// }

// const parenthesisBalanced = str => {
//   let stack = [];
//   let open = { '{': '}', '[': ']', '(': ')' };
//   let closed = { '}': true, ']': true, ')': true };
//
//   for (let i = 0; i < str.length; i ++) {
//     let char = str[i];
//     if (open[char]) {
//       stack.push(char);
//     } else if (closed[char]) {
//       if (open[stack.pop()] !== char) return false;
//     }
//   }
//
//   console.log('stack : ', stack);
//
//   return stack.length === 0;
// };
