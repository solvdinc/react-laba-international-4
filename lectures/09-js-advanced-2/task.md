# Javascript, Advanced 2 practice

## 1. Overview

We need a basic "abstract" class that provides ability to leverage serialization. That means children are able to be
serialized in a text line and can be resurrected back (woke up) from such a text line.

The number and types of properties (props) of such children can vary much. However, we need to support the next types only:

- null
- object
- array
- number
- string
- Date

Mustn't support non-enumerable props neither methods

A serialized data is supposed to contain some value that can be used to recognize which class that should be; an error to be thrown if we are about to wakeUp for a wrong class

### Definition of done

- Everything in one file
- There may be as many classes / functions as you need
- The class that's required to be developed should be called `Serializable`
- It to have a public method `serialize()` that return a string
- It to have a public method `wakeFrom(serialized)` that return new object of the right class or throws an error if it's not possible
- Only enumerable props of (null, object, array, number, string and Date) to be processed
- object props to be treated as simple dictionaries, and all their content to be processed recursively by the same rules
- array props -- all the members to be serialized by the same rules
- number props, NaN as well as Infinities must be not lost after the serialization, -0 to be turned to 0
- Date props to be restored as Date objects after waking up
- any attempt to wake from a serialized line of other class must throw an exception
- non-valid / non-expected content of serialized line must call for an exception in case of waking up
- as a part of this task several examples to be made to demonstrate different cases of usage

### Example of usage the basic class

```javascript
/**
 * REMOVEME To mock the class you to provide us with
 * @typedef {{
 *   serialize(): string,
 *   wakeFrom(serialized: string): Serializable
 * }} Serializable
 */
class UserDTO extends Serializable {
  constructor({firstName, lastName, phone, birth}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${
        this.phone
      }, ${this.birth.toISOString()}`,
    );
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({content, date, author}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class
```

## An extra task

Add a UML Diagram of all the things you have created (png file is ok)
