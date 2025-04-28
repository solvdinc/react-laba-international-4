/**
 * ANY TYPE
 */

let anyType: any = 123;
anyType = '123';
anyType = [1, 2, 3];

let myStringType = 'my string'; // automatically detected string type
// myStringType = []; // error
// myStringType = 123 // error

/**
 * UNKNOWN TYPE
 */
// 1
let userInput: unknown;
let stringType: string = 'test';

userInput = 'some string';
stringType = userInput; // does not work, event if userInput is also string type

if (typeof userInput === 'string') {
  stringType = userInput; // WORKS! // NEED TO CHECK TYPEOF AND THEN ASSIGN THE VALUE
}

//2
let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = 10; // We can assign anything to unknown just like any

let s1: string = vAny; // Any is assignable to anything
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

if (typeof vUnknown === 'string') {
  s2 = vUnknown; // WORKS! // NEED TO CHECK TYPEOF AND THEN ASSIGN THE VALUE
}

//3
let w: unknown = 1;
w = 'string';
w = {
  test: 123,
};

w.test; // error

if (typeof w === 'object' && w !== null && 'test' in w) {
  w.test;
}

/**
 * NEVER
 */
function generateError(message: string, code: number): never {
  // never means this function never finish successfully

  // return 123; // error
  throw { message, errorCode: code };
  // also works if we have infinite loop
}
// generateError('Some Error', 228);

/**
 * UNDEFINED
 * NULL
 */
let nullVar: null = null;
let undefinedVar: undefined = undefined;
nullVar = undefined;
undefinedVar = null;

/**
 * When strictNullChecks is false, null and undefined are effectively
 * ignored by the language. This can lead to unexpected errors at runtime.
 *
 *
 * When strictNullChecks is true, null and undefined
 * have their own distinct types and you’ll get a type error
 * if you try to use them where a concrete value is expected.
 */

let foo = undefined;
foo = null;
foo = 'string';
foo = 123;

let foo2 = null;
foo2 = undefined;
foo2 = 'string';
foo2 = 123;
