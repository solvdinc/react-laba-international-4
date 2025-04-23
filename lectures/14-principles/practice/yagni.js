// Example 1: Avoiding unused parameters
// Description: Don't add parameters until you need them.
// Before (not YAGNI)
function greetBefore(name, title) {
  return `Hello, ${name}!`;
}
// After (YAGNI)
function greet(name) {
  return `Hello, ${name}!`;
}

// Example 2: No extra configuration
// Description: Don't add config options for features you don't have yet.
// Before (not YAGNI)
const configBefore = {
  theme: 'dark',
  enableBeta: false, // not used anywhere
};
// After (YAGNI)
const config = {
  theme: 'dark',
};

// Example 3: No unnecessary abstractions
// Description: Don't create abstractions until you need them.
// Before (not YAGNI)
class UserManagerBefore {
  addUser(user) { /* ... */ }
  removeUser(user) { /* ... */ }
  updateUser(user) { /* ... */ }
}
// After (YAGNI)
function addUser(user) { /* ... */ }

// Example 4: No premature optimization
// Description: Don't optimize for performance before it's needed.
// Before (not YAGNI)
function getItemsBefore() {
  // Uses a complex caching system, but only called once
}
// After (YAGNI)
function getItems() {
  // Simple implementation
}

// Example 5: No unused code paths
// Description: Don't add code for features you might add later.
// Before (not YAGNI)
function processOrderBefore(order, isGift) {
  // ...existing code...
  if (isGift) {
    // gift logic (not needed yet)
  }
  // ...existing code...
}
// After (YAGNI)
function processOrder(order) {
  // ...existing code...
}

// Example 6: No unnecessary return values
// Description: Don't return extra data "just in case".
// Before (not YAGNI)
function getUserBefore(id) {
  return { id, name: "Alice", address: null }; // address not used
}
// After (YAGNI)
function getUser(id) {
  return { id, name: "Alice" };
}

// Example 7: No extra dependencies
// Description: Don't add libraries until you need them.
// Before (not YAGNI)
// import _ from 'lodash'; // not used
// After (YAGNI)
// ...no import...

// Example 8: No future-proofing with empty methods
// Description: Don't add empty methods for "future use".
// Before (not YAGNI)
class LoggerBefore {
  log() { /* ... */ }
  debug() { /* empty for now */ }
}
// After (YAGNI)
class Logger {
  log() { /* ... */ }
}

// Example 9: No unnecessary settings in UI
// Description: Don't add UI controls for features that don't exist.
// Before (not YAGNI)
// <input type="checkbox" id="betaFeature" /> // not implemented
// After (YAGNI)
// ...no checkbox...

// Example 10: No over-engineered data structures
// Description: Use simple structures until complexity is needed.
// Before (not YAGNI)
const usersBefore = new Map();
usersBefore.set(1, { id: 1, name: "Alice" });
// After (YAGNI)
const users = [{ id: 1, name: "Alice" }];