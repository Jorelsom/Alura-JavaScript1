var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click",function(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function(){

    if(xhr==200){
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente) {
        adicionaPaciente(paciente);
      });  
    }else{
      console.log(xhr)
    }
  });
  xhr.send();

})