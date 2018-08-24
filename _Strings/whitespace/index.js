//create a function that gets rid off all extra whitespace more than one space

//my solution
function whitespace1(str) {

	return str.trim()
					  .split(' ')
					  .filter(elem => elem!=='')
					  .join(' ');
}

//regex solution
function whitespace2(str) {
	return str.replace(/\s+/g, " ").trim();
}

module.exports = { whitespace1, whitespace2 }

//explanation of 1 above, using example :  " Hey    how are   you  doing   today?"
//the trim will get rid of front and back whitespace
//the split will create the following array
// arr:  [ 'Hey', '','', '', 'how','are','','','you','','doing','','','today?' ]
//the filter will strip all empty elements
//join will bring everything back together with one space
