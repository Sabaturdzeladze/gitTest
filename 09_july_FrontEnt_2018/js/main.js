// first-class citizen
// local scope, block scope = lexical scope | Environmental

// {
//     // block scope
// }

// function a(){
//     //local scope
// }


let text = "My text";
//outer Environment

function tell(txt) {
    // inner Environment
    console.log(`${text}, ----  ${txt}`);
}
tell("Gela")

function saySomething(firstName, lastName) {

    function getFullName() {
        return `${firstName} ${lastName}`;
    }
    console.log(`Hello, ${getFullName()}`);
    console.log(`bye, ${getFullName()}`);

}
// saySomething("Jaba", "Lipartia")

function counter() {
    let count = 0;
    return function () {
        return (count += 1);
    }
}

let myCounter = counter();
let myCounter2 = counter();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log("---------------");
// console.log(myCounter2());
// console.log(myCounter2());
// console.log(myCounter2());
// console.log(myCounter2());
// console.log(myCounter2());


{
    let message = "hello from block scope!";
    // console.log(message);
}
// console.log(message);


// IIFE

// ( function(){
//     let message = "hello from local scope!"
//     console.log(message);

// } )();      // jer funkcia ikmneba mere gamoidzaxeba egreve

// function inBetween(from, to) {
//     return function (element) {
//         if (element > to) {
//             return false;
//         }
//         if (element >= from) {
//             return true;
//         }
//     }
// }

// function inArray(array) {
//     return function (element) {
//         if (array.includes(element)) {
//             return true;
//         }

//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3, 6)))
// console.log(arr.filter(inArray([1, 2, 10])))



// -----------------------------    PROTOTYPE -> Object()

// let myFunc = function(){};
// console.log(myFunc.prototype);  
// Array.prototype.myVar = 'MyVar Value'
// let newArr = new Array();
// console.log(newArr.myVar);
// __proto__        //accesing parent object key

// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animanl walk...");  
//     }
// }

// let dog = {
//     barks: true,
// }

// let lekvi = {
//     age: 1,
//     __proto__: dog,
// }

// dog.__proto__ = animal;
// console.log(dog.eats);
// console.log(dog.barks);
// dog.walk()
// console.log("-----");

// lekvi.walk();
// console.log(lekvi.eats);

let hamster = {
    stomach: [],
    eat(food){
        this.stomach.push(food);
    }
}
