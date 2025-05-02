class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.counter = 0;
    Singleton.instance = this;
  }

  increaseCounter() {
    this.counter += 1;
  }
}

const instance1 = new Singleton();
instance1.increaseCounter();
instance1.increaseCounter();
instance1.increaseCounter();

const instance2 = new Singleton();

console.log(instance1);
console.log(instance2);
