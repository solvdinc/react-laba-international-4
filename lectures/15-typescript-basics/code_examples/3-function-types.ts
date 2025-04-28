function add(n1: number, n2: number) {
  // number was automatically detected as return type
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(num);
}

// ------ HOW TO SAVE FUNCTION AS TYPE

let functionType: (param1: number, param2: number) => number;

functionType = add;
// functionType = printResult; // does not work beacause of not match the type

/**
 * FUNCS WITH CB
 */
function testFunc(num: number) {
  return num;
}

type funcType = (p1: number) => number;

function functWithCb(n1: number, n2: number, cb: funcType): void {
  const result = n1 + n2;
  console.log('CB: ', cb(result));
}

functWithCb(1, 2, testFunc);

/**
 * Anonymous Functions
 */
const names = ['Alice', 'Bob', 'Eve'];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

// function typeNarrowing(a: string | number) {
//   if (typeof a === 'string') {
//     console.log(a);
//   } else {
//     console.log(a);
//   }
// }
