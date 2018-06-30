// function unique (arr){
//     let arr1 = arr.filter( (value, index) => {
//         return arr.indexOf(value) === index;
//     } )
//     return arr1;
// }

let values = ['John', 'Harry', "Marry", "Harry", "Beth", "Harry", "Marry", 'John'];

// let tmp = [];
// for (item of values) {
//     if(!tmp.includes(item)) {
//         tmp.push(item);
//     }
// }
// alert(tmp)


// alert(unique(values))

function unique(arr){
    debugger
    arr = new Set(arr);
    return arr;   
}

alert(unique(values))