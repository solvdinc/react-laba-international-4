class Engine {}
class ElectroEngine {}
class Transmission {}
class Chassis {}
class TestChassis {}

// CAR -> ENGINE
// CAR -> Transmission
// CAR -> Chassis

class Car {
	constructor() {
		this.engine = new Engine();
		this.transmission = new Transmission();
		this.chassis = new Chassis();
	}
}

class ElectroCar {
	constructor() {
		this.engine = new ElectroEngine();
		this.transmission = new Transmission();
		this.chassis = new Chassis();
	}
}

class TestCar {
	constructor() {
		this.engine = new Engine();
		this.transmission = new Transmission();
		this.chassis = new TestChassis();
	}
}

const car = new Car();
const electroCar = new ElectroCar();
const testCar = new TestCar();
