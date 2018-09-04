//find factorial of given number

//recursive solution
// function factorialRecursive (num) {
// 	if(num<0) {
// 		return -1;
// 	} else if(num===0) {
// 		return 1;
// 	} else {
// 			return (num * factorialRecursive(num-1));
// 	}
// }

// function factorialRecursive (num) {
// 	if(num<0) return -1; //not necessary but a safety factor
// 	if(num===0) return 1;
// 	return num * factorialRecursive(num-1);
// }

//one line factorial recursive
const factorialRecursive = number => {
  return number < 2 ? 1 : number * factorialRecursive(number - 1);
};

//while loop iterative solution
function factorialWhile(num) {
	let total = num;
  if (num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--;
    total *= num;
  }
  return total;
}

//for loop iterative solution
function factorialFor(num) {
	if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function factorialFor(num) {
  let total = num;
	if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    total *= i;
  }
  return total;
}

module.exports = { factorialRecursive, factorialWhile, factorialFor };
