class Bank {
  verify(amount) {
    return amount < 999;
  }
}

class CreditHistory {
  check(name) {
    return true;
  }
}

class Balance {
  check(name) {
    //to do api request
    return true;
  }
}

// facade
class Credit {
  constructor(name) {
    this.name = name;
  }

  applyFor(amount) {
    const bankApproved = new Bank().verify(amount);
    const bankAnswer = bankApproved ? 'approved' : 'declined';
    const isPositiveBalance = new Balance().check(this.name);
    const balance = isPositiveBalance ? 'positive balance' : 'negative balance';
    const isGoodCreditHistory = new CreditHistory().check(this.name);
    const creditHistory = isGoodCreditHistory ? 'good' : 'poor';

    return `${this.name} bank result: ${bankAnswer}, balance: ${balance}, credit history: ${creditHistory}`;
  }
}

const credit = new Credit('Misha');
const creditSmall = credit.applyFor(99);
console.log(creditSmall);
