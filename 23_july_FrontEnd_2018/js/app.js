// let a = 11;

// console.log(a);
// try{

//     console.log(b);
// }
// catch(error) {
//     console.log(error.message);
// }
// let b = 2;
// console.log(a);
// console.log(b);

// JSON - Javascript Object Notation

/* 
    
    {
        name: "JSON name",
        id: 667,
        isAdmin: true,
    }

*/

// try {
//     console.log("start of try");
//     undefinedVar;
//     console.log("end of try");
// }
// catch(error){   
//     console.log(`Error has occured: ${error.stack}`);
// }
// finally {
//     console.log("Always ready");
    
// }


let person = {
    name: "JSON Guy",
    id: 667,
    isAdmin: true,
}

let toSendData = [person, person, person];
// console.log(toSendData);
let serialized = JSON.stringify(toSendData)
// console.log(serialized);
let unserialized = JSON.parse(serialized)
// console.log(unserialized);

let json = `{name:"JSON Guy","id":667}`;

// try {
//     undefinedVar
//     let data = JSON.parse(json);
//     if (!data.isAdmin){
//         throw new SyntaxError("incomplete data: isAdmin property is not defined")
//     }    
// } catch (error) {
//     // console.log(`JSON Error - ${error}`);
//     if (error instanceof SyntaxError){
//         console.log(`JSON Error - ${error}`);
//     }
//     else {
//         console.log(`other Error - ${error}`);
        
//     }
// }

// window.onerror = (message, ulr, line, col, error) => {
//     console.log(message, ulr, line, col, error);
// }

// class Error {
//     constructor(message){
//         this.message = message;
//         this.name = "Error";
//         // this.stack = 
//     }
// }

// class ValidationError extends Error {
//     constructor(message){
//         super(message)
//         this.name = "ValidationError"
//     }
// }

// function validateJSON(json){
//     let user = JSON.parse(json);
//     if ( !user.age ){
//         throw new ValidationError("No Field : age")
//     }
//     if( !user.isAdmin) {
//         throw new ValidationError("No Field : isAdmin")
//     }  
// }

// try {
//     let user = validateJSON(json)
// } catch (error) {
//     if ( error instanceof ValidationError ){
//         console.log(`Invalid data - ${error.message}`);
//     }
//     else if ( error instanceof SyntaxError ){
//         console.log(`JSON Syntax Error - ${error.message}`);
//     }
//     else {
//         throw error;
//     }
// }

//  EXERCISE

class Error {
    constructor(message){
        this.message = message;
        this.name = "Error";
        // this.stack = 
    }
}

class ValidationError extends Error {
    constructor(message){
        super(message)
        this.name = "ValidationError"
    }
}

class PropertyRequiredError extends ValidationError {
    constructor (missingProp) {
        super(`No property - ${missingProp}`)
        this.name = "PropertyRequiredError"
        this.missingProperty = missingProp;
        
    }
}

function readUser(json) {
    let user = JSON.parse(json);
    if( !user.age ){
        throw new PropertyRequiredError("age");
    }
    if ( !user.name ){
        throw new PropertyRequiredError("name");
    }
    return user;
}

try {
    let user = readUser(`{"age": 25 }`)
} catch (error) {
    if (error instanceof ValidationError){
        alert(`Invalid Data: ${error.message}`)
        alert(error.name)
        alert(error.missingProperty); // name
    }else if (error instanceof SyntaxError){
        alert("JSON SYntax Error: " + error.message)
    }
    else {
        throw error;
    }
}