//create a function that gets rid off all extra whitespace more than one space

//my solution
function whitespace1(str) {

	return str.trim()
					  .split(' ')
					  .filter(elem => elem!=='')
					  .join(' ');
}

// //log version
// function whitespace1(str) {
//
// 	let arr = str.trim()
// 					  .split(' ');
//   console.log('arr: ', arr);
//
// 	let filtered = arr.filter(elem => elem!=='');
//  console.log('filtered: ', filtered);
//
//   return filtered.join(' ');
// }

//regex solution
function whitespace2(str) {
//	\s matches all whitespace characters, and + for match one or more
	return str.replace(/\s+/g, " ").trim();
}

//replaces whitespace with %20 (non-regex solution)
function replaceWhitespace(str) {
	return str.split('')
	          .map(elem => {
              if(elem===' ') return '%20';
              else return elem;
              })
            .join('')
}

//regex solution replacing whitespace with %20
function replaceWhitespaceRegex(str) {
  return str.replace(/\s/g, "%20");
}

module.exports = { whitespace1, whitespace2, replaceWhitespace, replaceWhitespaceRegex }

//explanation of 1 above, using example :  " Hey    how are   you  doing   today?"
//the trim will get rid of front and back whitespace
//the split will create the following array
// arr:  [ 'Hey', '','', '', 'how','are','','','you','','doing','','','today?' ]
//the filter will strip all empty elements
//join will bring everything back together with one space
