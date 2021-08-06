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

var bAdd = document.querySelector("#adicionar-paciente");

bAdd.addEventListener("click", function (event){
  event.preventDefault();
  
  var form = document.querySelector("#form-adiciona");
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");
    
  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent  = 0;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});
