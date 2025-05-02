const car = {
	wheels: 4,

	init() {
		console.log(`I have ${this.wheels}`);
	},
};

const carWithOwner = Object.create(car, { owner: { value: 'Misha' } });

console.log(car);
console.log(carWithOwner.owner);
console.log(carWithOwner.wheels);
carWithOwner.init();
