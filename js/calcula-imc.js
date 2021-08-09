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

  var pesoValido = validaPeso(peso);
  var alturaValido = validaAltura(altura);

  if(!validaPeso){
    tdImc.textContent = "Peso inválida";
    pacientes.classList.add("paciente-invalido");

  }else if(!validaAltura){
    tdImc.textContent = "Altura inválida";
    pacientes.style.backgroundColor = "lightcoral";

  }else if(!validaAltura && !validaPeso){  
    tdImc.textContent = "Peso e Altura inválida";
    pacientes.style.backgroundColor = "lightcoral";
  }

  if(validaAltura && validaPeso){
    var imc = calcularImc(peso,altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  if(peso > 0 && peso <= 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura > 0 && altura <= 3){
    return true;
  }else{
    return false;
  }
}

function calcularImc(peso,altura){
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
