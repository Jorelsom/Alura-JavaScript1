var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValido = true;

if(peso <= 0 || peso > 1000){
  pesoValido = false;
  tdImc.textContent = "Peso inválida";
}else if(altura <= 0 || altura > 3){
  alturaValido = false;
  tdImc.textContent = "Altura inválida";
}else if(pesoValido == false && alturaValido == false){  
  tdImc.textContent = "Peso e Altura inválida";
}

if(pesoValido == true && alturaValido == true){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}


