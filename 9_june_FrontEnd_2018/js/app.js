"use strict"

const COLOR_GREEN = '#0f0';
const COLOR_ORANGE = '#ff7f00';

// debugger;
// alert('Hello World!..');
// confirm('are you ok?');
// prompt ('Input message:');

// ASI

// alert('1');
// alert("2");

// var, let, const

let message;
message = "my message";

console.log(message);

let user = 'John', age = 33;

console.warn (message, user, age);

let _1adc;
// camelCase

let num = 15;
{
    let num = 17;
    console.log(num);
}

console.log(num);

// let admin, name;
// name = 'John';
// admin = name;

// alert(admin);

let foo = 99;
console.log(typeof foo)

foo = 'bar';
console.log(typeof foo)

foo = true;
console.log(typeof foo)

console.log("number"*2);
// null

// $age = 13;
// $message = "Sheni asakia: $age";

age = 13;
message = 'Sheni asakia: ' + age;

console.log(message);

message = `sheni asakia: ${age}`;
console.log(message);

// let checked = false;
// let isValid = true;

// let isGreater = 5 > 6;

// 10, -1, false, 2, 

age = parseInt(prompt("Tkveni asaki?"));

let isOkay = confirm("Kargad Xar?");
console.log(isOkay);

