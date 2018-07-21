let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aClean(arr) {
    let newArr = [];
    let count = 0;
    for (let k = 0; k < arr.length; k++) {
        for (let i = k + 1; i < arr.length; i++) {
            if (newArr.includes(arr[k])) {
                continue;
            }
            else {
                if (arr[k].length == arr[i].length) {
                    count = 0;
                    for (let z = 0; z < arr[k].length; z++) {
                        if (arr[i].toLowerCase().includes(arr[k][z])) {
                            count++;
                        }
                        if (count == arr[k].length) {
                            newArr.push(arr[k]);
                            let index = arr.indexOf(arr[i]);
                            if (index > -1) {
                            arr.splice(index, 1);
                            }
                        }
                    }
                }
            }
        }
    }
    return newArr;
}


console.log(aClean(arr));
