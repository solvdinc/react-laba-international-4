interface Command {
	execute(): void;
	undo(): void;
}

class Light {
	turnOn() {
		console.log('The light is on');
	}

	turnOff() {
		console.log('The light is off');
	}
}

class LightOnCommand implements Command {
	constructor(private light: Light) {}

	execute(): void {
		this.light.turnOn();
	}

	undo(): void {
		this.light.turnOff();
	}
}

class LightOffCommand implements Command {
	constructor(private light: Light) {}

	execute(): void {
		this.light.turnOff();
	}

	undo(): void {
		this.light.turnOn();
	}
}

class RemoteControl {
	private command!: Command;

	setCommand(command: Command) {
		this.command = command;
	}

	pressButton() {
		this.command.execute();
	}

	pressUndo() {
		this.command.undo();
	}
}

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton(); // Output: The light is on
remote.pressUndo(); // Output: The light is off

remote.setCommand(lightOff);
remote.pressButton(); // Output: The light is off
remote.pressUndo(); // Output: The light is on
