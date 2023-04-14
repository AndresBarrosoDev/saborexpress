document.addEventListener("DOMContentLoaded", function() {
    let navIcon = document.querySelectorAll("#nav-icon4");
    for (var i = 0; i < navIcon.length; i++) {
      navIcon[i].addEventListener("click", function() {
        this.classList.toggle("open");
      });
    }
  });