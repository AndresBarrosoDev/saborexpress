const collapse = document.getElementsByClassName("collapse-button");
const header = document.querySelector("header");
const barsIcon = document.getElementById("bars-icon");
const crossIcon = document.getElementById("cross-icon");
const hide = (el) => el.style.setProperty("display", "none");
const show = (el) => el.style.setProperty("display", "block");
const noHeight = (el) => el.style.setProperty("height", "0px");
const fullHeight = (el) => el.style.setProperty("height", `${el.scrollHeight}px`);


for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    this.classList.toggle("active");
    header.classList.toggle("active");
    let navigationMenu = this.nextElementSibling;
    if (navigationMenu.style.height !== "" && navigationMenu.style.height !== "0px") {
      console.log("navigationMenu.style.height: close", navigationMenu.style.height)
      show(barsIcon);
      hide(crossIcon);
      noHeight(navigationMenu);
    } else {
      console.log("navigationMenu.style.height: opens", navigationMenu.style.height)
      hide(barsIcon);
      show(crossIcon);
      fullHeight(navigationMenu);
    }
  });
}