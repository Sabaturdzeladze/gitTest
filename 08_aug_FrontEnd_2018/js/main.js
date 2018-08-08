// PCRE, *POSIX

// \n \t \r \v
// delimiters -> / /im
// /abc/

// ? 0-jer an 1-xel mainc
// * 
// +

let myString = `Product $13,
                Product $15,
                Product $112`;

let myRe = /[$0-9]+\s*/g;
let result = myRe.exec(myString);
let res = myString.match(myRe);
console.log(result);
console.log(res);