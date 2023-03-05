/// Main JavaScript File
/// Here we import all the global JavaScript files we need for our project.

import "../global-styles/style.scss";

//Marks active music bar
let boxes = document.querySelectorAll(".music-list-box");
const handleActive = (e) => {
  boxes.forEach((box) => {
    box.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};
boxes.forEach((box) => {
  box.addEventListener("click", handleActive);
});

//Expands the list
let items = document.querySelectorAll(".music-list-box-menu .menu-button");
let dropDown = document.querySelector(".drop-down-menu");
const handleOpenMenu = (e) => {
  dropDown.classList.add("active");
};
items.forEach((item) => {
  item.addEventListener("click", handleOpenMenu);
});
