'use client';

import {useState} from 'react';
import {people} from '@/mock/people';

const List = () => {
  const [list, setList] = useState(people);

  const removeFirstElement = () => {
    const newList = list.filter(item => item.id !== 0);

    setList(newList);
  };

  const removeMiddleElement = () => {
    setList(list.slice(1));
  };

  const removeLastElement = () => {
    const temp = [...list];
    temp.splice(-1);
    setList(temp);
  };

  const addItem = () => {
    const temp = [...list];
    temp.push({
      id: 5, // Used in JSX as a key
      name: 'Mike',
      profession: 'developer',
      accomplishment: 'white dwarf star mass calculations',
      imageId: 'lrWQx8l',
    });
    setList(temp);
  };

  return (
    <ul>
      {list.map(person => (
        <li key={person.id}>
          <p>
            <b>{person.name}</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      ))}
      <button onClick={removeFirstElement}>Remove first element</button>
      <button onClick={removeMiddleElement}>Remove middle element</button>
      <button onClick={removeLastElement}>Remove last element</button>
      <button onClick={addItem}>Add element</button>
    </ul>
  );
};

export default List;
