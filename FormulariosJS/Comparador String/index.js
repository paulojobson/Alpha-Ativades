function comparar(){
  var String1= document.getElementById("String1").value
  var tamanhoNumero1=String1.length
  var String2= document.getElementById("String2").value
  var tamanhoNumero2=String2.length
  var elementoResultado=document.querySelector("#resultado")
  
  if (tamanhoNumero1>tamanhoNumero2){
      elementoResultado.innerHTML='String1 é maior que String2';
  }
  else if(tamanhoNumero1<tamanhoNumero2){
    elementoResultado.innerHTML='String1 é menor que String2';
  }
  else {
    elementoResultado.innerHTML='String1 é igual a String2';
  }


}