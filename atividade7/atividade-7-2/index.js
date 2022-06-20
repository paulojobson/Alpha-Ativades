const selCep = document.getElementById("cep");
selCep.addEventListener("input", captura);
selCep.addEventListener("keyup", limiteCaracter);

let cep = "";
let primeiro;

function captura(){
    let numbers = /[^0-9]/;
    selCep.value = selCep.value.replace(numbers,"")
}


function limiteCaracter(){
    cep = selCep.value;
    if(cep.length === 5){

        selCep.value = cep;
        primeiro = cep;
    }

    if(cep.length >= 6){
        console.log(cep);
        let segundo = "-" + cep.substring(5,8);
        console.log(segundo);
        selCep.value = primeiro + segundo;
    }
};