// Example 1: Basic try...catch
// This example demonstrates a simple try...catch block where no error occurs.
// The code inside the try block executes successfully, so the catch block is ignored.
// try {
//   console.log("Start of try runs"); // (1)
//   rgergerg;
//   // No errors here
//   console.log("End of try runs"); // (2)
// } catch (err) {
//   console.log("Catch is ignored, because there are no errors"); // (3)
// }

// Example 2: Catching an error
// This example shows how the catch block is triggered when an error occurs inside the try block.
// The error is caused by referencing a variable that is not defined.
// try {
//   console.log("Start of try runs"); // (1)
//   nonExistentVariable; // Error: variable is not defined
//   console.log("End of try (never reached)"); // (2)
// } catch (err) {
//   console.log("Error has occurred!"); // (3)
// }

// Example 3: Error object properties
// This example demonstrates how to access the properties of the error object (name, message, stack).
// These properties provide detailed information about the error.
// try {
//   nonExistentVariable; // Error
// } catch (err) {
//   console.log(err.name); // ReferenceError
//   console.log(err.message); // nonExistentVariable is not defined
//   console.log(err.stack); // Stack trace
// }

// Example 4: Optional catch binding
// This example shows that the catch block can omit the error object if error details are not needed.
// The catch block still handles the error but does not provide specific information about it.
// try {
//   nonExistentVariable; // Error
// } catch {
//   console.log('Error caught without details');
// }

// Example 5: Using try...catch with JSON.parse
// This example demonstrates how to use try...catch to handle errors when parsing JSON data.
// If the JSON string is valid, it is parsed successfully. Otherwise, an error is caught.
// let json = '{"name":"John", "age":30}';
// try {
//   let user = JSON.parse(json);
//   console.log(user.name); // John
//   console.log(user.age); // 30
// } catch (err) {
//   console.log("Error parsing JSON:", err.message);
// }

// Example 6: Throwing custom errors
// This example shows how to throw a custom error when the parsed JSON data is incomplete.
// The throw statement generates a SyntaxError with a custom message.
// let json1 = '{ "age": 30 }'; // Missing "name"
// try {
//   let user = JSON.parse(json1);
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }
//   console.log(user.name);
// } catch (err) {
//   console.log("JSON Error:", err.message);
// }

// Example 7: Rethrowing errors
// This example demonstrates the rethrowing technique.
// The catch block handles known errors (SyntaxError) and rethrows unknown errors.
// let json = '{ "age": 30 }';
// try {
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }
//   undefinedFunction(); // Unexpected error
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.log("JSON Error:", err.message);
//   } else {
//     throw err; // Rethrow unexpected errors
//   }
// }

// Example 8: Nested try...catch with rethrowing
// This example shows how nested try...catch blocks can be used to handle specific errors at different levels.
// The inner catch block rethrows unknown errors, which are then caught by the outer catch block.
// function readData() {
//   let json = '{ "age": 30 }';
//   try {
//     let user = JSON.parse(json);
//     if (!user.name) {
//       throw new SyntaxError('Incomplete data: no name');
//     }
//     undefinedFunction(); // Unexpected error
//   } catch (err) {
//     if (!(err instanceof SyntaxError)) {
//       throw err; // Rethrow unknown errors
//     }
//   }
// }

// try {
//   readData();
// } catch (err) {
//   console.log('External catch got:', err.message);
// }

// Example 9: try...catch...finally
// This example demonstrates the use of the finally block.
// The finally block executes regardless of whether an error occurs in the try block.
// try {
//   // console.log('try block');
//   rwgwrgwrgwrg;
// } catch (err) {
//   console.log("catch block");
// } finally {
//   console.log("finally block");
// }

// Example 10: try...catch with setTimeout
// Try catch works synchronously. If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it.
// That’s because the function itself is executed later, when the engine has already left the try...catch construct.
// To catch an exception inside a scheduled function, try...catch must be inside that function.
setTimeout(function () {
  try {
    noSuchVariable; // script will die here
  } catch (err) {
    console.log("won't work");
  }
}, 1000);
