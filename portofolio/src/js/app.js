window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add("nav-fixed");
  } else header.classList.remove("nav-fixed");
};

const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#navbar-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("scale-0");
});
