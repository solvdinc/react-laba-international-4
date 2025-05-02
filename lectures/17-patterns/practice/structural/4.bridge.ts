/**
 * Bridge is a structural design pattern that lets you split a large class
 * or a set of closely related classes into two separate hierarchies—abstraction
 * and implementation—which can be developed independently of each other.
 */

interface Device {
	isEnabled(): boolean;
	enable(): void;
	disable(): void;
	setVolume(percent: number): void;
	getVolume(): number;
}

class TV implements Device {
	private on = false;
	private volume = 10;

	isEnabled(): boolean {
		return this.on;
	}

	enable(): void {
		this.on = true;
		console.log('TV is now ON.');
	}

	disable(): void {
		this.on = false;
		console.log('TV is now OFF.');
	}

	setVolume(percent: number): void {
		this.volume = percent;
		console.log(`TV volume set to ${this.volume}`);
	}

	getVolume(): number {
		return this.volume;
	}
}

class Radio implements Device {
	private on = false;
	private volume = 20;

	isEnabled(): boolean {
		return this.on;
	}

	enable(): void {
		this.on = true;
		console.log('Radio is now ON.');
	}

	disable(): void {
		this.on = false;
		console.log('Radio is now OFF.');
	}

	setVolume(percent: number): void {
		this.volume = percent;
		console.log(`Radio volume set to ${this.volume}`);
	}

	getVolume(): number {
		return this.volume;
	}
}

class RemoteControl {
	protected device: Device;

	constructor(device: Device) {
		this.device = device;
	}

	togglePower(): void {
		if (this.device.isEnabled()) {
			this.device.disable();
		} else {
			this.device.enable();
		}
	}

	volumeDown(): void {
		this.device.setVolume(this.device.getVolume() - 10);
	}

	volumeUp(): void {
		this.device.setVolume(this.device.getVolume() + 10);
	}
}

class AdvancedRemoteControl extends RemoteControl {
	mute(): void {
		this.device.setVolume(0);
		console.log('Device muted.');
	}
}

const tv = new TV();
const radio = new Radio();

const remote = new RemoteControl(tv);
remote.togglePower(); // TV is now ON.
remote.volumeUp(); // TV volume set to 20

const advancedRemote = new AdvancedRemoteControl(radio);
advancedRemote.togglePower(); // Radio is now ON.
advancedRemote.mute(); // Radio volume set to 0

export {};
