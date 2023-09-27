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

// TAB SLIDER
// const tabContentBlocks = document.querySelectorAll(".tab_content_block");
// const tabsBlock = document.querySelectorAll(".tab_content_item");
// const parentTabs = document.querySelector(".tab_content_items");

// const hideTabContent = () => {
//   tabContentBlocks.forEach((tabContentBlock) => {
//     tabContentBlock.style.display = "none";
//   });
//   tabItems.forEach((tabItem) => {
//     tabItem.classList.remove(".tab_content_item_active");
//   });
// };
// const showTabContent = (indexElement = 3) => {
//   tabContentBlocks[indexElement].style.display = "block";
//   tabItems[indexElement].classList.add(".tab_content_item_active");
// };
// hideTabContent();
// showTabContent();

// parentTabs.onclick = (event) => {
//   if (event.target.classList.contains(".tab_content_items")) {
//     tabItems.forEach((tabItem, tabIndex) => {
//       if (event.target == tabItem) {
//         hideTabContent();
//         showTabContent(tabIndex);
//       }
//     });
//   }
// };

// Convert

const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const aed = document.querySelector("#aed");

const convert = (element, target1, target2, currency) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/covert.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
      const response = JSON.parse(request.response);
      if (currency === "som") {
        target1.value = (element.value / response.usd).toFixed(2);
        target2.value = (element.value / response.aed).toFixed(2);
      } else if (currency === "usd") {
        target1.value = (element.value * response.usd).toFixed(2);
        target2.value = ((element.value * response.usd) / response.aed).toFixed(
          2
        );
      } else if (currency === "aed") {
        target1.value = (element.value * response.aed).toFixed(2);
        target2.value = ((element.value * response.aed) / response.usd).toFixed(
          2
        );
      }

      element.value === "" && (target2.value = "");
      element.value === "" && (target1.value = "");
    };
  };
};

convert(som, usd, aed, "som");
convert(usd, som, aed, "usd");
convert(aed, som, usd, "aed");

// CARD SWITCHER
const card = document.querySelector(".card");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
let count = 1;
fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
  .then((response) => response.json())
  .then((data) => {
    card.innerHTML = `<p>${data.title}</p>
      <p style="color": ${data.completed ? "green" : "red"}>${
      data.completed
    }</p>
      <span>${data.id}</span>`;
  });

btnNext.onclick = () => {
  count++;
  if (count > 200) {
    count -= 200;
  }
  fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then((response) => response.json())
    .then((data) => {
      card.innerHTML = `<p>${data.title}</p>
      <p style="color": ${data.completed ? "green" : "red"}>${
        data.completed
      }</p>
      <span>${data.id}</span>`;
    });
};

btnPrev.onclick = () => {
  count--;
  if (count < 1) {
    count += 200;
  }
  fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then((response) => response.json())
    .then((data) => {
      card.innerHTML = `<p>${data.title}</p>
      <p style="color": ${data.completed ? "green" : "red"}>${
        data.completed
      }</p>
      <span>${data.id}</span>`;
    });
};

fetch(`https://jsonplaceholder.typicode.com/todos/`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
