# Javascript, Advanced 1 practice

## Definition of done

- Your PR includes one js file with all of your solutions

Example of file structure:

```javascript
// task 1 link
function solution1() {
  // your code's here
}

// task 2 link
function solution2() {
  // your code's here
}
```

## 1. Pluck

Create a function to access the properties of an object.

```javascript
const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
const randomValue = Math.random();
const nullValue = null;

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null
```

## 2. Deep Clone

Create custom deep clone function.

```javascript
const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
); // false
```

## 3. "A long time ago"

Create a function that returns how long ago a certain day was.

```javascript
// E.g. Today is 23.02.2021, 14:00:00
console.log(offset(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 30 minutes ago

console.log(offset(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 hour ago

console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 2 hours 30 minutes ago

console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 day ago

console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 366 days ago
```

## 4. Random dates

Create a function that generate a random date between to dates

```javascript
const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

console.log(randomDate(date1, date2).format('DD/MM/YY'));
// 20/02/2021
```

## Codewars

Here's some codewars' tasks

5. [Merged Objects](https://www.codewars.com/kata/merged-objects)
6. ["this" is an other problem](https://www.codewars.com/kata/547f1a8d4a437abdf800055c)

## Optional (advanced)

8. ["this" is an other solution](https://www.codewars.com/kata/54834b3559e638b39d0009a2)
9. [Partial Keys](https://www.codewars.com/kata/partial-keys)
10. [Human Readable Time](https://www.codewars.com/kata/human-readable-time)
