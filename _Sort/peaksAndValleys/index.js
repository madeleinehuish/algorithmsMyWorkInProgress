//as per cracking the coding interview problem 10.11, sort an array into 'peaks' and 'valleys'


function peaksAndValleysSorted(arr) {  //this version does valleys
	let sorted = arr.sort((a, b) => a - b);

	for(let i=0; i < sorted.length; i+=2){
		if(i === sorted.length-1) continue;
		[sorted[i], sorted[i+1]] = [sorted[i+1], sorted[i]];
	}

	return sorted;
}

function peaksAndValleysUnsorted(arr) {  //this version does peaks
  // console.log('starting arr: ', arr);
  let maxValue;
  let temp;

  for (let i = 1; i < arr.length; i += 2) {

		// get max of 3
    maxValue = Math.max(arr[i - 1], arr[i], arr[i + 1]);

    // If the max is not the middle value, then swap
    if (arr[i - 1] === maxValue) {
      [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
    } else if (arr[i + 1] === maxValue){
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }
  }

  return arr;
}


module.exports = { peaksAndValleysSorted, peaksAndValleysUnsorted };
