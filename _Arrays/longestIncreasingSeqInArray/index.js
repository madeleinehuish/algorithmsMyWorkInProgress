//returns longest increasing sequence (if there are multiples returns the first one)
function longestIncreasingSequence(arr) {
   if(!Array.isArray(arr)) return -1;

   let max = 0;
   let maxArr = [];
   let current = 0;
   let currArr = [arr[0]];

   for(let i = 1; i < arr.length; i++) {
     if(arr[i] > arr[i-1]) {
       current++;
       currArr.push(arr[i]);

       if(current > max) {
         max=current;
         maxArr=currArr
       }
     } else {
       current = 0;
       currArr=[arr[i]];
     }
   }

   return maxArr;
 }

module.exports = { longestIncreasingSequence };
