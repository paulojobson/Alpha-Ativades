
function sorteiaNumeros () {
  let min= parseFloat(document.getElementById("min").value) 
  let max= parseFloat(document.getElementById("max").value)
  let elementoResultado=document.querySelector("#result")
console.log(min+" "+max)

  if (Number.isInteger(min) == false || Number.isInteger(max) == false ){
    console.log ('um dos valores não é um número ' )
    elementoResultado.innerHTML="um dos valores não é um número"
  
  }

  if (min>max){
    console.log ('o maximo deve ser maior que o minimo')
    elementoResultado.innerHTML="o maximo deve ser maior que o minimo"
 
  }
  else if (!Number.isInteger(min) ||
  !Number.isInteger(max) ){
    console.log ('ao menos 1 dos valores não é inteiro')
    elementoResultado.innerHTML="ao menos 1 dos valores não é inteiro"
 
  }
  else{  let result =Math.random()* (max-min)+min
    result=parseInt(result)
    elementoResultado.innerHTML=result}


}