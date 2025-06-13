const {add, subtract, multiply, divide} = require('./calculator');

describe('valid additions', () => {
  test('1 + 1 = 2', () => {
    expect(add(1, 1)).toEqual(2)
  });

  test('10 + 20 = 30', () => {
    expect(add(10, 20)).toEqual(30)
  });
});

describe('valid subtractions', () => {
  test('10 - 2 = 8', () => {
    expect(subtract(10, 2)).toEqual(8)
  });

  test('87 - 523 = -436', () => {
    expect(subtract(87, 523)).toEqual(-436)
  });
});

describe('valid multiplications', () => {
  test('2 * 4 = 8', () => {
    expect(multiply(2, 4)).toEqual(8)
  });

  test('1000 * 8.5 = 8500', () => {
    expect(multiply(1000, 8.5)).toEqual(8500)
  });
});

describe('valid divisions', () => {
  test('20 / 2 = 10', () => {
    expect(divide(20, 2)).toEqual(10)
  });

  test('99 / 9 = 11', () => {
    expect(divide(99, 9)).toEqual(11)
  });
});

describe('divison error cases', () => {
  test('20 / 0 throws', () => {
    expect(() => {
      expect(divide(20, 0))
    }).toThrow()
  });
});
