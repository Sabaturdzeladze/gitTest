let arr = ['I', '<3', 'JavaScript'];
// let removed = arr.splice(1, 2);
let removed = arr.slice(1, 2);
// console.log(arr, removed);

let nums = [2, 4, 9, 5, 7, 13, 24, 1];

let users = [
    {id: 1, name: 'Gela'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Jimsheri'},
    {id: 4, name: 'Ani'},
    {id: 5, name: 'Koba'}
]

function compare (a,b){
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
// console.log(nums.sort((a, b) =>{ return a -b;}));    //tu a - b daabrunebs dadebits gadacvlis tu arada ara

let foundUser = users.find( user => user.id == 2);
// console.log(foundUser);

let filtered = users.filter(user => user.id < 4);
// console.log(filtered);

let doubled = nums.map((number, index, arr) => {
    return number * 2;
})

// console.table(doubled);

let html = users.map (user => {
    return `
        <div class='user'>
            <h2 class='title'>${user.name} <small>ID - ${user.id}</small></h2>
        </div>
    `;
        
})
document.body.innerHTML = html.join(' ')
// console.table(html)

console.log(nums);



function* generator(){
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

// Array.from(), ...varibale, for value of items
let g = generator();
// console.log(typeof g[Symbol.iterator] == 'function');

// console.log(typeof g.next() === 'function');

// console.log(typeof g[Symbol.iterator]() === g);
// console.log([...g]);
// let gr = Array.from(g)
// console.log(Array.from(g))

// for (let char of g) {
//     console.log(char);  
// }

let rangeCount = {
    start: 1,
    end: 13
}

rangeCount[Symbol.iterator] = function(){
    return {
        current: this.start,
        last: this.end,

        next(){
            if( this.current < this.last ){
                return {
                    done: false,
                    value: this.current++,
                }
            }else {
                return {done: true}
            }
        }
    }
}

// for (let num of rangeCount){
//     console.log(num);
// }


// Set

let set = new Set();

/* 

set.add()
set.has()
set.delete()
set.clear()
set.size

*/

set.add(5).add(1).add(8).add(1)
console.log(set)
// keys, values, entries

console.log(set.keys()); //iterable

for (let key of set.keys()){
    console.log(key);    
}

console.log(set.entries());
for (let [key, value] of set.entries()){
    // console.log(key, value);
}



// Date

// new Date()
// new Date(milliseconds)
// new Date(datestring)
// new Date(year, month, day, hours, minutes, seconds, ms)

let now = new Date();
// console.log(now);

// 1970 1 Jan
let start = new Date(0);
// console.log(start);

let fromString = new Date('2018-06-30');
// console.log(fromString);

let fromConst = new Date(2018, 7, 30, 13, 32, 48, 50)

// console.log(fromConst.getFullYear());
// console.log(fromConst.getMonth());
// console.log(fromConst.getDay());
// console.log(fromConst.getHours());
// console.log(fromConst.getUTCMonth());
// console.log(fromConst.getUTCDay());
// console.log(fromConst.getUTCDate());

let myMap = new Map();

// map.set()
// map.get()    danarcheni igive rac setshi

myMap.set(1, 'One');
myMap.set(2, 'Two');
myMap.set(false, 0);
myMap.set(true, 1);
myMap.set({name: 'John'}, "User")

// console.table(myMap);

for ( let key of myMap.keys()){
    console.log(key);
}
console.log();


for (let [key, value] of myMap.entries()){
    console.log(key, value);
}
console.log();

let prices = new Map([
    ['banana', 5],
    ['apple', 4],
    ['kiwi', 6],
]);

console.log(prices);

let formObj = new Map(Object.entries({
    name: 'John',
    age: 30,
}))

console.log(formObj);

