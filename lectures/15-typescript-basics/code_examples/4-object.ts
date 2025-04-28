// object - built in type in ts
const person: object = {
  name: 'John',
  age: { a: '213', b: [true, 1] },
};
console.log('person', person);

// ? -> this field could not be presented in object

// { key?: valueType } => key could be or not to be inside

// key: type | undefined => key MUST be inside of the object,
// but with possibility of value as undefined

const person1: {
  name: string;
  age?: number; // optional
} = {
  name: 'John',
};

console.log(person1.age);
// person1.test = 123; // error

type Person2 = {
  [key: string]: string;
};

const person2: Person2 = { aadsda: '2212', 223: 'sddsd', ['true']: 'aasffsa' };


const user: { name: string, age?: number } = { name: 'Vlad' }
