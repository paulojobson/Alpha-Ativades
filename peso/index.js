const calcular =document.getElementById('calcular');


function IMC (){
const nome =document.getElementById('nome').value;
const altura =document.getElementById('altura').value;
const peso =document.getElementById('peso').value;
const resultado =document.getElementById('resultado');

if (nome.value !=='' && altura !== '' && peso !==''){

  const valorIMC = (peso/ (altura*altura)).toFixed(1);

  resultado.textContent = valorIMC;

  let classificacao ='';

  if (valorIMC<18.5){
    classificacao = 'abaixo do peso.';
  }
  else if(valorIMC < 25) {
    classificacao = 'peso ideal.';
  }

  else if(valorIMC < 30) {
    classificacao = 'um pouco acima do peso.';
  }

  else if(valorIMC < 35) {
    classificacao = 'você esta com obesidade grau I.';
  }

  else if(valorIMC < 40) {
    classificacao = 'você esta com obesidade grau II.';
  }

  else {
    classificacao = 'você esta com obesidade grau III.';
  }

  resultado.textContent = `${nome} Seu IMC é ${valorIMC} e você está ${classificacao}`;
}
else{
  resultado.textContent = 'Preencha todos os campos!!'
  
}

}

calcular.addEventListener('click', IMC);