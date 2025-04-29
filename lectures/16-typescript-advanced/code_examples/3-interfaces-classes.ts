interface IPerson {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

interface WithOptional {
  someProp?: string;
  anotherProp: number;
}

interface Test {
  test(): void;
}

interface Flyable extends IPerson, Test {
  fly(): void;
}

let user1: IPerson;

user1 = {
  name: 'Ilya',
  age: 22,

  greet(phrase: string) {
    console.log('some string', phrase);
  },
};

user1.greet('some string');

/**
 * CLASSES
 */
class Person implements IPerson {
  name: string;
  age: number;
  test: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.test = 13;
  }

  greet(phrase: string): void {
    console.log('phrase', phrase);
  }
}

const instanceUser: IPerson = new Person('Ilya', 22);
// instanceUser.name = 'test'; // does not work because of readonly

function someFunc(user: IPerson) {
  return user;
}

// multiple interfaces
class FlyMultiple implements Flyable, WithOptional {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  someProp?: string | undefined;
  anotherProp: number;
  test(): void {
    throw new Error('Method not implemented.');
  }

  fly(): void {
    throw new Error('Method not implemented.');
  }

  greet(phrase: string): void {
    console.log('phrase', phrase);
  }
}

interface TestInterface {
  name: string;
  surname: string;
}

type TestType = {
  name: string;
  surname: string;
};

class TestClass implements TestInterface {
  name: string;
  surname: string;
  additionalProp: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
    this.additionalProp = 'string';
  }
}

class ExtendedClass extends TestClass {
  add: number;

  constructor(name: string, surname: string) {
    super(name, surname);
    this.add = 1;
  }
}

const testInstance: TestInterface = new TestClass('test1', 'test2');
const testInstance2: TestInterface = new ExtendedClass('test1', 'test2');

export {};

export {};
