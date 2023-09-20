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
