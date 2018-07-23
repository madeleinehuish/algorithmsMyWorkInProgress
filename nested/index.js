

// function objectFlattener (object) {
//   return Reflect.apply(Array.prototype.concat, [], Object.keys(object).map(key => {
//     if (object[key] instanceof Object) {
//       return objectFlattener(object[key]);
//     }
//     return `${ key }: ${ object[key] }`;
//   }));
// }

function objectFlattenerModified (object) {
  return Reflect.apply(Array.prototype.concat, [], Object.keys(object).map(key => {
    if (object[key] instanceof Object) {
      return objectFlattenerModified(object[key]);
    }
    return `${ object[key] }`;
  }));
}

function isValInObject(obj, value) {
  let arr = objectFlattenerModified(obj);
  for(let val of arr) {
    if(val === value) {
      return true;
    }
  }
  return false;
}


module.exports = { objectFlattenerModified, isValInObject }
