// console.log('running');

// const person = {
//   name: 'Jace',
//   age: 26,
//   location: {
//     city: 'Phoenix',
//     temp: 60,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['3201 E Cholla St.', 'Phoenix', 'Arizona', '85028'];

// const [, city, state = 'New York'] = address;

// console.log('====================================');
// console.log(`You are in ${city} ${state}`);
// console.log('====================================');

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log('====================================');
console.log(`A medium ${itemName} costs ${mediumPrice}`);
console.log('====================================');
