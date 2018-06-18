// let box = document.querySelector('.box');
// box.style.backgroundColor = 'red';

//window.onload  -  mis shemdeg rac gverdi mtlianad chaitvirteba
//DOMContentLoaded  -  im shemtxvevashi roca mxolod html itvirteba da css shesrulebis processhia

// function DOMContentLoaded (){
//     alert("DOMCONTENTLOADED");
// }

// document.addEventListener('DOMContentLoaded', DOMContentLoaded);

// window.onload = function(){
//     alert("window.onload");
// }

// function getName () {
//     alert("Name");
// }

// let getName2 = function (){
//     alert("getname2");
// }

// getName2();

// function showMessage (from, text){
//     from = `* ${from} *`
//     alert(`${from}: ${text}`)
// }

// let from = 'John';
// showMessage(from, 'Hello')

// alert(from);

// function sum(x,y) {
//     return x + y;
// }

// let result = sum(5,8);

// function checkMovie(age){
//     if (age < 18) return;

//     alert("Access granted!..")
// }

// let age = prompt("Age?");

// function nothing(){};

// checkMovie(age);
// console.log(nothing()===undefined);




function ask (question, yes, no){
    if (confirm(question)) {
        yes();
    }
    else{
        no();
    }
}

function showOkay(){
    alert("you agreed.");
}

function showCancel(){
    alert("you Canceled...");
}

// ask("Do you agree?", function() {alert("You agreed.");}, function() {alert("You canceled.")});

// function f(arg1,arg2,arg3...argN) {}
// {arg1,arg2,arg3...argN} => {}

function sq(n) {
    return n * 2;
}

let sq2 = function(){
    return n * 2;
}

let sq3 = (n, k) => (n ** k) * 2;

// alert(sq3(4, 7));

// let say = () => alert("arrow function");
// say();

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled.")
)