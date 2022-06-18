const btao = document.querySelector("#iniciar");
btao.addEventListener("click", bomba);

let timeExplosao;
let counter;
let timeLeft = 0;
const musica = new Audio('audio/ticktack.mp3');

function bomba(){
    btao.disabled = true;
    document.querySelector("#bomb-explosao").style.display = "none";
    document.querySelector("#bomb-lig").style.display = "flex";
    document.querySelector("#bomb-desl").style.display = "none";
    const explosao = document.querySelector("#explosao");
    timeLeft = 60;
    explosao.innerHTML = timeLeft;
    counter = setInterval (verifyCounter, 1000);
};

function verifyCounter(){
    timeLeft --;
    switch (timeLeft) {
        case 0:
            bombExplosao();
            break;
        default:
            break;
    }
    explosao.innerHTML = timeLeft;
    musica.play();
};

function bombExplosao(){
    document.querySelector("#bomb-lig").style.display = "none";
    document.querySelector("#bomb-desl").style.display = "none";
    document.querySelector("#bomb-explosao").style.display = "flex";
    const music = new Audio('audio/explodir.mp3');
    music.play();
    clearInterval(counter);
    btao.disabled = false;
};

const click = document.querySelector("#bomb-link");
click.addEventListener("click", desarm);

function desarm(){
    const desarmBomb = document.querySelector("#explosao");
    desarmBomb.innerHTML = "Bomba desarmada";
    clearInterval(counter);
    document.querySelector("#bomb-lig").style.display = "none";
    document.querySelector("#bomb-desl").style.display = "flex";
    btao.disabled = false;
};