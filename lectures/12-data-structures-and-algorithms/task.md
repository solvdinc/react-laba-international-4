# Data structures and algorithms practice

## Overview

We have a case we receive a bunch of data as an array of objects. Each object have `sku` key of UUID string. We provide our hypothetical users with "search by sku" feature.
The incoming data is not ordered (not sorted).

So the task is to implement two search engines: straight search<sup>1</sup> and binary search. Then measure which one works better.

<sup>1</sup>(straight search means check elements one by one)

### Definition of done

- All your code is in one file
- file `./MOCK_DATA.js` is required and used as a source of incoming data. However, you are free to extend it
- At least two search algorithms (engines) are implemented and tested (measurements made)
- At least straight and binary search they are
- Tests and performance tests are written
- `needleList` is just a given example you are welcome to modify and improve
- The results of performance test are printed using `console`
- They are saved to a log file (e.g. `node solution.js > result.log`), that log file is attached to your solution and pushed to the github

### Example of needles SKU list

```javascript
const needleList = [
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  '9c4a0320-1d82-4a46-83b3-511ddffb7ee6',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
];
```

## An extra task<sup>\*</sup>

Implement the sorting on your own, using any sorting algorithm that you think fits this case.
