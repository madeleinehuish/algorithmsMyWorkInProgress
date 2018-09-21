// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

let str = "hi there! how is it going today?";

let caps = capitalize(str);
console.log('capitalized: ', caps);

function capitalize(sentence) {
  return sentence.split(' ')
                 .map(elem =>{
                    return elem[0].toUpperCase() + elem.substring(1); //can also use elem.slice(1)
                  })
                  .join(' ');
}

module.exports = capitalize;
