// Example 1: Simple conditional
// Description: Prefer direct conditions over unnecessary complexity.
// Before (not KISS)
function isAdultBefore(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
// After (KISS)
const isAdult = age => age >= 18;

// Example 2: Use built-in methods
// Description: Use Array.includes instead of manual loops for existence checks.
// Before (not KISS)
const fruitsBefore = ['apple', 'banana', 'orange'];
let hasAppleBefore = false;
for (let i = 0; i < fruitsBefore.length; i++) {
  if (fruitsBefore[i] === 'apple') {
    hasAppleBefore = true;
    break;
  }
}
// After (KISS)
const fruits = ['apple', 'banana', 'orange'];
const hasApple = fruits.includes('apple');

// Example 3: Avoid unnecessary abstraction
// Description: Don't create extra functions or classes if not needed.
// Before (not KISS)
class Sum {
  calculate(a, b) {
    return a + b;
  }
}
const sumBefore = new Sum().calculate(2, 3);
// After (KISS)
function sum(a, b) {
  return a + b;
}

// Example 4: Clear variable names
// Description: Use descriptive names instead of cryptic ones.
// Before (not KISS)
const ue = "user@example.com";
// After (KISS)
const userEmail = "user@example.com";

// Example 5: Early return to reduce nesting
// Description: Return early to avoid deep nesting.
// Before (not KISS)
function getDiscountBefore(price) {
  let discount;
  if (price >= 0) {
    if (price > 100) {
      discount = 20;
    } else {
      discount = 10;
    }
  } else {
    discount = 0;
  }
  return discount;
}
// After (KISS)
function getDiscount(price) {
  if (price < 0) return 0;
  if (price > 100) return 20;
  return 10;
}

// Example 6: Prefer simple loops
// Description: Use a for loop for simple iteration.
// Before (not KISS)
let iBefore = 0;
while (iBefore < 5) {
  console.log(iBefore);
  iBefore++;
}
// After (KISS)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Example 7: Avoid over-engineering
// Description: Don’t use classes when a simple object will do.
// Before (not KISS)
class ConfigBefore {
  constructor() {
    this.apiUrl = "https://api.example.com";
    this.timeout = 5000;
  }
}
const configBefore = new ConfigBefore();
// After (KISS)
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

// Example 8: Use default parameters
// Description: Use default values to keep function calls simple.
// Before (not KISS)
function greetBefore(name) {
  if (name === undefined) {
    name = "Guest";
  }
  return `Hello, ${name}!`;
}
// After (KISS)
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Example 9: Simple error handling
// Description: Handle errors simply unless more is needed.
// Before (not KISS)
try {
  // ...some code...
} catch (e) {
  if (e && e.message) {
    console.error("Error occurred: " + e.message);
  } else {
    console.error("Unknown error");
  }
}
// After (KISS)
try {
  // ...some code...
} catch (e) {
  console.error(e);
}

// Example 10: Avoid deep nesting with guard clauses
// Description: Use guard clauses to keep code flat and readable.
// Before (not KISS)
function processUserBefore(user) {
  if (user) {
    // ...process user...
  }
}
// After (KISS)
function processUser(user) {
  if (!user) return;
  // ...process user...
}

// Example 11: Avoid unnecessary state
// Description: Return values directly instead of using extra variables.
// Before (not KISS)
function isPositiveBefore(num) {
  let result;
  if (num > 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
// After (KISS)
function isPositive(num) {
  return num > 0;
}

