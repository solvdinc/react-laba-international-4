class OfficialDealer {
	constructor() {
		this.customers = [];
	}

	orderAuto(customer, auto, info) {
		const name = customer.getName();
		console.log(`Order name: ${name}. Order auto is ${auto}`);
		console.log(`Additional info: ${info}`);
		this.addToCustomerList(name);
	}

	addToCustomerList(name) {
		this.customers.push(name);
	}

	getCustomerList() {
		return this.customers;
	}
}

class DiffDealer extends OfficialDealer {}

class Customer {
	constructor(name, dealerMediator) {
		this.name = name;
		this.dealerMediator = dealerMediator;
	}

	getName() {
		return this.name;
	}

	makeOrder(auto, info) {
		this.dealerMediator.orderAuto(this, auto, info);
	}
}

const mediator = new OfficialDealer();
const mediatorSecond = new DiffDealer();

const misha = new Customer('Misha', mediator);
const dima = new Customer('Dima', mediator);
const bruno = new Customer('Dima', mediatorSecond);

misha.makeOrder('Tesla', 'With autopilot');
dima.makeOrder('BMW', '320 hourses');
bruno.makeOrder('BMW', '320 hourses');

console.log(mediator.getCustomerList());
