// const person = {
//   name: 'Jhony',
//   age: 34,
//   address: {
//     city: 'NY',
//     temp: 70
//   }
// };

// console.log(`${person.name}  is ${person.age}.`)

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array destructuring

// const address = ['1299 S Juniper street', 'New York', 'New York', '10456'];

// console.log(`Your are in ${address[1]} ${address[2]}`);

const item = ['Coffee', '2', '3', '4'];
const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);
