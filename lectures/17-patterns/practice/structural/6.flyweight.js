class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  getCar(model) {
    return this.cars.find(car => car.model === model);
  }

  create(model, price) {
    const candidate = this.getCar(model);
    if (candidate) {
      return candidate;
    }

    const newCar = new Car(model, price);
    this.cars.push(newCar);
    return newCar;
  }
}

const factory = new CarFactory();

const bmwX6 = factory.create('bmw x6', 100000);
const audi = factory.create('audi a6', 90000);
const bmwX6Second = factory.create('bmw x6', 100000);

console.log(bmwX6 === bmwX6Second);
