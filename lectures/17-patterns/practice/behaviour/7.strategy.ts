interface RouteStrategy {
	buildRoute: (a: string, b: string) => string;
}

class RoadStrategy implements RouteStrategy {
	buildRoute(a = '', b = '') {
		return `route by road from ${a} to ${b}`;
	}
}

class PublicTransportStrategy implements RouteStrategy {
	buildRoute(a = '', b = '') {
		return `route by by public transport from ${a} to ${b}`;
	}
}

class MyNavigator {
	private routeStrategy: RouteStrategy;

	constructor(strategy: RouteStrategy) {
		this.routeStrategy = strategy;
	}

	public setStrategy(strategy: RouteStrategy) {
		this.routeStrategy = strategy;
	}

	public makeRoute(a = '', b = '') {
		return this.routeStrategy.buildRoute(a, b);
	}
}

const nav = new MyNavigator(new RoadStrategy());
console.log(nav.makeRoute('Kyiv', 'London'));
nav.setStrategy(new PublicTransportStrategy());
console.log(nav.makeRoute('Kyiv', 'London'));
