var balancedParens = function(str) {
  var stack = [];
  var open = { '{': '}', '[': ']', '(': ')' };
  var closed = { '}': true, ']': true, ')': true };

  for (var i = 0; i < str.length; i ++) {
    var chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) return false;
    }
  }

  return stack.length === 0;
};

//this one is my own interpretation of balanced parens based on my interview question...
//it will only work for input type of ( or )
function balanced(inputString) {
    let arr = [];
    let outputString = "";

    let i = 0;
    for (let char of inputString) {
      if (char == '(') {
        arr.push(i);
      } else {

        if (arr.length == 0) {
          return false;
        }
        arr.pop();
      }
      i++;
      outputString = outputString + char;
    }
    return arr.length===0
}

console.log(balanced('(())('));
console.log(balanced('(())'));
console.log(balanced('((())())(((())))(((()))))))()()()))))))()('));
console.log(balanced('((())())(((())))(((()))))))()()()()('));
console.log(balanced('((())())(((())))(((()))))))()()()()'));
console.log(balanced('((())())()()()()'));
