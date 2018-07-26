//sort only the odd numbers in an array and return

//my first solution
function sortArray(array) {
  let oddArr = array.filter(elem => elem%2!==0).sort((a, b) => a - b);
  let evenArr = array.filter(elem => elem%2===0);
  let newArr = array.map(elem => {
    if(elem%2!==0) {
      return oddArr.shift();
    } else return evenArr.shift();
  })
  return newArr;

}

// //concise (this solution was copied)
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }
