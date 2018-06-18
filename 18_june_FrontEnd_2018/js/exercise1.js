let input = Number(prompt("Enter natural number"));
let input2 = Number(prompt("enter its power"));
debugger

while (input < 1 && (input % 1 != 0)){
    input = Number(prompt("it's not a natural number try again"));
}

function power (x, n){
    alert( x ** n);
}

power(input, input2);