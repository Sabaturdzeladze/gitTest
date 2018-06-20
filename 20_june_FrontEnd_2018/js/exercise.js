let array = [];
let sum = 0;
for (let i = 0; i <= array.length; i++ ){
    array[i] = prompt("Enter a value");
    // debugger
    sum += Number(array[i]);
    if (array[i] == '' || array[i] == undefined ){
        break;
    }
    if (isNaN(sum)){
        alert("input is not a number");
        break;
    }
       
}

alert(`the sum is ${sum}`);