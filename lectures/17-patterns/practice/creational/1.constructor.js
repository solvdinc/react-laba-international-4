/**
 * The construct pattern is the simplest, modern, and one of the most popular
 * sub-categories of creational design patterns in JavaScript.
 * The main purpose of this pattern is to felicitate the constructor's creation.
 */

class Car {
	constructor(model, year, miles) {
		this.model = model;
		this.year = year;
		this.miles = miles;

		this.toString = function () {
			return `${this.model} has done ${this.miles} miles`;
		};
	}
}

// Usage:
const civic = new Car('Honda Civic', 2008, 21000);
const mondeo = new Car('Ford Mondeo', 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());

// function Car(model, year, miles) {
//   this.model = model;
//   this.year = year;
//   this.miles = miles;
// }

// const civic = new Car('Honda Civic', 2008, 21000);
// console.log(civic)
