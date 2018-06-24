'use strict';

// let user = new Object();
let user_2 = {};

// JSON {}
let user = {
    name: 'John',
    age: 33
}

user_2.name = 'User 2'
user_2.age = 30;

user.isAdmin = true;
// console.log(user.name, user['age'], user.isAdmin);
// delete user.age;
// console.log(user.name, user['age'], user.isAdmin);
// console.log(user);
// let key = prompt("Enter key: ", 'name');
// alert(user[key]);




// Object.defineProperty(user, "lastname", {
//     value: "Doe",
//     writable: false,
//     configurable: false,
//     enumerable: false
// })

// console.log(user.lastname);
// user.lastname.configurable = false;
// Object.defineProperty(user_2, {
//     name: {value: "Test", writable: false},
//     lastname: {value: "lastname", writable: false}
// })

// user.lastname = 'Smith';
// console.log(user.lastname);
// delete user.lastname;
// console.log(user.lastname);


let speed = 300;
let color = "black";
let year = 2018;

let car = {
    speed,
    color,
    year,
    engine: 6.3,
    beep(){
        alert("Dausignale bebiashens!");
    },
}

// Object.defineProperty(car, 'speed', {
//     value: speed,
//     enumerable: false,
// })

// console.log(car);
// console.log('engine' in car);

// for (let key in car){
//     console.log(`key: ${key}, value: ${car[key]}`)
// }

const myConst = {
    name: "Const",
}

myConst.new = "new";
console.log(myConst);

// myConst = {
//     name: "const",
//     new: "newnew"
// }

// let clone = Object.assign({}, user);
// console.log(user, clone);


// user.sayHi = function(){
    // alert("HELLO!..");
    // alert(this.name);
// }
// user.sayHi();
// user["sayHi"]();

// car.beep();

// function bla(){
//     alert(this);
// }
// bla();

// let user3 = {
//     name: "javascript",
//     sayHi(){
//         let func = () => alert(this.name);
//         func();
//     },
// }

// user3.sayHi();

// function makeUser (){
//     return {
//         name: "John",
//         ref: this
//     }
// }

// let user1 = makeUser();
// alert(user1.ref.name);


function greet (){
    alert(this.name);
}

function say(time, phrase){
    alert(`[${time}] ${this.name}: ${phrase}`);
}
// call, apply

let client ={ name: "client" };
let admin ={ name: "admin" };
let john = {name: "John"};

// greet.call(client);
// greet.call(admin);

// say.call(john, '10:00', "hello");

// let message = ['10:00', "Hello"];
// say.apply(john, message);

let id = Symbol("id");
let id1 = Symbol("id");

console.log(id1 == id);

john[id] = "ID Value";

console.log(john[id]);

for (let key in john){
    console.log(key);
}

let customer = {
    name: "super",
    [id]: 140,
}

function User (name){
    this.name = name;
    this.isAdmin = false;

    this.hello = function(){
        alert(`My name is: ${this.name}`);
    }
}

let conUser = new User("New User");
console.log(conUser);
// conUser.hello();

let num = 5;
let single = 'single';
let double = "double";
let backticks = `backticks`;

console.log('my ' + num + single);
console.log('my ' + num + double);
console.log(`my ${num} ${single}`);

console.log('\u00A9');
console.log('\u{20331}');
console.log('I \u1F60D JS' );
console.log('I\'m good \\' );

let str = 'hello'
console.log("String".length);
console.log(str.charAt(2));
console.log(str[0]);

for (let char of str){
    console.log(char);
}
// str[0] = 'h';
// console.log(str);

// str = 'hello from the other side';
// console.log('uppercase'.toUpperCase());
// console.log('LOWERCASE'.toLowerCase());

// console.log(str.indexOf('from'));

let target = 'the';
let pos = 0;

while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1;
}