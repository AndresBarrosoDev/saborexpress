// Menu button
document.addEventListener("DOMContentLoaded", function() {
    let navIcon = document.querySelectorAll("#nav-icon");
    for (var i = 0; i < navIcon.length; i++) {
      navIcon[i].addEventListener("click", function() {
        this.classList.toggle("open");
      });
    }
  });

// Collapse navigation
const collapse = document.getElementsByClassName("collapse");
const header = document.getElementById("header");
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
const hide = (el) => el.style.setProperty("display", "none");
const show = (el) => el.style.setProperty("display", "block");
const noHeight = (el) => el.style.setProperty("height", "0")
const normalHeight = (el) => el.style.setProperty("height", `${4.125*rem}px`);
const fullHeight = (el) => el.style.setProperty("height", `${(4.125*rem)+(rem*10)}px`);
const backgroundColor = (el) => el.style.setProperty("background-color", "#FFE376");
const noBackgroundColor = (el) => el.style.setProperty("background-color", "#FFBD00");

for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    let navigation = this.nextElementSibling;
    if (header.style.height !== "" && header.style.height !== (4.125*rem) + "px") {
      noHeight(navigation);
      normalHeight(header);
      noBackgroundColor(header)
    } else {
      fullHeight(header);
      backgroundColor(header)
      fullHeight(navigation);
    }
  });
}
