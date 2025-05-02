class Engine {}
class ElectroEngine {}
class TestEngine {}

class Transmission {}
class TestTransmission {}

class Chassis {}
class SportChassis {}
class TestChassis {}

// CAR -> IEngine <- Engine
// CAR -> ITransmission <- Transmission
// CAR -> IChassis <- Chassis

class Car {
	constructor(engine, transmission, chassis) {
		this.engine = engine;
		this.transmission = transmission;
		this.chassis = chassis;
	}
}

const petrolCar = new Car(new Engine(), new Transmission(), new Chassis());
const sportCar = new Car(new Engine(), new Transmission(), new SportChassis());
const electroCar = new Car(
	new ElectroEngine(),
	new Transmission(),
	new Chassis()
);
const testCar = new Car(
	new TestEngine(),
	new TestTransmission(),
	new TestChassis()
);
