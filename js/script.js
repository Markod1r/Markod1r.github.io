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

let card = document.querySelectorAll(".card");

card.forEach((card) => {
	card.addEventListener("mouseover", () => {
		card.style.transform = "scale(1.2)";
	});
	card.addEventListener("mouseout", () => {
		card.style.transform = "scale(1)";
	});
});