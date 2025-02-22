let minutes = 0;
let seconds = 0;
let interval = null;
let lastSetMinutes = 0;
let lastSetSeconds = 0;

export function updateDisplay() {
    // Mostrar los minutos y segundos con formato MM:SS
    document.getElementById("timer-display").innerText = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function increaseTime() {
    // Añadir un minuto al timer
    if (minutes < 59) {
        minutes++;
    }
    lastSetMinutes = minutes;
    lastSetSeconds = seconds;
    updateDisplay();
}

export function decreaseTime() {
    // Restar un minuto al timer, pero no dejar que sea negativo
    if (minutes > 0) {
        minutes--;
    } else if (seconds > 0) {
        // Si estamos en 0 minutos pero hay segundos, restamos un segundo
        seconds--;
    }
    lastSetMinutes = minutes;
    lastSetSeconds = seconds;
    updateDisplay();
}

export function startTimer() {
    if (interval) return;
    interval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;  // Reiniciamos los segundos a 59 cuando restamos un minuto
        } else {
            clearInterval(interval);
            interval = null;
        }
        updateDisplay();
    }, 1000);
}

export function resetTimer() {
    clearInterval(interval);
    interval = null;
    minutes = lastSetMinutes;
    seconds = lastSetSeconds;
    updateDisplay();
}
