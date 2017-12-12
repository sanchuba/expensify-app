// const person = {
//   name: 'Danilo',
//   age: 28,
//   location: {
//       city: 'Arnhem',
//       temp: 7
//   }
// };
//
// const {name = 'Anonymous', age} = person;
//
// console.log(`${name} is ${age}.`);
//
// const {city, temp} = person.location;
// console.log(`It's ${temp} degrees in ${city}.`);
//
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);

const address = ['Lange Wal 78', '6826NE', 'Arnhem', 'Gelderland'];

const [street, zip, city, state = 'Netherlands'] = address;

console.log(`You are in ${city}, ${street}.`);