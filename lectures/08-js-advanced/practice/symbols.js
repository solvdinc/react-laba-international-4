// const key = 'name 01'
//
// let id = Symbol.for("id")
//

let user = {
    name: 'Vlad',
    height: 193,
    nationality: "Polish"
}

const userJSON = JSON.stringify(user)
const parsedObj = JSON.parse(userJSON)

console.log('parsedObj', parsedObj)


//
// const { name, ...restOfTheObject   } = user
//
// console.log(restOfTheObject)

// const today = new Date()
// console.log('today', today)
//
// const todaysDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
//
// console.log('todaysDate', todaysDate)
//
// const resettedDay = today.setHours(0, 0, 0, 0)
// console.log('resettedDay', new Date(resettedDay))





// console.log(Object.entries(user))
// // [[key, value], [key, value]]
//
// const arr = ["name", "Vlad", "height", 'nationality']
// const arr1 = [...arr]
//
// const [key, value, ...rest] = arr
// // key -> "name"
// // value -> "Vlad"
// // rest (could be ANY name that you want) -> ["height", 'nationality']
// console.log( { key, value, rest })

// user[id] = 1;

// console.log(Symbol.keyFor(id))

// const example = ['Hello', 'World', 'Good']
//
// const arr = [1, 2, 3]
// console.log(example)

// const obj = {
//     1: 'Hello',
//     3: 'World',
//     2: 'Good'
// }
//
// console.log(obj)




// let id = Symbol('id');
// let id2 = 'id2';
//
// let user = {
//   name: 'Misha',
//   [id]: '1',
//   [id2]: '2',
// };
//
// console.log(user.hasOwnProperty('id3'));
// if (user.age) {
//   console.log(11111);
// }

// console.log(Boolean(user.name));

// //  third party library

// user['id2'] = 22;
// let id3 = Symbol('id');
// let id4 = Symbol.for('id');
// user['id'] = 11;
// user[id3] = 33;
// user[id4] = 44;

// // your
// console.log(user[id]);
// console.log(user['id']);
// console.log(user[id2]);
// console.log(user[id3]);
// console.log(user[id4]);
// console.log(user[id3]);
// console.log())

// let id = Symbol('id');
// let id2 = Symbol.for('id');
// let idCopy = Symbol.for('id');

// console.log(id2 == idCopy);

// const arr = [1, 2, 3, 4, 5];
// for (const iterator of arr) {
//   console.log(iterator);
// }

// for (const iterator in arr) {
//   console.log(iterator);
// }

// let user = {
//   name: 'Misha',
//   age: 29,
// };

// let user2 = new Map();
// user2.set('name', 'Sasha');
// user2.set(30, [user, { name: 'test' }]);
// console.log(user);
// console.log(user2);

// console.log(user2.get(30));
// console.log(user.age);

// console.log(typeof new Set());
// console.log(typeof new Map());
// console.log(typeof new Array());
// console.log(typeof new Date());
//
// let game = {
//     name: 'Dota 2',
//     price: '$50',
// };
//
// console.log(typeof JSON.stringify(game));
//
// console.log(Object.keys(game));
// console.log(Object.values(game));
// console.log(Object.entries(game));
// console.log(new Date().getMonth());
