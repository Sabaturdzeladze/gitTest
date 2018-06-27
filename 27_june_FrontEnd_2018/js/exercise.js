let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function getMaxSubSu(arr) {
    let mas = [];
    for (let i = 0; i < arr.length; i++){
        // debugger
        let sum = 0;
        for (let k = i; k < arr.length; k++){
            
        }
        mas[i] = sum;
    }
    mas = mas.sort();
    return mas[mas.length - 1];
}

console.log(getMaxSubSu(arr));