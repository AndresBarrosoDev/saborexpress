const collapse = document.getElementsByClassName("collapse");
const header = document.getElementById("header");
const barsIcon = document.getElementById("bars-icon");
const crossIcon = document.getElementById("cross-icon");
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
const hide = (el) => el.style.setProperty("display", "none");
const show = (el) => el.style.setProperty("display", "block");
const noHeight = (el) => el.style.setProperty("height", "0")
const normalHeight = (el) => el.style.setProperty("height", `${crossIcon.scrollHeight}px`);
const fullHeight = (el) => el.style.setProperty("height", `${barsIcon.scrollHeight+(rem*11.938)}px`);
const backgroundColor = (el) => el.style.setProperty("background-color", "#FFE376");
const noBackgroundColor = (el) => el.style.setProperty("background-color", "#FFBD00");

for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    let navigation = this.nextElementSibling;
    if (header.style.height !== "" && header.style.height !== barsIcon.scrollHeight + "px") {
      noHeight(navigation);
      normalHeight(header);
      noBackgroundColor(header)
      show(barsIcon);
      hide(crossIcon);
    } else {
      fullHeight(header);
      backgroundColor(header)
      hide(barsIcon);
      show(crossIcon);
      fullHeight(navigation);
    }
  });
}
