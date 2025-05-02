/**
 * TWO TYPES OF FACTORY:
 * 1 - factory method
 * 2 - abstcract factory
 *
 * simple factory - not pattern, just some method which can create instance of classes
 */

/**
 * SIMPLE FACTORY
 */
interface User {}
class User implements User {}
class Customer implements User {}
class Admin implements User {}

class UserFactory {
	public static create(type: string): User {
		switch (type) {
			case 'user':
				return new User();
			case 'customer':
				return new Customer();
			case 'admin':
				return new Admin();
			default:
				throw new Error('Wrong user type passed.');
		}
	}
}

/**
 * FACTORY METHOD
 */
abstract class Pizza {
	protected name: string;

	constructor(name: string) {
		this.name = name;
	}

	public getName() {
		return this.name;
	}

	public prepare() {
		console.log(this.name + ' pizza' + ' is preparing');
	}

	public bake() {
		console.log(this.name + ' pizza' + ' is baking');
	}

	public cut() {
		console.log(this.name + ' pizza' + ' is cutting');
	}

	public box() {
		console.log(this.name + ' pizza' + ' is boxing');
	}
}

class CheesePizza extends Pizza {
	constructor() {
		super('Cheese');
	}
}

class ClampPizza extends Pizza {
	constructor() {
		super('Clamp');
	}
}

class NYStyleCheesePizza extends Pizza {
	constructor() {
		super('NY style Cheese');
	}
}

class NYStyleClampPizza extends Pizza {
	constructor() {
		super('NY style Clamp');
	}
}

abstract class PizzaStore {
	orderPizza(type: string): Pizza {
		let pizza: Pizza;
		pizza = this.createPizza(type);

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}

	protected abstract createPizza(type: string): Pizza;
}

class NyPizzaStore extends PizzaStore {
	protected createPizza(type: string): Pizza {
		let pizza: Pizza;

		if (type === 'cheese') {
			pizza = new NYStyleCheesePizza();
		} else if (type === 'clamp') {
			pizza = new NYStyleClampPizza();
		} else {
			throw new Error('Incorrect Order');
		}

		return pizza;
	}
}

class ChicagoPizzaStore extends PizzaStore {
	protected createPizza(type: string): Pizza {
		let pizza: Pizza;

		if (type === 'cheese') {
			pizza = new CheesePizza();
		} else if (type === 'clamp') {
			pizza = new ClampPizza();
		} else {
			throw new Error('Incorrect Order');
		}

		return pizza;
	}
}

const nyPizzaStore = new NyPizzaStore();
const chicagoPizzaStore = new ChicagoPizzaStore();

// console.log(nyPizzaStore.orderPizza('cheese'));
// console.log(chicagoPizzaStore.orderPizza('cheese'));
