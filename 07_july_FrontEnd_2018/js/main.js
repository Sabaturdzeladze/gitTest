// // function greet(){
// //     alert("SetTimeout()")
// // }


// // setTimeout(greet, 2000)


// // setTimeout(() => {
// //     alert("arrow function")
// // }, 1000);



// // interval 

// // let intervalId = setInterval(() => {
// //     alert('setInterval')
// // } , 2000);

// // setTimeout = (() => {
// //     clearInterval(intervalId);
// //     alert("stop");
// // }, 5000);


// // setTimeout(() => alert("world"), 0)
// // alert("hello")

// let i = 0;

// // let start = Date.now();

// // function count(){
// //     for(let j = 0; j < 2e9; j++){
// //         i++;
// //     }
// //     alert(`Done ${Date.now() - start} ms`)
// // }
// // count()

// // function count2(){
// //     do {
// //         i++;
// //     }
// //     while(i % 1e6 !=0){
// //         if( i == 2e9 ){
// //             alert(`Done ${Date.now() - start} ms`)
// //         }
// //         else{
// //             setTimeout(count2, 0);
// //         }
// //     }
// // }
// // count2()

// function printNumbers(from, to){
//     // let i = 0;
    
//     // setInterval(() => {
//     //     if (i == to) {clearInterval(this)}
//     //     else {console.log( (i++) )};
//     // }, 1000);
//     setTimeout(function go() {
//         console.log(from);
//         if(from < to){
//             setTimeout(go, 1000);       // go-s meshveobit tavidan vacxadebt.
//         }
//         from++
//     }, 1000)
// }

// // printNumbers(0, 20)



// // closure
// function add(first, second){
//     return first + second;
// }

// function sub(first, second){
//     return first - second;
// }

// function mul(first, second){
//     return first * second;
// }

// function identity(x){
//     return function(){
//         return x;
//     }
// }

// function addF (first){
//     return function(second){
//         return first + second;
//     }
// }


// let myX = identity(8);
// // console.log(myX());

// let addf = addF(8)      // or addF(8)(5)        output 13;
// console.log(addf(5))

// // ---------------------------------------
// function liftf(binary){
//     return function(first){
//         return function(second){
//             return binary (first, second)
//         }
//     }
// }

// let liftF = liftf(mul)(2)(4)

// // console.log(liftF);


let star = new Date("2018 May 09")
console.log(star);
