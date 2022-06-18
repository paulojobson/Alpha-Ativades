const btao = document.getElementById("inicio");
btao.addEventListener("click", alarmControl);


const selectMinutes = document.getElementById("minutes");
const selectSeconds = document.getElementById("seconds");
const alertMsg = document.getElementById("alerta");
let minutes;
let seconds;
let countClick = 0;
let timeInSeconds;
let timeDecremented;
let cron;
const music = new Audio('alarme.mp3');


function alarmControl() {
    if (countClick == 0) {
        countClick++;
        return count();
    } else {
        clearInterval(cron);
        music.pause();
    }
};


function count() {
    minutes = parseInt(selectMinutes.value);
    seconds = parseInt(selectSeconds.value);
    cron = setInterval(decrement, 1000);
    timeInSeconds = (minutes * 60 + (seconds));
};


function decrement() {

    let currentMinute = document.getElementById("paragraph-minutes");
    let currentSecond = document.getElementById("paragraph-seconds");
    currentMinute.innerHTML = minutes;
    currentSecond.innerHTML = seconds;

 
    if (minutes == 0 && seconds == 0) {
        clearInterval(cron);
        music.play();
    }

    switch (seconds) {
        case -1:
            minutes--;
            break;
        case 0:
            seconds = 60;
            minutes--;
            break;
        default:
            break;
    }
    seconds--;

    timeDecremented = (minutes * 60 + (seconds));
    if (timeDecremented < timeInSeconds * 0.05) {
        alertMsg.innerHTML = "Alerta! Resta Pouco Tempo Melhor se Apressar.";
    } else {
        timeDecremented--;
    }
};