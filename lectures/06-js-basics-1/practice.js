/**
 * Variables
 */

// console.log(varTest);
// console.log(letTest);

var varTest = 1; // functional scope
let letTest = 1; // block scope
const constTest = 1; // block scope

// constTest = 1;
// letTest = 1;
// varTest = 1;

{
} // block scope

// if (true) {
// 	let let1 = 1;
// 	var var1 = 1;
// }

// console.log(let1);
// console.log(var1);

// let test = 1;

/**
 * Data types
 */

let num = 123;
let bigIntTest = BigInt(123);

// console.log(num ** 100);
// console.log(BigInt(123) ** BigInt(100));

let string = '1';
let string1 = '1';
let string2 = `
  1
  2
  3
  4
  5
  6
`;
let string3 = new String('test');

let symbolTest = Symbol.for('123');

// console.log(10 % 4);

// console.log({} / 1);
// console.log(Number({}));
// console.log(1 / 0);

// console.log(parseInt('123gfg'));
// console.log(parseInt('01010111', 2));

// let testString = 'value';
// testString[0] = 'b';
// console.log(testString);

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(-1));
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(''));
// console.log(Boolean('123'));
// if ({}) {}

// const data = null;
// const isNull = typeof data === 'object' && data === null;

// console.log(typeof null);

// console.log(true && false);

// console.log(0 ?? 'value is not defined');
// console.log(null ?? 'value is not defined');
// console.log(undefined ?? 'value is not defined');

// console.log(declarationTest());
// function declarationTest() {
// 	return 123;
// }

// console.log(expressionTest());
// const expressionTest = function () {
// 	return 123;
// };

// const arrowFunction = () => {
// 	return 123;
// };

// const arrowFunction2 = () => 123;

// console.log(arrowFunction());
// console.log(arrowFunction2());

// const thisTest = function () {
// 	console.log(this);
// };

// const testObject = {
// 	test: 1,
// 	testFunction: () => {
// 		console.log(this);
// 	},
// };

// // thisTest();
// testObject.testFunction();

const functionArguments = function () {
	console.log(arguments);
};

const functionArgumentsArrow = () => {
	console.log(arguments);
};

functionArguments(1, 2, 3, 4, 5, 6, 7);
functionArgumentsArrow(1, 2, 3, 4, 5, 6, 7);
