let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* arr.forEach((element, index, arr) => {
    console.log(`value - ${element}, index ${index}, array - ${arr}`);
 }); */

let newArr = arr.map((element, index, arr) => {
    return `<div>${element}</div>`;
})

/*  console.log(arr);
document.body.innerHTML = newArr.toString().split(',').join(" "); 
 */

let filtered = arr.filter((element) => {
    return !(element & 1);
    // return (element % 2) == 1;
})

// console.log(filtered);

// for (let entry of arr.entries()){
//     console.log(entry); 
// }
// for (let value of arr.values()){
//     console.log(value); 
// }
// for (let key of arr.keys()){
//     console.log(key); 
// }


// Object.keys();

// let styles = ["Jazz", "blues"];
// console.log(styles)
// styles.push("Rock-n-Roll");
// console.log(styles)
// styles[Math.floor(styles.length/2)] = "Classics";
// console.log(styles.shift(0));
// console.log(styles)
// styles.unshift('rap', 'reggae');
// console.log(styles);


// function sumAll (x,y, ...numbers){
//     console.log(numbers);
//     console.log(arguments);
// }

// // sumAll(1,2,3,4,5,6)

// let merge = [100, 113, ...[1,2,3,4,5,6], ...arr, 65];
// let str = 'GEORGIA';
// console.log([...str].join(" "));


// let elementNode = document.createElement('strong');
// let elementText = document.createTextNode("Georgia");

// let containerDiv = document.querySelector("#container")
// let p = containerDiv.querySelector('#para');

// p.appendChild(elementNode);
// elementNode.appendChild(elementText);

// console.log(document.body.innerHTML);

// insertBefore(elementNode, element)






