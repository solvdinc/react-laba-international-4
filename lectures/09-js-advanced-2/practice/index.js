// const l = console.log
//
// const Block = function() {
//   this.x = 0
//   this.y = 0
//
//   this.move = function(x, y) {
//     this.x += x
//     this.y += y
//   }
// }
//
// const o = new Block()
// o.move(1, 10)
// const b = new Block()
//
// l(o, b)
//
// const o = {}
//
// l(o.__proto__ === Object.prototype)
// l(o.__proto__.__proto__)
//
// function Foo() {
//   this.x = 0
// }
//
// const o = new Foo()
// window.o = o
//
//
// const Animal = function (age = 0) {
//   if (
//     'number' !== typeof age
//     || age > this.constructor.MAX_AGE
//     || age < 0
//   ) {
//     throw new TypeError(`age must be positive and less than ${this.constructor.MAX_AGE}`)
//   }
//   this.age = age
// }
//
// Animal.prototype.report = function () {
//   console.log(`An animal of age of ${this.age}`)
// }
//
//
// Animal.MAX_AGE = 300
//
// const a = new Animal()
// l(a)
// const Cat = function (age, colour) {
//   Animal.call(this, age)
//
//   if (!Object.values(this.constructor.ALLOWED_COLOURS).includes(colour)) {
//     throw new TypeError(`Unexpected colour value!`)
//   }
//
//   this._colour = colour
//
//   Object.defineProperty(this, 'colour', {
//     get: function () {
//       return this._colour
//     },
//     set(value) {
//       if (!Object.values(this.constructor.ALLOWED_COLOURS).includes(value)) {
//         return
//       }
//
//       this._colour = value
//     }
//   })
// }
//
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat
//
// Cat.ALLOWED_COLOURS = {
//   RUDE: 'rude',
//   SOFT: 'soft',
//   BLACK: 'black',
// }
//
// Cat.prototype.report = function () {
//   console.log(`A ${this.colour} cat of age of ${this.age}`)
// }
//
// const a = new Animal(3)
// const c = new Cat(4, Cat.ALLOWED_COLOURS.SOFT)
// c.colour = 'fffff'
// c.colour = Cat.ALLOWED_COLOURS.RUDE
// l(a, c)
// l(a.report())
// l(c.report())
//
//
// function ddd(animal) {
//   if(!(animal instanceof Animal)) {
//     throw
//   }
// }
//
//
// const Infected = {
//   infectionList: null,
//   getInfected: function (infection) {
//     if(null === this.infectionList) {
//       this.infectionList = new Set()
//     }
//
//     this.infectionList.add(infection)
//   },
//   printInfectionList: function () {
//     if(null === this.infectionList) {
//       console.log('Healthy')
//       return
//     }
//
//     console.log(this.infectionList)
//   },
// }
//
// /**
//  * @mixes {Infected}
//  */
// class Animal {
//   static MAX_AGE = 300
//
//   constructor(age = 0) {
//     if (
//       'number' !== typeof age
//       || age > this.constructor.MAX_AGE
//       || age < 0
//     ) {
//       throw new TypeError(`age must be positive and less than ${this.constructor.MAX_AGE}`)
//     }
//
//     this.age = age
//   }
//
//   report() {
//     console.log(`An animal of age of ${this.age}`)
//   }
// }
//
// Object.assign(Animal.prototype, Infected)
//
// class Cat extends Animal {
//
//   get colour() {
//     return this._colour
//   }
//
//   set colour(value) {
//     if (!Object.values(this.constructor.ALLOWED_COLOURS).includes(value)) {
//       return
//     }
//
//     this._colour = value
//   }
//
//   static ALLOWED_COLOURS = {
//     RUDE: 'rude',
//     SOFT: 'soft',
//     BLACK: 'black',
//   }
//
//   constructor(age, colour) {
//     super(age)
//
//     if (!Object.values(this.constructor.ALLOWED_COLOURS).includes(colour)) {
//       throw new TypeError(`Unexpected colour value!`)
//     }
//     this._colour = colour
//   }
//
//   // report() {
//   //   console.log(`An animal of age of ${this.age}`)
//   // }
//
//   setAge(age = 4) {
//
//   }
// }
// const a = new Animal(3)
// const c = new Cat(2, Cat.ALLOWED_COLOURS.RUDE)
//
//
// c.report()
//
// /**
//  * @param {Animal} ani
//  */
// function treatAni(ani) {
//   if(!(ani instanceof Animal)) {
//     throw new TypeError('')
//   }
//   l(ani.age)
// }
//
// treatAni(c)
//
//
// function Foo() {
//
//   var self = this
//   function priv () {
//     console.log(self)
//   }
//
//   this.aa = function () {
//     priv()
//   }
// }
//
// const f = new Foo()
// f.aa()
// window.a = a
// window.Animal = Animal
// window.c = c
// window.Cat = Cat
//
// const o = {
//   x: 66,
//   foo: function () {
//     l(this.x)
//     l(this)
//   }
// }
//
// o.foo()
//
// const other = {
//   x: 5
// }
//
// const binded = o.foo.bind(other)
// binded()
//
// const veryOther = {
//   x: 77
// }
//
// const reBinded = binded.bind(veryOther)
// reBinded()
//
// [[Call]] trap
// let invokableO = new Function(`console.log(this.x)`)
// invokableO.x = 9
// invokableO() //not actually works
//
// let invokable1 = new class extends Function {
//   constructor() {
//     super()
//
//     return new Proxy(this, {
//       apply(target, thisArg, argArray) {
//         console.log(target.x)
//       }
//     })
//   }
// }
// invokable1.x = 9
// invokable1()
