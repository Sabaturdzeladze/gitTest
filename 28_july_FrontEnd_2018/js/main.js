function makePromise(time) {
    return new Promise( function(resolve, reject){
            setTimeout( () => {
                if(time > 3000) {
                    // console.log(`rejecting`);
                    reject(new Error(`Too long time`));
                }
                else {
                    // console.log(`Resolving`);
                    resolve(`OK its ${time}`);
                }
            }, time)
    }  );
}


// let sec1 = makePromise(1000)
// sec1.then( result => {
//     console.log(result);
// } )
// .catch( error => console.log(error.message ))

// let sec2 = makePromise(2000)

// let sec3 = makePromise(3000)

// let sec4 = makePromise(4000)
// sec4.then(result => {
//     console.log(result);
// } )
// .catch( error => console.log(error.message ))

let allPromise = Promise.all([sec1, sec2, sec3]);
// allPromise
// .then( result => {
//     console.log(result);
// } )
// .catch( error => console.log(error.message) )

// let allRace = Promise.race([sec1, sec2, sec3, sec4])
// allRace
// .then( result => {
//     console.log(result);
// } )
// .catch( error => console.log(error.message) )

// let resolvedPromise = Promise.resolve(`Resolved Promise Example`)

// resolvedPromise.then( (result) => {

// } )
// .catch( err => console.log(err.message))


// Async / Await
