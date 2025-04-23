// Example 1: Function naming matches behavior
// Description: Name functions so their behavior is clear and expected.
// Before (not POLA)
function getUserAndDelete(id) {
  // only gets user, does not delete
}
// After (POLA)
function getUser(id) {
  // only gets user
}

// Example 2: Consistent return types
// Description: Always return the same type from a function.
// Before (not POLA)
function findUserBefore(id) {
  if (id) return { id };
  else return null;
}
// After (POLA)
function findUser(id) {
  if (id) return { id };
  else return undefined;
}

// Example 3: Avoiding side effects in getters
// Description: Getters should not modify state.
// Before (not POLA)
function getCountBefore() {
  this.count++;
  return this.count;
}
// After (POLA)
function getCount() {
  return this.count;
}

// Example 4: Predictable default values
// Description: Use expected default values for parameters.
// Before (not POLA)
function connectBefore(url, timeout = 1) {
  // 1ms is an unexpectedly short default
}
// After (POLA)
function connect(url, timeout = 5000) {
  // 5000ms is a more standard default
}

// Example 5: Avoiding hidden mutations
// Description: Functions should not unexpectedly mutate arguments.
// Before (not POLA)
function addItemBefore(arr, item) {
  arr.push(item); // mutates input array
  return arr;
}
// After (POLA)
function addItem(arr, item) {
  return [...arr, item]; // returns new array
}

// Example 6: Consistent API design
// Description: Similar functions should have similar signatures and behavior.
// Before (not POLA)
function getUserById(id) { /* ... */ }
function fetchProduct(productId, callback) { /* ... */ }
// After (POLA)
function getUserById(id) { /* ... */ }
function getProductById(id) { /* ... */ }

// Example 7: Avoiding unexpected global variables
// Description: Don't create globals in functions.
// Before (not POLA)
function setNameBefore(name) {
  userName = name; // userName is global
}
// After (POLA)
function setName(name) {
  this.userName = name;
}

// Example 8: Clear error handling
// Description: Throw errors or return values in a predictable way.
// Before (not POLA)
function parseJsonBefore(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false; // false is unexpected
  }
}
// After (POLA)
function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null; // null is a more standard "no result"
  }
}

// Example 9: Respecting user input
// Description: Don't silently change user input.
// Before (not POLA)
function saveUsernameBefore(username) {
  return username.trim().toLowerCase(); // changes input without warning
}
// After (POLA)
function saveUsername(username) {
  return username; // saves as provided
}

// Example 10: Avoiding magic numbers
// Description: Use named constants instead of unexplained numbers.
// Before (not POLA)
function calculateDiscountBefore(price) {
  return price * 0.82; // why 0.82?
}
// After (POLA)
const DISCOUNT_RATE = 0.18;
function calculateDiscount(price) {
  return price * (1 - DISCOUNT_RATE);
}

