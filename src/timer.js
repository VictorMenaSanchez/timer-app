let time = 0;
let interval = null;
let lastSetTime = 0;

export function updateDisplay() {
    document.getElementById("timer-display").innerText = time;
}

export function increaseTime() {
    if (time < 59) {
        time++;
        lastSetTime = time;
        updateDisplay();
    }
}

export function decreaseTime() {
    if (time > 0) {
        time--;
        lastSetTime = time;
        updateDisplay();
    }
}

export function startTimer() {
    if (interval) return;
    interval = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(interval);
            interval = null;
        }
    }, 1000);
}

export function resetTimer() {
    clearInterval(interval);
    interval = null;
    time = lastSetTime;
    updateDisplay();
}