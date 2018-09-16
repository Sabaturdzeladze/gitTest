const maxTime = 1000;

let evenDoubler = (v, callback) => {
    let waitTime = Math.floor( Math.random() * maxTime + 1 )
    if (v % 2){
        setTimeout(() => {
            callback(new Error(`Odd Number`))
        }, waitTime)
    } else {
        setTimeout(() => {
            callback(null, v * 2, waitTime);
        }, waitTime);
    }
}

// error, data, sth else

module.exports .evenDoubler = evenDoubler
// module.exports.maxTime = maxTime