import { add, subtract, PI } from './math.js';
import User from './user.js';
import * as Helpers from './helpers.js';
import multiply from './math.js'; // Import default export directly
import { multiply as reExportedMultiply } from './helpers.js'; // Import re-exported default export

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(PI); // 3.14159

const user = new User('John');
console.log(user.greet()); // Hello, John!

console.log(Helpers.add(10, 20)); // 30
console.log(new Helpers.User('Jane').greet()); // Hello, Jane!

console.log(multiply(2, 3)); // 6
console.log(reExportedMultiply(4, 5)); // 20
