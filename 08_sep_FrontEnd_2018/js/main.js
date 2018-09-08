function insertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr.splice(i + 1, 1);
            for (let j = 0; j < i; j++) {
                if (temp[0] < arr[j]) {
                    arr.splice(j, 0, temp[0]);
                    break;
                }
            }
        }
    }
    return arr;
}

// console.log(insertSort([1, 2, 3, 5, 9, 17, -1, 2, -5, 6, 4]));

// function mergeSort(arr) {
//     let middle = Math.floor(arr.length / 2)
//     let arr1 = arr.slice(0, middle)
//     let arr2 = arr.slice(middle);

//     return merge(arr1, arr2)
// }

// console.log(mergeSort([1, 2, 9, 5, 17, -1, 2, -5, 6, 4]));

// function merge(left, right) {
//     left = insertSort(left)
//     right = insertSort(right)
//     let arr = [];

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             arr.push(left[0]);
//             left.shift();
//         }
//         else {
//             arr.push(right[0]);
//             right.shift()
//         }
//     }
    
//     return arr.concat(left, right)
// }

function quickSort(numbers){
    if (numbers.length <= 1) return numbers;

    const pivot = numbers[numbers.length - 1];
    const left = [];
    const right = [];

    for ( let i = 0; i < numbers.length - 1; i++ ){
        numbers[i] < pivot ? left.push(numbers[i]) : right.push(numbers[i]);
    }

    return [ ...quickSort(left), pivot, ...quickSort(right) ];
}
console.log(quickSort([1, 2, 9, 5, 17, -1, 2, -5, 6, 4]));
