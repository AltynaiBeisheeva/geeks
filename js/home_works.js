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
  if (position > 450) return;
  document.querySelector(".child_block").style.left = position + "px";
  setTimeout(() => {
    step();
  }, 16);
}

step();
