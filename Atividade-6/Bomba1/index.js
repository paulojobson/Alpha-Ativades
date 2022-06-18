    const btao = document.querySelector("#iniciar");
    btao.addEventListener("click", bomba)

    function bomba(){
        document.querySelector("#bomb-lig").style.display = "flex";
        document.querySelector("#bomb-desl").style.display = "none";
        tempExplosao = setTimeout(bombExplosao, 10000);
        const explosao = document.querySelector("#explosao");
        explosion.innerHTML = timeLeft;
        counter = setInterval (verifyCounter, 1000);
        explosao.innerHTML = "10 segundos";
    };



    function bombExplosao(){
        document.querySelector("#bomb-lig").style.display = "none";
        document.querySelector("#bomb-desl").style.display = "none";
        document.querySelector("#bomb-explosao").style.display = "flex";
        const music = new Audio('audio/explodir.mp3');
        music.play();
    }


    function desarma(){
        const desarmBomb = document.querySelector("#explosao");
        desarmBomb.innerHTML = "Bomba desarmada";
        clearTimeout(tempExplosao);
        document.querySelector("#bomb-lig").style.display = "none";
        document.querySelector("#bomb-desl").style.display = "flex";

    }
    const click = document.querySelector("#bomb-link");
    click.addEventListener("click", desarma);
