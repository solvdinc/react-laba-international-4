// Example 1: Function reuse instead of copy-pasting logic
// Description: Avoid repeating the same calculation logic by creating a reusable function.
// Before (not DRY)
const sumA = 2 + 3;
const sumB = 5 + 7;

// After (DRY)
function add(a, b) {
  return a + b;
}
const sum1 = add(2, 3);
const sum2 = add(5, 7);

// Example 2: Using constants for repeated values
// Description: Use a constant for values that are used in multiple places to avoid magic numbers.
// Before (not DRY)
function calculateTaxBefore(amount) {
  return amount * 0.2;
}
function calculateTotalBefore(amount) {
  return amount + amount * 0.2;
}

// After (DRY)
const TAX_RATE = 0.2;
function calculateTax(amount) {
  return amount * TAX_RATE;
}
function calculateTotal(amount) {
  return amount + calculateTax(amount);
}

// Example 3: Array mapping instead of manual loops
// Description: Use array methods like map to avoid repeating similar operations for each element.
// Before (not DRY)
const numbersBefore = [1, 2, 3, 4];
const doubledBefore = [
  numbersBefore[0] * 2,
  numbersBefore[1] * 2,
  numbersBefore[2] * 2,
  numbersBefore[3] * 2,
];

// After (DRY)
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);

// Example 4: Reusable validation function
// Description: Extract repeated validation logic into a single reusable function.
// Before (not DRY)
const isEmail1 = /\S+@\S+\.\S+/.test("test@example.com");
const isEmail2 = /\S+@\S+\.\S+/.test("invalid-email");

// After (DRY)
function isEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
console.log(isEmail("test@example.com"));
console.log(isEmail("invalid-email"));

// Example 5: Component reuse (React example)
// Description: Create a reusable component instead of duplicating similar markup.
// Before (not DRY)
// <button onClick={handleClickA}>A</button>
// <button onClick={handleClickB}>B</button>

// After (DRY)
function Button({ label, onClick }) {
  // ...button rendering...
}

// Example 6: Utility function for formatting
// Description: Move formatting logic into a utility function for reuse.
// Before (not DRY)
const dateBefore = new Date();
const formattedBefore = dateBefore.toISOString().split("T")[0];

// After (DRY)
function formatDate(date) {
  return date.toISOString().split("T")[0];
}
console.log(formatDate(new Date()));

// Example 7: Config object for shared settings
// Description: Store shared configuration in an object to avoid repeating values.
// Before (not DRY)
function fetchDataBefore(endpoint) {
  return fetch(`https://api.example.com/${endpoint}`, { timeout: 5000 });
}

// After (DRY)
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};
function fetchData(endpoint) {
  return fetch(`${config.apiUrl}/${endpoint}`, { timeout: config.timeout });
}

// Example 8: DRY with class inheritance
// Description: Use inheritance to share common logic between classes.
// Before (not DRY)
class CatBefore {
  speak() {
    return "Meow!";
  }
}
class DogBefore {
  speak() {
    return "Woof!";
  }
}
// After (DRY)
class Animal {
  speak() {
    return "Makes a sound";
  }
}
class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

// Example 9: Using loops instead of repeating code
// Description: Use loops to handle repeated actions instead of writing them out multiple times.
// Before (not DRY)
console.log("apple");
console.log("banana");
console.log("orange");

// After (DRY)
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => console.log(fruit));

// Example 10: Template literals for repeated string patterns
// Description: Use a function and template literals to generate similar strings dynamically.
// Before (not DRY)
const greetAlice = "Hello, Alice!";
const greetBob = "Hello, Bob!";

// After (DRY)
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob"));

// Example 11: Centralized error handling
// Description: Use a single function to handle errors instead of repeating error logic.
// Before (not DRY)
try {
  // some code
} catch (e) {
  console.error('Error:', e.message);
}
try {
  // some other code
} catch (e) {
  console.error('Error:', e.message);
}

// After (DRY)
function handleError(e) {
  console.error('Error:', e.message);
}
try {
  // some code
} catch (e) {
  handleError(e);
}
try {
  // some other code
} catch (e) {
  handleError(e);
}
