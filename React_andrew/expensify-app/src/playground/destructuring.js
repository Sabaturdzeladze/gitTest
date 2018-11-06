// --------------- Object Destructuring ---------------

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: firstname = 'Unknown', age} = person;     //default value for name

// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;        //renaming temp to temperature

// console.log(`it's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// ------------- Array destructuring --------------

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [coffee, , price] = item

console.log(`A medium ${coffee} costs ${price}`);