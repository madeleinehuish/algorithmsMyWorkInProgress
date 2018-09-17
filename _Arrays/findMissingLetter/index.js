function findMissingLetter(arr){

    let str = arr.join('');
    let i = 0;
    let j = 0;
    let m = 122;
    if (str) {
        i = str.charCodeAt(0);
        console.log('str.charCodeAt(0): ', str.charCodeAt(0));
        while (i <= m && j < str.length) {
            if (String.fromCharCode(i) !== str.charAt(j)) {
                return String.fromCharCode(i);
            }
            i++; j++;
        }
    }
    return undefined;

}


// describe("KataTests", function(){
//   it("exampleTests", function(){
//     Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
//     Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
//   });
// });
