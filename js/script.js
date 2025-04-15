class human{
	constructor(name) {
		this.name = name;
	}
	sayHello() {
		return `Hello I'm ${this.name}`
	}
}

let marco = new human ('marco');

document.getElementById("name").innerHTML = marco.sayHello();
