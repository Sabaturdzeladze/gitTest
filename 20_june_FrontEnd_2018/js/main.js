// function defaultParams (x = 4, y = 5) {
//     return x * y;
// }

// console.log(defaultParams());



// Exercise 1

// function checkAge (age, granted, denied) {
//     debugger
//     if (age < 18) denied();
//     else granted();
// }
// let age = prompt("what is your age?", 18);
// let granted = () => alert("Access granted");
// let denied = () => alert("Access denied");
// checkAge(age, granted, denied);

// endExercise


// Arrays

// let years = new Array(10);
// let years2 = [10];

// console.log(years.length);
// years.length = 5;
// console.log(years.length);

// console.log("-------------------------");
// console.log(years2.length);
// years2.length = 17;

// console.log(years2.length);

// let fruits = ["apple", 'banana', 'cherry',];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[fruits.length - 1]);

// fruits[2] = 'lemon';
// console.log(fruits);

// let arr = ['apple', {name: "John"}, true, () => {alert("Hello from array") },];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1].name);
// arr[3]();

let numbers = [];
//      push/pop

numbers.push(1);
numbers.push(3);
numbers.push(8);
numbers.push(14);
// console.log(numbers);
// let removed = numbers.pop();
// LIFO
// console.log(`removed: ${removed}`);
// console.log(numbers);
// numbers.length = 0;
// console.log(numbers);


// FIFO
// shift/unshift
// numbers.unshift(1);
// numbers.unshift(3);
// numbers.unshift(8);
// numbers.unshift(14);

// console.log(numbers);

// removed = numbers.shift();
// console.log(`removed: ${removed}`);
// console.log(numbers);


let n = numbers;
console.log(n);
// console.log(n === numbers);      TRUE

n.push(33);
console.log(numbers);

// let clone = Object.assign({}, numbers);
// console.log(clone);

let clone = numbers.slice();
clone.push(64);
// console.log(numbers);
// console.log(clone);

clone.age = 11;
numbers.age = 13;
console.log(clone.age); // console.log(clone["age"]);

// for (let index = 0; index < numbers.length; index++){
//     console.log(numbers[index]);
// }


for (number of numbers) {
    // console.log(number);
}
// console.log("---------------------");

for (number in numbers) {
    // console.log(numbers[number]);
}

// console.log(numbers.toString());
// console.log(numbers.join("-"));
// console.log(numbers);

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(matrix);


// DOM
// console.log(document);
// console.log(document.documentElement);
// childNodes, firstChild, lastChild

// console.log(document.body);
// console.log(document.head);

// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

for(let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
    
}


