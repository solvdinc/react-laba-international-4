interface Person {
	name: string;
	age: number;
}
type KeyType = keyof Person; // also works

type NewObj = Record<KeyType, number>

const newObj: Partial<NewObj> = {
	name: 10,
	age: 100,
	country: 19,
}

const printPersonProp = (person, property: keyof Person) => {
	console.log(`Person prop: ${person[property]}`);
};

const person: Person = {
	name: 'Ilya',
	age: 23,
};

printPersonProp(person, 'country');

export {};
