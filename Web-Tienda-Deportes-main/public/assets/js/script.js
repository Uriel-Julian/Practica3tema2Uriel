// Programacion desde el DOMError
console.log("Hola Mundo desde el DOM");

// validar formulario newsletter

var formNewsletter = document.getElementById("newsletter");
console.log(formNewsletter);
formNewsletter.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("form");
});
/*
formNewsletter.addEventListener("submit", (e) => {
	e.preventDefault();

	var email = document.getElementById("email");
	if (email.value == "") {
		email.classList.add("is-invalid");
		console.log("if");
	} else {
		email.classList.remove("is-invalid");
		console.log("else");
	}
	console.log("form");
});
*/
