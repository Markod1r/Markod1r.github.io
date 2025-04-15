class human {
	constructor(name) {
		this.name = name;
	}
	sayHello() {
		return `
		<span>Hello</span>
        <p>i'm ${this.name}</p>
		`;
	}
}

let marco = new human("marco");

document.getElementById("name").innerHTML = marco.sayHello();
