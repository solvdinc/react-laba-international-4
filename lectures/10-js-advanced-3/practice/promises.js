// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

// function doStep2(init, callback) {
//   const result = init + 2;
//   callback(result);
// }

// function doStep3(init, callback) {
//   const result = init + 3;
//   callback(result);
// }

// function doOperation() {
//   doStep1(0, (result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
//   });
// }

// doOperation();

let promise = new Promise((resolve, reject) => {
  let condition = false; // This can be any condition
  if (condition) {
    resolve("Promise is resolved");
  } else {
    reject("Promise is rejected");
  }
});

// promise
//   .then((message) => {
//     console.log(message); // This will log 'Promise is resolved'
//   })
//   .catch((message) => {
//     console.log(message); // This will log 'Promise is rejected'
//   });

// let promise1 = new Promise((resolve, reject) => {
//   resolve("Promise 1 resolved");
// });

// let promise2 = new Promise((resolve, reject) => {
//   resolve("Promise 2 resolved");
// });

// promise1
//   .then((message) => {
//     console.log(message); // This will log 'Promise 1 resolved'
//     return promise2;
//   })
//   .then((message) => {
//     console.log(message); // This will log 'Promise 2 resolved'
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// //   Promise.resolve(value): This method returns a Promise object that is resolved with the given value.
// let resolvedPromise = Promise.resolve("Resolved promise");
// resolvedPromise.then((value) => console.log(value)); // Logs: 'Resolved promise'

// // Promise.reject(reason): This method returns a Promise object that is rejected with the given reason.
// let rejectedPromise = Promise.reject("Rejected promise");
// rejectedPromise.catch((reason) => console.log(reason)); // Logs: 'Rejected promise'

// // Promise.all(iterable): This method returns a promise that resolves when all of the promises in the iterable argument have resolved,
// // or rejects with the reason of the first passed promise that rejects.

// let promiseOne = Promise.resolve("Promise 1");
// let promiseTwo = Promise.resolve("Promise 2");
// Promise.all([promiseOne, promiseTwo]).then((values) => console.log(values)); // Logs: ['Promise 1', 'Promise 2']

// // Promise.race(iterable): This method returns a promise that resolves or
// //  rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

// let promiseTestOne = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "Promise 1");
// });
// let promiseTestTwo = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Promise 2");
// });
// Promise.race([promiseTestOne, promiseTestTwo]).then((value) =>
//   console.log(value)
// ); // Logs: 'Promise 2'

// Promise.allSettled(iterable): This method returns a promise that resolves after all of the given promises have either resolved or rejected,
//  with an array of objects that each describe the outcome of each promise.
// let test1 = Promise.resolve("Promise 1");
// let test2 = Promise.reject("Promise 2");
// Promise.allSettled([test1, test2]).then((results) => console.log(results));
// Logs: [{status: "fulfilled", value: "Promise 1"}, {status: "rejected", reason: "Promise 2"}]

// //  This method returns a promise that is fulfilled by the first given promise to be fulfilled,
// //  or rejected with an AggregateError holding the rejection reasons if all of the given promises are rejected.
// let promise123 = Promise.reject("Promise 1");
// let promise234 = Promise.resolve("Promise 2");
// let promise345 = Promise.reject("Promise 3");
// Promise.any([promise123, promise234]).then((value) => console.log(value)); // Logs: 'Promise 2'
// Promise.any([promise123, promise345]).catch((reason) => console.log(reason)); // Logs: 'AggregateError: All promises were rejected'
