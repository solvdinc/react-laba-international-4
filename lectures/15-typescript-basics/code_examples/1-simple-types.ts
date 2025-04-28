let explicitString: string = 'words'; // string
let explicitNumber: number = 123; // number
let explicitBoolean: boolean = true; // boolean

let implicitString = 'Some String'; // automatically detects type string
let implicitNumber = 123; // automatically detects type number
let implicitBoolean = true; // automatically detects type boolean

/**
 * does not work
 * we can not assign number to string
 */
// explicitString = 123;
// implicitString = 123;

let notPredefined;

// notPredefined = '22'
// notPredefined = 22
// notPredefined = true

// -------------------------------------------------------- //

// type five = 5;

// let a: 5 = 6;
// let a: five = 6;

type num = 1 | 2 | 3 | 4 | 5;
type num2 = 3 | 4 | 5 | 6 | 7;

// type noIntersections = 3 & 4;
type noIntersections = 3 & (3 | 4);

type union = num | num2;
type intersection = num & num2;

type unionOfPrimitives = string | number;
type intersectionPrimitives = string & number;

// -------------------------------------------------------- //
// -------------------------------------------------------- //

// type obj = {
//   a: number;
//   b: string;
//   c: string;
//   d: number;
//   e: number;
// };

// type obj2 = {
//   d: number;
//   e: string;
//   f: number;
//   g: string;
//   h: string;
// };

// // type intersection = obj & obj2;
// type union = obj2 | obj;

// // const aaa: intersection = {
// //   a: 'string',
// //   d: 22,
// //   e: '33',
// //   p: 33,
// // };

// // const aaa: union = {
// //   a: 1,
// //   b: 'dsd',
// //   c: 'd',
// //   // d: 22,
// //   // e: 2233,
// //   // f: 33,
// //   // g: 'sdaf',
// //   // h: 'asd',
// //   // p: 33,
// // };
