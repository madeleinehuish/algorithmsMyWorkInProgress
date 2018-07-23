/*

Given: "(())(", "(()()))"
Return: "(())", "(()())"

*/

function parentheses(inputString){
  let arr = [];
  let outputString = "";

  // "(())("
  // [4]
  // "(())("

  let i = 0;
  console.log('inputString is : ', inputString);
  for (let char of inputString) {
    // '('
    if (char == '(') {
      arr.push(i);
    } else {

      if (arr.length == 0) {
        console.log('continuing...');
        continue;
      }
      arr.pop();
    }
    i++;
    outputString = outputString + char;
    console.log('*********');
    console.log('arr is: ', arr);
    console.log('outputString is: ', outputString);
  }

  while(arr.length != 0) {
    let j = arr.pop();
    console.log('j is ', j);
    console.log('outputString.slice(0, j) is ',outputString.slice(0, j));
    // console.log('outputString.slice(j+1) is ', outputString.slice(j+1));
    // outputString = outputString.slice(0, j) + outputString.slice(j+1); //this was originally in here but not sure about it
    outputString = outputString.slice(0, j); //i added this instead of line 42. good idea???
  }

  return outputString
}

parentheses("((())())(((())))(((()))))))()()()))))))()(");
((())())(((())))(((()))))))()()()()
// console.log(parentheses("(())("));
