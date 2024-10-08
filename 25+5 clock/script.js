// Timer variables
let intervalId;
let running = false;
let timeLeft = 1500; // 25 minutes in seconds
let isBreak = false;

// Format time in MM:SS format
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  return formattedMinutes + ":" + formattedSeconds;
}

// Update the timer display
function updateTimer() {
  document.getElementById("time-left").textContent = formatTime(timeLeft);
}

// Start or pause the timer
function startStopTimer() {
  if (running) {
    clearInterval(intervalId);
    running = false;
  } else {
    intervalId = setInterval(decrementTimer, 1000);
    running = true;
  }
}

// Decrement the timer and handle end of session/break
function decrementTimer() {
  timeLeft--;
  updateTimer();

  if (timeLeft === 0) {
    clearInterval(intervalId);
    isBreak = !isBreak;
    if (isBreak) {
      document.getElementById("timer-label").textContent = "Break";
      timeLeft = 300; // 5 minutes break
    } else {
      document.getElementById("timer-label").textContent = "Session";
      timeLeft = 1500; // 25 minutes session
    }
    intervalId = setInterval(decrementTimer, 1000);
  }
}

// Reset the timer to initial values
function resetTimer() {
  clearInterval(intervalId);
  running = false;
  isBreak = false;
  timeLeft = 1500; // 25 minutes session
  updateTimer();
  document.getElementById("timer-label").textContent = "Session";
}

// Event listeners for buttons
document.getElementById("start_stop").addEventListener("click", startStopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// Initial display
updateTimer();