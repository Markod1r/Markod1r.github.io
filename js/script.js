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

function tema() {
	return;
}

let marco = new human("marco");

document.getElementById("name").innerHTML = marco.sayHello();
document.getElementById("tema").addEventListener("click", tema);
