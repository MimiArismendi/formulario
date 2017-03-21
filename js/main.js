var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");

function translate(){

  var title = document.getElementById("form-signin-heading");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Inicar Sesión";
}

translate();

function mostrar(){

  var formulario = document.getElementById("Datos formulario");
  var resultado = document.getElementById("resultado");

  formulario.innerHTML = "Datos formulario";
  resultado.innerHTML = "El correo ingresado es: <br>" + email.value + "<br>" + "la clave ingresada es: <br>" + password.value;
}
