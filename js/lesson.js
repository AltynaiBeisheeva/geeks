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
const parentTabs = document.querySelector(".tab_content_items");

const hideTabContent = () => {
  tabContentBlocks.forEach((tabContentBlock) => {
    tabContentBlock.style.display = "none";
  });
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove(".tab_content_item_active");
  });
};
const showTabContent = (indexElement = 3) => {
  tabContentBlocks[indexElement].style.display = "block";
  tabItems[indexElement].classList.add(".tab_content_item_active");
};
hideTabContent();
showTabContent();

parentTabs.onclick = (event) => {
  if (event.target.classList.contains(".tab_content_items")) {
    tabItems.forEach((tabItem, tabIndex) => {
      if (event.target == tabItem) {
        hideTabContent();
        showTabContent(tabIndex);
      }
    });
  }
};
