function sortByName (users){
    users.sort((a, b) => {
        if (a.name > b.name) {return 1};
        if (a.name < b.name) {return -1};
    });
}


let john = {name: 'John', age: 25};
let adam = {name: 'Adam', age: 30};
let mary = {name: 'Mary', age: 28};
let beth = {name: 'Beth', age: 23}

let arr = [john, adam, mary, beth];
sortByName(arr);
alert(arr[1].name);