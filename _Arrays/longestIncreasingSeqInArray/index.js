//returns longest increasing sequence (if there are multiples returns the first one)
function longestIncreasingSequence(arr) {
   if(!Array.isArray(arr)) return -1;

   let currArr = [arr[0]];
   let maxArr = [];

   for(let i = 1; i < arr.length; i++) {
     if(arr[i] > arr[i-1]) {
       currArr.push(arr[i]);

       if(currArr.length > maxArr.length) {
         maxArr=currArr
       }
     } else {
       currArr=[arr[i]];
     }
   }

   return maxArr;
 }

module.exports = { longestIncreasingSequence };
