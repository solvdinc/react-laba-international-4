class OldCalc {
  operations(value1, value2, operation) {
    switch (operation) {
      case 'add':
        return value1 + value2;
      case 'sub':
        return value1 - value2;

      default:
        return NaN;
    }
  }
}

class NewCalc {
  add(value1, value2) {
    return value1 + value2;
  }

  sub(value1, value2) {
    return value1 - value2;
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc();
  }

  operations(value1, value2, operation) {
    switch (operation) {
      case 'add':
        return this.calc.add(value1, value2);
      case 'sub':
        return this.calc.sub(value1, value2);

      default:
        return NaN;
    }
  }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(10, 5, 'add'));

const newCalc = new NewCalc();
console.log(newCalc.add(10, 5));

const adapterCalc = new CalcAdapter();
console.log(adapterCalc.operations(10, 5, 'add'));
// console.log(adapterCalc.add(10, 5));
