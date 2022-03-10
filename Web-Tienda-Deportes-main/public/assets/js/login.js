console.log("login");

const User = {
  email: "admin@admin.com",
  pass: "admin",
};

const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  var loginEmail = document.getElementById("loginEmail");
  var loginPass = document.getElementById("loginPassword");

  if (User.email != loginEmail.value && User.pass != loginPass.value) {
    loginEmail.classList.add("is-invalid");
    loginPass.classList.add("is-invalid");
  } else {
    sessionStorage.setItem("user", User.email);

    formOcultar();
    formDatos();

    console.log(sessionStorage.getItem("user"));
  }
});

function formOcultar() {
  var nav = document.getElementById("pills-tab");
  var navContent = document.getElementById("pills-tabContent");
  nav.classList.add("d-none");
  navContent.classList.add("d-none");
}

function formDatos() {
  var formTitle = document.getElementById("form-title");
  formTitle.innerText = "Mis Datos";
  var datos = document.getElementById("datos");
  datos.classList.remove("d-none");

  var lEmail = document.getElementById("lEmail");
  lEmail.innerText = User.email;

  var lPass = document.getElementById("lPass");
  lPass.innerText = User.pass;
}
