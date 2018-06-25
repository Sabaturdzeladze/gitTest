
// let car = {
//     make: 'bmw',
//     model: '745li',
//     year: 2010,
//     getPrice: function(){
//         return 5000;
//     },
//     printDescription: function(){
//         console.log(this.make + " " + this.model);
//     }
// }

// car.printDescription();
// console.log(car.year);
// // console.log(car['year']);

// let a = {
//     myProperty: {b: 'hi'}
// };
// console.log(a.myProperty.b);

// let c = {
//     myProperty: [
//         {d: 'this'},
//         {e: 'can'},
//         {f: 'get'},
//         {g: 'crazy'}
//     ]
// }

// volume
// let cylinder = {
//     height: 50,
//     radius: 20,
// }

// function volume(obj){
//     return Math.PI * obj.height * (obj.radius ** 2);
// }
// console.log(volume(cylinder));



// BUBBLE SORT
// let arr = [98, -4, 23, 123, 59, -48, 40, 34, 87, 1948, 15, -4];

// for (let i = 0; i < arr.length; i++) {
//     for (let item = 0; item < arr.length; item++) {
//         if (arr[item] > arr[item + 1]) {
//             let a = arr[item];
//             arr[item] = arr[item + 1];
//             arr[item + 1] = a;
//         }
//     }
// }
// console.log(arr);

//End of BUBBLE SORT


// Subset of a string
function Subset(str){
    this.str = str;
    let arr = [];
    debugger
    for (let i = 0; i < this.str.length; i++){
        arr[i] = this.str[i];
        // delete this.str[i];
        for (let k = i + 1; k < this.str.length; k++){
            arr[k] = arr[k-1] + this.str[k];
        }
    }
    return arr;
}

console.log(Subset("rame"));
