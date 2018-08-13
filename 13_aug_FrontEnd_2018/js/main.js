let regEx = new RegExp('abcd'); // new RegExp(pattern, flags)
let regEx2 = /abcd/; // /pattern/flags

// test(), exec()

let sourceStr = 'hello RegExp hello hello';

// [abc]
let chSet = /[ts]ell/i;

// let helloRegEx = /(hello)+/i;

// let result = helloRegEx.test(sourceStr);
// let result2 = helloRegEx.exec(sourceStr);
// console.log(result);
// console.log(result2);

// let str = 'bell';
// console.log(chSet.test(str));

// range 
// console.log(/[a-c]/i.test('ABCD'));

let alt = /red|green car/;
console.log(alt.test('red car'));
console.log(alt.test('green car'));
console.log(alt.test('purple car'));

let check = /^\d{10}$/
console.log(check.test('1234567890'));

let reg = /[0-9]-[12]-[\d]{4}/