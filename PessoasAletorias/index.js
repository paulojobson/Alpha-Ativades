function sorteiaPessoas(){
  let aleatorio= Math.random();
  let elementoResult=document.querySelector("#result")
  if(aleatorio<0.483) { 
    aleatorio= Math.random();
    if(aleatorio<0.167){
      console.log("Homem Idoso")
      elementoResult.innerHTML= 'Homem Idoso'
    }else{
      console.log ("Homem Jovem")
      elementoResult.innerHTML= 'Homem Jovem'
    }

  } else {
    aleatorio= Math.random();
    if(aleatorio<0.167){
      elementoResult.innerHTML= 'Mulher Idosa'
      console.log("Mulher Idosa")

    }else{
      console.log ("Mulher Jovem")
      elementoResult.innerHTML= 'Mulher Jovem'
    }
  }



}

/*#### DADOS: ####
51,7% de mulheres 
48,3% de homens

16,7% de idosos
83,3% de não-idosos

#### EXEMPLO ####
conjunto de 1000 pessoas 
(517 mulheres + 483 homens)

Mulheres Idosas > 16,7% de 517 = 86
Homens Idosos   > 16,7% de 483 = 81


#### SORTEIO ####
nº 1 ao 517 - "mulher" 
nº 1 ao 86 - "mulher & idosa"
nº 87 ao 517 "mulher & não idosa

nº 518 ao 1000 - "homem" 
nº 518 a 599 - "homem & idoso"
nº 600 ao 1000 "homem & não idoso"*/