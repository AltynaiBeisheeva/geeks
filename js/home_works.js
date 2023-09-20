const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");
const parentBlock = document.querySelector(".parent_block");
let position = 0;

const regExp = /^[a-zA-Z0-9_.+-]+@gmail\.com$/;
gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = "NO";
    gmailResult.style.color = "red";
  }
};

function step() {
  position += 1;
  if (position < 410) {
    document.querySelector(".child_block").style.left = position + 35 + "px";
  } else if (position < 820) {
    document.querySelector(".child_block").style.top = position - 410 + "px";
  } else if (position <= 1230) {
    document.querySelector(".child_block").style.left =
      1230 - position + 35 + "px";
  } else if (position < 1640) {
    document.querySelector(".child_block").style.top = 1640 - position + "px";
  }
  if (position == 1640) {
    position = 0;
  }
  setTimeout(() => {
    step();
  }, 1);
}

step();

// Time stop
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const secondsS = document.querySelector("#secondsS");

let intervalId;
let seconds = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    intervalId = setInterval(() => {
      seconds++;
      secondsS.textContent = seconds;
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
    isRunning = true;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(intervalId);
  seconds = 0;
  secondsS.textContent = seconds;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  isRunning = false;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
