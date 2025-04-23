// Example 1: Over-architecting for future features
// Description: Don't design for features you may never need.
// Before (BDUF)
class PaymentProcessorBefore {
  processCreditCard() { /* ... */ }
  processPaypal() { /* ... */ }
  processCrypto() { /* ... */ } // not needed yet
}
// After (Agile/Just Enough Design)
class PaymentProcessor {
  processCreditCard() { /* ... */ }
}

// Example 2: Creating unnecessary layers
// Description: Avoid adding extra layers of abstraction before they're needed.
// Before (BDUF)
class ServiceLayerBefore {
  // ...calls RepositoryLayerBefore...
}
class RepositoryLayerBefore {
  // ...calls DataLayerBefore...
}
class DataLayerBefore {
  // ...actual logic...
}
// After (Agile)
function doWork() {
  // ...actual logic...
}

// Example 3: Designing for all possible use cases
// Description: Don't try to handle every possible scenario up front.
// Before (BDUF)
function renderFormBefore(type) {
  if (type === 'login') { /* ... */ }
  else if (type === 'register') { /* ... */ }
  else if (type === 'forgot-password') { /* ... */ }
  else if (type === 'admin') { /* ... */ }
  // ...many more...
}
// After (Agile)
function renderForm(type) {
  if (type === 'login') { /* ... */ }
  else if (type === 'register') { /* ... */ }
}

// Example 4: Premature database normalization
// Description: Don't split data into many tables before it's needed.
// Before (BDUF)
const userBefore = {
  id: 1,
  profile: { /* ... */ },
  settings: { /* ... */ },
  preferences: { /* ... */ },
  // ...many nested objects...
};
// After (Agile)
const user = {
  id: 1,
  name: "Alice"
};

// Example 5: Building a plugin system before you need plugins
// Description: Don't build extensibility before you have a use case.
// Before (BDUF)
class PluginSystemBefore {
  registerPlugin(plugin) { /* ... */ }
  runPlugins() { /* ... */ }
}
// After (Agile)
function runApp() {
  // ...core logic...
}

// Example 6: Creating a generic solution for a specific problem
// Description: Don't generalize until you have multiple concrete cases.
// Before (BDUF)
function handleEventBefore(eventType, data) {
  // ...switch on eventType for many possible events...
}
// After (Agile)
function handleLogin(data) {
  // ...handle login only...
}

// Example 7: Over-documenting unused APIs
// Description: Don't write docs for features that don't exist yet.
// Before (BDUF)
/**
 * @function doEverything
 * @param {string} mode
 * @param {object} options
 * @param {boolean} isExperimental
 */
// After (Agile)
/**
 * @function doEverything
 * @param {string} mode
 */

// Example 8: Building a UI for all roles before needed
// Description: Don't build admin/moderator/user UIs before you have those roles.
// Before (BDUF)
function renderDashboardBefore(role) {
  if (role === 'admin') { /* ... */ }
  if (role === 'moderator') { /* ... */ }
  if (role === 'user') { /* ... */ }
}
// After (Agile)
function renderDashboard(role) {
  if (role === 'user') { /* ... */ }
}

// Example 9: Implementing all API endpoints up front
// Description: Only build endpoints you actually need now.
// Before (BDUF)
function setupApiBefore() {
  // /login, /register, /logout, /reset-password, /delete-account, /ban-user, /promote-user, etc.
}
// After (Agile)
function setupApi() {
  // /login, /register
}

// Example 10: Creating a full microservices architecture for a small app
// Description: Don't split into microservices before you have scaling needs.
// Before (BDUF)
function startMicroservicesBefore() {
  // authService, userService, productService, orderService, notificationService, etc.
}
// After (Agile)
function startApp() {
  // monolith logic
}

