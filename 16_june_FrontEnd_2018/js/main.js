//#region if
// let num = prompt('Enter a number');

// // &&, ||, !
// if (num % 2 == 0) {
//     alert("Even");
// }
// else {
    
// }
// #endregion

// if (0) {
//     alert("true");
// }

// let accessAllowed;
// let age = prompt("age");
// if (age > 18) {
//     accessAllowed = true;
// }
// else {
//     accessAllowed = false;
// }

// alert(accessAllowed);

// let result = condition ? value_1 : value_2;

// accessAllowed = (age > 18) ? true : false;

// let user = prompt ("Who's there?");

// if (user == "admin"){
//     let password = prompt("Enter your password: ")
//     if (password == 'TheMaster'){
//         alert("Welcome");
//     }
//     else if (password == undefined){
//         alert("Canceled");
//     }
//     else {
//         alert("Wrong password");
//     }
// } 
// else if (user == undefined){
//     alert("Canceled");
// }
// else {
//     alert("I don't know you");
// }


// let hour  = 10;

// if ( hour < 11 || hour > 18 ) {
//     alert("Closed.")
// }


// let hour = 12;
// let minute = 44;

// if (hour == 12 && minute== 44){
//     alert("Time is 12:44");
// }

// let year = prompt("enter a year: ");

// if (year % 4 == 0 && ( !(year % 100 == 0) || year % 400 == 0)) {
//     alert("leap year");
// }
// else {
//     alert("not a leap year");
// }


// let a = 4;

// switch ( a ) {
//     case 0: alert("0");
//     break;
//     case 1: alert("1");
//     break;
//     case 2: break;
//     case 3: break;
//     case 4: alert("4");
//     break;

//     default: alert("5");
// }

// let browser = prompt("Enter a browser");

// if (browser == "edge"){
//     alert ("You have the Edge")
// }
// else if (browser == "chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
//     alert("We support this browser");
// }

// else {
//     alert("We hope that this page looks ok");
// }

// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));

// let operation = prompt("enter the operator: * or + or - or /")

// switch (operation) {
//     case "+": alert(a + b);
//     break;
//     case "-": alert(a - b);
//     break;
//     case "*": alert(a * b);
//     break;
//     case "/": alert(a / b);
//     break;
//     default: alert("operation not complete");
//     break;
// }


// let i = 0;
// while (i < 10){
//     document.writeln(i);
//     i++;
// }
// let num = Number(prompt("Enter a Number"));
// while (isNaN(num)){
//     alert("Error")
//     num = Number(prompt("Enter a Number again"));
// }

// let input = Number(prompt("Enter any number"));
// let sum = 0;
// let x = 0;
// debugger
// while (input > 0){
//     x = input % 10;
//     sum += Number(x);   
//     input = Math.floor(input / 10);
// }
// alert(sum);

// let min = Number(prompt("Enter minimum number"));
// let max = Number(prompt("Enter maximum number"));

// let cont = 0;
// if (min > max) {
//     cont = min;
//     min = max;
//     max = cont;
// }

// for (let i = min; i < max; i++) {
//     if (i % 2 == 0){
//         document.write(i)
//     }
// }


let input = Number(prompt("Enter a number"));
let result = '';
for (let i = 0; i < input; i++){
    
    for (let k = 0; k < input; k++){
        result += '*';
    }
    result += "\n";
}
console.log(result);