//find sum of all multiples of 3 and 5 below 1000
function sumofAllMultiples() {
	let sum = 0
  for(let i=1; i <1000; i++){
    if(((i%3)===0 || (i%5)===0)) sum+=i;
  }
  return sum;
}

//number 2
function memoizedFib(n, memo={}) {

  if (memo[n]) return memo[n];
  if (n < 2) return n;

  return memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
}

function findFib() {

  let sum = 0;
  let counter = 1;
  let cont = true;
  while(cont) {
    let latest = memoizedFib(counter);
    if(latest > 4000000) cont = false;
    counter++;
    if(latest%2===0) {
      let evenFib = latest;
      sum = sum + evenFib;
    }

    console.log(counter)
    console.log('current sum: ', sum);
  }
  console.log('final sum: ', sum)
  // return sum;
}

findFib()
