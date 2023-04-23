const Person = require('./Person')
const gustavo = new Person('Gustavo', "7", 99, "center", 'IDK', "MG")

console.log(gustavo);
console.log(gustavo.address.fullAddress());