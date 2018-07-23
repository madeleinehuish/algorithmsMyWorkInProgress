
// //this one finds amount of all duplicates in a given array (from stack overflow)
let duparr = [1, 3, 3, 4, 200, 4, 25, 78, 3, 100, 2];

function finddupes(arr) {
    let a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}

finddupes(duparr)


//finds number of dupes and lists them out by key(amount over 1)
const elements = ["apple", "apple", "orange", "apple", "banana", "orange"];

function findTotalAmountOfEach(arr) {
  let counts = {};
  arr.forEach(elem => {
    counts[elem] = (counts[elem] || 0) + 1;
  });
  return counts
}

findTotalAmountOfEach(elements);



//this function returns the number of total dupes (over 1)
function findTotalNumberOfDupes(arr) {
  var totalDupes = 0;
  let counts = {};
	arr.forEach(elem => {
    counts[elem] = (counts[elem] || 0) + 1;
	});
  for(let elem in counts){
  	if (counts[elem] > 1) totalDupes=totalDupes+(counts[elem]-1);
  }
  return totalDupes;
}

//return array of all duplicates
function returnArrOfAllDuplicates(arr) {
  var arrOfDupes =[];
  let charMap = {};
  for(let char of arr) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  for(let char in charMap) {
    if(charMap[char] > 1) arrOfDupes.push(char);
  }
  return arrOfDupes;
}

function areThereAnyDupes(arr) {
  let counts = {};
  arr.forEach(elem => {
    counts[elem] = (counts[elem] ||0) + 1;
  });
  for(let elem in counts) {
    if (counts[elem] > 1) return true;
  }
  return false;
}

//are there any duplicates in this array?
function areThereAnyDupes(arr) {
  let counts = {};
  for(let char of arr) {
    counts[char] = (counts[char] || 0) + 1;
    if(counts[char] > 1) return true;
  }
  return false;
}

//find last repeating character in string
function findLastRepeatingCharacter(str) {
  let counts = {};
  for(let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  for(let char of str.reverse()) {
    if (counts[char] > 1) {
      return char;
    }
  }
  return null;
}

function findFirstRepeatingCharacter(str) {
  let counts = {};
  for(let char of str) {
    counts[char] = (counts[char] || 0) + 1;
    if(counts[char] > 1) return char;
  }
  return null;
}

function findFirstNonRepeatingCharacter(str) {
  let counts = {};
  for(let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  for(let char of str) {
    if(counts[char] === 1) return char;
  }
  return null;
}

function findLastNonRepeatingCharacter(str) {
  let counts = {};
  for(let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  for(let char of str.reverse()) {
    if(counts[char] === 1) return char;
  }
  return null;
}

module.exports = { areThereAnyDupes,
                   findFirstRepeatingCharacter,
                   findLastRepeatingCharacter,
                   findFirstNonRepeatingCharacter,
                   findLastNonRepeatingCharacter };
