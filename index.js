let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let timerTxt = document.getElementById("timer");

let interval;
let timerLeft = 25 * 60;

function formattedTime() {
    let mins = Math.floor(timerLeft / 60);
    let secs = timerLeft % 60;
    let formatted = `${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;
    timerTxt.textContent = formatted;
}

startBtn.onclick = function() {
    interval = setInterval(() => {
        timerLeft--;
        formattedTime();
        if (timerLeft === 0) {
            clearInterval(interval);
            alert("Times Up!!!");
            timerLeft = 1500;
            formattedTime();
        }
    }, 1000);
};

stopBtn.onclick = function() {
    clearInterval(interval);
};

resetBtn.onclick = function() {
    clearInterval(interval);
    timerLeft = 25 * 60;
    formattedTime();
};
