const selectElement = document.getElementById("selector");
const selectImg = document.getElementById("carro-images");
const selectText = document.getElementById("carro-data");
let valueOption;

selectElement.addEventListener("change", changeContent);

function changeContent(){
    valueOption = selectElement.value;
    if(valueOption == 1){
        selectImg.setAttribute("src", "golfGti.jpg");
        selectText.innerHTML = "Nome: Golf Gti <br>Fabricante: Volkswagen<br> Velocidade: 0-238km";
    } else if(valueOption == 2){
        selectImg.setAttribute("src", "impala.jpg");
        selectText.innerHTML = "Nome: Impala <br>Fabricante: Chevrolet<br> Velocidade: 0-96km";
    } else if(valueOption == 3){
        selectImg.setAttribute("src", "lancer.jpg");
        selectText.innerHTML = "Nome:Lancer Evo X com versão de 480 cv <br>Fabricante:Mitsubishi <br> Velocidade: 0-210,2km";
    }
};
