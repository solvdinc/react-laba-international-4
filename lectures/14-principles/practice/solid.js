// --- S: Single Responsibility Principle ---
// Description: Each module/class/function should have only one reason to change.

// Example 1
// BEFORE: One function does two things: calculates salary and logs a report.
function calculateSalary(employee) {
  let salary = employee.hoursWorked * employee.hourlyRate;
  let report = `Salary for ${employee.name}: $${salary}`;
  console.log(report);
  return salary;
}

// AFTER: Each function has a single responsibility.
function calculateSalarySRP(employee) {
  return employee.hoursWorked * employee.hourlyRate;
}
function logSalaryReport(employee, salary) {
  let report = `Salary for ${employee.name}: $${salary}`;
  console.log(report);
}

// Example 2
// BEFORE: UserManager handles both user data and sending emails.
class UserManager {
  saveUser(user) {
    /* ... */
  }
  sendWelcomeEmail(user) {
    /* ... */
  }
}
// AFTER: Separate responsibilities.
class UserRepository {
  saveUser(user) {
    /* ... */
  }
}
class EmailService {
  sendWelcomeEmail(user) {
    /* ... */
  }
}

// --- O: Open-Closed Principle ---
// Description: Software entities should be open for extension, but closed for modification.

// Example 1
// BEFORE: Only supports card payments; to add PayPal, must modify the function.
function processPayment(price, cardDetails) {
  console.log("Paid with Card.");
}

// AFTER: Add new payment methods by extending, not modifying, existing code.
class PaymentMethod {
  pay(price) {
    /* abstract */
  }
}
class CardPayment extends PaymentMethod {
  pay(price) {
    console.log("Paid with Card.");
  }
}
class PayPalPayment extends PaymentMethod {
  pay(price) {
    console.log("Paid with PayPal.");
  }
}
function processPaymentOcp(price, paymentMethod) {
  paymentMethod.pay(price);
}

processPaymentOcp(100, new CardPayment());
processPaymentOcp(100, new PayPalPayment());

// Example 2
// BEFORE: Discount logic is hardcoded.
function getFinalPrice(price, type) {
  if (type === "student") return price * 0.8;
  if (type === "vip") return price * 0.7;
  return price;
}
// AFTER: Add new discounts by extending.
class Discount {
  apply(price) {
    return price;
  }
}
class StudentDiscount extends Discount {
  apply(price) {
    return price * 0.8;
  }
}
class VIPDiscount extends Discount {
  apply(price) {
    return price * 0.7;
  }
}
function getFinalPriceOcp(price, discount) {
  return discount.apply(price);
}
getFinalPriceOcp(100, new StudentDiscount()); // 80
getFinalPriceOcp(100, new VIPDiscount()); // 70

// --- L: Liskov Substitution Principle ---
// Description: Subtypes must be substitutable for their base types without altering correctness.

// Example 1
// BEFORE: Error handler may not have a handle() method, causing runtime errors.
function makeRequest(url, errorHandler) {
  fetch(url)
    .then((res) => res.json())
    .catch((error) => errorHandler.handle(error));
}
const badHandler = { log: (e) => console.log(e) }; // No handle() method
// makeRequest('url', badHandler); // Would fail

// AFTER: All handlers implement handle(), so substitution is safe.
const consoleErrorHandler = { handle: (e) => console.log(e) };
const externalErrorHandler = {
  handle: (e) => {
    /* send to service */
  },
};
makeRequest("url", consoleErrorHandler);
makeRequest("url", externalErrorHandler);

// Example 2
// BEFORE: Rectangle and Square, but Square breaks substitutability.
class Rectangle {
  setWidth(w) {
    this.width = w;
  }
  setHeight(h) {
    this.height = h;
  }
  getArea() {
    return this.width * this.height;
  }
}
class Square extends Rectangle {
  setWidth(w) {
    this.width = this.height = w;
  }
  setHeight(h) {
    this.width = this.height = h;
  }
}
// function that expects Rectangle to behave as such
function setRect(rect) {
  rect.setWidth(5);
  rect.setHeight(10);
  // For Square, area is 100, not 50!
}
// AFTER: Don't inherit if behavior changes.
class ProperSquare {
  setSize(s) {
    this.size = s;
  }
  getArea() {
    return this.size * this.size;
  }
}

// --- I: Interface Segregation Principle ---
// Description: Clients should not be forced to depend on methods they do not use.
// This is often achieved by creating smaller, more specific interfaces rather than a large, general-purpose one.

// Example 1
// BEFORE: DigitalProduct forced to implement saveToDb, which it doesn't need.
class Product {
  getDetails() {
    /* ... */
  }
  saveToDb() {
    /* ... */
  }
  displayInFrontEnd() {
    /* ... */
  }
}
class DigitalProduct extends Product {
  // saveToDb not needed
}

// AFTER: Only PhysicalProduct implements saveToDb.
class BaseProduct {
  getDetails() {
    /* ... */
  }
  displayInFrontEnd() {
    /* ... */
  }
}
class PhysicalProduct extends BaseProduct {
  saveToDb() {
    /* ... */
  }
}
class DigitalProductISP extends BaseProduct {
  // No saveToDb
}

// Example 2
// BEFORE: Fat interface for printer
class MultiFunctionPrinter {
  print() {
    /* ... */
  }
  scan() {
    /* ... */
  }
  fax() {
    /* ... */
  }
}
class SimplePrinter extends MultiFunctionPrinter {
  // scan and fax not needed
}
// AFTER: Segregate interfaces
class Printer {
  print() {
    /* ... */
  }
}
class Scanner {
  scan() {
    /* ... */
  }
}
class Fax {
  fax() {
    /* ... */
  }
}
class OfficePrinter extends Printer {
  // implements print
}
class AllInOnePrinter extends Printer {
  scan() {
    /* ... */
  }
  fax() {
    /* ... */
  }
}

// --- D: Dependency Inversion Principle ---
// Description: High-level modules should not depend on low-level modules; both depend on abstractions.

// Example 1
// BEFORE: PasswordReminder depends directly on MySQLConnection.
class MySQLConnection {
  connect() {
    /* ... */
  }
}
class PasswordReminder {
  constructor() {
    this.dbConnection = new MySQLConnection();
  }
}

// AFTER: PasswordReminder depends on an abstraction.
class PostgreSQLConnection {
  connect() {
    /* ... */
  }
}
class PasswordReminderDIP {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }
}
// Usage:
const reminder = new PasswordReminderDIP(new MySQLConnection());
const reminder2 = new PasswordReminderDIP(new PostgreSQLConnection());

// Example 2
// BEFORE: Logger depends on console directly.
class Logger {
  log(message) {
    console.log(message);
  }
}
// AFTER: Logger depends on abstraction.
class ConsoleLogger {
  log(message) {
    console.log(message);
  }
}
class FileLogger {
  log(message) {
    /* write to file */
  }
}
class App {
  constructor(logger) {
    this.logger = logger;
  }
  doSomething() {
    this.logger.log("Did something");
  }
}
const app = new App(new ConsoleLogger());
const app2 = new App(new FileLogger());
