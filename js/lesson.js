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
const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabsBlock = document.querySelectorAll(".tab_content_item");
const parentTabs = document.querySelector(".tab_contents_block"); // Изменен селектор

const hideTabContent = () => {
  tabContentBlocks.forEach((tabContentBlock) => {
    tabContentBlock.style.display = "none";
  });
  tabsBlock.forEach((tabItem) => {
    tabItem.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (indexElement) => {
  tabContentBlocks[indexElement].style.display = "block";
  tabsBlock[indexElement].classList.add("tab_content_item_active");
};

hideTabContent();
showTabContent(0);

parentTabs.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabsBlock.forEach((tabItem, tabIndex) => {
      if (event.target == tabItem) {
        hideTabContent();
        showTabContent(tabIndex);
      }
    });
  }
};

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

const todos = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${count}`
    );
    const data = await response.json();

    card.innerHTML = `<p>${data.title}</p>
        <p>${data.completed}</p>
        <span>${data.id}</span>`;
  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  }
};

todos();

btnNext.onclick = () => {
  count++;
  if (count > 200) {
    count -= 200;
  }
  todos();
};

btnPrev.onclick = () => {
  count--;
  if (count < 1) {
    count += 200;
  }
  todos();
};
// Weather
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".cityName");

const DEFAULT_API = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "e417df62e04d3b1b111abeab19cea714";

cityName.oninput = async (event) => {
  try {
    const response = await fetch(
      `${DEFAULT_API}?q=${event.target.value}&appid=${API_KEY}`
    );
    const data = await response.json();
    city.innerHTML = data.name;
    const celsiusTemp = Math.round(data.main.temp - 273.15);
    temp.innerHTML = celsiusTemp + "&deg;C";
  } catch (error) {
    city.innerHTML = "Такого города нет";
  }
};
