// Modal

const modal = document.querySelector(".modal");
const closeModelButton = document.querySelector(".modal_close");
const modalTrigger = document.querySelector("#btn-get");

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};
const closeModel = () => {
  modal.style.display = "none";
};

const scrollHandler = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
    openModal();
};

window.addEventListener("scroll", scrollHandler);

// Post data

const form = document.querySelector("form");
const postData = (formElement) => {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-type", "application/json");

    const formData = new FormData(formElement);
    const obj = {};
    formData.forEach((item, index) => {
      obj[index] = item;
    });

    request.send(JSON.stringify(obj));
  });
};
