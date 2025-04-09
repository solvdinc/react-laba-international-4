console.log("Start"); // Synchronous code
// Synchronous code is executed first, line by line.

setTimeout(() => {
  console.log("Macrotask: setTimeout"); // Macrotask
  // This callback is added to the macrotask queue and will execute after the microtasks are completed.
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Microtask: Promise.then 1"); // Microtask
    // Microtasks from Promises are added to the microtask queue and executed after synchronous code.
  })
  .then(() => {
    console.log("Microtask: Promise.then 2"); // Microtask
    // Chained `.then` creates another microtask, which is executed immediately after the previous one.
  });

console.log("End"); // Synchronous code
// The event loop processes synchronous code first, then microtasks, and finally macrotasks.
