/**
 * Create object
 */
// const objConstructor = new Object();
// const objLiteral = {};
// const objectCreate = Object.create({});

// function User(name, surname) {
// 	this.name = name;
// 	this.surname = surname;
// }

// const user1 = new User('Ilya', 'Ischenko');
// const user2 = new User('Dima', 'Ischenko');
// const user3 = new User('Mike', 'Ischenko');
// console.log(user1);
// console.log(user2);
// console.log(user3);

// let userField = 'city';
// const test = 'test123';

// const user = {
// 	name: 'Ilya',
// 	'my hobbies': ['cooking'],
// 	test,
// };
// user.age = 23;
// user[userField] = 'Kyiv';
// console.log(user);
// console.log(user['my hobbies']);
// delete user.age;
// console.log(user);
// console.log('name' in user);
// console.log('country' in user);

// for (const key in user) {
// console.log(key);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const primitive1 = 'Hello';
// const primitive2 = 'Hello';
// console.log(primitive1 === primitive2);

// const nonPrimitive1 = { name: 'Ilya' };
// const nonPrimitive2 = { name: 'Ilya' };
// const nonPrimitive3 = nonPrimitive1;

// console.log(nonPrimitive1 === nonPrimitive2);
// console.log(nonPrimitive1 === nonPrimitive3);
// console.log('nonPrimitive1: ', nonPrimitive1);
// console.log('nonPrimitive3: ', nonPrimitive3);

// nonPrimitive1.name = 'Dima';

// console.log('nonPrimitive1: ', nonPrimitive1);
// console.log('nonPrimitive3: ', nonPrimitive3);

/**
 * Objects clone
 */

const user = { name: "Ilya", age: 23, hobbies: ["cooking"] };
// const userCopy = { ...user };

// userCopy.hobbies[0] = "swimming";
// console.log(user);

// const userCopy = {};
// Object.assign(userCopy, user);
// userCopy.hobbies[0] = "swimming";
// console.log(user);

// const userCopy = JSON.parse(JSON.stringify(user));
// const userCopy = structuredClone(user);

// user.name = 'Dima';
// user.hobbies.push('swimming');
// console.log(user);
// console.log(userCopy);

// const user = {
// 	name: 'Ilya',

// 	hello1: function () {
// 		console.log(this);
// 		// console.log('Hello from hello1');
// 	},

// 	hello2() {
// 		// console.log('Hello from hello2');
// 	},

// 	hello3: () => {
// 		console.log(this);
// 	},
// };

// const admin = {
// 	isAdmin: true,
// };
// user.hello3();
// user.hello1();
// user.hello1.call(admin, 'firstArg', 'secondArg', 'thirdArg');
// user.hello1.apply(admin, ['firstArg', 'secondArg', 'thirdArg']);
// const bindedFunction = user.hello1.bind(admin);
// bindedFunction();

/**
 * call
 * bind
 * apply
 */
// user.hello1();
// user.hello2();

// const test = {
// a: {
// 	b: 1,
// },
// };

// console.log(test?.a?.b);

// if ('a' in test) {
// 	const aProp = test.a;

// 	if ('b' in aProp) {
// 		console.log(test.a.b);
// 	}
// } else {
// 	console.log(undefined);
// }

/**
 *
 */

// const arrayLiteral = [];
// const arraConstructor1 = new Array(1, 2, 3);
// const arraConstructor2 = new Array(10);
// console.log(arrayLiteral);
// console.log(arraConstructor1);
// console.log(arraConstructor2);
// Array.from()

// const arr = [1, 2, 99, 11, 23, 4, 5, 1, 1];
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.push(10));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.unshift(0));
// console.log(arr);
// console.log(arr.length);

// for (const item of arr) {
// 	console.log(item);
// 	break;
// }


// console.log(arr);
// arr.splice(2, 1, 'test', 'test2');
// arr.splice(2, 1);
// console.log(arr);

// arr.forEach((item) => {
// 	console.log(item);
// });

// console.log(arr.find((item) => item === 1));
// console.log(arr.filter((item) => item !== 1));
// console.log(
// 	arr.map((item) => {
// 		return item * 2;
// 	})
// );
// console.log(arr.sort((a, b) => a - b));

// const result = arr.reduce((acc, item) => {
// 	console.log(acc);
// 	return acc + item;
// }, 0);
// console.log(result);
