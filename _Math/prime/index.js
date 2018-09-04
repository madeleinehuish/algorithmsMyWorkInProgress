// //prime number is greater than one and only divisible by itself and 1

//solution #1
//this solution is not as efficient when combined with sieveOfEratosthenes
function isPrime(num) {
  if(num < 2) return false;
  for(let i=2; i < num; i++){
    if(num%i===0) return false;
  }
  return true;
}

//return all prime numbers from 0 to that number
function sieveOfEratosthenes(n) {
  let primes = [];

  for(let i=0; i <= n; i++) {
    if(isPrime(i)) primes.push(i);
  }
  return primes;
}

//solution #2
//more efficient: I got this from https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
const primesOptimal = number => {
    const numbers = new Array(number + 1);
    numbers.fill(true);
    numbers[0] = numbers[1] = false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        for (let j = 2; i * j <= number; j++) numbers[i * j] = false;
    }

    return numbers.reduce(
        (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
        []
    );
};

module.exports = { isPrime, sieveOfEratosthenes, primesOptimal };


//You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those
//numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.
//non prime single digit : 1, 4, 6, 8, 9
function notPrimes(a,b) {
  let nonPrimeArr = [];
  for(let i = a; i <= b; i++) {
   if(!isPrime(i) && checkForPrimeDigits(i)) {
     nonPrimeArr.push(i)
   }
  }
  return nonPrimeArr;

  function checkForPrimeDigits(num) {
    let numStr = num.toString();
    for(let elem of numStr) {
     if(elem!=='2' && elem!=='3' && elem!=='5' && elem!=='7') {
       return false;
     }
    }
    return true;
  }
  function isPrime(num) {
    if(num < 2) return false;
    for(let i=2; i < num; i++){
     if(num%i===0) return false;
    }
    return true;
  }
}
