
// const l = console.log;

/**
 * get/set
 */

// const obj = {
//   _name: 'Ilya',
//   _position: 'admin',
//   set name(name) {
//     this._name = name.toUpperCase();
//   },
//   get name() {
//     return `${this._name} ${this._position}`;
//   },
// };
// l(obj.name);

/**
 * __proto__
 */

// let animal = {
//   eats: true,
//   walk() {
//     l('Animal walk');
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };
// rabbit.walk();
// l(rabbit.__proto__);
// l(Object.getPrototypeOf(rabbit));
// l(Object.keys(rabbit)); // own keys
// l(Object.getOwnPropertyNames(rabbit)); // own
// for (let prop in rabbit) l(prop); // all keys

/**
 * F.prototype
 */
// const o = {};
// l(o.__proto__ === Object.prototype);

// const animal = {
//   eats: true,
//   walk() {
//     l('Animal walk');
//   },
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;
// let rabbit = new Rabbit('White Rabbit'); //  rabbit.__proto__ == animal

// l(rabbit.eats); // true
// rabbit.walk();
// l(rabbit.__proto__);
// l(Object.getPrototypeOf(rabbit));
// l(Object.keys(rabbit)); // own keys
// l(Object.getOwnPropertyNames(rabbit)); // own
// for (let prop in rabbit) l(prop); // all keys

// function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

// l(Rabbit.prototype.constructor == Rabbit); // true
// l(Rabbit.prototype.constructor);

/**
 * ES 6 classes
 */
// before es6
// const Animal = function (age = 0) {
//   this.age = age;
// };

// Animal.prototype.report = function () {
//   console.log(`An animal of age of ${this.age}`);
// };

// Animal.prototype.run = function () {
//   console.log(`An animal is running`);
// };

// const Cat = function (age, colour) {
//   Animal.call(this, age);

//   this._colour = colour;

// Object.defineProperty(this, 'colour', {
//   get: function () {
//     return this._colour;
//   },
//   set(value) {
//     this._colour = value.toUpperCase();
//   },
// });
// };
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// const c = new Cat(4, 'red');
// c.report();
// c.run();
// c.colour = 'white';
// l(c.colour);

//after es 6
// class Animal {
//   constructor(age) {
//     this.age = age;
//   }

//   report() {
//     console.log(`An animal of age of ${this.age}`);
//   }

//   run() {
//     console.log(`An animal is running`);
//   }
// }

// class Cat extends Animal {
//   constructor(age, colour) {
//     super(age);
//     this._colour = colour;
//   }

//   set colour(value) {
//     this._colour = value.toUpperCase();
//   }

//   get colour() {
//     return this._colour;
//   }
// }
// const c = new Cat(4, 'red');
// c.report();
// c.run();
// c.colour = 'white';
// l(c.colour);
// l(Cat.prototype); // slide 29

// slide 33
// class Singleton {
//   static instance = null;

//   constructor(name) {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }
//     this.name = name;
//     Singleton.instance = this;
//   }
// }

// l(new Singleton('test'));
// l(new Singleton('another test'));
// l(new Singleton('another test bla bla'));
// index.js
// Displaying index.js.
