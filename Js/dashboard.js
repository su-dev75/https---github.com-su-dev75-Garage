"use strict";
//Links

const sideLinksEl = document.querySelectorAll(
  ".sidebar .side-menu li a:not(.logout)"
);

sideLinksEl.forEach((links) => {
  const li = links.parentElement;
  links.addEventListener("click", () => {
    sideLinksEl.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

//Sidebar

const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sideBarEl = document.querySelector(".sidebar");

//menus

menuBar.addEventListener("click", () => {
  sideBarEl.classList.toggle("close");
});

const searchBtn = document.querySelector(
  ".content nav form .form-input button"
);
const searchIcon = document.querySelector(
  ".content nav form .form-input button .bx"
);

const searchForm = document.querySelector(".content nav form");

searchBtn.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault;
    searchForm.classList.toggle("show");

    if (searchForm.classList.contains("show")) {
      searchIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

//Resize

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    sideBarEl.classList.add("close");
  } else {
    sideBarEl.classList.remove("close");
  }
});
