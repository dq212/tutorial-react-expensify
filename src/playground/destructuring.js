// const person = {
//     name: 'dq',
//     age: 46,
//     location: {
//         city: 'LA',
//         temp: 48
//     }
// }

// const {name:firstname = 'Anonymous', age} = person;
// const {temp:temperature, city} = person.location;
// console.log(`${firstname} is ${age}`)

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         // name: "Penguin"
//     }
// }

// const {title, author} = book;
// const {name:publisherName = "Self-Published"} = book.publisher;


// console.log(`The publisher is ${publisherName}`) //Penguin, Self-Published

//
// Array destructuring

// const address =['1299 S Juniper Street', 'New York', 'NY', '10001'];
// const [,city='Unknown' , state] = address;
// console.log(`You are in ${city} ${state}`)

const item = ['Coffee (iced)', '3.00', '3.50', '3.75'];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs $${mediumPrice}`)