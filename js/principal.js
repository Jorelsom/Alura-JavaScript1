var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i<paciente.length;i++){
  var pacientes = paciente[i];

  var tdPeso = pacientes.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = pacientes.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = pacientes.querySelector(".info-imc");

  var pesoValido = true;
  var alturaValido = true;

  if(peso <= 0 || peso > 1000){
    pesoValido = false;
    tdImc.textContent = "Peso inválida";
    pacientes.classList.add("paciente-invalido");

  }else if(altura <= 0 || altura > 3){
    alturaValido = false;
    tdImc.textContent = "Altura inválida";
    pacientes.style.backgroundColor = "lightcoral";

  }else if(pesoValido == false && alturaValido == false){  
    tdImc.textContent = "Peso e Altura inválida";
    pacientes.style.backgroundColor = "lightcoral";
  }

  if(pesoValido == true && alturaValido == true){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}


