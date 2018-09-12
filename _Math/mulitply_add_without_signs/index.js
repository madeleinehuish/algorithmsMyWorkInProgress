
//create a function that multiplies two numbers without * symbol
function multiplyWithoutTimes(num1, num2) {
  let sum = 0
  for(let i=1; i <=num2; i++){
    sum+=num1;
  }
  console.log('sum: ', sum);
  return sum;
}

//create a function that adds two numbers without + sign
//this uses bitwise operators
function add(x, y) {
  while(y!==0) {  //iterate till there is no carry
    let carry = x & y; //carry now contains common set bits of x & y
    x = x ^ y;  //sum of bits of x and y where at least one of the bits is not set
    y = carry << 1; //carry is shifted by one so adding it to x gives required sum
  }
  return x
}
