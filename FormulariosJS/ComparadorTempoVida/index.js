function tempoDeVida(){
  const dataDeNascimento= document.querySelector("#nasc").value
  const dataSeparada = dataDeNascimento.split("-")
  const dia = parseInt(dataSeparada[2])
  const mes = parseInt(dataSeparada[1])
  const ano = parseInt(dataSeparada[0])
  
  const dataAtual = new Date()
  
  const diaAtual= dataAtual.getDate()
  const mesAtual= dataAtual.getMonth()+1
  const anoAtual= dataAtual.getFullYear()

  const diasDeVida=  diaAtual
  const mesesDeVida= mesAtual - mes 
  const anosDeVida= anoAtual - ano

  const diasTotaisDeVida= anosDeVida * 365 + mesesDeVida * 30 + diasDeVida
  
  const sexo=document.querySelector("#sexo").value
  let diasVidaRestante
  if (sexo == "H"){
    const longividadeDoHomem= 73.1 * 365
    diasVidaRestante= Math.floor(longividadeDoHomem - diasTotaisDeVida)
  } else if (sexo == "M"){
    const longividadeDaMulher= 80.1 * 365
    diasVidaRestante= Math.floor(longividadeDaMulher - diasTotaisDeVida)
    
  }

  const tempoRestante=document.querySelector(".tempoRestante")
  tempoRestante.innerHTML=`Dias de Vida Restantes: ${diasVidaRestante}`
  console.log(`Dias de Vida Restantes: ${diasVidaRestante}`)
}