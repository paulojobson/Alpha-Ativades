function objectFromForm () {
  const peso = document.getElementById("peso").value
  const altura = document.getElementById("altura").value
  const dia = document.getElementById("dia").value
  const mes = document.getElementById("mes").value
  const ano = document.getElementById("ano").value
  const sexo = document.getElementById("selector").value

  if (isNaN(peso)) {
    throw new Error('Field “weight” is invalid!')
  }
  if (isNaN(altura) || !Number.isInteger(eval(altura))) {
    throw new Error('Field “height” is invalid!')
  }

  if (dia > 31 || dia < 1 || mes > 12 || mes < 1) {
    throw new Error('Field “birthDate” is invalid!')
  }

  if (new Date (ano,mes-1,dia)> new Date()) {
    throw new Error('Field “birthDate” is invalid!')
  }

  if(sexo == 5) {
    throw new Error('Field “gender” is invalid!')
  }

  const user = {
    name: document.getElementById("nome").value,
    weight: parseFloat(peso),
    height: parseInt(altura),
    birthDate: new Date(ano,mes-1,dia),
    gender: sexo
  }
  if (user.name.length < 5) {  
    throw new Error('Field “name” is invalid!')
  }
  console.log(user)
  console.log(JSON.stringify(user))
  
}

