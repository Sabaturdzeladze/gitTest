const MathFun = require('./mathfun');

let processResults = (err, result, time) => {
    if (err){
        console.log(`Error - ${err}`);
    }
    else {
        console.log(`Result is - ${result}`, `Time - ${time}`);
    }
}

for (let i = 0; i < 10; i++){
    console.log(`Num - ${i}`);
    MathFun.evenDoubler(i, processResults)
}