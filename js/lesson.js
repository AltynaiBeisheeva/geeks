// Phone validator
const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

// const regExp = new RegExp("n","ig")
const regExp = /^\+996 [5792]\d{2} \d{2}-\d{2}-\d{2}$/;
phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "NO";
    phoneResult.style.color = "red";
  }
};
