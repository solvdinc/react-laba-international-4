const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  if (y === 0) {
    throw 'Cannot divide by 0!';
  }
  return x / y;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
