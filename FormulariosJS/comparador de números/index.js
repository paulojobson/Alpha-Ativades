function comparar(){
  var numero1= document.getElementById("Nume1").value
  numero1 = parseInt(numero1)
  var numero2= document.getElementById("Nume2").value
  numero2 = parseInt(numero2)
  var elementoResultado=document.querySelector("#resultado")
  if (numero1>numero2){
      elementoResultado.innerHTML="Primeiro é maior que Segundo";
  }
  else if( numero1<numero2){
    elementoResultado.innerHTML="Primeiro é menor que Segundo";
  }
  else{
    elementoResultado.innerHTML="Primeiro é igual ao Segundo";
  }
}
