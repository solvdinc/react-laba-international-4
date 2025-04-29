/**
 * GENERIC FUNCS
 */
function firstElement<ArrType>(arr: ArrType[]): ArrType | undefined {
	return arr[0];
}

firstElement([1, '12', null]); // TYPE will be number | string | null | undefined

const number = firstElement([1, 2, 3]); // number
const string = firstElement(['1', '2', '3']); // string

const twoGenericsInFunc = <FirstType, K>(first: FirstType, second: K): [FirstType, K] => {
	return [first, second];
};

const numberAndStrin = twoGenericsInFunc(1, 'str'); // [number, string]

/**
 * BUILT IN GENERIC
 */
const promiseType: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('some value');
	}, 2000);
});

// data is a string because we specified it in Promise<string> generic type
promiseType.then((data) => {
	console.log(data);
});

/**
 * TYPE ALIASES
 */
type Wrapped<T = string> = { value: T };
const wrapperValue: Wrapped<number> = { value: 10 };
const defaultWrappedValue: Wrapped = { value: 'false' };
// const defaultWrappedValue: Wrapped = {value: false}; // error

/**
 * Type constraints
 */
function mergeObjects<T extends { name: string }, U extends object>(
	objA: T,
	objB: U
) {
	return Object.assign({}, objA, objB);
}

const mergedObjs3 = mergeObjects({ name: '10' }, { age: 22, town: 'Warsaw' });
// const mergedObjs3 = mergeObjects({name: 123}, {age: 22}); // string
mergedObjs3.name;

export {};
